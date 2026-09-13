# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A local configurator for the FIRE68 hall-effect keyboard, replacing the vendor
web app at `hub.fgg.com.cn`. The protocol was reverse-engineered from that
app's JavaScript bundle and confirmed against hardware. It also adds analog
gamepad emulation, which the vendor software does not provide.

## Commands

```bash
cd fire68
cargo build --release          # binary at target/release/fire68.exe
cargo test                     # 12 tests, no hardware needed
cargo test travel_roundtrips_through_bit_packing   # a single test by name
cargo test proto::             # one module's tests

cd gui
npm install && npm start       # Electron UI; build the Rust binary first
```

Look at the UI rather than guessing about it. This writes one PNG per view and
exits, and is inert unless `ELECTRON_CAPTURE` is set:

```bash
cd gui
ELECTRON_CAPTURE=/tmp/shots ELECTRON_CAPTURE_VIEWS=keys,pad,device   ELECTRON_CAPTURE_THEMES=dark,light ELECTRON_CAPTURE_SETTLE=5000   npx electron .
```

The settle delay matters because every panel shells out to the Rust binary, so
the window paints seconds before its data lands. See the `electron-tab-capture`
skill.

Hardware-free checks that catch most regressions:

```bash
cargo test
./target/release/fire68.exe list     # enumerates even when nothing is connected
```

With the keyboard attached:

```bash
./target/release/fire68.exe info
./target/release/fire68.exe verify-encoding    # run before trusting any write
```

## Architecture

Read `docs/ARCHITECTURE.md` for the full picture. The parts that matter when
changing code:

**The Rust binary is the only code that touches the device.** `gui/` does not
speak HID. It spawns `fire68 --json` and renders the result, so the protocol
has exactly one implementation. Never add protocol logic to the JavaScript.

**Layer boundaries.** `proto.rs` is pure byte manipulation with no I/O, which
is why every unit test lives there. `device.rs` owns I/O, interface selection
and the paging rule. `main.rs` only formats output. Adding an output format
touches `main.rs` alone.

**`--json` is a contract.** The GUI parses it. One-shot commands emit a single
object; `monitor` and `gamepad` emit one object per line and flush. Changing a
key name breaks `gui/renderer.js`.

**The UI draws a real 65% layout.** `LAYOUT` in `gui/renderer.js` holds five
rows, each exactly 16 units wide, and every position carries the code the
device reports. Positions resolve against the live key matrix, so a key that
does not match is drawn dimmed and anything unplaced is listed rather than
hidden. Keep rows at 16u when editing.

## Protocol gotchas

These cost real time to rediscover. `PROTOCOL.md` has the full format.

**Reads must set `len`.** A read sends no payload but must still put the window
size in the `len` field. With `len` at zero, every read succeeds and returns
all zeros, which looks like an empty region rather than a malformed request.

**Select the interface by usage page and usage**, never by interface number.
The keyboard, mouse, consumer and system collections share the VID/PID. The
config interface is the one with usage page `0x0001` and usage `0x0000`.

**Skip asynchronous reports inside a transfer.** Reports starting `0xA0` or
`0xA1` arrive unsolicited on the same endpoint. A reply starts `0xAA` and
echoes the command byte. Treating an async report as a reply breaks every read
once the analog stream is running.

**Travel units are hundredths of a millimetre**, stored in 9-bit fields, so
`0..=511`. Stock actuation is `150` (1.50 mm). Measured full travel is `350`
(3.50 mm).

**Key matrix codes above `0xFF` are modifier bitmasks shifted left by eight.**
`0x0100` is LCtrl, `0x0200` LShift, `0x0400` LAlt, `0x0800` LWin, `0x1000`
RCtrl, `0x2000` RShift, `0x4000` RAlt. `0xFFFF` marks an unused matrix slot.
Class `0xF0` is the Fn action rather than a keyboard usage.

**The poll rate is a whole byte, not the low nibble.** The vendor code splits
byte 4 into report-rate and tick-rate nibbles, but 1000, 2000, 4000 and 8000 Hz
all share a low nibble of 1. Decode the byte through `proto::report_rate_hz`.

## Hardware safety

**Never bypass the encoder check before a write.** Key structures are
bit-packed, so a field this tool decodes wrongly can share a byte with one it
does not model. `read_travel_table_checked` returns the decoded structures plus
the raw bytes; `travel_roundtrip_diff` must return empty before writing. Keep
that gate on any new write path.

**All writes are read-modify-write.** Read the whole structure, change one
field, write it back.

**Never send command 238** (FactoryDataReset). `raw` already refuses it.

**Leave the calibration commands alone** (168, 169, 170 for write paths) unless
there is a specific reason. A botched calibration may require recalibrating
every switch and the recovery path is untested.

Restore stock values on a key with
`set-travel --key N --point 150 --press-rt 29 --release-rt 29`.

## Adding features

`reference/hub-configurator.deobfuscated.js` is the deobfuscated vendor bundle
and the source for decoding anything not yet implemented. It is one very long
line, so grep with context windows fails. Index by byte offset instead:

```python
src = open('reference/hub-configurator.deobfuscated.js', encoding='utf8').read()
i = src.index('class _Fire extends')
print(src[i:i+9000])
```

Structure getters spell out the bit layout directly. A line like
`511 & this.raw.getUint16(this.offset + 2, true)` states the field is 9 bits
at offset 2, little-endian.

`docs/ROADMAP.md` lists mapped command IDs for unimplemented features.

## Claims discipline

`docs/STATUS.md` separates what is confirmed on hardware from what is inferred
from the vendor bundle. Keep it accurate when behaviour is verified or
disproved. The vendor app is evidence of intent, not proof of firmware
behaviour; the two have already diverged once, since the analog stream works
with the debug flag off even though the flag's existence suggests otherwise.

One open question: whether the analog stream's key id uses the same numbering
as the key matrix. The gamepad's auto-binding assumes it does. Settle it by
pressing one known key under `monitor` and comparing against `keymap`.

## Platform

Windows only in practice. HID writes prepend a report-ID byte, and the virtual
controller needs ViGEmBus. `plugin()` and `wait_ready()` return before the HID
stack finishes attaching, so a settle delay before the first update is
required; without it updates fail with error 259.

## Repository note

`reference/` holds third-party proprietary code kept as protocol
documentation. Do not make this repository public with that file in it.
