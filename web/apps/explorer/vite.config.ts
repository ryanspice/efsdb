import { defineConfig } from 'vite';
import { createCustomElementConfig } from '../../vite.shared';

export default defineConfig(createCustomElementConfig({
  entry: 'apps/explorer/src/main.ts',
  name: 'EfsdbExplorer',
  fileName: 'efsdb-explorer.js'
}));
