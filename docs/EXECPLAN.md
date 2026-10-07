# Complete the plugin directory with existing reviewed examples

This ExecPlan is a living document maintained according to `~/.codex/PLANS.md`. Keep Progress, Surprises & Discoveries, Decision Log, and Outcomes & Retrospective current.

## Purpose / Big Picture


An MBA student should be able to send an employer a useful listing for a plugin they built. The faculty committee sees the same directory, initially populated by one instructor-built example, Duke Designer. Each listing explains the capability, shows actual output, offers installation steps, and identifies the evidence and limits behind its claims.

The current task fills the listing with existing results from the Codex chat “Review design skill,” not newly generated examples. Visitors will see the final fictional AI and leadership symposium at desktop and mobile sizes and can inspect the source and independent review history. Complete integration and report its checks, then verify publication under the original project scope. Do not alter the sibling source, call the Claude API, or create Claude generation sessions. The coordinating agent owns commits and publication.

## Progress


- [x] (2026-10-06) Implemented the directory layout and manifest-driven listing, with site identity in `site/config.json` and generated Codex/Claude catalogs.
- [x] (2026-10-06) Previously checked the layout in a scratch copy at 1440, 375 and 320 pixels with clearly marked placeholder images; checked keyboard copy success/failure, local Codex and Claude Code installation, and Claude manifest validation. These checks predate the real evidence import.
- [x] (2026-10-06) Located the completed October 2 Codex builder/reviewer exercise: event round 3 PASS, research round 2 PASS, student organization round 2 PASS.
- [x] (2026-10-06) Imported reviewed sources, final screenshots, reports and reproduction scripts into the plugin; documented provenance in `EVIDENCE.md` and `assets/evidence/provenance.json`.
- [x] (2026-10-06) Independently verified all 45 imported provenance entries and 12 final public-file hashes against the preserved records; the evidence importer confirmed all 517 sibling files unchanged and screenshot byte equality.
- [x] (2026-10-06) Replaced the unrelated pricing-workshop prompt and removed the unused Claude generation runner. Reconciled the package README and validation record with actual iterative Codex evidence.
- [x] (2026-10-06) Built and checked the integrated repository; catalogs, local manifest validation and whitespace checks pass.
- [x] (2026-10-06) Parent inspected real home/listing/example at 1440px and 320px, loaded images/fonts, checked keyboard copy feedback and example registration/reset focus; no browser errors or narrow overflow.
- [x] (2026-10-06) Completed independent asset/code review without blocking findings and documented fresh-install and clipboard-read limitations.
- [x] (2026-10-06) Published commit `78c67f55c61ee7bce7106ff67917d8551d18076b`; exact-commit deployment run 37531184205 succeeded. All 12 deployed files matched the build byte-for-byte; live home/listing/example and evidence links passed browser inspection without errors. Fresh installation was not repeated and remains a documented limitation, not a new evaluation requirement for this asset import.
- [x] (2026-10-06) Moved review evidence, full-page captures, the single-file example and its font license from `plugins/duke-designer/` to `evidence/duke-designer/` (package 5.6 MB → 0.4 MB); all 45 provenance hashes match at the new relative paths. Bumped the plugin to 0.2.1.
- [x] (2026-10-06) Replaced full-page listing screenshots with 1440×900 and 390×844 top crops; the originals sit at their review paths under `evidence/duke-designer/assessment/reviews/event/round-3/`.
- [x] (2026-10-06) Repositioned the home page as a marketplace for AI users who want MBA-level work done: value headline, example requests, featured listing, why MBA-built plugins differ, and a three-step how-it-works with install steps. Rewrote evidence as two plain results and a short method; trimmed the example prompt and limits; shortened the home title.
- [x] (2026-10-06) Build, `check.py` and `claude plugin validate` (catalog and plugin) pass; local desktop, 375px and 320px review found no horizontal overflow.
- [x] (2026-10-06) Site-wide polish pass against the design skill: section labels pass contrast on every surface, one section rhythm, navy listing header with framed screenshots, navy footer, word-boundary command wrapping, and a 1440×810 card image (plugin 0.2.4).
- [x] (2026-10-06) Added Create Your Own 0.1.0, the course scaffolding: a development guide (SOP to skill, cross-app portability, testing, packaging), templates, and `new_plugin.py`, which packages a skill folder for this site. It was packaged with its own script and installed in empty Claude Code and Codex settings. `site/config.json` `featured` now orders the home page and catalogs.

## Surprises & Discoveries


The original source already contains completed independent reviews, including failed rounds and corrections. Event findings E1/E2, research R1 and student-organization S1/S2 are implementation defects resolved by the final versions. The final reports identify exact source hashes; a PASS is a bounded verdict on that artifact, not general skill accuracy or a first-attempt success rate.

The source screenshots are full-page captures, 1440×3891 and 390×5693 pixels. Listing presentation must make their content understandable without misrepresenting them as newly generated images. The downloadable single-file event page embeds original CSS/font data and relocates the unchanged script; it needs packaging checks independently of the source's historical PASS.

Copper section labels measured 4.13:1 on Whisper Gray bands, below the 4.5:1 AA threshold the skill applies to small text; copper passes only on white (4.62:1). Labels are now navy with a copper rule.

Claude and Codex read different catalog locations. The build generates `.claude-plugin/marketplace.json`, per-plugin `.claude-plugin/plugin.json`, and `.agents/plugins/marketplace.json` from root plugin manifests. Earlier local Claude Code 2.1.86 validation required omitting unsupported top-level description/displayName fields. Keep these generated files owned by the build.

## Decision Log


- Decision: Keep employers as the primary audience and show the same site to the committee. Rationale: the listing is intended as a portfolio link; one instructor example honestly demonstrates the proposed course. Date: 2026-10-06, maintainer direction.
- Decision: Use “Build with AI” and “MBA course · number pending” from `site/config.json`. Rationale: the final course name and number are unknown. Repository and marketplace remain `decision-999`. Date: 2026-10-06.
- Decision: Permit the Duke Designer name and factual discussion of public guidance while prohibiting claims of affiliation or endorsement and institutional logos. Rationale: this is the maintainer's replacement for the original website-wide name prohibition. Date: 2026-10-06.
- Decision: Keep `plugins/<name>/plugin.json` as the sole listing source and generate host catalogs. Rationale: one package folder contains contributor data, while hosts receive the formats they understand. Date: 2026-10-06.
- Decision: Reuse the existing Codex assessment and retire the Claude generation runner. Rationale: the user explicitly requested the completed review results and no Claude API calls or generated Claude sessions. No new evaluation is needed to establish those historical findings. Date: 2026-10-06.
- Decision: Describe three reviewed examples, three final passes after revisions and five resolved defects, without cost, duration, model-comparison or one-shot claims. Rationale: these counts are supported by specific reports; broader performance metrics are not. Date: 2026-10-06.
- Decision: Retain final-source browser scripts with only their Playwright import adapted, and run reproductions in scratch copies. Rationale: this preserves useful repeatability without replacing historical evidence or introducing a new evaluation framework. Date: 2026-10-06.

- Decision: Present the home page to AI users looking for help with work they might hire an MBA to do, modeled on OpenAI's ChatGPT plugins page (value line, example requests, benefits, three steps). Rationale: maintainer direction; the distinctive claim is that these plugins carry a professional's method rather than connecting another app. The demo shows the intended future state. Date: 2026-10-06.
- Decision: Keep installable packages to what an install needs and put listing evidence in `evidence/<name>/`, which the build reads by convention for `EVIDENCE.md` and an optional `example.html`. Rationale: every install downloads the whole plugin folder. Date: 2026-10-06.

## Outcomes & Retrospective


The evidence gap is filled by existing work. The plugin now includes traceable sources and review history, and its documentation no longer asks the user to run an unrelated Claude generation benchmark. Current build, catalogs, local manifest validation and browser integration checks passed. Historical scratch installs are separate; fresh installation of this integration was not repeated due an environment-isolation constraint. The requested asset integration is complete and published: exact-commit deployment succeeded, every deployed file matched the local build, and live browser inspection confirmed the listing, screenshots, evidence link and example. No Claude API calls or generation sessions were used.

## Context and Orientation


The workspace is `/Users/jordan/Projects/decision-999`. `site/config.json` owns the display identity, course label, repository, marketplace name, canonical URL/base path and namespace for course listing fields. The current base path is `/decision-999/`.

`plugins/duke-designer/plugin.json` supplies package version, vendor-facing metadata and course listing fields. `extensions.com.openai.interface` contains the displayed title, prompt and screenshot paths. `extensions.io.github.jordanmeyer` contains the evidence counts, method, audience, limits and example path. The packaged skill remains at `skills/duke-designer/SKILL.md`; it is guidance for artifact creation, not a bundled renderer or permission to use institutional marks.

`plugins/duke-designer/assets/desktop.png` and `mobile.png` are display crops of the final event-review captures. Everything an install does not need lives in `evidence/duke-designer/`: the preserved sources, reports and full-page captures, the single-file `example.html`, and `EVIDENCE.md`, which describes scope, provenance and reproduction. The original source at `/Users/jordan/Projects/duke-designer` is read only. It is not needed to build the directory.

`scripts/build.py` reads package manifests, generates host catalogs and renders `site/layout.html`, `site/home.html` and `site/plugin.html` into ignored `dist/`. `scripts/check.py` checks clean builds and package/site boundaries. `scripts/serve.py` previews the configured base path. The existing GitHub workflow deploys `dist/` from main. The coordinating agent owns publication and must record the new exact-commit outcome.

## Plan of Work


### Milestone 1: Reuse exact reviewed evidence


This milestone is complete. Preserve the event round-3, research round-2 and student-organization round-2 sources, reports and checks. Keep their prior failed rounds so the iterative process is visible. Verify copied hashes against provenance and the final-verification record. The current prompt must describe the fictional Duke AI and leadership symposium, agenda, speakers, demonstration registration and rendered review. It restates the source brief; do not claim it is an exact original transcript.

### Milestone 2: Integrate and inspect the listing


This milestone is complete; current results are recorded in `docs/VALIDATION.md`. Build using the real images and evidence fields. Validate generated catalogs and local links, then inspect both the home page and `/decision-999/plugins/duke-designer/` at desktop and 320/390px widths. Follow the evidence and example links. Check the single-file example's local loading and demonstration registration. Verify that counts and method text describe iterative review and that neither page implies institutional endorsement. Test keyboard copy and its failure feedback. Record observed results in `docs/VALIDATION.md`, distinguishing historical source review from current integration checks.

### Milestone 3: Publication and handoff


This milestone is complete; deployment and live checks are recorded in `docs/VALIDATION.md`. Review surrounding code and documentation for stale pricing-workshop prompts, removed runner references, duplicate registries and unsupported benchmark claims. Keep the standard-library build and plain browser implementation. Report completed local checks and remaining limits. The coordinating agent should publish through the existing main-branch workflow, verify the exact pushed commit and live URLs/assets, and record the deployment. Fresh remote installation remains blocked by the current isolation constraint; do not report it as passed or reuse old installation results as new proof.

## Concrete Steps


From `/Users/jordan/Projects/decision-999`, run:

    python3 scripts/build.py
    python3 scripts/check.py
    claude plugin validate .
    python3 scripts/serve.py

The first two commands should report a completed listing/catalog build and passing focused checks; the Claude command validates files locally and should report validation passed. It is not a generation session or API evaluation. Open `http://localhost:8000/decision-999/` and `http://localhost:8000/decision-999/plugins/duke-designer/` for browser checks.

For optional repeated checks of the historical source, follow the scratch-copy commands in `evidence/duke-designer/EVIDENCE.md`. Those scripts inspect existing pages using Node.js, Playwright and Google Chrome, generate new screenshots/check records only in scratch space, and make no model calls. They are unnecessary merely to establish that the retained historical reports say PASS.

## Validation and Acceptance


Accept local integration when clean build/check and local manifest validation pass; real images, examples and links load; desktop/narrow layouts remain readable without horizontal page scrolling; and keyboard actions and copy feedback work. The listing must accurately identify all three final review rounds and its fictional instructor example. The preserved public-file hashes must match the final reports. Verify that no source-tree changes were made and that no Claude generation occurred. Do not describe local work as published until the new deployment and live checks succeed.

## Idempotence and Recovery


Build regenerates `dist/` and catalogs; do not hand-edit those generated files. Repeating checks must not change the preserved evidence. Use a disposable scratch copy for browser reproduction so new results cannot overwrite the October 2 record. If a copied hash differs, recopy only the identified source file and update provenance only for an intentional documented adaptation. Never edit the sibling to make a test pass.

## Artifacts and Notes


Verified import output on October 6:

    Verified 45 provenance entries and all 12 final public-file hashes.

The final source verdicts are event round 3 PASS, research round 2 PASS and student organization round 2 PASS. These cover reviewed artifact versions after corrections, with exact matrices and limitations in each report. Historical deployment run 37510840758 belongs to the earlier neutral single-page release, not this directory redesign.

## Interfaces and Dependencies


Build and focused checks require Python 3.9+ standard library. Local host-manifest validation requires Claude Code but no model session. Optional reproduction requires Node.js, the Playwright package and installed Google Chrome; the skill itself has no dependency on those reproduction tools. No Claude API key, new generation runner, database or evaluation service is needed.

Revision note (2026-10-06): Reconciled the directory plan with the user's direction to reuse the completed Codex review exercise. Removed the blocked Claude-generation milestone, unrelated prompt and benchmark assumptions; separated completed local integration from coordinating-agent publication and retained the fresh-install limitation.

Completion note (2026-10-06): Published the reviewed directory and imported assets from main, verified exact-commit run 37531184205, all 12 deployed-file bytes and live rendered output. The requested work is complete; historical and current installation evidence remain explicitly separated.
