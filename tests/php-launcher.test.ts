import { describe, expect, test } from "bun:test";
import { spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { delimiter, resolve } from "node:path";
import { parseRuntimeProbe, preparePhpInvocation, requiredExtensionIni } from "../scripts/php-core";

const root = resolve(import.meta.dir, "..");

describe("required PHP extension decisions", () => {
  test("Linux built-ins leave shared string and archive modules to load", () => {
    expect(requiredExtensionIni(["Core", "sodium", "openssl", "zlib"]).split("\n").filter((line) => line.startsWith("extension=")))
      .toEqual(["extension=mbstring", "extension=phar", "extension=zip", "extension=iconv"]);
  });
  test("Windows missing modules are loaded exactly once", () => {
    expect(requiredExtensionIni(["Core", "Phar", "zlib", "iconv"]).split("\n").filter((line) => line.startsWith("extension=")))
      .toEqual(["extension=sodium", "extension=mbstring", "extension=openssl", "extension=zip"]);
  });
  test("every required shared module is loaded when none are built in", () => {
    expect(requiredExtensionIni(["Core"]).split("\n").filter((line) => line.startsWith("extension=")))
      .toEqual(["extension=sodium", "extension=mbstring", "extension=openssl", "extension=phar", "extension=zip", "extension=zlib", "extension=iconv"]);
  });
  test("all built-in modules produce no extension directives, including mixed case", () => {
    expect(requiredExtensionIni(["Sodium", "mbstring", "OpenSSL", "openssl", "Phar", "ZIP", "zlib", "iconv"])).not.toContain("extension=");
  });
  test("malformed or warning-polluted probes fail closed", () => {
    for (const output of ["Warning: startup\n{}", "null", "{}", '{"extensionDir":"","loadedExtensions":[]}',
      '{"extensionDir":"/ext","loadedExtensions":[1]}']) {
      expect(() => parseRuntimeProbe(output)).toThrow();
    }
    expect(parseRuntimeProbe('{"extensionDir":"/ext","loadedExtensions":["sodium"]}'))
      .toEqual({ extensionDir: "/ext", loadedExtensions: ["sodium"] });
  });
});

test("real PHP and its descendant inherit one isolated scan directory without ambient warnings", () => {
  const evidence = resolve(root, ".ai/evidence/php-launcher-20261106");
  mkdirSync(evidence, { recursive: true });
  const ambient = mkdtempSync(resolve(evidence, "ambient-"));
  writeFileSync(resolve(ambient, "99-poison.ini"), "extension=efsdb_deliberately_missing_module\n");
  // The empty component would ask PHP to add its default scan directory if retained.
  const invocation = preparePhpInvocation([], { ...process.env, PHP_INI_SCAN_DIR: `${ambient}${delimiter}` });
  const second = preparePhpInvocation([]);
  expect(second.scanDir).not.toBe(invocation.scanDir);
  const config = readFileSync(resolve(invocation.scanDir, "10-required-extensions.ini"), "utf8");
  const secondConfig = readFileSync(resolve(second.scanDir, "10-required-extensions.ini"), "utf8");
  if (process.platform === "win32") {
    const cacheId = config.match(/^opcache\.cache_id=(efsdb-[a-f0-9-]+)$/m)?.[1];
    const secondCacheId = secondConfig.match(/^opcache\.cache_id=(efsdb-[a-f0-9-]+)$/m)?.[1];
    expect(cacheId).toBeDefined();
    expect(secondCacheId).toBeDefined();
    expect(secondCacheId).not.toBe(cacheId);
  } else {
    expect(config).not.toContain("opcache.cache_id=");
  }
  expect(invocation.env.PHP_INI_SCAN_DIR).toBe(invocation.scanDir);
  expect(invocation.scanDir.startsWith(resolve(root, ".ai/evidence/php-config") + (process.platform === "win32" ? "\\" : "/"))).toBe(true);
  const code = '$code = \'echo json_encode(["ini" => php_ini_loaded_file(), "scan" => getenv("PHP_INI_SCAN_DIR"), "modules" => array_map("extension_loaded", ["sodium", "mbstring", "openssl", "phar", "zip", "zlib", "iconv"]), "archiveClasses" => [class_exists("PharData"), class_exists("ZipArchive")]], JSON_THROW_ON_ERROR);\'; $child = proc_open([PHP_BINARY, "-c", php_ini_loaded_file(), "-r", $code], [0 => ["pipe", "r"], 1 => ["pipe", "w"], 2 => ["pipe", "w"]], $pipes); fclose($pipes[0]); $out = stream_get_contents($pipes[1]); $err = stream_get_contents($pipes[2]); fclose($pipes[1]); fclose($pipes[2]); $exit = proc_close($child); echo json_encode(["ini" => php_ini_loaded_file(), "scan" => getenv("PHP_INI_SCAN_DIR"), "child" => json_decode($out, true, 512, JSON_THROW_ON_ERROR), "childErr" => $err, "childExit" => $exit], JSON_THROW_ON_ERROR);';
  const result = spawnSync(invocation.command, [...invocation.args, "-r", code], {
    cwd: invocation.cwd, env: invocation.env, encoding: "utf8", timeout: 10000,
  });
  expect(result.status).toBe(0);
  expect(result.stderr).toBe("");
  const actual = JSON.parse(result.stdout);
  expect(actual.ini.replaceAll("\\", "/")).toBe(resolve(root, "efsdb/php/core/php.ini").replaceAll("\\", "/"));
  expect(actual.scan).toBe(invocation.scanDir);
  expect(actual.child.scan).toBe(actual.scan);
  expect(actual.child.ini).toBe(actual.ini);
  expect(actual.child.modules).toEqual([true, true, true, true, true, true, true]);
  expect(actual.child.archiveClasses).toEqual([true, true]);
  expect(actual.childErr).toBe("");
  expect(actual.childExit).toBe(0);
  expect(existsSync(invocation.scanDir)).toBe(true);
  expect(readFileSync(resolve(invocation.scanDir, "10-required-extensions.ini"), "utf8")).not.toContain("efsdb_deliberately_missing_module");
});

test("CLI preserves nonzero PHP exit codes and rejects an absent runtime", () => {
  const launch = resolve(root, "scripts/php-core.ts");
  const exited = spawnSync(process.execPath, ["run", launch, "--", "-r", "exit(7);"], {
    cwd: root, env: process.env, encoding: "utf8", timeout: 10000,
  });
  expect(exited.status).toBe(7);
  expect(exited.stdout).toBe("");
  expect(exited.stderr).toBe("");
  const missing = spawnSync(process.execPath, ["run", launch, "--", "-r", "exit(0);"], {
    cwd: root, env: { ...process.env, EFSDB_PHP_BIN: resolve(root, ".ai/no-such-php-runtime") },
    encoding: "utf8", timeout: 10000,
  });
  expect(missing.status).not.toBe(0);
  expect(missing.stdout).toBe("");
  expect(missing.stderr.length).toBeGreaterThan(0);
});

test("interrupting the launcher terminates its PHP child", async () => {
  const child = spawn(process.execPath, ["run", resolve(root, "scripts/php-core.ts"), "--", "-r",
    'echo getmypid(), "\\n"; flush(); sleep(30);',
  ], { cwd: root, env: process.env, stdio: ["ignore", "pipe", "pipe"] });
  let phpPid = 0;
  let timedOut = false;
  const exited = new Promise<number | null>((resolveExit) => child.once("exit", resolveExit));
  const deadline = setTimeout(() => {
    timedOut = true;
    if (phpPid > 0) {
      try { process.kill(phpPid, "SIGTERM"); } catch { /* The owned child already exited. */ }
    }
    child.kill("SIGTERM");
  }, 5000);
  try {
    const output = await new Promise<string>((resolveOutput, reject) => {
      child.stdout!.once("data", (data) => resolveOutput(String(data)));
      child.once("error", reject);
      child.once("exit", () => reject(new Error("Launcher exited before PHP reported its PID")));
    });
    phpPid = Number(output.trim());
    expect(Number.isInteger(phpPid) && phpPid > 0).toBe(true);
    child.kill("SIGINT");
    expect(await exited).not.toBe(0);
    expect(timedOut).toBe(false);
    expect(() => process.kill(phpPid, 0)).toThrow();
  } finally {
    clearTimeout(deadline);
    if (child.exitCode === null) child.kill("SIGTERM");
    if (phpPid > 0) {
      try { process.kill(phpPid, "SIGTERM"); } catch { /* The owned child already exited. */ }
    }
  }
}, 10000);
