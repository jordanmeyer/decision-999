# Gallery verification and review

The local gallery now leads with ten business questions, unchanged observed previews, actual app names and one-line lessons. Library names are secondary. Three earlier plain-app links retain their 0.1.1 label. The patch is local; newly authored walkthrough URLs become available after a later repository push.

Each walkthrough links the original campaign brief separately from the subsequent simulated conversation, agreed plan, source, evaluation and review. Independent review caught that the first draft incorrectly called the later conversation the opening request. This matters particularly for the roadmap and presentation, whose scope narrowed during the historical campaign. The corrected records expose that distinction and do not advertise missing features.

## Rendered checks

Served with `python3 scripts/serve.py` at `http://127.0.0.1:8000/decision-999/`. In-app browser inspected the actual listing, then an authored same-origin iframe fixture containing that same page at specified widths. The host's global viewport scaling made native screenshot dimensions misleading; measured document widths were used.

- Requested1440: clientWidth1439 and scrollWidth1439. Actual typography, image/content alignment and first three examples inspected in [desktop](gallery-desktop.jpg).
- Requested390: clientWidth389 and scrollWidth389. Previews and text stack without clipping; [narrow](gallery-narrow.jpg).
- Requested320: clientWidth319 and scrollWidth319. Final video example and copy controls remained usable.
- Nine preview images were observed loaded initially; the final lazy video image loaded on keyboard navigation (naturalWidth1450). Every preview uses byte-identical historical JPEG data; earlier source filenames incorrectly ended in .png, so gallery copies use .jpg. No screenshot content was edited.
- Tab from the first business-question link focused “How Stillwater Coffee was built.” Enter on the install copy control ultimately displayed “Copied to the clipboard,” both in the frame and direct page. The first immediate text read preceded asynchronous clipboard completion; a later status read confirmed success.
- Rendered destinations matched all ten live URLs and corresponding new walkthrough paths. All original source record targets exist locally, as checked independently. New remote walkthrough availability is pending publication, not reported as live.

The tool's read-only DOM mirror could not iterate document.fonts or access iframe.contentDocument. Frame-scoped locators worked for measurements. One captured console error said MutationObserver.observe received a non-Node during the iframe/tool sequence, without an application source URL. The directory's source contains no MutationObserver; provenance was not established, so an entirely clear console is not claimed. Rendered layout, image loading and actual copy behavior still completed. Separate design-agent font instrumentation supplies the actual loaded-face evidence.

## Boundary review

The repository checks reject evidence-path escape and non-HTTPS walkthroughs, retain example-label escaping, confirm preview byte identity and ensure the evidence source tree is not copied to publication. An independent reviewer reproduced stale font files surviving canonical sync. Generation now replaces only its generated starter font directory, with a stale-file regression in both starters; student projects are untouched.

No ten-app redeployment, Work routing, physical-phone or novice-user claim is made. The responsive harness was temporary and is not part of site source.
