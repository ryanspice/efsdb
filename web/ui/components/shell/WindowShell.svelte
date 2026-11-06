<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';
  import AppIcon from '@ui/components/icons/AppIcon.svelte';
  import {
    DEFAULT_WINDOW_SETTINGS,
    resolveWindowTitleEffect,
    resolveWindowTitleTone,
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
  export type WindowSnapTarget =
    | 'maximize'
    | 'left-half'
    | 'right-half'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
  export type WindowFrame = { x: number; y: number; width: number; height: number };

  type Props = {
    title: string;
    helpText?: string;
    helpPlacement?: 'auto' | 'before' | 'after';
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
    restoreFrame?: WindowFrame | null;
    snapTarget?: WindowSnapTarget | null;
    onClose?: () => void;
    onPinToggle?: () => void;
    onConsumeDragSeed?: () => void;
    onStateChange?: (state: WindowState) => void;
    children?: Snippet;
  };

  let {
    title,
    helpText = '',
    helpPlacement = 'auto',
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
    restoreFrame = $bindable<WindowFrame | null>(null),
    snapTarget = $bindable<WindowSnapTarget | null>(null),
    onClose,
    onPinToggle,
    onConsumeDragSeed,
    onStateChange,
    children
  }: Props = $props();

  const SNAP_TARGETS: Array<{ id: WindowSnapTarget; preview: string }> = [
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
  const TITLEBAR_DOUBLE_CLICK_TIMEOUT = 1400;

  let globalSettings = $state<WindowSettings>({ ...DEFAULT_WINDOW_SETTINGS });
  let isReady = $state(false);
  let isResizing = $state(false);
  let previewSnapTarget = $state<WindowSnapTarget | null>(null);
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
  let dragRestoreTarget: WindowSnapTarget | null = null;
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
  let activeTitleBarHeight = $derived(
    Math.max(28, globalSettings.titleBarHeight ?? DEFAULT_WINDOW_SETTINGS.titleBarHeight)
  );
  let activeWindowScale = $derived(
    Math.max(0.75, (globalSettings.windowScale ?? DEFAULT_WINDOW_SETTINGS.windowScale) / 100)
  );
  let activeChromeStyle = $derived(chromeStyle ?? globalSettings.chromeStyle);
  let activeChromeBeamStyle = $derived(
    globalSettings.chromeTexture ? globalSettings.chromeBeamStyle : 'none'
  );
  let activeChromeGlossStyle = $derived(globalSettings.chromeGlossStyle);
  let activeAlignment = $derived(alignment ?? globalSettings.alignment);
  let activeThemePreset = $derived(themePreset ?? globalSettings.themePreset);
  let activeFontPreset = $derived(fontPreset ?? globalSettings.fontPreset);
  let activeSnapRestore = $derived(
    snapRestoreOnRelease ?? globalSettings.snapRestoreOnRelease
  );
  let activeShiftAction = $derived(shiftDragAction ?? globalSettings.shiftDragAction);
  let displayAlignment = $derived(width < 560 ? 'left' : activeAlignment);
  let compactControls = $derived(width < 520);
  let activeTitleTone = $derived(
    resolveWindowTitleTone({
      themePreset: activeThemePreset,
      titleTone: globalSettings.titleTone
    })
  );
  let activeTitleEffect = $derived(
    resolveWindowTitleEffect({
      themePreset: activeThemePreset,
      titleEffect: globalSettings.titleEffect
    })
  );
  let showWindowHelp = $derived(helpText.trim().length > 0);
  let resolvedHelpPlacement = $derived(
    helpPlacement === 'auto'
      ? activeSystemButtonPlacement === 'left'
        ? 'after'
        : 'before'
      : helpPlacement
  );
  let isWindows7AeroTheme = $derived(activeThemePreset === 'aero');
  let isWindowsBasicTheme = $derived(activeThemePreset === 'windows-basic');
  let isWindows7Theme = $derived(isWindows7AeroTheme || isWindowsBasicTheme);
  let usesSevenCssChromeTheme = $derived(
    isWindows7Theme || activeThemePreset === 'windows-vista'
  );
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
    return Math.max(
      0,
      Math.min(window.innerHeight - Math.min(heightOverride, activeTitleBarHeight), nextY)
    );
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
    snapTarget = null;
    setWindowState('normal');
  }

  function restoreFromStoredFrame() {
    restoreToFrame(restoreFrame ?? fallbackRestoreFrame());
  }

  function getSnapFrame(target: WindowSnapTarget): WindowFrame | null {
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

  function applySnapTarget(
    target: WindowSnapTarget,
    frameToStore: WindowFrame = snapshotCurrentFrame()
  ) {
    restoreFrame = clampFrame(frameToStore);
    if (target === 'maximize') {
      if (typeof window !== 'undefined') {
        x = 0;
        y = 0;
        width = window.innerWidth;
        height = window.innerHeight;
      }
      snapTarget = 'maximize';
      setWindowState('maximized');
      return;
    }
    const nextFrame = getSnapFrame(target);
    if (!nextFrame) return;
    snapTarget = target;
    setWindowState('normal');
    x = nextFrame.x;
    y = nextFrame.y;
    width = nextFrame.width;
    height = nextFrame.height;
  }

  function centerWindow() {
    if (typeof window === 'undefined') return;
    if (windowState === 'maximized' || snapTarget) {
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
      y: Math.round((window.innerHeight - contentHeight - activeTitleBarHeight) / 2),
      width: Math.min(
        window.innerWidth - viewportInset * 2,
        Math.max(MIN_WINDOW_WIDTH, contentWidth + activeBorder * 2)
      ),
      height: Math.min(
        window.innerHeight - viewportInset * 2,
        Math.max(MIN_WINDOW_HEIGHT, contentHeight + activeTitleBarHeight + activeBorder * 2)
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

  function getPickerTargetAtPoint(clientX: number, clientY: number): WindowSnapTarget | null {
    if (!snapPickerNode) return null;
    for (const node of snapPickerNode.querySelectorAll<HTMLElement>('[data-snap-target]')) {
      const rect = node.getBoundingClientRect();
      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        return node.dataset.snapTarget as WindowSnapTarget;
      }
    }
    return null;
  }

  function detectEdgeSnapTarget(clientX: number, clientY: number): WindowSnapTarget | null {
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
    snapTarget = null;
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
    if (windowState === 'maximized' || snapTarget) {
      dragRestoreTarget = windowState === 'maximized' ? 'maximize' : snapTarget;
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
      snapTarget = null;
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
    if (snapTarget) {
      snapTarget = null;
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

  $effect(() => {
    if (windowState === 'maximized' && snapTarget !== 'maximize') {
      snapTarget = 'maximize';
    }

    if (windowState === 'normal' && snapTarget === 'maximize') {
      snapTarget = null;
    }
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
  class:win7={isWindows7Theme}
  class:win7-theme={isWindows7AeroTheme}
  class:basic7-theme={isWindowsBasicTheme}
  class:window={isWindows7Theme}
  class:active={isWindows7Theme}
  class:glass={isWindows7AeroTheme}
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
  style:--window-titlebar-height={`${activeTitleBarHeight}px`}
  style:--window-shell-scale={`${activeWindowScale}`}
  style:--window-title-guard={`${titleGuardWidth}px`}
  style:transform={windowState === 'normal' || windowState === 'rolled-up' ? `translate(${x}px, ${y}px)` : undefined}
  style:width={windowState === 'normal' || windowState === 'rolled-up' ? `${width}px` : undefined}
  style:height={windowState === 'normal' ? `${height}px` : undefined}
  style:z-index={zIndex}
  data-layout={isWindows7AeroTheme ? undefined : activeLayout}
  data-system-placement={activeSystemButtonPlacement}
  data-style={isWindows7AeroTheme ? undefined : activeChromeStyle}
  data-theme={activeThemePreset}
  data-font={activeFontPreset}
  data-beam={isWindows7AeroTheme ? undefined : activeChromeBeamStyle}
  data-gloss={isWindows7AeroTheme ? undefined : activeChromeGlossStyle}
  data-title-tone={isWindows7AeroTheme ? undefined : activeTitleTone}
  data-title-effect={isWindows7AeroTheme ? undefined : activeTitleEffect}
>
  {#if !chromeless}
    <div
      class={isWindows7AeroTheme ? 'title-bar' : `window-chrome chrome-${activeChromeStyle}`}
      class:layout-mac={!isWindows7AeroTheme && usesLeadingSystemOrder(activeLayout)}
      class:layout-windows={!isWindows7AeroTheme && !usesLeadingSystemOrder(activeLayout)}
      class:title-bar={!isWindows7AeroTheme && usesSevenCssChromeTheme}
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
            class={isWindows7AeroTheme ? 'efs-win7-tool-button' : 'window-button'}
            class:efs-win7-tool-button={!isWindows7AeroTheme && isWindows7Theme}
            class:is-active={pinned}
            class:active={pinned}
            onclick={onPinToggle}
            aria-label={pinned ? 'Unpin window' : 'Pin window'}
            aria-pressed={pinned}
          >
            <AppIcon name="pin" />
          </button>
        {/if}
        <button
          type="button"
          class={isWindows7AeroTheme ? 'efs-win7-tool-button' : 'window-button'}
          class:efs-win7-tool-button={!isWindows7AeroTheme && isWindows7Theme}
          onclick={centerWindow}
          aria-label="Center window"
        >
          <AppIcon name="center" />
        </button>
        <button
          type="button"
          class={isWindows7AeroTheme ? 'efs-win7-tool-button' : 'window-button'}
          class:efs-win7-tool-button={!isWindows7AeroTheme && isWindows7Theme}
          class:is-active={windowState === 'rolled-up'}
          class:active={windowState === 'rolled-up'}
          onclick={toggleRollup}
          aria-label={windowState === 'rolled-up' ? 'Restore height' : 'Roll up'}
        >
          <AppIcon name={windowState === 'rolled-up' ? 'roll-up' : 'roll-down'} />
        </button>
      </div>

      <div
        class={isWindows7AeroTheme ? 'title-bar-text' : `window-title align-${displayAlignment}`}
        class:title-bar-text={!isWindows7AeroTheme && usesSevenCssChromeTheme}
        title={title}
      >
        {title}
      </div>

      <div bind:clientWidth={systemControlsWidth} class="window-system-cluster">
        {#if showWindowHelp && resolvedHelpPlacement === 'before'}
          <div class="window-help" data-placement="before">
            <button
              type="button"
              class={isWindows7AeroTheme ? 'efs-win7-tool-button' : 'window-button system help-button'}
              class:efs-win7-tool-button={!isWindows7AeroTheme && isWindows7Theme}
              class:is-help={!isWindows7AeroTheme && isWindows7Theme}
              aria-label={usesSevenCssChromeTheme ? 'Help' : `About ${title}`}
              title={`About ${title}`}
            >
              <AppIcon name="help" />
            </button>
            <div class="window-help-tooltip" role="tooltip">
              <strong>{title}</strong>
              <span>{helpText}</span>
            </div>
          </div>
        {/if}

        <div
          class={isWindows7AeroTheme ? 'title-bar-controls' : 'window-controls system-controls'}
          class:title-bar-controls={!isWindows7AeroTheme && usesSevenCssChromeTheme}
        >
          {#if usesLeadingSystemOrder(activeLayout)}
            {#if onClose}
              <button
                type="button"
                class={isWindows7AeroTheme ? 'is-close' : 'window-button system close close-button'}
                class:is-close={!isWindows7AeroTheme && usesSevenCssChromeTheme}
                onclick={onClose}
                aria-label={isWindows7Theme ? 'Close' : 'Close window'}
              >
                {#if !isWindows7Theme}
                  <AppIcon name="close" variant={resolveCloseVariant(activeLayout)} />
                {/if}
              </button>
            {/if}
              <button
                type="button"
                class={isWindows7AeroTheme
                  ? windowState === 'minimized'
                    ? 'is-restore'
                    : 'is-minimize'
                  : 'window-button system minimize-button'}
                class:is-minimize={!isWindows7AeroTheme && usesSevenCssChromeTheme && windowState !== 'minimized'}
                class:is-restore={!isWindows7AeroTheme && usesSevenCssChromeTheme && windowState === 'minimized'}
                onclick={() => (windowState === 'minimized' ? setWindowState('normal') : minimize())}
                aria-label={isWindows7Theme
                  ? windowState === 'minimized'
                    ? 'Restore'
                    : 'Minimize'
                  : windowState === 'minimized'
                    ? 'Restore window'
                    : 'Minimize window'}
              >
                {#if !isWindows7Theme}
                  <AppIcon
                    name={windowState === 'minimized' ? 'restore' : 'minimize'}
                    variant={resolveMinimizeVariant(activeLayout, windowState === 'minimized')}
                  />
                {/if}
            </button>
              <button
                type="button"
                class={isWindows7AeroTheme
                  ? windowState === 'maximized'
                    ? 'is-restore'
                    : 'is-maximize'
                  : 'window-button system maximize-button'}
                class:is-maximize={!isWindows7AeroTheme && usesSevenCssChromeTheme && windowState !== 'maximized'}
                class:is-restore={!isWindows7AeroTheme && usesSevenCssChromeTheme && windowState === 'maximized'}
                onclick={toggleMaximize}
                aria-label={isWindows7Theme
                  ? windowState === 'maximized'
                    ? 'Restore'
                    : 'Maximize'
                  : windowState === 'maximized'
                    ? 'Restore window'
                    : 'Maximize window'}
              >
                {#if !isWindows7Theme}
                  <AppIcon
                    name={windowState === 'maximized' ? 'restore' : 'maximize'}
                    variant={resolveMaximizeVariant(activeLayout, windowState === 'maximized')}
                  />
                {/if}
            </button>
          {:else}
            <button
              type="button"
              class={isWindows7AeroTheme
                ? windowState === 'minimized'
                  ? 'is-restore'
                  : 'is-minimize'
                : 'window-button system minimize-button'}
              class:is-minimize={!isWindows7AeroTheme && usesSevenCssChromeTheme && windowState !== 'minimized'}
              class:is-restore={!isWindows7AeroTheme && usesSevenCssChromeTheme && windowState === 'minimized'}
              onclick={() => (windowState === 'minimized' ? setWindowState('normal') : minimize())}
              aria-label={isWindows7Theme
                ? windowState === 'minimized'
                  ? 'Restore'
                  : 'Minimize'
                : windowState === 'minimized'
                  ? 'Restore window'
                  : 'Minimize window'}
            >
              {#if !isWindows7Theme}
                <AppIcon
                  name={windowState === 'minimized' ? 'restore' : 'minimize'}
                  variant={resolveMinimizeVariant(activeLayout, windowState === 'minimized')}
                />
              {/if}
            </button>
            <button
              type="button"
              class={isWindows7AeroTheme
                ? windowState === 'maximized'
                  ? 'is-restore'
                  : 'is-maximize'
                : 'window-button system maximize-button'}
              class:is-maximize={!isWindows7AeroTheme && usesSevenCssChromeTheme && windowState !== 'maximized'}
              class:is-restore={!isWindows7AeroTheme && usesSevenCssChromeTheme && windowState === 'maximized'}
              onclick={toggleMaximize}
              aria-label={isWindows7Theme
                ? windowState === 'maximized'
                  ? 'Restore'
                  : 'Maximize'
                : windowState === 'maximized'
                  ? 'Restore window'
                  : 'Maximize window'}
            >
              {#if !isWindows7Theme}
                <AppIcon
                  name={windowState === 'maximized' ? 'restore' : 'maximize'}
                  variant={resolveMaximizeVariant(activeLayout, windowState === 'maximized')}
                />
              {/if}
            </button>
            {#if onClose}
              <button
                type="button"
                class={isWindows7AeroTheme ? 'is-close' : 'window-button system close close-button'}
                class:is-close={!isWindows7AeroTheme && usesSevenCssChromeTheme}
                onclick={onClose}
                aria-label={isWindows7Theme ? 'Close' : 'Close window'}
              >
                {#if !isWindows7Theme}
                  <AppIcon name="close" variant={resolveCloseVariant(activeLayout)} />
                {/if}
              </button>
            {/if}
          {/if}
        </div>

        {#if showWindowHelp && resolvedHelpPlacement === 'after'}
          <div class="window-help" data-placement="after">
            <button
              type="button"
              class={isWindows7AeroTheme ? 'efs-win7-tool-button' : 'window-button system help-button'}
              class:efs-win7-tool-button={!isWindows7AeroTheme && isWindows7Theme}
              class:is-help={!isWindows7AeroTheme && isWindows7Theme}
              aria-label={usesSevenCssChromeTheme ? 'Help' : `About ${title}`}
              title={`About ${title}`}
            >
              <AppIcon name="help" />
            </button>
            <div class="window-help-tooltip" role="tooltip">
              <strong>{title}</strong>
              <span>{helpText}</span>
            </div>
          </div>
        {/if}
      </div>
    </div>
  {/if}

  {#if windowState !== 'rolled-up' && windowState !== 'minimized'}
    <div
      bind:this={windowContentNode}
      class="window-content"
      class:window-body={isWindows7Theme}
    >
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
    --window-panel: var(--efs-window-theme-panel, var(--shell-panel, rgba(15, 23, 42, 0.94)));
    --window-surface: var(--efs-window-theme-surface, var(--shell-surface, rgba(15, 23, 42, 0.98)));
    --window-border: var(--efs-window-theme-border, var(--shell-border, rgba(148, 163, 184, 0.24)));
    --window-hover: var(--efs-window-theme-hover, var(--shell-row-hover, rgba(125, 211, 252, 0.12)));
    --window-shadow: var(--efs-window-theme-shadow, var(--efs-window-shell-shadow, var(--shell-card-shadow, 0 28px 68px rgba(0, 0, 0, 0.42))));
    --window-primary: var(--shell-primary, var(--efs-accent-500, #7dd3fc));
    --window-text: var(--shell-text, var(--efs-text-primary, #f8fafc));
    --window-muted: var(--shell-muted, color-mix(in srgb, var(--window-text), transparent 36%));
    --window-chrome-tint: var(--efs-window-chrome-tint, var(--window-primary));
    --window-chrome-texture-opacity: var(--efs-window-chrome-texture-opacity, 0);
    --window-beam-intensity: var(--efs-window-chrome-beam-intensity, 0);
    --window-gloss-intensity: var(--efs-window-chrome-gloss-intensity, 0.68);
    --window-gloss-spacing: var(--efs-window-chrome-gloss-spacing, 18px);
    --window-chrome-colorize-opacity: var(--efs-window-chrome-colorize-opacity, 0);
    --window-titlebar-height: 44px;
    --window-shell-scale: 1;
    --window-control-size-base: calc(2.15rem * var(--window-shell-scale));
    --window-control-size:
      min(
        var(--window-control-size-base),
        max(1.7rem, calc(var(--window-titlebar-height) - max(0.46rem, calc(var(--window-chrome-padding) * 0.9))))
      );
    --window-aux-width: calc(2.35rem * var(--window-shell-scale));
    --window-system-width: calc(2.75rem * var(--window-shell-scale));
    --window-system-height: var(--window-control-size);
    --window-control-gap: calc(0.14rem * var(--window-shell-scale));
    --window-control-radius: max(8px, calc(10px * var(--window-shell-scale)));
    --window-control-border-width: clamp(0px, calc(var(--window-border-width) * 0.9), 3px);
    --window-icon-size: calc(0.9rem * var(--window-shell-scale));
    --window-system-icon-size: var(--window-icon-size);
    --window-chrome-top-space:
      max(0.18rem, calc((var(--window-titlebar-height) - var(--window-system-height)) * 0.52));
    --window-chrome-bottom-space:
      max(0.12rem, calc((var(--window-titlebar-height) - var(--window-system-height)) * 0.48));
    --window-title-guard: 0px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    isolation: isolate;
    min-width: min(100vw - 1rem, 18rem);
    min-height: 0;
    opacity: 0;
    transform-origin: top center;
    transition: transform 180ms ease, width 180ms ease, height 180ms ease, opacity 180ms ease;
    will-change: transform, width, height;
    pointer-events: auto;
  }

  .window-shell:not(.win7-theme) {
    border: var(--window-border-width) solid color-mix(in srgb, var(--window-border), transparent 2%);
    border-radius: var(--window-radius);
    background: color-mix(in srgb, var(--window-surface), transparent 2%);
    box-shadow:
      var(--window-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 28%);
    overflow: clip;
    color: var(--window-text);
    font-family: var(--efs-window-font-family, var(--efs-font-sans, sans-serif));
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
    --window-control-size-base: calc(1.92rem * var(--window-shell-scale));
    --window-aux-width: calc(2.05rem * var(--window-shell-scale));
    --window-system-width: calc(2.28rem * var(--window-shell-scale));
    --window-control-gap: calc(0.08rem * var(--window-shell-scale));
    --window-control-radius: max(8px, calc(8px * var(--window-shell-scale)));
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
    overflow: hidden;
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

  .window-chrome::before,
  .window-chrome::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .window-chrome::before {
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--window-chrome-tint), transparent 88%), transparent 74%),
      radial-gradient(circle at top right, color-mix(in srgb, var(--window-chrome-tint), transparent 82%), transparent 42%);
    opacity: var(--window-chrome-colorize-opacity);
  }

  .window-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.34),
        rgba(255, 255, 255, 0.14) 18%,
        rgba(255, 255, 255, 0.04) 52%,
        transparent 82%
      ),
      radial-gradient(132% 118% at 12% -18%, rgba(255, 255, 255, 0.28), transparent 44%),
      radial-gradient(116% 94% at 100% 0%, rgba(255, 255, 255, 0.16), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, 0.12) 38%,
        rgba(255, 255, 255, 0.04) 58%,
        transparent 80%
      );
    mix-blend-mode: screen;
    opacity: calc(var(--window-chrome-texture-opacity) * 0.78);
  }

  .window-tools,
  .window-system-cluster,
  .system-controls {
    position: relative;
    z-index: 1;
    min-width: 0;
  }

  .window-tools {
    justify-self: start;
  }

  .window-system-cluster,
  .system-controls {
    justify-self: end;
  }

  .window-shell[data-system-placement='left'] .window-tools {
    justify-self: end;
  }

  .window-shell[data-system-placement='left'] .window-system-cluster,
  .window-shell[data-system-placement='left'] .system-controls {
    justify-self: start;
  }

  .window-title {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    min-width: 0;
    width: max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));
    max-width: max(0px, calc(100% - (var(--window-title-guard) * 2) - 1rem));
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font: var(--efs-font-title-sm);
    font-weight: 600;
    letter-spacing: 0.01em;
    color: var(--window-text);
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
  .window-title.align-left { text-align: left; }
  .window-title.align-center { text-align: center; }
  .window-title.align-right { text-align: right; }

  .window-shell[data-title-tone='light'] .window-title {
    color: rgba(255, 255, 255, 0.96);
  }

  .window-shell[data-title-tone='dark'] .window-title {
    color: rgba(12, 18, 28, 0.88);
  }

  .window-shell[data-title-effect='plain'] .window-title {
    text-shadow: none;
  }

  .window-shell[data-title-effect='shadow'] .window-title {
    text-shadow:
      0 1px 0 rgba(0, 0, 0, 0.16),
      0 2px 12px rgba(0, 0, 0, 0.18);
  }

  .window-shell[data-title-tone='dark'][data-title-effect='shadow'] .window-title {
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.42),
      0 8px 18px rgba(255, 255, 255, 0.32);
  }

  .window-shell[data-title-effect='glow'] .window-title {
    text-shadow:
      0 0 10px rgba(255, 255, 255, 0.82),
      0 0 10px rgba(255, 255, 255, 0.82),
      0 0 10px rgba(255, 255, 255, 0.82),
      0 1px 0 rgba(255, 255, 255, 0.58);
  }

  .window-shell[data-title-tone='light'][data-title-effect='glow'] .window-title {
    text-shadow:
      0 0 12px rgba(12, 18, 28, 0.44),
      0 1px 0 rgba(0, 0, 0, 0.38);
  }

  .window-shell[data-title-effect='emboss'] .window-title {
    text-shadow:
      0 1px 0 rgba(255, 255, 255, 0.28),
      0 -1px 0 rgba(0, 0, 0, 0.38);
  }
  .window-controls {
    display: inline-flex;
    align-items: center;
    gap: var(--window-control-gap);
    min-width: 0;
    white-space: nowrap;
  }

  .window-system-cluster {
    display: inline-flex;
    align-items: center;
    gap: max(0.28rem, calc(var(--window-control-gap) * 0.75));
    min-width: 0;
  }

  .window-help {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }

  .window-help-tooltip {
    position: absolute;
    top: calc(100% + 0.65rem);
    z-index: 8;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: min(18rem, calc(100vw - 2rem));
    padding: 0.85rem 0.95rem;
    border: 1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);
    border-radius: 16px;
    background:
      radial-gradient(circle at top left, color-mix(in srgb, var(--window-chrome-tint), transparent 90%), transparent 34%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 84%),
      color-mix(in srgb, var(--window-panel), transparent 2%);
    color: var(--window-text);
    box-shadow:
      var(--window-shadow),
      inset 0 0 0 1px color-mix(in srgb, var(--window-border), transparent 26%);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-0.25rem);
    transition:
      opacity 140ms ease,
      transform 140ms ease;
  }

  .window-help[data-placement='before'] .window-help-tooltip {
    right: 0;
  }

  .window-help[data-placement='after'] .window-help-tooltip {
    left: 0;
  }

  .window-help-tooltip::before {
    content: '';
    position: absolute;
    top: -0.42rem;
    width: 0.75rem;
    height: 0.75rem;
    border-top: 1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);
    border-left: 1px solid color-mix(in srgb, var(--window-chrome-tint), transparent 54%);
    background: color-mix(in srgb, var(--window-panel), transparent 2%);
    transform: rotate(45deg);
  }

  .window-help[data-placement='before'] .window-help-tooltip::before {
    right: 0.9rem;
  }

  .window-help[data-placement='after'] .window-help-tooltip::before {
    left: 0.9rem;
  }

  .window-help-tooltip strong {
    font: var(--efs-font-label);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .window-help-tooltip span {
    color: color-mix(in srgb, var(--window-text), transparent 18%);
    font: var(--efs-font-body-sm);
    line-height: 1.55;
  }

  .window-help:hover .window-help-tooltip,
  .window-help:focus-within .window-help-tooltip {
    opacity: 1;
    transform: translateY(0);
  }

  .window-button {
    display: inline-flex;
    position: relative;
    isolation: isolate;
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
    overflow: hidden;
    transition:
      background-color 140ms ease,
      border-color 140ms ease,
      color 140ms ease,
      box-shadow 140ms ease,
      transform 140ms ease;
  }

  .window-button::before,
  .window-button::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
  }

  .window-button::before {
    background:
      linear-gradient(180deg, color-mix(in srgb, var(--window-chrome-tint), transparent 86%), transparent 74%),
      radial-gradient(circle at top left, color-mix(in srgb, var(--window-chrome-tint), transparent 82%), transparent 56%);
    opacity: calc(var(--window-chrome-colorize-opacity) * 0.72);
  }

  .window-button::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.28),
        rgba(255, 255, 255, 0.1) 42%,
        rgba(255, 255, 255, 0.02) 76%,
        transparent 100%
      ),
      radial-gradient(130% 118% at 18% -24%, rgba(255, 255, 255, 0.18), transparent 46%),
      linear-gradient(
        118deg,
        transparent 16%,
        rgba(255, 255, 255, 0.1) 42%,
        rgba(255, 255, 255, 0.03) 64%,
        transparent 86%
      );
    mix-blend-mode: screen;
    opacity: calc(var(--window-chrome-texture-opacity) * 0.44);
  }

  .window-button :global(.app-icon) {
    position: relative;
    z-index: 1;
    width: var(--window-icon-size);
    height: var(--window-icon-size);
  }

  .help-button :global(.app-icon) {
    width: min(var(--window-icon-size), 0.92rem);
    height: min(var(--window-icon-size), 0.92rem);
  }
  .window-button:hover {
    transform: translateY(-1px);
    border-color: color-mix(in srgb, var(--window-chrome-tint), transparent 68%);
    background: color-mix(in srgb, var(--window-hover), var(--window-chrome-tint) 16%);
    color: var(--window-text);
  }
  .window-button.is-active {
    border-color: color-mix(in srgb, var(--window-chrome-tint), transparent 56%);
    background: color-mix(in srgb, var(--window-chrome-tint), transparent 82%);
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
    border-color: color-mix(in srgb, var(--window-border), transparent 24%);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.08) 68%, transparent 100%),
      color-mix(in srgb, var(--window-panel), transparent 12%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.26);
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

  .window-shell[data-theme='aero']:not(.win7-theme) {
    --window-control-radius: 8px;
    --window-chrome-top-space: max(0.2rem, calc(var(--window-chrome-padding) * 0.6));
    --window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));
    --window-w7-title-bg:
      linear-gradient(to right, #ffffff66, #0000001a, #ffffff33),
      #4580c4;
    --window-w7-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.3) 70px, transparent 100px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.12) 0 4%,
          rgba(102, 102, 102, 0.08) 6% 6%,
          rgba(0, 0, 0, 0.12) 8% 10%,
          rgba(0, 0, 0, 0.12) 15% 16%,
          rgba(170, 170, 170, 0.08) 17% 18%,
          rgba(0, 0, 0, 0.12) 23% 24%,
          rgba(187, 187, 187, 0.12) 25% 26%,
          rgba(0, 0, 0, 0.12) 31% 33%,
          rgba(0, 0, 0, 0.12) 34% 34.5%,
          rgba(187, 187, 187, 0.12) 36% 40%,
          rgba(0, 0, 0, 0.12) 41% 41.5%,
          rgba(187, 187, 187, 0.12) 44% 45%,
          rgba(187, 187, 187, 0.12) 46% 47%,
          rgba(0, 0, 0, 0.12) 48% 49%,
          rgba(0, 0, 0, 0.12) 50% 50.5%,
          rgba(0, 0, 0, 0.12) 56% 56.5%,
          rgba(187, 187, 187, 0.12) 57% 63%,
          rgba(0, 0, 0, 0.12) 67% 69%,
          rgba(187, 187, 187, 0.12) 69.5% 70%,
          rgba(0, 0, 0, 0.12) 73.5% 74%,
          rgba(187, 187, 187, 0.12) 74.5% 79%,
          rgba(0, 0, 0, 0.12) 80% 84%,
          rgba(170, 170, 170, 0.12) 85% 86%,
          rgba(0, 0, 0, 0.12) 87%,
          rgba(187, 187, 187, 0.08) 90%
        )
        left center / 100vw 100vh no-repeat;
    --window-w7-control-bg:
      linear-gradient(#ffffff80, #ffffff4d 45%, #0000001a 50%, #0000001a 75%, #ffffff80);
    --window-w7-control-border: #0000004d;
    border-color: rgba(0, 0, 0, 0.7);
    box-shadow:
      var(--window-shadow),
      inset 0 0 0 1px rgba(255, 255, 255, 0.82),
      inset 0 0 0 2px rgba(255, 255, 255, 0.08);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .window-chrome {
    background:
      linear-gradient(transparent 20%, rgba(255, 255, 255, 0.72) 40%, transparent 41%),
      var(--window-w7-title-bg);
    backdrop-filter: blur(10px) saturate(1.04);
    -webkit-backdrop-filter: blur(10px) saturate(1.04);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .window-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.52),
        rgba(255, 255, 255, 0.24) 18%,
        rgba(255, 255, 255, 0.08) 52%,
        transparent 86%
      ),
      radial-gradient(140% 126% at 10% -18%, rgba(255, 255, 255, 0.42), transparent 42%),
      radial-gradient(94% 112% at 100% 0%, rgba(255, 255, 255, 0.2), transparent 42%);
    opacity: calc(var(--window-chrome-texture-opacity) * 0.62);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .system-controls {
    gap: 0;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.22);
    border: 1px solid var(--window-w7-control-border);
    border-top: 0;
    border-radius: 0 0 5px 5px;
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.8),
      1px 0 0 rgba(255, 255, 255, 0.66),
      -1px 0 0 rgba(255, 255, 255, 0.66);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .system-controls .window-button.system {
    border: 0;
    border-right: 1px solid var(--window-w7-control-border);
    border-radius: 0;
    background: var(--window-w7-control-bg);
    color: rgba(0, 0, 0, 0.76);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.66);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .system-controls .window-button.system:last-child {
    border-right: 0;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .system-controls .close-button {
    min-width: max(var(--window-system-width), 3rem);
    background:
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(224, 161, 151, 0.9),
        rgba(207, 121, 106, 0.95) 25% 50%,
        rgba(213, 79, 54, 0.96) 50%
      );
    color: rgba(255, 255, 255, 0.94);
  }

  .window-shell[data-theme='windows-vista'] {
    --window-control-radius: 8px;
    --window-chrome-top-space: max(0.22rem, calc(var(--window-chrome-padding) * 0.62));
    --window-chrome-bottom-space: max(0.12rem, calc(var(--window-chrome-padding) * 0.24));
    --window-vista-title-bg:
      linear-gradient(to right, rgba(255, 255, 255, 0.74), rgba(0, 0, 0, 0.14), rgba(255, 255, 255, 0.36)),
      #6c8fbe;
    --window-vista-glass-stripes:
      linear-gradient(135deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(225deg, rgba(255, 255, 255, 0.42) 64px, transparent 96px),
      linear-gradient(
          54deg,
          rgba(0, 0, 0, 0.08) 0 4%,
          rgba(168, 206, 235, 0.14) 6% 6%,
          rgba(0, 0, 0, 0.1) 8% 10%,
          rgba(0, 0, 0, 0.08) 15% 16%,
          rgba(184, 224, 248, 0.16) 17% 18%,
          rgba(0, 0, 0, 0.1) 23% 24%,
          rgba(210, 235, 252, 0.18) 25% 26%,
          rgba(0, 0, 0, 0.1) 31% 33%,
          rgba(0, 0, 0, 0.08) 34% 34.5%,
          rgba(218, 239, 255, 0.18) 36% 40%,
          rgba(0, 0, 0, 0.08) 41% 41.5%,
          rgba(224, 244, 255, 0.18) 44% 45%,
          rgba(224, 244, 255, 0.18) 46% 47%,
          rgba(0, 0, 0, 0.08) 48% 49%,
          rgba(0, 0, 0, 0.08) 50% 50.5%,
          rgba(0, 0, 0, 0.08) 56% 56.5%,
          rgba(224, 244, 255, 0.18) 57% 63%,
          rgba(0, 0, 0, 0.08) 67% 69%,
          rgba(224, 244, 255, 0.18) 69.5% 70%,
          rgba(0, 0, 0, 0.08) 73.5% 74%,
          rgba(224, 244, 255, 0.18) 74.5% 79%,
          rgba(0, 0, 0, 0.08) 80% 84%,
          rgba(172, 214, 239, 0.16) 85% 86%,
          rgba(0, 0, 0, 0.08) 87%,
          rgba(224, 244, 255, 0.12) 90%
        )
        left center / 100vw 100vh no-repeat;
    --window-vista-control-bg:
      linear-gradient(
        rgba(255, 255, 255, 0.62),
        rgba(255, 255, 255, 0.34) 45%,
        rgba(0, 0, 0, 0.12) 50%,
        rgba(0, 0, 0, 0.14) 76%,
        rgba(255, 255, 255, 0.54)
      );
    border-color: rgba(0, 0, 0, 0.7);
    box-shadow:
      var(--window-shadow),
      inset 0 0 0 1px rgba(255, 255, 255, 0.88),
      inset 0 0 0 2px rgba(255, 255, 255, 0.12);
  }

  .window-shell[data-theme='windows-vista'] .window-chrome {
    background:
      linear-gradient(transparent 18%, rgba(255, 255, 255, 0.78) 40%, transparent 41%),
      var(--window-vista-title-bg);
    backdrop-filter: blur(9px) saturate(1.02);
    -webkit-backdrop-filter: blur(9px) saturate(1.02);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.96),
      inset 1px 0 0 rgba(255, 255, 255, 0.62),
      inset -1px 0 0 rgba(255, 255, 255, 0.62);
  }

  .window-shell[data-theme='windows-vista'] .window-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.62),
        rgba(255, 255, 255, 0.3) 18%,
        rgba(255, 255, 255, 0.1) 58%,
        transparent 90%
      ),
      radial-gradient(142% 128% at 8% -22%, rgba(255, 255, 255, 0.48), transparent 44%),
      radial-gradient(106% 118% at 100% 0%, rgba(255, 255, 255, 0.26), transparent 42%);
    opacity: calc(var(--window-chrome-texture-opacity) * 0.68);
  }

  .window-shell[data-theme='windows-vista'] .system-controls {
    gap: 0;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.26);
    border: 1px solid rgba(0, 0, 0, 0.35);
    border-top: 0;
    border-radius: 0 0 5px 5px;
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.84),
      1px 0 0 rgba(255, 255, 255, 0.72),
      -1px 0 0 rgba(255, 255, 255, 0.72);
  }

  .window-shell[data-theme='windows-vista'] .system-controls .window-button.system {
    border: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.35);
    border-radius: 0;
    background: var(--window-vista-control-bg);
    color: rgba(0, 0, 0, 0.82);
    box-shadow:
      inset 0 0 0 1px rgba(255, 255, 255, 0.72),
      inset 0 1px 0 rgba(255, 255, 255, 0.38);
  }

  .window-shell[data-theme='windows-vista'] .system-controls .window-button.system:last-child {
    border-right: 0;
  }

  .window-shell[data-theme='windows-vista'] .system-controls .close-button {
    min-width: max(var(--window-system-width), 3rem);
    background:
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      linear-gradient(
        rgba(233, 176, 166, 0.94),
        rgba(211, 110, 95, 0.96) 25% 50%,
        rgba(201, 52, 37, 0.98) 50%
      );
    color: rgba(255, 255, 255, 0.96);
  }

  .window-shell[data-theme='windows-11-mica'] {
    --window-control-radius: 11px;
    --window-system-icon-size: 0.88rem;
  }

  .window-shell[data-theme='windows-11-mica'] .window-chrome {
    background:
      radial-gradient(circle at top center, rgba(255, 255, 255, 0.14), transparent 42%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 74%),
      color-mix(in srgb, var(--window-panel), transparent 10%);
    backdrop-filter: blur(14px) saturate(1.08);
    -webkit-backdrop-filter: blur(14px) saturate(1.08);
  }

  .window-shell[data-theme='windows-11-mica'] .window-chrome::after {
    background:
      radial-gradient(142% 118% at 14% -18%, rgba(255, 255, 255, 0.22), transparent 42%),
      radial-gradient(
        124% 134% at 100% 0%,
        color-mix(in srgb, var(--window-chrome-tint), transparent 88%),
        transparent 38%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.03) 48%, transparent 78%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, 0.1),
        transparent 28%,
        rgba(255, 255, 255, 0.04) 58%,
        transparent 84%
      );
    opacity: calc(var(--window-chrome-texture-opacity) * 0.62);
  }

  .window-shell[data-theme='windows-11-mica'] .system-controls .window-button.system {
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.04) 72%),
      color-mix(in srgb, var(--window-panel), transparent 8%);
    backdrop-filter: blur(10px) saturate(1.04);
    -webkit-backdrop-filter: blur(10px) saturate(1.04);
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

  .window-shell[data-beam='windows-7'] .window-chrome::before {
    background:
      var(--window-w7-glass-stripes, none),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.6 + var(--window-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.28 + var(--window-beam-intensity) * 0.14)) 16%,
        rgba(255, 255, 255, calc(0.06 + var(--window-beam-intensity) * 0.05)) 46%,
        transparent 72%
      ),
      radial-gradient(
        156% 132% at 52% -36%,
        rgba(255, 255, 255, calc(0.56 + var(--window-beam-intensity) * 0.24)),
        transparent 38%
      ),
      radial-gradient(
        118% 118% at 100% 0%,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.12)),
        transparent 42%
      ),
      linear-gradient(
        104deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.26 + var(--window-beam-intensity) * 0.18)) 20%,
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.08)) 40%,
        transparent 60%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 88%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 82%),
        transparent 42%
      );
    opacity: clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.44 + var(--window-beam-intensity) * 0.98),
      1
    );
  }

  .window-shell[data-beam='vista'] .window-chrome::before {
    background:
      var(--window-vista-glass-stripes, var(--window-w7-glass-stripes, none)),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.68 + var(--window-beam-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.34 + var(--window-beam-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.05)) 52%,
        transparent 76%
      ),
      radial-gradient(
        164% 136% at 50% -42%,
        rgba(255, 255, 255, calc(0.62 + var(--window-beam-intensity) * 0.24)),
        transparent 40%
      ),
      radial-gradient(
        124% 122% at 100% 0%,
        rgba(255, 255, 255, calc(0.22 + var(--window-beam-intensity) * 0.14)),
        transparent 44%
      ),
      linear-gradient(
        106deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.32 + var(--window-beam-intensity) * 0.16)) 18%,
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.08)) 40%,
        transparent 62%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 78%),
        transparent 42%
      );
    opacity: clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 1),
      1
    );
  }

  .window-shell[data-beam='xp-luna'] .window-chrome::before {
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, white 88%, var(--window-chrome-tint) 12%),
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.08)) 30%,
        transparent 78%
      ),
      radial-gradient(
        148% 120% at 16% -6%,
        color-mix(in srgb, white 84%, var(--window-chrome-tint) 16%),
        transparent 44%
      ),
      linear-gradient(
        96deg,
        transparent 0,
        rgba(255, 255, 255, calc(0.16 + var(--window-beam-intensity) * 0.1)) 22%,
        transparent 48%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 82%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 76%),
        transparent 42%
      );
    opacity: clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.62 + var(--window-beam-intensity) * 0.88),
      1
    );
  }

  .window-shell[data-beam='windows-9x'] .window-chrome::before {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.34 + var(--window-beam-intensity) * 0.16)) 0 2px,
        rgba(255, 255, 255, calc(0.12 + var(--window-beam-intensity) * 0.06)) 2px 5px,
        transparent 5px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.12)) 0 1px,
        transparent 1px 100%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),
        transparent 72%
      );
    opacity: clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 0.78),
      1
    );
  }

  .window-shell[data-beam='kde'] .window-chrome::before {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.24 + var(--window-beam-intensity) * 0.12)),
        rgba(255, 255, 255, calc(0.08 + var(--window-beam-intensity) * 0.06)) 30%,
        transparent 78%
      ),
      radial-gradient(
        144% 118% at 18% -8%,
        rgba(255, 255, 255, calc(0.18 + var(--window-beam-intensity) * 0.1)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 86%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 80%),
        transparent 42%
      );
    opacity: clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.52 + var(--window-beam-intensity) * 0.82),
      1
    );
  }

  .window-shell[data-beam='mica'] .window-chrome::before {
    background:
      radial-gradient(
        146% 124% at 18% -18%,
        rgba(255, 255, 255, calc(0.16 + var(--window-beam-intensity) * 0.08)),
        transparent 42%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.1 + var(--window-beam-intensity) * 0.06)),
        transparent 76%
      ),
      linear-gradient(
        180deg,
        color-mix(in srgb, var(--window-chrome-tint), transparent 90%),
        transparent 74%
      ),
      radial-gradient(
        circle at top right,
        color-mix(in srgb, var(--window-chrome-tint), transparent 84%),
        transparent 42%
      );
    opacity: clamp(
      0,
      calc(var(--window-chrome-colorize-opacity) * 0.48 + var(--window-beam-intensity) * 0.74),
      1
    );
  }

  .window-shell[data-gloss='none'] .window-chrome::after,
  .window-shell[data-gloss='none'] .window-button::after {
    opacity: 0;
  }

  .window-shell[data-gloss='windows-7'] .window-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.3 + var(--window-gloss-intensity) * 0.24)),
        rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.12)) 18%,
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.05)) 58%,
        transparent 88%
      ),
      radial-gradient(136% 124% at 10% -18%, rgba(255, 255, 255, calc(0.2 + var(--window-gloss-intensity) * 0.22)), transparent 46%),
      radial-gradient(104% 110% at 100% 0%, rgba(255, 255, 255, calc(0.08 + var(--window-gloss-intensity) * 0.12)), transparent 42%),
      linear-gradient(
        114deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.04 + var(--window-gloss-intensity) * 0.12)) calc(28% + var(--window-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.04)) calc(54% + var(--window-gloss-spacing) * 0.1),
        transparent 82%
      );
    opacity: calc(var(--window-chrome-texture-opacity) * 1.02);
  }

  .window-shell[data-gloss='vista'] .window-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.38 + var(--window-gloss-intensity) * 0.24)),
        rgba(255, 255, 255, calc(0.16 + var(--window-gloss-intensity) * 0.14)) 18%,
        rgba(255, 255, 255, calc(0.04 + var(--window-gloss-intensity) * 0.06)) 62%,
        transparent 90%
      ),
      radial-gradient(138% 128% at 8% -22%, rgba(255, 255, 255, calc(0.26 + var(--window-gloss-intensity) * 0.24)), transparent 46%),
      radial-gradient(114% 118% at 100% 0%, rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.14)), transparent 42%),
      linear-gradient(
        116deg,
        transparent 14%,
        rgba(255, 255, 255, calc(0.06 + var(--window-gloss-intensity) * 0.14)) calc(30% + var(--window-gloss-spacing) * 0.22),
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.05)) calc(56% + var(--window-gloss-spacing) * 0.12),
        transparent 84%
      );
    opacity: calc(var(--window-chrome-texture-opacity) * 1.06);
  }

  .window-shell[data-gloss='kde'] .window-chrome::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.2 + var(--window-gloss-intensity) * 0.18)),
        rgba(255, 255, 255, calc(0.08 + var(--window-gloss-intensity) * 0.08)) 24%,
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.03)) 60%,
        transparent 86%
      ),
      radial-gradient(132% 116% at 14% -16%, rgba(255, 255, 255, calc(0.14 + var(--window-gloss-intensity) * 0.14)), transparent 44%),
      linear-gradient(
        124deg,
        transparent 10%,
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.08)) calc(26% + var(--window-gloss-spacing) * 0.2),
        rgba(255, 255, 255, calc(0.015 + var(--window-gloss-intensity) * 0.03)) calc(58% + var(--window-gloss-spacing) * 0.12),
        transparent 86%
      );
    opacity: calc(var(--window-chrome-texture-opacity) * 0.94);
  }

  .window-shell[data-gloss='mica'] .window-chrome::after {
    background:
      radial-gradient(146% 120% at 12% -18%, rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.14)), transparent 44%),
      radial-gradient(126% 136% at 100% 0%, color-mix(in srgb, var(--window-chrome-tint), transparent calc(92% - var(--window-gloss-intensity) * 10%)), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, calc(0.1 + var(--window-gloss-intensity) * 0.1)), rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.02)) 52%, transparent 82%),
      linear-gradient(
        138deg,
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.05)),
        transparent 28%,
        rgba(255, 255, 255, calc(0.01 + var(--window-gloss-intensity) * 0.02)) calc(58% + var(--window-gloss-spacing) * 0.1),
        transparent 86%
      );
    opacity: calc(var(--window-chrome-texture-opacity) * 0.96);
  }

  .window-shell[data-gloss='windows-7'] .system-controls .window-button.system,
  .window-shell[data-gloss='vista'] .system-controls .window-button.system,
  .window-shell[data-gloss='kde'] .system-controls .window-button.system,
  .window-shell[data-gloss='mica'] .system-controls .window-button.system {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.14 + var(--window-gloss-intensity) * 0.22)),
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.08)) 72%,
        transparent 100%
      ),
      color-mix(in srgb, var(--window-panel), transparent 10%);
  }

  .window-shell[data-gloss='windows-7'] .window-button::after,
  .window-shell[data-gloss='vista'] .window-button::after,
  .window-shell[data-gloss='kde'] .window-button::after,
  .window-shell[data-gloss='mica'] .window-button::after {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, calc(0.12 + var(--window-gloss-intensity) * 0.18)),
        rgba(255, 255, 255, calc(0.03 + var(--window-gloss-intensity) * 0.06)) 44%,
        transparent 100%
      ),
      radial-gradient(128% 118% at 18% -24%, rgba(255, 255, 255, calc(0.06 + var(--window-gloss-intensity) * 0.08)), transparent 46%),
      linear-gradient(
        130deg,
        transparent 12%,
        rgba(255, 255, 255, calc(0.02 + var(--window-gloss-intensity) * 0.04)) calc(40% + var(--window-gloss-spacing) * 0.12),
        transparent 84%
      );
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar,
  .window-shell[data-theme='windows-vista'] .title-bar {
    padding-top: 0;
    padding-inline: 6px;
    gap: 0.55rem;
    border-bottom: 0;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-text,
  .window-shell[data-theme='windows-vista'] .title-bar-text {
    line-height: 15px;
    padding-top: 6px;
    letter-spacing: 0;
    font-weight: 600;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls,
  .window-shell[data-theme='windows-vista'] .title-bar-controls {
    gap: 0;
    align-self: start;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.18);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-top: 0;
    border-radius: 0 0 5px 5px;
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.82),
      1px 0 0 rgba(255, 255, 255, 0.72),
      -1px 0 0 rgba(255, 255, 255, 0.72);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system {
    position: relative;
    min-width: 29px;
    min-height: 19px;
    width: auto;
    height: auto;
    padding: 0;
    border: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 0;
    box-shadow: none;
    box-sizing: border-box;
    background: none;
    color: rgba(12, 18, 28, 0.84);
    overflow: visible;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system::before,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system::before,
  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system::after {
    inset: 0;
    border-radius: 0;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system::before,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system::before {
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.66);
    opacity: 1;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system::after {
    opacity: 0;
    transition: opacity 120ms linear;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:hover,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:hover {
    transform: none;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:last-child,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:last-child {
    border-right: 0;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:last-child::before,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:last-child::before,
  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:last-child::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:last-child::after {
    border-bottom-right-radius: 5px;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:first-child::before,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:first-child::before,
  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:first-child::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:first-child::after {
    border-bottom-left-radius: 5px;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system :global(.app-icon),
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system :global(.app-icon) {
    width: 0.72rem;
    height: 0.72rem;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system {
    background: var(--window-w7-control-bg, var(--window-vista-control-bg));
  }

  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system {
    background: var(--window-vista-control-bg);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:hover::after,
  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:focus-visible::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:hover::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:focus-visible::after {
    opacity: 1;
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:not(.close-button)::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:not(.close-button)::after {
    box-shadow:
      0 0 7px 3px rgba(93, 196, 240, 0.82),
      inset 0 0 0 1px rgba(255, 255, 255, 0.82);
    background:
      radial-gradient(circle at bottom, rgba(42, 206, 218, 0.9), transparent 65%),
      linear-gradient(#b6d9ee 50%, #1a6ca1 50%);
  }

  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:not(.close-button)::after {
    box-shadow:
      0 0 7px 3px rgba(104, 196, 244, 0.86),
      inset 0 0 0 1px rgba(255, 255, 255, 0.86);
    background:
      radial-gradient(circle at bottom, rgba(118, 220, 255, 0.94), transparent 65%),
      linear-gradient(#d3e9f8 48%, #4f88b7 50%);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .window-button.system:not(.close-button):active::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .window-button.system:not(.close-button):active::after {
    background:
      radial-gradient(circle at bottom, rgba(11, 253, 250, 0.88), transparent 65%),
      linear-gradient(#86a7bc 50%, #092747 50%);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .close-button,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .close-button {
    min-width: 48px;
    color: rgba(255, 255, 255, 0.96);
    background:
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.45) 5% 10%, transparent 50%),
      linear-gradient(#e0a197e5, #cf796a 25% 50%, #d54f36 50%);
  }

  .window-shell[data-theme='windows-vista'] .title-bar-controls .close-button {
    background:
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.48) 5% 10%, transparent 50%),
      linear-gradient(#efb0a6, #d36e5f 25% 50%, #c93425 50%);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .close-button::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .close-button::after {
    box-shadow:
      0 0 7px 3px rgba(230, 142, 117, 0.9),
      inset 0 0 0 1px rgba(255, 255, 255, 0.78);
    background:
      radial-gradient(circle at 50% 170%, rgba(244, 230, 118, 0.9) 10% 20%, transparent 60%),
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.64) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.64) 5% 10%, transparent 50%),
      linear-gradient(#fb9d8b, #ee6d56 25% 50%, #d42809 50%);
  }

  .window-shell[data-theme='aero']:not(.win7-theme) .title-bar-controls .close-button:active::after,
  .window-shell[data-theme='windows-vista'] .title-bar-controls .close-button:active::after {
    background:
      radial-gradient(circle at 50% 170%, rgba(220, 192, 63, 0.92) 10% 20%, transparent 60%),
      radial-gradient(circle at -60% 50%, rgba(0, 0, 0, 0.88) 5% 10%, transparent 50%),
      radial-gradient(circle at 160% 50%, rgba(0, 0, 0, 0.88) 5% 10%, transparent 50%),
      linear-gradient(#d1a894, #b67562 25% 50%, #7d0d01 50%);
  }

  .window-shell.win7-theme {
    overflow: visible;
    color: var(--w7-el-c);
    font-family: var(--w7-font);
  }

  .window-shell.win7-theme .window-content.window-body {
    margin: 0 var(--w7-w-space) var(--w7-w-space);
    border: 1px solid var(--w7-w-bd);
    background: var(--w7-surface);
    box-shadow: 0 0 0 1px #fff9;
    color: var(--w7-el-c);
    scrollbar-color: var(--efs-win7-scrollbar, #7f9db9) transparent;
  }

  .window-shell.basic7-theme {
    --w7-font: 9pt 'Segoe UI', 'SegoeUI', 'Noto Sans', sans-serif;
    --w7-w-space: 6px;
    --w7-w-bd: var(--efs-win7-window-border, #000000b3);
    --w7-w-bdr: 6px;
    --w7-w-bg: var(--efs-win7-window-bg, #4580c4);
    --w7-w-grad:
      linear-gradient(
        180deg,
        color-mix(in srgb, white 80%, var(--w7-w-bg) 20%) 0%,
        color-mix(in srgb, white 62%, var(--w7-w-bg) 38%) 46%,
        color-mix(in srgb, black 10%, var(--w7-w-bg) 90%) 100%
      );
    border: 1px solid var(--w7-w-bd);
    border-radius: var(--w7-w-bdr);
    background: transparent;
    box-shadow: 2px 2px 10px 1px var(--w7-w-bd), inset 0 0 0 1px #fffa;
    color: var(--w7-el-c);
    font-family: var(--w7-font);
    overflow: visible;
  }

  .window-shell.basic7-theme::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    border-radius: var(--w7-w-bdr);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.24) 24%, transparent 34%),
      var(--w7-w-grad);
    background-color: var(--w7-w-bg);
    box-shadow: inset 0 0 0 1px #fffd;
  }

  .window-shell.basic7-theme::after {
    content: none;
    display: none;
  }

  .window-shell.basic7-theme .window-chrome.title-bar {
    min-height: 0;
    padding: var(--w7-w-space);
    padding-top: 0;
    border: 1px solid var(--w7-w-bd);
    border-bottom: 0;
    border-radius: var(--w7-w-bdr) var(--w7-w-bdr) 0 0;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.22) 22%, transparent 34%),
      var(--w7-w-grad);
    background-attachment: scroll;
    background-color: var(--w7-w-bg);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.94),
      inset 1px 0 0 rgba(255, 255, 255, 0.54),
      inset -1px 0 0 rgba(255, 255, 255, 0.54);
    overflow: visible;
  }

  .window-shell.basic7-theme .window-chrome::before,
  .window-shell.basic7-theme .window-chrome::after {
    display: none;
  }

  .window-shell.basic7-theme .window-tools {
    gap: 0.35rem;
    padding-top: calc(var(--w7-w-space) - 1px);
  }

  .window-shell.basic7-theme .window-tools .window-button {
    width: 23px;
    min-width: 23px;
    height: 23px;
    min-height: 23px;
    padding: 0;
    color: var(--w7-el-c);
    transform: none;
  }

  .window-shell.basic7-theme .window-tools .window-button::before,
  .window-shell.basic7-theme .window-tools .window-button::after {
    inset: 0;
  }

  .window-shell.basic7-theme .window-tools .window-button:hover,
  .window-shell.basic7-theme .window-tools .window-button:active,
  .window-shell.basic7-theme .window-tools .window-button.is-active {
    color: var(--w7-el-c);
    transform: none;
  }

  .window-shell.basic7-theme .window-tools .window-button:focus-visible {
    outline-offset: -4px;
  }

  .window-shell.basic7-theme .window-tools .window-button :global(.app-icon) {
    width: 0.78rem;
    height: 0.78rem;
  }

  .window-shell.basic7-theme .window-title.title-bar-text {
    padding-top: var(--w7-w-space);
    color: #000;
    font: var(--w7-font);
    font-weight: 400;
    letter-spacing: 0;
    line-height: 15px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.72);
  }

  .window-shell.basic7-theme .window-content.window-body {
    margin: var(--w7-w-space);
    margin-top: 0;
    border: 1px solid var(--w7-w-bd);
    background: var(--w7-surface);
    box-shadow: var(--efs-win7-body-shadow, 0 0 0 1px #fff9);
    color: var(--w7-el-c);
    scrollbar-color: var(--efs-win7-scrollbar, #7f9db9) transparent;
  }

  :global(:host(:not([theme='light']))) .window-shell.basic7-theme {
    --efs-win7-surface: #1c2229;
    --efs-win7-text: #e7edf8;
    --efs-win7-text-muted: #8591a2;
    --efs-win7-window-border: rgba(8, 12, 18, 0.82);
    --efs-win7-body-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
    --efs-win7-scrollbar: #5f7ea2;
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

  .window-shell.win7-theme .resize-handle {
    min-width: 0;
    min-height: 0;
    box-shadow: none;
  }

  .window-shell.basic7-theme .resize-handle {
    min-width: 0;
    min-height: 0;
    box-shadow: none;
  }

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
      --window-control-size-base: calc(1.86rem * var(--window-shell-scale));
      --window-aux-width: calc(1.96rem * var(--window-shell-scale));
      --window-system-width: calc(2.16rem * var(--window-shell-scale));
      --window-control-gap: calc(0.06rem * var(--window-shell-scale));
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
