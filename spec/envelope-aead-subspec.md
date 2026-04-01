# AEAD Encrypted Payload Sub-spec (Implementation-Ready)

This document finalizes the semantics required to unblock the `0x02 ChaCha20-Poly1305` protection suite and future AEAD suites in the EFSDB Envelope.

## Finalized Decisions

**1. Nonce Placement & Length**
- **Length**: The nonce for ChaCha20-Poly1305 is exactly 12 bytes (96 bits).
- **Placement**: The nonce is prepended directly to the ciphertext within the payload body. It is NOT stored in the header as an extension. This ensures the header length remains predictable and decoupled from the cipher's specific nonce requirements.
- **Generation**: Nonces MUST be generated using a cryptographically secure pseudo-random number generator (CSPRNG) for every encryption operation. Never reuse a nonce with the same key.

**2. AAD (Additional Authenticated Data) Contract**
- The AAD MUST include the exact, immutable portion of the header to prevent header-malleability attacks.
- **Byte Range**: The AAD consists of bytes `0..H` of the envelope. This includes the Magic, Object Type, Flags, Protection Suite, Payload Length, Header Length, Checksum (which is set to all zeros during AEAD signature generation, see below), and all Extensions.
- **Checksum Zeroing**: Because the checksum field (`bytes 12..15`) is part of the header but cannot contain the final tag, it MUST be set to `0x00000000` during both encryption (when constructing the AAD) and decryption (when verifying the AAD). The actual authentication is handled by the AEAD tag.

**3. Tag Semantics**
- **Length**: The Poly1305 tag is 16 bytes (128 bits).
- **Placement**: The tag is appended directly to the end of the ciphertext within the payload body.
- **Payload Layout**: `[12-byte Nonce] [Ciphertext] [16-byte Tag]`
- The `Payload Length` field in the header (`bytes 4..11`) MUST reflect the total length of this combined structure (Nonce Length + Ciphertext Length + Tag Length).

**4. Key Input Contract**
- **Length**: The ChaCha20 key is 32 bytes (256 bits).
- **Source**: The decrypting party acquires the key from the Environment context (e.g., `EFSDB_WORKSPACE_KEY`).
- **Key Rotation**: A Key-ID MAY be provided via an advisory header extension (e.g., Extension ID `0x01`). If the Key-ID extension is present, the engine uses the corresponding key. If absent, the engine MUST use the default active key for the environment.

**5. Encrypted Fixture Schema**
- To prove PHP/Rust parity, we define deterministic `0x02` fixtures:
  - **Key**: 32 bytes of `0xAA`
  - **Nonce**: 12 bytes of `0xBB`
  - **Plaintext**: The string `"efsdb_aead_test_payload"`
  - **AAD**: The constructed header with a zeroed checksum field.

## Implementation Checklist

- [ ] Rust Engine: Implement `0x02 ChaCha20-Poly1305` encryption/decryption using the `chacha20poly1305` crate.
- [ ] Rust Engine: Construct AAD from `0..H` with zeroed checksum.
- [ ] PHP Engine: Implement `0x02` using `sodium_crypto_aead_chacha20poly1305_ietf_encrypt`/`decrypt`.
- [ ] Fixtures: Generate `07_valid_chacha20.bin` using the deterministic schema.
- [ ] Tests: Add test cases for tampered AAD (modifying header bytes should fail AEAD decryption).
