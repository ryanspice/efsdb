param(
    [string]$Base = "http://127.0.0.1:8787/api",
    [string]$TenantAdminKey = $env:EFSDB_BOOTSTRAP_SECRET
)

if ([string]::IsNullOrWhiteSpace($TenantAdminKey)) {
    $TenantAdminKey = Read-Host "Enter the tenant-admin login key"
}

if ([string]::IsNullOrWhiteSpace($TenantAdminKey)) {
    throw "A tenant-admin login key is required."
}

function Write-Pass([string]$Message) {
    Write-Host $Message -ForegroundColor Green
}

function Write-Fail([string]$Message) {
    Write-Host $Message -ForegroundColor Red
}

function Invoke-JsonRequest {
    param(
        [Parameter(Mandatory = $true)][string]$Uri,
        [Parameter(Mandatory = $true)][ValidateSet('GET', 'POST')][string]$Method,
        [hashtable]$Headers,
        [object]$Body,
        [Microsoft.PowerShell.Commands.WebRequestSession]$Session
    )

    $params = @{
        Uri         = $Uri
        Method      = $Method
        ErrorAction = 'Stop'
    }

    if ($null -ne $Headers) {
        $params.Headers = $Headers
    }

    if ($null -ne $Session) {
        $params.WebSession = $Session
    }

    if ($null -ne $Body) {
        $params.Body = ($Body | ConvertTo-Json -Depth 8)
        $params.ContentType = 'application/json'
    }

    $response = Invoke-WebRequest @params
    $json = if ([string]::IsNullOrWhiteSpace($response.Content)) {
        $null
    } else {
        $response.Content | ConvertFrom-Json
    }

    return @{
        Response = $response
        Json = $json
    }
}

Write-Host "Running EFSDB smoke test against $Base" -ForegroundColor Cyan

Write-Host "`n[1] Tenant admin login..." -NoNewline
try {
    $loginResult = Invoke-WebRequest -Uri "$Base/auth/login" -Method POST -Body (@{ key = $TenantAdminKey } | ConvertTo-Json) -ContentType 'application/json' -SessionVariable adminSession -ErrorAction Stop
    $loginJson = $loginResult.Content | ConvertFrom-Json
    $adminToken = $loginJson.accessToken
    Write-Pass "PASS"
    Write-Host "    Role: $($loginJson.user.role) (actual: $($loginJson.user.actualRole))" -ForegroundColor DarkGray
} catch {
    Write-Fail "FAIL"
    throw
}

$adminHeaders = @{ Authorization = "Bearer $adminToken" }

Write-Host "[2] WhoAmI with bearer..." -NoNewline
try {
    $who = Invoke-JsonRequest -Uri "$Base/auth/whoami" -Method GET -Headers $adminHeaders
    if ($who.Response.StatusCode -eq 200) {
        Write-Pass "PASS"
        Write-Host "    User: $($who.Json.username), modes: $([string]::Join(', ', $who.Json.availableDisplayModes))" -ForegroundColor DarkGray
    } else {
        Write-Fail "FAIL"
        exit 1
    }
} catch {
    Write-Fail "FAIL"
    throw
}

Write-Host "[3] Unauthenticated explorer blocked..." -NoNewline
try {
    Invoke-WebRequest -Uri "$Base/explorer/list?mode=natural" -Method GET -ErrorAction Stop | Out-Null
    Write-Fail "FAIL (expected 401)"
    exit 1
} catch {
    if ($_.Exception.Response.StatusCode.value__ -eq 401) {
        Write-Pass "PASS (401)"
    } else {
        Write-Fail "FAIL"
        throw
    }
}

$smokeUser = "smoke-standard-" + [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()

Write-Host "[4] Create standard user..." -NoNewline
try {
    $created = Invoke-JsonRequest -Uri "$Base/admin/users" -Method POST -Headers $adminHeaders -Body @{
        username = $smokeUser
        name = 'Smoke Standard'
        roleId = 'member_standard'
    }
    $standardKey = $created.Json.loginKey
    if ($created.Response.StatusCode -eq 201 -and -not [string]::IsNullOrWhiteSpace($standardKey)) {
        Write-Pass "PASS"
        Write-Host "    User: $smokeUser" -ForegroundColor DarkGray
    } else {
        Write-Fail "FAIL"
        exit 1
    }
} catch {
    Write-Fail "FAIL"
    throw
}

Write-Host "[5] Standard user login..." -NoNewline
try {
    $memberLogin = Invoke-JsonRequest -Uri "$Base/auth/login" -Method POST -Body @{ key = $standardKey }
    $memberToken = $memberLogin.Json.accessToken
    if ($memberLogin.Response.StatusCode -eq 200) {
        Write-Pass "PASS"
    } else {
        Write-Fail "FAIL"
        exit 1
    }
} catch {
    Write-Fail "FAIL"
    throw
}

$memberHeaders = @{ Authorization = "Bearer $memberToken" }

Write-Host "[6] Standard user natural explorer..." -NoNewline
try {
    $natural = Invoke-JsonRequest -Uri "$Base/explorer/list?mode=natural" -Method GET -Headers $memberHeaders
    if ($natural.Response.StatusCode -eq 200) {
        Write-Pass "PASS"
    } else {
        Write-Fail "FAIL"
        exit 1
    }
} catch {
    Write-Fail "FAIL"
    throw
}

Write-Host "[7] Standard user raw explorer blocked..." -NoNewline
try {
    Invoke-WebRequest -Uri "$Base/explorer/list?mode=raw" -Headers $memberHeaders -Method GET -ErrorAction Stop | Out-Null
    Write-Fail "FAIL (expected 403)"
    exit 1
} catch {
    if ($_.Exception.Response.StatusCode.value__ -eq 403) {
        Write-Pass "PASS (403)"
    } else {
        Write-Fail "FAIL"
        throw
    }
}

Write-Host "[8] Tenant admin raw explorer allowed..." -NoNewline
try {
    $raw = Invoke-JsonRequest -Uri "$Base/explorer/list?mode=raw" -Method GET -Headers $adminHeaders
    if ($raw.Response.StatusCode -eq 200) {
        Write-Pass "PASS"
    } else {
        Write-Fail "FAIL"
        exit 1
    }
} catch {
    Write-Fail "FAIL"
    throw
}

Write-Host "[9] Display mode switch preserves actual role..." -NoNewline
try {
    $switch = Invoke-JsonRequest -Uri "$Base/auth/display-mode" -Method POST -Headers $adminHeaders -Body @{ roleId = 'member_standard' }
    if ($switch.Response.StatusCode -eq 200 -and $switch.Json.user.role -eq 'member_standard' -and $switch.Json.user.actualRole -eq 'tenant_admin') {
        Write-Pass "PASS"
    } else {
        Write-Fail "FAIL"
        exit 1
    }
} catch {
    Write-Fail "FAIL"
    throw
}

Write-Host "[10] Refresh rotates session..." -NoNewline
try {
    $refresh = Invoke-JsonRequest -Uri "$Base/auth/refresh" -Method POST -Session $adminSession
    if ($refresh.Response.StatusCode -eq 200 -and $refresh.Json.accessToken -ne $adminToken) {
        $adminToken = $refresh.Json.accessToken
        $adminHeaders = @{ Authorization = "Bearer $adminToken" }
        Write-Pass "PASS"
    } else {
        Write-Fail "FAIL"
        exit 1
    }
} catch {
    Write-Fail "FAIL"
    throw
}

Write-Host "[11] Logout invalidates refresh..." -NoNewline
try {
    $logout = Invoke-JsonRequest -Uri "$Base/auth/logout" -Method POST -Session $adminSession
    if ($logout.Response.StatusCode -eq 200) {
        Write-Pass "PASS"
    } else {
        Write-Fail "FAIL"
        exit 1
    }
} catch {
    Write-Fail "FAIL"
    throw
}

Write-Host "[12] Logged-out refresh rejected..." -NoNewline
try {
    Invoke-WebRequest -Uri "$Base/auth/refresh" -Method POST -WebSession $adminSession -ErrorAction Stop | Out-Null
    Write-Fail "FAIL (expected 401)"
    exit 1
} catch {
    if ($_.Exception.Response.StatusCode.value__ -eq 401) {
        Write-Pass "PASS (401)"
    } else {
        Write-Fail "FAIL"
        throw
    }
}

Write-Host "`nSmoke test complete." -ForegroundColor Cyan
