<?php
declare(strict_types=1);

require_once __DIR__ . '/Audit.php';
require_once __DIR__ . '/Store.php';

final class GarbageCollector
{
    public function __construct(
        private readonly Store $store,
        private readonly Audit $audit
    ) {}

    /**
     * @return array<string,int>
     */
    public function collectExpired(?int $now = null): array
    {
        $timestamp = $now ?? time();
        $summary = [
            'expiredTombstones' => 0,
            'purgedManifests' => 0,
            'purgedLookups' => 0,
            'purgedChunks' => 0,
        ];
        
        // Also garbage collect dev servers
        require_once __DIR__ . '/NodeEnvironmentService.php';
        $nodeEnv = new NodeEnvironmentService($this->store);
        $nodeEnv->gcServers(300);

        foreach ($this->store->listEntities(true) as $entity) {
            $expired = [];
            foreach ($this->store->scanAllManifests($entity, PHP_INT_MAX) as $manifest) {
                if ($this->store->isTombstoneExpired($manifest, $timestamp)) {
                    $expired[] = $manifest;
                }
            }

            if ($expired === []) {
                continue;
            }

            $summary['expiredTombstones'] += count($expired);
            $candidateChunks = [];

            foreach ($expired as $manifest) {
                $entityName = (string)($manifest['entity'] ?? $entity);
                $manifestId = (string)($manifest['id'] ?? '');
                if ($manifestId === '') {
                    continue;
                }

                $summary['purgedLookups'] += $this->store->deleteLookupEntriesFromManifest($manifest);
                $candidateChunks = array_merge($candidateChunks, $this->store->manifestChunkHashes($manifest));
                if ($this->store->deleteManifest($entityName, $manifestId)) {
                    $summary['purgedManifests']++;
                }
            }

            foreach (array_values(array_unique($candidateChunks)) as $chunkId) {
                if ($this->store->isChunkReferencedByAnyManifest($entity, $chunkId)) {
                    continue;
                }

                if ($this->store->deleteChunk($entity, $chunkId)) {
                    $summary['purgedChunks']++;
                }
            }
        }

        $this->audit->record('gc.completed', $summary);
        return $summary;
    }
}
