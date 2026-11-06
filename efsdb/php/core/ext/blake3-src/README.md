# BLAKE3 PHP extension build

The source is vendored from upstream commit `efb0ccdacf5c723090d60dd8eccef2a89547456a`. `php_blake3.c` contains the local PHP hash API integration and exact-runtime compatibility guard. Preserve `README.upstream.md` for upstream notes.

## Current build

Use the repository helpers from the repository root:

```powershell
./scripts/ci-build-blake3-windows.ps1 -PhpBinary $phpBinary -PhpDevelopmentPack $developmentPack
```

```sh
bash scripts/ci-build-blake3.sh
```

Match the exact PHP patch version as well as architecture and thread-safety mode. PHP 8.5.12 changed the hash operations structure without changing the module API number; a DLL that loads is not necessarily compatible with hashing. Both helpers execute known-vector and incremental/copy checks and preserve source/build receipts under `.ai/evidence/`.

The committed Windows binary at `efsdb/php/core/ext/php_blake3.dll` targets **PHP 8.5.12 NTS, VS17, x64**, using the official **8.5.12-1** development pack, Visual Studio Build Tools 2022 **17.14.31**, and MSVC **19.44.35226**. Portable backend flags disable SSE2, SSE4.1, AVX2 and AVX512. The build also enables `/GS` and `/guard:cf`.

SHA-256: `42b7440f7f25f6de8c80b15535606a6ae7d7407f39d5e2f68d33f2659f6e3ab0`.

The [guarded build guide](../../../../../docs/internal/blake3-extension-build-test.md) records development-pack provenance and parity gates. `task.bat`, `build.sh`, and the Ubuntu 24.04 Dockerfile remain historical environment-specific reproduction helpers; do not use their outputs with a different PHP ABI. Update the build guide and this record together when the committed binary or build inputs change.
