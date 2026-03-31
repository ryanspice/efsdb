# Admin Contract

Typed payloads:
- `web/contracts/admin.ts`

Current live-seam surface:
- users API surface
- roles API surface
- settings API surface
- display-mode controls used by the admin UI
- public workspace root/file lifecycle APIs
- manual garbage collection API
- manual index rebuild API

Current admin rebuild path:
- `POST /api/admin/index/rebuild`
- tenant-admin or equivalent settings-management access required
- explicit rebuild is the primary indexing-completeness path for legacy records

Current host note:
- `efsdb/php/core/public/views/admin.php` is the CE-first admin host
- `_admin_legacy.php` is still an explicit rollback path while it remains operationally useful
