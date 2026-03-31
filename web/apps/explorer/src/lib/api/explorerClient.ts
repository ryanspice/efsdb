import type { AuthResponse } from '@contracts/auth';
import { authorizedFetch, refreshAccessToken } from '@utils/bootstrap/authBridge';
import type { DetailsResponse, ExplorerMode, ListResponse, SiteRuntimeResponse, TicketResponse } from '../types';

async function mustJson<T>(res: Response): Promise<T> {
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(`Expected JSON, got: ${contentType || 'unknown'}`);
  }

  return (await res.json()) as T;
}

async function describeError(res: Response): Promise<string> {
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const payload = await res.json().catch(() => null);
    const message = payload?.error?.message;
    if (typeof message === 'string' && message.trim() !== '') {
      return `HTTP ${res.status}: ${message}`;
    }
  }

  return `HTTP ${res.status}`;
}

export class DataClient {
  private listCache = new Map<string, ListResponse>();
  private detailsCache = new Map<string, DetailsResponse>();
  private listRequests = new Map<string, Promise<ListResponse>>();
  private detailsRequests = new Map<string, Promise<DetailsResponse>>();
  private ticketRequests = new Map<string, Promise<TicketResponse>>();
  private ticketCache = new Map<string, { value: TicketResponse; expiresAt: number }>();
  private authBase = '/_efsdb/api/auth';

  constructor(private apiBase = '/_efsdb/api/explorer') {}

  private clearCaches(): void {
    this.listCache.clear();
    this.detailsCache.clear();
    this.listRequests.clear();
    this.detailsRequests.clear();
    this.ticketRequests.clear();
    this.ticketCache.clear();
  }

  setApiBase(apiBase: string): void {
    this.apiBase = apiBase.replace(/\/$/, '');
    this.clearCaches();
  }

  setAuthBase(authBase: string): void {
    this.authBase = authBase.replace(/\/$/, '');
  }

  async refreshAccessToken(): Promise<AuthResponse | null> {
    return refreshAccessToken();
  }

  async whoAmI(): Promise<Record<string, unknown> | null> {
    const res = await authorizedFetch(`${this.authBase}/whoami`);
    if (!res.ok) {
      return null;
    }

    return mustJson<Record<string, unknown>>(res);
  }

  async list(
    path: string,
    mode: ExplorerMode,
    signal?: AbortSignal,
    options: { force?: boolean } = {}
  ): Promise<ListResponse> {
    const key = `${mode}:${path}`;
    const cached = !options.force ? this.listCache.get(key) : null;
    if (cached !== undefined && cached !== null) {
      return cached;
    }

    const inFlight = !options.force ? this.listRequests.get(key) : null;
    if (inFlight) {
      return inFlight;
    }

    const request = (async () => {
      const url = `${this.apiBase}/list?path=${encodeURIComponent(path)}&mode=${encodeURIComponent(mode)}`;
      const res = await authorizedFetch(url, { signal });
      if (!res.ok) {
        throw new Error(await describeError(res));
      }

      const payload = await mustJson<ListResponse>(res);
      this.listCache.set(key, payload);
      return payload;
    })();

    this.listRequests.set(key, request);
    try {
      return await request;
    } finally {
      if (this.listRequests.get(key) === request) {
        this.listRequests.delete(key);
      }
    }
  }

  async details(
    path: string,
    mode: ExplorerMode,
    signal?: AbortSignal,
    options: { force?: boolean } = {}
  ): Promise<DetailsResponse> {
    const key = `${mode}:${path}`;
    const cached = !options.force ? this.detailsCache.get(key) : null;
    if (cached !== undefined && cached !== null) {
      return cached;
    }

    const inFlight = !options.force ? this.detailsRequests.get(key) : null;
    if (inFlight) {
      return inFlight;
    }

    const request = (async () => {
      const url = `${this.apiBase}/details?path=${encodeURIComponent(path)}&mode=${encodeURIComponent(mode)}`;
      const res = await authorizedFetch(url, { signal });
      if (!res.ok) {
        throw new Error(await describeError(res));
      }

      const payload = await mustJson<DetailsResponse>(res);
      this.detailsCache.set(key, payload);
      return payload;
    })();

    this.detailsRequests.set(key, request);
    try {
      return await request;
    } finally {
      if (this.detailsRequests.get(key) === request) {
        this.detailsRequests.delete(key);
      }
    }
  }

  async prefetchDetails(path: string, mode: ExplorerMode): Promise<void> {
    const key = `${mode}:${path}`;
    if (this.detailsCache.has(key) || this.detailsRequests.has(key)) {
      return;
    }

    void this.details(path, mode).catch(() => {
      // Ignore speculative request failures.
    });
  }

  async getDownloadTicket(
    path: string,
    mode: ExplorerMode,
    signal?: AbortSignal,
    options: { force?: boolean } = {}
  ): Promise<TicketResponse> {
    const key = `${mode}:${path}`;
    const cached = !options.force ? this.ticketCache.get(key) : null;
    if (cached && cached.expiresAt > Date.now()) {
      return cached.value;
    }

    const inFlight = !options.force ? this.ticketRequests.get(key) : null;
    if (inFlight) {
      return inFlight;
    }

    const request = (async () => {
      const url = `${this.apiBase}/ticket?path=${encodeURIComponent(path)}&mode=${encodeURIComponent(mode)}`;
      const res = await authorizedFetch(url, { signal });
      if (!res.ok) {
        throw new Error(await describeError(res));
      }

      const payload = await mustJson<TicketResponse>(res);
      const expiresAt = Date.now() + Math.max(0, payload.expiresIn - 5) * 1000;
      this.ticketCache.set(key, { value: payload, expiresAt });
      return payload;
    })();

    this.ticketRequests.set(key, request);
    try {
      return await request;
    } finally {
      if (this.ticketRequests.get(key) === request) {
        this.ticketRequests.delete(key);
      }
    }
  }

  async prefetchDownloadTicket(path: string, mode: ExplorerMode): Promise<void> {
    const key = `${mode}:${path}`;
    const cached = this.ticketCache.get(key);
    if ((cached && cached.expiresAt > Date.now()) || this.ticketRequests.has(key)) {
      return;
    }

    void this.getDownloadTicket(path, mode).catch(() => {
      // Ignore speculative request failures.
    });
  }

  async getDownloadUrl(path: string, mode: ExplorerMode, signal?: AbortSignal): Promise<string> {
    const ticket = await this.getDownloadTicket(path, mode, signal);
    return ticket.url;
  }

  async downloadBlob(path: string, mode: ExplorerMode, signal?: AbortSignal): Promise<Blob> {
    const url = await this.getDownloadUrl(path, mode, signal);
    const res = await fetch(url, { credentials: 'same-origin', signal });
    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    return res.blob();
  }

  async downloadText(path: string, mode: ExplorerMode, signal?: AbortSignal): Promise<string> {
    const blob = await this.downloadBlob(path, mode, signal);
    return blob.text();
  }

  async saveText(
    path: string,
    mode: ExplorerMode,
    content: string,
    mime?: string,
    signal?: AbortSignal
  ): Promise<DetailsResponse> {
    const res = await authorizedFetch(`${this.apiBase}/save`, {
      method: 'POST',
      signal,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        path,
        mode,
        content,
        mime
      })
    });

    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    const details = await mustJson<DetailsResponse>(res);
    this.detailsCache.set(`${mode}:${path}`, details);
    return details;
  }

  async delete(path: string, mode: ExplorerMode, confirmPassphrase: string, signal?: AbortSignal): Promise<void> {
    const res = await authorizedFetch(`${this.apiBase}/delete`, {
      method: 'POST',
      signal,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ path, mode, confirmPassphrase, confirmKey: confirmPassphrase })
    });

    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    this.clearCaches();
  }

  async rename(path: string, newPath: string, mode: ExplorerMode, signal?: AbortSignal): Promise<DetailsResponse> {
    const res = await authorizedFetch(`${this.apiBase}/rename`, {
      method: 'POST',
      signal,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ path, newPath, mode })
    });

    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    this.clearCaches();
    return mustJson<DetailsResponse>(res);
  }

  async duplicate(path: string, newPath: string, mode: ExplorerMode, signal?: AbortSignal): Promise<DetailsResponse> {
    const res = await authorizedFetch(`${this.apiBase}/duplicate`, {
      method: 'POST',
      signal,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ path, newPath, mode })
    });

    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    this.clearCaches();
    return mustJson<DetailsResponse>(res);
  }

  async putText(
    relPath: string,
    content: string,
    mime?: string,
    signal?: AbortSignal
  ): Promise<{ created: boolean; details: DetailsResponse }> {
    const res = await authorizedFetch(`${this.apiBase}/put`, {
      method: 'PUT',
      signal,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        relPath,
        content,
        mime
      })
    });

    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    this.clearCaches();
    return mustJson<{ created: boolean; details: DetailsResponse }>(res);
  }

  async uploadFile(
    relPath: string,
    file: File,
    signal?: AbortSignal
  ): Promise<{ created: boolean; details: DetailsResponse }> {
    const formData = new FormData();
    formData.append('relPath', relPath);
    formData.append('file', file);

    const res = await authorizedFetch(`${this.apiBase}/upload`, {
      method: 'POST',
      signal,
      body: formData
    });

    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    this.clearCaches();
    return mustJson<{ created: boolean; details: DetailsResponse }>(res);
  }

  async getSiteRuntime(path: string, mode: ExplorerMode, signal?: AbortSignal): Promise<SiteRuntimeResponse> {
    const key = `${mode}:${path}`;
    const url = `${this.apiBase}/site-runtime?path=${encodeURIComponent(path)}&mode=${encodeURIComponent(mode)}`;
    const res = await authorizedFetch(url, { signal });
    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    return mustJson<SiteRuntimeResponse>(res);
  }
}
