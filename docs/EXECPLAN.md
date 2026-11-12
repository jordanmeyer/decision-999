# Rebuild the course plugin as a small, student-facing helper

This ExecPlan is a living document. The sections `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` must be kept up to date as work proceeds. It is maintained according to `~/.codex/PLANS.md` (not checked into this repository), whose rules are: the plan is self-contained, written for a reader who knows nothing about this repository, anchored in observable outcomes, and revised with a dated note whenever it changes.

When this plan was written, no file other than this one had been changed. Jordan Meyer, the repository owner, approved its design decisions on 2026-11-11. Milestones 1 to 5 need no one but the implementing agent. Milestone 6 gathers every step that needs Jordan; its retirement step deletes existing material and needs his separate go-ahead when it is reached.


## Purpose / Big Picture

Jordan Meyer teaches "Build with AI", a six-week course for MBA students with no programming experience. Each student, then each team of four or five, directs an AI agent to build a web application that solves a business problem, publishes it on GitHub Pages (GitHub's free hosting for static websites), and defends it to a faculty panel and later to employers. Students use the ChatGPT Work desktop application under the university's licence. The agent runs on the student's own Mac or Windows laptop because the university has not enabled web access for ChatGPT's cloud machines.

This repository holds the plugin (an installable bundle of instructions and files for an AI agent) that makes every student follow the same process. Today that plugin, `plugins/web-application-builder/`, was written for agents rather than students. It carries about 10,500 words of defensive technical prose, sixteen library-specific instruction files, two starter templates, and five phases that do not match the course weeks. It has no resume exercise, no ideation, no team support, no pitch support, and it publishes only at the very end.

After this change, a student types one command per stage (`$setup`, `$resume`, `$ideate`, `$plan`, `$build`, `$iterate`, `$ship`) and the agent holds a plain-language conversation about the product while a small set of scripts does all technical work identically for everyone. The result of each session is a live web page, a journal entry in the student's own words, and a commit. Jordan can read the whole plugin in one sitting: at most 2,500 words of guidance and about 600 lines of script.

You can see it working by creating an empty folder, running the setup command in it, and ending with a public URL that shows a placeholder page; then running the later stages and watching that URL change after every session.


## Progress

- [x] (2026-11-11) Confirmed the working tree was clean and equal to `origin/main` at commit `40b5061` ("Archive historical research and retain lean plugin website sources"). No "pre-reorg commit" was needed; `40b5061` is the pre-reorganisation baseline.
- [x] (2026-11-11) Wrote this plan from the design discussion with Jordan.
- [x] (2026-11-11) Jordan approved the design decisions and asked that every step needing him move to a final milestone, and that a Claude Opus 5.5 session carry out the implementation. Plan revised.
- [x] (2026-11-11 14:05) Milestone 1: all five prototypes passed in `/private/tmp/bwai/m1/`; no fallback was needed. Results are under `Surprises & Discoveries`.
- [x] (2026-11-11 14:40) Milestone 2: starter, launchers and the local commands (`setup`, `new`, `dev`, `add`, `plan-check`, `check`), with the one-line skip in `scripts/build.py` and the first version of the rewritten `scripts/check.py` (catalog currency plus the size budget). The acceptance transcript is under `Artifacts and Notes`. All fourteen commands were written in this milestone because they share helpers; Milestone 3 tests the GitHub and team half.
- [x] (2026-11-11 14:20) Milestone 3: the GitHub and team commands, tested against a bare repository with `COURSE_OFFLINE=1`. Testing found and fixed four faults: teammates' regenerated screenshots and card conflicted on every merge; two journal entries in one minute overwrote each other; `start` clipped the first unsaved file name; and after `clone --own` old journal entries satisfied `publish`. Transcript under `Artifacts and Notes`.
- [ ] Milestone 3, remaining: the real `signin` start (one-time code from GitHub, then cancelled) was not run. This session's permission rules refused to start a GitHub device sign-in, so `signin` was exercised against a stand-in `gh` that prints GitHub's code lines; the real call moves to Milestone 6, step 1.
- [x] (2026-11-11 14:35) Milestone 4: seven skills, three references and the student README (Assignment 0); `scripts/check.py` now also checks skill front matter, the seven default prompts, every link, that every `course <command>` named in the guidance exists in the tool, and that the plan skill and `plan-check` use the same eight questions. Guidance 2,425 of 2,500 words; tool 467 of 600 lines.
- [x] (2026-11-11 19:50) Milestone 5: every skill rehearsed in order with a simulated student, on one invented project (Bake Planner), with `COURSE_OFFLINE=1` and the `COURSE_GITHUB` stand-in. Transcripts with assessments are in `archive/runs/2026-11-11-rehearsal/` (`1-setup.md` to `8-ship.md`). Four faults were found and fixed: the offline stand-in, two missing `ideate` questions, the `plan` tagline, and `clone --own` colliding with the plan folder. Guidance 2,451 of 2,500 words; tool 479 of 600 lines.
- [ ] Milestone 6, step 1 (with Jordan): real GitHub sign-in and publish.
- [ ] Milestone 6, step 2 (with Jordan): ChatGPT Work run in a fresh macOS user account.
- [ ] Milestone 6, step 3 (with Jordan): rebuild Tournament Atlas through the new plugin.
- [ ] Milestone 6, step 4 (needs Jordan's go-ahead): retire the old plugins, evidence, scripts and directory pages.
- [ ] Milestone 6, step 5: hand-off notes for the Windows test and the fresh repository.


## Surprises & Discoveries

- Observation (prototype 1): the downloaded `gh` writes a device identifier to `~/.local/state/gh/device-id` even with `GH_CONFIG_DIR` set, which breaks "nothing outside the course folder".
  Evidence: after `gh --version` and `gh auth status` with only `GH_CONFIG_DIR` set, `find ~/.local -newer marker` listed `~/.local/state/gh`. With `XDG_STATE_HOME`, `XDG_CACHE_HOME` and `XDG_DATA_HOME` also pointed inside the test folder, the same commands wrote only `home/state/gh/device-id` inside it. The archive's SHA-256 (`d700207e…c062`) matched the digest GitHub publishes for `gh_2.103.3_macOS_arm64.zip`. The first, unredirected run left `~/.local/state/gh/device-id` on this Mac; it is harmless and was not removed.

- Observation (prototype 2): Playwright's browser host publishes no checksums, so the browser's pinned SHA-256 is the one this Mac computed at first download.
  Evidence: `https://cdn.playwright.dev/builds/cft/156.0.8078.4/mac-arm64/chrome-headless-shell-mac-arm64.zip` (Chrome Headless Shell 156, the revision `playwright-core` 1.64.1 expects) hashed to `94e4337b…b53d`, 104 MB. Launched by path, it produced `desktop.png`, `mobile.png` and a 1200 by 630 `card.png` with EB Garamond and Open Sans loaded. A page that threw an error, linked a Google Fonts stylesheet, referenced a missing image and had a 900-pixel-wide block was reported for the error, the outside request, the 404 and sideways scrolling on the phone size; an empty `#root` was reported as blank.

- Observation (prototype 3): `node --test tests/` treats the folder name as a file and fails; a file pattern works.
  Evidence: with `"test": "node --test tests/*.test.ts"`, one passing and one deliberately wrong test printed `ℹ pass 1`, `ℹ fail 1` and exit status 1, while `tsc --noEmit` passed and `vite build` bundled an `App.tsx` that imports `./model.ts`.

- Observation (prototype 4): `base: './'` plus `VITE_SITE_URL` works under any repository folder.
  Evidence: `dist/` copied to `serve/some-repository/` and served by `python3 -m http.server`; every request for the page, script, stylesheet and both fonts returned 200, and the page carried `<meta property="og:image" content="http://127.0.0.1:8791/some-repository/card.png">`, which returned `200 image/png`. (Port 8765 was taken by another program on this Mac; any free port works.)

- Observation (prototype 5): projects in a course folder whose name has spaces share one download cache.
  Evidence: in `/private/tmp/bwai/m1/Build with AI/`, with `npm_config_cache` set to `.toolchain/npm-cache`, the first project's `npm ci --prefer-offline` filled the 18 MB cache and the second project's `npm ci --offline` (which fails if anything is missing from the cache) added all 26 packages; both built.

- Observation: the existing GitHub publishing evidence does not cover a student's machine.
  Evidence: the hand-made example repository at `/Users/jordan/Projects/bab-example-madness` pushes over SSH (`origin git@github.com:jordanmeyer/bab-example-madness.git`) using a key already on this Mac, which also has Apple's developer tools, a global Node and Homebrew Python. A student starts with none of these.

- Observation: Tournament Atlas, the example Jordan will demonstrate every week, predates the current starter.
  Evidence: its `package.json` lists only `vite`; the app is plain JavaScript (`app/main.js` 462 lines, `app/model.js` 98, `app/style.css` 266), not React and TypeScript.

- Observation: Apple's developer tools, which supply `git` on a Mac, are large.
  Evidence: `du -sh /Library/Developer/CommandLineTools` reports 1.9G on this machine.

- Observation (Milestone 5): offline mode alone could not carry a project past its first page, because `publish` and `clone` needed a GitHub repository that does not exist offline. This is why `tool/cli.mjs` and `tool/github.mjs` gained the `COURSE_GITHUB` stand-in (Decision Log).
  Evidence: before the change, `publish resume` with `COURSE_OFFLINE=1` printed `STOP this project has no copy on GitHub yet`. With `COURSE_GITHUB=/private/tmp/bwai/m5/github`, `publish` created `sam-rivera/resume.git` there and pushed. Later `clone sam-rivera/bake-planner --as bake-planner-prototype --own` copied from that folder.

- Observation (Milestone 5): the `ideate` skill's five questions did not produce two of the four headings the idea file needs, "Intended output" and "Success criteria", so the course agent made up two questions of its own and reported the gap.
  Evidence: `archive/runs/2026-11-11-rehearsal/3-ideate-attempt-1.md`. After questions 5 ("What should the app give that person, and when?") and 6 ("How would you know it helped, in terms someone could observe?") were added, the repeat (`3-ideate.md`) filled all four headings in the student's words.

- Observation (Milestone 5): `plan` copied the answer to question 3 into `app/site.json` word for word, so the site's tagline read "They'd open Bake Planner and bake the numbers it shows…".
  Evidence: `bake-planner/app/site.json` after `4-plan.md`. Now the read-back includes a one-line tagline drawn from that answer, the student approves it, and the approved line is written.

- Observation (Milestone 5): when the team chooses the plan author's own prototype, `clone <owner>/<name>-prototype --as <name> --own` stopped with "already exists", because the plan session had created that folder.
  Evidence: `6-iterate.md`; the course agent fast-forwarded the plan folder by hand. Now `clone --own` fast-forwards an existing folder when the source continues its history, and adds the source as `template`. Checked: `clone-test` adopted its prototype's commit and kept `origin`; without `--own`, or from an unrelated source, it still prints `STOP clone-test already exists`.

- Observation (Milestone 5): agents occasionally attached example answers to a question ("how much is thrown away or how often do they sell out?", "like what a manager reads on the croissant card"). They never suggested an answer when the student asked for an opinion. Every agent made technical choices itself, as the conversation rules say, and handed product choices back.
  Evidence: assessments at the end of `3-ideate.md`, `6-iterate.md`, `7-iterate-2.md` and `8-ship.md`. The slips were left in the transcripts; no wording change was made, because the rule ("never suggest an answer") is already explicit.


## Decision Log

- Decision: `setup` downloads the headless browser itself, from the same address Playwright uses, verifies it against a checksum recorded in `tool/toolchain.json`, and launches it by path (`executablePath`); Playwright's own installer is not used.
  Rationale: Playwright's installer verifies nothing and its folder layout is an internal detail. One download-and-verify routine then serves `gh` and the browser alike.
  Date/Author: 2026-11-11, Claude (implementation).

- Decision: `playwright-core` 1.64.1 (released 2026-10-14) rather than 1.65.0 (released 2026-11-05), and `gh` 2.103.3 (2026-10-26).
  Rationale: prefer releases that have been public for a few weeks; both were the newest such releases on 2026-11-11.
  Date/Author: 2026-11-11, Claude.

- Decision: the Milestone 2 acceptance runs with `COURSE_OFFLINE=1`.
  Rationale: `new` sets the project's commit name and GitHub's private email address from the student's GitHub sign-in, so outside offline mode it needs `signin` first, as the `setup` skill does. Offline, the identity comes from `COURSE_USER` (default `student`).
  Date/Author: 2026-11-11, Claude.

- Decision: `signin` starts GitHub's one-time-code sign-in as a background process, prints the code and address, and returns at once; running `signin` again reports "signed in as …".
  Rationale: the agent must stay free to open the address in its browser while the student types the code and clicks Authorize. A command that blocked until authorization would leave it unable to do so.
  Date/Author: 2026-11-11, Claude.

- Decision: `check` records a fingerprint of the project (the Git tree of every file outside `process/`, computed with a separate index so the student's staging area is untouched) in `.git/course-checked`; `publish` refuses unless the current fingerprint matches. `publish` finds "a journal entry for this session" as an uncommitted file in `process/journal/` or one committed but not yet pushed.
  Rationale: no state files beyond one inside `.git/`, and `publish` can be re-run after a failure part-way (for example a failed push after the commit) without demanding a second journal entry.
  Date/Author: 2026-11-11, Claude.

- Decision: `publish` combines teammates' work with an ordinary merge, not a rebase, and on overlapping edits leaves the merge in progress with Git's conflict markers in the named files. It refuses to commit while any marker remains.
  Rationale: one merge leaves one thing to finish; the agent edits the files, runs `check`, writes the journal entry and runs `publish` again, which completes the merge. A rebase could stop once per commit.
  Date/Author: 2026-11-11, Claude.

- Decision: `undo` discards uncommitted changes and new files (`git reset --hard`, `git clean -fd`); because nothing is committed between `start` and `publish`, that is exactly "everything since the session started".
  Rationale: no session state to store.
  Date/Author: 2026-11-11, Claude.

- Decision: the share card is the top 1200 by 630 pixels of the app itself, captured during `check`, not a separately designed image.
  Rationale: it shows the real product with its name and tagline in Duke styling and needs no second template.
  Date/Author: 2026-11-11, Claude.

- Decision: the rewritten `scripts/check.py` keeps only the two checks that still matter while old and new plugins coexist (the committed catalogs and the bundled Campus Designer copy are current) and drops the old directory-site boundary tests.
  Rationale: the plan replaces `scripts/check.py` with validation of the new plugin. The build code those tests exercised is unchanged on this branch apart from the one skip line, the tests remain at commit `40b5061`, and Milestone 6 removes that code.
  Date/Author: 2026-11-11, Claude.

- Decision: when `publish` merges a teammate's work, conflicts in the files `check` regenerates (`process/screenshots/`, `app/public/card.png`, `app/public/THIRD-PARTY-NOTICES.txt`) are settled by keeping this student's copy; only other files stop the merge.
  Rationale: every `check` rewrites the screenshots and card, so without this any two teammates' sessions conflicted on binary files nobody can combine by hand. The next `check` regenerates them from the merged app.
  Date/Author: 2026-11-11, Claude (found in Milestone 3 testing).

- Decision: `clone --own` renames the source remote to `template` instead of deleting it, and `publish` treats `template/main` as already published until the student's own copy exists.
  Rationale: with the remote deleted, `publish` saw the whole inherited history as unpublished and accepted the teammates' old journal entries as this session's. The `template` remote also records where the copy came from.
  Date/Author: 2026-11-11, Claude (found in Milestone 3 testing).

- Decision: a second journal entry for the same skill, student and minute is saved with a `-2` (then `-3` …) suffix.
  Rationale: the fixed file name format has minute resolution; finishing a merge right after a session overwrote the earlier entry.
  Date/Author: 2026-11-11, Claude (found in Milestone 3 testing).

- Decision: the guidance names tool commands as `course <command>`, defined once in `references/conversation.md` as `bash course.sh <command>` on a Mac and `powershell -NoProfile -File .\course.ps1 <command>` on Windows.
  Rationale: one platform-neutral spelling saves words in every skill and lets `scripts/check.py` find each command named in a code span.
  Date/Author: 2026-11-11, Claude.

- Decision: `build` takes the plan's address with the invocation (`$build <owner>/<name>`); without it the agent tells the student to start again that way rather than asking.
  Rationale: the plan requires that `build` ask nothing, but `clone` needs the address.
  Date/Author: 2026-11-11, Claude.

- Decision: `plan-check` requires each of the eight questions, word for word without its number, as a `##` heading; `scripts/check.py` fails if the plan skill's list and the tool's list differ.
  Rationale: the questions then live in two places that cannot drift, and the plan file reads as questions and answers.
  Date/Author: 2026-11-11, Claude.

- Decision: `ship` lets a second teammate skip to the publish step when the README already holds a teammate's answers, so each student can run `$ship` once for their own copy (`publish --mine`).
  Rationale: every student needs a personal copy, but only one should rewrite the shared README.
  Date/Author: 2026-11-11, Claude.

- Decision: the plugin README names no repository or marketplace; it points to the course's install page.
  Rationale: `AGENTS.md` keeps the site name, repository, marketplace name and URL only in `site/config.json`; the install page that carries them is rebuilt in Milestone 6.
  Date/Author: 2026-11-11, Claude.

- Decision: add `@types/node` 24.19.2 to the starter's development dependencies, and set `allowImportingTsExtensions`, `erasableSyntaxOnly` and `resolveJsonModule` in its `tsconfig.json`.
  Rationale: the known-answer test imports `node:test` and must type-check; Node runs TypeScript only when imports name the `.ts` file and the code uses no TypeScript-only runtime syntax, and these settings make the type check enforce exactly that. This is the one change to the starter's dependency list.
  Date/Author: 2026-11-11, Claude (from prototype 3).

- Decision: offline, `COURSE_GITHUB=<folder>` makes a folder of bare repositories, `<folder>/<owner>/<name>.git`, stand in for GitHub. `publish` creates the student's stand-in repository there as it would on GitHub, and `clone` and accepting an invitation resolve `owner/name` to it.
  Rationale: the plan's Milestone 5 setting, "`COURSE_OFFLINE=1` and a bare repository standing in for GitHub", could not be reached through the skills. Offline, `publish` stopped with "this project has no copy on GitHub yet" and `clone owner/name` had nothing to copy, so every session after `setup` would have needed remotes made by hand outside the conversation. The stand-in code stays in `tool/github.mjs` with the other GitHub calls.
  Date/Author: 2026-11-11, Claude (found in Milestone 5).

- Decision: the Milestone 5 rehearsal used three agents: a course agent started fresh for each skill, one student agent kept for the whole course, and the coordinating session relaying each message verbatim. From `ideate` on, the coordinator waited for each reply inside one turn, and the student was told to keep replies to one or two sentences. The student agent got each session's facts (persona, ideas, worked example, feedback) and its once-per-session behaviours (one vague answer, one opinion request, one early stop) only on its side; the course agent saw only the skill and the files.
  Rationale: cost, at the request of the session that wrote this plan. Ending a turn after every relayed message woke the reviewing session each time. Direct messaging between two subagents was not available (a subagent's reply returns to the session that started it), so the coordinator relayed messages without ending its turn instead.
  Date/Author: 2026-11-11, Claude, with the plan's author.

- Decision: in the rehearsal, `ship` wrote `process/pitch-starter.md` (one section per slide, with `REWRITE:` notes) in place of `process/pitch-starter.pptx`.
  Rationale: the simulated agent has no PowerPoint ability. The slide list and notes were tested; the `.pptx` output moves to Milestone 6, step 2 (ChatGPT Work).
  Date/Author: 2026-11-11, Claude.

- Decision: after a fix that did not touch the questions or how the agent reacts to answers, only the affected step was checked rather than the whole skill being rehearsed again. This applied to the `plan` tagline (read-back wording) and to `clone --own` (checked at the command level). `ideate`, whose questions changed, was rehearsed again in full. A second `iterate` session (week 5) covered the vague answer, opinion request and early stop that the first `iterate` session never triggered.
  Rationale: the acceptance points (one question at a time, no suggested answers, a challenged vague answer, the early stop) depend on the questions and the conversation rules, which neither fix changed. A full repeat would have cost a long rehearsal to retest one line.
  Date/Author: 2026-11-11, Claude.

- Decision: seven skills named `setup`, `resume`, `ideate`, `plan`, `build`, `iterate`, `ship`.
  Rationale: one per course stage. Setup moved to pre-work so class 1 can be about the resume; ideation was added because the co-developer wanted class 1 less intimidating; "deploy" no longer describes week 5 because publishing happens from the first session.
  Date/Author: 2026-11-11, Jordan and Claude.

- Decision: every skill except `build` is a Socratic conversation driven by a fixed checklist; `build` asks nothing.
  Rationale: Jordan grades the thinking, so every student must be asked the same important questions. In week 3 each teammate runs the same plan to see how AI output varies, so the build must not depend on new answers.
  Date/Author: 2026-11-11, Jordan.

- Decision: the agent never suggests an answer to a product question.
  Rationale: offering a recommended answer lets students say "yes" to everything. The `grill-me` plugin, which works that way, is dropped.
  Date/Author: 2026-11-11, Jordan and Claude.

- Decision: publish to GitHub Pages at the end of every session, starting with setup.
  Rationale: Jordan assigns teams partly from published resumes, reviews prototypes in week 3, and peers review in week 4. Publishing early also surfaces account problems before class.
  Date/Author: 2026-11-11, Jordan.

- Decision: teams share one repository; there is no merge skill.
  Rationale: reconciling several diverged copies of AI-written code produces conflicts of meaning that nobody on a novice team can audit. Small changes pushed often to one repository rarely collide, and one history with each student's name on their commits is better grading evidence.
  Date/Author: 2026-11-11, Jordan and Claude.

- Decision: the journal and the backlog are folders of small files, one file per session or item, under `process/` in each project.
  Rationale: several students appending to one shared file would conflict on nearly every sync. Markdown files, rather than GitHub Issues, travel with each student's personal copy of the repository.
  Date/Author: 2026-11-11, Jordan and Claude.

- Decision: the starter contains React only. The agent adds any other library through one guarded command.
  Rationale: Jordan does not want to approve libraries or maintain a pinned catalogue. The guard (permissive licence, at least a year old, widely downloaded, install scripts disabled) protects against invented or malicious package names without an approval step.
  Date/Author: 2026-11-11, Jordan and Claude.

- Decision: Duke design is built into the starter as code plus one short reference; the separate `campus-designer` plugin is retired.
  Rationale: Jordan wants one design language in every app so students think about business value, not stylesheets.
  Date/Author: 2026-11-11, Jordan.

- Decision: all tooling lives inside one course folder; the only machine-wide items are `git` (Apple's developer tools on a Mac, Git for Windows on Windows) and one sign-in token in the operating system's password store.
  Rationale: Jordan wants removal to be "delete the folder". ChatGPT Work relies on the system `git`, so that one cannot be made local. Storing the token in the password store is safer than a plain file the agent can read.
  Date/Author: 2026-11-11, Jordan and Claude.

- Decision: the GitHub command-line program (`gh`) is the single tool for sign-in, repository creation, Pages settings and invitations.
  Rationale: it turns several browser procedures into script calls and avoids SSH keys and pasted tokens.
  Date/Author: 2026-11-11, Jordan.

- Decision: drop the blanket "public or synthetic data only" rule; keep one reminder not to use an employer's real data, and one question about which contact details may be public.
  Rationale: a resume site is personal data by design.
  Date/Author: 2026-11-11, Jordan.

- Decision: the pitch deck starter is produced inside `ship` using ChatGPT Work's own ability to create PowerPoint files.
  Rationale: no extra tooling; students must still edit it by hand.
  Date/Author: 2026-11-11, Jordan.

- Decision: week 3 prototypes are named `<name>-prototype`; the team repository is `<name>`.
  Rationale: every history then descends from the plan author's first commit, so the team repository and each member's final personal copy can be created with ordinary pushes and no forced overwrites. This resolves the question Jordan left open about team mechanics.
  Date/Author: 2026-11-11, Claude (subject to Jordan's review).

- Decision: known-answer tests run in Node, not in a browser page.
  Rationale: the current design asks the agent to build a test web page by hand for every app. A command that runs the same tests locally and in the publishing workflow is less prose and a real gate.
  Date/Author: 2026-11-11, Claude (subject to Milestone 1).

- Decision: size budget of 2,500 words of guidance and a 600-line target for the tool, enforced by `scripts/check.py`.
  Rationale: Jordan's goal is a plugin he can review and maintain without an agent. If the budget cannot be met without losing something agreed here, work stops and Jordan is shown exactly what would be cut.
  Date/Author: 2026-11-11, Jordan and Claude.

- Decision: nothing is deleted until the new plugin passes validation in Milestone 6, and then only with Jordan's go-ahead.
  Rationale: Jordan asked that nothing be deleted yet. The old material also stays in Git history at `40b5061` and in the ignored local `archive/` folder.
  Date/Author: 2026-11-11, Jordan.

- Decision: every step that needs Jordan is gathered in the final milestone; Milestones 1 to 5 are done by an agent alone.
  Rationale: Jordan wants the whole plugin built before he validates it. The cost is that the calls to GitHub are written without ever being run against GitHub. Three things limit that cost: all such calls live in one file, `tool/github.mjs`; the Git mechanics around them (push, fetch, conflicts between teammates) are tested against a local stand-in; and the real GitHub check is the first and shortest step of the final milestone.
  Date/Author: 2026-11-11, Jordan (decision) and Claude (mitigation).

- Decision: Milestones 1 to 5 are implemented by a Claude Opus 5.5 session and reviewed afterwards by the session that wrote this plan.
  Rationale: cost. The scripts are well specified and checkable by their acceptance transcripts. The guidance prose in Milestone 4 is the part most sensitive to judgment, so the review reads it line by line and treats any wording beyond "ask, tell, or run" as a defect.
  Date/Author: 2026-11-11, Jordan.


## Outcomes & Retrospective

Milestone 1 (2026-11-11): every technical unknown worked as designed; no fallback was adopted. The one surprise, `gh` writing outside its configuration folder, is handled by pointing three more environment values into the course folder.

Milestone 2 (2026-11-11): a student-shaped run with no Node on `PATH` sets up, creates a project and passes the check in about two minutes, most of it the 104 MB browser download. The whole tool, including the GitHub and team commands, came to 455 lines against the 600-line target.

Milestone 3 (2026-11-11): two clones of one stand-in repository publish in turn, overlapping edits stop with the file named, and both names appear in the history. The fixes it forced brought the tool to 467 lines. Everything in `tool/github.mjs` beyond identity and the offline switch is still unrun against GitHub.

Milestone 4 (2026-11-11): the guidance fits in 2,425 words with every plan item present, so no cut was needed. The largest pieces are the shared conversation rules (349 words) and the plan skill (284), which carries the eight questions verbatim.

Milestone 5 (2026-11-11): the prose produced the intended conversations. Agents asked one question at a time, challenged vague answers, handed product choices back, made technical ones themselves, and named the open question when the student tried to leave. `build` asked nothing. The faults were in coverage, not tone: two questions `ideate` lacked, a tagline copied verbatim, and two tool gaps (no offline stand-in for GitHub, and the plan author adopting their own prototype). Fixing them added 26 words of guidance and 12 lines of tool. These are simulations between AI agents, so they show the guidance is followable, not that students will follow it; the `.pptx` pitch starter and every real GitHub call remain for Milestone 6.


## Context and Orientation

### The course

Six weekly sessions. Before class 1, students complete "Assignment 0": install ChatGPT Work, make a course folder, install the plugin and run setup. Week 1 builds and publishes a personal resume website in class, and students brainstorm two project ideas as homework. Week 2 turns one idea into a plan. Jordan then forms teams of four or five. In week 3 every teammate builds a prototype from the same plan and the team picks one. Weeks 4 and 5 improve it using instructor and peer feedback. Week 5 also packages the project and prepares a pitch. Week 6 is the demonstration to a faculty panel.

Students submit through Canvas (the university's course website) by answering a questionnaire that asks for a link to their repository. Jordan grades the thinking and iteration at least as much as the product, so each repository must show the full Git history plus written records of decisions and conversations.

Applications are static: they run entirely in the visitor's browser. They have no server, no login, no shared database, no live data feeds and no calls to AI services, because those need paid accounts the university licence does not cover.

### The repository today

The repository root is `/Users/jordan/Projects/decision-999`. Its main branch deploys a website through `.github/workflows/deploy.yml`.

`plugins/web-application-builder/` is the plugin being replaced. Its `skills/` folder has five workflow skills (`setup-browser-app`, `plan-browser-app`, `build-browser-app`, `evaluate-browser-app`, `deploy-browser-app`), sixteen library skills (for example `echarts-browser-app`), and a generated copy of the design skill. A "skill" is a folder containing a `SKILL.md` file of instructions that the agent loads when the student names it. `references/` holds shared instruction files. `assets/managed-starter/` is the project template worth keeping: a Vite, React and TypeScript application (Vite is the program that previews and builds the site; React is the user-interface library; TypeScript is JavaScript with type checking) with two launchers, `app.sh` for macOS and `app.ps1` for Windows, that download a pinned copy of Node (the program that runs JavaScript outside a browser) into a hidden `.toolchain/` folder, verify its checksum, and then run `scripts/project.mjs`.

`plugins/campus-designer/` holds Duke colour tokens, two licensed fonts and about 7,400 words of brand guidance. `plugins/grill-me/` and `plugins/create-your-own/` come from an abandoned course design in which students built plugins.

`scripts/build.py` (555 lines) generates plugin catalogues (`.agents/plugins/marketplace.json` for ChatGPT and Codex, `.claude-plugin/marketplace.json` for Claude) and the website from `site/`. `scripts/check.py`, `scripts/check-app-environment.py` and `scripts/check-library-recipes.py` are maintainer checks. `evidence/` holds records for the old plugin directory. `archive/` is ignored by Git and holds historical material, including `archive/2026-11-09-cleanup/grok-build-og/`, a snapshot of a competing product's instructions that inspired parts of this design.

The example application Tournament Atlas lives in a sibling repository, `/Users/jordan/Projects/bab-example-madness`, and is published at `https://jordanmeyer.github.io/bab-example-madness/`.

### Terms used below

The "course folder" is the single folder a student creates for the course and to which their ChatGPT project is confined. A "project" is one application inside it, with its own Git repository. The "tool" is the set of scripts this plan creates; the "launcher" is the small shell or PowerShell file that starts it. A "smoke check" loads the built site in an invisible browser and fails if the page is blank or reports errors. A "share card" is the image that appears when a link is pasted into LinkedIn, Slack or a text message. A "known-answer test" compares the app's calculation with an answer the student worked out by hand.


## Plan of Work

### What a student's machine looks like afterwards

    Build with AI/               the course folder
      course.sh  course.ps1      launchers
      .toolchain/                Node, gh, headless browser, npm cache, a copy of the tool
      ideas/                     ideation notes (not a repository)
      resume/                    project: personal resume site
      roster-planner/            project: the team application
        README.md                written like a good open-source README
        package.json  vite.config.js  tsconfig.json  .github/workflows/pages.yml
        app/                     the application
          site.json              name and one-line description (single owner of identity)
          model.ts               calculations, free of interface code
          theme/                 Duke tokens, fonts, base styles, chart palette
        tests/                   known-answer tests
        process/
          plan.md                the signed plan
          journal/               one file per session
          backlog/               one file per feature or bug
          screenshots/           desktop.png and mobile.png from the last check

Deleting the course folder removes everything except `git` and one saved sign-in, which `course.sh signout` removes.

### The new plugin

Create `plugins/build-with-ai/` beside the old plugin. Nothing in the old plugin is edited.

`plugins/build-with-ai/plugin.json` keeps the existing Agent Plugins format (copy the `$schema`, `name`, `version`, `description`, `author`, `homepage`, `repository` fields and the `extensions.com.openai.interface` block from `plugins/web-application-builder/plugin.json`), with a two-sentence `longDescription` and seven `defaultPrompt` lines, one per skill. Start at version `1.0.0`.

`plugins/build-with-ai/README.md` is the Assignment 0 text: install ChatGPT Work; create a folder named "Build with AI"; create a ChatGPT project confined to it; install the plugin; type `$setup`. It lists the four things only the student may do (type the GitHub password, enter the emailed verification code and solve the sign-up puzzle, click Authorize, approve operating-system prompts) and how to remove everything.

`plugins/build-with-ai/starter/` is the project template, adapted from `plugins/web-application-builder/assets/managed-starter/`. Changes from the original:

- Remove `app.sh`, `app.ps1`, `scripts/project.mjs` and `scripts/toolchain.json`; these move to the course-folder tool.
- Set `base: './'` in `vite.config.js` so the built site works under any repository name without configuration.
- Add `app/site.json` with `name` and `tagline`. A few lines in `vite.config.js` put them into the page title, description and share-card tags of `app/index.html`. The share-card image address must be absolute, so the page template uses `%VITE_SITE_URL%`, which the publishing workflow sets.
- Add `app/theme/base.css`, which styles ordinary HTML elements (headings, buttons, form fields, tables, cards) with the Duke tokens, and `app/theme/theme.ts`, which exports the chart colour order and font names for any charting library. Keep `duke-tokens.css`, `duke-fonts.css` and the font files with their licences.
- Add `app/model.ts` and `tests/model.test.ts` with one trivial passing example so the test command always has something to run.
- Add `.github/workflows/pages.yml`, adapted from `plugins/web-application-builder/assets/pages-managed.yml`, with an `npm test` step before the build and two environment values for the build: `VITE_SITE_URL` from the Pages configuration step and `VITE_COMMIT` from the commit identifier. The page carries the commit in a `<meta name="build">` tag so the tool can confirm that the live site is the version just pushed.
- Add `process/` with empty `journal/` and `backlog/` folders and a `README.md` template.
- Replace the placeholder `app/App.tsx` with a page that shows the name and tagline from `site.json`.
- Keep `scripts/notices.mjs`, which gathers licence texts of bundled libraries into the published site, but make a missing licence file a listed warning instead of a failure, because the supplemental licence store is being retired.

`plugins/build-with-ai/tool/` holds the scripts, written as plain Node modules with no dependencies except the headless browser library. `plugins/build-with-ai/course.sh` and `course.ps1` are the launchers, adapted from the existing `app.sh` and `app.ps1`: they download and verify Node into `.toolchain/` at the course-folder level, then run `.toolchain/tool/cli.mjs` with the remaining arguments. `setup` copies `tool/` and the launchers from the installed plugin into the course folder, so later commands do not depend on where ChatGPT stores plugins.

`plugins/build-with-ai/skills/<name>/SKILL.md` for the seven skills, and `plugins/build-with-ai/references/` with three files, are described under "The skills" below.

### The tool's commands

Every command prints short plain-language lines beginning `OK` or `STOP`, so the agent can relay them, and exits non-zero on `STOP`. Every command is safe to run again.

`setup` checks that `git` works (on a Mac, if Apple's developer tools are absent it runs `xcode-select --install`, which opens Apple's own dialog, and waits; on Windows it stops with a link to Git for Windows). It downloads `gh` and the headless browser into `.toolchain/`, verifying checksums recorded in `tool/toolchain.json`, and prints a readiness report.

`signin` starts GitHub's one-time-code sign-in and prints the code and web address; the agent opens the address in its browser and the student clicks Authorize. It stores `gh`'s settings under `.toolchain/gh/`. `signout` removes the saved sign-in.

`new <name>` copies the starter into `<course folder>/<name>`, installs its locked dependencies, starts Git history on `main`, and sets the commit name and GitHub's private "noreply" email address for that repository only. `clone <owner>/<repository> [--as <folder>] [--own]` fetches a teammate's repository, accepting a pending invitation if there is one; `--own` detaches it so the next `publish` creates the student's own copy. `invite <project> <username>...` adds teammates as collaborators.

`start <project>` begins a session: it fetches teammates' changes and prints a one-screen status (live address, last three journal entries, open backlog items, anything unsaved). `dev <project>` runs the local preview. `add <project> <package>` installs a library after checking that its licence is MIT, Apache-2.0, BSD or ISC, that it was first published at least a year ago, and that it had at least 10,000 downloads last week; install scripts stay disabled. `undo <project>` discards everything since the session started, which is how a student rejects a change.

`plan-check <project>` fails unless `process/plan.md` has a non-empty answer under each of the eight headings and an approval line naming the student. `check <project>` runs the type check, the known-answer tests and the production build, then loads the built site in the headless browser at desktop (1280 by 800) and phone (390 by 844) sizes. It fails on a blank page, any console error, any failed request, any request to another website, or sideways scrolling on the phone size. It saves both screenshots to `process/screenshots/` and renders the share card to `app/public/card.png`.

`journal <project|ideas> --skill <name> [--with <names>]` reads the entry text from standard input and writes it to `process/journal/<date>-<time>-<skill>-<username>.md` with a header naming the author and anyone working alongside. It fails if any of the four required parts is missing: what the student asked for, the questions and the student's answers, what changed, what was checked.

`publish <project> -m "<what changed, in plain words>"` ends a session. It refuses if `check` has not passed since the last edit or if no journal entry was written this session. It commits, fetches teammates' changes, pushes, creates the public repository and turns on Pages if this is the first time, waits for the publishing workflow, and polls the live address until its build tag matches the pushed commit. It prints the live address. `publish <project> --mine` does the same to a repository of the same name under the student's own account, for the personal copy at the end.

If teammates changed the same lines, `publish` stops and names the files. The `iterate` skill tells the agent to combine both changes, run `check`, explain to the student in product terms what each teammate changed, and note it in the journal.

### The skills

Each `SKILL.md` has three parts: a checklist of what to ask, the commands to run, and what the student should see at the end. Every sentence is either something the agent asks or tells the student, or a command to run. Each skill starts by reading `references/conversation.md`.

`references/conversation.md` (about 350 words) holds the rules shared by every skill. Speak about the product, never about ports, paths, file names or commands. Never ask the student to run anything. Ask one question at a time. Do not offer an answer to a product question; ask, and if the answer is vague, challenge it once with a concrete follow-up. Make every technical choice yourself without asking. Do not end before the checklist is complete; if the student wants to stop, say which question is still open and why it matters. Record answers in the student's words. Remind the student once not to use an employer's real data. End every session with `check`, `journal` and `publish`, then tell the student what changed and where to see it. Look at both screenshots before saying anything works. Passwords, verification codes and the Authorize click belong to the student.

`references/scope.md` (about 250 words) says what fits (calculators, simulations, dashboards, data explorers and planners that run in a browser on bundled, invented or public data, or on a file the visitor chooses) and what does not (logins, data shared between users, live feeds, AI at run time, sending email or taking payments), with a way to reshape each. It names default libraries for the two common needs, charts and spreadsheet import, and says to add anything else with `add`. It carries a short menu of example projects, including two labelled poor examples. The menu illustrates scope and value; it does not restrict what students may build.

`references/design.md` (about 350 words) distils the Duke guidance: use the starter's tokens and base styles; put the question, its inputs and the answer close together; label units; align numbers; give every chart a text or table equivalent; no decoration that carries no information; keyboard access and visible focus; no Duke logos or seals and no claim of affiliation.

`setup` (pre-work, at home) asks nothing about a product. It runs `setup`, guides GitHub account creation in the agent's browser, runs `signin`, then `new resume` and `publish`, and ends by giving the student the live address to submit for Assignment 0. If anything stops, it gives the student a plain-language report to email.

`resume` (week 1, in class) asks: what role the student is seeking and who should be impressed; which two or three experiences lead and what evidence supports each; which contact details may be public, noting that published history is permanent; which work samples they are allowed to share; and a one-sentence headline. It then builds the site in the `resume` project.

`ideate` (week 1 homework) asks about recurring tasks or decisions the student has seen first-hand, who does them and how often, what they cost today, what data they would need, and whether the idea fits `references/scope.md`, reshaping it if not. The agent may offer angles and examples but the ideas must be the student's. It ends with two summaries (user, task, intended output, success criteria) saved under `ideas/` for the student to submit.

`plan` (week 2) asks the eight questions agreed on 2026-11-11:

1. Who exactly uses this, and at what moment in their work?
2. What do they do today instead, and what does that cost them?
3. What will they do differently after using it?
4. What goes in and what comes out, and where does the data come from?
5. Give one realistic input and the answer you would expect, worked by hand.
6. What would a plausible but wrong result look like, and how would the user notice?
7. What is deliberately left out of the first version?
8. How will you know it worked, in terms someone could observe?

It runs `new <name>`, writes the answers under eight headings in `process/plan.md`, reads the plan back for sign-off, adds a short technical section for the building agent (screens, calculations, libraries), runs `plan-check`, and publishes.

`build` (week 3) asks nothing. The student's whole team runs it from the same plan: `clone <author>/<name> --as <name>-prototype --own`, then implement the plan, turn the answer to question 5 into the first known-answer test, write the README, and publish. It ends by telling the student what was built, what to try, and what was left out.

`iterate` (weeks 4 and 5) starts with `start`. It asks what the student observed and what they expected; who reported it; how much it matters to the user named in the plan; which one thing to do this session and why before the others; and how they will know it worked. Feedback pasted from the instructor or peers becomes files in `process/backlog/`. After the change, the student looks at the preview and accepts or rejects it; rejection runs `undo`. After the team picks a prototype, its owner runs `clone <owner>/<name>-prototype --as <name> --own`, `publish`, and `invite`; teammates run `clone <owner>/<name>`.

`ship` (week 5) asks for a one-sentence statement of value, the limitations the student would tell a manager, who may reuse the work (explaining the default MIT licence plainly), what would need updating in a year, and what a demo-day audience should remember. It finishes the README, adds the licence, refreshes the share card, publishes, and runs `publish --mine` for each student's personal copy. It then reads the plan, journal and backlog and creates `process/pitch-starter.pptx` with ChatGPT's own PowerPoint ability: problem and user, cost today, a screenshot and the live link, how it works, the worked example, what changed after feedback, limitations and next steps, and the team. It marks every slide the students must rewrite.

The README the agent writes never mentions recruiters or the course. It contains what the project is and the problem it solves, the live link and a screenshot, how to use it with one worked example, how it works in plain language, limitations, how it was built with links into `process/`, and credits and licence.

### Maintainer tooling and site

The current site build treats every folder under `plugins/` as a directory listing: `load()` in `scripts/build.py` reads each `plugins/*/plugin.json` and requires listing fields and an `evidence/<name>/EVIDENCE.md` record. So that the existing site keeps building while old and new plugins sit side by side, Milestone 2 adds one line to that loop that skips `build-with-ai`; the retirement step of Milestone 6 removes the listing rules altogether.

Rewrite `scripts/check.py` to validate the new plugin: skill front matter, links that resolve, every command named in a skill exists in the tool, and the size budget. Add `scripts/rehearse.py`, which creates a temporary course folder outside the repository with Node removed from `PATH` and runs `setup`, `new`, `check`. These replace `scripts/check-app-environment.py`, `scripts/check-library-recipes.py` and `evidence/web-application-builder/check.py` in the retirement step of Milestone 6.

In that same step the website shrinks to three pages: home, the example gallery driven by `site/apps.json`, and the install page with the Assignment 0 steps. The gallery's `category` field becomes the classification used by the project menu. `scripts/build.py` loses the plugin-directory pages, listing validation and designer-copy generation.


## Milestones

### Milestone 1: prototypes

Five things in this design have not been tried. Each is tested in a temporary folder outside the repository, and its result is recorded under `Surprises & Discoveries`. A prototype is promoted if its acceptance below is observed; otherwise the named fallback is adopted and the `Decision Log` updated.

First, `gh` as a downloaded program: fetch the official macOS archive, verify its checksum, and run `gh --version` with `GH_CONFIG_DIR` pointed at a folder inside the test folder. Acceptance: the version prints and nothing is written outside the test folder. Signing in, creating a repository and switching on Pages need a person to click Authorize, so they are first exercised in Milestone 6.

Second, the headless browser: install the `playwright-core` library and its "chromium headless shell" download into the test folder with `PLAYWRIGHT_BROWSERS_PATH` set, load a built starter, and capture two screenshots and a 1200 by 630 card. Acceptance: three image files, and a deliberately broken page is reported as failing. Fallback: use the agent's own browser for screenshots and keep only the build checks scripted.

Third, known-answer tests in Node 24.22.1: run `node --test` on a TypeScript test that imports `app/model.ts`. Acceptance: one passing and one deliberately failing test are reported correctly, and the same file still type-checks and builds in Vite. Fallback: add the `vitest` test library to the starter.

Fourth, relative addresses: build the starter with `base: './'` and with `VITE_SITE_URL` set to `http://127.0.0.1:<port>/some-repository/`. Copy `dist/` into a folder named `some-repository` inside an otherwise empty folder and serve the parent folder with `python3 -m http.server <port> --bind 127.0.0.1`. Acceptance: at `/some-repository/` the styles, fonts and card image load with no failed requests, and the page's share-card tag holds the absolute address. Fallback: have `publish` write the repository name into `vite.config.js`.

Fifth, a shared toolchain: two projects in a course folder whose name contains spaces, one `.toolchain/` at the top. Acceptance: the second project's dependency install uses the shared download cache and both build.

### Milestone 2: starter and local tool

Create `plugins/build-with-ai/starter/`, `tool/`, and the launchers as described above, with the commands `setup`, `new`, `dev`, `add`, `plan-check`, `check`. At the end, someone with no Node on their `PATH` can make a folder, run setup, create a project and see it pass the check.

Acceptance, from a temporary folder:

    $ bash course.sh setup
    OK git 2.x found
    OK Node 24.22.1 ready
    OK GitHub tool ready
    OK browser for checks ready
    $ bash course.sh new demo
    OK created demo
    $ bash course.sh check demo
    OK types
    OK 1 test passed
    OK built
    OK desktop and phone pages show content, no errors
    OK screenshots and share card saved

Editing `demo/tests/model.test.ts` to expect a wrong answer makes `check` print `STOP 1 test failed` and exit non-zero. Adding a web font link from another site to `demo/app/index.html` makes it print `STOP the page requested another website`. `bash course.sh add demo left-pad-typo-xyz` prints `STOP` with the reason.

### Milestone 3: GitHub and team commands

Add `signin`, `signout`, `clone`, `invite`, `start`, `undo`, `journal`, `publish`. At the end, a session can be started, journaled and published, and two clones can work on one repository.

GitHub itself cannot be exercised without a person clicking Authorize, so this milestone is tested against a stand-in. A bare Git repository (one with history but no working files, created with `git init --bare`) in a temporary folder plays the part of GitHub. Setting the environment value `COURSE_OFFLINE=1` makes the tool skip every call to `gh`: `clone` then accepts a folder path, and `publish` stops after the push and prints `OK pushed (offline: live site not checked)`. All calls to `gh` live in one file, `tool/github.mjs`, so that anything Milestone 6 finds wrong with them is fixed in one place.

Acceptance, with `COURSE_OFFLINE=1`: after `new demo` and pointing `demo`'s `origin` at the bare repository, `publish demo -m "First page"` prints the offline line and the bare repository holds the commit. `publish` without a journal entry prints `STOP no journal entry for this session`. In a second clone of the bare repository under a second folder, a non-overlapping change publishes cleanly after the first clone publishes; an overlapping change prints `STOP a teammate changed the same lines` and names the file. `undo` returns the files to their state at `start`. Without `COURSE_OFFLINE`, `signin` prints a one-time code and a web address; nobody authorizes it in this milestone, and the command is cancelled.

### Milestone 4: skills and references

Write the seven skills and three references. Extend `scripts/check.py` to enforce the budget and the rule that every command a skill names exists.

Acceptance:

    $ python3 scripts/check.py
    guidance: 2,4xx of 2,500 words
    tool: 5xx of 600 lines
    7 skills, 3 references, all links and commands resolve

### Milestone 5: simulated rehearsal

On this Mac, with `COURSE_OFFLINE=1` and a bare repository standing in for GitHub, one agent follows each skill in order inside a temporary course folder while another plays a student, using a simple invented project. This tests whether the prose produces the intended conversation. Transcripts are kept under the ignored `archive/runs/` folder and labelled as simulations; they are not evidence about real students.

Acceptance: for each of the six conversational skills the transcript shows one question at a time and no suggested answers, and when the simulated student tries to stop early the agent names the open question. The `build` transcript contains no question to the student. The project ends with a plan that passes `plan-check`, a journal entry for every stage, and a passing `check`. Whatever fails is fixed in the skill or the tool, and that skill's rehearsal is repeated.

### Milestone 6: validation with Jordan, then retirement and hand-off

Everything before this milestone is done by an agent alone. This milestone gathers every step that needs Jordan, ordered so the cheapest check of the least-tested code comes first. After any step that fails, fix the cause and repeat that step before going on.

Step 1, real GitHub (about ten minutes of Jordan's time). In a temporary course folder, without `COURSE_OFFLINE`, run `setup`, then `signin` (Jordan clicks Authorize in the browser), `new bwai-test-site`, write a journal entry, and `publish`. Acceptance: `publish` prints a live address; the page at that address carries the pushed commit in its build tag; fetching the page shows a share-card tag with an absolute address that returns an image; `git config --global --list` is unchanged from before the test; and `~/.config/gh` was not created. If Jordan has a second GitHub account or a helper, also test `invite`, `clone` with a pending invitation, and `publish --mine`; otherwise record these as untested. The calls in `tool/github.mjs` were written without being run, so expect corrections here.

Step 2, ChatGPT Work. Jordan installs the plugin in ChatGPT Work from the `reorg` branch and runs `$setup` and `$resume` in a fresh macOS user account, which has no Node, no SSH key and no saved GitHub sign-in. Acceptance: a live resume page, a journal entry in `resume/process/journal/`, and no files created outside the course folder. Jordan also confirms that `$plan` and `$build` invoke this plugin's skills and not something else of the same name; if they collide, the skills are renamed with a course prefix.

Step 3, Tournament Atlas. Jordan runs `$plan`, `$build`, `$iterate` and `$ship` as the student to produce a new repository, `tournament-atlas`, so the weekly demonstration looks exactly like a student project. The existing application at `/Users/jordan/Projects/bab-example-madness` is the reference: `app/style.css` carries over nearly unchanged, `app/model.js` becomes `app/model.ts`, and the rendering in `app/main.js` moves into React components. The iterate journal entries say plainly that the layout was ported from the earlier hand-tuned version at its commit. The old repository and its live site stay untouched until Jordan switches the gallery link in `site/apps.json`. Acceptance: the new site matches the old one side by side at desktop and phone sizes for the 2023 bracket, and its repository has `process/plan.md`, journal entries for each stage, and passing known-answer tests ported from the old `tests/` folder.

Step 4, retirement, only with Jordan's go-ahead. Delete `plugins/web-application-builder/`, `plugins/campus-designer/`, `plugins/grill-me/`, `plugins/create-your-own/`, `evidence/` (after moving the gallery images that `site/apps.json` references into `site/assets/`), `scripts/check-app-environment.py`, `scripts/check-library-recipes.py`, `.github/workflows/check-app-environment.yml`, and the plugin-directory templates in `site/`. Reduce `scripts/build.py`. Rewrite `AGENTS.md`, `README.md` and `docs/MAINTAINING.md` for the new shape and fold `docs/VALIDATION.md` into the latter. Acceptance: `python3 scripts/build.py` and `python3 scripts/check.py` pass; `python3 scripts/serve.py` shows the home page, gallery and install page; the generated catalogues list exactly one plugin, `build-with-ai`.

Step 5, hand-off. Write, in `docs/MAINTAINING.md`, the checklist for Jordan's Windows test (the acceptance steps of Milestones 2 and 3 and of steps 1 and 2 above, using `course.ps1`) and the steps for copying the finished tree into a fresh repository as its first commit. Move this plan into the ignored `archive/` folder as `AGENTS.md` requires for completed plans.


## Concrete Steps

All work happens on a branch so that `main`, which deploys the public site on every push, is untouched until Milestone 6 is accepted.

    cd /Users/jordan/Projects/decision-999
    git status --short            # expect no output
    git switch -c reorg

Prototypes and rehearsals use temporary folders outside the repository, for example:

    mkdir -p "/private/tmp/bwai/Build with AI" && cd "/private/tmp/bwai/Build with AI"
    env PATH=/usr/bin:/bin bash /Users/jordan/Projects/decision-999/plugins/build-with-ai/course.sh setup

After each milestone, from the repository root:

    python3 scripts/build.py
    python3 scripts/check.py
    git add <the paths changed in this milestone>
    git commit -m "<milestone summary>"

Stage named paths only. Do not push the branch to `main`.


## Validation and Acceptance

The plan is complete when all of the following can be observed.

A person with a fresh macOS user account follows the five steps in `plugins/build-with-ai/README.md` and, without typing any command, ends with a public placeholder page. Running `$resume` changes that page into their resume and adds a journal entry quoting their answers.

Running `$plan` and trying to stop after five questions makes the agent name the unanswered questions; `plan-check` fails until all eight are answered and the plan is approved.

Two people working on one project can each publish in turn, and the repository history shows both names.

Pasting a published address into a link-preview tool shows the project's name, description and Duke-styled card.

`python3 scripts/check.py` reports guidance at or under 2,500 words and the tool at or near 600 lines.

The repository contains one plugin, and Jordan can read every file in it without help.


## Idempotence and Recovery

Every tool command checks the current state before acting: `setup` skips downloads that already verify, `new` refuses an existing folder, `publish` reuses an existing repository and never forces a push. An interrupted download is removed and retried on the next run.

Work on the `reorg` branch can be abandoned with `git switch main`. Everything Milestone 6 deletes remains recoverable with `git show 40b5061:<path>` and in the local `archive/` folder.

Test repositories created on GitHub during Milestone 6 are named with a `bwai-test-` prefix so Jordan can delete them afterwards; the tool never deletes a repository.


## Artifacts and Notes

Current size, for comparison at the end:

    10,460 words   five workflow skills plus references in plugins/web-application-builder
    7,384 words    campus-designer skill and references
    16             library skills
    88             occurrences of "do not" or "never" in the workflow guidance

Size budget: 2,500 words across `plugins/build-with-ai/skills/*/SKILL.md` and `plugins/build-with-ai/references/*.md`; a 600-line target across `plugins/build-with-ai/tool/*.mjs`, `course.sh` and `course.ps1`. The first estimate for the tool is about 650 lines. If the target is missed, the plan records which command costs how many lines so Jordan can choose between raising the number and cutting a command.

Milestone 2 acceptance, observed 2026-11-11 in `/private/tmp/bwai/m2/Build with AI/` through `env -i HOME="$HOME" PATH=/usr/bin:/bin COURSE_OFFLINE=1 bash course.sh …` (no Node, Homebrew or nvm on `PATH`):

    $ bash /Users/jordan/Projects/decision-999/plugins/build-with-ai/course.sh setup
    OK git 2.50.1 (Apple Git-155) found
    OK Node 24.22.1 ready
    OK GitHub tool ready
    OK browser for checks ready
    $ bash course.sh new demo
    OK created demo
    $ bash course.sh check demo
    OK types
    OK 1 test passed
    OK built
    OK desktop and phone pages show content, no errors
    OK screenshots and share card saved
    $ # tests/model.test.ts edited to expect 11
    $ bash course.sh check demo          (the failing assertion is printed first)
    STOP 1 test failed                   (exit status 1)
    $ # a Google Fonts <link> added to app/index.html
    $ bash course.sh check demo
    OK types
    OK 1 test passed
    OK built
    STOP the page requested another website: https://fonts.googleapis.com/css2?family=Roboto
    $ bash course.sh add demo left-pad-typo-xyz
    STOP there is no library named left-pad-typo-xyz
    $ bash course.sh add demo papaparse
    OK added papaparse 5.7.1 (MIT, first published 2014, 25,749,219 downloads last week)

Milestone 3 acceptance, observed 2026-11-11 with `COURSE_OFFLINE=1`. Two course folders, `m3/alice/Build with AI` (`COURSE_USER=alice`) and `m3/bob/Build with AI` (`COURSE_USER=bob`), share a bare repository `m3/github/demo.git` standing in for GitHub:

    alice$ bash course.sh new demo && git -C demo remote add origin …/github/demo.git
    alice$ bash course.sh publish demo -m "First page"
    STOP no journal entry for this session
    alice$ bash course.sh check demo; … | bash course.sh journal demo --skill setup
    alice$ bash course.sh publish demo -m "First page"
    OK pushed (offline: live site not checked)
    $ git --git-dir=github/demo.git log --format='%h %an <%ae> %s' main
    216617d alice <alice@users.noreply.github.com> First page
    58eac5f alice <alice@users.noreply.github.com> Start demo from the course starter
    bob$ bash course.sh clone …/github/demo.git --as demo
    OK copied …/github/demo.git into demo
    bob$ printf '## Asked for …## Changed …' | bash course.sh journal demo --skill iterate
    STOP the journal entry is missing: Questions and answers, Checked
    (alice changes README.md and publishes; bob, without fetching, changes app/model.ts)
    bob$ bash course.sh publish demo -m "Clarify the model comment"
    OK pushed (offline: live site not checked)
    $ git --git-dir=github/demo.git log --graph --format='%h %an %s' main
    *   f577dfa bob Merge remote-tracking branch 'origin/main'
    |\
    | * cb3cbec alice Write the README
    * | 6767c71 bob Clarify the model comment
    |/
    * 216617d alice First page
    alice$ (edits app/theme/base.css after check)  bash course.sh publish demo -m "Alice tagline"
    STOP the app changed since the last check: run check first
    (alice and bob both change the tagline line in app/site.json; alice publishes first)
    bob$ bash course.sh publish demo -m "Bob tagline"
    STOP a teammate changed the same lines in: app/site.json
    (the card and screenshots, also changed by both, were settled automatically)
    bob$ (combines both taglines by hand) check, journal, publish
    OK pushed (offline: live site not checked)
    (a second overlap in README.md; bob runs check, journal and publish without removing Git's markers)
    STOP finish combining a teammate's changes in: README.md
    bob$ bash course.sh start demo          (after editing app/model.ts and adding a backlog file)
    OK unsaved changes kept; teammates' work will be combined at publish
    OK live at (not published yet)
    OK journal: 2026-11-11-1416-iterate-bob
    OK journal: 2026-11-11-1416-iterate-bob-2
    OK journal: 2026-11-11-1416-iterate-bob-3
    OK open: 2026-11-11-total-wrong
    OK unsaved: app/model.ts, process/backlog/
    bob$ bash course.sh undo demo
    OK every change since the session started is gone
    (git status is empty; app/model.ts matches its committed text; the backlog file is gone)
    alice$ bash course.sh invite demo bob carol
    OK offline: did not invite bob
    OK offline: did not invite carol
    alice$ bash course.sh clone …/github/demo.git --as demo-prototype --own
    alice$ bash course.sh publish demo-prototype -m x
    STOP no journal entry for this session
    (after adding an empty bare repository as origin, check, journal, publish: the prototype's history continues the team's commits)

`signin` against a stand-in `gh` (a shell script that fails `auth status` and, for `auth login`, prints GitHub's two device-code lines and then waits):

    $ bash course.sh signin
    OK open https://github.com/login/device and enter the code ABCD-1234; run signin again after clicking Authorize
    (the stand-in received: auth login --web --hostname github.com --git-protocol https --scopes workflow; it was then stopped)

After a passing `check`, nothing new appeared under `~/.config`, `~/.cache`, `~/.local`, `~/.npm` or `~/Library/Caches`.

Milestone 4 acceptance, observed 2026-11-11:

    $ python3 scripts/check.py
    guidance: 2,425 of 2,500 words
    tool: 467 of 600 lines
    7 skills, 3 references, all links and commands resolve
    $ claude plugin validate .
    ✔ Validation passed

Word counts by file: setup 230, resume 174, ideate 176, plan 284, build 153, iterate 266, ship 251, conversation 349, design 286, scope 256. Five uses of "never" remain, each a rule this plan specifies. Changing one plan question by a word, naming a missing command, or breaking a link each made `scripts/check.py` fail with the cause.

Milestone 5 acceptance, observed 2026-11-11 in `/private/tmp/bwai/m5/Build with AI/` through a wrapper running `env -i HOME="$HOME" PATH=/usr/bin:/bin COURSE_OFFLINE=1 COURSE_GITHUB=/private/tmp/bwai/m5/github COURSE_USER=sam-rivera`. Transcripts (simulations, not evidence about students) are in the ignored `archive/runs/2026-11-11-rehearsal/`:

    skill      transcript             one at a time  vague answer challenged  opinion handed back  early stop named
    setup      1-setup.md             yes            no opening               no opening           no opening
    resume     2-resume.md            yes            yes                      yes (twice)          yes
    ideate     3-ideate.md (repeat)   yes, one slip  yes                      yes                  yes
    plan       4-plan.md              yes            yes                      technical, decided   yes
    build      5-build.md             no questions asked
    iterate    6-iterate.md           yes            yes (phone report)       not triggered        not triggered
    iterate    7-iterate-2.md         yes            yes                      technical, done      yes
    ship       8-ship.md              yes            yes                      yes                  yes

    $ bash course.sh plan-check bake-planner
    OK the plan answers all eight questions and is approved
    $ bash course.sh check bake-planner
    OK 4 tests passed
    OK built
    OK desktop and phone pages show content, no errors
    OK screenshots and share card saved

Journal entries, one or more per stage: `resume/process/journal/` holds `…1425-setup…` and `…1430-resume…`; `ideas/journal/` holds `…1915-ideate…` (the pause) and `…1920-ideate…`; `bake-planner/process/journal/` holds `…1926-plan…`, `…1930-build…`, `…1933-iterate…`, `…1936-iterate…`, `…1941-iterate…` and `…1946-ship…`. The stand-in `sam-rivera/bake-planner.git` ends at the ship commit `3598602`, with `LICENSE` (MIT, naming the team), the value sentence as the tagline, and a nine-slide `process/pitch-starter.md` with a `REWRITE:` note on each slide.

    $ python3 scripts/check.py
    guidance: 2,451 of 2,500 words
    tool: 479 of 600 lines
    7 skills, 3 references, all links and commands resolve

Out of scope: verifying Windows (Jordan will test later; the Windows launcher and every command are still written), Canvas, grading scripts, AI features inside student apps, and the move to a fresh repository.


## Interfaces and Dependencies

The tool is invoked as `bash course.sh <command> [arguments]` on macOS and `powershell.exe -NoProfile -File .\course.ps1 <command> [arguments]` on Windows, always from the course folder. Commands at the end of Milestone 3: `setup`, `signin`, `signout`, `new`, `clone`, `invite`, `start`, `dev`, `add`, `undo`, `plan-check`, `check`, `journal`, `publish`. The environment value `COURSE_OFFLINE=1` makes every command skip its calls to `gh`, for testing without a GitHub sign-in. With it, `COURSE_GITHUB=<folder>` makes bare repositories at `<folder>/<owner>/<name>.git` stand in for GitHub repositories, and `COURSE_USER` sets the offline login.

Pinned downloads, each with a SHA-256 checksum in `plugins/build-with-ai/tool/toolchain.json`: Node 24.22.1 with npm 11.19.1 (already pinned in the existing starter), the GitHub command-line program, and the headless browser used by `playwright-core`. The starter's own dependencies stay as they are: `react`, `react-dom`, `vite`, `@vitejs/plugin-react`, `typescript` and the two React type packages.

Files with a fixed format that scripts read:

- `app/site.json`: an object with string fields `name` and `tagline`.
- `process/plan.md`: eight second-level headings, one per question, a "Technical notes" heading, and a final line `Approved by <name> on <date>`.
- `process/journal/<YYYY-MM-DD>-<HHMM>-<skill>-<username>.md`: a header with date, skill, author and anyone present, then four headed parts: Asked for, Questions and answers, Changed, Checked.
- `process/backlog/<YYYY-MM-DD>-<short-title>.md`: a header with `status` (open or done), `kind` (feature or bug), `source` (instructor, peer or team) and `priority`, then a description.

The published page must contain `<meta name="build" content="<commit>">`, which `publish` reads to confirm the live version.


---

Revision note, 2026-11-11: initial version, written after the design discussion between Jordan Meyer and Claude. It records the agreed decisions and resolves the open team-repository question with the `-prototype` naming scheme, which Jordan has not yet reviewed.

Revision note, 2026-11-11 (second): at Jordan's request, every step that needs him (the real GitHub sign-in and publish, the ChatGPT Work run in a fresh account, and the Tournament Atlas rebuild) moved into a single final milestone, followed by retirement and hand-off. Milestones 1 to 5 became agent-only: the GitHub prototype shrank to a download check, the relative-address prototype is served locally, and the team commands are tested against a bare repository with `COURSE_OFFLINE=1`. The Decision Log records this and that a Claude Opus 5.5 session implements Milestones 1 to 5.

Revision note, 2026-11-11 (third): Milestones 1 to 5 were carried out. Recorded in `Progress`, `Surprises & Discoveries`, `Decision Log`, `Outcomes & Retrospective` and `Artifacts and Notes`. The Milestone 5 findings changed `skills/ideate` (two questions), `skills/plan` (tagline read-back) and the tool (`COURSE_GITHUB` stand-in; `clone --own` adopting an existing plan folder). The rehearsal method was changed to an in-turn relay with short student replies, and two fixes were checked step by step rather than by a full repeat; both are in the Decision Log.
