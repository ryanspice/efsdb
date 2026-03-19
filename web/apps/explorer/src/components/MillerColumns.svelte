<script lang="ts">
  import type { ColumnState, ExplorerItem, ExplorerMode } from '../lib/types';

  type Props = {
    mode: ExplorerMode;
    columns: ColumnState[];
    onItemClick: (colIndex: number, item: ExplorerItem) => void;
  };

  let { mode, columns, onItemClick } = $props<Props>();

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
</script>

<div class="cols" role="region" aria-label="Miller columns">
  {#each columns as col, i (col.path)}
    <section class="col" aria-label={`Column ${i + 1}`}>
      <header class="colHeader">{i === 0 ? 'ROOT' : col.path.split('/').filter(Boolean).pop()}</header>

      {#if col.loading}
        <div class="loading">
          <div class="spinner" aria-hidden="true"></div>
          <div class="loadingText">Loading…</div>
        </div>
      {:else}
        <div class="list" role="list">
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
                onclick={() => onItemClick(i, item)}
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
    width: 260px;
    min-width: 260px;
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
    padding: 10px 12px;
    border-bottom: 1px solid var(--border);
    font-weight: 700;
    font-size: 12px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .list {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    flex: 1 1 auto;
    overflow: auto;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 10px;
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
    gap: 8px;
  }

  .ico {
    width: 18px;
    opacity: 0.85;
  }

  .label {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-size: 13px;
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
    font-size: 16px;
  }

  .loading {
    display: grid;
    place-items: center;
    padding: 24px;
    gap: 10px;
    color: var(--muted);
  }
  .spinner {
    width: 22px;
    height: 22px;
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
    font-size: 12px;
  }

  .empty {
    min-height: 180px;
    display: grid;
    place-items: center;
    padding: 18px;
    text-align: center;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.6;
    border: 1px dashed color-mix(in oklab, var(--border), transparent 30%);
    border-radius: 12px;
    background: color-mix(in oklab, var(--panel), transparent 8%);
  }
</style>
