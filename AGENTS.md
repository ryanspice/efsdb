# Repository instructions

This is the shared instruction entry point for EFSDB. Tool-specific files point here and add no separate authority. Follow the current task and applicable host permissions; these documents do not expand authorization.

## Start with the relevant source

1. Verify the checkout root, remote, branch, HEAD and working tree before changing files. [OPERATIONS.md](OPERATIONS.md#identify-the-checkout) gives the commands. A cached `origin/main` ref is not a fresh remote observation.
2. Read [README.md](README.md), [spec/CURRENT_STATE.md](spec/CURRENT_STATE.md), and only the implementation and guidance needed for the task. Report unavailable named sources instead of substituting another checkout or an older plan.
3. Use [OPERATIONS.md](OPERATIONS.md) for setup and maintenance, [SCRIPTS.md](SCRIPTS.md) for command effects, [TESTING.md](TESTING.md) for verification, and [POLICIES.md](POLICIES.md) for project invariants.
4. Treat tracked source, local changes, generated bundles/fixtures, remote commits, a running deployment and human acceptance as distinct states. Inspect the exact inputs and outputs behind a claim.

## Project map

- PHP host and services: `efsdb/php/core`; public entry point: `efsdb/php/core/public/index.php`; standalone delivery runtime: `efsdb/php/runtime`.
- Active web apps: `web/apps/login`, `web/apps/explorer`, `web/apps/builder`, `web/apps/admin`. Search is embedded in Explorer.
- Shared payloads: `web/contracts`; UI and design: [web/ui/README.md](web/ui/README.md), `web/styles`, `web/ui/design`.
- Executable checks: `efsdb/php/core/bin`, `efsdb/php/conformance`, `spec/characterization`.
- Active format/auth references: `spec/FORMAT.md`, `spec/auth-contract.md`, `spec/CONFORMANCE.md`. Historical plans remain in `spec/archive`; investigate disagreements with implementation rather than treating an archive as current behavior.

## Working scope

- The lead owns integration and final acceptance. Workers stay within their assigned files and return changes, checks, evidence and unresolved issues.
- Preserve unrelated dirty and untracked work. Stage the intended files explicitly; do not reset, clean, stash or overwrite another owner's work to simplify a task.
- Keep recovery copies for consequential edits. Record the original hash and the expected edited hash; verify the current hash before restoring a preimage. Reconcile a mismatch instead of overwriting later changes.
- Use existing user authorization. A documentation task does not authorize production promotion, data deletion, key rotation, deployment or shared provider configuration changes.
- Keep credentials, runtime data and private operational notes out of commits and tool output. Use portable paths; do not require a private Wiki, skill installation or model configuration to work in this repo.

## Checks and handoff

Choose the smallest meaningful checks plus the project gates for the changed surface in [TESTING.md](TESTING.md). Read command side effects first: `check` regenerates fixtures, UI setup deletes its test store, and maintenance commands can change live data. Repeat checks only for changed inputs, failures or unresolved concerns.

Review generated diffs separately from authored source. Report the exact checkout/commit, changed files, commands and results, skipped or blocked checks, and remaining decisions. Separate source checks, runtime behavior, visual evidence and human acceptance; a successful build proves none of the other categories by itself.
