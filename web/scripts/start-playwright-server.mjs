import { execFileSync, spawn } from 'node:child_process';
import { existsSync, lstatSync, mkdirSync, mkdtempSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = realpathSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..'));
const requestedPhpBin = process.env.EFSDB_PHP_BIN || 'php';
const executableNames = process.platform === 'win32' && !requestedPhpBin.endsWith('.exe')
  ? [requestedPhpBin + '.exe', requestedPhpBin]
  : [requestedPhpBin];
const phpBin = path.isAbsolute(requestedPhpBin) || /[/\\]/.test(requestedPhpBin)
  ? path.resolve(repoRoot, requestedPhpBin)
  : (process.env.PATH || '').split(path.delimiter)
      .flatMap((entry) => executableNames.map((name) => path.join(entry, name)))
      .find((candidate) => existsSync(candidate)) || requestedPhpBin;
const rawPort = process.env.EFSDB_PLAYWRIGHT_PORT || '8791';
if (!/^\d+$/.test(rawPort) || Number(rawPort) < 1024 || Number(rawPort) > 65535) {
  throw new Error('EFSDB_PLAYWRIGHT_PORT must be an unprivileged TCP port.');
}
const extension = process.env.EFSDB_PHP_BLAKE3_EXTENSION || path.join(
  repoRoot,
  'efsdb/php/core/ext',
  process.platform === 'win32' ? 'php_blake3.dll' : 'blake3-src/compiled/blake3.so'
);
if (!existsSync(extension)) throw new Error('The selected native BLAKE3 extension is missing.');

execFileSync(phpBin, ['-n', path.join(repoRoot, 'scripts/check-php-runtime.php')], {
  cwd: repoRoot,
  stdio: 'inherit',
  timeout: 10_000
});
const siblingExtensionDir = path.join(path.dirname(phpBin), 'ext');
const extensionDir = process.env.EFSDB_PHP_EXTENSION_DIR ||
  (path.isAbsolute(phpBin) && existsSync(siblingExtensionDir)
    ? siblingExtensionDir
    : execFileSync(phpBin, ['-n', '-r', 'echo ini_get("extension_dir");'], {
        cwd: repoRoot, encoding: 'utf8', timeout: 10_000
      }).trim());
if (!extensionDir) throw new Error('PHP extension_dir could not be detected.');

// Reject linked evidence ancestors before creating a fresh test store. Never
// delete or use a caller-supplied EFSDB_DATA_DIR, including a live data root.
let evidenceRoot = repoRoot;
for (const segment of ['.ai', 'evidence', 'playwright']) {
  evidenceRoot = path.join(evidenceRoot, segment);
  if (!existsSync(evidenceRoot)) mkdirSync(evidenceRoot);
  const stat = lstatSync(evidenceRoot);
  if (!stat.isDirectory() || stat.isSymbolicLink()) {
    throw new Error('Playwright evidence must use ordinary directories inside the checkout.');
  }
}
const runRoot = mkdtempSync(path.join(evidenceRoot, 'run-'));
const dataDir = path.join(runRoot, 'data');
mkdirSync(dataDir);
console.log('Synthetic Playwright store: ' + dataDir);

const child = spawn(phpBin, [
  '-c', path.join(repoRoot, 'efsdb/php/core/php.ini'),
  '-d', 'efsdb.process_id=playwright-server',
  '-S', '127.0.0.1:' + rawPort,
  '-t', path.join(repoRoot, 'efsdb/php/core/public')
], {
  cwd: repoRoot,
  stdio: 'inherit',
  windowsHide: true,
  env: {
    ...process.env,
    EFSDB_ENV: 'test',
    EFSDB_DEBUG: '1',
    EFSDB_DATA_DIR: dataDir,
    EFSDB_PHP_BIN: phpBin,
    EFSDB_PHP_BLAKE3_EXTENSION: extension,
    EFSDB_PHP_EXTENSION_DIR: extensionDir,
    EFSDB_PHP_ERROR_LOG: path.join(runRoot, 'php-error.log')
  }
});
let failedToStart = false;
child.once('error', (error) => {
  failedToStart = true;
  console.error(error.message);
  process.exitCode = 1;
});
child.once('close', (code, signal) => {
  if (!failedToStart) process.exitCode = code ?? (signal ? 1 : 0);
});
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => {
    child.kill(signal);
    const timer = setTimeout(() => {
      if (child.exitCode === null && child.signalCode === null) child.kill('SIGKILL');
    }, 5_000);
    timer.unref();
  });
}
