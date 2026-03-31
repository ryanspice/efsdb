<svelte:options
  customElement={{
    tag: 'efsdb-explorer',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import type { AuthResponse } from '@contracts/auth';
  import type { BootstrapPayload, BootstrapTheme } from '@contracts/bootstrap';
  import { readBootstrapPayloadForApp } from '@utils/bootstrap/hostProps';
  import { getTheme, onThemeChange } from '@utils/bootstrap/themeBridge';
  import { onMount, tick } from 'svelte';
  import { SvelteMap } from 'svelte/reactivity';
  import { dragHandle } from './lib/actions/drag';
  import { DataClient } from './lib/api/explorerClient';
  import { loadLayout, saveLayout } from './lib/layout/layoutStore';
  import type { ColumnState, DetailsResponse, ExplorerItem, ExplorerLayout, ExplorerMode } from './lib/types';

  import CoverFlow from './components/CoverFlow.svelte';
  import DetailsPopup from './components/DetailsPopup.svelte';
  import MillerColumns from './components/MillerColumns.svelte';
  import PreviewPanel from './components/PreviewPanel.svelte';
  import SearchDialog from './components/SearchDialog.svelte';
  import Toolbar from './components/Toolbar.svelte';
  import AppGuard from '../../../ui/components/shell/AppGuard.svelte';

  type ExplorerBootstrapPayload = BootstrapPayload & {
    app: 'explorer';
    tag: 'efsdb-explorer';
    initial?: {
      path?: string;
      mode?: ExplorerMode;
    };
  };

  const bootstrap = readBootstrapPayloadForApp<ExplorerBootstrapPayload>('explorer');
  const apiBase = bootstrap.apiBase ?? '/_efsdb/api/explorer';
  const authBase = bootstrap.authBase ?? '/_efsdb/api/auth';
  const host = $host();
  const client = new DataClient();
  const requestedInitialPath = bootstrap.initial?.path ?? '';

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

  let showSearchDialog = $state(false);
  let poppedOutFiles = $state<{ path: string; item: ExplorerItem }[]>([]);

  let listTimer: number | null = null;
  let popupToken = 0;
  let pathLoadController: AbortController | null = null;
  let popupController: AbortController | null = null;
  let pathLoadToken = 0;
  let prefetchHandle: number | null = null;
  let colsPaneEl = $state<HTMLDivElement | null>(null);
  let revealColumnToken = 0;

  const columnLoadControllers = new SvelteMap<number, AbortController>();

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
  const actualRole = $derived.by(() => (typeof whoAmI?.actualRole === 'string' ? whoAmI.actualRole : ''));
  const actualEntitlements = $derived.by(() =>
    Array.isArray(whoAmI?.actualEntitlements) ? (whoAmI.actualEntitlements as string[]) : []
  );

  const breadcrumbs = $derived.by(() => {
    const crumbs: { label: string; path: string }[] = [];
    for (const col of columns) {
      if (col.path === '') continue;
      const segs = col.path.split('/').filter(Boolean);
      const last = segs[segs.length - 1] ?? '';
      if (!last) continue;
      const label = last.charAt(0).toUpperCase() + last.slice(1);
      crumbs.push({ label, path: col.path });
    }
    if (crumbs.length === 0) {
      crumbs.push({ label: 'Staging', path: 'site/staging' });
    }
    return crumbs;
  });

  const activeEnvironment = $derived(
    breadcrumbs[0]?.label === 'Staging' || breadcrumbs[0]?.label === 'Production'
      ? breadcrumbs[0].label
      : 'Staging'
  );

  function applyTheme(theme: BootstrapTheme): void {
    host.setAttribute('theme', theme);
  }

  function normalizeTargetPath(targetPath: string, targetMode: ExplorerMode): string {
    const normalized = targetPath.split('?')[0]?.split('#')[0] ?? '';
    const parts = normalized.split('/').filter(Boolean);
    const trimmed = parts.join('/');
    const first = parts[0] ?? '';
    const looksLikeRawBucket = /^b_[a-f0-9]{24}$/i.test(first);
    const looksLikeRawPath =
      looksLikeRawBucket || parts[1] === 'manifests' || parts[1] === 'chunks';

    if (trimmed === '') {
      return '';
    }

    if (targetMode === 'raw') {
      if (looksLikeRawPath) {
        return trimmed;
      }

      return '';
    }

    if (looksLikeRawPath) {
      return '';
    }

    const entity = first;

    if (entity.startsWith('system_')) {
      return '';
    }

    if (parts[1] === 'manifests' || parts[1] === 'chunks') {
      return entity;
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

  function isAbortError(error: unknown): boolean {
    return error instanceof DOMException && error.name === 'AbortError';
  }

  function joinPath(parentPath: string, itemName: string): string {
    return parentPath ? `${parentPath}/${itemName}` : itemName;
  }

  function itemPath(item: ExplorerItem, parentPath = ''): string {
    if (mode === 'raw') {
      if (typeof item.rawPath === 'string' && item.rawPath !== '') {
        return item.rawPath;
      }

      if (typeof item.logicalPath === 'string' && item.logicalPath !== '') {
        return item.logicalPath;
      }

      return joinPath(parentPath, item.name);
    }

    if (typeof item.logicalPath === 'string' && item.logicalPath !== '') {
      return normalizeTargetPath(item.logicalPath, 'natural');
    }

    return normalizeTargetPath(joinPath(parentPath, item.name), 'natural');
  }

  function clearPendingColumnLoads(fromIndex = 0): void {
    for (const [index, controller] of columnLoadControllers.entries()) {
      if (index >= fromIndex) {
        controller.abort();
        columnLoadControllers.delete(index);
      }
    }
  }

  function cancelPrefetch(): void {
    if (prefetchHandle === null) {
      return;
    }

    const win = window as Window & {
      cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof win.cancelIdleCallback === 'function') {
      win.cancelIdleCallback(prefetchHandle);
    } else {
      window.clearTimeout(prefetchHandle);
    }

    prefetchHandle = null;
  }

  function scheduleIdle(callback: () => void): void {
    cancelPrefetch();

    const win = window as Window & {
      requestIdleCallback?: (
        handler: IdleRequestCallback,
        options?: IdleRequestOptions
      ) => number;
    };

    if (typeof win.requestIdleCallback === 'function') {
      prefetchHandle = win.requestIdleCallback(() => {
        prefetchHandle = null;
        callback();
      }, { timeout: 200 });
      return;
    }

    prefetchHandle = window.setTimeout(() => {
      prefetchHandle = null;
      callback();
    }, 80);
  }

  async function hydrateSession(): Promise<boolean> {
    const refreshed = await client.refreshAccessToken();
    if (!refreshed) {
      bootState = 'auth_required';
      statusMessage = 'Sign in is required before the explorer can load.';
      return false;
    }

    whoAmI = refreshed.user as Record<string, unknown>;
    return true;
  }

  function requestedPathOrCurrent(): string {
    if (columns.length > 0) {
      const lastColumn = columns[columns.length - 1];
      if (lastColumn?.path) {
        return lastColumn.path;
      }
    }

    if (requestedInitialPath) {
      return requestedInitialPath;
    }

    const currentUrl = new URL(window.location.href);
    return currentUrl.searchParams.get('path') || '';
  }

  async function loadPath(targetPath: string): Promise<void> {
    clearStatus();
    pathLoadController?.abort();
    clearPendingColumnLoads(0);
    const controller = new AbortController();
    pathLoadController = controller;
    const token = ++pathLoadToken;

    try {
      targetPath = normalizeTargetPath(targetPath, mode);
      const parts = targetPath ? targetPath.split('/').filter(Boolean) : [];
      const newCols: ColumnState[] = [];

      const root = await client.list('', mode, controller.signal);
      newCols.push({
        path: '',
        items: root.items,
        selectedItem: parts[0] ?? null
      });

      let currentPath = '';
      for (let i = 0; i < parts.length; i++) {
        currentPath += (currentPath ? '/' : '') + parts[i];

        try {
          const data = await client.list(currentPath, mode, controller.signal);
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

      if (token !== pathLoadToken) {
        return;
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
      void revealColumn(Math.max(0, newCols.length - 1));
    } catch (error: unknown) {
      if (isAbortError(error)) {
        return;
      }

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
    const item = activeItem;
    if (!item || item.type === 'dir') return;
    const parentPath = activeCol?.path ?? '';
    const fullPath = itemPath(item, parentPath);

    window.location.href = `/_efsdb/builder?path=${encodeURIComponent(fullPath)}`;
  }

  async function openDetailsPopup(item: ExplorerItem, parentPath = ''): Promise<void> {
    const pathValue = itemPath(item, parentPath);
    const token = ++popupToken;
    popupController?.abort();
    popupController = new AbortController();
    popupLoading = true;
    popupDetails = null;
    popupError = '';

    try {
      const details = await client.details(pathValue, mode, popupController.signal);
      if (token !== popupToken) {
        return;
      }

      popupDetails = details;
    } catch (error: unknown) {
      if (isAbortError(error)) {
        return;
      }

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
    popupController?.abort();
    popupController = null;
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
    const maxWidth = Math.max(560, window.innerWidth * 0.5);
    layout.previewWidth = Math.max(200, Math.min(maxWidth, layout.previewWidth - deltaX));
  }

  function onSplitDone(): void {
    saveLayout(layout);
  }

  async function revealColumn(index: number): Promise<void> {
    if (index < 0) {
      return;
    }

    const token = ++revealColumnToken;
    await tick();

    if (token !== revealColumnToken) {
      return;
    }

    const pane = colsPaneEl;
    if (!pane) {
      return;
    }

    const target = pane.querySelector<HTMLElement>(`[data-testid="explorer-column-${index}"]`);
    if (!target) {
      return;
    }

    const paneRect = pane.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    if (targetRect.left >= paneRect.left && targetRect.right <= paneRect.right) {
      return;
    }

    target.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  async function handleItemClick(colIndex: number, item: ExplorerItem): Promise<void> {
    activeItem = item;

    if (listTimer) {
      window.clearTimeout(listTimer);
      listTimer = null;
    }

    clearPendingColumnLoads(colIndex + 1);

    const newCols = columns.slice(0, colIndex + 1);
    newCols[colIndex] = { ...newCols[colIndex], selectedItem: item.name };

    if (item.type === 'dir') {
      const nextPath = itemPath(item, columns[colIndex]?.path ?? '');
      const targetIndex = colIndex + 1;

      newCols.push({
        path: nextPath,
        items: [],
        selectedItem: null,
        loading: true
      });

      columns = newCols;
      void revealColumn(targetIndex);

      listTimer = window.setTimeout(async () => {
        const controller = new AbortController();
        columnLoadControllers.set(targetIndex, controller);

        try {
          const data = await client.list(nextPath, mode, controller.signal);
          if (columns[targetIndex]?.path === nextPath) {
            columns[targetIndex] = {
              ...columns[targetIndex],
              items: data.items,
              loading: false
            };
            columns = [...columns];
            void revealColumn(targetIndex);
          }
        } catch (error: unknown) {
          if (isAbortError(error)) {
            return;
          }

          if (columns[targetIndex]?.path === nextPath) {
            columns[targetIndex] = { ...columns[targetIndex], loading: false };
            columns = [...columns];
          }

          statusMessage = error instanceof Error ? error.message : 'Unable to load the selected folder.';
        } finally {
          if (columnLoadControllers.get(targetIndex) === controller) {
            columnLoadControllers.delete(targetIndex);
          }
        }
      }, 150);
    } else {
      columns = newCols;
      void revealColumn(colIndex);
    }
  }

  async function handleItemDoubleClick(colIndex: number, item: ExplorerItem): Promise<void> {
    await handleItemClick(colIndex, item);

    if (item.type === 'dir') {
      return;
    }

    const parentPath = columns[colIndex]?.path ?? '';
    const fullPath = itemPath(item, parentPath);

    // If it's a route, try to open the route preview instead of builder
    if (mode === 'natural' && (fullPath.includes('/routes/') || item.ext === 'route')) {
      try {
        const runtimeInfo = await client.siteRuntime(fullPath, mode);
        if (runtimeInfo?.preview?.url) {
          window.open(runtimeInfo.preview.url, '_blank');
          return;
        }
      } catch (e) {
        // Fallback to builder
      }
    }

    window.location.href = `/_efsdb/builder?path=${encodeURIComponent(fullPath)}`;
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

  $effect(() => {
    if (bootState !== 'ready' || !activeCol || selectedName === null) {
      cancelPrefetch();
      return;
    }

    const selectedIndex = activeCol.items.findIndex((item) => item.name === selectedName);
    if (selectedIndex < 0) {
      cancelPrefetch();
      return;
    }

    const selectedItem = activeCol.items[selectedIndex];
    const candidates = activeCol.items
      .slice(Math.max(0, selectedIndex - 2), Math.min(activeCol.items.length, selectedIndex + 3))
      .filter((item) => item.type === 'file');

    scheduleIdle(() => {
      for (const item of candidates) {
        void client.prefetchDetails(itemPath(item, activeCol.path), mode);
      }

      if (selectedItem?.type === 'file') {
        void client.prefetchDownloadTicket(itemPath(selectedItem, activeCol.path), mode);
      }
    });

    return () => {
      cancelPrefetch();
    };
  });

  onMount(() => {
    applyTheme(getTheme());
    const removeThemeListener = onThemeChange((theme) => {
      applyTheme(theme);
    });

    client.setApiBase(apiBase);
    client.setAuthBase(authBase);

    void (async () => {
      const ready = await hydrateSession();
      if (!ready) {
        bootState = 'auth_required';
        return;
      }

      if (mode === 'raw' && !rawEnabled) {
        mode = 'natural';
      }

      await loadPath(normalizeTargetPath(requestedPathOrCurrent(), mode));
    })();

    window.addEventListener('keydown', onKey);

    return () => {
      if (listTimer) {
        window.clearTimeout(listTimer);
      }

      pathLoadController?.abort();
      popupController?.abort();
      clearPendingColumnLoads(0);
      cancelPrefetch();
      removeThemeListener();
      window.removeEventListener('keydown', onKey);
    };
  });
</script>

<div class="root" style={`--explorer-scale:${layout.scale};`}>
  <AppGuard
    guardState={bootState}
    {authBase}
    loadingTitle="Connecting to EFSDB..."
    loadingCopy="Refreshing your session and loading the decoded filesystem view."
    authCopy={statusMessage || 'Sign in is required before the explorer can load.'}
    errorTitle="Unable to load Explorer"
    errorCopy={statusMessage || 'The explorer could not load.'}
    onAuthenticated={async (auth: AuthResponse) => {
      whoAmI = auth.user as Record<string, unknown>;
      bootState = 'loading';
      statusMessage = '';
      if (mode === 'raw' && !rawEnabled) {
        mode = 'natural';
      }
      await loadPath(normalizeTargetPath(requestedPathOrCurrent(), mode));
    }}
    onRetry={async () => {
      bootState = 'loading';
      statusMessage = '';
      const ready = await hydrateSession();
      if (!ready) {
        return;
      }
      if (mode === 'raw' && !rawEnabled) {
        mode = 'natural';
      }
      await loadPath(normalizeTargetPath(requestedPathOrCurrent(), mode));
    }}
  >
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
        onSearch={() => showSearchDialog = true}
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
      <div class="colsPane" bind:this={colsPaneEl}>
        <MillerColumns
          {mode}
          scale={layout.scale}
          {columns}
          onItemClick={handleItemClick}
          onItemDoubleClick={handleItemDoubleClick}
        />
      </div>

      <SearchDialog
        bind:open={showSearchDialog}
        {client}
        onNavigate={(path) => {
          void loadPath(path);
        }}
      />

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
          currentPath={activeCol?.path ?? ''}
          widthPx={layout.previewWidth}
          {actualRole}
          {actualEntitlements}
          onToggle={togglePreview}
          onPopOut={(item, path) => {
            if (!poppedOutFiles.some(f => f.path === path)) {
              poppedOutFiles = [...poppedOutFiles, { item, path }];
            }
          }}
          onSaved={async (savedPath) => {
            statusMessage = `Saved ${savedPath}`;
            await loadPath(savedPath);
          }}
          onDeleted={async (deletedPath) => {
            statusMessage = `Deleted ${deletedPath}`;
            const parent = deletedPath.split('/').slice(0, -1).join('/');
            await loadPath(parent);
          }}
          onRenamed={async (oldPath, newPath) => {
            statusMessage = `Renamed to ${newPath}`;
            await loadPath(newPath);
          }}
          onDuplicated={async (newPath) => {
            statusMessage = `Duplicated to ${newPath}`;
            await loadPath(newPath);
          }}
        />
      {:else}
        <div class="previewCollapsed">
          <button class="btn" type="button" onclick={togglePreview}>Show Preview</button>
        </div>
      {/if}
    </div>
  </AppGuard>

  {#if popupLoading || popupDetails !== null || popupError !== ''}
    <DetailsPopup
      details={popupDetails}
      {mode}
      loading={popupLoading}
      error={popupError}
      onClose={closeDetailsPopup}
    />
  {/if}

  {#each poppedOutFiles as file (file.path)}
    <ToolWindow
      title={file.item.name}
      open={true}
      modal={false}
      defaultWidth={600}
      defaultHeight={400}
      onClose={() => {
        poppedOutFiles = poppedOutFiles.filter(f => f.path !== file.path);
      }}
    >
      <div style="display: flex; flex-direction: column; height: 100%;">
        <div style="padding: 8px; border-bottom: 1px solid var(--border); font-family: monospace; font-size: 12px; opacity: 0.8; flex-shrink: 0;">
          {file.path}
        </div>
        <div style="flex: 1 1 auto; min-height: 0; position: relative;">
          <!-- We need a simpler preview or code editor for popped out files -->
          {#await client.downloadText(file.path, mode)}
            <div style="padding: 16px;">Loading...</div>
          {:then text}
            <CodeEditor
              value={text}
              language={file.item.ext || 'text'}
              readonly={true}
              autofocus={false}
              contextLabel={file.item.name}
            />
          {:catch error}
            <div style="padding: 16px; color: var(--danger);">Failed to load text: {error.message}</div>
          {/await}
        </div>
      </div>
    </ToolWindow>
  {/each}
</div>

<style>
  :host,
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    inline-size: 100%;
    block-size: 100%;
    max-block-size: 100%;
    min-block-size: 0;
    overflow: hidden;
    overscroll-behavior: none;
    --bg: #030712;
    --panel: transparent;
    --card: #111827;
    --hover: rgba(255, 255, 255, 0.06);
    --border: rgba(255, 255, 255, 0.1);
    --text: #f8fafc;
    --muted: #94a3b8;
    --primary: var(--accent, #f8fafc);
    --primaryText: var(--shell-pill-text, #0f172a);
    --warn: #f59e0b;
    --info: #cbd5e1;
    --danger: #ef4444;
    --codeBg: rgba(255, 255, 255, 0.04);

    /*
     * Additive Explorer-side `--efs-*` compatibility bridge.
     *
     * Explorer-local variables above remain the active styling authority.
     * These aliases only expose a thin shared-token surface for later parity work.
     */
    --efs-bg-app: var(--bg);
    --efs-bg-canvas: var(--bg);
    --efs-bg-surface-1: var(--panel);
    --efs-bg-surface-2: var(--card);
    --efs-surface-panel: var(--panel);
    --efs-surface-control: var(--card);
    --efs-text-primary: var(--text);
    --efs-text-default: var(--text);
    --efs-text-secondary: var(--muted);
    --efs-text-subtle: var(--muted);
    --efs-text-tertiary: var(--muted);
    --efs-text-muted: var(--muted);
    --efs-border-subtle: var(--border);
    --efs-border-default: var(--border);
    --efs-border-panel: var(--border);
    --efs-border-field: var(--border);
    --efs-border-strong: color-mix(in oklab, var(--border), var(--text) 18%);
    --efs-border-focus: color-mix(in oklab, var(--primary), transparent 55%);
    --efs-accent-primary: var(--primary);
    --efs-accent-primary-hover: var(--primary);
    --efs-accent-soft: color-mix(in oklab, var(--primary), transparent 84%);
    --efs-font-sans:
      'Segoe UI Variable',
      'Segoe UI',
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      sans-serif;
    --efs-font-body-sm: 12px/1.45 var(--efs-font-sans);
    --efs-font-label: 11px/1.35 var(--efs-font-sans);
    --efs-space-2: 8px;
    --efs-space-3: 12px;
    --efs-radius-md: 10px;
    --efs-radius-panel: 12px;
    --efs-size-control-compact: 32px;
    --efs-size-toolbar: 44px;
  }

  :host([theme='light']) {
    --bg: #f8fafc;
    --panel: #ffffff;
    --card: #ffffff;
    --hover: rgba(15, 23, 42, 0.04);
    --border: #e2e8f0;
    --text: #0f172a;
    --muted: #64748b;
    --primary: var(--accent, #0f172a);
    --primaryText: var(--shell-pill-text, #ffffff);
    --warn: #b7791f;
    --info: #475569;
    --danger: #dc2626;
    --codeBg: rgba(15, 23, 42, 0.04);
  }

  :host([theme='green']) {
    --bg: #050804;
    --panel: rgba(12, 20, 10, 0.8);
    --card: rgba(28, 39, 26, 0.6);
    --hover: rgba(198, 255, 0, 0.04);
    --border: rgba(198, 255, 0, 0.12);
    --text: #e7eddc;
    --muted: #a2b392;
    --primary: var(--accent, #c6ff00);
    --primaryText: var(--shell-pill-text, #050804);
    --warn: #f59e0b;
    --info: #cbd5e1;
    --danger: #ef4444;
    --codeBg: rgba(198, 255, 0, 0.03);
  }

  .root {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    inline-size: 100%;
    min-inline-size: 0;
    min-block-size: 0;
    block-size: 100%;
    max-block-size: 100%;
    background: var(--panel);
    color: var(--text);
  }

  .banner,
  .statusCard {
    padding: 14px 18px;
    border-bottom: 1px solid var(--border);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 2%),
        color-mix(in oklab, var(--panel), black 4%)
      );
  }

  .errorBanner,
  .statusCard.error {
    background: color-mix(in oklab, var(--danger), transparent 88%);
    border-bottom-color: color-mix(in oklab, var(--danger), transparent 70%);
  }

  .statusCard {
    flex: 1 1 auto;
    min-height: 220px;
    display: grid;
    place-items: center;
    text-align: center;
    gap: 10px;
    padding-inline: 24px;
  }

  .statusTitle {
    font: var(--efs-font-title-md);
    font-weight: 800;
  }

  .statusCopy {
    color: var(--muted);
    max-width: 34rem;
    line-height: 1.5;
  }

  .top {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    min-height: 0;
    gap: 6px;
    padding: 8px 8px 6px;
    overflow: hidden;
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 1%),
        color-mix(in oklab, var(--panel), transparent 8%)
      );
    box-shadow:
      inset 0 -1px 0 color-mix(in oklab, var(--border), var(--text) 8%),
      inset 0 1px 0 color-mix(in oklab, white, transparent 97%);
  }

  .top::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 1px;
    background: color-mix(in oklab, white, transparent 95%);
    pointer-events: none;
  }

  .cover {
    position: relative;
    margin: 0 0 0;
    flex: 0 0 auto;
    min-block-size: 150px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 7%);
    border-radius: 16px;
    overflow: hidden;
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 1%),
        color-mix(in oklab, var(--panel), transparent 10%)
      );
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 97%),
      inset 0 -1px 0 color-mix(in oklab, var(--border), transparent 18%);
  }

  .main {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 8px auto;
    flex: 1 1 0%;
    min-height: 0;
    min-block-size: 0;
    overflow: hidden;
    background: color-mix(in oklab, var(--panel), var(--bg) 12%);
    box-shadow: inset 0 1px 0 color-mix(in oklab, white, transparent 98%);
  }

  .colsPane {
    min-width: 0;
    min-height: 0;
    display: flex;
    overflow: hidden;
    overscroll-behavior: contain;
    background: color-mix(in oklab, var(--panel), var(--bg) 10%);
    box-shadow: inset -1px 0 0 color-mix(in oklab, var(--border), transparent 18%);
  }

  .splitY,
  .splitX {
    position: relative;
    background: transparent;
  }

  .splitY::after,
  .splitX::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(
        180deg,
        transparent,
        color-mix(in oklab, var(--border), var(--text) 10%),
        transparent
      );
    opacity: 0.55;
  }

  .splitY::before,
  .splitX::before {
    content: '';
    position: absolute;
    inset: 50% auto auto 50%;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: color-mix(in oklab, var(--border), var(--text) 12%);
    box-shadow:
      0 0 0 1px color-mix(in oklab, var(--bg), transparent 22%),
      0 1px 0 color-mix(in oklab, white, transparent 92%);
    opacity: 0.75;
    pointer-events: none;
  }

  .splitY {
    height: 8px;
    cursor: ns-resize;
    margin: 0 2px;
  }

  .splitY::before {
    width: 42px;
    height: 2px;
  }

  .splitX {
    width: 8px;
    cursor: ew-resize;
  }

  .splitX::before {
    width: 2px;
    height: 42px;
  }

  .splitX::after {
    background:
      linear-gradient(
        90deg,
        transparent,
        color-mix(in oklab, var(--border), var(--text) 10%),
        transparent
      );
  }

  .previewCollapsed {
    min-width: 48px;
    width: 48px;
    flex: 0 0 48px;
    min-height: 0;
    display: grid;
    place-items: center;
    border-left: 1px solid color-mix(in oklab, var(--border), var(--text) 8%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 2%),
        color-mix(in oklab, var(--panel), black 6%)
      );
    box-shadow:
      inset 1px 0 0 color-mix(in oklab, white, transparent 97%),
      inset 0 1px 0 color-mix(in oklab, white, transparent 98%);
  }

  .btn {
    min-height: 42px;
    padding: 12px 11px;
    border-radius: 16px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 3%),
        color-mix(in oklab, var(--card), black 4%)
      );
    color: var(--text);
    cursor: pointer;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font: var(--efs-font-label);
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    box-shadow: inset 0 1px 0 color-mix(in oklab, white, transparent 95%);
    transition:
      background 120ms ease,
      border-color 120ms ease,
      box-shadow 120ms ease,
      transform 120ms ease;
  }

  .btn:hover {
    background: color-mix(in oklab, var(--card), var(--text) 4%);
    border-color: color-mix(in oklab, var(--border), var(--text) 16%);
    box-shadow:
      0 8px 18px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%);
    transform: translateY(-1px);
  }
</style>
