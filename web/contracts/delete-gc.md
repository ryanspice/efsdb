# Delete And GC Contract

Implemented in Phase 1:
- delete is tombstone-first through manifest lifecycle metadata
- restore clears tombstone state on the same manifest id
- default tombstone retention is 30 days unless overridden
- tombstoned items disappear from natural/public visibility immediately
- manual GC purges expired tombstoned manifests
- chunk purge happens only after reference checks across remaining manifests in the same entity

Current limits preserved from Phase 0:
- lifecycle updates are same-id manifest rewrites
- there is still no cross-file transaction spanning chunks, manifests, and lookup files
- lookup cleanup is best-effort and based on manifest-stored lookup metadata where available
