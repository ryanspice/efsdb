<svelte:options
  customElement={{
    tag: 'efsdb-admin-dock',
    shadow: 'open'
  }}
/>

<script lang="ts">
  import { onMount } from 'svelte';
  import ToolDock from '@ui/components/shell/ToolDock.svelte';
  import {
    getWindowSettings,
    subscribeWindowSettings
  } from '@ui/components/shell/windowSettings';
  import type { AdminEdgeDockState, AdminWidgetId } from '../../admin/src/lib/types';
  import {
    ADMIN_DOCK_OPEN_REQUEST_STORAGE_KEY,
    ADMIN_EDGE_DOCK_STATE_STORAGE_KEY,
    ADMIN_EDGE_DOCK_WIDGETS_STORAGE_KEY,
    ADMIN_ROUTE_PATH,
    createAdminDockOpenRequest
  } from '../../admin/src/lib/globalDockBridge';
  import {
    adminWidgetIconMasks,
    adminWidgetIds,
    adminWidgetToolbarMeta
  } from '../../admin/src/lib/widgetCatalog';

  type DockItem = {
    id: AdminWidgetId;
    label: string;
    iconMask: string;
    active: boolean;
  };

  const host = $host();

  let items = $state<DockItem[]>([]);
  let position = $state<AdminEdgeDockState>({
    edge: 'right',
    ratio: 0.84
  });
  let windowSettings = $state(getWindowSettings());
  let topLevel = $state(false);
  let adminRoute = $state(false);

  let dockVisible = $derived(
    topLevel && !adminRoute && windowSettings.globalEdgeDock && items.length > 0
  );

  function isAdminWidgetId(value: unknown): value is AdminWidgetId {
    return typeof value === 'string' && adminWidgetIds.includes(value as AdminWidgetId);
  }

  function readPinnedItems(): DockItem[] {
    if (typeof localStorage === 'undefined') {
      return [];
    }

    try {
      const raw = localStorage.getItem(ADMIN_EDGE_DOCK_WIDGETS_STORAGE_KEY);
      if (!raw) {
        return [];
      }

      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) {
        return [];
      }

      const seen = new Set<AdminWidgetId>();
      return parsed.flatMap((entry) => {
        if (!isAdminWidgetId(entry) || seen.has(entry)) {
          return [];
        }

        seen.add(entry);
        return [
          {
            id: entry,
            label: adminWidgetToolbarMeta[entry].label,
            iconMask: adminWidgetIconMasks[entry],
            active: false
          }
        ];
      });
    } catch {
      return [];
    }
  }

  function readDockPosition(): AdminEdgeDockState {
    if (typeof localStorage === 'undefined') {
      return {
        edge: 'right',
        ratio: 0.84
      };
    }

    try {
      const raw = localStorage.getItem(ADMIN_EDGE_DOCK_STATE_STORAGE_KEY);
      if (!raw) {
        return {
          edge: 'right',
          ratio: 0.84
        };
      }

      const parsed = JSON.parse(raw) as Partial<AdminEdgeDockState>;
      const edge =
        parsed.edge === 'left' ||
        parsed.edge === 'right' ||
        parsed.edge === 'top' ||
        parsed.edge === 'bottom'
          ? parsed.edge
          : 'right';
      const ratio = Number(parsed.ratio);

      return {
        edge,
        ratio: Number.isFinite(ratio) ? Math.max(0.08, Math.min(0.92, ratio)) : 0.84
      };
    } catch {
      return {
        edge: 'right',
        ratio: 0.84
      };
    }
  }

  function syncDockState(): void {
    items = readPinnedItems();
    position = readDockPosition();
  }

  function openAdminForWidget(widgetId: AdminWidgetId): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(
        ADMIN_DOCK_OPEN_REQUEST_STORAGE_KEY,
        JSON.stringify(createAdminDockOpenRequest(widgetId, true))
      );
    }

    const adminUrl = new URL(ADMIN_ROUTE_PATH, window.location.origin);
    const adminWindow = window.open(adminUrl.toString(), 'efsdb-admin-global');
    adminWindow?.focus?.();
  }

  function removePinnedWidget(widgetId: AdminWidgetId): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const nextIds = items.filter((item) => item.id !== widgetId).map((item) => item.id);
    localStorage.setItem(ADMIN_EDGE_DOCK_WIDGETS_STORAGE_KEY, JSON.stringify(nextIds));
    items = readPinnedItems();
  }

  onMount(() => {
    try {
      topLevel = window.top === window;
    } catch {
      topLevel = false;
    }

    adminRoute = window.location.pathname.startsWith(ADMIN_ROUTE_PATH);
    host.setAttribute('theme', document.documentElement.dataset.theme ?? 'light');
    syncDockState();

    const removeWindowSettingsListener = subscribeWindowSettings((nextSettings) => {
      windowSettings = nextSettings;
    });

    const handleStorage = (event: StorageEvent) => {
      if (
        event.key === ADMIN_EDGE_DOCK_WIDGETS_STORAGE_KEY ||
        event.key === ADMIN_EDGE_DOCK_STATE_STORAGE_KEY
      ) {
        syncDockState();
      }
    };

    const handleThemeChange = (event: Event) => {
      const detail = (event as CustomEvent<{ theme?: string }>).detail;
      if (detail?.theme) {
        host.setAttribute('theme', detail.theme);
      }
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('efsdb-themechange', handleThemeChange as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('efsdb-themechange', handleThemeChange as EventListener);
      removeWindowSettingsListener();
    };
  });
</script>

{#if dockVisible}
  <ToolDock
    items={items}
    position={position}
    labelMode={windowSettings.dockLabelMode}
    onActivate={(itemId) => {
      if (isAdminWidgetId(itemId)) {
        openAdminForWidget(itemId);
      }
    }}
    onRemove={(itemId) => {
      if (isAdminWidgetId(itemId)) {
        removePinnedWidget(itemId);
      }
    }}
    onPositionChange={(nextPosition) => {
      position = nextPosition;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(ADMIN_EDGE_DOCK_STATE_STORAGE_KEY, JSON.stringify(nextPosition));
      }
    }}
  />
{/if}
