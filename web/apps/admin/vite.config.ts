import { defineConfig } from 'vite';
import { createCustomElementConfig } from '../../vite.shared';

export default defineConfig(createCustomElementConfig({
  entry: 'apps/admin/src/main.ts',
  name: 'EfsdbAdmin',
  fileName: 'efsdb-admin.js'
}));
