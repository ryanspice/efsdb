import { test, expect } from '@playwright/test';
import { openExplorer } from './helpers/auth';
import {
  expectModuleScript,
  explorerBundlePath,
  explorerHost,
  readBootstrapPayload,
  waitForCustomElement
} from './helpers/selectors';

test('explorer host boots with shared bootstrap contract', async ({ page }) => {
  await openExplorer(page, 'natural');
  await expectModuleScript(page, explorerBundlePath);

  const bootstrap = await readBootstrapPayload(page);
  expect(bootstrap).toMatchObject({
    app: 'explorer',
    tag: 'efsdb-explorer',
    assetFile: explorerBundlePath,
    apiBase: '/_efsdb/api/explorer',
    authBase: '/_efsdb/api/auth'
  });

  expect((bootstrap.initial as Record<string, unknown>)?.mode).toBe('natural');
});

test('authenticated explorer renders and responds to keyboard navigation', async ({ page }) => {
  await openExplorer(page, 'raw');

  const host = explorerHost(page);
  await expect(host.locator('.toolbar')).toBeVisible();
  await expect(host.locator('.row').first()).toBeVisible();

  await host.locator('.root').click();
  await page.keyboard.press('ArrowRight');

  await expect(host.locator('.row.active').first()).toBeVisible();
});

test('natural and raw mode bootstrap values are preserved', async ({ page }) => {
  await openExplorer(page, 'natural');

  let bootstrap = await readBootstrapPayload(page);
  expect((bootstrap.initial as Record<string, unknown>)?.mode).toBe('natural');
  await expect(explorerHost(page).locator('.segbtn.active')).toContainText('Natural');

  const response = await page.goto('/_efsdb/explorer?mode=raw');
  expect(response?.ok()).toBeTruthy();
  await waitForCustomElement(page, 'efsdb-explorer');

  bootstrap = await readBootstrapPayload(page);
  expect((bootstrap.initial as Record<string, unknown>)?.mode).toBe('raw');
  await expect(explorerHost(page).locator('.segbtn.active')).toContainText('Raw');
});
