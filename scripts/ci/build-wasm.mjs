import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = realpathSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..'));
const rustVersion = '1.93.1';
const wasmPackVersion = '0.14.0';
const wasmPack = process.env.WASM_PACK_BIN || 'wasm-pack';
const crateRoot = path.join(repoRoot, 'efsdb-core');

function ownedDirectory(relative) {
  let current = repoRoot;
  for (const segment of relative.split('/')) {
    assert(segment && segment !== '.' && segment !== '..', 'Invalid generated directory');
    current = path.join(current, segment);
    if (!existsSync(current)) mkdirSync(current);
    const stat = lstatSync(current);
    assert(stat.isDirectory() && !stat.isSymbolicLink(), 'Generated directories cannot traverse links: ' + current);
  }
  return current;
}

function filesUnder(root, relative = '') {
  return readdirSync(path.join(root, relative), { withFileTypes: true })
    .flatMap((entry) => {
      assert(!entry.isSymbolicLink(), 'Unexpected generated/source link: ' + entry.name);
      const name = relative ? relative + '/' + entry.name : entry.name;
      if (entry.isDirectory()) return filesUnder(root, name);
      assert(entry.isFile(), 'Expected a regular file: ' + name);
      return [name];
    }).sort();
}

function sha256(file) {
  return createHash('sha256').update(readFileSync(file)).digest('hex');
}

const evidenceRoot = ownedDirectory('.ai/evidence/wasm');
const runRoot = mkdtempSync(path.join(evidenceRoot, 'build-'));
const stage = path.join(runRoot, 'generated');
const temporary = path.join(runRoot, 'tmp');
mkdirSync(temporary);
const env = {
  ...process.env,
  RUSTUP_TOOLCHAIN: rustVersion,
  CARGO_TARGET_DIR: ownedDirectory('.ai/evidence/wasm/cargo-target'),
  TMPDIR: temporary,
  TEMP: temporary,
  TMP: temporary
};

function command(executable, args, capture = false) {
  const result = spawnSync(executable, args, {
    cwd: repoRoot,
    env,
    encoding: 'utf8',
    stdio: capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
    windowsHide: true
  });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, executable + ' failed: ' + (result.stderr || result.signal || 'see build log'));
  return (result.stdout || '').trim();
}

const actualPack = command(wasmPack, ['--version'], true);
const actualRust = command('rustc', ['--version'], true);
assert.equal(actualPack, 'wasm-pack ' + wasmPackVersion, 'Install the pinned wasm-pack version before building');
assert(actualRust.startsWith('rustc ' + rustVersion + ' '), 'The pinned Rust toolchain is required');
const inputs = ['Cargo.toml', 'Cargo.lock', ...filesUnder(path.join(crateRoot, 'src')).map((name) => 'src/' + name)];
const before = inputs.map((name) => ({ path: 'efsdb-core/' + name, sha256: sha256(path.join(crateRoot, name)) }));

// Cargo's release optimizer is enabled. --no-opt avoids a separate, downloaded
// Binaryen pass, so the pinned Rust and wasm-bindgen graph determine the output.
const args = [
  'build', crateRoot, '--release', '--target', 'web',
  '--out-dir', stage, '--out-name', 'efsdb_core', '--no-opt', '--', '--locked'
];
console.log('Building ' + actualPack + ' with ' + actualRust);
command(wasmPack, args);
for (const input of before) {
  assert.equal(sha256(path.join(repoRoot, input.path)), input.sha256, 'Rust input changed during the build: ' + input.path);
}
for (const name of ['efsdb_core.js', 'efsdb_core.d.ts', 'efsdb_core_bg.wasm', 'efsdb_core_bg.wasm.d.ts', 'package.json']) {
  assert(existsSync(path.join(stage, name)), 'Missing generated WASM artifact: ' + name);
}
assert(WebAssembly.validate(readFileSync(path.join(stage, 'efsdb_core_bg.wasm'))), 'Generated binary is not valid WebAssembly');

const output = ownedDirectory('web/ui/lib/wasm');
const artifacts = filesUnder(stage).map((name) => {
  const source = path.join(stage, name);
  const destination = path.join(output, name);
  const parent = path.posix.dirname(name);
  if (parent !== '.') ownedDirectory('web/ui/lib/wasm/' + parent);
  let previousSha256 = null;
  if (existsSync(destination)) {
    assert(lstatSync(destination).isFile() && !lstatSync(destination).isSymbolicLink(), 'Refusing non-file generated output: ' + name);
    previousSha256 = sha256(destination);
    const recovery = path.join(runRoot, 'before', name);
    mkdirSync(path.dirname(recovery), { recursive: true });
    copyFileSync(destination, recovery);
    assert.equal(sha256(recovery), previousSha256, 'Generated preimage verification failed');
  }
  copyFileSync(source, destination);
  const generatedSha256 = sha256(source);
  assert.equal(sha256(destination), generatedSha256, 'Generated output copy mismatch: ' + name);
  return { path: 'web/ui/lib/wasm/' + name, sha256: generatedSha256, previousSha256 };
});

const receipt = {
  passed: true,
  rust: actualRust,
  wasmPack: actualPack,
  command: [wasmPack, ...args],
  inputs: before,
  artifacts
};
writeFileSync(path.join(runRoot, 'receipt.json'), JSON.stringify(receipt, null, 2) + '\n');
console.log('Generated WASM receipt: ' + path.join(runRoot, 'receipt.json'));
