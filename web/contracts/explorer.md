# Explorer Contract

Typed payloads:
- `web/contracts/explorer.ts`

Current source inputs:
- `efsdb/php/core/src/Explorer.php`
- `efsdb/php/core/public/index.php`
- `web/apps/explorer/src/Explorer.ce.svelte`
- `web/apps/explorer/src/lib/api/explorerClient.ts`

Active surface:
- list payload shape
- details payload shape
- save payload shape
- ticket payload shape
- download access rules
- natural versus raw mode expectations

Current explorer mode contract:
- `natural` is logical-content-only and must not expose system entities, manifests, or chunks in the same listing
- `raw` is storage-inspection-only and must not mix logical file rows into raw storage trees
- `POST /api/explorer/save` is natural-only and intended for editable text/code files under admin-grade access

Executable parity coverage:
- `spec/characterization/ui/explorer.spec.ts`
- `spec/characterization/ui/ExplorerBehaviorCharacterization.spec.ts`
