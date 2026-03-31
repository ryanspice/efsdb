<script lang="ts">
  import type { Snippet } from 'svelte';
  import StatusPill from '../primitives/StatusPill.svelte';

  type HealthTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

  type Props = {
    product?: string;
    descriptor?: string;
    scopeLabel?: string;
    environment?: string;
    role?: string;
    displayMode?: string;
    healthLabel?: string;
    healthTone?: HealthTone;
    commandLabel?: string;
    onCommandActivate?: () => void;
    actions?: Snippet;
  };

  let {
    product = 'EFSDB',
    descriptor = 'Encrypted control plane',
    scopeLabel,
    environment,
    role,
    displayMode,
    healthLabel,
    healthTone = 'neutral',
    commandLabel = 'Search, jump, or run a command',
    onCommandActivate,
    actions
  }: Props = $props();
</script>

<div class="command-bar">
  <div class="brand">
    <div class="mark">E</div>
    <div class="brand-copy">
      <div class="title">{product}</div>
      <div class="subtitle">
        {descriptor}
        {#if scopeLabel}
          <span class="scope">{scopeLabel}</span>
        {/if}
      </div>
    </div>
  </div>

  <button class="command-input" type="button" onclick={() => onCommandActivate?.()}>
    <span class="command-copy">{commandLabel}</span>
    <span class="hotkey">Ctrl K</span>
  </button>

  <div class="meta">
    {#if environment}
      <StatusPill label={environment} monospaced={true} />
    {/if}

    {#if role}
      <StatusPill label={role} tone="accent" />
    {/if}

    {#if displayMode}
      <StatusPill label={displayMode} tone={displayMode === 'raw' ? 'raw' : 'natural'} />
    {/if}

    {#if healthLabel}
      <StatusPill label={healthLabel} tone={healthTone} />
    {/if}

    {@render actions?.()}
  </div>
</div>

<style>
  .command-bar {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: var(--efs-space-3);
    min-height: var(--efs-size-header);
    padding: 0 var(--efs-space-4);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: var(--efs-space-3);
    min-width: 0;
  }

  .mark {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    border-radius: var(--efs-radius-md);
    border: 1px solid var(--efs-border-accent);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 70%),
      var(--efs-accent-soft);
    color: var(--efs-accent-strong);
    font: var(--efs-font-title-sm);
  }

  .brand-copy {
    min-width: 0;
  }

  .title {
    color: var(--efs-text-primary);
    font: var(--efs-font-title-md);
    letter-spacing: 0.02em;
  }

  .subtitle {
    display: inline-flex;
    gap: 0.55rem;
    color: var(--efs-text-tertiary);
    font: var(--efs-font-body-sm);
  }

  .scope {
    color: var(--efs-text-secondary);
    font-family: var(--efs-font-mono);
  }

  .command-input {
    min-width: 0;
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--efs-space-3);
    padding: 0 var(--efs-space-3);
    border-radius: var(--efs-radius-lg);
    border: 1px solid var(--efs-border-default);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent 70%),
      color-mix(in oklab, var(--efs-bg-surface-1), transparent 4%);
    color: var(--efs-text-tertiary);
    cursor: pointer;
  }

  .command-input:hover {
    border-color: var(--efs-border-strong);
    color: var(--efs-text-secondary);
  }

  .command-copy {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  .hotkey {
    flex-shrink: 0;
    color: var(--efs-text-muted);
    font: var(--efs-font-label);
    font-family: var(--efs-font-mono);
  }

  .meta {
    display: inline-flex;
    justify-content: flex-end;
    gap: var(--efs-space-2);
    min-width: 0;
    flex-wrap: wrap;
  }

  @media (max-width: 63.99rem) {
    .command-bar {
      grid-template-columns: 1fr;
      padding-block: var(--efs-space-3);
    }

    .meta {
      justify-content: flex-start;
    }
  }

  @media (max-width: 47.99rem) {
    .brand {
      gap: var(--efs-space-2);
    }

    .subtitle {
      flex-wrap: wrap;
      row-gap: 0.2rem;
    }

    .command-input {
      min-height: 44px;
    }

    .hotkey {
      display: none;
    }
  }
</style>
