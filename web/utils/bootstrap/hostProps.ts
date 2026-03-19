import type { BootstrapPayload } from '@contracts/bootstrap';

export const BOOTSTRAP_SCRIPT_ID = 'efsdb-bootstrap';

export function readBootstrapPayload<T extends BootstrapPayload = BootstrapPayload>(): T {
  const script = document.getElementById(BOOTSTRAP_SCRIPT_ID);
  if (!(script instanceof HTMLScriptElement)) {
    throw new Error(`Missing bootstrap script: #${BOOTSTRAP_SCRIPT_ID}`);
  }

  const raw = script.textContent?.trim() ?? '';
  if (raw === '') {
    throw new Error(`Empty bootstrap script: #${BOOTSTRAP_SCRIPT_ID}`);
  }

  const parsed = JSON.parse(raw) as unknown;
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Invalid bootstrap payload');
  }

  return parsed as T;
}

export function readBootstrapPayloadForApp<T extends BootstrapPayload = BootstrapPayload>(app: T['app']): T {
  const payload = readBootstrapPayload<T>();
  if (payload.app !== app) {
    throw new Error(`Bootstrap app mismatch. Expected ${app}, received ${payload.app}`);
  }

  return payload;
}
