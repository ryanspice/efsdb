export type DragAxis = 'x' | 'y';

export function dragHandle(
  node: HTMLElement,
  opts: { axis: DragAxis; onDelta: (delta: number) => void; onDone?: () => void }
) {
  let active = false;
  let last = 0;

  function onMove(e: MouseEvent) {
    if (!active) return;
    const curr = opts.axis === 'y' ? e.clientY : e.clientX;
    opts.onDelta(curr - last);
    last = curr;
    e.preventDefault();
  }

  function onUp() {
    if (!active) return;
    active = false;
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', onUp);
    opts.onDone?.();
  }

  function onDown(e: MouseEvent) {
    active = true;
    last = opts.axis === 'y' ? e.clientY : e.clientX;
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    e.preventDefault();
  }

  node.addEventListener('mousedown', onDown);

  return {
    destroy() {
      node.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    }
  };
}
