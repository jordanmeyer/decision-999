# Setup

The project uses the Browser App Builder managed Vite workflow and its Campus Designer guidance. All direct packages are pinned; `package-lock.json` pins registry packages and integrity. `.npmrc` sets `ignore-scripts=true` and `save-exact=true`. Node is 22.19.0; npm is 10.9.3. No global packages or broad workstation changes are needed.

```sh
npm ci
npm run build
npm run test:browser -- --port 9521
npm run preview -- --port 9522
```

Run the last two commands in separate terminals. Open tests at http://127.0.0.1:9521/tests/ and production at http://127.0.0.1:9522/bab-example-video/. `tests/desktop.html` and `tests/narrow.html` embed the production server at fixed 1440/320 CSS-pixel widths without changing a shared browser viewport. These are layout frames, not a physical-device claim.

The local development run used `/Users/jordan/.nvm/versions/node/v22.19.0/bin` and `/private/tmp/bab-video-npm-cache`. npm ci installed 30 packages and reported zero vulnerabilities. The production build emits only `dist/`; dependencies, test fixtures and reports are not published. The managed workflow builds main and uploads only dist.

Real exports require a browser/device supporting H.264 WebCodecs. HTTPS or localhost is required. Capability is checked with explicit width and height. No server rendering fallback is represented as local export. A supported preview does not itself prove export support.

The exact Remotion 4.0.534 silent configuration is a coordinator-authorized candidate trial. The canonical dependency checker actually rejects Remotion until the maintainer promotes this precise configuration. Do not weaken or bypass that checker. Publication requires the coordinator's gate after independent application review.

The build retains notices for 14 installed runtime packages, offers exact unmodified Mediabunny 1.56.1 source, aliases optional AAC/MP3/FLAC encoders to a throwing local sentinel, and asserts that no such encoder modules enter the output graph. `muted: true` is fixed after render/capability options. This is exclusively a silent-video profile.
