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

The result is a single very long line, so grep with context windows fails.
Extract by byte offset instead:

```python
src = open('deob.js', encoding='utf8').read()
i = src.index('class _Fire extends')
print(src[i:i+9000])
```

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

## Tools used

| Tool | Purpose |
|---|---|
| `Get-PnpDevice` | Enumerate HID collections and read bus-reported names |
| `hidapi` | Dump report descriptors and speak to the device |
| `curl` | Fetch the vendor bundle |
| `astcomp` | Deobfuscate the string-array encoding, with behaviour verification |
| Python | Extract regions from a single-line bundle by byte offset |
