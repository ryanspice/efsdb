$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$dataDir = $env:EFSDB_DATA_DIR
$port = if ($env:EFSDB_PLAYWRIGHT_PORT) { $env:EFSDB_PLAYWRIGHT_PORT } else { '8791' }
$phpIni = Join-Path $repoRoot 'efsdb\php\core\php.ini'
$publicDir = Join-Path $repoRoot 'efsdb\php\core\public'

if ([string]::IsNullOrWhiteSpace($dataDir)) {
    throw 'EFSDB_DATA_DIR is required for Playwright server startup.'
}

if (Test-Path $dataDir) {
    Remove-Item -Recurse -Force $dataDir
}

New-Item -ItemType Directory -Force -Path $dataDir | Out-Null

php -c $phpIni -S ("127.0.0.1:" + $port) -t $publicDir
