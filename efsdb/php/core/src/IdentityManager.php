<?php
declare(strict_types=1);

require_once __DIR__ . '/Config.php';
require_once __DIR__ . '/Permissions.php';
require_once __DIR__ . '/Store.php';
require_once __DIR__ . '/User.php';

final class IdentityManager
{
    private bool $tenantAdminCreated = false;

    public function __construct(
        private readonly Store $store,
        private readonly Permissions $permissions
    ) {}

    public function ensureInitialized(): void
    {
        $this->seedRoles();
        $this->seedSettings();
        $this->ensureTenantAdmin();
    }

    /**
     * @return array<array<string,mixed>>
     */
    public function listRoles(bool $includeOperator = false): array
    {
        $roles = [];
        foreach ($this->store->scanAllManifests(Store::ENTITY_SYSTEM_ROLES) as $manifest) {
            $doc = $this->store->readDocument(Store::ENTITY_SYSTEM_ROLES, (string)$manifest['id']);
            if (!$includeOperator && !empty($doc['operatorOnly'])) {
                continue;
            }
            $roles[] = $doc;
        }

        usort($roles, static fn(array $a, array $b): int => strcmp((string)$a['name'], (string)$b['name']));
        return $roles;
    }

    /**
     * @return array<array<string,mixed>>
     */
    public function listUsers(): array
    {
        $users = [];
        foreach ($this->store->scanAllManifests(Store::ENTITY_SYSTEM_USERS) as $manifest) {
            $doc = $this->store->readDocument(Store::ENTITY_SYSTEM_USERS, (string)$manifest['id']);
            unset($doc['loginKeyHash']);
            $users[] = $doc;
        }

        usort($users, static fn(array $a, array $b): int => strcmp((string)$a['username'], (string)$b['username']));
        return $users;
    }

    /**
     * @param array<string,mixed> $payload
     * @return array{user: array<string,mixed>, loginKey: string}
     */
    public function createUser(array $payload, ?string $loginKey = null): array
    {
        $roleId = (string)($payload['roleId'] ?? 'member_standard');
        $role = $this->getRoleDocument($roleId);
        if ($role === null || !empty($role['operatorOnly'])) {
            throw new RuntimeException("Unknown or restricted role: $roleId");
        }

        $username = $this->slug((string)($payload['username'] ?? 'user'));
        if ($username === '') {
            throw new RuntimeException('Username is required');
        }

        if ($this->findUserDocumentByUsername($username) !== null) {
            throw new RuntimeException("User already exists: $username");
        }

        $loginKey ??= $this->newSecret();
        $id = $payload['id'] ?? bin2hex(random_bytes(8));
        $doc = [
            'id' => (string)$id,
            'username' => $username,
            'name' => (string)($payload['name'] ?? ucwords(str_replace(['-', '_'], ' ', $username))),
            'roleId' => $roleId,
            'status' => (string)($payload['status'] ?? 'active'),
            'loginKeyId' => $this->loginKeyId($loginKey),
            'loginKeyHash' => password_hash($loginKey, PASSWORD_DEFAULT),
            'createdAt' => gmdate('c'),
            'updatedAt' => gmdate('c'),
        ];

        $this->store->upsert(Store::ENTITY_SYSTEM_USERS, $doc, ['lookupFields' => ['username', 'loginKeyId']]);
        unset($doc['loginKeyHash']);

        return ['user' => $doc, 'loginKey' => $loginKey];
    }

    /**
     * @param array<string,mixed> $payload
     * @return array<string,mixed>
     */
    public function createRole(array $payload): array
    {
        $id = $this->slug((string)($payload['id'] ?? $payload['name'] ?? ''));
        if ($id === '') {
            throw new RuntimeException('Role id is required');
        }

        if ($this->getRoleDocument($id) !== null) {
            throw new RuntimeException("Role already exists: $id");
        }

        $entitlements = array_values(array_unique(array_map('strval', $payload['entitlements'] ?? [])));
        $doc = [
            'id' => $id,
            'name' => (string)($payload['name'] ?? ucwords(str_replace('-', ' ', $id))),
            'description' => (string)($payload['description'] ?? ''),
            'entitlements' => $entitlements,
            'operatorOnly' => false,
            'system' => false,
            'createdAt' => gmdate('c'),
            'updatedAt' => gmdate('c'),
        ];

        $this->store->upsert(Store::ENTITY_SYSTEM_ROLES, $doc);
        return $doc;
    }

    /**
     * @return array{user: array<string,mixed>, loginKey: string}
     */
    public function rotateUserKey(string $userId, ?string $loginKey = null): array
    {
        $user = $this->store->getDocument(Store::ENTITY_SYSTEM_USERS, $userId);
        if ($user === null) {
            throw new RuntimeException("Unknown user: $userId");
        }

        $previousManifest = $this->store->getManifest(Store::ENTITY_SYSTEM_USERS, $userId);
        $previousLoginKeyId = trim((string)($user['loginKeyId'] ?? ''));
        $loginKey ??= $this->newSecret();
        $nextLoginKeyId = $this->loginKeyId($loginKey);
        $revokedLoginKeyIds = array_values(array_unique(array_filter(array_map(
            'strval',
            is_array($user['revokedLoginKeyIds'] ?? null) ? $user['revokedLoginKeyIds'] : []
        ))));
        if ($previousLoginKeyId !== '' && $previousLoginKeyId !== $nextLoginKeyId) {
            $revokedLoginKeyIds[] = $previousLoginKeyId;
            $revokedLoginKeyIds = array_values(array_unique($revokedLoginKeyIds));
        }

        $this->store->deleteLookupEntriesFromManifest($previousManifest);
        $user['loginKeyId'] = $nextLoginKeyId;
        $user['loginKeyHash'] = password_hash($loginKey, PASSWORD_DEFAULT);
        $user['revokedLoginKeyIds'] = $revokedLoginKeyIds;
        $user['updatedAt'] = gmdate('c');
        $this->store->upsert(Store::ENTITY_SYSTEM_USERS, $user, ['lookupFields' => ['username', 'loginKeyId']]);

        unset($user['loginKeyHash']);
        return ['user' => $user, 'loginKey' => $loginKey];
    }

    public function authenticateKey(string $key): ?User
    {
        $key = trim($key);
        if ($key === '') {
            return null;
        }

        $loginKeyId = $this->loginKeyId($key);

        $match = $this->store->findDocumentByLookup(Store::ENTITY_SYSTEM_USERS, 'loginKeyId', $loginKeyId);
        if ($match !== null) {
            $doc = $match['document'];
            $revokedLoginKeyIds = array_map(
                'strval',
                is_array($doc['revokedLoginKeyIds'] ?? null) ? $doc['revokedLoginKeyIds'] : []
            );
            if (($doc['status'] ?? 'active') === 'active') {
                if (in_array($loginKeyId, $revokedLoginKeyIds, true)) {
                    return null;
                }
                $hash = (string)($doc['loginKeyHash'] ?? '');
                if ($hash !== '' && password_verify($key, $hash)) {
                    return $this->hydrateUserFromDocument($doc);
                }
            }
        }

        foreach ($this->store->scanAllManifests(Store::ENTITY_SYSTEM_USERS) as $manifest) {
            $doc = $this->store->readDocument(Store::ENTITY_SYSTEM_USERS, (string)$manifest['id']);
            if (($doc['status'] ?? 'active') !== 'active') {
                continue;
            }

            $revokedLoginKeyIds = array_map(
                'strval',
                is_array($doc['revokedLoginKeyIds'] ?? null) ? $doc['revokedLoginKeyIds'] : []
            );
            if (in_array($loginKeyId, $revokedLoginKeyIds, true)) {
                continue;
            }

            $storedLoginKeyId = trim((string)($doc['loginKeyId'] ?? ''));
            if ($storedLoginKeyId !== '' && $storedLoginKeyId !== $loginKeyId) {
                continue;
            }

            $hash = (string)($doc['loginKeyHash'] ?? '');
            if ($hash !== '' && password_verify($key, $hash)) {
                if (($doc['loginKeyId'] ?? null) !== $loginKeyId) {
                    $doc['loginKeyId'] = $loginKeyId;
                    $doc['updatedAt'] = gmdate('c');
                    $this->store->upsert(Store::ENTITY_SYSTEM_USERS, $doc, ['lookupFields' => ['username', 'loginKeyId']]);
                }
                return $this->hydrateUserFromDocument($doc);
            }
        }

        return null;
    }

    public function verifyUserKey(string $userId, string $key): bool
    {
        $key = trim($key);
        if ($key === '') {
            return false;
        }

        $doc = $this->store->getDocument(Store::ENTITY_SYSTEM_USERS, $userId);
        if ($doc === null || ($doc['status'] ?? 'active') !== 'active') {
            return false;
        }

        $hash = (string)($doc['loginKeyHash'] ?? '');
        if ($hash === '' || !password_verify($key, $hash)) {
            return false;
        }

        $loginKeyId = $this->loginKeyId($key);
        $revokedLoginKeyIds = array_map(
            'strval',
            is_array($doc['revokedLoginKeyIds'] ?? null) ? $doc['revokedLoginKeyIds'] : []
        );
        if (in_array($loginKeyId, $revokedLoginKeyIds, true)) {
            return false;
        }
        if (($doc['loginKeyId'] ?? null) !== $loginKeyId) {
            $doc['loginKeyId'] = $loginKeyId;
            $doc['updatedAt'] = gmdate('c');
            $this->store->upsert(Store::ENTITY_SYSTEM_USERS, $doc, ['lookupFields' => ['username', 'loginKeyId']]);
        }

        return true;
    }

    public function getUserById(string $userId, ?string $effectiveRole = null): ?User
    {
        $doc = $this->store->getDocument(Store::ENTITY_SYSTEM_USERS, $userId);
        if ($doc === null) {
            return null;
        }

        return $this->hydrateUserFromDocument($doc, $effectiveRole);
    }

    /**
     * @return array<string,mixed>|null
     */
    public function getRoleDocument(string $roleId): ?array
    {
        return $this->store->getDocument(Store::ENTITY_SYSTEM_ROLES, $roleId);
    }

    /**
     * @return string[]
     */
    public function getAvailableDisplayModes(User $user): array
    {
        if ($user->actualRole === 'tenant_admin') {
            return array_map(
                static fn(array $role): string => (string)$role['id'],
                $this->listRoles(false)
            );
        }

        return [$user->actualRole];
    }

    public function canAccessRole(User $user, string $roleId): bool
    {
        if ($user->actualRole === 'tenant_admin') {
            $role = $this->getRoleDocument($roleId);
            return $role !== null && empty($role['operatorOnly']);
        }

        return $user->actualRole === $roleId;
    }

    /**
     * @return array{token: string, session: array<string,mixed>}
     */
    public function createRefreshSession(User $user): array
    {
        $token = $this->newSecret(48);
        $sessionId = bin2hex(random_bytes(16));
        $doc = [
            'id' => $sessionId,
            'tokenHash' => hash('sha256', $token),
            'userId' => $user->id,
            'actualRoleId' => $user->actualRole,
            'effectiveRoleId' => $user->role,
            'status' => 'active',
            'createdAt' => gmdate('c'),
            'updatedAt' => gmdate('c'),
            'expiresAt' => gmdate('c', time() + (86400 * 30)),
            'revokedAt' => null,
            'rotatedTo' => null,
        ];

        $this->store->upsert(Store::ENTITY_SYSTEM_SESSIONS, $doc, ['lookupFields' => ['tokenHash']]);
        return ['token' => $token, 'session' => $doc];
    }

    /**
     * @return array<string,mixed>|null
     */
    public function findRefreshSession(string $token): ?array
    {
        $hash = hash('sha256', $token);
        $match = $this->store->findDocumentByLookup(Store::ENTITY_SYSTEM_SESSIONS, 'tokenHash', $hash)
            ?? $this->store->findDocumentByIndex(Store::ENTITY_SYSTEM_SESSIONS, 'tokenHash', $hash);
        if ($match === null) {
            return null;
        }

        $doc = $match['document'];
        if (($doc['tokenHash'] ?? null) !== $hash) {
            return null;
        }

        if ($this->store->findDocumentByLookup(Store::ENTITY_SYSTEM_SESSIONS, 'tokenHash', $hash) === null) {
            $this->store->upsert(Store::ENTITY_SYSTEM_SESSIONS, $doc, ['lookupFields' => ['tokenHash']]);
        }

        if (($doc['status'] ?? '') !== 'active') {
            return null;
        }

        if (strtotime((string)($doc['expiresAt'] ?? '1970-01-01T00:00:00Z')) < time()) {
            return null;
        }

        return $doc;
    }

    /**
     * @return array{token: string, session: array<string,mixed>}|null
     */
    public function rotateRefreshSession(string $token): ?array
    {
        $current = $this->findRefreshSession($token);
        if ($current === null) {
            return null;
        }

        $user = $this->getUserById((string)$current['userId'], (string)$current['effectiveRoleId']);
        if ($user === null) {
            return null;
        }

        $next = $this->createRefreshSession($user);
        $current['status'] = 'rotated';
        $current['revokedAt'] = gmdate('c');
        $current['rotatedTo'] = $next['session']['id'];
        $current['updatedAt'] = gmdate('c');
        $this->store->upsert(Store::ENTITY_SYSTEM_SESSIONS, $current, ['lookupFields' => ['tokenHash']]);

        return $next;
    }

    public function revokeRefreshSession(string $token): void
    {
        $current = $this->findRefreshSession($token);
        if ($current === null) {
            return;
        }

        $current['status'] = 'revoked';
        $current['revokedAt'] = gmdate('c');
        $current['updatedAt'] = gmdate('c');
        $this->store->upsert(Store::ENTITY_SYSTEM_SESSIONS, $current, ['lookupFields' => ['tokenHash']]);
    }

    public function writeTenantSetting(string $key, mixed $value): array
    {
        $settings = $this->store->getDocument(Store::ENTITY_SYSTEM_SETTINGS, 'tenant') ?? [
            'id' => 'tenant',
            'settings' => [],
            'updatedAt' => gmdate('c'),
        ];

        $settings['settings'][(string)$key] = $value;
        $settings['updatedAt'] = gmdate('c');
        return $this->store->upsert(Store::ENTITY_SYSTEM_SETTINGS, $settings);
    }

    /**
     * @return array<string,mixed>
     */
    public function getTenantSettings(): array
    {
        return $this->store->getDocument(Store::ENTITY_SYSTEM_SETTINGS, 'tenant') ?? [
            'id' => 'tenant',
            'settings' => [],
            'updatedAt' => null,
        ];
    }

    public function getConsoleBootstrapNotice(): ?string
    {
        if (!Config::isDebugEnabled()) {
            return null;
        }

        if ($this->findUserDocumentByUsername('tenant-admin') === null) {
            return 'EFSDB dev server: tenant-admin is not initialized yet.';
        }

        if (Config::getBootstrapSecret() !== null) {
            return 'EFSDB dev server: tenant-admin was initialized from EFSDB_BOOTSTRAP_SECRET. The secret is not echoed. Use `php efsdb/php/core/bin/efsdb.php tenant-admin-key` to rotate and print a fresh local demo key.';
        }

        if ($this->tenantAdminCreated) {
            return 'EFSDB dev server: tenant-admin was created on this first HTTP request. Copy the one-time key printed above now. It will not be shown again. Bootstrap runs on the first request, not when `php -S` starts.';
        }

        return 'EFSDB dev server: tenant-admin already exists, so no new bootstrap key was generated. Use `php efsdb/php/core/bin/efsdb.php tenant-admin-key` to rotate and print a fresh login key for local demos.';
    }

    private function seedRoles(): void
    {
        $defaults = [
            [
                'id' => 'guest',
                'name' => 'Guest',
                'description' => 'Unauthenticated user',
                'entitlements' => [],
                'operatorOnly' => false,
                'system' => true,
            ],
            [
                'id' => 'member_standard',
                'name' => 'Standard Member',
                'description' => 'Decoded content access only',
                'entitlements' => [Permissions::ENT_NATURAL_VIEW],
                'operatorOnly' => false,
                'system' => true,
            ],
            [
                'id' => 'member_premium',
                'name' => 'Premium Member',
                'description' => 'Decoded content plus raw inspection',
                'entitlements' => [Permissions::ENT_NATURAL_VIEW, Permissions::ENT_RAW_VIEW],
                'operatorOnly' => false,
                'system' => true,
            ],
            [
                'id' => 'tenant_admin',
                'name' => 'Tenant Admin',
                'description' => 'Tenant-scoped administrator',
                'entitlements' => [
                    Permissions::ENT_NATURAL_VIEW,
                    Permissions::ENT_RAW_VIEW,
                    Permissions::ENT_SITE_EDIT,
                    Permissions::ENT_SYSTEM_USERS_VIEW,
                    Permissions::ENT_SYSTEM_USERS_EDIT,
                    Permissions::ENT_SYSTEM_ROLES_VIEW,
                    Permissions::ENT_SYSTEM_ROLES_EDIT,
                    Permissions::ENT_SYSTEM_SETTINGS_VIEW,
                    Permissions::ENT_SYSTEM_SETTINGS_EDIT,
                    Permissions::ENT_ENVIRONMENT_CHANGE,
                    Permissions::ENT_ADMIN_USERS,
                    Permissions::ENT_ADMIN_ROLES,
                    Permissions::ENT_ADMIN_SETTINGS,
                    Permissions::ENT_IMPERSONATE,
                ],
                'operatorOnly' => false,
                'system' => true,
            ],
            [
                'id' => 'operator_root',
                'name' => 'Operator Root',
                'description' => 'Console-only recovery role',
                'entitlements' => [
                    Permissions::ENT_NATURAL_VIEW,
                    Permissions::ENT_RAW_VIEW,
                    Permissions::ENT_SITE_EDIT,
                    Permissions::ENT_SYSTEM_USERS_VIEW,
                    Permissions::ENT_SYSTEM_USERS_EDIT,
                    Permissions::ENT_SYSTEM_ROLES_VIEW,
                    Permissions::ENT_SYSTEM_ROLES_EDIT,
                    Permissions::ENT_SYSTEM_SETTINGS_VIEW,
                    Permissions::ENT_SYSTEM_SETTINGS_EDIT,
                    Permissions::ENT_ENVIRONMENT_CHANGE,
                    Permissions::ENT_ADMIN_USERS,
                    Permissions::ENT_ADMIN_ROLES,
                    Permissions::ENT_ADMIN_SETTINGS,
                    Permissions::ENT_IMPERSONATE,
                ],
                'operatorOnly' => true,
                'system' => true,
            ],
        ];

        foreach ($defaults as $role) {
            $existing = $this->getRoleDocument($role['id']);
            if ($existing !== null) {
                $mergedEntitlements = array_values(array_unique(array_merge(
                    array_map('strval', $existing['entitlements'] ?? []),
                    array_map('strval', $role['entitlements'] ?? [])
                )));
                $updated = false;

                if ($mergedEntitlements !== array_values(array_map('strval', $existing['entitlements'] ?? []))) {
                    $existing['entitlements'] = $mergedEntitlements;
                    $updated = true;
                }

                foreach (['operatorOnly', 'system'] as $field) {
                    if (($existing[$field] ?? null) !== $role[$field]) {
                        $existing[$field] = $role[$field];
                        $updated = true;
                    }
                }

                if ($updated) {
                    $existing['updatedAt'] = gmdate('c');
                    $this->store->upsert(Store::ENTITY_SYSTEM_ROLES, $existing);
                }
                continue;
            }

            $role['createdAt'] = gmdate('c');
            $role['updatedAt'] = gmdate('c');
            $this->store->upsert(Store::ENTITY_SYSTEM_ROLES, $role);
        }
    }

    private function seedSettings(): void
    {
        $settings = $this->store->getDocument(Store::ENTITY_SYSTEM_SETTINGS, 'tenant');
        if ($settings !== null) {
            return;
        }

        $this->store->upsert(Store::ENTITY_SYSTEM_SETTINGS, [
            'id' => 'tenant',
            'settings' => [
                'defaultDisplayMode' => 'tenant_admin',
                'accent' => Config::getUiAccent(),
                'roleOrder' => ['tenant_admin', 'member_premium', 'member_standard', 'guest'],
            ],
            'updatedAt' => gmdate('c'),
        ]);
    }

    private function ensureTenantAdmin(): void
    {
        $admin = $this->findUserDocumentByUsername('tenant-admin');
        if ($admin !== null) {
            return;
        }

        $bootstrapSecret = Config::getBootstrapSecret();
        if ($bootstrapSecret === null && Config::isProduction()) {
            throw new RuntimeException(
                'Bootstrap secret missing. Set EFSDB_BOOTSTRAP_SECRET or run the bootstrap CLI before serving production traffic.'
            );
        }

        $secret = $bootstrapSecret ?? $this->newSecret();
        $created = $this->createUser([
            'id' => 'tenant-admin',
            'username' => 'tenant-admin',
            'name' => 'Tenant Admin',
            'roleId' => 'tenant_admin',
        ], $secret);
        $this->tenantAdminCreated = true;

        if ($bootstrapSecret === null && Config::isDebugEnabled()) {
            $noticePath = Config::getBootstrapNoticePath();
            if (!is_file($noticePath)) {
                file_put_contents($noticePath, gmdate('c'), LOCK_EX);
                error_log("EFSDB bootstrap tenant admin key: {$created['loginKey']}");
                error_log('EFSDB bootstrap note: this one-time key is emitted on the first HTTP request that initializes the data directory. Future demo keys can be generated with `php efsdb/php/core/bin/efsdb.php tenant-admin-key`.');
            }
        }
    }

    /**
     * @param array<string,mixed> $doc
     */
    private function hydrateUserFromDocument(array $doc, ?string $effectiveRole = null): User
    {
        $actualRoleId = (string)($doc['roleId'] ?? 'guest');
        $effectiveRoleId = $effectiveRole ?? $actualRoleId;

        $actualRole = $this->getRoleDocument($actualRoleId) ?? ['entitlements' => [], 'operatorOnly' => false];
        $effectiveRoleDoc = $this->getRoleDocument($effectiveRoleId) ?? $actualRole;
        if (!empty($effectiveRoleDoc['operatorOnly']) && $actualRoleId !== 'operator_root') {
            $effectiveRoleId = $actualRoleId;
            $effectiveRoleDoc = $actualRole;
        }

        $tempUser = new User(
            (string)$doc['id'],
            (string)($doc['name'] ?? $doc['username']),
            $effectiveRoleId,
            $actualRoleId,
            2000,
            2000,
            array_values(array_map('strval', $effectiveRoleDoc['entitlements'] ?? [])),
            array_values(array_map('strval', $actualRole['entitlements'] ?? [])),
            [],
            $effectiveRoleId,
            (bool)($actualRole['operatorOnly'] ?? false)
        );

        $availableModes = $this->getAvailableDisplayModes($tempUser);

        return new User(
            (string)$doc['id'],
            (string)($doc['name'] ?? $doc['username']),
            $effectiveRoleId,
            $actualRoleId,
            2000,
            2000,
            array_values(array_map('strval', $effectiveRoleDoc['entitlements'] ?? [])),
            array_values(array_map('strval', $actualRole['entitlements'] ?? [])),
            $availableModes,
            $effectiveRoleId,
            (bool)($actualRole['operatorOnly'] ?? false)
        );
    }

    /**
     * @return array<string,mixed>|null
     */
    private function findUserDocumentByUsername(string $username): ?array
    {
        $slug = $this->slug($username);
        $match = $this->store->findDocumentByLookup(Store::ENTITY_SYSTEM_USERS, 'username', $slug)
            ?? $this->store->findDocumentByIndex(Store::ENTITY_SYSTEM_USERS, 'username', $slug);
        $document = $match['document'] ?? null;
        if (!is_array($document) || (($document['username'] ?? null) !== $slug)) {
            return null;
        }

        if ($this->store->findDocumentByLookup(Store::ENTITY_SYSTEM_USERS, 'username', $slug) === null) {
            $this->store->upsert(Store::ENTITY_SYSTEM_USERS, $document, ['lookupFields' => ['username', 'loginKeyId']]);
        }

        return $document;
    }

    private function slug(string $value): string
    {
        $value = strtolower(trim($value));
        $value = preg_replace('/[^a-z0-9_\-]+/', '-', $value) ?? $value;
        return trim($value, '-');
    }

    private function newSecret(int $bytes = 24): string
    {
        return rtrim(strtr(base64_encode(random_bytes($bytes)), '+/', '-_'), '=');
    }

    private function loginKeyId(string $loginKey): string
    {
        return $this->store->fingerprint('login-key', trim($loginKey));
    }
}
