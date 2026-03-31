<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import AppIcon from '@ui/components/icons/AppIcon.svelte';
  import {
    DEFAULT_WINDOW_SETTINGS,
    subscribeWindowSettings,
    type WindowButtonLayout,
    type WindowChromeStyle,
    type WindowFontPreset,
    type WindowSideResizeMode,
    type WindowSettings,
    type WindowSystemButtonPlacement,
    type WindowShiftDragAction,
    type WindowThemePreset
  } from './windowSettings';

  export type WindowState = 'normal' | 'maximized' | 'minimized' | 'rolled-up';
  type ResizeDirection = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw';
  type SnapTarget =
    | 'maximize'
    | 'left-half'
    | 'right-half'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
  type WindowFrame = { x: number; y: number; width: number; height: number };

  type Props = {
    title: string;
    state?: WindowState;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    locked?: boolean;
    chromeless?: boolean;
    buttonLayout?: WindowButtonLayout;
    systemButtonPlacement?: WindowSystemButtonPlacement;
    sideResizeMode?: WindowSideResizeMode;
    borderWidth?: number;
    borderRadius?: number;
    chromePadding?: number;
    chromeStyle?: WindowChromeStyle;
    alignment?: 'left' | 'center' | 'right';
    themePreset?: WindowThemePreset;
    fontPreset?: WindowFontPreset;
    snapRestoreOnRelease?: boolean;
    shiftDragAction?: WindowShiftDragAction;
    zIndex?: number;
    pinned?: boolean;
    dragSeed?: { pointerId: number; clientX: number; clientY: number } | null;
    onClose?: () => void;
    onPinToggle?: () => void;
    onConsumeDragSeed?: () => void;
    onStateChange?: (state: WindowState) => void;
    children?: Snippet;
  };

  let {
    title,
    state: windowState = $bindable<WindowState>('normal'),
    x = $bindable(100),
    y = $bindable(100),
    width = $bindable(600),
    height = $bindable(400),
    locked = false,
    chromeless = false,
    buttonLayout,
    systemButtonPlacement,
    sideResizeMode,
    borderWidth,
    borderRadius,
    chromePadding,
    chromeStyle,
    alignment,
    themePreset,
    fontPreset,
    snapRestoreOnRelease,
    shiftDragAction,
    zIndex = 100,
    pinned = false,
    dragSeed = null,
    onClose,
    onPinToggle,
    onConsumeDragSeed,
    onStateChange,
    children
  }: Props = $props();

  const SNAP_TARGETS: Array<{ id: SnapTarget; preview: string }> = [
    { id: 'top-left', preview: 'tl' },
    { id: 'maximize', preview: 'full' },
    { id: 'top-right', preview: 'tr' },
    { id: 'left-half', preview: 'left' },
    { id: 'right-half', preview: 'right' },
    { id: 'bottom-left', preview: 'bl' },
    { id: 'bottom-right', preview: 'br' }
  ];
  const LEADING_SYSTEM_LAYOUTS = new Set<WindowButtonLayout>(['mac', 'ubuntu', 'xubuntu']);
  const RESIZE_DIRECTIONS: ResizeDirection[] = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'];
  const MIN_WINDOW_WIDTH = 360;
  const MIN_WINDOW_HEIGHT = 240;
  const CHROME_HEIGHT = 44;
  const TITLEBAR_DOUBLE_CLICK_TIMEOUT = 1400;

  let globalSettings = $state<WindowSettings>({ ...DEFAULT_WINDOW_SETTINGS });
  let isReady = $state(false);
  let isResizing = $state(false);
  let previewSnapTarget = $state<SnapTarget | null>(null);
  let appliedSnapTarget = $state<SnapTarget | null>(null);
  let restoreFrame = $state<WindowFrame | null>(null);
  let snapPickerNode = $state<HTMLDivElement | null>(null);
  let pointerX = $state(0);
  let pointerY = $state(0);
  let activeDragSeedKey = '';
  let resizeStartX = 0;
  let resizeStartY = 0;
  let resizeStartLeft = 0;
  let resizeStartTop = 0;
  let resizeStartWidth = 0;
  let resizeStartHeight = 0;
  let resizeDirection: ResizeDirection = 'se';
  let dragRestoreTarget: SnapTarget | null = null;
  let dragRestoredFromSnap = false;
  let pendingRestoreOnDrag = false;
  let dragPointerRatio = 0.5;
  let dragPointerYOffset = 18;
  let shiftActionApplied = false;
  let titleBarDoubleClickMode = $state<'fit-content' | 'maximize' | null>(null);
  let titleBarDoubleClickTimer = 0;
  let windowContentNode = $state<HTMLDivElement | null>(null);
  let windowToolsWidth = $state(0);
  let systemControlsWidth = $state(0);

  onMount(() => {
    const frame = requestAnimationFrame(() => {
      isReady = true;
    });
    const unsubscribe = subscribeWindowSettings((settings) => {
      globalSettings = { ...settings };
    });
    return () => {
      cancelAnimationFrame(frame);
      unsubscribe();
      endResize();
      if (titleBarDoubleClickTimer && typeof window !== 'undefined') {
        window.clearTimeout(titleBarDoubleClickTimer);
      }
    };
  });

  let activeLayout = $derived(buttonLayout ?? globalSettings.buttonLayout);
  let activeSystemButtonPlacement = $derived(
    systemButtonPlacement ?? globalSettings.systemButtonPlacement
  );
  let activeSideResizeMode = $derived(sideResizeMode ?? globalSettings.sideResizeMode);
  let activeBorder = $derived(borderWidth ?? globalSettings.borderWidth);
  let activeRadius = $derived(borderRadius ?? globalSettings.borderRadius);
  let activeChromePadding = $derived(chromePadding ?? globalSettings.chromePadding);
  let activeChromeStyle = $derived(chromeStyle ?? globalSettings.chromeStyle);
  let activeAlignment = $derived(alignment ?? globalSettings.alignment);
  let activeThemePreset = $derived(themePreset ?? globalSettings.themePreset);
  let activeFontPreset = $derived(fontPreset ?? globalSettings.fontPreset);
  let activeSnapRestore = $derived(
    snapRestoreOnRelease ?? globalSettings.snapRestoreOnRelease
  );
  let activeShiftAction = $derived(shiftDragAction ?? globalSettings.shiftDragAction);
  let displayAlignment = $derived(width < 560 ? 'left' : activeAlignment);
  let compactControls = $derived(width < 520);
  let titleGuardWidth = $derived(
    Math.max(windowToolsWidth, systemControlsWidth) + (compactControls ? 12 : 18)
  );

  function usesLeadingSystemOrder(layout: WindowButtonLayout): boolean {
    return LEADING_SYSTEM_LAYOUTS.has(layout);
  }

  function resolveCloseVariant(layout: WindowButtonLayout): string | undefined {
    switch (layout) {
      case 'mac':
      case 'ubuntu':
      case 'xubuntu':
      case 'windows-7':
        return 'rounded';
      default:
        return undefined;
    }
  }

  function resolveMinimizeVariant(
    layout: WindowButtonLayout,
    minimized = false
  ): string | undefined {
    if (minimized) {
      return layout === 'mac' || layout === 'ubuntu' || layout === 'xubuntu'
        ? undefined
        : 'stack';
    }

    switch (layout) {
      case 'mac':
      case 'ubuntu':
      case 'xubuntu':
        return undefined;
      default:
        return 'tray';
    }
  }

  function resolveMaximizeVariant(
    layout: WindowButtonLayout,
    maximized = false
  ): string | undefined {
    if (maximized) {
      return 'stack';
    }

    switch (layout) {
      case 'windows-10':
      case 'windows-11':
      case 'gnome':
        return 'expand';
      default:
        return undefined;
    }
  }

  let isDragging = $state(false);

  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;
  let snapPickerVisible = $derived(
    isDragging &&
      !chromeless &&
      !locked &&
      activeLayout !== 'mac' &&
      typeof window !== 'undefined' &&
      pointerY <= 84 &&
      Math.abs(pointerX - window.innerWidth / 2) <= 232
  );
  let previewSnapFrame = $derived(previewSnapTarget ? getSnapFrame(previewSnapTarget) : null);

  function setWindowState(nextState: WindowState) {
    if (windowState === nextState) return;
    windowState = nextState;
    onStateChange?.(windowState);
  }

  function snapshotCurrentFrame(): WindowFrame {
    return { x, y, width, height };
  }

  function clampWindowX(nextX: number, widthOverride = width) {
    if (typeof window === 'undefined') return Math.max(0, nextX);
    return Math.max(0, Math.min(window.innerWidth - widthOverride, nextX));
  }

  function clampWindowY(nextY: number, heightOverride = height) {
    if (typeof window === 'undefined') return Math.max(0, nextY);
    return Math.max(0, Math.min(window.innerHeight - Math.min(heightOverride, CHROME_HEIGHT), nextY));
  }

  function clampFrame(frame: WindowFrame): WindowFrame {
    const nextWidth = Math.max(MIN_WINDOW_WIDTH, Math.round(frame.width));
    const nextHeight = Math.max(MIN_WINDOW_HEIGHT, Math.round(frame.height));
    return {
      x: clampWindowX(Math.round(frame.x), nextWidth),
      y: clampWindowY(Math.round(frame.y), nextHeight),
      width: nextWidth,
      height: nextHeight
    };
  }

  function fallbackRestoreFrame(): WindowFrame {
    if (typeof window === 'undefined') return { x: 96, y: 72, width: 920, height: 640 };
    return clampFrame({
      x: Math.round(window.innerWidth * 0.14),
      y: Math.round(window.innerHeight * 0.1),
      width: Math.min(1120, Math.round(window.innerWidth * 0.72)),
      height: Math.min(820, Math.round(window.innerHeight * 0.76))
    });
  }

  function restoreToFrame(frame: WindowFrame) {
    const nextFrame = clampFrame(frame);
    x = nextFrame.x;
    y = nextFrame.y;
    width = nextFrame.width;
    height = nextFrame.height;
    appliedSnapTarget = null;
    setWindowState('normal');
  }

  function restoreFromStoredFrame() {
    restoreToFrame(restoreFrame ?? fallbackRestoreFrame());
  }

  function getSnapFrame(target: SnapTarget): WindowFrame | null {
    if (typeof window === 'undefined') return null;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const halfWidth = Math.round(viewportWidth / 2);
    const halfHeight = Math.round(viewportHeight / 2);
    switch (target) {
      case 'maximize':
        return { x: 0, y: 0, width: viewportWidth, height: viewportHeight };
      case 'left-half':
        return { x: 0, y: 0, width: halfWidth, height: viewportHeight };
      case 'right-half':
        return { x: viewportWidth - halfWidth, y: 0, width: halfWidth, height: viewportHeight };
      case 'top-left':
        return { x: 0, y: 0, width: halfWidth, height: halfHeight };
      case 'top-right':
        return { x: viewportWidth - halfWidth, y: 0, width: halfWidth, height: halfHeight };
      case 'bottom-left':
        return { x: 0, y: viewportHeight - halfHeight, width: halfWidth, height: halfHeight };
      case 'bottom-right':
        return {
          x: viewportWidth - halfWidth,
          y: viewportHeight - halfHeight,
          width: halfWidth,
          height: halfHeight
        };
    }
  }

  function applySnapTarget(target: SnapTarget, frameToStore: WindowFrame = snapshotCurrentFrame()) {
    restoreFrame = clampFrame(frameToStore);
    if (target === 'maximize') {
      if (typeof window !== 'undefined') {
        x = 0;
        y = 0;
        width = window.innerWidth;
        height = window.innerHeight;
      }
      appliedSnapTarget = 'maximize';
      setWindowState('maximized');
      return;
    }
    const nextFrame = getSnapFrame(target);
    if (!nextFrame) return;
    appliedSnapTarget = target;
    setWindowState('normal');
    x = nextFrame.x;
    y = nextFrame.y;
    width = nextFrame.width;
    height = nextFrame.height;
  }

  function centerWindow() {
    if (typeof window === 'undefined') return;
    if (windowState === 'maximized' || appliedSnapTarget) {
      restoreFromStoredFrame();
    }
    x = clampWindowX(Math.round((window.innerWidth - width) / 2), width);
    y = clampWindowY(Math.round((window.innerHeight - height) / 2), height);
  }

  function toggleMaximize() {
    if (windowState === 'maximized') {
      restoreFromStoredFrame();
      return;
    }
    applySnapTarget('maximize');
  }

  function toggleRollup() {
    setWindowState(windowState === 'rolled-up' ? 'normal' : 'rolled-up');
  }

  function minimize() {
    setWindowState('minimized');
  }

  function resetTitleBarDoubleClickCycle() {
    titleBarDoubleClickMode = null;
    if (titleBarDoubleClickTimer && typeof window !== 'undefined') {
      window.clearTimeout(titleBarDoubleClickTimer);
    }
    titleBarDoubleClickTimer = 0;
  }

  function primeTitleBarDoubleClickCycle(mode: 'fit-content' | 'maximize') {
    if (typeof window === 'undefined') {
      titleBarDoubleClickMode = mode;
      return;
    }

    resetTitleBarDoubleClickCycle();
    titleBarDoubleClickMode = mode;
    titleBarDoubleClickTimer = window.setTimeout(() => {
      titleBarDoubleClickMode = null;
      titleBarDoubleClickTimer = 0;
    }, TITLEBAR_DOUBLE_CLICK_TIMEOUT);
  }

  function fitWindowToContent() {
    if (typeof window === 'undefined' || !windowContentNode) {
      return false;
    }

    const viewportInset = 24;
    const contentWidth = Math.ceil(
      Math.max(windowContentNode.scrollWidth, windowContentNode.firstElementChild?.scrollWidth ?? 0)
    );
    const contentHeight = Math.ceil(
      Math.max(windowContentNode.scrollHeight, windowContentNode.firstElementChild?.scrollHeight ?? 0)
    );
    const nextFrame = clampFrame({
      x: Math.round((window.innerWidth - contentWidth) / 2),
      y: Math.round((window.innerHeight - contentHeight - CHROME_HEIGHT) / 2),
      width: Math.min(
        window.innerWidth - viewportInset * 2,
        Math.max(MIN_WINDOW_WIDTH, contentWidth + activeBorder * 2)
      ),
      height: Math.min(
        window.innerHeight - viewportInset * 2,
        Math.max(MIN_WINDOW_HEIGHT, contentHeight + CHROME_HEIGHT + activeBorder * 2)
      )
    });

    restoreFrame = snapshotCurrentFrame();
    restoreToFrame(nextFrame);
    return true;
  }

  function handleTitleBarDoubleClick(event: MouseEvent) {
    if (locked || chromeless || isInteractiveTarget(event.target)) {
      return;
    }

    if (titleBarDoubleClickMode === 'fit-content') {
      primeTitleBarDoubleClickCycle('maximize');
      toggleMaximize();
      return;
    }

    const fitted = fitWindowToContent();
    primeTitleBarDoubleClickCycle(fitted ? 'fit-content' : 'maximize');

    if (!fitted) {
      toggleMaximize();
    }
  }

  function isInteractiveTarget(target: EventTarget | null): boolean {
    return Boolean(
      (target as HTMLElement | null)?.closest(
        'button, a, input, select, textarea, [role="button"]'
      )
    );
  }

  function getPickerTargetAtPoint(clientX: number, clientY: number): SnapTarget | null {
    if (!snapPickerNode) return null;
    for (const node of snapPickerNode.querySelectorAll<HTMLElement>('[data-snap-target]')) {
      const rect = node.getBoundingClientRect();
      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        return node.dataset.snapTarget as SnapTarget;
      }
    }
    return null;
  }

  function detectEdgeSnapTarget(clientX: number, clientY: number): SnapTarget | null {
    if (typeof window === 'undefined') return null;
    const edge = 18;
    const cornerBand = Math.max(72, Math.round(window.innerHeight * 0.14));
    if (clientY <= edge) {
      if (clientX <= window.innerWidth * 0.33) return 'top-left';
      if (clientX >= window.innerWidth * 0.67) return 'top-right';
      return 'maximize';
    }
    if (clientX <= edge) {
      if (clientY <= cornerBand) return 'top-left';
      if (clientY >= window.innerHeight - cornerBand) return 'bottom-left';
      return 'left-half';
    }
    if (clientX >= window.innerWidth - edge) {
      if (clientY <= cornerBand) return 'top-right';
      if (clientY >= window.innerHeight - cornerBand) return 'bottom-right';
      return 'right-half';
    }
    return null;
  }

  function updateSnapPreview(clientX: number, clientY: number) {
    pointerX = clientX;
    pointerY = clientY;
    if (!isDragging || locked || chromeless || activeLayout === 'mac') {
      previewSnapTarget = null;
      return;
    }
    previewSnapTarget =
      getPickerTargetAtPoint(clientX, clientY) ?? detectEdgeSnapTarget(clientX, clientY);
  }

  function prepareRestoreForDrag(clientX: number, clientY: number) {
    if (!pendingRestoreOnDrag) return;
    const restoreTarget = restoreFrame ?? fallbackRestoreFrame();
    const nextFrame = clampFrame({
      ...restoreTarget,
      x: clientX - restoreTarget.width * dragPointerRatio,
      y: clientY - dragPointerYOffset
    });
    x = nextFrame.x;
    y = nextFrame.y;
    width = nextFrame.width;
    height = nextFrame.height;
    setWindowState('normal');
    appliedSnapTarget = null;
    pendingRestoreOnDrag = false;
    dragRestoredFromSnap = true;
    startX = clientX;
    startY = clientY;
    initialX = x;
    initialY = y;
  }

  function maybeApplyShiftDragAction(event: PointerEvent) {
    if (
      !event.shiftKey ||
      shiftActionApplied ||
      activeShiftAction !== 'pin' ||
      !onPinToggle ||
      pinned
    ) {
      return;
    }
    onPinToggle();
    shiftActionApplied = true;
  }

  function onPointerDown(e: PointerEvent) {
    if (locked || chromeless || windowState === 'minimized' || isInteractiveTarget(e.target)) return;
    isDragging = true;
    shiftActionApplied = false;
    previewSnapTarget = null;
    pointerX = e.clientX;
    pointerY = e.clientY;
    startX = e.clientX;
    startY = e.clientY;
    initialX = x;
    initialY = y;
    dragRestoredFromSnap = false;
    pendingRestoreOnDrag = false;
    const activeFrame = snapshotCurrentFrame();
    dragPointerRatio =
      activeFrame.width <= 0
        ? 0.5
        : Math.max(0.1, Math.min(0.9, (e.clientX - activeFrame.x) / activeFrame.width));
    dragPointerYOffset = Math.max(12, Math.min(28, Math.round(e.clientY - activeFrame.y || 18)));
    if (windowState === 'maximized' || appliedSnapTarget) {
      dragRestoreTarget = windowState === 'maximized' ? 'maximize' : appliedSnapTarget;
      restoreFrame = restoreFrame ?? fallbackRestoreFrame();
      pendingRestoreOnDrag = true;
    } else {
      dragRestoreTarget = null;
    }
    maybeApplyShiftDragAction(e);
    const target = e.currentTarget as HTMLElement;
    target.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: PointerEvent) {
    if (!isDragging) return;
    maybeApplyShiftDragAction(e);
    if (
      pendingRestoreOnDrag &&
      (Math.abs(e.clientX - startX) > 2 || Math.abs(e.clientY - startY) > 2)
    ) {
      prepareRestoreForDrag(e.clientX, e.clientY);
    }
    x = clampWindowX(initialX + (e.clientX - startX), width);
    y = clampWindowY(initialY + (e.clientY - startY), height);
    updateSnapPreview(e.clientX, e.clientY);
  }

  function onPointerUp(e: PointerEvent) {
    if (!isDragging) return;
    const target = previewSnapTarget;
    previewSnapTarget = null;
    isDragging = false;
    pendingRestoreOnDrag = false;
    if (target) {
      applySnapTarget(target, snapshotCurrentFrame());
    } else if (
      dragRestoredFromSnap &&
      dragRestoreTarget &&
      activeSnapRestore &&
      !e.shiftKey &&
      !shiftActionApplied
    ) {
      applySnapTarget(dragRestoreTarget, snapshotCurrentFrame());
    } else {
      appliedSnapTarget = null;
    }
    dragRestoreTarget = null;
    dragRestoredFromSnap = false;
    shiftActionApplied = false;
    const node = e.currentTarget as HTMLElement | Window;
    if ('hasPointerCapture' in node && node.hasPointerCapture(e.pointerId)) {
      node.releasePointerCapture(e.pointerId);
    }
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
  }

  function startResize(direction: ResizeDirection, event: PointerEvent) {
    if (locked || chromeless || windowState === 'maximized' || windowState === 'minimized') return;
    if (appliedSnapTarget) {
      appliedSnapTarget = null;
    }
    event.stopPropagation();
    event.preventDefault();
    isResizing = true;
    resizeDirection = direction;
    resizeStartX = event.clientX;
    resizeStartY = event.clientY;
    resizeStartLeft = x;
    resizeStartTop = y;
    resizeStartWidth = width;
    resizeStartHeight = height;
    previewSnapTarget = null;
    window.addEventListener('pointermove', onResizeMove);
    window.addEventListener('pointerup', endResize);
    window.addEventListener('pointercancel', endResize);
  }

  function onResizeMove(event: PointerEvent) {
    if (!isResizing) return;
    const dx = event.clientX - resizeStartX;
    const dy = event.clientY - resizeStartY;
    let nextX = resizeStartLeft;
    let nextY = resizeStartTop;
    let nextWidth = resizeStartWidth;
    let nextHeight = resizeStartHeight;

    if (activeSideResizeMode === 'mirrored' && (resizeDirection === 'e' || resizeDirection === 'w')) {
      const delta = resizeDirection === 'e' ? dx : -dx;
      nextWidth = Math.max(MIN_WINDOW_WIDTH, resizeStartWidth + delta * 2);
      nextX = resizeStartLeft - (nextWidth - resizeStartWidth) / 2;
    } else if (resizeDirection.includes('e')) {
      nextWidth = Math.max(MIN_WINDOW_WIDTH, resizeStartWidth + dx);
    }
    if (resizeDirection.includes('s')) nextHeight = Math.max(MIN_WINDOW_HEIGHT, resizeStartHeight + dy);
    if (activeSideResizeMode !== 'mirrored' && resizeDirection.includes('w')) {
      nextWidth = Math.max(MIN_WINDOW_WIDTH, resizeStartWidth - dx);
      nextX = resizeStartLeft + (resizeStartWidth - nextWidth);
    }
    if (resizeDirection.includes('n')) {
      nextHeight = Math.max(MIN_WINDOW_HEIGHT, resizeStartHeight - dy);
      nextY = resizeStartTop + (resizeStartHeight - nextHeight);
    }

    const frame = clampFrame({ x: nextX, y: nextY, width: nextWidth, height: nextHeight });
    x = frame.x;
    y = frame.y;
    width = frame.width;
    height = frame.height;
  }

  function endResize() {
    if (!isResizing) return;
    isResizing = false;
    window.removeEventListener('pointermove', onResizeMove);
    window.removeEventListener('pointerup', endResize);
    window.removeEventListener('pointercancel', endResize);
  }

  function consumeDragSeed(seed: { pointerId: number; clientX: number; clientY: number }) {
    if (typeof window === 'undefined') return;
    const frame = clampFrame({
      x: seed.clientX - Math.round(width * 0.38),
      y: seed.clientY - 18,
      width,
      height
    });
    x = frame.x;
    y = frame.y;
    initialX = x;
    initialY = y;
    startX = seed.clientX;
    startY = seed.clientY;
    pointerX = seed.clientX;
    pointerY = seed.clientY;
    previewSnapTarget = null;
    dragRestoreTarget = null;
    dragRestoredFromSnap = false;
    pendingRestoreOnDrag = false;
    shiftActionApplied = true;
    isDragging = true;
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    onConsumeDragSeed?.();
  }

  $effect(() => {
    const nextKey = dragSeed ? `${dragSeed.pointerId}:${dragSeed.clientX}:${dragSeed.clientY}` : '';
    if (!dragSeed || nextKey === activeDragSeedKey) return;
    activeDragSeedKey = nextKey;
    consumeDragSeed(dragSeed);
  });
</script>

{#if previewSnapFrame && !chromeless}
  <div
    class="snap-preview"
    style:left={`${previewSnapFrame.x}px`}
    style:top={`${previewSnapFrame.y}px`}
    style:width={`${previewSnapFrame.width}px`}
    style:height={`${previewSnapFrame.height}px`}
    style:z-index={zIndex + 2}
    aria-hidden="true"
  ></div>
{/if}

{#if snapPickerVisible && !chromeless}
  <div bind:this={snapPickerNode} class="snap-picker" style:z-index={zIndex + 3} aria-hidden="true">
    {#each SNAP_TARGETS as target (target.id)}
      <div class="snap-cell" class:is-active={previewSnapTarget === target.id} data-snap-target={target.id}>
        <span class={`snap-shape shape-${target.preview}`}></span>
      </div>
    {/each}
  </div>
{/if}

<div
  class="window-shell"
  class:is-ready={isReady}
  class:is-dragging={isDragging}
  class:is-resizing={isResizing}
  class:compact-controls={compactControls}
  class:maximized={windowState === 'maximized'}
  class:minimized={windowState === 'minimized'}
  class:rolled-up={windowState === 'rolled-up'}
  class:chromeless={chromeless}
  style:--window-border-width={`${activeBorder}px`}
  style:--window-radius={`${activeRadius}px`}
  style:--window-chrome-padding={`${activeChromePadding}px`}
  style:--window-title-guard={`${titleGuardWidth}px`}
  style:transform={windowState === 'normal' || windowState === 'rolled-up' ? `translate(${x}px, ${y}px)` : undefined}
  style:width={windowState === 'normal' || windowState === 'rolled-up' ? `${width}px` : undefined}
  style:height={windowState === 'normal' ? `${height}px` : undefined}
  style:z-index={zIndex}
  data-layout={activeLayout}
  data-system-placement={activeSystemButtonPlacement}
  data-style={activeChromeStyle}
  data-theme={activeThemePreset}
  data-font={activeFontPreset}
>
  {#if !chromeless}
    <div
      class="window-chrome chrome-{activeChromeStyle}"
      class:layout-mac={usesLeadingSystemOrder(activeLayout)}
      class:layout-windows={!usesLeadingSystemOrder(activeLayout)}
      role="group"
      aria-label={`${title} window controls`}
      onpointerdown={onPointerDown}
      onpointermove={onPointerMove}
      onpointerup={onPointerUp}
      onpointercancel={onPointerUp}
      ondblclick={handleTitleBarDoubleClick}
    >
      <div bind:clientWidth={windowToolsWidth} class="window-controls window-tools">
        {#if onPinToggle}
          <button
            type="button"
            class="window-button"
            class:is-active={pinned}
            onclick={onPinToggle}
            aria-label={pinned ? 'Unpin window' : 'Pin window'}
            aria-pressed={pinned}
          >
            <AppIcon name="pin" />
          </button>
        {/if}
        <button type="button" class="window-button" onclick={centerWindow} aria-label="Center window">
          <AppIcon name="center" />
        </button>
        <button
          type="button"
          class="window-button"
          class:is-active={windowState === 'rolled-up'}
          onclick={toggleRollup}
          aria-label={windowState === 'rolled-up' ? 'Restore height' : 'Roll up'}
        >
          <AppIcon name={windowState === 'rolled-up' ? 'roll-up' : 'roll-down'} />
        </button>
      </div>

      <div class="window-title align-{displayAlignment}" title={title}>{title}</div>

      <div bind:clientWidth={systemControlsWidth} class="window-controls system-controls">
        {#if usesLeadingSystemOrder(activeLayout)}
          {#if onClose}
            <button
              type="button"
              class="window-button system close close-button"
              onclick={onClose}
              aria-label="Close window"
            >
              <AppIcon name="close" variant={resolveCloseVariant(activeLayout)} />
            </button>
          {/if}
          <button
            type="button"
            class="window-button system minimize-button"
            onclick={() => (windowState === 'minimized' ? setWindowState('normal') : minimize())}
            aria-label={windowState === 'minimized' ? 'Restore window' : 'Minimize window'}
          >
            <AppIcon
              name={windowState === 'minimized' ? 'restore' : 'minimize'}
              variant={resolveMinimizeVariant(activeLayout, windowState === 'minimized')}
            />
          </button>
          <button
            type="button"
            class="window-button system maximize-button"
            onclick={toggleMaximize}
            aria-label={windowState === 'maximized' ? 'Restore window' : 'Maximize window'}
          >
            <AppIcon
              name={windowState === 'maximized' ? 'restore' : 'maximize'}
              variant={resolveMaximizeVariant(activeLayout, windowState === 'maximized')}
            />
          </button>
        {:else}
          <button
            type="button"
            class="window-button system minimize-button"
            onclick={() => (windowState === 'minimized' ? setWindowState('normal') : minimize())}
            aria-label={windowState === 'minimized' ? 'Restore window' : 'Minimize window'}
          >
            <AppIcon
              name={windowState === 'minimized' ? 'restore' : 'minimize'}
              variant={resolveMinimizeVariant(activeLayout, windowState === 'minimized')}
            />
          </button>
          <button
            type="button"
            class="window-button system maximize-button"
            onclick={toggleMaximize}
            aria-label={windowState === 'maximized' ? 'Restore window' : 'Maximize window'}
          >
            <AppIcon
              name={windowState === 'maximized' ? 'restore' : 'maximize'}
              variant={resolveMaximizeVariant(activeLayout, windowState === 'maximized')}
            />
          </button>
          {#if onClose}
            <button
              type="button"
              class="window-button system close close-button"
              onclick={onClose}
              aria-label="Close window"
            >
              <AppIcon name="close" variant={resolveCloseVariant(activeLayout)} />
            </button>
          {/if}
        {/if}
      </div>
    </div>
  {/if}

  {#if windowState !== 'rolled-up' && windowState !== 'minimized'}
    <div bind:this={windowContentNode} class="window-content">
      {@render children?.()}
    </div>
  {/if}

  {#if !chromeless && windowState !== 'maximized' && windowState !== 'minimized'}
    {#each RESIZE_DIRECTIONS as direction (direction)}
      <button class={`resize-handle dir-${direction}`} type="button" tabindex="-1" aria-hidden="true" onpointerdown={(event) => startResize(direction, event)}></button>
    {/each}
  {/if}
</div>

<style>
  .window-shell {
    --window-panel: var(--shell-panel, rgba(15, 23, 42, 0.94));
    --window-surface: var(--shell-surface, rgba(15, 23, 42, 0.98));
    --window-border: var(--shell-border, rgba(148, 163, 184, 0.24));
    --window-hover: var(--shell-row-hover, rgba(125, 211, 252, 0.12));
    --window-shadow: var(--efs-window-shell-shadow, var(--shell-card-shadow, 0 28px 68px rgba(0, 0, 0, 0.42)));
    --window-primary: var(--shell-primary, var(--efs-accent-500, #7dd3fc));
    --window-text: var(--shell-text, var(--efs-text-primary, #f8fafc));
    --window-muted: var(--shell-muted, color-mix(in srgb, var(--window-text), transparent 36%));
    --window-control-size: 2.15rem;
    --window-aux-width: 2.35rem;
    --window-system-width: 2.75rem;
    --window-system-height: var(--window-control-size);
    --window-control-gap: 0.14rem;
    --window-control-radius: 10px;
    --window-control-border-width: clamp(0px, calc(var(--window-border-width) * 0.9), 3px);
    --window-icon-size: 0.9rem;
    --window-system-icon-size: var(--window-icon-size);
    --window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.58 + 0.04rem));
    --window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.32));
    --window-title-guard: 0px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    min-width: min(100vw - 1rem, 18rem);
    min-height: 0;
    border: var(--window-border-width) solid color-mix(in srgb, var(--window-border), transparent 2%);
    border-radius: var(--window-radius);
    background: color-mix(in srgb, var(--window-surface), transparent 2%);
    box-shadow: var(--window-shadow), inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 28%);
    overflow: clip;
    color: var(--window-text);
    font-family: var(--efs-window-font-family, var(--efs-font-sans, sans-serif));
    opacity: 0;
    transform-origin: top center;
    transition: transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;
    will-change: transform, width, height;
    pointer-events: auto;
  }

  .window-shell[data-style='solid'] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 92%), transparent 28%),
      color-mix(in srgb, var(--window-surface), var(--window-panel) 18%);
  }

  .window-shell[data-style='glass'] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 38%),
      color-mix(in srgb, var(--window-surface), transparent 16%);
    backdrop-filter: blur(18px) saturate(1.08);
    -webkit-backdrop-filter: blur(18px) saturate(1.08);
  }

  .window-shell[data-style='mica'] {
    background:
      radial-gradient(circle at top center, rgba(255, 255, 255, 0.12), transparent 36%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-primary), transparent 90%), transparent 32%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 52%),
      color-mix(in srgb, var(--window-surface), transparent 10%);
    backdrop-filter: blur(22px) saturate(1.08);
    -webkit-backdrop-filter: blur(22px) saturate(1.08);
  }

  .window-shell[data-style='frost'] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04) 46%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 18%);
    backdrop-filter: blur(24px) saturate(1.14);
    -webkit-backdrop-filter: blur(24px) saturate(1.14);
  }

  .window-shell[data-style='pane'] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.02) 68%, transparent 100%),
      color-mix(in srgb, var(--window-surface), transparent 8%);
    backdrop-filter: blur(16px) saturate(1.04);
    -webkit-backdrop-filter: blur(16px) saturate(1.04);
  }

  .window-shell[data-style='transparent'] {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), transparent 36%),
      color-mix(in srgb, var(--window-surface), transparent 24%);
  }

  .window-shell.compact-controls {
    --window-control-size: 1.92rem;
    --window-aux-width: 2.05rem;
    --window-system-width: 2.28rem;
    --window-control-gap: 0.08rem;
    --window-control-radius: 8px;
  }

  .window-shell.is-ready { opacity: 1; }
  .window-shell.is-dragging,
  .window-shell.is-resizing { transition: none; }
  .window-shell.maximized { inset: 0 !important; width: 100vw !important; height: 100vh !important; transform: none !important; border-radius: 0; }
  .window-shell.minimized { opacity: 0; pointer-events: none; transform: translate(0, calc(100vh + 2rem)) scale(0.98) !important; }
  .window-shell.rolled-up { height: auto !important; min-height: 0; }
  .window-shell.chromeless { border: none; box-shadow: none; background: transparent; }

  .window-chrome {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 0.65rem;
    min-height: calc(
      var(--window-system-height) + var(--window-chrome-top-space) + var(--window-chrome-bottom-space)
    );
    padding-top: var(--window-chrome-top-space);
    padding-bottom: var(--window-chrome-bottom-space);
    padding-inline: max(0.35rem, var(--window-chrome-padding));
    border-bottom: 1px solid color-mix(in srgb, var(--window-border), transparent 18%);
    user-select: none;
    touch-action: none;
    cursor: grab;
    background: transparent;
  }

  .window-shell[data-style='transparent'] .window-chrome { border-bottom-color: transparent; }
  .window-shell[data-style='mica'] .window-chrome {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02) 74%),
      color-mix(in srgb, var(--window-panel), transparent 12%);
  }

  .window-shell[data-style='frost'] .window-chrome {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 18%);
  }

  .window-shell[data-style='pane'] .window-chrome {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.05) 68%),
      color-mix(in srgb, var(--window-panel), transparent 8%);
  }
  .window-tools,
  .system-controls {
    position: relative;
    z-index: 1;
    min-width: 0;
  }

  .window-tools {
    justify-self: start;
  }

  .system-controls {
    justify-self: end;
  }

  .window-shell[data-system-placement='left'] .window-tools {
    justify-self: end;
  }

  .window-shell[data-system-placement='left'] .system-controls {
    justify-self: start;
  }

  .window-title {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    min-width: 0;
    width: max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));
    max-width: max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font: var(--efs-font-title-sm);
    color: var(--window-text);
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
  .window-title.align-left { text-align: left; }
  .window-title.align-center { text-align: center; }
  .window-title.align-right { text-align: right; }
  .window-controls {
    display: inline-flex;
    align-items: center;
    gap: var(--window-control-gap);
    min-width: 0;
    white-space: nowrap;
  }
  .window-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--window-aux-width);
    height: var(--window-control-size);
    min-width: 0;
    border: var(--window-control-border-width) solid
      color-mix(in srgb, var(--window-border), transparent 44%);
    border-radius: var(--window-control-radius);
    background: color-mix(in srgb, var(--window-panel), transparent 8%);
    color: var(--window-muted);
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
    transition:
      background-color 140ms ease,
      border-color 140ms ease,
      color 140ms ease,
      box-shadow 140ms ease,
      transform 140ms ease;
  }

  .window-button :global(.app-icon) {
    width: var(--window-icon-size);
    height: var(--window-icon-size);
  }
  .window-button:hover {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--window-primary), transparent 68%);
    background: color-mix(in srgb, var(--window-hover), transparent 12%);
    color: var(--window-text);
  }
  .window-button.is-active {
    border-color: color-mix(in srgb, var(--window-primary), transparent 56%);
    background: color-mix(in srgb, var(--window-primary), transparent 82%);
    color: var(--window-text);
  }
  .window-button.close:hover {
    border-color: rgba(255, 255, 255, 0.12);
    background: rgba(239, 68, 68, 0.9);
    color: white;
  }
  .system-controls .window-button.system {
    width: var(--window-system-width);
    height: var(--window-system-height);
  }

  .system-controls .window-button.system :global(.app-icon) {
    width: var(--window-system-icon-size);
    height: var(--window-system-icon-size);
  }

  .window-shell[data-layout='windows-7'] {
    --window-system-width: 3rem;
    --window-system-height: 1.95rem;
    --window-system-icon-size: 0.8rem;
  }

  .window-shell[data-layout='windows-7'] .system-controls .window-button.system {
    border-radius: 0 0 11px 11px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), transparent 88%);
  }

  .window-shell[data-layout='windows-8'],
  .window-shell[data-layout='windows-10'] {
    --window-system-width: 3rem;
    --window-system-height: 1.95rem;
    --window-system-icon-size: 0.82rem;
  }

  .window-shell[data-layout='windows-8'] .window-chrome,
  .window-shell[data-layout='windows-10'] .window-chrome {
    padding-right: 0;
  }

  .window-shell[data-layout='windows-8'] .system-controls .window-button.system,
  .window-shell[data-layout='windows-10'] .system-controls .window-button.system {
    border-radius: 0;
    border-color: transparent;
    background: transparent;
    box-shadow: none;
  }

  .window-shell[data-layout='windows-11'] .system-controls .window-button.system {
    border-radius: 10px;
  }

  .window-shell[data-layout='windows-11'] {
    --window-system-height: 2rem;
    --window-system-icon-size: 0.88rem;
  }

  .window-shell[data-layout='ubuntu'],
  .window-shell[data-layout='xubuntu'] {
    --window-system-width: 1rem;
    --window-system-height: 1rem;
    --window-system-icon-size: 0.5rem;
    --window-control-radius: 999px;
    --window-control-gap: 0.24rem;
  }

  .window-shell[data-layout='ubuntu'] .system-controls,
  .window-shell[data-layout='xubuntu'] .system-controls {
    gap: 0.32rem;
  }

  .window-shell[data-layout='ubuntu'] .system-controls .window-button.system,
  .window-shell[data-layout='xubuntu'] .system-controls .window-button.system {
    border-radius: 999px;
    border-color: color-mix(in srgb, var(--window-border), transparent 18%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }

  .window-shell[data-layout='gnome'] {
    --window-system-width: 2.6rem;
    --window-system-height: 1.82rem;
    --window-system-icon-size: 0.82rem;
    --window-control-radius: 999px;
  }

  .window-shell[data-layout='gnome'] .system-controls .window-button.system {
    border-radius: 999px;
  }

  .window-shell[data-theme='aero'] {
    --window-control-radius: 8px;
    --window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.6));
    --window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));
  }

  .window-shell[data-theme='aero'] .window-chrome {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 70%),
      transparent;
  }

  .window-shell[data-theme='windows-vista'] {
    --window-control-radius: 8px;
    --window-chrome-top-space: max(0.22rem, calc(var(--window-chrome-padding) * 0.62));
    --window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));
  }

  .window-shell[data-theme='windows-vista'] .window-chrome {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 10%);
  }

  .window-shell[data-theme='windows-11-mica'] {
    --window-control-radius: 11px;
    --window-system-icon-size: 0.88rem;
  }

  .window-shell[data-theme='windows-10-flat'] {
    --window-control-radius: 0;
    --window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.42));
    --window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.1));
  }

  .window-shell[data-theme='windows-10-flat'] .window-chrome {
    border-bottom-color: color-mix(in srgb, var(--window-border), transparent 10%);
  }

  .window-shell[data-theme='windows-10-flat'] .system-controls .window-button.system {
    border-radius: 0;
  }

  .window-shell[data-theme='windows-9x'] {
    --window-control-size: 1.88rem;
    --window-aux-width: 2rem;
    --window-system-width: 2rem;
    --window-system-height: 1.75rem;
    --window-system-icon-size: 0.76rem;
    --window-control-radius: 0;
    --window-chrome-top-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.34));
    --window-chrome-bottom-space: max(0.08rem, calc(var(--window-chrome-padding) * 0.16));
    box-shadow:
      var(--window-shadow),
      inset 1px 1px 0 rgba(255, 255, 255, 0.24),
      inset -1px -1px 0 rgba(0, 0, 0, 0.28);
  }

  .window-shell[data-theme='windows-9x'] .window-chrome {
    gap: 0.45rem;
  }

  .window-shell[data-theme='windows-9x'] .window-button {
    border-color: color-mix(in srgb, var(--window-border), transparent 12%);
    border-radius: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03));
    box-shadow:
      inset 1px 1px 0 rgba(255, 255, 255, 0.32),
      inset -1px -1px 0 rgba(0, 0, 0, 0.22);
  }

  .window-shell[data-theme='mac-os-x'] .system-controls {
    gap: 0.4rem;
  }

  .window-shell[data-theme='mac-os-x'] {
    --window-control-size: 1.9rem;
    --window-aux-width: 2rem;
    --window-system-width: 0.96rem;
    --window-system-height: 0.96rem;
    --window-system-icon-size: 0.48rem;
    --window-control-radius: 999px;
    --window-chrome-top-space: max(0.18rem, calc(var(--window-chrome-padding) * 0.38));
    --window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));
  }

  .window-shell[data-theme='mac-os-x'] .window-chrome {
    gap: 0.55rem;
  }

  .window-shell[data-theme='mac-os-x'] .window-tools {
    gap: 0.2rem;
  }

  .window-shell[data-theme='mac-os-x'] .window-tools .window-button {
    width: 1.85rem;
    height: 1.85rem;
    border-radius: 999px;
    border-color: color-mix(in srgb, var(--window-border), transparent 38%);
    background: color-mix(in srgb, var(--window-panel), transparent 18%);
    box-shadow: none;
  }

  .window-shell[data-theme='mac-os-x'] .system-controls .window-button.system {
    width: 0.92rem;
    height: 0.92rem;
    border-radius: 999px;
    border-color: rgba(0, 0, 0, 0.14);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.26);
    color: rgba(0, 0, 0, 0.54);
  }

  .window-shell[data-theme='mac-os-x'] .system-controls .window-button.system :global(.app-icon) {
    width: 0.5rem;
    height: 0.5rem;
    opacity: 0;
  }

  .window-shell[data-theme='mac-os-x'] .system-controls:hover .window-button.system :global(.app-icon),
  .window-shell[data-theme='mac-os-x'] .system-controls .window-button.system:focus-visible :global(.app-icon) {
    opacity: 0.72;
  }

  .window-shell[data-theme='mac-os-x'] .system-controls .close-button {
    background: #ff5f57;
  }

  .window-shell[data-theme='mac-os-x'] .system-controls .minimize-button {
    background: #febc2e;
  }

  .window-shell[data-theme='mac-os-x'] .system-controls .maximize-button {
    background: #28c840;
  }

  .window-shell[data-theme='ios'] {
    box-shadow: var(--window-shadow), inset 0 0 0 1px rgba(255, 255, 255, 0.12);
  }

  .window-shell[data-theme='ios'] {
    --window-control-radius: 999px;
    --window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.52));
    --window-chrome-bottom-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.22));
  }

  .window-shell[data-theme='android'] {
    --window-control-radius: 8px;
    --window-chrome-top-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.38));
    --window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.12));
  }

  .window-shell[data-theme='ubuntu-yaru'] {
    --window-aux-width: 2.05rem;
    --window-control-size: 2rem;
    --window-chrome-top-space: max(0.14rem, calc(var(--window-chrome-padding) * 0.46));
    --window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));
  }

  .window-shell[data-theme='ubuntu-yaru'] .system-controls .window-button.system {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04));
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.18),
      0 0 0 1px color-mix(in srgb, var(--window-border), transparent 68%);
  }

  .window-shell[data-theme='xubuntu'] {
    --window-chrome-top-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.42));
    --window-chrome-bottom-space: max(0.1rem, calc(var(--window-chrome-padding) * 0.18));
  }

  .window-shell[data-theme='xubuntu'] .window-chrome {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.03) 70%),
      color-mix(in srgb, var(--window-panel), transparent 14%);
  }

  .window-shell[data-theme='xubuntu'] .system-controls .window-button.system {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .window-shell[data-theme='gnome'] {
    --window-control-radius: 12px;
    --window-chrome-top-space: max(0.16rem, calc(var(--window-chrome-padding) * 0.46));
    --window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.18));
  }

  .window-shell[data-theme='gnome'] .system-controls .window-button.system {
    background: color-mix(in srgb, var(--window-panel), transparent 2%);
    box-shadow: none;
  }

  .window-content {
    flex: 1;
    min-height: 0;
    overflow: auto;
    background: transparent;
    scrollbar-width: thin;
    scrollbar-color: color-mix(in srgb, var(--window-primary), transparent 44%) transparent;
  }

  .window-content::-webkit-scrollbar { width: 0.82rem; height: 0.82rem; }
  .window-content::-webkit-scrollbar-track { background: transparent; }
  .window-content::-webkit-scrollbar-thumb { border: 3px solid transparent; border-radius: 999px; background: color-mix(in srgb, var(--window-primary), transparent 46%); background-clip: padding-box; }

  .resize-handle { position: absolute; z-index: 4; border: 0; padding: 0; background: transparent; }
  .resize-handle.dir-n, .resize-handle.dir-s { left: 0.8rem; right: 0.8rem; height: 0.7rem; cursor: ns-resize; }
  .resize-handle.dir-n { top: -0.35rem; }
  .resize-handle.dir-s { bottom: -0.35rem; }
  .resize-handle.dir-e, .resize-handle.dir-w { top: 0.8rem; bottom: 0.8rem; width: 0.7rem; cursor: ew-resize; }
  .resize-handle.dir-e { right: -0.35rem; }
  .resize-handle.dir-w { left: -0.35rem; }
  .resize-handle.dir-ne, .resize-handle.dir-nw, .resize-handle.dir-se, .resize-handle.dir-sw { width: 1rem; height: 1rem; }
  .resize-handle.dir-ne { top: -0.35rem; right: -0.35rem; cursor: nesw-resize; }
  .resize-handle.dir-nw { top: -0.35rem; left: -0.35rem; cursor: nwse-resize; }
  .resize-handle.dir-se { right: -0.35rem; bottom: -0.35rem; cursor: nwse-resize; }
  .resize-handle.dir-sw { left: -0.35rem; bottom: -0.35rem; cursor: nesw-resize; }

  .snap-preview {
    position: fixed;
    pointer-events: none;
    border: 1px solid color-mix(in srgb, var(--window-primary), transparent 22%);
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 88%), color-mix(in srgb, var(--window-primary), transparent 90%);
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--window-primary), transparent 62%);
  }

  .snap-picker {
    position: fixed;
    top: 0.85rem;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 0.45rem;
    padding: 0.55rem;
    border: 1px solid color-mix(in srgb, var(--window-border), transparent 12%);
    border-radius: 18px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 86%), color-mix(in srgb, var(--window-panel), transparent 2%);
    box-shadow: var(--window-shadow);
    pointer-events: none;
  }

  .snap-cell {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.7rem;
    height: 2.45rem;
    border: 1px solid color-mix(in srgb, var(--window-border), transparent 12%);
    border-radius: 12px;
    background: color-mix(in srgb, var(--window-surface), transparent 6%);
  }

  .snap-cell.is-active { border-color: color-mix(in srgb, var(--window-primary), transparent 40%); background: color-mix(in srgb, var(--window-primary), transparent 84%); }
  .snap-shape { display: inline-flex; width: 1.25rem; height: 1rem; border: 1px solid color-mix(in srgb, var(--window-primary), transparent 28%); border-radius: 0.28rem; background: color-mix(in srgb, var(--window-primary), transparent 72%); }
  .shape-left { width: 1.05rem; margin-right: 0.2rem; }
  .shape-right { width: 1.05rem; margin-left: 0.2rem; }
  .shape-tl { clip-path: inset(0 45% 45% 0 round 0.28rem); }
  .shape-tr { clip-path: inset(0 0 45% 45% round 0.28rem); }
  .shape-bl { clip-path: inset(45% 45% 0 0 round 0.28rem); }
  .shape-br { clip-path: inset(45% 0 0 45% round 0.28rem); }

  @media (max-width: 47.99rem) {
    .window-shell {
      --window-control-size: 1.86rem;
      --window-aux-width: 1.96rem;
      --window-system-width: 2.16rem;
      --window-control-gap: 0.06rem;
    }

    .window-chrome {
      gap: 0.3rem;
      padding-inline: max(0.3rem, calc(var(--window-chrome-padding) * 0.72));
      min-height: calc(
        var(--window-system-height) +
          max(0.3rem, calc(var(--window-chrome-top-space) * 0.92)) +
          max(0.12rem, calc(var(--window-chrome-bottom-space) * 0.9))
      );
    }

    .window-title {
      font-size: 0.82rem;
    }

    .window-button :global(.app-icon) {
      width: 0.8rem;
      height: 0.8rem;
    }

    .system-controls .window-button.system :global(.app-icon) {
      width: min(0.72rem, var(--window-system-icon-size));
      height: min(0.72rem, var(--window-system-icon-size));
    }

    .snap-picker { grid-template-columns: repeat(4, minmax(0, 1fr)); width: min(calc(100vw - 1rem), 17rem); }
    .snap-cell { width: auto; }
  }
</style>
