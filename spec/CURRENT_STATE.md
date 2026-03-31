# Current State

This document is the active high-level reference for the repo surface after the phase-doc consolidation.

## Active Runtime And Build Truth

- The live PHP seam remains `efsdb/php/core/public/index.php`.
- The active web app entrypoints are:
  - `web/apps/login`
  - `web/apps/explorer`
  - `web/apps/builder`
  - `web/apps/admin`
- Builder is a standalone control-plane app and PHP host.
- Search is embedded inside the explorer UI and is not a standalone shipped host app.
- Shared typed payloads for the web layer live in `web/contracts/*.ts`.
- Shared workstation primitives, tokens, and design references live in `web/ui` and `web/styles`.

## Verification Truth

The supported verification surface is:

- `bun run check`
- `bun run web:typecheck`
- `bun run web:test:ui`
- `efsdb/php/core/bin/apicheck.php`
- `efsdb/php/core/bin/authcheck.php`
- `efsdb/php/conformance/generate.php`
- `efsdb/php/conformance/run.php`
- `spec/characterization/php/*`
- `spec/characterization/ui/*`

Ad hoc repo-root tests, captured outputs, and local data sandboxes are not part of the supported verification path.

## Transitional Items Still Present

- `efsdb/php/core/public/views/_admin_legacy.php` remains the explicit admin rollback path while that fallback is still useful.
- `efsdb/php/core/public/views/header.php`, `nav.php`, and `footer.php` still own shared shell framing.
- `efsdb/php/core/public/js/auth-interceptor.js` remains the host-global auth compatibility layer.
- `efsdb/php/core/public/js/theme-manager.js` remains the host-global theme source.

## Public Site Delivery Limits

- `php-html` remains the default delivery mode.
- `sveltekit-php-adapter` support is limited to imported static-prerender delivery.
- EFSDB does not currently claim generic SSR, action, or server-runtime parity for SvelteKit.

## Archived Material

- Historical phase plans, summaries, and retired spec drafts live under `spec/archive/`.
- Archive content is preserved for reference and project history, not as the active implementation guide.
