<script lang="ts">
  import { onDestroy } from 'svelte';
  import type { DataClient } from '../lib/api/explorerClient';
  import type { ExplorerItem, ExplorerMode, SiteRuntimeResponse } from '../lib/types';
  import CodeEditor from './CodeEditor.svelte';

  type Props = {
    client: DataClient;
    mode: ExplorerMode;
    scale: number;
    activeItem: ExplorerItem | null;
    currentPath: string;
    widthPx: number;
    actualRole: string;
    actualEntitlements: string[];
    onToggle: () => void;
    onSaved: (path: string) => void | Promise<void>;
    onDeleted?: (path: string) => void | Promise<void>;
    onRenamed?: (oldPath: string, newPath: string) => void | Promise<void>;
    onDuplicated?: (newPath: string) => void | Promise<void>;
    onPopOut?: (item: ExplorerItem, path: string) => void;
  };

  let {
    client,
    mode,
    scale,
    activeItem,
    currentPath,
    widthPx,
    actualRole,
    actualEntitlements,
    onToggle,
    onSaved,
    onDeleted,
    onRenamed,
    onDuplicated,
    onPopOut
  } = $props<Props>();

  let status = $state<'idle' | 'loading' | 'error'>('idle');
  let errorMsg = $state('');
  let imageUrl = $state<string | null>(null);
  let editorText = $state('');
  let originalText = $state('');
  let saveState = $state<'idle' | 'saving' | 'saved'>('idle');
  let saveError = $state('');
  let displayItem = $state<ExplorerItem | null>(null);
  let displayPath = $state('');
  let pendingPreview = $state(false);
  let siteRuntime = $state<SiteRuntimeResponse | null>(null);
  let runtimeStatus = $state<'idle' | 'loading' | 'error'>('idle');
  let runtimeError = $state('');
  let runtimePreviewUrl = $state<string | null>(null);
  let iframeVersion = $state(0);

  let ctrl: AbortController | null = null;
  let runtimeCtrl: AbortController | null = null;
  let previewToken = 0;
  let runtimeToken = 0;

  function joinPath(parentPath: string, itemName: string): string {
    return parentPath ? `${parentPath}/${itemName}` : itemName;
  }

  function itemPath(item: ExplorerItem): string {
    if (mode === 'raw') {
      if (typeof item.rawPath === 'string' && item.rawPath !== '') {
        return item.rawPath;
      }

      if (typeof item.logicalPath === 'string' && item.logicalPath !== '') {
        return item.logicalPath;
      }

      return joinPath(currentPath, item.name);
    }

    if (typeof item.logicalPath === 'string' && item.logicalPath !== '') {
      return item.logicalPath;
    }

    return joinPath(currentPath, item.name);
  }

  function extOf(item: ExplorerItem): string {
    return (item.ext || '').toLowerCase();
  }

  function resourceKind(item: ExplorerItem | null): string {
    if (!item?.logicalPath) return '';
    const p = item.logicalPath;
    if (p.includes('/routes/') || p.endsWith('/routes')) return 'Route';
    if (p.includes('/layouts/') || p.endsWith('/layouts')) return 'Layout';
    if (p.includes('/components/') || p.endsWith('/components')) return 'Component';
    if (p.includes('/content/') || p.endsWith('/content')) return 'Content';
    if (p.includes('/assets/') || p.endsWith('/assets')) return 'Asset';
    if (p.includes('/meta/') || p.endsWith('/meta')) return 'Meta';
    return '';
  }

  function mimeOf(item: ExplorerItem): string {
    return (item.mime || '').toLowerCase();
  }

  function isImage(item: ExplorerItem): boolean {
    const ext = extOf(item);
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext)) {
      return true;
    }

    return mimeOf(item).startsWith('image/');
  }

  function isTextLike(item: ExplorerItem): boolean {
    if ((item.kind || '').toLowerCase() === 'text') {
      return true;
    }

    if (mimeOf(item).startsWith('text/')) {
      return true;
    }

    return [
      'json',
      'txt',
      'md',
      'php',
      'js',
      'jsx',
      'ts',
      'tsx',
      'css',
      'html',
      'xml',
      'log',
      'sql',
      'yml',
      'yaml',
      'sh',
      'bat',
      'ps1',
      'svelte'
    ].includes(extOf(item));
  }

  function canEditLogicalPath(path: string): boolean {
    if (actualRole === 'operator_root') {
      return true;
    }

    if (path.startsWith('site/')) {
      return actualEntitlements.includes('SITE_EDIT') || actualEntitlements.includes('ADMIN_SETTINGS');
    }

    if (path.startsWith('system/users/')) {
      return actualEntitlements.includes('SYSTEM_USERS_EDIT') || actualEntitlements.includes('ADMIN_USERS');
    }

    if (path.startsWith('system/roles/')) {
      return actualEntitlements.includes('SYSTEM_ROLES_EDIT') || actualEntitlements.includes('ADMIN_ROLES');
    }

    if (path.startsWith('system/settings/')) {
      return actualEntitlements.includes('SYSTEM_SETTINGS_EDIT') || actualEntitlements.includes('ADMIN_SETTINGS');
    }

    return false;
  }

  function canViewTextItemAtPath(item: ExplorerItem | null, path: string): item is ExplorerItem {
    return !!item && item.type === 'file' && mode === 'natural' && isTextLike(item);
  }

  function isSitePath(path: string): boolean {
    return mode === 'natural' && (path === 'site' || path.startsWith('site/'));
  }

  function rawStorageKind(item: ExplorerItem): string | null {
    const storageKind = item.storage?.kind;
    if (typeof storageKind === 'string' && storageKind !== '') {
      return storageKind;
    }

    const itemKind = (item.kind || '').toLowerCase();
    return itemKind !== '' ? itemKind : null;
  }

  function rawStorageBadge(item: ExplorerItem): string {
    switch (rawStorageKind(item)) {
      case 'manifest':
        return 'MANIFEST';
      case 'chunk':
        return 'CHUNK';
      case 'raw-dir':
        return 'RAW DIR';
      case 'logical':
        return 'LOGICAL';
      default:
        return 'RAW';
    }
  }

  function rawStorageLabel(item: ExplorerItem): string {
    switch (rawStorageKind(item)) {
      case 'manifest':
        return 'Manifest storage object';
      case 'chunk':
        return 'Chunk storage object';
      case 'raw-dir':
        return 'Raw storage directory';
      case 'logical':
        return 'Logical storage record';
      default:
        return 'Storage object';
    }
  }

  function resetEditor(): void {
    editorText = '';
    originalText = '';
    saveState = 'idle';
    saveError = '';
  }

  function releaseImageUrl(): void {
    if (!imageUrl) {
      return;
    }

    URL.revokeObjectURL(imageUrl);
    imageUrl = null;
  }

  function commitStaticDisplay(item: ExplorerItem, path: string): void {
    releaseImageUrl();
    resetEditor();
    displayItem = item;
    displayPath = path;
    pendingPreview = false;
    status = 'idle';
    errorMsg = '';
  }

  function previewSrc(url: string, version: number): string {
    return `${url}${url.includes('?') ? '&' : '?'}__efsdbPreview=${version}`;
  }

  const editorDirty = $derived.by(() => canViewTextItemAtPath(displayItem, displayPath) && editorText !== originalText);

  const routeParams = $derived.by(() => {
    if (resourceKind(displayItem) !== 'Route' || !displayItem?.logicalPath) {
      return [];
    }

    const seen = new Set<string>();
    const params: string[] = [];
    const path = displayItem.logicalPath;
    const regex = /\[([^\]]+)\]/g;
    let match;
    while ((match = regex.exec(path)) !== null) {
      const param = match[1]?.trim() ?? '';
      if (param !== '' && !seen.has(param)) {
        seen.add(param);
        params.push(param);
      }
    }
    return params;
  });

  const builderTruth = $derived.by(() => {
    if (mode !== 'natural' || !displayItem) return null;
    const kind = resourceKind(displayItem);

    switch(kind) {
      case 'Route':
        return {
          role: 'Route Endpoint',
          behavior: 'Renders at this path. Inherits from the nearest layout. Can import components and fetch content.'
        };
      case 'Layout':
        return {
          role: 'Layout Wrapper',
          behavior: 'Wraps all routes in this directory and below. Changes here affect every nested route.'
        };
      case 'Component':
        return {
          role: 'UI Component',
          behavior: `Importable module. Changes here affect any route importing $lib/components/${displayItem.name}.`
        };
      case 'Content':
        return {
          role: 'Structured Data',
          behavior: 'JSON payload. Changing this instantly updates any page or component that fetches it.'
        };
      case 'Asset':
        return {
          role: 'Static Asset',
          behavior: 'Served directly. Changing this updates any pages or stylesheets referencing its path.'
        };
      case 'Meta':
        return {
          role: 'Site Configuration',
          behavior: 'Global settings. Changes here can affect site-wide rendering and system behavior.'
        };
      default:
        return null;
    }
  });

  let paramValues = $state<Record<string, string>>({});

  $effect(() => {
    if (displayPath) {
      paramValues = {};
    }
  });

  const resolvedPreviewUrl = $derived.by(() => {
    if (!runtimePreviewUrl) return null;
    if (resourceKind(displayItem) !== 'Route') return runtimePreviewUrl;
    if (routeParams.length === 0) return runtimePreviewUrl;

    let url = runtimePreviewUrl;
    for (const param of routeParams) {
      const val = paramValues[param]?.trim();
      if (!val) return null; // Wait for all params
      url = url.replace(`[${param}]`, encodeURIComponent(val));
      url = url.replace(`%5B${param}%5D`, encodeURIComponent(val));
    }
    return url;
  });

  const routePreviewNeedsParams = $derived.by(() => {
    return resourceKind(displayItem) === 'Route' && routeParams.length > 0 && resolvedPreviewUrl === null;
  });

  const iframeSrc = $derived.by(() => {
    if (resolvedPreviewUrl) {
      return previewSrc(resolvedPreviewUrl, iframeVersion);
    }

    return null;
  });
  const buildStatus = $derived.by(() => siteRuntime?.build ?? null);
  const buildFailed = $derived.by(() => buildStatus?.status === 'failed');
  const buildSummary = $derived.by(() => {
    switch (buildStatus?.status) {
      case 'building':
        return 'Building components…';
      case 'success':
        return `Component build ready${typeof buildStatus.componentCount === 'number' ? ` (${buildStatus.componentCount})` : ''}`;
      case 'failed':
        return 'Component build failed';
      default:
        return 'No component build running';
    }
  });

  async function loadSiteRuntime(
    path: string,
    options: { reloadPreview?: boolean; preserveLastGoodOnBuildFailure?: boolean } = {}
  ): Promise<void> {
    const token = ++runtimeToken;
    runtimeCtrl?.abort();
    runtimeCtrl = null;

    if (!isSitePath(path)) {
      siteRuntime = null;
      runtimeStatus = 'idle';
      runtimeError = '';
      runtimePreviewUrl = null;
      return;
    }

    runtimeStatus = 'loading';
    runtimeError = '';

    const controller = new AbortController();
    runtimeCtrl = controller;

    try {
      const nextRuntime = await client.siteRuntime(path, mode, controller.signal);
      if (token !== runtimeToken) {
        return;
      }

      let nextPreviewUrl = nextRuntime.preview?.url ?? null;
      if (nextRuntime.build?.status === 'failed' && nextRuntime.build?.lastGoodPreview) {
        nextPreviewUrl = nextRuntime.build.lastGoodPreview;
      }

      const previewChanged = nextPreviewUrl !== runtimePreviewUrl;
      const canReload =
        options.reloadPreview &&
        nextPreviewUrl !== null &&
        (!options.preserveLastGoodOnBuildFailure || nextRuntime.build?.status !== 'failed');

      siteRuntime = nextRuntime;
      runtimePreviewUrl = nextPreviewUrl;
      runtimeStatus = 'idle';
      runtimeError = '';

      if ((previewChanged || canReload) && nextPreviewUrl !== null) {
        iframeVersion += 1;
      }
    } catch (error: any) {
      if (error?.name === 'AbortError' || token !== runtimeToken) {
        return;
      }

      siteRuntime = null;
      runtimePreviewUrl = null;
      runtimeStatus = 'error';
      runtimeError = error?.message || 'Failed to load site runtime';
    }
  }

  async function loadPreviewAsset(): Promise<void> {
    const token = ++previewToken;
    ctrl?.abort();
    ctrl = null;

    if (!activeItem) {
      releaseImageUrl();
      resetEditor();
      displayItem = null;
      displayPath = '';
      pendingPreview = false;
      status = 'idle';
      errorMsg = '';
      siteRuntime = null;
      runtimeStatus = 'idle';
      runtimeError = '';
      runtimePreviewUrl = null;
      return;
    }

    if (activeItem.type === 'dir') {
      void loadSiteRuntime(itemPath(activeItem));
      commitStaticDisplay(activeItem, itemPath(activeItem));
      return;
    }

    if (mode === 'raw') {
      siteRuntime = null;
      runtimeStatus = 'idle';
      runtimeError = '';
      runtimePreviewUrl = null;
      commitStaticDisplay(activeItem, itemPath(activeItem));
      return;
    }

    const nextPath = itemPath(activeItem);
    void loadSiteRuntime(nextPath);

    if (displayPath === nextPath && displayItem?.name === activeItem.name && displayItem?.type === activeItem.type) {
      displayItem = activeItem;
      pendingPreview = false;
      status = 'idle';
      errorMsg = '';
      return;
    }

    if (canViewTextItemAtPath(activeItem, nextPath)) {
      pendingPreview = displayItem !== null;
      status = 'loading';
      errorMsg = '';

      const controller = new AbortController();
      ctrl = controller;

      try {
        const text = await client.downloadText(nextPath, mode, controller.signal);
        if (token !== previewToken) {
          return;
        }

        releaseImageUrl();
        editorText = text;
        originalText = text;
        saveState = 'idle';
        saveError = '';
        displayItem = activeItem;
        displayPath = nextPath;
        pendingPreview = false;
        status = 'idle';
        errorMsg = '';
      } catch (error: any) {
        if (error?.name === 'AbortError' || token !== previewToken) {
          return;
        }

        pendingPreview = false;
        errorMsg = error?.message || 'Failed to load';
        status = displayItem ? 'idle' : 'error';
      }
      return;
    }

    if (!isImage(activeItem)) {
      commitStaticDisplay(activeItem, nextPath);
      return;
    }

    pendingPreview = displayItem !== null;
    status = 'loading';
    errorMsg = '';

    const controller = new AbortController();
    ctrl = controller;

    try {
      const blob = await client.downloadBlob(nextPath, mode, controller.signal);
      if (token !== previewToken) {
        return;
      }

      const nextUrl = URL.createObjectURL(blob);
      releaseImageUrl();
      resetEditor();
      imageUrl = nextUrl;
      displayItem = activeItem;
      displayPath = nextPath;
      pendingPreview = false;
      status = 'idle';
      errorMsg = '';
    } catch (error: any) {
      if (error?.name === 'AbortError' || token !== previewToken) {
        return;
      }

      pendingPreview = false;
      errorMsg = error?.message || 'Failed to load';
      status = displayItem ? 'idle' : 'error';
    }
  }

  $effect(() => {
    void loadPreviewAsset();

    return () => {
      ctrl?.abort();
    };
  });

  onDestroy(() => {
    ctrl?.abort();
    runtimeCtrl?.abort();
    releaseImageUrl();
  });

  async function saveEditor(): Promise<void> {
    if (!canViewTextItemAtPath(displayItem, displayPath) || !editorDirty || saveState === 'saving' || pendingPreview) {
      return;
    }

    saveState = 'saving';
    saveError = '';

    try {
      await client.saveText(displayPath, mode, editorText, displayItem.mime || undefined);
      originalText = editorText;
      saveState = 'saved';
      await loadSiteRuntime(displayPath, {
        reloadPreview: true,
        preserveLastGoodOnBuildFailure: extOf(displayItem) === 'svelte' && displayPath.startsWith('site/')
      });
      await onSaved(displayPath);
    } catch (error: any) {
      saveState = 'idle';
      saveError = error?.message || 'Failed to save';
    }
  }

  async function deleteItem(): Promise<void> {
    if (!canViewTextItemAtPath(displayItem, displayPath) || pendingPreview || mode !== 'natural') {
      return;
    }

    if (!confirm(`Are you sure you want to delete ${displayItem.name}?`)) {
      return;
    }

    try {
      const confirmPassphrase = prompt(`Enter your passphrase to delete ${displayItem.name}:`);
      if (!confirmPassphrase) {
        return;
      }

      await client.delete(displayPath, mode, confirmPassphrase.trim());
      if (onDeleted) await onDeleted(displayPath);
    } catch (error: any) {
      errorMsg = error?.message || 'Failed to delete';
    }
  }

  async function renameItem(): Promise<void> {
    if (!canViewTextItemAtPath(displayItem, displayPath) || pendingPreview || mode !== 'natural') {
      return;
    }

    const newName = prompt('Enter new name:', displayItem.name);
    if (!newName || newName === displayItem.name) {
      return;
    }

    const segments = displayPath.split('/');
    segments.pop();
    segments.push(newName);
    const newPath = segments.join('/');

    try {
      await client.rename(displayPath, newPath, mode);
      if (onRenamed) await onRenamed(displayPath, newPath);
    } catch (error: any) {
      errorMsg = error?.message || 'Failed to rename';
    }
  }

  async function duplicateItem(): Promise<void> {
    if (!canViewTextItemAtPath(displayItem, displayPath) || pendingPreview || mode !== 'natural') {
      return;
    }

    const ext = extOf(displayItem);
    const baseName = displayItem.name.slice(0, -(ext.length + 1)) || displayItem.name;
    const newName = prompt('Enter name for duplicate:', `${baseName}-copy.${ext}`);
    if (!newName || newName === displayItem.name) {
      return;
    }

    const segments = displayPath.split('/');
    segments.pop();
    segments.push(newName);
    const newPath = segments.join('/');

    try {
      await client.duplicate(displayPath, newPath, mode);
      if (onDuplicated) await onDuplicated(newPath);
    } catch (error: any) {
      errorMsg = error?.message || 'Failed to duplicate';
    }
  }

  function revertEditor(): void {
    if (!canViewTextItemAtPath(displayItem, displayPath) || pendingPreview) {
      return;
    }

    editorText = originalText;
    saveState = 'idle';
    saveError = '';
  }

  async function copyPath() {
    if (!displayItem || displayPath === '') {
      return;
    }

    try {
      await navigator.clipboard.writeText(displayPath);
    } catch {
      // Ignore clipboard failures in constrained environments.
    }
  }
</script>

<aside class="pane" data-testid="explorer-preview-panel" style={`width:${widthPx}px; --preview-scale:${scale};`}>
  <header class="hdr">
    <div class="hdrCopy">
      <div class="eyebrow">{mode === 'raw' ? 'Storage inspector' : 'Explorer inspector'}</div>
      <div class="ttl">Preview</div>
      <div class="hdrMeta">
        {#if pendingPreview}
          Updating preview…
        {:else if siteRuntime?.preview}
          Real PHP runtime preview
        {:else}
          {mode === 'raw' ? 'Read-only storage context' : 'Readable item inspection'}
        {/if}
      </div>
    </div>
    <button class="btn" type="button" onclick={onToggle} title="Toggle preview">⟷</button>
  </header>

  <div class="body">
    {#if !displayItem && !activeItem}
      <section class="stateCard">
        <div class="stateIcon" aria-hidden="true">◎</div>
        <div class="stateEyebrow">Preview</div>
        <div class="stateTitle">Nothing selected</div>
        <p class="stateCopy">Choose a file or folder to inspect it here.</p>
      </section>
    {:else if !displayItem && status === 'loading'}
      <section class="stateCard">
        <div class="stateIcon" aria-hidden="true">⋯</div>
        <div class="stateEyebrow">Preview</div>
        <div class="stateTitle">Loading details</div>
        <p class="stateCopy">Preparing the selected item for inspection.</p>
      </section>
    {:else if !displayItem && status === 'error'}
      <section class="stateCard errorState">
        <div class="stateIcon" aria-hidden="true">!</div>
        <div class="stateEyebrow">Preview</div>
        <div class="stateTitle">Unable to load preview</div>
        <p class="stateCopy">{errorMsg}</p>
      </section>
    {:else if !displayItem}
      <section class="stateCard">
        <div class="stateIcon" aria-hidden="true">⋯</div>
        <div class="stateEyebrow">Preview</div>
        <div class="stateTitle">Preparing preview</div>
        <p class="stateCopy">Waiting for the selected item to resolve.</p>
      </section>
    {:else if displayItem?.type === 'dir'}
      <section class="summaryCard">
        <div class="fileBadge">DIR</div>
        <div class="meta">
          <div class="metaEyebrow">{mode === 'raw' ? 'Selected storage directory' : 'Selected folder'}</div>
          <div class="name">{displayItem.name}</div>
          <div class="sub">{mode === 'raw' ? 'Storage directory' : 'Folder'}</div>
        </div>
      </section>

      <div class="paths">
        <div class="pathsHdr">{mode === 'raw' ? 'Storage path' : 'Path'}</div>
        <button class="pathBox" type="button" onclick={copyPath} title="Copy">
          {displayPath}
        </button>
      </div>
    {:else if displayItem && canViewTextItemAtPath(displayItem, displayPath)}
      {#if errorMsg}
        <div class="err inline">{errorMsg}</div>
      {/if}

      {#if runtimeError}
        <div class="err inline">{runtimeError}</div>
      {/if}

      {#if siteRuntime?.preview}
        <section class="runtimeCard">
          <div class="runtimeHead">
            <div class="runtimeCopy">
              <div class="runtimeEyebrow">
                {#if resourceKind(displayItem) === 'Route'}
                  Live Route Preview
                {:else}
                  {siteRuntime.preview.label}
                {/if}
              </div>
              <div class="runtimeTitle">
                {#if resourceKind(displayItem) === 'Route' && resolvedPreviewUrl}
                  <a href={resolvedPreviewUrl} target="_blank" rel="noopener noreferrer" class="runtimeUrl">
                    {resolvedPreviewUrl}
                    <span class="extIcon" aria-hidden="true">↗</span>
                  </a>
                {:else if routePreviewNeedsParams}
                  Enter required route parameters to generate a live preview URL.
                {:else}
                  {siteRuntime.preview.url}
                {/if}
              </div>
            </div>
            <div
              class="runtimeBadge"
              class:isBuilding={buildStatus?.status === 'building'}
              class:isFailed={buildFailed}
            >
              {buildSummary}
            </div>
          </div>

          {#if buildStatus?.status === 'failed' && buildStatus.error}
            <div class="buildError">
              <div class="buildErrorMessage">{buildStatus.error.message}</div>
              {#if buildStatus.error.path}
                <div class="mono buildErrorPath">{buildStatus.error.path}</div>
              {/if}
              {#if buildStatus.error.frame}
                <pre class="code buildFrame">{buildStatus.error.frame}</pre>
              {/if}
            </div>
          {/if}

          {#if routeParams.length > 0}
            <div class="routeParams">
              <div class="routeParamsDesc">This route requires parameters to preview:</div>
              <div class="routeParamsInputs">
                {#each routeParams as param}
                  <div class="paramField">
                    <label for={`param-${param}`}>{param}</label>
                    <input
                      id={`param-${param}`}
                      type="text"
                      bind:value={paramValues[param]}
                      placeholder={`Enter ${param}...`}
                      autocomplete="off"
                      spellcheck="false"
                    />
                  </div>
                {/each}
              </div>
            </div>
          {/if}

          {#if iframeSrc}
            <iframe
              class="runtimeFrame"
              title={siteRuntime.preview.label}
              src={iframeSrc}
              loading="lazy"
            ></iframe>
          {:else if runtimeStatus === 'loading'}
            <div class="runtimeFallback">Loading runtime preview…</div>
          {:else}
            <div class="runtimeFallback">
              {#if resourceKind(displayItem) === 'Route'}
                This route does not map to a standard URL or requires parameters.
              {:else}
                Runtime preview URL is not available for this selection.
              {/if}
            </div>
          {/if}
        </section>
      {/if}

      <div class="editorBar">
        <div class="editorState">
          {#if pendingPreview}
            Loading text…
          {:else}
            Read-only text file
          {/if}
        </div>
        <div class="editorActions" style="display: flex; gap: 8px;">
          {#if resourceKind(displayItem) === 'Route' && resolvedPreviewUrl}
            <button
              class="actionBtn primary"
              type="button"
              onclick={() => {
                if (resolvedPreviewUrl) window.open(resolvedPreviewUrl, '_blank');
              }}
              disabled={pendingPreview}
              title="Open Route in new tab"
            >
              Open Route
            </button>
          {/if}
          {#if onPopOut}
            <button
              class="actionBtn secondary"
              type="button"
              onclick={() => onPopOut(displayItem!, displayPath)}
              disabled={pendingPreview}
              title="Pop out this file in a floating window"
            >
              Pop out
            </button>
          {/if}
          <button
            class="actionBtn {resourceKind(displayItem) === 'Route' && resolvedPreviewUrl ? 'secondary' : 'primary'}"
            type="button"
            onclick={() => {
              window.location.href = `/_efsdb/builder?path=${encodeURIComponent(displayPath)}`;
            }}
            disabled={pendingPreview}
            title="Edit this file in the Builder"
          >
            Open in Builder
          </button>
        </div>
      </div>

      {#if saveError}
        <div class="err inline">{saveError}</div>
      {/if}

      <CodeEditor
        data-testid="explorer-editor"
        bind:value={editorText}
        language={displayItem?.ext || 'text'}
        readonly={true}
        autofocus={false}
        contextLabel={(() => {
          const kind = resourceKind(displayItem);
          const path = displayItem?.logicalPath || displayItem?.name || '';
          return kind ? `${kind} · ${path}` : path;
        })()}
      />

      <div class="meta">
        <div class="metaEyebrow">Editable source</div>
        <div class="name">{displayItem.name}</div>
        <div class="sub">{displayItem.mime || displayItem.kind || ''}</div>
      </div>

      {#if mode === 'natural'}
        <div class="fileActions">
          <div class="fileActionsHdr">File actions</div>
          <div class="fileActionsRow">
            <button class="actionBtn secondary" type="button" onclick={renameItem} disabled={pendingPreview}>
              Rename
            </button>
            <button class="actionBtn secondary" type="button" onclick={duplicateItem} disabled={pendingPreview}>
              Duplicate
            </button>
            <button class="actionBtn danger" type="button" onclick={deleteItem} disabled={pendingPreview}>
              Delete
            </button>
          </div>
        </div>
      {/if}

      {#if builderTruth}
        <section class="relationCard">
          <div class="relationIcon" aria-hidden="true">⚗️</div>
          <div class="relationText">
            <div class="relationTitle">{builderTruth.role}</div>
            <div class="relationDesc">{builderTruth.behavior}</div>
          </div>
        </section>
      {/if}

      {#if displayItem.logicalPath}
        <div class="paths">
          <div class="pathsHdr">Logical path</div>
          <div class="pathBox static">{displayItem.logicalPath}</div>
        </div>
      {/if}

      <div class="paths">
        <div class="pathsHdr">Path</div>
        <button class="pathBox" type="button" onclick={copyPath} title="Copy">
          {displayPath}
        </button>
      </div>
    {:else}
      {#if errorMsg}
        <div class="err inline">{errorMsg}</div>
      {/if}

      {#if mode === 'raw'}
        <div class="fileBadge">{rawStorageBadge(displayItem)}</div>

        <section class="rawState">
          <div class="rawStateEyebrow">Raw mode</div>
          <div class="rawStateTitle">Storage preview only</div>
          <div class="rawStateCopy">
            Decoded content is hidden here. Switch to the natural view to inspect readable file contents.
          </div>

          <dl class="rawFacts">
            <div>
              <dt>Storage kind</dt>
              <dd>{rawStorageLabel(displayItem)}</dd>
            </div>
            {#if displayItem.entity}
              <div>
                <dt>Entity</dt>
                <dd>{displayItem.entity}</dd>
              </div>
            {/if}
            {#if displayItem.manifestId}
              <div>
                <dt>Manifest ID</dt>
                <dd class="mono">{displayItem.manifestId}</dd>
              </div>
            {/if}
            {#if typeof displayItem.storage?.chunkCount === 'number'}
              <div>
                <dt>Chunk count</dt>
                <dd>{displayItem.storage.chunkCount}</dd>
              </div>
            {/if}
          </dl>

          {#if rawStorageKind(displayItem) === 'manifest' || rawStorageKind(displayItem) === 'chunk'}
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border);">
              {#await client.getDownloadUrl(displayItem.rawPath || '', mode)}
                <div style="color: var(--muted); font-size: 0.85rem;">Generating storage ticket...</div>
              {:then url}
                <efsdb-envelope-inspector {url}></efsdb-envelope-inspector>
              {:catch err}
                <div style="color: var(--danger); font-size: 0.85rem;">Could not inspect envelope: {err.message}</div>
              {/await}
            </div>
          {/if}
        </section>
      {:else if isImage(displayItem) && imageUrl}
        <div class="imgWrap">
          <img src={imageUrl} alt={displayItem.name} />
        </div>
      {:else if displayItem.preview}
        <pre class="code">{displayItem.preview}</pre>
      {:else}
        <div class="fileBadge">{displayItem.ext || displayItem.kind || 'FILE'}</div>
      {/if}

      <div class="meta">
        <div class="metaEyebrow">{mode === 'raw' ? 'Selected storage object' : 'Selected file'}</div>
        <div class="name">{displayItem.name}</div>
        <div class="sub">{mode === 'raw' ? rawStorageLabel(displayItem) : displayItem.mime || displayItem.kind || ''}</div>
      </div>

      {#if builderTruth}
        <section class="relationCard">
          <div class="relationIcon" aria-hidden="true">⚗️</div>
          <div class="relationText">
            <div class="relationTitle">{builderTruth.role}</div>
            <div class="relationDesc">{builderTruth.behavior}</div>
          </div>
        </section>
      {/if}

      {#if displayItem.logicalPath}
        <div class="paths">
          <div class="pathsHdr">{mode === 'raw' ? 'Linked logical path' : 'Logical path'}</div>
          <div class="pathBox static">{displayItem.logicalPath}</div>
        </div>
      {/if}

      {#if resourceKind(displayItem) === 'Asset' && displayPath.includes('/assets/')}
        <div class="paths">
          <div class="pathsHdr">Public URL</div>
          <button class="pathBox" type="button" onclick={() => navigator.clipboard.writeText('/assets/' + displayPath.split('/assets/')[1])} title="Copy public URL">
            {'/assets/' + displayPath.split('/assets/')[1]}
          </button>
        </div>
      {/if}

      <div class="paths">
        <div class="pathsHdr">{mode === 'raw' ? 'Storage path' : 'Path'}</div>
        <button class="pathBox" type="button" onclick={copyPath} title="Copy">
          {displayPath}
        </button>
      </div>
    {/if}
  </div>
</aside>

<style>
.pane {
    min-width: 260px;
    max-width: min(40vw, 500px);
    min-height: 0;
    border-left: 1px solid var(--border);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 3%),
        color-mix(in oklab, var(--panel), black 6%)
      ),
      radial-gradient(
        circle at top right,
        color-mix(in oklab, var(--primary), transparent 95%),
        transparent 28%
      );
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow:
      inset 1px 0 0 color-mix(in oklab, var(--text), transparent 94%),
      inset 0 1px 0 color-mix(in oklab, white, transparent 97%);
  }

  .hdr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(12px * var(--preview-scale));
    padding: calc(12px * var(--preview-scale)) calc(14px * var(--preview-scale));
    border-bottom: 1px solid var(--border);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), var(--card) 22%),
        color-mix(in oklab, var(--panel), var(--card) 12%)
      );
  }

  .hdrCopy {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: calc(4px * var(--preview-scale));
  }

  .eyebrow {
    font-size: calc(11px * var(--preview-scale));
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .ttl {
    font-weight: 800;
    font-size: calc(16px * var(--preview-scale));
    line-height: 1.2;
    color: var(--text);
  }

  .hdrMeta {
    font-size: calc(12px * var(--preview-scale));
    color: color-mix(in oklab, var(--muted), var(--text) 10%);
    line-height: 1.45;
  }

  .btn {
    width: calc(34px * var(--preview-scale));
    height: calc(30px * var(--preview-scale));
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    cursor: pointer;
    transition:
      background 120ms ease,
      border-color 120ms ease;
  }

  .btn:hover {
    background: color-mix(in oklab, var(--card), var(--text) 4%);
    border-color: color-mix(in oklab, var(--border), var(--text) 16%);
  }

  .btn:focus-visible,
  .actionBtn:focus-visible,
  .pathBox:focus-visible {
    outline: 2px solid color-mix(in oklab, var(--primary), transparent 45%);
    outline-offset: 2px;
  }

  .body {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: calc(12px * var(--preview-scale));
    padding: calc(12px * var(--preview-scale));
    overflow: auto;
    min-height: 0;
    height: 100%;
    overscroll-behavior: contain;
    font-size: calc(14px * var(--preview-scale));
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), transparent 6%),
        color-mix(in oklab, var(--panel), var(--bg) 18%)
      );
    scrollbar-width: thin;
    scrollbar-color: color-mix(in oklab, var(--border), var(--text) 14%) transparent;
  }

  .body::-webkit-scrollbar,
  .code::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .body::-webkit-scrollbar-track,
  .code::-webkit-scrollbar-track {
    background: transparent;
  }

  .body::-webkit-scrollbar-thumb,
  .code::-webkit-scrollbar-thumb {
    border-radius: 999px;
    border: 2px solid transparent;
    background: color-mix(in oklab, var(--border), var(--text) 14%);
    background-clip: padding-box;
  }

  .body::-webkit-scrollbar-thumb:hover,
  .code::-webkit-scrollbar-thumb:hover {
    background: color-mix(in oklab, var(--border), var(--text) 22%);
    background-clip: padding-box;
  }

  .body > * {
    min-width: 0;
  }

  .stateCard,
  .err {
    border-radius: 16px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 8%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    padding: calc(18px * var(--preview-scale));
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 14px 28px rgba(0, 0, 0, 0.08);
  }

  .stateCard {
    min-height: calc(176px * var(--preview-scale));
    display: grid;
    align-content: center;
    gap: calc(6px * var(--preview-scale));
    text-align: center;
  }

  .stateIcon {
    width: calc(56px * var(--preview-scale));
    height: calc(56px * var(--preview-scale));
    margin: 0 auto calc(6px * var(--preview-scale));
    border-radius: 18px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 2%),
        color-mix(in oklab, var(--panel), black 4%)
      );
    display: grid;
    place-items: center;
    color: color-mix(in oklab, var(--primary), var(--text) 18%);
    font-size: calc(24px * var(--preview-scale));
    font-weight: 700;
    box-shadow: inset 0 1px 0 color-mix(in oklab, white, transparent 95%);
  }

  .stateEyebrow {
    font-size: calc(11px * var(--preview-scale));
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .stateTitle {
    font-size: calc(18px * var(--preview-scale));
    font-weight: 800;
    line-height: 1.25;
    color: var(--text);
  }

  .stateCopy {
    margin: 0;
    color: var(--muted);
    line-height: 1.55;
  }

  .errorState,
  .err {
    border-color: color-mix(in oklab, var(--danger), transparent 55%);
    background: color-mix(in oklab, var(--danger), transparent 87%);
  }

  .err {
    color: var(--text);
  }

  .err.inline {
    margin-bottom: 0;
  }

  .imgWrap {
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), black 12%),
        color-mix(in oklab, var(--card), black 22%)
      );
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    border-radius: 18px;
    padding: calc(12px * var(--preview-scale));
    display: grid;
    place-items: center;
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 14px 24px rgba(0, 0, 0, 0.08);
  }

  img {
    max-height: calc(220px * var(--preview-scale));
    max-width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }

  .code {
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--codeBg), white 1%),
        color-mix(in oklab, var(--codeBg), black 4%)
      );
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    border-radius: 18px;
    padding: calc(14px * var(--preview-scale));
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
    font-size: calc(12px * var(--preview-scale));
    white-space: pre-wrap;
    max-height: 260px;
    overflow: auto;
    line-height: 1.6;
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 14px 24px rgba(0, 0, 0, 0.08);
  }

  .rawState {
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    border-radius: 18px;
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    padding: calc(16px * var(--preview-scale));
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 14px 24px rgba(0, 0, 0, 0.08);
  }

  .rawStateEyebrow {
    font-size: calc(11px * var(--preview-scale));
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: calc(4px * var(--preview-scale));
  }

  .rawStateTitle {
    font-size: calc(15px * var(--preview-scale));
    font-weight: 800;
    color: var(--text);
    margin-bottom: calc(8px * var(--preview-scale));
  }

  .rawStateCopy {
    color: var(--muted);
    line-height: 1.5;
    margin-bottom: calc(12px * var(--preview-scale));
  }

  .rawFacts {
    display: grid;
    gap: calc(10px * var(--preview-scale));
    margin: 0;
  }

  .rawFacts > div {
    border: 1px solid var(--border);
    border-radius: 12px;
    background: color-mix(in oklab, var(--codeBg), transparent 28%);
    padding: calc(10px * var(--preview-scale));
  }

  .rawFacts dt {
    font-size: calc(11px * var(--preview-scale));
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .rawFacts dd {
    margin: calc(4px * var(--preview-scale)) 0 0;
    word-break: break-word;
  }

  .mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
  }

  .runtimeCard {
    display: grid;
    gap: calc(12px * var(--preview-scale));
    padding: calc(14px * var(--preview-scale));
    border-radius: 18px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 14px 24px rgba(0, 0, 0, 0.08);
  }

  .runtimeHead {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: calc(10px * var(--preview-scale));
  }

  .runtimeCopy {
    min-width: 0;
    display: grid;
    gap: calc(4px * var(--preview-scale));
  }

  .runtimeEyebrow {
    font-size: calc(11px * var(--preview-scale));
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .runtimeTitle {
    font-size: calc(13px * var(--preview-scale));
    font-weight: 700;
    color: var(--text);
    word-break: break-word;
  }

  .runtimeBadge {
    flex: 0 0 auto;
    min-height: calc(28px * var(--preview-scale));
    padding: 0 calc(10px * var(--preview-scale));
    border-radius: 999px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background: color-mix(in oklab, var(--card), var(--text) 2%);
    color: var(--text);
    display: inline-flex;
    align-items: center;
    font-size: calc(11px * var(--preview-scale));
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .runtimeBadge.isBuilding {
    border-color: color-mix(in oklab, var(--primary), transparent 55%);
    background: color-mix(in oklab, var(--primary), transparent 86%);
  }

  .runtimeBadge.isFailed {
    border-color: color-mix(in oklab, var(--danger), transparent 52%);
    background: color-mix(in oklab, var(--danger), transparent 86%);
  }

  .runtimeFrame {
    width: 100%;
    min-height: clamp(220px, 28dvh, 360px);
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    border-radius: 14px;
    background: white;
  }

  .runtimeFallback,
  .buildError {
    border-radius: 14px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background: color-mix(in oklab, var(--codeBg), transparent 18%);
    padding: calc(12px * var(--preview-scale));
  }

  .buildError {
    border-color: color-mix(in oklab, var(--danger), transparent 58%);
    background: color-mix(in oklab, var(--danger), transparent 90%);
    display: grid;
    gap: calc(6px * var(--preview-scale));
  }

  .buildErrorMessage {
    color: var(--text);
    font-weight: 700;
    line-height: 1.45;
  }

  .buildErrorPath {
    font-size: calc(12px * var(--preview-scale));
  }

  .buildFrame {
    max-height: 200px;
    margin: 0;
  }

  .editorBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: calc(10px * var(--preview-scale));
    padding: calc(14px * var(--preview-scale)) calc(16px * var(--preview-scale));
    border-radius: 18px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 14px 24px rgba(0, 0, 0, 0.08);
  }

  .relationCard {
    display: flex;
    align-items: flex-start;
    gap: calc(12px * var(--preview-scale));
    padding: calc(14px * var(--preview-scale));
    border-radius: 16px;
    background: color-mix(in oklab, var(--primary), transparent 94%);
    border: 1px solid color-mix(in oklab, var(--primary), transparent 82%);
  }

  .relationIcon {
    font-size: calc(18px * var(--preview-scale));
    display: flex;
    align-items: flex-start;
    justify-content: center;
    line-height: 1;
  }

  .relationText {
    display: flex;
    flex-direction: column;
    gap: calc(4px * var(--preview-scale));
  }

  .relationTitle {
    font-weight: 800;
    font-size: calc(11px * var(--preview-scale));
    color: var(--text);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .relationDesc {
    font-size: calc(13px * var(--preview-scale));
    line-height: 1.45;
    color: var(--muted);
  }

  .createdNotice {
    display: flex;
    gap: calc(14px * var(--preview-scale));
    padding: calc(16px * var(--preview-scale));
    border-radius: 18px;
    background: color-mix(in oklab, var(--accent, #34d399), transparent 85%);
    border: 1px solid color-mix(in oklab, var(--accent, #34d399), transparent 60%);
    margin-bottom: calc(-10px * var(--preview-scale));
  }

  .createdIcon {
    font-size: calc(20px * var(--preview-scale));
    display: flex;
    align-items: flex-start;
    justify-content: center;
    line-height: 1;
  }

  .createdText {
    display: flex;
    flex-direction: column;
    gap: calc(6px * var(--preview-scale));
  }

  .createdTitle {
    font-weight: 700;
    font-size: calc(14px * var(--preview-scale));
    color: var(--primaryText);
    letter-spacing: -0.01em;
  }

  .createdDesc {
    font-size: calc(13px * var(--preview-scale));
    line-height: 1.5;
    color: color-mix(in oklab, var(--primaryText), transparent 20%);
  }

  .runtimeTitle {
    font-weight: 700;
    font-size: calc(14px * var(--preview-scale));
    color: var(--primaryText);
    letter-spacing: -0.01em;
  }

  .runtimeUrl {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: calc(6px * var(--preview-scale));
  }

  .runtimeUrl:hover {
    text-decoration: underline;
  }

  .extIcon {
    font-size: calc(12px * var(--preview-scale));
    opacity: 0.5;
  }

  .runtimeBadge {
    font-size: calc(11px * var(--preview-scale));
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--muted);
    padding: calc(4px * var(--preview-scale)) calc(8px * var(--preview-scale));
    border-radius: 6px;
    background: color-mix(in oklab, var(--card), transparent 10%);
    border: 1px solid color-mix(in oklab, var(--border), transparent 10%);
  }

  .routeParams {
    padding: calc(12px * var(--preview-scale)) calc(16px * var(--preview-scale));
    background: color-mix(in oklab, var(--card), transparent 20%);
    border-bottom: 1px solid color-mix(in oklab, var(--border), transparent 20%);
  }

  .routeParamsDesc {
    font-size: calc(12px * var(--preview-scale));
    color: var(--muted);
    margin-bottom: calc(10px * var(--preview-scale));
  }

  .routeParamsInputs {
    display: flex;
    flex-wrap: wrap;
    gap: calc(12px * var(--preview-scale));
  }

  .paramField {
    display: flex;
    align-items: center;
    gap: calc(8px * var(--preview-scale));
    background: color-mix(in oklab, var(--panel), transparent 20%);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: calc(4px * var(--preview-scale)) calc(8px * var(--preview-scale));
  }

  .paramField label {
    font-size: calc(11px * var(--preview-scale));
    font-weight: 700;
    font-family: var(--efs-font-mono);
    color: var(--primaryText);
    background: color-mix(in oklab, var(--primary), transparent 10%);
    padding: calc(2px * var(--preview-scale)) calc(6px * var(--preview-scale));
    border-radius: 4px;
  }

  .paramField input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--text);
    font-size: calc(13px * var(--preview-scale));
    font-family: var(--efs-font-mono);
    width: 120px;
  }

  .paramField input:focus {
    color: var(--primary);
  }

  .editorState {
    color: var(--muted);
    font-size: calc(12px * var(--preview-scale));
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .editorActions {
    display: inline-flex;
    align-items: center;
    gap: calc(8px * var(--preview-scale));
  }

  .actionBtn {
    min-height: calc(32px * var(--preview-scale));
    padding: 0 calc(12px * var(--preview-scale));
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    cursor: pointer;
    font-size: calc(12px * var(--preview-scale));
    font-weight: 700;
    transition:
      background 120ms ease,
      border-color 120ms ease,
      color 120ms ease;
  }

  .actionBtn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .actionBtn:hover:not(:disabled) {
    background: color-mix(in oklab, var(--card), var(--text) 4%);
    border-color: color-mix(in oklab, var(--border), var(--text) 16%);
  }

  .actionBtn.primary {
    background: var(--primary);
    color: var(--primaryText);
    border-color: color-mix(in oklab, var(--primary), black 18%);
  }

  .actionBtn.secondary {
    background: color-mix(in oklab, var(--card), var(--text) 2%);
  }

  .actionBtn.danger {
    color: var(--danger);
    border-color: color-mix(in oklab, var(--danger), transparent 70%);
  }

  .actionBtn.danger:hover:not(:disabled) {
    background: var(--danger);
    color: white;
    border-color: var(--danger);
  }

  .fileActions {
    padding: calc(14px * var(--preview-scale)) calc(16px * var(--preview-scale));
    border-radius: 18px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 14px 24px rgba(0, 0, 0, 0.08);
  }

  .fileActionsHdr {
    font-size: calc(11px * var(--preview-scale));
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: calc(10px * var(--preview-scale));
  }

  .fileActionsRow {
    display: flex;
    flex-wrap: wrap;
    gap: calc(8px * var(--preview-scale));
  }

  .summaryCard {
    display: grid;
    gap: calc(12px * var(--preview-scale));
    min-height: 0;
  }

  .fileBadge {
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), var(--panel) 10%),
        color-mix(in oklab, var(--card), black 3%)
      );
    border-radius: 18px;
    padding: calc(30px * var(--preview-scale)) calc(12px * var(--preview-scale));
    display: grid;
    place-items: center;
    font-weight: 900;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 95%),
      0 14px 24px rgba(0, 0, 0, 0.08);
  }

  .meta {
    padding: calc(14px * var(--preview-scale)) calc(16px * var(--preview-scale));
    border-radius: 18px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 14px 24px rgba(0, 0, 0, 0.08);
  }

  .metaEyebrow {
    margin-bottom: calc(6px * var(--preview-scale));
    font-size: calc(11px * var(--preview-scale));
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .name {
    font-weight: 900;
    font-size: calc(16px * var(--preview-scale));
    line-height: 1.3;
    color: var(--text);
    word-break: break-word;
  }

  .sub {
    color: var(--muted);
    font-size: calc(12px * var(--preview-scale));
    margin-top: 2px;
  }

  .paths {
    min-width: 0;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    border-radius: 18px;
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    padding: calc(14px * var(--preview-scale)) calc(16px * var(--preview-scale));
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 14px 24px rgba(0, 0, 0, 0.08);
  }

  .pathsHdr {
    font-size: calc(11px * var(--preview-scale));
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: calc(8px * var(--preview-scale));
  }

  .pathBox {
    display: block;
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;
    width: 100%;
    text-align: left;
    border-radius: 12px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--codeBg), white 1%),
        color-mix(in oklab, var(--codeBg), black 3%)
      );
    color: var(--text);
    padding: calc(12px * var(--preview-scale));
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
    font-size: calc(12px * var(--preview-scale));
    overflow-wrap: anywhere;
    word-break: break-word;
    cursor: pointer;
    transition:
      border-color 120ms ease,
      background 120ms ease,
      transform 120ms ease;
  }

  .pathBox:hover {
    background: color-mix(in oklab, var(--codeBg), var(--text) 4%);
    border-color: color-mix(in oklab, var(--border), var(--text) 16%);
    transform: translateY(-1px);
  }

  .pathBox.static {
    cursor: default;
    color: var(--text);
  }

  @media (max-width: 63.99rem) {
    .pane {
      min-width: 220px;
      max-width: min(44vw, 420px);
    }
  }
</style>
