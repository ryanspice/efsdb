# Search Contract (Draft)

Status:
- draft for Phase 2 implementation
- finalize after characterization is green

Route family:
- `GET /api/search`

Auth and exposure:
- bearer token required
- entity exposure is allowlist-driven
- schema presence does not imply endpoint exposure

Planned request shape:
- `entity` is required in the draft contract
- temporary compatibility may default missing `entity` to `products` during Phase 2 rollout
- optional:
  - `q`
  - `limit`
  - `cursor`
  - `sort`
  - `filter[field]=value`

Default sort:
- `score desc`
- `id asc`

Cursor:
- opaque
- encodes stable boundary values, not page numbers

Planned response shape:
```json
{
  "results": [
    {
      "entity": "products",
      "id": "prod_123",
      "score": 12,
      "summary": {
        "sku": "sku-123",
        "name": "Desk Lamp",
        "status": "active",
        "category": "lighting"
      }
    }
  ],
  "meta": {
    "entity": "products",
    "limit": 20,
    "nextCursor": null,
    "strategy": "lookup-fast-path|postings-intersection|index-doc-scan",
    "indexed": true,
    "warnings": []
  }
}
```
