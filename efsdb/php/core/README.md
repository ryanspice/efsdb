# EFSDB PHP Core

EFSDB is a PHP 8.3 control plane and encrypted content runtime. The PHP app does three things on first initialization:

1. creates the encrypted data store and master/auth keys in the data directory
2. seeds system roles and tenant settings
3. provisions the default `tenant-admin` account

## Development Quick Start

### 1. Build the PHP shell CSS
```powershell
cd B:\Dev\PHPFS\efsdb\php\core
bun install
bun run build:css
```

The PHP shell views use Tailwind-generated [style.css](B:/Dev/PHPFS/efsdb/php/core/public/css/style.css). Rebuild it after editing `public/views/*.php` or `src/input.css`.

From the repo root you can also run:

```powershell
bun install
bun run build:css
```

The root workspace also exposes `bun run build:web`, which rebuilds the PHP shell CSS plus the shipped `efsdb-login` and `efsdb-explorer` bundles directly into [public/js](B:/Dev/PHPFS/efsdb/php/core/public/js).

### 2. Start the built-in PHP server
From the repo root:

```powershell
bun run dev
```

Or from `efsdb/php/core`:

```powershell
php -c php.ini -S 127.0.0.1:8787 -t public
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

Issue a fresh local demo login key for `tenant-admin`:

```powershell
bun run tenant-admin-key
```

Other useful commands:

```powershell
bun run check:api
bun run check:auth
bun run check
php efsdb/php/core/bin/efsdb.php status
php efsdb/php/core/bin/efsdb.php list-users
php efsdb/php/core/bin/efsdb.php list-roles
php efsdb/php/core/bin/efsdb.php create-user member-jane member_standard
php efsdb/php/core/bin/efsdb.php rotate-user-key tenant-admin
```

## Notes

- Development defaults to [data](B:/Dev/PHPFS/efsdb/php/core/data) unless `EFSDB_DATA_DIR` is set.
- Production fails closed if `EFSDB_BOOTSTRAP_SECRET` is missing during first bootstrap.
- The shipped `efsdb-login` and `efsdb-explorer` web components are separate bundles; the PHP shell provides the surrounding page chrome and bootstrapping guidance.
