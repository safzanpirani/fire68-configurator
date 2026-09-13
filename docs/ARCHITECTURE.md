# Architecture

## Layout

```
fire68/            Rust binary, the only code that touches the device
  src/proto.rs     Wire format: framing, checksum, commands, data structures
  src/device.rs    Interface discovery, framed transfers, blob paging
  src/gamepad.rs   Analog travel mapped onto a virtual Xbox controller
  src/main.rs      Command-line surface and output formatting
gui/               Electron desktop app
  main.js          Spawns the binary, relays JSON over IPC
  preload.js       Context-isolated bridge
  renderer.js      UI logic and the physical key layout
  index.html       Markup, themes and styles
  capture-hook.js  Dev-only screenshot hook, inert without ELECTRON_CAPTURE
reference/         Deobfuscated vendor bundle, kept as protocol documentation
docs/              This documentation
```

## One implementation of the protocol

The desktop app does not speak HID. It spawns the Rust binary with `--json` and
renders the result. A second implementation in JavaScript would double the
surface area for protocol bugs and would need its own safety gates, so the UI
stays a presentation layer over the verified engine.

The cost is a process spawn per action. For a configuration tool that cost is
irrelevant, and streaming commands avoid it entirely by keeping one child
process alive and emitting one JSON object per line.

## Layer boundaries

**`proto.rs` is pure.** It builds and parses byte arrays and knows nothing
about I/O. Every structure has an `encode` and a `decode`, which makes the
round-trip property testable without hardware. All unit tests live at this
layer for that reason.

**`device.rs` owns I/O.** It selects the configuration interface by usage page
and usage, frames writes with the report-ID byte Windows requires, and matches
replies to requests. It also hides the paging rule, because the device serves
large regions in 56-byte windows and callers should not repeat that arithmetic.

**`main.rs` formats.** Each subcommand reads or writes through `device.rs` and
renders either human text or JSON. Adding an output format touches this file
alone.

## Transfer matching

Three kinds of report arrive on the same endpoint. The transport dispatches on
byte 0:

| Byte 0 | Kind | Handling |
|---|---|---|
| `0xAA` | Reply | Match byte 1 against the command that was sent |
| `0xA0` | Debug report | Deliver to the analog stream |
| `0xA1` | Sync report | Deliver to the analog stream |

A synchronous transfer skips asynchronous reports rather than mistaking one for
its answer. Without that, enabling the analog stream would break every
configuration read that followed.

## Reads carry a length

The device serves a window of a larger region. A read sets `addr` to the offset
and `len` to the number of bytes wanted, and sends no payload. Treating `len`
as "payload length" makes every read return zeros with no error, which looks
like an empty region rather than a malformed request.

`read_blob` and `write_blob` encapsulate this. Callers ask for a region by size
and receive the whole thing.

## Write safety

`read_travel_table_checked` returns both the decoded structures and the raw
bytes they came from. `travel_roundtrip_diff` re-encodes the structures and
lists every differing byte. A write proceeds only when that list is empty.

This matters because the key structure is bit-packed. The actuation point
occupies 9 bits of a 16-bit field, and the remaining 7 bits hold a dead zone.
Writing a structure this tool decoded incorrectly would silently destroy the
fields sharing those bytes. The round-trip check converts that risk into a
detectable, testable condition.

The same reasoning applies to the function area, which holds lighting, report
rate and lock settings in packed bytes. Changes there are read-modify-write for
the same reason.

## Gamepad data flow

```
keyboard --0xA0 reports--> device.rs --> gamepad.rs --> ViGEmBus --> Windows
```

Each report gives one slot's travel. `gamepad.rs` keeps the latest value per
bound slot, normalises it against the configured travel range, and recomputes
the whole pad state on every report. Opposing bindings on one axis subtract, so
holding two keys part-way produces a blended deflection rather than a fight
between two writers.

Recomputing the full state each time keeps the axis composition stateless and
avoids drift from incremental updates.

## Virtual controller timing

`plugin()` followed by `wait_ready()` reports success before the Windows HID
stack finishes attaching the device. Updating immediately fails with error 259.
A short settle delay after `wait_ready()` resolves it. The delay is a property
of the driver stack, not of this code.

## Electron process model

`contextIsolation` is on and `nodeIntegration` is off. The renderer reaches the
main process only through the preload bridge, which exposes a fixed set of
named operations. The renderer cannot spawn processes or read files.

One streaming child process exists at a time. Starting a stream stops any
previous one, and quitting the app kills it, so no orphan holds the device open.

## Drawing the keyboard

`LAYOUT` in `gui/renderer.js` describes the physical 65% board as five rows of
exactly 16 units. Each position carries the code the device reports for that
key, and positions resolve against the live key matrix at load time rather than
against a hardcoded slot order. A position that finds no match renders dimmed,
and any key the device reports without a layout position is listed below the
board. Neither case is silently dropped, because a board variant with a
different matrix should be visibly wrong rather than quietly incomplete.

Modifier keys need care. The matrix encodes them as bitmasks shifted left by
eight rather than as HID usages, so `0x0200` is LShift.

## Testing strategy

Unit tests cover the layers that do not need hardware:

- Packet framing and the checksum rule, including that the checksum byte is
  excluded from its own sum
- Bit-packing round-trips for the key structure, including saturation at the
  9-bit boundary
- The debug flag toggle, asserting neighbouring bits are preserved
- Travel normalisation, including the dead zone and clamping
- Configuration validation, rejecting duplicate bindings and inverted ranges
- Poll-rate decoding, including that an undocumented byte returns nothing
  rather than guessing

Hardware behaviour is verified by running read commands against the device and
checking the values against what the vendor UI reports. `verify-encoding` is
the machine-checkable form of that.
