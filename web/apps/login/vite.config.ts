import { defineConfig } from 'vite';
import { createCustomElementConfig } from '../../vite.shared';

export default defineConfig(createCustomElementConfig({
  entry: 'apps/login/src/main.ts',
  name: 'EfsdbLogin',
  fileName: 'efsdb-login.js'
}));
