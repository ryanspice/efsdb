import { spawn, type ChildProcess } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';

type BuildTask = {
  cwd: string;
  name: string;
  script: string;
};

type TaskMetrics = {
  durationMs: number;
  modulesTransformed: number;
  name: string;
  reportedDurationMs: number;
};

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const bunExecutable = process.execPath;
const staleCssBundle = resolve(rootDir, 'efsdb/php/core/public/js/efsdb-web.css');
const tasks: BuildTask[] = [
  { cwd: resolve(rootDir, 'efsdb/php/core'), name: 'css', script: 'build:css' },
  { cwd: resolve(rootDir, 'web'), name: 'login', script: 'build:login' },
  { cwd: resolve(rootDir, 'web'), name: 'explorer', script: 'build:explorer' },
  { cwd: resolve(rootDir, 'web'), name: 'builder', script: 'build:builder' },
  { cwd: resolve(rootDir, 'web'), name: 'admin', script: 'build:admin' },
  { cwd: resolve(rootDir, 'web'), name: 'theme', script: 'build:theme' }
];

const runningChildren = new Map<string, ChildProcess>();
const ansi = {
  cyan: '\u001B[36m',
  dim: '\u001B[90m',
  green: '\u001B[32m',
  reset: '\u001B[0m',
  yellow: '\u001B[33m'
} as const;
const ansiPattern = /\u001B\[[0-9;]*m/g;
let hasFailed = false;

function formatDuration(durationMs: number): string {
  if (durationMs < 1_000) {
    return `${durationMs}ms`;
  }

  return `${(durationMs / 1_000).toFixed(durationMs >= 10_000 ? 1 : 2)}s`;
}

function stripAnsi(value: string): string {
  return value.replace(ansiPattern, '');
}

function formatTaskPrefix(taskName: string): string {
  return `${ansi.dim}[${taskName}]${ansi.reset}`;
}

function printTaskLine(taskName: string, line: string): void {
  process.stdout.write(`${formatTaskPrefix(taskName)} ${line}\n`);
}

function parseDurationToMs(value: string, unit: string): number {
  const numericValue = Number(value);

  return unit === 's' ? Math.round(numericValue * 1_000) : Math.round(numericValue);
}

function pipeTaskOutput(
  taskName: string,
  stream: NodeJS.ReadableStream | null,
  metrics: { modulesTransformed: number; reportedDurationMs: number | null }
): void {
  if (!stream) {
    return;
  }

  const reader = createInterface({ input: stream });
  reader.on('line', (line) => {
    const plainLine = stripAnsi(line).trim();

    if (plainLine.length === 0 || plainLine.startsWith('$ ')) {
      return;
    }

    const modulesMatch = plainLine.match(/^✓\s+(\d+)\s+modules transformed\./);

    if (modulesMatch) {
      metrics.modulesTransformed += Number(modulesMatch[1]);
    }

    const durationMatch = plainLine.match(/^(?:Done in|✓ built in)\s+([\d.]+)(ms|s)\.?$/);

    if (durationMatch) {
      metrics.reportedDurationMs = parseDurationToMs(durationMatch[1], durationMatch[2]);
    }

    printTaskLine(taskName, line);
  });
}

function stopOtherTasks(failedTaskName: string): void {
  for (const [taskName, child] of runningChildren) {
    if (taskName === failedTaskName || child.killed || child.exitCode !== null) {
      continue;
    }

    child.kill('SIGTERM');
  }
}

function runTask(task: BuildTask): Promise<TaskMetrics> {
  return new Promise((resolveTask, rejectTask) => {
    const startedAt = Date.now();
    const metrics = { modulesTransformed: 0, reportedDurationMs: null as number | null };
    const child = spawn(bunExecutable, ['run', '--silent', task.script], {
      cwd: task.cwd,
      env: process.env,
      stdio: ['ignore', 'pipe', 'pipe']
    });

    runningChildren.set(task.name, child);
    printTaskLine(task.name, `${ansi.dim}starting${ansi.reset}`);
    pipeTaskOutput(task.name, child.stdout, metrics);
    pipeTaskOutput(task.name, child.stderr, metrics);

    child.once('error', (error) => {
      runningChildren.delete(task.name);

      if (!hasFailed) {
        hasFailed = true;
        stopOtherTasks(task.name);
      }

      rejectTask(new Error(`${task.script} failed to start: ${error.message}`));
    });

    child.once('exit', (code, signal) => {
      runningChildren.delete(task.name);

      if (signal && hasFailed) {
        rejectTask(new Error(`${task.script} stopped after another build failed.`));
        return;
      }

      if (code === 0) {
        resolveTask({
          durationMs: Date.now() - startedAt,
          modulesTransformed: metrics.modulesTransformed,
          name: task.name,
          reportedDurationMs: metrics.reportedDurationMs ?? Date.now() - startedAt
        });
        return;
      }

      if (!hasFailed) {
        hasFailed = true;
        stopOtherTasks(task.name);
      }

      rejectTask(new Error(signal ? `${task.script} exited via ${signal}.` : `${task.script} exited with code ${code ?? 'unknown'}.`));
    });
  });
}

const buildStartedAt = Date.now();
console.log(`${ansi.cyan}[efsdb]${ansi.reset} build:web | ${tasks.length} tasks | parallel`);

const results = await Promise.allSettled(tasks.map((task) => runTask(task)));
const successfulBuilds = results
  .filter((result): result is PromiseFulfilledResult<TaskMetrics> => result.status === 'fulfilled')
  .map((result) => result.value);
const failures = results
  .filter((result): result is PromiseRejectedResult => result.status === 'rejected')
  .map((result) => result.reason instanceof Error ? result.reason.message : String(result.reason));
const totalDurationMs = Date.now() - buildStartedAt;

if (failures.length > 0) {
  console.error(`${ansi.yellow}[efsdb]${ansi.reset} failed | ${successfulBuilds.length}/${tasks.length} builds | ${formatDuration(totalDurationMs)}`);

  for (const failure of failures) {
    console.error(`${ansi.yellow}[efsdb]${ansi.reset} ${failure}`);
  }

  process.exit(1);
}

const removedStaleCssBundle = existsSync(staleCssBundle);

if (existsSync(staleCssBundle)) {
  rmSync(staleCssBundle);
}

const combinedDurationMs = successfulBuilds.reduce((total, build) => total + build.reportedDurationMs, 0);
const totalModulesTransformed = successfulBuilds.reduce((total, build) => total + build.modulesTransformed, 0);
const longestBuild = successfulBuilds.reduce((currentLongest, build) =>
  build.reportedDurationMs > currentLongest.reportedDurationMs ? build : currentLongest
);
const cleanedLabel = removedStaleCssBundle ? ` | cleaned ${relative(rootDir, staleCssBundle)}` : '';

console.log(
  `${ansi.green}[efsdb]${ansi.reset} ${successfulBuilds.length}/${tasks.length} builds` +
  ` | ${formatDuration(totalDurationMs)} wall` +
  ` | ${formatDuration(combinedDurationMs)} combined` +
  ` | ${totalModulesTransformed} modules` +
  ` | longest ${longestBuild.name} ${formatDuration(longestBuild.reportedDurationMs)}` +
  cleanedLabel
);
