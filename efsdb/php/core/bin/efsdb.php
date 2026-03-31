<?php
declare(strict_types=1);

require_once __DIR__ . '/../src/App.php';
require_once __DIR__ . '/../src/Config.php';

$cmd = $argv[1] ?? 'help';
$dataDir = Config::getDataDir();
$schemaDir = Config::getSchemaDir();

try {
    $app = new App($dataDir, $schemaDir);
    $identity = $app->getIdentity();
} catch (Throwable $e) {
    fwrite(STDERR, "EFSDB bootstrap failed: {$e->getMessage()}\n");
    exit(1);
}

echo "EFSDB CLI\n";
echo "Env: " . Config::getEnv() . "\n";
echo "Data: $dataDir\n";

switch ($cmd) {
    case 'status':
        echo "Users: " . count($identity->listUsers()) . "\n";
        echo "Roles: " . count($identity->listRoles(true)) . "\n";
        break;

    case 'init':
        $repoRoot = dirname(__DIR__, 4);
        $app->getNodeEnvironmentService()->bootstrapTemplateCache('sveltekit', $repoRoot . '/projects/examples/sveltekit');
        $app->getNodeEnvironmentService()->bootstrapTemplateCache('react', $repoRoot . '/projects/examples/react');
        $app->getNodeEnvironmentService()->bootstrapTemplateCache('angular', $repoRoot . '/projects/examples/angular');
        $app->getNodeEnvironmentService()->bootstrapTemplateCache('svelte', $repoRoot . '/projects/examples/svelte');
        echo "Initialized store and identity defaults, and bootstrapped Node templates.\n";

        $ws = $app->getPublicWorkspace();
        $environments = ['staging', 'production'];

        // Clean up old routes
        foreach ($environments as $env) {
            $ws->tombstoneSiteFile($env, 'routes/protected.php');
            $ws->tombstoneSiteFile($env, 'routes/encrypted.php');
        }

        // Framework templates to build and deploy
        $frameworks = [
            'efsdb_homepage' => $repoRoot . '/projects/efsdb_homepage',
            'react' => $repoRoot . '/projects/examples/react',
            'svelte' => $repoRoot . '/projects/examples/svelte',
            'sveltekit' => $repoRoot . '/projects/examples/sveltekit',
            'angular' => $repoRoot . '/projects/examples/angular'
        ];

        $copyDir = function (string $src, string $dstPath) use (&$copyDir, $ws, &$env) {
            $items = scandir($src);
            if ($items === false) return;
            foreach ($items as $item) {
                if ($item === '.' || $item === '..' || $item === 'node_modules' || $item === 'dist' || $item === '.svelte-kit') continue;

                $itemSrc = "$src/$item";
                $itemDst = "$dstPath/$item";

                if (is_dir($itemSrc)) {
                    $copyDir($itemSrc, $itemDst);
                } else {
                    $bytes = file_get_contents($itemSrc);
                    if ($bytes !== false) {
                        $mime = 'application/octet-stream';
                        if (str_ends_with($item, '.json')) $mime = 'application/json';
                        elseif (str_ends_with($item, '.js') || str_ends_with($item, '.ts') || str_ends_with($item, '.tsx') || str_ends_with($item, '.jsx')) $mime = 'application/javascript';
                        elseif (str_ends_with($item, '.css')) $mime = 'text/css';
                        elseif (str_ends_with($item, '.html')) $mime = 'text/html';
                        elseif (str_ends_with($item, '.md')) $mime = 'text/markdown';
                        elseif (str_ends_with($item, '.svg')) $mime = 'image/svg+xml';
                        elseif (str_ends_with($item, '.php')) $mime = 'application/x-httpd-php';
                        elseif (str_ends_with($item, '.svelte')) $mime = 'text/plain';

                        $wsRelPath = $itemDst;
                        $ws->writeSiteFile($env, $wsRelPath, $bytes, ['mime' => $mime]);
                    }
                }
            }
        };

        foreach ($environments as $env) {
            foreach ($frameworks as $fw => $templateDir) {
                if (!is_dir($templateDir)) {
                    echo "Warning: Directory not found for $fw ($templateDir)\n";
                    continue;
                }
                
                echo "Installing $fw component to $env...\n";
                $targetPath = "components/$fw";
                $copyDir($templateDir, $targetPath);

                // Update package.json name
                $pkgPath = "$targetPath/package.json";
                $pkgBytes = $ws->readSiteFile($env, $pkgPath);
                if ($pkgBytes !== null && isset($pkgBytes['bytes'])) {
                    $pkgJson = json_decode($pkgBytes['bytes'], true);
                    if (is_array($pkgJson)) {
                        $pkgJson['name'] = $fw;
                        $ws->writeSiteFile($env, $pkgPath, json_encode($pkgJson, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), ['mime' => 'application/json']);
                    }
                }

                // Route nomination logic
                $routeName = $fw === 'efsdb_homepage' ? 'index' : $fw;
                $routePath = "routes/$routeName.php";

                // Determine index HTML path based on typical Vite/SvelteKit output
                $htmlPath = "components/$fw/index.html"; // SvelteKit
                if ($fw === 'react' || $fw === 'angular' || $fw === 'svelte') {
                    $htmlPath = "components/$fw/dist/index.html"; // Vite
                }

                // Read package versions for hydration data
                $pkgJsonPath = "$templateDir/package.json";
                $pkgVersions = [];
                if (is_file($pkgJsonPath)) {
                    $pkg = json_decode(file_get_contents($pkgJsonPath), true);
                    if (is_array($pkg)) {
                        $deps = array_merge($pkg['dependencies'] ?? [], $pkg['devDependencies'] ?? []);
                        foreach (['react', 'svelte', '@sveltejs/kit', '@angular/core', 'vite'] as $fwPkg) {
                            if (isset($deps[$fwPkg])) {
                                $key = $fwPkg === '@angular/core' ? 'angular' : $fwPkg;
                                $pkgVersions[$key] = $deps[$fwPkg];
                            }
                        }
                    }
                }
                $pkgVersionsExport = var_export($pkgVersions, true);

                $routeContent = <<<PHP
<?php
// Nominated Route for $fw
\$componentFile = \$efsdbSite->workspacePath('$htmlPath');
if (!is_file(\$componentFile)) {
    // Fallback just in case
    \$componentFile = \$efsdbSite->workspacePath('components/$fw/index.html');
}
if (is_file(\$componentFile)) {
    \$html = file_get_contents(\$componentFile);
    
    \$efsdbData = json_encode([
        'env' => \$efsdbSite->environment(),
        'route' => '$routeName',
        'basePath' => \$efsdbSite->basePath(),
        'timestamp' => time(),
        'frameworkVersions' => $pkgVersionsExport
    ]);
    \$html = str_replace('__EFSDB_BASE_PATH__', \$efsdbSite->basePath(), \$html);
    \$html = str_replace('</head>', "<script>window.__EFSDB__ = " . \$efsdbData . ";</script></head>", \$html);
    return [
        'body' => \$html,
        'contentType' => 'text/html; charset=utf-8'
    ];
}
return null;
PHP;
                $ws->writeSiteFile($env, $routePath, $routeContent, ['mime' => 'application/x-httpd-php']);
            }
            
            echo "Building environment $env components...\n";
            $app->getSiteBuildService()->buildEnvironment($env);
        }

        echo "Updating ghost cache for both environments...\n";
        $app->getGhostPreloadService()->preloadEnvironment('staging');
        $app->getGhostPreloadService()->preloadEnvironment('production');

        break;

    case 'create-user':
        $username = $argv[2] ?? null;
        $roleId = $argv[3] ?? 'member_standard';
        if ($username === null) {
            fwrite(STDERR, "Usage: php efsdb.php create-user <username> [roleId]\n");
            exit(2);
        }
        $result = $identity->createUser(['username' => $username, 'roleId' => $roleId]);
        echo "Created user {$result['user']['username']} ({$result['user']['roleId']})\n";
        echo "Login key: {$result['loginKey']}\n";
        break;

    case 'rotate-user-key':
        $userId = $argv[2] ?? null;
        if ($userId === null) {
            fwrite(STDERR, "Usage: php efsdb.php rotate-user-key <userId>\n");
            exit(2);
        }
        $result = $identity->rotateUserKey($userId);
        echo "Rotated key for {$result['user']['username']}\n";
        echo "Login key: {$result['loginKey']}\n";
        break;

    case 'tenant-admin-key':
        $result = $identity->rotateUserKey('tenant-admin');
        echo "Rotated key for tenant-admin\n";
        echo "Login key: {$result['loginKey']}\n";
        break;

    case 'list-users':
        foreach ($identity->listUsers() as $user) {
            echo "- {$user['id']} {$user['username']} ({$user['roleId']})\n";
        }
        break;

    case 'list-roles':
        foreach ($identity->listRoles(true) as $role) {
            echo "- {$role['id']} {$role['name']}\n";
        }
        break;

    case 'dump-logs':
        echo "Emergency Log Dump:\n";
        $manifests = $app->getStore()->scanAllManifests('system_audit', 100);
        $logs = [];
        foreach ($manifests as $manifest) {
            $doc = $app->getStore()->readDocument('system_audit', (string)$manifest['id']);
            if ($doc !== null) {
                $logs[] = $doc;
            }
        }
        usort($logs, fn($a, $b) => strcmp($a['occurredAt'] ?? '', $b['occurredAt'] ?? ''));
        foreach ($logs as $log) {
            echo "----------------------------------------\n";
            echo "Time: " . ($log['occurredAt'] ?? 'Unknown') . "\n";
            echo "Type: " . ($log['type'] ?? 'Unknown') . "\n";
            echo "Payload: " . json_encode($log['payload'] ?? []) . "\n";
        }
        echo "----------------------------------------\n";
        echo "Total logs: " . count($logs) . "\n";
        break;

    case 'help':
    default:
        echo "Usage: php efsdb.php [status|init|create-user|rotate-user-key|tenant-admin-key|list-users|list-roles|dump-logs]\n";
        break;
}
