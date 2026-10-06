# Validation record

Updated 2026-10-06. This record separates the imported October 2 Codex assessment, current local integration, and the earlier published release. None is a claim of full accessibility certification.

## Imported Codex review evidence

The current listing uses existing results from the Codex chat “Review design skill,” whose source artifacts are in the sibling `duke-designer` project. Separate builders made three fictional webpages and independent reviewers requested corrections until all three final versions passed:

| Artifact | Final verdict | Resolved implementation findings |
| --- | --- | --- |
| AI and leadership symposium | [Event round 3 PASS](../plugins/duke-designer/assets/evidence/assessment/reviews/event/round-3.md) | E1 narrow enlarged layout overflow; E2 unreadable enlarged registration labels |
| Responsible AI research initiative | [Research round 2 PASS](../plugins/duke-designer/assets/evidence/assessment/reviews/research/round-2.md) | R1 enlarged text escaped its navy panel |
| MBA AI/product student organization | [Student organization round 2 PASS](../plugins/duke-designer/assets/evidence/assessment/reviews/student-organization/round-2.md) | S1 control accessible name omitted visible label; S2 narrow enlarged layout overflow |

The counts are three reviewed artifacts, three final passes after revisions and five resolved implementation defects. They are not a first-attempt success rate, repeated-generation benchmark, model comparison or measure of general skill accuracy. No cost or timing result is claimed. No Claude API call or newly generated Claude session was used for this import; the unused generation runner was removed.

The original reports record Chrome 154.0.8037.97, desktop/mobile review, 320px reflow, doubled computed text and 200% root text, keyboard interactions, visible focus and relevant completion states. The exact matrix varies by artifact. These text-enlargement simulations are not a native-browser-zoom test, and the review does not certify screen-reader, physical-device or cross-browser behavior.

On October 6, a separate documentation review verified all 45 entries in [provenance.json](../plugins/duke-designer/assets/evidence/provenance.json) and all 12 public HTML/CSS/JavaScript/font hashes against the preserved [final-verification.json](../plugins/duke-designer/assets/evidence/assessment/final-verification.json). Every hash matched. The evidence importer also compared all 517 sibling files with the original inventory; all remained unchanged, and the two listing screenshots were byte-identical to the source captures. This is an import integrity check, not a new rendering verdict. The source reports preserve earlier failures and the exact versions their final passes cover.

The listing screenshots are unchanged final event-review captures. Its downloadable single-file example embeds original CSS and font data and relocates the unchanged script; it is a packaging derivative of the passed source, not a separately scored evaluation. The prompt describes the fictional Duke AI and leadership symposium and restates the original brief; it is not a verbatim original transcript or a promise of identical output. [EVIDENCE.md](../plugins/duke-designer/EVIDENCE.md) records these distinctions, optional scratch-copy browser checks and the retained evidence's limits.

## Current directory integration

Version 0.2.0 adds the directory listing, generated Claude manifests, real screenshots and existing Codex assessment evidence. The portable skill's instructions and resources are unchanged by this evidence import. Its guidance bundles no fonts or production marks; the separate demonstration artifacts include licensed Open Sans with OFL notices.

Before the real evidence import, scratch-copy checks recorded desktop/375px/320px layout inspection, keyboard copy success/failure, local installation with Codex CLI 0.145.0 and Claude Code 2.1.86, and passing Claude manifest validation. Those checks used marked placeholder images and do not prove the current real-image integration.

The integrated repository now passes `python3 scripts/build.py`, `python3 scripts/check.py`, local `claude plugin validate .` and whitespace validation. Generated catalogs are current. Claude validation only reads package files; no model generation session was created.

The parent inspected the actual home page, listing and packaged example at 1440px and 320px. No horizontal page overflow appeared at 320px. The real desktop/mobile images loaded at their expected 1440px/390px source widths, and fonts loaded. Keyboard Enter activated the listing's Codex copy button; it announced “Copied” through its status region and retained a solid visible focus treatment. The clipboard inspection tool returned empty, so this check establishes the reported UI success, not an independent comparison of clipboard bytes. The earlier disposable copy-failure fixture remains historical evidence and was not repeated for this integration.

In the packaged event example, keyboard selection of Online followed by Enter displayed the demonstration confirmation and moved focus to its heading. Reset restored focus to the selected Online radio. No real registration information was sent. No browser warnings or errors were recorded on the tested pages. Independent asset and code review found no remaining blocking finding.

Fresh installation was not repeated because of an environment-isolation constraint. The earlier 0.2.0 scratch-copy installation results above remain separate evidence and do not establish a fresh install of this integrated package. No new published deployment is claimed here; its commit, run and live checks must be appended after publication.

## Historical published release

The earlier neutral single-page release was published at [jordanmeyer.github.io/decision-999](https://jordanmeyer.github.io/decision-999/), with the public repository at [jordanmeyer/decision-999](https://github.com/jordanmeyer/decision-999). Pages used GitHub Actions and the repository homepage matched that address, without an inherited-domain redirect.

[Deployment run 37510840758](https://github.com/jordanmeyer/decision-999/actions/runs/37510840758) succeeded for `520cf5c93d7ab4484fde82f557edf89d873cdf8c`. Its eight deployed files matched a clean build. That release's desktop/narrow, keyboard/copy, branding and independent review checks passed. The latest earlier-release commit was `7127be81`, with [deployment run 37511700719](https://github.com/jordanmeyer/decision-999/actions/runs/37511700719). These facts apply to the earlier site, not the current directory redesign.

The earlier 0.1.0 package preserved all 16 original skill files, with only an installed-resource/output-location paragraph added to SKILL.md. Its recorded sibling inventory covered 517 unchanged source files. Two separate fresh Codex configurations verified local and GitHub marketplace installation. The published-source test reported `sourceType: git` and `https://github.com/jordanmeyer/decision-999.git`; a fresh session read SKILL.md, identity/color/typography/web/review references and CSS tokens from its installed cache and generated an external workshop artifact. These are historical portability checks, not fresh installation results for 0.2.0.

Any later publication of the redesigned directory must record its own commit and successful deployment run, rendered live URLs/assets, and fresh published-source installation results. Do not reuse the earlier run as evidence for uncommitted changes.
