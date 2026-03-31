<?php
declare(strict_types=1);

require_once __DIR__ . '/Crypto.php';
require_once __DIR__ . '/Schema.php';
require_once __DIR__ . '/IndexManager.php';
require_once __DIR__ . '/RequestTiming.php';

final class Store
{
    public const ENTITY_SYSTEM_USERS = 'system_users';
    public const ENTITY_SYSTEM_ROLES = 'system_roles';
    public const ENTITY_SYSTEM_SESSIONS = 'system_sessions';
    public const ENTITY_SYSTEM_SETTINGS = 'system_settings';
    public const ENTITY_SYSTEM_AUDIT = 'system_audit';

    private string $dir;
    private ?string $masterKeyB64 = null;
    private string $masterKey32 = '';
    private Schema $schemaLoader;
    private ?IndexManager $indexManager = null;

    public function __construct(string $appDir, Schema $schemaLoader)
    {
        $this->dir = rtrim(str_replace('\\', '/', $appDir), '/');
        $this->schemaLoader = $schemaLoader;

        $this->mkdir($this->dir);

        if (!extension_loaded('sodium') && !defined('EFSDB_TEST_MODE')) {
            error_log('Warning: libsodium extension is not loaded. Encryption features will fail.');
        }
    }

    public function getDataDir(): string
    {
        return $this->dir;
    }

    public function getIndexManager(): IndexManager
    {
        if ($this->indexManager === null) {
            $this->loadKey();
            $this->indexManager = new IndexManager($this->dir, $this->masterKeyB64 ?? '', $this);
        }

        return $this->indexManager;
    }

    public function hasMasterKey(): bool
    {
        return is_file($this->dir . '/master.key');
    }

    public function initMasterKey(): string
    {
        $b64 = Crypto::randomKeyB64();
        file_put_contents($this->dir . '/master.key', $b64, LOCK_EX);
        $this->loadKey();
        return $b64;
    }

    public function masterKeyB64(): string
    {
        $this->loadKey();
        return $this->masterKeyB64 ?? '';
    }

    public function fingerprint(string $namespace, string $value): string
    {
        $this->loadKey();
        return bin2hex(hash_hmac('sha256', $namespace . "\0" . $value, $this->deriveKey('index', 4), true));
    }

    public function bucketIdForEntity(string $entity): string
    {
        return 'b_' . substr($this->fingerprint('bucket', $entity), 0, 24);
    }

    public function fieldTokenForEntityField(string $entity, string $field): string
    {
        return 'f_' . substr($this->fingerprint('field:' . $this->bucketIdForEntity($entity), $field), 0, 24);
    }

    public function rawManifestFilePath(string $entity, string $storageId): string
    {
        return $this->manifestPath($entity, $storageId, null);
    }

    public function rawChunksRoot(string $entity): string
    {
        return $this->bucketChunksRoot($this->bucketIdForEntity($entity));
    }

    public function storageIdForLogicalId(string $entity, string $id): ?string
    {
        $catalog = $this->readCatalogRecordByLogicalKey($entity, $id);
        if ($catalog === null) {
            return null;
        }

        $storageId = trim((string)($catalog['storageId'] ?? ''));
        return $storageId === '' ? null : $storageId;
    }

    public function verifyMasterKey(string $b64): bool
    {
        $real = trim((string)@file_get_contents($this->dir . '/master.key'));
        return $real !== '' && hash_equals($real, $b64);
    }

    public function generateId(): string
    {
        return $this->newId();
    }

    /**
     * @param resource|string $input
     * @param array<string,mixed> $meta
     * @return array<string,mixed>
     */
    public function storeFile(string $entity, $input, array $meta = []): array
    {
        $this->loadKey();

        $schema = $this->schemaLoader->load($entity);
        $profile = $this->schemaLoader->getChunkProfile($entity);
        $targetSize = (int)($meta['chunkSize'] ?? $profile['target'] ?? 1048576);
        $id = (string)($meta['id'] ?? $this->newId());
        $logicalPath = isset($meta['logicalPath'])
            ? $this->normalizeLogicalPath((string)$meta['logicalPath'])
            : (isset($meta['name']) ? $this->normalizeLogicalPath((string)$meta['name']) : null);

        if (is_string($input)) {
            $handle = fopen('php://temp', 'r+');
            if ($handle === false) {
                throw new RuntimeException('Unable to allocate temp stream');
            }

            fwrite($handle, $input);
            rewind($handle);
            $input = $handle;
        }

        $chunks = [];
        $totalSize = 0;
        $chunkIdx = 0;

        while (!feof($input)) {
            $slice = fread($input, $targetSize);
            if ($slice === false || $slice === '') {
                break;
            }

            $chunkId = bin2hex(sodium_crypto_generichash($slice));
            $path = $this->chunkPath($entity, $chunkId);
            $this->ensureChunkDir($entity, $chunkId);

            if (!is_file($path)) {
                $blob = Crypto::aeadEncrypt($slice, $this->deriveKey('chunk', 3), "chunk:$chunkId");
                $tmp = $path . '.tmp';
                file_put_contents($tmp, $blob, LOCK_EX);
                rename($tmp, $path);
            }

            $len = strlen($slice);
            $chunks[] = [
                'i' => $chunkIdx++,
                'offset' => $totalSize,
                'len' => $len,
                'hash' => $chunkId,
            ];
            $totalSize += $len;
        }

        $mtime = gmdate('c');
        $mime = (string)($meta['mime'] ?? 'application/octet-stream');
        $indexSource = $meta['indexesSource'] ?? $meta;
        $lookupSource = is_array($indexSource) ? $indexSource : [];
        $lookupFields = is_array($meta['lookupFields'] ?? null)
            ? $meta['lookupFields']
            : $this->schemaLoader->getLookupFields($entity);
        $lookupValues = $this->extractLookupValues($lookupSource, $lookupFields);
        $indexes = $this->normalizeIndexes(
            $this->schemaLoader->extractIndexValues($entity, is_array($indexSource) ? $indexSource : []),
            [
                'id' => $id,
                'entity' => $entity,
                'logicalPath' => $logicalPath,
                'name' => $meta['name'] ?? ($logicalPath ? basename($logicalPath) : $id),
                'mime' => $mime,
                'size' => $totalSize,
                'updatedAt' => $mtime,
            ]
        );

        $manifest = [
            'v' => 1,
            'id' => $id,
            'entity' => $entity,
            'logicalPath' => $logicalPath,
            'size' => $totalSize,
            'mime' => $mime,
            'mtime' => $mtime,
            'chunking' => [
                'mode' => 'fixed',
                'size' => $targetSize,
            ],
            'hash' => ['algo' => 'blake2b'],
            'chunks' => $chunks,
            'indexes' => $indexes,
        ];

        if ($lookupValues !== []) {
            $manifest['lookupValues'] = $lookupValues;
        }

        if (isset($meta['lifecycle']) && is_array($meta['lifecycle']) && $meta['lifecycle'] !== []) {
            $manifest['lifecycle'] = $meta['lifecycle'];
        }

        $manifest = $this->writeManifest($entity, $id, $manifest);
        $this->writeLookups($entity, $id, $lookupSource, $lookupFields);
        $this->getIndexManager()->update($entity, $manifest, $schema['indexes'] ?? []);
        return $manifest;
    }

    /**
     * @param array<string,mixed>|object $doc
     * @param array<string,mixed> $meta
     * @return array<string,mixed>
     */
    public function upsert(string $entity, array|object $doc, array $meta = []): array
    {
        if (is_object($doc)) {
            $doc = (array)$doc;
        }

        $doc = $this->schemaLoader->normalizeDocument($entity, $doc);
        $id = (string)($doc['id'] ?? $meta['id'] ?? $this->newId());
        $doc['id'] = $id;
        $logicalPath = $meta['logicalPath']
            ?? ($doc['logicalPath'] ?? null)
            ?? $this->schemaLoader->buildLogicalPath($entity, $doc);
        $payload = json_encode($doc, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);

        $schema = $this->schemaLoader->load($entity);
        $profile = $this->schemaLoader->getChunkProfile($entity);
        $targetSize = (int)($meta['chunkSize'] ?? $profile['target'] ?? 65536);

        return $this->storeFile($entity, $payload, array_merge($meta, [
            'id' => $id,
            'mime' => $meta['mime'] ?? 'application/json; charset=utf-8',
            'name' => $meta['name'] ?? ($logicalPath ?? ($id . '.json')),
            'logicalPath' => $logicalPath,
            'indexesSource' => $doc,
            'lookupFields' => $meta['lookupFields'] ?? $this->schemaLoader->getLookupFields($entity),
            'chunkSize' => $targetSize,
        ]));
    }

    /**
     * @return array<string,mixed>
     */
    public function getManifest(string $entity, string $id): array
    {
        $this->loadKey();
        $catalog = $this->readCatalogRecordByLogicalKey($entity, $id);
        if ($catalog === null) {
            throw new RuntimeException("Manifest missing for $entity:$id");
        }

        $manifest = $this->readRawManifestFromCatalog($catalog);
        if ($manifest === null) {
            throw new RuntimeException("Read error for $entity:$id");
        }

        return $this->hydrateManifest($manifest, $catalog);
    }

    public function hasManifest(string $entity, string $id): bool
    {
        $catalog = $this->readCatalogRecordByLogicalKey($entity, $id);
        if ($catalog === null) {
            return false;
        }

        $storageId = trim((string)($catalog['storageId'] ?? ''));
        return $storageId !== '' && is_file($this->manifestPath($entity, $storageId, null));
    }

    /**
     * @return array<string,mixed>|null
     */
    public function getManifestByStorageId(string $entity, string $storageId): ?array
    {
        $catalog = $this->readV2CatalogRecord($storageId);
        if ($catalog === null || (string)($catalog['entity'] ?? '') !== $entity) {
            return null;
        }

        $manifest = $this->readRawManifestFromCatalog($catalog);
        if ($manifest === null) {
            return null;
        }

        return $this->hydrateManifest($manifest, $catalog);
    }

    public function readContent(string $entity, string $id): string
    {
        $manifest = $this->getManifest($entity, $id);
        return $this->readContentFromManifest($entity, $manifest);
    }

    /**
     * @param array<string,mixed> $manifest
     */
    public function readContentFromManifest(string $entity, array $manifest): string
    {
        return $this->reconstructContent($entity, $manifest);
    }

    /**
     * @return array<string,mixed>
     */
    public function readDocument(string $entity, string $id): array
    {
        $json = $this->readContent($entity, $id);
        $doc = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
        if (!is_array($doc)) {
            throw new RuntimeException("Document payload is not an object for $entity:$id");
        }

        return $doc;
    }

    public function getDocument(string $entity, string $id): ?array
    {
        if (!$this->hasManifest($entity, $id)) {
            return null;
        }

        return $this->readDocument($entity, $id);
    }

    /**
     * @return array{manifest: array<string,mixed>, document: array<string,mixed>}|null
     */
    public function findDocumentByIndex(string $entity, string $field, string $value): ?array
    {
        foreach ($this->scanAllManifests($entity) as $manifest) {
            $indexes = $manifest['indexes'] ?? [];
            if (($indexes[$field] ?? null) !== $value) {
                continue;
            }

            return [
                'manifest' => $manifest,
                'document' => $this->readDocument($entity, (string)$manifest['id']),
            ];
        }

        return null;
    }

    /**
     * @return array{manifest: array<string,mixed>, document: array<string,mixed>}|null
     */
    public function findDocumentByLookup(string $entity, string $field, string $value): ?array
    {
        $entry = $this->readLookupEntry($entity, $field, $value);
        if ($entry === null) {
            return null;
        }

        $id = (string)($entry['logicalId'] ?? '');
        if ($id === '' || !$this->hasManifest($entity, $id)) {
            return null;
        }

        $document = $this->readDocument($entity, $id);
        if (!$this->documentFieldMatches($document, $field, $value)) {
            return null;
        }

        return [
            'manifest' => $this->getManifest($entity, $id),
            'document' => $document,
        ];
    }

    /**
     * @return array<array<string,mixed>>
     */
    public function scanAllManifests(string $entity, int $limit = 5000): array
    {
        return $this->scanManifests($entity, $limit)['results'];
    }

    /**
     * @return array<array<string,mixed>>
     */
    public function scanVisibleManifests(string $entity, int $limit = 5000, bool $includeTombstoned = false): array
    {
        $results = [];
        foreach ($this->scanAllManifests($entity, $limit) as $manifest) {
            if (!$includeTombstoned && $this->isTombstonedManifest($manifest)) {
                continue;
            }

            $results[] = $manifest;
        }

        return $results;
    }

    /**
     * @param array<string,mixed> $manifest
     */
    public function isTombstonedManifest(array $manifest): bool
    {
        $tombstone = $manifest['lifecycle']['tombstone'] ?? null;
        return is_array($tombstone) && is_string($tombstone['at'] ?? null) && (string)$tombstone['at'] !== '';
    }

    /**
     * @param array<string,mixed> $manifest
     */
    public function isTombstoneExpired(array $manifest, ?int $now = null): bool
    {
        if (!$this->isTombstonedManifest($manifest)) {
            return false;
        }

        $retainUntil = (string)($manifest['lifecycle']['tombstone']['retainUntil'] ?? '');
        if ($retainUntil === '') {
            return false;
        }

        $timestamp = strtotime($retainUntil);
        if ($timestamp === false) {
            return false;
        }

        return $timestamp <= ($now ?? time());
    }

    /**
     * @param array<string,mixed> $options
     * @return array<string,mixed>
     */
    public function tombstone(string $entity, string $id, array $options = []): array
    {
        $manifest = $this->getManifest($entity, $id);
        $retentionDays = max(0, (int)($options['retentionDays'] ?? 30));
        $at = (string)($options['at'] ?? gmdate('c'));
        $retainUntil = (string)($options['retainUntil'] ?? gmdate('c', strtotime($at) + ($retentionDays * 86400)));

        $manifest['lifecycle'] ??= [];
        $manifest['lifecycle']['tombstone'] = [
            'at' => $at,
            'by' => isset($options['actorId']) ? (string)$options['actorId'] : 'system',
            'reason' => isset($options['reason']) ? (string)$options['reason'] : '',
            'retainUntil' => $retainUntil,
        ];
        $manifest['mtime'] = gmdate('c');

        $manifest = $this->writeManifest($entity, $id, $manifest);
        $this->getIndexManager()->update($entity, $manifest, $this->schemaLoader->getIndexDefinitions($entity));
        return $manifest;
    }

    /**
     * @param array<string,mixed> $options
     * @return array<string,mixed>
     */
    public function restore(string $entity, string $id, array $options = []): array
    {
        $manifest = $this->getManifest($entity, $id);
        if (!$this->isTombstonedManifest($manifest)) {
            return $manifest;
        }

        $manifest['lifecycle'] ??= [];
        unset($manifest['lifecycle']['tombstone']);
        $manifest['lifecycle']['restoredAt'] = gmdate('c');
        if (isset($options['actorId'])) {
            $manifest['lifecycle']['restoredBy'] = (string)$options['actorId'];
        }
        if ($manifest['lifecycle'] === []) {
            unset($manifest['lifecycle']);
        }
        $manifest['mtime'] = gmdate('c');

        $manifest = $this->writeManifest($entity, $id, $manifest);
        $this->getIndexManager()->update($entity, $manifest, $this->schemaLoader->getIndexDefinitions($entity));
        return $manifest;
    }

    public function deleteManifest(string $entity, string $id): bool
    {
        $manifest = $this->getDocumentManifest($entity, $id);
        if ($manifest === null) {
            return false;
        }

        $storageId = trim((string)($manifest['storageId'] ?? ''));
        if ($storageId === '') {
            return false;
        }

        $path = $this->manifestPath($entity, $storageId, null);
        $deleted = is_file($path) ? unlink($path) : false;
        if ($deleted) {
            $this->getIndexManager()->remove($entity, $id, $this->schemaLoader->getIndexDefinitions($entity));
            $this->deleteV2CatalogSidecars($entity, $manifest);
        }
        return $deleted;
    }

    public function deleteChunk(string $entity, string $chunkId): bool
    {
        $path = $this->chunkPath($entity, $chunkId);
        return is_file($path) ? unlink($path) : false;
    }

    /**
     * @param array<string,mixed> $manifest
     * @return array<int,string>
     */
    public function manifestChunkHashes(array $manifest): array
    {
        $hashes = [];
        foreach ($manifest['chunks'] ?? [] as $chunk) {
            $hash = (string)($chunk['hash'] ?? '');
            if ($hash !== '') {
                $hashes[] = $hash;
            }
        }

        return array_values(array_unique($hashes));
    }

    /**
     * @param array<string,mixed> $manifest
     */
    public function isChunkReferencedByAnyManifest(string $entity, string $chunkId, ?string $excludeId = null): bool
    {
        foreach ($this->scanAllManifests($entity, PHP_INT_MAX) as $manifest) {
            if ($excludeId !== null && (string)($manifest['id'] ?? '') === $excludeId) {
                continue;
            }

            foreach ($manifest['chunks'] ?? [] as $chunk) {
                if ((string)($chunk['hash'] ?? '') === $chunkId) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * @param array<string,mixed> $manifest
     */
    public function deleteLookupEntriesFromManifest(array $manifest): int
    {
        $entity = (string)($manifest['entity'] ?? '');
        if ($entity === '') {
            return 0;
        }

        $count = 0;
        foreach ($manifest['lookupValues'] ?? [] as $entry) {
            if (!is_array($entry)) {
                continue;
            }

            $field = (string)($entry['field'] ?? '');
            $value = (string)($entry['value'] ?? '');
            if ($field === '' || $value === '') {
                continue;
            }

            $path = $this->lookupPath($entity, $field, $value);
            if (is_file($path) && unlink($path)) {
                $count++;
            }
        }

        return $count;
    }

    /**
     * @return array<string,mixed>|null
     */
    public function findManifestByLogicalPath(string $entity, string $logicalPath): ?array
    {
        $normalized = $this->normalizeLogicalPath($logicalPath);
        $catalog = $this->readCatalogRecordByLogicalPath($entity, $normalized);
        if ($catalog === null) {
            return null;
        }

        $manifest = $this->readRawManifestFromCatalog($catalog);
        return $manifest === null ? null : $this->hydrateManifest($manifest, $catalog);
    }

    /**
     * @return string[]
     */
    public function listEntities(bool $includeSystem = false): array
    {
        $entries = [];
        foreach ($this->scanV2CatalogRecords() as $record) {
            $entity = trim((string)($record['entity'] ?? ''));
            if ($entity === '') {
                continue;
            }

            if (!$includeSystem && str_starts_with($entity, 'system_')) {
                continue;
            }

            $entries[$entity] = true;
        }

        $names = array_keys($entries);
        sort($names, SORT_STRING);
        return $names;
    }

    /**
     * @return array<string,mixed>
     */
    public function scanManifests(string $entity, int $limit = 50, ?string $cursor = null): array
    {
        return RequestTiming::current()?->measure(
            'manifest_scan',
            fn(): array => $this->scanManifestsInternal($entity, $limit, $cursor)
        ) ?? $this->scanManifestsInternal($entity, $limit, $cursor);
    }

    /**
     * @return array<string,mixed>
     */
    private function scanManifestsInternal(string $entity, int $limit = 50, ?string $cursor = null): array
    {
        $records = [];
        foreach ($this->scanV2CatalogRecords() as $record) {
            if ((string)($record['entity'] ?? '') !== $entity) {
                continue;
            }

            $records[] = $record;
        }

        usort($records, static function (array $left, array $right): int {
            $leftKey = (string)($left['logicalPath'] ?? $left['logicalId'] ?? $left['storageId'] ?? '');
            $rightKey = (string)($right['logicalPath'] ?? $right['logicalId'] ?? $right['storageId'] ?? '');
            return strcmp($leftKey, $rightKey);
        });

        $results = [];
        $count = 0;
        $start = $cursor === null || $cursor === '';

        foreach ($records as $record) {
            $storageId = trim((string)($record['storageId'] ?? ''));
            if ($storageId === '') {
                continue;
            }

            if (!$start) {
                if ($storageId === $cursor) {
                    $start = true;
                }
                continue;
            }

            if ($count >= $limit) {
                return ['results' => $results, 'nextCursor' => $storageId];
            }

            try {
                $manifest = $this->readRawManifestFromCatalog($record);
                if ($manifest === null) {
                    continue;
                }

                $results[] = $this->hydrateManifest($manifest, $record);
                $count++;
            } catch (Throwable) {
            }
        }

        return ['results' => $results, 'nextCursor' => null];
    }

    public function normalizeLogicalPath(string $path): string
    {
        $path = trim(str_replace('\\', '/', $path));
        $path = preg_replace('#/+#', '/', $path) ?? $path;
        return ltrim($path, '/');
    }

    private function mkdir(string $dir): void
    {
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }
    }

    private function loadKey(): void
    {
        if ($this->masterKeyB64 !== null) {
            return;
        }

        if ($this->hasMasterKey()) {
            $this->masterKeyB64 = trim((string)file_get_contents($this->dir . '/master.key'));
            $this->masterKey32 = Crypto::keyFromB64($this->masterKeyB64);
        }
    }

    private function newId(): string
    {
        return bin2hex(random_bytes(16));
    }

    private function newStorageId(): string
    {
        return 'm_' . bin2hex(random_bytes(16));
    }

    private function deriveKey(string $type, int $id): string
    {
        return Crypto::kdf($this->masterKey32, str_pad($type, 8, "\0"), $id);
    }

    /**
     * @param array<string,mixed> $manifest
     * @return array<string,mixed>
     */
    private function writeManifest(string $entity, string $id, array $manifest): array
    {
        $previousManifest = $this->existingManifestForWrite($entity, $id);
        $manifest['id'] = $id;
        $manifest['entity'] = $entity;
        $manifest['storageId'] = $this->resolveStorageId($manifest, $previousManifest);
        $manifest['bucketId'] = $this->bucketIdForEntity($entity);
        $this->ensureEntityDirs($entity);

        $path = $this->manifestPath($entity, (string)$manifest['storageId'], null);
        $plain = json_encode($this->rawManifestPayload($manifest), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
        $blob = Crypto::aeadEncrypt($plain, $this->deriveKey('manifest', 2), 'manifest:' . (string)$manifest['storageId']);

        $tmp = $path . '.tmp';
        file_put_contents($tmp, $blob, LOCK_EX);
        rename($tmp, $path);

        $this->syncV2CatalogSidecars($entity, $manifest, $previousManifest);
        return $manifest;
    }

    /**
     * @param array<string,mixed> $manifest
     */
    private function reconstructContent(string $entity, array $manifest): string
    {
        $storageLabel = (string)($manifest['storageId'] ?? $manifest['id'] ?? 'manifest');
        $mtime = (string)($manifest['mtime'] ?? '');
        $cacheDir = $this->dir . '/.ghost/' . $entity;
        $cachePath = $cacheDir . '/' . md5($storageLabel . $mtime) . '.decodedfile';

        if (is_file($cachePath)) {
            $cached = file_get_contents($cachePath);
            if ($cached !== false) {
                return $cached;
            }
        }

        $out = '';
        foreach ($manifest['chunks'] as $chunk) {
            $chunkId = (string)$chunk['hash'];
            $path = $this->chunkPath($entity, $chunkId);
            $blob = file_get_contents($path);
            if ($blob === false) {
                throw new RuntimeException("Chunk missing for $storageLabel: $chunkId");
            }

            $startedAt = microtime(true);
            $plain = Crypto::aeadDecrypt($blob, $this->deriveKey('chunk', 3), "chunk:$chunkId");
            RequestTiming::current()?->addDuration('decrypt', (microtime(true) - $startedAt) * 1000);
            $hash = bin2hex(sodium_crypto_generichash($plain));
            if (!hash_equals($chunkId, $hash)) {
                throw new RuntimeException("Chunk hash mismatch for $storageLabel: $chunkId");
            }

            $out .= $plain;
        }

        if (!is_dir($cacheDir)) {
            @mkdir($cacheDir, 0777, true);
        }
        @file_put_contents($cachePath, $out, LOCK_EX);

        return $out;
    }

    private function chunkPath(string $entity, string $chunkId): string
    {
        $p1 = substr($chunkId, 0, 2);
        $p2 = substr($chunkId, 2, 2);
        return $this->rawChunksRoot($entity) . "/$p1/$p2/$chunkId.c";
    }

    private function ensureChunkDir(string $entity, string $chunkId): void
    {
        $p1 = substr($chunkId, 0, 2);
        $p2 = substr($chunkId, 2, 2);
        $this->mkdir($this->rawChunksRoot($entity) . "/$p1/$p2");
    }

    private function lookupPath(string $entity, string $field, string $value): string
    {
        $bucketId = $this->bucketIdForEntity($entity);
        $fieldToken = $this->fieldTokenForEntityField($entity, $field);
        $digest = $this->fingerprint("lookup:$bucketId:$fieldToken", $value);
        $p1 = substr($digest, 0, 2);
        $p2 = substr($digest, 2, 2);
        return $this->dir . "/idx/v2/lookup/$bucketId/$fieldToken/$p1/$p2/$digest.lk";
    }

    private function ensureLookupDir(string $entity, string $field, string $value): void
    {
        $bucketId = $this->bucketIdForEntity($entity);
        $fieldToken = $this->fieldTokenForEntityField($entity, $field);
        $digest = $this->fingerprint("lookup:$bucketId:$fieldToken", $value);
        $p1 = substr($digest, 0, 2);
        $p2 = substr($digest, 2, 2);
        $this->mkdir($this->dir . "/idx/v2/lookup/$bucketId/$fieldToken/$p1/$p2");
    }

    private function manifestPath(string $entity, string $storageId, ?string $shard): string
    {
        return $this->bucketManifestsRoot($this->bucketIdForEntity($entity)) . '/' . ($shard ? "$shard/" : '') . $storageId . '.m';
    }

    private function ensureEntityDirs(string $entity): void
    {
        $bucketId = $this->bucketIdForEntity($entity);
        $this->mkdir($this->bucketManifestsRoot($bucketId));
        $this->mkdir($this->bucketChunksRoot($bucketId));
        $this->mkdir($this->dir . "/idx");
    }

    private function findManifestPath(string $entity, string $id): string
    {
        $catalog = $this->readCatalogRecordByLogicalKey($entity, $id);
        if ($catalog === null) {
            return $this->manifestPath($entity, $id, null);
        }

        $storageId = trim((string)($catalog['storageId'] ?? ''));
        return $this->manifestPath($entity, $storageId !== '' ? $storageId : $id, null);
    }

    /**
     * @param array<string,mixed> $source
     * @param array<int,string> $lookupFields
     */
    private function writeLookups(string $entity, string $id, array $source, array $lookupFields): void
    {
        $fields = array_values(array_unique(array_map('strval', $lookupFields)));
        if ($fields === []) {
            return;
        }

        $currentManifest = $this->getDocumentManifest($entity, $id);
        $storageId = is_array($currentManifest) ? (string)($currentManifest['storageId'] ?? '') : '';

        foreach ($fields as $field) {
            if (!array_key_exists($field, $source)) {
                continue;
            }

            $value = $source[$field];
            if (!is_scalar($value) || $value === '') {
                continue;
            }

            $value = (string)$value;
            $this->ensureLookupDir($entity, $field, $value);

            $bucketId = $this->bucketIdForEntity($entity);
            $fieldToken = $this->fieldTokenForEntityField($entity, $field);
            $digest = $this->fingerprint("lookup:$bucketId:$fieldToken", $value);
            $aad = "lookup:$bucketId:$fieldToken:$digest";
            $payload = [
                'entity' => $entity,
                'field' => $field,
                'value' => $value,
                'logicalId' => $id,
                'storageId' => $storageId,
                'updatedAt' => gmdate('c'),
            ];

            $plain = json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
            $blob = Crypto::aeadEncrypt($plain, $this->deriveKey('index', 4), $aad);
            $path = $this->lookupPath($entity, $field, $value);
            $tmp = $path . '.tmp';
            file_put_contents($tmp, $blob, LOCK_EX);
            rename($tmp, $path);
        }
    }

    /**
     * @param array<string,mixed> $source
     * @param array<int,string> $lookupFields
     * @return array<int,array{field:string,value:string}>
     */
    private function extractLookupValues(array $source, array $lookupFields): array
    {
        $entries = [];
        foreach (array_values(array_unique(array_map('strval', $lookupFields))) as $field) {
            if (!array_key_exists($field, $source)) {
                continue;
            }

            $value = $source[$field];
            if (!is_scalar($value) || $value === '') {
                continue;
            }

            $entries[] = [
                'field' => $field,
                'value' => (string)$value,
            ];
        }

        return $entries;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readLookupEntry(string $entity, string $field, string $value): ?array
    {
        $loader = function () use ($entity, $field, $value): ?array {
            $path = $this->lookupPath($entity, $field, $value);
            if (!is_file($path)) {
                return null;
            }

            $bucketId = $this->bucketIdForEntity($entity);
            $fieldToken = $this->fieldTokenForEntityField($entity, $field);
            $digest = $this->fingerprint("lookup:$bucketId:$fieldToken", $value);
            $blob = file_get_contents($path);
            if ($blob === false) {
                return null;
            }

            $startedAt = microtime(true);
            $plain = Crypto::aeadDecrypt($blob, $this->deriveKey('index', 4), "lookup:$bucketId:$fieldToken:$digest");
            RequestTiming::current()?->addDuration('decrypt', (microtime(true) - $startedAt) * 1000);
            $entry = json_decode($plain, true, 512, JSON_THROW_ON_ERROR);
            return is_array($entry) ? $entry : null;
        };

        return RequestTiming::current()?->measure('index_lookup', $loader) ?? $loader();
    }

    /**
     * @param array<string,mixed> $document
     */
    private function documentFieldMatches(array $document, string $field, string $value): bool
    {
        if (!array_key_exists($field, $document)) {
            return false;
        }

        $candidate = $document[$field];
        return is_scalar($candidate) && (string)$candidate === $value;
    }

    /**
     * @param array<string,mixed> $schema
     * @param array<string,mixed> $data
     * @param array<string,mixed> $defaults
     * @return array<string,mixed>
     */
    private function normalizeIndexes(array $schema, array $defaults): array
    {
        $indexes = array_merge($schema, $defaults);
        foreach ($indexes as $key => $value) {
            if ($value === null || $value === '') {
                unset($indexes[$key]);
            }
        }

        return $indexes;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function existingManifestForWrite(string $entity, string $id): ?array
    {
        if (!$this->hasManifest($entity, $id)) {
            return null;
        }

        try {
            return $this->getManifest($entity, $id);
        } catch (Throwable) {
            return null;
        }
    }

    /**
     * @param array<string,mixed> $manifest
     * @param array<string,mixed>|null $previousManifest
     */
    private function resolveStorageId(array $manifest, ?array $previousManifest): string
    {
        $candidate = trim((string)($manifest['storageId'] ?? ''));
        if ($candidate !== '') {
            return $candidate;
        }

        $previous = trim((string)($previousManifest['storageId'] ?? ''));
        if ($previous !== '') {
            return $previous;
        }

        return $this->newStorageId();
    }

    /**
     * @param array<string,mixed> $manifest
     * @param array<string,mixed>|null $previousManifest
     */
    private function syncV2CatalogSidecars(string $entity, array $manifest, ?array $previousManifest): void
    {
        $this->writeV2CatalogRecord($entity, $manifest);
        $this->writeV2CatalogLookup('path', $entity, $this->catalogLogicalPath($manifest), $manifest);
        $this->writeV2CatalogLookup('key', $entity, $this->catalogLogicalKey($manifest), $manifest);

        if ($previousManifest === null) {
            return;
        }

        $previousStorageId = trim((string)($previousManifest['storageId'] ?? ''));
        $currentStorageId = trim((string)($manifest['storageId'] ?? ''));
        if ($previousStorageId !== '' && $previousStorageId !== $currentStorageId) {
            $this->deleteV2CatalogRecordByStorageId($previousStorageId);
        }

        $previousPath = $this->catalogLogicalPath($previousManifest);
        $currentPath = $this->catalogLogicalPath($manifest);
        if ($previousPath !== null && $previousPath !== $currentPath) {
            $this->deleteV2CatalogLookup('path', $entity, $previousPath);
        }

        $previousKey = $this->catalogLogicalKey($previousManifest);
        $currentKey = $this->catalogLogicalKey($manifest);
        if ($previousKey !== null && $previousKey !== $currentKey) {
            $this->deleteV2CatalogLookup('key', $entity, $previousKey);
        }
    }

    /**
     * @param array<string,mixed>|null $manifest
     */
    private function deleteV2CatalogSidecars(string $entity, ?array $manifest): void
    {
        if (!is_array($manifest)) {
            return;
        }

        $storageId = trim((string)($manifest['storageId'] ?? ''));
        if ($storageId !== '') {
            $this->deleteV2CatalogRecordByStorageId($storageId);
        }

        $this->deleteV2CatalogLookup('path', $entity, $this->catalogLogicalPath($manifest));
        $this->deleteV2CatalogLookup('key', $entity, $this->catalogLogicalKey($manifest));
    }

    /**
     * @param array<string,mixed> $manifest
     */
    private function writeV2CatalogRecord(string $entity, array $manifest): void
    {
        $storageId = trim((string)($manifest['storageId'] ?? ''));
        if ($storageId === '') {
            return;
        }

        $payload = [
            'v' => 2,
            'storageId' => $storageId,
            'bucketId' => (string)($manifest['bucketId'] ?? $this->bucketIdForEntity($entity)),
            'entity' => $entity,
            'logicalId' => (string)($manifest['id'] ?? ''),
            'logicalPath' => $this->catalogLogicalPath($manifest),
            'logicalKey' => $this->catalogLogicalKey($manifest),
            'mime' => (string)($manifest['mime'] ?? 'application/octet-stream'),
            'size' => (int)($manifest['size'] ?? 0),
            'updatedAt' => (string)($manifest['mtime'] ?? gmdate('c')),
            'indexes' => is_array($manifest['indexes'] ?? null) ? $manifest['indexes'] : [],
            'lookupValues' => is_array($manifest['lookupValues'] ?? null) ? $manifest['lookupValues'] : [],
            'tombstoned' => $this->isTombstonedManifest($manifest),
        ];

        $this->writeEncryptedV2CatalogPayload(
            $this->v2CatalogRecordPath($storageId),
            "v2catalog:record:$storageId",
            $payload
        );
    }

    /**
     * @param array<string,mixed> $manifest
     */
    private function writeV2CatalogLookup(string $type, string $entity, ?string $value, array $manifest): void
    {
        if ($value === null || $value === '') {
            return;
        }

        $digest = $this->fingerprint("v2:catalog:$type:$entity", $value);
        $payload = [
            'v' => 2,
            'type' => $type,
            'entity' => $entity,
            'bucketId' => (string)($manifest['bucketId'] ?? $this->bucketIdForEntity($entity)),
            'storageId' => (string)($manifest['storageId'] ?? ''),
            'logicalId' => (string)($manifest['id'] ?? ''),
            'logicalPath' => $this->catalogLogicalPath($manifest),
            'logicalKey' => $this->catalogLogicalKey($manifest),
            'updatedAt' => (string)($manifest['mtime'] ?? gmdate('c')),
        ];

        $this->writeEncryptedV2CatalogPayload(
            $this->v2CatalogLookupPath($type, $entity, $value),
            "v2catalog:$type:$entity:$digest",
            $payload
        );
    }

    private function deleteV2CatalogRecordByStorageId(string $storageId): void
    {
        if ($storageId === '') {
            return;
        }

        $path = $this->v2CatalogRecordPath($storageId);
        if (is_file($path)) {
            unlink($path);
        }
    }

    private function deleteV2CatalogLookup(string $type, string $entity, ?string $value): void
    {
        if ($value === null || $value === '') {
            return;
        }

        $path = $this->v2CatalogLookupPath($type, $entity, $value);
        if (is_file($path)) {
            unlink($path);
        }
    }

    /**
     * @param array<string,mixed> $payload
     */
    private function writeEncryptedV2CatalogPayload(string $path, string $aad, array $payload): void
    {
        $this->mkdir(dirname($path));
        $plain = json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
        $blob = Crypto::aeadEncrypt($plain, $this->deriveKey('catalog', 5), $aad);
        $tmp = $path . '.tmp';
        file_put_contents($tmp, $blob, LOCK_EX);
        rename($tmp, $path);
    }

    /**
     * @return array<string,mixed>|null
     */
    private function getDocumentManifest(string $entity, string $id): ?array
    {
        if (!$this->hasManifest($entity, $id)) {
            return null;
        }

        try {
            return $this->getManifest($entity, $id);
        } catch (Throwable) {
            return null;
        }
    }

    /**
     * @param array<string,mixed> $catalog
     * @return array<string,mixed>|null
     */
    private function readRawManifestFromCatalog(array $catalog): ?array
    {
        $this->loadKey();
        $storageId = trim((string)($catalog['storageId'] ?? ''));
        $bucketId = trim((string)($catalog['bucketId'] ?? ''));
        if ($storageId === '' || $bucketId === '') {
            return null;
        }

        $path = $this->bucketManifestsRoot($bucketId) . '/' . $storageId . '.m';
        if (!is_file($path)) {
            return null;
        }

        $decode = function () use ($path, $storageId): ?array {
            $blob = file_get_contents($path);
            if ($blob === false) {
                return null;
            }

            $plain = Crypto::aeadDecrypt($blob, $this->deriveKey('manifest', 2), "manifest:$storageId");
            $manifest = json_decode($plain, true, 512, JSON_THROW_ON_ERROR);
            return is_array($manifest) ? $manifest : null;
        };

        return RequestTiming::current()?->measure('decrypt', $decode) ?? $decode();
    }

    /**
     * @param array<string,mixed> $rawManifest
     * @param array<string,mixed> $catalog
     * @return array<string,mixed>
     */
    private function hydrateManifest(array $rawManifest, array $catalog): array
    {
        $hydrated = $rawManifest;
        $hydrated['entity'] = (string)($catalog['entity'] ?? '');
        $hydrated['id'] = (string)($catalog['logicalId'] ?? $catalog['logicalKey'] ?? '');
        $hydrated['logicalPath'] = $catalog['logicalPath'] ?? null;
        $hydrated['indexes'] = is_array($catalog['indexes'] ?? null) ? $catalog['indexes'] : [];
        $hydrated['lookupValues'] = is_array($catalog['lookupValues'] ?? null) ? $catalog['lookupValues'] : [];
        $hydrated['bucketId'] = (string)($catalog['bucketId'] ?? $rawManifest['bucketId'] ?? '');
        return $hydrated;
    }

    /**
     * @param array<string,mixed> $manifest
     * @return array<string,mixed>
     */
    private function rawManifestPayload(array $manifest): array
    {
        $payload = [
            'v' => 2,
            'storageId' => (string)($manifest['storageId'] ?? ''),
            'bucketId' => (string)($manifest['bucketId'] ?? ''),
            'size' => (int)($manifest['size'] ?? 0),
            'mime' => (string)($manifest['mime'] ?? 'application/octet-stream'),
            'mtime' => (string)($manifest['mtime'] ?? gmdate('c')),
            'chunking' => is_array($manifest['chunking'] ?? null) ? $manifest['chunking'] : [
                'mode' => 'fixed',
                'size' => 65536,
            ],
            'hash' => is_array($manifest['hash'] ?? null) ? $manifest['hash'] : ['algo' => 'blake2b'],
            'chunks' => is_array($manifest['chunks'] ?? null) ? $manifest['chunks'] : [],
        ];

        if (isset($manifest['lifecycle']) && is_array($manifest['lifecycle']) && $manifest['lifecycle'] !== []) {
            $payload['lifecycle'] = $manifest['lifecycle'];
        }

        return $payload;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readCatalogRecordByLogicalKey(string $entity, string $id): ?array
    {
        $candidate = trim($id);
        if ($candidate === '') {
            return null;
        }

        $record = $this->readV2CatalogLookup('key', $entity, $candidate);
        if ($record === null) {
            return null;
        }

        $storageId = trim((string)($record['storageId'] ?? ''));
        if ($storageId === '') {
            return null;
        }

        return $this->readV2CatalogRecord($storageId);
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readCatalogRecordByLogicalPath(string $entity, string $logicalPath): ?array
    {
        $candidate = trim($logicalPath);
        if ($candidate === '') {
            return null;
        }

        $record = $this->readV2CatalogLookup('path', $entity, $candidate);
        if ($record === null) {
            return null;
        }

        $storageId = trim((string)($record['storageId'] ?? ''));
        if ($storageId === '') {
            return null;
        }

        return $this->readV2CatalogRecord($storageId);
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readV2CatalogRecord(string $storageId): ?array
    {
        if ($storageId === '') {
            return null;
        }

        return $this->readEncryptedCatalogPayload(
            $this->v2CatalogRecordPath($storageId),
            "v2catalog:record:$storageId"
        );
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readV2CatalogLookup(string $type, string $entity, string $value): ?array
    {
        if ($value === '') {
            return null;
        }

        $digest = $this->fingerprint("v2:catalog:$type:$entity", $value);
        return $this->readEncryptedCatalogPayload(
            $this->v2CatalogLookupPath($type, $entity, $value),
            "v2catalog:$type:$entity:$digest"
        );
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readEncryptedCatalogPayload(string $path, string $aad): ?array
    {
        $this->loadKey();
        if (!is_file($path)) {
            return null;
        }

        $blob = file_get_contents($path);
        if ($blob === false) {
            return null;
        }

        $decode = function () use ($blob, $aad): ?array {
            $plain = Crypto::aeadDecrypt($blob, $this->deriveKey('catalog', 5), $aad);
            $payload = json_decode($plain, true, 512, JSON_THROW_ON_ERROR);
            return is_array($payload) ? $payload : null;
        };

        return RequestTiming::current()?->measure('decrypt', $decode) ?? $decode();
    }

    /**
     * @return list<array<string,mixed>>
     */
    private function scanV2CatalogRecords(): array
    {
        $root = $this->dir . '/idx/v2/catalog/records';
        if (!is_dir($root)) {
            return [];
        }

        $records = [];
        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($root, RecursiveDirectoryIterator::SKIP_DOTS)
        );

        foreach ($iterator as $item) {
            if (!$item->isFile() || !str_ends_with($item->getFilename(), '.cat')) {
                continue;
            }

            $storageId = basename($item->getFilename(), '.cat');
            $record = $this->readV2CatalogRecord($storageId);
            if (is_array($record)) {
                $records[] = $record;
            }
        }

        return $records;
    }

    private function bucketRoot(string $bucketId): string
    {
        return $this->dir . '/obj/' . $bucketId;
    }

    private function bucketManifestsRoot(string $bucketId): string
    {
        return $this->bucketRoot($bucketId) . '/manifests';
    }

    private function bucketChunksRoot(string $bucketId): string
    {
        return $this->bucketRoot($bucketId) . '/chunks';
    }

    private function v2CatalogRecordPath(string $storageId): string
    {
        $digest = $this->fingerprint('v2:catalog:record', $storageId);
        $p1 = substr($digest, 0, 2);
        $p2 = substr($digest, 2, 2);
        return $this->dir . "/idx/v2/catalog/records/$p1/$p2/$storageId.cat";
    }

    private function v2CatalogLookupPath(string $type, string $entity, string $value): string
    {
        $digest = $this->fingerprint("v2:catalog:$type:$entity", $value);
        $p1 = substr($digest, 0, 2);
        $p2 = substr($digest, 2, 2);
        return $this->dir . "/idx/v2/catalog/$type/$p1/$p2/$digest.cat";
    }

    /**
     * @param array<string,mixed> $manifest
     */
    private function catalogLogicalPath(array $manifest): ?string
    {
        $logicalPath = trim((string)($manifest['logicalPath'] ?? ''));
        if ($logicalPath === '') {
            return null;
        }

        return $this->normalizeLogicalPath($logicalPath);
    }

    /**
     * @param array<string,mixed> $manifest
     */
    private function catalogLogicalKey(array $manifest): ?string
    {
        $indexes = is_array($manifest['indexes'] ?? null) ? $manifest['indexes'] : [];
        $candidate = $indexes['id'] ?? ($manifest['id'] ?? null);
        if (!is_scalar($candidate)) {
            return null;
        }

        $candidate = trim((string)$candidate);
        return $candidate === '' ? null : $candidate;
    }

}
