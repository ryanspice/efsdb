---
alwaysApply: true
---
# EFSDB Rules v0.2.0
  
## Runtime and Language
- PHP 8.3.x only for the reference runtime. Use `declare(strict_types=1);` everywhere.
- Prefer typed properties, typed returns, and explicit arrays/DTOs. Avoid dynamic properties and shape ambiguity.
- Keep dependencies minimal. No framework or Composer dependency unless it clearly reduces complexity without weakening control over the storage/auth model.

## Storage and Filesystem Safety
- EFSDB is always encrypted at rest. Manifests, chunks, indexes, sessions, settings, and auth-related documents must remain encrypted.
- Canonical manifest format is required for both files and documents. No alternate document-only manifest shape is allowed.
- Required manifest fields for all writes: `v`, `id`, `entity`, optional `logicalPath`, `size`, `mime`, `mtime`, `chunking`, `hash`, `chunks`, and `indexes`.
- Chunk storage remains content-addressed by BLAKE2b hash. No plaintext filenames or directory names beyond approved entity names.
- Production must fail closed if `EFSDB_DATA_DIR` or key material resolve inside a served/public tree. This applies to both the PHP control plane and the static/runtime delivery path.
- Development/test may allow relaxed placement only behind an explicit override. Safe defaults should still prefer non-public storage roots.

## Identity and Auth
- No hard-coded magic login keys. `test`, `test_free`, and similar shortcuts are forbidden on public auth paths.
- Identity model is two-tier:
  - `operator_root` is console-only and reserved for bootstrap, recovery, rotation, and low-level operator actions.
  - `tenant_admin` is the default near-super web admin created during bootstrap/init.
- Seed tenant roles include `tenant_admin`, `member_premium`, `member_standard`, and `guest`. Custom tenant roles are supported.
- Production bootstrap requires an injected secret or explicit operator bootstrap flow. Missing bootstrap material is a startup error.
- Development may emit a one-time tenant-admin bootstrap key to the console only. Production must never log recoverable secrets.
- Access tokens are short-lived bearer tokens. Refresh tokens are opaque, hashed server-side, one-time-use, and rotated atomically.
- Access tokens stay in memory on the client. Do not store bearer tokens in `localStorage`, query params, or other persistent browser storage.

## Web Components and Delivery
- `efsdb-login` and `efsdb-explorer` are first-class shipped deliverables. They must stay contract-aligned with the PHP backend and be safe to embed outside the PHP shell.
- Web components must not depend on deprecated endpoints, legacy PHP sessions, magic roles, or host-only glue that is unavailable when they are shipped standalone.
- Login must follow the current auth contract: login key exchange, short-lived access token, rotating refresh cookie, `whoami`, and display-mode support where appropriate.
- Explorer defaults to decoded logical access. Raw inspection is opt-in and entitlement-gated.
- Natural mode must never expose raw storage layout. Raw mode may expose manifest/chunk mapping and storage stats only for entitled roles.
- Downloads, image previews, and binary delivery must use a browser-safe authenticated pattern. Do not rely on direct bearer-only navigation URLs. Use short-lived signed tickets or fetch-to-blob/object URL delivery where appropriate.
- Explorer editing is off by default unless a supported write contract and permission model exist end to end.

## Indexing and Scale
- Design for medium-to-large business workloads from the start. Auth, session lookup, and tenant/user discovery must not depend on unbounded manifest scans in steady-state paths.
- User lookup, refresh-session lookup, and role lookup should use indexed access patterns with predictable performance.
- Search/indexing remains append-only: WAL -> immutable segments -> compaction. No in-place segment rewrites.
- Avoid entity-specific hardcoding in indexing/search fallback logic.

## Explorer and Admin UX
- Decoded content first. Raw storage is an advanced inspection surface, not the default user journey.
- `tenant_admin` can manage users, roles, and tenant settings, and can switch display mode while preserving actual actor identity for audit.
- UI copy must reflect the live system. Do not mention master-key login, `root`, or removed bootstrap shortcuts once the contract changes.
- Fluent/Metro-style direction is acceptable so long as the UI stays purposeful, fast, and readable in admin contexts.

## Testing and Verification
- Every meaningful auth/storage change should be covered by focused scripts:
  - core API checks
  - auth/admin/session checks
  - conformance generation and validation
- `apicheck` should cover core API contract behavior only.
- Auth/session/bootstrap/display-mode behavior belongs in dedicated auth/admin checks.
- Web component behavior should be validated against the live PHP API contract, not assumed from older component behavior.

## Working Defaults
- Reference dev server:
  - `php -c efsdb/php/core/php.ini -S 127.0.0.1:8787 -t efsdb/php/core/public`
- Treat docs, rules, and shipped components as part of the product surface. When auth/storage behavior changes, update the code, tests, and rules together.
