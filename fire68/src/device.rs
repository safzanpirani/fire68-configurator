//! Device discovery and framed transfers for the FIRE68 vendor interface.

use anyhow::{anyhow, bail, Context, Result};
use hidapi::{HidApi, HidDevice};

use crate::proto::{self, Cmd, Travel, PACKET_SIZE, TRAVEL_BYTES, TRAVEL_ENTRY};

/// The config interface is the one with a vendor-blank usage on the
/// Generic Desktop page. The keyboard and consumer-control collections
/// share the same VID/PID and must not be opened for configuration.
const CONFIG_USAGE_PAGE: u16 = 0x0001;
const CONFIG_USAGE: u16 = 0x0000;

pub struct Fire68 {
    dev: HidDevice,
}

impl Fire68 {
    pub fn open(api: &HidApi) -> Result<Self> {
        let info = api
            .device_list()
            .find(|d| {
                d.vendor_id() == proto::VID
                    && d.product_id() == proto::PID_FIRE68
                    && d.usage_page() == CONFIG_USAGE_PAGE
                    && d.usage() == CONFIG_USAGE
            })
            .ok_or_else(|| {
                anyhow!(
                    "FIRE68 config interface not found (looking for {:04x}:{:04x}, \
                     usage page {:#06x}, usage {:#06x}). Is the keyboard plugged in \
                     over USB rather than wireless?",
                    proto::VID,
                    proto::PID_FIRE68,
                    CONFIG_USAGE_PAGE,
                    CONFIG_USAGE
                )
            })?;
        let dev = info
            .open_device(api)
            .context("opening the FIRE68 config interface")?;
        Ok(Fire68 { dev })
    }

    /// Write one 64-byte packet. Windows HID writes carry a leading report ID.
    fn write_packet(&self, packet: &[u8; PACKET_SIZE]) -> Result<()> {
        let mut framed = [0u8; PACKET_SIZE + 1];
        framed[1..].copy_from_slice(packet);
        self.dev.write(&framed).context("HID write failed")?;
        Ok(())
    }

    /// Send a command and wait for the matching 0xAA reply, skipping any
    /// asynchronous debug/sync reports that arrive in between.
    pub fn transfer(&self, cmd: Cmd, key: u8, addr: u16, payload: &[u8]) -> Result<[u8; PACKET_SIZE]> {
        self.transfer_raw(cmd as u8, key, addr, payload)
    }

    /// Same as `transfer`, but for a command byte that has no `Cmd` variant.
    /// Used by the exploration harness.
    pub fn transfer_raw(&self, cmd: u8, key: u8, addr: u16, payload: &[u8]) -> Result<[u8; PACKET_SIZE]> {
        self.transfer_full(cmd, key, addr, payload.len() as u8, payload)
    }

    /// As `transfer_raw`, with an explicit `len` field for read windows.
    pub fn transfer_full(
        &self,
        cmd: u8,
        key: u8,
        addr: u16,
        len: u8,
        payload: &[u8],
    ) -> Result<[u8; PACKET_SIZE]> {
        self.write_packet(&proto::build_full(cmd, key, addr, len, payload))?;
        for _ in 0..64 {
            let mut buf = [0u8; PACKET_SIZE];
            let n = self
                .dev
                .read_timeout(&mut buf, 1000)
                .context("HID read failed")?;
            if n == 0 {
                bail!("timed out waiting for a reply to command {:#04x}", cmd);
            }
            match buf[0] {
                proto::DEBUG_ID | proto::SYNC_ID => continue,
                proto::REPLY_ID if buf[1] == cmd => return Ok(buf),
                _ => continue,
            }
        }
        bail!("no reply to command {:#04x} after 64 reports", cmd)
    }

    /// Read a non-blocking asynchronous report, if one is pending.
    pub fn read_async(&self, timeout_ms: i32) -> Result<Option<[u8; PACKET_SIZE]>> {
        let mut buf = [0u8; PACKET_SIZE];
        let n = self.dev.read_timeout(&mut buf, timeout_ms)?;
        Ok(if n == 0 { None } else { Some(buf) })
    }

    pub fn firmware_version(&self) -> Result<String> {
        let r = self.transfer(Cmd::GetInfo, 0, 0, &[])?;
        // Vendor formats this as major.minor from payload bytes 1 and 0.
        Ok(format!(
            "{:x}.{:02x}",
            r[proto::PAYLOAD_OFFSET + 1],
            r[proto::PAYLOAD_OFFSET]
        ))
    }

    pub fn start_fast_communication(&self) -> Result<()> {
        self.transfer(Cmd::FastCommunicationStart, 0, 0, &[])?;
        Ok(())
    }

    pub fn stop_fast_communication(&self) -> Result<()> {
        self.transfer(Cmd::FastCommunicationStop, 0, 0, &[])?;
        Ok(())
    }

    /// Read a blob that the device exposes in 56-byte windows.
    fn read_blob(&self, cmd: Cmd, base: u16, total: usize) -> Result<Vec<u8>> {
        let mut out = Vec::with_capacity(total);
        let mut addr = base;
        while out.len() < total {
            let want = (total - out.len()).min(proto::MAX_PAYLOAD);
            let r = self.transfer_full(cmd as u8, 0, addr, want as u8, &[])?;
            // The device echoes the window it served; trust the requested size.
            let end = proto::PAYLOAD_OFFSET + want;
            out.extend_from_slice(&r[proto::PAYLOAD_OFFSET..end]);
            addr += want as u16;
        }
        Ok(out)
    }

    fn write_blob(&self, cmd: Cmd, base: u16, data: &[u8]) -> Result<()> {
        let mut addr = base;
        for chunk in data.chunks(proto::MAX_PAYLOAD) {
            self.transfer(cmd, 0, addr, chunk)?;
            addr += chunk.len() as u16;
        }
        Ok(())
    }

    pub fn read_travel_table(&self) -> Result<Vec<Travel>> {
        Ok(self.read_travel_table_checked()?.0)
    }

    /// Read the travel table and the exact bytes it came from.
    ///
    /// Returning both lets a caller prove that re-encoding the decoded table
    /// reproduces the device's own bytes, so a write only changes the field
    /// it means to change.
    pub fn read_travel_table_checked(&self) -> Result<(Vec<Travel>, Vec<u8>)> {
        let raw = self.read_blob(Cmd::GetKeyTriggerTravel, 0, TRAVEL_BYTES)?;
        let table: Vec<Travel> = raw.chunks(TRAVEL_ENTRY).map(Travel::decode).collect();
        Ok((table, raw))
    }

    /// Re-encode `table` and report every byte that differs from `raw`.
    pub fn travel_roundtrip_diff(table: &[Travel], raw: &[u8]) -> Vec<usize> {
        let mut encoded = Vec::with_capacity(raw.len());
        for t in table {
            encoded.extend_from_slice(&t.encode());
        }
        encoded.resize(raw.len(), 0);
        (0..raw.len()).filter(|i| encoded[*i] != raw[*i]).collect()
    }

    pub fn write_travel_table(&self, table: &[Travel]) -> Result<()> {
        let mut raw = Vec::with_capacity(TRAVEL_BYTES);
        for t in table {
            raw.extend_from_slice(&t.encode());
        }
        raw.resize(TRAVEL_BYTES, 0);
        self.write_blob(Cmd::SetKeyTriggerTravel, 0, &raw)
    }

    /// Read the active key matrix: which key each slot currently sends.
    pub fn read_key_matrix(&self) -> Result<Vec<(u8, u16)>> {
        let raw = self.read_blob(Cmd::GetUseKeyMatrix, 0, proto::MATRIX_BYTES)?;
        Ok(raw
            .chunks(proto::MATRIX_ENTRY)
            .map(|c| (c[0], u16::from_be_bytes([c[1], c[2]])))
            .collect())
    }

    /// The function-variable area holds global switches, including `debugMode`.
    pub fn read_function_area(&self) -> Result<Vec<u8>> {
        self.read_blob(Cmd::GetFunc, 0, proto::MAX_PAYLOAD)
    }

    pub fn write_function_area(&self, data: &[u8]) -> Result<()> {
        self.write_blob(Cmd::SetFunc, 0, data)
    }
}

/// `debugMode` is bit 3 of function-area byte 7.
pub const DEBUG_MODE_BYTE: usize = 7;
pub const DEBUG_MODE_BIT: u8 = 3;

pub fn debug_mode(area: &[u8]) -> bool {
    area[DEBUG_MODE_BYTE] >> DEBUG_MODE_BIT & 1 == 1
}

pub fn set_debug_mode(area: &mut [u8], on: bool) {
    if on {
        area[DEBUG_MODE_BYTE] |= 1 << DEBUG_MODE_BIT;
    } else {
        area[DEBUG_MODE_BYTE] &= !(1 << DEBUG_MODE_BIT);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn debug_mode_bit_toggles_without_touching_neighbours() {
        let mut area = vec![0u8; 32];
        area[DEBUG_MODE_BYTE] = 0b1111_0111;
        assert!(!debug_mode(&area));
        set_debug_mode(&mut area, true);
        assert!(debug_mode(&area));
        assert_eq!(area[DEBUG_MODE_BYTE], 0b1111_1111);
        set_debug_mode(&mut area, false);
        assert_eq!(area[DEBUG_MODE_BYTE], 0b1111_0111);
    }
}
