# Route Resolution Contract

Phase 1 live behavior:
- the live seam remains `efsdb/php/core/public/index.php`
- query-action routes remain compatibility routes
- `/` and `/staging` now route through `PublicSiteRouter` behind the live seam when claimed
- published routing only claims traffic once the published root is enabled by workspace content or config
- staging routing is reserved and denied auth-first by default

Current public route rules:
- `/` is public-read by default
- `/staging` is restricted by default and returns a consistent non-leaking denial for unauthenticated or unauthorized access
- `GET` and `HEAD` share route resolution and status when handled by the public router
- path traversal is rejected
- duplicate slashes are normalized
- exact path is tried before `/index.html` fallback
