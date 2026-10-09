# Validation record

Updated 2026-10-06. This record separates the imported October 2 Codex assessment, current local integration, and the earlier published release. None is a claim of full accessibility certification.

## Imported Codex review evidence

The current listing uses existing results from the Codex chat “Review design skill,” whose source artifacts are in the sibling `duke-designer` project. Separate builders made three fictional webpages and independent reviewers requested corrections until all three final versions passed:

| Artifact | Final verdict | Resolved implementation findings |
| --- | --- | --- |
| AI and leadership symposium | [Event round 3 PASS](../evidence/campus-designer/assessment/reviews/event/round-3.md) | E1 narrow enlarged layout overflow; E2 unreadable enlarged registration labels |
| Responsible AI research initiative | [Research round 2 PASS](../evidence/campus-designer/assessment/reviews/research/round-2.md) | R1 enlarged text escaped its navy panel |
| MBA AI/product student organization | [Student organization round 2 PASS](../evidence/campus-designer/assessment/reviews/student-organization/round-2.md) | S1 control accessible name omitted visible label; S2 narrow enlarged layout overflow |

The counts are three reviewed artifacts, three final passes after revisions and five resolved implementation defects. They are not a first-attempt success rate, repeated-generation benchmark, model comparison or measure of general skill accuracy. No cost or timing result is claimed. No Claude API call or newly generated Claude session was used for this import; the unused generation runner was removed.

The original reports record Chrome 154.0.8037.97, desktop/mobile review, 320px reflow, doubled computed text and 200% root text, keyboard interactions, visible focus and relevant completion states. The exact matrix varies by artifact. These text-enlargement simulations are not a native-browser-zoom test, and the review does not certify screen-reader, physical-device or cross-browser behavior.

On October 6, a separate documentation review verified all 45 entries in [provenance.json](../evidence/campus-designer/provenance.json) and all 12 public HTML/CSS/JavaScript/font hashes against the preserved [final-verification.json](../evidence/campus-designer/assessment/final-verification.json). Every hash matched. The evidence importer also compared all 517 sibling files with the original inventory; all remained unchanged, and the two listing screenshots were byte-identical to the source captures. This is an import integrity check, not a new rendering verdict. The source reports preserve earlier failures and the exact versions their final passes cover.

Through 0.2.0 the listing screenshots were the unchanged full-page event-review captures; 0.2.1 shows display crops of their tops and keeps the originals in the evidence folder. Its downloadable single-file example embeds original CSS and font data and relocates the unchanged script; it is a packaging derivative of the passed source, not a separately scored evaluation. Since 0.2.2 the listing’s example prompt is an everyday request rather than a restatement of the reviewed brief; the screenshots remain output of the reviewed brief. [EVIDENCE.md](../evidence/campus-designer/EVIDENCE.md) records these distinctions, optional scratch-copy browser checks and the retained evidence's limits.

## Current directory integration

Version 0.2.0 adds the directory listing, generated Claude manifests, real screenshots and existing Codex assessment evidence. The portable skill's instructions and resources are unchanged by this evidence import. Its guidance bundles no fonts or production marks; the separate demonstration artifacts include licensed Open Sans with OFL notices.

Before the real evidence import, scratch-copy checks recorded desktop/375px/320px layout inspection, keyboard copy success/failure, local installation with Codex CLI 0.145.0 and Claude Code 2.1.86, and passing Claude manifest validation. Those checks used marked placeholder images and do not prove the current real-image integration.

The integrated repository now passes `python3 scripts/build.py`, `python3 scripts/check.py`, local `claude plugin validate .` and whitespace validation. Generated catalogs are current. Claude validation only reads package files; no model generation session was created.

The parent inspected the actual home page, listing and packaged example at 1440px and 320px. No horizontal page overflow appeared at 320px. The real desktop/mobile images loaded at their expected 1440px/390px source widths, and fonts loaded. Keyboard Enter activated the listing's Codex copy button; it announced “Copied” through its status region and retained a solid visible focus treatment. The clipboard inspection tool returned empty, so this check establishes the reported UI success, not an independent comparison of clipboard bytes. The earlier disposable copy-failure fixture remains historical evidence and was not repeated for this integration.

In the packaged event example, selecting Online and submitting with keyboard Enter displayed the demonstration confirmation and moved focus to its heading. Reset restored focus to the selected Online radio. No real registration information was sent. No browser warnings or errors were recorded on the tested pages. Independent asset and code review found no remaining blocking finding.

Fresh installation was not repeated because of an environment-isolation constraint. The earlier 0.2.0 scratch-copy installation results above remain separate evidence and do not establish a fresh install of this integrated package. Publication and live verification are recorded below.

## Published directory

The directory and reviewed assets were committed as `78c67f55c61ee7bce7106ff67917d8551d18076b` and published from `main`. [Deployment run 37531184205](https://github.com/jordanmeyer/decision-999/actions/runs/37531184205) completed successfully for that exact commit on October 6. All 12 deployed files matched the local build byte-for-byte, including the home page, listing, both unchanged screenshots, self-contained example, scripts, stylesheet, fonts and licenses.

Live browser inspection confirmed the updated [home page](https://jordanmeyer.github.io/decision-999/) metadata and copy, the [plugin listing](https://jordanmeyer.github.io/decision-999/plugins/campus-designer/) with both expected screenshot dimensions, and the published evidence link. “Open the full page” navigated to the [self-contained example](https://jordanmeyer.github.io/decision-999/plugins/campus-designer/example.html), which rendered correctly. No browser warnings or errors were recorded. This completes the requested reuse and publication of the existing assessment assets; fresh installation was not repeated.

## Historical published release

The earlier neutral single-page release was published at [jordanmeyer.github.io/decision-999](https://jordanmeyer.github.io/decision-999/), with the public repository at [jordanmeyer/decision-999](https://github.com/jordanmeyer/decision-999). Pages used GitHub Actions and the repository homepage matched that address, without an inherited-domain redirect.

[Deployment run 37510840758](https://github.com/jordanmeyer/decision-999/actions/runs/37510840758) succeeded for `520cf5c93d7ab4484fde82f557edf89d873cdf8c`. Its eight deployed files matched a clean build. That release's desktop/narrow, keyboard/copy, branding and independent review checks passed. The latest earlier-release commit was `7127be81`, with [deployment run 37511700719](https://github.com/jordanmeyer/decision-999/actions/runs/37511700719). These facts apply to the earlier site; the directory deployment is recorded above.

The earlier 0.1.0 package preserved all 16 original skill files, with only an installed-resource/output-location paragraph added to SKILL.md. Its recorded sibling inventory covered 517 unchanged source files. Two separate fresh Codex configurations verified local and GitHub marketplace installation. The published-source test reported `sourceType: git` and `https://github.com/jordanmeyer/decision-999.git`; a fresh session read SKILL.md, identity/color/typography/web/review references and CSS tokens from its installed cache and generated an external workshop artifact. These are historical portability checks, not fresh installation results for 0.2.0.

Future changes must record their own relevant checks and deployment. The historical installation checks remain separate from the current integration and publication results.

## Curated collection wording update

On October 6, removed the public plugin submission section, navigation link and unused styles. The home page now says “Developed and tested by MBA students.” Metadata and the maintainer guide describe a curated collection; the current example retains its accurate instructor-built label. Build, catalog freshness, focused checks, local manifest validation and whitespace checks pass. Desktop and 320px browser inspection confirmed only Plugins/Install navigation, the requested lead, no submission content and no horizontal page overflow.

## Marketplace presentation and lean package (0.2.1)

On October 6, the review evidence, full-page captures, single-file example and its font license moved from `plugins/duke-designer/` to `evidence/duke-designer/`, so an install downloads about 0.4 MB instead of 5.6 MB. All 45 provenance entries were rewritten to paths relative to that folder and every SHA-256 still matches. The listing now uses 1440×900 and 390×844 crops of the top of each capture, made with macOS `sips`.

The home page was rewritten for AI users looking for help with work they would hire an MBA to do, following the structure of OpenAI's ChatGPT plugins page. Listing evidence now reads “3 of 3 example pages passed independent review” and “5 defects caught in review and fixed,” with a three-sentence method; the counts are unchanged. No model or API call was made.

`python3 scripts/build.py`, `python3 scripts/check.py`, and `claude plugin validate` on the repository and the plugin pass. Local browser review at 1440px, 375px and 320px found no horizontal overflow on the home or listing page.

## Compatible apps and install page

The home page shows a static, grayscale row of five logos (ChatGPT, Claude, GitHub, VS Code, Cursor) and an “and 6 more” link to `/install/`, which gives steps for all 11 apps: the ten on agent-plugins.org's compatible-clients page plus Claude. The data is in `site/clients.json`. The ten logos are the vendor-supplied `light.svg` files from agent-plugins.org and Claude's is the slate wordmark from agentskills.io, all downloaded with the maintainer's approval on October 6; none contains scripts or external references.

Install steps come from each app's documentation as read on October 6. Claude, Codex, GitHub Copilot, VS Code, Cursor (team marketplaces only) and Kiro document adding a GitHub repository; Copilot CLI and VS Code read our `.claude-plugin/marketplace.json`. OpenHands, Hermes Agent, OpenClaw, NanoClaw and Grok Bot install single plugin folders, so their cards point to the plugin folder and the app's setup guide rather than an unverified command. Only Claude Code and the Codex CLI are tested, and the page says so. Checked at 1440px, 375px and 320px with no horizontal overflow; all logos load.

## Plugin directory

`/plugins/` lists every plugin as a card with a search box (the `/` key focuses it) and category buttons built from each listing's `category`; the header's Plugins link, the home page's Browse plugins button, and listing breadcrumbs now lead there. Search matches the name, descriptions, category, developer, label, audience and keywords. Without JavaScript the cards still show and the search controls stay hidden. Checked locally: “brand guidelines” keeps Duke Designer, “comps” shows the empty state, Clear restores all and focuses the search, and the Design button sets `aria-pressed`. No horizontal overflow at 1440px, 375px or 320px on any page.

## About page

`/about/` is written for people deciding whether to use the plugins. It presents them as the result of the course and of the builders' industry experience: who builds them and the kinds of work they come from (the course outline's project areas), how every plugin is made (real problem with a baseline, sourced claims, tests on dozens of known-answer cases and red-teaming, publication with limits), a short note on the course and its data policy, and a call to install. It names no institution and uses the configured site name. Checked at 1440px, 375px and 320px with no horizontal overflow.

## Landing page design pass

The home page now opens with a full-width navy hero: a search box that hands its query to `/plugins/?q=`, and a chat-window illustration pairing the featured plugin's example request with its real desktop screenshot, captioned as an illustration. The featured card shows the phone screenshot instead, so the two images differ. New sections: example requests in six work areas with accents from the extended brand palette, line icons on the three “why” points, and a closing navy call to action; the footer now links every page. Card hover lift respects reduced-motion settings. Full-page captures at 1440px and 500px were reviewed; all five pages have no horizontal overflow at 320px.

## Install page design pass

Install cards now use each app's logo as the heading (its alt text is the accessible name), so the name is no longer repeated; Hermes Agent and Grok Bot, whose logos are icon-only, show their name beside the icon. A navy header holds an app picker linking to every app's steps. Apps that add the whole catalog get full cards with a “Tested” badge where applicable; the five that install one plugin folder share one command and a row of logo tiles linking to their setup guides (`folder: true` in `site/clients.json`). Every picker link resolves, each “Setup guide” link carries an app-specific label, and the home, install, and listing pages have no horizontal overflow at 320px.

## Home page order and headings

The home page now runs hero, compatible apps, featured plugin, how it works (with a link to the install page instead of Claude and ChatGPT install panels), why MBA-built, example requests, and the closing call to action. The hero illustration words the request as people say it (“Use the duke designer plugin to …”). Directory cards use the listing's optional `cover`; Duke Designer's is a top crop of the reviewed student-organization page, so the hero, card, and listing show different reviewed work. Two-sentence headings put each sentence on its own line, “Built by practitioners” and “Install the collection.” replace titles that wrapped awkwardly, and all headings use balanced wrapping. Full-page captures at 1440px were reviewed for the home, about, install, and listing pages.

## Card image and recolored panel

At the maintainer's request, the student-organization page's sample-session panel now uses Ginger Beer (#FCF7E5) instead of Dandelion; navy text on it is 13.76:1. The edit is recorded in `provenance.json` with the reviewed file's hash, the reviewer's capture and the sibling original are unchanged, and the card image was re-rendered from the edited page. Card images are now centered with equal padding instead of anchored to the bottom-right edge, which left a large empty area at mid-size widths (at 1106px: 73px above and below, 40px each side). Image URLs carry a content hash so replaced screenshots are not served from browser caches.

## Second landing page design pass

The header now stays visible on screens wider than 40rem and makes Install a button. The hero adds three facts (compatible apps, free to install, tested before listing), main sections carry section labels, “How it works” becomes numbered step cards on a gray band, sections alternate white and gray before the navy call to action, cards offer a direct Install button that opens the listing's install panel, and the footer adds the collection's description. Anchors clear the sticky header. Full-page captures at 1440px were reviewed, and every page has no horizontal overflow at 320px.

## Plugins, about, and install pages restyled

The plugins, about, and install pages now share the landing page's treatment: a navy page header (with the fact row on plugins and about), copper section labels, alternating white and gray sections, and a closing navy call to action. The directory's search box moved into the plugins header; search and category buttons appear only with JavaScript, and `?q=`, the empty state, Clear, category filtering, and the `/` shortcut were rechecked. About's expertise areas use the colored tiles and its four quality steps use numbered cards in a two-by-two grid so each title fits on one line. Full-page captures at 1440px were reviewed, and every page has no horizontal overflow at 320px.

## Header navigation

Install is no longer styled as a button in the header; Plugins, Install, and About are equal links, following the design skill's guidance to use links for navigation and to give selected states a non-color cue. The build marks the page's section with `aria-current` (`page` on the section page, `true` on a listing inside Plugins) and a navy underline beneath the link text, placed inside the white header so it stays visible above the navy page headers; hover shows a lighter underline and keyboard focus keeps the site's 3px ring. Checked on every page at 1440px, 375px, and 320px.

## Site-wide polish pass

A review of every page against the design skill's color, typography, web, and review references found one failure: copper section labels on Whisper Gray bands measured 4.13:1, below AA for small text. Labels are now navy (13.20:1 on gray) led by a short copper rule; the navy headers use the same device in Dandelion. Other changes:

- One section rhythm (`--section`, 3.5–5.5rem) replaces five ad-hoc paddings.
- The listing page gets the navy page header (breadcrumb, label, title, install button). Its screenshots overlap the header's lower edge in a browser-window frame (landscape) and a phone frame (portrait); the build sizes frames in a row by aspect ratio so they share a height (both 482px at 1440).
- Install commands wrap only between words, so `duke-designer@decision-999` never splits at its hyphen; copied text is unchanged.
- The footer is navy, with Directory and Project columns, a link to the Agent Plugins format, and a “Designed with the Duke Designer plugin” credit.
- The directory ends with a “More plugins every spring” tile, hidden while searching or filtering.
- The install lead no longer orphans “your app:”; a label introduces the app picker.
- The OpenClaw logo's canvas was trimmed of empty space (artwork unchanged) so it matches the other tiles.
- The card image was re-rendered at 1440×810 so it ends above the navy purpose band rather than cutting through its text (plugin 0.2.4).
- Unused `.status`, `.note`, `.install`, and `.listing-head` styles were removed.

Full-page captures at 1440px and 390px were reviewed for all five pages. No page overflows at 320px. Directory search, filtering, Clear, and the closing tile were exercised in the browser, and a real click on Copy produced exactly the two command lines. Build, `check.py`, and `claude plugin validate .` pass.

## Create Your Own

Create Your Own 0.1.0 is a scaffolding plugin. Its skill walks a student from an SOP or existing skill to a listed plugin. The agent does the file, terminal and git work while the student makes decisions and approves plain-language text. Its four references are the development guide (from SOP to skill, working across apps, testing, packaging and listing). It also has templates for a new skill, README and evidence record, and `scripts/new_plugin.py`. Run from the repository root, the script turns a skill folder (drafted in `drafts/<name>/`, which git ignores) into `plugins/<name>/` and `evidence/<name>/EVIDENCE.md`. It leaves the listing blank and the README and evidence record full of `TODO:` placeholders.

Before release the scaffolding was reviewed for MBA students, and several changes followed:

- **Order of work:** testing now copies the packaged skill into each app's personal skills folder, because `claude plugin validate` rejects a plugin folder until the build writes its Claude manifest.
- **Build messages:** the build now prints one-line messages that say what to fill in or add, names the file in JSON syntax errors, and requires text in results and screenshot descriptions.
- **README and TODOs:** the build now requires a README and refuses any README or `EVIDENCE.md` that still contains `TODO:`.
- **UTF-8:** the build, checks and script read and write UTF-8 explicitly, because Windows Python before 3.15 otherwise fails on curly quotes.
- **Front matter:** the script uses the build's exact front-matter rule, so a skill it accepts cannot fail the build on front matter.

After the last change, the plugin was packaged again from scratch with the final files and every test was rerun:

- The site's build, `check.py`, and `claude plugin validate` (catalog and plugin) pass.
- Six setup mistakes each stopped the script with a clear message, and none created a folder.
- A synthetic sample skill completed one item at a time drew 13 messages, one per run, until the build passed.
- The plugin installed from the working tree in Claude Code 2.1.86 and the Codex CLI 0.145.0 with empty settings.
- `check.py` now asserts that a freshly scaffolded plugin is refused until its listing is written.

No model was run; [the evidence record](../evidence/create-your-own/EVIDENCE.md) has the transcripts and limits.

`site/config.json` gains `featured`. Featured plugins appear on the home page in that order and come first in the directory and catalogs, so Duke Designer stays the home page's example. With two featured plugins the home page shows them side by side; a single featured plugin keeps the wide card. Card images are cropped to 16:9 from the top so cards line up whatever their screenshots' shape. A listing with one screenshot shows it at most 60rem wide. Captures at 1440px and 390px were reviewed for the home, directory and both listings.

## Footer

The navy footer merged with the navy call-to-action band above it, separated only by a royal hairline at 1.9:1, and left a dead middle between the brand and two link columns. It now sits on Hatteras, Duke's cool blue-gray, with navy text (11.79:1), graphite secondary text (4.59:1) and a Granite divider. Ginger Beer was tried first, but at that scale it read as a separate palette beside the site's navy, white and Whisper Gray. The brand block repeats the section-label device, a copper rule, above the site name in EB Garamond and its summary. Three equal link columns follow: Directory, Featured (built from `featured` in `site/config.json`) and Project. A bottom bar carries a colophon: a bar of nine Duke palette colors and the Duke Designer credit. “Back to top” targets the body, since a link to the sticky header does not scroll. Checked at 1440px, 390px and 320px (no overflow on any page); keyboard focus shows the site's 3px navy ring, and Back to top returns to the top.

## Card alignment

Cards in a row stretched to the tallest card's height, and the extra height went to the image panel, so a card with shorter text showed a taller gray panel and a lower title. The image row is now fixed, the text takes the remaining space, and the Install row sits at the bottom, so side-by-side cards share the same image, title, results and button positions (checked at 1440px on the home page and directory). Where cards sit side by side, the description and each result label stop at two lines and the category line at one, ending in an ellipsis; the full text stays in the page for screen readers and appears on the listing. Plugin titles are not clamped, because clipping would also clip the title link's focus ring. On phones, where cards stack, descriptions and labels show in full. No page overflows at 320px.

## Skip link and directory state

The skip link sat under the sticky desktop header (z-index 2 against 10), so it was hidden when focused. It now sits above the header as a navy button. With keyboard Tab it was the topmost element at its position, and Enter moved to `#main`.

The directory keeps its search and category in the address (`?q=` and `?category=`) using `history.replaceState`, so typing adds no history entries, and it restores both on load. These were checked in the browser:

- Typing “sop” and choosing Development updated the address to `?q=sop&category=Development`.
- Opening the listing and going Back restored the search, the pressed category and the single matching card.
- Loading that address fresh, as a shared link would, showed the same state.
- An unknown category falls back to All and is dropped from the address.

The home page search still hands its query to the directory as `?q=`.

## Team names

Plugins will be built by teams of five, so names moved off the directory cards and onto the listing page. Each listing's site entry takes an optional `team`, every member's name. The listing's sidebar shows the names under “Built by” (falling back to `developerName`), and the directory search includes them. The header's “By …” and the Details row for the developer were removed, and cards show only the category. `check.py` now gives its second test listing a five-person team and asserts the names appear on its listing page but not on its card. Rendered with five sample names in a scratch copy; Duke Designer and Create Your Own show “Jordan Meyer”. Create Your Own 0.1.1 adds `team` to its packaging guide; its build, validators and installs in empty settings were repeated.

The home page no longer has the “Hand off the work” section of example requests; it now runs hero, compatible apps, featured plugins, how it works, why MBA-built, and the closing call to action. The tile styles it used remain for the about page.

The about page merges its two opening sections into one white section labeled “The builders”: the statement, then the paragraph on what the builders did before business school. The six expertise tiles were removed; with the home page examples gone, nothing uses tile styles, so they were deleted.

## Campus Designer

Duke Designer is now Campus Designer 0.3.0 (`campus-designer`), so the plugin's name does not suggest an official Duke tool. The rename covers the plugin, skill and evidence folders (moved with git), the install name, the listing address, the skill's name and title, the example request, the footer credit, `featured`, and `check.py`. Its descriptions still say, accurately, that it follows Duke's public brand guidance, and the screenshots are unchanged. Preserved review records, reports, provenance and earlier transcripts keep the original name; earlier sections of this log keep it too, with their links pointed at the renamed folders. All 45 provenance hashes still match. The build, `check.py` and both `claude plugin validate` runs pass. `campus-designer@decision-999` installed in empty Claude Code 2.1.86 and Codex CLI 0.145.0 settings, and both caches hold `skills/campus-designer/SKILL.md`. The home illustration reads “Use the campus designer plugin to …”. The old listing address, `/plugins/duke-designer/`, no longer exists.

## About page rhythm

Every About section used the same small-label, heading and text-block shape. The strongest statement sat near body size beside an empty right half, the four quality steps were boxes almost identical to the home page's, and the origins split repeated the call to action's layout directly above it. With no new text, the page now varies its compositions:

- **The builders and The course:** side by side in one white section after the header. Each column is a section label over a paragraph in EB Garamond at 1.375rem, and the columns stack on phones. The statement “The hard part of using AI at work isn’t the model. It’s knowing what good work looks like.” and the heading “The course behind them” were removed, so the two columns match.
- **How every plugin is made:** a four-column strip on Whisper Gray, with copper numerals over navy rules. The numerals are large text at 4.13:1, which passes AA large. The strip uses two columns on tablets and one on phones.
- **Call to action:** the closing split is unchanged.

Text was trimmed: the step descriptions, the origins sentence (now plural, matching team projects), a shorter header lead, and the call-to-action line. A repeated “free for anyone to use” was dropped. Checked at 1440, 1024, 768, 390 and 320px with no overflow.

The install page header no longer has the grid of app logos and its “Choose from 11 compatible apps” label. In its place, the home page's “Compatible with” line now closes the navy header, below a royal rule, with the same five logos and without the “and 6 more” link. The logos are rendered solid white (14.76:1 on navy) and the label is in Hatteras (11.79:1). Each app's instructions follow with its logo. The picker's markup, build code and styles were removed.

## Header rhythm and logo rows

Measured at 320–1440px, the install header's spacing was a set of unrelated fixed values (56px above, then 16, 16, 40 and 29px, and 64px below), and its logos wrapped 4+1 at 600–900px and 2+2+1 on phones. Page headers now use two tokens:

- **`--hero-pad`:** equal top and bottom padding, 40–56px.
- **`--hero-gap`:** the space before a header's ruled row, 32–40px. That row always gets 24px under its rule. The Plugins and About fact rows use the same values.

Logo rows avoid orphans:

- From about 930px the label shares the row with all five logos.
- Below that, the label sits on its own line above one row of five, with logos scaling gently to 18–24px tall.
- Below 544px, the logos form an even three-column grid (3+2), each scaled to its cell.
- On the home strip, below 1056px, “and 6 more” moves to the label's line, aligned right, so the logos keep a full row.

Measured at 320, 390, 500, 545, 640, 700, 768, 900, 930, 960, 1024, 1080 and 1440px, the logo rows never broke 4+1, the install header's top and bottom padding were equal at every width, and nothing overflowed.

The closing call-to-action band pinned its heading to the top while the text and buttons beside it ran deeper, leaving dead space under the heading. The heading is now centred on that block, the gap above the buttons is 1.5rem, and the band pads its content equally above and below: 72px at 1440px, 61px at 1024px and 48px on phones. This was measured on every page; on phones the band stacks.

## Optional screenshots

Screenshots are now optional; Create Your Own's terminal rendering was not legible at listing size.

- **Listing page:** a listing without screenshots has no image block, and its header uses normal padding. The deeper padding applies only when screenshots follow (`.listing-hero:has(+ .shots)`).
- **Directory card:** the card shows the plugin's first example request as a chat bubble in the same 16:9 frame, limited to four lines, so cards in a row still line up. Measured at 320–1440px on the home page and directory, the bubble stayed inside its frame and side-by-side card bodies started at the same height.
- **Link preview:** the `og:image` tag is omitted when there are no screenshots.
- **Home illustration:** it uses the first plugin with a screenshot.
- **Validation:** `check.py` now builds its second test listing without screenshots and asserts that it has no image block and that its card shows the request.

Create Your Own 0.1.2 removes its screenshot, and its packaging guide explains when to leave screenshots out. Its build, validators and installs in empty settings were repeated.

## Browser App Builder pilot candidate — October 8, 2026

Added five workflow skills and a generated copy of the canonical Campus Designer. Build explicitly reads the bundled designer and its identity, color, typography, web, and review references. No required Python/Node installation or application build system is introduced; existing maintainer tooling remains separate. Archived the prior ExecPlan and saved the current plan with outstanding release gates.

Local catalog/build checks and Claude manifest validation passed. Both isolated Codex CLI 0.145.0 and Claude Code 2.1.86 installations contained all six skills; the designer matches all 16 canonical files. The optional skill-author validator was unavailable because its PyYAML dependency was absent. Stale and obsolete generated designer resources are covered by the repository check.

Maintainer-authored pricing/inventory fixtures passed 18 browser checks. An intentional pricing defect caused four failures, and restoring it returned all 11 pricing cases to passing. Nine Git/publication boundary checks passed, including the opposing index/worktree edits found by independent review. Setup rerun verification and new-repo Pages ordering were also corrected. The listing's keyboard copy action showed success; desktop/narrow iframe rendering showed no horizontal document overflow. See `evidence/browser-app-builder/EVIDENCE.md` for methods, reproduction, source-review limits, and review details.

Actual Work/fresh-chat trials, clean-machine installation, and live GitHub deployment remain unverified. No public publication occurred. This is a locally verified pilot candidate, not an evaluated student outcome.
