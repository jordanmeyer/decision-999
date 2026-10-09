# Remaining optimizer UI checks

Application source: `bd31dc171c1500a1d70ff0a33bc654abf7d36a96`. Instructions only. Preserve actual27/27 browser, cancel/retry, prep100/118 infeasibility, zero-demand editability and Tiny/Reset evidence. No unchanged suite rerun is needed.

## Actual busy-edit evidence — now complete

Root has now passed this procedure; browser-busy-edit.txt preserves the actual worker log. Do not repeat it unchanged. OPT-12 is complete within the conditional status scope below. Keyboard Copy contents also passed.319px result and200% allocation views passed; horizontal ArrowRight, dense Tiny geometry and complete assumptions/errors remain separate layout tasks.

Open [production ui-states.html](http://127.0.0.1:9704/bab-example-optimizer/ui-states.html), wait for the iframe app to finish its initial solve, then choose **Exercise edit during solve**. The existing authored fixture resets and solves default, observes the next real `aria-busy=true` mutation, enters oven157 through the app's real input event, and retries with the actual worker. Expected visible log: busy with Cancel visible/assumptions collapsed; edit clears evidence and releases busy state; retry says commitments do not fit,158 used/157 available. Save the full log, including failures. This is deterministic event timing against a real worker, not a mocked worker response or a human task.

The observer runs at the mutation microtask after the Solve click; a worker completion message is a later task. This avoids the manual attempt that reached an already-completed solve. If no PASS/FAIL appears within45seconds, record a harness failure and reload; do not treat a stuck page as a pass. The fixture establishes editing during an active request; it does not prove the solver had reached branch-and-bound computation.

## Solver statuses: exact applicability

OPT-12 requests a feasible-but-not-proven-optimal UI result **“if reproducibly inducible.”** No supported-input fixture is currently known to induce that status reliably. The shipped worker fixes5seconds per solve and35seconds for the whole request; no UI control changes those budgets. Three integer quantities are each bounded0–100, so there are at most101³=1,030,301 candidate integer points, with three positive-use constraints and finite objective coefficients. Size alone does not prove a timing bound, but raising a capacity to10000 does not create an unbounded or larger-variable model.

- Infeasible commitments are deterministic: oven157 versus required158, or already-observed prep100 versus118. With positive resource use, the minimum quantities are the least resource-intensive allowed mix.
- Unboundedness is mathematically impossible under the shipped finite bounds. The existing raw `status-worker.js` unbounded test deliberately solves a different LP; it is real-engine status evidence, not an app UI state.
- Limited-incumbent and missing-incumbent cases in `tests/tests.js` are explicitly **Adapter** cases. They validate interpretation of supplied solver responses; they do not induce a natural timeout or verify its rendered UI. Source review covers provisional wording, unavailable LP proof and negative-incumbent explanations.
- Worker-load/browser-support failure and the35second nonresponse deadline are environment failures, not deterministically inducible with supported numeric inputs. No browser capability is disabled and no timer shortened merely to manufacture a product pass.

Disposition: retain the natural limited-result UI state as **not reproduced; conditional verification not exercised**, not as an unimplemented required feature. Do not add a product delay, solver-budget control, unsupported model or response stub. If a real supported case later produces it, record inputs/browser/status and inspect incumbent wording, no false integrality-loss claim, LP proof labeling and copied status.

## Remaining layout and supported-bound controls

Use [narrow.html](http://127.0.0.1:9704/bab-example-optimizer/narrow.html) and separately [text200.html](http://127.0.0.1:9704/bab-example-optimizer/text200.html). Record dimensions and computed text sizes with the authored metrics buttons; inspect content, not only overflow.

| Gap | Actions and pass condition |
| --- | --- |
| ALL-12 form/errors | OPT-09/14 action placement and actual busy-edit/retry now passed. Inspect all coefficients and labels at320 and separately200%. Blank a capacity, collapse assumptions, then Solve: inspect disclosure opening, focused invalid field and readable error/status text at those two settings. |
| ALL-12 dense geometry/tables | Load Tiny; inspect the full polygon, tick/axis labels, LP diamond, objective line and exact constraints. Focus its scrollable region and use horizontal arrows to reach the right edge without page overflow; at200% verify text really enlarges rather than scaling the diagram back down. Inspect LP/resource/manual tables and all coefficient labels. |
| Unsupported+60 UI and OPT-15 | Set oven9940, Solve →$998; Add60 oven reaches10000. At9941 and10000, the oven experiment has no action and explains the10000 bound; prep/packing experiments remain. Breakfast24 reads “At assumed demand maximum.” The27-case suite already covers solver behavior; this check covers rendered controls/labels. |

ALL-11 screen-reader and ALL-16 novice evidence remain separate human sessions in the prepared packet. OPT-13 is an optional priced-overtime assignment, not a requested extra optimizer.
