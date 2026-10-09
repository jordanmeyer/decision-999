---
name: remotion-browser-app
description: Build controlled product-video composers with Remotion Player previews and client-side downloadable silent MP4 rendering, with explicit licensing and telemetry disclosure.
---

# Downloadable browser videos with Remotion

Read [selection](../../references/library-selection.md), [workflow](../../references/workflow.md) and `remotion` in [inventory](../../references/libraries.json). This is a specific exception to the normal runtime boundary, not permission to add unrelated services. Use only the approved pinned configuration. Establish license eligibility for the actual operator before declaring a free license; company/commercial contexts may differ from an individual's teaching prototype. The supplemental record preserves an unresolved upstream MIT-notice ambiguity; it does not settle it or grant universal free eligibility. Document the actual operator’s license basis. Preserve the distributed license and notices, including the supplemental @remotion/licensing provenance record. Retain the MPL notices and exact source-distribution links for unmodified Mediabunny packages in the published notices; review source-availability duties again if modifying covered code.

The browser renderer sends render-event telemetry to Remotion, including IP address, page origin, render type and status; it does not send video content. Disclose this before rendering and obtain the app owner's explicit acceptance if absent. The maintainer authorized this exception for the recorded video example only. Do not claim it is telemetry-free or silently suppress licensing telemetry. Preview/render content and media remain local. See [official telemetry documentation](https://www.remotion.dev/docs/telemetry).

Use matching Remotion, Player and web-renderer packages plus their inventory-pinned React peers. The same component and validated props drive preview and export. Use controlled authored templates with bounded copy length, duration, dimensions and colors, plus local licensed assets. Arbitrary uploaded React code, remote embeds and external fonts are outside this recipe.

```jsx
import { Player } from '@remotion/player';
import { canRenderMediaOnWeb, renderMediaOnWeb } from '@remotion/web-renderer';
// composition includes component, width, height, fps, durationInFrames and id.
const options = { composition, inputProps, container: 'mp4', videoCodec: 'h264', muted: true, outputTarget: 'arraybuffer' };
const support = await canRenderMediaOnWeb({ ...options, width: composition.width, height: composition.height });
if (!support.canRender) throw new Error(support.issues.map(issue => issue.message).join("; "));
// Inspect the supported API result; show an actionable unsupported-browser state.
const rendered = await renderMediaOnWeb({ ...options, licenseKey: declaredLicense });
const blob = await rendered.getBlob();
```

Check actual WebCodecs capability; merely displaying Player does not establish export support. Keep render progress, cancellation and errors visible. Revoke obsolete blob URLs and clean up resources. Use [Campus Designer](../campus-designer/SKILL.md) tokens and system fonts in templates; test actual renderer support for every composition element. Do not introduce remote images or music to make the example look finished.

Verify preview/export frame agreement, longest permitted text, reduced-motion interface behavior, cancellation/retry and a real downloaded playable file with expected dimensions/duration. Inspect beginning/middle/end frames; a nonempty blob is not proof of a correct video. Record codec/browser limits, licensing basis, disclosed telemetry and observed requests in [Evaluate](../evaluate-browser-app/SKILL.md). Publish only after reviewer verifies the controlled templates and real export.

The candidate probe now excludes optional AAC/MP3/FLAC encoder packages through explicit Vite aliases to a local rejection module. This is a silent-MP4 application configuration, not a Remotion built-in switch. Force `muted: true` after spread options in both capability and render calls. Keep a build-time module-graph assertion that those encoder packages are absent, and verify the exported file contains no audio stream. Do not add audio until the corresponding codec notices/source obligations are resolved.
