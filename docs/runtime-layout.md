# EFSDB Runtime Layout

The default live store and most scratch output use `.cache/efsdb`. The Playwright UI harness still uses a separate store under `efsdb/php/core/.cache`. See [OPERATIONS.md](../OPERATIONS.md) and [SCRIPTS.md](../SCRIPTS.md) before resetting or moving runtime state.

## Canonical hierarchy

- `.cache/efsdb/live/data`
  Durable EFSDB runtime store for local and default server installs when `EFSDB_DATA_DIR` is not set.
- `.cache/efsdb/tests/core`
  Isolated data stores for API checks, auth checks and PHP characterization.
- `efsdb/php/core/.cache/playwright-ui-data`
  Disposable UI store selected by `web/playwright.config.ts`; its server launcher deletes this directory before each suite startup.
- `.cache/efsdb/tests/conformance`
  Conformance fixture-generation scratch state. Generated fixtures are written to tracked `spec/fixtures` and read by the runner.
- `.cache/efsdb/artifacts`
  Logs, screenshots, audit captures, and other disposable outputs.
- `.cache/efsdb/workspaces`
  Temporary exported workspaces and build scratch directories used by manual tooling.
- `.cache/efsdb/migrated`
  Old runtime roots moved out of the active surface during consolidation.

## Directory map

| Path                                       | Contents                                                                                                   | How it is generated                                                                                                           | Main writers                                                                                                                                                                       |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.cache/efsdb/live/data`                   | Active encrypted store, bootstrap notices, auth/master keys, indexes, manifests, chunks, runtime snapshots | Created on first HTTP request, `efsdb.php init`, or any CLI/API path that touches the store without `EFSDB_DATA_DIR` override | `Config.php`, `Store.php`, `IndexManager.php`, `AuthKey.php`, `IdentityManager.php`, `EnvironmentOperationsService.php`, `RuntimeMonitorService.php`, `NodeEnvironmentService.php` |
| `.cache/efsdb/live/data/obj`               | Encrypted manifest and chunk payloads by bucket                                                            | Created lazily as documents/files are written                                                                                 | `Store.php`                                                                                                                                                                        |
| `.cache/efsdb/live/data/idx`               | Search/catalog/lookup indexes and sidecars                                                                 | Created lazily during writes and index rebuilds                                                                               | `IndexManager.php`, `Store.php`                                                                                                                                                    |
| `.cache/efsdb/live/data/runtime`           | Environment operation heads/snapshots, analyze cache/history, site-build state, node-environment metadata  | Created when builders, analyzers, or environment copy/promote flows run                                                       | `EnvironmentOperationsService.php`, `RuntimeMonitorService.php`, `NodeEnvironmentService.php`, `SiteBuildService.php`                                                              |
| `.cache/efsdb/live/data/.ghost`            | Decoded document cache and slow-request logs adjacent to the live data store                               | Created lazily while reading encrypted files and recording slow requests                                                      | `Store.php`, `RequestTiming.php`, `RuntimeMonitorService.php`                                                                                                                      |
| `efsdb/php/core/public/.ghost`             | Served HTML ghost-preload cache adjacent to the public web root                                            | Generated when ghost preloading runs for production or staging routes                                                         | `GhostPreloadService.php`, `efsdb/php/core/bin/efsdb.php init`                                                                                                                     |
| `.cache/efsdb/tests/core`                  | Per-suite runtime stores for `apicheck`, `authcheck` and PHP characterization                              | Reset by test harnesses with explicit `EFSDB_DATA_DIR` overrides                                                              | `efsdb/php/core/bin/apicheck.php`, `efsdb/php/core/bin/authcheck.php`, `spec/characterization/php/*`                                                                               |
| `efsdb/php/core/.cache/playwright-ui-data` | UI test store                                                                                              | Deleted and recreated by the Playwright server launcher                                                                       | `web/playwright.config.ts`, `web/scripts/start-playwright-server.ps1`                                                                                                              |
| `.cache/efsdb/tests/conformance`           | Conformance fixture-generation working store                                                               | Reset by fixture generation; emitted fixtures overwrite `spec/fixtures`                                                       | `efsdb/php/conformance/generate.php`                                                                                                                                               |
| `.cache/efsdb/artifacts/logs`              | Manual debug logs and server-side scratch logs                                                             | Generated by manual scripts or copied from older roots during consolidation                                                   | Playwright/manual tooling, ad hoc debug scripts                                                                                                                                    |
| `.cache/efsdb/artifacts/audits`            | Design/runtime audit captures from local review passes                                                     | Generated by manual audits, moved from old `.local` roots                                                                     | Manual audit flows                                                                                                                                                                 |
| `.cache/efsdb/artifacts/ui-screenshots`    | Screenshot output that should not live at the repo root                                                    | Generated by visual/manual review tooling                                                                                     | Playwright/manual visual checks                                                                                                                                                    |
| `.cache/efsdb/workspaces/builds`           | Exported project workspaces used for manual build experiments                                              | Generated by manual maintenance scripts                                                                                       | `scripts/manual/maintenance/build_sveltekit.php`                                                                                                                                   |
| `.cache/efsdb/workspaces/materialized`     | Materialized per-environment site workspaces used for component validation and runtime build staging       | Generated lazily from live site manifests when component checks or environment workflows run                                  | `PublicWorkspace.php`, `SiteBuildService.php`                                                                                                                                      |
| `.cache/efsdb/workspaces/sveltekit`        | Older SvelteKit cache/scratch roots retained outside the active tree                                       | Moved from previous `.cache/sveltekit` layout during consolidation                                                            | Manual build/debug flows                                                                                                                                                           |
| `.cache/efsdb/migrated`                    | Legacy roots kept for inspection until no longer needed                                                    | Populated by this consolidation pass                                                                                          | One-time repo migration                                                                                                                                                            |
| `install-seed/public-workspace`            | First-run starter files copied into staging/production when no homepage exists                             | Read on first workspace bootstrap                                                                                             | `PublicWorkspace.php`                                                                                                                                                              |

## Legacy roots moved out of the active surface

| Old path                 | New location                                              |
| ------------------------ | --------------------------------------------------------- |
| `efsdb/php/core/data`    | `.cache/efsdb/live/data`                                  |
| `efsdb-data`             | `.cache/efsdb/migrated/legacy-root-data`                  |
| `.cache/efsdb/data`      | `.cache/efsdb/migrated/legacy-cache-data`                 |
| `.local/*`               | `.cache/efsdb/artifacts/audits/*`                         |
| `.tmp/*`                 | `.cache/efsdb/workspaces/*` or `.cache/efsdb/artifacts/*` |
| `.cache/logs`            | `.cache/efsdb/artifacts/logs`                             |
| `.cache/ui-screenshots`  | `.cache/efsdb/artifacts/ui-screenshots`                   |
| `.cache/sveltekit`       | `.cache/efsdb/workspaces/sveltekit`                       |
| `.cache/retired-scratch` | `.cache/efsdb/migrated/retired-scratch`                   |

## Notes

- Do not delete `.cache` as a general cleanup operation: it contains the default live store and its keys. Verify the exact disposable target and preserve wanted data first.
- `EFSDB_DATA_DIR` still overrides the live data location. When it is unset, the default is `.cache/efsdb/live/data`.
- The SvelteKit PHP adapter no longer creates `build/.efsdb` when `EFSDB_DATA_DIR` is already set by the caller. Temporary `.client_tmp` and `.prerendered_tmp` folders are cleaned after import.
- The served `.ghost` cache stays under `efsdb/php/core/public/.ghost` so it remains adjacent to the location the PHP host serves.
