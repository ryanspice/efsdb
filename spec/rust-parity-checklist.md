# Rust Parity Checklist

This checklist defines the exact requirements for the `efsdb-core` Rust crate to achieve parity with the `PurePhpEnvelopeCodec`.

## 1. EngineAdapter Trait Parity
- [ ] Implement `pub fn inspect_envelope(bytes: &[u8]) -> Result<InspectSuccess, EnvelopeError>`
- [ ] Implement `pub fn verify_envelope(bytes: &[u8]) -> Result<VerifySuccess, EnvelopeError>`

## 2. Canonical Serialization
- [ ] Derive `serde::Serialize` on `InspectSuccess` to perfectly match the JSON schema (e.g., `ok`, `type`, `flags`, `suite`, `header_length`, `payload_length`, `extensions`).
- [ ] Serialize `EnvelopeError` variants to `{"ok": false, "error": "ERR_CODE"}` perfectly matching the PHP error strings.

## 3. Fixture Matrix Tests
- [ ] Write a test runner that loads `tests/fixtures/*.bin`.
- [ ] Assert `01_valid_blake3.bin` yields identical success JSON to PHP.
- [ ] Assert `02_err_magic.bin` yields `ERR_INVALID_MAGIC`.
- [ ] Assert `03_err_header_too_short.bin` yields `ERR_HEADER_TOO_SHORT`.
- [ ] Assert `04_err_unsupported_suite.bin` yields `ERR_UNSUPPORTED_SUITE`.
- [ ] Assert `05_err_checksum_mismatch.bin` yields `ERR_CHECKSUM_MISMATCH`.
- [ ] Assert `06_err_payload_too_short.bin` yields `ERR_PAYLOAD_TOO_SHORT`.

## 4. Compilation Constraints
- [ ] Crate must compile to `wasm32-unknown-unknown` without OS dependencies.
- [ ] No standard library file I/O inside the parser (use `&[u8]` buffers only).
