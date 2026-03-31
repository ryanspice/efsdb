<script lang="ts">
  import type { ExplorerMode } from '@contracts/explorer';
  import SegmentedSwitch from '../primitives/SegmentedSwitch.svelte';

  type Crumb = { label: string; path: string };

  type Props = {
    mode: ExplorerMode;
    rawEnabled: boolean;
    breadcrumbs: Crumb[];
    scale: number;
    canOpen: boolean;
    onHome: () => void;
    onOpen: () => void;
    onSetMode: (mode: ExplorerMode) => void;
    onScale: (value: number) => void;
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
  }: Props = $props();

  const modeItems = $derived.by(() => [
    { value: 'natural', label: 'Natural' },
    { value: 'raw', label: 'Raw', disabled: !rawEnabled }
  ]);
</script>

<div class="toolbar">
  <div class="cluster left">
    <button class="tool" type="button" onclick={onHome}>Home</button>
    <button class="tool" type="button" disabled={!canOpen} onclick={onOpen}>Open</button>
    <SegmentedSwitch
      ariaLabel="Explorer mode"
      value={mode}
      items={modeItems}
      onSelect={(value) => onSetMode(value as ExplorerMode)}
    />

    {#if mode === 'raw'}
      <span class="modeCue">Storage inspection</span>
    {/if}
  </div>

  <nav class="breadcrumbs" aria-label="Breadcrumbs">
    {#each breadcrumbs as crumb, index (crumb.path)}
      {#if index > 0}
        <span class="separator" aria-hidden="true">/</span>
      {/if}

      <button class="crumb" type="button" onclick={() => onCrumb(crumb.path)}>
        {crumb.label}
      </button>
    {/each}
  </nav>

  <div class="cluster right">
    <label class="scale">
      <span>Scale</span>
      <input
        data-testid="explorer-scale-input"
        type="range"
        min="0.6"
        max="1.6"
        step="0.05"
        value={scale}
        oninput={(event) => onScale(parseFloat((event.target as HTMLInputElement).value))}
      />
    </label>
  </div>
</div>

<style>
  .toolbar {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: var(--efs-space-3);
    min-height: var(--efs-size-toolbar);
    padding: var(--efs-space-2) var(--efs-space-3);
    border-bottom: 1px solid var(--efs-border-panel);
    background: var(--efs-surface-panel);
  }

  .cluster {
    display: inline-flex;
    align-items: center;
    gap: var(--efs-space-2);
    min-width: 0;
  }

  .cluster.left {
    flex-wrap: wrap;
  }

  .cluster.right {
    justify-content: flex-end;
  }

  .tool {
    min-height: var(--efs-size-control-compact);
    padding: 0 0.8rem;
    border-radius: var(--efs-radius-md);
    border: 1px solid var(--efs-border-default);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 70%),
      var(--efs-bg-surface-2);
    color: var(--efs-text-secondary);
    font: var(--efs-font-body-sm);
    cursor: pointer;
  }

  .tool:hover:not(:disabled) {
    color: var(--efs-text-primary);
    border-color: var(--efs-border-strong);
  }

  .tool:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .modeCue {
    padding: 0.25rem 0.65rem;
    border-radius: 999px;
    border: 1px solid color-mix(in oklab, var(--efs-accent-primary), var(--efs-border-default) 45%);
    background: color-mix(in oklab, var(--efs-surface-control), var(--efs-accent-primary) 16%);
    color: var(--efs-text-primary);
    font: var(--efs-font-label);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .breadcrumbs {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--efs-text-tertiary);
    font: var(--efs-font-body-sm);
  }

  .crumb {
    border: 0;
    border-radius: 999px;
    background: transparent;
    padding: 0.15rem 0.45rem;
    color: inherit;
    cursor: pointer;
  }

  .crumb:hover {
    color: var(--efs-text-primary);
    background: rgba(255, 255, 255, 0.04);
  }

  .separator {
    margin: 0 0.2rem;
    color: var(--efs-text-muted);
  }

  .scale {
    display: inline-flex;
    align-items: center;
    gap: var(--efs-space-2);
    color: var(--efs-text-tertiary);
    font: var(--efs-font-label);
  }

  .scale input[type='range'] {
    width: 132px;
    accent-color: var(--efs-accent-primary);
  }

  @media (max-width: 63.99rem) {
    .toolbar {
      grid-template-columns: 1fr;
    }

    .cluster.right {
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 47.99rem) {
    .breadcrumbs {
      order: 3;
    }

    .cluster.left {
      gap: var(--efs-space-3);
    }

    .scale {
      flex-wrap: wrap;
    }

    .scale input[type='range'] {
      width: min(100%, 16rem);
    }
  }
</style>
