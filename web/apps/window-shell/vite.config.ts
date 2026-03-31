import { defineConfig } from 'vite';
import { createCustomElementConfig } from '../../vite.shared';

export default defineConfig(createCustomElementConfig({
  entry: 'apps/window-shell/src/main.ts',
  name: 'EfsdbWindowShell',
  fileName: 'efsdb-window-shell.js'
}));
