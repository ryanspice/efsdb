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

  const storageKind = $derived.by(() => {
    const value = storageValue('kind');
    return typeof value === 'string' ? value : null;
  });

  const chunkHash = $derived.by(() => {
    const value = storageValue('chunkHash');
    return typeof value === 'string' && value !== '' ? value : null;
  });

  const referenceCount = $derived.by(() => {
    const value = storageValue('referenceCount');
    return typeof value === 'number' ? value : null;
  });

  const references = $derived.by(() => {
    const value = storageValue('references');
    if (!Array.isArray(value)) {
      return [];
    }

    return value
      .filter((item) => item && typeof item === 'object')
      .map((item) => item as Record<string, unknown>);
  });

  const hasRawStorageDetails = $derived.by(
    () =>
      manifest !== null ||
      chunkHash !== null ||
      chunkHashes.length > 0 ||
      references.length > 0 ||
      storageKind !== null ||
      chunkCount !== null ||
      referenceCount !== null
  );

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
      <div class="headerCopy">
        <div class="eyebrow">{mode === 'raw' ? 'Raw details' : 'Item details'}</div>
        <h2 class="title">{details?.name ?? 'Loading details'}</h2>
        <p class="headerCopyText">
          {mode === 'raw'
            ? 'Inspect storage metadata, relationships, and linked logical references for the selected object.'
            : 'Review the selected item, its paths, and any readable preview content that is available.'}
        </p>
        <div class="headerTag">{mode === 'raw' ? 'Storage metadata inspector' : 'Readable item inspection'}</div>
      </div>
      <button class="closeBtn" type="button" onclick={onClose} aria-label="Close details dialog">Close</button>
    </header>

    {#if loading}
      <section class="stateCard">
        <div class="stateIcon" aria-hidden="true">⋯</div>
        <div class="stateEyebrow">Details</div>
        <div class="stateTitle">Loading details</div>
        <p class="stateCopy">Preparing metadata and related storage information for the selected item.</p>
      </section>
    {:else if error !== ''}
      <section class="stateCard errorState">
        <div class="stateIcon" aria-hidden="true">!</div>
        <div class="stateEyebrow">Details</div>
        <div class="stateTitle">Unable to load details</div>
        <p class="stateCopy">{error}</p>
      </section>
    {:else if details}
      <div class="grid">
        <section class="panel summaryPanel">
          <div class="panelEyebrow">{mode === 'raw' ? 'Selected object' : 'Selected item'}</div>
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
            {#if chunkHash}
              <div>
                <dt>Chunk hash</dt>
                <dd class="mono">{chunkHash}</dd>
              </div>
            {:else}
              <div>
                <dt>Manifest ID</dt>
                <dd class="mono">{details.manifestId}</dd>
              </div>
            {/if}
          </dl>
        </section>

        {#if mode === 'raw' && hasRawStorageDetails}
          <section class="panel rawPanel" data-testid="explorer-details-relationships">
            <div class="panelEyebrow">Raw mode</div>
            <div class="panelTitle">Connected file relationships</div>
            <p class="copy subtle">Storage references and manifest links for the selected object.</p>
            <dl class="metaList compact">
              {#if storageKind}
                <div>
                  <dt>Storage kind</dt>
                  <dd>{storageKind}</dd>
                </div>
              {/if}

              {#if manifest}
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
              {:else if chunkCount !== null}
                <div>
                  <dt>Chunk count</dt>
                  <dd>{chunkCount}</dd>
                </div>
              {/if}

              {#if storageKind === 'chunk' || referenceCount !== null}
                <div>
                  <dt>Referenced by</dt>
                  <dd>{referenceCount ?? 0}</dd>
                </div>
              {/if}
            </dl>

            {#if chunkHashes.length > 0}
              <div class="chunkList">
                <div class="chunkTitle">Chunk hashes</div>
                {#each chunkHashes as hash (hash)}
                  <div class="chunk mono">{hash}</div>
                {/each}
              </div>
            {/if}

            {#if references.length > 0}
              <div class="chunkList">
                <div class="chunkTitle">Referencing manifests</div>
                {#each references as reference, index (`${String(reference['manifestId'] ?? index)}-${index}`)}
                  <div class="chunk">
                    <div>{String(reference['manifestId'] ?? '')}</div>
                    {#if String(reference['logicalPath'] ?? '') !== ''}
                      <div class="mono">{String(reference['logicalPath'] ?? '')}</div>
                    {/if}
                  </div>
                {/each}
              </div>
            {/if}
          </section>
        {:else if mode === 'raw'}
          <section class="panel rawPanel">
            <div class="panelEyebrow">Raw mode</div>
            <div class="panelTitle">Storage preview unavailable</div>
            <p class="copy">
              This item does not expose additional relationship metadata here. Open the natural view to inspect readable contents.
            </p>
          </section>
        {:else if details.preview}
          <section class="panel">
            <div class="panelEyebrow">Natural mode</div>
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
    background:
      radial-gradient(circle at top, rgba(255, 255, 255, 0.04), transparent 28%),
      rgba(0, 0, 0, 0.52);
    backdrop-filter: blur(8px);
    display: grid;
    place-items: center;
    padding: 24px;
    z-index: 50;
  }

  .dialog {
    width: min(860px, 100%);
    max-height: min(80vh, 760px);
    overflow: auto;
    border-radius: 24px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 3%),
        color-mix(in oklab, var(--panel), black 8%)
      ),
      radial-gradient(
        circle at top right,
        color-mix(in oklab, var(--primary), transparent 95%),
        transparent 32%
      );
    color: var(--text);
    box-shadow:
      0 32px 96px rgba(0, 0, 0, 0.38),
      inset 0 1px 0 color-mix(in oklab, white, transparent 95%);
  }

  .dialogHeader {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: start;
    padding: 22px 24px 18px;
    border-bottom: 1px solid color-mix(in oklab, var(--border), var(--text) 8%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), var(--card) 22%),
        color-mix(in oklab, var(--panel), var(--card) 12%)
      );
  }

  .headerCopy {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .eyebrow {
    font: var(--efs-font-label);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .title {
    margin: 0;
    font: var(--efs-font-title-lg);
    line-height: 1.15;
  }

  .headerCopyText {
    margin: 0;
    max-width: 38rem;
    color: var(--muted);
    line-height: 1.55;
  }

  .headerTag {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    min-height: 30px;
    padding: 0 11px;
    border-radius: 999px;
    border: 1px solid color-mix(in oklab, var(--primary), var(--border) 44%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), var(--primary) 18%),
        color-mix(in oklab, var(--card), var(--primary) 10%)
      );
    color: var(--text);
    font: var(--efs-font-label);
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .closeBtn {
    min-height: 36px;
    padding: 0 14px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    cursor: pointer;
    font: var(--efs-font-body-sm);
    font-weight: 700;
    transition:
      background 120ms ease,
      border-color 120ms ease;
  }

  .closeBtn:hover {
    background: color-mix(in oklab, var(--card), var(--text) 4%);
    border-color: color-mix(in oklab, var(--border), var(--text) 16%);
  }

  .closeBtn:focus-visible {
    outline: 2px solid color-mix(in oklab, var(--primary), transparent 45%);
    outline-offset: 2px;
  }

  .stateCard {
    margin: 18px 20px 20px;
    min-height: 190px;
    border-radius: 20px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 8%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    padding: 24px;
    display: grid;
    place-items: center;
    text-align: center;
    gap: 8px;
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 16px 32px rgba(0, 0, 0, 0.08);
  }

  .stateIcon {
    width: 58px;
    height: 58px;
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
    font-size: 24px;
    font-weight: 700;
    box-shadow: inset 0 1px 0 color-mix(in oklab, white, transparent 95%);
  }

  .stateEyebrow {
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .stateTitle {
    font: var(--efs-font-title-md);
    font-weight: 800;
    line-height: 1.25;
    color: var(--text);
  }

  .stateCopy {
    margin: 0;
    max-width: 32rem;
    color: var(--muted);
    line-height: 1.55;
  }

  .errorState {
    border-color: color-mix(in oklab, var(--danger), transparent 55%);
    background: color-mix(in oklab, var(--danger), transparent 87%);
  }

  .grid {
    display: grid;
    gap: 18px;
    padding: 20px 22px 22px;
  }

  .panel {
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    border-radius: 20px;
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    padding: 20px;
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 95%),
      0 16px 32px rgba(0, 0, 0, 0.08);
  }

  .panelEyebrow {
    font: var(--efs-font-label);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 6px;
  }

  .panelTitle {
    font: var(--efs-font-title-sm);
    font-weight: 800;
    line-height: 1.25;
    color: var(--text);
    margin-bottom: 10px;
  }

  .chunkTitle {
    font: var(--efs-font-label);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 10px;
  }

  .copy {
    margin: 0;
    line-height: 1.5;
    color: var(--text);
  }

  .copy.subtle {
    color: var(--muted);
    margin-bottom: 12px;
  }

  .metaList {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .metaList.compact {
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .metaList > div,
  .metaList.compact > div {
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 8%);
    border-radius: 14px;
    background: color-mix(in oklab, var(--codeBg), transparent 18%);
    padding: 12px 13px;
  }

  dt {
    font: var(--efs-font-label);
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
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--codeBg), white 1%),
        color-mix(in oklab, var(--codeBg), black 4%)
      );
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    border-radius: 16px;
    padding: 16px;
    overflow: auto;
    line-height: 1.6;
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 96%),
      0 14px 24px rgba(0, 0, 0, 0.06);
  }

  .chunkList {
    margin-top: 14px;
  }

  .chunk {
    border-radius: 14px;
  }

  .chunk {
    padding: 10px 12px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--codeBg), white 1%),
        color-mix(in oklab, var(--codeBg), black 3%)
      );
    margin-top: 8px;
    font: var(--efs-font-body-sm);
    line-height: 1.5;
    box-shadow: inset 0 1px 0 color-mix(in oklab, white, transparent 97%);
  }

  @media (min-width: 64rem) {
    .grid {
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
      align-items: start;
    }
  }

  @media (max-width: 47.99rem) {
    .backdrop {
      padding: 12px;
    }

    .dialogHeader {
      padding: 18px 18px 16px;
      flex-direction: column;
    }

    .grid {
      padding: 16px 16px 18px;
    }

    .panel,
    .stateCard {
      padding: 18px;
    }
  }
</style>
