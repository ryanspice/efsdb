<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EFSDB Control Plane</title>
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
    <link rel="stylesheet" href="/css/style.css">
    <script defer src="/js/theme-manager.js"></script>
    <script type="module" src="/js/auth-interceptor.js"></script>
</head>
<body>
    <?php require __DIR__ . '/nav.php'; ?>
    <main class="page-shell py-6 sm:py-8 lg:py-10">
