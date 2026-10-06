# Validation record

Implementation in progress, 2026-10-06. This record distinguishes completed checks from pending publication evidence.

## Completed

The original 16-file skill was copied completely. The only edit to its guidance adds installed-path and output-location instructions. Source hashes were recorded before copying; final comparison is pending. All bundled relative Markdown references resolve inside the package. No source scripts or host-specific runtime dependencies exist.

Codex CLI 0.145.0 accepted the portable root manifest and catalog. An isolated local registration and installation succeeded from an external temporary working directory, using a fresh Codex home. Installed path: `/private/tmp/decision-999-local-_9yjlkm7/home/plugins/cache/decision-999/duke-designer/local`. Local cache identity reports `local`; the actual manifest version is 0.1.0. Normal user configuration was not modified.

`python3 scripts/build.py` and `python3 scripts/check.py` pass. Checks cover package identities, bundled reference paths, isolated builds with no sibling source, neutral text and filenames, local links/anchors, missing presentation rejection, path escape rejection, CSS text leak rejection, and automatic rendering of a second package with version 2.3.4. The second package exists only in temporary test fixtures.

The original palette uses #012169 navy, #00539B royal, #FCF7E5 warm background, #262626 body text, #666666 secondary text and #DAD0C6 rules. The site self-hosts EB Garamond 400 and Open Sans 400/600, obtained from Google Fonts with original OFL notices. No images, logos, social-preview artwork or favicon files are published. Examples on the page are explicitly illustrative prompts.

## Pending

Desktop/mobile visual and interaction checks, clean committed checkout build, successful exact-commit deployment, live URL/assets/links, published Git installation in a separate clean state directory, representative fresh session reading installed resources, independent final review, and final source hash comparison.

## References

[Portable packaging](https://developers.openai.com/plugins/build/plugins), [CLI commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli), [Codex state isolation](https://learn.chatgpt.com/docs/config-file/environment-variables), and [GitHub Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) were checked on 2026-10-06. Action releases verified against the official repositories: checkout 7.0.1, setup-python 7.0.0, configure-pages 6.0.0, upload-pages-artifact 5.0.0, deploy-pages 5.0.1.
