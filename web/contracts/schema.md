# Schema Contract (Draft)

Status:
- draft for Phase 2 implementation
- finalize after characterization is green

Scope:
- schema drives write-time normalization, defaulting, coercion, validation, and index extraction
- read-time shaping may be tolerant for API responses
- legacy stored records are not silently rewritten on read
- indexing completeness comes from normal writes/upserts plus explicit operator/admin rebuilds

Top-level schema keys:
- `entity`
- `kind`
- `storage`
- `fields`
- `indexes`
- `search`
- optional `summary`

Field vocabulary:
- `type`
- `required`
- `default`
- `const`
- `enum`
- `trim`
- `lowercase`
- `uppercase`
- `slug`
- `auto`

Index vocabulary:
- `source`
- `kind`
- `lookupFastPath`
- `searchable`
- `filterable`
- `facet`
- `sortable`
- optional `weight`

Explicit non-goals for Phase 2:
- full JSON Schema support
- arbitrary cross-field validators
- lazy-on-read indexing as the primary completeness strategy
- full LSM/Bloom parity claims
- repo-wide logical-path uniqueness claims
