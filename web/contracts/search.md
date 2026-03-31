# Search Contract

Route family:
- `GET /api/search`

Typed payloads:
- `web/contracts/search.ts`

Auth and exposure:
- bearer token required
- entity exposure is allowlist-driven
- schema presence does not imply endpoint exposure

Request shape:
- `entity` is required for the schema-driven search surface
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

Representative response shape:
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
