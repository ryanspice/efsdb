<?php
declare(strict_types=1);

/** Public delivery is an explicit subset of the editable site workspace. */
final class PublicAssetPolicy
{
    private const EXTENSIONS = [
        'css', 'js', 'mjs', 'gif', 'htm', 'html', 'ico', 'jpg', 'jpeg', 'png',
        'svg', 'webp', 'avif', 'woff', 'woff2', 'ttf', 'otf', 'eot', 'json',
        'webmanifest', 'txt', 'xml', 'wasm', 'bin', 'pdf', 'mp3', 'mp4', 'webm',
    ];

    public static function isPrivatePath(string $path): bool
    {
        $path = trim(str_replace('\\', '/', $path), '/');
        // The router has already URL-decoded once. Do not let storage's path
        // normalization interpret a second encoded dot, separator or extension.
        if (preg_match('/%[a-f0-9]{2}/i', $path)) {
            return true;
        }
        if (pathinfo($path, PATHINFO_EXTENSION) !== ''
            && preg_match('#^(?:routes|layouts|content|meta|src|server|node_modules|vendor)(?:/|$)#i', $path)) {
            return true;
        }
        foreach (explode('/', $path) as $segment) {
            $segment = strtolower($segment);
            if ($segment === '' || str_starts_with($segment, '.')
                || preg_match('/[<>:"|?*\x00-\x1f]/', $segment)
                || preg_match('/[. ]$/', $segment)
                || preg_match('/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i', $segment)) {
                return true;
            }
            if (preg_match('/^(?:package(?:-lock)?\.json|composer\.(?:json|lock)|bun\.lockb?|pnpm-lock\.yaml|yarn\.lock|(?:ts|js)config(?:\.[^.]+)?\.json)$/', $segment)) {
                return true;
            }
        }

        return (bool)preg_match('/\.(?:php[0-9]*|phtml|phar|svelte|vue|tsx?|jsx|map|md|ya?ml|ini|env|log|sql|sh|ps1|lock)(?:\.|$)/i', basename($path));
    }

    public static function isPublicAsset(string $path): bool
    {
        $path = trim(str_replace('\\', '/', $path), '/');
        if (self::isPrivatePath($path) || !in_array(strtolower(pathinfo($path, PATHINFO_EXTENSION)), self::EXTENSIONS, true)) {
            return false;
        }

        if (preg_match('#^(?:routes|layouts|content|meta)(?:/|$)#i', $path)) {
            return false;
        }
        if (str_starts_with(strtolower($path), 'components/')) {
            return (bool)preg_match('#^components/[^/]+/(?:dist|public)/.+#i', $path);
        }

        // Unprefixed assets may resolve through assets/; JSON is only public in
        // an explicit asset namespace (apart from the web app manifest).
        if (strtolower(pathinfo($path, PATHINFO_EXTENSION)) === 'json') {
            return in_array(strtolower($path), ['manifest.json'], true)
                || (bool)preg_match('#^(?:assets|_app|app|immutable)/#i', $path);
        }

        return true;
    }

    public static function mimeType(string $path): string
    {
        return match (strtolower(pathinfo($path, PATHINFO_EXTENSION))) {
            'css' => 'text/css; charset=utf-8',
            'js', 'mjs' => 'application/javascript; charset=utf-8',
            'json' => 'application/json; charset=utf-8',
            'html', 'htm' => 'text/html; charset=utf-8',
            'svg' => 'image/svg+xml', 'png' => 'image/png',
            'jpg', 'jpeg' => 'image/jpeg', 'gif' => 'image/gif',
            'ico' => 'image/x-icon', 'webp' => 'image/webp', 'avif' => 'image/avif',
            'woff' => 'font/woff', 'woff2' => 'font/woff2',
            'txt' => 'text/plain; charset=utf-8', 'xml' => 'application/xml; charset=utf-8',
            'wasm' => 'application/wasm', 'webmanifest' => 'application/manifest+json',
            'pdf' => 'application/pdf',
            default => 'application/octet-stream',
        };
    }
}
