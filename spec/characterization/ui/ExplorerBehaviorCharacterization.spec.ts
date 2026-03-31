import { expect, test, type Page } from '@playwright/test';
import { openExplorer } from './helpers/auth';
import {
  explorerColumn,
  explorerColumnList,
  explorerCover,
  explorerHost,
  explorerPreviewPanel,
  explorerScaleInput
} from './helpers/selectors';

test.describe.configure({ timeout: 60_000 });

async function explorerColumnCount(page: Page): Promise<number> {
  return await explorerHost(page).locator('section[data-testid^="explorer-column-"]').count();
}

async function lastExplorerColumnIndex(page: Page): Promise<number> {
  await expect.poll(() => explorerColumnCount(page)).toBeGreaterThan(0);
  return (await explorerColumnCount(page)) - 1;
}

async function currentContentColumn(page: Page) {
  return explorerColumn(page, await lastExplorerColumnIndex(page));
}

test('drag-to-scrub selects rows and wheel scrolling works when the column overflows', async ({
  page
}) => {
  await openExplorer(page, 'natural', { seedFixtures: true });

  const contentIndex = await lastExplorerColumnIndex(page);
  const column = explorerColumn(page, contentIndex);
  const list = explorerColumnList(page, contentIndex);
  const startRow = column.locator('.row', { hasText: 'file-01.txt' });
  const targetRow = column.locator('.row', { hasText: 'file-04.txt' });

  await expect(startRow).toBeVisible();
  await expect(targetRow).toBeVisible();

  const startBox = await startRow.boundingBox();
  const targetBox = await targetRow.boundingBox();
  expect(startBox).not.toBeNull();
  expect(targetBox).not.toBeNull();
  if (!startBox || !targetBox) {
    throw new Error('Explorer row bounding box unavailable');
  }

  const pointerId = 1;
  const startPoint = {
    x: startBox.x + startBox.width / 2,
    y: startBox.y + startBox.height / 2
  };
  const targetPoint = {
    x: targetBox.x + targetBox.width / 2,
    y: targetBox.y + targetBox.height / 2
  };

  await startRow.dispatchEvent('pointerdown', {
    pointerId,
    pointerType: 'mouse',
    button: 0,
    buttons: 1,
    clientX: startPoint.x,
    clientY: startPoint.y
  });
  await page.evaluate(
    ({ pointerId, clientX, clientY }) => {
      window.dispatchEvent(
        new PointerEvent('pointermove', {
          pointerId,
          pointerType: 'mouse',
          button: 0,
          buttons: 1,
          clientX,
          clientY,
          bubbles: true
        })
      );
    },
    {
      pointerId,
      clientX: startPoint.x,
      clientY: startPoint.y + 12
    }
  );
  await page.evaluate(
    ({ pointerId, clientX, clientY }) => {
      window.dispatchEvent(
        new PointerEvent('pointermove', {
          pointerId,
          pointerType: 'mouse',
          button: 0,
          buttons: 1,
          clientX,
          clientY,
          bubbles: true
        })
      );
    },
    {
      pointerId,
      clientX: targetPoint.x,
      clientY: targetPoint.y
    }
  );
  await page.evaluate(
    ({ pointerId, clientX, clientY }) => {
      window.dispatchEvent(
        new PointerEvent('pointerup', {
          pointerId,
          pointerType: 'mouse',
          button: 0,
          buttons: 0,
          clientX,
          clientY,
          bubbles: true
        })
      );
    },
    {
      pointerId,
      clientX: targetPoint.x,
      clientY: targetPoint.y
    }
  );

  await expect(column.locator('.row.active')).toContainText('file-04.txt');

  const metrics = await list.evaluate((node) => ({
    clientHeight: node.clientHeight,
    scrollHeight: node.scrollHeight,
    scrollTop: node.scrollTop
  }));

  if (metrics.scrollHeight > metrics.clientHeight) {
    await list.hover();
    await list.dispatchEvent('wheel', { deltaY: 140 });
    await expect.poll(() => list.evaluate((node) => node.scrollTop)).toBeGreaterThan(metrics.scrollTop);
  }
});

test('global explorer scale affects coverflow columns and preview consistently', async ({ page }) => {
  await openExplorer(page, 'natural', { seedFixtures: true });

  const contentIndex = await lastExplorerColumnIndex(page);
  await explorerColumn(page, contentIndex).locator('.row', { hasText: 'file-01.txt' }).click();

  const cover = explorerCover(page);
  const column = explorerColumn(page, contentIndex);
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

test('double-click folder opens a nested column and double-click file routes into builder', async ({
  page
}) => {
  await openExplorer(page, 'natural', { seedFixtures: true });

  const contentIndex = await lastExplorerColumnIndex(page);
  const folderRow = explorerColumn(page, contentIndex).locator('.row', { hasText: 'nested' });
  const beforeCount = await explorerColumnCount(page);
  await folderRow.scrollIntoViewIfNeeded();
  await folderRow.dblclick();

  await expect.poll(() => explorerColumnCount(page)).toBe(beforeCount + 1);

  const nestedIndex = await lastExplorerColumnIndex(page);
  const fileRow = explorerColumn(page, nestedIndex).locator('.row', { hasText: 'details.txt' });
  const builderNavigation = page.waitForURL((url) => {
    return url.pathname.replace(/\/+$/, '') === '/_efsdb/builder';
  });
  await fileRow.dblclick();
  await builderNavigation;

  const builderPath = new URL(page.url()).searchParams.get('path');
  expect(builderPath).toBe('site/production/content/explorer-parity/nested/details.txt');
});

test('raw explorer keeps storage inspection separate from logical file rows', async ({ page }) => {
  await openExplorer(page, 'raw', { path: 'public_workspace_files', seedFixtures: true });

  const rootColumn = explorerColumn(page, 0);
  await rootColumn.locator('.row', { hasText: 'public_workspace_files' }).dblclick();

  const entityColumn = explorerColumn(page, 1);
  await expect(entityColumn.locator('.row', { hasText: 'manifests' })).toBeVisible();
  await expect(entityColumn.locator('.row', { hasText: 'chunks' })).toBeVisible();
  await expect(entityColumn.locator('.row', { hasText: 'file-01.txt' })).toHaveCount(0);
  await expect(entityColumn.locator('.row', { hasText: 'nested' })).toHaveCount(0);
});

test('raw explorer open action routes the selected manifest into builder', async ({ page }) => {
  await openExplorer(page, 'raw', { path: 'public_workspace_files', seedFixtures: true });

  const rootColumn = explorerColumn(page, 0);
  await rootColumn.locator('.row', { hasText: 'public_workspace_files' }).dblclick();

  const entityColumn = explorerColumn(page, 1);
  await entityColumn.locator('.row', { hasText: 'manifests' }).dblclick();

  const manifestColumn = explorerColumn(page, 2);
  const manifestRow = manifestColumn.locator('.row').first();
  await expect(manifestRow).toBeVisible();
  await manifestRow.click();

  const openButton = explorerHost(page).getByRole('button', { name: 'Open in Builder' });
  await expect(openButton).toBeEnabled();

  const builderNavigation = page.waitForURL((url) => {
    return url.pathname.replace(/\/+$/, '') === '/_efsdb/builder';
  });
  await openButton.click();
  await builderNavigation;

  const builderPath = new URL(page.url()).searchParams.get('path') ?? '';
  expect(builderPath).toContain('public_workspace_files/manifests/');
  expect(builderPath.endsWith('.m')).toBeTruthy();
});

test('raw explorer exposes manifest and chunk storage trees for privileged inspection', async ({
  page
}) => {
  await openExplorer(page, 'raw', { path: 'public_workspace_files', seedFixtures: true });

  const rootColumn = explorerColumn(page, 0);
  await rootColumn.locator('.row', { hasText: 'public_workspace_files' }).dblclick();

  const entityColumn = explorerColumn(page, 1);
  await expect(entityColumn.locator('.row', { hasText: 'manifests' })).toBeVisible();
  await expect(entityColumn.locator('.row', { hasText: 'chunks' })).toBeVisible();

  await entityColumn.locator('.row', { hasText: 'manifests' }).dblclick();
  const manifestColumn = explorerColumn(page, 2);
  await expect(manifestColumn.locator('.row').first()).toBeVisible();

  await entityColumn.locator('.row', { hasText: 'chunks' }).dblclick();
  const chunkLevelOne = explorerColumn(page, 2);
  await expect(chunkLevelOne.locator('.row').first()).toBeVisible();

  const firstChunkBranch = chunkLevelOne.locator('.row').first();
  await firstChunkBranch.dblclick();
  await expect(explorerColumn(page, 3).locator('.row').first()).toBeVisible();

  await explorerColumn(page, 3).locator('.row').first().dblclick();
  await expect(explorerColumn(page, 4).locator('.row').first()).toBeVisible();
});

test('natural explorer previews text read-only and routes edits into builder', async ({ page }) => {
  await openExplorer(page, 'natural', { seedFixtures: true });

  const contentColumn = await currentContentColumn(page);
  const targetRow = contentColumn.locator('.row', { hasText: 'file-01.txt' });
  await targetRow.click();

  const preview = explorerPreviewPanel(page);
  await expect(preview.locator('.name', { hasText: 'file-01.txt' })).toBeVisible();
  await expect(preview.getByText('Read-only text file')).toBeVisible();
  await expect(preview.locator('[data-testid="explorer-save-button"]')).toHaveCount(0);

  const openButton = preview.getByRole('button', { name: 'Open in Builder' });
  await expect(openButton).toBeEnabled();

  const builderNavigation = page.waitForURL((url) => {
    return url.pathname.replace(/\/+$/, '') === '/_efsdb/builder';
  });
  await openButton.click();
  await builderNavigation;

  const builderPath = new URL(page.url()).searchParams.get('path');
  expect(builderPath).toBe('site/production/content/explorer-parity/file-01.txt');
});
