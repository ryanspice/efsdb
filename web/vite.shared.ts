import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import type { UserConfig } from 'vite';

const currentDir = dirname(fileURLToPath(import.meta.url));

export const phpPublicJsDir = resolve(currentDir, '../efsdb/php/core/public/js');
export const webContractsDir = resolve(currentDir, 'contracts');
export const webUiDir = resolve(currentDir, 'ui');
export const webUtilsDir = resolve(currentDir, 'utils');

function toCssBundleName(fileName: string): string {
  return fileName.endsWith('.js') ? fileName.slice(0, -3) : fileName;
}

export type CustomElementBuildOptions = {
  entry: string;
  name: string;
  fileName: string;
};

export function createCustomElementConfig(options: CustomElementBuildOptions): UserConfig {
  return {
    resolve: {
      alias: {
        '@contracts': webContractsDir,
        '@ui': webUiDir,
        '@utils': webUtilsDir
      }
    },
    plugins: [
      svelte({
        compilerOptions: {
          customElement: true
        }
      })
    ],
    build: {
      emptyOutDir: false,
      outDir: phpPublicJsDir,
      lib: {
        entry: options.entry,
        name: options.name,
        formats: ['es'],
        fileName: () => options.fileName,
        cssFileName: toCssBundleName(options.fileName)
      }
    }
  };
}
