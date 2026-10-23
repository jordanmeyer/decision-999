# Browser application

New projects use Vite, React and TypeScript. The agent runs these commands from this project folder; students make product decisions rather than managing tools.

On macOS: `bash app.sh setup`. On Windows: `powershell.exe -NoProfile -File .\app.ps1 setup`. These launchers download the pinned official Node archive, verify its SHA-256 checksum and install locked packages locally. No system Node or PowerShell 7 is required. Respect managed-device policy; do not disable script restrictions or TLS checks.

Use the same launcher with `dev`, `typecheck`, `build`, `preview` or `test:browser`. For example, `bash app.sh dev --port 5174`. Servers run in the foreground; stop their terminal session with Ctrl+C. An occupied port is an error, not permission to stop another server. `test:browser` serves tests but does not execute or certify them.

The agent can add approved packages with `add package@exact.version`, using `--save-dev` for development tools. Review the plugin inventory and lockfile. Setup uses `npm ci` and keeps dependency installation scripts disabled. Build includes typecheck and license notices. CI uses the same package build with `.node-version`.

Source lives in `app/`; production output is `dist/`. Configure the repository prefix in `vite.config.js` before evaluating/publishing to Pages. Add independent model tests and actual evaluation records for the agreed app; this starter is not an evaluated business application.

Runtime, npm cache/logs and temporary files are inside `.toolchain/`. Exclude it, `node_modules/` and `dist/` from source/submission archives. Keep package-lock.json, runtime manifest and launchers. `clean` removes only those generated directories after owned sessions stop. Setup can then recreate them. No user/global npm settings or permanent PATH changes are made; code execution still has the permissions granted by the host, so this is not a sandbox.

The default fonts are locally bundled EB Garamond and Open Sans with retained OFL notices. Preserve their licenses and inspect actual fonts, keyboard behavior and narrow screens when changing the app. Record actual platform/preview/build results in SETUP.md; scripts for another OS are not evidence of a successful run there.
