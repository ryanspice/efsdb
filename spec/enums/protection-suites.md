# Protection Suites

This registry defines the canonical `Protection Suite` identifiers used in the EFSDB Envelope Header.

| ID     | Name              | Tag Length (C) | Auth Type | Description                                        | Status       |
| :----- | :---------------- | :------------- | :-------- | :------------------------------------------------- | :----------- |
| `0x01` | Blake3-Plain      | 32 bytes       | Unkeyed   | Fast cryptographic hash, no encryption.            | Active       |
| `0x02` | ChaCha20-Poly1305 | 16 bytes       | AEAD      | Stream cipher with poly1305 authenticator.         | Draft (Blocked)|

**Deployment Rule:** A suite may not become baseline unless the target deployment profile can support it natively or through a bundled pure-PHP implementation.

*Note: Suite 0x02 is blocked pending the [AEAD Encrypted Payload Sub-spec](../envelope-aead-subspec.md) detailing nonce placement, AAD contract, and key derivation.*
