# Auth Contract

Current source inputs:
- `efsdb/php/core/src/Auth.php`
- `efsdb/php/core/src/IdentityManager.php`
- `spec/auth-contract.md`
- `efsdb-login/src/Login.ce.svelte`

Freeze in Phase 0:
- login payload and error shape
- refresh rotation behavior
- logout behavior
- whoami payload
- display-mode payload and actual-role preservation

Open contract note:
- current route family is likely to survive
- current method permissiveness is not authoritative for 1.0
