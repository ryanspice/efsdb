# Admin Contract

Current source inputs:
- `efsdb/php/core/public/index.php`
- `efsdb/php/core/public/views/admin.php`
- `efsdb/php/core/src/IdentityManager.php`

Freeze in Phase 0:
- users API surface
- roles API surface
- settings API surface
- display-mode controls needed by admin UI

Phase 1 and Phase 2 additions now behind the same live seam:
- public workspace root/file lifecycle APIs
- manual garbage collection API
- manual index rebuild API

Current admin rebuild path:
- `POST /api/admin/index/rebuild`
- tenant-admin or equivalent settings-management access required
- explicit rebuild is the primary indexing-completeness path for legacy records

Migration note:
- current admin page is legacy
- future admin surface moves to CE delivery
