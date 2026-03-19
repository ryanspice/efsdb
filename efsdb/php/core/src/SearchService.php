<?php
declare(strict_types=1);

require_once __DIR__ . '/EntityExposurePolicy.php';
require_once __DIR__ . '/IndexManager.php';
require_once __DIR__ . '/Permissions.php';
require_once __DIR__ . '/Schema.php';
require_once __DIR__ . '/Store.php';
require_once __DIR__ . '/User.php';

final class SearchService
{
    private EntityExposurePolicy $exposure;

    public function __construct(
        private readonly Store $store,
        private readonly Schema $schema,
        private readonly IndexManager $index,
        Permissions $permissions
    ) {
        $this->exposure = new EntityExposurePolicy($permissions);
    }

    /**
     * @param array<string,mixed> $params
     * @return array<string,mixed>
     */
    public function search(User $user, array $params): array
    {
        $entity = $this->resolveEntity($params);
        $this->exposure->assertSearchAccess($user, $entity);

        $limit = max(1, min(100, (int)($params['limit'] ?? 20)));
        $cursor = $this->decodeCursor(isset($params['cursor']) && is_string($params['cursor']) ? $params['cursor'] : null);
        $q = substr(trim((string)($params['q'] ?? '')), 0, 256);
        $filters = $this->normalizeFilters($entity, $params);
        $sort = $this->normalizeSort($entity, $params);
        $lookupResult = $this->tryLookupFastPath($entity, $q, $filters, $sort);

        if ($lookupResult !== null) {
            $results = $lookupResult;
            if ($cursor !== null && $cursor !== []) {
                $results = array_values(array_filter($results, fn(array $record): bool => $this->isAfterCursor($record, $sort, $cursor)));
            }

            $hasMore = count($results) > $limit;
            $results = array_slice($results, 0, $limit);

            return [
                'results' => $results,
                'meta' => [
                    'entity' => $entity,
                    'limit' => $limit,
                    'nextCursor' => $hasMore ? $this->encodeCursor($this->cursorBoundary($results[count($results) - 1], $sort)) : null,
                    'strategy' => 'lookup-fast-path',
                    'indexed' => true,
                    'warnings' => [],
                ],
            ];
        }

        $query = $this->index->query($entity, [
            'q' => $q,
            'filters' => $filters,
            'limit' => $limit + 1,
            'cursor' => $cursor,
            'sort' => $sort,
            'searchableFields' => $this->schema->getSearchableFields($entity),
            'weights' => $this->searchWeights($entity),
        ]);

        $records = is_array($query['results'] ?? null) ? $query['results'] : [];
        $hasMore = count($records) > $limit;
        if ($hasMore) {
            $records = array_slice($records, 0, $limit);
        }

        $results = [];
        foreach ($records as $record) {
            if (!is_array($record)) {
                continue;
            }

            $results[] = [
                'entity' => $entity,
                'id' => (string)($record['id'] ?? ''),
                'score' => (float)($record['score'] ?? 0.0),
                'summary' => $this->buildSummary($entity, $record),
            ];
        }

        return [
            'results' => $results,
            'meta' => [
                'entity' => $entity,
                'limit' => $limit,
                'nextCursor' => $hasMore && $results !== [] ? $this->encodeCursor($this->cursorBoundary($results[count($results) - 1], $sort)) : null,
                'strategy' => $query['meta']['strategy'] ?? 'index-doc-scan',
                'indexed' => true,
                'warnings' => [],
            ],
        ];
    }

    private function resolveEntity(array $params): string
    {
        $entity = trim((string)($params['entity'] ?? ''));
        return $entity !== '' ? $entity : $this->exposure->defaultSearchEntity();
    }

    /**
     * @param array<string,mixed> $params
     * @return array<string,mixed>
     */
    private function normalizeFilters(string $entity, array $params): array
    {
        $filters = is_array($params['filter'] ?? null) ? $params['filter'] : [];
        $allowed = $this->schema->getFilterableFields($entity);
        $normalized = [];

        foreach ($filters as $field => $value) {
            $field = (string)$field;
            if (!in_array($field, $allowed, true)) {
                throw new InvalidArgumentException("Unsupported filter field: $field");
            }

            if (is_array($value)) {
                $normalized[$field] = array_values(array_map(
                    fn(mixed $entry): mixed => $this->schema->normalizeFieldValue($entity, $field, $entry, false),
                    $value
                ));
                continue;
            }

            $normalized[$field] = $this->schema->normalizeFieldValue($entity, $field, $value, false);
        }

        return $normalized;
    }

    /**
     * @param array<string,mixed> $params
     * @return array<string,string>
     */
    private function normalizeSort(string $entity, array $params): array
    {
        $allowed = array_merge(['score', 'id'], $this->schema->getSortableFields($entity));
        $sort = $params['sort'] ?? null;
        $normalized = [];

        if (is_string($sort) && $sort !== '') {
            foreach (explode(',', $sort) as $part) {
                [$field, $direction] = array_pad(explode(':', trim($part), 2), 2, 'asc');
                $field = trim($field);
                if ($field === '' || !in_array($field, $allowed, true)) {
                    throw new InvalidArgumentException("Unsupported sort field: $field");
                }
                $normalized[$field] = strtolower($direction) === 'desc' ? 'desc' : 'asc';
            }
        } elseif (is_array($sort) && $sort !== []) {
            foreach ($sort as $field => $direction) {
                $field = (string)$field;
                if (!in_array($field, $allowed, true)) {
                    throw new InvalidArgumentException("Unsupported sort field: $field");
                }
                $normalized[$field] = strtolower((string)$direction) === 'desc' ? 'desc' : 'asc';
            }
        }

        if ($normalized === []) {
            $normalized = ['score' => 'desc', 'id' => 'asc'];
        } elseif (!array_key_exists('id', $normalized)) {
            $normalized['id'] = 'asc';
        }

        return $normalized;
    }

    /**
     * @return array<string,float>
     */
    private function searchWeights(string $entity): array
    {
        $weights = [];
        foreach ($this->schema->getIndexDefinitions($entity) as $name => $definition) {
            if (!is_array($definition) || empty($definition['searchable'])) {
                continue;
            }

            $weights[(string)$name] = max(1.0, (float)($definition['weight'] ?? 1.0));
        }

        return $weights;
    }

    /**
     * @param array<string,mixed> $filters
     * @param array<string,string> $sort
     * @return list<array<string,mixed>>|null
     */
    private function tryLookupFastPath(string $entity, string $q, array $filters, array $sort): ?array
    {
        if ($q !== '' || count($filters) !== 1) {
            return null;
        }

        $field = (string)array_key_first($filters);
        if (!in_array($field, $this->schema->getLookupFields($entity), true)) {
            return null;
        }

        $value = $filters[$field];
        if (!is_scalar($value)) {
            return null;
        }

        $match = $this->store->findDocumentByLookup($entity, $field, (string)$value);
        if ($match === null || $this->store->isTombstonedManifest($match['manifest'])) {
            return [];
        }

        $summary = $this->schema->shapeDocumentForResponse($entity, $match['document']);
        $record = [
            'entity' => $entity,
            'id' => (string)($summary['id'] ?? $match['manifest']['id'] ?? ''),
            'score' => 0.0,
            'summary' => $this->buildSummaryFromDocument($entity, $summary),
        ];

        usort($results = [$record], fn(array $left, array $right): int => $this->compareSearchResults($left, $right, $sort));
        return $results;
    }

    /**
     * @param array<string,mixed> $record
     * @return array<string,mixed>
     */
    private function buildSummary(string $entity, array $record): array
    {
        $document = null;
        try {
            $document = $this->store->readDocument($entity, (string)($record['id'] ?? ''));
        } catch (Throwable) {
            $document = null;
        }

        if (is_array($document)) {
            return $this->buildSummaryFromDocument($entity, $this->schema->shapeDocumentForResponse($entity, $document));
        }

        $summaryFields = $this->schema->getSummaryFields($entity);
        if ($summaryFields === []) {
            $summaryFields = array_values(array_unique(array_merge(['id'], $this->schema->getSearchDefinition($entity)['defaultFields'] ?? [])));
        }

        $summary = ['id' => (string)($record['id'] ?? '')];
        foreach ($summaryFields as $field) {
            if ($field === 'id') {
                continue;
            }

            if (str_contains($field, 'hash') || str_contains($field, 'token')) {
                continue;
            }

            if (array_key_exists($field, $record['fields'] ?? [])) {
                $summary[$field] = $record['fields'][$field];
            }
        }

        return $summary;
    }

    /**
     * @param array<string,mixed> $document
     * @return array<string,mixed>
     */
    private function buildSummaryFromDocument(string $entity, array $document): array
    {
        $summaryFields = $this->schema->getSummaryFields($entity);
        if ($summaryFields === []) {
            $summaryFields = array_values(array_unique(array_merge(['id'], $this->schema->getSearchDefinition($entity)['defaultFields'] ?? [])));
        }

        $summary = [];
        foreach ($summaryFields as $path) {
            if (str_contains($path, 'hash') || str_contains($path, 'token')) {
                continue;
            }

            $value = $this->extractPath($document, $path);
            if ($value === null) {
                continue;
            }

            $this->setPath($summary, $path, $value);
        }

        if ($summary === [] && isset($document['id'])) {
            $summary['id'] = $document['id'];
        }

        return $summary;
    }

    /**
     * @param array<string,mixed> $result
     * @param array<string,string> $sort
     * @return array<string,mixed>
     */
    private function cursorBoundary(array $result, array $sort): array
    {
        $boundary = ['id' => $result['id'] ?? null];
        foreach ($sort as $field => $_direction) {
            if ($field === 'id') {
                continue;
            }

            if ($field === 'score') {
                $boundary[$field] = $result['score'] ?? 0.0;
                continue;
            }

            $boundary[$field] = $result['summary'][$field] ?? null;
        }

        return $boundary;
    }

    /**
     * @param array<string,mixed> $result
     * @param array<string,string> $sort
     * @param array<string,mixed> $cursor
     */
    private function isAfterCursor(array $result, array $sort, array $cursor): bool
    {
        foreach ($sort as $field => $direction) {
            $direction = strtolower($direction) === 'desc' ? 'desc' : 'asc';
            $resultValue = $field === 'score'
                ? ($result['score'] ?? 0.0)
                : ($result['summary'][$field] ?? ($field === 'id' ? ($result['id'] ?? null) : null));
            $cursorValue = $cursor[$field] ?? null;
            if ($resultValue === $cursorValue) {
                continue;
            }

            if ($direction === 'desc') {
                return $resultValue < $cursorValue;
            }

            return $resultValue > $cursorValue;
        }

        return strcmp((string)($result['id'] ?? ''), (string)($cursor['id'] ?? '')) > 0;
    }

    /**
     * @param array<string,mixed> $left
     * @param array<string,mixed> $right
     * @param array<string,string> $sort
     */
    private function compareSearchResults(array $left, array $right, array $sort): int
    {
        foreach ($sort as $field => $direction) {
            $direction = strtolower($direction) === 'desc' ? -1 : 1;
            $leftValue = $field === 'score'
                ? ($left['score'] ?? 0.0)
                : ($field === 'id' ? ($left['id'] ?? '') : ($left['summary'][$field] ?? null));
            $rightValue = $field === 'score'
                ? ($right['score'] ?? 0.0)
                : ($field === 'id' ? ($right['id'] ?? '') : ($right['summary'][$field] ?? null));
            if ($leftValue === $rightValue) {
                continue;
            }

            return ($leftValue < $rightValue ? -1 : 1) * $direction;
        }

        return strcmp((string)($left['id'] ?? ''), (string)($right['id'] ?? ''));
    }

    /**
     * @param array<string,mixed> $boundary
     */
    private function encodeCursor(array $boundary): string
    {
        return rtrim(strtr(base64_encode(json_encode($boundary, JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR)), '+/', '-_'), '=');
    }

    /**
     * @return array<string,mixed>|null
     */
    private function decodeCursor(?string $cursor): ?array
    {
        if ($cursor === null || $cursor === '') {
            return null;
        }

        $padded = strtr($cursor, '-_', '+/');
        $padding = strlen($padded) % 4;
        if ($padding > 0) {
            $padded .= str_repeat('=', 4 - $padding);
        }

        $decoded = base64_decode($padded, true);
        if ($decoded === false) {
            throw new InvalidArgumentException('Invalid cursor');
        }

        $data = json_decode($decoded, true);
        if (!is_array($data)) {
            throw new InvalidArgumentException('Invalid cursor');
        }

        return $data;
    }

    /**
     * @param array<string,mixed> $document
     */
    private function extractPath(array $document, string $path): mixed
    {
        $cursor = $document;
        foreach (explode('.', $path) as $segment) {
            if (!is_array($cursor) || !array_key_exists($segment, $cursor)) {
                return null;
            }
            $cursor = $cursor[$segment];
        }

        return $cursor;
    }

    /**
     * @param array<string,mixed> $document
     */
    private function setPath(array &$document, string $path, mixed $value): void
    {
        $segments = explode('.', $path);
        $cursor =& $document;
        foreach ($segments as $index => $segment) {
            if ($index === count($segments) - 1) {
                $cursor[$segment] = $value;
                return;
            }

            if (!isset($cursor[$segment]) || !is_array($cursor[$segment])) {
                $cursor[$segment] = [];
            }

            $cursor =& $cursor[$segment];
        }
    }
}
