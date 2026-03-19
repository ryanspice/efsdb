<?php
declare(strict_types=1);

require_once __DIR__ . '/App.php';
require_once __DIR__ . '/AuthKey.php';
require_once __DIR__ . '/Config.php';
require_once __DIR__ . '/User.php';

class Auth
{
    private ?User $currentUser = null;
    private string $authKeyB64;

    private const COOKIE_REFRESH_TOKEN = 'efsdb_refresh_token';
    private const ACCESS_TOKEN_TTL = 900;
    private const REFRESH_TOKEN_TTL = 86400 * 30;
    private const EXPLORER_TICKET_TTL = 120;

    public function __construct(private readonly App $app)
    {
        $this->authKeyB64 = AuthKey::get(Config::getDataDir());
    }

    public function authenticate(bool $bearerOnly = false): User
    {
        if ($this->currentUser !== null) {
            return $this->currentUser;
        }

        $headers = function_exists('getallheaders') ? getallheaders() : [];
        $authHeader = $headers['Authorization'] ?? $_SERVER['HTTP_AUTHORIZATION'] ?? '';

        if (is_string($authHeader) && str_starts_with($authHeader, 'Bearer ')) {
            $payload = $this->verifyAccessToken(substr($authHeader, 7));
            if ($payload !== null) {
                return $this->currentUser = User::fromPayload($payload);
            }
        }

        if (!$bearerOnly && isset($_COOKIE[self::COOKIE_REFRESH_TOKEN])) {
            $session = $this->app->getIdentity()->findRefreshSession((string)$_COOKIE[self::COOKIE_REFRESH_TOKEN]);
            if ($session !== null) {
                $user = $this->app->getIdentity()->getUserById(
                    (string)$session['userId'],
                    (string)($session['effectiveRoleId'] ?? $session['actualRoleId'])
                );
                if ($user !== null) {
                    return $this->currentUser = $user;
                }
            }
        }

        return $this->currentUser = User::guest();
    }

    /**
     * @return array<string,mixed>|null
     */
    public function login(string $key): ?array
    {
        $user = $this->app->getIdentity()->authenticateKey($key);
        if ($user === null) {
            return null;
        }

        return $this->issueTokens($user);
    }

    /**
     * @return array<string,mixed>|null
     */
    public function refresh(): ?array
    {
        $refreshToken = $_COOKIE[self::COOKIE_REFRESH_TOKEN] ?? null;
        if (!is_string($refreshToken) || $refreshToken === '') {
            return null;
        }

        $next = $this->app->getIdentity()->rotateRefreshSession($refreshToken);
        if ($next === null) {
            return null;
        }

        $user = $this->app->getIdentity()->getUserById(
            (string)$next['session']['userId'],
            (string)$next['session']['effectiveRoleId']
        );
        if ($user === null) {
            return null;
        }

        return $this->issueTokens($user, $next['token']);
    }

    public function logout(): void
    {
        $refreshToken = $_COOKIE[self::COOKIE_REFRESH_TOKEN] ?? null;
        if (is_string($refreshToken) && $refreshToken !== '') {
            $this->app->getIdentity()->revokeRefreshSession($refreshToken);
        }

        $this->clearRefreshCookie();
        $this->currentUser = User::guest();
    }

    /**
     * @return array{ticket: string, expiresIn: int, url: string}
     */
    public function issueExplorerTicket(User $user, string $path, string $mode): array
    {
        $path = $this->normalizeExplorerPath($path);
        $mode = $mode === 'raw' ? 'raw' : 'natural';
        $now = time();
        $ticket = $this->signJwt([
            'sub' => $user->id,
            'role' => $user->role,
            'actualRole' => $user->actualRole,
            'path' => $path,
            'mode' => $mode,
            'iat' => $now,
            'exp' => $now + self::EXPLORER_TICKET_TTL,
            'type' => 'explorer_download',
        ]);

        return [
            'ticket' => $ticket,
            'expiresIn' => self::EXPLORER_TICKET_TTL,
            'url' => '/api/explorer/download?path=' . rawurlencode($path) . '&mode=' . rawurlencode($mode) . '&ticket=' . rawurlencode($ticket),
        ];
    }

    public function authenticateExplorerTicket(string $ticket, string $path, string $mode): ?User
    {
        $payload = $this->verifyJwt($ticket, 'explorer_download');
        if ($payload === null) {
            return null;
        }

        if (($payload['path'] ?? '') !== $this->normalizeExplorerPath($path)) {
            return null;
        }

        if (($payload['mode'] ?? '') !== ($mode === 'raw' ? 'raw' : 'natural')) {
            return null;
        }

        return $this->app->getIdentity()->getUserById(
            (string)($payload['sub'] ?? ''),
            (string)($payload['role'] ?? $payload['actualRole'] ?? 'guest')
        );
    }

    /**
     * @return array<string,mixed>
     */
    public function changeDisplayMode(User $actor, string $roleId): array
    {
        if (!$this->app->getIdentity()->canAccessRole($actor, $roleId)) {
            throw new RuntimeException('Display mode not allowed');
        }

        $effectiveUser = $this->app->getIdentity()->getUserById($actor->id, $roleId);
        if ($effectiveUser === null) {
            throw new RuntimeException('Unable to switch display mode');
        }

        $this->logout();
        return $this->issueTokens($effectiveUser);
    }

    /**
     * @return array<string,mixed>
     */
    private function issueTokens(User $user, ?string $refreshToken = null): array
    {
        $now = time();
        $payload = [
            'sub' => $user->id,
            'name' => $user->username,
            'role' => $user->role,
            'actualRole' => $user->actualRole,
            'uid' => $user->uid,
            'gid' => $user->gid,
            'ent' => $user->entitlements,
            'actualEnt' => $user->actualEntitlements,
            'availableModes' => $user->availableDisplayModes,
            'displayMode' => $user->displayMode,
            'operatorOnly' => $user->operatorOnly,
            'iat' => $now,
            'exp' => $now + self::ACCESS_TOKEN_TTL,
            'type' => 'access',
        ];

        $accessToken = $this->signJwt($payload);
        $refreshToken ??= $this->app->getIdentity()->createRefreshSession($user)['token'];

        $secure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        setcookie(self::COOKIE_REFRESH_TOKEN, $refreshToken, [
            'expires' => $now + self::REFRESH_TOKEN_TTL,
            'path' => '/',
            'domain' => '',
            'secure' => $secure,
            'httponly' => true,
            'samesite' => 'Strict',
        ]);

        return [
            'accessToken' => $accessToken,
            'expiresIn' => self::ACCESS_TOKEN_TTL,
            'user' => $user->toApi(),
        ];
    }

    private function clearRefreshCookie(): void
    {
        $secure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        setcookie(self::COOKIE_REFRESH_TOKEN, '', [
            'expires' => time() - 3600,
            'path' => '/',
            'domain' => '',
            'secure' => $secure,
            'httponly' => true,
            'samesite' => 'Strict',
        ]);
    }

    private function signJwt(array $payload): string
    {
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256'], JSON_THROW_ON_ERROR);
        $payloadJson = json_encode($payload, JSON_THROW_ON_ERROR);

        $base64UrlHeader = rtrim(strtr(base64_encode($header), '+/', '-_'), '=');
        $base64UrlPayload = rtrim(strtr(base64_encode($payloadJson), '+/', '-_'), '=');
        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $this->authKeyB64, true);
        $base64UrlSignature = rtrim(strtr(base64_encode($signature), '+/', '-_'), '=');

        return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function verifyAccessToken(string $token): ?array
    {
        return $this->verifyJwt($token, 'access');
    }

    /**
     * @return array<string,mixed>|null
     */
    private function verifyJwt(string $token, string $expectedType): ?array
    {
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return null;
        }

        [$header, $payload, $signature] = $parts;
        $validSignature = hash_hmac('sha256', $header . "." . $payload, $this->authKeyB64, true);
        $base64UrlSignature = rtrim(strtr(base64_encode($validSignature), '+/', '-_'), '=');

        if (!hash_equals($base64UrlSignature, $signature)) {
            return null;
        }

        $json = base64_decode(strtr($payload, '-_', '+/'), true);
        if ($json === false) {
            return null;
        }

        $data = json_decode($json, true);
        if (!is_array($data)) {
            return null;
        }

        if (($data['exp'] ?? 0) < time()) {
            return null;
        }

        if (($data['type'] ?? '') !== $expectedType) {
            return null;
        }

        return $data;
    }

    private function normalizeExplorerPath(string $path): string
    {
        $path = trim(str_replace('\\', '/', $path));
        $path = preg_replace('#/+#', '/', $path) ?? $path;
        return trim($path, '/');
    }
}
