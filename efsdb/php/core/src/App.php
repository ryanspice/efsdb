<?php
declare(strict_types=1);

require_once __DIR__ . '/Audit.php';
require_once __DIR__ . '/DeliveryModeResolver.php';
require_once __DIR__ . '/Explorer.php';
require_once __DIR__ . '/GarbageCollector.php';
require_once __DIR__ . '/IdentityManager.php';
require_once __DIR__ . '/IndexManager.php';
require_once __DIR__ . '/Permissions.php';
require_once __DIR__ . '/PublicSiteRouter.php';
require_once __DIR__ . '/PublicWorkspace.php';
require_once __DIR__ . '/Schema.php';
require_once __DIR__ . '/Store.php';

final class App
{
    private Schema $schema;
    private Store $store;
    private IndexManager $idx;
    private Audit $audit;
    private GarbageCollector $garbageCollector;
    private Explorer $explorer;
    private IdentityManager $identity;
    private PublicWorkspace $publicWorkspace;
    private DeliveryModeResolver $deliveryModeResolver;
    private PublicSiteRouter $publicSiteRouter;

    public function __construct(string $dataDir, string $schemaDir)
    {
        $this->schema = new Schema($schemaDir);
        $this->store = new Store($dataDir, $this->schema);

        if (!$this->store->hasMasterKey()) {
            $this->store->initMasterKey();
        }

        $this->idx = new IndexManager($dataDir, $this->store->masterKeyB64(), $this->store);
        $perms = new Permissions();
        $this->identity = new IdentityManager($this->store, $perms);
        $this->identity->ensureInitialized();

        $this->audit = new Audit($this);
        $this->garbageCollector = new GarbageCollector($this->store, $this->audit);
        $this->publicWorkspace = new PublicWorkspace($this->store, $this->identity, $this->audit);
        $this->deliveryModeResolver = new DeliveryModeResolver($this->identity, $this->publicWorkspace);
        $this->publicSiteRouter = new PublicSiteRouter($this->publicWorkspace, $this->deliveryModeResolver);
        $this->explorer = new Explorer($this->store, $perms);
    }

    public function getStore(): Store
    {
        return $this->store;
    }

    public function getIndexManager(): IndexManager
    {
        return $this->idx;
    }

    public function getSchema(): Schema
    {
        return $this->schema;
    }

    public function getAudit(): Audit
    {
        return $this->audit;
    }

    public function getGarbageCollector(): GarbageCollector
    {
        return $this->garbageCollector;
    }

    public function getExplorer(): Explorer
    {
        return $this->explorer;
    }

    public function getIdentity(): IdentityManager
    {
        return $this->identity;
    }

    public function getPublicWorkspace(): PublicWorkspace
    {
        return $this->publicWorkspace;
    }

    public function getDeliveryModeResolver(): DeliveryModeResolver
    {
        return $this->deliveryModeResolver;
    }

    public function getPublicSiteRouter(): PublicSiteRouter
    {
        return $this->publicSiteRouter;
    }

    /**
     * @param array<string,mixed> $doc
     * @return array<string,mixed>
     */
    public function upsert(string $entity, array $doc): array
    {
        $manifest = $this->store->upsert($entity, $doc);
        $schema = $this->schema->load($entity);
        $this->idx->update($entity, (string)$manifest['id'], $manifest['indexes'] ?? [], $schema['indexes'] ?? []);
        return $manifest;
    }

    /**
     * @param resource|string $stream
     * @param array<string,mixed> $meta
     * @return array<string,mixed>
     */
    public function uploadFile(string $entity, $stream, array $meta): array
    {
        $manifest = $this->store->storeFile($entity, $stream, $meta);
        $schema = $this->schema->load($entity);
        $this->idx->update($entity, (string)$manifest['id'], $manifest['indexes'] ?? [], $schema['indexes'] ?? []);
        return $manifest;
    }
}
