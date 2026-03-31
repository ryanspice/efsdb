<script lang="ts">
  import type { ExplorerItem, ExplorerMode } from '../lib/types';

  type Props = {
    items: ExplorerItem[];
    selectedName: string | null;
    mode: ExplorerMode;
    scale: number;
    onNavToIndex: (idx: number) => void;
    onActivateIndex: (idx: number) => void;
  };

  let { items, selectedName, mode, scale, onNavToIndex, onActivateIndex } = $props<Props>();

  let gap = 320;
  let depth = 250;

  let wheelLock = $state<number | null>(null);

  let isDragging = $state(false);
  let startX = $state(0);
  let startIdx = $state(0);

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

    if (mode === 'raw') {
      if (item.type === 'dir') return '🗂️';
      if (item.kind === 'manifest') return '📜';
      if (item.kind === 'chunk') return '🧩';
      return '🗃️';
    }

    if (item.type === 'dir') return '📁';
    if (item.kind === 'image') return '🖼️';
    if (item.kind === 'video') return '🎬';
    return '📄';
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

  function naturalSystemTag(item: ExplorerItem): string {
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

  function cardMeta(item: ExplorerItem): string {
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
    }

    if (mode !== 'raw') {
      return typeof item.size === 'number' ? String(item.size) : '';
    }

    const parts = [rawKindLabel(item)];

    if (typeof item.storage?.chunkCount === 'number') {
      parts.push(`${item.storage.chunkCount} chunks`);
    } else if (item.entity) {
      parts.push(item.entity);
    }

    return parts.join(' · ');
  }

  function selectedIndex() {
    const idx = items.findIndex((i) => i.name === selectedName);
    return idx < 0 ? 0 : idx;
  }

  function nav(dir: number) {
    if (!items.length) return;
    const curr = selectedIndex();
    const next = Math.max(0, Math.min(items.length - 1, curr + dir));
    onNavToIndex(next);
  }

  function onWheel(e: WheelEvent) {
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = window.setTimeout(() => (wheelLock = null), 30);
    nav(e.deltaY > 0 ? 1 : -1);
  }

  function onDown(e: MouseEvent) {
    if (!items.length) return;
    isDragging = true;
    startX = e.clientX;
    startIdx = selectedIndex();
    e.preventDefault();
  }

  function onMove(e: MouseEvent) {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    const step = -Math.round(delta / 50);
    const next = Math.max(0, Math.min(items.length - 1, startIdx + step));
    onNavToIndex(next);
  }

  function onUp() {
    isDragging = false;
  }

  function bindStage(node: HTMLDivElement) {
    const handleMouseDown = (event: MouseEvent) => onDown(event);
    const handleMouseMove = (event: MouseEvent) => onMove(event);
    const handleMouseUp = () => onUp();
    const handleMouseLeave = () => onUp();

    node.addEventListener('mousedown', handleMouseDown);
    node.addEventListener('mousemove', handleMouseMove);
    node.addEventListener('mouseup', handleMouseUp);
    node.addEventListener('mouseleave', handleMouseLeave);

    return {
      destroy() {
        node.removeEventListener('mousedown', handleMouseDown);
        node.removeEventListener('mousemove', handleMouseMove);
        node.removeEventListener('mouseup', handleMouseUp);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }

  const vis = $derived.by(() => {
    const center = selectedIndex();
    return items.map((item, i) => {
      const dist = i - center;
      const abs = Math.abs(dist);

      const s = scale;
      const gapS = gap * s;
      const depthS = depth * s;

      if (abs > 6) {
        return { item, i, hidden: true, style: '' };
      }

      let x = dist * gapS;
      let z = -abs * depthS;
      let rot = 0;
      const cardScale = Math.max(0.72, 1 - abs * 0.08) * s;

      if (dist === -1) x -= gapS * 0.4;
      if (dist === 1) x += gapS * 0.4;

      if (dist < 0) {
        x += gapS * 0.6;
        rot = 45;
      } else if (dist > 0) {
        x -= gapS * 0.6;
        rot = -45;
      } else {
        z += 100 * s;
      }

      const opacity = Math.max(0.3, 1 - abs * 0.15);
      const zIndex = 100 - abs;

      const maxReflect = 0.2;
      const reflectAlpha = Math.max(0, maxReflect - abs * 0.05);
      const reflect = `below 2px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,${reflectAlpha}) 100%)`;

      const style =
        `transform: translateX(${x}px) translateZ(${z}px) rotateY(${rot}deg) scale(${cardScale});` +
        `opacity:${opacity}; z-index:${zIndex};` +
        `-webkit-box-reflect:${reflect};`;

      return { item, i, hidden: false, style };
    });
  });
</script>

<div class="coverPane" data-mode={mode} data-testid="explorer-coverflow" onwheel={onWheel}>
  <div class="coverHeader">
    <button class="navBtn" type="button" onclick={() => nav(-1)} aria-label="Previous">‹</button>
    <div class="titleWrap">
      <div class="eyebrow">{mode === 'raw' ? 'Raw mode' : 'Explorer'}</div>
      <div class="title">{mode === 'raw' ? 'Raw coverflow' : 'Coverflow'}</div>
      <div class="subtitle">{mode === 'raw' ? 'Storage objects' : 'Browse the selected column'}</div>
    </div>
    <button class="navBtn" type="button" onclick={() => nav(1)} aria-label="Next">›</button>
  </div>

  <div
    class="stage"
    role="group"
    aria-label="Coverflow stage"
    data-testid="explorer-coverflow-stage"
    use:bindStage
  >
    {#if !items.length}
      <div class="empty">
        <div class="sym">{mode === 'raw' ? '🗃️' : '∅'}</div>
        <div class="lbl">{mode === 'raw' ? 'No storage objects' : 'Empty'}</div>
        <div class="emptyCopy">
          {mode === 'raw'
            ? 'This location does not expose raw objects yet.'
            : 'This location does not contain browsable items yet.'}
        </div>
      </div>
    {:else}
      {#each vis as v (v.item.rawPath ?? v.item.name)}
        <button
          type="button"
          class="card"
          class:active={v.item.name === selectedName}
          class:systemCard={naturalSystemKind(v.item) !== ''}
          style={v.hidden ? 'display:none;' : v.style}
          onclick={() => onNavToIndex(v.i)}
          ondblclick={() => onActivateIndex(v.i)}
        >
          <div class="ico">{iconFor(v.item)}</div>
          {#if mode !== 'raw' && naturalSystemTag(v.item) !== ''}
            <div class="cardTag">{naturalSystemTag(v.item)}</div>
          {/if}
          <div class="name" title={v.item.name}>{v.item.name}</div>
          <div class="size">{cardMeta(v.item)}</div>
        </button>
      {/each}
    {/if}
  </div>
</div>

<style>
  .coverPane {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    block-size: 100%;
    min-block-size: 0;
    overflow: hidden;
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), transparent 6%),
        color-mix(in oklab, var(--bg), var(--panel) 24%)
      );
  }

  .coverHeader {
    display: grid;
    grid-template-columns: 34px 1fr 34px;
    align-items: center;
    gap: 12px;
    padding: 10px 12px 6px;
    color: var(--muted);
    font: var(--efs-font-body-sm);
  }

  .titleWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    min-width: 0;
  }

  .eyebrow {
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    opacity: 0.75;
  }

  .navBtn {
    width: 34px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: color-mix(in oklab, var(--card), transparent 6%);
    color: var(--text);
    cursor: pointer;
    transition:
      background 120ms ease,
      border-color 120ms ease,
      transform 120ms ease;
  }

  .navBtn:hover {
    background: color-mix(in oklab, var(--card), var(--text) 4%);
    border-color: color-mix(in oklab, var(--border), var(--text) 16%);
    transform: translateY(-1px);
  }

  .navBtn:focus-visible {
    outline: 2px solid color-mix(in oklab, var(--primary), transparent 45%);
    outline-offset: 2px;
  }

  .title {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 800;
    color: var(--text);
    opacity: 0.92;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .subtitle {
    font: var(--efs-font-body-xs);
    letter-spacing: 0.08em;
    color: var(--muted);
    opacity: 0.9;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .stage {
    block-size: 100%;
    min-height: 0;
    perspective: 1100px;
    display: grid;
    place-items: center;
    overflow: hidden;
    user-select: none;
    position: relative;
    padding: 8px 12px 14px;
    touch-action: pan-y;
  }

  .card {
    position: absolute;
    width: 220px;
    height: 170px;
    border-radius: 20px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 8%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 2%),
        color-mix(in oklab, var(--panel), black 4%)
      );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transform-style: preserve-3d;
    cursor: pointer;
    padding: 18px 16px 16px;
    box-shadow:
      0 18px 38px rgba(0, 0, 0, 0.22),
      inset 0 1px 0 color-mix(in oklab, white, transparent 95%);
    transition:
      transform 120ms ease,
      opacity 120ms ease,
      box-shadow 120ms ease,
      border-color 120ms ease;
  }

  .coverPane[data-mode='raw'] .card {
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), var(--card) 16%),
        color-mix(in oklab, var(--panel), black 4%)
      );
  }

  .card.active {
    border-color: color-mix(in oklab, var(--primary), black 20%);
    box-shadow:
      0 20px 44px rgba(0, 0, 0, 0.28),
      0 0 0 1px color-mix(in oklab, var(--primary), transparent 48%),
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%);
  }

  .coverPane[data-mode='natural'] .card.systemCard {
    border-color: color-mix(in oklab, var(--primary), transparent 72%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), var(--primary) 8%),
        color-mix(in oklab, var(--panel), black 3%)
      );
  }

  .ico {
    font-size: 36px;
    opacity: 0.9;
  }

  .cardTag {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding: 0 10px;
    border-radius: 999px;
    border: 1px solid color-mix(in oklab, var(--primary), transparent 66%);
    background: color-mix(in oklab, var(--card), var(--primary) 8%);
    color: color-mix(in oklab, var(--text), var(--primary) 12%);
    font: var(--efs-font-micro);
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .name {
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font: var(--efs-font-body-sm);
    line-height: 1.35;
    color: var(--text);
    font-weight: 800;
  }

  .size {
    font: var(--efs-font-body-xs);
    color: var(--muted);
    opacity: 0.9;
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.45;
  }

  .empty {
    max-width: min(360px, 100%);
    padding: 18px 20px;
    border-radius: 18px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 8%);
    background: color-mix(in oklab, var(--card), transparent 8%);
    text-align: center;
    color: var(--muted);
    opacity: 0.95;
    box-shadow: inset 0 1px 0 color-mix(in oklab, white, transparent 95%);
  }

  .emptyCopy {
    margin-top: 8px;
    max-width: 18rem;
    font: var(--efs-font-body-xs);
    line-height: 1.5;
  }

  .sym {
    font-size: 56px;
    margin-bottom: 8px;
  }

  .lbl {
    font: var(--efs-font-label);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  @media (max-width: 47.99rem) {
    .card {
      width: min(15rem, 72vw);
      height: 11rem;
      padding: 16px 14px 14px;
    }

    .stage {
      perspective: 900px;
      padding: 10px 10px 14px;
    }

    .navBtn {
      width: 40px;
      height: 40px;
    }
  }
</style>
