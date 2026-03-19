<script lang="ts">
  import type { DetailsResponse, ExplorerItem, ExplorerMode } from '../lib/types';
  import type { DataClient } from '../lib/api/explorerClient';

  type Props = {
    client: DataClient;
    mode: ExplorerMode;
    scale: number;
    activeItem: ExplorerItem | null;
    widthPx: number;
    onToggle: () => void;
  };

  let { client, mode, scale, activeItem, widthPx, onToggle } = $props<Props>();

  let details = $state<DetailsResponse | null>(null);
  let status = $state<'idle' | 'loading' | 'error'>('idle');
  let errorMsg = $state('');
  let imageUrl = $state<string | null>(null);

  let ctrl: AbortController | null = null;

  function extOf(d: DetailsResponse) {
    return (d.ext || '').toLowerCase();
  }

  function isImage(d: DetailsResponse) {
    const ext = extOf(d);
    return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext);
  }

  async function load() {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
      imageUrl = null;
    }

    details = null;

    if (!activeItem) {
      status = 'idle';
      return;
    }

    status = 'loading';
    errorMsg = '';

    ctrl?.abort();
    ctrl = new AbortController();

    const path = (activeItem.rawPath as string) || activeItem.name;

    try {
      const nextDetails = await client.details(path, mode, ctrl.signal);
      details = nextDetails;

      if (isImage(nextDetails)) {
        const blob = await client.downloadBlob(nextDetails.rawPath, mode);
        imageUrl = URL.createObjectURL(blob);
      }

      status = 'idle';
    } catch (error: any) {
      if (error?.name === 'AbortError') {
        return;
      }

      status = 'error';
      errorMsg = error?.message || 'Failed to load';
    }
  }

  $effect(() => {
    void load();

    return () => {
      ctrl?.abort();
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
        imageUrl = null;
      }
    };
  });

  async function copyPath() {
    if (!details) {
      return;
    }

    try {
      await navigator.clipboard.writeText(details.rawPath);
    } catch {
      // Ignore clipboard failures in constrained environments.
    }
  }
</script>

<aside class="pane" data-testid="explorer-preview-panel" style={`width:${widthPx}px; --preview-scale:${scale};`}>
  <header class="hdr">
    <div class="ttl">Preview</div>
    <button class="btn" type="button" onclick={onToggle} title="Toggle preview">⟷</button>
  </header>

  <div class="body">
    {#if !activeItem}
      <div class="empty">No Selection</div>
    {:else if status === 'loading'}
      <div class="empty">Loading details…</div>
    {:else if status === 'error'}
      <div class="err">Error: {errorMsg}</div>
    {:else if details}
      {#if isImage(details) && imageUrl}
        <div class="imgWrap">
          <img src={imageUrl} alt={details.name} />
        </div>
      {:else if details.preview}
        <pre class="code">{details.preview}</pre>
      {:else}
        <div class="fileBadge">{details.ext || 'FILE'}</div>
      {/if}

      <div class="meta">
        <div class="name">{details.name}</div>
        <div class="sub">{details.mime || ''}</div>
      </div>

      <div class="paths">
        <div class="pathsHdr">Path</div>
        <button class="pathBox" type="button" onclick={copyPath} title="Copy">
          {details.rawPath}
        </button>
      </div>
    {/if}
  </div>
</aside>

<style>
  .pane {
    border-left: 1px solid var(--border);
    background: var(--panel);
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .hdr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: calc(10px * var(--preview-scale)) calc(12px * var(--preview-scale));
    border-bottom: 1px solid var(--border);
  }

  .ttl {
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: calc(12px * var(--preview-scale));
    color: var(--muted);
  }

  .btn {
    width: calc(34px * var(--preview-scale));
    height: calc(30px * var(--preview-scale));
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    cursor: pointer;
  }

  .body {
    padding: calc(12px * var(--preview-scale));
    overflow: auto;
    height: 100%;
    font-size: calc(14px * var(--preview-scale));
  }

  .empty {
    height: 100%;
    display: grid;
    place-items: center;
    color: var(--muted);
    opacity: 0.7;
    font-style: italic;
  }

  .err {
    padding: calc(10px * var(--preview-scale));
    border-radius: 12px;
    border: 1px solid color-mix(in oklab, var(--danger), transparent 55%);
    background: color-mix(in oklab, var(--danger), transparent 85%);
    color: var(--text);
  }

  .imgWrap {
    background: color-mix(in oklab, black, transparent 65%);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: calc(10px * var(--preview-scale));
    display: grid;
    place-items: center;
    margin-bottom: 12px;
  }

  img {
    max-height: calc(220px * var(--preview-scale));
    max-width: 100%;
    object-fit: contain;
    border-radius: 10px;
  }

  .code {
    background: var(--codeBg);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: calc(10px * var(--preview-scale));
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
    font-size: calc(12px * var(--preview-scale));
    white-space: pre-wrap;
    max-height: 260px;
    overflow: auto;
    margin-bottom: 12px;
  }

  .fileBadge {
    border: 1px solid var(--border);
    background: var(--card);
    border-radius: 14px;
    padding: calc(26px * var(--preview-scale)) calc(12px * var(--preview-scale));
    display: grid;
    place-items: center;
    font-weight: 900;
    color: var(--muted);
    margin-bottom: 12px;
  }

  .meta {
    margin-bottom: 10px;
  }

  .name {
    font-weight: 900;
    color: var(--text);
    word-break: break-word;
  }

  .sub {
    color: var(--muted);
    font-size: calc(12px * var(--preview-scale));
    margin-top: 2px;
  }

  .paths {
    border-top: 1px solid var(--border);
    padding-top: calc(10px * var(--preview-scale));
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
    width: 100%;
    text-align: left;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: color-mix(in oklab, black, transparent 75%);
    color: var(--muted);
    padding: calc(10px * var(--preview-scale));
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
    font-size: calc(12px * var(--preview-scale));
    word-break: break-all;
    cursor: pointer;
  }

  .pathBox:hover {
    color: var(--text);
  }
</style>
