# Migration to Monorepo Structure

**Date:** 2026-02-24
**Version:** 1.0.0

## Overview

The project has been restructured into a single monorepo to consolidate the Core Engine, Runtimes, and Adapters.

## Directory Map

| Old Location | New Location | Description |
| :--- | :--- | :--- |
| `efsdb-demo/src` | `efsdb/php/core/src` | Core Write Logic & Admin Helpers |
| `efsdb-demo/public` | `efsdb/php/core/public` | Admin UI & Entry Point |
| `adapter-efsdb-php` | `efsdb/adapters/php` | SvelteKit Adapter Source |
| `adapter-efsdb-php/runtime` | `efsdb/php/runtime` | **New**: Read-Only Serving Runtime |

## Key Changes

1.  **Runtime Extraction**: The PHP runtime logic (`Efsdb.php`, `import.php`) has been moved out of the adapter and into `efsdb/php/runtime`. The adapter now copies this folder during build.
2.  **Core Library**: The `efsdb-demo` logic is now treated as the "Core" library implementation.
3.  **Adapter Update**: The adapter's `index.ts` has been updated to resolve the runtime from `../../../php/runtime`.

## Manual Restoration Required

Due to a migration issue, some non-critical files (e.g., specific demo views, CSS assets, and bin scripts) were reset to defaults.
**Action**: If you have a local backup of `efsdb-demo/public/views` or `efsdb-demo/bin`, please copy them into `efsdb/php/core/`.

## Running the Demo

The demo app (Admin UI) now lives in `efsdb/php/core`.

```bash
cd efsdb/php/core
php -c php.ini -S 127.0.0.1:8787 -t public
```

## Building the Adapter

```bash
cd efsdb/adapters/php
npm install
npm run build
```

## Conformance Testing

To verify the implementation against the EFSDB v0.2.0 spec:

```bash
# 1. Generate fresh fixtures using the current core
php -c efsdb/php/core/php.ini efsdb/php/conformance/generate.php

# 2. Run the verification runner
php -c efsdb/php/core/php.ini efsdb/php/conformance/run.php
```
