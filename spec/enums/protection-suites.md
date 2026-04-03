# Protection Suites

This registry defines the canonical `Protection Suite` identifiers used in the EFSDB Envelope Header.

| ID     | Name                       | Body Layout                                  | Auth Type | Description                                | Status |
| :----- | :------------------------- | :------------------------------------------- | :-------- | :----------------------------------------- | :----- |
| `0x01` | Blake3-Plain               | `N = [plaintext], C = [32-byte blake3 tag]`            | Unkeyed   | Integrity-only payload verification.            | Active |
| `0x02` | ChaCha20-Poly1305 IETF     | `N = [12-byte nonce] [ciphertext], C = [16-byte tag]` | AEAD      | AEAD payload span plus trailer under `H+8+N+C`. | Draft (Blocked) |

**Deployment Rule:** A suite may not become baseline unless the target deployment profile can support it natively or through a bundled pure-PHP implementation.

*Note: Suite `0x02` is blocked for rollout until Rust implementation, deterministic fixtures, and parity tests land against the preserved `H + 8 + N + C` contract.*
