import { authorizedFetch, refreshAccessToken } from '@utils/bootstrap/authBridge';
import type { DetailsResponse, ExplorerMode, ListResponse, TicketResponse } from '../types';

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
  private listCache = new Map<string, Promise<ListResponse>>();
  private detailsCache = new Map<string, Promise<DetailsResponse>>();
  private authBase = '/api/auth';

  constructor(private apiBase = '/api/explorer') {}

  setApiBase(apiBase: string): void {
    this.apiBase = apiBase.replace(/\/$/, '');
    this.listCache.clear();
    this.detailsCache.clear();
  }

  setAuthBase(authBase: string): void {
    this.authBase = authBase.replace(/\/$/, '');
  }

  async refreshAccessToken(): Promise<boolean> {
    return refreshAccessToken();
  }

  async whoAmI(): Promise<Record<string, unknown> | null> {
    const res = await authorizedFetch(`${this.authBase}/whoami`);
    if (!res.ok) {
      return null;
    }

    return mustJson<Record<string, unknown>>(res);
  }

  async list(path: string, mode: ExplorerMode, signal?: AbortSignal): Promise<ListResponse> {
    const key = `${mode}:${path}`;
    const cached = this.listCache.get(key);
    if (cached) {
      return cached;
    }

    const url = `${this.apiBase}/list?path=${encodeURIComponent(path)}&mode=${encodeURIComponent(mode)}`;
    const pending = authorizedFetch(url, { signal }).then(async (res) => {
      if (!res.ok) {
        throw new Error(await describeError(res));
      }

      return mustJson<ListResponse>(res);
    });

    this.listCache.set(key, pending);

    try {
      return await pending;
    } catch (error) {
      this.listCache.delete(key);
      throw error;
    }
  }

  async details(path: string, mode: ExplorerMode, signal?: AbortSignal): Promise<DetailsResponse> {
    const key = `${mode}:${path}`;
    const cached = this.detailsCache.get(key);
    if (cached) {
      return cached;
    }

    const url = `${this.apiBase}/details?path=${encodeURIComponent(path)}&mode=${encodeURIComponent(mode)}`;
    const pending = authorizedFetch(url, { signal }).then(async (res) => {
      if (!res.ok) {
        throw new Error(await describeError(res));
      }

      return mustJson<DetailsResponse>(res);
    });

    this.detailsCache.set(key, pending);

    try {
      return await pending;
    } catch (error) {
      this.detailsCache.delete(key);
      throw error;
    }
  }

  async getDownloadTicket(path: string, mode: ExplorerMode): Promise<TicketResponse> {
    const url = `${this.apiBase}/ticket?path=${encodeURIComponent(path)}&mode=${encodeURIComponent(mode)}`;
    const res = await authorizedFetch(url);
    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    return mustJson<TicketResponse>(res);
  }

  async getDownloadUrl(path: string, mode: ExplorerMode): Promise<string> {
    const ticket = await this.getDownloadTicket(path, mode);
    return ticket.url;
  }

  async downloadBlob(path: string, mode: ExplorerMode): Promise<Blob> {
    const url = await this.getDownloadUrl(path, mode);
    const res = await fetch(url, { credentials: 'same-origin' });
    if (!res.ok) {
      throw new Error(await describeError(res));
    }

    return res.blob();
  }

  async downloadText(path: string, mode: ExplorerMode): Promise<string> {
    const blob = await this.downloadBlob(path, mode);
    return blob.text();
  }
}
