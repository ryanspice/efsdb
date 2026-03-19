# Route Resolution Contract

Current source inputs:
- `efsdb/php/core/public/index.php`
- `efsdb/php/runtime/index.php`

Freeze in Phase 0:
- current query-action routes are compatibility routes
- target 1.0 routes are:
  - `/admin`
  - `/`
  - `/staging`
- the live seam stays `efsdb/php/core/public/index.php` during migration
