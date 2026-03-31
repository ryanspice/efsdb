<?php
declare(strict_types=1);

require_once __DIR__ . '/User.php';

class Permissions
{
    public const ENT_NATURAL_VIEW = 'NATURAL_VIEW';
    public const ENT_RAW_VIEW = 'RAW_VIEW';
    public const ENT_SITE_EDIT = 'SITE_EDIT';
    public const ENT_SYSTEM_USERS_VIEW = 'SYSTEM_USERS_VIEW';
    public const ENT_SYSTEM_USERS_EDIT = 'SYSTEM_USERS_EDIT';
    public const ENT_SYSTEM_ROLES_VIEW = 'SYSTEM_ROLES_VIEW';
    public const ENT_SYSTEM_ROLES_EDIT = 'SYSTEM_ROLES_EDIT';
    public const ENT_SYSTEM_SETTINGS_VIEW = 'SYSTEM_SETTINGS_VIEW';
    public const ENT_SYSTEM_SETTINGS_EDIT = 'SYSTEM_SETTINGS_EDIT';
    public const ENT_ENVIRONMENT_VIEW = 'ENVIRONMENT_VIEW';
    public const ENT_ENVIRONMENT_CHANGE = 'ENVIRONMENT_CHANGE';
    public const ENT_PLATFORM_ACTIONS = 'PLATFORM_ACTIONS';
    public const ENT_ADMIN_USERS = 'ADMIN_USERS';
    public const ENT_ADMIN_ROLES = 'ADMIN_ROLES';
    public const ENT_ADMIN_SETTINGS = 'ADMIN_SETTINGS';
    public const ENT_IMPERSONATE = 'IMPERSONATE';

    public function checkEntitlement(User $user, string $entitlement, bool $actual = false): bool
    {
        return $user->hasEntitlement($entitlement, $actual);
    }

    /**
     * @param string[] $entitlements
     */
    public function checkAnyEntitlement(User $user, array $entitlements, bool $actual = false): bool
    {
        foreach ($entitlements as $entitlement) {
            if ($this->checkEntitlement($user, $entitlement, $actual)) {
                return true;
            }
        }

        return false;
    }

    public function canUseNaturalView(User $user): bool
    {
        return !$user->isGuest() && $this->checkEntitlement($user, self::ENT_NATURAL_VIEW);
    }

    public function canUseRawView(User $user): bool
    {
        return !$user->isGuest() && $this->checkEntitlement($user, self::ENT_RAW_VIEW);
    }

    public function canViewSiteWorkspace(User $user): bool
    {
        return $this->canUseNaturalView($user);
    }

    public function canEditSiteFiles(User $user): bool
    {
        return !$user->isGuest()
            && $this->canUseNaturalView($user)
            && (
                $this->checkEntitlement($user, self::ENT_SITE_EDIT)
                || $this->checkEntitlement($user, self::ENT_ADMIN_SETTINGS, true)
            );
    }

    public function canViewUsers(User $user): bool
    {
        return !$user->isGuest()
            && $this->canUseNaturalView($user)
            && (
                $this->checkEntitlement($user, self::ENT_SYSTEM_USERS_VIEW)
                || $this->canManageUsers($user)
            );
    }

    public function canManageUsers(User $user): bool
    {
        return !$user->isGuest()
            && $this->checkAnyEntitlement($user, [self::ENT_SYSTEM_USERS_EDIT, self::ENT_ADMIN_USERS], true);
    }

    public function canViewRoles(User $user): bool
    {
        return !$user->isGuest()
            && $this->canUseNaturalView($user)
            && (
                $this->checkEntitlement($user, self::ENT_SYSTEM_ROLES_VIEW)
                || $this->canManageRoles($user)
            );
    }

    public function canManageRoles(User $user): bool
    {
        return !$user->isGuest()
            && $this->checkAnyEntitlement($user, [self::ENT_SYSTEM_ROLES_EDIT, self::ENT_ADMIN_ROLES], true);
    }

    public function canViewSettings(User $user): bool
    {
        return !$user->isGuest()
            && $this->canUseNaturalView($user)
            && (
                $this->checkEntitlement($user, self::ENT_SYSTEM_SETTINGS_VIEW)
                || $this->canManageSettings($user)
            );
    }

    public function canManageSettings(User $user): bool
    {
        return !$user->isGuest()
            && $this->checkAnyEntitlement($user, [self::ENT_SYSTEM_SETTINGS_EDIT, self::ENT_ADMIN_SETTINGS], true);
    }

    public function canViewEnvironmentHistory(User $user): bool
    {
        return !$user->isGuest()
            && $this->checkAnyEntitlement($user, [
                self::ENT_ENVIRONMENT_VIEW,
                self::ENT_ENVIRONMENT_CHANGE,
                self::ENT_PLATFORM_ACTIONS,
                self::ENT_ADMIN_SETTINGS,
            ], true);
    }

    public function canChangeEnvironment(User $user): bool
    {
        return !$user->isGuest()
            && $this->checkAnyEntitlement($user, [
                self::ENT_ENVIRONMENT_CHANGE,
                self::ENT_PLATFORM_ACTIONS,
            ], true);
    }

    public function canManageEnvironmentActions(User $user): bool
    {
        return $this->canChangeEnvironment($user);
    }

    public function canImpersonate(User $user): bool
    {
        return !$user->isGuest() && $this->checkEntitlement($user, self::ENT_IMPERSONATE, true);
    }

    public function canInspectSystemStorage(User $user): bool
    {
        return !$user->isGuest()
            && $this->canUseRawView($user)
            && (
                $this->canManageUsers($user)
                || $this->canManageRoles($user)
                || $this->canManageSettings($user)
            );
    }

    public function canEditNaturalPath(User $user, string $logicalPath): bool
    {
        if ($user->isGuest()) {
            return false;
        }

        $logicalPath = trim(str_replace('\\', '/', $logicalPath), '/');
        if ($logicalPath === '') {
            return false;
        }

        return match (true) {
            $logicalPath === 'site' || str_starts_with($logicalPath, 'site/') => $this->canEditSiteFiles($user),
            $logicalPath === 'projects' || str_starts_with($logicalPath, 'projects/') => $this->canEditSiteFiles($user),
            $logicalPath === 'system/users' || str_starts_with($logicalPath, 'system/users/') => $this->canManageUsers($user),
            $logicalPath === 'system/roles' || str_starts_with($logicalPath, 'system/roles/') => $this->canManageRoles($user),
            $logicalPath === 'system/settings' || str_starts_with($logicalPath, 'system/settings/') => $this->canManageSettings($user),
            default => false,
        };
    }

    public function canEditNaturalFiles(User $user): bool
    {
        return $this->canEditSiteFiles($user);
    }
}
