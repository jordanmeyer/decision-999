# Reproduce the historical library fixtures

These three synthetic fixtures preserve the pre-React/TypeScript-migration experiment. Their app/test sources, exact package manifests and locks, and [frozen build inputs](reproduction/README.md) remain tracked because the repository checks their independent preparation. They are not starter templates for new apps.

The [original verification record](https://github.com/jordanmeyer/decision-999/blob/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/web-application-builder/libraries/README.md) retains results, failures, screenshot interpretation, the November 8 reproduction repair and the later DOMPurify advisory in the frozen operations lock. The [dependency record](https://github.com/jordanmeyer/decision-999/blob/bb8a885e1ab306a803588e5e15683de27e131fae/evidence/web-application-builder/libraries/DEPENDENCIES.md) preserves license provenance. Do not silently upgrade these locks or use them as a current dependency baseline.

From the repository root, choose a destination that does not exist:

    python3 evidence/web-application-builder/libraries/prepare.py /private/tmp/bab-library-reproduction

Using the recorded Node 22.19.0/npm 10.9.3 environment, run `npm ci` in each generated `presentation`, `dashboard` and `operations` folder. Before building operations, copy its pinned structural stylesheet:

    mkdir -p app/vendor
    cp node_modules/frappe-gantt/dist/frappe-gantt.css app/vendor/frappe-gantt.css

Run `npm run build` in all three projects, then from this repository:

    python3 evidence/web-application-builder/check.py
    python3 evidence/web-application-builder/libraries/check.py /private/tmp/bab-library-reproduction

For browser review, use `npm run test:browser -- --port 9201` and open `/tests/`; use `npm run preview -- --port 9202` and open `/library-trial/`. Use distinct ports for concurrent projects and stop servers afterward. Inspect actual results and controls; preparation/build success is not a browser verdict. The dashboard retains `quoted.csv` and `invalid.csv` for file-import checks.

For the current React/TypeScript starter use `python3 scripts/check-library-recipes.py` instead. Historical browser observations do not certify the current starter, Work routing, student outcomes, accessibility or arbitrary library combinations.
