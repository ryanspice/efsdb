# EFSDB Auth Contract v2.0.0

**Status**: Active  
**Version**: 2.0.0  
**Date**: 2026-03-17

## 1. Overview

EFSDB uses a dual-token session model with role-aware identity.

- **Access Token**: short-lived bearer JWT used for API authorization.
  - Sent in `Authorization: Bearer <token>`.
  - Stored client-side in memory only.
- **Refresh Token**: long-lived opaque session token.
  - Sent in `efsdb_refresh_token` as an `HttpOnly` cookie.
  - Stored server-side as a hashed refresh session document.
  - Single-use rotation on refresh. Replay is rejected.

Identity is split into:

- **Actual role**: the authenticated account's real role.
- **Effective role**: the current display mode used for authorization and UI behavior.

`tenant_admin` may switch display mode to inspect the application as another tenant role while preserving audit identity.

## 2. Role Model

- `operator_root`: console-only operator role for bootstrap, recovery, and low-level maintenance.
- `tenant_admin`: default web admin created at initialization. Can manage users, roles, tenant settings, and display mode.
- Seeded tenant roles: `member_premium`, `member_standard`, `guest`.
- Custom tenant roles are stored in encrypted tenant settings/documents.

## 3. Bootstrap Rules

- Public login never accepts hard-coded magic values such as `test` or `test_free`.
- Development:
  - If `EFSDB_BOOTSTRAP_SECRET` is not provided, first initialization generates a one-time `tenant_admin` login key.
  - The generated key is emitted to the console once and stored only as a password hash in the encrypted store.
- Production:
  - `EFSDB_BOOTSTRAP_SECRET` or an explicit bootstrap CLI flow is required.
  - Missing bootstrap material is a startup error. Production fails closed.

## 4. Endpoints

### 4.1. Login

- **POST** `/api/auth/login`
- **Body**:

```json
{
  "key": "tenant_or_user_login_key"
}
```

- **Response**:

```json
{
  "accessToken": "ey...",
  "expiresIn": 900,
  "user": {
    "id": "tenant-admin",
    "username": "Tenant Admin",
    "role": "tenant_admin",
    "actualRole": "tenant_admin",
    "availableDisplayModes": [
      "tenant_admin",
      "member_premium",
      "member_standard",
      "guest"
    ]
  }
}
```

- **Cookie**: sets `efsdb_refresh_token` (`HttpOnly`, `SameSite=Strict`, `Secure` when HTTPS).
- **Failures**: returns `401` for invalid keys.

### 4.2. Refresh

- **POST** `/api/auth/refresh`
- **Cookie**: requires `efsdb_refresh_token`
- **Response**: same payload shape as login
- **Behavior**:
  - Rotates the refresh session atomically.
  - Invalidates the previous refresh token immediately.
  - Returns `401` on replay, revocation, expiration, or unknown session.

### 4.3. Logout

- **POST** `/api/auth/logout`
- **Behavior**:
  - Revokes the current refresh session.
  - Clears the `efsdb_refresh_token` cookie.

### 4.4. WhoAmI

- **GET** `/api/auth/whoami`
- **Headers**: `Authorization: Bearer <token>`
- **Response (200)**:

```json
{
  "id": "tenant-admin",
  "username": "Tenant Admin",
  "role": "member_standard",
  "actualRole": "tenant_admin",
  "entitlements": ["NATURAL_VIEW"],
  "actualEntitlements": [
    "NATURAL_VIEW",
    "RAW_VIEW",
    "ADMIN_USERS",
    "ADMIN_ROLES",
    "ADMIN_SETTINGS",
    "IMPERSONATE"
  ],
  "availableDisplayModes": [
    "tenant_admin",
    "member_premium",
    "member_standard",
    "guest"
  ],
  "displayMode": "member_standard"
}
```

- **Response (401)**: missing or invalid bearer token

### 4.5. Display Mode

- **POST** `/api/auth/display-mode`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:

```json
{
  "roleId": "member_standard"
}
```

- **Access**: `tenant_admin` only
- **Behavior**:
  - Reissues access and refresh tokens for the selected effective role.
  - Preserves `actualRole` as the authenticated admin identity.

### 4.6. Tenant Admin APIs

- **GET/POST** `/api/admin/users`
  - List users or create a new tenant user.
- **GET/POST** `/api/admin/roles`
  - List roles or create a tenant role.
- **GET/POST** `/api/admin/settings`
  - Read or write encrypted tenant settings.

## 5. Explorer Authorization

- `natural` mode:
  - Decoded logical filesystem view.
  - Requires `NATURAL_VIEW`.
- `raw` mode:
  - Backing-store mapping and chunk/manifest inspection.
  - Requires `RAW_VIEW`.
- Free or standard users never receive raw storage access unless their assigned role includes `RAW_VIEW`.

## 6. Client Behavior

1. On load, the client may attempt silent refresh with `POST /api/auth/refresh`.
2. API calls send `Authorization: Bearer <token>`.
3. On `401`, the client refreshes once and retries the original request.
4. If refresh fails, the client returns to login.
