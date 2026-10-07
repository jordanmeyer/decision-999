# Duke Designer

Version 0.2.3. The complete `duke-designer` skill: Duke's public brand guidance for webpages, presentations, documents, and visual materials. It is an independent, instructor-built example. It is not an official Duke tool and grants no permission to use Duke marks.

## Install

Claude on the web or desktop: **Customize › Plugins › Add › Add marketplace**, enter `jordanmeyer/decision-999`, then add the plugin from **Discover**.

Claude Code:

```sh
claude plugin marketplace add jordanmeyer/decision-999
claude plugin install duke-designer@decision-999
```

Codex (ChatGPT):

```sh
codex plugin marketplace add jordanmeyer/decision-999
codex plugin add duke-designer@decision-999
```

Start a new session after installing. Ask in plain language, for example the listing's example prompt:

> Use duke-designer to build a one-page website for our spring symposium on AI and leadership. Use the agenda and speaker bios I’ve attached, add a registration button that links to our sign-up form, and make sure it looks good on phones.

To call the skill directly, use `/duke-designer:duke-designer` in Claude or `$duke-designer` in Codex.

## Contents and prerequisites

`skills/duke-designer/SKILL.md` is the entry point. It links to 11 text references, three instructional PNG diagrams, and an optional CSS token file. Reference diagrams are not production logos and must not be cropped into output. Source URLs, access dates, limitations, and notices are in `references/sources.md`. `assets/` holds the two listing screenshots and the directory card image.

The skill supplies guidance only. It uses the agent's own tools to create and render files and bundles no browser, document renderer, production marks, photography, or fonts. Restricted official templates need legitimately supplied access. Fonts must be obtained under their own licenses.

`plugin.json` follows the [Agent Plugins](https://agent-plugins.org/specification) format. Its `extensions` hold the directory listing. `.claude-plugin/plugin.json` is generated from it by the repository build for Claude; do not edit it by hand.

## Evidence

The listing reuses an October 2, 2026 Codex builder/reviewer exercise. Three fictional webpages (event, research initiative, student organization) passed independent review after one or two rounds of fixes, which resolved five implementation defects. This is iterative design review, not a one-shot success rate, model comparison, or accessibility certification. No cost or timing result is claimed.

The review reports, preserved sources and full-page captures, the single-file event example, provenance hashes, and reproduction steps live outside this package in the repository's [evidence record](https://github.com/jordanmeyer/decision-999/blob/main/evidence/duke-designer/EVIDENCE.md), so installs stay small.

## Portability and provenance

Copied from the complete design skill supplied with the project, preserving its organization and references checked on 2026-10-02. The package excludes source-repository scripts, caches, credentials, and unrelated projects. The only instruction edit is in `SKILL.md`: it resolves bundled links relative to the installed skill and writes artifacts into the user's project, not the plugin. The skill has no runtime dependency on the original directory, author-specific absolute paths, or escaping symlinks.

0.2.0 added directory listing metadata, generated Claude manifests, and screenshots of reviewed output. 0.2.1 moves the review evidence out of the package (from 5.6 MB to about 0.5 MB) and replaces the full-page screenshots with display crops. 0.2.2 replaces the example prompt with an everyday request. 0.2.3 adds a card image from the student-organization example. The skill itself is unchanged.
