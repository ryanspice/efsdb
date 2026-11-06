# First security implementation wave — October 23, 2026

Local implementation and acceptance receipt. Branch: `codex/security-hardening-20261023`. Original source baseline: `f060badc12c28558b80574b96b2c1ce18e1ed683`. Source/dependency checkpoint: `a62f13005db02ff98382a0739a82f31a6d2b9ae0`. This document is committed after that checkpoint. The worktree retains unrelated pre-existing changes.

## Changes and focused commits

| Commit | Result |
| --- | --- |
| `92e4410` | README, AGENTS, INTENT, modernization plan and repository task/receipt schema. |
| `ae02cfd` | E-04: refresh-session transitions use a process-shared lock with recheck. A parent is consumed before issuing a child; competing/replayed requests cannot create a second active descendant. |
| `3a49e30` | Runtime security-floor check and local PHP update receipt. |
| `44c58e1` | E-05: durable key creation and idempotent identity/bootstrap under shared locks; malformed existing keys are rejected without replacement. |
| `0ce493a` | Inspector regression follows the existing canonical metadata JSON contract and summary cards. The retired list selector failed against unchanged UI source; no parser/envelope format changed. |
| `70f330d` | E-01: site-edit authorization before component creation/import side effects, fixed framework/environment selection, canonical template containment and bounded archive extraction. |
| `492efcf` | Svelte 5.57.2, Vite 6.4.5 and devalue 5.9.4; rebuild every shipped UI entrypoint. |
| `ad96db1` | E-02/E-03: explicit public-asset policy, authorized materialized delivery, restricted staging default, policy-bound cache identity/invalidation and content-sensitive validators. |
| `a62f130` | Keep test tooling on the compatible patched Vite lane too; remove old nested resolutions from the lockfile. |

Imports reject traversal, absolute/drive paths, links/special files, Windows path aliases and reserved devices. Limits are 16 MiB compressed, 8 MiB per file, 64 MiB expanded and 2,048 entries. Temporary extraction is private and cleaned on failure. Imported build-script isolation is still a deployment task.

Public delivery rejects source files, private namespaces, dotfiles, metadata, source maps and ambiguous encoded/Windows paths. The built-in-server shortcut checks both requested and canonical paths before native file delivery, including a junction into private source. Old pre-bootstrap materialized/Ghost reads are removed. Restricted responses use `private, no-store`; new staging roots default to restricted. Existing explicitly public settings are not silently migrated. ETags incorporate content identity, and `If-None-Match` takes precedence over `If-Modified-Since`.

## Runtime and dependency evidence

Both discovered Windows PHP installations are **8.5.12 x64 NTS**. Existing configuration and the native BLAKE3 DLL were preserved. Sodium, mbstring, OpenSSL, the BLAKE3 known vector and existing conformance cases pass. Original binaries are backed up outside Git. See the [runtime receipt](runtime-20261023.md).

The final lockfile resolves one Vite version, **6.4.5**, including Vitest's dependency. Bun 1.2.23 initially left stale nested packages installed after the lockfile change; `bun install --force --ignore-scripts` corrected the installation. A Node `createRequire` probe from Vitest confirms it actually loads **6.4.5**. This override satisfies the existing tool ranges; no peer dependency was forced.

## Verification

PHP tests use the explicit updated binary and repository extension directory through `EFSDB_PHP_BIN` / `EFSDB_PHP_EXTENSION_DIR`. All commands below exited zero. Tests use dedicated synthetic data/cache roots.

| Check | Actual result |
| --- | --- |
| `bun run check:runtime`, `bun run check:php-ini` | Patched CLI and repository ini pass. |
| `bun run check:api` | 71 passed, 0 failed; crypto preflight passed. |
| `bun run check:auth` | 9 passed, 0 failed. |
| `bun run check:conformance` | 7 passed; existing fixtures only, no regeneration. |
| `RefreshConcurrencyCharacterization.php` | 10 passed; eight competing workers, replay/logout/expiry and interruption/restart. |
| `BootstrapConcurrencyCharacterization.php` | 12 passed; eight cold workers, one key pair/admin record, retained data and interruption recovery. |
| `ComponentMutationSecurityCharacterization.php` | 40 passed, with command-local `-d extension=zip`. ZIP is not enabled in the default repo ini. |
| `PublicDeliverySecurityCharacterization.php` | 51 passed; enabled/visibility changes, warm delivery, HEAD/range/conditional cases and static adapter assets. |
| `PublicStaticHttpSecurityCharacterization.php` | 20 passed over actual isolated PHP HTTP, including Windows aliases and a real directory junction. |
| Existing public-router/workspace/adapter characterizations | 13 / 5 / 7 / 11 passed respectively. |
| `bun run web:typecheck` | Passed, including after final dependency installation. |
| `bun run build:web` and remaining `web build:*` entrypoints | All shipped bundles rebuilt; existing CSS/accessibility warnings remain. |
| `bun run web:test:ui` | 21/21 passed. The first run found the stale inspector selector; the corrected focused case and full rerun passed. |

Characterizations live under `spec/characterization/php/` and run as `bun run scripts/php-core.ts -- <test-path>`. Native Codex workers implemented bounded authorization/delivery and auth/storage slices; the lead integrated and committed. Independent review identified the ETag validator issue, and lead review identified Windows alias handling; both were corrected and checked. No Fugu dispatch or metered fleet run is claimed.

Auth/API/conformance/multiprocess checks were independently rerun. That reviewer compared all 572 files tracked at test start before/after: unchanged. Root-owned delivery/HTTP/browser checks and source inspection supplement that result. Plain source whitespace checks pass. Nine generated Svelte bundles contain intentional space/tab characters inside a whitespace-character template literal; these compiler bytes were retained, and generated-output checks allowed that specific trailing-whitespace diagnostic.

## Preservation and remaining acceptance

The pre-existing `scripts/php-core.ts` SHA-256 remains `53A211D776F30418A537E1DA5DA8F0703D7BA1EB5322F292F508E42C427960BA`; it stays unstaged. `chat.json` was not read or committed. Existing data/keys were not migrated or rotated. Machine-specific binary backups, baseline file copies, logs and preservation audit remain outside source control.

One test-side-effect deviation occurred: an earlier positive component fixture invoked `SiteBuildService → GhostPreloadService`, whose output is hardcoded to `public/.ghost/staging`. That ignored staging cache was cleared/regenerated despite synthetic storage roots. The final fixture uses authorized Explorer writes directly and avoids the hook. No application key/data migration resulted. Ghost delivery is retired by this patch, but host-level denial is still necessary.

Open gates: actual PHP-FPM binary/configuration and recycled workers; Linux/FPM permissions and multiprocess behavior; shared/network-filesystem locking semantics; private pool/build identity; ingress limits; and Apache/Nginx denial before direct static delivery. There is no `public/.htaccess` in this repo. The PHP router tests cannot attest a server that bypasses it. The local build is not production-host acceptance. Push, deployment, GitHub metadata/profile changes and publication were not performed.
