# Phase 4 Summary

## What changed

Phase 4 completed the public-site delivery pass as an honest static-prerender adapter integration.

The key changes were:

- public-site import was unified through shared workspace storage
- adapter-mode roots can now serve imported prerendered output through the shared public router
- adapter root metadata now carries the routing inputs needed for delivery correctness:
  - `basePath`
  - `trailingSlash`
  - `appDir`
  - asset prefixes
  - import timestamps and per-import path counts
- the live seam remained:
  - `efsdb/php/core/public/index.php`

This pass did **not** turn the PHP runtime into generic SvelteKit SSR. It implemented static-prerender delivery only.

## What adapter mode now supports

Current `sveltekit-php-adapter` support is real for imported static-prerender output:

- imported prerendered HTML
- imported `__data.json`
- imported static assets
- root-scoped `basePath` handling
- root-scoped `trailingSlash` handling
- root-scoped app-dir / asset-prefix routing
- `GET` / `HEAD` parity for handled routes
- stable `501 Not Implemented` for adapter `__action`

Those routes are served through the same shared public-site stack:

- `public_workspace_roots`
- `public_workspace_files`
- `efsdb/php/core/src/PublicSiteRouter.php`

## What php-html still guarantees

`php-html` remains the stable default and fallback.

That means:

- roots stay on `php-html` unless they explicitly opt into `sveltekit-php-adapter`
- published and staging behavior for existing `php-html` roots remains unchanged
- adapter-mode work does not silently change default delivery for other roots

## Import/storage unification status

Import/storage unification is complete for public-site delivery.

The active import path is now:

- `efsdb/php/runtime/import.php` as a thin wrapper
- `efsdb/php/core/src/PublicSiteImport.php` as the shared core importer

Imported adapter output now lands in shared public-workspace storage only:

- `public_workspace_roots`
- `public_workspace_files`

Detached `site_pages` / `PageStore` is no longer an active truth for imported public-site content.

## Staging behavior guarantees

Staging guarantees remain intact:

- staging is still auth-first
- staging denial remains non-leaking
- staging checks happen ahead of adapter path existence checks
- adapter-mode staging roots do not reveal existence through missing HTML, JSON, or asset probes to unauthorized callers

## Rollback posture

Rollback remains straightforward because `php-html` is still the stable fallback.

Current rollback posture:

- keep adapter mode opt-in per root only
- switch a root back to `php-html` if adapter-mode delivery must be disabled
- imported public-workspace files can remain in storage while delivery mode is reverted
- no seam rollback is required for adapter-mode issues

## Characterization status

The Phase 4 delivery surface is characterized at the PHP/runtime/router seam:

- `spec/characterization/php/PublicSiteImportCharacterization.php`
- `spec/characterization/php/SvelteKitAdapterDeliveryCharacterization.php`
- `spec/characterization/php/SvelteKitAdapterAssetRoutingCharacterization.php`
- `spec/characterization/php/PublicSiteRouterCharacterization.php`
- `spec/characterization/php/RuntimePublicEntryCharacterization.php`
- `spec/characterization/php/DeliveryModeResolutionCharacterization.php`
- `spec/characterization/php/LiveSeamRouteCharacterization.php`

These checks are the source of truth for the supported adapter-mode surface.

## Adapter package build verification

Runtime behavior is implemented and characterized, and the local adapter package build is now verified as well.

Confirmed local package build:

- `bun install`
- `bun run build`

Run those commands in `efsdb/adapters/php`.

That means the truthful current state is:

- PHP/runtime delivery behavior is implemented and green
- `efsdb/adapters/php` now builds locally with package-local tooling
