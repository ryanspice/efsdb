[CmdletBinding()]
param(
    [Parameter(Mandatory)][string]$PhpBinary,
    [Parameter(Mandatory)][string]$PhpDevelopmentPack,
    [string]$OutputDirectory,
    [string]$VisualStudioInstallation
)

$ErrorActionPreference = 'Stop'
$repoRoot = [IO.Path]::GetFullPath((Split-Path -Parent $PSScriptRoot))
$PhpBinary = (Resolve-Path -LiteralPath $PhpBinary).Path
$PhpDevelopmentPack = (Resolve-Path -LiteralPath $PhpDevelopmentPack).Path
$evidenceRoot = Join-Path $repoRoot '.ai\evidence'
if ([string]::IsNullOrWhiteSpace($OutputDirectory)) {
    $OutputDirectory = Join-Path $evidenceRoot ('blake3-windows-' + [Guid]::NewGuid().ToString('N').Substring(0, 12))
}
$OutputDirectory = [IO.Path]::GetFullPath($OutputDirectory)
if (-not $OutputDirectory.StartsWith($evidenceRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
    throw 'OutputDirectory must be a new directory under this checkout .ai/evidence.'
}
if (Test-Path -LiteralPath $OutputDirectory) {
    throw 'Refusing to overwrite an existing build directory.'
}

$versionHeader = Join-Path $PhpDevelopmentPack 'include\main\php_version.h'
$hashHeader = Join-Path $PhpDevelopmentPack 'include\ext\hash\php_hash.h'
$importLibrary = Join-Path $PhpDevelopmentPack 'lib\php8.lib'
foreach ($required in @($versionHeader, $hashHeader, $importLibrary)) {
    if (-not (Test-Path -LiteralPath $required -PathType Leaf)) { throw "Missing SDK input: $required" }
}
$headerText = Get-Content -LiteralPath $versionHeader -Raw
if ($headerText -notmatch '#define PHP_VERSION "([^"]+)"') { throw 'Cannot identify SDK PHP_VERSION.' }
$headerVersion = $Matches[1]
$runtimeJson = & $PhpBinary -n -r 'echo json_encode(["version" => PHP_VERSION, "zts" => PHP_ZTS, "bits" => PHP_INT_SIZE * 8]);'
if ($LASTEXITCODE -ne 0) { throw 'Cannot inspect the PHP runtime.' }
$runtime = $runtimeJson | ConvertFrom-Json
if ($runtime.version -ne $headerVersion) { throw "SDK $headerVersion does not match PHP $($runtime.version)." }
if ($runtime.zts -or $runtime.bits -ne 64) { throw 'This helper builds only Windows x64 NTS modules.' }
& $PhpBinary -n (Join-Path $repoRoot 'scripts\check-php-runtime.php')
if ($LASTEXITCODE -ne 0) { throw 'The PHP runtime failed its security floor.' }

if ([string]::IsNullOrWhiteSpace($VisualStudioInstallation)) {
    $vswhere = Join-Path ([Environment]::GetFolderPath('ProgramFilesX86')) 'Microsoft Visual Studio\Installer\vswhere.exe'
    if (-not (Test-Path -LiteralPath $vswhere)) { throw 'Visual Studio vswhere was not found.' }
    $VisualStudioInstallation = & $vswhere -latest -products '*' -requires Microsoft.VisualStudio.Component.VC.Tools.x86.x64 -property installationPath
    if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($VisualStudioInstallation)) { throw 'MSVC x64 tools were not found.' }
}
$vcvars = Join-Path $VisualStudioInstallation 'VC\Auxiliary\Build\vcvars64.bat'
if (-not (Test-Path -LiteralPath $vcvars)) { throw 'vcvars64.bat was not found.' }
# These paths enter a CMD script/response file; reject CMD expansion characters.
foreach ($value in @($repoRoot, $PhpBinary, $PhpDevelopmentPack, $OutputDirectory, $vcvars)) {
    if ($value -match '["%!\r\n]') { throw 'Build paths cannot contain CMD expansion or quoting characters.' }
}

# Check every existing ancestor before creating project-local compiler output.
$ancestor = Split-Path -Parent $OutputDirectory
while ($ancestor -and $ancestor -ne $repoRoot) {
    if (Test-Path -LiteralPath $ancestor) {
        $item = Get-Item -LiteralPath $ancestor
        if (($item.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0) {
            throw 'Build output cannot traverse a reparse point.'
        }
    }
    $ancestor = Split-Path -Parent $ancestor
}
New-Item -ItemType Directory -Path $OutputDirectory | Out-Null
$tempDirectory = Join-Path $OutputDirectory 'tmp'
New-Item -ItemType Directory -Path $tempDirectory | Out-Null
$sourceRoot = Join-Path $repoRoot 'efsdb\php\core\ext\blake3-src'
$sources = @('php_blake3.c', 'blake3.c', 'blake3_dispatch.c', 'blake3_portable.c')
$headers = @('php_blake3.h', 'blake3.h', 'blake3_impl.h')
foreach ($name in ($sources + $headers)) {
    Copy-Item -LiteralPath (Join-Path $sourceRoot $name) -Destination (Join-Path $OutputDirectory $name)
}
$dll = Join-Path $OutputDirectory 'php_blake3.dll'
$responseFile = Join-Path $OutputDirectory 'compile.rsp'
$arguments = @(
    '/nologo', '/LD', '/O2', '/MD', '/GS', '/guard:cf', '/Zc:preprocessor',
    '/D_WINDOWS', '/DWINDOWS=1', '/DWIN32', '/DZEND_WIN32=1', '/DPHP_WIN32=1',
    '/D_MBCS', '/DNDEBUG', '/DZEND_DEBUG=0', '/DZEND_COMPILE_DL_EXT=1',
    '/DCOMPILE_DL_BLAKE3', '/DBLAKE3_EXPORTS=1', '/DZEND_ENABLE_STATIC_TSRMLS_CACHE=1',
    '/DBLAKE3_NO_SSE2', '/DBLAKE3_NO_SSE41', '/DBLAKE3_NO_AVX2', '/DBLAKE3_NO_AVX512'
)
foreach ($include in @('include', 'include\main', 'include\Zend', 'include\TSRM', 'include\ext')) {
    $arguments += '/I"' + (Join-Path $PhpDevelopmentPack $include) + '"'
}
$arguments += $sources
$arguments += @('/link', '/DLL', '/GUARD:CF', ('/OUT:"' + $dll + '"'), ('"' + $importLibrary + '"'))
[IO.File]::WriteAllText($responseFile, ($arguments -join ' ') + [Environment]::NewLine, [Text.UTF8Encoding]::new($false))
$commandFile = Join-Path $OutputDirectory 'compile.cmd'
$installerDirectory = Join-Path ([Environment]::GetFolderPath('ProgramFilesX86')) 'Microsoft Visual Studio\Installer'
$commandLines = @(
    '@echo off', ('set "PATH=' + $installerDirectory + ';%PATH%"'), ('call "' + $vcvars + '"'),
    'if errorlevel 1 exit /b %errorlevel%',
    'cl.exe /Bv @compile.rsp',
    'exit /b %errorlevel%'
)
[IO.File]::WriteAllLines($commandFile, $commandLines, [Text.UTF8Encoding]::new($false))

$savedTemp = $env:TEMP
$savedTmp = $env:TMP
Push-Location $OutputDirectory
try {
    $env:TEMP = $tempDirectory
    $env:TMP = $tempDirectory
    & $env:ComSpec /d /c ('call "' + $commandFile + '"') 2>&1 | Tee-Object -FilePath (Join-Path $OutputDirectory 'build.log')
    if ($LASTEXITCODE -ne 0 -or -not (Test-Path -LiteralPath $dll)) { throw 'BLAKE3 compilation failed.' }
    & $PhpBinary -n -d "extension=$dll" -d memory_limit=64M (Join-Path $repoRoot 'scripts\ci-check-blake3.php') 2>&1 |
        Tee-Object -FilePath (Join-Path $OutputDirectory 'hash-smoke.log')
    if ($LASTEXITCODE -ne 0) { throw 'BLAKE3 native/hash API smoke failed.' }
} finally {
    $env:TEMP = $savedTemp
    $env:TMP = $savedTmp
    Pop-Location
}

$sourceHashes = foreach ($name in ($sources + $headers)) {
    [pscustomobject]@{ Path = $name; Sha256 = (Get-FileHash -LiteralPath (Join-Path $OutputDirectory $name) -Algorithm SHA256).Hash }
}
$receipt = [ordered]@{
    Passed = $true
    PhpVersion = $runtime.version
    PhpBinary = $PhpBinary
    PhpBinarySha256 = (Get-FileHash -LiteralPath $PhpBinary -Algorithm SHA256).Hash
    DevelopmentPack = $PhpDevelopmentPack
    HashHeaderSha256 = (Get-FileHash -LiteralPath $hashHeader -Algorithm SHA256).Hash
    ImportLibrarySha256 = (Get-FileHash -LiteralPath $importLibrary -Algorithm SHA256).Hash
    CandidateDll = $dll
    CandidateDllSha256 = (Get-FileHash -LiteralPath $dll -Algorithm SHA256).Hash
    SourceHashes = $sourceHashes
    InstalledDllReplaced = $false
}
$receipt | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $OutputDirectory 'receipt.json') -Encoding utf8
Write-Output ("Candidate DLL: " + $dll)
Write-Output ("SHA256: " + $receipt.CandidateDllSha256)
