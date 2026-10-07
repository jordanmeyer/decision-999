# Package and list

The directory serves plugins from its public repository. Each plugin is a folder in `plugins/<name>/`, with its evidence in `evidence/<name>/`. The site's build turns each folder into a listing page and into the catalogs that Claude and ChatGPT/Codex install from.

## Get the repository

Work in the user's copy of the directory's repository: a fork on GitHub, or a clone if the course team gave access. Create a branch named after the plugin, and run every command below from the repository's root. The scripts need only Python 3. Draft skills in `drafts/`, which git ignores.

## Package the skill

```sh
python3 plugins/create-your-own/skills/create-your-own/scripts/new_plugin.py drafts/<name> --developer "Your Name"
```

The folder must be named after the skill's `name` and hold only the skill: its `SKILL.md` and any `references/`, `scripts/`, or `assets/`. If anything is wrong, the script says what and changes nothing. It creates:

```
plugins/<name>/
  plugin.json        manifest and listing
  README.md          install, use, needs, limits
  skills/<name>/     the skill, copied from drafts/<name>/
evidence/<name>/
  EVIDENCE.md        how it was tested and what the tests found
```

From then on, edit the skill in `plugins/<name>/skills/<name>/`. Every install downloads all of `plugins/<name>/`, so keep it to the skill, the README, and the listing screenshots; test cases and transcripts go in `evidence/<name>/`.

## Write the listing

After testing, write each field in `plugin.json`. Draft the text from the evidence record and show it to the user as plain text, not JSON.

Under `extensions` › `com.openai` › `interface`:

| Field | What to write |
| --- | --- |
| `displayName` | The title shown on the site and in apps. The script derives one from the name. |
| `shortDescription` | One line, under about 90 characters: the result it produces |
| `longDescription` | Two to four sentences: what it does, how, and what comes back |
| `developerName` | The name apps show as the developer, set from `--developer`. For a team, use the team's name. |
| `category` | A short label for the directory's filters, such as Finance or Operations |
| `defaultPrompt` | One or two realistic requests that name the plugin, such as “Use `<name>` to …” |
| `screenshots` | Set to `./assets/desktop.png`; add that file, or empty the list if the output isn't visual (see below) |

Under the site's own entry in `extensions`, which the script creates:

| Field | What to write |
| --- | --- |
| `label` | The short tag on the directory card, agreed with the course team |
| `audience` | Who it serves and the problem it solves |
| `team` | Every team member's name, such as `["Avery Chen", "Priya Raman"]`. The listing page shows them under “Built by”; cards show no names. |
| `results` | Two or three pairs copied from the evidence record, such as `{"value": "38 of 40", "label": "Test cases matched the known answer in Claude Code"}` |
| `method` | One paragraph: what was tested, when, in which apps, and what the tests do not show |
| `limits` | Where it falls short, and where a person must approve the work |
| `screenshotAlt` | A description of each screenshot, in the same order; empty when there are none |

Add a screenshot only when it shows the output legibly. Without one, the listing shows no image and the directory card shows the first example request instead. A screenshot is a PNG of real output, cropped to 1440×900 for a desktop view. Phone views (390×844) can be added as more entries in `screenshots` and `screenshotAlt`; the listing shows landscape images in a browser frame and portrait ones in a phone frame. An optional `cover`, such as `./assets/cover.png` at 16:9, replaces the first screenshot on the directory card.

Then replace every TODO in `README.md`.

## Check

```sh
python3 scripts/build.py
```

Run it until it passes. Each failure names the file and what to fix. Then run `python3 scripts/check.py`, and preview the site with `python3 scripts/serve.py`, which prints its address; stop it with Ctrl+C. Look at the listing at desktop and phone widths. If Claude Code is installed, also run `claude plugin validate .`.

## Hand off

Commit `plugins/<name>/`, `evidence/<name>/`, and the catalog files the build changed, push the branch, and open a pull request to the directory's repository. If the user can't, they can send those folders to the course team. The team reviews the evidence, repeats the checks, and decides what is listed. After listing, raise `version` in `plugin.json` with every change.

To run a catalog of your own instead, keep the fork and change `site/config.json`.
