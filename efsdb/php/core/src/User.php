<?php
declare(strict_types=1);

final class User
{
    /**
     * @param string[] $entitlements
     * @param string[] $actualEntitlements
     * @param string[] $availableDisplayModes
     */
    public function __construct(
        public readonly string $id,
        public readonly string $username,
        public readonly string $role,
        public readonly string $actualRole,
        public readonly int $uid,
        public readonly int $gid,
        public readonly array $entitlements = [],
        public readonly array $actualEntitlements = [],
        public readonly array $availableDisplayModes = [],
        public readonly ?string $displayMode = null,
        public readonly bool $operatorOnly = false
    ) {}

    public static function guest(): self
    {
        return new self(
            'guest',
            'Guest',
            'guest',
            'guest',
            65534,
            65534,
            [],
            [],
            ['guest'],
            'guest',
            false
        );
    }

    /**
     * @param array<string,mixed> $payload
     */
    public static function fromPayload(array $payload): self
    {
        return new self(
            (string)($payload['sub'] ?? 'guest'),
            (string)($payload['name'] ?? 'Guest'),
            (string)($payload['role'] ?? 'guest'),
            (string)($payload['actualRole'] ?? ($payload['role'] ?? 'guest')),
            (int)($payload['uid'] ?? 2000),
            (int)($payload['gid'] ?? 2000),
            array_values(array_map('strval', $payload['ent'] ?? [])),
            array_values(array_map('strval', $payload['actualEnt'] ?? ($payload['ent'] ?? []))),
            array_values(array_map('strval', $payload['availableModes'] ?? [$payload['role'] ?? 'guest'])),
            isset($payload['displayMode']) ? (string)$payload['displayMode'] : (string)($payload['role'] ?? 'guest'),
            (bool)($payload['operatorOnly'] ?? false)
        );
    }

    public function isGuest(): bool
    {
        return $this->id === 'guest' || $this->actualRole === 'guest';
    }

    public function hasEntitlement(string $entitlement, bool $actual = false): bool
    {
        if ($this->actualRole === 'operator_root') {
            return true;
        }

        $pool = $actual ? $this->actualEntitlements : $this->entitlements;
        return in_array($entitlement, $pool, true);
    }

    /**
     * @return array<string,mixed>
     */
    public function toApi(): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'role' => $this->role,
            'actualRole' => $this->actualRole,
            'uid' => $this->uid,
            'gid' => $this->gid,
            'displayMode' => $this->displayMode,
            'entitlements' => $this->entitlements,
            'actualEntitlements' => $this->actualEntitlements,
            'availableDisplayModes' => $this->availableDisplayModes,
            'operatorOnly' => $this->operatorOnly,
        ];
    }
}
