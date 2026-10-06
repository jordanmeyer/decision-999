# Independent review brief

Read `.agents/skills/duke-designer/SKILL.md` and the relevant source references (identity, color, typography, marks, web, review, sources; imagery if needed). Read relevant original evidence under `preparation/evidence/` or official URLs when needed to resolve an issue. Do not invent unseen source requirements.

You own one example's independent verdict but must inspect **all three actual rendered pages**, at desktop and mobile, to evaluate consistency without forcing a template. Page URLs:

- http://127.0.0.1:8080/examples/event/
- http://127.0.0.1:8080/examples/research/
- http://127.0.0.1:8080/examples/student-organization/

Write only under your assigned `assessment/reviews/<example>/`. Do not edit public pages, builders' evidence, shared skill, parent checklist or another reviewer's reports. Do not spawn agents. You cannot rely on a builder's self-check as independent evidence.

## Evidence and checks

Use actual Chrome rendering through bundled Playwright at `playwright`; launch `{channel:'chrome',headless:true}`. Shell browser launch needs `sandbox_permissions:'require_escalated'`; the parent has confirmed this works. Use your own browser/context and save screenshots for all three pages at desktop around 1440px and mobile around 390px. Inspect screenshots using view_image; successful screenshot capture by itself is not visual review. Additional close-up screenshots help evaluate focus and interaction states.

For your assigned example test 320px reflow, 200% text sizing, longest headings, font loading, all demonstration interactions including validation/completion/reset/close states where present, keyboard navigation and visible focus, meaningful labels, actual color pairs including states, and local asset/console errors. Inspect current source as a supplement, not replacement, for rendered evidence. Evaluate hierarchy, readable typography, composition, fictional labeling, unsupported claims and institutional scope. Missing tools or evidence is unchecked and cannot support PASS.

Every finding must say **Implementation defect**, **Skill gap**, or **Design preference**. An implementation defect means existing guidance is adequate and the builder missed it. A skill gap means missing, ambiguous, contradictory or too restrictive guidance. A preference is a reasonable alternative within rules and does not automatically block PASS. State the exact element, observed result, source/rule, severity, and concrete correction if required. Do not require changes for invented Duke rules or merely personal taste.

## Verdict and handoff

Save `round-1.md` with artifact version digests (SHA-256 for HTML/CSS/JS/fonts or a manifest), browser/viewports, screenshot paths, concrete observations, tested behavior, findings and explicit **PASS** or **FAIL** for your assigned page. Include brief comparison observations for the other two. A PASS is your own independent verdict on the current page, not accessibility certification. If anything essential is untested, report it and do not pass.

Send the parent a concise result and end your turn to free a slot for builder corrections. The parent routes implementation defects to the responsible builder. On follow-up inspect the revised actual render/behavior and write `round-2.md`, increasing round numbers each time; never overwrite earlier evidence. Later edits invalidate previous PASS. After all three pages pass, the parent will ask for skill-improvement proposals. Do not modify the skill.
