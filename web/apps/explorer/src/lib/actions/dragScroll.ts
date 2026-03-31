export function dragScroll(
  node: HTMLElement,
  opts: { axis?: 'x' | 'y'; threshold?: number } = {}
) {
  const ownerDocument = node.ownerDocument;
  const axis = opts.axis ?? 'y';
  const threshold = opts.threshold ?? 6;

  let pointerId: number | null = null;
  let mouseActive = false;
  let startCoord = 0;
  let startScroll = 0;
  let dragging = false;
  let suppressClicksUntil = 0;

  function isDesktopScrubEnabled(): boolean {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return true;
    }

    return (
      window.matchMedia('(any-hover: hover)').matches
      || window.matchMedia('(any-pointer: fine)').matches
    );
  }

  function syncMode(): void {
    const enabled = isDesktopScrubEnabled();
    node.dataset.dragEnabled = enabled ? 'true' : 'false';
    node.style.touchAction = enabled ? 'none' : 'pan-y';
  }

  function readCoord(event: PointerEvent): number {
    return axis === 'y' ? event.clientY : event.clientX;
  }

  function readScroll(): number {
    return axis === 'y' ? node.scrollTop : node.scrollLeft;
  }

  function writeScroll(value: number): void {
    if (axis === 'y') {
      node.scrollTop = value;
      return;
    }

    node.scrollLeft = value;
  }

  function finishDrag(): void {
    if (dragging) {
      suppressClicksUntil = Date.now() + 120;
    }

    if (pointerId !== null) {
      try {
        if (node.hasPointerCapture(pointerId)) {
          node.releasePointerCapture(pointerId);
        }
      } catch {
        // Ignore pointer-capture cleanup failures.
      }
    }

    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerCancel);
    ownerDocument.removeEventListener('mousemove', onMouseMove);
    ownerDocument.removeEventListener('mouseup', onMouseUp);
    node.removeEventListener('mousemove', onMouseMove);
    node.removeEventListener('mouseup', onMouseUp);
    dragging = false;
    pointerId = null;
    mouseActive = false;
    node.classList.remove('drag-scrolling');
  }

  function readMouseCoord(event: MouseEvent): number {
    return axis === 'y' ? event.clientY : event.clientX;
  }

  function onPointerDown(event: PointerEvent): void {
    if (event.button !== 0) {
      return;
    }

    if (event.pointerType === 'mouse') {
      return;
    }

    if (event.pointerType === 'touch' && !isDesktopScrubEnabled()) {
      return;
    }

    if (event.target instanceof Element && event.target.closest('input, textarea, select, [data-no-drag-scroll]')) {
      return;
    }

    pointerId = event.pointerId;
    startCoord = readCoord(event);
    startScroll = readScroll();
    dragging = false;
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerCancel);
    event.preventDefault();
  }

  function onMouseDown(event: MouseEvent): void {
    if (event.button !== 0 || !isDesktopScrubEnabled()) {
      return;
    }

    if (event.target instanceof Element && event.target.closest('input, textarea, select, [data-no-drag-scroll]')) {
      return;
    }

    mouseActive = true;
    startCoord = readMouseCoord(event);
    startScroll = readScroll();
    dragging = false;
    ownerDocument.addEventListener('mousemove', onMouseMove, { passive: false });
    ownerDocument.addEventListener('mouseup', onMouseUp);
    node.addEventListener('mousemove', onMouseMove, { passive: false });
    node.addEventListener('mouseup', onMouseUp);
    event.preventDefault();
  }

  function onPointerMove(event: PointerEvent): void {
    if (pointerId !== event.pointerId) {
      return;
    }

    const delta = readCoord(event) - startCoord;
    if (!dragging && Math.abs(delta) >= threshold) {
      dragging = true;
      node.classList.add('drag-scrolling');
      try {
        node.setPointerCapture(event.pointerId);
      } catch {
        // Pointer capture is advisory here.
      }
    }

    if (!dragging) {
      return;
    }

    writeScroll(startScroll + delta);
    event.preventDefault();
  }

  function onPointerUp(event: PointerEvent): void {
    if (pointerId !== event.pointerId) {
      return;
    }

    finishDrag();
  }

  function onPointerCancel(event: PointerEvent): void {
    if (pointerId !== event.pointerId) {
      return;
    }

    finishDrag();
  }

  function onMouseMove(event: MouseEvent): void {
    if (!mouseActive) {
      return;
    }

    const delta = readMouseCoord(event) - startCoord;
    if (!dragging && Math.abs(delta) >= threshold) {
      dragging = true;
      node.classList.add('drag-scrolling');
    }

    if (!dragging) {
      return;
    }

    writeScroll(startScroll + delta);
    event.preventDefault();
  }

  function onMouseUp(): void {
    if (!mouseActive) {
      return;
    }

    finishDrag();
  }

  function onClickCapture(event: MouseEvent): void {
    if (Date.now() <= suppressClicksUntil) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  syncMode();
  const handleResize = () => syncMode();

  node.addEventListener('pointerdown', onPointerDown);
  node.addEventListener('mousedown', onMouseDown);
  node.addEventListener('click', onClickCapture, true);
  window.addEventListener('resize', handleResize);

  return {
    destroy() {
      finishDrag();
      node.removeEventListener('pointerdown', onPointerDown);
      node.removeEventListener('mousedown', onMouseDown);
      node.removeEventListener('click', onClickCapture, true);
      window.removeEventListener('resize', handleResize);
      delete node.dataset.dragEnabled;
      node.style.touchAction = '';
    }
  };
}
