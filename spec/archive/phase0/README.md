# Phase 0

Phase 0 is limited to characterization, documentation, and contract planning.

Boundaries:
- The only live seam is `efsdb/php/core/public/index.php`.
- Repo-root `index.php` is documented as stale and excluded from seam planning.
- Thin PHP hosts remain under `efsdb/php/core/public/views`.
- `web/contracts` is reserved for shared contracts and types only.

Artifacts in this folder:
- `seam-boundary.md`
- `route-inventory.md`
- `current-architecture.md`
- `target-architecture.md`
- `gap-analysis.md`
- `parity-matrix.md`
- `characterization-inventory.md`
- `rendercheck-triage.md`
- `storage-risk.md`
- `web-contract-inventory.md`
- `stale-runtime-artifacts.md`

Phase 0 done means:
- the live seam route inventory is complete
- storage overwrite and visibility risks are documented from measured current behavior
- rendercheck triage is explicit
- characterization scripts for routes, storage, auth, explorer, API boundaries, and legacy render compatibility execute cleanly
- `web/contracts` placeholders exist and remain contract-only
