# Phase 3 Cleanup Plan

## Scope

This plan is intentionally post-migration cleanup only.

It does **not** include:

- live seam changes
- route-model changes
- host behavior changes
- public-route changes at `/` or `/staging`
- removal of rollback paths before criteria are met

## Current temporary items

| Temporary item | Current role | Removal target |
| --- | --- | --- |
| `efsdb-login/*` | fallback-only build source | retire after login CE stability criteria are met |
| `efsdb-explorer/*` | fallback-only build source | retire after explorer CE stability criteria are met |
| `efsdb/php/core/public/views/_admin_legacy.php` | explicit runtime rollback for admin cutover | retire after admin CE stability criteria are met |
| `efsdb/php/core/public/views/header.php` | shared shell framing | narrow to shell-only responsibilities |
| `efsdb/php/core/public/views/nav.php` | shared nav framing | narrow to shell-only responsibilities |
| `efsdb/php/core/public/views/footer.php` | shared footer framing | narrow to shell-only responsibilities |
| `efsdb/php/core/public/js/auth-interceptor.js` | host-global auth compatibility glue | narrow or retire only after CE bridge fully covers required behavior |
| `efsdb/php/core/public/js/theme-manager.js` | host-global theme source | narrow or retire only after CE bridge fully covers required behavior |
| `spec/characterization/ui/ExplorerBehaviorCharacterization.spec.ts` | pre-Playwright placeholder | replace or retire when real interaction parity work begins |

## Removal criteria

### Remove `efsdb-login` fallback

Criteria:

- `web/apps/login` has remained the shipped source for a full cleanup window without rollback use.
- `build:login` from `/web` remains green in normal development and CI usage.
- `spec/characterization/ui/login.spec.ts` remains green across subsequent unrelated UI changes.
- no one is relying on `build:login:legacy` operationally.

When those are true:

- remove `efsdb-login` from root workspaces
- remove `build:login:legacy`
- archive or delete `efsdb-login/*`

### Remove `efsdb-explorer` fallback

Criteria:

- `web/apps/explorer` has remained the shipped source for a full cleanup window without rollback use.
- `build:explorer` from `/web` remains green in normal development and CI usage.
- `spec/characterization/ui/explorer.spec.ts` and `bootstrap-assets.spec.ts` remain green across subsequent changes.
- no one is relying on `build:explorer:legacy` operationally.

When those are true:

- remove `efsdb-explorer` from root workspaces
- remove `build:explorer:legacy`
- archive or delete `efsdb-explorer/*`

### Remove `_admin_legacy.php`

Criteria:

- `?action=admin` CE path remains stable across follow-up changes.
- `spec/characterization/ui/admin.spec.ts` remains green across subsequent changesets.
- there is no recent need to use `?action=admin&ui=legacy` for recovery.
- the admin CE continues to cover the required parity-first operations:
  - users
  - roles
  - settings
  - display mode
  - products/search/facets consumption

When those are true:

- remove `?action=admin&ui=legacy`
- remove `_admin_legacy.php`
- remove legacy-only bootstrap URL hints if no longer needed

### Remove obsolete shell glue

Criteria:

- control-plane hosts no longer depend on shell-specific markup or behavior beyond framing
- login, explorer, and admin remain green in Playwright after shell simplification
- no hidden runtime assumptions remain in `header.php`, `nav.php`, or `footer.php`
- shell simplification does not change the shared `#efsdb-bootstrap` contract or the stable CE asset filenames

When those are true:

- reduce those files to framing-only markup
- remove obsolete control-plane conditionals or assets

## Recommended cleanup order

1. Cleanup docs first
   - keep this plan and the Phase 3 summary up to date
2. Retire fallback-only login source
   - lowest runtime risk because login host is already thin and stable
3. Retire fallback-only explorer source
   - after confirming the `/web` explorer source is stable enough that legacy rebuilds are unnecessary
4. Remove `_admin_legacy.php`
   - only after the admin CE path has had enough soak time
5. Narrow shared shell files
   - `header.php`
   - `nav.php`
   - `footer.php`
6. Reassess host-global auth/theme glue
   - narrow or retire only after the typed CE bridges fully cover the real behavior
7. Replace the old explorer placeholder characterization
   - when explorer interaction parity becomes a deliberate goal

## Suggested handoff rule

Do not remove a temporary migration artifact just because a newer path exists.

Remove it only when:

- the newer path is the clear active truth
- the browser characterization covering that path is green
- the fallback has stopped being operationally useful
- removing it does not force a seam or route-model change
