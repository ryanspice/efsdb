export async function mustJson<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(`Expected JSON, got: ${contentType || 'unknown'}`);
  }

  return (await response.json()) as T;
}

export async function describeJsonError(response: Response): Promise<string> {
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const payload = await response.json().catch(() => null);
    const message = payload?.error?.message;
    if (typeof message === 'string' && message.trim() !== '') {
      return message;
    }
  }

  return `HTTP ${response.status}`;
}

type QueryValue = string | number | undefined | null | string[];

export function queryString<T extends object>(params: T): string {
  const search = new URLSearchParams();

  for (const [key, value] of Object.entries(params as Record<string, QueryValue>)) {
    if (value === undefined || value === null || value === '') {
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== '') {
          search.append(key, item);
        }
      }
      continue;
    }

    search.set(key, String(value));
  }

  const serialized = search.toString();
  return serialized === '' ? '' : `?${serialized}`;
}
