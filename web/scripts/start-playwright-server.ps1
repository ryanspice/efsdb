$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$dataDir = $env:EFSDB_DATA_DIR
$port = if ($env:EFSDB_PLAYWRIGHT_PORT) { $env:EFSDB_PLAYWRIGHT_PORT } else { '8791' }
$phpIni = Join-Path $repoRoot 'efsdb\php\core\php.ini'
$publicDir = Join-Path $repoRoot 'efsdb\php\core\public'
$blake3Extension = Join-Path $repoRoot 'efsdb\php\core\ext\php_blake3.dll'
$logsDir = Join-Path $repoRoot '.cache\efsdb\artifacts\logs'
$errorLog = Join-Path $logsDir 'php-error.log'
$phpBin = if (-not [string]::IsNullOrWhiteSpace($env:EFSDB_PHP_BIN)) { $env:EFSDB_PHP_BIN } else { 'php' }
$phpBinDir = Split-Path -Parent $phpBin
$siblingExtDir = Join-Path $phpBinDir 'ext'

if ([string]::IsNullOrWhiteSpace($dataDir)) {
    throw 'EFSDB_DATA_DIR is required for Playwright server startup.'
}

if (Test-Path $dataDir) {
    Remove-Item -Recurse -Force $dataDir
}

New-Item -ItemType Directory -Force -Path $dataDir | Out-Null
New-Item -ItemType Directory -Force -Path $logsDir | Out-Null

if (-not $env:EFSDB_PHP_EXTENSION_DIR -or [string]::IsNullOrWhiteSpace($env:EFSDB_PHP_EXTENSION_DIR)) {
    if (Test-Path $siblingExtDir) {
        $env:EFSDB_PHP_EXTENSION_DIR = $siblingExtDir
    } else {
        try {
        $env:EFSDB_PHP_EXTENSION_DIR = & $phpBin -n -r "echo ini_get('extension_dir');"
        } catch {
            throw 'PHP runtime was not found. Set EFSDB_PHP_BIN to a PHP executable or add it to PATH.'
        }
    }
}

if (-not $env:EFSDB_PHP_BLAKE3_EXTENSION -or [string]::IsNullOrWhiteSpace($env:EFSDB_PHP_BLAKE3_EXTENSION)) {
    $env:EFSDB_PHP_BLAKE3_EXTENSION = $blake3Extension
}

if (-not $env:EFSDB_PHP_ERROR_LOG -or [string]::IsNullOrWhiteSpace($env:EFSDB_PHP_ERROR_LOG)) {
    $env:EFSDB_PHP_ERROR_LOG = $errorLog
}

$env:EFSDB_PHP_BIN = $phpBin

& $phpBin -c $phpIni -d efsdb.process_id=playwright-server -S ("127.0.0.1:" + $port) -t $publicDir
