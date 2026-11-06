# EFSDB PHP Core

EFSDB is a PHP control plane and encrypted content runtime. The root Composer manifest declares PHP `>=8.1`; validate the installed runtime and extensions using [OPERATIONS.md](../../../OPERATIONS.md#tools-and-php-configuration). The PHP app does three things on first initialization:

1. creates the encrypted data store and master/auth keys in the data directory
2. seeds system roles and tenant settings
3. provisions the default `tenant-admin` account

## Development Quick Start

Commands below assume the checked-in `php.ini` is valid on this machine. It currently contains machine-specific extension and log paths; the root [operations guide](../../../OPERATIONS.md) explains a local configuration without committing another machine's paths.

### 1. Build the PHP shell CSS

From the repository root:

```powershell
bun install --frozen-lockfile
cd efsdb/php/core
bun run build:css
```

The PHP shell views use Tailwind-generated [style.css](./public/css/style.css). Rebuild it after editing `public/views/*.php` or `src/input.css`.

From the repo root you can also run:

```powershell
bun install --frozen-lockfile
bun run build:css
```

The root workspace also exposes `bun run build:web`, which rebuilds the PHP shell CSS plus the shipped control-plane bundles directly into [public/js](./public/js).

### 2. Start the built-in PHP server

From the repo root:

```powershell
bun run dev
```

Or from `efsdb/php/core`:

```powershell
php -c php.ini -S 127.0.0.1:8787 -t public public/index.php
```

### 3. Trigger bootstrap

Bootstrap does not happen when `php -S` starts. It happens on the first HTTP request that hits the app, for example:

- open [http://127.0.0.1:8787/](http://127.0.0.1:8787/)
- or run `Invoke-WebRequest http://127.0.0.1:8787/`

### 4. Understand the console output

- On a fresh development data directory with no `EFSDB_BOOTSTRAP_SECRET`, the first request creates `tenant-admin` and logs a one-time login key to the console.
- If the data directory was already initialized earlier, no new key is generated. The server now logs a message explaining that the tenant admin already exists.
- If `EFSDB_BOOTSTRAP_SECRET` is set, that secret is used for initialization and is never echoed back to the console.

## Demo / Recovery Commands

From the repository root, issue a fresh local demo login key for `tenant-admin`. This rotates the credential and prints the new secret; run it only for an identified local store within the task's scope:

```powershell
bun run tenant-admin-key
```

Checks (see [TESTING.md](../../../TESTING.md) for fixture and test-store side effects):

```powershell
bun run check:api
bun run check:auth
bun run check
```

Other CLI commands and their effects are catalogued in [SCRIPTS.md](../../../SCRIPTS.md#maintenance-entry-points). Even `efsdb.php help`, `status` and list commands construct the application and can initialize a new store. Use the validated ini consistently for CLI and server commands.

## Notes

- Development defaults to repository-root `.cache/efsdb/live/data` unless `EFSDB_DATA_DIR` is set. This directory is durable local data, not a disposable build cache.
- First-run workspace files are sourced from [install-seed](../../../install-seed) when present.
- Manual maintenance helpers live under [scripts/manual](../../../scripts/manual).
- Production fails closed if `EFSDB_BOOTSTRAP_SECRET` is missing during first bootstrap.
- The shipped `login`, `explorer`, `builder`, and `admin` web components are separate bundles; the PHP shell provides the surrounding page chrome and bootstrapping guidance.
