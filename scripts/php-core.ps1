param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$PhpArgs
)

if (-not $PhpArgs -or $PhpArgs.Count -eq 0) {
    Write-Host 'Usage: .\scripts\php-core.ps1 <php args...>'
    Write-Host 'Example: .\scripts\php-core.ps1 .\efsdb\php\core\bin\apicheck.php'
    Write-Host 'Example: .\scripts\php-core.ps1 -l .\efsdb\php\core\src\Explorer.php'
    exit 1
}

# Keep runtime probing, module loading and descendant configuration in one launcher.
$launcher = Join-Path $PSScriptRoot 'php-core.ts'
$bun = (Get-Command bun -ErrorAction Stop).Source
& $bun run $launcher -- @PhpArgs
exit $LASTEXITCODE
