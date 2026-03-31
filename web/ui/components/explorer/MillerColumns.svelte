<script lang="ts">
  import type { ExplorerItem, ExplorerMode } from '@contracts/explorer';
  import { dragScroll } from '@ui/actions/dragScroll';

  type ColumnState = {
    path: string;
    items: ExplorerItem[];
    selectedItem: string | null;
    loading?: boolean;
  };

  type Props = {
    mode: ExplorerMode;
    scale: number;
    columns: ColumnState[];
    onItemClick: (colIndex: number, item: ExplorerItem) => void;
    onItemDoubleClick: (colIndex: number, item: ExplorerItem) => void;
  };

  let { mode, scale, columns, onItemClick, onItemDoubleClick } = $props<Props>();

  function iconFor(item: ExplorerItem) {
    if (item.type === 'dir') return mode === 'raw' ? '🗂️' : '📁';
    if (item.kind === 'manifest') return '📜';
    if (item.kind === 'chunk') return '🧩';
    return '📄';
  }

  function labelClass(item: ExplorerItem) {
    if (mode !== 'raw') return 'label muted';
    if (item.kind === 'manifest') return 'label warn';
    if (item.kind === 'chunk') return 'label info';
    return 'label muted';
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
</script>

<div class="cols" role="region" aria-label="Miller columns" style={`--column-scale:${scale};`}>
  {#each columns as col, i (col.path)}
    <section class="col" aria-label={`Column ${i + 1}`} data-testid={`explorer-column-${i}`}>
      <header class="colHeader">
        <div class="colTitle">
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
            <div class="empty">
              {mode === 'raw'
                ? 'No storage objects are available in this location yet.'
                : 'No decoded content is available in this location yet.'}
            </div>
          {:else}
            {#each col.items as item (item.rawPath ?? item.name)}
              <button
                type="button"
                class="row"
                class:active={col.selectedItem === item.name}
                class:dim={mode === 'raw' && item.type === 'dir'}
                data-testid={`explorer-row-${i}`}
                onclick={() => onItemClick(i, item)}
                ondblclick={() => onItemDoubleClick(i, item)}
              >
                <span class="left">
                  <span class="ico" aria-hidden="true">{iconFor(item)}</span>
                  <span class="textWrap">
                    <span class={labelClass(item)} title={item.name}>{item.name}</span>
                    {#if mode === 'raw'}
                      <span class="metaLine" title={rawMeta(item)}>{rawMeta(item)}</span>
                    {/if}
                  </span>
                </span>
                {#if mode === 'raw' || item.type === 'dir'}
                  <span class="right">
                    {#if mode === 'raw'}
                      <span class="kindTag">{rawKindTag(item)}</span>
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
    gap: 10px;
    overflow: auto;
    padding: 10px;
    background: var(--bg);
    height: 100%;
    align-items: stretch;
  }

  .col {
    width: calc(260px * var(--column-scale));
    min-width: calc(260px * var(--column-scale));
    border: 1px solid var(--border);
    border-radius: 14px;
    background: var(--panel);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
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

  .list {
    padding: calc(8px * var(--column-scale));
    display: flex;
    flex-direction: column;
    gap: calc(6px * var(--column-scale));
    min-height: 0;
    flex: 1 1 auto;
    overflow: auto;
    cursor: grab;
    scrollbar-gutter: stable;
    overscroll-behavior: contain;
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
  }

  .row.dim:not(.active) {
    opacity: 0.55;
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

  .empty {
    min-height: 180px;
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
</style>
