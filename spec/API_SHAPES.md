# API Shapes v0.2.0

## Common Envelopes

### Success (List)
```json
{
  "results": [...],
  "nextCursor": "string_or_null",
  "meta": {
    "total": 123,
    "limit": 20,
    "offset": 0,
    "took": 15
  }
}
```

### Success (Single)
```json
{
  "result": { ... }
}
```

### Error
```json
{
  "error": {
    "code": "string_code",
    "message": "Human readable message"
  }
}
```

## Endpoints

### `GET /api/products`
- **Params**: `limit` (1-100), `cursor`
- **Response**: List Envelope

### `GET /api/products/{id}`
- **Response**: Single Envelope

### `GET /api/search`
- **Params**: `q` (max 256 chars), `limit` (1-100), `offset`, `sort`
- **Response**: List Envelope (with `meta`)

### `GET /api/facets`
- **Response**:
```json
{
  "category": [{ "label": "X", "count": 10 }],
  "ownerId": []
}
```
