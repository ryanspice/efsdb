import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const evidenceRoot = path.join(repoRoot, '.ai/evidence/ci');
const baseline = JSON.parse(await readFile(path.join(repoRoot, 'tests/parity_baseline.json'), 'utf8'));
const names = ['php-ini.log', 'preflight.log', 'php-parity.log', 'cargo.log'];
const logs = await Promise.all(names.map((name) => readFile(path.join(evidenceRoot, name), 'utf8')));

for (const key of ['php_fixture_passes', 'rust_tests']) {
  assert(Number.isSafeInteger(baseline[key]) && baseline[key] > 0, 'Invalid parity baseline: ' + key);
}
for (let index = 0; index < logs.length; index++) {
  assert(logs[index].trim(), 'Empty parity log: ' + names[index]);
  assert(!/\bSKIP(?:PED)?\b/i.test(logs[index]), 'Skipped check in ' + names[index]);
}

const phpPasses = [...logs[2].matchAll(/^PASS /gm)].length;
const summaries = [...logs[3].matchAll(/test result: (\w+)\. (\d+) passed; (\d+) failed; (\d+) ignored;/g)];
assert(summaries.length > 0, 'No Rust test summaries found');
let rustPasses = 0;
for (const [, status, passed, failed, ignored] of summaries) {
  assert.equal(status, 'ok', 'Rust suite did not pass');
  assert.equal(Number(failed), 0, 'Rust suite contains failed tests');
  assert.equal(Number(ignored), 0, 'Rust suite contains ignored tests');
  rustPasses += Number(passed);
}
assert(phpPasses >= baseline.php_fixture_passes, 'PHP fixture count is below the committed baseline');
assert(rustPasses >= baseline.rust_tests, 'Aggregate Rust test count is below the committed baseline');

const receipt = { passed: true, phpPasses, rustPasses, rustSuites: summaries.length, baseline };
await writeFile(path.join(evidenceRoot, 'parity-result.json'), JSON.stringify(receipt, null, 2) + '\n');
console.log(JSON.stringify(receipt));
