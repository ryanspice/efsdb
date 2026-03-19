<?php
declare(strict_types=1);

require_once __DIR__ . '/Phase0Harness.php';

$dataDir = 'B:/Dev/PHPFS/efsdb/php/core/.cache/phase0-store-update';
$bootstrapSecret = 'phase0-store-update-secret';

Phase0Harness::resetDir($dataDir);
$app = Phase0Harness::bootApp($dataDir, $bootstrapSecret);
$store = $app->getStore();

$failures = [];

$store->upsert('docs', [
    'id' => 'doc1',
    'logicalPath' => 'tenant/site/file.json',
    'title' => 'first',
    'slug' => 'same',
], ['lookupFields' => ['slug']]);

$store->upsert('docs', [
    'id' => 'doc1',
    'logicalPath' => 'tenant/site/file.json',
    'title' => 'second',
    'slug' => 'same',
], ['lookupFields' => ['slug']]);

$store->upsert('docs', [
    'id' => 'doc2',
    'logicalPath' => 'tenant/site/file.json',
    'title' => 'third',
    'slug' => 'new',
], ['lookupFields' => ['slug']]);

$store->upsert('docs', [
    'id' => 'doc1',
    'logicalPath' => 'tenant/site/file.json',
    'title' => 'fourth',
    'slug' => 'changed',
], ['lookupFields' => ['slug']]);

$doc1 = $store->readDocument('docs', 'doc1');
$all = $store->scanAllManifests('docs');
$logical = $store->findManifestByLogicalPath('docs', 'tenant/site/file.json');
$sameLookup = $store->findDocumentByLookup('docs', 'slug', 'same');
$changedLookup = $store->findDocumentByLookup('docs', 'slug', 'changed');

$oldDigest = $store->fingerprint('lookup:docs:slug', 'same');
$newDigest = $store->fingerprint('lookup:docs:slug', 'changed');
$oldLookupPath = $dataDir . '/idx/lookup/docs/' . substr($oldDigest, 0, 2) . '/' . substr($oldDigest, 2, 2) . '/' . $oldDigest . '.lk';
$newLookupPath = $dataDir . '/idx/lookup/docs/' . substr($newDigest, 0, 2) . '/' . substr($newDigest, 2, 2) . '/' . $newDigest . '.lk';

phase0_assert(
    ($doc1['title'] ?? null) === 'fourth',
    'Same-id upsert overwrites the manifest-visible document body',
    $failures
);

phase0_assert(
    count(array_filter($all, static fn(array $manifest): bool => ($manifest['logicalPath'] ?? null) === 'tenant/site/file.json')) === 2,
    'Current store allows duplicate logicalPath values across different ids',
    $failures
);

phase0_assert(
    is_array($logical) && (($logical['id'] ?? null) === 'doc1'),
    'findManifestByLogicalPath currently resolves by first scanned manifest match',
    $failures
);

phase0_assert(
    $sameLookup === null,
    'Stale lookup entries are rejected by document field revalidation',
    $failures
);

phase0_assert(
    is_array($changedLookup) && (($changedLookup['document']['id'] ?? null) === 'doc1'),
    'Updated lookup values resolve to the latest document body',
    $failures
);

phase0_assert(
    file_exists($oldLookupPath) && file_exists($newLookupPath),
    'Changing an indexed field leaves stale lookup residue on disk alongside the new lookup file',
    $failures
);

phase0_finish($failures);
