<?php
declare(strict_types=1);

require_once __DIR__ . '/Crypto.php';
require_once __DIR__ . '/Schema.php';
require_once __DIR__ . '/IndexManager.php';

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

    public function verifyMasterKey(string $b64): bool
    {
        $real = trim((string)@file_get_contents($this->dir . '/master.key'));
        return $real !== '' && hash_equals($real, $b64);
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

        $this->writeManifest($entity, $id, $manifest);
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
        $path = $this->findManifestPath($entity, $id);
        if (!file_exists($path)) {
            throw new RuntimeException("Manifest missing for $entity:$id");
        }

        $blob = file_get_contents($path);
        if ($blob === false) {
            throw new RuntimeException("Read error for $entity:$id");
        }

        $plain = Crypto::aeadDecrypt($blob, $this->deriveKey('manifest', 2), "manifest:$id");
        $manifest = json_decode($plain, true, 512, JSON_THROW_ON_ERROR);
        if (!is_array($manifest)) {
            throw new RuntimeException("Bad manifest format");
        }

        return $manifest;
    }

    public function hasManifest(string $entity, string $id): bool
    {
        return is_file($this->manifestPath($entity, $id, null));
    }

    public function readContent(string $entity, string $id): string
    {
        $manifest = $this->getManifest($entity, $id);
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

        $id = (string)($entry['id'] ?? '');
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

        $this->writeManifest($entity, $id, $manifest);
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

        $this->writeManifest($entity, $id, $manifest);
        $this->getIndexManager()->update($entity, $manifest, $this->schemaLoader->getIndexDefinitions($entity));
        return $manifest;
    }

    public function deleteManifest(string $entity, string $id): bool
    {
        $path = $this->findManifestPath($entity, $id);
        $deleted = is_file($path) ? unlink($path) : false;
        if ($deleted) {
            $this->getIndexManager()->remove($entity, $id, $this->schemaLoader->getIndexDefinitions($entity));
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
        foreach ($this->scanAllManifests($entity) as $manifest) {
            if (($manifest['logicalPath'] ?? null) === $normalized) {
                return $manifest;
            }
        }

        return null;
    }

    /**
     * @return string[]
     */
    public function listEntities(bool $includeSystem = false): array
    {
        $entries = [];
        $scanned = @scandir($this->dir);
        if (!$scanned) {
            return [];
        }

        foreach ($scanned as $entry) {
            if ($entry === '.' || $entry === '..' || $entry === 'idx') {
                continue;
            }

            $path = $this->dir . '/' . $entry;
            if (!is_dir($path) || !is_dir($path . '/manifests')) {
                continue;
            }

            if (!$includeSystem && str_starts_with($entry, 'system_')) {
                continue;
            }

            $entries[] = $entry;
        }

        sort($entries, SORT_STRING);
        return $entries;
    }

    /**
     * @return array<string,mixed>
     */
    public function scanManifests(string $entity, int $limit = 50, ?string $cursor = null): array
    {
        $this->loadKey();
        $dir = $this->dir . "/$entity/manifests";
        if (!is_dir($dir)) {
            return ['results' => [], 'nextCursor' => null];
        }

        $files = scandir($dir);
        if (!$files) {
            return ['results' => [], 'nextCursor' => null];
        }

        $results = [];
        $count = 0;
        $start = $cursor ? false : true;

        foreach ($files as $file) {
            if ($file === '.' || $file === '..') {
                continue;
            }
            if (!str_ends_with($file, '.m')) {
                continue;
            }

            if (!$start) {
                if ($file === $cursor) {
                    $start = true;
                }
                continue;
            }

            if ($count >= $limit) {
                return ['results' => $results, 'nextCursor' => $file];
            }

            try {
                if (preg_match('/^manifest_(.+)\.m$/', $file, $matches)) {
                    $results[] = $this->getManifest($entity, $matches[1]);
                    $count++;
                }
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

    private function deriveKey(string $type, int $id): string
    {
        return Crypto::kdf($this->masterKey32, str_pad($type, 8, "\0"), $id);
    }

    private function writeManifest(string $entity, string $id, array $manifest): void
    {
        $this->ensureEntityDirs($entity);

        $path = $this->manifestPath($entity, $id, null);
        $plain = json_encode($manifest, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
        $blob = Crypto::aeadEncrypt($plain, $this->deriveKey('manifest', 2), "manifest:$id");

        $tmp = $path . '.tmp';
        file_put_contents($tmp, $blob, LOCK_EX);
        rename($tmp, $path);
    }

    /**
     * @param array<string,mixed> $manifest
     */
    private function reconstructContent(string $entity, array $manifest): string
    {
        $out = '';
        foreach ($manifest['chunks'] as $chunk) {
            $chunkId = (string)$chunk['hash'];
            $path = $this->chunkPath($entity, $chunkId);
            $blob = file_get_contents($path);
            if ($blob === false) {
                throw new RuntimeException("Chunk missing for {$manifest['id']}: $chunkId");
            }

            $plain = Crypto::aeadDecrypt($blob, $this->deriveKey('chunk', 3), "chunk:$chunkId");
            $hash = bin2hex(sodium_crypto_generichash($plain));
            if (!hash_equals($chunkId, $hash)) {
                throw new RuntimeException("Chunk hash mismatch for {$manifest['id']}: $chunkId");
            }

            $out .= $plain;
        }

        return $out;
    }

    private function chunkPath(string $entity, string $chunkId): string
    {
        $p1 = substr($chunkId, 0, 2);
        $p2 = substr($chunkId, 2, 2);
        return $this->dir . "/$entity/chunks/$p1/$p2/$chunkId.c";
    }

    private function ensureChunkDir(string $entity, string $chunkId): void
    {
        $p1 = substr($chunkId, 0, 2);
        $p2 = substr($chunkId, 2, 2);
        $this->mkdir($this->dir . "/$entity/chunks/$p1/$p2");
    }

    private function lookupPath(string $entity, string $field, string $value): string
    {
        $digest = $this->fingerprint("lookup:$entity:$field", $value);
        $p1 = substr($digest, 0, 2);
        $p2 = substr($digest, 2, 2);
        return $this->dir . "/idx/lookup/$entity/$p1/$p2/$digest.lk";
    }

    private function ensureLookupDir(string $entity, string $field, string $value): void
    {
        $digest = $this->fingerprint("lookup:$entity:$field", $value);
        $p1 = substr($digest, 0, 2);
        $p2 = substr($digest, 2, 2);
        $this->mkdir($this->dir . "/idx/lookup/$entity/$p1/$p2");
    }

    private function manifestPath(string $entity, string $id, ?string $shard): string
    {
        return $this->dir . "/$entity/manifests/" . ($shard ? "$shard/" : '') . "manifest_$id.m";
    }

    private function ensureEntityDirs(string $entity): void
    {
        $this->mkdir($this->dir . "/$entity/manifests");
        $this->mkdir($this->dir . "/$entity/chunks");
        $this->mkdir($this->dir . "/idx");
    }

    private function findManifestPath(string $entity, string $id): string
    {
        return $this->manifestPath($entity, $id, null);
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

            $digest = $this->fingerprint("lookup:$entity:$field", $value);
            $aad = "lookup:$entity:$field:$digest";
            $payload = [
                'entity' => $entity,
                'field' => $field,
                'value' => $value,
                'id' => $id,
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
        $path = $this->lookupPath($entity, $field, $value);
        if (!is_file($path)) {
            return null;
        }

        $digest = $this->fingerprint("lookup:$entity:$field", $value);
        $blob = file_get_contents($path);
        if ($blob === false) {
            return null;
        }

        $plain = Crypto::aeadDecrypt($blob, $this->deriveKey('index', 4), "lookup:$entity:$field:$digest");
        $entry = json_decode($plain, true, 512, JSON_THROW_ON_ERROR);
        return is_array($entry) ? $entry : null;
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

}
