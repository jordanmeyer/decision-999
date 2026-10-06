# Submit a plugin

Open one pull request that adds one folder, `plugins/<name>/`. Everything the directory shows comes from that folder. Start by copying `plugins/duke-designer/plugin.json`.

**Package.** Put `plugin.json` at the folder root with the Agent Plugins `$schema`, a lowercase hyphenated `name` matching the folder, a `version` (x.y.z), `description`, `author`, `repository`, and `homepage` set to `https://jordanmeyer.github.io/decision-999/plugins/<name>/`. Put each skill in `skills/<skill>/SKILL.md` with `name` and `description` front matter. Keep every link and resource inside the folder, and have skills write output into the user's project. Add a `README.md` covering installation, how to ask for the skill, prerequisites, and limits.

**Listing.** Under `extensions.com.openai.interface`, give `displayName`, `shortDescription`, `longDescription`, `developerName`, `category`, `defaultPrompt` (a usable example prompt; identify whether it is the original tested task or a restatement), and `screenshots` (PNG files of real output in the folder). Under `extensions.io.github.jordanmeyer`, give `label`, `audience` (who it serves and the problem it solves), `results` (value and label pairs), `method`, `limits`, `screenshotAlt` (one per screenshot), and optionally `example`, a real output HTML file.

**Evidence.** Support each result with inspectable sources and a documented method. Include the original task, date, tools/versions, checks, failures and limits in `EVIDENCE.md`; distinguish a reusable restatement prompt from the exact task or transcript. New evaluations can use cases/scripts in `evals/`. Existing iterative reviews can preserve source artifacts, reports, exact reviewed hashes and browser reproduction scripts in an evidence folder. Keep original failed rounds and label final passes after revisions accurately. Reproduce checks in a scratch copy so historical records stay intact. Report metrics appropriate to the work; never invent cost, time, accuracy, consistency or first-attempt results. State explicitly when these were not measured.

**Data.** Use public, synthetic, or explicitly approved data only. Never include employer, client, patient, or other confidential material. This repository is public, and its history keeps everything ever committed.

**Check.** Run `python3 scripts/build.py` and `python3 scripts/check.py`, then commit the regenerated catalogs. Run `claude plugin validate .`. Preview with `python3 scripts/serve.py` at desktop and phone widths. Test installation from your branch in empty configurations by pointing `CLAUDE_CONFIG_DIR` and `CODEX_HOME` at new temporary folders, so your normal setup is untouched.

**Pull request.** Describe what the plugin does, who it is for, data sources and rights, the exact tests and results, and known limits. A reviewer installs the plugin, verifies its evidence and repeats relevant checks before merging; historical artifact review does not require new model generation. Listings must not claim endorsement by an employer, institution, or anyone else.

To update a plugin, bump its `version`, repeat checks affected by the change, and update the listing and evidence in the same pull request. A historical PASS applies only to its identified source version.
