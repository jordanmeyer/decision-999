# Team hover and route attachment — 2026-10-10

The user identified the yellow selected fill, delayed button hover outline, and a detached route. The first correction removed fill and borders but added a thin connector while retaining labels above the bracket. The user rejected that visual mismatch. It was superseded by source `dad8ad6991c0d871506e4842190827c148052a98` in bab-example-madness.

The final implementation centers team names vertically on their bracket coordinates and extends the first probability path directly to the text edge. The extension shares that path’s width, joins and animation. The separate thin connector was deleted. Team controls have no background fill, border or hover shadow. White behind just the text prevents existing branch lines from crossing later-round names. Keyboard focus has an underline, or a copper dot for an empty slot. Whole-canvas hover remains as requested.

Validation: production build succeeded; existing large-chunk warning remains. Route rendering 22/22 (including both sides, First Four, late forecasts, clearing, interrupted animations and rasterized rounded corners). Design regression 110/110 and 2,984 measured labels. Model checks 80/80; source data/model unchanged. Run npm run test:browser and open tests/route-rendering.html and tests/design-review.html. Production preview uses npm run build then npm run preview. Toolchain remains Node 22.19.0/npm 10.9.3.

Native pointer transitions reproduced the original yellow fill and inset outline and verified their removal. Browser automation uses native drag gestures for pointer travel, which can also create browser text-selection highlights or pin a team; those are distinct from application hover styling. Final live evidence uses a clean reload and ordinary app controls. `keyboard.jpg` records the earlier thin-connector iteration, retained as a failed visual round; the later centered image supersedes it.

Published payload: `e11e9df604e3c2ea59cde0000ef13882eb18aa00`. Live deployment verification follows.

Live verification: [Actions 38025449854](https://github.com/jordanmeyer/bab-example-madness/actions/runs/38025449854) succeeded for e11e9df. Returning live browser loaded main-Va8lhdsu.js and style-DCGADk7f.css. Alabama’s path begins at `M 82.068 56 H 138 V 65 H 210`; the measured name center is y=55.994, and the entire initial path has stroke width 15.3948px. The team control has transparent background, zero border and no box shadow. No production console errors observed. `live.jpg` shows the final result without native text-selection artifacts.
