/**
 * Phase 0 placeholder for future automated UI characterization.
 *
 * No browser runner is wired into this repository yet, so Phase 0 freezes the
 * intended coverage here without claiming executable parity automation.
 *
 * Target checks for later automation:
 * - drag-to-scrub lists when a column has no visible scrollbar
 * - mouse wheel scroll on hovered column
 * - cover flow height tracks global explorer scale
 * - global explorer scale affects the full explorer consistently
 * - double click folder navigates
 * - double click file opens the minimal details popup
 * - double click raw manifest/chunk opens a permissioned relationship popup
 */

export const phase0ExplorerBehaviorCases = [
  'drag-to-scrub column lists',
  'wheel scroll on hovered column',
  'cover flow height reacts to explorer scale',
  'global explorer scale applies across the explorer',
  'double click folder navigates',
  'double click file opens minimal details popup',
  'double click raw manifest or chunk opens permissioned relationship popup',
] as const;
