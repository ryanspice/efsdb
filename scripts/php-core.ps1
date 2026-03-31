param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$PhpArgs
)

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$phpIni = Join-Path $repoRoot 'efsdb\php\core\php.ini'

if (-not (Test-Path $phpIni)) {
    Write-Error "EFSDB core php.ini was not found at $phpIni"
    exit 1
}

if (-not $PhpArgs -or $PhpArgs.Count -eq 0) {
    Write-Host 'Usage: .\scripts\php-core.ps1 <php args...>'
    Write-Host 'Example: .\scripts\php-core.ps1 .\efsdb\php\core\bin\apicheck.php'
    Write-Host 'Example: .\scripts\php-core.ps1 -l .\efsdb\php\core\src\Explorer.php'
    exit 1
}

& php -c $phpIni @PhpArgs
exit $LASTEXITCODE
