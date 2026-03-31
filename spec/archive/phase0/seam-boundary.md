# Seam Boundary

Live seam:
- `B:/Dev/PHPFS/efsdb/php/core/public/index.php`

Out of seam scope for Phase 0:
- `B:/Dev/PHPFS/index.php`
  - status: stale repo-root demo artifact
  - use in Phase 0: documentation only
  - not a candidate live seam

Compatibility host boundary during migration:
- `efsdb/php/core/public/views/login.php`
- `efsdb/php/core/public/views/explorer.php`
- `efsdb/php/core/public/views/admin.php`

Contract-only workspace boundary:
- `web/contracts/*`
  - purpose: shared contracts and types
  - explicit non-purpose: PHP hosts, rendered views, or runtime entry points
