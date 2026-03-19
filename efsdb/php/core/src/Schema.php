<?php
declare(strict_types=1);

final class Schema
{
    private string $dir;

    public function __construct(string $dir)
    {
        $this->dir = $dir;
    }

    public function load(string $entity): array
    {
        $file = $this->dir . '/' . $entity . '.json';
        if (!file_exists($file)) {
            // Return default/empty schema if missing
            return ['entity' => $entity, 'indexes' => []];
        }
        return json_decode(file_get_contents($file), true, 512, JSON_THROW_ON_ERROR);
    }

    public function getChunkProfile(string $entity): array
    {
        $s = $this->load($entity);
        return $s['payload']['chunkProfiles']['default'] ?? ['target' => 65536];
    }
}
