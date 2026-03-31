# EFSDB Workstation UI

Shared workstation primitives for the PHP-backed EFSDB web surface.

## Current usage

- `web/apps/*` remain custom-element entrypoints for the PHP runtime.
- `web/ui/components/*` now holds the reusable shell, explorer, and primitive layers that those apps compose.
- `web/styles/tokens.css` and `web/ui/design/tokens.ts` are the runtime and typed sources of truth for the dark workstation theme.
- `web/ui/design/phase-1-responsive-foundation.md` defines the shared breakpoint and typography contract for phone, tablet, laptop, and desktop bands.

## Layering

- `primitives`: low-level surfaces, pills, switches
- `shell`: app frame pieces like command bars and split panes
- `explorer`: EFSDB-specific workstation pieces shared by explorer-style views

## SvelteKit target

This shared layer is intended to map directly into a future SvelteKit route tree:

- `(auth)` for login and recovery
- `(app)` for the authenticated shell
- `explorer/*` for path-addressable storage browsing
- `admin/*` for users, roles, settings, products, search, and ops
- `workspace/*` for published, staging, and rollback views

## State ownership

- Server/bootstrap data stays with route loaders or PHP bootstrap payloads
- URL state owns shareable explorer mode, path, filters, and search
- Rune state owns pane widths, selection, collapsed sections, and quick inspect behavior

## Responsive contract

- Use `48rem`, `64rem`, and `80rem` as the standard breakpoint thresholds.
- Default to phone-first CSS and the shared typography roles from `web/styles/tokens.css`.
- Treat the phase-1 responsive contract as the baseline for both `web/apps/*` and future shared UI work.
