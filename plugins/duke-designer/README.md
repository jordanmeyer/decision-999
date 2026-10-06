# Duke Designer

Version 0.2.0. The complete `duke-designer` skill: Duke's public brand guidance for webpages, presentations, documents, and visual materials. It is an independent, instructor-built example. It is not an official Duke tool and grants no permission to use Duke marks.

## Install

Claude on the web or desktop: **Customize › Plugins › Add › Add marketplace**, enter `jordanmeyer/decision-999`, then add the plugin from **Discover**.

Claude Code:

```sh
claude plugin marketplace add jordanmeyer/decision-999
claude plugin install duke-designer@decision-999
```

**ChatGPT desktop · Work mode.** With the Codex CLI installed on the same computer, register the catalog:

```sh
codex plugin marketplace add jordanmeyer/decision-999
```

Restart ChatGPT desktop, open **Plugins Directory**, choose **Build with AI**, and install Duke Designer. Start a new chat. This is the local desktop route described in the [official setup guide](https://developers.openai.com/plugins/build/plugins#build-your-own-curated-plugin-list).

**Managed ChatGPT workspace.** A workspace admin opens **Admin › Plugins › Add › Import marketplace**. Use `https://github.com/jordanmeyer/decision-999` as Source, leave Path and Branch blank, and authorize GitHub. Review the plugins and set them to **Available** or **Installed**. Members install from their workspace's **Plugins**, then start a new chat. See the [workspace admin guide](https://learn.chatgpt.com/docs/enterprise/plugin-management). These routes require the corresponding desktop or workspace plugin surface; an arbitrary GitHub catalog cannot be assumed installable in an ordinary ChatGPT web chat.

Codex CLI:

```sh
codex plugin marketplace add jordanmeyer/decision-999
codex plugin add duke-designer@decision-999
```

Start a new session after installing. Ask in plain language, for example the listing's example prompt:

> Use duke-designer to create a one-page website for a fictional Duke symposium on AI and leadership, with an agenda, speaker section, and working demonstration registration action. Clearly label all event details and speaker personas as fictional; claim no university affiliation, sponsorship, or endorsement. Use no institutional logos. Save a complete local webpage with index.html and any local assets. Inspect the rendered page on desktop and mobile, including keyboard interaction, 320px reflow and 200% text enlargement.

To call the skill directly, use `/duke-designer:duke-designer` in Claude or `$duke-designer` in Codex.

## Contents and prerequisites

`skills/duke-designer/SKILL.md` is the entry point. It links to 11 text references, three instructional PNG diagrams, and an optional CSS token file. Reference diagrams are not production logos and must not be cropped into output. Source URLs, access dates, limitations, and notices are in `references/sources.md`.

The skill supplies guidance only. It uses the agent's own tools to create and render files and bundles no browser, document renderer, production marks, photography, or fonts. Restricted official templates need legitimately supplied access. Fonts must be obtained under their own licenses.

`plugin.json` follows the [Agent Plugins](https://agent-plugins.org/specification) format. Its `extensions` hold the directory listing. `.claude-plugin/plugin.json` is generated from it by the repository build for Claude; do not edit it by hand.

## Evidence

The listing reuses the October 2, 2026 Codex builder/reviewer exercise from the “Review design skill” chat. Three fictional webpages received independent review and corrections: the event passed in round 3, research in round 2, and student organization in round 2. Five implementation defects were resolved across those artifacts.

These are final passes after iterative work, not a one-shot success rate, repeated-generation benchmark, model comparison, or accessibility certification. No cost or timing result is claimed. No new Claude generation or API evaluation is required.

Read [EVIDENCE.md](EVIDENCE.md) for the exact reports, reviewed source hashes, unchanged final screenshots, limitations, and commands to repeat browser checks on the preserved source. The listing's fictional AI and leadership symposium prompt restates the original brief; it is not a verbatim transcript or a promise of identical output. The downloadable single-file event example packages the reviewed source and is identified as a derivative.

## Portability and provenance

Copied from the complete design skill supplied with the project, preserving its organization and references checked on 2026-10-02. The portable skill excludes source-repository scripts, caches, credentials and unrelated projects. Separately, the package includes selected reviewed examples and their evidence under `assets/evidence/`, with provenance and font licenses. The only instruction edit is in `SKILL.md`: it resolves bundled links relative to the installed skill and writes artifacts into the user's project, not the plugin. The skill has no runtime dependency on the original directory, author-specific absolute paths, or escaping symlinks. Historical review reports retain their original context; the optional reproduction scripts use an installed Playwright package and Google Chrome, as documented in EVIDENCE.md.

0.2.0 adds directory listing metadata, generated Claude manifests, real screenshots, and preserved Codex review evidence. The unused Claude generation runner was removed. The skill itself is unchanged.
