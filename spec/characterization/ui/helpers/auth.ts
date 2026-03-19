import { expect, type Page } from '@playwright/test';
import { explorerHost, loginHost, loginInput, loginSubmit, waitForCustomElement } from './selectors';

export const playwrightBootstrapSecret =
  process.env.EFSDB_PLAYWRIGHT_BOOTSTRAP_SECRET ?? 'phase3-playwright-bootstrap-secret';

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
}

export async function openExplorer(page: Page, mode: 'natural' | 'raw' = 'natural'): Promise<void> {
  await loginViaUi(page);
  const response = await page.goto(`/?action=explorer&mode=${mode}`);
  expect(response?.ok()).toBeTruthy();
  await waitForCustomElement(page, 'efsdb-explorer');
  await expect(explorerHost(page)).toBeVisible();
}
