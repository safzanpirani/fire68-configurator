# reference/

Third-party material kept as protocol documentation. **Not covered by this
project's Apache 2.0 license** — see `NOTICE` at the repository root.

Both files are the vendor's own web configurator bundle from `hub.fgg.com.cn`,
retained with the vendor's permission because the FIRE68 protocol is not
documented anywhere else.

| File | Size | Shape |
|---|---|---|
| `hub-configurator.deobfuscated.js` | 990 KB | Structural pass only. One single line. |
| `hub-configurator.readable.js` | 873 KB | Formatted and renamed. 26,414 lines. |

## Which to use

Use `hub-configurator.readable.js` for reading and for ordinary `grep -n`. It
is the archival copy: formatted, with 7,454 mangled bindings renamed
heuristically across 3,281 scopes.

Use `hub-configurator.deobfuscated.js` when a mangled identifier matters — a
cross-reference to an earlier note, or a rename that reads worse than the
original symbol.

## How the readable copy was produced

```
bun ~/.agents/skills/astcomp/scripts/astcomp.js \
  reference/hub-configurator.deobfuscated.js \
  --verify --report --rename --provider heuristic \
  --out reference/hub-configurator.readable.js
```

Reported result:

```
990217 -> 872474 bytes
renamed 7454 bindings across 3281 scopes
ast identical modulo names: yes
behaviour: identical
! string-array: decoder setup reaches external state; leaving call sites intact
```

`behaviour: identical` means astcomp executed both programs and observed no
difference, so the readable copy is a faithful rendering rather than a guess.

The warning is expected and harmless for reading: the string-array decoder
touches external state, so astcomp left the decoder call sites in place instead
of folding them into literals. Strings therefore still appear as decoder calls
in a few places. The structural information this project needs — class shapes,
bit masks, enum values — is unaffected.

Renaming is heuristic and offline. No code was sent to an external service.
Names are inferred from usage, so they are useful but not authoritative; the
masks, offsets and numeric constants are the ground truth.
