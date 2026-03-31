# EFSDB Phase 1 Responsive Foundation

## Purpose

Phase 1 establishes one responsive contract for the current PHP shell and the active `web/apps/*` custom elements. This pass standardizes breakpoint bands, typography roles, and base touch sizing without attempting the larger layout rewrites that Explorer, Builder, and the PHP nav still need later.

Phase 1 is successful when:

* shared typography stops drifting between apps
* components stop inventing one-off breakpoints
* phone and tablet views read clearly without shrinking into 10px metadata
* later layout work can target a stable responsive contract instead of local guesses

## Viewport bands

Use these bands everywhere unless a component has a documented exception.

| Band | Range | Primary target |
| --- | --- | --- |
| Phone | `< 48rem` (`< 768px`) | narrow phones, tall phones, small embedded windows |
| Tablet | `48rem` to `63.99rem` (`768px` to `1023px`) | iPad Mini portrait, tablets, narrow laptop splits |
| Laptop | `64rem` to `79.99rem` (`1024px` to `1279px`) | iPad Mini landscape, small laptops, compact desktop windows |
| Desktop | `>= 80rem` (`>= 1280px`) | full workstation layouts |

### Rules

* Do not add new breakpoint values like `720px`, `760px`, `860px`, `900px`, `920px`, `980px`, or `1100px` for new work.
* Use rem-based media queries so zoom and OS scaling behave predictably.
* Default to phone-first CSS, then layer `48rem`, `64rem`, and `80rem` enhancements.

## Typography contract

These roles should replace ad-hoc `0.72rem`, `11px`, and `12px` usage.

| Role | Use | Phone floor |
| --- | --- | --- |
| `micro` | dense technical chips only | `11px` |
| `label` | field labels, section eyebrows, tool chrome | `12px` |
| `body-sm` | supporting copy, metadata blocks | `13px` |
| `body-md` | default UI text, form copy, table content | `14px` |
| `body-lg` | primary prose, intro copy, major inputs | `16px` |
| `title-sm` | card and widget titles | `15px` |
| `title-md` | section titles, dialog titles | `18px` |
| `title-lg` | page/module hero titles | `24px` |
| `title-xl` | major hero statements | `32px` and up |

### Typography rules

* Treat `body-md` as the default readable UI size.
* Reserve `micro` for pills, timestamps, and compressed technical metadata only.
* Avoid all-caps unless the element is a short utility label or environment tag.
* Prefer line heights at or above `1.55` for prose and supporting copy.
* Use mono text for hashes, IDs, route params, and encoded storage references, not for general copy.

## Interaction and density

Phase 1 also standardizes a few touch and readability floors:

* Interactive controls should target a minimum height near `40px`.
* Toolbar and command surfaces should target `44px` to `48px`.
* Avoid relying on drag-resize as the only interaction below `64rem`.
* Long labels should wrap or truncate deliberately; they should not silently compress the whole layout.

## Shell and component behavior by band

### Phone

* Prioritize a readable stack over preserving desktop panel geometry.
* Keep shell copy, field labels, and buttons on the shared type ramp.
* Use horizontal scrolling only for secondary chip rows, never for primary body copy.

### Tablet

* Keep one clear primary work surface.
* Secondary detail panes can remain present if they do not force unreadable copy or impossible controls.
* Toolbars may wrap into multiple rows, but typography stays on the shared ramp.

### Laptop

* Multi-column work surfaces are allowed if type remains readable and controls stay touch-safe.
* Side rails and inspectors can persist, but should not require microcopy to fit.

### Desktop

* Full workstation layouts are allowed.
* Density may increase through spacing and layout, not by collapsing text below the shared floor.

## Scope of this phase

Phase 1 includes:

* shared web token updates in `web/styles/tokens.css`
* typed token exports in `web/ui/design/tokens.ts`
* PHP shell typography and breakpoint alignment in `efsdb/php/core/src/input.css`
* wrapper and shell component cleanup where they currently hardcode divergent breakpoints

Phase 1 explicitly does not include:

* a phone drawer navigation for the PHP shell
* a single-pane Explorer mobile mode
* a single-pane Builder authoring mode
* Admin task-route decomposition

Those remain follow-up layout phases after the shared contract is in place.

## Implementation checklist

Before merging responsive UI work, verify:

* every new media query uses `48rem`, `64rem`, or `80rem`
* field labels and helper copy do not drop below the shared `label` or `body-sm` roles
* dialogs and tool windows remain readable at phone and tablet widths
* no new component introduces a local typography scale without documenting why

## Next phases

Phase 2 should focus on flow and layout:

* PHP shell compact navigation
* Explorer inspector and preview drawer behavior below `64rem`
* Builder pane collapse strategy below `64rem`
* Admin task-based grouping for tablet and phone support mode
