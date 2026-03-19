# Public Workspace Contract

Implemented in Phase 1:
- public workspace stays encrypted-model backed through `public_workspace_roots` and `public_workspace_files`
- published and staging are tenant-owned logical roots under the current tenant settings scope
- public workspace file ids are deterministic from `tenant + root + normalized path`
- public workspace resolution uses deterministic ids directly and does not depend on generic lookup files
- recreating a tombstoned public path rewrites or restores the same deterministic record id

Current defaults:
- `published` is public-read by default
- `staging` is restricted by default
- staging access currently allows actual roles listed on the root record; the default set is `tenant_admin` and `operator_root`

Current non-goals:
- Phase 1 does not claim generic repo-wide `logicalPath` uniqueness
- Phase 1 does not claim pointer-swap publish semantics are complete yet
