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
    onSearch?: () => void;
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
    onCrumb,
    onSearch
  } = $props<Props>();
</script>

<div class="toolbar">
  <div class="left">
    <section class="group">
      <div class="groupLabel">Actions</div>
      <div class="actions">
        <button class="btn" type="button" onclick={onHome} title="Home">Home</button>
        <button class="btn" type="button" onclick={onOpen} disabled={!canOpen} title="Open in Builder">
          Open in Builder
        </button>
        {#if onSearch}
          <button class="btn" type="button" onclick={onSearch} title="Search Workspace">Search</button>
        {/if}
      </div>
    </section>

    <section class="group modeGroup">
      <div class="groupLabel">Mode</div>
      <div class="modeBody">
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

        {#if mode === 'raw'}
          <span class="modeCue">Storage inspection</span>
        {/if}
      </div>
    </section>
  </div>

  <section class="crumbsShell group">
    <div class="crumbsHead">
      <div class="groupLabel">Path</div>
      {#if breadcrumbs[0]?.label === 'Staging' || breadcrumbs[0]?.label === 'Production'}
        <div class="envOps">
          <div class="envBadge">{breadcrumbs[0].label}</div>
          {#if breadcrumbs[0].label === 'Staging'}
            <a class="envBtn viewBtn" href="/staging" target="_blank" title="Open Staging environment in new tab">View Site</a>
          {:else if breadcrumbs[0].label === 'Production'}
            <a class="envBtn viewBtn" href="/" target="_blank" title="Open Production environment in new tab">View Site</a>
          {/if}
        </div>
      {/if}
    </div>
    <div class="crumbs" aria-label="Breadcrumbs">
      {#each breadcrumbs as c, i (c.path)}
        {#if i > 0}<span class="sep">/</span>{/if}
        <button class="crumb" type="button" onclick={() => onCrumb(c.path)}>
          {c.label}
        </button>
      {/each}
    </div>
  </section>

  <div class="right">
    <section class="group scaleGroup">
      <div class="groupLabel">Scale</div>
      <label class="scale">
        <span class="scaleValue">{Math.round(scale * 100)}%</span>
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
    </section>
  </div>
</div>

<style>
  .toolbar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    align-items: center;
    min-height: 0;
    padding: 10px 12px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 8%);
    border-radius: 18px 18px 12px 12px;
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 3%),
        color-mix(in oklab, var(--panel), black 6%)
      ),
      linear-gradient(
        90deg,
        color-mix(in oklab, var(--primary), transparent 95%),
        transparent 18%
      );
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 94%),
      0 16px 30px rgba(0, 0, 0, 0.12);
  }

  .left {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
    min-width: 0;
  }

  .group {
    min-width: 0;
    display: grid;
    gap: 8px;
    padding: 9px 11px;
    border-radius: 16px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 8%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), white 2%),
        color-mix(in oklab, var(--card), black 4%)
      );
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 95%),
      0 8px 18px rgba(0, 0, 0, 0.08);
  }

  .groupLabel {
    font: var(--efs-font-micro);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: color-mix(in oklab, var(--muted), var(--text) 14%);
  }

  .actions,
  .modeBody {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    min-width: 0;
  }

  .btn {
    min-height: 36px;
    padding: 0 14px;
    border-radius: 11px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 3%),
        color-mix(in oklab, var(--panel), black 2%)
      );
    color: var(--text);
    cursor: pointer;
    font: var(--efs-font-body-sm);
    font-weight: 800;
    letter-spacing: 0.01em;
    box-shadow: inset 0 1px 0 color-mix(in oklab, white, transparent 95%);
    transition:
      background 120ms ease,
      border-color 120ms ease,
      color 120ms ease,
      transform 120ms ease;
  }
  .btn:hover:not(:disabled) {
    background: color-mix(in oklab, var(--panel), var(--text) 4%);
    border-color: color-mix(in oklab, var(--border), var(--text) 18%);
    transform: translateY(-1px);
  }
  .btn:focus-visible,
  .crumb:focus-visible,
  .segbtn:focus-visible,
  input[type='range']:focus-visible {
    outline: 2px solid color-mix(in oklab, var(--primary), transparent 48%);
    outline-offset: 2px;
  }
  .btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .seg {
    display: inline-flex;
    padding: 3px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    border-radius: 13px;
    overflow: hidden;
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 1%),
        color-mix(in oklab, var(--panel), black 5%)
      );
    box-shadow: inset 0 1px 0 color-mix(in oklab, white, transparent 96%);
  }
  .segbtn {
    min-height: 34px;
    padding: 0 14px;
    border: 0;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    font: var(--efs-font-body-sm);
    font-weight: 800;
    border-radius: 10px;
    transition:
      background 120ms ease,
      color 120ms ease,
      box-shadow 120ms ease;
  }
  .segbtn:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
  .segbtn:hover:not(:disabled):not(.active) {
    color: var(--text);
    background: color-mix(in oklab, var(--hover), transparent 28%);
  }
  .segbtn.active {
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--primary), white 8%),
        color-mix(in oklab, var(--primary), black 4%)
      );
    color: var(--primaryText);
    box-shadow:
      0 0 0 1px color-mix(in oklab, var(--primary), black 16%),
      inset 0 1px 0 color-mix(in oklab, white, transparent 70%);
  }

  .modeCue {
    display: inline-flex;
    align-items: center;
    min-height: 34px;
    padding: 0 12px;
    border-radius: 999px;
    border: 1px solid color-mix(in oklab, var(--primary), var(--border) 42%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--card), var(--primary) 20%),
        color-mix(in oklab, var(--card), var(--primary) 12%)
      );
    color: var(--text);
    font: var(--efs-font-label);
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
    box-shadow:
      inset 0 1px 0 color-mix(in oklab, white, transparent 88%),
      0 10px 20px rgba(0, 0, 0, 0.08);
  }

  .crumbsShell {
    min-width: 0;
    align-self: stretch;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }

  .crumbsHead {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .envOps {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .envBadge {
    font: var(--efs-font-micro);
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 1px 7px;
    border-radius: 999px;
    background: color-mix(in oklab, var(--primary), transparent 88%);
    border: 1px solid color-mix(in oklab, var(--primary), transparent 65%);
    color: var(--primary);
    line-height: 1.6;
  }

  .envBtn {
    font: var(--efs-font-micro);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 2px 8px;
    border-radius: 6px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background: transparent;
    color: var(--text);
    cursor: pointer;
    transition: all 120ms ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .envBtn:hover {
    background: color-mix(in oklab, var(--text), transparent 90%);
  }

  .crumbs {
    display: flex;
    align-items: center;
    gap: 2px;
    min-width: 0;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    color: var(--muted);
    min-height: 36px;
    padding-inline-end: 4px;
    scrollbar-width: none;
    overscroll-behavior-x: contain;
  }

  .crumbs::-webkit-scrollbar {
    display: none;
  }
  .crumb {
    display: inline-block;
    flex: 0 1 auto;
    min-width: 0;
    max-width: min(22ch, 100%);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 0;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 10px;
    font: var(--efs-font-body-sm);
    font-weight: 700;
    transition:
      color 120ms ease,
      background 120ms ease;
  }
  .crumb:hover {
    color: var(--text);
    background: color-mix(in oklab, var(--hover), transparent 15%);
  }
  .sep {
    flex: 0 0 auto;
    padding: 0 3px;
    color: var(--muted);
    opacity: 0.45;
  }

  .right {
    display: flex;
    align-items: stretch;
    justify-self: end;
    min-width: 0;
  }

  .scaleGroup {
    min-width: 220px;
  }

  .scale {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 12px;
  }

  .scaleValue {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 46px;
    min-height: 34px;
    padding: 0 10px;
    border-radius: 11px;
    border: 1px solid color-mix(in oklab, var(--border), var(--text) 10%);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--panel), white 3%),
        color-mix(in oklab, var(--panel), black 2%)
      );
    color: var(--text);
    font: var(--efs-font-body-sm);
    font-weight: 800;
    letter-spacing: 0.04em;
  }

  input[type='range'] {
    width: min(156px, 100%);
    accent-color: var(--primary);
  }

  @media (max-width: 63.99rem) {
    .toolbar {
      grid-template-columns: 1fr;
      align-items: stretch;
    }

    .right {
      justify-self: start;
    }

    .crumbsShell {
      order: 3;
    }

    .scaleGroup {
      min-width: 0;
    }
  }

  @media (max-width: 47.99rem) {
    .actions,
    .modeBody {
      width: 100%;
    }

    .btn,
    .segbtn {
      flex: 1 1 auto;
      justify-content: center;
    }

    .crumbsHead {
      flex-wrap: wrap;
    }

    .scale {
      grid-template-columns: 1fr;
    }

    input[type='range'] {
      width: 100%;
    }
  }
</style>
