# EFSDB

EFSDB is an encrypted file system database with canonical manifests, chunked encrypted storage, a PHP reference runtime, and a web control plane.

## Active Source Of Truth

- Runtime and host behavior:
  - `efsdb/php/core`
  - `efsdb/php/runtime`
- Web apps:
  - `web/apps/login`
  - `web/apps/explorer`
  - `web/apps/builder`
  - `web/apps/admin`
- Shared typed web contracts:
  - `web/contracts/*.ts`
- Shared workstation UI and design tokens:
  - `web/ui`
  - `web/styles`
- Executable characterization and conformance:
  - `spec/characterization`
  - `efsdb/php/conformance`
- Active spec docs:
  - `spec/CURRENT_STATE.md`
  - `spec/FORMAT.md`
  - `spec/auth-contract.md`
  - `spec/CONFORMANCE.md`

Historical phase plans and retired drafts now live under `spec/archive`.

## Run The Demo

From the repo root:

```powershell
bun install
bun run build:web
bun run dev
```

`bun run build:web` rebuilds the Tailwind PHP shell and ships the active `login`, `explorer`, `builder`, and `admin` web bundles into [efsdb/php/core/public/js](B:\Dev\PHPFS\efsdb\php\core\public\js). Search remains embedded inside the explorer bundle and is not shipped as a standalone host app.

Direct PHP startup still works:

```powershell
$env:EFSDB_ENV = "development"
php -c efsdb/php/core/php.ini -S 127.0.0.1:8787 -t efsdb/php/core/public
```

Useful overrides:

```powershell
$env:EFSDB_DATA_DIR = "./efsdb-data"
$env:EFSDB_BOOTSTRAP_SECRET = "replace-with-a-real-secret"
$env:EFSDB_DEBUG = "1"
```

Open [http://127.0.0.1:8787](http://127.0.0.1:8787).

## Bootstrap And Roles

- Development bootstraps on the first HTTP request.
- If `EFSDB_BOOTSTRAP_SECRET` is set, it becomes the initial `tenant_admin` login key.
- If no bootstrap secret is set, first initialization generates a one-time `tenant_admin` key and prints it to the server console once.
- If the data directory already exists, no new key is generated. Use `bun run tenant-admin-key` to rotate and print a fresh local demo key.
- Production requires `EFSDB_BOOTSTRAP_SECRET` or an explicit bootstrap CLI flow and fails closed without it.
- Seeded roles remain:
  - `operator_root`
  - `tenant_admin`
  - `member_premium`
  - `member_standard`
  - `guest`

## Verification

Core validation:

```powershell
bun run check
```

Individual checks:

```powershell
bun run check:api
bun run check:auth
bun run check:conformance:generate
bun run check:conformance
bun run web:typecheck
bun run web:test:ui
```

To keep CLI PHP execution aligned with the app runtime:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\php-core.ps1 .\efsdb\php\core\bin\apicheck.php
```

Manual smoke test:

```powershell
$env:EFSDB_BOOTSTRAP_SECRET = "replace-with-your-tenant-admin-key"
powershell -ExecutionPolicy Bypass -File efsdb/php/core/bin/smoke.ps1
```

## Security Notes

- Runtime data and key material must live outside the served web root in production.
- Refresh tokens are hashed server-side and revoked or rotated on use.
- Login keys are stored only as password hashes inside encrypted documents.
- The conformance fixtures include a public test key for deterministic crypto checks. Do not reuse that key for real deployments.

## Docs

- [Current state](spec/CURRENT_STATE.md)
- [Format spec](spec/FORMAT.md)
- [Auth contract](spec/auth-contract.md)
- [Conformance checklist](spec/CONFORMANCE.md)
- [Web contract guide](web/contracts/README.md)
- [Archived phase docs](spec/archive/README.md)
