# Characterization Inventory

Existing baselines kept in place:
- `efsdb/php/core/bin/apicheck.php`
- `efsdb/php/core/bin/authcheck.php`
- `efsdb/php/conformance/generate.php`
- `efsdb/php/conformance/run.php`
- `efsdb/php/core/bin/rendercheck.php` kept for triage, not blind deletion

Phase 0 characterization scripts added:
- `spec/characterization/php/LiveSeamRouteCharacterization.php`
- `spec/characterization/php/StoreUpdateCharacterization.php`
- `spec/characterization/php/AuthIdentityCharacterization.php`
- `spec/characterization/php/PermissionsExplorerCharacterization.php`
- `spec/characterization/php/ApiContentTypeCharacterization.php`
- `spec/characterization/php/LegacyRenderCompatibilityCharacterization.php`

Planned UI characterization placeholder:
- `spec/characterization/ui/ExplorerBehaviorCharacterization.spec.ts`

Phase 0 done depends on:
- route inventory complete for the live seam
- storage risk write-up complete
- rendercheck triage complete
- contract placeholders present under `web/contracts`
