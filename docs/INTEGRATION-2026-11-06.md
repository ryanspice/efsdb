# November 2026 integration decisions

This integration combines the engine/UI stack in [PR 1](https://github.com/ryanspice/efsdb/pull/1), operating guidance in [PR 3](https://github.com/ryanspice/efsdb/pull/3), and security work in [PR 4](https://github.com/ryanspice/efsdb/pull/4). GitHub records the merge/check state; this document records the maintained decisions.

## Accepted source and operating guidance

`AGENTS.md` is the common entry point. `OPERATIONS.md`, `SCRIPTS.md`, `TESTING.md`, and `POLICIES.md` describe the current checkout, commands, and invariants. The guidance was reconciled against the implementation before use. The retired detached runtime is not an active entry point: imports use `efsdb/php/core/bin/import.php`, and delivery uses `efsdb/php/core/public/index.php`.

The integration preserves atomic bootstrap/key publication, single-use refresh locking, bounded component imports, and authorization before public/static cache delivery. Review additionally found and fixed PHP/Rust envelope-length overflow and oversized declared stream-read allocation. Native BLAKE3 is rebuilt against exact PHP headers; see the [build and hash record](internal/blake3-extension-build-test.md).

## CI and verification

Automatic CI has separate PHP/Rust parity and web jobs, locked dependency installs, PHP security-floor checks, ABI-specific native compilation, explicit security regressions, typechecking, shipped bundle builds, and browser characterization. Evidence artifacts expire after seven days. There are no automatic deployment or publication jobs. The former native-build-document-only two-review gate was retired with owner approval; native/PHP/Rust/web CI and the recorded code review govern this integration.

Local integration evidence includes runtime/INI/API/auth and conformance checks, 32 PHP characterization programs, 16 canonical PHP buffer fixtures and 16 stream fixtures, 17 Rust tests, four optimized Rust bounds tests, 46 PHP bounds assertions with crypto, eight native hash assertions, web type/build checks, and 21 browser tests. The no-extension bounds lane passes 47 assertions because it also checks missing-BLAKE3 precedence.

Clean Linux runs exposed two build assumptions: duplicated PHP module loading and ignored WASM output left over locally. The shared PHP launcher now probes built-in modules and supplies one isolated, inherited module scan directory while preserving the exact core ini. Development and PowerShell entry points use the same launcher. Web CI rebuilds real WASM with pinned tools and the locked dependency graph before smoke/type/build checks; unused random-key generation dependencies are disabled because the Rust verifier accepts supplied keys.

Legacy route characterizations now distinguish query-URL redirects from rendering at their canonical destinations, target the moved importer/public entry, and verify empty initialized roots instead of the removed placeholder seed. The expected security and delivery assertions remain exercised.

Local checks do not establish PHP-FPM/Apache/Nginx behavior, physical-device performance, or human UI acceptance. PHP's ChaCha stream verifier still buffers the actual body. Broad performance claims require representative measurements.

## Artifact disposition

Task evidence and private preimages stay under ignored `.ai/` with hash receipts and a synthesis queue. The private root chat input was archived and removed from the root. No Codegraph directory existed in this checkout. Existing characterization programs still use their repository `.cache/efsdb/tests/` paths; those are recorded test-output exceptions, not live-store cleanup authority.

`artifact/pixelboats-card-recovery-lab-v0.4.0` is a distribution snapshot whose tree replaces most repository source. It is retained separately and is not merged into the EFSDB source branch.
