//! Analog keys -> virtual Xbox 360 controller.
//!
//! The keyboard reports how far each key is pressed, not just whether it is
//! down. This module turns that travel into real analog stick and trigger
//! values on a ViGEm virtual pad, so a half-pressed W walks instead of runs.
//!
//! Requires the ViGEmBus driver: https://github.com/nefarius/ViGEmBus/releases

use std::collections::HashMap;
use std::str::FromStr;

use anyhow::{bail, Context, Result};
use serde::{Deserialize, Serialize};

use crate::device::Fire68;
use crate::proto;

/// Where a key's travel is sent on the virtual pad.
#[derive(Copy, Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum Target {
    #[serde(rename = "lx+")]
    LeftStickRight,
    #[serde(rename = "lx-")]
    LeftStickLeft,
    #[serde(rename = "ly+")]
    LeftStickUp,
    #[serde(rename = "ly-")]
    LeftStickDown,
    #[serde(rename = "rx+")]
    RightStickRight,
    #[serde(rename = "rx-")]
    RightStickLeft,
    #[serde(rename = "ry+")]
    RightStickUp,
    #[serde(rename = "ry-")]
    RightStickDown,
    #[serde(rename = "lt")]
    LeftTrigger,
    #[serde(rename = "rt")]
    RightTrigger,
}

impl FromStr for Target {
    type Err = anyhow::Error;
    fn from_str(s: &str) -> Result<Self> {
        Ok(match s {
            "lx+" => Target::LeftStickRight,
            "lx-" => Target::LeftStickLeft,
            "ly+" => Target::LeftStickUp,
            "ly-" => Target::LeftStickDown,
            "rx+" => Target::RightStickRight,
            "rx-" => Target::RightStickLeft,
            "ry+" => Target::RightStickUp,
            "ry-" => Target::RightStickDown,
            "lt" => Target::LeftTrigger,
            "rt" => Target::RightTrigger,
            other => bail!("unknown target {:?}", other),
        })
    }
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Binding {
    /// Key index as printed by `fire68 monitor`.
    pub key: u8,
    pub target: Target,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Config {
    /// Raw travel treated as fully pressed, in hundredths of a millimetre.
    /// Measured at 350 (3.50 mm) on the reference board; confirm with `monitor`.
    pub travel_max: u16,
    /// Raw travel below which the key counts as released.
    pub travel_deadzone: u16,
    pub bindings: Vec<Binding>,
}

impl Config {
    fn validate(&self) -> Result<()> {
        if self.travel_max <= self.travel_deadzone {
            bail!(
                "travel_max ({}) must be greater than travel_deadzone ({})",
                self.travel_max,
                self.travel_deadzone
            );
        }
        if self.bindings.is_empty() {
            bail!("config has no bindings");
        }
        let mut seen = HashMap::new();
        for b in &self.bindings {
            if let Some(prev) = seen.insert(b.key, b.target) {
                bail!("key {} is bound twice ({:?} and {:?})", b.key, prev, b.target);
            }
        }
        Ok(())
    }

    /// Fraction of full travel, 0.0..=1.0.
    fn normalise(&self, raw: u16) -> f32 {
        if raw <= self.travel_deadzone {
            return 0.0;
        }
        let span = (self.travel_max - self.travel_deadzone) as f32;
        (((raw - self.travel_deadzone) as f32) / span).min(1.0)
    }
}

pub fn write_starter_config(dev: &Fire68, path: &str, json_mode: bool) -> Result<()> {
    if std::path::Path::new(path).exists() {
        bail!("{} already exists; delete it first or pass a different --config", path);
    }

    // Find WASD by reading what each slot actually sends, so the starter
    // config is usable without hunting for indices by hand.
    let matrix = dev.read_key_matrix()?;
    let slot_for = |want: &str| -> Option<u8> {
        matrix.iter().position(|(class, code)| {
            *class == proto::CLASS_GENERAL && proto::usage_name(*code) == want
        }).map(|i| i as u8)
    };

    let wanted = [("W", Target::LeftStickUp), ("A", Target::LeftStickLeft),
                  ("S", Target::LeftStickDown), ("D", Target::LeftStickRight)];
    let mut bindings = Vec::new();
    let mut missing = Vec::new();
    for (name, target) in wanted {
        match slot_for(name) {
            Some(key) => bindings.push(Binding { key, target }),
            None => missing.push(name),
        }
    }
    if bindings.is_empty() {
        bail!("could not find W, A, S or D in the key matrix; bind slots by hand using `fire68 keymap`");
    }

    let cfg = Config { travel_max: 350, travel_deadzone: 20, bindings };
    std::fs::write(path, serde_json::to_string_pretty(&cfg)?)
        .with_context(|| format!("writing {path}"))?;

    if json_mode {
        println!(
            "{}",
            serde_json::json!({
                "ok": true,
                "path": path,
                "bindings": cfg.bindings.len(),
                "missing": missing,
            })
        );
        return Ok(());
    }

    println!("Wrote {path} with {} bindings:", cfg.bindings.len());
    for b in &cfg.bindings {
        println!("  slot {:>3} -> {:?}", b.key, b.target);
    }
    if !missing.is_empty() {
        println!("
Could not locate: {}. Add them by hand from `fire68 keymap`.", missing.join(", "));
    }
    println!("
travel_max is set to 350 (3.50 mm), measured on the reference board.");
    println!("Confirm with `fire68 monitor`: bottom out a key and use the largest value.");
    Ok(())
}

/// Plug in the virtual pad and sweep the left stick, with no keyboard involved.
/// Confirms the ViGEm half of the pipeline on its own.
pub fn self_test() -> Result<()> {
    let client = vigem_client::Client::connect()
        .context("connecting to ViGEmBus (is the driver installed?)")?;
    let mut pad = vigem_client::Xbox360Wired::new(client, vigem_client::TargetId::XBOX360_WIRED);
    println!("connected to ViGEmBus");
    pad.plugin().context("plugging in the virtual controller")?;
    println!("plugin() ok");
    pad.wait_ready().context("waiting for the virtual controller")?;
    println!("wait_ready() ok");
    // The bus reports ready slightly before the HID stack finishes attaching.
    std::thread::sleep(std::time::Duration::from_millis(500));
    println!("Virtual Xbox 360 pad plugged in.");
    println!("Sweeping the left stick and both triggers for 6 seconds.");
    println!("Open a gamepad tester (joy.cpl) to watch it move.");

    let steps = 120;
    for i in 0..steps {
        let phase = (i as f32 / steps as f32) * std::f32::consts::TAU;
        let mut state = vigem_client::XGamepad::default();
        state.thumb_lx = (phase.cos() * 32000.0) as i16;
        state.thumb_ly = (phase.sin() * 32000.0) as i16;
        let ramp = ((i % 60) as f32 / 60.0 * 255.0) as u8;
        state.left_trigger = ramp;
        state.right_trigger = 255 - ramp;
        pad.update(&state).context("updating the virtual controller")?;
        std::thread::sleep(std::time::Duration::from_millis(50));
    }
    pad.update(&vigem_client::XGamepad::default())?;
    println!("Done. The pad unplugs when this process exits.");
    Ok(())
}

pub fn run(dev: &Fire68, path: &str, json_mode: bool) -> Result<()> {
    let text = std::fs::read_to_string(path).with_context(|| {
        format!("reading {path} (run `fire68 gamepad --init` to create a starter config)")
    })?;
    let cfg: Config = serde_json::from_str(&text).with_context(|| format!("parsing {path}"))?;
    cfg.validate()?;

    let client = vigem_client::Client::connect()
        .context("connecting to ViGEmBus (is the driver installed?)")?;
    let mut pad = vigem_client::Xbox360Wired::new(client, vigem_client::TargetId::XBOX360_WIRED);
    pad.plugin().context("plugging in the virtual controller")?;
    pad.wait_ready().context("waiting for the virtual controller")?;

    dev.start_fast_communication()?;
    if json_mode {
        println!("{}", serde_json::json!({ "ok": true, "event": "started", "bindings": cfg.bindings.len() }));
    } else {
        println!("Virtual Xbox 360 pad is live. {} bindings. Ctrl+C to stop.", cfg.bindings.len());
    }

    let targets: HashMap<u8, Target> = cfg.bindings.iter().map(|b| (b.key, b.target)).collect();
    let mut travel: HashMap<u8, f32> = HashMap::new();

    let result = (|| -> Result<()> {
        loop {
            let Some(buf) = dev.read_async(1000)? else { continue };
            if buf[0] != proto::DEBUG_ID {
                continue;
            }
            let report = proto::DebugReport::parse(&buf);
            if !targets.contains_key(&report.key_id) {
                continue;
            }
            travel.insert(report.key_id, cfg.normalise(report.raw));

            let mut state = vigem_client::XGamepad::default();
            let axis = |v: f32| (v * 32767.0) as i32;
            let (mut lx, mut ly, mut rx, mut ry) = (0i32, 0i32, 0i32, 0i32);

            for (key, value) in &travel {
                let Some(target) = targets.get(key) else { continue };
                match target {
                    Target::LeftStickRight => lx += axis(*value),
                    Target::LeftStickLeft => lx -= axis(*value),
                    Target::LeftStickUp => ly += axis(*value),
                    Target::LeftStickDown => ly -= axis(*value),
                    Target::RightStickRight => rx += axis(*value),
                    Target::RightStickLeft => rx -= axis(*value),
                    Target::RightStickUp => ry += axis(*value),
                    Target::RightStickDown => ry -= axis(*value),
                    Target::LeftTrigger => state.left_trigger = (value * 255.0) as u8,
                    Target::RightTrigger => state.right_trigger = (value * 255.0) as u8,
                }
            }
            state.thumb_lx = lx.clamp(-32768, 32767) as i16;
            state.thumb_ly = ly.clamp(-32768, 32767) as i16;
            state.thumb_rx = rx.clamp(-32768, 32767) as i16;
            state.thumb_ry = ry.clamp(-32768, 32767) as i16;
            pad.update(&state).context("updating the virtual controller")?;

            if json_mode {
                println!(
                    "{}",
                    serde_json::json!({
                        "event": "axes",
                        "lx": state.thumb_lx, "ly": state.thumb_ly,
                        "rx": state.thumb_rx, "ry": state.thumb_ry,
                        "lt": state.left_trigger, "rt": state.right_trigger,
                    })
                );
                use std::io::Write;
                let _ = std::io::stdout().flush();
            }
        }
    })();

    let _ = dev.stop_fast_communication();
    result
}

#[cfg(test)]
mod tests {
    use super::*;

    fn cfg() -> Config {
        Config {
            travel_max: 350,
            travel_deadzone: 20,
            bindings: vec![Binding { key: 1, target: Target::LeftStickUp }],
        }
    }

    #[test]
    fn travel_below_deadzone_reads_as_released() {
        assert_eq!(cfg().normalise(0), 0.0);
        assert_eq!(cfg().normalise(20), 0.0);
    }

    #[test]
    fn travel_scales_between_deadzone_and_max() {
        let c = cfg();
        assert!((c.normalise(185) - 0.5).abs() < 0.01, "midpoint should be ~0.5");
        assert_eq!(c.normalise(350), 1.0);
    }

    #[test]
    fn travel_past_max_is_clamped() {
        assert_eq!(cfg().normalise(9999), 1.0);
    }

    #[test]
    fn duplicate_bindings_are_rejected() {
        let mut c = cfg();
        c.bindings.push(Binding { key: 1, target: Target::LeftStickDown });
        assert!(c.validate().is_err());
    }

    #[test]
    fn inverted_travel_range_is_rejected() {
        let mut c = cfg();
        c.travel_deadzone = 500;
        assert!(c.validate().is_err());
    }

    #[test]
    fn targets_parse_from_their_config_spelling() {
        assert_eq!(Target::from_str("ly+").unwrap(), Target::LeftStickUp);
        assert_eq!(Target::from_str("rt").unwrap(), Target::RightTrigger);
        assert!(Target::from_str("nope").is_err());
    }
}
