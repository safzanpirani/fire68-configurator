# fire68

A local command-line configurator for the FIRE68 hall-effect keyboard, plus
analog gamepad emulation. No browser, no vendor web app.

The vendor protocol is documented in [PROTOCOL.md](PROTOCOL.md).

## Build

```
cd fire68
cargo build --release
```

The binary lands at `fire68/target/release/fire68.exe`.

## What works today

These were exercised against a real FIRE68 on firmware 1.09:

```
fire68 list       # every HID interface the keyboard exposes
fire68 info       # firmware version, debug mode, lighting, report rate
fire68 travel     # per-key actuation point and rapid trigger
fire68 keymap     # which key each slot index sends
fire68 raw ...    # send an arbitrary command, for protocol exploration
fire68 verify-encoding   # prove the encoder is byte-faithful before writing
fire68 gamepad --test    # sweep a virtual Xbox pad, no keyboard needed
```

Every command also takes `--json` for scripting or for the desktop app.

`verify-encoding` passes on the reference board: re-encoding the decoded key
table reproduces all 1024 device bytes exactly. `set-travel` refuses to write
if that check ever fails.

`gamepad --test` was confirmed working: the virtual pad appears to Windows and
its sticks and triggers move.

`fire68 info` on a stock board prints firmware `1.09`, brightness 100 and
lighting mode 6. `fire68 travel` prints 128 slots at actuation `150`, which is
1.50 mm.

## What needs a person at the keyboard

Every command above only reads. The commands below write to the keyboard or
need someone to press a key, so they are untested:

```
fire68 set-travel --key 64 --point 100    # 1.00 mm actuation on W
fire68 debug on                           # enable the analog stream
fire68 monitor                            # live analog travel per key
fire68 gamepad --init                     # write a starter binding config
fire68 gamepad                            # drive a virtual Xbox pad
```

### Suggested order

1. **Check the travel read-back first.**

   ```
   fire68 travel
   ```

   Note the current values so you can restore them.

2. **Change one key and confirm it took.**

   ```
   fire68 set-travel --key 64 --point 100
   fire68 travel
   ```

   Slot 64 is W on the reference board; confirm yours with `fire68 keymap`.
   The command prints the before and after values. If the table now reads 100
   for that slot, writes work. Restore with `--point 150`.

   If the keyboard misbehaves, the vendor web app will rewrite a clean config.

3. **Turn on the analog stream.**

   ```
   fire68 debug on
   fire68 monitor
   ```

   Press and slowly release a key. Each report prints a slot index and a raw
   travel value. Note the largest value you see when a key is bottomed out —
   that is your `travel_max`, expected near 400.

4. **Set up the gamepad.**

   Install [ViGEmBus](https://github.com/nefarius/ViGEmBus/releases) first; the
   virtual controller needs that driver.

   ```
   fire68 gamepad --init
   ```

   This reads the key matrix and binds W, A, S and D to the left stick
   automatically. Edit `gamepad.json` to set `travel_max` to the value you saw
   in step 3, then:

   ```
   fire68 gamepad
   ```

   Check it with any gamepad tester. A half-pressed W should read as a
   half-deflected stick rather than full tilt.

## Desktop app

An Electron UI in `gui/` drives the same binary. It does not reimplement the
protocol: it spawns `fire68 --json` and renders the result, so there is one
implementation of the wire format.

```
cd gui
npm install
npm start
```

Four tabs:

- **Keys** — every key with its actuation point, click one to edit actuation
  and rapid trigger in millimetres, then apply.
- **Analog** — live travel per key with bar graphs, and the peak value to use
  as `travel_max`.
- **Gamepad** — start and stop the virtual pad, with live stick and trigger
  readouts.
- **Device** — the debug-mode toggle and the encoder safety check.

The binary must be built first (`cargo build --release`); the app looks for it
in `fire68/target/`. Relative config paths resolve against `gui/`, so either
keep `gamepad.json` there or give an absolute path.

Create the binding file from the CLI first, which auto-detects WASD:

```
cd gui
../fire68/target/release/fire68.exe gamepad --init
```

## Gamepad bindings

`gamepad.json`:

```json
{
  "travel_max": 400,
  "travel_deadzone": 20,
  "bindings": [
    { "key": 64, "target": "ly+" },
    { "key": 9,  "target": "lx-" },
    { "key": 55, "target": "ly-" },
    { "key": 10, "target": "lx+" }
  ]
}
```

`key` is a slot index from `fire68 keymap`. `target` is one of `lx+`, `lx-`,
`ly+`, `ly-`, `rx+`, `rx-`, `ry+`, `ry-`, `lt`, `rt`. Opposing bindings on the
same axis subtract, so holding two keys part-way gives a blended deflection.

`travel_deadzone` is the travel below which a key counts as fully released.

## Safety

`fire68 raw` refuses to send command 238, the factory reset, because it wipes
the keyboard's stored configuration.

Writes are read-modify-write: the tool reads the whole table, changes the one
field asked for, and writes it back. `set-travel` prints the before and after
values and does nothing when they match.
