import { test, expect } from '@playwright/test';
import { gotoLoginHost, loginViaUi } from './helpers/auth';
import {
  expectModuleScript,
  explorerBundlePath,
  explorerHost,
  loginBundlePath,
  readBootstrapPayload,
  waitForCustomElement
} from './helpers/selectors';

test('login and explorer hosts reference stable bundle filenames and valid bootstrap payloads', async ({ page }) => {
  await gotoLoginHost(page);
  await expectModuleScript(page, loginBundlePath);

  let bootstrap = await readBootstrapPayload(page);
  expect(bootstrap).toMatchObject({
    app: 'login',
    tag: 'efsdb-login',
    assetFile: loginBundlePath
  });

  await loginViaUi(page);
  const response = await page.goto('/_efsdb/explorer');
  expect(response?.ok()).toBeTruthy();
  await waitForCustomElement(page, 'efsdb-explorer');
  await expect(explorerHost(page)).toBeVisible();
  await expectModuleScript(page, explorerBundlePath);

  bootstrap = await readBootstrapPayload(page);
  expect(bootstrap).toMatchObject({
    app: 'explorer',
    tag: 'efsdb-explorer',
    assetFile: explorerBundlePath
  });
});

test('api routes remain json and do not leak host html', async ({ request }) => {
  for (const path of ['/_efsdb/api/health', '/_efsdb/api/auth/whoami', '/_efsdb/api/explorer/list?mode=natural']) {
    const response = await request.get(path);
    const contentType = response.headers()['content-type'] ?? '';
    const body = await response.text();

    expect(contentType).toContain('application/json');
    expect(body.toLowerCase()).not.toContain('<html');
    expect(body.toLowerCase()).not.toContain('<!doctype');
  }
});
