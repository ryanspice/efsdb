# Canonical JSON Result Schema

This schema defines the exact structure that ALL EFSDB Envelope parsers (PHP, Rust, WASM) MUST return. Parity tests will serialize outputs to this JSON format and assert exact string equality.

## Success Schema (`ok: true`)

```json
{
  "ok": true,
  "type": 1,
  "flags": 0,
  "suite": 1,
  "header_length": 16,
  "payload_length": 13,
  "extensions": []
}
```
*Note: `extensions` will be an array of `{ "id": int, "critical": bool, "length": int, "value": "base64" }` once the sub-spec is complete. Empty array for v0 plain checksum.*

## Error Schema (`ok: false`)

```json
{
  "ok": false,
  "error": "ERR_CODE_HERE"
}
```

### Canonical Error Codes
- `ERR_TRUNCATED_HEADER` (input too short to read the fixed base header required by the spec)
- `ERR_INVALID_MAGIC` (first 3 bytes do not match `EFS`)
- `ERR_UNSUPPORTED_VERSION` (version byte is greater than the supported version)
- `ERR_INVALID_HEADER` (header fields are present but malformed, such as `H < 16`, `H % 8 != 0`, or critical-flag/header-layout contradictions)
- `ERR_UNSUPPORTED_SUITE` (unknown protection suite ID)
- `ERR_UNSUPPORTED_CRITICAL_EXTENSION` (critical flag is set and the parser does not implement the declared extension type ID)
- `ERR_TRUNCATED_PAYLOAD` (total input is shorter than the required `H + 8 + N + C`)
- `ERR_TRAILING_GARBAGE` (file contains extra bytes beyond expected payload + tag)
- `ERR_CHECKSUM_MISMATCH` (tag/checksum verification failed)
- `ERR_MISSING_CRYPTO_EXT` (runtime lacks required algo, e.g., missing blake3 polyfill in pure PHP)
