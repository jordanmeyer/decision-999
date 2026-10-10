# UI corrections for docs/MADNESS-REVIEW.md

Implemented in `/Users/jordan/Projects/bab-example-madness/app/main.js`, `app/style.css`, and `app/index.html`. No commit or push by this agent.

- The bracket is one fixed 1004×1024 drawing with 127 nearest-slot centers, one roving keyboard stop, geometric arrow navigation, clean resting state, explicit pinning, Escape clearing, and visible pin chip.
- Only unresolved stages draw probability routes/labels. Highlighted names use a pale strip with bold dark text; completed slots are represented by their names. Per-slot losses come from the model helper, not eventual title elimination.
- Team strings come entirely from generated canonical `bracketName`/`superShortName`; the dense bracket deliberately uses native Arial 12px, with seeds 10px.
- Route growth/shrinkage is staged through Web Animations; reduced-motion skips animations. Same-team stage changes only update emphasis. Pointer preview is disabled during 500ms playback.
- One calendar-positioned slider track replaces the range/date buttons/select. Arrow/Home/End keys move through available dates; unavailable final-game tick remains visible. Status is derived from model helper and shown in bracket and slider semantics.
- Automatic bracket/table mode follows available1004px space until the student explicitly chooses a view. Phone table puts title odds second, folds seeds into names, removes Region/Seed, and hides the first round when fully resolved.
- Heat encoding interpolates white→navy continuously and computes black/white foreground contrast rather than applying white blindly at50%.
- Compact controls lower first team row from root-observed523px to root-observed391.56px at1280. Results center follows the previewed team; reconstructed label appears only in Forecasts.
- Year/catalog fetches use one explicit data revision query so returning browsers load the new label schema. bfcache restoration respects an unpinned state.

Simplification removed the former inline name maps, duplicated timeline controls, hidden duplicate status/eyebrow nodes and styles, hidden coverage-branch prose, unused `selectTeam` flag, and split ownership of First Four pin state.

Own browser checks: ArrowRight previews Alabama's Round32 probability99% with one tab stop; Enter pins; End reaches2023Apr1 without completed-round bands or percentage labels; Results keeps Alabama identity and marks Sweet16loss; Escape clears routes, pin, and detail.2020 disables unavailable controls,2026reenables clean127-slot bracket. FirstFour pin/clear leaves no stale pressed button. Browserconsole noerrors. Model/data tests80/80; build passes with preexisting ECharts bundle-size warning. Independent reviewer is exercising all years/sizes and may request follow-up corrections.

Current build: main-DQGqCqRq.js, style-BQIAlD77.css. Preview http://localhost:9742/bab-example-madness/ running in exec session5626; browser tests http://localhost:9741/tests/index.html session71799. Keep until root finishes verification; this agent can stop them on request. Initial sandbox previews failed because Vite writes config temp files in externalapp; ordinary escalated rerun succeeded.
