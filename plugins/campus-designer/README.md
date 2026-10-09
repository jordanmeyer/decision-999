# Campus Designer

Version 0.3.2. The complete `campus-designer` skill: Duke's public brand guidance for webpages, presentations, documents, and visual materials. It is an independent, instructor-built example. It is not an official Duke tool and grants no permission to use Duke marks.

## Install

Claude on the web or desktop: **Customize › Plugins › Add › Add marketplace**, enter `jordanmeyer/decision-999`, then add the plugin from **Discover**.

Claude Code:

```sh
claude plugin marketplace add jordanmeyer/decision-999
claude plugin install campus-designer@decision-999
```

Codex (ChatGPT):

```sh
codex plugin marketplace add jordanmeyer/decision-999
codex plugin add campus-designer@decision-999
```

Start a new session after installing. Ask in plain language, for example the listing's example prompt:

> Use campus-designer to build a one-page website for our spring symposium on AI and leadership. Use the agenda and speaker bios I’ve attached, add a registration button that links to our sign-up form, and make sure it looks good on phones.

To call the skill directly, use `/campus-designer:campus-designer` in Claude or `$campus-designer` in Codex.

## Contents and prerequisites

`skills/campus-designer/SKILL.md` is the entry point. It links to 11 text references, three instructional PNG diagrams, an optional CSS token file, and a local EB Garamond/Open Sans font bundle with OFL notices. Reference diagrams are not production logos and must not be cropped into output. Source URLs, access dates, limitations, and notices are in `references/sources.md`. `assets/` holds the two listing screenshots and the directory card image.

The skill uses the agent's own tools to create and render files. It bundles EB Garamond 400 and Open Sans 400/600 normal styles under the SIL Open Font License, with a local CSS loader and retained notices. It includes no browser, document renderer, production marks or photography. Restricted official templates need legitimately supplied access.

`plugin.json` follows the [Agent Plugins](https://agent-plugins.org/specification) format. Its `extensions` hold the directory listing. `.claude-plugin/plugin.json` is generated from it by the repository build for Claude; do not edit it by hand.

## Evidence

The listing reuses an October 2, 2026 Codex builder/reviewer exercise. Three fictional webpages (event, research initiative, student organization) passed independent review after one or two rounds of fixes, which resolved five implementation defects. This is iterative design review, not a one-shot success rate, model comparison, or accessibility certification. No cost or timing result is claimed.

The review reports, preserved sources and full-page captures, the single-file event example, provenance hashes, and reproduction steps live outside this package in the repository's [evidence record](https://github.com/jordanmeyer/decision-999/blob/main/evidence/campus-designer/EVIDENCE.md), so installs stay small.

## Portability and provenance

Copied from the complete design skill supplied with the project, preserving its organization and references checked on 2026-10-02. The package excludes source-repository scripts, caches, credentials, and unrelated projects. Package adaptations include: it resolves bundled links relative to the installed skill and writes artifacts into the user's project, not the plugin, its name and title are Campus Designer, and the bundled local fonts and practical web-review defaults address observed output defects. The skill has no runtime dependency on the original directory, author-specific absolute paths, or escaping symlinks.

0.2.0 added directory listing metadata, generated Claude manifests, and screenshots of reviewed output. 0.2.1 moves the review evidence out of the package (from 5.6 MB to about 0.5 MB) and replaces the full-page screenshots with display crops. 0.2.2 replaces the example prompt with an everyday request. 0.2.3 adds a card image from the student-organization example. 0.2.4 re-crops that image to 1440×810 so it ends above the page’s navy purpose band instead of cutting through its text. 0.3.0 renames the plugin and skill from Duke Designer (`duke-designer`) to Campus Designer (`campus-designer`) so the name does not suggest an official Duke tool; install it under the new name. The guidance itself is unchanged.

0.3.2 adds the licensed local font bundle and shared checks for numerical typography, heading wraps, action labels, compact layouts and dense-control targets. The new starter/theme render evidence is separate from the October 2 example review.
