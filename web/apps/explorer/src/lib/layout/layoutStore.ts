import type { ExplorerLayout } from '../types';

const KEY = 'efsdb_explorer_layout';

export function loadLayout(): ExplorerLayout {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) throw new Error('nope');
    const parsed = JSON.parse(raw) as Partial<ExplorerLayout>;
    return {
      coverHeight: clampNum(parsed.coverHeight ?? 320, 150, 600),
      previewWidth: clampNum(parsed.previewWidth ?? 350, 200, 560),
      scale: clampNum(parsed.scale ?? 1.0, 0.6, 1.6)
    };
  } catch {
    return { coverHeight: 320, previewWidth: 350, scale: 1.0 };
  }
}

export function saveLayout(layout: ExplorerLayout) {
  localStorage.setItem(KEY, JSON.stringify(layout));
}

function clampNum(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}
