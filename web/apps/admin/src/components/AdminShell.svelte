<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { NoticeState } from '../lib/types';

  type MetricCard = {
    label: string;
    value: string;
    detail: string;
  };

  type Props = {
    notice: NoticeState | null;
    loading: boolean;
    metrics: MetricCard[];
    children?: Snippet;
  };

  const overviewAreas = ['Users', 'Roles', 'Modes', 'Search'];

  let { notice, loading, metrics, children }: Props = $props();
</script>

<section class="admin-shell">
  <header class="workspace-overview">
    <div class="overview-copy">
      <span class="overview-eyebrow">Admin workspace</span>
      <h1 class="overview-title">Users, roles, modes, and search</h1>
      <div class="overview-pill-row" aria-label="Workspace focus areas">
        {#each overviewAreas as area (area)}
          <span class="overview-pill">{area}</span>
        {/each}
      </div>
      <p class="overview-subtitle">Compact control surface for provisioning, policy, and discovery.</p>
    </div>

    <div class="overview-metrics" aria-label="Admin summary metrics">
      {#each metrics as metric (metric.label)}
        <article class="overview-metric">
          <span class="overview-metric-label">{metric.label}</span>
          <strong class="overview-metric-value">{metric.value}</strong>
          <span class="overview-metric-detail">{metric.detail}</span>
        </article>
      {/each}
    </div>
  </header>

  {#if loading}
    <div class="notice">Loading admin control-plane data…</div>
  {/if}

  {#if notice}
    <div class={notice.error ? 'flash-error' : 'notice'} data-testid="admin-notice">{notice.message}</div>
  {/if}

  <div class="shell-body">
    {@render children?.()}
  </div>
</section>

<style>
  .admin-shell {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .workspace-overview {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
    align-items: stretch;
    padding: 1rem 1.15rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    border-radius: 28px;
    background:
      radial-gradient(circle at top right, color-mix(in srgb, var(--shell-primary), transparent 92%), transparent 34%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 42%),
      var(--shell-panel);
    box-shadow: var(--shell-card-shadow);
  }

  .overview-copy {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    min-width: 0;
  }

  .overview-eyebrow {
    color: var(--shell-muted);
    font: var(--efs-font-label);
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .overview-title {
    margin: 0;
    max-width: 18ch;
    color: var(--shell-text);
    font: var(--efs-font-title-lg);
    line-height: 1.04;
    letter-spacing: -0.04em;
  }

  .overview-pill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .overview-pill {
    display: inline-flex;
    align-items: center;
    min-height: 1.9rem;
    padding: 0 0.7rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 12%);
    border-radius: 999px;
    background: color-mix(in srgb, var(--shell-surface), transparent 8%);
    color: var(--shell-text);
    font: var(--efs-font-micro);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .overview-subtitle {
    margin: 0;
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .overview-metrics {
    display: grid;
    gap: 0.7rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .overview-metric {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    min-width: 0;
    min-height: 0;
    padding: 0.8rem 0.9rem;
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 8%);
    border-radius: 20px;
    background: color-mix(in srgb, var(--shell-surface), transparent 8%);
  }

  .overview-metric-label {
    color: var(--shell-muted);
    font: var(--efs-font-micro);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .overview-metric-value {
    color: var(--shell-text);
    font: var(--efs-font-title-md);
    line-height: 1;
  }

  .overview-metric-detail {
    color: var(--shell-muted);
    font: var(--efs-font-body-sm);
    line-height: 1.45;
    overflow-wrap: anywhere;
  }

  .shell-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .notice,
  .flash-error {
    border-radius: 22px;
    padding: 1rem 1.1rem;
    line-height: 1.6;
  }

  .notice {
    border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
    background: color-mix(in srgb, var(--shell-row-hover), transparent 4%);
    color: var(--shell-text);
  }

  .flash-error {
    border: 1px solid rgba(255, 123, 139, 0.28);
    background: rgba(255, 123, 139, 0.14);
    color: var(--shell-text);
  }

  @media (max-width: 63.99rem) {
    .workspace-overview {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 47.99rem) {
    .overview-metrics {
      grid-template-columns: 1fr;
    }
  }
</style>
