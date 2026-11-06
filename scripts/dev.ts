import { spawn } from "node:child_process";
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { platform } from 'os';
import { launchPhp, exitWithPhp } from './php-core';

const args = process.argv.slice(2);
const shouldOpen = args.includes('--open');
const port = 8787;
const url = `http://127.0.0.1:${port}`;
const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = resolve(rootDir, 'efsdb/php/core/public');
const indexPath = resolve(rootDir, 'efsdb/php/core/public/index.php');

const server = launchPhp([
    '-d',
    'efsdb.process_id=app-server',
    '-S',
    `127.0.0.1:${port}`,
    '-t',
    publicDir,
    indexPath,
]);

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

exitWithPhp(server);
