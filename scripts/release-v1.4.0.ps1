# scripts/release-v1.4.0.ps1
#
# Prerequisite: MeridianPSI_V1.4.0.zip in Web/public/downloads/
# Run from Web/: powershell -ExecutionPolicy Bypass -File scripts/release-v1.4.0.ps1

$ErrorActionPreference = 'Stop'

$webDir = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $webDir
Write-Host "Working directory: $webDir" -ForegroundColor Cyan
Write-Host ""

$zipPath       = "public/downloads/MeridianPSI_V1.4.0.zip"
$versionJson   = "public/version.json"
$changelogNew  = "src/data/changelog/v1.4.0.md"
$changelogPrev = "src/data/changelog/v1.3.2.md"

if (-not (Test-Path $zipPath)) {
  Write-Host "FATAL: $zipPath is missing." -ForegroundColor Red
  exit 1
}
if (-not (Test-Path $changelogNew)) {
  Write-Host "FATAL: $changelogNew is missing." -ForegroundColor Red
  exit 1
}

$zipSize = (Get-Item $zipPath).Length
Write-Host "[OK] Found $zipPath ($zipSize bytes)" -ForegroundColor Green

$branch = (git rev-parse --abbrev-ref HEAD).Trim()
if ($branch -ne 'main') {
  Write-Host "FATAL: not on main (current: $branch)" -ForegroundColor Red
  exit 1
}
Write-Host "[OK] On main branch" -ForegroundColor Green
Write-Host ""

$today = Get-Date -Format 'yyyy-MM-dd'
$newVersionJson = @"
{
  "version": "1.4.0",
  "releaseDate": "$today",
  "download": "https://www.meridianpsi.com/download",
  "downloadUrl": "https://www.meridianpsi.com/downloads/MeridianPSI_V1.4.0.zip",
  "releasesUrl": "https://www.meridianpsi.com/download",
  "notes": "Guard risk enforcement (Trading Pause), pause survives restart, reconnect/PSI stability fixes, Guard UI redesign."
}
"@
[System.IO.File]::WriteAllText((Join-Path $webDir $versionJson), $newVersionJson)
Write-Host "[OK] public/version.json updated -> 1.4.0" -ForegroundColor Green

foreach ($prev in @("src/data/changelog/v1.3.2.md", "src/data/changelog/v1.3.1.md", "src/data/changelog/v1.3.0.md")) {
  if (-not (Test-Path $prev)) { continue }
  $c = Get-Content $prev -Raw
  if ($c -match 'isLatest:\s*true') {
    $c = $c -replace 'isLatest:\s*true', 'isLatest: false'
    Set-Content -Path $prev -Value $c -Encoding UTF8 -NoNewline
    Write-Host "[OK] $prev isLatest -> false" -ForegroundColor Green
  }
}

$newContent = Get-Content $changelogNew -Raw
if ($newContent -match 'isLatest:\s*false') {
  $newContent = $newContent -replace 'isLatest:\s*false', 'isLatest: true'
  Set-Content -Path $changelogNew -Value $newContent -Encoding UTF8 -NoNewline
  Write-Host "[OK] $changelogNew isLatest -> true" -ForegroundColor Green
}
Write-Host ""

$commitMsg = @"
release: MeridianPSI v1.4.0

Guard risk enforcement (Trading Pause), pause persistence across NT8
restart, PSI stability during Disconnect reconnect, Guard UI redesign.

  - public/downloads/MeridianPSI_V1.4.0.zip
  - public/version.json -> 1.4.0
  - src/data/changelog/v1.4.0.md isLatest: true
"@

$commitMsgPath = ".git/RELEASE_v1.4.0_MSG.tmp"
Set-Content -Path $commitMsgPath -Value $commitMsg -Encoding UTF8

git add $zipPath $versionJson $changelogNew
git add -u src/data/changelog/
git commit -F $commitMsgPath
Remove-Item $commitMsgPath -Force -ErrorAction SilentlyContinue
Write-Host "[OK] commit created" -ForegroundColor Green

Write-Host "Pushing to origin/main..." -ForegroundColor Cyan
git push origin main 2>&1 | Out-Host
Write-Host "[OK] pushed" -ForegroundColor Green
