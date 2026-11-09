# Validate the plugins and website

Run commands from the repository root. Python commands use the standard library. The website build requires Python 3.9+; Claude validation requires the Claude CLI. Use temporary external project directories for generated apps and dependency downloads.

## Repository and installation packages

    python3 scripts/build.py
    python3 scripts/check.py
    python3 evidence/web-application-builder/check.py
    claude plugin validate .

Also run `claude plugin validate plugins/<name>` for each affected plugin. The repository check verifies generated catalogs and the bundled designer, clean-copy builds, invalid listing boundaries, scaffold packaging and independent historical fixture preparation. The publication check covers Git freshness, app-only output and symlink refusal. Commit regenerated catalogs with source changes; never edit them by hand.

## Current React/TypeScript applications

    python3 scripts/check-app-environment.py
    python3 scripts/check-library-recipes.py

The environment check exercises private-runtime setup, starter build and recovery. The recipe check extracts all sixteen actual documented examples, typechecks and bundles them, executes twelve known-answer assertions and rejects invalid dependency/type arrangements. The environment workflow runs these on macOS and Windows; a local macOS result is not evidence that Windows or remote CI passed.

To retain an interactive recipe app, choose a nonexistent external directory:

    python3 scripts/check-library-recipes.py --project /private/tmp/builder-recipe-review
    cd /private/tmp/builder-recipe-review
    bash app.sh dev --port 9367

Open `/recipe-check/` on the reported local origin. Exercise the library selector, Mount/Unmount, Hide/Show, keyboard controls, worker completion/cancellation and desktop/320px rendering. Stop the server, then use `bash app.sh preview --port 9368` to inspect production output. On Windows use `powershell.exe -NoProfile -File .\app.ps1` instead of `bash app.sh`.

## Historical fixtures and evidence

[Builder evidence](../evidence/web-application-builder/EVIDENCE.md) separates current checks from prior trials. The [frozen library reproduction](../evidence/web-application-builder/libraries/README.md) retains source, locks, build inputs and its check scripts. It deliberately uses historical dependencies, with their recorded limitations; do not use it as a new-app baseline. [Plain browser fixtures](../evidence/web-application-builder/fixtures/README.md) retain known-answer calculations.

[Campus Designer](../evidence/campus-designer/EVIDENCE.md), [Create Your Own](../evidence/create-your-own/EVIDENCE.md), and [Grill Me](../evidence/grill-me/EVIDENCE.md) describe the exact historical scopes and reproduction routes. Older reviews are linked at their original Git revision. An ignored local archive is never a validation prerequisite.

## Website changes

Run `python3 scripts/serve.py`, inspect desktop/narrow layouts, and exercise keyboard navigation, search and copy behavior after UI changes. Build-time link/asset checks do not replace rendered review. Preview images and the standalone Campus Designer example must remain in the source tree because the build publishes them.

Native Windows, Intel Mac, clean-device/managed-device setup, actual Work routing and novice-student journeys remain open in the recorded current-starter evidence. Passing compiler and fixture checks does not certify business models, accessibility or general student outcomes.
