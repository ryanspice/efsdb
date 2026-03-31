import type { AuthResponse } from '@contracts/auth';

type WindowAuthBridge = Window & {
  getAccessToken?: () => string | null;
  setAccessToken?: (token: string | null) => void;
  refreshAccessToken?: () => Promise<AuthResponse | null>;
};

function authWindow(): WindowAuthBridge {
  return window as WindowAuthBridge;
}

export function getAccessToken(): string | null {
  return authWindow().getAccessToken?.() ?? null;
}

export function setAccessToken(token: string | null): void {
  authWindow().setAccessToken?.(token);
}

async function mustJson<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return {} as T;
  }

  return (await response.json()) as T;
}

export async function refreshAccessToken(): Promise<AuthResponse | null> {
  if (typeof authWindow().refreshAccessToken !== 'function') {
    return null;
  }

  return authWindow().refreshAccessToken!();
}

export async function authorizedFetch(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers ?? {});
  const token = getAccessToken();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  return fetch(input, {
    credentials: 'same-origin',
    ...init,
    headers
  });
}

export async function loginWithKey<T>(authBase: string, key: string): Promise<{ ok: boolean; status: number; data: T | null }> {
  const response = await fetch(`${authBase.replace(/\/$/, '')}/login`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key })
  });

  const data = await mustJson<T>(response);
  return {
    ok: response.ok,
    status: response.status,
    data: data ?? null
  };
}

export async function refreshSession<T>(authBase: string): Promise<{ ok: boolean; status: number; data: T | null }> {
  const response = await fetch(`${authBase.replace(/\/$/, '')}/refresh`, {
    method: 'POST',
    credentials: 'same-origin'
  });

  const data = await mustJson<T>(response);
  return {
    ok: response.ok,
    status: response.status,
    data: data ?? null
  };
}

export async function logoutSession(authBase: string): Promise<Response> {
  return fetch(`${authBase.replace(/\/$/, '')}/logout`, {
    method: 'POST',
    credentials: 'same-origin'
  });
}
