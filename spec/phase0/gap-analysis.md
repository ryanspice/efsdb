# Gap Analysis

High-confidence keep:
- encrypted manifest/chunk store
- auth and refresh rotation
- actual-role versus effective-role model
- login and explorer custom-element delivery pattern

Keep but refactor:
- live PHP seam
- explorer API and CE host model
- detached PHP public runtime behavior as a reference implementation

Replace for 1.0:
- query-action route model as the primary navigation architecture
- legacy admin PHP-rendered page
- placeholder search/facets/products behavior

Missing and must implement later:
- tombstone, restore, GC
- published/staging logical roots
- tenant-owned public workspace services
- delivery mode resolver
- publish pointer-swap flow
- audit service and GC/publish/delete summaries

Measured current risks:
- duplicate logicalPath ambiguity
- stale lookup residue after indexed field changes
- cross-object crash windows between chunk, manifest, and lookup writes

Phase 2 blocker, not Phase 0 blocker:
- empty `efsdb/php/core/schema` directory
