# Facets Contract

Route family:
- `GET /api/facets`

Typed payloads:
- `web/contracts/facets.ts`

Auth and exposure:
- bearer token required
- entity exposure is allowlist-driven
- schema presence does not imply endpoint exposure

Request shape:
- `entity` required
- one or more `field`
- optional:
  - `q`
  - `filter[field]=value`

Behavior:
- only schema-marked facet fields are valid
- filtered facets are computed against the current result set

Representative response shape:
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
