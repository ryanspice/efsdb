<?php
declare(strict_types=1);

final class Audit
{
    public function __construct(private readonly App $app) {}

    /**
     * @param array<string,mixed> $payload
     * @return array<string,mixed>
     */
    public function record(string $type, array $payload = []): array
    {
        $occurredAt = gmdate('c');
        $doc = [
            'id' => bin2hex(random_bytes(16)),
            'type' => $type,
            'payload' => $payload,
            'occurredAt' => $occurredAt,
        ];

        return $this->app->getStore()->upsert(Store::ENTITY_SYSTEM_AUDIT, $doc, [
            'logicalPath' => 'audit/' . $occurredAt . '-' . $doc['id'] . '.json',
        ]);
    }
}
