//! FIRE68 vendor HID protocol.
//!
//! Recovered from the vendor web configurator (hub.fgg.com.cn).
//! Transport: HID report ID 0, fixed 64-byte packets both directions.
//!
//! Host -> device packet layout:
//!   [0]     flag      always 0x55
//!   [1]     command   see `Cmd`
//!   [2]     key       command-specific selector
//!   [3]     checksum  sum(bytes[4..64]) & 0xFF
//!   [4]     len       payload length
//!   [5..7]  addr      u16 little-endian
//!   [8..64] payload   (PAYLOAD_OFFSET = 8)
//!
//! Device -> host:
//!   [0] == 0xAA  reply, [1] echoes the command byte
//!   [0] == 0xA0  asynchronous debug report (per-key analog travel)
//!   [0] == 0xA1  asynchronous synchronous-info report

pub const PACKET_SIZE: usize = 64;
pub const PAYLOAD_OFFSET: usize = 8;
pub const MAX_PAYLOAD: usize = 56;

pub const FLAG: u8 = 0x55;
pub const REPLY_ID: u8 = 0xAA;
pub const DEBUG_ID: u8 = 0xA0;
pub const SYNC_ID: u8 = 0xA1;

pub const VID: u16 = 0x373B;
pub const PID_FIRE68: u16 = 0x104E;

/// Poll rate, encoded as a whole byte in the function area.
///
/// The vendor code splits this byte into a low "report rate" nibble and a high
/// "tick rate" nibble, but the rates above 1000 Hz differ only in the high
/// nibble, so the byte has to be read as a unit.
pub fn report_rate_hz(byte: u8) -> Option<u16> {
    Some(match byte {
        1 => 1000,
        2 => 500,
        4 => 250,
        8 => 125,
        33 => 2000,
        65 => 4000,
        129 => 8000,
        _ => return None,
    })
}

/// Key matrix: 128 slots of 3 bytes, `[class, code_hi, code_lo]`.
pub const MATRIX_SLOTS: usize = 128;
pub const MATRIX_ENTRY: usize = 3;
pub const MATRIX_BYTES: usize = MATRIX_SLOTS * MATRIX_ENTRY;

/// Action class for a plain keyboard key.
pub const CLASS_GENERAL: u8 = 0x10;

/// Name for a HID keyboard usage code, for the codes a 68-key board carries.
pub fn usage_name(code: u16) -> String {
    let c = code as u8;
    match c {
        0x04..=0x1D => ((b'A' + (c - 0x04)) as char).to_string(),
        0x1E..=0x26 => ((b'1' + (c - 0x1E)) as char).to_string(),
        0x27 => "0".into(),
        0x28 => "Enter".into(),
        0x29 => "Esc".into(),
        0x2A => "Backspace".into(),
        0x2B => "Tab".into(),
        0x2C => "Space".into(),
        0x2D => "-".into(),
        0x2E => "=".into(),
        0x2F => "[".into(),
        0x30 => "]".into(),
        0x31 => "\\".into(),
        0x33 => ";".into(),
        0x34 => "'".into(),
        0x35 => "`".into(),
        0x36 => ",".into(),
        0x37 => ".".into(),
        0x38 => "/".into(),
        0x39 => "CapsLock".into(),
        0x3A..=0x45 => format!("F{}", c - 0x39),
        0x4C => "Delete".into(),
        0x4F => "Right".into(),
        0x50 => "Left".into(),
        0x51 => "Down".into(),
        0x52 => "Up".into(),
        0xE0 => "LCtrl".into(),
        0xE1 => "LShift".into(),
        0xE2 => "LAlt".into(),
        0xE3 => "LWin".into(),
        0xE4 => "RCtrl".into(),
        0xE5 => "RShift".into(),
        0xE6 => "RAlt".into(),
        0xE7 => "RWin".into(),
        _ => format!("{:#04x}", code),
    }
}

/// Trigger-travel table: 128 slots of 8 bytes.
pub const TRAVEL_SLOTS: usize = 128;
pub const TRAVEL_ENTRY: usize = 8;
pub const TRAVEL_BYTES: usize = TRAVEL_SLOTS * TRAVEL_ENTRY;

#[derive(Copy, Clone, Debug, PartialEq, Eq)]
#[repr(u8)]
pub enum Cmd {
    FastCommunicationStart = 1,
    FastCommunicationStop = 2,
    GetInfo = 3,
    GetBase = 4,
    GetFunc = 5,
    SetFunc = 6,
    GetDefaultKeyMatrix = 7,
    GetUseKeyMatrix = 8,
    SetUseKeyMatrix = 9,
    GetLedDefine = 10,
    SetLedDefine = 11,
    GetMacro = 12,
    SetMacro = 13,
    GetKeyTriggerTravel = 160,
    SetKeyTriggerTravel = 161,
    GetDskInfo = 162,
    SetDskInfo = 163,
    GetMtKeyInfo = 164,
    SetMtKeyInfo = 165,
    GetTglKeyInfo = 166,
    SetTglKeyInfo = 167,
    StartCalibration = 168,
    EndCalibration = 169,
    GetCalibration = 170,
    GetAppDefine = 241,
    SetAppDefine = 242,
    FactoryDataReset = 238,
}

/// Build a host -> device packet with the checksum already applied.
pub fn build(cmd: Cmd, key: u8, addr: u16, payload: &[u8]) -> [u8; PACKET_SIZE] {
    build_raw(cmd as u8, key, addr, payload)
}

/// As `build`, for a command byte with no `Cmd` variant.
pub fn build_raw(cmd: u8, key: u8, addr: u16, payload: &[u8]) -> [u8; PACKET_SIZE] {
    build_full(cmd, key, addr, payload.len() as u8, payload)
}

/// As `build_raw`, but with an explicit `len` field. Read commands carry the
/// size of the window they want while sending no payload bytes.
pub fn build_full(cmd: u8, key: u8, addr: u16, len: u8, payload: &[u8]) -> [u8; PACKET_SIZE] {
    assert!(payload.len() <= MAX_PAYLOAD, "payload exceeds 56 bytes");
    let mut p = [0u8; PACKET_SIZE];
    p[0] = FLAG;
    p[1] = cmd;
    p[2] = key;
    p[4] = len;
    p[5..7].copy_from_slice(&addr.to_le_bytes());
    p[PAYLOAD_OFFSET..PAYLOAD_OFFSET + payload.len()].copy_from_slice(payload);
    p[3] = checksum(&p);
    p
}

/// The device sums bytes 4..64; byte 3 holds the result and is zero while summing.
pub fn checksum(p: &[u8; PACKET_SIZE]) -> u8 {
    p[4..].iter().fold(0u8, |a, b| a.wrapping_add(*b))
}

/// Per-key trigger settings. 8 bytes, little-endian, bit-packed.
///
/// Travel fields are 9-bit (0..=511). The vendor UI works in millimetres;
/// the raw unit is believed to be 0.01 mm, which `monitor` can confirm
/// against the live analog stream.
#[derive(Copy, Clone, Debug, Default, PartialEq, Eq, serde::Serialize, serde::Deserialize)]
pub struct Travel {
    pub shaft_type: u8,
    pub shaft_default_type: u8,
    pub trigger_type: u8,
    pub socd_priority: u8,
    /// Actuation point.
    pub point: u16,
    /// Rapid trigger: press sensitivity.
    pub press_rt: u16,
    pub press_dead_zone: u16,
    /// Rapid trigger: release sensitivity.
    pub release_rt: u16,
    pub release_dead_zone: u16,
}

impl Travel {
    pub fn decode(b: &[u8]) -> Self {
        let u16le = |i: usize| u16::from_le_bytes([b[i], b[i + 1]]);
        Travel {
            shaft_type: b[0] & 0x1F,
            shaft_default_type: (b[0] & 0xE0) >> 5,
            trigger_type: b[1] & 0x0F,
            socd_priority: (b[1] & 0xF0) >> 4,
            point: u16le(2) & 0x1FF,
            press_rt: u16le(4) & 0x1FF,
            press_dead_zone: (u16le(4) & 0xFE00) >> 9,
            release_rt: u16le(6) & 0x1FF,
            release_dead_zone: (u16le(6) & 0xFE00) >> 9,
        }
    }

    pub fn encode(&self) -> [u8; TRAVEL_ENTRY] {
        let mut b = [0u8; TRAVEL_ENTRY];
        b[0] = (self.shaft_type & 0x1F) | ((self.shaft_default_type & 0x07) << 5);
        b[1] = (self.trigger_type & 0x0F) | ((self.socd_priority & 0x0F) << 4);
        b[2..4].copy_from_slice(&(self.point & 0x1FF).to_le_bytes());
        b[4..6].copy_from_slice(&((self.press_rt & 0x1FF) | (self.press_dead_zone << 9)).to_le_bytes());
        b[6..8].copy_from_slice(&((self.release_rt & 0x1FF) | (self.release_dead_zone << 9)).to_le_bytes());
        b
    }

    pub fn is_empty(&self) -> bool {
        *self == Travel::default()
    }
}

/// Asynchronous 0xA0 report: live analog travel for one key.
#[derive(Copy, Clone, Debug)]
pub struct DebugReport {
    pub key_class: u8,
    pub key_id: u8,
    /// Raw travel as reported by the device (big-endian on the wire).
    pub raw: u16,
    pub calibration_count: u8,
}

impl DebugReport {
    pub fn parse(b: &[u8]) -> Self {
        DebugReport {
            key_class: b[1],
            key_id: b[2],
            raw: u16::from_be_bytes([b[6], b[7]]),
            calibration_count: b[10],
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn packet_header_matches_vendor_layout() {
        let p = build(Cmd::GetKeyTriggerTravel, 0, 0x0102, &[]);
        assert_eq!(p[0], FLAG);
        assert_eq!(p[1], 160);
        assert_eq!(p[5], 0x02, "addr is little-endian");
        assert_eq!(p[6], 0x01);
        assert_eq!(p[3], checksum(&p));
    }

    #[test]
    fn checksum_excludes_its_own_byte() {
        let mut p = build(Cmd::GetInfo, 0, 0, &[]);
        let expected = p[4..].iter().fold(0u8, |a, b| a.wrapping_add(*b));
        assert_eq!(p[3], expected);
        p[3] = 0;
        assert_eq!(checksum(&p), expected, "byte 3 must not feed the sum");
    }

    #[test]
    fn report_rate_covers_the_documented_encodings() {
        assert_eq!(report_rate_hz(1), Some(1000));
        assert_eq!(report_rate_hz(8), Some(125));
        assert_eq!(report_rate_hz(129), Some(8000));
        assert_eq!(report_rate_hz(7), None, "undocumented bytes must not guess");
    }

    #[test]
    fn travel_roundtrips_through_bit_packing() {
        let t = Travel {
            shaft_type: 2,
            shaft_default_type: 5,
            trigger_type: 1,
            socd_priority: 3,
            point: 40,
            press_rt: 15,
            press_dead_zone: 12,
            release_rt: 20,
            release_dead_zone: 9,
        };
        assert_eq!(Travel::decode(&t.encode()), t);
    }

    #[test]
    fn travel_saturates_at_nine_bits() {
        let t = Travel { point: 511, press_rt: 511, release_rt: 511, ..Default::default() };
        let d = Travel::decode(&t.encode());
        assert_eq!((d.point, d.press_rt, d.release_rt), (511, 511, 511));
    }
}
