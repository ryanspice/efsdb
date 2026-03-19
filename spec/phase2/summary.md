# Phase 2 Summary

## What changed

- Added real schema files under `efsdb/php/core/schema` for:
  - `products`
  - `system_users`
  - `system_roles`
  - `system_sessions`
  - `system_settings`
  - `public_workspace_roots`
  - `public_workspace_files`
  - `system_audit`
- Replaced the placeholder schema loader with authoritative write-time normalization, coercion, defaulting, validation, logical-path templating, index extraction, and response shaping in `efsdb/php/core/src/Schema.php`.
- Wired schema-driven normalization and index maintenance into `efsdb/php/core/src/Store.php` without changing the encrypted manifest/chunk storage model.
- Rebuilt `efsdb/php/core/src/IndexManager.php` into an encrypted per-entity indexing component with:
  - per-record index documents
  - term postings for filterable and facet-capable fields
  - tombstone-aware suppression
  - honest query strategies
- Added explicit service split:
  - `efsdb/php/core/src/ProductService.php`
  - `efsdb/php/core/src/SearchService.php`
  - `efsdb/php/core/src/FacetService.php`
  - `efsdb/php/core/src/EntityExposurePolicy.php`
  - `efsdb/php/core/src/IndexRebuilder.php`
- Wired the new services through `efsdb/php/core/src/App.php`.
- Replaced placeholder `/api/products`, `/api/search`, and `/api/facets` behavior in `efsdb/php/core/public/index.php` while preserving the live seam, auth boundaries, JSON-only responses, and compatibility wrong-method behavior.
- Added Phase 2 characterization coverage for schema loading, schema validation, index extraction, index rebuild behavior, product service/API, search service/API, and facets service/API.

## Contracts implemented

- Products:
  - products are normal encrypted `products` records in the core storage model
  - `GET /api/products` returns normalized product summaries
  - `GET /api/products/{id}` returns normalized product documents
  - default product list sort is `updatedAt desc, id asc`
  - cursors are opaque and encode stable boundary values, not page numbers
- Search:
  - `GET /api/search` is schema-driven behind the live seam
  - entity exposure is allowlist-based and auth-checked
  - default search sort is `score desc, id asc`
  - results return `results` plus `meta`, including honest strategy labels
- Facets:
  - `GET /api/facets` is schema-driven behind the live seam
  - only schema-marked facet fields are legal
  - facet counts are computed against the current filtered result set
- Schema:
  - write-time normalization/defaulting/coercion is authoritative
  - read-time shaping may be tolerant for API responses
  - legacy stored records are not silently rewritten on read
- Index completeness:
  - indexing happens on normal writes/upserts
  - explicit rebuild is available for legacy or backfill cases
  - lazy-on-read indexing is not the main completeness strategy

## Entity rollout matrix as shipped

| Entity | Phase 2 status | Search exposure | Facet exposure | Notes |
| --- | --- | --- | --- | --- |
| `products` | full | authenticated allowlist | authenticated allowlist | full schema normalization, indexing, list/get, search, facets |
| `system_users` | full schema, controlled exposure | admin allowlist | admin allowlist | no public widening; summaries avoid secret fields |
| `system_roles` | full schema, controlled exposure | admin allowlist | admin allowlist | used for admin/operator search and filtering |
| `system_sessions` | partial schema | internal/admin only | internal/admin only | token hashes remain non-summary/internal-only |
| `system_settings` | partial schema | internal/admin only | internal/admin only | safe extracted keys only, not arbitrary settings-tree indexing |
| `public_workspace_roots` | full schema, controlled exposure | admin allowlist | admin allowlist | tenant-root metadata search/filtering only |
| `public_workspace_files` | full metadata schema, controlled exposure | admin allowlist | admin allowlist | metadata search/filtering only; no full file-content indexing |
| `system_audit` | partial schema | internal/admin only | internal/admin only | useful for later audit search/filtering without full payload indexing |

## Rebuild behavior

- `efsdb/php/core/src/IndexRebuilder.php` is the explicit Phase 2 backfill path.
- Normal writes and upserts update indexes immediately.
- Rebuild clears and recreates an entity index from existing manifests using current schema definitions.
- The live seam exposes manual rebuild through:
  - `POST /api/admin/index/rebuild`
- Rebuild supports:
  - one entity
  - an explicit entity list
  - all indexed entities
- Rebuild is admin/settings-gated and does not rely on lazy-on-read side effects.

## Known remaining limits

- This is not full LSM/Bloom parity. There is still no WAL, compaction pipeline, or Bloom-backed read path claim.
- Repo-wide `logicalPath` ambiguity is still not solved and is not claimed as solved by Phase 2.
- Historical stale lookup residue is still possible; lookup files remain compatibility fast paths guarded by document revalidation.
- Search strategy labels are honest for the implemented paths only:
  - `lookup-fast-path`
  - `postings-intersection`
  - `index-doc-scan`
- `sveltekit-php-adapter` remains recognized but intentionally returns `503`.
- No broad UI migration was started.
- No Node runtime work was started.

## Migration notes for Phase 3

- The backend now has a stable schema/index/search/facet surface for admin/control-plane UI consumption.
- Phase 3 should move login, explorer, and admin control-plane surfaces into the `/web` workspace using the CE delivery model already proven by login and explorer.
- Admin migration should consume the new products/search/facets contracts rather than recreating placeholder/demo logic in the UI.
- The live seam in `efsdb/php/core/public/index.php` should remain in place while `/web` apps replace legacy hosts incrementally.
- Any admin CE migration should keep API payloads lean and preserve the current auth and public-route separation.
