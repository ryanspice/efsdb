# Products Contract

Route family:
- `GET /api/products`
- `GET /api/products/{id}`

Typed payloads:
- `web/contracts/products.ts`

Auth:
- bearer token required

Behavior:
- products are normal encrypted `products` records, not a separate engine
- list returns normalized product summaries, not raw manifests
- get returns a normalized product document
- default list sort:
  - `updatedAt desc`
  - `id asc`
- cursors are opaque and encode stable boundary values, not page numbers

Request shape:
- `GET /api/products?limit=20&cursor=...`
- optional exact filters may be added for schema-marked product fields

Representative response shape:
```json
{
  "results": [
    {
      "id": "prod_123",
      "type": "product",
      "sku": "sku-123",
      "name": "Desk Lamp",
      "slug": "desk-lamp",
      "status": "active",
      "category": "lighting",
      "brand": "north",
      "price": {
        "amount": 49.99,
        "currency": "USD"
      },
      "updatedAt": "2026-03-18T00:00:00Z"
    }
  ],
  "meta": {
    "limit": 20,
    "nextCursor": null
  }
}
```
