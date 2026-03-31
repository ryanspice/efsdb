# Phase 3 Summary

## What changed

- Created the `/web` workspace as the active control-plane UI source of truth:
  - `web/apps/login`
  - `web/apps/explorer`
  - `web/apps/admin`
- Rehomed the shipped login custom element into `web/apps/login/*` and retired the old standalone `efsdb-login/*` fallback source while keeping the PHP-served asset path stable at `/js/efsdb-login.js`.
- Rehomed the shipped explorer custom element into `web/apps/explorer/*`, restored the missing interaction parity in the CE workspace, and retired the old standalone `efsdb-explorer/*` fallback source while keeping the PHP-served asset path stable at `/js/efsdb-explorer.js`.
- Built a real admin custom element in `web/apps/admin/*` that consumes the existing auth, admin, products, search, and facets contracts.
- Made the admin custom element the default `?action=admin` path.
- Reduced `efsdb/php/core/public/views/admin.php` to a true thin CE host.
- Added real Playwright browser characterization for the migrated control-plane surfaces and bootstrap asset paths.

## Active source-of-truth paths

- Login UI source of truth:
  - `web/apps/login`
- Explorer UI source of truth:
  - `web/apps/explorer`
- Admin UI source of truth:
  - `web/apps/admin`
- Shared typed contracts used by the web apps:
  - `web/contracts`
- Shared CE bootstrap/auth/theme helpers:
  - `web/utils/bootstrap/hostProps.ts`
  - `web/utils/bootstrap/authBridge.ts`
  - `web/utils/bootstrap/themeBridge.ts`
- Shared build and browser tooling:
  - `web/package.json`
  - `web/vite.shared.ts`
  - `web/playwright.config.ts`

## Active PHP host paths

- Live seam remains:
  - `efsdb/php/core/public/index.php`
- Active CE-first control-plane hosts:
  - `efsdb/php/core/public/views/login.php`
  - `efsdb/php/core/public/views/explorer.php`
  - `efsdb/php/core/public/views/admin.php`
- Transitional shared shell files still in use:
  - `efsdb/php/core/public/views/header.php`
  - `efsdb/php/core/public/views/nav.php`
  - `efsdb/php/core/public/views/footer.php`

## Shared host/bootstrap contract

Phase 3 standardized one host contract across login, explorer, and admin:

- one CE tag per host:
  - `<efsdb-login>`
  - `<efsdb-explorer>`
  - `<efsdb-admin>`
- one stable module script per app:
  - `/js/efsdb-login.js`
  - `/js/efsdb-explorer.js`
  - `/js/efsdb-admin.js`
- one bootstrap payload:
  - `<script type="application/json" id="efsdb-bootstrap">...</script>`
- one shared parser:
  - `web/utils/bootstrap/hostProps.ts`

The typed payload contract lives in `web/contracts/bootstrap.ts`.

Current bootstrap payload fields:

- `app`
- `tag`
- `assetFile`
- `apiBase`
- `authBase`
- `theme`
- `user`
- `flags`
- `initial`
- `urls`

Current bridge ownership:

- host-global compatibility auth glue remains in:
  - `efsdb/php/core/public/js/auth-interceptor.js`
- CE-facing typed auth bridge lives in:
  - `web/utils/bootstrap/authBridge.ts`
- host-global theme source remains in:
  - `efsdb/php/core/public/js/theme-manager.js`
- CE-facing typed theme bridge lives in:
  - `web/utils/bootstrap/themeBridge.ts`

## Current build truth

Active build truth is now `/web`.

Root build scripts currently resolve to:

- `build:login` -> `web`
- `build:explorer` -> `web`
- `build:admin` -> `web`

Fallback-only build sources still present:
- none for login or explorer

Current root fallback scripts:
- none for login or explorer

That means:

- `/web` is the active shipped source of truth for login, explorer, and admin
- login and explorer rollback are now git-based rather than legacy-build based

## CE-first host status

| Surface | Active default path | Host status | Runtime rollback |
| --- | --- | --- | --- |
| Login | `?action=login` | CE-first thin host | git revert only |
| Explorer | `?action=explorer` | CE-first thin host | git revert only |
| Admin | `?action=admin` | CE-first thin host | `?action=admin&ui=legacy` |

## Browser characterization coverage

Real browser coverage is now wired through Playwright in `web/playwright.config.ts`.

Active executable browser specs:

- `spec/characterization/ui/login.spec.ts`
  - login host boot
  - stable asset path
  - bootstrap payload presence
  - login happy path
  - login failure path
  - focus behavior
- `spec/characterization/ui/explorer.spec.ts`
  - explorer host boot
  - stable asset path
  - bootstrap payload presence
  - authenticated render
  - keyboard behavior
  - natural/raw bootstrap continuity
- `spec/characterization/ui/ExplorerBehaviorCharacterization.spec.ts`
  - drag-to-scrub Miller columns
  - hovered-column mouse-wheel scrolling
  - global explorer scale parity across coverflow, columns, and preview
  - folder/file/raw double-click behavior
  - raw relationships popup and ticket/download continuity
- `spec/characterization/ui/admin.spec.ts`
  - default admin CE boot
  - explicit legacy rollback path
  - admin CE contract consumption
- `spec/characterization/ui/bootstrap-assets.spec.ts`
  - stable JS bundle filenames
  - bootstrap payload validity
  - representative browser-level API JSON/no-HTML leakage checks

PHP characterization still remains part of the source of truth for response-shape and compatibility-route behavior; the browser checks here are an additional executable layer, not the only guard.

## Rollback paths still present

Current rollback paths are deliberate and explicit:

- Admin runtime rollback:
  - `?action=admin&ui=legacy`
  - backed by `efsdb/php/core/public/views/_admin_legacy.php`

No public-site rollback path was introduced because `/` and `/staging` were intentionally kept out of the Phase 3 blast radius.

## Known remaining temporary pieces

- `efsdb/php/core/public/views/_admin_legacy.php` still exists as a short-term runtime rollback path.
- `efsdb/php/core/public/views/header.php`, `nav.php`, and `footer.php` still carry transitional shell responsibilities.
- `efsdb/php/core/public/js/auth-interceptor.js` remains the host-global compatibility auth path.
- `efsdb/php/core/public/js/theme-manager.js` remains the host-global theme source.
- `spec/characterization/ui/ExplorerBehaviorCharacterization.spec.ts` remains a pre-Playwright placeholder artifact.

## What remains intentionally transitional

- Compatibility routing still lives behind `efsdb/php/core/public/index.php`.
- Public site delivery at `/` and `/staging` was not changed by the control-plane migration.
- Admin legacy rollback remains explicit instead of being removed immediately after the cutover.

## Recommended future cleanup order

1. Remove `?action=admin&ui=legacy` and `_admin_legacy.php` after the admin CE path is considered stable enough that runtime rollback is no longer warranted.
2. Narrow `header.php`, `nav.php`, and `footer.php` to shell-only responsibilities, removing any now-obsolete control-plane assumptions.
3. Decide whether `auth-interceptor.js` and `theme-manager.js` can be further narrowed or retired after the CE bridges fully cover the required behavior.
4. Keep the executable explorer parity suite current as later explorer changes land.

See `cleanup-plan.md` for removal criteria and sequencing.
