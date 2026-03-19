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

export interface IndexRebuildResult {
  entity?: string;
  indexed?: number;
  rebuiltAt: string;
  results?: IndexRebuildResult[];
}
