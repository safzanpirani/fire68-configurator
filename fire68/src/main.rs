//! fire68 — a local configurator for the FIRE68 hall-effect keyboard.
//!
//! Speaks the vendor HID protocol directly, so it needs no browser and no
//! vendor web app. Also maps analog key travel onto a virtual Xbox controller.
//!
//! Every subcommand accepts `--json`, which makes it emit a single JSON object
//! on stdout. The desktop UI drives this binary through that mode, so the
//! protocol lives in exactly one place.

mod device;
mod gamepad;
mod proto;

use anyhow::{bail, Context, Result};
use clap::{Parser, Subcommand};
use hidapi::HidApi;
use serde_json::json;

use device::Fire68;

#[derive(Parser)]
#[command(name = "fire68", about = "Local configurator for the FIRE68 hall-effect keyboard")]
struct Cli {
    /// Emit a single JSON object instead of human-readable text.
    #[arg(long, global = true)]
    json: bool,
    #[command(subcommand)]
    cmd: Command,
}

#[derive(Subcommand)]
enum Command {
    /// List every HID interface the keyboard exposes.
    List,
    /// Show firmware version and global switches.
    Info,
    /// Print the per-key actuation and rapid-trigger table.
    Travel {
        /// Include unconfigured slots.
        #[arg(long)]
        all: bool,
    },
    /// Change one key's actuation point and rapid trigger, in raw units.
    SetTravel {
        /// Slot index, as reported by `keymap`.
        #[arg(long)]
        key: usize,
        /// Actuation point (0-511, hundredths of a millimetre).
        #[arg(long)]
        point: Option<u16>,
        /// Rapid-trigger press sensitivity (0-511, 0 disables).
        #[arg(long)]
        press_rt: Option<u16>,
        /// Rapid-trigger release sensitivity (0-511, 0 disables).
        #[arg(long)]
        release_rt: Option<u16>,
    },
    /// Toggle the analog debug stream that `monitor` and `gamepad` consume.
    Debug {
        /// "on" or "off".
        state: String,
    },
    /// Print which key each slot index currently sends.
    Keymap,
    /// Check that decoding then re-encoding the travel table is lossless.
    /// Read-only; run this before trusting any write.
    VerifyEncoding,
    /// Print live analog travel per key. Streams until interrupted.
    Monitor,
    /// Drive a virtual Xbox controller from analog key travel.
    Gamepad {
        /// Path to the binding config.
        #[arg(long, default_value = "gamepad.json")]
        config: String,
        /// Write a starter config and exit.
        #[arg(long)]
        init: bool,
        /// Plug in the virtual pad and sweep it, without using the keyboard.
        #[arg(long)]
        test: bool,
    },
    /// Send an arbitrary command. For protocol exploration.
    Raw {
        #[arg(long)]
        cmd: u8,
        #[arg(long, default_value_t = 0)]
        key: u8,
        #[arg(long, default_value_t = 0)]
        addr: u16,
        /// Read-window size. Read commands want this set even with no payload.
        #[arg(long)]
        len: Option<u8>,
        /// Payload as hex, e.g. "01ff20".
        #[arg(long, default_value = "")]
        payload: String,
    },
}

fn main() {
    let cli = Cli::parse();
    let json_mode = cli.json;
    match run(cli) {
        Ok(()) => {}
        Err(e) => {
            if json_mode {
                // Keep the error machine-readable so the UI can show it.
                println!("{}", json!({ "ok": false, "error": format!("{e:#}") }));
            } else {
                eprintln!("Error: {e:#}");
            }
            std::process::exit(1);
        }
    }
}

fn run(cli: Cli) -> Result<()> {
    let api = HidApi::new().context("initialising hidapi")?;
    let j = cli.json;

    match cli.cmd {
        Command::List => list(&api, j),
        Command::Info => info(&Fire68::open(&api)?, j),
        Command::Travel { all } => travel(&Fire68::open(&api)?, all, j),
        Command::SetTravel { key, point, press_rt, release_rt } => {
            set_travel(&Fire68::open(&api)?, key, point, press_rt, release_rt, j)
        }
        Command::Debug { state } => debug(&Fire68::open(&api)?, &state, j),
        Command::Keymap => keymap(&Fire68::open(&api)?, j),
        Command::VerifyEncoding => verify_encoding(&Fire68::open(&api)?, j),
        Command::Monitor => monitor(&Fire68::open(&api)?, j),
        Command::Gamepad { config, init, test } => {
            if test {
                gamepad::self_test()
            } else if init {
                gamepad::write_starter_config(&Fire68::open(&api)?, &config, j)
            } else {
                gamepad::run(&Fire68::open(&api)?, &config, j)
            }
        }
        Command::Raw { cmd, key, addr, len, payload } => {
            raw(&Fire68::open(&api)?, cmd, key, addr, len, &payload, j)
        }
    }
}

fn list(api: &HidApi, json_mode: bool) -> Result<()> {
    let rows: Vec<_> = api
        .device_list()
        .filter(|d| d.vendor_id() == proto::VID)
        .map(|d| {
            json!({
                "vendor_id": d.vendor_id(),
                "product_id": d.product_id(),
                "interface": d.interface_number(),
                "usage_page": d.usage_page(),
                "usage": d.usage(),
                "product": d.product_string().unwrap_or("?"),
                "is_config": d.usage_page() == 0x01 && d.usage() == 0x00,
            })
        })
        .collect();

    if json_mode {
        println!("{}", json!({ "ok": true, "devices": rows }));
        return Ok(());
    }
    if rows.is_empty() {
        println!("No devices from vendor {:#06x} found.", proto::VID);
    }
    for d in &rows {
        println!(
            "{:04x}:{:04x}  iface {}  usage {:#06x}/{:#06x}  {}{}",
            d["vendor_id"].as_u64().unwrap(),
            d["product_id"].as_u64().unwrap(),
            d["interface"].as_i64().unwrap(),
            d["usage_page"].as_u64().unwrap(),
            d["usage"].as_u64().unwrap(),
            d["product"].as_str().unwrap(),
            if d["is_config"].as_bool().unwrap() { "   <- config interface" } else { "" }
        );
    }
    Ok(())
}

fn info(dev: &Fire68, json_mode: bool) -> Result<()> {
    let version = dev.firmware_version()?;
    let area = dev.read_function_area()?;
    let debug_on = device::debug_mode(&area);

    if json_mode {
        println!(
            "{}",
            json!({
                "ok": true,
                "firmware": version,
                "debug_mode": debug_on,
                "report_rate_raw": area[4],
                "report_rate_hz": proto::report_rate_hz(area[4]),
                "win_lock": area[6] & 1,
                "lighting_mode": area[8],
                "brightness": area[9],
                "color": [area[14], area[15], area[16]],
                "function_area": area,
            })
        );
        return Ok(());
    }

    println!("firmware    {version}");
    println!("debug mode  {}", if debug_on { "on" } else { "off" });
    match proto::report_rate_hz(area[4]) {
        Some(hz) => println!("poll rate   {hz} Hz"),
        None => println!("poll rate   unknown (raw {:#04x})", area[4]),
    }
    println!("win lock    {}", area[6] & 1);
    println!("brightness  {}", area[9]);
    println!("\nfunction area (first 32 bytes):");
    for (i, b) in area.iter().take(32).enumerate() {
        if i % 16 == 0 {
            print!("\n  {i:02}  ");
        }
        print!("{b:02x} ");
    }
    println!();
    Ok(())
}

fn travel(dev: &Fire68, all: bool, json_mode: bool) -> Result<()> {
    let table = dev.read_travel_table()?;

    if json_mode {
        let rows: Vec<_> = table
            .iter()
            .enumerate()
            .filter(|(_, t)| all || !t.is_empty())
            .map(|(i, t)| json!({ "slot": i, "travel": t }))
            .collect();
        println!("{}", json!({ "ok": true, "keys": rows }));
        return Ok(());
    }

    println!("{:>4}  {:>6}  {:>8}  {:>10}  {:>8}", "slot", "point", "pressRT", "releaseRT", "trigger");
    let mut shown = 0;
    for (i, t) in table.iter().enumerate() {
        if !all && t.is_empty() {
            continue;
        }
        shown += 1;
        println!(
            "{:>4}  {:>6}  {:>8}  {:>10}  {:>8}",
            i, t.point, t.press_rt, t.release_rt, t.trigger_type
        );
    }
    if shown == 0 {
        println!("(all slots empty; pass --all to show them)");
    }
    Ok(())
}

fn set_travel(
    dev: &Fire68,
    key: usize,
    point: Option<u16>,
    press_rt: Option<u16>,
    release_rt: Option<u16>,
    json_mode: bool,
) -> Result<()> {
    if key >= proto::TRAVEL_SLOTS {
        bail!("slot {} is out of range (0..{})", key, proto::TRAVEL_SLOTS);
    }
    if point.is_none() && press_rt.is_none() && release_rt.is_none() {
        bail!("nothing to change: pass at least one of --point, --press-rt, --release-rt");
    }
    for (name, v) in [("point", point), ("press-rt", press_rt), ("release-rt", release_rt)] {
        if let Some(v) = v {
            if v > 511 {
                bail!("--{} must be 0..=511, got {}", name, v);
            }
        }
    }

    let (mut table, raw) = dev.read_travel_table_checked()?;
    let diff = Fire68::travel_roundtrip_diff(&table, &raw);
    if !diff.is_empty() {
        bail!(
            "refusing to write: re-encoding the travel table differs from the device at {} \
             bytes, so a write would corrupt fields this tool does not model. Run \
             `fire68 verify-encoding` for detail.",
            diff.len()
        );
    }

    let before = table[key];
    let t = &mut table[key];
    if let Some(v) = point {
        t.point = v;
    }
    if let Some(v) = press_rt {
        t.press_rt = v;
    }
    if let Some(v) = release_rt {
        t.release_rt = v;
    }
    let after = *t;

    if after == before {
        if json_mode {
            println!("{}", json!({ "ok": true, "written": false, "slot": key, "travel": after }));
        } else {
            println!("slot {key} already has those values; nothing written");
        }
        return Ok(());
    }

    dev.write_travel_table(&table)?;

    if json_mode {
        println!(
            "{}",
            json!({ "ok": true, "written": true, "slot": key, "before": before, "after": after })
        );
        return Ok(());
    }
    println!("slot {key}");
    println!("  point      {} -> {}", before.point, after.point);
    println!("  pressRT    {} -> {}", before.press_rt, after.press_rt);
    println!("  releaseRT  {} -> {}", before.release_rt, after.release_rt);
    Ok(())
}

fn debug(dev: &Fire68, state: &str, json_mode: bool) -> Result<()> {
    let on = match state {
        "on" => true,
        "off" => false,
        other => bail!("expected \"on\" or \"off\", got {:?}", other),
    };
    let mut area = dev.read_function_area()?;
    let was = device::debug_mode(&area);
    if was != on {
        device::set_debug_mode(&mut area, on);
        dev.write_function_area(&area)?;
    }
    if json_mode {
        println!("{}", json!({ "ok": true, "debug_mode": on, "changed": was != on }));
    } else if was == on {
        println!("debug mode is already {state}");
    } else {
        println!("debug mode -> {state}");
    }
    Ok(())
}

fn keymap(dev: &Fire68, json_mode: bool) -> Result<()> {
    let matrix = dev.read_key_matrix()?;
    let rows: Vec<_> = matrix
        .iter()
        .enumerate()
        .filter(|(_, (class, code))| !(*class == 0 && *code == 0))
        .map(|(i, (class, code))| {
            json!({
                "slot": i,
                "class": class,
                "code": code,
                "name": if *class == proto::CLASS_GENERAL {
                    proto::usage_name(*code)
                } else {
                    format!("(class {class:#04x})")
                },
            })
        })
        .collect();

    if json_mode {
        println!("{}", json!({ "ok": true, "keys": rows }));
        return Ok(());
    }
    println!("{:>4}  {:>6}  {:>6}  {}", "slot", "class", "code", "key");
    for r in &rows {
        println!(
            "{:>4}  {:#06x}  {:#06x}  {}",
            r["slot"].as_u64().unwrap(),
            r["class"].as_u64().unwrap(),
            r["code"].as_u64().unwrap(),
            r["name"].as_str().unwrap()
        );
    }
    Ok(())
}

fn verify_encoding(dev: &Fire68, json_mode: bool) -> Result<()> {
    let (table, raw) = dev.read_travel_table_checked()?;
    let diff = Fire68::travel_roundtrip_diff(&table, &raw);

    if json_mode {
        println!(
            "{}",
            json!({ "ok": diff.is_empty(), "bytes": raw.len(), "mismatches": diff.len() })
        );
        return if diff.is_empty() { Ok(()) } else { bail!("encoder is not byte-faithful") };
    }

    if diff.is_empty() {
        println!("Lossless: re-encoding all {} bytes reproduces the device's own", raw.len());
        println!("bytes exactly, so a write changes only the field it targets.");
        return Ok(());
    }
    println!("MISMATCH at {} of {} bytes. Do not write.", diff.len(), raw.len());
    for i in diff.iter().take(16) {
        println!("  byte {:>4} (slot {:>3}): device {:#04x}", i, i / proto::TRAVEL_ENTRY, raw[*i]);
    }
    bail!("travel encoder is not byte-faithful; writing would corrupt unrelated fields")
}

fn monitor(dev: &Fire68, json_mode: bool) -> Result<()> {
    dev.start_fast_communication()?;
    if !json_mode {
        println!("Press keys. Ctrl+C to stop.\n");
        println!("{:>6}  {:>6}  {:>6}", "slot", "raw", "class");
    }

    // Streaming mode emits one JSON object per line rather than one per run,
    // so the UI can read it incrementally.
    let result = (|| -> Result<()> {
        loop {
            if let Some(buf) = dev.read_async(1000)? {
                if buf[0] == proto::DEBUG_ID {
                    let r = proto::DebugReport::parse(&buf);
                    if json_mode {
                        println!(
                            "{}",
                            json!({ "slot": r.key_id, "raw": r.raw, "class": r.key_class })
                        );
                    } else {
                        println!("{:>6}  {:>6}  {:>6}", r.key_id, r.raw, r.key_class);
                    }
                    use std::io::Write;
                    let _ = std::io::stdout().flush();
                }
            }
        }
    })();

    let _ = dev.stop_fast_communication();
    result
}

fn raw(
    dev: &Fire68,
    cmd: u8,
    key: u8,
    addr: u16,
    len: Option<u8>,
    payload_hex: &str,
    json_mode: bool,
) -> Result<()> {
    let hex = payload_hex.trim();
    if hex.len() % 2 != 0 {
        bail!("--payload must have an even number of hex digits");
    }
    let payload: Vec<u8> = (0..hex.len())
        .step_by(2)
        .map(|i| u8::from_str_radix(&hex[i..i + 2], 16))
        .collect::<std::result::Result<_, _>>()
        .context("parsing --payload as hex")?;

    if cmd == proto::Cmd::FactoryDataReset as u8 {
        bail!("refusing to send FactoryDataReset (238); it wipes the keyboard's stored config");
    }

    let len = len.unwrap_or(payload.len() as u8);
    let reply = dev.transfer_full(cmd, key, addr, len, &payload)?;

    if json_mode {
        println!("{}", json!({ "ok": true, "reply": reply.to_vec() }));
        return Ok(());
    }
    println!("reply:");
    for (i, b) in reply.iter().enumerate() {
        if i % 16 == 0 {
            print!("\n  {i:02}  ");
        }
        print!("{b:02x} ");
    }
    println!();
    Ok(())
}
