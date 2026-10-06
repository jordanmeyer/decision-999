# Coordination checklist

Parent owns this file; preserve rounds and independent verdicts. Shared skill stays unchanged.

| Example | Builder | Reviewer | Current verdict / next action |
| --- | --- | --- | --- |
| Event | `/root/build_event` | `/root/review_event` | Round 3 PASS; reviewer proposals collected |
| Research | `/root/build_research` | `/root/review_research` | Round 2 PASS; reviewer proposals collected |
| Student organization | `/root/build_student` | `/root/review_student` | Round 2 PASS; reviewer proposals collected |

## Locations and preview

Each example is under `examples/{event,research,student-organization}/` with index.html, stylesheet, script, local font/license, rationale.md and builder evidence. Independent reviews/evidence are under matching `assessment/reviews/` folders. Shared preview is `http://127.0.0.1:8080/examples/`; Python server session 51660. Bundled Playwright with installed Chrome requires sandbox escalation. All three separate reviewers read the skill/references and captured/viewed all three actual pages at desktop/mobile.

## Review history

Event round1 PASS was explicitly superseded by round1-addendum FAIL: E1, narrow+200% text forced 412px width and lost white text. Round2 corrected overflow but FAIL E2: enlarged radio labels became single-character columns. Builder revision3 adapted gutters/padding; reviewer round3 PASS resolved E1/E2. Current CSS SHA256 `c28c6040c4b4336039b004e92dcfe9656783ead22e405cf9b73dc9f950b0fdca`. Final report: `assessment/reviews/event/round-3.md`. Earlier evidence preserved.

Research round1 FAIL R1: white hero-note text escaped Navy at narrow+200%. Builder added inherited emergency wrapping. Round2 independently PASS across1440/390/320 with default and both enlargement methods, interactions and focus. Report `assessment/reviews/research/round-2.md`; CSS SHA256 `aa56e61cb7ed0398674ff62e61c77226aeccac1a060a2026b42195d5901cb0c0`.

Student round1 FAIL S1: save accessible names omitted visible label; S2: enlarged narrow layouts overflowed. Builder stabilized labels, fixed shrinking/wrapping/stacking and replaced interest select with wrapping radios. Round2 independent PASS: all relevant states/accessibility names, membership branches, focus and reflow. Report `assessment/reviews/student-organization/round-2.md`; HTML SHA256 `919097077a2193ec34b7607ae98ae03a2893b765d7c7f441586b6c83b477cd43`, CSS `79fb926ff7cdd8d262be5a89ce0a57a9135b810bbae68c01ddc213d1592eb31d`, JS `60ec1d148e2bcdd96f62fa08438c89e491a3742a3a70deb79b1e0f8bdac24bf6`.

## Completion and handoff

All three current versions PASS; no unresolved required finding. After those passes each reviewer provided `skill-proposals.md` in its review folder. Parent examined all responses and synthesized `assessment/skill-proposals.md`: combined enlargement/reflow and readability, stateful label/name checks, and trustworthy readable visual evidence. Each includes observed evidence, source sufficiency, proposed wording/location, benefit and success check. The skill remains unchanged; user decides adoption.

Final public HTML/CSS/JS/font hashes match PASS reports; all16 skill files match `assessment/skill-original-manifest.json` (see `assessment/final-verification.json`). Assessment links resolve. Preview opening was requested for all three URLs and queued by the app; final response links them directly. No more page or skill edits are needed. Preserve passed public files and the evidence history.

Dispatch note: agent lifecycle occasionally reports slot limits while completed agents are being restored. Waiting for the active review to finish allowed followup dispatch; no work/evidence was lost. Event round3 successfully dispatched after student final PASS.
