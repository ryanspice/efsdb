<?php
declare(strict_types=1);

require_once __DIR__ . '/IndexManager.php';
require_once __DIR__ . '/Schema.php';
require_once __DIR__ . '/Store.php';

final class ProductService
{
    private const ENTITY = 'products';

    public function __construct(
        private readonly Store $store,
        private readonly Schema $schema,
        private readonly IndexManager $index
    ) {
    }

    /**
     * @param array<string,mixed> $product
     * @return array<string,mixed>
     */
    public function upsert(array $product): array
    {
        if (!isset($product['slug']) && isset($product['name']) && is_scalar($product['name'])) {
            $product['slug'] = (string)$product['name'];
        }

        $normalized = $this->schema->normalizeDocument(self::ENTITY, $product);
        $this->store->upsert(self::ENTITY, $normalized, [
            'lookupFields' => $this->schema->getLookupFields(self::ENTITY),
            'logicalPath' => $this->schema->buildLogicalPath(self::ENTITY, $normalized),
        ]);

        return $this->get((string)$normalized['id']) ?? $this->schema->shapeDocumentForResponse(self::ENTITY, $normalized);
    }

    /**
     * @return array<string,mixed>|null
     */
    public function get(string $id): ?array
    {
        $document = $this->store->getDocument(self::ENTITY, $id);
        if ($document === null) {
            return null;
        }

        return $this->schema->shapeDocumentForResponse(self::ENTITY, $document);
    }

    /**
     * @param array<string,mixed> $params
     * @return array<string,mixed>
     */
    public function list(array $params = []): array
    {
        $limit = max(1, min(100, (int)($params['limit'] ?? 20)));
        $cursor = $this->decodeCursor(isset($params['cursor']) && is_string($params['cursor']) ? $params['cursor'] : null);
        $filters = $this->normalizeListFilters($params);
        $sort = [
            'updatedAt' => 'desc',
            'id' => 'asc',
        ];

        $query = $this->index->query(self::ENTITY, [
            'limit' => $limit + 1,
            'cursor' => $cursor,
            'filters' => $filters,
            'sort' => $sort,
        ]);

        $records = is_array($query['results'] ?? null) ? $query['results'] : [];
        $hasMore = count($records) > $limit;
        if ($hasMore) {
            $records = array_slice($records, 0, $limit);
        }

        $results = [];
        foreach ($records as $record) {
            $document = $this->get((string)($record['id'] ?? ''));
            if ($document === null) {
                continue;
            }

            $results[] = $this->buildSummary($document);
        }

        $lastRecord = $records === [] ? null : $records[count($records) - 1];

        return [
            'results' => $results,
            'meta' => [
                'entity' => self::ENTITY,
                'limit' => $limit,
                'nextCursor' => $hasMore && is_array($lastRecord) ? $this->encodeCursor([
                    'updatedAt' => $lastRecord['fields']['updatedAt'] ?? null,
                    'id' => $lastRecord['id'] ?? null,
                ]) : null,
                'strategy' => $query['meta']['strategy'] ?? 'index-doc-scan',
                'sort' => $sort,
            ],
        ];
    }

    /**
     * @param array<string,mixed> $document
     * @return array<string,mixed>
     */
    private function buildSummary(array $document): array
    {
        $summary = [];
        foreach ($this->schema->getSummaryFields(self::ENTITY) as $path) {
            $value = $this->extractPath($document, $path);
            if ($value === null) {
                continue;
            }

            $this->setPath($summary, $path, $value);
        }

        return $summary === [] ? $document : $summary;
    }

    /**
     * @param array<string,mixed> $params
     * @return array<string,mixed>
     */
    private function normalizeListFilters(array $params): array
    {
        $filters = is_array($params['filter'] ?? null) ? $params['filter'] : [];
        foreach (['status', 'category', 'brand'] as $field) {
            if (isset($params[$field]) && !array_key_exists($field, $filters)) {
                $filters[$field] = $params[$field];
            }
        }

        $normalized = [];
        foreach ($filters as $field => $value) {
            if (!in_array((string)$field, $this->schema->getFilterableFields(self::ENTITY), true)) {
                continue;
            }

            $normalized[(string)$field] = $this->normalizeFilterValue((string)$field, $value);
        }

        return $normalized;
    }

    private function normalizeFilterValue(string $field, mixed $value): mixed
    {
        if (is_array($value)) {
            return array_values(array_map(fn(mixed $entry): mixed => $this->schema->normalizeFieldValue(self::ENTITY, $field, $entry, false), $value));
        }

        return $this->schema->normalizeFieldValue(self::ENTITY, $field, $value, false);
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
