import { defineConfig } from 'vite';
import { createCustomElementConfig } from '../../vite.shared';

export default defineConfig(createCustomElementConfig({
  entry: 'apps/builder/src/main.ts',
  name: 'EfsdbBuilder',
  fileName: 'efsdb-builder.js'
}));