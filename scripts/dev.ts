import { execFileSync, spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { platform } from 'os';

const args = process.argv.slice(2);
const shouldOpen = args.includes('--open');
const port = 8787;
const url = `http://127.0.0.1:${port}`;
const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const phpIniPath = resolve(rootDir, 'efsdb/php/core/php.ini');
const publicDir = resolve(rootDir, 'efsdb/php/core/public');
const indexPath = resolve(rootDir, 'efsdb/php/core/public/index.php');
const logsDir = resolve(rootDir, '.cache/efsdb/artifacts/logs');
const blake3ExtensionPath = resolve(rootDir, 'efsdb/php/core/ext/php_blake3.dll');
const phpBin = process.env.EFSDB_PHP_BIN ?? 'php';

if (!existsSync(blake3ExtensionPath)) {
  throw new Error(`Blake3 extension was not found at ${blake3ExtensionPath}`);
}

mkdirSync(logsDir, { recursive: true });

let phpExtensionDir = process.env.EFSDB_PHP_EXTENSION_DIR;
if (!phpExtensionDir) {
  const siblingExtDir = resolve(dirname(phpBin), 'ext');
  if (existsSync(siblingExtDir)) {
    phpExtensionDir = siblingExtDir;
  } else {
    try {
      phpExtensionDir = execFileSync(phpBin, ['-n', '-r', 'echo ini_get("extension_dir");'], {
        cwd: rootDir,
        encoding: 'utf8',
      }).trim();
    } catch {
      throw new Error('PHP runtime was not found. Set EFSDB_PHP_BIN to a PHP executable or add it to PATH.');
    }
  }
}

const server = spawn(
  phpBin,
  [
    '-c',
    phpIniPath,
    '-d',
    'efsdb.process_id=app-server',
    '-S',
    `127.0.0.1:${port}`,
    '-t',
    publicDir,
    indexPath,
  ],
  {
    cwd: rootDir,
    env: {
      ...process.env,
      EFSDB_PHP_BIN: phpBin,
      EFSDB_PHP_EXTENSION_DIR: phpExtensionDir,
      EFSDB_PHP_BLAKE3_EXTENSION:
        process.env.EFSDB_PHP_BLAKE3_EXTENSION ?? blake3ExtensionPath,
      EFSDB_PHP_ERROR_LOG:
        process.env.EFSDB_PHP_ERROR_LOG ?? resolve(logsDir, 'php-error.log'),
    },
    stdio: 'inherit',
  }
);

if (shouldOpen) {
  // Give the server a moment to start before opening the browser
  setTimeout(() => {
    const osPlatform = platform();
    let command;
    let commandArgs;
    if (osPlatform === "win32") {
      command = "cmd";
      commandArgs = ["/c", "start", url];
    } else if (osPlatform === "darwin") {
      command = "open";
      commandArgs = [url];
    } else {
      command = "xdg-open";
      commandArgs = [url];
    }

    spawn(command, commandArgs, { stdio: "ignore", detached: true }).unref();
    console.log(`\nOpening ${url} in your browser...\n`);
  }, 1000);
}

server.on("exit", (code) => {
  process.exit(code ?? 0);
});
