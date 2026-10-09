# Independent instruction review — October 8, 2026

A fresh subagent read the package, shared references, five workflow skills, workflow template, and generated designer. It did not edit files, install software, run a student workflow, or publish anything.

## Review request

Review these scenarios: an existing agreed plan with no Git or preview; a live dashboard request using a confidential employer CSV and API key; evaluation at commit A followed by report B, app changes, and an ignored test; a pricing app using the bundled designer without the separate designer plugin. Identify actionable gaps in handoffs, privacy, freshness, publication, and bundling.

## Findings and resolutions

1. P2: A combined `git diff HEAD` can miss opposing index/working-tree edits. Replaced it with separate committed, staged, and unstaged comparisons. The maintainer boundary check reproduces this case and rejects it.
2. P3: Setup verification assumed starter controls still exist on reruns. Revised it to check the existing application's actual module loading and representative interaction.
3. P3: Pages settings were described before creation of a new repository. Revised the sequence: local preparation and evaluation, authorized empty repository creation, Pages configuration, then push.

The reviewer found coherent instructions for all four scenarios, explicit public/synthetic data boundaries, app-only publication, and a complete 16-file designer bundle matching the canonical source. These are instruction-review findings, not observed student behavior or cross-platform setup results.

## Follow-up plan and implementation review

A second read-only subagent review found one defect and two improvements: decimal currency caused whole-unit break-even to round from 1,000 to 1,001; source-only comparisons did not expose changes to the meaning of PLAN.md; and the simulation tests would accept constant-zero demand. It reran repository, nine existing Git/publication, and whitespace checks, but did not rerun browser tests or publish anything.

Corrections in 0.1.1 use bounded integer-cent arithmetic with six added pricing cases; preserve and compare the evaluated plan, distinguishing substantive and editorial changes; and add an independently calculated five-day demand/stock expectation. The follow-up run added three plan-comparison boundary checks. Browser evidence preserves both pre-fix pricing failures and the deliberate zero-demand mutation failure. No new student runtime dependency or general policy analyzer was introduced.
