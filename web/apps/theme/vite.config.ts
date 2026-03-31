import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ],
  resolve: {
    alias: {
      '@contracts': resolve(__dirname, '../../contracts'),
      '@ui': resolve(__dirname, '../../ui'),
      '@utils': resolve(__dirname, '../../utils')
    }
  },
  build: {
    outDir: resolve(__dirname, '../../../efsdb/php/core/public/js'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'EFSDBThemeStudio',
      formats: ['es'],
      fileName: () => 'efsdb-theme-studio.js'
    }
  }
});
