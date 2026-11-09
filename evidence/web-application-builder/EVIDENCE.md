# Web Application Builder evidence

Instructor-built pilot candidate. These are version-specific maintainer checks and simulated planning exercises, not student outcomes or general business-model accuracy.

| Version / date | Observed scope | Preserved record |
| --- | --- | --- |
| 0.3.1 · November 8, 2026 | All 16 current React/TypeScript recipes compiled and bundled; 12 model assertions and selected browser lifecycle checks passed on macOS ARM64. Historical reproduction was repaired. | [Recipe verification](https://github.com/jordanmeyer/decision-999/blob/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/web-application-builder/2026-11-08-react-recipes/README.md) |
| 0.3.0 · October 23, 2026 | Private-runtime setup and starter interaction on macOS ARM64; no complete business-app trial. | [Environment review](https://github.com/jordanmeyer/decision-999/blob/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/web-application-builder/2026-10-23-uniform-environment/REVIEW.md) |
| 0.2.3 · October 9, 2026 | Nine revised apps independently reviewed and verified live; 285 passing browser checks from simulated planning. | [Live revisions](https://github.com/jordanmeyer/decision-999/blob/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/web-application-builder/live-revisions/2026-10-09/README.md) |
| 0.1.1 · October 8, 2026 | Three plain-app trials published and verified live after corrections. | [Original trials](https://github.com/jordanmeyer/decision-999/blob/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/web-application-builder/trials/2026-10-08/README.md) |

Tournament Atlas is separate from the nine-app counts. Its original forecasts, reconstructed years, source comparisons, failed rounds and limitations are preserved in the [historical evidence tree](https://github.com/jordanmeyer/decision-999/tree/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/web-application-builder/madness). Gallery walkthroughs retain links to each app's public source, evaluation and deployment records.

## Reproduce

Run `python3 scripts/check-app-environment.py` for the current private runtime and `python3 scripts/check-library-recipes.py` for the actual documented recipes, strict compilation, model assertions and dependency policy. These generate disposable projects outside the repository. Use `--project /private/tmp/builder-recipe-review` with the recipe command to retain an interactive preview; then run `bash app.sh dev --port 9367` there and inspect `/recipe-check/` (Windows: use `app.ps1`).

Run `python3 evidence/web-application-builder/check.py` for Git freshness and app-only publication boundaries. The [plain browser fixtures](fixtures/README.md) and [frozen library fixtures](libraries/README.md) remain tracked for reproduction. Frozen inputs are historical evidence, not the baseline for new apps.

## Limits and historical provenance

Native Windows, Intel Mac, clean-device and managed-device setup, actual Work routing, and novice-student journeys remain unverified in these records. Browser inspection was bounded, not accessibility certification or proof of every cancellation path. No student adoption, time savings, or universal numerical accuracy is claimed.

The [complete pre-cleanup record](https://github.com/jordanmeyer/decision-999/blob/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/web-application-builder/EVIDENCE.md) preserves the original methods, failures and release distinctions. Historical reports and copied app snapshots are archived locally and remain available at the linked Git revision. Current builds and checks do not need the local archive.
