<script lang="ts">
  export type ToolDockItem = {
    id: string;
    label: string;
    iconMask: string;
    active?: boolean;
  };

  export type ToolDockPosition = {
    edge: 'left' | 'right' | 'top' | 'bottom';
    ratio: number;
  };

  export type ToolDockLabelMode = 'hover' | 'always' | 'popout' | 'hidden';

  type DockDragState = {
    itemId: string;
    pointerId: number;
    startX: number;
    startY: number;
    dragging: boolean;
  };

  type Props = {
    items?: ToolDockItem[];
    position?: ToolDockPosition;
    labelMode?: ToolDockLabelMode;
    onActivate?: (itemId: string) => void;
    onRemove?: (itemId: string) => void;
    onPositionChange?: (position: ToolDockPosition) => void;
  };

  const DRAG_THRESHOLD = 6;
  const MIN_RATIO = 0.08;
  const MAX_RATIO = 0.92;

  let {
    items = [],
    position = { edge: 'right', ratio: 0.84 },
    labelMode = 'hover',
    onActivate,
    onRemove,
    onPositionChange
  }: Props = $props();

  let draggedDockPosition = $state<ToolDockPosition | null>(null);
  let dragState = $state<DockDragState | null>(null);
  let suppressClickId = $state<string | null>(null);

  function clampRatio(value: number): number {
    return Math.max(MIN_RATIO, Math.min(MAX_RATIO, value));
  }

  function createDockPosition(edge: ToolDockPosition['edge'], ratio: number): ToolDockPosition {
    return {
      edge,
      ratio: clampRatio(ratio)
    };
  }

  function resolveDockPosition(clientX: number, clientY: number): ToolDockPosition {
    if (typeof window === 'undefined') {
      return draggedDockPosition ?? createDockPosition(position.edge, position.ratio);
    }

    const viewportWidth = Math.max(window.innerWidth, 1);
    const viewportHeight = Math.max(window.innerHeight, 1);
    const distances = {
      left: clientX,
      right: viewportWidth - clientX,
      top: clientY,
      bottom: viewportHeight - clientY
    };

    const edge = (Object.entries(distances).sort((left, right) => left[1] - right[1])[0]?.[0] ??
      (draggedDockPosition ?? createDockPosition(position.edge, position.ratio)).edge) as ToolDockPosition['edge'];

    if (edge === 'left' || edge === 'right') {
      return createDockPosition(edge, clientY / viewportHeight);
    }

    return createDockPosition(edge, clientX / viewportWidth);
  }

  function startDockDrag(itemId: string, event: PointerEvent) {
    if (event.button !== 0) {
      return;
    }

    dragState = {
      itemId,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      dragging: false
    };
  }

  function handlePointerMove(event: PointerEvent) {
    if (!dragState || event.pointerId !== dragState.pointerId) {
      return;
    }

    const movedEnough =
      Math.hypot(event.clientX - dragState.startX, event.clientY - dragState.startY) >= DRAG_THRESHOLD;

    if (!dragState.dragging && !movedEnough) {
      return;
    }

    if (!dragState.dragging) {
      dragState = {
        ...dragState,
        dragging: true
      };
      suppressClickId = dragState.itemId;
    }

    const nextPosition = resolveDockPosition(event.clientX, event.clientY);
    draggedDockPosition = nextPosition;
    onPositionChange?.(nextPosition);
  }

  function endDockDrag(event: PointerEvent) {
    if (!dragState || event.pointerId !== dragState.pointerId) {
      return;
    }

    const endedItemId = dragState.itemId;

    if (dragState.dragging) {
      onPositionChange?.(dockPosition);
      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(() => {
          if (suppressClickId === endedItemId) {
            suppressClickId = null;
          }
          draggedDockPosition = null;
        });
      }
    } else {
      draggedDockPosition = null;
    }

    dragState = null;
  }

  function activateItem(itemId: string) {
    if (suppressClickId === itemId) {
      suppressClickId = null;
      return;
    }

    onActivate?.(itemId);
  }

  let dockPosition = $derived(
    draggedDockPosition ?? createDockPosition(position.edge, position.ratio)
  );

  let dockTop = $derived(
    dockPosition.edge === 'left' || dockPosition.edge === 'right'
      ? `${(dockPosition.ratio * 100).toFixed(3)}%`
      : undefined
  );
  let dockLeft = $derived(
    dockPosition.edge === 'top' || dockPosition.edge === 'bottom'
      ? `${(dockPosition.ratio * 100).toFixed(3)}%`
      : undefined
  );
  let dockEdgeTop = $derived(
    dockPosition.edge === 'top' ? 'var(--efs-dock-offset, 1rem)' : undefined
  );
  let dockRight = $derived(
    dockPosition.edge === 'right' ? 'var(--efs-dock-offset, 1rem)' : undefined
  );
  let dockBottom = $derived(
    dockPosition.edge === 'bottom' ? 'var(--efs-dock-offset, 1rem)' : undefined
  );
  let dockEdgeLeft = $derived(
    dockPosition.edge === 'left' ? 'var(--efs-dock-offset, 1rem)' : undefined
  );
  let dockTransform = $derived(
    dockPosition.edge === 'left' || dockPosition.edge === 'right'
      ? 'translateY(-100%)'
      : 'translateX(-50%)'
  );
</script>

<svelte:window onpointermove={handlePointerMove} onpointerup={endDockDrag} onpointercancel={endDockDrag} />

{#if items.length > 0}
  <div
    class="tool-dock"
    class:is-dragging={Boolean(dragState?.dragging)}
    data-edge={dockPosition.edge}
    data-label-mode={labelMode}
    role="toolbar"
    aria-label="Pinned actions"
    style:top={dockTop ?? dockEdgeTop}
    style:left={dockLeft ?? dockEdgeLeft}
    style:right={dockRight}
    style:bottom={dockBottom}
    style:transform={dockTransform}
  >
    {#each items as item (item.id)}
      <div class="tool-dock-item">
        <span class="tool-dock-popout" aria-hidden="true">{item.label}</span>
        <button
          class="tool-dock-button"
          class:is-active={item.active}
          type="button"
          aria-label={item.label}
          title={item.label}
          onpointerdown={(event) => startDockDrag(item.id, event)}
          onclick={() => activateItem(item.id)}
        >
          <span class="tool-dock-tooltip">{item.label}</span>
          <span class="tool-dock-icon" style:--icon-mask={item.iconMask}></span>
        </button>

        {#if onRemove}
          <button
            class="tool-dock-remove"
            type="button"
            aria-label={`Remove ${item.label}`}
            title={`Remove ${item.label}`}
            onclick={(event) => {
              event.stopPropagation();
              onRemove(item.id);
            }}
          >
            ×
          </button>
        {/if}
      </div>
    {/each}
  </div>
{/if}

<style>
  .tool-dock {
    position: fixed;
    z-index: 520;
    display: inline-flex;
    gap: var(--efs-dock-gap, 0.6rem);
    align-items: flex-end;
    pointer-events: none;
  }

  .tool-dock-item {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .tool-dock[data-edge='left'],
  .tool-dock[data-edge='right'] {
    flex-direction: column-reverse;
  }

  .tool-dock[data-edge='top'],
  .tool-dock[data-edge='bottom'] {
    flex-direction: row;
    align-items: center;
  }

  .tool-dock[data-edge='left'] {
    align-items: flex-start;
  }

  .tool-dock.is-dragging {
    transition: none;
  }

  .tool-dock-button {
    position: relative;
    z-index: 1;
    pointer-events: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem));
    height: var(--efs-dock-button-size, 3.1rem);
    border: 1px solid color-mix(in srgb, var(--shell-border, #334155), transparent 8%);
    border-radius: min(999px, calc(var(--efs-dock-button-size, 3.1rem) * 0.52));
    background:
      radial-gradient(
        circle at 30% 30%,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%),
        transparent 54%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 70%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.92)), transparent 2%);
    color: var(--shell-text, #f8fafc);
    box-shadow:
      0 18px 44px rgba(0, 0, 0, 0.32),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%);
    cursor: grab;
    transition:
      transform 160ms ease,
      border-color 160ms ease,
      background-color 160ms ease,
      box-shadow 160ms ease;
  }

  .tool-dock.is-dragging .tool-dock-button,
  .tool-dock-button:active {
    cursor: grabbing;
  }

  .tool-dock-button:hover {
    transform: translateY(-2px) scale(1.02);
    border-color: color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 36%);
    box-shadow:
      0 22px 54px rgba(0, 0, 0, 0.38),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 78%);
  }

  .tool-dock[data-edge='top'] .tool-dock-button:hover,
  .tool-dock[data-edge='bottom'] .tool-dock-button:hover {
    transform: translateY(0) translateX(1px) scale(1.02);
  }

  .tool-dock-button.is-active {
    border-color: color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 38%);
    background:
      radial-gradient(
        circle at 30% 30%,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 82%),
        transparent 56%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 72%),
      color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 88%);
  }

  .tool-dock-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--efs-dock-icon-size, 1.2rem);
    height: var(--efs-dock-icon-size, 1.2rem);
    background: currentColor;
    mask: var(--icon-mask) center / contain no-repeat;
    -webkit-mask: var(--icon-mask) center / contain no-repeat;
    transform: scale(var(--efs-dock-icon-scale, 1));
    transform-origin: center;
  }

  .tool-dock-remove {
    position: absolute;
    right: -0.1rem;
    bottom: -0.08rem;
    z-index: 2;
    pointer-events: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--efs-dock-remove-size, 1rem);
    height: var(--efs-dock-remove-size, 1rem);
    border: 1px solid color-mix(in srgb, var(--shell-text, #f8fafc), transparent 18%);
    border-radius: 999px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 76%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), var(--shell-text, #f8fafc) 12%);
    color: var(--shell-text-strong, var(--shell-text, #f8fafc));
    font:
      700 calc(var(--efs-dock-remove-size, 1rem) * 0.72) / 1
      var(--efs-font-sans, sans-serif);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.28);
    cursor: pointer;
    transition: transform 140ms ease, background-color 140ms ease, box-shadow 140ms ease;
  }

  .tool-dock-remove:hover {
    transform: scale(1.06);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 76%),
      color-mix(in srgb, #dc2626, var(--shell-panel, rgba(10, 16, 30, 0.96)) 18%);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.34);
  }

  .tool-dock-tooltip {
    position: absolute;
    z-index: 2;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;
    padding: 0.55rem 0.75rem;
    border: 1px solid color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 52%);
    border-radius: 12px;
    background:
      radial-gradient(
        circle at top left,
        color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 86%),
        transparent 34%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 82%),
      color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), transparent 2%);
    color: var(--shell-text, #f8fafc);
    font: var(--efs-font-body-sm, 600 0.875rem/1.3 sans-serif);
    box-shadow:
      0 16px 34px rgba(0, 0, 0, 0.42),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border, #334155), transparent 18%);
    transition:
      opacity 140ms ease,
      transform 140ms ease;
  }

  .tool-dock-popout {
    position: absolute;
    z-index: 0;
    opacity: 0;
    pointer-events: none;
    display: none;
    align-items: center;
    max-width: var(--efs-dock-popout-width, 10rem);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem 0.85rem;
    border: 1px solid color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 56%);
    border-radius: 999px;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 82%),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--shell-inset-bg, rgba(2, 6, 23, 0.92)), transparent 0%),
        color-mix(in srgb, var(--shell-panel, rgba(10, 16, 30, 0.96)), transparent 2%)
      );
    color: var(--shell-text, #f8fafc);
    font: var(--efs-font-body-xs, 600 0.75rem/1.3 sans-serif);
    box-shadow:
      0 16px 34px rgba(0, 0, 0, 0.34),
      inset 0 0 0 1px color-mix(in srgb, var(--shell-border, #334155), transparent 20%);
    transition:
      opacity 180ms ease,
      transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .tool-dock[data-edge='right'] .tool-dock-tooltip {
    right: calc(100% + 0.75rem);
    top: 50%;
    transform: translateY(-50%) translateX(0.35rem);
  }

  .tool-dock[data-edge='left'] .tool-dock-tooltip {
    left: calc(100% + 0.75rem);
    top: 50%;
    transform: translateY(-50%) translateX(-0.35rem);
  }

  .tool-dock[data-edge='top'] .tool-dock-tooltip {
    top: calc(100% + 0.75rem);
    left: 50%;
    transform: translateX(-50%) translateY(-0.35rem);
  }

  .tool-dock[data-edge='bottom'] .tool-dock-tooltip {
    bottom: calc(100% + 0.75rem);
    left: 50%;
    transform: translateX(-50%) translateY(0.35rem);
  }

  .tool-dock[data-edge='right'] .tool-dock-popout {
    top: 50%;
    right: calc(100% - min(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)), var(--efs-dock-button-size, 3.1rem)) * 0.32);
    transform: translateY(-50%) scaleX(0.72);
    transform-origin: right center;
    padding-right: calc(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)) * 0.54);
  }

  .tool-dock[data-edge='left'] .tool-dock-popout {
    top: 50%;
    left: calc(100% - min(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)), var(--efs-dock-button-size, 3.1rem)) * 0.32);
    transform: translateY(-50%) scaleX(0.72);
    transform-origin: left center;
    padding-left: calc(var(--efs-dock-button-width, var(--efs-dock-button-size, 3.1rem)) * 0.54);
  }

  .tool-dock[data-edge='top'] .tool-dock-popout,
  .tool-dock[data-edge='bottom'] .tool-dock-popout {
    left: 50%;
    min-width: max-content;
    padding-inline: 0.85rem;
    transform-origin: center center;
  }

  .tool-dock[data-edge='top'] .tool-dock-popout {
    top: calc(100% - var(--efs-dock-button-size, 3.1rem) * 0.28);
    transform: translateX(-50%) scaleX(0.82);
  }

  .tool-dock[data-edge='bottom'] .tool-dock-popout {
    bottom: calc(100% - var(--efs-dock-button-size, 3.1rem) * 0.28);
    transform: translateX(-50%) scaleX(0.82);
  }

  .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock-button:focus-visible .tool-dock-tooltip {
    opacity: 1;
  }

  .tool-dock[data-label-mode='always'] .tool-dock-tooltip {
    opacity: 1;
  }

  .tool-dock[data-label-mode='popout'] .tool-dock-tooltip {
    display: none;
  }

  .tool-dock[data-label-mode='hidden'] .tool-dock-tooltip {
    display: none;
  }

  .tool-dock[data-label-mode='popout'] .tool-dock-popout {
    display: inline-flex;
  }

  .tool-dock[data-label-mode='popout'] .tool-dock-item:hover .tool-dock-popout,
  .tool-dock[data-label-mode='popout'] .tool-dock-item:focus-within .tool-dock-popout {
    opacity: 1;
  }

  .tool-dock[data-label-mode='popout'][data-edge='right'] .tool-dock-item:hover .tool-dock-popout,
  .tool-dock[data-label-mode='popout'][data-edge='right'] .tool-dock-item:focus-within .tool-dock-popout,
  .tool-dock[data-label-mode='popout'][data-edge='left'] .tool-dock-item:hover .tool-dock-popout,
  .tool-dock[data-label-mode='popout'][data-edge='left'] .tool-dock-item:focus-within .tool-dock-popout {
    transform: translateY(-50%) scaleX(1);
  }

  .tool-dock[data-label-mode='popout'][data-edge='top'] .tool-dock-item:hover .tool-dock-popout,
  .tool-dock[data-label-mode='popout'][data-edge='top'] .tool-dock-item:focus-within .tool-dock-popout,
  .tool-dock[data-label-mode='popout'][data-edge='bottom'] .tool-dock-item:hover .tool-dock-popout,
  .tool-dock[data-label-mode='popout'][data-edge='bottom'] .tool-dock-item:focus-within .tool-dock-popout {
    transform: translateX(-50%) scaleX(1);
  }

  .tool-dock[data-edge='right'] .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock[data-edge='right'] .tool-dock-button:focus-visible .tool-dock-tooltip,
  .tool-dock[data-edge='left'] .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock[data-edge='left'] .tool-dock-button:focus-visible .tool-dock-tooltip {
    transform: translateY(-50%) translateX(0);
  }

  .tool-dock[data-label-mode='always'][data-edge='right'] .tool-dock-tooltip,
  .tool-dock[data-label-mode='always'][data-edge='left'] .tool-dock-tooltip {
    transform: translateY(-50%) translateX(0);
  }

  .tool-dock[data-edge='top'] .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock[data-edge='top'] .tool-dock-button:focus-visible .tool-dock-tooltip,
  .tool-dock[data-edge='bottom'] .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock[data-edge='bottom'] .tool-dock-button:focus-visible .tool-dock-tooltip {
    transform: translateX(-50%) translateY(0);
  }

  .tool-dock[data-label-mode='always'][data-edge='top'] .tool-dock-tooltip,
  .tool-dock[data-label-mode='always'][data-edge='bottom'] .tool-dock-tooltip {
    transform: translateX(-50%) translateY(0);
  }

  @media (max-width: 47.99rem) {
    .tool-dock-tooltip {
      display: none;
    }

    .tool-dock-popout {
      display: none !important;
    }
  }
</style>
