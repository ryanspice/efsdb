# Public Workspace Contract

Current source inputs:
- `efsdb/php/runtime/index.php`
- `efsdb/php/runtime/Efsdb.php`
- `efsdb/php/core/src/Store.php`

Freeze in Phase 0:
- public workspace remains encrypted-model backed
- published and staging are tenant-owned logical roots
- public delivery is lookup plus decrypt-on-serve

Do not assume in Phase 0:
- final pointer model
- final edit model
- final publish implementation
