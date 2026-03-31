<?php
declare(strict_types=1);

require_once __DIR__ . '/Permissions.php';
require_once __DIR__ . '/Store.php';
require_once __DIR__ . '/User.php';

final class EntityExposurePolicy
{
    /**
     * @var array<string,string>
     */
    private const SEARCH_ALLOWLIST = [
        'products' => 'authenticated',
        Store::ENTITY_SYSTEM_USERS => 'system_users',
        Store::ENTITY_SYSTEM_ROLES => 'system_roles',
        'public_workspace_roots' => 'site',
        'public_workspace_files' => 'site',
        Store::ENTITY_SYSTEM_SESSIONS => 'internal',
        Store::ENTITY_SYSTEM_SETTINGS => 'system_settings',
        Store::ENTITY_SYSTEM_AUDIT => 'internal',
    ];

    public function __construct(private readonly Permissions $permissions)
    {
    }

    public function defaultSearchEntity(): string
    {
        return 'public_workspace_files';
    }

    public function canSearch(User $user, string $entity): bool
    {
        $scope = self::SEARCH_ALLOWLIST[$entity] ?? null;
        if ($scope === null || $user->isGuest()) {
            return false;
        }

        return match ($scope) {
            'authenticated' => true,
            'site' => $this->permissions->canViewSiteWorkspace($user),
            'system_users' => $this->permissions->canViewUsers($user),
            'system_roles' => $this->permissions->canViewRoles($user),
            'system_settings' => $this->permissions->canViewSettings($user),
            'internal' => $this->permissions->canManageSettings($user) || $user->actualRole === 'operator_root',
            default => false,
        };
    }

    public function assertSearchAccess(User $user, string $entity): void
    {
        if (!array_key_exists($entity, self::SEARCH_ALLOWLIST)) {
            throw new InvalidArgumentException("Unsupported searchable entity: $entity");
        }

        if (!$this->canSearch($user, $entity)) {
            throw new RuntimeException("Search access denied for entity: $entity");
        }
    }
}
