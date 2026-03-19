<?php
declare(strict_types=1);

require_once __DIR__ . '/IndexManager.php';
require_once __DIR__ . '/Schema.php';
require_once __DIR__ . '/Store.php';

final class IndexRebuilder
{
    public function __construct(
        private readonly Store $store,
        private readonly Schema $schema,
        private readonly IndexManager $index
    ) {
    }

    /**
     * @return array<string,mixed>
     */
    public function rebuildEntity(string $entity): array
    {
        $schemaIndexes = $this->schema->getIndexDefinitions($entity);
        $manifests = $this->store->scanAllManifests($entity, PHP_INT_MAX);
        $this->index->clearEntity($entity);

        $count = 0;
        foreach ($manifests as $manifest) {
            if (!is_array($manifest)) {
                continue;
            }

            $this->index->update($entity, $manifest, $schemaIndexes);
            $count++;
        }

        return [
            'entity' => $entity,
            'indexed' => $count,
            'rebuiltAt' => gmdate('c'),
        ];
    }

    /**
     * @param string[]|null $entities
     * @return array<string,mixed>
     */
    public function rebuildAll(?array $entities = null): array
    {
        $entities ??= $this->store->listEntities(true);
        $results = [];
        foreach ($entities as $entity) {
            $results[] = $this->rebuildEntity((string)$entity);
        }

        return [
            'results' => $results,
            'rebuiltAt' => gmdate('c'),
        ];
    }
}
