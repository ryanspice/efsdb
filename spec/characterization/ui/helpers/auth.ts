import { expect, type Page } from '@playwright/test';
import { adminHost, explorerHost, loginHost, loginInput, loginSubmit, waitForCustomElement } from './selectors';

export const playwrightBootstrapSecret =
  process.env.EFSDB_PLAYWRIGHT_BOOTSTRAP_SECRET ?? 'phase3-playwright-bootstrap-secret';
let explorerParitySeeded = false;
let explorerParityPath: string | null = null;

export async function gotoLoginHost(page: Page): Promise<void> {
  const response = await page.goto('/_efsdb/login');
  expect(response?.ok()).toBeTruthy();
  await waitForCustomElement(page, 'efsdb-login');
  await expect(loginHost(page)).toBeVisible();
}

export async function loginViaUi(page: Page, key: string = playwrightBootstrapSecret): Promise<void> {
  await gotoLoginHost(page);
  const input = loginInput(page);
  await expect(input).toBeVisible();
  await input.fill(key);
  await loginSubmit(page).click();
  await page.waitForURL((url) => {
    return url.pathname.replace(/\/+$/, '') === '/_efsdb/admin';
  });
  await page.waitForLoadState('networkidle');
}

export async function seedExplorerParityFixtures(page: Page): Promise<string> {
  if (explorerParitySeeded && explorerParityPath !== null) {
    return explorerParityPath;
  }

  await page.waitForURL((url) => {
    return url.pathname.replace(/\/+$/, '') === '/_efsdb/admin';
  });
  await page.waitForLoadState('networkidle');

  const seededPath = await page.evaluate(async () => {
    const filePayloads = Array.from({ length: 36 }, (_, index) => ({
      root: 'published',
      path: `/explorer-parity/file-${String(index + 1).padStart(2, '0')}.txt`,
      content: `Explorer parity fixture ${index + 1}`,
      mime: 'text/plain'
    }));

    filePayloads.push({
      root: 'published',
      path: '/explorer-parity/nested/details.txt',
      content: 'Explorer parity nested detail fixture',
      mime: 'text/plain'
    });

    for (const payload of filePayloads) {
      const response = await window.fetch('/_efsdb/api/admin/public-workspace/file', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        continue;
      }

      const text = await response.text();
      if (!response.ok) {
        throw new Error(`Explorer fixture seed failed for ${payload.path}: ${text}`);
      }
    }

    return 'site/production/content/explorer-parity';
  });

  explorerParitySeeded = true;
  explorerParityPath = seededPath;
  return seededPath;
}

async function waitForExplorerReady(page: Page): Promise<void> {
  const host = explorerHost(page);
  await expect(host.locator('[data-testid="explorer-column-0"] .row').first()).toBeVisible({
    timeout: 30_000
  });
}

export async function openExplorer(
  page: Page,
  mode: 'natural' | 'raw' = 'natural',
  options: { path?: string; seedFixtures?: boolean } = {}
): Promise<void> {
  await loginViaUi(page);
  let path = options.path;
  if (options.seedFixtures) {
    const seededPath = await seedExplorerParityFixtures(page);
    path ??= seededPath;
  }

  const params = new URLSearchParams({ mode });
  if (path) {
    params.set('path', path);
  }

  const response = await page.goto(`/_efsdb/explorer?${params.toString()}`);
  expect(response?.ok()).toBeTruthy();
  await waitForCustomElement(page, 'efsdb-explorer');
  await expect(explorerHost(page)).toBeVisible();
  await waitForExplorerReady(page);
}

export async function openAdminCe(page: Page): Promise<void> {
  await loginViaUi(page);
  await waitForCustomElement(page, 'efsdb-admin');
  await expect(adminHost(page)).toBeVisible();
}

export async function openLegacyAdmin(page: Page): Promise<void> {
  await loginViaUi(page);
  const response = await page.goto('/_efsdb/admin?ui=legacy');
  expect(response?.ok()).toBeTruthy();
}
