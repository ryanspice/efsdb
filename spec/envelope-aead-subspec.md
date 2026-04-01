# AEAD Encrypted Payload Sub-spec (Draft)

This document scaffolds the missing semantics required to unblock the `0x02 ChaCha20-Poly1305` protection suite and future AEAD suites in the EFSDB Envelope.

## Blocked Decisions to Finalize

**1. Nonce Placement & Length**
- Should the nonce be prepended to the ciphertext inside the payload body, or handled as a standard Extension Type in the header?
- Required length for ChaCha20: 12 bytes (96 bits).

**2. AAD (Additional Authenticated Data) Contract**
- The AAD must include the exact, immutable portion of the header to prevent header-malleability attacks.
- Which bytes constitute the AAD? (e.g., `Bytes 0..H` including Magic, Type, Flags, Suite, Lengths, and Extensions).

**3. Tag Semantics**
- AEAD tags (16 bytes for Poly1305) replace the unkeyed `Blake3` checksum.
- Does the tag reside at the end of the payload, or in the header? (Current v0.2 spec implies it resides at the end of the payload or is handled via the cipher's native framing).

**4. Key Input Contract**
- How does the verifier/decryptor acquire the key?
- Is there a Key-ID extension required in the header, or is it inferred from the Tenant/Environment context?

**5. Encrypted Fixture Schema**
- We must generate deterministic `0x02` fixtures with a known key, known nonce, and known payload to prove PHP/Rust parity.

## Acceptance Criteria

To unblock Track B, this sub-spec must be updated to include:
1. Exact byte ranges for the AAD.
2. An explicit layout definition for the nonce and Poly1305 tag.
3. An agreed-upon source mapping for the encryption key.
4. At least one deterministic `0x02` fixture generation rule (known key, known plaintext).
