# Auth Contract

Typed payloads:
- `web/contracts/auth.ts`

Behavioral source of truth:
- `spec/auth-contract.md`

Active route family:
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `GET /api/auth/whoami`
- `POST /api/auth/display-mode`

Current guarantees:
- short-lived bearer access token plus rotating refresh cookie
- `actualRole` stays distinct from the effective display mode
- refresh rotation is single-use
- login, refresh, logout, and whoami remain the stable client entrypoints
