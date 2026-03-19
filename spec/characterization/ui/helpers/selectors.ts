import { expect, type Locator, type Page } from '@playwright/test';

export const loginBundlePath = '/js/efsdb-login.js';
export const explorerBundlePath = '/js/efsdb-explorer.js';
export const adminBundlePath = '/js/efsdb-admin.js';
export const bootstrapSelector = '#efsdb-bootstrap';

export function loginHost(page: Page): Locator {
  return page.locator('efsdb-login');
}

export function explorerHost(page: Page): Locator {
  return page.locator('efsdb-explorer');
}

export function explorerColumn(page: Page, index: number): Locator {
  return explorerHost(page).locator(`[data-testid="explorer-column-${index}"]`);
}

export function explorerColumnList(page: Page, index: number): Locator {
  return explorerHost(page).locator(`[data-testid="explorer-column-list-${index}"]`);
}

export function explorerScaleInput(page: Page): Locator {
  return explorerHost(page).locator('[data-testid="explorer-scale-input"]');
}

export function explorerCover(page: Page): Locator {
  return explorerHost(page).locator('[data-testid="explorer-cover"]');
}

export function explorerPreviewPanel(page: Page): Locator {
  return explorerHost(page).locator('[data-testid="explorer-preview-panel"]');
}

export function explorerDetailsPopup(page: Page): Locator {
  return explorerHost(page).locator('[data-testid="explorer-details-popup"]');
}

export function explorerRelationshipsPanel(page: Page): Locator {
  return explorerHost(page).locator('[data-testid="explorer-details-relationships"]');
}

export function adminHost(page: Page): Locator {
  return page.locator('efsdb-admin');
}

export function loginInput(page: Page): Locator {
  return loginHost(page).locator('input#key');
}

export function loginSubmit(page: Page): Locator {
  return loginHost(page).locator('button[type="submit"]');
}

export async function waitForCustomElement(page: Page, tag: string): Promise<void> {
  await page.waitForFunction((name: string) => customElements.get(name) !== undefined, tag);
}

export async function readBootstrapPayload(page: Page): Promise<Record<string, unknown>> {
  const script = page.locator(bootstrapSelector);
  await expect(script).toHaveCount(1);
  const raw = (await script.textContent())?.trim() ?? '';
  expect(raw).not.toBe('');
  return JSON.parse(raw) as Record<string, unknown>;
}

export async function expectModuleScript(page: Page, assetPath: string): Promise<void> {
  await expect(page.locator(`script[type="module"][src="${assetPath}"]`)).toHaveCount(1);
}
