import { expect, test, type Page } from '@playwright/test';
import { openExplorer } from './helpers/auth';
import {
  explorerColumn,
  explorerColumnList,
  explorerCover,
  explorerDetailsPopup,
  explorerHost,
  explorerPreviewPanel,
  explorerRelationshipsPanel,
  explorerScaleInput
} from './helpers/selectors';

const parityColumnIndex = 5;
const nestedColumnIndex = 6;

test('drag-to-scrub and hovered-wheel scrolling work on explorer columns', async ({ page }) => {
  await openExplorer(page, 'natural', { seedFixtures: true });

  const list = explorerColumnList(page, parityColumnIndex);
  const metrics = await list.evaluate((node) => ({
    clientHeight: node.clientHeight,
    scrollHeight: node.scrollHeight,
    scrollTop: node.scrollTop
  }));
  expect(metrics.scrollHeight).toBeGreaterThan(metrics.clientHeight);

  const box = await list.boundingBox();
  expect(box).not.toBeNull();
  if (!box) {
    throw new Error('Explorer list bounding box unavailable');
  }

  await list.hover();
  await list.dispatchEvent('wheel', { deltaY: 420 });
  await expect.poll(() => list.evaluate((node) => node.scrollTop)).toBeGreaterThan(0);

  const scrollBeforeDrag = await list.evaluate((node) => node.scrollTop);
  await list.evaluate((node) => {
    const rect = node.getBoundingClientRect();
    const pointerId = 1;
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + 36;
    const endY = rect.bottom - 36;

    node.dispatchEvent(
      new PointerEvent('pointerdown', {
        pointerId,
        button: 0,
        clientX: startX,
        clientY: startY,
        bubbles: true
      })
    );
    window.dispatchEvent(
      new PointerEvent('pointermove', {
        pointerId,
        button: 0,
        clientX: startX,
        clientY: endY,
        bubbles: true
      })
    );
    window.dispatchEvent(
      new PointerEvent('pointerup', {
        pointerId,
        button: 0,
        clientX: startX,
        clientY: endY,
        bubbles: true
      })
    );
  });

  await expect.poll(() => list.evaluate((node) => node.scrollTop)).not.toBe(scrollBeforeDrag);
});

test('global explorer scale affects coverflow columns and preview consistently', async ({ page }) => {
  await openExplorer(page, 'natural', { seedFixtures: true });
  await explorerColumn(page, parityColumnIndex).locator('.row', { hasText: 'file-01.txt' }).click();

  const cover = explorerCover(page);
  const column = explorerColumn(page, parityColumnIndex);
  const preview = explorerPreviewPanel(page);
  const scaleInput = explorerScaleInput(page);

  const before = {
    coverHeight: await cover.evaluate((node) => node.getBoundingClientRect().height),
    columnWidth: await column.evaluate((node) => node.getBoundingClientRect().width),
    previewFont: await preview.locator('.ttl').evaluate((node) => window.getComputedStyle(node).fontSize)
  };

  await scaleInput.fill('1.35');

  const after = {
    coverHeight: await cover.evaluate((node) => node.getBoundingClientRect().height),
    columnWidth: await column.evaluate((node) => node.getBoundingClientRect().width),
    previewFont: await preview.locator('.ttl').evaluate((node) => window.getComputedStyle(node).fontSize)
  };

  expect(after.coverHeight).toBeGreaterThan(before.coverHeight);
  expect(after.columnWidth).toBeGreaterThan(before.columnWidth);
  expect(parseFloat(after.previewFont)).toBeGreaterThan(parseFloat(before.previewFont));
});

test('double-click folder opens and double-click file shows the minimal details popup', async ({ page }) => {
  await openExplorer(page, 'natural', { seedFixtures: true });

  const folderRow = explorerColumn(page, parityColumnIndex).locator('.row', { hasText: 'nested' });
  await folderRow.scrollIntoViewIfNeeded();
  await folderRow.dblclick();
  await expect(explorerColumn(page, nestedColumnIndex)).toBeVisible();

  const fileRow = explorerColumn(page, nestedColumnIndex).locator('.row', { hasText: 'details.txt' });
  await fileRow.dblclick();

  const popup = explorerDetailsPopup(page);
  await expect(popup).toBeVisible();
  await expect(popup).toContainText('Item details');
  await expect(popup).toContainText('Manifest ID');
});

test('raw explorer double-click opens the storage relationships popup without changing ticket assumptions', async ({
  page
}) => {
  await openExplorer(page, 'raw', { seedFixtures: true });

  const fileRow = explorerColumn(page, parityColumnIndex).locator('.row', { hasText: 'file-01.txt' });
  await fileRow.click();
  await expect(explorerHost(page).locator('.toolbar .btn[title="Open"]')).toBeEnabled();

  const ticketResponse = page.waitForResponse((response) => {
    return response.url().includes('/api/explorer/ticket') && response.ok();
  });
  await explorerHost(page).locator('.toolbar .btn[title="Open"]').click();
  await ticketResponse;

  await fileRow.dblclick();
  await expect(explorerDetailsPopup(page)).toBeVisible();
  await expect(explorerRelationshipsPanel(page)).toContainText('Connected file relationships');
  await expect(explorerRelationshipsPanel(page)).toContainText('Chunk count');
});
