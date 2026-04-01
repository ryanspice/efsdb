# Extension Model Sub-spec (Draft)

This document scaffolds the behavior of Extensions in the EFSDB Envelope Header.

## Extension Encoding Rules

- Extensions exist in the variable-length header space between byte 16 and byte `H`.
- They must be parsed sequentially.
- **Critical vs Advisory (MSB Rule):**
  - If `Extension ID & 0x80 == 0x80` (MSB is 1): The extension is **Critical**.
  - If `Extension ID & 0x80 == 0x00` (MSB is 0): The extension is **Advisory**.

## Blocked Decisions to Finalize

**1. Binary Layout of an Extension**
- TLV (Type-Length-Value)?
- Example draft: `[1 byte ID] [2 bytes Length (Little Endian)] [N bytes Value]`

**2. Unknown Extension Handling (Passthrough vs Reject)**
- If a parser encounters an unknown **Advisory** extension, it MUST passthrough the extension transparently during inspection and rewrite operations.
- If a parser encounters an unknown **Critical** extension, it MUST reject the envelope entirely (`ERR_UNKNOWN_CRITICAL_EXTENSION`).

**3. Rewrite Behavior**
- When a payload is re-signed or re-chunked, which extensions are preserved and which are stripped?

## Acceptance Criteria

To unblock Track D, this sub-spec must be updated to include:
1. Exact binary layout rules for extensions (e.g., standardizing on a TLV structure).
2. Explicit behavior rules for dropping vs. preserving advisory extensions during a chunk rewrite.
3. Updated Canonical JSON schema structure mapping for the `"extensions"` array.
