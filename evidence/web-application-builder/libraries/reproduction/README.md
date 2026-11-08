# Frozen inputs for the historical library trials

These files reproduce the JavaScript library fixtures in the parent directory. They are evidence inputs, not a starter for new applications. `prepare.py` combines them with the existing fixture source and frozen package manifests/lockfiles; it never reads the current plugin starter or themes.

All frozen bytes were taken from repository commit `1ef386355c34514f1c81bb56a28ddf39e27d55b9`, the last checkpoint before the uniform React/TypeScript starter. This preserves the pre-migration reproduction configuration; it does not assert that a new reproduction has the original trial's commit hash or constitutes a new browser review.

The source paths within that commit are:

- `starter/`: matching files under `plugins/web-application-builder/assets/managed-starter/`. Only build configuration, notice generation, ignore/npm/runtime settings, canonical tokens and the two font license texts are retained. The fixtures replace the application and package files. Their system-font views do not import the starter's font stylesheet, so unused starter components and font binaries are omitted.
- `themes/`: matching files under `plugins/web-application-builder/assets/library-themes/`, limited to adapters used by the three fixtures.
- `licenses/`: the two required supplemental notices under `plugins/web-application-builder/assets/license-notices/`.
- `scripts/check-dependencies.mjs` and `references/libraries.json`: the matching historical plugin files. Historical validation uses this policy, so changes to current approved versions or TypeScript requirements do not silently change the old experiment.

Preparation still applies the recorded `/library-trial/` Vite base and adds React's Vite plugin only to the two React fixtures. The presentation remains plain JavaScript. Use the parent README's reproduction commands; keep current-starter validation separate.
