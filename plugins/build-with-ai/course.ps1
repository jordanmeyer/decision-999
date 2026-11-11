# Run the course tool from the course folder. The first run downloads a private, checksum-verified Node.
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$tool = Join-Path $PSScriptRoot 'tool'
if (!(Test-Path (Join-Path $tool 'cli.mjs'))) { $tool = Join-Path $PWD '.toolchain/tool' }
$arch = if ($env:PROCESSOR_ARCHITEW6432) { $env:PROCESSOR_ARCHITEW6432 } else { $env:PROCESSOR_ARCHITECTURE }
$arch = @{ AMD64 = 'x64'; ARM64 = 'arm64' }[$arch]
$pin = (Get-Content (Join-Path $tool 'toolchain.json') -Raw | ConvertFrom-Json)."win32-$arch".node
$runtime = Join-Path $PWD ('.toolchain/' + [IO.Path]::GetFileNameWithoutExtension($pin.url))
$node = Join-Path $runtime 'node.exe'
if (!(Test-Path $node)) {
    $stage = Join-Path $PWD ('.toolchain/download.' + [guid]::NewGuid())
    New-Item -ItemType Directory -Path $stage -Force | Out-Null
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -UseBasicParsing -Uri $pin.url -OutFile "$stage/node.zip"
        if ((Get-FileHash "$stage/node.zip" -Algorithm SHA256).Hash.ToLowerInvariant() -ne $pin.sha256) { Write-Output 'STOP the Node download did not match its checksum'; exit 1 }
        Expand-Archive -LiteralPath "$stage/node.zip" -DestinationPath $stage
        Move-Item -LiteralPath (Join-Path $stage (Split-Path $runtime -Leaf)) -Destination $runtime
    } finally { Remove-Item -LiteralPath $stage -Recurse -Force }
}
& $node (Join-Path $tool 'cli.mjs') @args
exit $LASTEXITCODE
