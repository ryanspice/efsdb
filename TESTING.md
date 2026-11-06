# Verification

Start with [AGENTS.md](AGENTS.md), then select checks for the changed surface. [SCRIPTS.md](SCRIPTS.md) gives side effects; [OPERATIONS.md](OPERATIONS.md#tools-and-php-configuration) explains the checked-in ini's machine-specific paths. Record commands and results from the current checkout, not earlier review claims.

## Choose by scope

| Change                                       | Minimum useful evidence                                                                                                                                                                                                                          |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Markdown or instruction routing only         | `git diff --check`; review the complete changed/new documents, relative links and anchors; match every command to its manifest/implementation; scan for secrets and private machine paths. No application rebuild is needed solely for Markdown. |
| PHP service, route, auth or storage behavior | PHP syntax checks for changed files, relevant `spec/characterization/php/*Characterization.php`, then `bun run check` with a valid runtime. Explain any contract/fixture changes.                                                                |
| Crypto, storage format or fixture contract   | Core checks plus conformance generation/verification and the affected characterization scripts. Preserve fixture preimages before generation; public test keys are not deployment keys.                                                          |
| Web contracts or app logic                   | `bun run web:typecheck`, the affected app build, and relevant UI tests.                                                                                                                                                                          |
| Shared UI, CSS or PHP host integration       | Typecheck, `bun run build:web`, relevant UI tests and direct visual inspection at affected sizes/themes when the task requires visual acceptance. Check shipped asset diffs.                                                                     |
| Operational script or build change           | Inspect target selection and failure/cleanup paths; run only the affected operation against a disposable target with the needed authorization. A syntax check does not prove its runtime effects.                                                |

This checkout has no checked-in CI workflow. These documented gates describe local verification; do not claim hosted checks ran. Stop when the applicable checks provide sufficient evidence. Rerun for changed inputs, failures or unresolved concerns.

## Runtime preparation

From the root, install dependencies with `bun install --frozen-lockfile` when needed. Verify PHP and its selected ini first. `apicheck.php` checks sodium plus KDF and XChaCha encrypt/decrypt functions before creating test data. Explorer also uses mbstring. Composer's PHP requirement alone does not prove the required extensions are loaded.

Root check scripts force the checked-in ini. For a validated local ini, use the same PHP entry points directly:

```powershell
# Set this to the validated configuration described in OPERATIONS.md.
$efsdbPhpIni = 'efsdb/php/core/php.ini'
php -c $efsdbPhpIni -l efsdb/php/core/src/Config.php
php -c $efsdbPhpIni efsdb/php/core/bin/apicheck.php
php -c $efsdbPhpIni efsdb/php/core/bin/authcheck.php
php -c $efsdbPhpIni efsdb/php/conformance/generate.php
php -c $efsdbPhpIni efsdb/php/conformance/run.php
```

Each command has its own exit status; stop and diagnose a failure rather than treating the last command as evidence for the whole sequence. `bun run check` chains these four runtime checks and stops on failure. It does not run every PHP characterization script, typecheck or browser suite.

For a focused characterization example:

```powershell
php -c $efsdbPhpIni spec/characterization/php/StoreUpdateCharacterization.php
```

Choose the suite matching the change and inspect its harness/data target. PHP characterization, API and auth checks clear dedicated stores under `.cache/efsdb/tests/core`. Conformance generation clears its scratch store under `.cache/efsdb/tests/conformance` and rewrites tracked `spec/fixtures` using random nonces. Keep recovery copies; inspect the resulting diff and reconcile accidental changes with hash guards.

## Browser checks

The UI suite uses [web/playwright.config.ts](web/playwright.config.ts), Chromium and Windows PowerShell. If Chromium is missing, run `bunx playwright install chromium` from the `web` directory after installing the workspace dependencies, then return to the repository root.

Run `bun run web:test:ui` after the relevant asset build. The configured server starts at `127.0.0.1:8791` with one worker and no existing-server reuse. Its [launcher](web/scripts/start-playwright-server.ps1) deletes the dedicated `efsdb/php/core/.cache/playwright-ui-data` directory. Do not call the launcher with a live data directory. The suite records failure/retry artifacts under `web/test-results`; those artifacts and automated assertions are not human visual acceptance.

The manual [smoke script](efsdb/php/core/bin/smoke.ps1) is separate: it requires an already running API and a tenant-admin key, creates a user and changes the target. Run it only against an identified disposable environment within the task's scope.

## Evidence in the handoff

State the checkout HEAD and relevant uncommitted inputs, commands, exit results, output paths and remaining failures. Distinguish source checks, builds, runtime behavior, visual observations and human acceptance. Name unavailable tools/configuration as a gap; do not substitute another machine's success or silently weaken a gate.
