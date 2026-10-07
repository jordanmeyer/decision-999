# Create Your Own

Version 0.1.3. The development guide and packaging script the course uses to turn a standard operating procedure (SOP), a checklist, or an existing `SKILL.md` into a tested agent plugin that works across AI apps.

## Install

Claude on the web or desktop: **Customize › Plugins › Add › Add marketplace**, enter `jordanmeyer/decision-999`, then add the plugin from **Discover**.

Claude Code:

```sh
claude plugin marketplace add jordanmeyer/decision-999
claude plugin install create-your-own@decision-999
```

Codex (ChatGPT):

```sh
codex plugin marketplace add jordanmeyer/decision-999
codex plugin add create-your-own@decision-999
```

## Use

Start a new session after installing, then ask in plain language. For example:

> Use create-your-own to turn the attached SOP for reviewing vendor invoices into a plugin. Interview me about where new analysts usually slip, draft the skill, and package it so I can start testing.

To call the skill directly, use `/create-your-own:create-your-own` in Claude or `$create-your-own` in Codex.

The agent interviews you, drafts the skill, and does the file and terminal work. You make the decisions and approve the text.

## What it needs

A procedure you know well, and two or three public or synthetic examples of it done right. Never confidential data.

Packaging needs Python 3 and your own copy of the directory's repository, a fork or a clone. In the repository, the agent drafts the skill in `drafts/<name>/` and packages it with:

```sh
python3 plugins/create-your-own/skills/create-your-own/scripts/new_plugin.py drafts/<name> --developer "Your Name"
```

That creates `plugins/<name>/` and `evidence/<name>/EVIDENCE.md`. The listing starts blank, and the site's build (`python3 scripts/build.py`) names each unfinished item until the plugin is ready for review.

## Contents

`skills/create-your-own/SKILL.md` is the entry point. It links to four guides (from SOP to skill, working across apps, testing, and packaging and listing), templates for a new skill and for its README and evidence record, and the packaging script.

## Limits

Scaffolding only: it guides the work and packages the result, but a plugin is only as good as your expertise and your tests. The course team decides what is listed after review.

## Evidence

How it was tested, and what the tests found, is in its [evidence record](https://github.com/jordanmeyer/decision-999/blob/main/evidence/create-your-own/EVIDENCE.md).
