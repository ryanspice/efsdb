<?php
declare(strict_types=1);

require_once __DIR__ . '/../core/src/Store.php';
require_once __DIR__ . '/../core/src/Crypto.php';
require_once __DIR__ . '/../core/src/Schema.php';
require_once __DIR__ . '/../core/src/IndexManager.php';

function resetDir(string $dir): void
{
    if (!is_dir($dir)) {
        mkdir($dir, 0777, true);
        return;
    }

    $files = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::CHILD_FIRST
    );

    foreach ($files as $fileinfo) {
        $target = $fileinfo->isDir() ? 'rmdir' : 'unlink';
        $target($fileinfo->getRealPath());
    }
}

function requireString(array $payload, string $key): string
{
    $value = $payload[$key] ?? null;
    if (!is_string($value) || trim($value) === '') {
        throw new RuntimeException("Missing required string field: $key");
    }

    return trim($value);
}

function chunkPath(Store $store, string $entity, string $chunkHash): string
{
    $p1 = substr($chunkHash, 0, 2);
    $p2 = substr($chunkHash, 2, 2);
    return $store->rawChunksRoot($entity) . "/$p1/$p2/$chunkHash.c";
}

function copyFixture(string $source, string $destination): void
{
    if (!is_file($source)) {
        throw new RuntimeException("Fixture source not found: $source");
    }

    copy($source, $destination);
}

$fixturesDir = __DIR__ . '/../../../spec/fixtures';
if (!is_dir($fixturesDir)) {
    mkdir($fixturesDir, 0777, true);
}

$cacheDir = __DIR__ . '/../../../.cache/efsdb/tests/conformance/fixture-generation';
resetDir($cacheDir);

$rawKey = '12345678901234567890123456789012';
$b64Key = base64_encode($rawKey);
file_put_contents($cacheDir . '/master.key', $b64Key);

$schema = new Schema(__DIR__ . '/../core/schema');
$store = new Store($cacheDir, $schema);

$blobContent = 'Hello EFSDB Conformance';
$blobManifest = $store->storeFile('blob_test', $blobContent, [
    'id' => 'blob_001',
    'name' => 'hello.txt',
    'mime' => 'text/plain',
]);

$document = [
    'id' => 'doc_001',
    'foo' => 'bar',
    'num' => 42,
];
$docManifest = $store->upsert('doc_test', $document);

$blobStorageId = requireString($blobManifest, 'storageId');
$docStorageId = requireString($docManifest, 'storageId');
$blobChunkHash = requireString($blobManifest['chunks'][0] ?? [], 'hash');
$docChunkHash = requireString($docManifest['chunks'][0] ?? [], 'hash');

copyFixture(
    $store->rawManifestFilePath('blob_test', $blobStorageId),
    $fixturesDir . '/blob_manifest.m'
);
copyFixture(
    chunkPath($store, 'blob_test', $blobChunkHash),
    $fixturesDir . '/blob_chunk.c'
);
copyFixture(
    $store->rawManifestFilePath('doc_test', $docStorageId),
    $fixturesDir . '/doc_manifest.m'
);
copyFixture(
    chunkPath($store, 'doc_test', $docChunkHash),
    $fixturesDir . '/doc_chunk.c'
);

$indexData = [
    'ver' => 1,
    'entries' => [
        ['k' => 'blob_001', 'v' => 'blob_test'],
        ['k' => 'doc_001', 'v' => 'doc_test'],
    ],
];
$indexPlain = json_encode($indexData, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
$indexKey = Crypto::kdf($rawKey, str_pad('index', 8, "\0"), 4);
$indexAad = 'index:index_segment.seg';
$indexCiphertext = Crypto::aeadEncrypt($indexPlain, $indexKey, $indexAad);
file_put_contents($fixturesDir . '/index_segment.seg', $indexCiphertext);

$expected = [
    'test_master_key_b64' => $b64Key,
    'blob' => [
        'file' => 'blob_manifest.m',
        'id' => 'blob_001',
        'storage_id' => $blobStorageId,
        'bucket_id' => requireString($blobManifest, 'bucketId'),
        'manifest_aad' => 'manifest:' . $blobStorageId,
        'plaintext_content' => $blobContent,
        'mime' => 'text/plain',
        'chunk_file' => 'blob_chunk.c',
        'chunk_hash' => $blobChunkHash,
        'chunk_aad' => 'chunk:' . $blobChunkHash,
    ],
    'doc' => [
        'file' => 'doc_manifest.m',
        'id' => 'doc_001',
        'storage_id' => $docStorageId,
        'bucket_id' => requireString($docManifest, 'bucketId'),
        'manifest_aad' => 'manifest:' . $docStorageId,
        'data' => $document,
        'chunk_file' => 'doc_chunk.c',
        'chunk_hash' => $docChunkHash,
        'chunk_aad' => 'chunk:' . $docChunkHash,
    ],
    'index' => [
        'file' => 'index_segment.seg',
        'aad' => $indexAad,
        'content' => $indexData,
    ],
];

file_put_contents(
    $fixturesDir . '/expected.json',
    json_encode($expected, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR)
);

echo "Fixtures generated in $fixturesDir\n";
