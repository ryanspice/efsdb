# Extension Model Sub-spec

This document reconciles the extension model with the frozen envelope contract already exercised by the parser and inspector.

## Authoritative Placement

- bytes `0..2` are ASCII magic `EFS`
- byte `3` is the envelope version field, and the active parser currently accepts version `0x00`
- `H` is stored at bytes `4..5` as a little-endian `u16`
- extensions occupy bytes `16..H-1`
- the payload-length field occupies bytes `H..H+7`
- extensions are never allowed to overlap the payload-length field

## Reconciled Extension Rules

**1. Wire Encoding**
- each extension uses one-byte wire ID plus TLV encoding
- layout is `[id:u8] [length:u16 LE] [value:length bytes]`
- total wire size is `3 + length`

**2. Type Width and Critical Encoding**
- extension type width is exactly one byte on the wire
- criticality is encoded in the wire ID itself
- `id & 0x80 == 0` means advisory
- `id & 0x80 != 0` means critical
- registries must publish exact wire IDs, not wider logical IDs

**3. Header Flag Semantics**
- `flags bit 0` indicates at least one extension is present
- `flags bit 1` indicates at least one critical extension is present
- if `flags bit 0` is set and `H <= 16`, the header is invalid
- if the TLV stream does not terminate exactly at `H`, the header is invalid
- if a critical extension exists, `flags bit 1` must be set; otherwise the header is invalid

**4. Parser Behavior**
- parsers walk sequentially from byte `16` until byte `H`
- unknown advisory extensions must be skipped safely and retained in canonical inspect output
- unsupported critical extensions must reject the envelope with `ERR_UNSUPPORTED_CRITICAL_EXTENSION`
- parsers may recognize a critical extension ID but still reject with `ERR_UNSUPPORTED_CRITICAL_EXTENSION` until its semantics are fully implemented

**5. Rewrite Behavior**
- rewrites must preserve the exact TLV bytes for extensions they do not reinterpret
- advisory extensions may be updated or removed by an explicit rewrite policy
- critical extensions may only be removed or rewritten when the engine intentionally applies that extension's semantics

**6. Canonical JSON Surface**
- canonical inspect output uses:
  ```json
  "extensions": [
    {
      "id": 1,
      "critical": false,
      "length": 8,
      "value": "AQIDBAUGBwg="
    }
  ]
  ```
- `value` is base64 of the raw extension value bytes

## Standard Extension Registry

| Wire ID | Critical | Name | Description | Status |
|---|---|---|---|---|
| `0x01` | No | `Key-ID` | Advisory key selector for AEAD suites. | Draft |
| `0x02` | No | `Timestamp` | Advisory creation timestamp encoded as `u64 LE`. | Draft |
| `0x81` | Yes | `Compression` | Critical payload transform marker. | Reserved, unsupported |

## Rust-First Checklist

- [ ] Add a TLV parser that returns canonical extension metadata
- [ ] Preserve advisory extension bytes in inspect output
- [ ] Reject unsupported critical extensions with `ERR_UNSUPPORTED_CRITICAL_EXTENSION`
- [ ] Add fixtures for advisory passthrough and critical rejection after the Rust contract is wired
- [ ] Keep PHP implementation blocked until Rust behavior and fixtures are stable
