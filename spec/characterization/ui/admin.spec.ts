import { test, expect } from '@playwright/test';
import { loginViaUi, openAdminCe } from './helpers/auth';
import { adminBundlePath, adminHost, expectModuleScript, readBootstrapPayload } from './helpers/selectors';

test('default admin route still serves the legacy fallback path', async ({ page }) => {
  await loginViaUi(page);

  const response = await page.goto('/?action=admin');
  expect(response?.ok()).toBeTruthy();
  await expect(page.locator('body')).toContainText('Users, roles, and display modes');
  await expect(page.locator('efsdb-admin')).toHaveCount(0);
});

test('admin ce branch boots with shared bootstrap contract', async ({ page }) => {
  await openAdminCe(page);
  await expectModuleScript(page, adminBundlePath);

  const bootstrap = await readBootstrapPayload(page);
  expect(bootstrap).toMatchObject({
    app: 'admin',
    tag: 'efsdb-admin',
    assetFile: adminBundlePath,
    apiBase: '/api/admin',
    authBase: '/api/auth'
  });
});

test('admin ce consumes users roles settings products search and facets contracts', async ({ page }) => {
  const seen = {
    users: false,
    roles: false,
    settings: false,
    products: false,
    search: false,
    facets: false
  };

  page.on('response', (response) => {
    const url = response.url();
    if (!response.ok()) {
      return;
    }

    if (url.includes('/api/admin/users')) seen.users = true;
    if (url.includes('/api/admin/roles')) seen.roles = true;
    if (url.includes('/api/admin/settings')) seen.settings = true;
    if (url.includes('/api/products')) seen.products = true;
    if (url.includes('/api/search')) seen.search = true;
    if (url.includes('/api/facets')) seen.facets = true;
  });

  await openAdminCe(page);

  const host = adminHost(page);
  await expect(host.locator('[data-testid="admin-users-panel"]')).toBeVisible();
  await expect(host.locator('[data-testid="admin-roles-panel"]')).toBeVisible();
  await expect(host.locator('[data-testid="admin-display-mode-panel"]')).toBeVisible();
  await expect(host.locator('[data-testid="admin-settings-panel"]')).toBeVisible();
  await expect(host.locator('[data-testid="admin-catalog-panel"]')).toBeVisible();

  await expect.poll(() => Object.values(seen).every(Boolean)).toBeTruthy();
});
