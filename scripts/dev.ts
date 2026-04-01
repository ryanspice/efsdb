import { spawn } from "node:child_process";
import { platform } from "os";

const args = process.argv.slice(2);
const shouldOpen = args.includes("--open");
const port = 8787;
const url = `http://127.0.0.1:${port}`;

const server = spawn(
  "php",
  [
    "-c",
    "efsdb/php/core/php.ini",
    "-d",
    "efsdb.process_id=app-server",
    "-S",
    `127.0.0.1:${port}`,
    "-t",
    "efsdb/php/core/public",
    "efsdb/php/core/public/index.php",
  ],
  {
    stdio: "inherit",
    // Use shell on Windows to match exactly how package.json scripts execute
    shell: platform() === "win32",
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
