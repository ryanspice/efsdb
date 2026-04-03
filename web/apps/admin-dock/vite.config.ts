import { defineConfig } from 'vite';
import { createCustomElementConfig } from '../../vite.shared';

export default defineConfig(
  createCustomElementConfig({
    entry: 'apps/admin-dock/src/main.ts',
    name: 'EfsdbAdminDock',
    fileName: 'efsdb-admin-dock.js'
  })
);
