# EFSDB UI Design Brief v0.1

## Purpose

This brief turns the current image set into a practical design target for the SvelteKit UI. The goal is not to copy a generic SaaS dashboard and call it innovation. The goal is to preserve the clean, confident feel of the light reference while evolving EFSDB into a darker, more technical control-plane product with first-class light mode support.

The output of this brief should guide:

* component refactors
* token and theme alignment
* screen-by-screen polish
* later TraeAI precision prompts for incremental Svelte updates

---

## Reference set

### Primary light reference

* **WeaveCommerce / Website Builder + Embedded Code Editor**
* Key traits worth preserving:

  * soft card edges
  * strong layout hierarchy
  * restrained accent usage
  * comfortable spacing
  * premium but approachable product feel
  * "Uber-like" confidence: calm, clean, not noisy, not enterprise ugly

### Primary dark references

The EFSDB mockups establish the direction for:

* Explorer
* Search
* Workspace
* Control Plane
* Settings
* Display Modes
* Operations
* Natural vs Raw explorer modes
* List / tree / icon / raw storage presentations

### Core synthesis

The light reference gives us **polish, readability, and product confidence**.
The dark references give us **domain specificity, operational seriousness, and storage-first UX**.
The design system should unify both into one product language rather than treating dark mode as an afterthought.

---

## Product character

EFSDB should feel like:

* a secure control plane
* a filesystem-aware publishing workspace
* a developer-friendly admin utility
* an encrypted content operations console

It should **not** feel like:

* a marketing dashboard template
* a crypto product cliche
* an over-glossy glassmorphism toy
* a dense enterprise relic from the Ministry of Suffering

### Target emotional qualities

* precise
* trustworthy
* fast
* quiet
* technical
* elegant
* slightly industrial

### Brand personality in UI terms

* security without paranoia theater
* power without clutter
* depth without confusion
* premium without luxury cosplay

---

## High-level design principles

### 1. Calm shells, vivid state

Most of the UI should stay quiet. Color becomes more saturated only when showing:

* active selection
* environment status
* encryption state
* publish state
* role/access state
* warnings and destructive operations

### 2. Dense data, breathable layout

EFSDB has real operational density. The answer is not giant cards everywhere. Use:

* compact row height for data-heavy views
* larger spacing around panels and sections
* visually grouped toolbars
* clear empty space where preview panes or future modules live

### 3. One system, two themes

Light mode is not a washed-out debug mode.
Dark mode is not the only "real" design.
Both themes should share:

* identical spacing scale
* same semantic color roles
* same elevation model
* same border and radius logic
* same component anatomy

### 4. Domain-first interfaces

The Explorer, Workspace, Search, and Control Plane should feel purpose-built for EFSDB's model:

* manifests
* chunks
* roots
* staging vs published
* natural vs raw
* schemas
* records
* role-based visibility

### 5. Precision over decoration

Use motion and effects sparingly. This is a storage and publishing tool, not a casino.

---

## Visual direction

## Layout model

A consistent three-zone shell works well across the dark references:

1. **Left navigation rail**

   * product identity
   * primary nav sections
   * environment / system status block
   * current user block

2. **Main content region**

   * breadcrumb and page title
   * contextual toolbar / filters
   * primary work surface

3. **Optional right detail rail**

   * inspector
   * selected item metadata
   * publish details
   * schema / records / actions

This should remain responsive but desktop-first.

### Recommended shell widths

* left rail: `184px to 232px`
* content max width for operational pages: fluid, full workspace
* right rail: `280px to 360px`
* top utility strip height: `40px to 48px`

---

## Theme strategy

## Core palette roles

Use semantic roles rather than hardcoding "blue means everything forever," because that is how teams end up trapped in their own CSS.

### Neutral roles

* `bg.canvas`
* `bg.surface`
* `bg.surface-2`
* `bg.surface-3`
* `border.subtle`
* `border.default`
* `border.strong`
* `text.primary`
* `text.secondary`
* `text.tertiary`
* `text.inverse`

### Brand and interaction roles

* `accent.primary`
* `accent.primary-hover`
* `accent.primary-soft`
* `accent.focus`

### Status roles

* `success`
* `warning`
* `danger`
* `info`
* `live`
* `draft`
* `archived`
* `indexed`
* `indexing`
* `pending`

### Security and system roles

* `security.encrypted`
* `security.rbac`
* `ops.destructive`
* `ops.safe`

---

## Suggested token map

These are starting targets, not holy scripture.

```ts
export const efsdbTheme = {
  radius: {
    xs: '6px',
    sm: '8px',
    md: '10px',
    lg: '14px',
    xl: '18px'
  },
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px'
  },
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,.18)',
    md: '0 8px 24px rgba(0,0,0,.22)',
    lg: '0 18px 50px rgba(0,0,0,.28)'
  },
  fontSize: {
    xs: '11px',
    sm: '12px',
    md: '13px',
    base: '14px',
    lg: '16px',
    xl: '20px'
  }
};
```

## Dark mode starter values

```ts
export const darkColors = {
  canvas: '#070b12',
  surface: '#0d1220',
  surface2: '#11182a',
  surface3: '#162033',
  borderSubtle: 'rgba(123, 144, 181, 0.10)',
  borderDefault: 'rgba(123, 144, 181, 0.16)',
  borderStrong: 'rgba(123, 144, 181, 0.26)',
  textPrimary: '#eef4ff',
  textSecondary: '#a4b2ca',
  textTertiary: '#72819c',
  accent: '#4f7cff',
  accentHover: '#6a90ff',
  accentSoft: 'rgba(79, 124, 255, 0.16)',
  focus: 'rgba(110, 148, 255, 0.45)',
  success: '#22c983',
  warning: '#f2bf4a',
  danger: '#ff6a6a',
  info: '#46b3ff'
};
```

## Light mode starter values

```ts
export const lightColors = {
  canvas: '#f5f7fb',
  surface: '#ffffff',
  surface2: '#f8faff',
  surface3: '#eef3fb',
  borderSubtle: 'rgba(19, 36, 66, 0.08)',
  borderDefault: 'rgba(19, 36, 66, 0.12)',
  borderStrong: 'rgba(19, 36, 66, 0.20)',
  textPrimary: '#0f1728',
  textSecondary: '#4f5d78',
  textTertiary: '#7c8aa5',
  accent: '#295dff',
  accentHover: '#184cf1',
  accentSoft: 'rgba(41, 93, 255, 0.10)',
  focus: 'rgba(41, 93, 255, 0.28)',
  success: '#159b63',
  warning: '#b88300',
  danger: '#d94242',
  info: '#0078d4'
};
```

### Visual translation rule

Dark mode should feel like a purpose-built utility.
Light mode should feel like the same product in daylight, not like a different startup entirely.

---

## Typography

Use typography to separate technical labels from human-readable content.

### Suggested hierarchy

* App title / page titles: `20px / 600`
* Section headers: `16px / 600`
* Body: `14px / 500 or 400`
* Supporting text: `12px to 13px`
* Micro labels / caps / metadata: `11px to 12px`, increased letter spacing only when useful

### Typography style rules

* Avoid all-caps everywhere. Use it only for tiny utility labels.
* Record counts, versions, and hashes can use a mono or semi-mono style.
* Long technical strings need truncation plus copy actions.

### Font direction

A clean grotesk or neutral system stack works best.

* Inter or system UI for body and interface
* Optional mono for hashes, manifest refs, schema IDs, and chunk labels

---

## Elevation and surfaces

The light reference succeeds because surfaces are clearly separated without being loud. The dark references already point toward a similar model.

### Surface rules

* canvas is darkest / broadest layer
* panels sit one level above canvas
* selected rows and active modules receive a low-contrast accent wash
* hover states rely more on border and surface shift than on big shadows

### Border strategy

Borders matter more than shadows in dark mode.
Use:

* thin default borders for cards and tables
* stronger borders for active or focused states
* danger-tinted borders only for destructive modules

---

## Motion

Motion should communicate state, not personality disorder.

### Use motion for

* panel reveal
* inspector slide-in
* row expansion
* mode switch transitions
* loading placeholders
* publish/promote confirmations

### Avoid

* springy toy motion on every click
* large parallax effects
* glows that pulse for no reason

### Recommended motion values

* duration: `120ms`, `180ms`, `240ms`
* easing: standard ease-out for entry, ease-in-out for toggles
* reduced motion: fully respected

---

## Component architecture direction

The UI should be driven by reusable primitives plus domain composites.

## Layer 1: primitives

* `AppShell`
* `SidebarNav`
* `TopUtilityBar`
* `PageHeader`
* `Toolbar`
* `Panel`
* `Card`
* `Button`
* `IconButton`
* `Pill`
* `StatusBadge`
* `Input`
* `SearchInput`
* `SegmentedControl`
* `Toggle`
* `Tabs`
* `Table`
* `DataList`
* `EmptyState`
* `DetailRail`
* `SplitPane`
* `StatBlock`
* `KeyValueList`
* `CodeBlock`

## Layer 2: domain components

* `ExplorerToolbar`
* `ExplorerList`
* `ExplorerTree`
* `ExplorerCardGrid`
* `ManifestBadge`
* `ChunkCountBadge`
* `PermissionBadge`
* `SchemaBadge`
* `FacetBadge`
* `IndexStatusBadge`
* `RootCard`
* `WorkspaceInspector`
* `UserRoleTable`
* `SystemHealthStrip`
* `OperationActionCard`
* `ModeSettingRow`
* `SearchResultsTable`
* `SearchResultInspector`

## Layer 3: screen assemblies

* `ExplorerScreen`
* `SearchScreen`
* `WorkspaceScreen`
* `UsersRolesScreen`
* `SettingsScreen`
* `DisplayModesScreen`
* `OperationsScreen`

---

## Screen-specific guidance

## 1. Explorer

The Explorer is the identity screen for EFSDB. It needs the most care.

### Core requirements

* support Natural and Raw modes
* support list, grid, and tree-like views
* support filter and quick search
* support preview or empty preview state
* communicate permissions and encryption state
* make manifest/hash metadata discoverable without polluting normal mode

### Natural mode

Natural mode should prioritize:

* familiar file/folder hierarchy
* filename readability
* size and modified metadata
* permissions as low-noise pills
* clean iconography

### Raw mode

Raw mode should prioritize:

* manifest ref visibility
* chunk count visibility
* hashes and raw storage mapping
* stronger warning tint or technical emphasis
* explicit mode badge so the user knows they are in the deeper plumbing layer

### Explorer layout options

Support these views consistently:

* list view for scanning metadata
* grid view for browsing root-level content blocks
* split/tree preview for inspection

### Explorer interaction notes

* active file row should read clearly in both themes
* preview pane should be optional and resizable later
* file icons should stay minimal, with accented folder color reserved for navigable containers
* filters and zoom controls should sit in a compact utility strip

---

## 2. Search

Search is already heading in the right direction.

### Preserve

* strong search bar at top
* facet chips
* clear schema/facet/status columns
* right-side record inspector

### Improve

* slightly stronger row hover and selection treatment
* better visual separation between table header and body
* more obvious active filters summary
* quick actions for schema, records, and related explorer jump

### Search interaction model

Main table stays dominant.
Detail rail becomes contextual and dismissible.
Facets should feel like query tools, not decorative tags.

---

## 3. Workspace

Workspace is where published vs staging roots become emotionally legible.

### Key idea

Published should feel stable and trustworthy.
Staging should feel active and slightly provisional.

### Published root styling

* calm success accent
* stable metadata layout
* stronger domain visibility
* low-friction operational actions

### Staging root styling

* draft, deploying, preview, private states need clear badge semantics
* "Promote" must feel deliberate but not scary
* compare/publish actions belong in toolbar, not buried in cards

### Inspector rail

The right rail works well here.
It should be the canonical place for:

* domain
* delivery mode
* visibility
* SSL
* version
* manifest ref
* timestamps
* actions

---

## 4. Control Plane

This area should feel administrative but still product-grade.

### Users & Roles

* keep tabular structure
* role pills should remain strongly differentiated
* MFA and status need immediate scan value
* recent activity area is good and should be preserved
* user addition, suspension, and role change actions need clean affordances

### Settings

The settings layout is strong but too sparse if left untouched.
Recommended refinements:

* use grouped setting cards with clearer labels
* add tiny supporting descriptions where meaning is not obvious
* allow read-only values to feel intentionally locked, not unfinished

### Display Modes

This screen is conceptually simple.
To avoid feeling empty:

* give each mode row a short plain-English explanation
* consider optional preview thumbnails later
* group by visibility / storage / density behavior

### Operations

Operations should feel serious and safe.

* destructive actions require red-tinted icon or border, not red everywhere
* safe operations stay neutral or blue/gray
* each operation card needs one-line consequence copy
* future confirmation patterns should reuse a shared operation modal

---

## Status and badge system

Badges are doing a lot of work in the dark mocks. Good. Humans love small colored pills because apparently we all need edible-looking metadata.

### Badge families

* state: live, active, draft, archived, pending, suspended
* role: admin, operator, tenant_admin, viewer
* type: content, media, config, template, data
* index: indexed, indexing, pending
* security: encrypted, RBAC active, private, public
* environment: published, staging, preview, deploying

### Badge rules

* use soft fills, not neon blocks
* icon optional for security and environment badges
* keep vertical rhythm tight
* never let badge color be the only carrier of meaning

---

## Icons

Use a restrained icon set.
Prefer:

* folder / file / globe / shield / search / wrench / key / layers / eye / clock / user / lock / database

Rules:

* stroke icons, not filled candy shapes
* keep icon size consistent
* icons should support scanning, not become decoration confetti

---

## Accessibility and usability requirements

### Must-haves

* WCAG-conscious contrast in both themes
* visible keyboard focus states
* all segmented controls and toggles accessible via keyboard
* tables readable without relying on color alone
* reduced motion support
* truncation with tooltip or copy affordance for long technical strings
* hover-only actions must also exist in explicit menu or inspector actions

### Density options

Explorer and Search should support a future compact density mode without rewriting the whole app.
That means spacing must be tokenized from the start.

---

## Responsive behavior

This product is desktop-first, but it cannot collapse into nonsense on smaller screens.

Phase 1 implementation details now live in `phase-1-responsive-foundation.md`. Use that contract for exact viewport bands, typography floors, and responsive implementation rules.

### Desktop

* full left rail
* full content table/list
* optional right inspector

### Narrow desktop / tablet landscape

* compact left rail or icon rail
* right inspector collapses into drawer
* table columns prioritize essential metadata

### Mobile

Mobile should be a support mode, not the primary operational target.
For now:

* stacked cards for critical screens
* drawers instead of persistent side rails
* no attempt to cram the full raw explorer into a phone-width tragedy

---

## Suggested implementation strategy for SvelteKit

## 1. Build a theme foundation first

* central token map
* CSS custom properties for semantic roles
* light and dark theme classes or data attributes
* shared focus, hover, border, surface, and badge recipes

## 2. Refactor shell primitives

Start with:

* `AppShell`
* `SidebarNav`
* `PageHeader`
* `Toolbar`
* `Panel`
* `Button`
* `Badge`
* `Input`

## 3. Refactor view primitives

Then:

* `DataTable`
* `DataList`
* `InspectorRail`
* `SplitView`
* `SegmentedModeToggle`

## 4. Upgrade screens in this order

1. Explorer
2. Search
3. Workspace
4. Users & Roles
5. Operations
6. Settings
7. Display Modes

This order preserves the product-defining surfaces first.

---

## QA checklist for design review

Before writing TraeAI prompts, validate these decisions:

### Theme alignment

* Does light mode feel like the same product as dark mode?
* Is the accent blue too consumer-ish or just right?
* Are surface contrasts strong enough in dark mode without becoming muddy?

### Explorer

* Is Natural mode sufficiently human-first?
* Is Raw mode sufficiently technical without becoming hostile?
* Are list, tree, grid, and split views visually part of one family?

### Workspace

* Is published vs staging instantly legible?
* Does the right rail inspector feel useful, not decorative?

### Control Plane

* Do admin screens feel intentional rather than underdesigned?
* Are dangerous operations clearly separated from safe ones?

### Component system

* Are badges too numerous or appropriately expressive?
* Is the shell reusable enough that new screens will fit naturally?

---

## Decisions to lock before prompt-writing

These should be settled first because they affect every downstream component prompt:

1. **Theme philosophy**

   * one semantic token system with dual themes
   * dark as primary atmosphere, light as equal citizen

2. **Shell structure**

   * fixed left rail
   * flexible main workspace
   * optional right inspector rail

3. **Explorer priority**

   * Explorer becomes the flagship screen and baseline for component quality

4. **Badge semantics**

   * standardize state, role, type, security, and environment badge recipes

5. **Surface model**

   * border-led hierarchy, modest shadows, low-noise elevation

---

## Recommended next artifact after review

Once this brief is approved, the next deliverables should be:

1. a **token contract** for SvelteKit and Tailwind variables
2. a **component inventory** with file names and ownership
3. a **screen-by-screen change matrix**
4. a **set of TraeAI precision prompts** ordered by component and risk

---

## Proposed working direction

Use the first light mock as the emotional baseline for polish and confidence.
Use the dark EFSDB mocks as the domain and structural baseline.
The finished product should feel like a premium developer utility with publishing and storage intelligence, not a themed admin template.

That is the bar. Humans do love making things harder than necessary, so at least this time we can be systematic about it.

---

## QA review outcomes and locked decisions

### Theme

**Locked direction:** light and dark are equal citizens in one system.

* Use the **light reference for component styling language**:

  * card anatomy
  * spacing rhythm
  * typography clarity
  * form controls
  * panel polish
* Use the **dark references for page structure and operational layouts**:

  * navigation shell
  * explorer layouts
  * search structure
  * workspace and control-plane composition
* Do not overcommit to current repo blues.
* Explore a refined accent family that can borrow from the stronger greens already present in the repo, while keeping the overall system premium and restrained.
* Target outcome: a superior UI/UX, not a faithful continuation of current visual drift.

### Theme adjustments to apply

* Lean slightly toward **white/light Fluent or Metro-influenced surface logic** in both themes.
* Preserve strong contrast and technical seriousness in dark mode.
* Avoid consumer-SaaS over-bright blue unless it earns its place.
* Accent palette should be flexible enough to support:

  * primary action
  * success/live/system states
  * encryption/security states
  * publish/staging differentiation

### Explorer

**Locked direction:** Explorer remains the flagship screen, but raw mode semantics must change.

#### Raw mode correction

Raw mode must **not** expose natural JSON/text representations.
All FSDB content should remain encoded at rest and only be decrypted by the application when intentionally read through the correct pathway.

That means:

* raw mode should show storage-oriented metadata
* raw mode should show manifest/chunk references, hashes, permissions, sizes, and technical identifiers
* raw mode should **not** look like a normal text file browser for decrypted payloads
* even in UI inspection, raw mode should emphasize encoded storage objects, not friendly source documents

#### View model

The existing current-column layout should remain as one valid Explorer presentation.
Support a unified view switcher in the same work area for:

* columns
* list
* tree
* grid

These should feel like different renderers over the same Explorer state, not four disconnected experiences assembled by committee after no sleep.

#### Detail density

The extra metadata in the design is useful, but should be controlled.
Recommended direction:

* default list mode keeps primary columns readable
* optional detail mode or expandable columns reveals deeper metadata
* inspector rail can absorb secondary detail where appropriate
* avoid forcing full technical density into every row by default

### Workspace

**Locked direction:** published vs staging needs stronger top-level legibility.

Recommended changes:

* add a clear environment/status bar or header treatment that identifies:

  * published
  * staging
  * development
  * preview
* treat preview as a pre-published state with deliberate semantics
* likely support a clearer two-step progression:

  * staging / preview
  * publish / promote
* preserve the right-side inspector for now
* make environment state visible before users even read the cards

### Control Plane

**Locked direction:** current screens are underdesigned and need to move toward the light reference's professionalism.

Primary issues to solve:

* inconsistent typography hierarchy
* underwhelming spacing and panel structure
* weak visual grouping
* insufficiently polished admin layouts

Recommended direction:

* lean into the light design language for controls, cards, type, and spacing
* keep dark layout structure where it helps operational clarity
* make the control plane feel intentional, modern, and product-grade rather than merely present

### Components

**Locked direction:** current component breakdown remains broadly sound.

Additional UI behaviors to standardize:

* reusable badge recipes for state and type
* toast notifications for system and action feedback
* small fast FAB-style or action-button animations where useful
* motion should remain quick, subtle, and utility-first

### Locked decisions summary

1. **One semantic system, light and dark equal**
2. **Fixed left rail + flexible workspace + optional right inspector**
3. **Explorer is the flagship baseline screen**
4. **Standardized badges, toasts, and small fast motion details**
5. **Surface/elevation direction leans toward the cleaner light reference with slight Metro/Fluent influence**

### Implementation implications from QA

These decisions imply the following next artifacts should be updated accordingly:

* theme token contract with flexible blue/green accent exploration
* explorer mode semantics spec, especially raw mode behavior
* workspace environment-state model
* control-plane typography and spacing spec
* component recipes for badges, toasts, and fast utility motion
