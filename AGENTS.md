# Working in EFSDB

## Enter with a concrete task

Read `INTENT.md`, `spec/CURRENT_STATE.md`, and the relevant section of `docs/MODERNIZATION.md`. Inspect the branch, HEAD, status, nearest instructions, and owned files before editing. Follow applicable parent instructions. For Svelte work, start with the official Svelte MCP's `list-sections`, read relevant documentation, and run its autofixer before finalizing Svelte source edits.

The lead owns architecture, work allocation, integration, and final acceptance. A worker owns a bounded result and named paths. Historic conversations and reviews are evidence to revalidate, not new authority.

## Work order

Use the `work_order` shape in `repo.schema.json`, or a readable packet with the same information:

```text
ROUTE: execution owner, exact provider/model, tools and cost/data boundary
ROLE: lead / implementation / research / independent review
TASK: one result and the user-visible reason for it
BASELINE: repository, HEAD, worktree, dirty paths and relevant file hashes
OWNERSHIP: allowed writes, protected paths, shared runtime/test owner
ACCEPTANCE: checks and expected behavior, including denied cases
BUDGET: finite deadline, turns/children where relevant, stop conditions
HANDOFF: patch/commit, actual checks, limits, next action and child state
```

Record file claims through the active harness before starting. One writer owns a path at a time. Use an isolated worktree for overlapping source work; uncommitted changes do not travel into a new worktree. Reconcile the intended baseline explicitly. Review existing dirty fixes before choosing the implementation baseline.

## Routes and fleet

Use available native coding workers for authorized implementation. Discover current capabilities before selecting an exact route; a catalog entry or price badge does not prove tools, entitlement, or allowance. Keep native subscription usage, metered API spend, and promotional credits distinct. Do not silently change a requested exact model or enter paid fallback.

When Fugu is selected, read current owner-authored `POLICY.md` and use `Invoke-FuguLane.ps1`. Locate optional local tooling through a validated `LOCAL_PATHS.md`; missing tools are a specific limitation, not a reason to reconfigure the machine. Current broker grants are narrower than native coding tools: return evidence/proposed patches when writes are not granted. Respect inherited run plans, ledger, expiry, and child limits. Use broker-supported recursion. Do not duplicate a mutable model roster or machine-specific paths here.

Fugu run/task IDs and native harness task IDs have different lifecycle owners. Keep accounting and cancellation separate unless an implemented bridge proves otherwise. A timed-out parent wait does not cancel a child. Reconcile owned descendants before completion; do not kill shared services by process name.

## Preserve these boundaries

- Keep the frozen envelope, KDF/AAD behavior, parser result contract, and conformance fixtures stable unless a task explicitly authorizes a versioned format change.
- Preserve actual/effective roles, hashed credentials, single-use refresh requirements, natural/raw entitlements, and `/_efsdb` control-plane routes.
- Public caches/file shortcuts must enforce the same enabled, tenant, environment, and visibility policy as the main router.
- SvelteKit import scope is static-prerender delivery; generic SSR/actions require separate acceptance.
- Never reset, clean, broadly stage, or overwrite unrelated work. Do not commit credentials, conversation exports, runtime data, key files, or provider profiles.
- Keep development servers on their authorized interface. Runtime upgrades must preserve native BLAKE3 ABI compatibility and existing data.

## Verify the slice

Choose checks for the change. PHP host/auth/storage work needs relevant characterization/API/auth checks; encryption changes also need conformance and PHP/Rust parity. Web work needs `bun run web:typecheck`, affected builds, and relevant browser flows. `bun run check` generates fixtures; inspect their diff and do not absorb unrelated output.

Use synthetic data in an owned workspace. Concurrent-worker defects require multiprocess tests and PHP-FPM acceptance; serial `php -S` success cannot close them. Report unrun/failed gates explicitly. Reviewer agreement is not test or deployment evidence.

## Commit useful work and leave cleanly

Keep one coherent fix, its necessary regression checks, and contract/documentation update together. When committing is authorized, inspect `git diff --check`, stage explicit paths or reviewed hunks, inspect the staged diff, and create a focused commit such as `fix(auth): consume refresh tokens atomically`. If a file contains another worker's changes, isolate the patch or coordinate before staging. Never use `git add .` in the shared checkout.

Do not create empty, failing, or cosmetic churn commits to satisfy task counts. If commits were not authorized, return the reviewed diff and proposed commit title. Push, merge, release, deploy, key rotation, and destructive data changes require their own authority; do not ask again when already authorized in the session.

Return a `handoff` receipt with base/current commit, worktree, touched paths, relevant hashes, commands/results and evidence, open findings, commit or null, and pending descendants. Separate local verification, independent acceptance, hosted proof, and publication. State the next permitted action. The lead accepts the work before integration.
