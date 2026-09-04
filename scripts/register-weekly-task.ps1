# Registers (or removes) the Windows scheduled task that publishes four blog
# posts every Friday.
#
#   powershell -ExecutionPolicy Bypass -File scripts\register-weekly-task.ps1
#   powershell -ExecutionPolicy Bypass -File scripts\register-weekly-task.ps1 -Time 06:30
#   powershell -ExecutionPolicy Bypass -File scripts\register-weekly-task.ps1 -Unregister
#
# The task runs only while you are logged in, which is the trade-off of running
# locally rather than in the cloud. StartWhenAvailable means a Friday spent with
# the machine off is picked up the next time you log in, rather than skipped.

param(
  [string]$TaskName = 'Catalyst Method weekly blogs',
  [string]$Time = '07:00',
  [switch]$Unregister
)

$ErrorActionPreference = 'Stop'

$Repo = Split-Path -Parent $PSScriptRoot
$Runner = Join-Path $Repo 'scripts\run-weekly-blogs.ps1'

if ($Unregister) {
  Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
  Write-Output "Removed scheduled task '$TaskName'."
  exit 0
}

if (-not (Test-Path $Runner)) { throw "Cannot find $Runner" }

$action = New-ScheduledTaskAction `
  -Execute 'powershell.exe' `
  -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Runner`"" `
  -WorkingDirectory $Repo

$trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Friday -At $Time

$settings = New-ScheduledTaskSettingsSet `
  -StartWhenAvailable `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -ExecutionTimeLimit (New-TimeSpan -Hours 4) `
  -MultipleInstances IgnoreNew

$principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive -RunLevel Limited

Register-ScheduledTask `
  -TaskName $TaskName `
  -Action $action `
  -Trigger $trigger `
  -Settings $settings `
  -Principal $principal `
  -Description 'Researches, writes, illustrates and publishes four blog posts from CONTENT-PLAN.md, then pushes to main.' `
  -Force | Out-Null

Write-Output "Registered '$TaskName' for every Friday at $Time."
Write-Output "Run it now with:  Start-ScheduledTask -TaskName '$TaskName'"
Write-Output "Remove it with:   scripts\register-weekly-task.ps1 -Unregister"
