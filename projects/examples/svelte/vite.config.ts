import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import { defineConfig } from 'vite';

const componentName = path.basename(process.cwd());
const basePath = process.env.EFSDB_BASE_PATH || '';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      generate: 'client'
    }
  })],
  base: `${basePath}/components/${componentName}/dist/`,
})
