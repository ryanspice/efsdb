# Current Implemented Architecture

- Runtime seam: `efsdb/php/core/public/index.php`
- Routing model: one PHP front controller with mixed API routes plus query-action HTML host rendering
- Storage model: encrypted manifest-per-record and chunked encrypted content in `Store.php`
- Read model: manifest-first reconstruction plus chunk hash verification
- Auth model: bearer access tokens in memory, opaque rotating refresh sessions in cookies
- Identity model: actual role plus effective role/display mode
- Explorer model: natural and raw modes backed by `Explorer.php`
- Admin UI model: mixed state
  - login: thin PHP host + Svelte custom element
  - explorer: thin PHP host + Svelte custom element
  - admin: legacy PHP-rendered page with inline JavaScript
- Public site model: detached reference implementation in `efsdb/php/runtime`, not the live seam
- Search/products/facets: placeholder or compatibility-grade implementations, not authoritative 1.0 behavior
