<?php
declare(strict_types=1);

final class Schema
{
    private string $dir;

    /**
     * @var array<string,array<string,mixed>>
     */
    private array $cache = [];

    public function __construct(string $dir)
    {
        $this->dir = $dir;
    }

    /**
     * @return array<string,mixed>
     */
    public function load(string $entity): array
    {
        if (isset($this->cache[$entity])) {
            return $this->cache[$entity];
        }

        $file = $this->dir . '/' . $entity . '.json';
        if (!file_exists($file)) {
            return $this->cache[$entity] = [
                'entity' => $entity,
                'kind' => 'document',
                'storage' => [
                    'mime' => 'application/json; charset=utf-8',
                    'chunkProfiles' => [
                        'default' => ['target' => 65536],
                    ],
                ],
                'fields' => [],
                'indexes' => [],
                'search' => [
                    'defaultFields' => [],
                    'mode' => 'contains_ci',
                ],
            ];
        }

        $decoded = json_decode((string)file_get_contents($file), true, 512, JSON_THROW_ON_ERROR);
        if (!is_array($decoded)) {
            throw new RuntimeException("Invalid schema file for $entity");
        }

        $decoded['fields'] = is_array($decoded['fields'] ?? null) ? $decoded['fields'] : [];
        $decoded['indexes'] = is_array($decoded['indexes'] ?? null) ? $decoded['indexes'] : [];
        $decoded['search'] = is_array($decoded['search'] ?? null) ? $decoded['search'] : ['defaultFields' => [], 'mode' => 'contains_ci'];
        $decoded['storage'] = is_array($decoded['storage'] ?? null) ? $decoded['storage'] : [];

        return $this->cache[$entity] = $decoded;
    }

    /**
     * @return array<string,mixed>
     */
    public function getChunkProfile(string $entity): array
    {
        $schema = $this->load($entity);
        return $schema['storage']['chunkProfiles']['default'] ?? ['target' => 65536];
    }

    /**
     * @return array<string,mixed>
     */
    public function getIndexDefinitions(string $entity): array
    {
        return $this->load($entity)['indexes'] ?? [];
    }

    /**
     * @return string[]
     */
    public function getLookupFields(string $entity): array
    {
        $fields = [];
        foreach ($this->getIndexDefinitions($entity) as $name => $definition) {
            if (!is_array($definition) || empty($definition['lookupFastPath'])) {
                continue;
            }
            $fields[] = (string)$name;
        }

        return $fields;
    }

    /**
     * @return string[]
     */
    public function getSearchableFields(string $entity): array
    {
        $fields = [];
        foreach ($this->getIndexDefinitions($entity) as $name => $definition) {
            if (is_array($definition) && !empty($definition['searchable'])) {
                $fields[] = (string)$name;
            }
        }

        return $fields;
    }

    /**
     * @return string[]
     */
    public function getFacetFields(string $entity): array
    {
        $fields = [];
        foreach ($this->getIndexDefinitions($entity) as $name => $definition) {
            if (is_array($definition) && !empty($definition['facet'])) {
                $fields[] = (string)$name;
            }
        }

        return $fields;
    }

    /**
     * @return string[]
     */
    public function getFilterableFields(string $entity): array
    {
        $fields = [];
        foreach ($this->getIndexDefinitions($entity) as $name => $definition) {
            if (is_array($definition) && !empty($definition['filterable'])) {
                $fields[] = (string)$name;
            }
        }

        return $fields;
    }

    /**
     * @return string[]
     */
    public function getSortableFields(string $entity): array
    {
        $fields = [];
        foreach ($this->getIndexDefinitions($entity) as $name => $definition) {
            if (is_array($definition) && !empty($definition['sortable'])) {
                $fields[] = (string)$name;
            }
        }

        return $fields;
    }

    /**
     * @return array<string,mixed>
     */
    public function normalizeDocument(string $entity, array $document): array
    {
        $schema = $this->load($entity);
        $fields = $schema['fields'] ?? [];
        $normalized = $document;
        $now = gmdate('c');

        foreach ($fields as $path => $definition) {
            if (!is_array($definition)) {
                continue;
            }

            $exists = $this->hasPath($normalized, (string)$path);
            $value = $exists ? $this->getPath($normalized, (string)$path) : null;

            if (($definition['auto'] ?? null) === 'create' && !$exists) {
                $value = $now;
                $exists = true;
            } elseif (($definition['auto'] ?? null) === 'update') {
                $value = $now;
                $exists = true;
            } elseif (!$exists && array_key_exists('default', $definition)) {
                $value = $definition['default'];
                $exists = true;
            }

            if (!$exists && array_key_exists('const', $definition)) {
                $value = $definition['const'];
                $exists = true;
            }

            if (!$exists) {
                if (!empty($definition['required'])) {
                    throw new RuntimeException("Missing required field: $path");
                }
                continue;
            }

            $coerced = $this->coerceValue($value, $definition, true);

            if (array_key_exists('const', $definition) && $coerced !== $definition['const']) {
                throw new RuntimeException("Field $path must equal the schema constant");
            }

            if (isset($definition['enum']) && is_array($definition['enum']) && !in_array($coerced, $definition['enum'], true)) {
                throw new RuntimeException("Field $path must be one of the schema enum values");
            }

            $this->setPath($normalized, (string)$path, $coerced);
        }

        return $normalized;
    }

    /**
     * @return array<string,mixed>
     */
    public function shapeDocumentForResponse(string $entity, array $document): array
    {
        $schema = $this->load($entity);
        $fields = $schema['fields'] ?? [];
        $shaped = $document;

        foreach ($fields as $path => $definition) {
            if (!is_array($definition)) {
                continue;
            }

            $exists = $this->hasPath($shaped, (string)$path);
            $value = $exists ? $this->getPath($shaped, (string)$path) : null;

            if (!$exists && array_key_exists('default', $definition)) {
                $value = $definition['default'];
                $exists = true;
            }

            if (!$exists && array_key_exists('const', $definition)) {
                $value = $definition['const'];
                $exists = true;
            }

            if (!$exists) {
                continue;
            }

            $this->setPath($shaped, (string)$path, $this->coerceValue($value, $definition, false));
        }

        return $shaped;
    }

    public function buildLogicalPath(string $entity, array $document): ?string
    {
        $template = $this->load($entity)['storage']['logicalPathTemplate'] ?? null;
        if (!is_string($template) || $template === '') {
            return null;
        }

        return preg_replace_callback('/\{([^}]+)\}/', function (array $matches) use ($document): string {
            $value = $this->getPath($document, (string)$matches[1]);
            if (!is_scalar($value)) {
                throw new RuntimeException('Logical path template requires scalar document values');
            }

            return (string)$value;
        }, $template);
    }

    /**
     * @param array<string,mixed> $document
     * @return array<string,mixed>
     */
    public function extractIndexValues(string $entity, array $document): array
    {
        $indexes = [];
        foreach ($this->getIndexDefinitions($entity) as $name => $definition) {
            if (!is_array($definition)) {
                continue;
            }

            $source = (string)($definition['source'] ?? $name);
            $values = $this->extractSourceValues($document, $source);
            if ($values === []) {
                continue;
            }

            $indexes[(string)$name] = count($values) === 1 ? $values[0] : $values;
        }

        return $indexes;
    }

    /**
     * @return array<string,mixed>
     */
    public function getSearchDefinition(string $entity): array
    {
        return $this->load($entity)['search'] ?? ['defaultFields' => [], 'mode' => 'contains_ci'];
    }

    /**
     * @return string[]
     */
    public function getSummaryFields(string $entity): array
    {
        $fields = $this->load($entity)['summary']['fields'] ?? [];
        return is_array($fields) ? array_values(array_map('strval', $fields)) : [];
    }

    /**
     * @return array<string,mixed>|null
     */
    public function getFieldDefinition(string $entity, string $path): ?array
    {
        $definition = $this->load($entity)['fields'][$path] ?? null;
        return is_array($definition) ? $definition : null;
    }

    public function normalizeFieldValue(string $entity, string $path, mixed $value, bool $strict = true): mixed
    {
        $definition = $this->getFieldDefinition($entity, $path);
        if ($definition === null) {
            return $value;
        }

        return $this->coerceValue($value, $definition, $strict);
    }

    /**
     * @param array<string,mixed> $definition
     */
    private function coerceValue(mixed $value, array $definition, bool $strict): mixed
    {
        if ($value === null) {
            return null;
        }

        $type = (string)($definition['type'] ?? 'string');
        switch ($type) {
            case 'string':
                if (!is_scalar($value) && $strict) {
                    throw new RuntimeException('Expected string-like value');
                }
                $value = (string)$value;
                if (!empty($definition['trim'])) {
                    $value = trim($value);
                }
                if (!empty($definition['lowercase'])) {
                    $value = strtolower($value);
                }
                if (!empty($definition['uppercase'])) {
                    $value = strtoupper($value);
                }
                if (!empty($definition['slug'])) {
                    $value = strtolower(trim((string)$value));
                    $value = preg_replace('/[^a-z0-9_\-]+/', '-', $value) ?? $value;
                    $value = trim((string)$value, '-');
                }
                return $value;

            case 'number':
                if (!is_numeric($value)) {
                    if ($strict) {
                        throw new RuntimeException('Expected numeric value');
                    }
                    return $value;
                }
                return (float)$value;

            case 'integer':
                if (!is_numeric($value)) {
                    if ($strict) {
                        throw new RuntimeException('Expected integer value');
                    }
                    return $value;
                }
                return (int)$value;

            case 'boolean':
                if (is_bool($value)) {
                    return $value;
                }
                if ($strict && !is_scalar($value)) {
                    throw new RuntimeException('Expected boolean-like value');
                }
                return in_array(strtolower((string)$value), ['1', 'true', 'yes', 'on'], true);

            case 'datetime':
                if (!is_scalar($value)) {
                    if ($strict) {
                        throw new RuntimeException('Expected datetime string');
                    }
                    return $value;
                }
                $timestamp = strtotime((string)$value);
                if ($timestamp === false) {
                    if ($strict) {
                        throw new RuntimeException('Expected valid datetime string');
                    }
                    return $value;
                }
                return gmdate('c', $timestamp);

            case 'array':
                if (!is_array($value)) {
                    if ($strict) {
                        throw new RuntimeException('Expected array value');
                    }
                    return $value;
                }
                $items = [];
                $itemDef = is_array($definition['items'] ?? null) ? $definition['items'] : ['type' => 'string'];
                foreach ($value as $item) {
                    $items[] = $this->coerceValue($item, $itemDef, $strict);
                }
                return array_values($items);

            case 'object':
                if (!is_array($value)) {
                    if ($strict) {
                        throw new RuntimeException('Expected object value');
                    }
                    return $value;
                }
                return $value;
        }

        return $value;
    }

    /**
     * @param array<string,mixed> $document
     * @return list<mixed>
     */
    private function extractSourceValues(array $document, string $source): array
    {
        if (str_ends_with($source, '[]')) {
            $values = $this->getPath($document, substr($source, 0, -2));
            if (!is_array($values)) {
                return [];
            }

            return array_values(array_filter($values, static fn(mixed $value): bool => $value !== null && $value !== ''));
        }

        $value = $this->getPath($document, $source);
        if ($value === null || $value === '') {
            return [];
        }

        return [$value];
    }

    /**
     * @param array<string,mixed> $document
     */
    private function hasPath(array $document, string $path): bool
    {
        $cursor = $document;
        foreach (explode('.', $path) as $segment) {
            if (!is_array($cursor) || !array_key_exists($segment, $cursor)) {
                return false;
            }
            $cursor = $cursor[$segment];
        }

        return true;
    }

    /**
     * @param array<string,mixed> $document
     */
    private function getPath(array $document, string $path): mixed
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
