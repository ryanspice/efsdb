# WASM Inspect-only Checklist

This checklist restricts the browser-WASM integration to an "inspector-first" path, accurately supporting the variable-length header format without full-buffer memory bloat.

## 1. Variable-Header Fetch Strategy
- [ ] **First Fetch (Probe):** Use HTTP Range Request `bytes=0-15` to fetch the first 16 bytes.
- [ ] **Parse `H`:** Read the explicit Header Length (`H`) directly from bytes 4-5. (Do not derive it from flags or extensions; the format explicitly provides it).
- [ ] **Second Fetch (Full Header):** Fetch `bytes=0-(H+7)` (i.e., `H + 8` bytes total) to get the complete variable header and the 8-byte Payload Length field located at `H..H+7`. (Note: This does not fetch payload metadata bytes; it fetches the envelope's payload length field, which is sufficient for bounds logic and inspect metadata).
- [ ] **Strict Constraint:** Never assume 16 bytes alone is sufficient for a general `inspect_envelope()` call.

## 2. Worker Contract
- [ ] Instantiate the WASM module in a Web Worker.
- [ ] Expose `wasm_inspect_envelope(Uint8Array)` via `wasm-bindgen`.
- [ ] Return the exact Canonical JSON string from WASM back to the JS main thread.

## 3. Metadata UI
- [ ] Create a Svelte component `<EnvelopeInspector />`.
- [ ] Display `Type`, `Flags`, `Suite`, and `Payload Length`.
- [ ] Show errors gracefully (e.g., `ERR_INVALID_HEADER`).
- [ ] Add a "Verify Checksum" button that triggers a secondary, full-buffer fetch *only* when clicked by the user.
