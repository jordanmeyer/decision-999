# Price & profit

A local single-product, single-period pricing scenario calculator. Edit the four inputs to see exact USD profit and whole-unit break-even. Reset example restores the synthetic starting scenario. No inputs are persisted or transmitted.

Money accepts 0–1,000,000 USD with at most two decimals; quantity accepts whole units0–1,000,000. No currency symbols, commas, exponent notation or negative inputs. Calculations use native BigInt integer cents and exact ceiling division; no floating-point currency rounding. Break-even may exceed the editable quantity cap. Zero fixed costs permit zero-sales break-even even when growth would lose money; explanations distinguish these cases.

Quantity is an assumption, not a demand forecast. Changing price may change demand. Constant costs, one product and period; excludes tax, financing, capacity and volume discounts. No accounting certification is implied.

## Run locally

From this folder: `python3 -m http.server 9311 --bind 127.0.0.1`. Open http://127.0.0.1:9311/app/ and http://127.0.0.1:9311/tests/. Existing Python is only a development server; visitors need a modern browser supporting modules and BigInt. No package manager, compile or build step is required. For production, copy app/ contents to dist/ and serve that directory. GitHub Pages workflow packages app/ only; it has not run remotely.

## Provenance and licenses

All calculator code and synthetic examples were authored for this simulated trial. Initial scaffolding and Pages workflow came from frozen Browser App Builder commit3966d48. No third-party runtime libraries, images or downloaded font files are shipped, so there are no library notices to generate. Georgia/Arial are system fonts; Georgia substitutes for EB Garamond and Arial for Open Sans without redistributing fonts. Duke navy/royal color values use the packaged public visual guidance; no university logo, affiliation or endorsement is claimed. Project source licensing and public destination remain an owner's publication decision.

No public repository or deployment exists. See SETUP.md, PLAN.md, TRIAL.md, EVALUATION.md and DEPLOYMENT.md for the local evidence and pending handoff.
