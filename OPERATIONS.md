# Operating EFSDB

Agent work starts at [AGENTS.md](AGENTS.md). This guide covers the source checkout and local operation; [SCRIPTS.md](SCRIPTS.md) records command effects and [POLICIES.md](POLICIES.md) records project invariants.

## Identify the checkout

Run from the intended repository:

```powershell
git rev-parse --show-toplevel
git remote get-url origin
git branch --show-current
git rev-parse HEAD
git status --short
```

The repository is `https://github.com/ryanspice/efsdb.git`. When a current remote comparison is needed, `git ls-remote origin refs/heads/main` queries the advertised ref without changing the working tree. Local `origin/main`, an open PR, and a running installation may describe different revisions. Record which one supplied the evidence; verify named files are available before using them.

## Tools and PHP configuration

Run commands from the repository root unless stated otherwise. [package.json](package.json) selects Bun 1.2.23. [composer.json](composer.json) declares PHP `>=8.1` with JSON, PDO and SQLite3; this declaration is not the security acceptance baseline. [scripts/check-php-runtime.php](scripts/check-php-runtime.php) requires a supported patched PHP branch. The runtime also needs the native BLAKE3 extension, sodium cryptography and mbstring. The checked-in PHP configuration loads BLAKE3, sodium, mbstring and OpenSSL.

Inspect the available tools and configuration before bootstrapping data:

```powershell
bun --version
php --version
bun run check:runtime
bun run ./scripts/php-core.ts -- --ini
bun run ./scripts/php-core.ts -- -m
bun run ./scripts/php-core.ts -- --ri sodium
bun run check:php-ini
```

[efsdb/php/core/php.ini](efsdb/php/core/php.ini) reads `EFSDB_PHP_EXTENSION_DIR`, `EFSDB_PHP_BLAKE3_EXTENSION` and `EFSDB_PHP_ERROR_LOG`. [scripts/php-core.ts](scripts/php-core.ts) resolves `EFSDB_PHP_BIN` or PHP on PATH, detects the extension directory, and supplies those values to the child process. Its default BLAKE3 path is `efsdb/php/core/ext/php_blake3.dll` on Windows or `efsdb/php/core/ext/blake3-src/compiled/blake3.so` elsewhere; the default log is `.cache/efsdb/artifacts/logs/php-error.log`. Set explicit environment overrides when the installed runtime or task output paths differ. Do not commit a user's absolute paths.

The root core-check scripts use that wrapper and the checked-in ini. `check:runtime` separately invokes `php -n` from PATH, so align PATH with `EFSDB_PHP_BIN` when overriding the executable; a pass for another binary does not establish the wrapper's runtime. `check:php-ini` verifies the exact repository ini. Avoid substituting an untracked ini for a gate that requires it. The API check performs the additional sodium function preflight described in [TESTING.md](TESTING.md). Native BLAKE3 must match the selected PHP ABI; a CLI result does not establish the PHP-FPM/Apache runtime serving traffic.

## Build and start a local demo

Install and build from the repository root:

```powershell
bun install --frozen-lockfile
bun run build:web
```

The build writes the shipped CSS and login, explorer, builder, admin and theme bundles. Inspect those diffs before including them in a source change. Start a development server using the validated wrapper:

```powershell
$env:EFSDB_ENV = 'development'
bun run ./scripts/php-core.ts -- -d efsdb.process_id=app-server -S 127.0.0.1:8787 -t efsdb/php/core/public efsdb/php/core/public/index.php
```

`bun run dev` and `bun run php:serve` use [scripts/dev.ts](scripts/dev.ts), which currently requires the bundled Windows BLAKE3 DLL; use the wrapper command above for the portable path. Visit `http://127.0.0.1:8787`; bootstrap happens on the first request. Without an override, the local store is `.cache/efsdb/live/data`. `EFSDB_DATA_DIR` selects a different store; identify any inherited value before starting. For task-specific demos, select an owned store under `.ai/evidence/`. Keep the store outside the served tree.

On a fresh development store, `EFSDB_BOOTSTRAP_SECRET` supplies the initial tenant-admin key when present; otherwise initialization emits a generated one-time key to the server log/console. Keep that output private. An existing store does not produce a fresh login key. Production initialization fails closed without bootstrap material. Stop the server with Ctrl+C; stopping it does not remove data.

## Runtime state and recovery

[docs/runtime-layout.md](docs/runtime-layout.md) maps data, workspaces, generated output and test stores. `Config.php` supports `EFSDB_DATA_DIR`, `EFSDB_CACHE_ROOT`, `EFSDB_WORKSPACE_ROOT`, `EFSDB_SCHEMA_DIR` and `EFSDB_INSTALL_SEED_DIR`; inspect the selected paths before maintenance. `.cache` contains the default durable local store as well as disposable output, so it is not a blanket cleanup target.

Before an authorized maintenance action, record the checkout, configured store, staging/production target, expected effect and recovery copy. Stop relevant writers before copying a store and retain the matching key material securely. Compare the expected current hashes before restoring source files; reconcile later changes instead of overwriting them. For runtime recovery, verify the intended snapshot and target, and follow the operation's recovery plan.

The following are state changes, not preflight commands:

- `tenant-admin-key`, `create-user` and `rotate-user-key` alter credentials and print secret material.
- `gc` permanently purges expired records/chunks; `reset` deletes the default local data directory and runs initialization.
- `efsdb.php init` imports templates, builds staging and production, and warms caches. Even `efsdb.php help`, `status` and list commands construct `App` before dispatch and can initialize a fresh store.
- `bin/import.php` defaults to the `production` root. Manual sync/recovery helpers can promote staging, rebuild workspaces or invalidate caches.
- `bin/smoke.ps1` changes its target through the API, including creating a user. Use a disposable local environment.

Use [SCRIPTS.md](SCRIPTS.md#maintenance-entry-points) to locate the implementations. A source or documentation PR does not authorize these operations against a live store. Record runtime checks only when they actually ran on the identified environment; no deployment or release acceptance follows from a local build.
