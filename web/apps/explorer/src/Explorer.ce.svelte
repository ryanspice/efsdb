<svelte:options
  customElement={{
    tag: 'efsdb-explorer',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { BootstrapPayload, BootstrapTheme } from '@contracts/bootstrap';
  import { readBootstrapPayloadForApp } from '@utils/bootstrap/hostProps';
  import { getTheme, onThemeChange } from '@utils/bootstrap/themeBridge';
  import type { ColumnState, DetailsResponse, ExplorerItem, ExplorerLayout, ExplorerMode } from './lib/types';
  import { DataClient } from './lib/api/explorerClient';
  import { loadLayout, saveLayout } from './lib/layout/layoutStore';
  import { dragHandle } from './lib/actions/drag';

  import Toolbar from './components/Toolbar.svelte';
  import MillerColumns from './components/MillerColumns.svelte';
  import CoverFlow from './components/CoverFlow.svelte';
  import PreviewPanel from './components/PreviewPanel.svelte';
  import DetailsPopup from './components/DetailsPopup.svelte';

  type ExplorerBootstrapPayload = BootstrapPayload & {
    app: 'explorer';
    tag: 'efsdb-explorer';
    initial?: {
      path?: string;
      mode?: ExplorerMode;
    };
  };

  const bootstrap = readBootstrapPayloadForApp<ExplorerBootstrapPayload>('explorer');
  const apiBase = bootstrap.apiBase ?? '/api/explorer';
  const authBase = bootstrap.authBase ?? '/api/auth';
  const host = $host();
  const client = new DataClient();

  let mode = $state<ExplorerMode>(bootstrap.initial?.mode ?? 'natural');
  let columns = $state<ColumnState[]>([]);
  let activeItem = $state<ExplorerItem | null>(null);
  let layout = $state<ExplorerLayout>(loadLayout());
  let previewCollapsed = $state(false);
  let bootState = $state<'loading' | 'ready' | 'auth_required' | 'error'>('loading');
  let statusMessage = $state('');
  let whoAmI = $state<Record<string, unknown> | null>(null);
  let popupDetails = $state<DetailsResponse | null>(null);
  let popupLoading = $state(false);
  let popupError = $state('');

  let listTimer: number | null = null;
  let popupToken = 0;

  const effectiveCoverHeight = $derived.by(() => Math.round(layout.coverHeight * layout.scale));

  const activeColIndex = $derived.by(() => {
    for (let i = columns.length - 1; i >= 0; i--) {
      if (columns[i].selectedItem) {
        return i;
      }
    }

    return 0;
  });

  const activeCol = $derived.by(() => columns[activeColIndex] ?? null);
  const coverItems = $derived.by(() => activeCol?.items ?? []);
  const selectedName = $derived.by(() => activeCol?.selectedItem ?? null);
  const rawEnabled = $derived.by(() => {
    const entitlements = Array.isArray(whoAmI?.entitlements) ? (whoAmI?.entitlements as string[]) : [];
    return entitlements.includes('RAW_VIEW');
  });

  const breadcrumbs = $derived.by(() => {
    const last = columns[columns.length - 1];
    const currentPath = last?.path ?? '';
    const parts = currentPath ? currentPath.split('/').filter(Boolean) : [];
    const crumbs: { label: string; path: string }[] = [{ label: 'ROOT', path: '' }];

    let accum = '';
    for (const part of parts) {
      accum += (accum ? '/' : '') + part;
      crumbs.push({ label: part, path: accum });
    }

    return crumbs;
  });

  function applyTheme(theme: BootstrapTheme): void {
    host.setAttribute('theme', theme);
  }

  function normalizeTargetPath(targetPath: string, targetMode: ExplorerMode): string {
    const normalized = targetPath.split('?')[0]?.split('#')[0] ?? '';
    const trimmed = normalized.split('/').filter(Boolean).join('/');

    if (targetMode === 'natural' && trimmed.startsWith('system_')) {
      return '';
    }

    return trimmed;
  }

  function coverSelIdx(): number {
    const idx = coverItems.findIndex((item) => item.name === selectedName);
    return idx < 0 ? 0 : idx;
  }

  function clearStatus(): void {
    if (bootState !== 'auth_required') {
      statusMessage = '';
    }
  }

  async function hydrateSession(): Promise<boolean> {
    const refreshed = await client.refreshAccessToken();
    if (!refreshed) {
      bootState = 'auth_required';
      statusMessage = 'Sign in is required before the explorer can load.';
      return false;
    }

    whoAmI = await client.whoAmI();
    return true;
  }

  async function loadPath(targetPath: string): Promise<void> {
    clearStatus();

    try {
      targetPath = normalizeTargetPath(targetPath, mode);
      const parts = targetPath ? targetPath.split('/').filter(Boolean) : [];
      const newCols: ColumnState[] = [];

      const root = await client.list('', mode);
      newCols.push({
        path: '',
        items: root.items,
        selectedItem: parts[0] ?? null
      });

      let currentPath = '';
      for (let i = 0; i < parts.length; i++) {
        currentPath += (currentPath ? '/' : '') + parts[i];

        try {
          const data = await client.list(currentPath, mode);
          const prev = newCols[newCols.length - 1];
          const chosen = prev.items.find((item) => item.name === parts[i]);

          if (chosen && chosen.type === 'dir') {
            newCols.push({
              path: currentPath,
              items: data.items,
              selectedItem: parts[i + 1] ?? null
            });
          }
        } catch {
          // Ignore deep path fetch errors and keep the resolved columns.
        }
      }

      columns = newCols;
      const last = newCols[newCols.length - 1];
      if (last?.selectedItem) {
        const item = last.items.find((candidate) => candidate.name === last.selectedItem);
        activeItem = item ?? null;
      } else {
        activeItem = null;
      }

      bootState = 'ready';
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to load explorer';

      if (message.startsWith('HTTP 401')) {
        bootState = 'auth_required';
        statusMessage = 'Your session is no longer valid. Sign in again to continue.';
        return;
      }

      if (message.startsWith('HTTP 403') && mode === 'raw') {
        mode = 'natural';
        statusMessage = 'Raw inspection is not available for the current role. Showing decoded view instead.';
        await loadPath(targetPath);
        return;
      }

      bootState = 'error';
      statusMessage = message;
    }
  }

  function setMode(next: ExplorerMode): void {
    if (mode === next) {
      return;
    }

    if (next === 'raw' && !rawEnabled) {
      statusMessage = 'Raw inspection requires RAW_VIEW entitlement.';
      return;
    }

    mode = next;
    const last = columns[columns.length - 1];
    void loadPath(normalizeTargetPath(last?.path ?? '', next));
  }

  async function openActive(): Promise<void> {
    if (!activeItem || activeItem.type === 'dir') {
      return;
    }

    try {
      const pathValue = (activeItem.rawPath as string) || activeItem.name;
      const url = await client.getDownloadUrl(pathValue, mode);
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error: unknown) {
      statusMessage = error instanceof Error ? error.message : 'Unable to open the selected item.';
    }
  }

  async function openDetailsPopup(item: ExplorerItem): Promise<void> {
    const pathValue = (item.rawPath as string) || item.name;
    const token = ++popupToken;
    popupLoading = true;
    popupDetails = null;
    popupError = '';

    try {
      const details = await client.details(pathValue, mode);
      if (token !== popupToken) {
        return;
      }

      popupDetails = details;
    } catch (error: unknown) {
      if (token !== popupToken) {
        return;
      }

      popupError = error instanceof Error ? error.message : 'Unable to load the selected details.';
    } finally {
      if (token === popupToken) {
        popupLoading = false;
      }
    }
  }

  function closeDetailsPopup(): void {
    popupToken += 1;
    popupLoading = false;
    popupDetails = null;
    popupError = '';
  }

  function onScale(value: number): void {
    layout.scale = value;
    saveLayout(layout);
  }

  function applyCoverDelta(deltaY: number): void {
    layout.coverHeight = Math.max(150, Math.min(600, layout.coverHeight + deltaY));
  }

  function applyPreviewDelta(deltaX: number): void {
    layout.previewWidth = Math.max(200, Math.min(560, layout.previewWidth - deltaX));
  }

  function onSplitDone(): void {
    saveLayout(layout);
  }

  async function handleItemClick(colIndex: number, item: ExplorerItem): Promise<void> {
    activeItem = item;

    if (listTimer) {
      window.clearTimeout(listTimer);
      listTimer = null;
    }

    const newCols = columns.slice(0, colIndex + 1);
    newCols[colIndex] = { ...newCols[colIndex], selectedItem: item.name };

    if (item.type === 'dir') {
      const nextPath = (item.rawPath as string) || item.name;

      newCols.push({
        path: nextPath,
        items: [],
        selectedItem: null,
        loading: true
      });

      columns = newCols;

      listTimer = window.setTimeout(async () => {
        try {
          const data = await client.list(nextPath, mode);
          const targetIndex = colIndex + 1;
          if (columns[targetIndex]?.path === nextPath) {
            columns[targetIndex] = {
              ...columns[targetIndex],
              items: data.items,
              loading: false
            };
            columns = [...columns];
          }
        } catch (error: unknown) {
          const targetIndex = colIndex + 1;
          if (columns[targetIndex]?.path === nextPath) {
            columns[targetIndex] = { ...columns[targetIndex], loading: false };
            columns = [...columns];
          }

          statusMessage = error instanceof Error ? error.message : 'Unable to load the selected folder.';
        }
      }, 150);
    } else {
      columns = newCols;
    }
  }

  async function handleItemDoubleClick(colIndex: number, item: ExplorerItem): Promise<void> {
    await handleItemClick(colIndex, item);

    if (item.type === 'dir') {
      return;
    }

    await openDetailsPopup(item);
  }

  function coverNavToIndex(idx: number): void {
    const col = activeCol;
    if (!col) {
      return;
    }

    const item = col.items[idx];
    if (!item) {
      return;
    }

    void handleItemClick(activeColIndex, item);
  }

  function coverActivateIndex(idx: number): void {
    const col = activeCol;
    if (!col) {
      return;
    }

    const item = col.items[idx];
    if (!item) {
      return;
    }

    void handleItemDoubleClick(activeColIndex, item);
  }

  function togglePreview(): void {
    previewCollapsed = !previewCollapsed;
  }

  function onKey(event: KeyboardEvent): void {
    if (event.key === 'Escape' && (popupDetails !== null || popupLoading || popupError !== '')) {
      closeDetailsPopup();
      return;
    }

    const target = event.target as HTMLElement | null;
    const tag = target?.tagName?.toUpperCase();
    if (tag === 'INPUT' || tag === 'TEXTAREA') {
      return;
    }

    if (event.key === 'ArrowRight') {
      coverNavToIndex(Math.min(coverItems.length - 1, coverSelIdx() + 1));
    }

    if (event.key === 'ArrowLeft') {
      coverNavToIndex(Math.max(0, coverSelIdx() - 1));
    }
  }

  onMount(() => {
    applyTheme(getTheme());
    const removeThemeListener = onThemeChange((theme) => {
      applyTheme(theme);
    });

    client.setApiBase(apiBase);
    client.setAuthBase(authBase);

    let initial = bootstrap.initial?.path ?? '';
    if (!initial) {
      const currentUrl = new URL(window.location.href);
      initial = currentUrl.searchParams.get('path') || '';
    }

    void (async () => {
      const ready = await hydrateSession();
      if (!ready) {
        bootState = 'auth_required';
        return;
      }

      if (mode === 'raw' && !rawEnabled) {
        mode = 'natural';
      }

      await loadPath(normalizeTargetPath(initial, mode));
    })();

    window.addEventListener('keydown', onKey);

    return () => {
      if (listTimer) {
        window.clearTimeout(listTimer);
      }

      removeThemeListener();
      window.removeEventListener('keydown', onKey);
    };
  });
</script>

<div class="root" style={`--explorer-scale:${layout.scale};`}>
  {#if bootState === 'loading'}
    <div class="statusCard">
      <div class="statusTitle">Connecting to EFSDB…</div>
      <div class="statusCopy">Refreshing your session and loading the decoded filesystem view.</div>
    </div>
  {:else if bootState === 'auth_required'}
    <div class="statusCard error">
      <div class="statusTitle">Sign in required</div>
      <div class="statusCopy">{statusMessage}</div>
    </div>
  {:else}
    {#if statusMessage}
      <div class:banner={true} class:errorBanner={bootState === 'error'}>
        {statusMessage}
      </div>
    {/if}

    <div class="top">
      <Toolbar
        {mode}
        rawEnabled={rawEnabled}
        breadcrumbs={breadcrumbs}
        scale={layout.scale}
        canOpen={!!activeItem && activeItem.type !== 'dir'}
        onHome={() => {
          void loadPath('');
        }}
        onOpen={() => {
          void openActive();
        }}
        onSetMode={setMode}
        onScale={onScale}
        onCrumb={(crumbPath) => {
          void loadPath(crumbPath);
        }}
      />

      <div class="cover" data-testid="explorer-cover" style={`height:${effectiveCoverHeight}px`}>
        <CoverFlow
          items={coverItems}
          {selectedName}
          {mode}
          scale={layout.scale}
          onNavToIndex={coverNavToIndex}
          onActivateIndex={coverActivateIndex}
        />
      </div>

      <div
        class="splitY"
        use:dragHandle={{ axis: 'y', onDelta: applyCoverDelta, onDone: onSplitDone }}
        title="Resize coverflow"
        aria-hidden="true"
      ></div>
    </div>

    <div class="main">
      <div class="colsPane">
        <MillerColumns
          {mode}
          scale={layout.scale}
          {columns}
          onItemClick={handleItemClick}
          onItemDoubleClick={handleItemDoubleClick}
        />
      </div>

      <div
        class="splitX"
        use:dragHandle={{ axis: 'x', onDelta: applyPreviewDelta, onDone: onSplitDone }}
        title="Resize preview"
        aria-hidden="true"
      ></div>

      {#if !previewCollapsed}
        <PreviewPanel
          client={client}
          {mode}
          scale={layout.scale}
          activeItem={activeItem}
          widthPx={layout.previewWidth}
          onToggle={togglePreview}
        />
      {:else}
        <div class="previewCollapsed">
          <button class="btn" type="button" onclick={togglePreview}>Show Preview</button>
        </div>
      {/if}
    </div>
  {/if}

  {#if popupLoading || popupDetails !== null || popupError !== ''}
    <DetailsPopup
      details={popupDetails}
      {mode}
      loading={popupLoading}
      error={popupError}
      onClose={closeDetailsPopup}
    />
  {/if}
</div>

<style>
  :host {
    display: block;
    --bg: #0b0f14;
    --panel: #0f1520;
    --card: #121b28;
    --hover: rgba(255, 255, 255, 0.06);
    --border: rgba(255, 255, 255, 0.1);
    --text: rgba(255, 255, 255, 0.92);
    --muted: rgba(255, 255, 255, 0.6);
    --primary: #c6ff00;
    --primaryText: #10200d;
    --warn: #f59e0b;
    --info: #22c55e;
    --danger: #ef4444;
    --codeBg: rgba(0, 0, 0, 0.35);
  }

  :host([theme='light']) {
    --bg: #f7faef;
    --panel: #ffffff;
    --card: #f1f5e7;
    --hover: rgba(116, 145, 45, 0.1);
    --border: rgba(116, 145, 45, 0.18);
    --text: #1a2313;
    --muted: #5f7050;
    --primary: #c6ff00;
    --primaryText: #13210f;
    --warn: #b7791f;
    --info: #2f855a;
    --danger: #c05666;
    --codeBg: rgba(116, 145, 45, 0.08);
  }

  .root {
    background: var(--bg);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    font-family:
      'Segoe UI Variable',
      'Segoe UI',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;
  }

  .banner,
  .statusCard {
    padding: 14px 16px;
    border-bottom: 1px solid var(--border);
    background: color-mix(in oklab, var(--panel), transparent 10%);
  }

  .errorBanner,
  .statusCard.error {
    background: color-mix(in oklab, var(--danger), transparent 88%);
    border-bottom-color: color-mix(in oklab, var(--danger), transparent 70%);
  }

  .statusCard {
    min-height: 220px;
    display: grid;
    place-items: center;
    text-align: center;
    gap: 10px;
  }

  .statusTitle {
    font-size: 1.2rem;
    font-weight: 800;
  }

  .statusCopy {
    color: var(--muted);
    max-width: 34rem;
    line-height: 1.5;
  }

  .top {
    display: flex;
    flex-direction: column;
  }

  .cover {
    border-bottom: 1px solid var(--border);
    overflow: hidden;
  }

  .main {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 8px auto;
    min-height: 420px;
    height: min(72vh, 780px);
  }

  .colsPane {
    min-width: 0;
    overflow: auto;
  }

  .splitY {
    height: 8px;
    cursor: ns-resize;
    background: color-mix(in oklab, var(--border), transparent 40%);
  }

  .splitX {
    width: 8px;
    cursor: ew-resize;
    background: color-mix(in oklab, var(--border), transparent 40%);
  }

  .previewCollapsed {
    width: 40px;
    display: grid;
    place-items: center;
    border-left: 1px solid var(--border);
    background: var(--panel);
  }

  .btn {
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    cursor: pointer;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
</style>
