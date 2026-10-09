# Build the Browser App Builder plugin

This living ExecPlan follows `~/.codex/PLANS.md`. Maintain Progress, Surprises & Discoveries, Decision Log, and Outcomes & Retrospective. The previous completed plan is archived unchanged in `docs/plans/2026-10-06-plugin-directory.md`.

## Purpose / Big Picture


An MBA student with no terminal experience installs Browser App Builder and develops a self-contained browser application through Setup, Plan, Build, Evaluate, and Deploy. The agent handles files, commands, history, previews, tests, and publication mechanics. The student supplies domain knowledge, makes decisions, reviews results, and handles authentication or OS prompts.

Apps use HTML, CSS, JavaScript, bundled public/synthetic data, or transient local browser imports. No backends, external APIs, runtime credentials, telemetry, accounts, or paid runtime services. No required Python, Node, package manager, or editor installation. Use existing host capabilities; Git provides history and GitHub provides publication.

Each stage leaves files allowing a fresh chat to continue. Successful release evidence includes a tested application, public source, and working Pages URL. A locally verified pilot candidate is distinct from a verified release.

## Progress


- [x] (2026-10-08) Agreed five stages, no terminal experience, self-contained scope, and no required student runtimes.
- [x] (2026-10-08) Obtained independent review and accepted preservation, attribution, freshness, and release-gate corrections.
- [x] (2026-10-08) Archived the completed directory plan and saved this active plan.
- [x] (2026-10-08) Probed local file creation, Git, and module-based browser calculation in Codex. Actual Work discovery remains unverified.
- [x] (2026-10-08) Implemented package, shared guidance, starter, deployment template, and five workflow skills.
- [x] (2026-10-08) Bundled Campus Designer from its canonical source and invoked it from Build.
- [x] (2026-10-08) Passed 18 browser fixture checks, detected/corrected an intentional formula error, and passed nine Git/publication boundary checks.
- [x] (2026-10-08) Integrated listing, regenerated catalogs, inspected desktop/narrow rendering and keyboard copy, and passed repository/Claude checks and two isolated CLI installations.
- [ ] Complete actual Work fresh-chat trials and fresh macOS/Windows setup.
- [ ] Complete authorized live GitHub publication.
- [x] (2026-10-08) Recorded candidate readiness, independent review corrections, and outstanding release gates in evidence/browser-app-builder/.

## Surprises & Discoveries


The catalog already discovers multiple skills. Create Your Own's teaching approach transfers, but its Python packaging script and course-repository destination do not.

Existing uncommitted work modifies `site/config.json`, both generated catalogs, and adds `.claude/`. Preserve it. The user removed grill-me from the featured list; retain that ordering.

The current host has Git 2.50.1, Node 22.19.0, Python, Claude Code 2.1.86, and Codex CLI 0.145.0. A disposable preview using an existing runtime displayed `PASS: browser module and calculation` in the in-app browser. This is Codex capability evidence, not clean-machine or ChatGPT Work acceptance.

Published Git history includes files omitted from dist. Protect source and evidence before the first commit. Documentation changes do not invalidate calculations; Git comparisons against tested source identify relevant changes.

Independent implementation review found that comparing a checkpoint directly to the working tree can miss opposing staged and unstaged edits. Separate committed, staged, and unstaged comparisons now detect this case; the regression exercise passes. Setup rerun checks now use the existing app's interaction, and Deploy creates an authorized repository before configuring its Pages settings.

The browser viewport override did not resize the document, so rendered responsive checks used explicit 390px and 1440px iframe viewports. The optional skill-author validator could not run without PyYAML; no dependency was installed to support it. Repository/Claude checks and actual CLI installations passed independently.

## Decision Log


Decision (2026-10-08): Use browser-app-builder with five independently invocable workflow skills. Students may resume or repeat a stage.

Decision (2026-10-08): No mandatory student Python/Node; existing course maintainer tooling remains unchanged. Use host preview tools or existing runtimes, and report missing preview capability explicitly.

Decision (2026-10-08): Public/synthetic material only in projects and evidence; student-approved public Git attribution is the explicit exception. Never invent an identity.

Decision (2026-10-08): Add only missing starter files to existing folders. Preserve plans, host files, history, configuration, and unrelated remotes; resolve collisions before replacement.

Decision (2026-10-08): Record evaluated commit and compare application, tests, workflow, and executable tooling through Git. Documentation-only commits need no retest; no separate digest mechanism.

Decision (2026-10-08): Missing external environments leave release gates open, not fabricated or indefinitely confused with candidate implementation.

Decision (2026-10-08, user steering): Bundle the former Duke Designer, now Campus Designer, and have Build use it for a shared Duke look. Generate the bundled copy from `plugins/campus-designer/skills/campus-designer/` during the catalog build, check equality, and never maintain a second authored copy. This replaces the earlier neutral-styling default. Public brand guidance does not authorize institutional marks or affiliation claims.

## Outcomes & Retrospective


Implemented a locally verified 0.1.0 pilot candidate with five workflow skills and the generated canonical designer. Two isolated CLI installations, 18 browser calculation cases, nine Git/publication boundaries, and repository/Claude checks passed. A deliberate pricing error caused four failures and passed after correction. The independent instruction review's three findings were resolved. Evidence and reproducible fixtures are in evidence/browser-app-builder/.

The final simplification pass retained one shared workflow reference, one freshness procedure, and one authored designer source. No initializer, generic app packager, policy analyzer, or student runtime dependency was added. The canonical designer's full resource tree is bundled so its internal references remain portable.

Actual Work installation and fresh-chat trials, fresh-machine macOS/Windows setup, and authorized live publication remain incomplete. Maintainer fixtures and instruction reviews do not substitute for those gates. No public deployment or student outcome is claimed.

## Context and Orientation


Work from `/Users/jordan/Projects/decision-999`. Read create-your-own's interview, testing, and portability references. Leave its behavior unchanged. Create `plugins/browser-app-builder/` containing plugin.json, README, one shared workflow reference, assets/starter, a Pages workflow template, and five skill entrypoints: setup-browser-app, plan-browser-app, build-browser-app, evaluate-browser-app, deploy-browser-app. Names match folders. Package-local links must resolve after installation. Write generated projects outside the installed plugin.

The generated sixth skill, campus-designer, carries its full references/assets from the canonical package. Build reads identity, color, typography, web, and review references. Keep Duke navy, approved type choices, accessible layouts, no unauthorized marks, and no implied endorsement. Use system fonts or licensed local assets, never remote font requests.

Evidence lives in `evidence/browser-app-builder/`. `scripts/build.py` generates catalogs, Claude manifests, designer bundle, and site output. `scripts/check.py` checks current generated files and packaging boundaries. Do not hand-edit generated files. Preserve directory layout and featured ordering.

## Plan of Work


### Milestone 1: Capabilities and handoffs


Probe file writing, Git, JavaScript-module preview, and browser test inspection in a disposable folder. Attempt isolated host installation/discovery. Distinguish Codex checks from Work desktop validation. A preview must serve app and test files, support modules, and allow browser inspection. Prefer host tools; existing runtimes are permitted, but no runtime installation fallback. Missing capabilities stop only dependent work.

Use PLAN.md for scope/model/examples/acceptance; README.md for usage/limits; DECISIONS.md for choices; SETUP.md for actual tool invocations and preview; EVALUATION.md for results and tested commit; DEPLOYMENT.md for URLs and published commit. Use app/ for publication sources, tests/ for browser checks, .github/workflows/ for publication, and ignored dist/ for generated output. Create substantive artifacts only. Every skill reads existing files; a plan's existence is not student agreement, and stage routing is not publication permission.

### Milestone 2: Setup


Detect folder access, command execution, Git, and preview/browser tools. Reuse Git. Official missing-Git routes: Apple's Command Line Tools on Mac; Git WinGet package or official installer on Windows. Students handle OS prompts. Verify installation in a fresh invocation; do not infer success from installer messages. Do not install Homebrew, WSL, Python, Node, or an editor. Do not bypass device policy.

Record verified invocations without secrets. Copy starter using file tools for empty folders. For existing folders add missing files only, preserving PLAN.md and host files; explain collisions before replacement. Avoid enclosing Git repositories. Configure approved attribution locally after explaining public history. If attribution is deferred, initialize without commits and mark history incomplete.

Ignore generated/local-input files before staging. Public/synthetic source, fixtures, reports, and screenshots only; transient browser imports never become evidence. Inspect staged contents before each commit. Acceptance: starter preview and initial revision without student-entered commands; reruns preserve work.

### Milestone 3: Plan and Build


Interview for user, decision, input/output, domain judgment, and correctness. Narrow scope and reshape backend/API requests into bundled data or local imports. Record assumptions, units, exclusions, expected-result sources, boundary behavior, and acceptance. For simulations explain seeds as inputs making random runs reproducible. Confirm consequential choices.

Build from the agreed plan, using bundled Campus Designer. Separate calculations from interface code when needed for tests. Plain HTML/CSS/JavaScript; no frameworks, package managers, backend, or build system. Prefer native capabilities; justified libraries must be pinned, licensed, and local. Relative paths and no server routing. Include units, errors, keyboard controls, and narrow layouts. Run initial cases and inspect rendered output. Make meaningful reviewed commits; bring material scope/model changes back to the student. No generic packaging script: app/ is publishable source. Acceptance: fresh-chat Build succeeds from artifacts and honestly distinguishes basic checks from Evaluate.

### Milestone 4: Evaluate


Expected answers come from hand calculations or independently justified references, not the app output. Use tests/index.html with visible results and plain JS modules importing actual model functions. Execute in the existing browser preview without installing a runtime or framework. Check meaningful boundaries, malformed inputs, units, rounding, scale, invariants, seeds, nonrandom limits, and justified statistical tolerances.

Commit source and tests before evaluation. Record tested commit and relevant paths: app/, tests/, .github/workflows/, plus executable tooling. Require clean tracked state and no untracked/ignored relevant source. Compare relevant paths against the checkpoint; documentation-only commits may follow. Preserve failed rounds. Fix through Build, revisit model through Plan, rerun affected checks, update checkpoint. Acceptance: detect intentional formula defect; docs-only commit preserves applicability; changed source invalidates it.

### Milestone 5: Deploy


Resolve failed/stale checks. Guide GitHub signup/sign-in/settings with available browser tools; student handles credentials and verification. Reuse authorized tools/authentication. GitHub CLI is optional only when needed. Establish account/repo/public visibility, respecting existing authorization. Review source, reports, attribution, and history before pushing; deleting latest sensitive files is insufficient.

Add official Actions template before final checkpoint; refresh evaluation. Workflow runs on main, verifies app/index.html, copies app/ into dist/, uploads only dist/, and deploys Pages. Minimal permissions; shell copy, no app build runtime. Static packaging is not numerical verification. Compare source to evaluated checkpoint before publishing; check uncommitted and untracked files.

Create/push only authorized repo. Wait for deployment matching pushed commit, open live app, verify repository-path assets, main interaction, known calculation, and source link. Record published commit separately. Exercise an ordinary update. No course-directory trial publication. Missing live authorization leaves this gate unverified.

### Milestone 6: Verify and integrate


Use synthetic pricing and inventory examples. Exercise stages and fresh-chat handoffs where available; keep deterministic fixture checks distinct from real student trials. Save prompts, fixtures, outputs, environments, and reproduction instructions outside installed package. Never copy secrets/caches/personal imports/generated output.

Test preservation, local Git settings, freshness, package boundaries, module loading under a repository path, and designer-bundle consistency. Version 0.1.0, Development category, instructor-built pilot language, five usable prompts, and evidence-backed results. No invented adoption or compatibility claims. Update MAINTAINING and VALIDATION; preserve site identity/config and create-your-own.

Review surrounding code and simplify. Remove repeated rules, unused assets, wrappers, and unnecessary scripts. No general JS policy analyzer: inspect source and observe actual browser behavior, recording limits.

## Concrete Steps


Use disposable student folders and record actual preview URLs. From the course repository run:

    python3 scripts/build.py
    python3 scripts/check.py
    claude plugin validate .
    python3 scripts/serve.py
    git diff --check

These are maintainer commands, never student prerequisites. Expect current catalogs/bundled designer, valid manifests, clean build and boundary checks. Inspect new listing at desktop/narrow widths, keyboard and copy behavior, evidence links, and examples. Commit generated files with feature changes without including unrelated config edits. Publish directory only when authorized through main Actions.

## Validation and Acceptance


Pricing fixture: price 20, cost 12, quantity 100, fixed cost 500 gives profit 300; continuous break-even 62.5, whole-unit 63; zero contribution margin handled. Inventory fixture: stock 10/demand 3 leaves 7/unmet 0; demand 12 leaves 0/unmet 2. Same seeds reproduce random output, not proof of model accuracy.

Check empty and pre-populated folders, interrupted setup, configured Git, missing Git/preview, managed denial, and conflicts. Challenge login/API/secret/confidential requests without storing sensitive material. Check public staged content, source/test/workflow freshness including untracked files, app-only publication, and no observed remote requests. Do not claim universal isolation from observation.

Candidate acceptance means implemented package and passing available local checks. Release gates additionally require actual Work installation and fresh-chat workflow, fresh macOS/Windows installation, and authorized GitHub Pages deployment. Keep unavailable gates open and narrow claims accordingly.

## Idempotence and Recovery


Preserve files/configuration, resolve collisions, and use ordinary commits. Never rewrite history or unrelated remotes automatically. Preserve failed evaluation rounds. Inspect existing repos/runs before deployment retries to avoid duplicates. Stop publication for sensitive history and explain remediation. Stop trial servers; retain only sanitized evidence; preserve sibling sources.

## Artifacts and Notes


Record trial prompts, public fixtures, versions, tested/deployed commits, browser results, and reproduction steps. Screenshots show actual results. No full release gate has passed.

Revision (2026-10-08): Saved approved implementation plan and incorporated user request to package canonical Campus Designer and use it in Build. Generated designer copies replace the earlier neutral default without introducing a second maintained skill source.

## Interfaces and Dependencies


Five workflow skills and one generated designer skill use the existing manifest format. No schema change. Handoffs are readable files. Git provides history; host tools provide editing/preview/testing. Optional existing runtimes are not required installations. Apps use HTML/CSS/JS and optional licensed local libraries. GitHub Actions publishes static files. Course maintainer Python tooling remains separate.
