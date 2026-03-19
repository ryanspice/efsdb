<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$schema = new Schema(Phase0Harness::SCHEMA_DIR);
$failures = [];

$products = $schema->load('products');
$users = $schema->load(Store::ENTITY_SYSTEM_USERS);
$workspaceFiles = $schema->load('public_workspace_files');

phase0_assert(
    ($products['entity'] ?? null) === 'products'
        && is_array($products['fields'] ?? null)
        && is_array($products['indexes'] ?? null),
    'Products schema loads from the core schema directory with fields and indexes',
    $failures
);

phase0_assert(
    ($users['entity'] ?? null) === Store::ENTITY_SYSTEM_USERS
        && array_key_exists('username', $users['indexes'] ?? []),
    'System users schema is available for core identity records',
    $failures
);

phase0_assert(
    ($workspaceFiles['entity'] ?? null) === 'public_workspace_files'
        && (($schema->getChunkProfile('public_workspace_files')['target'] ?? null) === 1048576),
    'Public workspace files schema exposes the Phase 1 file chunk profile',
    $failures
);

phase0_assert(
    $schema->load('phase2_missing_schema')['entity'] === 'phase2_missing_schema',
    'Missing schema fallback remains explicit for compatibility-only entities',
    $failures
);

phase0_finish($failures);
