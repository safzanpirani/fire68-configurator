# Analog gamepad emulation

A hall-effect keyboard measures how far each key travels. This feature sends
that measurement to a virtual Xbox 360 controller, so games that accept a
gamepad receive genuine analog input from the keyboard. A key held halfway
walks, and the same key pressed fully runs.

The vendor software does not offer this. The firmware streams the data anyway.

## Requirements

- [ViGEmBus](https://github.com/nefarius/ViGEmBus/releases), which provides the
  virtual controller driver
- Nothing else. The analog stream needs no configuration change on the
  keyboard.

Check the driver half on its own, without involving the keyboard:

```
fire68 gamepad --test
```

A virtual pad appears to Windows and its sticks and triggers sweep for six
seconds. Watch it in `joy.cpl`. If this fails, the problem is ViGEmBus.

## Setup

Create a binding file. This reads the keyboard's key matrix and locates W, A, S
and D automatically, so no manual index hunting is needed:

```
fire68 gamepad --init
```

Run it:

```
fire68 gamepad
```

## Configuration

`gamepad.json`:

```json
{
  "travel_max": 350,
  "travel_deadzone": 20,
  "bindings": [
    { "key": 64, "target": "ly+" },
    { "key": 9,  "target": "lx-" },
    { "key": 55, "target": "ly-" },
    { "key": 10, "target": "lx+" }
  ]
}
```

| Field | Meaning |
|---|---|
| `travel_max` | Travel treated as fully pressed, in hundredths of a millimetre |
| `travel_deadzone` | Travel below which the key counts as released |
| `bindings[].key` | Slot index, as printed by `fire68 keymap` |
| `bindings[].target` | Where the travel goes on the virtual pad |

### Targets

| Target | Meaning |
|---|---|
| `lx+` / `lx-` | Left stick right / left |
| `ly+` / `ly-` | Left stick up / down |
| `rx+` / `rx-` | Right stick right / left |
| `ry+` / `ry-` | Right stick up / down |
| `lt` / `rt` | Left / right trigger |

Opposing targets on one axis subtract. Binding A to `lx-` and D to `lx+` gives
a single horizontal axis, and holding both part-way produces the difference
rather than a conflict.

## Tuning

**Set `travel_max` from measurement, not from the switch's rated travel.**
Run `fire68 monitor`, bottom out a key, and use the largest value reported. The
reference board peaks at 350, which is 3.50 mm. A `travel_max` set above the
real peak means the stick never reaches full deflection.

**Raise `travel_deadzone` if the stick drifts at rest.** Hall-effect sensors
report small nonzero values for an unpressed key. The dead zone is the
threshold below which a key counts as released. Start at 20 and increase until
resting keys read zero.

**Lower `travel_deadzone` for finer low-end control.** The normalised output
scales across the span between the dead zone and `travel_max`, so a smaller
dead zone spends more of the key's travel on small movements.

## How normalisation works

```
value = (raw - travel_deadzone) / (travel_max - travel_deadzone)
```

The result is clamped to 0.0 through 1.0, then scaled to the target's range.
Sticks use the signed 16-bit range, and triggers use 0 through 255.

Every report recomputes the entire pad state from the latest travel of every
bound key, so axis composition never drifts.

## Latency

The keyboard streams a report whenever a bound key's travel changes, and each
report triggers an immediate pad update. No polling interval is imposed, so
added latency is the USB transfer plus the ViGEm driver hop.

## Limitations

**Games that read raw keyboard input still see the keys.** The keyboard keeps
sending normal keystrokes while the virtual pad runs. In a game that reads both
keyboard and gamepad, W drives the stick and registers as W. Either rebind the
keys in the game or remap those slots on the keyboard.

**Xbox 360 layout only.** Buttons are not yet bound, so only axes and triggers
are driven.

**One virtual controller.** The pad disappears when the process exits.

## Troubleshooting

| Symptom | Cause |
|---|---|
| `gamepad --test` fails to connect | ViGEmBus is not installed |
| Error 259 on update | The driver stack had not finished attaching, which the built-in settle delay handles |
| Pad appears but never moves | No analog reports arriving, so check `fire68 monitor` first |
| Stick pinned to full deflection | `travel_max` is set below the real peak travel |
| Stick drifts with no keys held | `travel_deadzone` is too low |
| Only some keys respond | Those slot indices are not in `bindings`, so check `fire68 keymap` |
