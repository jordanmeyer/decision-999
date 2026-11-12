# Run the course tool. The first run downloads a private, checksum-verified Node.
# From the plugin (setup) it works in the current folder; the course folder's copy always works in its own folder.
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$root = $PWD.Path
$tool = Join-Path $PSScriptRoot 'tool'
if (!(Test-Path (Join-Path $tool 'cli.mjs'))) { $root = $PSScriptRoot; $tool = Join-Path $root '.toolchain/tool' }
$arch = if ($env:PROCESSOR_ARCHITEW6432) { $env:PROCESSOR_ARCHITEW6432 } else { $env:PROCESSOR_ARCHITECTURE }
$arch = @{ AMD64 = 'x64'; ARM64 = 'arm64' }[$arch]
$pin = (Get-Content (Join-Path $tool 'toolchain.json') -Raw | ConvertFrom-Json)."win32-$arch".node
$runtime = Join-Path $root ('.toolchain/' + [IO.Path]::GetFileNameWithoutExtension($pin.url))
$node = Join-Path $runtime 'node.exe'
if (!(Test-Path $node)) {
    $stage = Join-Path $root ('.toolchain/download.' + [guid]::NewGuid())
    New-Item -ItemType Directory -Path $stage -Force | Out-Null
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -UseBasicParsing -Uri $pin.url -OutFile "$stage/node.zip"
        if ((Get-FileHash "$stage/node.zip" -Algorithm SHA256).Hash.ToLowerInvariant() -ne $pin.sha256) { Write-Output 'STOP the Node download did not match its checksum'; exit 1 }
        Expand-Archive -LiteralPath "$stage/node.zip" -DestinationPath $stage
        Move-Item -LiteralPath (Join-Path $stage (Split-Path $runtime -Leaf)) -Destination $runtime
    } catch { Write-Output "STOP could not download and unpack Node ($($_.Exception.Message)): check the internet connection and run setup again"; exit 1 }
    finally { Remove-Item -LiteralPath $stage -Recurse -Force }
}
Push-Location $root
try { & $node (Join-Path $tool 'cli.mjs') @args } finally { Pop-Location }
exit $LASTEXITCODE
