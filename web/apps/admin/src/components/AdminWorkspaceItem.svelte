<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { AdminWorkspaceWidgetLayout } from '../lib/types';

  type ResizeDirection = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';
  type FloatingRect = {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  type Props = {
    title: string;
    layout: AdminWorkspaceWidgetLayout;
    canvasWidth: number;
    compact?: boolean;
    editable?: boolean;
    zIndex?: number;
    onChange: (layout: AdminWorkspaceWidgetLayout) => void;
    onPreviewChange?: (layout: AdminWorkspaceWidgetLayout | null) => void;
    onShiftPopoutStart?: (seed: { pointerId: number; clientX: number; clientY: number }) => void;
    onFocus?: () => void;
    children?: Snippet;
  };

  const GRID_COLUMNS = 12;
  const GRID_ROW_HEIGHT = 24;
  const MIN_WIDGET_WIDTH = 3;
  const MIN_WIDGET_HEIGHT = 8;

  let {
    title,
    layout,
    canvasWidth,
    compact = false,
    editable = false,
    zIndex = 1,
    onChange,
    onPreviewChange,
    onShiftPopoutStart,
    onFocus,
    children
  }: Props = $props();

  let itemNode = $state<HTMLDivElement | null>(null);
  let dragging = $state(false);
  let resizing = $state(false);
  let previewLayout = $state<AdminWorkspaceWidgetLayout | null>(null);
  let floatingRect = $state<FloatingRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });

  let dragStartX = 0;
  let dragStartY = 0;
  let resizeStartX = 0;
  let resizeStartY = 0;
  let dragStartLayout: AdminWorkspaceWidgetLayout = {
    col: 1,
    row: 1,
    width: MIN_WIDGET_WIDTH,
    height: MIN_WIDGET_HEIGHT
  };
  let resizeStartLayout: AdminWorkspaceWidgetLayout = {
    col: 1,
    row: 1,
    width: MIN_WIDGET_WIDTH,
    height: MIN_WIDGET_HEIGHT
  };
  let dragStartRect: FloatingRect = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  let resizeStartRect: FloatingRect = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  let resizeDirection: ResizeDirection = 'se';

  let previewing = $derived(dragging || resizing);
  let placeholderLayout = $derived(previewLayout ?? layout);

  function toColumnDelta(deltaX: number): number {
    if (canvasWidth <= 0) {
      return 0;
    }

    return Math.round(deltaX / (canvasWidth / GRID_COLUMNS));
  }

  function toRowDelta(deltaY: number): number {
    return Math.round(deltaY / GRID_ROW_HEIGHT);
  }

  function clampColumn(col: number, width: number): number {
    return Math.max(1, Math.min(GRID_COLUMNS - width + 1, col));
  }

  function captureFloatingRect(): FloatingRect {
    const rect = itemNode?.getBoundingClientRect();

    if (!rect) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }

    return {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    };
  }

  function getMinimumFloatingWidth(): number {
    if (canvasWidth <= 0) {
      return 240;
    }

    return Math.max(240, (canvasWidth / GRID_COLUMNS) * MIN_WIDGET_WIDTH);
  }

  function getMinimumFloatingHeight(): number {
    return GRID_ROW_HEIGHT * MIN_WIDGET_HEIGHT;
  }

  function isInteractiveTarget(target: EventTarget | null): boolean {
    return Boolean(
      (target as HTMLElement | null)?.closest(
        'button, a, input, select, textarea, label, [role="button"], [contenteditable="true"]'
      )
    );
  }

  function isHeaderTarget(target: EventTarget | null): boolean {
    return Boolean((target as HTMLElement | null)?.closest('.widget-header'));
  }

  function updatePreview(layoutCandidate: AdminWorkspaceWidgetLayout | null) {
    previewLayout = layoutCandidate;
    onPreviewChange?.(layoutCandidate);
  }

  function endPreview() {
    previewLayout = null;
    onPreviewChange?.(null);
  }

  function startMove(event: PointerEvent) {
    if (
      !compact &&
      event.shiftKey &&
      event.button === 0 &&
      !isInteractiveTarget(event.target) &&
      isHeaderTarget(event.target)
    ) {
      onFocus?.();
      onShiftPopoutStart?.({
        pointerId: event.pointerId,
        clientX: event.clientX,
        clientY: event.clientY
      });
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (
      compact ||
      !editable ||
      event.button !== 0 ||
      isInteractiveTarget(event.target) ||
      !isHeaderTarget(event.target)
    ) {
      return;
    }

    dragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    dragStartLayout = { ...layout };
    dragStartRect = captureFloatingRect();
    floatingRect = { ...dragStartRect };
    updatePreview({ ...layout });

    const target = event.currentTarget as HTMLElement;
    target.setPointerCapture(event.pointerId);
    onFocus?.();
    event.preventDefault();
    event.stopPropagation();
  }

  function moveWidget(event: PointerEvent) {
    if (!dragging) return;

    const nextWidth = dragStartLayout.width;
    const nextLayout = {
      ...dragStartLayout,
      col: clampColumn(dragStartLayout.col + toColumnDelta(event.clientX - dragStartX), nextWidth),
      row: Math.max(1, dragStartLayout.row + toRowDelta(event.clientY - dragStartY))
    };

    floatingRect = {
      ...dragStartRect,
      x: dragStartRect.x + (event.clientX - dragStartX),
      y: dragStartRect.y + (event.clientY - dragStartY)
    };

    updatePreview(nextLayout);
  }

  function endMove(event: PointerEvent) {
    if (!dragging) return;

    dragging = false;
    const target = event.currentTarget as HTMLElement;
    target.releasePointerCapture(event.pointerId);

    if (previewLayout) {
      onChange(previewLayout);
    }

    endPreview();
  }

  function startResize(direction: ResizeDirection, event: PointerEvent) {
    if (compact || !editable || event.button !== 0) return;

    resizing = true;
    resizeDirection = direction;
    resizeStartX = event.clientX;
    resizeStartY = event.clientY;
    resizeStartLayout = { ...layout };
    resizeStartRect = captureFloatingRect();
    floatingRect = { ...resizeStartRect };
    updatePreview({ ...layout });

    const target = event.currentTarget as HTMLElement;
    target.setPointerCapture(event.pointerId);
    onFocus?.();
    event.preventDefault();
    event.stopPropagation();
  }

  function resizeWidget(event: PointerEvent) {
    if (!resizing) return;

    const deltaCols = toColumnDelta(event.clientX - resizeStartX);
    const deltaRows = toRowDelta(event.clientY - resizeStartY);

    let nextCol = resizeStartLayout.col;
    let nextRow = resizeStartLayout.row;
    let nextWidth = resizeStartLayout.width;
    let nextHeight = resizeStartLayout.height;

    if (resizeDirection.includes('e')) {
      nextWidth = Math.max(
        MIN_WIDGET_WIDTH,
        Math.min(GRID_COLUMNS - resizeStartLayout.col + 1, resizeStartLayout.width + deltaCols)
      );
    }

    if (resizeDirection.includes('s')) {
      nextHeight = Math.max(MIN_WIDGET_HEIGHT, resizeStartLayout.height + deltaRows);
    }

    if (resizeDirection.includes('w')) {
      nextCol = Math.max(
        1,
        Math.min(
          resizeStartLayout.col + deltaCols,
          resizeStartLayout.col + resizeStartLayout.width - MIN_WIDGET_WIDTH
        )
      );
      nextWidth = resizeStartLayout.width + (resizeStartLayout.col - nextCol);
    }

    if (resizeDirection.includes('n')) {
      nextRow = Math.max(
        1,
        Math.min(
          resizeStartLayout.row + deltaRows,
          resizeStartLayout.row + resizeStartLayout.height - MIN_WIDGET_HEIGHT
        )
      );
      nextHeight = resizeStartLayout.height + (resizeStartLayout.row - nextRow);
    }

    const nextLayout = {
      col: clampColumn(nextCol, nextWidth),
      row: Math.max(1, nextRow),
      width: nextWidth,
      height: nextHeight
    };

    const deltaX = event.clientX - resizeStartX;
    const deltaY = event.clientY - resizeStartY;
    const minWidth = getMinimumFloatingWidth();
    const minHeight = getMinimumFloatingHeight();
    let nextRect = { ...resizeStartRect };

    if (resizeDirection.includes('e')) {
      nextRect.width = Math.max(minWidth, resizeStartRect.width + deltaX);
    }

    if (resizeDirection.includes('s')) {
      nextRect.height = Math.max(minHeight, resizeStartRect.height + deltaY);
    }

    if (resizeDirection.includes('w')) {
      nextRect.width = Math.max(minWidth, resizeStartRect.width - deltaX);
      nextRect.x = resizeStartRect.x + (resizeStartRect.width - nextRect.width);
    }

    if (resizeDirection.includes('n')) {
      nextRect.height = Math.max(minHeight, resizeStartRect.height - deltaY);
      nextRect.y = resizeStartRect.y + (resizeStartRect.height - nextRect.height);
    }

    floatingRect = nextRect;
    updatePreview(nextLayout);
  }

  function endResize(event: PointerEvent) {
    if (!resizing) return;

    resizing = false;
    const target = event.currentTarget as HTMLElement;
    target.releasePointerCapture(event.pointerId);

    if (previewLayout) {
      onChange(previewLayout);
    }

    endPreview();
  }
</script>

{#if previewing}
  <div
    class="workspace-placeholder-slot"
    style:--widget-col={placeholderLayout.col}
    style:--widget-row={placeholderLayout.row}
    style:--widget-width={placeholderLayout.width}
    style:--widget-height={placeholderLayout.height}
    role="presentation"
    aria-hidden="true"
  >
    <div class="workspace-placeholder">
      <span class="workspace-placeholder-label">{title}</span>
    </div>
  </div>
{/if}

<div
  bind:this={itemNode}
  class="workspace-item"
  class:compact
  class:editable={editable && !compact}
  class:dragging
  class:resizing
  class:floating={previewing}
  style:--widget-col={layout.col}
  style:--widget-row={layout.row}
  style:--widget-width={layout.width}
  style:--widget-height={layout.height}
  style:--floating-x={`${floatingRect.x}px`}
  style:--floating-y={`${floatingRect.y}px`}
  style:--floating-width={`${floatingRect.width}px`}
  style:--floating-height={`${floatingRect.height}px`}
  style:z-index={previewing ? zIndex + 240 : zIndex}
  role="presentation"
  onpointerdown={() => onFocus?.()}
>
  <div
    class="workspace-surface"
    role="presentation"
    onpointerdown={startMove}
    onpointermove={moveWidget}
    onpointerup={endMove}
    onpointercancel={endMove}
  >
    {#if !compact && editable}
      {#each ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'] as direction (direction)}
        <div
          class={`resize-handle resize-${direction}`}
          role="presentation"
          aria-hidden="true"
          onpointerdown={(event) => startResize(direction as ResizeDirection, event)}
          onpointermove={resizeWidget}
          onpointerup={endResize}
          onpointercancel={endResize}
        ></div>
      {/each}
    {/if}

    {@render children?.()}
  </div>
</div>

<style>
  .workspace-placeholder-slot,
  .workspace-item {
    grid-column: var(--widget-col) / span var(--widget-width);
    grid-row: var(--widget-row) / span var(--widget-height);
    min-width: 0;
    min-height: 0;
  }

  .workspace-placeholder-slot {
    pointer-events: none;
  }

  .workspace-placeholder {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px dashed color-mix(in srgb, var(--shell-primary), transparent 30%);
    border-radius: 28px;
    background:
      linear-gradient(135deg, color-mix(in srgb, var(--shell-primary), transparent 92%), transparent 64%),
      color-mix(in srgb, var(--shell-row-hover), transparent 22%);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 76%);
  }

  .workspace-placeholder-label {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: color-mix(in srgb, var(--shell-text), transparent 24%);
    font: var(--efs-font-micro);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .workspace-item {
    transition:
      box-shadow var(--efs-motion-normal) var(--efs-ease-standard),
      filter var(--efs-motion-fast) var(--efs-ease-standard),
      opacity var(--efs-motion-fast) var(--efs-ease-standard);
  }

  .workspace-item.compact {
    grid-column: 1 / -1;
    grid-row: auto;
  }

  .workspace-item.floating {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--floating-width);
    height: var(--floating-height);
    transform: translate(var(--floating-x), var(--floating-y));
    pointer-events: auto;
  }

  .workspace-item.dragging,
  .workspace-item.resizing {
    filter: saturate(1.03);
    transition: none;
  }

  .workspace-item.dragging :global(.widget-frame),
  .workspace-item.resizing :global(.widget-frame) {
    box-shadow:
      0 20px 48px rgba(0, 0, 0, 0.3),
      0 0 0 1px color-mix(in srgb, var(--shell-primary), transparent 72%);
  }

  .workspace-surface {
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
  }

  .workspace-item.editable :global(.widget-header) {
    cursor: grab;
    user-select: none;
  }

  .workspace-item.dragging :global(.widget-header) {
    cursor: grabbing;
  }

  .resize-handle {
    position: absolute;
    z-index: 2;
    touch-action: none;
  }

  .resize-n,
  .resize-s {
    left: 1rem;
    right: 1rem;
    height: 0.75rem;
    cursor: ns-resize;
  }

  .resize-n {
    top: -0.35rem;
  }

  .resize-s {
    bottom: -0.35rem;
  }

  .resize-e,
  .resize-w {
    top: 1rem;
    bottom: 1rem;
    width: 0.75rem;
    cursor: ew-resize;
  }

  .resize-e {
    right: -0.35rem;
  }

  .resize-w {
    left: -0.35rem;
  }

  .resize-ne,
  .resize-nw,
  .resize-se,
  .resize-sw {
    width: 1rem;
    height: 1rem;
  }

  .resize-ne {
    top: -0.35rem;
    right: -0.35rem;
    cursor: nesw-resize;
  }

  .resize-nw {
    top: -0.35rem;
    left: -0.35rem;
    cursor: nwse-resize;
  }

  .resize-se {
    right: -0.35rem;
    bottom: -0.35rem;
    cursor: nwse-resize;
  }

  .resize-sw {
    left: -0.35rem;
    bottom: -0.35rem;
    cursor: nesw-resize;
  }

  @media (max-width: 63.99rem) {
    .resize-handle {
      display: none;
    }
  }
</style>
