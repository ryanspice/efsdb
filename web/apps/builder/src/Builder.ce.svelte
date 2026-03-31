<svelte:options
  customElement={{
    tag: 'efsdb-builder',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import type { AuthResponse } from '@contracts/auth';
  import type { BuilderBootstrapPayload, BuilderBootstrapTrees } from '@contracts/builder';
  import type { BootstrapTheme } from '@contracts/bootstrap';
  import type { ExplorerItem } from '@contracts/explorer';
  import { loginWithKey, setAccessToken } from '@utils/bootstrap/authBridge';
  import { readBootstrapPayloadForApp } from '@utils/bootstrap/hostProps';
  import { getTheme, onThemeChange } from '@utils/bootstrap/themeBridge';
  import { onMount } from 'svelte';
  import AppGuard from '../../../ui/components/shell/AppGuard.svelte';
  import CodeEditor from '../../../ui/components/CodeEditor.svelte';
  import AppShell from '../../../ui/components/shell/AppShell.svelte';
  import { DataClient } from '../../explorer/src/lib/api/explorerClient';

  const bootstrap = readBootstrapPayloadForApp<BuilderBootstrapPayload>('builder');
  const host = $host();
  const api = new DataClient(bootstrap.apiBase ?? '/_efsdb/api/explorer');
  const authBase = bootstrap.authBase ?? '/_efsdb/api/auth';

  const EDITABLE_EXTENSIONS = new Set([
    'php',
    'phtml',
    'css',
    'scss',
    'sass',
    'less',
    'html',
    'htm',
    'svelte',
    'vue',
    'jsx',
    'tsx',
    'json',
    'jsonc',
    'xml',
    'yaml',
    'yml',
    'toml',
    'md',
    'markdown',
    'txt',
    'text',
    'csv',
    'js',
    'mjs',
    'ts',
    'mts',
    'svg',
    'ico'
  ]);

  let bootState = $state<'loading' | 'ready' | 'auth_required' | 'error'>('loading');
  let bootMessage = $state('');

  const initialPath = bootstrap.initial?.path || '';
  const bootstrappedTrees: BuilderBootstrapTrees = bootstrap.initial?.trees ?? {};
  const bootstrappedBranches = new Map<string, ExplorerItem[]>(
    Object.entries(bootstrap.initial?.branches ?? {})
  );
  const bootstrappedSelectedFile = bootstrap.initial?.selectedFile ?? null;

  let selectedPath = $state<string>(initialPath);
  let paramValues = $state<Record<string, string>>({});
  let iframeVersion = $state(0);

  type ColumnId = 'sidebar' | 'editor' | 'preview';
  let columns = $state<{ id: ColumnId, width: number | null, flex: number }[]>([
    { id: 'sidebar', width: 300, flex: 0 },
    { id: 'editor', width: null, flex: 1 },
    { id: 'preview', width: 400, flex: 0 }
  ]);

  let activeResizer = $state<number | null>(null);
  let startX = 0;
  let startWidths = [0, 0];

  function startResize(index: number, e: MouseEvent) {
    activeResizer = index;
    startX = e.clientX;
    const colLeft = columns[index];
    const colRight = columns[index + 1];

    // Convert flex to fixed width for resizing if needed
    const leftEl = document.getElementById(`col-${colLeft.id}`);
    const rightEl = document.getElementById(`col-${colRight.id}`);

    startWidths = [
      leftEl ? leftEl.offsetWidth : (colLeft.width || 0),
      rightEl ? rightEl.offsetWidth : (colRight.width || 0)
    ];

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopResize);
    document.body.style.cursor = 'col-resize';
  }

  function onMouseMove(e: MouseEvent) {
    if (activeResizer === null) return;
    const dx = e.clientX - startX;

    const colLeft = columns[activeResizer];
    const colRight = columns[activeResizer + 1];

    let newLeftWidth = startWidths[0] + dx;
    let newRightWidth = startWidths[1] - dx;

    // Minimum width constraints
    if (newLeftWidth < 100) {
      newRightWidth -= (100 - newLeftWidth);
      newLeftWidth = 100;
    }
    if (newRightWidth < 100) {
      newLeftWidth -= (100 - newRightWidth);
      newRightWidth = 100;
    }

    if (colLeft.flex === 0) colLeft.width = newLeftWidth;
    if (colRight.flex === 0) colRight.width = newRightWidth;

    columns = [...columns]; // trigger reactivity
  }

  function stopResize() {
    activeResizer = null;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', stopResize);
    document.body.style.cursor = '';
  }

  let draggedCol = $state<ColumnId | null>(null);

  function handleDragStart(e: DragEvent, id: ColumnId) {
    draggedCol = id;
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', id);
    }
  }

  function handleDragOver(e: DragEvent, targetId: ColumnId) {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
  }

  function handleDrop(e: DragEvent, targetId: ColumnId) {
    e.preventDefault();
    if (!draggedCol || draggedCol === targetId) return;

    const fromIdx = columns.findIndex(c => c.id === draggedCol);
    const toIdx = columns.findIndex(c => c.id === targetId);

    const newCols = [...columns];
    const [moved] = newCols.splice(fromIdx, 1);
    newCols.splice(toIdx, 0, moved);
    columns = newCols;
    draggedCol = null;
  }

  let fileContent = $state<string>('');
  let isEditing = $state(false);
  let isSaving = $state(false);
  let isLoadingFile = $state(false);
  let fileError = $state('');
  let selectedFileEditable = $state(false);
  let fileLanguage = $state<string>('text');
  let selectedMime = $state<string | undefined>(undefined);
  let fileLoadAbortController: AbortController | null = null;
  let fileLoadToken = 0;
  let bootstrappedSelectedFileConsumed = false;

  type TreeNode = {
    item: ExplorerItem;
    path: string;
    children?: TreeNode[];
    expanded: boolean;
    loading: boolean;
  };

  let rootNodes = $state<TreeNode[]>([]);
  let secondaryNodes = $state<TreeNode[]>([]);
  let loadingTree = $state(true);
  let builderEnv = $state<'staging' | 'production'>(
    initialPath.startsWith('site/production/') ? 'production' : 'staging'
  );
  let initialTreesConsumed = false;

  let sidebarWidth = $state(300);
  let previewWidth = $state(400);

  function treeNodesFromItems(items: ExplorerItem[], basePath = ''): TreeNode[] {
    return items.map((item) => ({
      item,
      path: item.logicalPath || (basePath ? `${basePath}/${item.name}` : item.name),
      expanded: false,
      loading: false
    }));
  }

  function bootstrappedRootNodes(env: 'staging' | 'production'): TreeNode[] | null {
    const items = env === 'production' ? bootstrappedTrees.productionRoot : bootstrappedTrees.stagingRoot;
    if (!Array.isArray(items)) {
      return null;
    }

    return treeNodesFromItems(items, `site/${env}`);
  }

  function bootstrappedSecondaryNodes(): TreeNode[] | null {
    if (!Array.isArray(bootstrappedTrees.secondaryRoot)) {
      return null;
    }

    return treeNodesFromItems(bootstrappedTrees.secondaryRoot);
  }

  function consumeBootstrappedBranch(path: string): TreeNode[] | null {
    const items = bootstrappedBranches.get(path);
    if (!items) {
      return null;
    }

    bootstrappedBranches.delete(path);
    return treeNodesFromItems(items, path);
  }

  async function loadTree(path: string): Promise<TreeNode[]> {
    const seeded = consumeBootstrappedBranch(path);
    if (seeded !== null) {
      return seeded;
    }

    try {
      const res = await api.list(path, 'natural');
      return res.items.map(item => ({
        item,
        path: item.logicalPath || (path ? `${path}/${item.name}` : item.name),
        expanded: false,
        loading: false
      }));
    } catch (err) {
      console.error('Failed to load tree for path:', path, err);
      return [];
    }
  }

  function decodeBootstrappedText(contentBase64: string): string {
    const binary = window.atob(contentBase64);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  function hydrateBootstrappedSelectedFile(path: string, item?: ExplorerItem): boolean {
    if (
      bootstrappedSelectedFileConsumed ||
      !bootstrappedSelectedFile ||
      bootstrappedSelectedFile.path !== path
    ) {
      return false;
    }

    bootstrappedSelectedFileConsumed = true;
    selectedMime = bootstrappedSelectedFile.mime || item?.mime;

    const ext = (bootstrappedSelectedFile.ext || item?.ext || extensionForPath(path)).toLowerCase();
    fileLanguage = ext;

    if (!isEditablePath(path, bootstrappedSelectedFile.mime || item?.mime, bootstrappedSelectedFile.ext || item?.ext)) {
      selectedFileEditable = false;
      isEditing = false;
      isLoadingFile = false;
      fileContent = '';
      return true;
    }

    selectedFileEditable = true;
    fileContent = decodeBootstrappedText(bootstrappedSelectedFile.contentBase64);
    isEditing = true;
    isLoadingFile = false;
    fileError = '';
    return true;
  }

  async function hydrateSession(): Promise<boolean> {
    const refreshed = await api.refreshAccessToken();
    if (!refreshed) {
      bootState = 'auth_required';
      bootMessage = 'Sign in is required before the builder can load.';
      return false;
    }

    return true;
  }

  async function loadWorkspace(env: 'staging' | 'production', preferBootstrap = false): Promise<void> {
    loadingTree = true;
    bootMessage = '';

    try {
      const seededRoot = preferBootstrap ? bootstrappedRootNodes(env) : null;
      const seededSecondary = preferBootstrap ? bootstrappedSecondaryNodes() : null;

      const [primary, secondary] = await Promise.all([
        seededRoot !== null ? Promise.resolve(seededRoot) : loadTree(`site/${env}`),
        seededSecondary !== null
          ? Promise.resolve(seededSecondary)
          : loadTree('').then((items) => items.filter((node) => node.item.name === 'projects' || node.item.name === 'system'))
      ]);

      rootNodes = primary;
      secondaryNodes = secondary;
      initialTreesConsumed = initialTreesConsumed || preferBootstrap;
      bootState = 'ready';
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Failed to load builder.';
      if (message.startsWith('HTTP 401')) {
        bootState = 'auth_required';
        bootMessage = 'Your session is no longer valid. Sign in again to continue.';
        return;
      }

      bootState = 'error';
      bootMessage = message;
    } finally {
      loadingTree = false;
    }
  }

  function extensionForPath(path: string): string {
    const ext = path.split('.').pop()?.trim().toLowerCase() ?? '';
    return ext === '' ? 'text' : ext;
  }

  function isEditablePath(path: string, mime?: string, ext?: string): boolean {
    if (typeof mime === 'string') {
      const lowered = mime.toLowerCase();
      if (
        lowered.startsWith('text/') ||
        lowered.includes('json') ||
        lowered.includes('javascript') ||
        lowered.includes('xml') ||
        lowered.includes('x-httpd-php')
      ) {
        return true;
      }
    }

    const effectiveExt = (ext || extensionForPath(path)).toLowerCase();
    return EDITABLE_EXTENSIONS.has(effectiveExt);
  }

  async function selectFile(path: string, item?: ExplorerItem): Promise<void> {
    selectedPath = path;
    fileError = '';
    selectedMime = item?.mime;
    const ext = (item?.ext || extensionForPath(path)).toLowerCase();
    fileLanguage = ext;

    if (!isEditablePath(path, item?.mime, item?.ext)) {
      selectedFileEditable = false;
      isEditing = false;
      isLoadingFile = false;
      fileContent = '';
      return;
    }

    selectedFileEditable = true;
    if (hydrateBootstrappedSelectedFile(path, item)) {
      return;
    }

    fileLoadAbortController?.abort();
    fileLoadAbortController = new AbortController();
    const token = ++fileLoadToken;
    isLoadingFile = true;
    isEditing = false;

    try {
      const content = await api.downloadText(path, 'natural', fileLoadAbortController.signal);
      if (token !== fileLoadToken) {
        return;
      }

      fileContent = content;
      isEditing = true;
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        return;
      }

      if (token !== fileLoadToken) {
        return;
      }

      fileContent = '';
      isEditing = false;
      fileError = err instanceof Error ? err.message : 'Unable to load the selected file.';
      console.error('Failed to load file content:', err);
    } finally {
      if (token === fileLoadToken) {
        isLoadingFile = false;
      }
    }
  }

  async function revealSelectedPath(path: string): Promise<void> {
    const trimmed = path.trim();
    if (trimmed === '' || !trimmed.startsWith(`site/${builderEnv}/`)) {
      return;
    }

    const segments = trimmed.split('/').filter(Boolean);
    if (segments.length < 4) {
      return;
    }

    const isFile = path.split('/').pop()?.includes('.') ?? false;
    const terminalIndex = isFile ? segments.length - 1 : segments.length;
    let nodes = rootNodes;
    let currentPath = `site/${builderEnv}`;

    for (let index = 2; index < terminalIndex; index++) {
      const segment = segments[index];
      const targetPath = `${currentPath}/${segment}`;
      const node = nodes.find((candidate) => candidate.path === targetPath || candidate.item.name === segment);
      if (!node || node.item.type !== 'dir') {
        return;
      }

      node.expanded = true;
      if (!node.children) {
        node.loading = true;
        node.children = await loadTree(node.path);
        node.loading = false;
      }

      currentPath = node.path;
      nodes = node.children ?? [];
    }

    rootNodes = [...rootNodes];
  }

  async function toggleNode(node: TreeNode) {
    if (node.item.type !== 'dir') {
      await selectFile(node.path, node.item);
      return;
    }

    if (node.expanded) {
      node.expanded = false;
    } else {
      node.expanded = true;
      if (!node.children) {
        node.loading = true;
        node.children = await loadTree(node.path);
        node.loading = false;
      }
    }
  }

  type SelectedRoute = {
    env: 'staging' | 'production';
    routePattern: string;
  };

  function selectedRouteFromPath(path: string): SelectedRoute | null {
    const match = path.match(/^site\/(staging|production)\/routes\/(.*)$/);
    if (!match) return null;

    const env = match[1] as 'staging' | 'production';
    let routePattern = match[2] || '';
    if (routePattern === '') return null;
    if (!(routePattern.endsWith('.php') || routePattern.endsWith('.html') || routePattern.endsWith('.htm'))) {
      return null;
    }

    if (routePattern === 'index.php' || routePattern === 'index.html' || routePattern === 'index.htm') {
      routePattern = '';
    } else if (
      routePattern.endsWith('/index.php') ||
      routePattern.endsWith('/index.html') ||
      routePattern.endsWith('/index.htm')
    ) {
      routePattern = routePattern.substring(0, routePattern.lastIndexOf('/index.'));
    } else if (routePattern.endsWith('.php')) {
      routePattern = routePattern.substring(0, routePattern.length - 4);
    } else if (routePattern.endsWith('.html')) {
      routePattern = routePattern.substring(0, routePattern.length - 5);
    } else if (routePattern.endsWith('.htm')) {
      routePattern = routePattern.substring(0, routePattern.length - 4);
    }

    return { env, routePattern: routePattern.trim() };
  }

  function routeParamsFromPattern(routePattern: string): string[] {
    const seen = new Set<string>();
    const params: string[] = [];
    const regex = /\[([^\]]+)\]/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(routePattern)) !== null) {
      const raw = (match[1] ?? '').trim();
      const normalized = raw.replace(/^\.\.\./, '').replace(/^\.+/, '').replace(/^\[|\]$/g, '');
      if (normalized !== '' && !seen.has(normalized)) {
        seen.add(normalized);
        params.push(normalized);
      }
    }
    return params;
  }

  const routeParams = $derived.by(() => {
    const route = selectedRouteFromPath(selectedPath);
    if (!route) return [];
    return routeParamsFromPattern(route.routePattern);
  });

  const isRoute = $derived.by(() => {
    return selectedRouteFromPath(selectedPath) !== null;
  });

  const resolvedPreviewUrl = $derived.by(() => {
    const route = selectedRouteFromPath(selectedPath);
    if (!route) return null;
    let routePath = route.routePattern;

    if (routeParams.length > 0) {
      for (const param of routeParams) {
        const val = paramValues[param]?.trim();
        if (!val) return null;
        const encoded = encodeURIComponent(val);
        routePath = routePath.replaceAll(`[${param}]`, encoded);
        routePath = routePath.replaceAll(`[...${param}]`, encoded);
        routePath = routePath.replaceAll(`[[...${param}]]`, encoded);
      }
    }

    const basePath = route.env === 'staging' ? '/staging' : '';
    let finalUrl = basePath + (routePath ? '/' + routePath : '');
    if (finalUrl === '') finalUrl = '/';

    return finalUrl;
  });

  const routePreviewNeedsParams = $derived.by(() => {
    return isRoute && routeParams.length > 0 && resolvedPreviewUrl === null;
  });

  const currentEnv = $derived.by(() => {
    const route = selectedRouteFromPath(selectedPath);
    return route?.env || 'staging';
  });

  const currentEnvUrl = $derived.by(() => {
    if (resolvedPreviewUrl) return resolvedPreviewUrl;
    return currentEnv === 'production' ? '/' : '/staging';
  });

  const iframeSrc = $derived.by(() => {
    if (resolvedPreviewUrl) {
      return `${resolvedPreviewUrl}${resolvedPreviewUrl.includes('?') ? '&' : '?'}__efsdbPreview=${iframeVersion}`;
    }
    return null;
  });

  async function saveFile() {
    if (!selectedPath || !isEditing || isSaving || isLoadingFile) return;
    isSaving = true;
    fileError = '';
    try {
      await api.saveText(selectedPath, 'natural', fileContent, selectedMime);
      iframeVersion++; // Trigger preview reload
    } catch (err) {
      fileError = err instanceof Error ? err.message : 'Unable to save the selected file.';
      console.error('Failed to save file:', err);
    } finally {
      isSaving = false;
    }
  }

  $effect(() => {
    if (selectedPath) {
      paramValues = {};
    }
  });

  async function switchEnv(env: 'staging' | 'production') {
    if (env === 'production') {
      const key = prompt('Enter your admin key to enable production editing:');
      if (!key) return;
      const response = await loginWithKey<AuthResponse>(authBase, key);
      const data = response.data;
      if (!response.ok || !data || typeof data.accessToken !== 'string') {
        alert('Invalid key or insufficient permissions.');
        return;
      }

      setAccessToken(data.accessToken);
    }

    builderEnv = env;
    selectedPath = '';
    fileContent = '';
    isEditing = false;
    bootState = 'loading';
    await loadWorkspace(env, false);
  }

  onMount(async () => {
    applyTheme(getTheme());
    const unsub = onThemeChange(applyTheme);
    api.setAuthBase(authBase);

    const ready = await hydrateSession();
    if (ready) {
      await loadWorkspace(builderEnv, !initialTreesConsumed);
      if (selectedPath) {
        await revealSelectedPath(selectedPath);
        await selectFile(selectedPath);
      }
    }

    return unsub;
  });

  function applyTheme(theme: BootstrapTheme): void {
    host.setAttribute('theme', theme);
  }
</script>

<div class="builder-shell">
  <AppShell>
    {#snippet header()}
      <div class="builder-header">
        <div class="header-left">
          <a href="/_efsdb" class="back-link" title="Return to Dashboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span>Dashboard</span>
          </a>
          <div class="header-divider"></div>
          <h1 class="header-title">Builder</h1>
        </div>
        <div class="header-center">
          <div class="env-switcher">
            <button
              class="env-tab {builderEnv === 'staging' ? 'active' : ''}"
              onclick={() => switchEnv('staging')}
            >
              <span class="env-dot"></span> Staging
            </button>
            <button
              class="env-tab {builderEnv === 'production' ? 'active production' : ''}"
              onclick={() => switchEnv('production')}
            >
              <span class="env-dot production"></span> Production
            </button>
          </div>
          <a href={currentEnvUrl} target="_blank" class="env-badge" title="Open Live Site">
            Open Live
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          </a>
        </div>
        <div class="header-right">
          <!-- Future header actions -->
        </div>
      </div>
    {/snippet}

    <AppGuard
      guardState={bootState}
      {authBase}
      loadingTitle="Initializing Builder..."
      loadingCopy="Refreshing your session and loading the site structure."
      authCopy={bootMessage || 'Sign in is required before the builder can load.'}
      errorTitle="Unable to load Builder"
      errorCopy={bootMessage || 'The builder could not load.'}
      onAuthenticated={async () => {
        bootState = 'loading';
        bootMessage = '';
        await loadWorkspace(builderEnv, false);
        if (selectedPath) {
          await revealSelectedPath(selectedPath);
          await selectFile(selectedPath);
        }
      }}
      onRetry={async () => {
        bootState = 'loading';
        bootMessage = '';
        const ready = await hydrateSession();
        if (!ready) {
          return;
        }
        await loadWorkspace(builderEnv, false);
        if (selectedPath) {
          await revealSelectedPath(selectedPath);
          await selectFile(selectedPath);
        }
      }}
    >
      <div class="builder-layout-wrapper">
        <div class="builder-main">
          <div class="builder-columns">
            {#each columns as col, index (col.id)}
              <div
                id="col-{col.id}"
                class="builder-column"
                style="width: {col.width !== null ? col.width + 'px' : 'auto'}; flex: {col.flex === 1 ? '1 1 0' : '0 0 auto'};"
                ondragover={(e) => handleDragOver(e, col.id)}
                ondrop={(e) => handleDrop(e, col.id)}
              >
                {#if col.id === 'sidebar'}
                <div class="builder-sidebar">
                  <div
                    class="sidebar-header draggable-header"
                    draggable="true"
                    ondragstart={(e) => handleDragStart(e, col.id)}
                  >
                    <svg class="drag-handle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                    <h2>Site Structure</h2>
                  </div>
                  <div class="sidebar-body">
                    {#snippet treeNode(node: TreeNode, depth: number)}
                      <div class="tree-node" style="--depth: {depth}">
                        <button
                          class="node-label {selectedPath === node.path ? 'selected' : ''}"
                          onclick={() => toggleNode(node)}
                        >
                          <span class="node-icon" class:expanded={node.expanded}>
                            {#if node.item.type === 'dir'}
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            {:else}
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                              </svg>
                            {/if}
                          </span>
                          <span class="node-name">{node.item.name}</span>
                        </button>
                        {#if node.item.type === 'dir' && node.expanded}
                          <div class="node-children">
                            {#if node.loading}
                              <div class="node-loading" style="--depth: {depth + 1}">Loading...</div>
                            {:else if node.children}
                              {#each node.children as child}
                                {@render treeNode(child, depth + 1)}
                              {/each}
                            {/if}
                          </div>
                        {/if}
                      </div>
                    {/snippet}

                    {#if loadingTree}
                      <div class="tree-loading">Loading site structure...</div>
                    {:else if rootNodes.length === 0}
                      <p class="sidebar-empty">No files found.</p>
                    {:else}
                      <div class="tree-root">
                        {#each rootNodes as node}
                          {@render treeNode(node, 0)}
                        {/each}
                      </div>
                      {#if secondaryNodes.length > 0}
                        <div class="tree-separator"></div>
                        <div class="tree-root">
                          {#each secondaryNodes as node}
                            {@render treeNode(node, 0)}
                          {/each}
                        </div>
                      {/if}
                    {/if}
                  </div>
                </div>
              {:else if col.id === 'editor'}
                <div class="builder-editor">
                  <div
                    class="editor-header draggable-header"
                    draggable="true"
                    ondragstart={(e) => handleDragStart(e, col.id)}
                  >
                    <div class="header-drag-area">
                      <svg class="drag-handle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                      <h2>{selectedPath ? selectedPath.split('/').pop() : 'Editor Surface'}</h2>
                    </div>
                    <div class="editor-actions">
                      {#if isEditing}
                        <button
                          class="btn-save"
                          onclick={saveFile}
                          disabled={isSaving || isLoadingFile}
                        >
                          {#if isSaving}
                            Saving...
                          {:else}
                            Save
                          {/if}
                        </button>
                      {/if}
                    </div>
                  </div>
                  <div class="editor-body {isEditing ? 'no-padding' : ''}">
                    {#if isEditing}
                      <CodeEditor
                        bind:value={fileContent}
                        language={fileLanguage}
                        onsave={saveFile}
                      />
                    {:else if isLoadingFile}
                      <div class="editor-empty">
                        <p>Loading selected file…</p>
                      </div>
                    {:else if fileError}
                      <div class="editor-empty">
                        <p>{fileError}</p>
                      </div>
                    {:else if selectedPath && !selectedFileEditable}
                      <div class="editor-empty">
                        <p>The selected file is not editable in Builder.</p>
                      </div>
                    {:else}
                      <div class="editor-empty">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="empty-icon"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
                        <p>Select a file from the structure tree to begin authoring.</p>
                      </div>
                    {/if}
                  </div>
                </div>
              {:else if col.id === 'preview'}
                <div class="builder-preview">
                  <div
                    class="preview-header draggable-header"
                    draggable="true"
                    ondragstart={(e) => handleDragStart(e, col.id)}
                  >
                    <svg class="drag-handle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                    <h2>Live Preview</h2>
                  </div>
                  <div class="preview-body">
                    {#if isRoute}
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
                        <div class="iframe-container">
                          <iframe
                            class="runtimeFrame"
                            title="Live Preview"
                            src={iframeSrc}
                            loading="lazy"
                          ></iframe>
                        </div>
                      {:else if routePreviewNeedsParams}
                        <div class="preview-empty">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="empty-icon"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                          <p>Enter required route parameters to generate a live preview URL.</p>
                        </div>
                      {/if}
                    {:else}
                      <div class="preview-empty">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="empty-icon"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
                        <p>Select a route file to preview.</p>
                      </div>
                    {/if}
                  </div>
                </div>
                {/if}
              </div>

              {#if index < columns.length - 1}
                <div
                  class="col-resizer"
                  role="separator"
                  tabindex="0"
                  onmousedown={(e) => startResize(index, e)}
                >
                  <div class="col-resizer-inner"></div>
                </div>
              {/if}
            {/each}
          </div>
        </div>

        <div class="builder-statusbar">
          <div class="status-left">
            {#if selectedPath}
              <span class="status-path"><span class="status-label">Editing:</span> {selectedPath}</span>
            {:else}
              <span class="status-path empty">No file selected</span>
            {/if}
          </div>
          <div class="status-right">
            {#if selectedPath}
              <span class="status-item">{fileLanguage.toUpperCase()}</span>
              {#if isSaving}
                <span class="status-item saving">Saving...</span>
              {/if}
            {/if}
            <span class="status-item" style="opacity: 0.5;">EFSDB v2.0</span>
          </div>
        </div>
      </div>
    </AppGuard>
  </AppShell>
</div>

<style>
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
    --bg: var(--efs-bg-app, #030712);
    --panel: var(--efs-bg-surface-1, transparent);
    --card: var(--efs-bg-surface-2, #111827);
    --hover: var(--efs-bg-hover, rgba(255, 255, 255, 0.06));
    --border: var(--efs-border-subtle, rgba(255, 255, 255, 0.1));
    --text: var(--efs-text-primary, #f8fafc);
    --muted: var(--efs-text-secondary, #94a3b8);
    --primary: var(--efs-accent-primary, #f8fafc);
    --primaryText: var(--shell-pill-text, #0f172a);
    --codeBg: rgba(255, 255, 255, 0.04);
  }

  :host([theme='light']) {
    --bg: var(--efs-bg-app, #f8fafc);
    --panel: var(--efs-bg-surface-1, #f8fafc);
    --card: var(--efs-bg-surface-2, #ffffff);
    --hover: var(--efs-bg-hover, rgba(15, 23, 42, 0.04));
    --border: var(--efs-border-subtle, #e2e8f0);
    --text: var(--efs-text-primary, #0f172a);
    --muted: var(--efs-text-secondary, #64748b);
    --primary: var(--efs-accent-primary, #0f172a);
    --primaryText: var(--shell-pill-text, #ffffff);
    --codeBg: rgba(15, 23, 42, 0.04);
  }

  :host([theme='green']) {
    --bg: var(--efs-bg-app, #050804);
    --panel: var(--efs-bg-surface-1, rgba(12, 20, 10, 0.8));
    --card: var(--efs-bg-surface-2, rgba(28, 39, 26, 0.6));
    --hover: var(--efs-bg-hover, rgba(198, 255, 0, 0.04));
    --border: var(--efs-border-subtle, rgba(198, 255, 0, 0.12));
    --text: var(--efs-text-primary, #e7eddc);
    --muted: var(--efs-text-secondary, #a2b392);
    --primary: var(--efs-accent-primary, #c6ff00);
    --primaryText: var(--shell-pill-text, #050804);
    --codeBg: rgba(198, 255, 0, 0.03);
  }

  .builder-shell {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: var(--panel);
    color: var(--text);
    font-family: var(--efs-font-sans);
  }

  .builder-header {
    display: grid;
    grid-template-areas: 'left center right';
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;
    padding: 0 1rem;
    min-height: 48px;
    gap: 0.75rem;
    background: var(--panel);
    border-bottom: 1px solid var(--border);
  }

  .header-left {
    grid-area: left;
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 0;
  }

  .back-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    border-radius: 8px;
    color: var(--muted);
    font: var(--efs-font-body-sm);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }

  .back-link:hover {
    background: var(--hover);
    color: var(--text);
  }

  .header-divider {
    width: 1px;
    height: 1.25rem;
    background: var(--border);
  }

  .header-title {
    font: var(--efs-font-title-sm);
    font-weight: 600;
    margin: 0;
    color: var(--text);
  }

  .header-center {
    grid-area: center;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    min-width: 0;
  }

  .header-right {
    grid-area: right;
    display: flex;
    justify-content: flex-end;
    min-width: 0;
  }

  .env-switcher {
    display: flex;
    background-color: var(--card);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 2px;
  }

  .env-tab {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    border: none;
    background: transparent;
    color: var(--muted);
    font: var(--efs-font-body-sm);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .env-tab:hover {
    color: var(--text);
  }

  .env-tab.active {
    background-color: var(--hover);
    color: var(--text);
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }

  .env-badge {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    background-color: var(--card);
    border: 1px solid var(--border);
    color: var(--text);
    font: var(--efs-font-body-sm);
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }

  .env-badge:hover {
    background-color: var(--hover);
    border-color: var(--primary);
  }

  .env-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #eab308; /* staging yellow */
  }

  .env-dot.production {
    background-color: #22c55e; /* production green */
  }

  .external-icon {
    opacity: 0.5;
    margin-left: 0.125rem;
  }

  .builder-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: var(--muted);
  }

  .builder-layout-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    height: 100%;
  }

  .builder-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
  }

  .builder-columns {
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
    width: 100%;
    height: 100%;
  }

  .builder-column {
    display: flex;
    flex-direction: column;
    min-width: 100px;
    height: 100%;
    overflow: hidden;
  }

  .col-resizer {
    display: flex;
    width: 6px;
    height: 100%;
    cursor: col-resize;
    user-select: none;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    z-index: 10;
  }

  .col-resizer-inner {
    width: 2px;
    height: 100%;
    background-color: var(--border);
    transition: background-color 0.2s;
  }

  .col-resizer:hover .col-resizer-inner,
  .col-resizer:active .col-resizer-inner {
    background-color: var(--primary);
  }

  .draggable-header {
    cursor: grab;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .draggable-header:active {
    cursor: grabbing;
  }

  .drag-handle {
    opacity: 0.3;
    color: var(--muted);
    flex-shrink: 0;
  }

  .draggable-header:hover .drag-handle {
    opacity: 0.7;
  }

  .header-drag-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .builder-sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: color-mix(in oklab, var(--panel), var(--bg) 10%);
  }

  .editor-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border);
    background: linear-gradient(
      180deg,
      color-mix(in oklab, var(--panel), white 2%),
      color-mix(in oklab, var(--panel), black 4%)
    );
    height: 44px;
    flex-shrink: 0;
  }

  .sidebar-header, .preview-header {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid var(--border);
    background: linear-gradient(
      180deg,
      color-mix(in oklab, var(--panel), white 2%),
      color-mix(in oklab, var(--panel), black 4%)
    );
    height: 44px;
    flex-shrink: 0;
  }

  .editor-header h2,
  .sidebar-header h2,
  .preview-header h2 {
    font: var(--efs-font-title-sm);
    font-weight: 600;
    margin: 0;
    color: var(--text);
  }

  .editor-actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-save {
    background: color-mix(in oklab, var(--primary), transparent 10%);
    color: var(--primaryText);
    border: none;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font: var(--efs-font-label);
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .btn-save:hover:not(:disabled) {
    opacity: 0.9;
  }

  .btn-save:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .sidebar-body {
    padding: 0.5rem;
    flex: 1;
    overflow-y: auto;
  }

  .tree-root {
    display: flex;
    flex-direction: column;
  }

  .tree-separator {
    height: 1px;
    background-color: var(--shell-border);
    margin: 0.5rem 1rem;
    opacity: 0.5;
  }

  .tree-node {
    display: flex;
    flex-direction: column;
  }

  .node-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    padding-left: calc(0.5rem + var(--depth) * 1rem);
    background: transparent;
    border: none;
    color: var(--text);
    cursor: pointer;
    font: var(--efs-font-body-sm);
    text-align: left;
    border-radius: 4px;
    user-select: none;
  }

  .node-label:hover {
    background: var(--hover);
  }

  .node-label.selected {
    background: color-mix(in oklab, var(--primary), transparent 85%);
    color: var(--primary);
    font-weight: 500;
  }

  .node-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: var(--muted);
    transition: transform 0.15s ease;
  }

  .node-icon.expanded {
    transform: rotate(90deg);
  }

  .node-name {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .node-children {
    display: flex;
    flex-direction: column;
  }

  .node-loading {
    padding: 0.25rem 0.5rem;
    padding-left: calc(2rem + var(--depth) * 1rem);
    font: var(--efs-font-body-xs);
    color: var(--muted);
    font-style: italic;
  }

  .tree-loading {
    padding: 1rem;
    text-align: center;
    color: var(--muted);
    font: var(--efs-font-body-sm);
  }

  .preview-body {
    padding: 0;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .editor-empty,
  .preview-empty,
  .sidebar-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--muted);
    text-align: center;
    padding: 2rem;
  }

  .empty-icon {
    opacity: 0.3;
    margin-bottom: 1rem;
  }

  .builder-editor {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--card);
  }

  .editor-body {
    padding: 1rem;
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .editor-body.no-padding {
    padding: 0;
  }

  .builder-statusbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 28px;
    padding: 0 1rem;
    background-color: var(--panel);
    border-top: 1px solid var(--border);
    font: var(--efs-font-body-xs);
    color: var(--muted);
    flex-shrink: 0;
  }

  .status-left, .status-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .status-path {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    color: var(--text);
  }

  .status-path.empty {
    color: var(--muted);
    font-style: italic;
    font-family: inherit;
  }

  .status-label {
    opacity: 0.7;
    margin-right: 0.25rem;
  }

  .status-item {
    font-weight: 500;
  }

  .status-item.saving {
    color: var(--primary);
  }

  .builder-preview {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: color-mix(in oklab, var(--panel), var(--bg) 5%);
  }

  .routeParams {
    padding: 0.75rem 1rem;
    background: color-mix(in oklab, var(--card), transparent 20%);
    border-bottom: 1px solid color-mix(in oklab, var(--border), transparent 20%);
  }

  .routeParamsDesc {
    font: var(--efs-font-body-xs);
    color: var(--muted);
    margin-bottom: 0.5rem;
  }

  .routeParamsInputs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .paramField {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: color-mix(in oklab, var(--panel), transparent 20%);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 0.25rem 0.5rem;
  }

  .paramField label {
    font: var(--efs-font-label);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    color: var(--primaryText);
    background: color-mix(in oklab, var(--primary), transparent 10%);
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
  }

  .paramField input {
    background: transparent;
    border: none;
    outline: none;
    color: var(--text);
    font: var(--efs-font-body-sm);
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    width: 120px;
  }

  .paramField input:focus {
    color: var(--primary);
  }

  .iframe-container {
    flex: 1;
    display: flex;
    padding: 1rem;
    min-height: 0;
  }

  .runtimeFrame {
    width: 100%;
    height: 100%;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    border-radius: 14px;
    background: white;
  }

  h2 {
    font: var(--efs-font-label);
    margin: 0;
    color: var(--text);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  p {
    font: var(--efs-font-body-sm);
    color: var(--muted);
    margin: 0;
    line-height: 1.5;
  }

  code {
    background-color: var(--codeBg);
    padding: 0.125rem 0.25rem;
    border-radius: 4px;
    color: var(--text);
    border: 1px solid color-mix(in oklab, var(--border), transparent 50%);
  }

  @media (max-width: 79.99rem) {
    .builder-columns {
      overflow-x: auto;
    }

    .builder-column {
      min-width: 18rem;
    }

    .col-resizer {
      width: 10px;
    }
  }

  @media (max-width: 63.99rem) {
    .builder-header {
      grid-template-areas:
        'left right'
        'center center';
      grid-template-columns: minmax(0, 1fr) auto;
      padding: 0.75rem 1rem;
    }

    .header-center {
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    .builder-statusbar,
    .status-left,
    .status-right {
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .builder-statusbar {
      height: auto;
      padding: 0.55rem 1rem;
    }
  }

  @media (max-width: 47.99rem) {
    .builder-header {
      grid-template-areas:
        'left'
        'center'
        'right';
      grid-template-columns: minmax(0, 1fr);
    }

    .header-left {
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .header-divider {
      display: none;
    }

    .env-switcher {
      width: 100%;
      justify-content: space-between;
    }

    .env-tab,
    .env-badge {
      min-height: 40px;
    }

    .builder-column {
      min-width: 16rem;
    }

    .routeParamsInputs {
      flex-direction: column;
    }

    .paramField {
      width: 100%;
    }

    .paramField input {
      width: 100%;
      min-width: 0;
    }

    .iframe-container {
      padding: 0.75rem;
    }
  }
</style>
