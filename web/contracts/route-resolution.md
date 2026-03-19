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

Phase 4 adapter note:
- roots that opt into `sveltekit-php-adapter` now serve imported prerendered HTML, imported `__data.json`, and imported static assets through the same live seam
- adapter-mode route resolution now consumes root-scoped `basePath`, `trailingSlash`, and app-dir / asset-prefix metadata from the shared public-workspace model
- adapter-mode `__data.json` and static assets are exact-file routes and do not silently fall back to HTML
- adapter-mode paths outside the configured base path return the normal missing-route response instead of silently serving scoped content
- adapter-mode `__action` remains explicitly unsupported with a stable `501 Not Implemented`

Phase 2 API note:
- `/api/products`, `/api/search`, and `/api/facets` remain on the live seam as compatibility route families
- their payload contracts are now schema-driven and no longer authoritative from the old placeholder/demo behavior
