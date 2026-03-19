import type {
  AdminRoleCreatePayload,
  AdminRoleCreateResponse,
  AdminRolesResponse,
  AdminSettingsResponse,
  AdminUserCreatePayload,
  AdminUserCreateResponse,
  AdminUsersResponse
} from '@contracts/admin';
import { authorizedFetch } from '@utils/bootstrap/authBridge';
import { describeJsonError, mustJson } from '@utils/http';

export async function listUsers(apiBase: string): Promise<AdminUsersResponse> {
  const response = await authorizedFetch(`${apiBase.replace(/\/$/, '')}/users`);
  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<AdminUsersResponse>(response);
}

export async function createUser(apiBase: string, payload: AdminUserCreatePayload): Promise<AdminUserCreateResponse> {
  const response = await authorizedFetch(`${apiBase.replace(/\/$/, '')}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<AdminUserCreateResponse>(response);
}

export async function listRoles(apiBase: string): Promise<AdminRolesResponse> {
  const response = await authorizedFetch(`${apiBase.replace(/\/$/, '')}/roles`);
  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<AdminRolesResponse>(response);
}

export async function createRole(apiBase: string, payload: AdminRoleCreatePayload): Promise<AdminRoleCreateResponse> {
  const response = await authorizedFetch(`${apiBase.replace(/\/$/, '')}/roles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<AdminRoleCreateResponse>(response);
}

export async function getSettings(apiBase: string): Promise<AdminSettingsResponse> {
  const response = await authorizedFetch(`${apiBase.replace(/\/$/, '')}/settings`);
  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<AdminSettingsResponse>(response);
}
