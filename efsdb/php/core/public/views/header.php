<?php
$pageTitle = isset($pageTitle) && is_string($pageTitle) && $pageTitle !== ''
    ? $pageTitle
    : 'EFSDB Control Plane';
$tenantSettings = $app->getIdentity()->getTenantSettings();
$accent = $tenantSettings['settings']['accent'] ?? '#c6ff00';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></title>
    <script>
        (function () {
            var theme = 'dark';
            try {
                var stored = localStorage.getItem('efsdb-theme');
                if (stored === 'light' || stored === 'dark') {
                    theme = stored;
                }
            } catch (error) {
            }
            document.documentElement.dataset.theme = theme;
            document.documentElement.style.colorScheme = theme;
        })();
    </script>
    <style>:root{--accent: <?php echo htmlspecialchars((string)$accent, ENT_QUOTES, 'UTF-8'); ?>;}</style>
    <link rel="stylesheet" href="/css/style.css">
    <script defer src="/js/theme-manager.js"></script>
    <script type="module" src="/js/auth-interceptor.js"></script>
</head>
<body>
    <?php require __DIR__ . '/nav.php'; ?>
    <main class="page-shell py-6 sm:py-8 lg:py-10">
