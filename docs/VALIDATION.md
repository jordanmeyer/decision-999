# Validation record

Verified on 2026-10-06 with Codex CLI 0.145.0, Python 3.9 locally, Python 3.13 in GitHub Actions, and the in-app browser. Checks below are scoped evidence, not a claim of full accessibility certification.

## Published delivery

Public repository: https://github.com/jordanmeyer/decision-999, default branch `main`.
Website and repository homepage: https://jordanmeyer.github.io/decision-999/. No inherited custom-domain redirect occurred. Pages settings confirmed **GitHub Actions** as the publishing source.

[Deployment run 37510840758](https://github.com/jordanmeyer/decision-999/actions/runs/37510840758) succeeded for commit `520cf5c93d7ab4484fde82f557edf89d873cdf8c`, including package checks, build, upload and deploy. The final documentation commit also triggers the same workflow; its status is visible in repository Actions. The initial run failed on a repository-relative package README link; it was replaced with an absolute repository URL before the successful run.

The live page was rendered and inspected, not just fetched. Every deployed file (HTML, CSS, JavaScript, three fonts and two licenses) was fetched and byte-compared with a build of a clean Git clone. All eight matched. The neutral README installation anchor, source link, and contributor guide resolve to the intended public resources.

## Plugin completeness and portability

All 16 original skill files are present: SKILL.md, 11 text references, three reference diagrams, and CSS tokens. Only SKILL.md received an added paragraph about installed-resource paths, output placement and host tool prerequisites. The original capabilities, references, source notices, limitations and progressive disclosure are preserved. All 517 files in the sibling source tree still match the pre-copy SHA-256 inventory, including the file set itself.

The portable root manifest and catalog were accepted by CLI 0.145.0; no compatibility manifest was needed. Two distinct fresh Codex configurations were used, both with working directories outside the source projects:

- Local installation: `/private/tmp/decision-999-local-_9yjlkm7/home/plugins/cache/decision-999/duke-designer/local`.
- Published installation: `/private/tmp/decision-999-published-w7xr58e0/home/plugins/cache/decision-999/duke-designer/local`.

The published test registered `jordanmeyer/decision-999` from scratch with `alreadyAdded: false`. Marketplace and plugin JSON both reported `sourceType: git` and `source: https://github.com/jordanmeyer/decision-999.git`. The fetched checkout was `0f4be291755abf4b173b1dfa7c57da05b3fd3af7`; subsequent package change only repaired its README evidence URL. Catalog source `local` correctly resolves inside that fetched repository. CLI cache versions for these catalog entries report `local`; the actual manifest and displayed release version are 0.1.0.

Verified commands:

```sh
codex plugin marketplace add jordanmeyer/decision-999
codex plugin add duke-designer@decision-999
codex plugin marketplace list --json
codex plugin list --marketplace decision-999 --available --json
```

A fresh session invoked `$duke-designer` from the installed published package. Its command log shows successful reads of installed SKILL.md, identity, color, typography, web, review, and CSS tokens under the published cache path above. It created `workshop.html` and `evidence.md` in the external `work/` directory, with no reads from either original project. The parent rendered the generated workshop page successfully at desktop width; it used neutral content, no logos, bundled palette and disclosed system-font fallbacks. This smoke output is not presented as a published website example.

The first session was prevented from reading files by nested macOS sandbox creation (`sandbox_apply: Operation not permitted`). Retrying the outer launch outside the parent sandbox while retaining the child workspace sandbox succeeded. The normal user configuration was not modified. A temporary copy of the existing login used by the isolated session was removed after completion; no credentials or raw session logs were committed.

## Website behavior and branding

Rendered at 1440px desktop and 390px/320px narrow widths, with no horizontal page overflow. The hero, card, detail, installation and footer content remain readable and stack on narrow screens. Enlarged text at 200% (32px root) was inspected at desktop width without overflow. Fonts loaded from the project path. No animation is present, so reduced-motion preferences introduce no special state.

Keyboard Tab reached the skip link with a visible solid focus outline. Anchored navigation and detail links worked. Enter and Space activated the copy button; the live page announced success and retained focus. A disposable preview fixture simulated a rejected clipboard promise and verified the manual-copy error message. Fixtures were removed by rebuilding and were never committed or deployed. No browser warnings or errors were reported on the actual site.

Foreground/background choices use exact source colors. White/navy is 14.76:1, graphite/white 5.74:1, navy/warm background 13.76:1, and navy/white 14.76:1. Links retain underlines where needed, and focus uses a navy/white two-color treatment. A source, accessible-tree and generated-text review found zero case-insensitive restricted-name matches in the website. The rendered page has no images, logos, marks, favicon artwork, or social-preview images. The example task is explicitly labeled illustrative.

## Reproducibility and independent review

`python3 scripts/build.py` and `python3 scripts/check.py` pass locally and in a clean checkout with no sibling source. Focused checks reject missing neutral presentation, restricted website copy, escaping package paths, and CSS leaks. They verify all bundled Markdown references, deployed asset links and anchors, and automatic rendering of a second package from only a catalog entry plus presentation metadata, including its actual 2.3.4 test version. The second package exists only in a temporary fixture.

An independent reviewer checked source-skill fidelity, installed paths and resources, build boundaries, workflow permissions/branch conditions, the rendered live site, asset equality, public repository/homepage, successful exact-commit deployment, and fresh-session logs. The escaping README link was the only blocking finding and was resolved. No remaining implementation blockers were found. A separate simplification pass retained the standard-library build, plain page and single copy handler; no additional framework, service, registry, compatibility manifest or decorative asset was needed.

## References

[Portable packaging](https://developers.openai.com/plugins/build/plugins), [CLI commands](https://learn.chatgpt.com/docs/developer-commands?surface=cli), [Codex state isolation](https://learn.chatgpt.com/docs/config-file/environment-variables), and [GitHub Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) were checked on 2026-10-06. Action releases verified against official repositories: checkout 7.0.1, setup-python 7.0.0, configure-pages 6.0.0, upload-pages-artifact 5.0.0, deploy-pages 5.0.1.
