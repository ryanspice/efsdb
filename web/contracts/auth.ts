export interface AuthUser {
  id: string;
  username: string;
  role: string;
  actualRole: string;
  displayMode?: string | null;
  uid?: number;
  gid?: number;
  entitlements?: string[];
  actualEntitlements?: string[];
  availableDisplayModes?: string[];
  operatorOnly?: boolean;
}

export interface AuthResponse {
  accessToken: string;
  expiresIn: number;
  user: AuthUser;
}

export interface AuthErrorResponse {
  error?: {
    code?: string;
    message?: string;
  };
}
