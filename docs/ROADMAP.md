# Roadmap

Features whose protocol entry points are mapped but whose implementation is not
done. Everything here is reachable through `fire68 raw` for experimentation.

## Near term

### Resolve the analog slot mapping

The gamepad binds keys by key-matrix slot index and assumes the analog stream
uses the same numbering. Confirm it by pressing one known key under
`fire68 monitor` and comparing against `fire68 keymap`. If the numbering
differs, add a translation table in `gamepad.rs`.

This blocks confidence in every binding, so it comes first.

### Gamepad buttons

Only axes and triggers are driven today. The `XGamepad` state carries a button
field, so adding a `Target` variant per button is a small change in
`gamepad.rs`.

### Bulk key edits

`set-travel` writes one slot. A whole-board operation would help, for example
setting every key to 1.20 mm or applying one profile to WASD only. The
underlying `write_travel_table` already writes the full table, so this is a
command-line surface change.

### Persistence check

Determine whether writes survive a power cycle. If they do not, find the save
command. The vendor code for other devices in the same bundle has an explicit
`SAVE_CFG`, which suggests this family may need one.

## Mapped, not decoded

Each of these has a known command pair. The work is decoding the payload
structure from the vendor bundle in `reference/`.

| Feature | Get | Set | Notes |
|---|---|---|---|
| Key remapping | 8 | 9 | Read side is done. The write side needs the action encoding for non-basic keys |
| Per-key lighting | 10 | 11 | 3 bytes per key, almost certainly RGB |
| Macros | 12 | 13 | The bundle shows a length table followed by 4-byte entries |
| Dynamic keystroke | 162 | 163 | 24 bytes per entry, multiple actions at different depths on one key |
| Multi-tap | 164 | 165 | |
| Toggle keys | 166 | 167 | |
| App define | 241 | 242 | Purpose unclear, reads back zeros |

Dynamic keystroke is the most interesting of these. It assigns different
actions to different press depths on one key, which is a signature
hall-effect feature and one the analog stream already proves the hardware
supports.

## Structures worth decoding

**Action classes.** The key matrix stores a class byte alongside the code.
Known classes include general keys, mouse buttons, mouse wheel, mouse movement,
consumer controls, system keys, launching an executable, opening a URL, macros,
and the hall-effect specific classes for dynamic keystroke, toggle, multi-tap,
rapid trigger, SOCD and one-key-snap. Decoding these unlocks full remapping.

**SOCD.** The key structure has a `socdPriority` field and the vendor bundle
lists modes for neutral, first input, last input and balanced resolution. This
is a competitive feature worth exposing.

**Trigger type.** Every key reads `0` on a stock board. The vendor bundle
implies other values select rapid trigger and the hall-effect modes. Mapping
these would explain how rapid trigger is actually enabled, since the stock
board carries nonzero rapid-trigger values while the feature is off.

## Out of scope

**Firmware update.** The bundle contains an update path with its own bootloader
product IDs. A failed firmware write bricks the keyboard, and the recovery path
is unknown.

**Calibration.** Start, stop and read commands are known. A botched calibration
could require recalibrating every switch with no tested recovery.

## Portability

The protocol layer is platform-neutral. Two things are Windows-specific:

- The HID write framing prepends a report-ID byte, which `hidapi` handles
  per platform
- The virtual controller uses ViGEmBus, so Linux would need `uinput` and macOS
  has no clean equivalent

The vendor bundle lists many sibling devices sharing this protocol, including
other FIRE models, Nano68 and MAD68 variants. Supporting one is mostly a matter
of adding its product ID and confirming region sizes, since those differ per
model.
