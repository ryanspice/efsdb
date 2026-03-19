<script lang="ts">
  import type { ExplorerItem, ExplorerMode } from '../lib/types';

  type Props = {
    items: ExplorerItem[];
    selectedName: string | null;
    mode: ExplorerMode;
    scale: number;
    onNavToIndex: (idx: number) => void;
  };

  let { items, selectedName, mode, scale, onNavToIndex } = $props<Props>();

  let gap = 320;
  let depth = 250;

  let wheelLock = $state<number | null>(null);

  let isDragging = $state(false);
  let startX = $state(0);
  let startIdx = $state(0);

  function iconFor(item: ExplorerItem) {
    if (item.type === 'dir') return mode === 'raw' ? '🗂️' : '📁';
    if (item.kind === 'image') return '🖼️';
    if (item.kind === 'video') return '🎬';
    return '📄';
  }

  function selectedIndex() {
    const idx = items.findIndex((i) => i.name === selectedName);
    return idx < 0 ? 0 : idx;
  }

  function nav(dir: number) {
    if (!items.length) return;
    const curr = selectedIndex();
    const next = Math.max(0, Math.min(items.length - 1, curr + dir));
    onNavToIndex(next);
  }

  function onWheel(e: WheelEvent) {
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = window.setTimeout(() => (wheelLock = null), 30);
    nav(e.deltaY > 0 ? 1 : -1);
  }

  function onDown(e: MouseEvent) {
    if (!items.length) return;
    isDragging = true;
    startX = e.clientX;
    startIdx = selectedIndex();
    e.preventDefault();
  }

  function onMove(e: MouseEvent) {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    const step = -Math.round(delta / 50);
    const next = Math.max(0, Math.min(items.length - 1, startIdx + step));
    onNavToIndex(next);
  }

  function onUp() {
    isDragging = false;
  }

  function bindStage(node: HTMLDivElement) {
    const handleMouseDown = (event: MouseEvent) => onDown(event);
    const handleMouseMove = (event: MouseEvent) => onMove(event);
    const handleMouseUp = () => onUp();
    const handleMouseLeave = () => onUp();

    node.addEventListener('mousedown', handleMouseDown);
    node.addEventListener('mousemove', handleMouseMove);
    node.addEventListener('mouseup', handleMouseUp);
    node.addEventListener('mouseleave', handleMouseLeave);

    return {
      destroy() {
        node.removeEventListener('mousedown', handleMouseDown);
        node.removeEventListener('mousemove', handleMouseMove);
        node.removeEventListener('mouseup', handleMouseUp);
        node.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }

  const vis = $derived.by(() => {
    const center = selectedIndex();
    return items.map((item, i) => {
      const dist = i - center;
      const abs = Math.abs(dist);

      const s = scale;
      const gapS = gap * s;
      const depthS = depth * s;

      if (abs > 6) {
        return { item, i, hidden: true, style: '' };
      }

      let x = dist * gapS;
      let z = -abs * depthS;
      let rot = 0;
      const cardScale = Math.max(0.72, 1 - abs * 0.08) * s;

      if (dist === -1) x -= gapS * 0.4;
      if (dist === 1) x += gapS * 0.4;

      if (dist < 0) {
        x += gapS * 0.6;
        rot = 45;
      } else if (dist > 0) {
        x -= gapS * 0.6;
        rot = -45;
      } else {
        z += 100 * s;
      }

      const opacity = Math.max(0.3, 1 - abs * 0.15);
      const zIndex = 100 - abs;

      const maxReflect = 0.2;
      const reflectAlpha = Math.max(0, maxReflect - abs * 0.05);
      const reflect = `below 2px linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(255,255,255,${reflectAlpha}) 100%)`;

      const style =
        `transform: translateX(${x}px) translateZ(${z}px) rotateY(${rot}deg) scale(${cardScale});` +
        `opacity:${opacity}; z-index:${zIndex};` +
        `-webkit-box-reflect:${reflect};`;

      return { item, i, hidden: false, style };
    });
  });
</script>

<div class="coverPane" onwheel={onWheel}>
  <div class="coverHeader">
    <button class="navBtn" type="button" onclick={() => nav(-1)} aria-label="Previous">‹</button>
    <div class="title">Coverflow</div>
    <button class="navBtn" type="button" onclick={() => nav(1)} aria-label="Next">›</button>
  </div>

  <div
    class="stage"
    role="group"
    aria-label="Coverflow stage"
    use:bindStage
  >
    {#if !items.length}
      <div class="empty">
        <div class="sym">∅</div>
        <div class="lbl">Empty</div>
      </div>
    {:else}
      {#each vis as v (v.item.rawPath ?? v.item.name)}
        <button
          type="button"
          class="card"
          class:active={v.item.name === selectedName}
          style={v.hidden ? 'display:none;' : v.style}
          onclick={() => onNavToIndex(v.i)}
        >
          <div class="ico">{iconFor(v.item)}</div>
          <div class="name" title={v.item.name}>{v.item.name}</div>
          <div class="size">{typeof v.item.size === 'number' ? v.item.size : ''}</div>
        </button>
      {/each}
    {/if}
  </div>
</div>

<style>
  .coverPane {
    border-bottom: 1px solid var(--border);
    background: var(--bg);
  }

  .coverHeader {
    display: grid;
    grid-template-columns: 34px 1fr 34px;
    align-items: center;
    padding: 8px 10px;
    color: var(--muted);
    font-size: 12px;
  }

  .navBtn {
    width: 34px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--panel);
    color: var(--text);
    cursor: pointer;
  }

  .title {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 800;
    opacity: 0.8;
  }

  .stage {
    height: 100%;
    min-height: 220px;
    perspective: 1100px;
    display: grid;
    place-items: center;
    overflow: hidden;
    user-select: none;
    position: relative;
    padding: 10px;
    touch-action: pan-y;
  }

  .card {
    position: absolute;
    width: 220px;
    height: 170px;
    border-radius: 18px;
    border: 1px solid var(--border);
    background: var(--panel);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transform-style: preserve-3d;
    cursor: pointer;
    transition: transform 120ms ease, opacity 120ms ease;
  }

  .card.active {
    border-color: color-mix(in oklab, var(--primary), black 20%);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  }

  .ico {
    font-size: 40px;
    opacity: 0.9;
  }

  .name {
    width: 90%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: var(--muted);
    font-weight: 700;
  }

  .size {
    font-size: 11px;
    color: var(--muted);
    opacity: 0.8;
  }

  .empty {
    text-align: center;
    color: var(--muted);
    opacity: 0.6;
  }
  .sym {
    font-size: 56px;
    margin-bottom: 4px;
  }
  .lbl {
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
</style>
