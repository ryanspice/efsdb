import type { AuthUser } from '@contracts/auth';
import type { FacetBucket } from '@contracts/facets';
import type { ProductSummary } from '@contracts/products';
import type { SearchResult } from '@contracts/search';
import type { AdminRoleRecord, AdminUserRecord } from '@contracts/admin';

export interface NoticeState {
  message: string;
  error: boolean;
}

export interface UserFormState {
  username: string;
  name: string;
  roleId: string;
  loginKey: string;
}

export interface RoleFormState {
  id: string;
  name: string;
  description: string;
  entitlements: string;
}

export interface CatalogState {
  products: ProductSummary[];
  searchResults: SearchResult[];
  facets: Record<string, FacetBucket[]>;
  query: string;
}

export interface AdminBootState {
  user: AuthUser | null;
  users: AdminUserRecord[];
  roles: AdminRoleRecord[];
  settings: Record<string, unknown> | null;
  catalog: CatalogState;
}
