# EFSDB Node Adapter

This directory contains the Node.js adapter for EFSDB.

## Status
🚧 **Under Construction** 🚧

## Goals
- Provide a native Node.js runtime for reading EFSDB data.
- Maintain compatibility with the PHP Core implementation.
- Support `fs`-like API for retrieving files.

## References
- **Spec**: `../../spec/FORMAT.md` (Detailed crypto and layout)
- **PHP Core**: `../../php/core/src/` (Reference implementation)

## Usage
```typescript
import { EfsdbReader } from './runtime/EfsdbReader';

const db = new EfsdbReader('./data');
await db.init();
const doc = await db.getManifest('products', '123');
```

## Implementation Plan
1. Implement `EfsdbReader` (Manifest/Chunk decryption).
2. Implement `IndexReader` (LSM Tree lookups).
3. Add conformance tests using shared fixtures.
