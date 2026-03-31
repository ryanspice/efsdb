<script lang="ts">
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    query: string;
    entity: string;
    loading: boolean;
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
    onSearch: () => void;
    onEntityChange: (entity: string) => void;
  };

  let {
    query = $bindable(),
    entity,
    loading,
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    onOpen,
    onTogglePin,
    onSearch,
    onEntityChange
  }: Props = $props();

  const uid = $props.id();

  function describeEntity(value: string): string {
    switch (value) {
      case 'system_users':
        return 'System users';
      case 'system_roles':
        return 'System roles';
      default:
        return 'Workspace resources';
    }
  }
</script>

<AdminWidgetFrame
  eyebrow="Discovery"
  title="Search the control plane"
  description="Query workspace resources and system records from a single launcher widget."
  {mode}
  {dataTestid}
  {open}
  {pinned}
  {onOpen}
  onTogglePin={onTogglePin}
>
  {#snippet footer()}
    <div class="footer-row">
      <StatusPill label={describeEntity(entity)} tone="accent" />
      <span class="footer-copy">Press Enter inside the search field to run the query.</span>
    </div>
  {/snippet}

  <div class="search-layout">
    <div class="field-stack">
      <label for={`${uid}-entity`}>Domain</label>
      <select id={`${uid}-entity`} value={entity} onchange={(event) => onEntityChange(event.currentTarget.value)}>
        <option value="public_workspace_files">Workspace resources</option>
        <option value="system_users">System users</option>
        <option value="system_roles">System roles</option>
      </select>
    </div>

    <div class="field-stack field-grow">
      <label for={`${uid}-query`}>Search query</label>
      <input
        id={`${uid}-query`}
        type="search"
        bind:value={query}
        placeholder="routes, components, users, roles..."
        onkeydown={(event) => event.key === 'Enter' && onSearch()}
      />
    </div>

    <button class="primary-action" type="button" disabled={loading} onclick={onSearch}>
      {loading ? 'Searching…' : 'Search'}
    </button>
  </div>
</AdminWidgetFrame>

<style>
  .search-layout {
    display: grid;
    gap: 0.9rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    align-items: end;
  }

  .field-grow {
    min-width: 0;
  }

  .field-stack {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    min-width: 0;
  }

  .field-stack label {
    color: var(--shell-muted);
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .field-stack input,
  .field-stack select {
    width: 100%;
    min-height: 3rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 18px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    color: var(--shell-text);
    padding: 0.8rem 0.95rem;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;
  }

  .field-stack input::placeholder {
    color: var(--shell-muted);
  }

  .field-stack input:focus,
  .field-stack select:focus {
    outline: none;
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--shell-primary), transparent 44%);
    box-shadow: var(--shell-focus-ring);
  }

  .primary-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3rem;
    border: 0;
    border-radius: 999px;
    background: var(--shell-primary);
    color: var(--shell-primary-text);
    padding: 0.8rem 1.15rem;
    font: var(--efs-font-body-sm);
    font-weight: 700;
    cursor: pointer;
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      opacity 160ms ease;
  }

  .primary-action:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: var(--shell-card-shadow);
  }

  .primary-action:disabled {
    opacity: 0.68;
    cursor: wait;
  }

  .footer-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    width: 100%;
  }

  .footer-copy {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  @media (min-width: 64rem) {
    .search-layout {
      grid-template-columns: minmax(11rem, 14rem) minmax(0, 1fr) auto;
    }
  }
</style>
