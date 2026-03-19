# Facets Contract (Draft)

Status:
- draft for Phase 2 implementation
- finalize after characterization is green

Route family:
- `GET /api/facets`

Auth and exposure:
- bearer token required
- entity exposure is allowlist-driven
- schema presence does not imply endpoint exposure

Planned request shape:
- `entity` required in the draft contract
- temporary compatibility may default missing `entity` to `products` during Phase 2 rollout
- one or more `field`
- optional:
  - `q`
  - `filter[field]=value`

Behavior:
- only schema-marked facet fields are valid
- filtered facets are computed against the current result set

Planned response shape:
```json
{
  "results": {
    "category": [
      { "value": "lighting", "label": "lighting", "count": 4 }
    ]
  },
  "meta": {
    "entity": "products",
    "strategy": "postings-intersection|index-doc-scan",
    "warnings": []
  }
}
```
