# Delete And GC Contract

Current source inputs:
- `efsdb/php/core/src/Store.php`
- `efsdb/php/core/src/Audit.php`

Freeze in Phase 0:
- delete becomes tombstone-first
- restore clears tombstone before retention expiry
- default retention target is 30 days
- GC is manual or operator-triggered in 1.0
- chunk purge happens only after reference checks
