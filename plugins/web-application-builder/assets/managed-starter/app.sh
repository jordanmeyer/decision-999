#!/bin/sh
# macOS bootstrap; all application commands live in scripts/project.mjs.
set -eu
cd "$(CDPATH= cd -- "$(dirname -- "$0")" && pwd -P)"
if [ "$(uname -s)" != Darwin ]; then
  echo 'This launcher supports macOS. Use app.ps1 on Windows.' >&2; exit 1
fi
manifest=scripts/toolchain.json
version=$(/usr/bin/plutil -extract node raw -o - "$manifest")
arch=$(uname -m)
[ "$arch" != x86_64 ] || arch=x64
artifact=$(/usr/bin/plutil -extract "artifacts.darwin-$arch.file" raw -o - "$manifest")
expected=$(/usr/bin/plutil -extract "artifacts.darwin-$arch.sha256" raw -o - "$manifest")
runtime=".toolchain/node-v$version-darwin-$arch"
if [ "${1:-}" = setup ] && [ ! -x "$runtime/bin/node" ]; then
  mkdir -p .toolchain
  stage=$(mktemp -d "$PWD/.toolchain/download.XXXXXX")
  trap 'rm -rf "$stage"' EXIT HUP INT TERM
  /usr/bin/curl --fail --location --proto '=https' --proto-redir '=https' --tlsv1.2 \
    "https://nodejs.org/dist/v$version/$artifact" -o "$stage/node.tar.gz"
  actual=$(/usr/bin/shasum -a 256 "$stage/node.tar.gz" | /usr/bin/awk '{print $1}')
  if [ "$actual" != "$expected" ]; then echo 'Node checksum mismatch; nothing executed.' >&2; exit 1; fi
  /usr/bin/tar -xzf "$stage/node.tar.gz" -C "$stage"
  # Rename only into an absent destination; never nest into a partial runtime.
  if [ -e "$runtime" ]; then echo "Runtime already exists: $runtime. Inspect it before retrying." >&2; exit 1; fi
  mv "$stage/node-v$version-darwin-$arch" "$runtime"
  rm -rf "$stage"
  trap - EXIT HUP INT TERM
fi
if [ ! -x "$runtime/bin/node" ]; then echo 'Run bash app.sh setup first.' >&2; exit 1; fi
"$runtime/bin/node" scripts/project.mjs "$@"
if [ "${1:-}" = clean ]; then rm -rf .toolchain; fi
