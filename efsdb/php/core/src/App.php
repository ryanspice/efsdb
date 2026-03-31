<?php
declare(strict_types=1);

require_once __DIR__ . '/Audit.php';
require_once __DIR__ . '/DeliveryModeResolver.php';
require_once __DIR__ . '/EnvironmentOperationsService.php';
require_once __DIR__ . '/EntityExposurePolicy.php';
require_once __DIR__ . '/Explorer.php';
require_once __DIR__ . '/GarbageCollector.php';
require_once __DIR__ . '/IdentityManager.php';
require_once __DIR__ . '/IndexManager.php';
require_once __DIR__ . '/IndexRebuilder.php';
require_once __DIR__ . '/FacetService.php';
require_once __DIR__ . '/Permissions.php';
require_once __DIR__ . '/ProductService.php';
require_once __DIR__ . '/PublicSiteRouter.php';
require_once __DIR__ . '/PublicSiteImport.php';
require_once __DIR__ . '/PublicWorkspace.php';
require_once __DIR__ . '/RuntimeMonitorService.php';
require_once __DIR__ . '/Schema.php';
require_once __DIR__ . '/SearchService.php';
require_once __DIR__ . '/SiteBuildService.php';
require_once __DIR__ . '/NodeEnvironmentService.php';
require_once __DIR__ . '/GhostPreloadService.php';
require_once __DIR__ . '/Store.php';

final class App
{
    private Schema $schema;
    private Store $store;
    private IndexManager $idx;
    private Permissions $permissions;
    private Audit $audit;
    private GarbageCollector $garbageCollector;
    private Explorer $explorer;
    private IdentityManager $identity;
    private PublicWorkspace $publicWorkspace;
    private DeliveryModeResolver $deliveryModeResolver;
    private PublicSiteRouter $publicSiteRouter;
    private PublicSiteImport $publicSiteImport;
    private IndexRebuilder $indexRebuilder;
    private ProductService $productService;
    private SearchService $searchService;
    private FacetService $facetService;
    private SiteBuildService $siteBuildService;
    private GhostPreloadService $ghostPreloadService;
    private EnvironmentOperationsService $environmentOperations;
    private ?NodeEnvironmentService $nodeEnv = null;
    private ?RuntimeMonitorService $runtimeMonitor = null;

    public function __construct(string $dataDir, string $schemaDir)
    {
        $this->schema = new Schema($schemaDir);
        $this->store = new Store($dataDir, $this->schema);

        if (!$this->store->hasMasterKey()) {
            $this->store->initMasterKey();
            $isFirstRun = true;
        } else {
            $isFirstRun = false;
        }

        $this->idx = new IndexManager($dataDir, $this->store->masterKeyB64(), $this->store);
        $this->permissions = new Permissions();
        $this->identity = new IdentityManager($this->store, $this->permissions);
        $this->identity->ensureInitialized();

        $this->audit = new Audit($this);
        $this->garbageCollector = new GarbageCollector($this->store, $this->audit);
        $this->publicWorkspace = new PublicWorkspace($this->store, $this->identity, $this->audit);

        if ($isFirstRun) {
            $this->publicWorkspace->ensureInitialized();
        }
        $this->deliveryModeResolver = new DeliveryModeResolver($this->identity, $this->publicWorkspace);
        $this->publicSiteRouter = new PublicSiteRouter($this->publicWorkspace, $this->deliveryModeResolver);
        $this->publicSiteImport = new PublicSiteImport($this->publicWorkspace, $this->audit);
        $this->explorer = new Explorer($this->store, $this->permissions, $this->publicWorkspace);
        $this->indexRebuilder = new IndexRebuilder($this->store, $this->schema, $this->idx);
        $this->productService = new ProductService($this->store, $this->schema, $this->idx);
        $this->searchService = new SearchService($this->store, $this->schema, $this->idx, $this->permissions);
        $this->facetService = new FacetService($this->schema, $this->idx, $this->permissions);
        $this->siteBuildService = new SiteBuildService($this->store, $this->publicWorkspace);
        $this->ghostPreloadService = new GhostPreloadService($this->store, $this->publicWorkspace, $this->publicSiteRouter);
        $this->environmentOperations = new EnvironmentOperationsService(
            $this->store,
            $this->publicWorkspace,
            $this->siteBuildService,
            $this->audit
        );
    }

    public function getStore(): Store
    {
        return $this->store;
    }

    public function getIndexManager(): IndexManager
    {
        return $this->idx;
    }

    public function getPermissions(): Permissions
    {
        return $this->permissions;
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

    public function getPublicSiteImport(): PublicSiteImport
    {
        return $this->publicSiteImport;
    }

    public function getIndexRebuilder(): IndexRebuilder
    {
        return $this->indexRebuilder;
    }

    public function getProductService(): ProductService
    {
        return $this->productService;
    }

    public function getSearchService(): SearchService
    {
        return $this->searchService;
    }

    public function getFacetService(): FacetService
    {
        return $this->facetService;
    }

    public function getSiteBuildService(): SiteBuildService
    {
        return $this->siteBuildService;
    }

    public function getGhostPreloadService(): GhostPreloadService
    {
        return $this->ghostPreloadService;
    }

    public function getEnvironmentOperations(): EnvironmentOperationsService
    {
        return $this->environmentOperations;
    }

    /**
     * @param array<string,mixed> $doc
     * @return array<string,mixed>
     */
    public function upsert(string $entity, array $doc): array
    {
        return $this->store->upsert($entity, $doc);
    }

    /**
     * @param resource|string $stream
     * @param array<string,mixed> $meta
     * @return array<string,mixed>
     */
    public function uploadFile(string $entity, $stream, array $meta): array
    {
        return $this->store->storeFile($entity, $stream, $meta);
    }

    public function getNodeEnvironmentService(): NodeEnvironmentService
    {
        if ($this->nodeEnv === null) {
            $this->nodeEnv = new NodeEnvironmentService($this->getStore());
        }
        return $this->nodeEnv;
    }

    public function getRuntimeMonitorService(): RuntimeMonitorService
    {
        if ($this->runtimeMonitor === null) {
            $this->runtimeMonitor = new RuntimeMonitorService($this->getStore());
        }

        return $this->runtimeMonitor;
    }
}
