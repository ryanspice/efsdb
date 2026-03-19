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
        echo "Initialized store and identity defaults.\n";
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

    case 'help':
    default:
        echo "Usage: php efsdb.php [status|init|create-user|rotate-user-key|tenant-admin-key|list-users|list-roles]\n";
        break;
}
