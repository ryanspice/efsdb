import type { AuthUser } from './auth';
import type { FacetBucket, FacetResponse } from './facets';
import type { ProductListResponse, ProductSummary } from './products';
import type { SearchResponse, SearchResult } from './search';

export interface AdminUserRecord {
  id: string;
  username: string;
  name: string;
  roleId: string;
  status: string;
}

export interface AdminUsersResponse {
  results: AdminUserRecord[];
}

export interface AdminUserCreatePayload {
  username: string;
  name: string;
  roleId: string;
  loginKey?: string;
}

export interface AdminUserCreateResponse {
  user: AdminUserRecord;
  loginKey: string;
}

export interface AdminRoleRecord {
  id: string;
  name: string;
  description?: string;
  entitlements: string[];
  operatorOnly?: boolean;
  system?: boolean;
}

export interface AdminRolesResponse {
  results: AdminRoleRecord[];
}

export interface AdminRoleCreatePayload {
  id: string;
  name: string;
  description?: string;
  entitlements: string[];
}

export interface AdminRoleCreateResponse {
  result: AdminRoleRecord;
}

export interface TenantSettingsRecord {
  id: string;
  settings: Record<string, unknown>;
  updatedAt?: string | null;
}

export interface AdminSettingsResponse {
  result: Record<string, unknown>;
}

export interface AdminBootstrapResponse {
  user: AuthUser;
  users: AdminUserRecord[];
  roles: AdminRoleRecord[];
  settings: Record<string, unknown>;
}

export interface WorkspaceResourceRecord {
  id: string;
  logicalPath?: string;
  mime?: string;
  size?: number;
  mtime?: string;
  [key: string]: unknown;
}

export interface CatalogWorkspaceResponse {
  workspaceResources: WorkspaceResourceRecord[];
  search: SearchResult[];
  facets: Record<string, FacetBucket[]>;
  meta: {
    workspaceResources: { total: number; offset: number; limit: number };
    search: SearchResponse['meta'];
    facets: FacetResponse['meta'];
  };
}

export interface IndexRebuildResult {
  entity?: string;
  indexed?: number;
  rebuiltAt: string;
  results?: IndexRebuildResult[];
}
