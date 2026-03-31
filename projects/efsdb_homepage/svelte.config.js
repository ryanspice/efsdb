import adapter from '@efsdb/adapter-php';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const buildRoot = process.env.EFSDB_BUILD_ROOT || 'staging';
const basePath = process.env.EFSDB_BASE_PATH || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
			phpArgs: ['-c', process.env.EFSDB_PHP_INI_PATH || '../../efsdb/php/core/php.ini'],
			root: buildRoot,
			prefix: 'components/efsdb_homepage',
		}),
		paths: {
			base: basePath + '/components/efsdb_homepage',
			relative: false
		},
    prerender: {
			entries: ['*'],
			handleHttpError: 'warn',
		}
  }
};

export default config;
