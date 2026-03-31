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
  let dockEdgeTop = $derived(dockPosition.edge === 'top' ? '1rem' : undefined);
  let dockRight = $derived(dockPosition.edge === 'right' ? '1rem' : undefined);
  let dockBottom = $derived(dockPosition.edge === 'bottom' ? '1rem' : undefined);
  let dockEdgeLeft = $derived(dockPosition.edge === 'left' ? '1rem' : undefined);
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
    gap: 0.6rem;
    align-items: flex-end;
    pointer-events: none;
  }

  .tool-dock-item {
    position: relative;
    display: inline-flex;
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
    pointer-events: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.1rem;
    height: 3.1rem;
    border: 1px solid color-mix(in srgb, var(--shell-border, #334155), transparent 8%);
    border-radius: 999px;
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
      radial-gradient(circle at 30% 30%, rgba(125, 211, 252, 0.18), transparent 56%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 72%),
      color-mix(in srgb, var(--shell-primary, #7dd3fc), transparent 88%);
  }

  .tool-dock-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    height: 1.2rem;
    background: currentColor;
    mask: var(--icon-mask) center / contain no-repeat;
    -webkit-mask: var(--icon-mask) center / contain no-repeat;
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
    width: 1rem;
    height: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.92);
    border-radius: 999px;
    background: rgba(15, 23, 42, 0.96);
    color: white;
    font: 700 0.72rem/1 var(--efs-font-sans, sans-serif);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.28);
    cursor: pointer;
    transition: transform 140ms ease, background-color 140ms ease, box-shadow 140ms ease;
  }

  .tool-dock-remove:hover {
    transform: scale(1.06);
    background: rgba(220, 38, 38, 0.96);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.34);
  }

  .tool-dock-tooltip {
    position: absolute;
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

  .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock-button:focus-visible .tool-dock-tooltip {
    opacity: 1;
  }

  .tool-dock[data-edge='right'] .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock[data-edge='right'] .tool-dock-button:focus-visible .tool-dock-tooltip,
  .tool-dock[data-edge='left'] .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock[data-edge='left'] .tool-dock-button:focus-visible .tool-dock-tooltip {
    transform: translateY(-50%) translateX(0);
  }

  .tool-dock[data-edge='top'] .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock[data-edge='top'] .tool-dock-button:focus-visible .tool-dock-tooltip,
  .tool-dock[data-edge='bottom'] .tool-dock-button:hover .tool-dock-tooltip,
  .tool-dock[data-edge='bottom'] .tool-dock-button:focus-visible .tool-dock-tooltip {
    transform: translateX(-50%) translateY(0);
  }

  @media (max-width: 47.99rem) {
    .tool-dock-button {
      width: 2.8rem;
      height: 2.8rem;
    }

    .tool-dock-remove {
      width: 0.9rem;
      height: 0.9rem;
      font-size: 0.68rem;
    }

    .tool-dock-tooltip {
      display: none;
    }
  }
</style>
