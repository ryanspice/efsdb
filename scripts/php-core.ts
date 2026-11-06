import { existsSync, lstatSync, mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { execFileSync, spawn, type ChildProcess } from "node:child_process";
import { delimiter, dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const phpIniPath = resolve(rootDir, "efsdb/php/core/php.ini");
const requiredExtensions = ["sodium", "mbstring", "openssl", "phar", "zip", "zlib", "iconv"];

export type PhpRuntimeProbe = { extensionDir: string; loadedExtensions: string[] };

export function parseRuntimeProbe(output: string): PhpRuntimeProbe {
  const value: unknown = JSON.parse(output);
  if (
    value === null || typeof value !== "object" ||
    !("extensionDir" in value) || typeof value.extensionDir !== "string" ||
    value.extensionDir.trim() === "" || !("loadedExtensions" in value) ||
    !Array.isArray(value.loadedExtensions) ||
    !value.loadedExtensions.every((name) => typeof name === "string")
  ) {
    throw new Error("PHP -n returned an invalid extension configuration probe.");
  }
  return { extensionDir: value.extensionDir, loadedExtensions: value.loadedExtensions };
}

export function requiredExtensionIni(loadedExtensions: string[]): string {
  const builtIn = new Set(loadedExtensions.map((name) => name.toLowerCase()));
  return "; Required modules not built into the selected PHP -n runtime.\n" +
    requiredExtensions.filter((name) => !builtIn.has(name))
      .map((name) => `extension=${name}\n`).join("");
}

function resolveExecutablePath(command: string, environment: NodeJS.ProcessEnv): string {
  if (isAbsolute(command) || command.includes("/") || command.includes("\\")) {
    return resolve(rootDir, command);
  }
  const names = process.platform === "win32" && !/\.(?:exe|bat|cmd|com)$/i.test(command)
    ? [command, `${command}.exe`, `${command}.cmd`, `${command}.bat`, `${command}.com`]
    : [command];
  for (const entry of (environment.PATH ?? "").split(delimiter).filter(Boolean)) {
    for (const name of names) {
      const candidate = resolve(entry, name);
      if (existsSync(candidate)) return candidate;
    }
  }
  return command;
}

export function preparePhpInvocation(args: string[], environment: NodeJS.ProcessEnv = process.env) {
  if (!existsSync(phpIniPath)) throw new Error(`EFSDB core php.ini was not found at ${phpIniPath}`);
  const phpBin = resolveExecutablePath(environment.EFSDB_PHP_BIN || "php", environment);
  const defaultBlake3 = process.platform === "win32"
    ? resolve(rootDir, "efsdb/php/core/ext/php_blake3.dll")
    : resolve(rootDir, "efsdb/php/core/ext/blake3-src/compiled/blake3.so");
  const blake3 = environment.EFSDB_PHP_BLAKE3_EXTENSION || defaultBlake3;
  if (!existsSync(blake3)) {
    throw new Error(`Blake3 extension was not found at ${blake3}. Set EFSDB_PHP_BLAKE3_EXTENSION to override.`);
  }

  // -n measures built-in modules without inheriting system or caller scan files.
  const probe = parseRuntimeProbe(execFileSync(phpBin, ["-n", "-r",
    'echo json_encode(["extensionDir" => ini_get("extension_dir"), "loadedExtensions" => get_loaded_extensions()], JSON_THROW_ON_ERROR);',
  ], { cwd: rootDir, env: environment, encoding: "utf8" }));
  const siblingExtDir = resolve(dirname(phpBin), "ext");
  const extensionDir = environment.EFSDB_PHP_EXTENSION_DIR ||
    (existsSync(siblingExtDir) ? siblingExtDir : probe.extensionDir);

  for (const relative of [".ai", ".ai/evidence", ".ai/evidence/php-config"]) {
    const directory = resolve(rootDir, relative);
    if (existsSync(directory) && lstatSync(directory).isSymbolicLink()) {
      throw new Error(`Refusing linked PHP configuration directory: ${directory}`);
    }
    mkdirSync(directory, { recursive: true });
  }
  const scanDir = mkdtempSync(resolve(rootDir, ".ai/evidence/php-config/run-"));
  // Windows PHP processes can otherwise share stale OPcache state across launches.
  // Children inherit this scan directory and therefore the same cache namespace.
  const cacheIni = process.platform === "win32" ? `opcache.cache_id=efsdb-${randomUUID()}\n` : "";
  writeFileSync(resolve(scanDir, "10-required-extensions.ini"), requiredExtensionIni(probe.loadedExtensions) + cacheIni);
  const env = {
    ...environment,
    EFSDB_PHP_BIN: phpBin,
    EFSDB_PHP_EXTENSION_DIR: extensionDir,
    EFSDB_PHP_BLAKE3_EXTENSION: blake3,
    EFSDB_PHP_ERROR_LOG: environment.EFSDB_PHP_ERROR_LOG || resolve(scanDir, "php-error.log"),
    // One nonempty directory replaces system scans and is inherited by PHP workers.
    PHP_INI_SCAN_DIR: scanDir,
  };
  return { command: phpBin, args: ["-c", phpIniPath, ...args], cwd: rootDir, env, scanDir };
}

export function launchPhp(args: string[]): ChildProcess {
  const invocation = preparePhpInvocation(args);
  return spawn(invocation.command, invocation.args, {
    cwd: invocation.cwd, env: invocation.env, stdio: "inherit",
  });
}

export function exitWithPhp(child: ChildProcess): void {
  const interrupt = () => child.kill("SIGINT");
  const terminate = () => child.kill("SIGTERM");
  const cleanup = () => {
    process.off("SIGINT", interrupt);
    process.off("SIGTERM", terminate);
  };
  process.on("SIGINT", interrupt);
  process.on("SIGTERM", terminate);
  child.once("error", (error) => {
    cleanup();
    process.stderr.write(`Unable to start PHP: ${error.message}\n`);
    process.exit(1);
  });
  child.once("exit", (code, signal) => {
    cleanup();
    process.exit(code ?? (signal === "SIGINT" ? 130 : signal === "SIGTERM" ? 143 : 1));
  });
}

if (import.meta.main) {
  const args = process.argv.slice(2);
  if (args[0] === "--") args.shift();
  if (args.length === 0) {
    process.stderr.write("Usage: bun run ./scripts/php-core.ts -- <php args...>\n");
    process.exit(1);
  }
  try {
    exitWithPhp(launchPhp(args));
  } catch (error) {
    process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
    process.exit(1);
  }
}
