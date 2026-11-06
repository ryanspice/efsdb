# Verification

Start with [AGENTS.md](AGENTS.md), then select checks for the changed surface. [SCRIPTS.md](SCRIPTS.md) gives side effects; [OPERATIONS.md](OPERATIONS.md#tools-and-php-configuration) explains the checked-in ini and environment-driven PHP wrapper. Record commands and results from the current checkout, not earlier review claims.

## Choose by scope

| Change                                       | Minimum useful evidence                                                                                                                                                                                                                               |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Markdown or instruction routing only         | `git diff --check`; review the complete changed/new documents, relative links and anchors; match every command to its manifest/implementation; scan for secrets and private machine paths. No application rebuild is needed solely for Markdown.      |
| PHP service, route, auth or storage behavior | PHP syntax checks for changed files, relevant `spec/characterization/php/*Characterization.php`, then `bun run check` with a valid runtime. Explain any contract/fixture changes.                                                                     |
| Crypto, storage format or fixture contract   | Core checks plus conformance generation/verification, `cargo test --locked --manifest-path efsdb-core/Cargo.toml`, and the affected characterization scripts. Preserve fixture preimages before generation; public test keys are not deployment keys. |
| Web contracts or app logic                   | `bun run web:typecheck`, the affected app build, and relevant UI tests.                                                                                                                                                                               |
| Shared UI, CSS or PHP host integration       | Typecheck, `bun run build:web`, relevant UI tests and direct visual inspection at affected sizes/themes when the task requires visual acceptance. Check shipped asset diffs.                                                                          |
| Operational script or build change           | Inspect target selection and failure/cleanup paths; run only the affected operation against a disposable target with the needed authorization. A syntax check does not prove its runtime effects.                                                     |

The checked-in workflows below automate selected source and local-runtime gates. Workflow source does not establish a successful GitHub run or a deployed host. Stop when the applicable checks provide sufficient evidence. Rerun for changed inputs, failures or unresolved concerns.

## Runtime preparation

From the root, install dependencies with `bun install --frozen-lockfile` when needed. Verify PHP and its selected ini first. `apicheck.php` checks sodium plus KDF and XChaCha encrypt/decrypt functions before creating test data. Explorer also uses mbstring. Composer's PHP requirement alone does not prove the required extensions are loaded.

Use the configured wrapper for focused PHP entry points; it resolves PHP and extension/log settings before loading the checked-in ini:

```powershell
bun run check:runtime
bun run check:php-ini
bun run ./scripts/php-core.ts -- -l efsdb/php/core/src/Config.php
bun run check:api
bun run check:auth
bun run check:conformance:generate
bun run check:conformance
```

Each command has its own exit status; stop and diagnose a failure rather than treating the last command as evidence for the whole sequence. `bun run check` chains the runtime baseline, repository-ini assertion, API, auth, fixture generation and conformance checks and stops on failure. It does not run every PHP characterization script, Rust tests, typecheck or browser suite. `check:runtime` uses PHP on PATH; align it with `EFSDB_PHP_BIN` when selecting a custom runtime.

For a focused characterization example:

```powershell
bun run ./scripts/php-core.ts -- spec/characterization/php/StoreUpdateCharacterization.php
```

Choose the suite matching the change and inspect its harness/data target. PHP characterization, API and auth checks clear dedicated stores under `.cache/efsdb/tests/core`. Conformance generation clears its scratch store under `.cache/efsdb/tests/conformance` and rewrites tracked `spec/fixtures` using random nonces. Keep recovery copies; inspect the resulting diff and reconcile accidental changes with hash guards.

## Browser checks

The UI suite uses [web/playwright.config.ts](web/playwright.config.ts), Chromium and the portable Node launcher. PHP must satisfy the runtime baseline and load the matching native BLAKE3 extension. If Chromium is missing, run `bunx playwright install chromium` from the `web` directory after installing the workspace dependencies, then return to the repository root.

Run `bun run web:test:ui` after the relevant asset build. The configured server starts at `127.0.0.1:8791` with one worker and no existing-server reuse. Its [launcher](web/scripts/start-playwright-server.mjs) creates a fresh store under `.ai/evidence/playwright/run-*/data`, overrides an inherited `EFSDB_DATA_DIR`, and retains the store and PHP log for inspection. It rejects linked evidence-directory ancestors. Reports and results are under `.ai/evidence/playwright/report` and `.ai/evidence/playwright/test-results`; these artifacts and automated assertions are not human visual acceptance.

The manual [smoke script](efsdb/php/core/bin/smoke.ps1) is separate: it requires an already running API and a tenant-admin key, creates a user and changes the target. Run it only against an identified disposable environment within the task's scope.

## CI gates

[PHP and Rust parity](.github/workflows/parity.yml) runs on pushes and PRs to `main`/`master`, plus manual dispatch. Its PHP 8.3/8.5 matrix builds BLAKE3 against the selected PHP ABI, runs `bun run check`, all PHP characterization programs (including the concurrency, import and public-delivery security cases), `tests/fixtures/php_envelope_bounds.php`, the PHP parity preflight/baseline fixtures, and locked Rust tests. [scripts/ci-check-parity.mjs](scripts/ci-check-parity.mjs) requires positive parity counts and zero skipped tests; a missing extension or empty test result is not a passing lane.

[Web CI](.github/workflows/ci.yml) runs on the same events with PHP 8.5. It checks the runtime baseline, runs `web:typecheck`, builds shipped assets, builds native BLAKE3, installs Chromium, and runs `web:test:ui` against a fresh synthetic store. Both workflows pin Bun 1.2.23, select Node 24, use frozen dependency installation and retain evidence under `.ai/evidence/`. Neither workflow deploys, rotates credentials or establishes production-host acceptance.

## Evidence in the handoff

Bootstrap, key creation and refresh-token concurrency changes need multiprocess regression evidence and acceptance on the intended PHP-FPM worker configuration. Serial `php -S` checks cannot establish those properties. Record the actual serving PHP binary, loaded configuration, BLAKE3 ABI and worker restart evidence separately from CLI results. Apache/Nginx must reject private paths before direct file delivery; PHP router tests alone do not prove that host configuration.

State the checkout HEAD and relevant uncommitted inputs, commands, exit results, output paths and remaining failures. Distinguish source checks, builds, runtime behavior, visual observations and human acceptance. Name unavailable tools/configuration as a gap; do not substitute another machine's success or silently weaken a gate.
