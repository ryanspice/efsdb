# PHP Fallback and Crypto Policy

To guarantee the "Pure PHP Fallback" is a truthful baseline and not a motivational slogan, the following strict policies apply to the EFSDB runtime:

## 1. Fixture Generation Strictness
- The fixture generator MUST NOT emit fake or zeroed checksums for "valid" fixtures.
- If the host environment executing the generator lacks the required cryptographic algorithm (e.g., `ext-blake3`), the generator MUST `exit(1)` and refuse to generate the valid fixture.
- **Rule:** A trusted runtime (either Rust CLI or a fully-equipped PHP environment) is required to establish the correctness baseline.

## 2. PurePhpAdapter Crypto Requirements
- If a Protection Suite is marked as "Baseline" (e.g., `0x01 Blake3-Plain`), the `PurePhpEnvelopeCodec` MUST be able to verify it.
- If the host environment lacks the native extension (e.g., `ext-blake3`), the EFSDB deployment MUST bundle a pure-PHP polyfill for that algorithm.
- If neither the extension nor the polyfill is available, `verifyEnvelope()` MUST return `{"ok": false, "error": "ERR_MISSING_CRYPTO_EXT"}`.
- **Rule:** We do not degrade security or bypass verification. Missing crypto is a hard failure, correctly surfacing the environment deficiency.
