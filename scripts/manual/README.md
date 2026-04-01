# Manual Operational Scripts

This directory contains standalone PHP helpers for recovery and maintenance operations. These scripts are typically invoked manually via CLI when automated systems fail or direct intervention is required.

## Directory Structure

*   `recovery/`
    Scripts designed to fix corrupted states, force cache invalidations, or restore baseline environment settings.
    *   `fix_cache.php`: Preloads the ghost cache for both staging and production.
    *   `fix_staging_root.php`: Resets workspace configuration state for staging.
    *   `force_rebuild.php`: Deep cache invalidation and forced materialization.

*   `maintenance/`
    General-purpose operational tools for standard maintenance and deployments.
    *   `rebuild_staging.php`: Convenience script to trigger a standard build.
    *   `sync_prod.php`: Manual deployment trigger to sync staging to production.

## Execution

Run these scripts from the project root using the project's specific `php.ini` configuration. For example:

```bash
php -c efsdb/php/core/php.ini scripts/manual/maintenance/rebuild_staging.php
```
