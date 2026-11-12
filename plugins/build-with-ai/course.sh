#!/bin/sh
# Run the course tool. The first run downloads a private, checksum-verified Node.
# From the plugin (setup) it works in the current folder; the course folder's copy always works in its own folder.
set -eu
here=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd -P)
tool="$here/tool"; [ -f "$tool/cli.mjs" ] || { cd "$here"; tool="$here/.toolchain/tool"; }
arch=$(uname -m); [ "$arch" != x86_64 ] || arch=x64
url=$(/usr/bin/plutil -extract "darwin-$arch.node.url" raw -o - "$tool/toolchain.json")
sha=$(/usr/bin/plutil -extract "darwin-$arch.node.sha256" raw -o - "$tool/toolchain.json")
runtime="$PWD/.toolchain/$(basename "$url" .tar.gz)"
if [ ! -x "$runtime/bin/node" ]; then
  mkdir -p .toolchain
  stage=$(mktemp -d "$PWD/.toolchain/download.XXXXXX")
  trap 'rm -rf "$stage"' EXIT
  /usr/bin/curl -fsSL --proto '=https' "$url" -o "$stage/node.tar.gz"
  [ "$(/usr/bin/shasum -a 256 "$stage/node.tar.gz" | cut -d' ' -f1)" = "$sha" ] || { echo 'STOP the Node download did not match its checksum'; exit 1; }
  /usr/bin/tar -xzf "$stage/node.tar.gz" -C "$stage"
  mv "$stage/$(basename "$runtime")" "$runtime"
fi
"$runtime/bin/node" "$tool/cli.mjs" "$@"
