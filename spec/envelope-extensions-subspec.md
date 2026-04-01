# Extension Model Sub-spec (Implementation-Ready)

This document finalizes the behavior and binary layout of Extensions in the EFSDB Envelope Header.

## Extension Encoding Rules

- Extensions exist in the variable-length header space between byte 16 and byte `H` (where `H` is defined by the Header Length field at `bytes 8..11`).
- Extensions MUST be parsed sequentially from byte 16 up to byte `H`.
- **Critical vs Advisory (MSB Rule):**
  - If `Extension ID & 0x80 == 0x80` (MSB is 1): The extension is **Critical** (IDs `0x80` to `0xFF`).
  - If `Extension ID & 0x80 == 0x00` (MSB is 0): The extension is **Advisory** (IDs `0x00` to `0x7F`).

## Finalized Decisions

**1. Binary Layout of an Extension**
- Extensions use a strict Type-Length-Value (TLV) encoding.
- **Layout**: `[1 byte ID] [2 bytes Length (Little Endian)] [N bytes Value]`
- The `Length` field represents the size of the `Value` payload in bytes (it does not include the 3 bytes for ID and Length).
- Total size of an extension is `3 + Length` bytes.

**2. Unknown Extension Handling (Passthrough vs Reject)**
- **Advisory (MSB 0)**: If a parser encounters an unknown Advisory extension, it MUST safely skip it (by advancing the parser by `3 + Length` bytes) and MUST passthrough the extension transparently during rewrite or proxy operations.
- **Critical (MSB 1)**: If a parser encounters an unknown Critical extension, it MUST reject the envelope entirely and abort processing, returning `ERR_UNKNOWN_CRITICAL_EXTENSION`. It cannot safely skip it, as the extension dictates semantics required for correct interpretation of the payload.

**3. Rewrite Behavior**
- When a payload is re-signed, re-chunked, or otherwise mutated:
  - All Critical extensions MUST be preserved, unless the rewrite explicitly satisfies or negates the condition of a specific Critical extension.
  - All Advisory extensions MUST be preserved, unless explicitly targeted for removal or update (e.g., updating a timestamp extension).

**4. Canonical JSON Schema Representation**
- For tools (like the WASM inspector), extensions MUST be serialized into the canonical JSON result schema as follows:
  ```json
  "extensions": [
    {
      "id": 1,
      "critical": false,
      "length": 32,
      "data_hex": "a1b2c3..."
    }
  ]
  ```

## Standard Extension Registry

| ID | MSB | Name | Description |
|---|---|---|---|
| `0x01` | `0` (Advisory) | `Key-ID` | Identifies the key version used for AEAD encryption. |
| `0x02` | `0` (Advisory) | `Timestamp` | Unix timestamp of envelope creation (8 bytes, Little Endian). |
| `0x81` | `1` (Critical) | `Compression` | Indicates the payload is compressed (e.g., `0x01` = gzip, `0x02` = brotli). Must be decompressed after decryption. |

## Implementation Checklist

- [ ] Rust Engine: Implement TLV parsing loop in `Envelope::parse_header`.
- [ ] Rust Engine: Implement `ERR_UNKNOWN_CRITICAL_EXTENSION` rejection logic.
- [ ] PHP Engine: Implement equivalent TLV parsing and critical-rejection in `PurePhpEnvelopeCodec`.
- [ ] Fixtures: Create `08_valid_extensions.bin` (with known advisory extensions) and `09_err_unknown_critical.bin`.
