<script module>
  import type { SearchResult } from '@contracts/search';

  const searchCache = new Map<string, SearchResult[]>();
</script>

<script lang="ts">
  import ToolWindow from '../../../../ui/components/shell/ToolWindow.svelte';
  import type { DataClient } from '../lib/api/explorerClient';
  import { onMount } from 'svelte';

  let { open = $bindable(false), client, onNavigate } = $props<{
    open: boolean;
    client: DataClient;
    onNavigate: (path: string) => void;
  }>();

  let query = $state('');
  let results = $state<SearchResult[]>([]);
  let loading = $state(false);
  const defaultWindowWidth = typeof window === 'undefined' ? 600 : Math.min(window.innerWidth - 32, 600);
  const defaultWindowX = typeof window === 'undefined'
    ? 120
    : Math.max(16, window.innerWidth / 2 - defaultWindowWidth / 2);
  const defaultWindowY = typeof window === 'undefined'
    ? 100
    : Math.max(16, Math.min(100, window.innerHeight * 0.12));

  type RecentItem = {
    id: string;
    path: string;
    mime?: string;
    workspaceArea?: string;
  };

  let recentItems = $state<RecentItem[]>([]);

  onMount(() => {
    try {
      const stored = localStorage.getItem('efsdb:recent_searches');
      if (stored) {
        recentItems = JSON.parse(stored);
      }
    } catch (error) {
      void error;
    }
  });

  function saveRecentItem(result: SearchResult) {
    const item: RecentItem = {
      id: result.id,
      path: result.summary.logicalPath || result.id,
      mime: result.summary.mime,
      workspaceArea: result.summary.workspaceArea
    };

    const filtered = recentItems.filter((entry) => entry.path !== item.path);
    filtered.unshift(item);
    recentItems = filtered.slice(0, 10);

    try {
      localStorage.setItem('efsdb:recent_searches', JSON.stringify(recentItems));
    } catch (error) {
      void error;
    }
  }

  let searchTimeout: ReturnType<typeof setTimeout> | null = null;
  let searchAbortController: AbortController | null = null;

  async function performSearch() {
    const trimmed = query.trim();
    if (!trimmed) {
      results = [];
      return;
    }

    if (searchCache.has(trimmed)) {
      results = searchCache.get(trimmed)!;
      return;
    }

    if (searchAbortController) {
      searchAbortController.abort();
    }

    searchAbortController = new AbortController();
    const signal = searchAbortController.signal;

    loading = true;

    try {
      void client;
      const res = await fetch(
        `/_efsdb/api/search?entity=public_workspace_files&limit=20&q=${encodeURIComponent(trimmed)}`,
        { signal }
      );

      if (!res.ok) {
        throw new Error('Search failed');
      }

      const data = await res.json();
      const fetchedResults = data.results || [];

      searchCache.set(trimmed, fetchedResults);

      if (query.trim() === trimmed) {
        results = fetchedResults;
      }
    } catch (error: unknown) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }

      console.error(error);
      if (query.trim() === trimmed) {
        results = [];
      }
    } finally {
      if (query.trim() === trimmed) {
        loading = false;
      }
    }
  }

  function onInput() {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    if (!query.trim()) {
      results = [];
      loading = false;
      return;
    }

    searchTimeout = setTimeout(() => {
      void performSearch();
    }, 250);
  }

  let inputRef = $state<HTMLInputElement | null>(null);

  $effect(() => {
    if (open) {
      query = '';
      results = [];
      setTimeout(() => inputRef?.focus(), 10);
    }
  });
</script>

<ToolWindow
  title="Search"
  bind:open
  modal={false}
  defaultWidth={defaultWindowWidth}
  defaultHeight={400}
  defaultX={defaultWindowX}
  defaultY={defaultWindowY}
  flushBody={true}
  onClose={() => (open = false)}
>
  <div class="header">
    <input
      type="text"
      bind:this={inputRef}
      bind:value={query}
      oninput={onInput}
      placeholder="Search workspace resources..."
      onkeydown={(event) => {
        if (event.key === 'Enter') void performSearch();
      }}
    />
  </div>
  <div class="body">
    {#if loading}
      <div class="msg">Searching...</div>
    {:else if query && results.length === 0}
      <div class="msg">No results found.</div>
    {:else if !query && results.length === 0}
      {#if recentItems.length > 0}
        <div class="recent-header">Recent Searches</div>
        <ul class="results">
          {#each recentItems as item (item.path)}
            <li>
              <button
                class="res-btn"
                onclick={() => {
                  open = false;
                  onNavigate(item.path);
                }}
              >
                <div class="res-info">
                  <span class="path">{item.path}</span>
                  {#if item.mime}
                    <span class="mime">{item.mime}</span>
                  {/if}
                </div>
                {#if item.workspaceArea}
                  <span class="tag">{item.workspaceArea}</span>
                {/if}
              </button>
            </li>
          {/each}
        </ul>
      {:else}
        <div class="msg">Type to search across environments, routes, components, and files.</div>
      {/if}
    {:else}
      <ul class="results">
        {#each results as result (result.id)}
          <li>
            <button
              class="res-btn"
              onclick={() => {
                saveRecentItem(result);
                open = false;
                onNavigate(result.summary.logicalPath || result.id);
              }}
            >
              <div class="res-info">
                <span class="path">{result.summary.logicalPath || result.id}</span>
                {#if result.summary.mime}
                  <span class="mime">{result.summary.mime}</span>
                {/if}
              </div>
              {#if result.summary.workspaceArea}
                <span class="tag">{result.summary.workspaceArea}</span>
              {/if}
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</ToolWindow>

<style>
  .header {
    display: flex;
    padding: 16px;
    border-bottom: 1px solid var(--shell-border, #e2e8f0);
    background: var(--shell-input-bg, #ffffff);
  }

  .header input {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--shell-text, #0f172a);
    font: var(--efs-font-body-lg, 16px/1.7 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    outline: none;
  }

  .body {
    flex: 1;
    overflow-y: auto;
  }

  .msg {
    padding: 20px;
    text-align: center;
    color: var(--shell-muted, #64748b);
    font: var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
  }

  .recent-header {
    padding: 12px 16px 8px;
    font: var(--efs-font-label, 700 12px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--shell-muted, #64748b);
  }

  .results {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .res-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 48px;
    padding: 12px 16px;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--shell-border, #e2e8f0);
    color: var(--shell-text, #0f172a);
    cursor: pointer;
    text-align: left;
  }

  .res-btn:hover {
    background: var(--shell-hover-bg, #f1f5f9);
  }

  .res-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .path {
    font-family: monospace;
    font: var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    font-family: monospace;
  }

  .mime {
    font: var(--efs-font-micro, 700 11px/1.35 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    color: var(--shell-muted, #64748b);
  }

  .tag {
    font: var(--efs-font-micro, 700 11px/1.35 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    text-transform: uppercase;
    background: var(--shell-chip-bg, #f1f5f9);
    padding: 2px 6px;
    border-radius: 4px;
    white-space: nowrap;
    color: var(--shell-text, #0f172a);
  }
</style>
