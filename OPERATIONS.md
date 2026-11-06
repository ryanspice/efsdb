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

Run commands from the repository root unless stated otherwise. [package.json](package.json) selects Bun 1.2.23. [composer.json](composer.json) declares PHP `>=8.1` with JSON, PDO and SQLite3; this declaration is not a tested compatibility matrix. The runtime also uses sodium cryptography and mbstring. The checked-in PHP configuration loads sodium, mbstring and OpenSSL.

Inspect the available tools and configuration before bootstrapping data:

```powershell
bun --version
php --version
php --ini
$efsdbPhpIni = 'efsdb/php/core/php.ini'
php -c $efsdbPhpIni --ini
php -c $efsdbPhpIni -m
php -c $efsdbPhpIni --ri sodium
```

**Portability limitation:** [efsdb/php/core/php.ini](efsdb/php/core/php.ini) currently contains machine-specific `extension_dir` and `error_log` paths. Verify them on the current computer. If they do not apply, prepare an untracked configuration under the ignored `.cache` directory using the installed PHP extension directory and a writable log destination, and set `$efsdbPhpIni` to that file. Preserve the required extensions and validate it with the commands above. Do not commit a replacement user's absolute paths.

Root Bun PHP scripts and `scripts/php-core.ps1` always select the checked-in ini. Setting `$efsdbPhpIni` does not change those wrappers: use the direct `php -c $efsdbPhpIni ...` entry points when a local configuration is needed. The API check performs the additional sodium function preflight described in [TESTING.md](TESTING.md).

## Build and start a local demo

Install and build from the repository root:

```powershell
bun install --frozen-lockfile
bun run build:web
```

The build writes the shipped CSS and four active app bundles. Inspect those diffs before including them in a source change. With the validated configuration selected above:

```powershell
$env:EFSDB_ENV = 'development'
php -c $efsdbPhpIni -d efsdb.process_id=app-server -S 127.0.0.1:8787 -t efsdb/php/core/public efsdb/php/core/public/index.php
```

`bun run dev` is the equivalent launcher when the checked-in ini works on the machine. Visit `http://127.0.0.1:8787`; bootstrap happens on the first request. Without an override, the local store is `.cache/efsdb/live/data`. `EFSDB_DATA_DIR` selects a different store; identify any inherited value before starting. Keep the store outside the served tree.

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
