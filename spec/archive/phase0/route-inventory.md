# Live Seam Route Inventory

Live seam file:
- `B:/Dev/PHPFS/efsdb/php/core/public/index.php`

## Query-Action Routes

| Route | Auth requirement | Current content/result | Classification |
| --- | --- | --- | --- |
| `/?` | none | HTML shell, defaults to `home` | compatibility-only |
| `/?action=home` | none | HTML shell | compatibility-only |
| `/?action=login` | none | HTML shell with `<efsdb-login>` host | compatibility-only, future auth surface remains |
| `/?action=explorer` | guest forced to login host | HTML shell with `<efsdb-explorer>` when authenticated | compatibility-only, future explorer surface remains |
| `/?action=admin` | guest forced to login host; tenant-admin gate in the view | HTML shell with current legacy admin UI | compatibility-only, future `/admin` surface remains |
| `/?action=system` | guest forced to login host | HTML shell | compatibility-only |
| `/?action=products` | guest forced to login host | HTML placeholder shell | compatibility-only placeholder |
| `/?action=preview` | guest forced to login host | HTML placeholder shell | compatibility-only placeholder |
| unknown `/?action=*` | guest forced to login host or authenticated "view not found" shell | HTML shell | compatibility-only fallback |

## Non-API Login/Auth Fallbacks

| Trigger | Auth requirement | Current content/result | Classification |
| --- | --- | --- | --- |
| `POST` with `login_key` | none | invalid key: HTML login error path; valid key: `302` redirect | compatibility-only |
| `GET` with `logout=1` | none; active session normally present | `302` redirect | compatibility-only |

## API Routes

| Route | Auth requirement | Current result shape | Classification |
| --- | --- | --- | --- |
| `GET /api/health` | none | JSON success payload | likely 1.0 |
| `POST /api/auth/login` | none | JSON auth payload or JSON error | likely 1.0 |
| `POST /api/auth/refresh` | refresh cookie/session | JSON auth payload or JSON error | likely 1.0 |
| `POST /api/auth/logout` | none; cookie optional | JSON success payload | likely 1.0 |
| `/api/auth/whoami` | bearer token | JSON user payload or JSON error | likely 1.0, but current method handling is not authoritative |
| `POST /api/auth/display-mode` | bearer token plus impersonation permission | JSON auth payload or JSON error | likely 1.0 |
| `GET /api/admin/users` | bearer token plus manage-users permission | JSON list payload | likely 1.0 |
| `POST /api/admin/users` | bearer token plus manage-users permission | JSON create payload | likely 1.0 |
| `GET /api/admin/roles` | bearer token plus manage-roles permission | JSON list payload | likely 1.0 |
| `POST /api/admin/roles` | bearer token plus manage-roles permission | JSON create payload | likely 1.0 |
| `GET /api/admin/settings` | bearer token plus manage-settings permission | JSON single payload | likely 1.0 |
| `POST /api/admin/settings` | bearer token plus manage-settings permission | JSON single payload | likely 1.0 |
| `/api/explorer/list` | bearer token plus mode entitlement | JSON list payload | likely 1.0, but current method handling is not authoritative |
| `/api/explorer/details` | bearer token plus mode entitlement | JSON details payload | likely 1.0, but current method handling is not authoritative |
| `/api/explorer/ticket` | bearer token plus file access | JSON ticket payload | likely 1.0, but current method handling is not authoritative |
| `/api/explorer/download` | bearer token or valid ticket | file bytes on success, JSON error on failure | likely 1.0, but current method handling is not authoritative |
| `GET /api/products` | bearer token | JSON list payload | endpoint family may survive; current contract is not authoritative for 1.0 |
| `GET /api/products/{id}` | bearer token | JSON single payload | endpoint family may survive; current contract is not authoritative for 1.0 |
| `GET /api/search` | bearer token | JSON list payload | endpoint family may survive; current contract is not authoritative for 1.0 |
| `GET /api/facets` | bearer token | JSON facet payload | endpoint family may survive; current contract is not authoritative for 1.0 |

## Unknown And Wrong-Method Behavior

| Path family | Current behavior |
| --- | --- |
| unknown `/api/*` | JSON `404 not_found` |
| unknown `/api/admin/*` | auth checked first, then JSON `404 not_found` |
| unknown `/api/explorer/*` | auth checked first, then JSON `404 not_found` |
| wrong method on `/api/admin/users`, `/api/admin/roles`, `/api/admin/settings` | JSON `405 method_not_allowed` |
| wrong method on `/api/auth/login`, `/api/auth/refresh`, `/api/auth/logout`, `/api/auth/display-mode` | falls through to JSON `404 not_found` |
| wrong method on `/api/products`, `/api/search`, `/api/facets` | falls through to JSON `404 not_found` |
| wrong method on `/api/auth/whoami` | current branch is method-permissive |
| wrong method on explorer API branches | current branches are method-permissive |
