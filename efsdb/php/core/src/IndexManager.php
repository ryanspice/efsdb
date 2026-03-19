<?php
declare(strict_types=1);

final class IndexManager
{
    private string $dataDir;
    private string $masterKeyB64;
    private ?Store $store = null;

    public function __construct(string $dataDir, string $masterKeyB64, ?Store $store = null)
    {
        $this->dataDir = $dataDir;
        $this->masterKeyB64 = $masterKeyB64;
        $this->store = $store;
        if (!is_dir($this->dataDir . '/idx')) {
            mkdir($this->dataDir . '/idx', 0775, true);
        }
    }

    public function update(string $entity, string $id, array $indexData, array $schemaIndexes): void
    {
        // Placeholder for LSM update logic
        // In real implementation, this would write to WAL
    }

    public function getAllIndexStats(string $entity, array $schemaIndexes): array
    {
        return [];
    }

    public function search(string $query, array $filters = [], array $sort = [], int $limit = 50, int $offset = 0): array
    {
        // Fallback to Store Scan if no real index logic
        if ($this->store) {
            // Naive scan of 'products' (hardcoded fallback entity logic for now, or assume products)
            // Ideally we should know which entity to search. For now assume 'products' based on API usage.
            $entity = 'products'; 
            
            // Scan up to 1000 items for basic search
            $scan = $this->store->scanManifests($entity, 1000);
            $items = $scan['results'];

            // 1. Filter
            if ($query !== '') {
                $q = strtolower($query);
                $items = array_filter($items, function($item) use ($q) {
                    // Search in indexes or raw values
                    $vals = array_values($item['indexes'] ?? []);
                    foreach ($vals as $v) {
                        if (is_string($v) && str_contains(strtolower($v), $q)) return true;
                    }
                    return false;
                });
            }

            // 2. Sort (Naive)
            if (!empty($sort)) {
                $field = key($sort);
                $dir = $sort[$field] === 'desc' ? -1 : 1;
                usort($items, function($a, $b) use ($field, $dir) {
                    $va = $a['indexes'][$field] ?? null;
                    $vb = $b['indexes'][$field] ?? null;
                    if ($va == $vb) return 0;
                    return ($va < $vb ? -1 : 1) * $dir;
                });
            }

            // 3. Paginate
            $total = count($items);
            $slice = array_slice($items, $offset, $limit);

            return [
                'results' => $slice,
                'meta' => [
                    'total' => $total,
                    'limit' => $limit,
                    'offset' => $offset,
                    'took' => 0 // Mock timing
                ]
            ];
        }

        return ['results' => [], 'meta' => ['total' => 0, 'took' => 0]];
    }

    public function getFacets(string $entity): array
    {
        if ($this->store) {
            $scan = $this->store->scanManifests($entity, 500);
            $items = $scan['results'];
            
            $facets = ['category' => [], 'ownerId' => []];
            
            // Naive Aggregation
            foreach ($items as $item) {
                if (isset($item['indexes']['category'])) {
                    $cat = $item['indexes']['category'];
                    $facets['category'][$cat] = ($facets['category'][$cat] ?? 0) + 1;
                }
            }
            
            // Format for API: { label: "Electronics", count: 5 }
            $fmt = [];
            foreach ($facets['category'] as $k => $v) {
                $fmt[] = ['label' => $k, 'count' => $v];
            }
            
            return ['category' => $fmt, 'ownerId' => []];
        }

        return ['category' => [], 'ownerId' => []];
    }
}
