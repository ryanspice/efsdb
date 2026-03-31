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

## Cleanup / future work

Follow-up work should stay narrow:

1. keep contract docs aligned to the supported static-prerender surface
2. do not broaden claims to `__action`, SSR, or server-runtime parity without new implementation and characterization
