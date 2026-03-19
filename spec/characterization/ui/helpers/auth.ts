import { expect, type Page } from '@playwright/test';
import { adminHost, explorerHost, loginHost, loginInput, loginSubmit, waitForCustomElement } from './selectors';

export const playwrightBootstrapSecret =
  process.env.EFSDB_PLAYWRIGHT_BOOTSTRAP_SECRET ?? 'phase3-playwright-bootstrap-secret';
let explorerParitySeeded = false;
let explorerParityPath: string | null = null;

export async function gotoLoginHost(page: Page): Promise<void> {
  const response = await page.goto('/?action=login');
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
  await page.waitForURL(/action=admin/);
  await page.waitForLoadState('networkidle');
}

export async function seedExplorerParityFixtures(page: Page): Promise<string> {
  if (explorerParitySeeded && explorerParityPath !== null) {
    return explorerParityPath;
  }

  await page.waitForURL(/action=admin/);
  await page.waitForLoadState('networkidle');

  const seededPath = await page.evaluate(async () => {
    const settingsResponse = await window.fetch('/api/admin/settings');
    if (!settingsResponse.ok) {
      throw new Error(`Failed to read tenant settings: ${settingsResponse.status}`);
    }

    const settingsPayload = (await settingsResponse.json()) as {
      result?: { settings?: { tenantKey?: string } };
    };
    const tenantKey = settingsPayload.result?.settings?.tenantKey ?? 'tenant';
    const filePayloads = Array.from({ length: 18 }, (_, index) => ({
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
      const response = await window.fetch('/api/admin/public-workspace/file', {
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

    return `public_workspace_files/public/${tenantKey}/published/explorer-parity`;
  });

  explorerParitySeeded = true;
  explorerParityPath = seededPath;
  return seededPath;
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

  const params = new URLSearchParams({ action: 'explorer', mode });
  if (path) {
    params.set('path', path);
  }

  const response = await page.goto(`/?${params.toString()}`);
  expect(response?.ok()).toBeTruthy();
  await waitForCustomElement(page, 'efsdb-explorer');
  await expect(explorerHost(page)).toBeVisible();
}

export async function openAdminCe(page: Page): Promise<void> {
  await loginViaUi(page);
  await waitForCustomElement(page, 'efsdb-admin');
  await expect(adminHost(page)).toBeVisible();
}

export async function openLegacyAdmin(page: Page): Promise<void> {
  await loginViaUi(page);
  const response = await page.goto('/?action=admin&ui=legacy');
  expect(response?.ok()).toBeTruthy();
}
