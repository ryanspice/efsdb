# Publish Contract

Current source inputs:
- `efsdb/php/core/src/Store.php`
- `efsdb/php/core/src/Audit.php`

Freeze in Phase 0:
- publish is pointer or root-manifest swap, not deep copy
- staging validation precedes swap
- audit recording is required
- previous published pointer should remain available for rollback where practical
