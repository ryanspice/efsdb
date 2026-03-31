<script lang="ts">
  import type { Snippet } from 'svelte';

  type Placement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

  type Props = {
    open?: boolean;
    anchor?: HTMLElement | null;
    placement?: Placement;
    offset?: number;
    width?: string;
    zIndex?: number;
    onClose?: () => void;
    children?: Snippet;
  };

  let {
    open = false,
    anchor = null,
    placement = 'bottom-end',
    offset = 12,
    width = 'min(28rem, calc(100vw - 1.5rem))',
    zIndex = 460,
    onClose,
    children
  }: Props = $props();

  let panel = $state<HTMLDivElement | null>(null);
  let top = $state(0);
  let left = $state(0);

  function updatePosition() {
    if (!open || !anchor || !panel || typeof window === 'undefined') {
      return;
    }

    const anchorRect = anchor.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const gutter = 12;

    let nextTop =
      placement.startsWith('bottom')
        ? anchorRect.bottom + offset
        : anchorRect.top - panelRect.height - offset;
    let nextLeft =
      placement.endsWith('end')
        ? anchorRect.right - panelRect.width
        : anchorRect.left;

    nextTop = Math.min(
      Math.max(gutter, nextTop),
      Math.max(gutter, window.innerHeight - panelRect.height - gutter)
    );
    nextLeft = Math.min(
      Math.max(gutter, nextLeft),
      Math.max(gutter, window.innerWidth - panelRect.width - gutter)
    );

    top = nextTop;
    left = nextLeft;
  }

  $effect(() => {
    if (!open || !anchor || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const rafId = requestAnimationFrame(() => {
      updatePosition();
    });

    const handleViewportChange = () => {
      updatePosition();
    };

    const handlePointerDown = (event: PointerEvent) => {
      const path = event.composedPath();
      if ((panel && path.includes(panel)) || (anchor && path.includes(anchor))) {
        return;
      }

      onClose?.();
    };

    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('scroll', handleViewportChange, true);
    document.addEventListener('pointerdown', handlePointerDown, true);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('scroll', handleViewportChange, true);
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  });
</script>

{#if open}
  <div
    bind:this={panel}
    class="tool-popover"
    role="presentation"
    style:top={`${top}px`}
    style:left={`${left}px`}
    style:width={width}
    style:z-index={zIndex}
  >
    {@render children?.()}
  </div>
{/if}

<style>
  .tool-popover {
    position: fixed;
    max-height: min(42rem, calc(100vh - 1.5rem));
    overflow: visible;
    pointer-events: auto;
  }

  @media (max-width: 47.99rem) {
    .tool-popover {
      width: min(100vw - 1rem, 28rem);
    }
  }
</style>
