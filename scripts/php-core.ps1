param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$PhpArgs
)

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$phpIni = Join-Path $repoRoot 'efsdb\php\core\php.ini'
$blake3Extension = Join-Path $repoRoot 'efsdb\php\core\ext\php_blake3.dll'
$logsDir = Join-Path $repoRoot '.cache\efsdb\artifacts\logs'
$errorLog = Join-Path $logsDir 'php-error.log'
$phpBin = if (-not [string]::IsNullOrWhiteSpace($env:EFSDB_PHP_BIN)) { $env:EFSDB_PHP_BIN } else { 'php' }
$phpBinDir = Split-Path -Parent $phpBin
$siblingExtDir = Join-Path $phpBinDir 'ext'

if (-not (Test-Path $phpIni)) {
    Write-Error "EFSDB core php.ini was not found at $phpIni"
    exit 1
}

if (-not $env:EFSDB_PHP_EXTENSION_DIR -or [string]::IsNullOrWhiteSpace($env:EFSDB_PHP_EXTENSION_DIR)) {
    if (Test-Path $siblingExtDir) {
        $env:EFSDB_PHP_EXTENSION_DIR = $siblingExtDir
    } else {
        try {
        $env:EFSDB_PHP_EXTENSION_DIR = & $phpBin -n -r "echo ini_get('extension_dir');"
        } catch {
            Write-Error 'PHP runtime was not found. Set EFSDB_PHP_BIN to a PHP executable or add it to PATH.'
            exit 1
        }
    }
}

if (-not $env:EFSDB_PHP_BLAKE3_EXTENSION -or [string]::IsNullOrWhiteSpace($env:EFSDB_PHP_BLAKE3_EXTENSION)) {
    $env:EFSDB_PHP_BLAKE3_EXTENSION = $blake3Extension
}

if (-not (Test-Path $logsDir)) {
    New-Item -ItemType Directory -Force -Path $logsDir | Out-Null
}

if (-not $env:EFSDB_PHP_ERROR_LOG -or [string]::IsNullOrWhiteSpace($env:EFSDB_PHP_ERROR_LOG)) {
    $env:EFSDB_PHP_ERROR_LOG = $errorLog
}

$env:EFSDB_PHP_BIN = $phpBin

if (-not $PhpArgs -or $PhpArgs.Count -eq 0) {
    Write-Host 'Usage: .\scripts\php-core.ps1 <php args...>'
    Write-Host 'Example: .\scripts\php-core.ps1 .\efsdb\php\core\bin\apicheck.php'
    Write-Host 'Example: .\scripts\php-core.ps1 -l .\efsdb\php\core\src\Explorer.php'
    exit 1
}

& $phpBin -c $phpIni @PhpArgs
exit $LASTEXITCODE
