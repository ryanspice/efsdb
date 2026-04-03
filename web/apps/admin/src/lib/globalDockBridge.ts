import type { AdminWidgetId } from './types';

export const ADMIN_ROUTE_PATH = '/_efsdb/admin';
export const ADMIN_EDGE_DOCK_WIDGETS_STORAGE_KEY = 'efsdb:admin:global:edge-dock-widgets';
export const ADMIN_EDGE_DOCK_STATE_STORAGE_KEY = 'efsdb:admin:global:edge-dock-state';
export const ADMIN_DOCK_OPEN_REQUEST_STORAGE_KEY = 'efsdb:admin:global:edge-dock-open-request';

export type AdminDockOpenRequest = {
  widgetId: AdminWidgetId;
  pinned: boolean;
  issuedAt: number;
  source: 'global-dock';
};

export function createAdminDockOpenRequest(
  widgetId: AdminWidgetId,
  pinned = true
): AdminDockOpenRequest {
  return {
    widgetId,
    pinned,
    issuedAt: Date.now(),
    source: 'global-dock'
  };
}

export function parseAdminDockOpenRequest(raw: string | null): AdminDockOpenRequest | null {
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<AdminDockOpenRequest>;
    if (typeof parsed.widgetId !== 'string') {
      return null;
    }

    return {
      widgetId: parsed.widgetId as AdminWidgetId,
      pinned: parsed.pinned !== false,
      issuedAt: Number.isFinite(parsed.issuedAt) ? Number(parsed.issuedAt) : Date.now(),
      source: 'global-dock'
    };
  } catch {
    return null;
  }
}
