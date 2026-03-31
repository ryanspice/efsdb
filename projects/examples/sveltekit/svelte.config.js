import adapter from '@efsdb/adapter-php';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const componentName = path.basename(process.cwd());
const buildRoot = process.env.EFSDB_BUILD_ROOT || 'staging';
const basePath = process.env.EFSDB_BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      prefix: `components/${componentName}`,
      phpArgs: ['-c', process.env.EFSDB_PHP_INI_PATH || '../../../efsdb/php/core/php.ini'],
      root: buildRoot,
    }),
    paths: {
      base: `${basePath}/components/${componentName}`,
      relative: false,
    },
    prerender: {
      entries: ['*'],
      handleHttpError: 'warn',
    },
  },
};

export default config;
