import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from '@playwright/test';

const currentDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(currentDir, '..');
const port = 8791;
const baseURL = `http://127.0.0.1:${port}`;
const bootstrapSecret = process.env.EFSDB_PLAYWRIGHT_BOOTSTRAP_SECRET ?? 'phase3-playwright-bootstrap-secret';

process.env.EFSDB_PLAYWRIGHT_BOOTSTRAP_SECRET = bootstrapSecret;

export default defineConfig({
  testDir: resolve(repoRoot, 'spec/characterization/ui'),
  timeout: 30_000,
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  outputDir: resolve(repoRoot, '.ai/evidence/playwright/test-results'),
  reporter: [
    ['list'],
    ['html', { outputFolder: resolve(repoRoot, '.ai/evidence/playwright/report'), open: 'never' }]
  ],
  expect: {
    timeout: 10_000
  },
  use: {
    baseURL,
    trace: 'retain-on-failure'
  },
  webServer: {
    command: 'node web/scripts/start-playwright-server.mjs',
    cwd: repoRoot,
    env: {
      ...process.env,
      EFSDB_ENV: 'test',
      EFSDB_DEBUG: '1',
      EFSDB_BOOTSTRAP_SECRET: bootstrapSecret,
      EFSDB_PLAYWRIGHT_PORT: String(port)
    },
    port,
    reuseExistingServer: false,
    timeout: 120_000
  }
});
