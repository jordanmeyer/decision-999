# Duke designer plugin

Version 0.1.0. This package contains the complete `duke-designer` skill: public Duke brand guidance for webpages, presentations, documents, and visual materials. It is an independent example, not institutional approval or permission to use a mark. The marketplace website calls this package **Brand Design Example**.

## Install and invoke

Use Codex with plugin commands (locally verified with CLI 0.145.0):

```sh
codex plugin marketplace add jordanmeyer/decision-999
codex plugin add duke-designer@decision-999
```

Start a fresh Codex session after installation. Invoke the actual skill as `$duke-designer`, for example:

> Use $duke-designer to create a neutral workshop overview in HTML. Apply the bundled colors and typography, use no logos, and label the page as an independent demonstration. Write the result into my current project.

Review the package before installation. Registering a marketplace and installing a plugin are separate actions. No MCP server or additional authentication service is included. Availability of repository marketplaces varies across Codex surfaces; the commands above target the CLI.

## Contents and prerequisites

`skills/duke-designer/SKILL.md` is the entry point. It links to all 11 textual references, three instructional PNG diagrams, and one optional CSS token file. All 16 original files are included. Reference diagrams are not production logos and must not be cropped into output. Source URLs, access dates, limitations and original notices remain in `references/sources.md`.

The skill supplies guidance. It uses the agent's existing artifact creation and rendering tools; it does not bundle a browser, slide/document renderer, production marks, photography, or fonts. A requested format may require tools such as a browser or document renderer on the host. Restricted official templates require legitimately supplied access or assets; they are optional for general work. Fonts must be obtained under their own licenses.

## Portability and provenance

Copied from the complete design skill supplied with the project brief, preserving its organization and references checked on 2026-10-02. No source-repository scripts, caches, examples, credentials or unrelated projects were copied.

The only instruction edit in 0.1.0 adds explicit installed-package path resolution and output placement: resolve bundled links relative to their containing file; write artifacts into the user's project, not the installed skill. There are no runtime dependencies on the original sibling directory, author-specific absolute paths, escaping symlinks, or mandatory host-specific helper commands. General brand guidance and all supported media remain intact.

See the repository's [validation record](../../docs/VALIDATION.md) for installation, smoke-test, and deployment evidence.
