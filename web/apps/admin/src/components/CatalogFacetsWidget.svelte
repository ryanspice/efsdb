<script lang="ts">
  import type { FacetBucket } from '@contracts/facets';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    loaded: boolean;
    facets: Record<string, FacetBucket[]>;
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
  };

  let {
    loaded,
    facets,
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    onOpen,
    onTogglePin
  }: Props = $props();

  let entries = $derived(Object.entries(facets));
  let displayedEntries = $derived(mode === 'card' ? entries.slice(0, 3) : entries);
</script>

<AdminWidgetFrame
  eyebrow="Facets"
  title="Distribution map"
  description="See how the current result set breaks down by indexed dimensions and high-signal categories."
  {mode}
  {dataTestid}
  {open}
  {pinned}
  {onOpen}
  onTogglePin={onTogglePin}
>
  {#snippet footer()}
    <div class="footer-row">
      <StatusPill label={`${entries.length} facet group${entries.length === 1 ? '' : 's'}`} tone="accent" />
    </div>
  {/snippet}

  {#if !loaded}
    <div class="empty-state">Facet counts will appear here after a search runs.</div>
  {:else if entries.length === 0}
    <div class="empty-state">No facets are available for the active domain.</div>
  {:else}
    <div class="facet-groups">
      {#each displayedEntries as [field, buckets] (field)}
        <section class="facet-group">
          <header class="facet-group-head">
            <span class="facet-name">{field}</span>
          </header>
          <div class="facet-buckets">
            {#each buckets as bucket (`${field}:${bucket.value}`)}
              <div class="facet-bucket">
                <span class="facet-label">{bucket.label}</span>
                <span class="facet-count">{bucket.count}</span>
              </div>
            {/each}
          </div>
        </section>
      {/each}
    </div>
  {/if}
</AdminWidgetFrame>

<style>
  .facet-groups {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    min-height: 0;
    max-height: min(30rem, 58vh);
    overflow: auto;
    padding-right: 0.1rem;
  }

  .facet-group,
  .empty-state {
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 20px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
    padding: 0.95rem 1rem;
  }

  .facet-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .facet-group-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .facet-name {
    color: var(--shell-text);
    font: var(--efs-font-label);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .facet-buckets {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .facet-bucket {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.75rem;
    align-items: center;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.5;
  }

  .facet-label {
    min-width: 0;
    word-break: break-word;
  }

  .facet-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    min-height: 1.9rem;
    padding: 0 0.65rem;
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-row-hover), transparent 2%);
    color: var(--shell-text);
    font-weight: 700;
  }

  .empty-state {
    min-height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--shell-muted);
    line-height: 1.6;
    text-align: center;
  }

  .footer-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    width: 100%;
  }
</style>
