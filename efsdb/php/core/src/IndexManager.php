<?php
declare(strict_types=1);

require_once __DIR__ . '/Crypto.php';

final class IndexManager
{
    private string $dataDir;
    private string $masterKey32;

    public function __construct(string $dataDir, string $masterKeyB64, private ?Store $store = null)
    {
        $this->dataDir = rtrim(str_replace('\\', '/', $dataDir), '/');
        $this->masterKey32 = Crypto::keyFromB64($masterKeyB64);
        $this->ensureDir($this->dataDir . '/idx');
    }

    /**
     * @param array<string,mixed> $manifest
     * @param array<string,mixed> $schemaIndexes
     */
    public function update(string $entity, array $manifest, array $schemaIndexes): void
    {
        $id = (string)($manifest['id'] ?? '');
        if ($id === '') {
            return;
        }

        $previous = $this->readRecordDoc($entity, $id);
        if (is_array($previous)) {
            $this->removePostings($entity, $id, $previous['postings'] ?? []);
        }

        $record = $this->buildRecordDoc($entity, $manifest, $schemaIndexes);
        if (!($record['tombstoned'] ?? false)) {
            $this->addPostings($entity, $id, $record['postings'] ?? []);
        }

        $this->writeRecordDoc($entity, $id, $record);
    }

    /**
     * @param array<string,mixed> $schemaIndexes
     */
    public function remove(string $entity, string $id, array $schemaIndexes = []): void
    {
        $existing = $this->readRecordDoc($entity, $id);
        if (!is_array($existing)) {
            return;
        }

        $this->removePostings($entity, $id, $existing['postings'] ?? []);
        $path = $this->recordDocPath($entity, $id);
        if (is_file($path)) {
            unlink($path);
        }
    }

    public function clearEntity(string $entity): void
    {
        $dir = $this->entityDir($entity);
        if (!is_dir($dir)) {
            return;
        }

        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
            RecursiveIteratorIterator::CHILD_FIRST
        );

        foreach ($iterator as $item) {
            ($item->isDir() ? 'rmdir' : 'unlink')($item->getPathname());
        }

        if (is_dir($dir)) {
            rmdir($dir);
        }
    }

    /**
     * @param array<string,mixed> $query
     * @return array<string,mixed>
     */
    public function query(string $entity, array $query): array
    {
        $limit = max(1, min(250, (int)($query['limit'] ?? 20)));
        $cursor = is_array($query['cursor'] ?? null) ? $query['cursor'] : null;
        $matched = $this->matchRecords($entity, $query);
        $records = $matched['records'];
        if ($cursor !== null && $cursor !== []) {
            $records = array_values(array_filter($records, function (array $record) use ($matched, $cursor): bool {
                return $this->isAfterCursor($record, $matched['meta']['sort'], $cursor);
            }));
        }

        return [
            'results' => array_slice($records, 0, $limit),
            'meta' => [
                'strategy' => $matched['meta']['strategy'],
                'total' => count($records),
                'sort' => $matched['meta']['sort'],
            ],
        ];
    }

    /**
     * @param array<string,mixed> $query
     * @return array{records:list<array<string,mixed>>,meta:array<string,mixed>}
     */
    public function matchRecords(string $entity, array $query): array
    {
        $q = strtolower(trim((string)($query['q'] ?? '')));
        $filters = is_array($query['filters'] ?? null) ? $query['filters'] : [];
        $searchableFields = array_values(array_map('strval', $query['searchableFields'] ?? []));
        $weights = is_array($query['weights'] ?? null) ? $query['weights'] : [];
        $sort = is_array($query['sort'] ?? null) && $query['sort'] !== []
            ? $this->normalizeSort($query['sort'])
            : ['id' => 'asc'];

        $candidateIds = $this->candidateIdsForFilters($entity, $filters);
        $strategy = $candidateIds !== null ? 'postings-intersection' : 'index-doc-scan';
        $records = $candidateIds !== null ? $this->loadRecordDocsById($entity, $candidateIds) : $this->scanRecordDocs($entity);

        $results = [];
        foreach ($records as $record) {
            if (!is_array($record) || !empty($record['tombstoned'])) {
                continue;
            }

            if (!$this->matchesFilters($record, $filters)) {
                continue;
            }

            $score = $q === '' ? 0.0 : $this->scoreRecord($record, $q, $searchableFields, $weights);
            if ($q !== '' && $score <= 0.0) {
                continue;
            }

            $record['score'] = $score;
            $results[] = $record;
        }

        usort($results, fn(array $left, array $right): int => $this->compareRecords($left, $right, $sort));

        return [
            'records' => $results,
            'meta' => [
                'strategy' => $strategy,
                'sort' => $sort,
            ],
        ];
    }

    /**
     * @param array<string,mixed> $schemaIndexes
     * @return array<string,mixed>
     */
    public function getAllIndexStats(string $entity, array $schemaIndexes): array
    {
        $count = 0;
        foreach ($this->scanRecordDocs($entity) as $_doc) {
            $count++;
        }

        return [
            'entity' => $entity,
            'records' => $count,
            'indexedFields' => array_keys($schemaIndexes),
        ];
    }

    /**
     * @param array<string,mixed> $manifest
     * @param array<string,mixed> $schemaIndexes
     * @return array<string,mixed>
     */
    private function buildRecordDoc(string $entity, array $manifest, array $schemaIndexes): array
    {
        $fields = [];
        $postings = [];
        $indexes = is_array($manifest['indexes'] ?? null) ? $manifest['indexes'] : [];
        foreach ($schemaIndexes as $name => $definition) {
            if (!is_array($definition) || !array_key_exists($name, $indexes)) {
                continue;
            }

            $fields[(string)$name] = $indexes[$name];
            $postings[(string)$name] = $this->termsForField($indexes[$name], $definition);
        }

        return [
            'id' => (string)$manifest['id'],
            'entity' => $entity,
            'fields' => $fields,
            'postings' => $postings,
            'tombstoned' => is_array($manifest['lifecycle']['tombstone'] ?? null),
            'updatedAt' => (string)($indexes['updatedAt'] ?? $manifest['mtime'] ?? gmdate('c')),
        ];
    }

    /**
     * @param array<string,mixed> $postings
     */
    private function addPostings(string $entity, string $id, array $postings): void
    {
        foreach ($postings as $field => $terms) {
            if (!is_array($terms)) {
                continue;
            }

            foreach ($terms as $term) {
                $term = (string)$term;
                if ($term === '') {
                    continue;
                }

                $posting = $this->readPosting($entity, (string)$field, $term) ?? [
                    'entity' => $entity,
                    'field' => (string)$field,
                    'term' => $term,
                    'ids' => [],
                ];

                if (!in_array($id, $posting['ids'], true)) {
                    $posting['ids'][] = $id;
                    sort($posting['ids'], SORT_STRING);
                    $this->writePosting($entity, (string)$field, $term, $posting);
                }
            }
        }
    }

    /**
     * @param array<string,mixed> $postings
     */
    private function removePostings(string $entity, string $id, array $postings): void
    {
        foreach ($postings as $field => $terms) {
            if (!is_array($terms)) {
                continue;
            }

            foreach ($terms as $term) {
                $term = (string)$term;
                if ($term === '') {
                    continue;
                }

                $posting = $this->readPosting($entity, (string)$field, $term);
                if (!is_array($posting)) {
                    continue;
                }

                $posting['ids'] = array_values(array_filter(
                    array_map('strval', $posting['ids'] ?? []),
                    static fn(string $candidate): bool => $candidate !== $id
                ));

                if ($posting['ids'] === []) {
                    $path = $this->postingPath($entity, (string)$field, $term);
                    if (is_file($path)) {
                        unlink($path);
                    }
                    continue;
                }

                $this->writePosting($entity, (string)$field, $term, $posting);
            }
        }
    }

    /**
     * @param array<string,mixed> $definition
     * @return list<string>
     */
    private function termsForField(mixed $value, array $definition): array
    {
        $kind = (string)($definition['kind'] ?? 'keyword');
        $values = is_array($value) ? $value : [$value];
        $terms = [];

        foreach ($values as $entry) {
            if ($entry === null || $entry === '') {
                continue;
            }

            if ($kind === 'text') {
                foreach ($this->tokenize((string)$entry) as $token) {
                    $terms[] = $token;
                }
                continue;
            }

            if (is_bool($entry)) {
                $terms[] = $entry ? 'true' : 'false';
                continue;
            }

            $terms[] = strtolower((string)$entry);
        }

        return array_values(array_unique($terms));
    }

    /**
     * @param array<string,mixed> $filters
     * @return list<string>|null
     */
    private function candidateIdsForFilters(string $entity, array $filters): ?array
    {
        if ($filters === []) {
            return null;
        }

        $sets = [];
        foreach ($filters as $field => $value) {
            $values = is_array($value) ? $value : [$value];
            $fieldIds = [];
            foreach ($values as $entry) {
                $posting = $this->readPosting($entity, (string)$field, $this->postingValue($entry));
                if (!is_array($posting)) {
                    continue;
                }

                $fieldIds = array_values(array_unique(array_merge($fieldIds, array_map('strval', $posting['ids'] ?? []))));
            }

            if ($fieldIds === []) {
                return [];
            }

            $sets[] = $fieldIds;
        }

        if ($sets === []) {
            return null;
        }

        $intersection = array_shift($sets);
        foreach ($sets as $set) {
            $intersection = array_values(array_intersect($intersection, $set));
        }

        sort($intersection, SORT_STRING);
        return $intersection;
    }

    /**
     * @param array<string,mixed> $record
     * @param array<string,mixed> $filters
     */
    private function matchesFilters(array $record, array $filters): bool
    {
        foreach ($filters as $field => $value) {
            $candidate = $record['fields'][$field] ?? null;
            $wanted = is_array($value) ? array_map([$this, 'stringifyFilterValue'], $value) : [$this->stringifyFilterValue($value)];

            if (is_array($candidate)) {
                $candidateValues = array_map([$this, 'stringifyFilterValue'], $candidate);
                if (count(array_intersect($candidateValues, $wanted)) === 0) {
                    return false;
                }
                continue;
            }

            if (!in_array($this->stringifyFilterValue($candidate), $wanted, true)) {
                return false;
            }
        }

        return true;
    }

    /**
     * @param array<string,mixed> $record
     * @param string[] $searchableFields
     * @param array<string,mixed> $weights
     */
    private function scoreRecord(array $record, string $query, array $searchableFields, array $weights): float
    {
        $tokens = $this->tokenize($query);
        if ($tokens === []) {
            return 0.0;
        }

        $score = 0.0;
        foreach ($searchableFields as $field) {
            $value = $record['fields'][$field] ?? null;
            $haystack = is_array($value)
                ? strtolower(implode(' ', array_map('strval', $value)))
                : strtolower((string)$value);
            $weight = max(1.0, (float)($weights[$field] ?? 1.0));
            foreach ($tokens as $token) {
                if ($token !== '' && str_contains($haystack, $token)) {
                    $score += $weight;
                }
            }
        }

        return $score;
    }

    /**
     * @param array<string,mixed> $left
     * @param array<string,mixed> $right
     * @param array<string,mixed> $sort
     */
    private function compareRecords(array $left, array $right, array $sort): int
    {
        foreach ($sort as $field => $direction) {
            $direction = strtolower((string)$direction) === 'desc' ? -1 : 1;
            $leftValue = $this->sortValue($left, (string)$field);
            $rightValue = $this->sortValue($right, (string)$field);
            if ($leftValue === $rightValue) {
                continue;
            }

            return ($leftValue < $rightValue ? -1 : 1) * $direction;
        }

        return strcmp((string)($left['id'] ?? ''), (string)($right['id'] ?? ''));
    }

    /**
     * @param array<string,mixed> $record
     * @param array<string,mixed> $sort
     * @param array<string,mixed> $cursor
     */
    private function isAfterCursor(array $record, array $sort, array $cursor): bool
    {
        foreach ($sort as $field => $direction) {
            $direction = strtolower((string)$direction) === 'desc' ? 'desc' : 'asc';
            $recordValue = $this->sortValue($record, (string)$field);
            $cursorValue = $cursor[$field] ?? null;
            if ($recordValue === $cursorValue) {
                continue;
            }

            if ($direction === 'desc') {
                return $recordValue < $cursorValue;
            }

            return $recordValue > $cursorValue;
        }

        return strcmp((string)($record['id'] ?? ''), (string)($cursor['id'] ?? '')) > 0;
    }

    private function sortValue(array $record, string $field): mixed
    {
        if ($field === 'score') {
            return (float)($record['score'] ?? 0.0);
        }

        if ($field === 'id') {
            return (string)($record['id'] ?? '');
        }

        return $record['fields'][$field] ?? null;
    }

    /**
     * @param array<string,mixed> $sort
     * @return array<string,string>
     */
    private function normalizeSort(array $sort): array
    {
        $normalized = [];
        foreach ($sort as $field => $direction) {
            $normalized[(string)$field] = strtolower((string)$direction) === 'desc' ? 'desc' : 'asc';
        }

        if (!array_key_exists('id', $normalized)) {
            $normalized['id'] = 'asc';
        }

        return $normalized;
    }

    private function postingValue(mixed $value): string
    {
        if (is_bool($value)) {
            return $value ? 'true' : 'false';
        }

        return strtolower((string)$value);
    }

    private function stringifyFilterValue(mixed $value): string
    {
        if (is_bool($value)) {
            return $value ? 'true' : 'false';
        }

        return (string)$value;
    }

    /**
     * @return list<array<string,mixed>>
     */
    private function scanRecordDocs(string $entity): array
    {
        $dir = $this->recordDocsDir($entity);
        if (!is_dir($dir)) {
            return [];
        }

        $results = [];
        $iterator = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS)
        );
        foreach ($iterator as $item) {
            if (!$item->isFile() || !str_ends_with($item->getFilename(), '.idx')) {
                continue;
            }

            $id = substr($item->getFilename(), 0, -4);
            $record = $this->readEncryptedJson($item->getPathname(), $this->deriveKey('idxdoc', 6), 'idxdoc:' . $id);
            if (is_array($record)) {
                $results[] = $record;
            }
        }

        return $results;
    }

    /**
     * @param string[] $ids
     * @return list<array<string,mixed>>
     */
    private function loadRecordDocsById(string $entity, array $ids): array
    {
        $results = [];
        foreach ($ids as $id) {
            $record = $this->readRecordDoc($entity, $id);
            if (is_array($record)) {
                $results[] = $record;
            }
        }

        return $results;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readRecordDoc(string $entity, string $id): ?array
    {
        $path = $this->recordDocPath($entity, $id);
        if (!is_file($path)) {
            return null;
        }

        $record = $this->readEncryptedJson($path, $this->deriveKey('idxdoc', 6), 'idxdoc:' . $id);
        return is_array($record) ? $record : null;
    }

    /**
     * @param array<string,mixed> $record
     */
    private function writeRecordDoc(string $entity, string $id, array $record): void
    {
        $path = $this->recordDocPath($entity, $id);
        $this->ensureDir(dirname($path));
        $this->writeEncryptedJson($path, $record, $this->deriveKey('idxdoc', 6), 'idxdoc:' . $id);
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readPosting(string $entity, string $field, string $term): ?array
    {
        $path = $this->postingPath($entity, $field, $term);
        if (!is_file($path)) {
            return null;
        }

        $posting = $this->readEncryptedJson($path, $this->deriveKey('idxpstg', 7), 'idxpost:' . $entity . ':' . $field . ':' . $term);
        return is_array($posting) ? $posting : null;
    }

    /**
     * @param array<string,mixed> $posting
     */
    private function writePosting(string $entity, string $field, string $term, array $posting): void
    {
        $path = $this->postingPath($entity, $field, $term);
        $this->ensureDir(dirname($path));
        $this->writeEncryptedJson($path, $posting, $this->deriveKey('idxpstg', 7), 'idxpost:' . $entity . ':' . $field . ':' . $term);
    }

    private function entityDir(string $entity): string
    {
        return $this->dataDir . '/idx/entity/' . $entity;
    }

    private function recordDocsDir(string $entity): string
    {
        return $this->entityDir($entity) . '/docs';
    }

    private function recordDocPath(string $entity, string $id): string
    {
        return $this->recordDocsDir($entity) . '/' . substr($id, 0, 2) . '/' . substr($id, 2, 2) . '/' . $id . '.idx';
    }

    private function postingPath(string $entity, string $field, string $term): string
    {
        $digest = $this->fingerprint('term:' . $entity . ':' . $field, $term);
        return $this->entityDir($entity) . '/terms/' . $field . '/' . substr($digest, 0, 2) . '/' . substr($digest, 2, 2) . '/' . $digest . '.term';
    }

    private function fingerprint(string $namespace, string $value): string
    {
        return bin2hex(hash_hmac('sha256', $namespace . "\0" . $value, $this->deriveKey('index', 4), true));
    }

    private function deriveKey(string $context, int $subkeyId): string
    {
        return Crypto::kdf($this->masterKey32, str_pad($context, 8, "\0"), $subkeyId);
    }

    /**
     * @return list<string>
     */
    private function tokenize(string $value): array
    {
        $value = strtolower($value);
        $parts = preg_split('/[^a-z0-9]+/', $value) ?: [];
        return array_values(array_filter($parts, static fn(string $part): bool => $part !== ''));
    }

    /**
     * @param array<string,mixed> $payload
     */
    private function writeEncryptedJson(string $path, array $payload, string $key32, string $aad): void
    {
        $blob = Crypto::aeadEncrypt(
            json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
            $key32,
            $aad
        );
        $tmp = $path . '.tmp';
        file_put_contents($tmp, $blob, LOCK_EX);
        rename($tmp, $path);
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readEncryptedJson(string $path, string $key32, string $aad): ?array
    {
        $blob = file_get_contents($path);
        if ($blob === false) {
            return null;
        }

        $plain = Crypto::aeadDecrypt($blob, $key32, $aad);
        $decoded = json_decode($plain, true, 512, JSON_THROW_ON_ERROR);
        return is_array($decoded) ? $decoded : null;
    }

    private function ensureDir(string $dir): void
    {
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }
    }
}
