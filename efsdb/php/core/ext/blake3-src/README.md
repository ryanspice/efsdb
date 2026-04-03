# Blake3 PHP Extension Build

- Source tree: `efsdb/php/core/ext/blake3-src`
- Windows build script: `efsdb/php/core/ext/blake3-src/task.bat`
- Linux container helper: `efsdb/php/core/ext/blake3-src/build.sh`
- Upstream commit: `efb0ccdacf5c723090d60dd8eccef2a89547456a`

## Locked build facts

- Host OS used for the committed Windows binary: Windows 11 Pro `10.0.22631`
- Compiler toolchain: Visual Studio Build Tools 2022 `17.14.27`
- Windows extension compiler flags: `/DZEND_ENABLE_STATIC_TSRMLS_CACHE=1 /DBLAKE3_NO_SSE2 /DBLAKE3_NO_SSE41 /DBLAKE3_NO_AVX2 /DBLAKE3_NO_AVX512`
- Container image used for the Linux helper path: `ubuntu:24.04`

## Reproduce

- Windows shared library command: `call efsdb\php\core\ext\blake3-src\task.bat`
- Linux shared library command: `sh efsdb/php/core/ext/blake3-src/build.sh`

## Output hashes

- Committed Windows binary: `efsdb/php/core/ext/php_blake3.dll`
- SHA-256: `371fba3c31f15e4ad74f6971ff5023fc3a9a36abf835a085f1d2c168df69d487`

Keep `README.upstream.md` for upstream project notes. Update this file only when the vendored source, toolchain, build flags, or committed binary changes.
