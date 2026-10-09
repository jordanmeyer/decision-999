# Decisions

## Product and scope

The simulated student chose a fictional Foldline desk tray, classmate audience, three concept benefits and a closing invitation with no fabricated live URL. The proposal's loose “benefit evidence” phrase was explicitly resolved to concept copy, not empirical proof. Product name, headline, three benefits and CTA have code-point limits 24/54/56 each/48. Empty strings, Unicode control characters and unsupported settings are rejected. Text is passed as React text, never executable HTML.

Story timing is 25% introduction, 50% all three benefits, 25% invitation. Benefit cards show one benefit per third, with CTA in the final third. Both use one composition in preview and export. Sizes are 960×540 and 540×960; durations are 360 or 540 frames at 30 fps. The file can report one frame less in endpoint duration; acceptance checks actual frame count and cadence, not merely a filename.

## Libraries with a role

Remotion 4.0.534 provides frame-driven composition, its Player provides exact preview and frame seeking, and its Web Renderer creates the actual local H.264 MP4. React/ReactDOM 19.3.0 are required peers. Vite 8.3.4 and its React plugin 6.1.2 compile JSX and enforce the exact silent-package graph. No unrelated library is included.

The artwork is authored local SVG geometry. Arial/Georgia are local font families; no remote assets are fetched. Canvas font metrics and grapheme wrapping share one implementation across preview and export. The interface follows the bundled Campus Designer guidance with a restrained editorial layout, clear blue action hierarchy, copper detail, visible focus and native controls. It makes no institutional endorsement claim.

## License, source and telemetry

The user approved Remotion's specific video-only telemetry exception and the actual individual noncommercial teaching prototype basis. The UI discloses IP/origin/render type/status before rendering; content stays local. The adapter uses the exact library API, truthful production mode, free-license for this declared basis, and does not intercept telemetry. The Player's license acknowledgment reflects that already-confirmed basis; it is not an exemption for other operators.

`@remotion/licensing` lacks a standalone notice in the installed package despite MIT metadata. A supplemental notice preserves the exact upstream Remotion license and explicitly retains that provenance ambiguity. Do not infer universal MIT/free rights from the metadata. Remotion and its renderer notices are retained verbatim.

Mediabunny 1.56.1 is unmodified MPL-covered code. The distributed notice links to the exact npm source tarball containing src, and its exact upstream tag. Optional AAC/MP3/FLAC packages installed transitively are excluded from published module code by exact aliases plus a build assertion. Their installed notices are still retained. Forced muted true is necessary but is not used as proof of package exclusion.

## State and recovery

Every export clones one valid configuration. Edits abort active rendering, clear prior object URLs and reset the preview. Retry waits for cancellation to settle. Navigation aborts work; completed output URLs survive a persisted pagehide but are revoked on ordinary teardown. Forms disable autocomplete; actual Back was checked before interaction for restored-control consistency. No persistence or draft recovery was promised.

Capability failures leave the preview usable; renderer errors are surfaced with retry guidance. The test browser supports export, so unsupported hardware and forced encoder failure were source-reviewed rather than claimed as physically exercised. Cancel, retry, edit cancellation, invalid draft, real playback and actual history were exercised.

## Simplification pass

Kept one config, one validation owner, one composition and one export adapter. There is no generic timeline editor, asset abstraction, fake rendering fallback, audio path, storage layer or dependency wrapper. Interface CSS fixes do not alter the composition. A narrow transcript defect was fixed at the grid/text owner instead of introducing global overflow hiding.
