# Project invariants

[AGENTS.md](AGENTS.md) is the shared instruction entry point. This file describes EFSDB's architecture, data and delivery boundaries; it does not add a separate agent authority.

## Runtime and UI

- PHP owns route and layout behavior. The public site stays at `/` and the control plane under `/_efsdb`; use thin route wiring in `efsdb/php/core/public/index.php` and delegate to existing services. Do not introduce `?action=` routing.
- Svelte custom elements/islands enhance the PHP host. Builder is separate from Explorer; Explorer is an inspection surface, and editing belongs in dedicated editor surfaces/windows. JSON is structured content truth, preview uses an iframe, and compile-on-save is the default workflow.
- Use `production` for the environment name. Preserve the auth interceptor, theme manager, shell framing and explicit legacy admin fallback while they remain active in [current state](spec/CURRENT_STATE.md).
- Follow [web/ui/README.md](web/ui/README.md), the [design brief](web/ui/design/efsdb-ui-design-brief-v0.1.md) and runtime tokens in `web/styles`/`web/ui/design/tokens.ts`. Dark is the workstation baseline, light remains first-class, and green is an optional accent.
- The SvelteKit integration supports imported static prerender delivery. Do not claim generic SSR, actions or server-runtime parity from an import or build succeeding.

## Data and credentials

- Keep runtime stores and master/auth keys outside the served web root in production. Preserve `Config.php`'s fail-closed check; do not use the development public-data override as a production workaround.
- Preserve [the auth contract](spec/auth-contract.md): login keys are hashed inside encrypted documents, access tokens remain in browser memory, and refresh sessions are hashed and rotated with replay rejection. Keep actual identity separate from display mode.
- Never commit runtime secrets, tenant data, private logs or recovery snapshots. Public conformance keys are test data and must not be used for real stores.
- Treat changes to crypto, schema, authorization, storage layout or deletion as compatibility/security changes. Check the implementation and relevant characterization/conformance coverage together with [FORMAT.md](spec/FORMAT.md) and [CONFORMANCE.md](spec/CONFORMANCE.md); record discrepancies rather than silently redefining the contract.
- Maintenance targets need explicit identification. Key rotation, garbage collection, reset, import and production promotion have persistent effects documented in [SCRIPTS.md](SCRIPTS.md#maintenance-entry-points).

## Source and delivery

Authored PHP/TypeScript/Svelte sources, shipped generated bundles, test fixtures and runtime data have different owners and lifecycles. Review generated output when source changes require rebuilding; do not hand-edit a bundle as a substitute for its source or commit unrelated fixture churn.

Keep archived plans under `spec/archive` as historical evidence. Current source, tests and active docs must agree before making a compatibility claim. A commit, passing check, remote push or model review does not prove a deployed revision or human acceptance. A PR request authorizes preparing that reviewable change; deployment and live data operations require their own authorized scope.
