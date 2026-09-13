# FIRE68 vendor HID protocol

Recovered by deobfuscating the vendor web configurator at `hub.fgg.com.cn` and
confirmed against the hardware. Everything below marked **verified** was
exercised against a real FIRE68 on firmware 1.09.

## Device

| | |
|---|---|
| Vendor ID | `0x373B` (G-COME / Compx) |
| Product ID | `0x104E` (FIRE68) |
| Config interface | interface 1, usage page `0x0001`, usage `0x0000` |
| Report descriptor | 64-byte Input + 64-byte Output, **no report ID** |

The same VID/PID also exposes the normal keyboard, consumer-control and system
collections. Only the collection with a blank usage on the Generic Desktop page
speaks this protocol. Pick it by usage page and usage, not by interface number
alone.

On Windows, HID writes carry a leading report-ID byte, so each write is 65 bytes:
`0x00` followed by the 64-byte packet.

## Packet framing — verified

Host to device, fixed 64 bytes:

| Offset | Size | Field | Notes |
|---|---|---|---|
| 0 | 1 | flag | always `0x55` |
| 1 | 1 | command | see the table below |
| 2 | 1 | key | command-specific selector, usually `0` |
| 3 | 1 | checksum | `sum(bytes[4..64]) & 0xFF` |
| 4 | 1 | len | payload length, or the size of the window being read |
| 5 | 2 | addr | u16, **little-endian** |
| 8 | 56 | payload | |

The checksum covers bytes 4 through 63. Byte 3 holds the result and is excluded.

Read commands send an empty payload but still set `len` to the number of bytes
they want back. Leaving `len` at zero makes the device reply with all zeros —
the reply looks successful but carries no data.

Device to host, dispatched on byte 0:

| Byte 0 | Meaning |
|---|---|
| `0xAA` | reply; byte 1 echoes the command, byte 4 echoes the length |
| `0xA0` | asynchronous debug report — per-key analog travel |
| `0xA1` | asynchronous synchronous-info report |

Replies are matched by the command byte, so asynchronous reports arriving
mid-transfer must be skipped rather than treated as the answer.

## Commands

| ID | Name | Status |
|---|---|---|
| 1 | FastCommunicationStart | verified — starts the analog stream |
| 2 | FastCommunicationStop | verified |
| 3 | GetInfo | verified — firmware version |
| 4 | GetBase | verified — echoes VID, PID, version |
| 5 | GetFunc | verified — function-variable area |
| 6 | SetFunc | verified — toggled one bit, all other bytes unchanged |
| 7 | GetDefaultKeyMatrix | verified |
| 8 | GetUseKeyMatrix | verified — active key matrix |
| 9 | SetUseKeyMatrix | untested |
| 10 | GetLedDefine | verified |
| 11 | SetLedDefine | untested |
| 12 | GetMacro | untested |
| 13 | SetMacro | untested |
| 160 | GetKeyTriggerTravel | verified |
| 161 | SetKeyTriggerTravel | untested |
| 162 / 163 | Get/Set dynamic-keystroke info | untested |
| 164 / 165 | Get/Set multi-tap key info | untested |
| 166 / 167 | Get/Set toggle key info | untested |
| 168 | StartCalibration | untested |
| 169 | EndCalibration | untested |
| 170 | GetCalibration | verified — returned the ASCII state `unknw` |
| 241 / 242 | Get/Set app define | 241 verified |
| 238 | FactoryDataReset | **not sent**; wipes stored config |

Command `160` doubles as the `0xA0` debug marker in the device-to-host
direction. The two never collide because direction and byte position differ.

## Trigger travel table — verified

`GetKeyTriggerTravel` returns 1024 bytes: 128 slots of 8 bytes, read in 56-byte
windows. Fields are little-endian and bit-packed.

| Offset | Bits | Field |
|---|---|---|
| 0 | 0-4 | magnetic shaft type |
| 0 | 5-7 | shaft default type |
| 1 | 0-3 | trigger type |
| 1 | 4-7 | SOCD priority |
| 2 | 0-8 | actuation point |
| 4 | 0-8 | rapid trigger, press |
| 4 | 9-15 | press dead zone |
| 6 | 0-8 | rapid trigger, release |
| 6 | 9-15 | release dead zone |

Travel values are 9-bit, so `0..=511`. The unit is **0.01 mm**. A stock board
reads `150` on every key, which is the 1.50 mm default the vendor UI shows.
Rapid trigger reads `29`, which is 0.29 mm.

Measured full travel on the reference board is `350`, so a key bottoms out at
3.50 mm. Values above that are reachable in the field but never reported.

## Key matrix — verified

`GetUseKeyMatrix` returns 384 bytes: 128 slots of 3 bytes, `[class, code_hi,
code_lo]`. Class `0x10` is a plain keyboard key. Class `0xF0` is a function
action. A slot reading `0xFFFF` is an unused matrix position.

For class `0x10`, a code of `0xFF` or below is a HID keyboard usage. A code
above that is a **modifier bitmask shifted left by eight**:

| Code | Key | Code | Key |
|---|---|---|---|
| `0x0100` | Left Ctrl | `0x1000` | Right Ctrl |
| `0x0200` | Left Shift | `0x2000` | Right Shift |
| `0x0400` | Left Alt | `0x4000` | Right Alt |
| `0x0800` | Left Win | | |

On the reference board, slots 0 to 71 carry keys, with gaps at 8, 35 and 59,
and every slot from 72 upward reads `0xFFFF`. That is 69 keys: the 68 of a 65%
layout plus one matrix position (`0x87`) with no physical key.

Slot index is the same index used by the trigger-travel table, so reading this
matrix identifies a physical key without needing anyone to press it. On the
reference board W, A, S and D sit at slots 64, 9, 55 and 10.

Whether the analog stream's key id uses this same numbering is **not yet
confirmed**. Press one known key under `fire68 monitor` and compare the
reported slot against this matrix to settle it.

## Function-variable area — partly verified

`GetFunc` returns a 56-byte window. Offsets are relative to the start of that
payload.

| Offset | Bits | Field |
|---|---|---|
| 4 | all 8 | poll rate, see below |
| 6 | 0 | Windows-key lock |
| 6 | 1 | Alt-Tab lock |
| 6 | 2 | Alt-F4 lock |
| 6 | 3 | application lock |
| 7 | 1 | always trigger at bottom-out |
| 7 | 3 | **debug mode** |
| 7 | 5-7 | anti-shake rating |
| 8 | | lighting mode |
| 9 | | brightness |
| 10 | | speed |
| 11 | | direction |
| 12 | | colour mark |
| 13 | | monochromatic index |
| 14-16 | | RGB colour |
| 24 | | side-light mode |

A stock board read back brightness `0x64` (100) and lighting mode `0x06`, which
matches the vendor UI.

### Poll rate — verified

The vendor code exposes byte 4 as a low "report rate" nibble and a high "tick
rate" nibble, but the rates above 1000 Hz differ only in the high nibble, so
the byte has to be read as a unit:

| Byte | Rate | Byte | Rate |
|---|---|---|---|
| `0x01` | 1000 Hz | `0x21` | 2000 Hz |
| `0x02` | 500 Hz | `0x41` | 4000 Hz |
| `0x04` | 250 Hz | `0x81` | 8000 Hz |
| `0x08` | 125 Hz | | |

The reference board reads `0x01`, so 1000 Hz.

## Analog travel stream

Sending `FastCommunicationStart` makes the keyboard emit `0xA0` reports as keys
move. No configuration change is needed; see the section below. Layout,
relative to the packet:

| Offset | Size | Field |
|---|---|---|
| 1 | 1 | key class |
| 2 | 1 | key id — the slot index |
| 6 | 2 | travel, **big-endian** |
| 10 | 1 | calibration count |

This is the analog source for gamepad emulation. The travel field uses the same
0.01 mm unit as the trigger table and saturates at 350 on the reference board.

## The debug flag is not required — verified

The function area holds a `debugMode` bit, and the natural reading is that the
stream depends on it. Hardware says otherwise. With the flag **off**,
`FastCommunicationStart` alone produced a full travel curve:

```
slot     raw
   0      33
   0     350     <- bottomed out
   0     331
   0     193
   0     104
   0       6
   0       0
```

No configuration write is needed to use the analog stream.

The vendor app never exercises this path at all. Within the FIRE68 code,
`debugMode` appears only in its own accessors and JSON dump with no caller,
`startCommunication` is defined and never called, and the `debug-reporting` and
`synchronous-reporting` events are dispatched with no listener. The fully
developed realtime ADC feature in the same bundle belongs to a different device
family.

## Write paths — verified

`SetFunc` was exercised by toggling the debug bit. Byte 7 moved from `0x02` to
`0x0a` and back, and every other byte in the function area kept its value.
Brightness, lighting mode and colour were unaffected.

Before writing a bit-packed structure, re-encode what was decoded and compare it
against the device's own bytes. All 1024 bytes of the key table round-trip
exactly, which proves every field is modelled. `fire68 verify-encoding`
performs this check.
