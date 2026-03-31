<script lang="ts">
  import { onDestroy } from 'svelte';
  import { dragScroll } from '../lib/actions/dragScroll';
  import type { ColumnState, ExplorerItem, ExplorerMode } from '../lib/types';

  type Props = {
    mode: ExplorerMode;
    scale: number;
    columns: ColumnState[];
    onItemClick: (colIndex: number, item: ExplorerItem) => void;
    onItemDoubleClick?: (colIndex: number, item: ExplorerItem) => void;
  };

  let { mode, scale, columns, onItemClick, onItemDoubleClick } = $props<Props>();

  const scrubThreshold = 6;
  const scrubAutoScrollEdge = 40;
  const scrubAutoScrollMaxStep = 18;

  let scrubPointerId: number | null = null;
  let scrubColIndex = -1;
  let scrubStartX = 0;
  let scrubStartY = 0;
  let scrubStartItemName = '';
  let scrubPointerX = 0;
  let scrubPointerY = 0;
  let scrubActive = false;
  let lastScrubKey = '';
  let suppressClicksUntil = 0;
  let scrubRoot: Document | ShadowRoot | null = null;
  let scrubAutoScrollFrame: number | null = null;

  // File upload logic removed as part of tightening the Builder/Explorer split.

  function iconFor(item: ExplorerItem) {
    const siteKind = naturalSiteKind(item);
    if (siteKind !== '') {
      switch (siteKind) {
        case 'site-root':
          return '🧭';
        case 'staging-dir':
          return '🧪';
        case 'production-dir':
          return '🚀';
        case 'routes-dir':
          return '🛣️';
        case 'layouts-dir':
          return '🧱';
        case 'components-dir':
          return '🧩';
        case 'content-dir':
          return '📝';
        case 'assets-dir':
          return '🖼️';
        case 'meta-dir':
          return '🏷️';
        case 'route-php':
          return '🐘';
        case 'layout-php':
          return '🧱';
        case 'component-svelte':
          return '⚡';
        case 'content-json':
          return '🧾';
        case 'meta-json':
          return '🏷️';
        default:
          return '📄';
      }
    }

    const systemKind = naturalSystemKind(item);
    if (systemKind !== '') {
      switch (systemKind) {
        case 'system-root':
          return '🗄️';
        case 'users-dir':
          return '👥';
        case 'roles-dir':
          return '🏷️';
        case 'settings-dir':
          return '⚙️';
        case 'user-json':
          return '👤';
        case 'role-json':
          return '🏷️';
        case 'settings-json':
          return '⚙️';
        default:
          return '🧾';
      }
    }

    if (item.type === 'dir') return mode === 'raw' ? '🗂️' : '📁';
    if (item.kind === 'manifest') return '📜';
    if (item.kind === 'chunk') return '🧩';
    return '📄';
  }

  function labelClass(item: ExplorerItem) {
    if (naturalSiteKind(item) !== '') return 'label siteLabel';
    if (naturalSystemKind(item) !== '') return 'label systemLabel';
    if (mode !== 'raw') return 'label';
    if (item.kind === 'manifest') return 'label warn';
    if (item.kind === 'chunk') return 'label info';
    return 'label muted';
  }

  function naturalSystemPath(item: ExplorerItem): string {
    if (mode === 'raw') {
      return '';
    }

    const logicalPath = typeof item.logicalPath === 'string' ? item.logicalPath.trim().replace(/^\/+|\/+$/g, '') : '';
    if (logicalPath.startsWith('system/')) {
      return logicalPath;
    }

    const rawPath = typeof item.rawPath === 'string' ? item.rawPath.trim().replace(/^\/+|\/+$/g, '') : '';
    if (rawPath === 'system' || rawPath.startsWith('system/')) {
      return rawPath;
    }

    return '';
  }

  function naturalSitePath(item: ExplorerItem): string {
    if (mode === 'raw') {
      return '';
    }

    const logicalPath = typeof item.logicalPath === 'string' ? item.logicalPath.trim().replace(/^\/+|\/+$/g, '') : '';
    if (logicalPath === 'site' || logicalPath.startsWith('site/')) {
      return logicalPath;
    }

    const rawPath = typeof item.rawPath === 'string' ? item.rawPath.trim().replace(/^\/+|\/+$/g, '') : '';
    if (rawPath === 'site' || rawPath.startsWith('site/')) {
      return rawPath;
    }

    return '';
  }

  function naturalSystemKind(item: ExplorerItem): string {
    const path = naturalSystemPath(item);
    if (path === '') {
      return '';
    }

    if (item.type === 'dir') {
      switch (path) {
        case 'system':
          return 'system-root';
        case 'system/users':
          return 'users-dir';
        case 'system/roles':
          return 'roles-dir';
        case 'system/settings':
          return 'settings-dir';
        default:
          return 'system-dir';
      }
    }

    switch (item.entity) {
      case 'system_users':
        return 'user-json';
      case 'system_roles':
        return 'role-json';
      case 'system_settings':
        return 'settings-json';
      default:
        return 'system-json';
    }
  }

  function naturalSiteKind(item: ExplorerItem): string {
    const path = naturalSitePath(item);
    if (path === '') {
      return '';
    }

    if (item.type === 'dir') {
      switch (path) {
        case 'site':
          return 'site-root';
        case 'site/staging':
          return 'staging-dir';
        case 'site/production':
          return 'production-dir';
      }

      if (path.endsWith('/routes')) return 'routes-dir';
      if (path.endsWith('/layouts')) return 'layouts-dir';
      if (path.endsWith('/components')) return 'components-dir';
      if (path.endsWith('/content')) return 'content-dir';
      if (path.endsWith('/assets')) return 'assets-dir';
      if (path.endsWith('/meta')) return 'meta-dir';
      return 'site-dir';
    }

    if (path.includes('/components/') || item.ext === 'svelte') return 'component-svelte';
    if (path.includes('/layouts/') && item.ext === 'php') return 'layout-php';
    if (path.includes('/routes/') && item.ext === 'php') return 'route-php';
    if (path.includes('/meta/') && item.ext === 'json') return 'meta-json';
    if (path.includes('/content/') && item.ext === 'json') return 'content-json';
    if (path.includes('/assets/')) return 'asset-file';
    return 'site-file';
  }

  function naturalMeta(item: ExplorerItem): string {
    switch (naturalSiteKind(item)) {
      case 'site-root':
        return 'Environment-scoped site workspace';
      case 'staging-dir':
        return 'Staging site environment';
      case 'production-dir':
        return 'Production site environment';
      case 'routes-dir':
        return 'PHP route files';
      case 'layouts-dir':
        return 'Shared page layouts';
      case 'components-dir':
        return 'Svelte custom elements';
      case 'content-dir':
        return 'Structured content and data';
      case 'assets-dir':
        return 'Uploads and site assets';
      case 'meta-dir':
        return 'SEO and metadata';
      case 'route-php':
        return 'PHP route entrypoint';
      case 'layout-php':
        return 'PHP layout template';
      case 'component-svelte':
        return 'Svelte component source';
      case 'content-json':
        return 'Logical content resource';
      case 'meta-json':
        return 'Site metadata document';
      case 'asset-file':
        return 'Static asset';
      case 'site-file':
        return 'Site workspace file';
    }

    switch (naturalSystemKind(item)) {
      case 'system-root':
        return 'Logical system namespace';
      case 'users-dir':
        return 'System user resources';
      case 'roles-dir':
        return 'Role definitions';
      case 'settings-dir':
        return 'Settings resources';
      case 'user-json':
        return 'System user record';
      case 'role-json':
        return 'System role definition';
      case 'settings-json':
        return 'Tenant settings document';
      case 'system-json':
        return 'System JSON resource';
      default:
        return '';
    }
  }

  function colAreaKind(col: ColumnState, mode: ExplorerMode): string {
    if (mode === 'raw') return '';
    const p = col.path;
    if (p.includes('/routes')) return 'Routes';
    if (p.includes('/layouts')) return 'Layouts';
    if (p.includes('/components')) return 'Components';
    if (p.includes('/content')) return 'Content';
    if (p.includes('/assets')) return 'Assets';
    if (p.includes('/meta')) return 'Meta';
    if (p.startsWith('system')) return 'System';
    return '';
  }

  function naturalTag(item: ExplorerItem): string {
    switch (naturalSiteKind(item)) {
      case 'site-root':
        return 'Site';
      case 'staging-dir':
        return 'Staging';
      case 'production-dir':
        return 'Production';
      case 'routes-dir':
        return 'Routes';
      case 'layouts-dir':
        return 'Layouts';
      case 'components-dir':
        return 'Components';
      case 'content-dir':
        return 'Content';
      case 'assets-dir':
        return 'Assets';
      case 'meta-dir':
        return 'Meta';
      case 'route-php':
        return 'PHP';
      case 'layout-php':
        return 'Layout';
      case 'component-svelte':
        return 'Svelte';
      case 'content-json':
        return 'JSON';
      case 'meta-json':
        return 'Meta';
      case 'asset-file':
        return 'Asset';
      case 'site-file':
        return 'File';
    }

    switch (naturalSystemKind(item)) {
      case 'system-root':
        return 'System';
      case 'users-dir':
        return 'Users';
      case 'roles-dir':
        return 'Roles';
      case 'settings-dir':
        return 'Settings';
      case 'user-json':
        return 'User';
      case 'role-json':
        return 'Role';
      case 'settings-json':
        return 'Settings';
      case 'system-json':
        return 'JSON';
      default:
        return '';
    }
  }

  function rawKind(item: ExplorerItem): string {
    const storageKind = item.storage?.kind;
    if (typeof storageKind === 'string' && storageKind !== '') {
      return storageKind;
    }

    const itemKind = (item.kind || '').toLowerCase();
    if (itemKind !== '') {
      return itemKind;
    }

    return item.type === 'dir' ? 'raw-dir' : 'raw';
  }

  function rawKindLabel(item: ExplorerItem): string {
    switch (rawKind(item)) {
      case 'manifest':
        return 'Manifest object';
      case 'chunk':
        return 'Chunk object';
      case 'logical':
        return 'Logical record';
      case 'raw-dir':
        return 'Storage directory';
      default:
        return 'Storage object';
    }
  }

  function rawKindTag(item: ExplorerItem): string {
    switch (rawKind(item)) {
      case 'manifest':
        return 'Manifest';
      case 'chunk':
        return 'Chunk';
      case 'logical':
        return 'Logical';
      case 'raw-dir':
        return 'Dir';
      default:
        return 'Raw';
    }
  }

  function rawMeta(item: ExplorerItem): string {
    const parts = [rawKindLabel(item)];

    if (typeof item.storage?.chunkCount === 'number') {
      parts.push(`${item.storage.chunkCount} chunks`);
    } else if (item.entity) {
      parts.push(item.entity);
    }

    return parts.join(' · ');
  }

  function handleWheel(event: WheelEvent): void {
    const list = event.currentTarget as HTMLDivElement;
    if (list.scrollHeight <= list.clientHeight) {
      return;
    }

    list.scrollTop += event.deltaY;
    event.preventDefault();
  }

  function rowKey(colIndex: number, item: ExplorerItem): string {
    return `${colIndex}:${item.name}`;
  }

  function clearScrubListeners(): void {
    window.removeEventListener('pointermove', onScrubPointerMove);
    window.removeEventListener('pointerup', onScrubPointerUp);
    window.removeEventListener('pointercancel', onScrubPointerCancel);
  }

  function stopScrubAutoScroll(): void {
    if (scrubAutoScrollFrame !== null) {
      window.cancelAnimationFrame(scrubAutoScrollFrame);
      scrubAutoScrollFrame = null;
    }
  }

  function activeScrubList(): HTMLDivElement | null {
    if (scrubColIndex < 0) {
      return null;
    }

    const root = scrubRoot ?? document;
    return root.querySelector<HTMLDivElement>(`[data-testid="explorer-column-list-${scrubColIndex}"]`);
  }

  function rowFromElement(row: HTMLButtonElement | null): { colIndex: number; item: ExplorerItem } | null {
    if (!row) {
      return null;
    }

    const colIndex = Number(row.dataset.scrubCol);
    const itemName = row.dataset.scrubItem ?? '';
    if (!Number.isInteger(colIndex) || colIndex !== scrubColIndex) {
      return null;
    }

    const column = columns[colIndex];
    const item = column?.items.find((candidate) => candidate.name === itemName);
    if (!item) {
      return null;
    }

    return { colIndex, item };
  }

  function nearestRowInList(list: HTMLDivElement, clientX: number, clientY: number): HTMLButtonElement | null {
    const listRect = list.getBoundingClientRect();
    if (clientX < listRect.left || clientX > listRect.right || clientY < listRect.top || clientY > listRect.bottom) {
      return null;
    }

    const rows = Array.from(list.querySelectorAll<HTMLButtonElement>('[data-scrub-row="true"]'));
    if (rows.length === 0) {
      return null;
    }

    let bestRow: HTMLButtonElement | null = null;
    let bestDistance = Number.POSITIVE_INFINITY;

    for (const row of rows) {
      const rect = row.getBoundingClientRect();
      if (clientY >= rect.top && clientY <= rect.bottom) {
        return row;
      }

      const distance = clientY < rect.top ? rect.top - clientY : clientY - rect.bottom;
      if (distance < bestDistance) {
        bestDistance = distance;
        bestRow = row;
      }
    }

    return bestRow;
  }

  function scrubAutoScrollDelta(list: HTMLDivElement): number {
    if (list.scrollHeight <= list.clientHeight) {
      return 0;
    }

    const rect = list.getBoundingClientRect();
    if (scrubPointerX < rect.left || scrubPointerX > rect.right) {
      return 0;
    }

    const edge = Math.max(24, Math.min(56, scrubAutoScrollEdge * scale));
    const topDistance = scrubPointerY - rect.top;
    const bottomDistance = rect.bottom - scrubPointerY;

    if (topDistance < edge) {
      const proximity = Math.max(0, Math.min(1, (edge - Math.max(0, topDistance)) / edge));
      return -Math.max(2, Math.round(4 + proximity * scrubAutoScrollMaxStep));
    }

    if (bottomDistance < edge) {
      const proximity = Math.max(0, Math.min(1, (edge - Math.max(0, bottomDistance)) / edge));
      return Math.max(2, Math.round(4 + proximity * scrubAutoScrollMaxStep));
    }

    return 0;
  }

  function scheduleScrubAutoScroll(): void {
    if (scrubAutoScrollFrame !== null) {
      return;
    }

    scrubAutoScrollFrame = window.requestAnimationFrame(runScrubAutoScroll);
  }

  function updateScrubAutoScroll(): void {
    if (!scrubActive) {
      stopScrubAutoScroll();
      return;
    }

    const list = activeScrubList();
    if (!list || scrubAutoScrollDelta(list) === 0) {
      stopScrubAutoScroll();
      return;
    }

    scheduleScrubAutoScroll();
  }

  function runScrubAutoScroll(): void {
    scrubAutoScrollFrame = null;

    if (!scrubActive || scrubPointerId === null) {
      return;
    }

    const list = activeScrubList();
    if (!list) {
      return;
    }

    const delta = scrubAutoScrollDelta(list);
    if (delta === 0) {
      return;
    }

    const previousScrollTop = list.scrollTop;
    const maxScrollTop = Math.max(0, list.scrollHeight - list.clientHeight);
    list.scrollTop = Math.max(0, Math.min(maxScrollTop, previousScrollTop + delta));

    const target = resolveScrubTarget(scrubPointerX, scrubPointerY);
    if (target) {
      scrubToItem(target.colIndex, target.item);
    }

    if (list.scrollTop !== previousScrollTop) {
      scheduleScrubAutoScroll();
    }
  }

  function finishScrub(): void {
    const shouldSuppressClicks = scrubActive;
    clearScrubListeners();
    stopScrubAutoScroll();

    if (shouldSuppressClicks) {
      suppressClicksUntil = Date.now() + 120;
    }

    scrubPointerId = null;
    scrubColIndex = -1;
    scrubStartX = 0;
    scrubStartY = 0;
    scrubStartItemName = '';
    scrubPointerX = 0;
    scrubPointerY = 0;
    scrubActive = false;
    lastScrubKey = '';
    scrubRoot = null;
  }

  function resolveScrubTarget(clientX: number, clientY: number): { colIndex: number; item: ExplorerItem } | null {
    const root = scrubRoot ?? document;
    const target = root.elementFromPoint(clientX, clientY);
    const hit = rowFromElement(target?.closest<HTMLButtonElement>('[data-scrub-row="true"]') ?? null);
    if (hit) {
      return hit;
    }

    const list = activeScrubList();
    if (!list) {
      return null;
    }

    return rowFromElement(nearestRowInList(list, clientX, clientY));
  }

  function scrubToItem(colIndex: number, item: ExplorerItem): void {
    const key = rowKey(colIndex, item);
    if (lastScrubKey === key) {
      return;
    }

    lastScrubKey = key;
    onItemClick(colIndex, item);
  }

  function handleRowPointerDown(event: PointerEvent, colIndex: number, item: ExplorerItem): void {
    if (event.button !== 0) {
      return;
    }

    finishScrub();

    scrubPointerId = event.pointerId;
    scrubColIndex = colIndex;
    scrubStartX = event.clientX;
    scrubStartY = event.clientY;
    scrubStartItemName = item.name;
    scrubPointerX = event.clientX;
    scrubPointerY = event.clientY;
    scrubRoot = event.currentTarget instanceof HTMLElement && event.currentTarget.getRootNode() instanceof ShadowRoot
      ? event.currentTarget.getRootNode() as ShadowRoot
      : document;

    window.addEventListener('pointermove', onScrubPointerMove, { passive: false });
    window.addEventListener('pointerup', onScrubPointerUp);
    window.addEventListener('pointercancel', onScrubPointerCancel);
  }

  function onScrubPointerMove(event: PointerEvent): void {
    if (event.pointerId !== scrubPointerId) {
      return;
    }

    scrubPointerX = event.clientX;
    scrubPointerY = event.clientY;

    const deltaX = event.clientX - scrubStartX;
    const deltaY = event.clientY - scrubStartY;

    if (!scrubActive) {
      if (Math.abs(deltaY) < scrubThreshold || Math.abs(deltaY) <= Math.abs(deltaX)) {
        return;
      }

      scrubActive = true;
    }

    const target = resolveScrubTarget(event.clientX, event.clientY);
    if (target) {
      scrubToItem(target.colIndex, target.item);
    }

    updateScrubAutoScroll();
    event.preventDefault();
  }

  function onScrubPointerUp(event: PointerEvent): void {
    if (event.pointerId !== scrubPointerId) {
      return;
    }

    finishScrub();
  }

  function onScrubPointerCancel(event: PointerEvent): void {
    if (event.pointerId !== scrubPointerId) {
      return;
    }

    finishScrub();
  }

  function handleRowClick(event: MouseEvent, colIndex: number, item: ExplorerItem): void {
    if (Date.now() <= suppressClicksUntil) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onItemClick(colIndex, item);
  }

  function handleRowDoubleClick(event: MouseEvent, colIndex: number, item: ExplorerItem): void {
    if (Date.now() <= suppressClicksUntil) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onItemDoubleClick(colIndex, item);
  }

  onDestroy(() => {
    finishScrub();
  });
</script>

<div class="cols" role="region" aria-label="Miller columns" style={`--column-scale:${scale};`} use:dragScroll={{ axis: 'x' }}>
  {#each columns as col, i (col.path)}
    <section class="col" aria-label={`Column ${i + 1}`} data-testid={`explorer-column-${i}`}>
      <header class="colHeader">
        {#if mode === 'natural'}
          {@const area = colAreaKind(col, mode)}
          {#if area}
            <div class="areaLabel area{area}">{area}</div>
          {/if}
        {/if}
        <div class="colTitle" class:areaRoutes={colAreaKind(col, mode) === 'Routes'} class:areaLayouts={colAreaKind(col, mode) === 'Layouts'} class:areaComponents={colAreaKind(col, mode) === 'Components'} class:areaContent={colAreaKind(col, mode) === 'Content'} class:areaAssets={colAreaKind(col, mode) === 'Assets'} class:areaMeta={colAreaKind(col, mode) === 'Meta'} class:areaSystem={colAreaKind(col, mode) === 'System'}>
          {mode === 'raw' && i === 0 ? 'RAW ROOT' : i === 0 ? 'ROOT' : col.path.split('/').filter(Boolean).pop()}
        </div>
        {#if mode === 'raw'}
          <div class="colMeta">{i === 0 ? 'Storage index' : 'Storage objects'}</div>
        {/if}
      </header>

      {#if col.loading}
        <div class="loading">
          <div class="spinner" aria-hidden="true"></div>
          <div class="loadingText">Loading…</div>
        </div>
      {:else}
        <div
          class="list"
          role="list"
          data-testid={`explorer-column-list-${i}`}
          use:dragScroll={{ axis: 'y' }}
          onwheel={handleWheel}
        >
          {#if col.items.length === 0}
            <div class="emptyState">
              {#if mode === 'raw'}
                <div class="emptyText">No storage objects are available in this location yet.</div>
              {:else}
                {@const area = colAreaKind(col, mode)}
                {#if area === 'Routes'}
                  <div class="emptyIcon">🛣️</div>
                  <div class="emptyTitle">No Routes Yet</div>
                  <div class="emptyText">Routes map URLs to page layouts. Start by creating a PHP endpoint.</div>
                {:else if area === 'Components'}
                  <div class="emptyIcon">🧩</div>
                  <div class="emptyTitle">No Components</div>
                  <div class="emptyText">Build reusable Svelte elements to embed in your layouts.</div>
                {:else if area === 'Content'}
                  <div class="emptyIcon">📝</div>
                  <div class="emptyTitle">No Content</div>
                  <div class="emptyText">Store structured JSON documents for your views to consume.</div>
                {:else if area === 'Meta'}
                  <div class="emptyIcon">🏷️</div>
                  <div class="emptyTitle">No Meta</div>
                  <div class="emptyText">Define site-wide metadata, SEO defaults, and configuration.</div>
                {:else if area === 'Layouts'}
                  <div class="emptyIcon">🧱</div>
                  <div class="emptyTitle">No Layouts</div>
                  <div class="emptyText">Create shared page structures to wrap your routes.</div>
                {:else if area === 'Assets'}
                  <div class="emptyIcon">🖼️</div>
                  <div class="emptyTitle">No Assets</div>
                  <div class="emptyText">Upload images, fonts, and static files using the Builder.</div>
                {:else}
                  <div class="emptyText">No decoded content is available in this location yet.</div>
                {/if}
              {/if}
            </div>
          {:else}
            {#each col.items as item (item.rawPath ?? item.name)}
              <button
                type="button"
                class="row"
                class:active={col.selectedItem === item.name}
                class:dim={mode === 'raw' && item.type === 'dir'}
                class:naturalSystemItem={naturalSystemKind(item) !== ''}
                data-no-drag-scroll="true"
                data-scrub-row="true"
                data-scrub-col={i}
                data-scrub-item={item.name}
                data-testid={`explorer-row-${i}`}
                onpointerdown={(event) => handleRowPointerDown(event, i, item)}
                onclick={(event) => handleRowClick(event, i, item)}
                ondblclick={(event) => handleRowDoubleClick(event, i, item)}
              >
                <span class="left">
                  <span class="ico" aria-hidden="true">{iconFor(item)}</span>
                  <span class="textWrap">
                    <span class={labelClass(item)} title={item.name}>{item.name}</span>
                    {#if mode === 'raw'}
                      <span class="metaLine" title={rawMeta(item)}>{rawMeta(item)}</span>
                    {:else if naturalMeta(item) !== ''}
                      <span class="metaLine naturalMeta" title={naturalMeta(item)}>{naturalMeta(item)}</span>
                    {/if}
                  </span>
                </span>
                {#if mode === 'raw' || item.type === 'dir' || naturalTag(item) !== ''}
                  <span class="right">
                    {#if mode === 'raw'}
                      <span class="kindTag">{rawKindTag(item)}</span>
                    {:else if naturalTag(item) !== ''}
                      <span class="kindTag naturalTag">{naturalTag(item)}</span>
                    {/if}
                    {#if item.type === 'dir'}
                      <span class="arrow" aria-hidden="true">›</span>
                    {/if}
                  </span>
                {/if}
              </button>
            {/each}
          {/if}
        </div>
      {/if}
    </section>
  {/each}
</div>

<style>
  .cols {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 8px;
    background: var(--bg);
    height: 100%;
    min-height: 0;
    min-width: 0;
    align-items: stretch;
    scrollbar-width: thin;
    scrollbar-color: color-mix(in oklab, var(--border), var(--text) 18%) transparent;
    overscroll-behavior-x: contain;
  }

  .cols::-webkit-scrollbar,
  .list::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .cols::-webkit-scrollbar-track,
  .list::-webkit-scrollbar-track {
    background: transparent;
  }

  .cols::-webkit-scrollbar-thumb,
  .list::-webkit-scrollbar-thumb {
    border-radius: 999px;
    border: 2px solid transparent;
    background: color-mix(in oklab, var(--border), var(--text) 18%);
    background-clip: padding-box;
  }

  .cols::-webkit-scrollbar-thumb:hover,
  .list::-webkit-scrollbar-thumb:hover {
    background: color-mix(in oklab, var(--border), var(--text) 26%);
    background-clip: padding-box;
  }

  .col {
    width: calc(248px * var(--column-scale));
    min-width: calc(248px * var(--column-scale));
    border: 1px solid var(--border);
    border-radius: 14px;
    background: var(--panel);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    max-height: 100%;
  }

  .colHeader {
    padding: calc(10px * var(--column-scale)) calc(12px * var(--column-scale));
    border-bottom: 1px solid var(--border);
  }

  .colTitle {
    font-weight: 700;
    font-size: calc(12px * var(--column-scale));
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .colMeta {
    margin-top: calc(4px * var(--column-scale));
    font-size: calc(11px * var(--column-scale));
    color: var(--muted);
    opacity: 0.8;
  }

  .areaLabel {
    display: inline-block;
    font-size: calc(9px * var(--column-scale));
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 1px 6px;
    border-radius: 999px;
    margin-bottom: calc(4px * var(--column-scale));
    line-height: 1.6;
  }

  .areaRoutes { background: color-mix(in oklab, var(--text), transparent 94%); color: var(--text); border: 1px solid color-mix(in oklab, var(--text), transparent 85%); }
  .areaLayouts { background: color-mix(in oklab, var(--text), transparent 94%); color: var(--text); border: 1px solid color-mix(in oklab, var(--text), transparent 85%); }
  .areaComponents { background: color-mix(in oklab, var(--text), transparent 94%); color: var(--text); border: 1px solid color-mix(in oklab, var(--text), transparent 85%); }
  .areaContent { background: color-mix(in oklab, var(--text), transparent 94%); color: var(--text); border: 1px solid color-mix(in oklab, var(--text), transparent 85%); }
  .areaAssets { background: color-mix(in oklab, var(--text), transparent 94%); color: var(--text); border: 1px solid color-mix(in oklab, var(--text), transparent 85%); }
  .areaMeta { background: color-mix(in oklab, var(--text), transparent 94%); color: var(--text); border: 1px solid color-mix(in oklab, var(--text), transparent 85%); }
  .areaSystem { background: color-mix(in oklab, var(--text), transparent 94%); color: var(--text); border: 1px solid color-mix(in oklab, var(--text), transparent 85%); }

  .colTitle.areaRoutes { color: var(--text); }
  .colTitle.areaLayouts { color: var(--text); }
  .colTitle.areaComponents { color: var(--text); }
  .colTitle.areaContent { color: var(--text); }
  .colTitle.areaAssets { color: var(--text); }
  .colTitle.areaMeta { color: var(--text); }
  .colTitle.areaSystem { color: var(--text); }

  .createRow {
    display: flex;
    gap: calc(4px * var(--column-scale));
    margin-top: calc(6px * var(--column-scale));
    align-items: center;
  }

  .createInput {
    flex: 1;
    min-width: 0;
    padding: calc(3px * var(--column-scale)) calc(6px * var(--column-scale));
    font-size: calc(11px * var(--column-scale));
    background: var(--bg2, #1e1e2e);
    color: var(--text, #cdd6f4);
    border: 1px solid var(--border, #313244);
    border-radius: 4px;
    outline: none;
  }
  .createInput:focus {
    border-color: var(--accent, #8b5cf6);
  }

  .createOk {
    padding: calc(3px * var(--column-scale)) calc(8px * var(--column-scale));
    font-size: calc(11px * var(--column-scale));
    font-weight: 600;
    color: #fff;
    background: var(--accent, #8b5cf6);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
  }

  .createCancel {
    padding: calc(3px * var(--column-scale)) calc(6px * var(--column-scale));
    font-size: calc(11px * var(--column-scale));
    color: var(--muted, #6c7086);
    background: transparent;
    border: none;
    cursor: pointer;
    white-space: nowrap;
  }

  .list {
    padding: calc(6px * var(--column-scale));
    display: flex;
    flex-direction: column;
    gap: calc(5px * var(--column-scale));
    min-height: 0;
    flex: 1 1 auto;
    overflow: auto;
    cursor: grab;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    scrollbar-color: color-mix(in oklab, var(--border), var(--text) 18%) transparent;
  }

  .list.drag-scrolling {
    cursor: grabbing;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(8px * var(--column-scale));
    padding: calc(8px * var(--column-scale)) calc(10px * var(--column-scale));
    border-radius: 12px;
    border: 1px solid transparent;
    background: transparent;
    color: var(--text);
    cursor: pointer;
    text-align: left;
  }
  .row:hover {
    background: var(--hover);
  }
  .row.active {
    background: var(--primary);
    color: var(--primaryText);
    border-color: color-mix(in oklab, var(--primary), black 15%);
    box-shadow: inset 3px 0 0 var(--accent, #34d399);
  }
  .row.dim:not(.active) {
    opacity: 0.55;
  }

  .row.naturalSystemItem:not(.active) {
    border-color: color-mix(in oklab, var(--primary), transparent 86%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), var(--primary) 5%),
        color-mix(in oklab, var(--panel), var(--primary) 2%)
      );
  }

  .row.naturalSystemItem:hover:not(.active) {
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), var(--primary) 8%),
        color-mix(in oklab, var(--panel), var(--primary) 4%)
      );
    border-color: color-mix(in oklab, var(--primary), transparent 74%);
  }

  .left {
    min-width: 0;
    display: inline-flex;
    align-items: flex-start;
    gap: calc(8px * var(--column-scale));
    flex: 1 1 auto;
  }

  .ico {
    width: calc(18px * var(--column-scale));
    opacity: 0.85;
    margin-top: calc(1px * var(--column-scale));
  }

  .textWrap {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: calc(3px * var(--column-scale));
  }

  .label {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-size: calc(13px * var(--column-scale));
  }
  .label.muted {
    color: var(--muted);
  }

  .label.systemLabel {
    color: color-mix(in oklab, var(--text), var(--primary) 16%);
  }

  .label.siteLabel {
    color: color-mix(in oklab, var(--text), var(--accent) 18%);
  }

  .row.active .label {
    color: var(--primaryText);
  }
  .label.warn {
    color: var(--warn);
  }
  .label.info {
    color: var(--info);
  }

  .metaLine {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: calc(11px * var(--column-scale));
    color: var(--muted);
  }

  .metaLine.naturalMeta {
    color: color-mix(in oklab, var(--muted), var(--text) 18%);
  }

  .right {
    display: inline-flex;
    align-items: center;
    gap: calc(8px * var(--column-scale));
    flex-shrink: 0;
  }

  .kindTag {
    padding: calc(2px * var(--column-scale)) calc(6px * var(--column-scale));
    border-radius: 999px;
    border: 1px solid color-mix(in oklab, var(--border), transparent 10%);
    background: color-mix(in oklab, var(--card), transparent 10%);
    font-size: calc(10px * var(--column-scale));
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .kindTag.naturalTag {
    border-color: color-mix(in oklab, var(--primary), transparent 68%);
    background: color-mix(in oklab, var(--card), var(--primary) 8%);
    color: color-mix(in oklab, var(--text), var(--primary) 12%);
  }

  .row.active .metaLine,
  .row.active .kindTag {
    color: var(--primaryText);
    border-color: color-mix(in oklab, var(--primary), black 20%);
    background: color-mix(in oklab, var(--primary), white 8%);
  }

  .arrow {
    color: inherit;
    opacity: 0.7;
    font-size: calc(16px * var(--column-scale));
  }

  .loading {
    display: grid;
    place-items: center;
    padding: calc(24px * var(--column-scale));
    gap: calc(10px * var(--column-scale));
    color: var(--muted);
  }
  .spinner {
    width: calc(22px * var(--column-scale));
    height: calc(22px * var(--column-scale));
    border-radius: 999px;
    border: 3px solid color-mix(in oklab, var(--muted), transparent 65%);
    border-top-color: var(--primary);
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .loadingText {
    font-size: calc(12px * var(--column-scale));
  }

  .empty, .emptyState {
    min-height: min(140px, 100%);
    display: grid;
    place-items: center;
    padding: calc(18px * var(--column-scale));
    text-align: center;
    color: var(--muted);
    font-size: calc(12px * var(--column-scale));
    line-height: 1.6;
    border: 1px dashed color-mix(in oklab, var(--border), transparent 30%);
    border-radius: 12px;
    background: color-mix(in oklab, var(--panel), transparent 8%);
  }

  .emptyState {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: calc(8px * var(--column-scale));
  }

  .emptyIcon {
    font-size: calc(24px * var(--column-scale));
    margin-bottom: calc(4px * var(--column-scale));
    opacity: 0.8;
  }

  .emptyTitle {
    font-size: calc(13px * var(--column-scale));
    font-weight: 600;
    color: var(--text);
  }

  .emptyText {
    font-size: calc(12px * var(--column-scale));
    line-height: 1.4;
    max-width: 180px;
    margin-bottom: calc(8px * var(--column-scale));
  }

  .emptyBtn {
    padding: calc(6px * var(--column-scale)) calc(12px * var(--column-scale));
    font-size: calc(12px * var(--column-scale));
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.15s;
    background: transparent;
  }

  .emptyBtn.areaRoutes { color: var(--text); border: 1px solid var(--border); }
  .emptyBtn.areaRoutes:hover { background: color-mix(in oklab, var(--text), transparent 94%); }

  .emptyBtn.areaComponents { color: var(--text); border: 1px solid var(--border); }
  .emptyBtn.areaComponents:hover { background: color-mix(in oklab, var(--text), transparent 94%); }

  .emptyBtn.areaContent { color: var(--text); border: 1px solid var(--border); }
  .emptyBtn.areaContent:hover { background: color-mix(in oklab, var(--text), transparent 94%); }

  .emptyBtn.areaMeta { color: var(--text); border: 1px solid var(--border); }
  .emptyBtn.areaMeta:hover { background: color-mix(in oklab, var(--text), transparent 94%); }

  .emptyBtn.areaLayouts { color: var(--text); border: 1px solid var(--border); }
  .emptyBtn.areaLayouts:hover { background: color-mix(in oklab, var(--text), transparent 94%); }

  .emptyBtn.areaAssets { color: var(--text); border: 1px solid var(--border); }
  .emptyBtn.areaAssets:hover { background: color-mix(in oklab, var(--text), transparent 94%); }
</style>
