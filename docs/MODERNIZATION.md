# EFSDB security and modernization plan

Reviewed October 23, 2026. Scope: EFSDB/PHPFS, PHP-FPM implications, frontend/build dependencies, agent workflow, and repository presentation. Baseline: `main`, `f060badc12c28558b80574b96b2c1ce18e1ed683`.

This package changes documentation and repository metadata. Security patches, runtime/dependency changes, commits, deployment, and GitHub profile actions have not been performed. Findings are source conclusions unless a check is recorded below. This is a bounded review of accessible source and primary advisories, not an exhaustive penetration test or census of every public review.

## Current evidence

- Preserve existing tracked `scripts/php-core.ts` and untracked `chat.json` (not read). Wrapper baseline SHA-256: `53A211D776F30418A537E1DA5DA8F0703D7BA1EB5322F292F508E42C427960BA`.
- Current CLI: workspace-local `.cache/873fa5fd/php-bin/php.exe`, PHP **8.5.4**, NTS x64. No serving FPM pool or deployed binary was inspected.
- Local Node **26.7.0**, Bun **1.2.23**. Select a supported CI/runtime line per project without changing the machine globally.
- Lockfile: Svelte **5.54.0**, Vite **6.4.1**, plugin **5.1.1**, devalue **5.6.4**. Package ranges do not prove patched resolutions.
- `bun run web:typecheck`: **PASS**, exit 0, October 23. Full builds, API/auth/conformance, browser, multiprocess and hosted gates were not run.
- An independent read-only application audit returned five source findings; the lead inspected corresponding source paths. No live-host exploit was attempted.

## Upstream research

| Primary source | Relevance | Application action |
| --- | --- | --- |
| [PHP security release, Oct 21](https://www.php.net/archive/2026.php#2026-10-21-5) | Critical engine fixes include FPM. Fixed branches: 8.5.12 / 8.4.27 / 8.3.36 / 8.2.35. | Inventory actual serving binaries/containers/workers, patch and recycle them; retain vendor evidence for backports. |
| [OOM corruption advisory](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w) | CVE-2026-109618 concerns memory-failure handling. | Application encryption/authorization does not replace the engine fix. |
| [Stale global state advisory](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp) | CVE-2026-109619 concerns state reused after fatal failure. | Verify every long-lived worker was restarted. |
| [PHP Foundation synthesis, Oct 21](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) | Summarizes the Quarkslab 2024 audit, Calif/OpenAI/Wiz 2026 reports, Trail of Bits work and validation reforms. | Require reproducible cases, root-cause grouping and a named acceptance owner. This is the Foundation's synthesis; underlying audit reports were not all inspected here. |
| [PHP support calendar](https://www.php.net/supported-versions.php) | 8.1 is unsupported; 8.2 security support ends December 2026. | Replace the `>=8.1` production posture. Prefer patched 8.4/8.5 with native BLAKE3 compatibility proof. |
| [PHP-FPM configuration](https://www.php.net/manual/en/install.fpm.configuration.php) | Pools control identities, sockets, process/resource limits, environment and execution restrictions. | Add production configuration and host acceptance; committed `php.ini` enables development error display. |
| [Svelte DOM clobbering, May 14](https://github.com/sveltejs/svelte/security/advisories/GHSA-rcqx-6q8c-2c42) | Fixed 5.55.7; requires user control of relevant form/input attributes. Locked 5.54.0 is in range. | Patch Svelte and inspect untrusted spreads; package range alone is not exploit proof. |
| [Svelte SSR spread XSS, May 14](https://github.com/sveltejs/svelte/security/advisories/GHSA-pr6f-5x2q-rwfp) | Fixed 5.55.7; affects untrusted SSR attribute data. | Check SSR/prerender examples and consumers; the main EFSDB UI build does not establish this path. |
| [Vite WebSocket file read, Apr 6](https://github.com/vitejs/vite/security/advisories/GHSA-p9ff-h696-f583) | Locked 6.4.1 is affected when dev server/WebSocket are reachable. | Patch the compatible Vite 6 lane and verify server exposure without changing shared services. |
| [Vite middleware script issue, Oct 6](https://github.com/vitejs/vite/security/advisories/GHSA-9jrq-w75r-8gcw), [non-Windows file allow bypass](https://github.com/vitejs/vite/security/advisories/GHSA-rq7h-c2jc-7f22) | Fixes include 6.4.4 / 7.3.7 / 8.3.3; conditions differ. | Use at least 6.4.4 on this major lane; evaluate Vite 8 separately. Non-Windows issue is not confirmed Windows exposure. |
| [devalue memory disclosure, Sep 18](https://github.com/sveltejs/devalue/security/advisories/GHSA-j22f-vq7h-c4qm), [input DoS, Aug 27](https://github.com/sveltejs/devalue/security/advisories/GHSA-9rgm-9g3h-6x36) | Locked 5.6.4 predates shared-memory fix 5.9.3 and parsing hardening. | Inventory actual serialization/deserialization and bundled copies; patch compatible resolutions and test Buffer/typed-array boundaries. |

October 23 registry snapshot: Svelte **5.57.2**, Kit **3.1.0**, Vite **8.3.5**, plugin **7.3.1**, devalue **6.0.3**. These are research targets, not new lockfile contents. Patch compatible devalue 5.x resolutions first; a 6.x move needs separate API/consumer checks. The main web workspace uses Vite/Svelte; Kit migration applies only to the example/import integration that uses it. The companion adapter plan is in `sveltekit-php/docs/MODERNIZATION.md`.

## Source findings and fix packets

All five are P1 source findings. Hosted exposure depends on the described conditions. Paths below are relative to `efsdb/php/core/`; refresh line references after changes.

| ID | Evidence and implication | Fix | Required acceptance |
| --- | --- | --- | --- |
| E-01 | `public/index.php:1013`, `1197–1212`, `1391`, `1562`: authenticated component creation/import bypasses normal site-edit checks; framework selection can escape examples. | Authorize before side effects; fixed framework map, env enum, canonical containment, archive/symlink limits. Retain `src/Explorer.php:329` policy. | Standard/premium/no-edit/editor/admin matrix; rejection causes no download/write/record/process. Separate restricted build identity. |
| E-02 | `src/PublicSiteRouter.php:173`, `746–763`, `583–588`: generic asset resolution can return PHP/workspace source before rendering. | Explicit public namespaces/extensions plus private/source denials. | PHP routes/components/layouts, dotfiles, metadata, encoded paths/maps denied; legitimate CSS/JS/images and intended data endpoints preserved. |
| E-03 | `public/index.php:11–140` cache shortcuts precede enabled/visibility policy in `PublicSiteRouter.php:154–160`. `PublicWorkspace.php:984` defaults staging to public, contrary to contract/characterization. | Shared policy before shortcuts; policy-aware cache identity/invalidation; restricted staging default. | Cold/warm role tests and public → restricted → disabled for HTML/gzip/assets/HEAD/range/conditional responses. Exercise the front controller. |
| E-04 | `src/IdentityManager.php:362–379`: active read, child creation and old-token revocation lack one atomic consume. File-write locks do not cover this transition. | Transaction/CAS or lock plus recheck, replay-family policy and interruption recovery. | Multiprocess barrier: exactly one refresh succeeds and one active descendant survives; replay/expiry/logout/interruption tests. |
| E-05 | `src/App.php:56–60`, `Store.php:55–59`, `AuthKey.php:22–30`: concurrent cold requests can overwrite encryption/signing keys. | Offline initialization, exclusive create/lock plus recheck, durable permissions; never replace an existing key implicitly. | One key pair/admin identity after concurrent cold start, decryptable records after restart, safe interrupted initialization. |

Preserve external production data-root checks, hashed credentials, bearer administration, and natural/raw entitlements. The shortcuts need to join existing policy rather than create another authorization model.

## Execution order and agents

| Wave | Owner | Bounded result | Dependency |
| --- | --- | --- | --- |
| 0 | Lead + runtime/host owner | Serving-binary inventory, patch/restart receipt and BLAKE3 ABI/conformance proof. | Actual host access; local CLI is insufficient. |
| 1A | PHP authorization implementer | E-01 and denial regressions, one focused authorized commit. | Baseline/file claim. |
| 1B | Public-delivery implementer | E-02/E-03 as reviewable slices with warm-cache checks. | Coordinate shared `public/index.php` with 1A; isolate or serialize. |
| 2 | Auth/storage implementer | E-04 then E-05, separate fixes and multiprocess fixtures. | Patched runtime, stable storage contract. |
| 3 | Frontend/dependency owner | Svelte/devalue patch lane; Vite 6 patch lane; optional major migration later. | Resolved graph and affected-build checks. |
| 4 | Host owner + independent reviewer | FPM configuration, request/build isolation and candidate security acceptance. | Waves 0–3; exact candidate hashes. |
| 5 | Presentation owner + lead | Verified screenshots/demo, docs, licensing/reporting proposal and profile packet. | Browser acceptance and accurate evidence. |

Discover current capabilities/cost policy instead of hardcoding model names. Native coding agents may edit/test owned files. Selected Fugu research/review uses current policy and `Invoke-FuguLane.ps1` grants. Each task gets a useful result, finite budget and stop condition. Independently review consequential fixes; a different family helps where judgment remains. The lead reconciles findings and checks the candidate.

## Repository convention and schema

Five files in each repository establish the convention: `README.md`, `AGENTS.md`, `INTENT.md`, `docs/MODERNIZATION.md`, `repo.schema.json` — **ten total**. Both schema copies describe `intent`, `work_order`, and `handoff`. The JSON block in `INTENT.md` is the current intent instance.

Keep source paths stable. Future durable records can use `docs/decisions/`, `docs/security/`, and `docs/handoffs/`; private packets/logs and mutable fleet receipts remain ignored or machine-local. A directory migration is a separate task.

Receipts bind results to base/current commit, dirty paths/hashes, command, gate type, time and expiry where relevant. Keep implementation, review acceptance, hosted proof and publication distinct. The schema checks structure; the lead still verifies authority, path containment, actual outcomes and child cleanup.

## PHP-FPM acceptance

Verify private socket/upstream access, exact script routing, separate pool user, external key/data/cache roots, safe errors, trusted HTTPS/proxy handling, and limits for decoded bodies/uploads/archives/builds. Set `security.limit_extensions`, environment policy and timeouts deliberately. Deny private/source trees at server and application layers. Do not execute imported build scripts as the public web worker.

Run multiprocess checks on the target host class. Record actual SAPI/binary/vendor provenance, active config, recycled workers, ABI-matched BLAKE3 and permissions. Use protected diagnostics without public `phpinfo()`. Emergency mitigation settings do not replace the engine patch; consult the current advisory before altering memory/failure behavior.

## Review and synthesis inventory

- Current truth: `spec/CURRENT_STATE.md`, `FORMAT.md`, `auth-contract.md`, `CONFORMANCE.md`, `canonical-result-schema.md`, web contracts and characterization source.
- History: `spec/archive/`; design evidence, not current acceptance.
- Conversation search located a March 17 security-audit discussion and March workspace reviews. Only locator snippets were retrieved; no historical outcomes are accepted from them.
- Existing PHP/Rust parity is useful but does not prove authorization/FPM concurrency. Existing two-review rules for the named internal extension document remain in force.
- Frozen-format principles from earlier planning were checked against active specs. Old plans do not prove implemented runtime integration.

## GitHub presentation and completion

Use the About description/topics in `INTENT.md`. After browser verification, add a real sanitized interface screenshot and a short storage/workspace journey, with alt text. Use real workflow badges and clear experimental status. A maintainer-approved license and `SECURITY.md` reporting route need later scoped changes; public visibility alone establishes neither policy.

Make a documentation-convention commit and separate coherent security-fix commits when authorized. Stage explicit owned files/hunks. Propose pinning EFSDB near SvelteKit PHP and agent-skills with clear descriptions. No remote metadata, pin, release or profile change is included here.

Planning completion means ten reviewable documentation/schema files with checked contracts. Modernization completion additionally requires the fix waves, independent acceptance, hosted evidence and authorized publication; these remain open.

## Planning-package verification receipt

October 23 checks: EFSDB web typecheck passed; the companion adapter Svelte check passed with zero errors/warnings. The identical JSON Schema 2020-12 copies compiled in strict mode with Ajv. Four valid fixtures passed (both real intent blocks plus synthetic work-order/handoff); seven invalid fixtures were correctly rejected (missing baseline, negative budget, unresolved exact route, empty result evidence, live child on completion, invalid hash, unknown field). This validates workflow structure, not application security.

All 35 relative Markdown links and declared metadata paths in the ten files resolved locally; fenced code blocks balanced. Owned diffs passed whitespace checks. SHA-256 comparison confirmed all eleven pre-existing tracked dirty files across the two repos were unchanged. Independent documentation review found two adapter README issues (public upload scope and advisory artifact checking); both were corrected. No source security fix or hosted acceptance is claimed by this receipt.
