import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from '@playwright/test';

const currentDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(currentDir, '..');
const port = 8791;
const baseURL = `http://127.0.0.1:${port}`;
const bootstrapSecret = process.env.EFSDB_PLAYWRIGHT_BOOTSTRAP_SECRET ?? 'phase3-playwright-bootstrap-secret';
const dataDir = resolve(repoRoot, 'efsdb/php/core/.cache/playwright-ui-data');

process.env.EFSDB_PLAYWRIGHT_BOOTSTRAP_SECRET = bootstrapSecret;

export default defineConfig({
  testDir: resolve(repoRoot, 'spec/characterization/ui'),
  timeout: 30_000,
  fullyParallel: false,
  workers: 1,
  expect: {
    timeout: 10_000
  },
  use: {
    baseURL,
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'powershell -ExecutionPolicy Bypass -File web/scripts/start-playwright-server.ps1',
    cwd: repoRoot,
    env: {
      ...process.env,
      EFSDB_ENV: 'test',
      EFSDB_DEBUG: '1',
      EFSDB_DATA_DIR: dataDir,
      EFSDB_BOOTSTRAP_SECRET: bootstrapSecret,
      EFSDB_PLAYWRIGHT_PORT: String(port)
    },
    port,
    reuseExistingServer: false,
    timeout: 120_000
  }
});
