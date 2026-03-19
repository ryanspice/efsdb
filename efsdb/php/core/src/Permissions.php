<?php
declare(strict_types=1);

require_once __DIR__ . '/User.php';

class Permissions
{
    public const ENT_NATURAL_VIEW = 'NATURAL_VIEW';
    public const ENT_RAW_VIEW = 'RAW_VIEW';
    public const ENT_ADMIN_USERS = 'ADMIN_USERS';
    public const ENT_ADMIN_ROLES = 'ADMIN_ROLES';
    public const ENT_ADMIN_SETTINGS = 'ADMIN_SETTINGS';
    public const ENT_IMPERSONATE = 'IMPERSONATE';

    public function checkEntitlement(User $user, string $entitlement, bool $actual = false): bool
    {
        return $user->hasEntitlement($entitlement, $actual);
    }

    public function canUseNaturalView(User $user): bool
    {
        return !$user->isGuest() && $this->checkEntitlement($user, self::ENT_NATURAL_VIEW);
    }

    public function canUseRawView(User $user): bool
    {
        return !$user->isGuest() && $this->checkEntitlement($user, self::ENT_RAW_VIEW);
    }

    public function canManageUsers(User $user): bool
    {
        return !$user->isGuest() && $this->checkEntitlement($user, self::ENT_ADMIN_USERS, true);
    }

    public function canManageRoles(User $user): bool
    {
        return !$user->isGuest() && $this->checkEntitlement($user, self::ENT_ADMIN_ROLES, true);
    }

    public function canManageSettings(User $user): bool
    {
        return !$user->isGuest() && $this->checkEntitlement($user, self::ENT_ADMIN_SETTINGS, true);
    }

    public function canImpersonate(User $user): bool
    {
        return !$user->isGuest() && $this->checkEntitlement($user, self::ENT_IMPERSONATE, true);
    }
}
