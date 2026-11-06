# BLAKE3 extension build and test

The committed source of record is `efsdb/php/core/ext/blake3-src`, vendored from upstream commit `efb0ccdacf5c723090d60dd8eccef2a89547456a` with the local PHP hash API integration in `php_blake3.c`. Keep the upstream notes in `README.upstream.md` and local reproduction notes in `README.md` with that source.

## Match the exact runtime

PHP 8.5.12 added a field to `php_hash_ops` without changing the Zend module API. The previous Windows DLL loaded but crashed during `hash('blake3', ...)` because it had been built with older headers. A successful module load alone is insufficient ABI evidence.

The integration now sizes and zero-initializes the hash operations structure from the selected headers and refuses startup when the hash runtime version differs from the build version. Rebuild after changing the PHP patch version; also match architecture and thread-safety mode.

## Windows x64 NTS

Use the exact matching official PHP development pack and Visual Studio x64 build tools:

```powershell
./scripts/ci-build-blake3-windows.ps1 -PhpBinary $phpBinary -PhpDevelopmentPack $developmentPack
```

The helper creates a new directory under `.ai/evidence/`, compiles there, runs known-vector and incremental/copy checks, and writes a source/hash receipt. It never replaces the committed module automatically. Inspect the receipt and parity results before copying a candidate into `efsdb/php/core/ext/php_blake3.dll`.

The committed candidate was built for PHP **8.5.12 NTS, VS17, x64** from the official **8.5.12-1** development pack (SHA-256 `c0d9632a542e11578bc1374fb9e30ba4c5589e1977023e7d3b76cc4c1e4f61c6`), using Visual Studio Build Tools 2022 **17.14.31**, MSVC **19.44.35226**. SIMD variants remain disabled with `BLAKE3_NO_SSE2`, `BLAKE3_NO_SSE41`, `BLAKE3_NO_AVX2`, and `BLAKE3_NO_AVX512`; `/GS` and `/guard:cf` are enabled.

Committed DLL SHA-256: `42b7440f7f25f6de8c80b15535606a6ae7d7407f39d5e2f68d33f2659f6e3ab0`.

## Linux and verification

CI runs `bash scripts/ci-build-blake3.sh` separately for each selected PHP lane. It checks the `php-config` version, builds with matching `phpize` headers, and runs `scripts/ci-check-blake3.php`. The older Docker helper remains available for its documented Ubuntu/PHP target; it is not an ABI-independent binary source.

Development and parity entry points load `efsdb/php/core/php.ini` through `scripts/php-core.ts`. Run `check:php-ini`, the native smoke, `tests/fixtures/run_php_parity_baseline.php`, `tests/fixtures/php_envelope_bounds.php`, and locked Rust tests. Source checks, native compilation, PHP/Rust parity, and browser checks are distinct evidence.

Changes to this document and its native module require code review and the automated native hash, PHP/Rust parity, security, and web checks described above. The former document-only two-approval workflow was retired during the November 2026 integration after the owner approved using these checks and the integration review.
