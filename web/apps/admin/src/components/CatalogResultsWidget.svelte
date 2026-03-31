<script lang="ts">
  import type { SearchResult } from '@contracts/search';
  import StatusPill from '@ui/components/primitives/StatusPill.svelte';
  import AdminWidgetFrame from './AdminWidgetFrame.svelte';
  import type { AdminWidgetMode } from '../lib/types';

  type Props = {
    loaded: boolean;
    loading: boolean;
    searchResults: SearchResult[];
    mode?: AdminWidgetMode;
    dataTestid?: string;
    open?: boolean;
    pinned?: boolean;
    onOpen?: () => void;
    onTogglePin?: () => void;
  };

  let {
    loaded,
    loading,
    searchResults,
    mode = 'card',
    dataTestid,
    open = false,
    pinned = false,
    onOpen,
    onTogglePin
  }: Props = $props();

  let displayedResults = $derived(mode === 'card' ? searchResults.slice(0, 7) : searchResults);

  function formatTitle(result: SearchResult): string {
    return String(result.summary.logicalPath ?? result.summary.username ?? result.summary.name ?? result.id);
  }

  function formatMeta(result: SearchResult): string {
    return String(result.summary.mime ?? result.summary.roleId ?? result.id);
  }
</script>

<AdminWidgetFrame
  eyebrow="Results"
  title="Matched records"
  description="Browse the strongest hits from the current search and inspect their routing or identity metadata."
  {mode}
  {dataTestid}
  {open}
  {pinned}
  {onOpen}
  onTogglePin={onTogglePin}
>
  {#snippet footer()}
    <div class="footer-row">
      <span class="footer-copy">
        {#if searchResults.length > displayedResults.length}
          Showing {displayedResults.length} of {searchResults.length} matches.
        {:else}
          {searchResults.length} total result{searchResults.length === 1 ? '' : 's'}.
        {/if}
      </span>
    </div>
  {/snippet}

  {#if loading && !loaded}
    <div class="empty-state">Loading workspace discovery data…</div>
  {:else if !loaded}
    <div class="empty-state">Search results will appear here.</div>
  {:else if searchResults.length === 0}
    <div class="empty-state">No results found for the current filters.</div>
  {:else}
    <div class="result-list">
      {#each displayedResults as result (result.id)}
        <article class="result-row">
          <div class="result-header">
            <strong class="result-title">{formatTitle(result)}</strong>
            {#if result.summary.workspaceArea}
              <StatusPill label={String(result.summary.workspaceArea)} tone="natural" />
            {/if}
          </div>
          <div class="result-meta">{formatMeta(result)}</div>
        </article>
      {/each}
    </div>
  {/if}
</AdminWidgetFrame>

<style>
  .result-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-height: 0;
    max-height: min(30rem, 58vh);
    overflow: auto;
    padding-right: 0.1rem;
  }

  .result-row,
  .empty-state {
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
    border-radius: 20px;
    background: color-mix(in srgb, var(--shell-surface), transparent 10%);
  }

  .result-row {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.95rem 1rem;
  }

  .result-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .result-title {
    color: var(--shell-text);
    line-height: 1.45;
    word-break: break-word;
  }

  .result-meta,
  .footer-copy,
  .empty-state {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.6;
  }

  .empty-state {
    min-height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
