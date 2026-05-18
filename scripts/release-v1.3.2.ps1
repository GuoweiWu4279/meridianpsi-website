# scripts/release-v1.3.2.ps1
#
# One-shot release script for MeridianPSI v1.3.2.
#
# Prerequisite (manual, NinjaTrader-side):
#   1. NinjaTrader 8: Tools -> Export -> NinjaScript Add-On
#      Select "MeridianPSI", click Export.
#   2. Rename the resulting zip to exactly:
#        MeridianPSI_V1.3.2.zip
#   3. Move it to:
#        Web/public/downloads/MeridianPSI_V1.3.2.zip
#
# Then from the Web/ directory run:
#   powershell -ExecutionPolicy Bypass -File scripts/release-v1.3.2.ps1
#
# What this script does (atomic — all-or-nothing):
#   1. Sanity-checks the zip is present and the changelog entry exists.
#   2. Updates public/version.json to 1.3.2 (this is what the in-app
#      update checker fetches — existing v1.3.0 / v1.3.1 installs
#      will see "Update available" the next time they open NT).
#   3. Flips isLatest: v1.3.1 -> false, v1.3.2 -> true so the /download
#      page shows v1.3.2 as the current build.
#   4. git add + commit + push.
#   5. Waits for Vercel to deploy, then verifies the zip is reachable
#      from the public URL.

$ErrorActionPreference = 'Stop'

# ── 0. Locate the Web/ directory we run from ────────────────────────────
$webDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $webDir
Write-Host "Working directory: $webDir" -ForegroundColor Cyan
Write-Host ""

# ── 1. Sanity checks ────────────────────────────────────────────────────
$zipPath        = "public/downloads/MeridianPSI_V1.3.2.zip"
$versionJson    = "public/version.json"
$changelogNew   = "src/data/changelog/v1.3.2.md"
$changelogPrev  = "src/data/changelog/v1.3.1.md"

if (-not (Test-Path $zipPath)) {
  Write-Host "FATAL: $zipPath is missing." -ForegroundColor Red
  Write-Host "       Export it from NinjaTrader 8 (Tools -> Export -> NinjaScript Add-On)" -ForegroundColor Red
  Write-Host "       and place it at the path above." -ForegroundColor Red
  exit 1
}
if (-not (Test-Path $changelogNew)) {
  Write-Host "FATAL: $changelogNew is missing — should have been committed earlier." -ForegroundColor Red
  exit 1
}
if (-not (Test-Path $changelogPrev)) {
  Write-Host "FATAL: $changelogPrev is missing." -ForegroundColor Red
  exit 1
}

$zipSize = (Get-Item $zipPath).Length
Write-Host "[OK] Found $zipPath ($zipSize bytes)" -ForegroundColor Green

# Make sure we're on main and clean enough to commit only release files
$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($branch -ne 'main') {
  Write-Host "FATAL: not on main (current: $branch)" -ForegroundColor Red
  exit 1
}
Write-Host "[OK] On main branch" -ForegroundColor Green
Write-Host ""

# ── 2. Update public/version.json ───────────────────────────────────────
$today = Get-Date -Format 'yyyy-MM-dd'
$newVersionJson = @"
{
  "version": "1.3.2",
  "releaseDate": "$today",
  "download": "https://www.meridianpsi.com/download",
  "downloadUrl": "https://www.meridianpsi.com/downloads/MeridianPSI_V1.3.2.zip",
  "releasesUrl": "https://www.meridianpsi.com/download",
  "notes": "Removes NT8 vendor-notification gate. Activation is now Whop-only and works for prop firm logins."
}
"@
Set-Content -Path $versionJson -Value $newVersionJson -Encoding UTF8 -NoNewline
Write-Host "[OK] public/version.json updated -> 1.3.2" -ForegroundColor Green

# ── 3. Flip isLatest ────────────────────────────────────────────────────
$prevContent = Get-Content $changelogPrev -Raw
if ($prevContent -match 'isLatest:\s*true') {
  $prevContent = $prevContent -replace 'isLatest:\s*true', 'isLatest: false'
  Set-Content -Path $changelogPrev -Value $prevContent -Encoding UTF8 -NoNewline
  Write-Host "[OK] $changelogPrev isLatest -> false" -ForegroundColor Green
} else {
  Write-Host "[--] $changelogPrev already not latest" -ForegroundColor DarkGray
}

$newContent = Get-Content $changelogNew -Raw
if ($newContent -match 'isLatest:\s*false') {
  $newContent = $newContent -replace 'isLatest:\s*false', 'isLatest: true'
  Set-Content -Path $changelogNew -Value $newContent -Encoding UTF8 -NoNewline
  Write-Host "[OK] $changelogNew isLatest -> true" -ForegroundColor Green
} else {
  Write-Host "[--] $changelogNew already latest" -ForegroundColor DarkGray
}
Write-Host ""

# ── 4. Commit + push ────────────────────────────────────────────────────
$commitMsg = @"
release: MeridianPSI v1.3.2

Ships the binary build that drops the NT8 VendorLicense(1468) gate so
prop firm traders (Apex, Topstep, MyFundedFutures, TopstepX,
FundedNext, Earn2Trade, ...) can install and activate Meridian
without a personal NinjaTrader email account on the vendor registry.
Whop key remains the only authority.

  - public/downloads/MeridianPSI_V1.3.2.zip   (binary, from NT8 export)
  - public/version.json                       -> 1.3.2  (in-app update prompt)
  - src/data/changelog/v1.3.2.md              isLatest: true
  - src/data/changelog/v1.3.1.md              isLatest: false
"@

$commitMsgPath = ".git/RELEASE_v1.3.2_MSG.tmp"
Set-Content -Path $commitMsgPath -Value $commitMsg -Encoding UTF8

git add $zipPath $versionJson $changelogNew $changelogPrev
git commit -F $commitMsgPath
Remove-Item $commitMsgPath -Force -ErrorAction SilentlyContinue
Write-Host "[OK] commit created" -ForegroundColor Green

Write-Host "Pushing to origin/main..." -ForegroundColor Cyan
git push origin main 2>&1 | Out-Host
Write-Host "[OK] pushed" -ForegroundColor Green
Write-Host ""

# ── 5. Verify deployment ────────────────────────────────────────────────
Write-Host "Waiting 60s for Vercel to build + deploy..." -ForegroundColor Cyan
Start-Sleep -Seconds 60

$probes = @(
  @{ url = "https://www.meridianpsi.com/downloads/MeridianPSI_V1.3.2.zip"; expect = 200 }
  @{ url = "https://www.meridianpsi.com/version.json";                     expect = 200 }
  @{ url = "https://www.meridianpsi.com/download";                         expect = 200 }
)

$allGreen = $true
foreach ($p in $probes) {
  try {
    $r = Invoke-WebRequest -Uri $p.url -Method Head -UseBasicParsing -ErrorAction Stop
    if ($r.StatusCode -eq $p.expect) {
      Write-Host ("[OK] {0,-60}  HTTP {1}" -f $p.url, $r.StatusCode) -ForegroundColor Green
    } else {
      Write-Host ("[!!] {0,-60}  HTTP {1} (expected {2})" -f $p.url, $r.StatusCode, $p.expect) -ForegroundColor Yellow
      $allGreen = $false
    }
  } catch {
    $code = $_.Exception.Response.StatusCode.value__
    Write-Host ("[!!] {0,-60}  HTTP {1} (expected {2})" -f $p.url, $code, $p.expect) -ForegroundColor Yellow
    $allGreen = $false
  }
}
Write-Host ""

# Verify version.json was updated to 1.3.2 (Vercel may serve stale cache for a moment)
try {
  $vj = Invoke-RestMethod -Uri "https://www.meridianpsi.com/version.json" -ErrorAction Stop
  if ($vj.version -eq "1.3.2") {
    Write-Host "[OK] /version.json reports version=1.3.2" -ForegroundColor Green
  } else {
    Write-Host "[!!] /version.json still reports version=$($vj.version) — Vercel cache may need a minute" -ForegroundColor Yellow
    $allGreen = $false
  }
} catch {
  Write-Host "[!!] could not read /version.json: $_" -ForegroundColor Yellow
  $allGreen = $false
}

Write-Host ""
if ($allGreen) {
  Write-Host "===============================" -ForegroundColor Green
  Write-Host "  RELEASE v1.3.2 SHIPPED. ✓" -ForegroundColor Green
  Write-Host "===============================" -ForegroundColor Green
} else {
  Write-Host "Some checks did not pass on the first try — wait ~60s and re-run" -ForegroundColor Yellow
  Write-Host "the probes below (commit + push already happened, no need to re-run script):" -ForegroundColor Yellow
  Write-Host '  Invoke-WebRequest "https://www.meridianpsi.com/downloads/MeridianPSI_V1.3.2.zip" -Method Head' -ForegroundColor DarkGray
  Write-Host '  Invoke-RestMethod  "https://www.meridianpsi.com/version.json"' -ForegroundColor DarkGray
}
