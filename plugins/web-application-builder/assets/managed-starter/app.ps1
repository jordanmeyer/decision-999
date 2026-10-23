# Windows PowerShell 5.1 bootstrap. Do not change execution policy.
param(
    [Parameter(Position=0)][string]$Command = '',
    [Parameter(ValueFromRemainingArguments=$true)][string[]]$CommandArgs
)
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$manifest = Get-Content scripts/toolchain.json -Raw | ConvertFrom-Json
$arch = if ($env:PROCESSOR_ARCHITEW6432) { $env:PROCESSOR_ARCHITEW6432 } else { $env:PROCESSOR_ARCHITECTURE }
$arch = switch ($arch) { 'AMD64' { 'x64' } 'ARM64' { 'arm64' } default { throw "Unsupported Windows architecture: $arch" } }
$artifact = $manifest.artifacts."win-$arch"
$runtime = Join-Path $PSScriptRoot ".toolchain/node-v$($manifest.node)-win-$arch"
$node = Join-Path $runtime 'node.exe'
if ($Command -eq 'setup' -and !(Test-Path $node)) {
    $stage = Join-Path $PSScriptRoot ('.toolchain/download.' + [guid]::NewGuid())
    New-Item -ItemType Directory -Path $stage -Force | Out-Null
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        $archive = Join-Path $stage 'node.zip'
        Invoke-WebRequest -UseBasicParsing -Uri "https://nodejs.org/dist/v$($manifest.node)/$($artifact.file)" -OutFile $archive
        if ((Get-FileHash $archive -Algorithm SHA256).Hash.ToLowerInvariant() -ne $artifact.sha256) {
            throw 'Node checksum mismatch; nothing executed.'
        }
        Expand-Archive -LiteralPath $archive -DestinationPath $stage
        if (Test-Path $runtime) { throw "Runtime already exists: $runtime. Inspect it before retrying." }
        Move-Item -LiteralPath (Join-Path $stage "node-v$($manifest.node)-win-$arch") -Destination $runtime
    } finally { Remove-Item -LiteralPath $stage -Recurse -Force }
}
if (!(Test-Path $node)) { throw 'Run powershell.exe -NoProfile -File .\app.ps1 setup first.' }
& $node scripts/project.mjs $Command @CommandArgs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
if ($Command -eq 'clean') { Remove-Item -LiteralPath '.toolchain' -Recurse -Force }
