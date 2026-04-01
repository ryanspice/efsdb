# Historical Reference Scripts

This directory contains older, non-operational helper scripts preserved purely as historical implementation references.

**Important Notes:**
*   These files are **not** part of the supported verification surface.
*   They should **not** be run as normal operational commands.
*   Active, supported operational helpers for the current architecture now live under `scripts/manual/maintenance/` and `scripts/manual/recovery/`.

## Contents

*   `reference_tsx_preview_wrapper.php`: Demonstrates how complex Nominated Route PHP wrappers were constructed to inject raw HTML fallback shells around single-file components before native integration.
*   `reference_sveltekit_hydration_injector.php`: Demonstrates the exact JSON payload structures and string replacement logic used to manually inject `window.__EFSDB__` hydration data into compiled SvelteKit entrypoints.
