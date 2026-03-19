import { test, expect } from '@playwright/test';
import { gotoLoginHost, playwrightBootstrapSecret } from './helpers/auth';
import {
  expectModuleScript,
  loginBundlePath,
  loginHost,
  loginInput,
  loginSubmit,
  readBootstrapPayload
} from './helpers/selectors';

test('login host boots with shared bootstrap contract', async ({ page }) => {
  await gotoLoginHost(page);
  await expectModuleScript(page, loginBundlePath);

  const bootstrap = await readBootstrapPayload(page);
  expect(bootstrap).toMatchObject({
    app: 'login',
    tag: 'efsdb-login',
    assetFile: loginBundlePath,
    apiBase: '/api/auth',
    authBase: '/api/auth'
  });
});

test('login failure preserves current error path', async ({ page }) => {
  await gotoLoginHost(page);

  const input = loginInput(page);
  await input.fill('not-a-real-login-key');
  await loginSubmit(page).click();

  await expect(loginHost(page).locator('.alert.error')).toContainText('Invalid login key');
});

test('login happy path redirects to admin', async ({ page }) => {
  await gotoLoginHost(page);

  await loginInput(page).fill(playwrightBootstrapSecret);
  await loginSubmit(page).click();

  await page.waitForURL(/action=admin/);
  await expect(page.locator('body')).toContainText('Users, roles, and display modes');
});

test('login input is focused for unauthenticated users', async ({ page }) => {
  await gotoLoginHost(page);
  await expect(loginInput(page)).toBeFocused();
});
