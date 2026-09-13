# How the protocol was recovered

This document records the method, so the work can be repeated for a sibling
device or redone against a newer firmware.

## 1. Identify the device

Windows exposes every HID collection separately, and a keyboard of this class
publishes several under one VID/PID. Enumerate them and read the bus-reported
name:

```powershell
Get-PnpDevice -Class HIDClass -Status OK | Select-Object -ExpandProperty InstanceId
(Get-PnpDeviceProperty -InstanceId '<id>' -KeyName 'DEVPKEY_Device_BusReportedDeviceDesc').Data
```

The FIRE68 answers to vendor `0x373B`, product `0x104E`, manufacturer `G-COME`.
The registry does not carry the product string, so the bus-reported description
is the reliable source.

## 2. Find the configuration interface

Dump every collection's HID report descriptor and look for one that carries
large fixed-size reports in both directions. The `hidapi` crate exposes this
through `get_report_descriptor`.

The FIRE68 configuration interface decodes as:

```
05 01        Usage Page (Generic Desktop)
09 00        Usage (0)                      <- blank usage, the giveaway
a1 01        Collection (Application)
19 00 29 08  Usage Minimum 0, Maximum 8
15 00 26 ff 00   Logical 0 to 255
75 08 95 40  Report Size 8, Report Count 64
81 02        Input  (Data, Var, Abs)
...
91 02        Output (Data, Var, Abs)
c0           End Collection
```

64-byte reports in both directions with no report ID. The blank usage on the
Generic Desktop page distinguishes it from the keyboard, mouse, consumer and
system collections that share the same VID/PID. Select the interface by usage
page and usage, never by interface number alone, because the ordering is not
stable.

## 3. Recover the protocol from the vendor web app

The vendor configurator is a browser app that speaks WebHID, which means the
entire protocol is present in its JavaScript.

Fetch the entry point and its chunks:

```
curl -sSL https://hub.fgg.com.cn/ -o hub.html
curl -sSL https://hub.fgg.com.cn/assets/<bundle>.js -o bundle.js
```

The bundle is minified and string-array obfuscated, so every identifier and
constant is hidden behind a decoder function. Deobfuscate it before reading:

```
astcomp bundle.js --verify --report --out deob.js
```

The `--verify` mode executes the decoder and checks that the transformed
program behaves identically to the original. Confirm the report says
`behaviour: identical` before trusting the output.

That structural pass preserves the original mangled identifiers and emits a
single very long line, so grep with context windows fails on it. Extract by
byte offset instead:

```python
src = open('deob.js', encoding='utf8').read()
i = src.index('class _Fire extends')
print(src[i:i+9000])
```

For a copy meant to be read rather than machine-indexed, add formatting and
offline identifier renaming:

```
astcomp deob.js --verify --report --rename --provider heuristic --out readable.js
```

On this bundle that renamed 7,454 bindings across 3,281 scopes and turned one
line into 26,414, while still reporting `ast identical modulo names: yes` and
`behaviour: identical`. Both copies are in `reference/`; see
`reference/README.md` for which to use when.

Heuristic renaming infers names from usage, so treat them as a reading aid. The
masks, offsets and numeric constants are the ground truth, and they are
unchanged by renaming.

## 4. Read the protocol out of the deobfuscated source

Four things carry almost all the information.

**The packet base class** defines the framing. Look for a class with a `SIZE`
constant and getters named `flag`, `commandId`, `len` and `addr`. Its
`toUint8Array` method reveals the checksum rule.

**The command enum** maps names to bytes. Search for a distinctive command name
such as `GetInfo` and print the surrounding region.

**The transport class** shows how replies are matched. For this device, replies
carry the command byte at offset 1, and asynchronous reports are distinguished
by a marker at offset 0.

**The per-feature structure classes** give bit layouts directly, because the
getters and setters spell out every mask and shift:

```js
get ["point"]() { return 511 & this.raw.getUint16(this.offset + 2, true); }
```

That single line states the field is 9 bits wide, lives at offset 2, and is
little-endian.

## 5. Confirm against hardware

The web app is evidence of intent, not proof of firmware behaviour. Verify each
structure by reading it from the device and checking that the values are
plausible.

The decisive check for this device was the key table. Every slot read back
`point = 150`, and the vendor UI displays a 1.50 mm default, which fixes the
unit at 0.01 mm and confirms the bit layout at the same time.

A read that returns all zeros usually means the request was malformed rather
than that the region is empty. This protocol requires the `len` field to carry
the size of the window being read, even though a read sends no payload. With
`len` left at zero, every read succeeded and returned nothing.

## 6. Prove the encoder before writing

Decoding a bit-packed structure is safe. Writing one is not, because a field
this tool does not model may share a byte with a field it does. Re-encoding the
decoded structure and comparing it byte for byte against what the device
returned settles the question:

```
fire68 verify-encoding
```

All 1024 bytes of the key table round-trip exactly on the reference board, so
every bit is accounted for.

## 7. Look for capabilities the vendor app does not use

Counting references separates live features from firmware capabilities the app
never exercises:

```python
for pattern in ['debug-reporting', 'startCommunication', 'debugMode']:
    print(pattern, len(re.findall(pattern, src)))
```

Each of those appears exactly once in the FIRE68 code path, at its definition,
with no caller and no listener. The analog travel stream is therefore a
firmware feature the vendor software never surfaces. Hardware testing confirmed
the stream works regardless, which is the origin of this project's gamepad
support.

## 8. Read the structure classes carefully

The getters spell out the layout, but two habits of this bundle mislead a quick
reading.

**A mask is not always followed by a shift.** Compare these two getters from
the same class:

```js
get ["magneticShaftDefaultType"]() { return (224 & this.raw.getUint8(this.offset)) >> 5; }
get ["socdPriority"]()             { return 240 & this.raw.getUint8(this.offset + 1); }
```

The first returns a normalised 0-7. The second returns the high nibble still in
place, so its values are `0x00`, `0x10`, `0x20` and so on rather than 0, 1, 2.
Copying the field into a tool that shifts it would silently renumber every
mode. Read the setter too; the pair together fixes both the width and the
alignment.

**Endianness is explicit and mixed.** The trigger table reads
`getUint16(offset, true)` — little-endian. The analog stream reads its travel
field big-endian. The `true` argument is the only thing that distinguishes
them, and it is easy to skim past.

## 9. Decode the enums, not just the structures

Structure classes give layout. The enums give meaning, and they sit in one
compacted region of the bundle built by the usual TypeScript enum pattern:

```js
Ur = (e => (e[e.null = 0] = "null", e[e.general = 16] = "general", ...))
```

Searching for a single member name lands you in the middle of the whole set.
This is how the action-class and command tables in `PROTOCOL.md` were
recovered. Two enums carry most of the remaining meaning: the command list and
the key action classes.

## The device family

Every entry in the vendor bundle's device registry uses vendor `0x373B`, and
every one selects its configuration interface with **usage `0`, usage page
`1`** — the same rule this tool applies. The registry lists 32 product IDs:

| Product ID | Model | Firmware mark |
|---|---|---|
| `0x1038`, `0x1047`, `0x104E`, `0x1052` | FIRE68 | `Fire68` |
| `0x1050` | FIRE68 (LL) | `Fire68` |
| `0x103B` | FIRE68 Pro | `Fire68Pro` |
| `0x1051` | FIRE68 Pro (LL) | `Fire68Pro` |
| `0x1061` | FIRE68 Ultra | `Fire68Ultra` |
| `0x10C1`, `0x10EB` | FIRE68 Ultra V2 | `Fire68Ultra` |
| `0x10D5` | FIRE68 Ultra Limited | `fire68` |
| `0x10F2`, `0x10F3` | FIRE68 V2 | `fire68-v2` |
| `0x10F4`, `0x10F5` | FIRE68 Pro V2 | `fire68-v2` |
| `0x1064` | NANO68 | `Nano68` |
| `0x106B`, `0x106D`, `0x10FF`, `0x1100`, `0x110C`, `0x113A`, `0x1143` | NANO68 Pro | `Nano68` |
| `0x1101` | NANO68 Plus | `Nano68` |
| `0x11A1` | NANO68 Ultra | `Nano68` |
| `0x106E`, `0x10A8` | MAD68 R | `Mad68R` |
| `0x10D3`, `0x10D4`, `0x1102`, `0x1109`, `0x1131` | MAD68 Pro R | `mad68pro` |

The reference board for this project is `0x104E`.

Each entry also carries a separate bootloader VID/PID used by the firmware
updater. Those are deliberately not listed here; see the firmware note in
`docs/ROADMAP.md`.

### Porting to one of these

The framing, checksum rule, command numbering and action classes are shared
across the family, so the transport layer should work unmodified. What differs
per model:

1. **Product ID.** Add it beside `PID_FIRE68` in `fire68/src/proto.rs`.
2. **Region sizes.** The 128-slot key matrix and 1024-byte trigger table are
   this model's dimensions. A board with a different switch count reports
   different sizes, and reads are windowed, so a wrong size truncates rather
   than errors.
3. **Physical layout.** `LAYOUT` in `gui/renderer.js` is a 65% arrangement.
   Positions resolve against the live matrix, so a mismatched layout degrades
   to dimmed keys and a list rather than to wrong data.
4. **The profile class.** The bundle pairs each model with a profile class
   (`FireProfile`, `Nano68Profile`, `Mad68Profile` and others) that carries the
   per-model defaults. Read the matching one before assuming a default.

Run `fire68 verify-encoding` on any new board before writing to it. The
encoder gate is model-independent and will catch a structure whose layout
differs from this one.

## Traps that cost real time

Collected here because each one produced a plausible-looking wrong answer
rather than an error.

**A read with `len` at zero succeeds and returns zeros.** Reads send no
payload, so setting a payload length looks meaningless, but the field carries
the size of the window being requested. Every read appeared to work and every
region appeared empty.

**Interface numbers are not stable.** The keyboard, mouse, consumer and system
collections share the VID/PID. Selecting by interface number works until the
enumeration order changes. Select by usage page and usage.

**Asynchronous reports arrive mid-transfer.** Reports beginning `0xA0` or
`0xA1` are unsolicited and land on the same endpoint as replies. Once the
analog stream is running, a transfer that treats the next report as its reply
reads garbage. Match on `0xAA` plus the echoed command byte and skip anything
else.

**Command `160` is both a command and a report marker.** `GetKeyTriggerTravel`
is `160` host-to-device; `0xA0` is the debug report marker device-to-host. They
never collide because direction and byte position differ, but a dispatcher that
ignores direction will conflate them.

**The poll-rate byte is not two nibbles.** The vendor code presents byte 4 as a
low report-rate nibble and a high tick-rate nibble. 1000, 2000, 4000 and 8000
Hz all share a low nibble of `1`, so a nibble-only decode reports 1000 Hz for
all four. Decode the whole byte.

**The vendor app is evidence of intent, not of firmware behaviour.** The two
have already diverged once here: the analog stream works with the `debugMode`
flag off, even though the flag's existence implies otherwise. Verify on
hardware before documenting anything as fact.

## Related work

[`spawn-universal`](https://github.com/404oops/spawn-universal) is the same kind
of project for SONiX-based SPAWN hall-effect keyboards (`0C45:8A01`). It is not
compatible with this hardware and shares no protocol with it — SPAWN uses
vendor usage pages `0xFF67`/`0xFF68` and its own packet format — but it covers
several features unimplemented here, including lighting, remapping and
calibration, and is worth reading as a second example of the same problem.

## Tools used

| Tool | Purpose |
|---|---|
| `Get-PnpDevice` | Enumerate HID collections and read bus-reported names |
| `hidapi` | Dump report descriptors and speak to the device |
| `curl` | Fetch the vendor bundle |
| `astcomp` | Deobfuscate the string-array encoding, with behaviour verification |
| Python | Extract regions from a single-line bundle by byte offset |
