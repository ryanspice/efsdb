# AEAD Encrypted Payload Sub-spec

This document reconciles AEAD suite semantics with the frozen envelope contract already enforced by the parser, inspector fetch flow, and canonical result schema.

## Authoritative Envelope Framing

The authoritative envelope layout is:

`[0..15 fixed header] [16..H-1 extension TLVs] [H..H+7 payload_length:u64 LE] [H+8.. body]`

- bytes `0..2` are ASCII magic `EFS`
- byte `3` is the envelope version field, and the active parser currently accepts version `0x00`
- `H` is stored at bytes `4..5` as a little-endian `u16`
- `type` is byte `6`
- `flags` is byte `7`
- `suite` is byte `8`
- bytes `9..15` remain reserved by the frozen contract
- the payload-length field is not inside the fixed header; it begins exactly at offset `H`

## Reconciled AEAD Rules

**1. Protection Suite**
- `0x02` is reserved for `ChaCha20-Poly1305 IETF`
- key length is 32 bytes
- nonce length is 12 bytes
- tag length is 16 bytes
- the suite remains blocked for production rollout until Rust implementation, fixtures, and parity coverage land together

**2. Nonce Placement**
- the nonce is part of the payload span `N`, not the header and not an extension
- for suite `0x02`, the payload bytes are:
  - `[12-byte nonce] [ciphertext bytes]`

**3. Payload-Length Semantics**
- the frozen contract remains `H + 8 + N + C`
- `payload_length` is the payload span `N` only
- for suite `0x02`, `payload_length = nonce_len + ciphertext_len`
- parsers continue to treat `payload_length` as the single source of truth for the payload span, and suite metadata defines trailer length `C`

**4. AAD Coverage**
- the AAD is the exact immutable pre-body envelope bytes `0..H+7`
- this includes:
  - fixed header bytes `0..15`
  - extension TLVs `16..H-1`
  - payload-length field `H..H+7`
- there is no checksum field in the frozen envelope contract, so no zeroing step exists

**5. Tag Placement**
- the AEAD tag occupies the suite trailer `C` after the payload span
- for suite `0x02`, the trailer is a 16-byte Poly1305 tag
- the tag is not stored in reserved header bytes
- the tag is not stored as an extension

**6. Key Selection**
- key selection is external to envelope framing
- advisory extensions may carry a key selector such as `Key-ID`, but suite verification semantics do not depend on extension parsing order changing the body layout
- if no recognized key selector is present, the runtime uses the active default key for the current environment

**7. Failure Semantics**
- unsupported suite ID returns `ERR_UNSUPPORTED_SUITE`
- malformed body sizing returns `ERR_TRUNCATED_PAYLOAD` or `ERR_TRAILING_GARBAGE` using the frozen `H + 8 + N + C` length discipline
- tag verification failure returns `ERR_CHECKSUM_MISMATCH` in the canonical error surface for parity consistency

## Deterministic Fixture Contract

When suite `0x02` fixtures are introduced, the deterministic fixture contract is:

- key: 32 bytes of `0xAA`
- nonce: 12 bytes of `0xBB`
- plaintext: `efsdb_aead_test_payload`
- AAD: exact bytes `0..H+7`
- trailer `C`: 16-byte Poly1305 tag stored after the payload span

## Rust-First Checklist

- [ ] Add suite metadata helpers for `0x01` and `0x02`
- [ ] Add body-splitting logic for payload span `N` and trailer `C` without changing the inspector surface
- [ ] Add `0x02` fixture generation after the Rust contract is implemented
- [ ] Add parity tests for tampered AAD, tampered tag, and malformed body lengths
- [ ] Keep PHP blocked on parity implementation until the Rust contract and fixtures are stable
