# EFSDB File System Format Spec v0.2.0

**Status:** Frozen
**Date:** 2026-02-24

This document defines the on-disk format for the Encrypted File System Database (EFSDB). It serves as the canonical reference for all implementations (PHP, Node.js, etc.).

## 1. Core Principles

1.  **Encryption at Rest:** All data (manifests, chunks, indexes) is authenticated encryption (AEAD).
2.  **Content Addressable:** Chunks are stored by content hash (deduplication).
3.  **Append-Only:** Files are immutable once written; updates create new manifests (versions).
4.  **Zero-Knowledge Storage:** Filenames and directory structures do not reveal plaintext names or sensitive data (except Entity names).

## 2. Cryptography

### 2.1. Primitives
-   **Cipher:**
    -   `AEGIS-256` (via `sodium_crypto_aead_aegis256_encrypt`) if `SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES` is defined.
    -   `XChaCha20-Poly1305` (via `sodium_crypto_aead_xchacha20poly1305_ietf_encrypt`) otherwise.
-   **Hash:** `BLAKE2b` (via `sodium_crypto_generichash`).
-   **KDF:** `sodium_crypto_kdf_derive_from_key` (BLAKE2b).

### 2.2. Master Key
-   **Format:** 32 bytes of high-entropy random data.
-   **Storage:** `master.key` file (Base64 encoded).
-   **Security:** Must never be committed to version control.
    > **Note for Conformance:** The `test_master_key_b64` used in fixtures is public and MUST NOT be used for real data.

### 2.3. Key Derivation (KDF)
All subkeys are derived from the Master Key.

| Usage | Context (8 bytes) | Subkey ID | Output |
| :--- | :--- | :--- | :--- |
| **Manifests** | `manifest` (padded with `\0`) | `2` | 32-byte Key |
| **Chunks** | `chunk` (padded with `\0`) | `3` | 32-byte Key |
| **Indexes** | `index` (padded with `\0`) | `4` | 32-byte Key |

*Note: Context strings are right-padded with null bytes to reach 8 bytes.*

### 2.4. Envelope (Framing)
All encrypted files on disk follow this framing:

```
[Tag: 4 bytes] || [Nonce: N bytes] || [Ciphertext: Variable]
```

-   **Tag:**
    -   `AEG1`: AEGIS-256 (Nonce: 32 bytes). Used if hardware support detected (`SODIUM_CRYPTO_AEAD_AEGIS256_NPUBBYTES`).
    -   `XCH1`: XChaCha20-Poly1305 (Nonce: 24 bytes). Fallback if AEGIS unavailable.
-   **Nonce:** Generated randomly for each write.
-   **Ciphertext:** Result of AEAD encryption.

### 2.5. Additional Authenticated Data (AAD)
Encryption MUST bind the ciphertext to its location/identity using AAD.

| File Type | AAD Format | Example |
| :--- | :--- | :--- |
| **Manifest** | `manifest:$id` | `manifest:doc_123` |
| **Chunk** | `chunk:$hash` | `chunk:a1b2...` |
| **Index** | `index:$name` | `index:segment_001.sst` |

---

## 3. Storage Layout

Root directory structure:

```
/
├── master.key          # Base64 Master Key
├── idx/                # Global Indexes (LSM Tree)
└── {entity}/           # Per-Entity Storage
    ├── manifests/      # Metadata files
    └── chunks/         # Content blobs
```

### 3.1. Entity
A logical collection of records (e.g., `products`, `users`, `assets`).
-   Directory: `/{entity}/`

### 3.2. Chunks
Binary content split into blocks.
-   **Naming:** Content Hash (BLAKE2b, hex).
-   **Sharding:** 2-level directory sharding based on hash prefix.
-   **Path:** `/{entity}/chunks/{p1}/{p2}/{hash}.c`
    -   `p1`: First 2 chars of hash.
    -   `p2`: Next 2 chars of hash.
-   **Content:** Encrypted Envelope (Framing).

### 3.3. Manifests
JSON metadata describing a file or document.
-   **Naming:** `manifest_{id}.m`
-   **Path:** `/{entity}/manifests/manifest_{id}.m`
    -   *(Future: Support sharding for high cardinality)*
-   **Content:** Encrypted Envelope (Framing) containing JSON.

---

## 4. Manifest Schema

Decrypted plaintext MUST be valid JSON conforming to this schema:

```json
{
  "v": 1,                       // Version (Integer)
  "id": "doc_123",              // Unique ID (String)
  "entity": "products",         // Entity Name
  "logicalPath": "foo.txt",     // Optional: Logical filename (if file)
  "size": 1024,                 // Total logical size in bytes
  "mime": "text/plain",         // MIME Type
  "mtime": "2026-02-24T12:00:00Z", // ISO 8601 Modification Time
  "chunking": {
    "mode": "fixed",            // "fixed"
    "size": 1048576             // Target chunk size (bytes)
  },
  "hash": {
    "algo": "blake2b"           // Hashing algorithm used for chunks
  },
  "chunks": [                   // Ordered list of chunks
    {
      "i": 0,                   // Index
      "offset": 0,              // Byte offset
      "len": 1024,              // Length
      "hash": "a1b2..."         // Content Hash (ID)
    }
  ],
  "indexes": {                  // Extracted fields for Indexing
    "id": "doc_123",
    "name": "foo.txt",
    "size": 1024,
    "updatedAt": "..."
  }
}
```

---

## 5. Indexing (LSM)
*Draft Status*

-   **Location:** `/idx/`
-   **Format:** Append-only Write Ahead Log (WAL) + Sorted String Table (SST) segments.
-   **Encryption:** Segments are encrypted blocks (same Framing).
-   **Strategy:**
    -   Writes append to `current.wal`.
    -   Flush converts WAL to immutable Segment.
    -   Compaction merges Segments.

---

## 6. Limits

-   **Max Chunk Size:** Implementation defined (default 1MB).
-   **Max Manifest Size:** Must fit in memory.
-   **ID Format:** URL-safe strings (Regex: `^[a-zA-Z0-9_\-\.]+$`).
