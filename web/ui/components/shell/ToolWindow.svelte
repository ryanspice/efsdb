<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    open: boolean;
    modal?: boolean;
    defaultWidth?: number;
    defaultHeight?: number;
    defaultX?: number;
    defaultY?: number;
    flushBody?: boolean;
    onClose: () => void;
    children?: Snippet;
    footer?: Snippet;
  };

  let {
    title,
    open = $bindable(false),
    modal = $bindable(true),
    defaultWidth = 480,
    defaultHeight = 380,
    defaultX = 120,
    defaultY = 80,
    flushBody = false,
    onClose,
    children,
    footer
  } = $props<Props>();

  let minimized = $state(false);
  let maximized = $state(false);

  let positionX = $state<number>(0);
  let positionY = $state<number>(0);
  let initialized = false;

  function clampPosition() {
    if (typeof window === 'undefined') {
      return { x: defaultX, y: defaultY };
    }

    const gutter = window.innerWidth <= 768 ? 8 : 12;
    const maxX = Math.max(gutter, window.innerWidth - defaultWidth - gutter);
    const maxY = Math.max(gutter, window.innerHeight - defaultHeight - gutter);

    return {
      x: Math.min(Math.max(gutter, defaultX), maxX),
      y: Math.min(Math.max(gutter, defaultY), maxY)
    };
  }

  $effect(() => {
    if (!initialized) {
      const { x, y } = clampPosition();
      positionX = x;
      positionY = y;
      initialized = true;
    }
  });

  let dragging = $state(false);
  let dragOffX = 0;
  let dragOffY = 0;

  $effect(() => {
    if (open) {
      minimized = false;
      maximized = false;
      // We don't reset position on every open so it stays where the user left it,
      // but you could if desired.
    }
  });

  function startDrag(e: PointerEvent) {
    if (maximized) return;
    if ((e.target as HTMLElement).closest('.dialog-controls')) return;
    dragging = true;
    dragOffX = e.clientX - positionX;
    dragOffY = e.clientY - positionY;
    window.addEventListener('pointermove', onDrag);
    window.addEventListener('pointerup', stopDrag);
  }

  function onDrag(e: PointerEvent) {
    if (!dragging) return;
    positionX = e.clientX - dragOffX;
    positionY = e.clientY - dragOffY;
  }

  function stopDrag() {
    dragging = false;
    window.removeEventListener('pointermove', onDrag);
    window.removeEventListener('pointerup', stopDrag);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      if (maximized) {
        maximized = false;
      } else if (minimized) {
        minimized = false;
      } else {
        onClose();
      }
    }
  }
</script>

{#if open}
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div
    class="dialog-wrapper"
    class:is-modal={modal}
    class:minimized
    tabindex="-1"
    onclick={(e) => { if (modal && e.target === e.currentTarget) onClose(); }}
    onkeydown={handleKeydown}
    role="dialog"
    aria-modal={modal ? "true" : "false"}
    aria-label={title}
    style:pointer-events={modal ? 'auto' : 'none'}
  >
    <div
      class="dialog"
      class:maximized
      style:left="{maximized ? '0' : positionX + 'px'}"
      style:top="{maximized ? '0' : positionY + 'px'}"
      style:width="{maximized ? '100%' : defaultWidth + 'px'}"
      style:height="{maximized ? '100%' : defaultHeight + 'px'}"
      style:pointer-events="auto"
    >
      <div
        class="dialog-titlebar"
        onpointerdown={startDrag}
        role="heading"
        aria-level="2"
      >
        <span class="dialog-title">{title}</span>
        <div class="dialog-controls">
          <button
            type="button"
            class="ctrl-btn unprioritize"
            class:active={!modal}
            onclick={() => { modal = !modal; }}
            title={modal ? 'Unprioritize (drop backdrop)' : 'Prioritize (show backdrop)'}
            aria-label={modal ? 'Unprioritize' : 'Prioritize'}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              {#if modal}
                <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18" opacity="0.3"/>
                <rect x="7" y="7" width="10" height="10" fill="currentColor"/>
              {:else}
                <rect x="7" y="7" width="10" height="10" fill="none"/>
              {/if}
            </svg>
          </button>
          <button
            type="button"
            class="ctrl-btn minimize"
            onclick={() => { minimized = !minimized; maximized = false; }}
            title={minimized ? 'Restore' : 'Minimize'}
            aria-label={minimized ? 'Restore dialog' : 'Minimize dialog'}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              {#if minimized}
                <rect x="1" y="1" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
              {:else}
                <rect x="1" y="7" width="8" height="2" fill="currentColor"/>
              {/if}
            </svg>
          </button>
          <button
            type="button"
            class="ctrl-btn maximize"
            onclick={() => { maximized = !maximized; minimized = false; }}
            title={maximized ? 'Restore' : 'Maximize'}
            aria-label={maximized ? 'Restore dialog' : 'Maximize dialog'}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              {#if maximized}
                <rect x="2" y="0" width="8" height="8" fill="none" stroke="currentColor" stroke-width="1.5"/>
                <rect x="0" y="2" width="8" height="8" fill="var(--shell-panel-bg, #ffffff)" stroke="currentColor" stroke-width="1.5"/>
              {:else}
                <rect x="0.5" y="0.5" width="9" height="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
              {/if}
            </svg>
          </button>
          <button
            type="button"
            class="ctrl-btn close"
            onclick={onClose}
            title="Close"
            aria-label="Close dialog"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <line x1="1" y1="1" x2="9" y2="9" stroke="currentColor" stroke-width="1.5"/>
              <line x1="9" y1="1" x2="1" y2="9" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </button>
        </div>
      </div>

      {#if !minimized}
        <div class="dialog-body" class:flush={flushBody}>
          {@render children?.()}
        </div>

        {#if footer}
          <div class="dialog-footer">
            {@render footer()}
          </div>
        {/if}
      {/if}
    </div>
  </div>
{/if}

<style>
  .dialog-wrapper {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
  }

  .dialog-wrapper.is-modal {
    background: rgba(0, 0, 0, 0.45);
  }

  .dialog-wrapper.minimized {
    align-items: flex-end;
    justify-content: flex-start;
  }

  .dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    background: var(--shell-panel-bg, #ffffff);
    border: 1px solid var(--shell-border, #e2e8f0);
    border-radius: 12px;
    box-shadow: var(--shell-shadow, 0 16px 48px rgba(0, 0, 0, 0.15));
    overflow: hidden;
    min-width: min(20rem, calc(100vw - 24px));
    min-height: 200px;
    max-width: calc(100vw - 24px);
    max-height: calc(100vh - 24px);
    font-family: var(--font-ui, system-ui, sans-serif);
    color: var(--shell-text, #0f172a);
  }

  .dialog-titlebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    background: var(--shell-inset-bg, #f1f5f9);
    border-bottom: 1px solid var(--shell-border, #e2e8f0);
    cursor: grab;
    user-select: none;
    flex-shrink: 0;
  }

  .dialog-titlebar:active {
    cursor: grabbing;
  }

  .dialog-title {
    font: var(--efs-font-title-sm, 600 15px/1.35 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    color: var(--shell-text-strong, #020617);
    letter-spacing: 0.01em;
  }

  .dialog-controls {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .ctrl-btn {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 4px;
    background: transparent;
    color: var(--shell-muted, #64748b);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: background 0.15s, color 0.15s;
  }

  .ctrl-btn:hover {
    background: var(--shell-hover-bg, #e2e8f0);
    color: var(--shell-text-strong, #020617);
  }

  .ctrl-btn.close:hover {
    background: #c04040;
    color: #fff;
  }

  .dialog-body {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .dialog-body.flush {
    padding: 0;
    gap: 0;
  }

  .dialog-footer {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    padding: 12px 16px;
    border-top: 1px solid var(--shell-border, #e2e8f0);
    background: var(--shell-inset-bg, #f1f5f9);
    flex-shrink: 0;
  }

  @media (max-width: 47.99rem) {
    .dialog {
      min-width: 0;
      max-width: calc(100vw - 16px);
      max-height: calc(100vh - 16px);
      border-radius: 10px;
    }

    .dialog-titlebar {
      padding: 12px;
    }

    .dialog-body {
      padding: 14px;
      gap: 12px;
    }

    .dialog-footer {
      flex-wrap: wrap;
      padding: 12px 14px;
    }
  }
</style>
