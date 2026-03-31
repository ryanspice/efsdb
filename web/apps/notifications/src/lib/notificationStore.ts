import { writable } from 'svelte/store';

export type NotificationStatus = 'queued' | 'processing' | 'completed' | 'error' | 'info';
export type NotificationCategory = 'general' | 'system' | 'alerts';
export type ActivityState = 'idle' | 'processing' | 'long' | 'error';

export interface Notification {
  id: string;
  title: string;
  details: string;
  status: NotificationStatus;
  category: NotificationCategory;
  initiator: string;
  timestamp: number;
  durationMs?: number;
  count?: number; // Added to support bubble counts for discrepancies
}

export interface ActivitySnapshot {
  state: ActivityState;
  pendingCount: number;
  slowCount: number;
  lastError: string | null;
}

type TrackedRequest = {
  notificationId: string;
  method: string;
  path: string;
  startedAt: number;
  slow: boolean;
  slowTimer: ReturnType<typeof setTimeout> | null;
};

const LONG_REQUEST_MS = 3500;
const ERROR_LATCH_MS = 7000;
const MAX_NOTIFICATIONS = 60;

let seededNotificationsInstalled = false;

function pruneNotifications(notifications: Notification[]): Notification[] {
  return notifications
    .slice()
    .sort((left, right) => right.timestamp - left.timestamp)
    .slice(0, MAX_NOTIFICATIONS);
}

function createNotificationStore() {
  const { subscribe, set, update } = writable<Notification[]>([]);

  return {
    subscribe,
    add: (notification: Notification) => update(n => pruneNotifications([notification, ...n])),
    upsert: (notification: Notification) =>
      update(n => {
        const index = n.findIndex(item => item.id === notification.id);
        if (index === -1) {
          return pruneNotifications([notification, ...n]);
        }

        const next = [...n];
        next[index] = notification;
        return pruneNotifications(next);
      }),
    patch: (id: string, patch: Partial<Notification>) =>
      update(n =>
        n.map(item => (item.id === id ? { ...item, ...patch, id: item.id } : item))
      ),
    updateStatus: (id: string, status: NotificationStatus, durationMs?: number) => 
      update(n => n.map(item => item.id === id ? { ...item, status, durationMs: durationMs ?? item.durationMs } : item)),
    remove: (id: string) => update(n => n.filter(item => item.id !== id)),
    clear: () => set([])
  };
}

export const notificationStore = createNotificationStore();

function createActivityStore() {
  const { subscribe, set } = writable<ActivitySnapshot>({
    state: 'idle',
    pendingCount: 0,
    slowCount: 0,
    lastError: null
  });

  return {
    subscribe,
    set: (snapshot: ActivitySnapshot) => set(snapshot)
  };
}

export const activityStore = createActivityStore();

let requestMonitorInstalled = false;
let requestSequence = 0;
let errorExpiresAt = 0;
let lastError: string | null = null;
let errorResetTimer: ReturnType<typeof setTimeout> | null = null;

const activeRequests = new Map<number, TrackedRequest>();

function normalizeUrl(input: RequestInfo | URL): URL | null {
  try {
    if (input instanceof URL) {
      return input;
    }

    if (typeof input === 'string') {
      return new URL(input, window.location.origin);
    }

    if (input instanceof Request) {
      return new URL(input.url, window.location.origin);
    }
  } catch (error: unknown) {
    void error;
  }

  return null;
}

function getRequestMethod(input: RequestInfo | URL, init?: RequestInit): string {
  if (typeof init?.method === 'string' && init.method.trim() !== '') {
    return init.method.toUpperCase();
  }

  if (input instanceof Request && input.method.trim() !== '') {
    return input.method.toUpperCase();
  }

  return 'GET';
}

function describeRequestPath(url: URL | null): string {
  if (!url) {
    return 'Unknown request';
  }

  if (url.origin === window.location.origin) {
    return `${url.pathname}${url.search}`;
  }

  return url.toString();
}

function shouldTrackRequest(input: RequestInfo | URL): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const url = normalizeUrl(input);
  if (!url || url.origin !== window.location.origin) {
    return false;
  }

  if (url.pathname.includes('/_efsdb/api/auth/refresh')) {
    return false;
  }

  return url.pathname.startsWith('/_efsdb/') || url.pathname.startsWith('/api/');
}

function syncActivitySnapshot(): void {
  const slowCount = Array.from(activeRequests.values()).filter(request => request.slow).length;
  const now = Date.now();

  let state: ActivityState = 'idle';
  if (errorExpiresAt > now && lastError) {
    state = 'error';
  } else if (slowCount > 0) {
    state = 'long';
  } else if (activeRequests.size > 0) {
    state = 'processing';
  }

  activityStore.set({
    state,
    pendingCount: activeRequests.size,
    slowCount,
    lastError: state === 'error' ? lastError : null
  });
}

function latchError(message: string): void {
  lastError = message;
  errorExpiresAt = Date.now() + ERROR_LATCH_MS;

  if (errorResetTimer) {
    clearTimeout(errorResetTimer);
  }

  errorResetTimer = setTimeout(() => {
    if (Date.now() >= errorExpiresAt) {
      lastError = null;
      syncActivitySnapshot();
    }
  }, ERROR_LATCH_MS + 50);

  syncActivitySnapshot();
}

function beginTrackedRequest(input: RequestInfo | URL, init?: RequestInit): number {
  const requestId = ++requestSequence;
  const url = normalizeUrl(input);
  const path = describeRequestPath(url);
  const method = getRequestMethod(input, init);
  const startedAt = Date.now();
  const notificationId = `request-${requestId}`;

  const trackedRequest: TrackedRequest = {
    notificationId,
    method,
    path,
    startedAt,
    slow: false,
    slowTimer: null
  };

  trackedRequest.slowTimer = setTimeout(() => {
    const request = activeRequests.get(requestId);
    if (!request) {
      return;
    }

    request.slow = true;
    notificationStore.patch(request.notificationId, {
      details: `${request.path} is taking longer than expected.`,
      timestamp: Date.now()
    });
    syncActivitySnapshot();
  }, LONG_REQUEST_MS);

  activeRequests.set(requestId, trackedRequest);

  notificationStore.upsert({
    id: notificationId,
    title: method === 'GET' ? 'Loading data' : 'Running action',
    status: 'processing',
    category: 'system',
    initiator: method,
    details: path,
    timestamp: startedAt
  });

  syncActivitySnapshot();
  return requestId;
}

function raiseRequestAlert(
  request: TrackedRequest,
  title: string,
  details: string,
  durationMs: number,
  timestamp: number
): void {
  notificationStore.upsert({
    id: `${request.notificationId}-alert`,
    title,
    details,
    status: 'error',
    category: 'alerts',
    initiator: request.method,
    durationMs,
    timestamp
  });
}

function finalizeTrackedRequest(
  requestId: number,
  response?: Response,
  error?: unknown
): void {
  const request = activeRequests.get(requestId);
  if (!request) {
    return;
  }

  activeRequests.delete(requestId);

  if (request.slowTimer) {
    clearTimeout(request.slowTimer);
  }

  const finishedAt = Date.now();
  const durationMs = finishedAt - request.startedAt;

  if (error instanceof DOMException && error.name === 'AbortError') {
    notificationStore.patch(request.notificationId, {
      status: 'info',
      details: `${request.path} was cancelled.`,
      durationMs,
      timestamp: finishedAt
    });
    syncActivitySnapshot();
    return;
  }

  if (error) {
    const message = error instanceof Error ? error.message : 'Request failed';
    notificationStore.patch(request.notificationId, {
      status: 'error',
      details: `${request.path} failed: ${message}`,
      durationMs,
      timestamp: finishedAt
    });
    raiseRequestAlert(
      request,
      request.method === 'GET' ? 'System request failed' : 'System action failed',
      `${request.path} failed: ${message}`,
      durationMs,
      finishedAt
    );
    latchError(message);
    syncActivitySnapshot();
    return;
  }

  if (response && !response.ok) {
    const statusMessage = response.statusText ? `${response.status} ${response.statusText}` : `HTTP ${response.status}`;
    notificationStore.patch(request.notificationId, {
      status: 'error',
      details: `${request.path} failed: ${statusMessage}`,
      durationMs,
      timestamp: finishedAt
    });
    raiseRequestAlert(
      request,
      request.method === 'GET' ? 'System request failed' : 'System action failed',
      `${request.path} failed: ${statusMessage}`,
      durationMs,
      finishedAt
    );
    latchError(statusMessage);
    syncActivitySnapshot();
    return;
  }

  notificationStore.patch(request.notificationId, {
    status: 'completed',
    details: request.slow
      ? `${request.path} completed in ${(durationMs / 1000).toFixed(1)}s.`
      : `${request.path} completed.`,
    durationMs,
    timestamp: finishedAt
  });

  syncActivitySnapshot();
}

export function ensureNotificationMonitor(): void {
  if (requestMonitorInstalled || typeof window === 'undefined' || typeof window.fetch !== 'function') {
    return;
  }

  requestMonitorInstalled = true;

  const currentFetch = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    if (!shouldTrackRequest(input)) {
      return currentFetch(input, init);
    }

    const requestId = beginTrackedRequest(input, init);

    try {
      const response = await currentFetch(input, init);
      finalizeTrackedRequest(requestId, response);
      return response;
    } catch (error: unknown) {
      finalizeTrackedRequest(requestId, undefined, error);
      throw error;
    }
  };

  syncActivitySnapshot();
}

export function ensureSeededNotifications(): void {
  if (seededNotificationsInstalled || typeof window === 'undefined') {
    return;
  }

  seededNotificationsInstalled = true;

  const seededAt = Date.now();

  notificationStore.upsert({
    id: 'seed-inbox-init',
    title: 'Notifications initialized',
    details: 'System activity inbox is ready. The footer orb reflects live request state as work starts.',
    status: 'info',
    category: 'general',
    initiator: 'Init',
    timestamp: seededAt - 20_000
  });

  notificationStore.upsert({
    id: 'seed-production-published',
    title: 'Production published',
    details: 'Synced from staged and published to production on first launch.',
    status: 'completed',
    category: 'general',
    initiator: 'Deploy',
    timestamp: seededAt - 10_000
  });

  notificationStore.upsert({
    id: 'seed-system-log-ready',
    title: 'System log stream online',
    details: 'Fetches, actions, sync work, and publish steps will be written here as live activity.',
    status: 'info',
    category: 'system',
    initiator: 'Logger',
    timestamp: seededAt - 15_000
  });

  notificationStore.upsert({
    id: 'seed-alert-watch',
    title: 'Alerts standing by',
    details: 'Failures, sync drift, and publish issues will appear here when something needs attention.',
    status: 'info',
    category: 'alerts',
    initiator: 'Watch',
    timestamp: seededAt - 5_000
  });
}
