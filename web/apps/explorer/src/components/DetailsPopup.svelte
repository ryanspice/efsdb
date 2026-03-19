<script lang="ts">
  import type { DetailsResponse, ExplorerMode } from '../lib/types';

  type Props = {
    details: DetailsResponse | null;
    mode: ExplorerMode;
    loading: boolean;
    error: string;
    onClose: () => void;
  };

  let { details, mode, loading, error, onClose } = $props<Props>();

  function storageValue(key: string): unknown {
    if (!details?.storage || typeof details.storage !== 'object') {
      return null;
    }

    return (details.storage as Record<string, unknown>)[key] ?? null;
  }

  const chunkCount = $derived.by(() => {
    const value = storageValue('chunkCount');
    return typeof value === 'number' ? value : null;
  });

  const chunkHashes = $derived.by(() => {
    const value = storageValue('chunkHashes');
    return Array.isArray(value) ? value.map((item) => String(item)) : [];
  });

  const manifest = $derived.by(() => {
    const value = storageValue('manifest');
    return value && typeof value === 'object' ? (value as Record<string, unknown>) : null;
  });

  function onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
</script>

<div class="backdrop" role="presentation" onclick={onBackdropClick}>
  <div
    class="dialog"
    role="dialog"
    aria-modal="true"
    aria-label="Explorer details"
    data-testid="explorer-details-popup"
  >
    <header class="dialogHeader">
      <div>
        <div class="eyebrow">{mode === 'raw' ? 'Raw details' : 'Item details'}</div>
        <h2 class="title">{details?.name ?? 'Loading details'}</h2>
      </div>
      <button class="closeBtn" type="button" onclick={onClose} aria-label="Close details dialog">Close</button>
    </header>

    {#if loading}
      <div class="state">Loading details…</div>
    {:else if error !== ''}
      <div class="state error">{error}</div>
    {:else if details}
      <div class="grid">
        <section class="panel">
          <div class="panelTitle">Summary</div>
          <dl class="metaList">
            <div>
              <dt>Entity</dt>
              <dd>{details.entity}</dd>
            </div>
            <div>
              <dt>Mime</dt>
              <dd>{details.mime}</dd>
            </div>
            <div>
              <dt>Size</dt>
              <dd>{details.size}</dd>
            </div>
            <div>
              <dt>Raw path</dt>
              <dd class="mono">{details.rawPath}</dd>
            </div>
            {#if details.logicalPath}
              <div>
                <dt>Logical path</dt>
                <dd class="mono">{details.logicalPath}</dd>
              </div>
            {/if}
            <div>
              <dt>Manifest ID</dt>
              <dd class="mono">{details.manifestId}</dd>
            </div>
          </dl>
        </section>

        {#if mode === 'raw' && manifest}
          <section class="panel" data-testid="explorer-details-relationships">
            <div class="panelTitle">Connected file relationships</div>
            <dl class="metaList compact">
              <div>
                <dt>Manifest entity</dt>
                <dd>{String(manifest['entity'] ?? '')}</dd>
              </div>
              <div>
                <dt>Manifest logical path</dt>
                <dd class="mono">{String(manifest['logicalPath'] ?? '')}</dd>
              </div>
              <div>
                <dt>Chunk count</dt>
                <dd>{chunkCount ?? 0}</dd>
              </div>
            </dl>

            {#if chunkHashes.length > 0}
              <div class="chunkList">
                <div class="chunkTitle">Chunk hashes</div>
                {#each chunkHashes as hash (hash)}
                  <div class="chunk mono">{hash}</div>
                {/each}
              </div>
            {/if}
          </section>
        {:else if details.preview}
          <section class="panel">
            <div class="panelTitle">Preview</div>
            <pre class="preview">{details.preview}</pre>
          </section>
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    display: grid;
    place-items: center;
    padding: 24px;
    z-index: 50;
  }

  .dialog {
    width: min(860px, 100%);
    max-height: min(80vh, 760px);
    overflow: auto;
    border-radius: 20px;
    border: 1px solid var(--border);
    background: color-mix(in oklab, var(--panel), black 8%);
    color: var(--text);
    box-shadow: 0 28px 90px rgba(0, 0, 0, 0.35);
  }

  .dialogHeader {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: start;
    padding: 18px 20px 14px;
    border-bottom: 1px solid var(--border);
  }

  .eyebrow {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .title {
    margin: 6px 0 0;
    font-size: 1.35rem;
    line-height: 1.2;
  }

  .closeBtn {
    padding: 8px 12px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    cursor: pointer;
  }

  .state {
    padding: 24px 20px;
    color: var(--muted);
  }

  .state.error {
    color: var(--danger);
  }

  .grid {
    display: grid;
    gap: 14px;
    padding: 16px 20px 20px;
  }

  .panel {
    border: 1px solid var(--border);
    border-radius: 16px;
    background: color-mix(in oklab, var(--card), transparent 6%);
    padding: 16px;
  }

  .panelTitle,
  .chunkTitle {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }

  .metaList {
    display: grid;
    gap: 10px;
  }

  .metaList.compact {
    gap: 8px;
  }

  dt {
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }

  dd {
    margin: 4px 0 0;
    word-break: break-word;
  }

  .mono,
  .preview,
  .chunk {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
  }

  .preview {
    margin: 0;
    white-space: pre-wrap;
    background: var(--codeBg);
    border-radius: 12px;
    padding: 12px;
    overflow: auto;
  }

  .chunkList {
    margin-top: 14px;
  }

  .chunk {
    padding: 8px 10px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--codeBg);
    margin-top: 8px;
    font-size: 12px;
  }
 </style>
