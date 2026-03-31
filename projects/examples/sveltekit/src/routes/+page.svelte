<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { browser, dev } from '$app/environment';

  let count = $state(0);

  let basePath = $state(
    dev
      ? ''
      : (browser && typeof window !== 'undefined' && (window as any).__EFSDB__
        ? ((window as any).__EFSDB__.basePath ?? '')
        : '__EFSDB_BASE_PATH__')
  );

  let efsdbData = $state(null);

  onMount(() => {
    const loader = document.getElementById('efsdb-initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    }

    if (typeof window !== 'undefined' && (window as any).__EFSDB__) {
      efsdbData = (window as any).__EFSDB__;
      basePath = (window as any).__EFSDB__.basePath ?? '';
    }
  });

  let siteData = $state({
    title: "EFSDB SvelteKit Template",
    description: "A cohesive template spreading data from EFSDB.",
    features: [
      "Instant Edge Delivery",
      "SvelteKit + Bun Integration",
      "Public Workspace Access"
    ]
  });
</script>

<div class="template-container">
  <header class="hero">
    <h1>{siteData.title}</h1>
    <p class="subtitle">{siteData.description}</p>
  </header>

  <main class="content">
    <section class="features-grid">
      {#each siteData.features as feature}
        <div class="feature-card">
          <h3>{feature}</h3>
          <p>Powered by the EFSDB runtime and public workspace.</p>
        </div>
      {/each}
    </section>

    <section class="interactive-section">
      <h2>Interactive Counter</h2>
      <p>State is preserved and hydrating works perfectly.</p>
      <button class="action-btn" onclick={() => count++}>
        Clicked {count} times
      </button>
    </section>

    {#if efsdbData}
      <section class="interactive-section" style="margin-top: 2rem;">
        <h2>EFSDB Hydration Data</h2>
        <pre style="text-align: left; background: #f4f4f5; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.875rem;">
          {JSON.stringify(efsdbData, null, 2)}
        </pre>
      </section>
    {/if}
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
  }

  .template-container {
    font-family: system-ui, -apple-system, sans-serif;
    color: #111827;
    background: #f9fafb;
    min-height: 100vh;
  }

  .hero {
    background: #1f2937;
    color: white;
    padding: 4rem 2rem;
    text-align: center;
  }

  .hero h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.025em;
  }

  .subtitle {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: #d1d5db;
  }

  .content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .feature-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .feature-card h3 {
    margin-top: 0;
    color: #374151;
  }

  .feature-card p {
    color: #6b7280;
    line-height: 1.5;
    margin-bottom: 0;
  }

  .interactive-section {
    background: white;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .action-btn {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .action-btn:hover {
    background: #2563eb;
  }
</style>
