# Status

What is confirmed on hardware, what is inferred from the vendor software, and
what remains unknown. Reference board: FIRE68, firmware 1.09.

## Confirmed on hardware

| Item | Evidence |
|---|---|
| Device identity | Vendor `0x373B`, product `0x104E`, manufacturer `G-COME`, bus name `FIRE68` |
| Configuration interface | Interface 1, usage page `0x0001`, usage `0x0000`, 64-byte reports each way, no report ID |
| Packet framing | Reads and writes both succeed with the documented header |
| Checksum rule | Every command is accepted, and a wrong sum is rejected |
| Reads need `len` | With `len` at zero every read returns zeros; with `len` set the data appears |
| `GetInfo` | Returns firmware 1.09 |
| `GetBase` | Echoes vendor `0x373B`, product `0x104E`, version 1.09 |
| `GetFunc` | Returns brightness 100, lighting mode 6, colour `00 ff ff`, matching the vendor UI |
| `GetUseKeyMatrix` | 128 slots of 3 bytes, decoding to sensible key names |
| `GetKeyTriggerTravel` | 128 slots of 8 bytes, every slot at `point = 150` |
| Travel unit | `150` corresponds to the vendor UI's 1.50 mm default, fixing the unit at 0.01 mm |
| Full travel | Analog stream saturates at `350`, so keys bottom out at 3.50 mm |
| `GetCalibration` | Returns the ASCII state `unknw` |
| Encoder fidelity | All 1024 key-table bytes re-encode identically, verified by `verify-encoding` |
| `SetFunc` writes | Toggling the debug flag changed byte 7 from `0x02` to `0x0a` and left every other byte untouched |
| Write reversibility | Clearing the flag restored byte 7 to `0x02` exactly |
| Analog stream | `FastCommunicationStart` produces `0xA0` reports carrying per-key travel |
| Analog stream needs no config change | Travel streamed correctly with the debug flag off |
| Virtual controller | `gamepad --test` plugs in a pad that Windows sees and drives its axes |
| Key matrix covers 69 slots | Slots 0 to 71 carry keys, with gaps at 8, 35 and 59; slots 72 upward read `0xFFFF` |
| Modifier encoding | Codes at or above `0x100` are modifier bitmasks shifted left by eight |
| Poll rate | Byte 4 reads `0x01`, which the vendor enum defines as 1000 Hz |
| Physical layout | All 68 layout positions resolve against the live matrix; only slot 16 (`0x87`) has no position |

## Notable finding: the debug flag is unnecessary

The function area holds a `debugMode` bit, and the obvious reading is that the
analog stream depends on it. Hardware testing shows otherwise. With the flag
off, `FastCommunicationStart` alone produced a clean travel curve:

```
33 -> 350 -> 331 -> 193 -> 104 -> 6 -> 0
```

Gamepad emulation therefore requires no persistent change to the keyboard.

Three reference counts in the vendor bundle support this. In the FIRE68 code
path, `debugMode` appears only in its own getter, setter and JSON dump, with no
caller. `startCommunication` is defined and never called. The `debug-reporting`
and `synchronous-reporting` events are dispatched and never listened for. The
vendor app never uses the analog stream on this keyboard, and the fully built
realtime ADC feature in the same bundle belongs to a different device family.

## Inferred but not exercised

These come from the vendor bundle and have not been run against hardware.

| Item | Note |
|---|---|
| `SetKeyTriggerTravel` | The write path is implemented and gated on the encoder check, but no actuation change has been written |
| `SetUseKeyMatrix` | Remapping keys is not implemented |
| `SetLedDefine` | Lighting writes are not implemented |
| Macro commands | Layout is not decoded |
| Dynamic keystroke, multi-tap, toggle | Command IDs are known, structures are not decoded |
| Calibration commands | Not exercised, and a mistake here could require recalibration |
| `0xA1` sync reports | The marker is known, the payload layout is not |
| Trigger type semantics | Every key reads `0`, and the meaning of other values is unconfirmed |
| SOCD priority field | Location and nibble alignment are known, the mode values are not confirmed |
| Key action classes | The full class enum is decoded from the bundle; only `0x10` and `0xF0` seen on hardware |
| Sibling product IDs | 32 models share this protocol per the bundle; only `0x104E` tested |
| Function area beyond byte 24 | Undecoded |

## Open questions

**Do analog report slot indices match key matrix slot indices?** The gamepad
assumes they do, and `gamepad --init` binds by matrix index. Observed reports
came from slots 0 and 32 during unstructured key mashing, which neither
confirms nor refutes the mapping. Resolve it by running `fire68 monitor` and
pressing exactly one known key, then checking the reported slot against
`fire68 keymap`.

**Does a saved configuration persist across a power cycle?** Writes appear to
take effect immediately, and the command set has no explicit save. Unplugging
and reconnecting after a write would settle it.

**What are the multiple configuration profiles?** The vendor code multiplies
every region offset by a profile index. This tool always uses profile 0.

## Risk notes

The key table write path carries the strongest evidence, because the encoder
round-trips all 1024 bytes exactly and the structure is fully decoded.

The function area write path is now demonstrated, with a single-bit change
leaving all other bytes intact.

Calibration commands carry the most risk. A botched calibration could require
recalibrating every switch, and the recovery path is untested. Leave those
alone without a specific reason.
