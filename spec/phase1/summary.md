# Phase 1 Summary

## What changed

- Added manifest lifecycle support in `efsdb/php/core/src/Store.php` for tombstone and restore operations.
- Added manual garbage collection in `efsdb/php/core/src/GarbageCollector.php` with manifest purge first and chunk purge only after reference checks.
- Replaced the audit stub with event recording in `efsdb/php/core/src/Audit.php`.
- Added tenant-scoped public workspace services in:
  - `efsdb/php/core/src/PublicWorkspace.php`
  - `efsdb/php/core/src/DeliveryModeResolver.php`
  - `efsdb/php/core/src/PublicSiteRouter.php`
- Wired the new services through `efsdb/php/core/src/App.php`.
- Routed public delivery through the live seam in `efsdb/php/core/public/index.php` without removing the existing compatibility dispatch.
- Aligned the detached PHP runtime entry in:
  - `efsdb/php/runtime/index.php`
  - `efsdb/php/runtime/Efsdb.php`
  so it now wraps shared public-routing behavior instead of maintaining a separate delivery path.
- Updated explorer behavior in `efsdb/php/core/src/Explorer.php` so natural mode hides tombstoned records immediately while raw mode still exposes them for privileged inspection.

## Contracts implemented

- Public workspace:
  - published root is public-read by default
  - staging root is restricted by default
  - public workspace file ids are deterministic from `tenant + root + normalized path`
  - recreating a tombstoned public path rewrites or restores the same deterministic record
- Delivery mode resolution:
  - scoped per root
  - resolves root override first, then tenant setting fallback, then `php-html`
  - recognizes `php-html` and `sveltekit-php-adapter`
- Delete and GC:
  - tombstone-first delete
  - restore clears tombstone state on the same record
  - manual GC purges expired tombstoned manifests
  - chunk purge only happens after reference checks
- Route resolution:
  - live seam remains `efsdb/php/core/public/index.php`
  - `/` and `/staging` are now handled behind the seam when claimed by the public router
  - `HEAD` follows the same route resolution and status as `GET`, with no body

## Intentional non-goals preserved

- No broad UI migration was started.
- Legacy query-action compatibility routing was not removed.
- Node runtime work was not started.
- Products, schema normalization, search, and facets remain out of scope for this phase.
- No claim was made that generic repo-wide duplicate `logicalPath` ambiguity is solved.
- No claim was made that full SvelteKit adapter parity exists.

## Known remaining limits

- Generic `logicalPath` ambiguity still exists outside the deterministic public workspace model.
- Store atomicity is still per-file temp-write plus rename, not a transaction across chunks, manifests, and lookup files.
- Historical stale lookup residue is still possible; Phase 1 only adds best-effort cleanup where manifest metadata is available.
- `sveltekit-php-adapter` is recognized by mode resolution but still returns a controlled `503`.
- Staging access defaults to `tenant_admin` and `operator_root`; finer-grained editor/content-manager role expansion still needs deliberate modeling.
- Publish pointer-swap semantics are not implemented yet.

## Migration notes for later phases

- Phase 2 should use the Phase 0 and Phase 1 contracts plus characterization suite as the source of truth.
- Products should move into the core schema/storage model, not remain a special-case route family.
- Search and facets should be rebuilt as schema-driven services with explicit contracts and tests before the current placeholder behavior is retired.
- `IndexManager` should evolve from compatibility behavior toward real indexed segments carefully, preserving fast-path compatibility only where it remains defensible and tested.
- Any future `/admin` route migration should continue to preserve the live seam until replacement behavior is fully characterized.

## Stabilization sanity pass

Targeted live-seam sanity checks were run after Phase 1:

- `GET /` returned published content.
- guest `GET /staging/...` returned a consistent `404 Not Found (EFSDB)` denial shape.
- authorized `GET /staging/...` returned staging content.
- a tombstoned public path returned the same not-found shape as absent content.
- recreating the same tombstoned public path returned the new content at the same deterministic record.
- GC on shared-chunk fixtures purged the first expired manifest without dropping shared chunks, then purged the chunk only after the second manifest was tombstoned and collected.
