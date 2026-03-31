import type { FacetBucket } from '@contracts/facets';
import type { SearchResult } from '@contracts/search';
import type {
  AdminBootstrapResponse,
  AdminRoleCreatePayload,
  AdminRoleCreateResponse,
  AdminRolesResponse,
  CatalogWorkspaceResponse,
  AdminSettingsResponse,
  AdminUserCreatePayload,
  AdminUserCreateResponse,
  AdminUsersResponse
} from '@contracts/admin';
import { authorizedFetch } from '@utils/bootstrap/authBridge';
import { describeJsonError, mustJson } from '@utils/http';
import { loadFacets } from './facetsClient';
import { searchRecords } from './searchClient';

export async function loadBootstrap(apiBase: string, signal?: AbortSignal): Promise<AdminBootstrapResponse> {
  const response = await authorizedFetch(`${apiBase.replace(/\/$/, '')}/bootstrap`, { signal });
  if (!response.ok) {
    throw new Error(await describeJsonError(response));
  }

  return mustJson<AdminBootstrapResponse>(response);
}

export async function loadCatalogWorkspace(
  params: {
    q?: string;
    limit?: number;
    entity?: string;
    field?: string[];
  } = {},
  signal?: AbortSignal
): Promise<{ results: SearchResult[]; facets: Record<string, FacetBucket[]> }> {
  const entity = params.entity ?? 'public_workspace_files';
  const query = params.q?.trim() || undefined;
  const fields = params.field?.filter((field) => field.trim() !== '') ?? [];
  const searchPromise = searchRecords({
    entity,
    q: query,
    limit: params.limit ?? 10
  });
  const facetPromise =
    fields.length > 0
      ? loadFacets({
          entity,
          q: query,
          field: fields
        })
      : Promise.resolve({ results: {} as Record<string, FacetBucket[]> });

  const [searchData, facetData] = await Promise.allSettled([searchPromise, facetPromise]);

  if (searchData.status === 'rejected') {
    throw searchData.reason instanceof Error
      ? searchData.reason
      : new Error('Unable to load workspace search results');
  }

  return {
    results: searchData.value.results,
    facets: facetData.status === 'fulfilled' ? facetData.value.results : {}
  };
}

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
