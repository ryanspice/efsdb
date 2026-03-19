# Phase 4 Known Limits

## Scope boundary

Phase 4 support is limited to static-prerender adapter delivery.

It is **not** a claim of generic SvelteKit runtime parity.

## Explicitly unsupported

The following remain intentionally unsupported after Phase 4:

- `__action`
  - stable response: `501 Not Implemented`
- generic server endpoints / handlers
- server runtime execution
- SSR
- streaming
- dynamic cookie mutation parity
- dynamic header mutation parity
- arbitrary Accept-driven content negotiation

## Practical interpretation

The supported model is:

- import prerendered output
- store it in shared public-workspace storage
- serve HTML, `__data.json`, and static assets through the shared router

The unsupported model is:

- execute application server code on each request
- emulate full SvelteKit server behavior
- claim endpoint/action/runtime compatibility that is not characterized

## Adapter package caveat

Runtime and router behavior are characterized from the PHP side.

The adapter package itself still has one explicit verification caveat:

- `efsdb/adapters/php` package build was not confirmed in this workspace because `tsup` was unavailable on PATH

That caveat should be resolved separately from runtime claims.

## Cleanup / future work

Follow-up work should stay narrow:

1. verify the local `efsdb/adapters/php` package build with the expected toolchain installed
2. keep contract docs aligned to the supported static-prerender surface
3. do not broaden claims to `__action`, SSR, or server-runtime parity without new implementation and characterization
