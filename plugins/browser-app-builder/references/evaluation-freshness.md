# Match evaluation to the source

Use Git's existing history, not a second digest format. In `EVALUATION.md`, record the full tested commit and the evaluation-relevant paths: `app/`, `tests/`, `.github/workflows/`, and for managed apps `package.json`, `package-lock.json`, `.npmrc`, `.node-version`, `vite.config.js`, `scripts/`, `licenses/`, plus any other executable tooling. Inspect the whole project for such tooling instead of assuming only these three directories exist.

Before the final run, inspect the staged diff, commit the agreed `PLAN.md` with intended source/tests, and record `git rev-parse HEAD`. Require clean relevant paths. In the project root, run the following commands, substituting the recorded commit and appending any additional tooling paths:

    git diff --exit-code <tested-commit> HEAD -- app/ tests/ .github/workflows/ package.json package-lock.json .npmrc .node-version vite.config.js scripts/ licenses/
    git diff --cached --exit-code HEAD -- app/ tests/ .github/workflows/ package.json package-lock.json .npmrc .node-version vite.config.js scripts/ licenses/
    git diff --exit-code -- app/ tests/ .github/workflows/ package.json package-lock.json .npmrc .node-version vite.config.js scripts/ licenses/
    git ls-files --others -- app/ tests/ .github/workflows/ package.json package-lock.json .npmrc .node-version vite.config.js scripts/ licenses/

All three diffs must exit 0; the file listing must be empty. They check committed, staged, and unstaged changes separately: opposing staged and working-tree edits must not cancel into a false clean result. The file listing intentionally includes ignored untracked files. Ignored source can influence a local preview while being absent from publication. Do not hide relevant source with ignore rules. An invalid/missing commit or command error is not a pass.

Check immediately before and after the test run and again before publication. If source, tests, workflow, or executable tooling changes, inspect the change, rerun the affected evaluation, and record a new checkpoint. Keep the previous round. Do not simply change the commit recorded beside old results.

Also compare the meaning of the current plan with the plan at the tested commit:

    git show <tested-commit>:PLAN.md
    git diff <tested-commit> HEAD -- PLAN.md
    git status --short -- PLAN.md

The tested plan must exist, and the status output must be empty before a final evaluation or publication. Commit intended plan changes first; do not discard pending work to clear status. Review the plan diff: changed formulas, units, assumptions, scope, or acceptance criteria require student agreement and renewed evaluation of affected behavior, even when code is unchanged. Editorial changes may retain the prior evaluation; record why in `EVALUATION.md`. A missing baseline plan or command error cannot establish applicability. Report-only commits may follow without retesting; substantive requirements in Markdown still need review.

The published commit can differ from the evaluated commit because reports were added. Record both in `DEPLOYMENT.md` along with the observed successful workflow run. The workflow is added in Deploy before the final checkpoint; then refresh evaluation. This avoids pretending an earlier evaluation covered a publishing configuration that did not exist.

For managed apps exclude generated dist/ and node_modules/ from source path comparisons, but never hide authored source in them. Before checkpointing, run the dependency check, npm ci and npm run build to generate current notices. Commit intended notices/configuration with source. Rebuild from that clean checkpoint, then repeat cleanliness checks; build-induced tracked changes require investigation, not deletion. Record Node/npm versions. Changing a manifest, lockfile, build configuration, adapter or build script invalidates affected results. Source tests and production preview are separate checks.
