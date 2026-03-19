<script lang="ts">
  import type { ExplorerMode } from '../lib/types';

  type Crumb = { label: string; path: string };

  type Props = {
    mode: ExplorerMode;
    rawEnabled: boolean;
    breadcrumbs: Crumb[];
    scale: number;
    canOpen: boolean;
    onHome: () => void;
    onOpen: () => void;
    onSetMode: (m: ExplorerMode) => void;
    onScale: (v: number) => void;
    onCrumb: (path: string) => void;
  };

  let {
    mode,
    rawEnabled,
    breadcrumbs,
    scale,
    canOpen,
    onHome,
    onOpen,
    onSetMode,
    onScale,
    onCrumb
  } = $props<Props>();
</script>

<div class="toolbar">
  <div class="left">
    <button class="btn" type="button" onclick={onHome} title="Home">Home</button>
    <button class="btn" type="button" onclick={onOpen} disabled={!canOpen} title="Open">
      Open
    </button>

    <div class="seg" role="group" aria-label="View mode">
      <button
        class:active={mode === 'natural'}
        class="segbtn"
        type="button"
        onclick={() => onSetMode('natural')}
      >
        Natural
      </button>
      <button
        class:active={mode === 'raw'}
        class="segbtn"
        type="button"
        onclick={() => onSetMode('raw')}
        disabled={!rawEnabled}
      >
        Raw
      </button>
    </div>
  </div>

  <div class="crumbs" aria-label="Breadcrumbs">
    {#each breadcrumbs as c, i (c.path)}
      {#if i > 0}<span class="sep">/</span>{/if}
      <button class="crumb" type="button" onclick={() => onCrumb(c.path)}>
        {c.label}
      </button>
    {/each}
  </div>

  <div class="right">
    <label class="scale">
      <span>Scale</span>
      <input
        data-testid="explorer-scale-input"
        type="range"
        min="0.6"
        max="1.6"
        step="0.05"
        value={scale}
        oninput={(e) => onScale(parseFloat((e.target as HTMLInputElement).value))}
      />
    </label>
  </div>
</div>

<style>
  .toolbar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    align-items: center;
    padding: 10px 12px;
    border-bottom: 1px solid var(--border);
    background: var(--panel);
  }

  .left {
    display: inline-flex;
    gap: 8px;
    align-items: center;
  }

  .btn {
    padding: 6px 10px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--card);
    color: var(--text);
    cursor: pointer;
  }
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .seg {
    display: inline-flex;
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }
  .segbtn {
    padding: 6px 10px;
    border: 0;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
  }
  .segbtn:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
  .segbtn.active {
    background: var(--primary);
    color: var(--primaryText);
  }

  .crumbs {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: var(--muted);
  }
  .crumb {
    border: 0;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    padding: 2px 4px;
    border-radius: 8px;
  }
  .crumb:hover {
    color: var(--text);
    background: var(--hover);
  }
  .sep {
    padding: 0 2px;
    color: var(--muted);
    opacity: 0.7;
  }

  .right {
    display: inline-flex;
    align-items: center;
  }
  .scale {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: 12px;
  }
  input[type='range'] {
    width: 140px;
  }
</style>
