<svelte:options
  customElement={{
    tag: 'efsdb-notifications',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { onMount } from 'svelte';
  import WindowShell, { type WindowState } from '../../../ui/components/shell/WindowShell.svelte';
  import {
    activityStore,
    ensureSeededNotifications,
    ensureNotificationMonitor,
    notificationStore,
    type NotificationCategory
  } from './lib/notificationStore';

  type NotificationTriggerSource = 'footer' | 'nav';

  const PANEL_WIDTH = 420;
  const PANEL_HEIGHT = 540;
  const PANEL_OFFSET = 16;
  const PANEL_GUTTER = 12;
  const PANEL_Z_INDEX = 12050;

  let isOpen = $state(false);
  let isPinned = $state(false);
  let windowState = $state<WindowState>('normal');
  let activeCategory = $state<NotificationCategory>('general');
  let anchorSource = $state<NotificationTriggerSource>('footer');
  let anchor = $state<HTMLElement | null>(null);
  let windowX = $state(PANEL_GUTTER);
  let windowY = $state(PANEL_GUTTER);
  let windowWidth = $state(PANEL_WIDTH);
  let windowHeight = $state(PANEL_HEIGHT);
  let popoverRoot = $state<HTMLDivElement | null>(null);

  const categories: { id: NotificationCategory; label: string }[] = [
    { id: 'general', label: 'General' },
    { id: 'system', label: 'System' },
    { id: 'alerts', label: 'Alerts' }
  ];

  const filteredNotifications = $derived.by(() => {
    return $notificationStore.filter(n => n.category === activeCategory);
  });

  const alertCount = $derived.by(() => {
    return $notificationStore
      .filter(n => n.category === 'alerts' && n.status === 'error')
      .reduce((acc, curr) => acc + (curr.count || 1), 0);
  });

  const activityLabel = $derived.by(() => {
    switch ($activityStore.state) {
      case 'processing':
        return $activityStore.pendingCount === 1 ? 'Processing' : `Processing ${$activityStore.pendingCount}`;
      case 'long':
        return $activityStore.slowCount === 1 ? 'Long response' : `Long responses ${$activityStore.slowCount}`;
      case 'error':
        return 'Failure detected';
      default:
        return 'Listening';
    }
  });

  const activityDescription = $derived.by(() => {
    switch ($activityStore.state) {
      case 'processing':
        return $activityStore.pendingCount === 1
          ? 'One request is currently running.'
          : `${$activityStore.pendingCount} requests are currently running.`;
      case 'long':
        return $activityStore.slowCount === 1
          ? 'A request is taking longer than expected.'
          : `${$activityStore.slowCount} requests are taking longer than expected.`;
      case 'error':
        return $activityStore.lastError ?? 'A recent request failed.';
      default:
        return 'The footer orb will pulse green until new activity starts.';
    }
  });

  function resolveAnchor(source: NotificationTriggerSource = anchorSource): void {
    const preferredIds =
      source === 'nav'
        ? ['nav-notification-trigger', 'footer-notification-trigger']
        : ['footer-notification-trigger', 'nav-notification-trigger'];

    for (const id of preferredIds) {
      const trigger = document.getElementById(id);
      if (trigger instanceof HTMLElement) {
        anchor = trigger;
        anchorSource = id === 'nav-notification-trigger' ? 'nav' : 'footer';
        return;
      }
    }

    anchor = null;
  }

  function updateWindowPosition(): void {
    if (!anchor || typeof window === 'undefined') {
      return;
    }

    const anchorRect = anchor.getBoundingClientRect();
    const nextWidth = Math.min(PANEL_WIDTH, Math.max(320, window.innerWidth - PANEL_GUTTER * 2));
    const nextHeight = Math.min(PANEL_HEIGHT, Math.max(320, window.innerHeight - PANEL_GUTTER * 2));

    let nextX = anchorRect.right - nextWidth;
    let nextY =
      anchorSource === 'nav'
        ? anchorRect.bottom + PANEL_OFFSET
        : anchorRect.top - nextHeight - PANEL_OFFSET;

    nextX = Math.min(
      Math.max(PANEL_GUTTER, nextX),
      Math.max(PANEL_GUTTER, window.innerWidth - nextWidth - PANEL_GUTTER)
    );
    nextY = Math.min(
      Math.max(PANEL_GUTTER, nextY),
      Math.max(PANEL_GUTTER, window.innerHeight - nextHeight - PANEL_GUTTER)
    );

    windowWidth = nextWidth;
    windowHeight = nextHeight;
    windowX = Math.round(nextX);
    windowY = Math.round(nextY);
  }

  function readTriggerSource(event?: Event): NotificationTriggerSource | null {
    const source = (event as CustomEvent<{ source?: string }> | undefined)?.detail?.source;
    return source === 'nav' || source === 'footer' ? source : null;
  }

  function getPreferredCategory(): NotificationCategory {
    if (alertCount > 0) {
      return 'alerts';
    }

    if ($notificationStore.some(notification => notification.category === 'general')) {
      return 'general';
    }

    if ($notificationStore.some(notification => notification.category === 'system')) {
      return 'system';
    }

    if ($notificationStore.some(notification => notification.category === 'alerts')) {
      return 'alerts';
    }

    return 'general';
  }

  function handleToggle(event?: Event) {
    const requestedSource = readTriggerSource(event) ?? anchorSource;
    const previousSource = anchorSource;
    anchorSource = requestedSource;

    if (windowState === 'minimized') {
      windowState = 'normal';
    }

    if (isPinned) {
      if (!isOpen || activeCategory === 'general') {
        activeCategory = getPreferredCategory();
      }
      isOpen = true;
      return;
    }

    if (isOpen && previousSource === requestedSource) {
      handleClose();
      return;
    }

    resolveAnchor(requestedSource);
    updateWindowPosition();

    if (!isOpen || activeCategory === 'general') {
      activeCategory = getPreferredCategory();
    }

    isOpen = true;
  }

  function handleClose() {
    isOpen = false;
  }

  function handlePinToggle() {
    isPinned = !isPinned;
  }

  function handleDocumentPointerDown(event: PointerEvent): void {
    if (!isOpen || isPinned) {
      return;
    }

    const path = event.composedPath();
    if ((popoverRoot && path.includes(popoverRoot)) || (anchor && path.includes(anchor))) {
      return;
    }

    handleClose();
  }

  function syncNavBubble(): void {
    const bubble = document.getElementById('nav-notification-bubble');
    if (!(bubble instanceof HTMLElement)) {
      return;
    }

    if (alertCount > 0) {
      bubble.style.display = 'flex';
      bubble.textContent = alertCount > 99 ? '99+' : alertCount.toString();
      return;
    }

    bubble.style.display = 'none';
  }

  function syncFooterTrigger(): void {
    const footerTrigger = document.getElementById('footer-notification-trigger');
    if (!(footerTrigger instanceof HTMLElement)) {
      return;
    }

    footerTrigger.dataset.status = $activityStore.state;

    const label =
      $activityStore.state === 'error'
        ? `System activity failed: ${activityDescription}`
        : `System activity: ${activityDescription}`;

    footerTrigger.setAttribute('title', label);
    footerTrigger.setAttribute('aria-label', label);
  }

  onMount(() => {
    document.addEventListener('efsdb:notifications:toggle', handleToggle as EventListener);
    document.addEventListener('pointerdown', handleDocumentPointerDown, true);

    ensureNotificationMonitor();
    ensureSeededNotifications();
    resolveAnchor(anchorSource);
    updateWindowPosition();
    syncNavBubble();
    syncFooterTrigger();

    const interval = setInterval(() => {
      syncNavBubble();
      syncFooterTrigger();
    }, 1000);

    return () => {
      document.removeEventListener('efsdb:notifications:toggle', handleToggle as EventListener);
      document.removeEventListener('pointerdown', handleDocumentPointerDown, true);
      clearInterval(interval);
    };
  });

  $effect(() => {
    alertCount;
    $activityStore.state;
    $activityStore.pendingCount;
    $activityStore.slowCount;
    $activityStore.lastError;
    syncNavBubble();
    syncFooterTrigger();
  });
</script>

{#if isOpen}
  <div bind:this={popoverRoot} class="notifications-window">
    <WindowShell
      title="System Activity"
      bind:state={windowState}
      bind:x={windowX}
      bind:y={windowY}
      bind:width={windowWidth}
      bind:height={windowHeight}
      chromeStyle="solid"
      buttonLayout="windows-11"
      alignment="left"
      chromePadding={6}
      borderRadius={16}
      snapRestoreOnRelease={false}
      shiftDragAction="pin"
      pinned={isPinned}
      zIndex={PANEL_Z_INDEX}
      onClose={handleClose}
      onPinToggle={handlePinToggle}
    >
      <div class="notifications-panel" role="dialog" aria-label="System activity">
        <header class="panel-status-row">
          <div class="panel-status-copy">
            <span class="panel-eyebrow">{anchorSource === 'nav' ? 'Inbox launch' : 'Footer activity'}</span>
            <p class="panel-summary">{activityDescription}</p>
          </div>

          <span class="activity-pill" data-state={$activityStore.state}>{activityLabel}</span>
        </header>

        <div class="chat-tabs">
          {#each categories as cat (cat.id)}
            <button
              type="button"
              class="chat-tab"
              class:active={activeCategory === cat.id}
              onclick={() => (activeCategory = cat.id)}
            >
              {cat.label}
              {#if cat.id === 'alerts' && alertCount > 0}
                <span class="tab-bubble">{alertCount}</span>
              {/if}
            </button>
          {/each}
        </div>

        <div class="notifications-scroll">
          {#if filteredNotifications.length === 0}
            <div class="empty-state">
              No recent activity in {categories.find(c => c.id === activeCategory)?.label}. The footer orb stays green
              when idle, turns yellow while requests run, orange when they drag, and red after failures.
            </div>
          {:else}
            <div class="notifications-list">
              {#each filteredNotifications as n (n.id)}
                <div class="notification-item" class:completed={n.status === 'completed'}>
                  <div class="notification-header">
                    <span class="status-indicator {n.status}"></span>
                    <span class="title">
                      {n.title}
                      {#if n.count}
                        <span class="inline-bubble">{n.count}</span>
                      {/if}
                    </span>
                    <span class="time">
                      {new Date(n.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div class="notification-body">
                    <div class="details">{n.details}</div>
                    <div class="meta">
                      <span>{n.initiator}</span>
                      {#if n.durationMs}
                        <span>• {(n.durationMs / 1000).toFixed(1)}s</span>
                      {/if}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </WindowShell>
  </div>
{/if}

<style>
  :host {
    position: relative;
    z-index: 12050;
    isolation: isolate;
  }

  .notifications-window {
    position: fixed;
    inset: 0;
    z-index: 12050;
    pointer-events: none;
    isolation: isolate;
  }

  .notifications-window :global(.window-shell) {
    pointer-events: auto;
    --window-panel: var(--shell-panel-solid, #ffffff);
    --window-surface: var(--shell-panel-solid-subtle, #f8fafc);
    --window-border: var(--shell-border, #e2e8f0);
    --window-control-size: 1.85rem;
    --window-aux-width: 1.92rem;
    --window-system-width: 2rem;
    --window-control-gap: 0.08rem;
    --window-control-radius: 9px;
  }

  .notifications-window :global(.window-chrome) {
    min-height: 2.25rem;
    padding-block: 0.22rem;
    padding-inline: 0.45rem 0.4rem;
    gap: 0.45rem;
  }

  .notifications-window :global(.window-tools) {
    gap: 0.1rem;
  }

  .notifications-window :global(.window-tools .window-button:not(:first-child)) {
    display: none;
  }

  .notifications-window :global(.system-controls .window-button:not(.close-button)) {
    display: none;
  }

  .notifications-window :global(.window-title) {
    font: var(--efs-font-label, 600 12px/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    letter-spacing: 0.04em;
  }

  .notifications-panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    overflow: hidden;
    background: var(--shell-panel-solid, #ffffff);
    color: var(--shell-text, #0f172a);
    font-family: ui-sans-serif, system-ui, sans-serif;
  }

  .panel-status-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.95rem 1rem 0.85rem;
    border-bottom: 1px solid color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 12%);
    background:
      radial-gradient(circle at top right, rgba(34, 197, 94, 0.08), transparent 38%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 76%),
      var(--shell-panel-solid-subtle, #f8fafc);
  }

  .panel-status-copy {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    min-width: 0;
  }

  .panel-eyebrow {
    color: var(--shell-muted, #64748b);
    font: var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .panel-title {
    margin: 0;
    color: var(--shell-text-strong, #020617);
    font: var(--efs-font-title-sm, 700 1rem/1.2 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
  }

  .panel-summary {
    margin: 0;
    color: var(--shell-text, #0f172a);
    font: var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
  }

  .activity-pill {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: 0 0.75rem;
    border: 1px solid color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 8%);
    border-radius: 999px;
    font: var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .activity-pill[data-state='idle'] {
    border-color: color-mix(in srgb, #22c55e, transparent 62%);
    background: color-mix(in srgb, #22c55e, transparent 88%);
    color: #15803d;
  }

  .activity-pill[data-state='processing'] {
    border-color: color-mix(in srgb, #eab308, transparent 54%);
    background: color-mix(in srgb, #eab308, transparent 86%);
    color: #a16207;
  }

  .activity-pill[data-state='long'] {
    border-color: color-mix(in srgb, #f97316, transparent 50%);
    background: color-mix(in srgb, #f97316, transparent 84%);
    color: #c2410c;
  }

  .activity-pill[data-state='error'] {
    border-color: color-mix(in srgb, #ef4444, transparent 48%);
    background: color-mix(in srgb, #ef4444, transparent 84%);
    color: #b91c1c;
    flex-shrink: 0;
  }

  .chat-tabs {
    display: flex;
    background: var(--shell-panel-solid-muted, #eef3f8);
    border-bottom: 1px solid color-mix(in srgb, var(--shell-border, #e2e8f0), transparent 12%);
    padding: 0 0.75rem;
    gap: 0.25rem;
    flex-shrink: 0;
  }

  .chat-tab {
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--shell-muted, #64748b);
    font: var(--efs-font-label, 600 11px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .chat-tab:hover {
    color: var(--shell-text, #0f172a);
  }

  .chat-tab.active {
    color: var(--shell-text-strong, #020617);
    border-bottom-color: var(--accent, #007acc);
  }

  .tab-bubble {
    background: #ef4444;
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 99px;
    line-height: 1;
  }

  .inline-bubble {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ef4444;
    color: white;
    font-size: 10px;
    font-weight: 700;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-left: 0.5rem;
  }

  .notifications-scroll {
    flex: 1;
    overflow-y: auto;
    background: var(--shell-panel-solid-subtle, #f8fafc);
  }

  .empty-state {
    padding: 2rem;
    text-align: center;
    color: var(--shell-muted, #64748b);
    font: var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
  }

  .notifications-list {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: var(--shell-border, #e2e8f0);
  }

  .notification-item {
    background: var(--shell-panel-solid, #ffffff);
    padding: 0.75rem 1rem;
    transition: background-color 0.2s;
  }

  .notification-item:hover {
    background: var(--shell-panel-solid-subtle, #f8fafc);
  }

  .notification-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
  }

  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .status-indicator.info { background: #8b5cf6; }
  .status-indicator.processing { background: #eab308; animation: pulse 1.8s infinite; }
  .status-indicator.queued { background: #94a3b8; }
  .status-indicator.completed { background: #22c55e; }
  .status-indicator.error { background: #ef4444; }

  .title {
    font-weight: 500;
    font: var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    color: var(--shell-text-strong, #020617);
    flex: 1;
    display: flex;
    align-items: center;
  }

  .time {
    font: var(--efs-font-body-xs, 12px/1.55 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    color: var(--shell-muted, #64748b);
  }

  .notification-body {
    padding-left: 1rem;
  }

  .details {
    font: var(--efs-font-body-sm, 13px/1.6 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    color: var(--shell-text, #0f172a);
    margin-bottom: 0.25rem;
    line-height: 1.4;
  }

  .meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: var(--efs-font-body-xs, 12px/1.55 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    color: var(--shell-muted, #64748b);
    font-family: ui-monospace, monospace;
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  @media (max-width: 47.99rem) {
    .panel-status-row {
      flex-direction: column;
    }

    .activity-pill {
      align-self: flex-start;
    }
  }
</style>
