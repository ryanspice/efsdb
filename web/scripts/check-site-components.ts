import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { compile } from 'svelte/compiler';

type BuildResult =
  | {
      status: 'success';
      componentCount: number;
    }
  | {
      status: 'failed';
      componentCount: number;
      error: {
        path: string;
        message: string;
        line?: number;
        column?: number;
        frame?: string | null;
      };
    };

function collectSvelteFiles(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }

  const files: string[] = [];
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.svelte-kit' || name === 'dist')
      continue;

    const fullPath = resolve(dir, name);
    try {
      const stats = lstatSync(fullPath);
      if (stats.isDirectory()) {
        files.push(...collectSvelteFiles(fullPath));
        continue;
      }

      if (fullPath.toLowerCase().endsWith('.svelte')) {
        files.push(fullPath);
      }
    } catch (e) {
      // ignore broken symlinks
    }
  }

  return files.sort((left, right) => left.localeCompare(right));
}

function fail(message: string): never {
  console.log(
    JSON.stringify({
      status: 'failed',
      componentCount: 0,
      error: { message },
    } satisfies BuildResult)
  );
  process.exit(1);
}

const workspaceRoot = process.argv[2];
if (!workspaceRoot) {
  fail('A workspace root is required.');
}

const componentsRoot = resolve(workspaceRoot, 'components');
const files = collectSvelteFiles(componentsRoot);

for (const file of files) {
  const source = readFileSync(file, 'utf8');

  try {
    compile(source, {
      filename: file,
      generate: 'client',
      customElement: true,
      css: 'external',
    });
  } catch (error: any) {
    const result: BuildResult = {
      status: 'failed',
      componentCount: files.length,
      error: {
        path: relative(workspaceRoot, file).replace(/\\/g, '/'),
        message:
          typeof error?.message === 'string'
            ? error.message
            : 'Svelte component build failed.',
        line:
          typeof error?.start?.line === 'number' ? error.start.line : undefined,
        column:
          typeof error?.start?.column === 'number'
            ? error.start.column
            : undefined,
        frame: typeof error?.frame === 'string' ? error.frame : null,
      },
    };

    console.log(JSON.stringify(result));
    process.exit(1);
  }
}

const result: BuildResult = {
  status: 'success',
  componentCount: files.length,
};

console.log(JSON.stringify(result));
