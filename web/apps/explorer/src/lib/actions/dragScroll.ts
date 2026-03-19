export function dragScroll(
  node: HTMLElement,
  opts: { axis?: 'x' | 'y'; threshold?: number } = {}
) {
  const axis = opts.axis ?? 'y';
  const threshold = opts.threshold ?? 6;

  let pointerId: number | null = null;
  let startCoord = 0;
  let startScroll = 0;
  let dragging = false;
  let suppressClicksUntil = 0;

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

    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerCancel);
    dragging = false;
    pointerId = null;
    node.classList.remove('drag-scrolling');
  }

  function onPointerDown(event: PointerEvent): void {
    if (event.button !== 0) {
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
  }

  function onPointerMove(event: PointerEvent): void {
    if (pointerId !== event.pointerId) {
      return;
    }

    const delta = readCoord(event) - startCoord;
    if (!dragging && Math.abs(delta) >= threshold) {
      dragging = true;
      node.classList.add('drag-scrolling');
    }

    if (!dragging) {
      return;
    }

    writeScroll(startScroll - delta);
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

  function onClickCapture(event: MouseEvent): void {
    if (Date.now() <= suppressClicksUntil) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  node.addEventListener('pointerdown', onPointerDown);
  node.addEventListener('click', onClickCapture, true);

  return {
    destroy() {
      finishDrag();
      node.removeEventListener('pointerdown', onPointerDown);
      node.removeEventListener('click', onClickCapture, true);
    }
  };
}
