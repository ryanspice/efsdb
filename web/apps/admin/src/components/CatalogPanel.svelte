<script lang="ts">
  import type { FacetBucket } from '@contracts/facets';
  import type { ProductSummary } from '@contracts/products';
  import type { SearchResult } from '@contracts/search';

  type Props = {
    query: string;
    loading: boolean;
    products: ProductSummary[];
    searchResults: SearchResult[];
    facets: Record<string, FacetBucket[]>;
    onSearch: () => void;
  };

  let { query = $bindable(), loading, products, searchResults, facets, onSearch } = $props<Props>();
</script>

<article class="table-card" data-testid="admin-catalog-panel">
  <div class="section-label">Catalog</div>
  <h2 class="mt-4 page-title text-[clamp(2rem,4vw,3rem)]">Products, search, and facets</h2>
  <div class="mt-5 flex flex-wrap gap-3">
    <input
      class="min-w-[16rem] rounded-[16px] border border-[var(--shell-border)] bg-[var(--shell-surface)] px-4 py-3"
      type="search"
      bind:value={query}
      placeholder="Search products"
    />
    <button class="pill-button" type="button" disabled={loading} onclick={onSearch}>Run search</button>
  </div>

  <div class="mt-6 grid gap-6 xl:grid-cols-3">
    <section>
      <div class="section-label">Products</div>
      <div class="mt-3" data-testid="admin-products-list">
        {#if products.length === 0}
          <p class="shell-copy">No products indexed yet.</p>
        {:else}
          <ul class="space-y-3">
            {#each products as product (product.id)}
              <li>
                <strong>{product.name}</strong>
                <div class="shell-copy text-sm">{product.sku} · {product.category ?? 'uncategorized'}</div>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </section>

    <section>
      <div class="section-label">Search</div>
      <div class="mt-3" data-testid="admin-search-results">
        {#if searchResults.length === 0}
          <p class="shell-copy">No matching product results.</p>
        {:else}
          <ul class="space-y-3">
            {#each searchResults as result (result.id)}
              <li>
                <strong>{result.summary.name ?? result.id}</strong>
                <div class="shell-copy text-sm">{result.summary.sku ?? result.id}</div>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </section>

    <section>
      <div class="section-label">Facets</div>
      <div class="mt-3" data-testid="admin-facets">
        {#if Object.keys(facets).length === 0}
          <p class="shell-copy">No product facets available.</p>
        {:else}
          {#each Object.entries(facets) as [field, buckets] (field)}
            <div class="mb-4">
              <div class="text-xs font-bold uppercase tracking-[0.12em] text-[var(--shell-muted)]">{field}</div>
              <ul class="mt-2 space-y-2">
                {#each buckets as bucket (`${field}:${bucket.value}`)}
                  <li class="shell-copy text-sm">{bucket.label} ({bucket.count})</li>
                {/each}
              </ul>
            </div>
          {/each}
        {/if}
      </div>
    </section>
  </div>
</article>
