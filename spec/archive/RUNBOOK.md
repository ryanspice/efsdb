# EFSDB Demo Runbook

## 1. Prerequisites

- PHP 8.3+
- `sodium`, `mbstring`, and `json` extensions
- PowerShell or another terminal

## 2. Boot the Core Demo

The core demo is a PHP application that exposes the EFSDB admin and explorer surfaces.

```powershell
$env:EFSDB_ENV = "development"
php -c efsdb/php/core/php.ini -S 127.0.0.1:8787 -t efsdb/php/core/public
```

Optional environment overrides:

```powershell
$env:EFSDB_DATA_DIR = "B:/Dev/PHPFS/efsdb-data"
$env:EFSDB_BOOTSTRAP_SECRET = "replace-with-a-real-secret"
$env:EFSDB_DEBUG = "1"
```

## 3. Verify Health

```powershell
Invoke-WebRequest http://127.0.0.1:8787/api/health
```

Expected response shape:

```json
{
  "status": "ok",
  "version": "2.0.0",
  "env": "development",
  "debug": true
}
```

## 4. Bootstrap and Login

### Development

- If `EFSDB_BOOTSTRAP_SECRET` is set, use that value to log in as `tenant_admin`.
- If `EFSDB_BOOTSTRAP_SECRET` is not set, first initialization generates a one-time `tenant_admin` login key.
- That generated key is emitted to the server console once. It is not exposed by the public API.

### Production

- Provide `EFSDB_BOOTSTRAP_SECRET` or run the bootstrap CLI before serving traffic.
- If no bootstrap material is present, startup fails closed.

### Browser Login

- Open [http://127.0.0.1:8787](http://127.0.0.1:8787)
- Paste the `tenant_admin` login key into the login form.

## 5. Key Routes

- `/` or `/?action=home`: dashboard
- `/?action=explorer`: decoded filesystem explorer
- `/?action=system`: runtime and tenant status
- `/?action=admin`: user, role, and settings management
- `/api/health`: health endpoint
- `/api/auth/*`: auth endpoints
- `/api/admin/*`: tenant admin endpoints
- `/api/explorer/*`: logical and raw explorer endpoints

## 6. CLI Utilities

The core CLI supports initialization, user creation, and role/user inspection.

```powershell
php -c efsdb/php/core/php.ini efsdb/php/core/bin/efsdb.php status
php -c efsdb/php/core/php.ini efsdb/php/core/bin/efsdb.php init
php -c efsdb/php/core/php.ini efsdb/php/core/bin/efsdb.php list-users
php -c efsdb/php/core/php.ini efsdb/php/core/bin/efsdb.php list-roles
php -c efsdb/php/core/php.ini efsdb/php/core/bin/efsdb.php create-user demo-user member_standard
```

## 7. Smoke and Verification

Core API/auth checks:

```powershell
php -c efsdb/php/core/php.ini efsdb/php/core/bin/apicheck.php
php -c efsdb/php/core/php.ini efsdb/php/core/bin/authcheck.php
```

Conformance:

```powershell
php -c efsdb/php/core/php.ini efsdb/php/conformance/generate.php
php -c efsdb/php/core/php.ini efsdb/php/conformance/run.php
```

Manual smoke script:

```powershell
$env:EFSDB_BOOTSTRAP_SECRET = "replace-with-your-tenant-admin-key"
powershell -ExecutionPolicy Bypass -File efsdb/php/core/bin/smoke.ps1
```

## 8. Storage Safety Notes

- Keep `EFSDB_DATA_DIR` outside the served web root in production.
- The static runtime rejects public-root data directories unless explicitly forced in development.
- Login keys are stored as password hashes in encrypted documents, not as plaintext.

## 9. Troubleshooting

- Missing `sodium`: use the bundled `php.ini` or install/enable the extension.
- Login fails on first boot in production: set `EFSDB_BOOTSTRAP_SECRET` and restart.
- Explorer returns `403` in raw mode: use a role with `RAW_VIEW`, such as `tenant_admin` or `member_premium`.
- Permission errors writing data: ensure the configured data directory is writable.
