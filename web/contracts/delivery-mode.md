# Delivery Mode Contract

Implemented in Phase 1:
- delivery mode is scoped per root, not globally
- current supported root scopes:
  - `published`
  - `staging`
- current recognized modes:
  - `php-html`
  - `sveltekit-php-adapter`

Resolution order:
1. explicit root record `deliveryMode`
2. tenant setting `publicWorkspace.<root>.deliveryMode`
3. default `php-html`

Current execution behavior:
- `php-html` is implemented
- `sveltekit-php-adapter` is implemented as static-prerender adapter delivery only
- current adapter-mode support is limited to:
  - imported prerendered HTML
  - imported `__data.json`
  - imported static assets
  - root-scoped `basePath` handling
  - root-scoped `trailingSlash` handling
  - root-scoped app-dir / asset-prefix routing
  - shared `GET`/`HEAD` route resolution semantics
- current adapter-mode non-goals remain explicit:
  - `__action` returns a stable `501 Not Implemented`
  - no generic server handlers
  - no server runtime execution
  - no SSR or streaming parity
