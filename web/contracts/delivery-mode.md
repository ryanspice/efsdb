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
- `sveltekit-php-adapter` is recognized but returns a controlled `503` instead of claiming parity
