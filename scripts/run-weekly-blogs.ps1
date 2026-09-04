# Runs the weekly blog publish headlessly, for Windows Task Scheduler.
#
# Register it with scripts/register-weekly-task.ps1, or run it by hand to test:
#   powershell -ExecutionPolicy Bypass -File scripts\run-weekly-blogs.ps1
#
# Logs to logs\weekly-blogs-<timestamp>.log and leaves the last 12 runs in place.

$ErrorActionPreference = 'Stop'

$Repo = Split-Path -Parent $PSScriptRoot
$LogDir = Join-Path $Repo 'logs'
$Stamp = Get-Date -Format 'yyyy-MM-dd-HHmm'
$Log = Join-Path $LogDir "weekly-blogs-$Stamp.log"

if (-not (Test-Path $LogDir)) { New-Item -ItemType Directory -Path $LogDir | Out-Null }

function Write-Log($Message) {
  $line = "[{0}] {1}" -f (Get-Date -Format 'HH:mm:ss'), $Message
  Add-Content -Path $Log -Value $line -Encoding utf8
  Write-Output $line
}

Write-Log "Weekly blog run starting in $Repo"

# The CLI lives in a version-stamped folder, so resolve the newest one each time
# rather than pinning a path that breaks on the next update.
$claude = Get-ChildItem "$env:APPDATA\Claude\claude-code\*\claude.exe" -ErrorAction SilentlyContinue |
  Sort-Object { try { [version]$_.Directory.Name } catch { [version]'0.0.0' } } -Descending |
  Select-Object -First 1 -ExpandProperty FullName

if (-not $claude) {
  Write-Log 'FAILED: could not find claude.exe under %APPDATA%\Claude\claude-code'
  exit 1
}
Write-Log "Using $claude"

# Never let a credential prompt hang a task nobody is watching.
$env:GIT_TERMINAL_PROMPT = '0'
$env:GCM_INTERACTIVE = 'never'

Set-Location $Repo

try {
  & $claude --print `
    --permission-mode bypassPermissions `
    --add-dir $Repo `
    '/weekly-blogs' 2>&1 | ForEach-Object { Add-Content -Path $Log -Value $_ -Encoding utf8; $_ }

  $code = $LASTEXITCODE
} catch {
  Write-Log "FAILED: $($_.Exception.Message)"
  $code = 1
}

if ($code -eq 0) {
  Write-Log 'Run finished cleanly.'
} else {
  Write-Log "Run exited with code $code. See the log above."
}

# Keep the last 12 logs, roughly a quarter of runs.
Get-ChildItem $LogDir -Filter 'weekly-blogs-*.log' |
  Sort-Object LastWriteTime -Descending |
  Select-Object -Skip 12 |
  Remove-Item -Force -ErrorAction SilentlyContinue

exit $code
