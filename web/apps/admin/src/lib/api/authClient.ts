import type { AuthResponse, AuthUser } from '@contracts/auth';
import { authorizedFetch, refreshAccessToken } from '@utils/bootstrap/authBridge';
import { describeJsonError, mustJson } from '@utils/http';

export async function ensureAdminSession(): Promise<AuthResponse | null> {
  return refreshAccessToken();
}

export async function whoAmI(authBase: string): Promise<AuthUser | null> {
  const response = await authorizedFetch(`${authBase.replace(/\/$/, '')}/whoami`);
  if (!response.ok) {
    return null;
  }

  return mustJson<AuthUser>(response);
}

export async function changeDisplayMode(authBase: string, roleId: string): Promise<AuthResponse> {
  const response = await authorizedFetch(`${authBase.replace(/\/$/, '')}/display-mode`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ roleId })
  });

  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<AuthResponse>(response);
}
