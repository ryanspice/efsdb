<script lang="ts">
  import type { ColumnState, ExplorerItem, ExplorerMode } from '../lib/types';
  import { dragScroll } from '../lib/actions/dragScroll';

  type Props = {
    mode: ExplorerMode;
    scale: number;
    columns: ColumnState[];
    onItemClick: (colIndex: number, item: ExplorerItem) => void;
    onItemDoubleClick: (colIndex: number, item: ExplorerItem) => void;
  };

  let { mode, scale, columns, onItemClick, onItemDoubleClick } = $props<Props>();

  function iconFor(item: ExplorerItem) {
    if (item.type === 'dir') return '📁';
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
      <header class="colHeader">{i === 0 ? 'ROOT' : col.path.split('/').filter(Boolean).pop()}</header>

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
                ? 'No explorer-visible items in this location yet.'
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
                  <span class={labelClass(item)} title={item.name}>{item.name}</span>
                </span>
                {#if item.type === 'dir'}
                  <span class="arrow" aria-hidden="true">›</span>
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
    font-weight: 700;
    font-size: calc(12px * var(--column-scale));
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
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
    align-items: center;
    gap: calc(8px * var(--column-scale));
  }

  .ico {
    width: calc(18px * var(--column-scale));
    opacity: 0.85;
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
