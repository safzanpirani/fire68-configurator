# fire68

A local configurator for the FIRE68 hall-effect keyboard. It replaces the
vendor web app with a command-line tool and a desktop UI, and it adds analog
gamepad emulation that the vendor software does not offer.

The keyboard reports how far each key is pressed, not merely whether it is
down. This project exposes that travel for configuration and feeds it to a
virtual Xbox controller, so a half-pressed key produces a half-deflected stick.

## Documentation

| Document | Contents |
|---|---|
| [PROTOCOL.md](PROTOCOL.md) | The vendor HID protocol: framing, commands, data structures |
| [docs/REVERSE-ENGINEERING.md](docs/REVERSE-ENGINEERING.md) | How the protocol was recovered, and how to repeat it |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Code layout and the design decisions behind it |
| [docs/GAMEPAD.md](docs/GAMEPAD.md) | Analog controller emulation, configuration and tuning |
| [docs/STATUS.md](docs/STATUS.md) | What is verified on hardware, what is inferred, what is unknown |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Mapped but unimplemented features |

## Requirements

- Rust 1.80 or newer
- Windows (the HID transport and the virtual controller are Windows-specific)
- [ViGEmBus](https://github.com/nefarius/ViGEmBus/releases) for gamepad emulation only
- Node.js 18 or newer for the desktop UI only

## Build

```
cd fire68
cargo build --release
```

The binary lands at `fire68/target/release/fire68.exe`.

## Quick start

```
fire68 list       # every HID interface the keyboard exposes
fire68 info       # firmware version, poll rate, lighting, debug flag
fire68 keymap     # which key each slot index sends
fire68 travel     # per-key actuation point and rapid trigger
```

Make a key trigger earlier, at 1.00 mm instead of the 1.50 mm default:

```
fire68 set-travel --key 64 --point 100
```

Slot 64 is W on the reference board. Confirm your own with `fire68 keymap`.

Watch analog travel as you press keys:

```
fire68 monitor
```

Drive a virtual Xbox controller from key travel:

```
fire68 gamepad --init    # auto-detects W, A, S and D
fire68 gamepad
```

## Commands

| Command | Effect | Writes to keyboard |
|---|---|---|
| `list` | Enumerate the keyboard's HID interfaces | no |
| `info` | Firmware version, poll rate and global settings | no |
| `keymap` | Slot index to key name | no |
| `travel` | Per-key actuation and rapid trigger | no |
| `monitor` | Stream live analog travel | no |
| `verify-encoding` | Prove the encoder is byte-faithful | no |
| `raw` | Send an arbitrary protocol command | depends |
| `set-travel` | Change actuation and rapid trigger | yes |
| `debug` | Toggle the debug flag | yes |
| `gamepad` | Run the virtual controller | no |
| `gamepad --init` | Write a starter binding file | no |
| `gamepad --test` | Sweep the virtual pad without the keyboard | no |

Every command accepts `--json`, which emits a single JSON object. `monitor` and
`gamepad` emit one JSON object per line so they can be consumed as a stream.

## Units

Travel values are hundredths of a millimetre throughout. An actuation point of
`150` means 1.50 mm. Full travel measured 350 on the reference board, so a key
bottoms out at 3.50 mm. The valid range for any travel field is 0 to 511,
because the firmware stores these as 9-bit values.

## Desktop app

```
cd gui
npm install
npm start
```

The UI does not reimplement the protocol. It spawns the Rust binary with
`--json` and renders the result, so the wire format exists in exactly one
place. Build the binary first.

Three tabs, with a light and a dark theme:

- **Keys** draws the physical 65% layout. Every key shows its actuation point,
  keys tuned away from the factory 1.50 mm are marked, and clicking one opens
  the actuation and rapid-trigger controls. Switching on live travel fills each
  key from the bottom as you press it.
- **Gamepad** starts and stops the virtual controller and shows live stick and
  trigger positions.
- **Device** holds the write safety check, the debug flag, and the firmware,
  lighting and poll-rate readout.

Relative config paths resolve against `gui/`, so keep `gamepad.json` there or
give an absolute path.

## Safety

Three mechanisms guard against corrupting the keyboard's stored configuration.

**Byte-faithfulness gate.** Before any write to the key table, the tool decodes
the table, re-encodes it, and compares the result against the bytes the
keyboard returned. A write proceeds only when every byte matches. This proves
the encoder models every field, including bit-packed fields that share a byte
with something the tool does not interpret. Run it directly with
`fire68 verify-encoding`.

**Read-modify-write.** Changing one field reads the whole structure, edits the
single target field, and writes the structure back. Unrelated settings keep
their values.

**Factory reset is blocked.** `fire68 raw` refuses command 238, which erases the
keyboard's stored configuration.

If a write ever leaves the keyboard in a bad state, the vendor web app at
`hub.fgg.com.cn` will rewrite a clean configuration.

## Recovering from mistakes

Restore the stock actuation and rapid trigger on one key:

```
fire68 set-travel --key 64 --point 150 --press-rt 29 --release-rt 29
```

Those are the values every key carries from the factory.

## License and scope

This is an interoperability project for hardware the author owns. The
`reference/` directory holds a deobfuscated copy of the vendor's own web
bundle, kept as protocol documentation. Treat that file as third-party
proprietary code and do not redistribute it.
