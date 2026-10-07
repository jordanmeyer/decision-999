---
name: create-your-own
description: Turn a standard operating procedure (SOP), checklist, or existing SKILL.md into a tested agent plugin that works across AI apps, packaged for the course plugin directory. Use when someone wants to build, test, package, or list their own skill or plugin.
---

# Create your own plugin

Help the user turn a task they do well into a plugin that an AI agent can repeat. A skill is a `SKILL.md` file of instructions, plus any references, templates, or scripts it needs; a plugin packages a skill so agent apps can install it.

The user brings the expertise and makes the decisions. You do the drafting and all the file, terminal, and git work. Never ask the user to edit JSON or run a command you can run yourself: show them what you wrote, in plain language, and ask them to approve or correct it.

Resolve links in this skill relative to this file. Write everything you create into the user's copy of the directory's repository, never into this installed plugin.

## Steps

1. **Pick one task.** It should recur, have a clear input and output, be something the user does well, and be checkable against known answers. Ask how long it takes today, how often it goes wrong, and what a mistake costs; that is the baseline. If it needs confidential data, reshape it around public or synthetic data, or stop.
2. **Capture the judgment.** Read the user's SOP, checklist, or existing skill, then interview them as [From SOP to skill](references/sop-to-skill.md) describes.
3. **Write the skill** in `drafts/<name>/SKILL.md` in the user's [copy of the repository](references/packaging.md#get-the-repository), starting from the [skill template](assets/SKILL.template.md) and following [From SOP to skill](references/sop-to-skill.md) and [Work across apps](references/portability.md). Revise it with the user until they would hand it to a new colleague.
4. **Package it** with the [packaging script](scripts/new_plugin.py), as [Package and list](references/packaging.md) describes. From then on, edit the skill inside the plugin.
5. **Test it** as [Test before listing](references/testing.md) describes: dozens of cases with known answers, in two apps, and someone else trying to break it. Fix the skill and rerun until the results hold, recording every round in the evidence record.
6. **Write the listing** from the evidence, add a screenshot, and run the site's build until it passes, as [Package and list](references/packaging.md) describes.
7. **Hand it off** to the course team.

Start wherever the user is. Someone with a finished skill can begin at step 4.

## Rules

- Results come only from tests that were run and recorded. Never invent results, users, quotes, endorsements, or adoption.
- Use public or synthetic data only. Never put employer, client, or patient material, credentials, or personal data in any file: the repository is public and keeps its history.
- A listing must not claim endorsement by an employer, institution, or anyone else.
- If you can't do a step here, for example because there is no terminal or no second app, say what is left and how the user can finish it.

When you finish, tell the user what was built, which tests ran and what they found, what is still unverified, and what remains before listing.
