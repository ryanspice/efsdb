import { mkdirSync, existsSync } from "node:fs";
import { execFileSync, spawn } from "node:child_process";
import { delimiter, dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);

if (args.length === 0) {
  process.stderr.write("Usage: bun run ./scripts/php-core.ts -- <php args...>\n");
  process.exit(1);
}

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const phpIniPath = resolve(rootDir, "efsdb/php/core/php.ini");
const extDir = resolve(rootDir, "efsdb/php/core/ext");
const logsDir = resolve(rootDir, ".cache/efsdb/artifacts/logs");
const phpBin = process.env.EFSDB_PHP_BIN ?? "php";
const defaultBlake3Extension =
  process.platform === "win32"
    ? resolve(extDir, "php_blake3.dll")
    : resolve(extDir, "blake3-src/compiled/blake3.so");

if (!existsSync(phpIniPath)) {
  process.stderr.write(`EFSDB core php.ini was not found at ${phpIniPath}\n`);
  process.exit(1);
}

if (!process.env.EFSDB_PHP_BLAKE3_EXTENSION && !existsSync(defaultBlake3Extension)) {
  process.stderr.write(
    `Blake3 extension was not found at ${defaultBlake3Extension}. Set EFSDB_PHP_BLAKE3_EXTENSION to override.\n`
  );
  process.exit(1);
}

mkdirSync(logsDir, { recursive: true });

const resolveExecutablePath = (command: string): string => {
  if (isAbsolute(command) || command.includes("/") || command.includes("\\")) {
    return command;
  }

  const pathEntries = (process.env.PATH ?? "").split(delimiter).filter(Boolean);
  const names =
    process.platform === "win32" && !/\.(?:exe|bat|cmd|com)$/i.test(command)
      ? [command, `${command}.exe`, `${command}.cmd`, `${command}.bat`, `${command}.com`]
      : [command];

  for (const entry of pathEntries) {
    for (const name of names) {
      const candidate = resolve(entry, name);
      if (existsSync(candidate)) {
        return candidate;
      }
    }
  }

  return command;
};

const resolvedPhpBin = resolveExecutablePath(phpBin);

const detectExtensionDir = (): string => {
  const phpBinDir = resolve(dirname(resolvedPhpBin));
  const siblingExtDir = resolve(phpBinDir, "ext");
  if (existsSync(siblingExtDir)) {
    return siblingExtDir;
  }

  let output = "";
  try {
    output = execFileSync(resolvedPhpBin, ["-n", "-r", 'echo ini_get("extension_dir");'], {
      cwd: rootDir,
      encoding: "utf8",
    }).trim();
  } catch {
    process.stderr.write(
      `PHP runtime was not found. Set EFSDB_PHP_BIN to a PHP executable or add it to PATH.\n`
    );
    process.exit(1);
  }

  if (output === "") {
    process.stderr.write("PHP extension_dir could not be detected from the current PHP runtime.\n");
    process.exit(1);
  }

  return output;
};

const env = {
  ...process.env,
  EFSDB_PHP_BIN: resolvedPhpBin,
  EFSDB_PHP_EXTENSION_DIR: process.env.EFSDB_PHP_EXTENSION_DIR ?? detectExtensionDir(),
  EFSDB_PHP_BLAKE3_EXTENSION:
    process.env.EFSDB_PHP_BLAKE3_EXTENSION ?? defaultBlake3Extension,
  EFSDB_PHP_ERROR_LOG:
    process.env.EFSDB_PHP_ERROR_LOG ?? resolve(logsDir, "php-error.log"),
};

const child = spawn(resolvedPhpBin, ["-c", phpIniPath, ...args], {
  cwd: rootDir,
  env,
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
