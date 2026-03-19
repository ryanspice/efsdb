# rendercheck.php Triage

File under triage:
- `B:/Dev/PHPFS/efsdb/php/core/bin/rendercheck.php`

| Assertion | Still valuable | Obsolete | Replacement characterization location |
| --- | --- | --- | --- |
| products compatibility route renders HTML | yes | no | `spec/characterization/php/LegacyRenderCompatibilityCharacterization.php` |
| preview compatibility route renders HTML | yes | no | `spec/characterization/php/LegacyRenderCompatibilityCharacterization.php` |
| `/api/health` returns JSON without HTML wrapper | yes | no | `spec/characterization/php/ApiContentTypeCharacterization.php` |
| `/api/products` returns JSON without HTML wrapper | yes | no | `spec/characterization/php/ApiContentTypeCharacterization.php` |
| synthetic refresh cookie built from a fake JWT is valid setup | no | yes | replaced by real session setup in `LegacyRenderCompatibilityCharacterization.php` |
| synthetic `root` actor reflects the live role model | no | yes | replaced by current tenant-admin seeded identity in Phase 0 characterization |
| one mixed script should carry API and HTML checks together | no | yes | split across API and render characterization scripts |

Disposition:
- keep `rendercheck.php` in place during Phase 0
- do not delete blindly
- supersede deliberately after its useful assertions are covered elsewhere
