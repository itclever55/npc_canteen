param(
  [switch]$WebOnly,
  [switch]$AndroidOnly
)

$ErrorActionPreference = 'Stop'
Set-Location "$PSScriptRoot\..\canteen_app"

if (-not $AndroidOnly) {
  Write-Host "Building Flutter Web (PWA)..." -ForegroundColor Cyan
  flutter build web --release
}

if (-not $WebOnly) {
  Write-Host "Building Android APK (native)..." -ForegroundColor Cyan
  flutter build apk --release
}

Write-Host "Build complete." -ForegroundColor Green
