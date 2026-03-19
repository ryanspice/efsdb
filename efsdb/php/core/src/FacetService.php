<?php
declare(strict_types=1);

require_once __DIR__ . '/EntityExposurePolicy.php';
require_once __DIR__ . '/IndexManager.php';
require_once __DIR__ . '/Permissions.php';
require_once __DIR__ . '/Schema.php';
require_once __DIR__ . '/User.php';

final class FacetService
{
    private EntityExposurePolicy $exposure;

    public function __construct(
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
    public function compute(User $user, array $params): array
    {
        $entity = trim((string)($params['entity'] ?? ''));
        if ($entity === '') {
            $entity = $this->exposure->defaultSearchEntity();
        }

        $this->exposure->assertSearchAccess($user, $entity);
        $fields = $this->normalizeFacetFields($entity, $params);
        $filters = $this->normalizeFilters($entity, $params);
        $q = substr(trim((string)($params['q'] ?? '')), 0, 256);

        $matched = $this->index->matchRecords($entity, [
            'q' => $q,
            'filters' => $filters,
            'sort' => ['id' => 'asc'],
            'searchableFields' => $this->schema->getSearchableFields($entity),
            'weights' => $this->searchWeights($entity),
        ]);

        $results = [];
        foreach ($fields as $field) {
            $counts = [];
            foreach ($matched['records'] as $record) {
                if (!is_array($record)) {
                    continue;
                }

                $value = $record['fields'][$field] ?? null;
                $values = is_array($value) ? $value : [$value];
                foreach ($values as $entry) {
                    if ($entry === null || $entry === '') {
                        continue;
                    }

                    $key = is_bool($entry) ? ($entry ? 'true' : 'false') : (string)$entry;
                    $counts[$key] = ($counts[$key] ?? 0) + 1;
                }
            }

            arsort($counts);
            $bucket = [];
            foreach ($counts as $value => $count) {
                $bucket[] = [
                    'value' => $value,
                    'label' => $value,
                    'count' => $count,
                ];
            }

            $results[$field] = $bucket;
        }

        return [
            'results' => $results,
            'meta' => [
                'entity' => $entity,
                'strategy' => $matched['meta']['strategy'] ?? 'index-doc-scan',
                'warnings' => [],
            ],
        ];
    }

    /**
     * @param array<string,mixed> $params
     * @return string[]
     */
    private function normalizeFacetFields(string $entity, array $params): array
    {
        $requested = $params['field'] ?? null;
        $fields = [];

        if (is_string($requested) && $requested !== '') {
            $fields = array_filter(array_map('trim', explode(',', $requested)), static fn(string $field): bool => $field !== '');
        } elseif (is_array($requested)) {
            $fields = array_values(array_filter(array_map('strval', $requested), static fn(string $field): bool => $field !== ''));
        }

        if ($fields === []) {
            $fields = $this->schema->getFacetFields($entity);
        }

        $allowed = $this->schema->getFacetFields($entity);
        foreach ($fields as $field) {
            if (!in_array($field, $allowed, true)) {
                throw new InvalidArgumentException("Unsupported facet field: $field");
            }
        }

        return array_values(array_unique($fields));
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
}
