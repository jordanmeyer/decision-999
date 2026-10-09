# Approval Studio

Draw a purchase approval process, edit its routing, and compare expected entered elapsed time with each team's daily workload. The invented 90/10 policy saves101 expected minutes per request while finance remains overcapacity. This is a teaching model, not a queue forecast.

Source: https://github.com/jordanmeyer/bab-example-process

Intended site: https://jordanmeyer.github.io/bab-example-process/ (actual publication status in DEPLOYMENT.md).

## Use

Try the90/10 example, change requests/day or team capacity, and compare the results. Select a diagram step or use Review step in the native inspector; edit label/team/touch/wait. Select a route to change its endpoints or share. Add/delete steps/routes with ordinary buttons or connect handles directly. Draft errors identify bad share totals, missing connections or cycles; current calculations pause until valid. Restore last valid process recovers. Start/completion are protected from UI deletion. The audit table explains every step's weighted contribution.

Use current as baseline takes a valid in-memory snapshot. JSON export downloads the current valid process. Import checks strict version1 schema and model constraints before changing anything; baseline is unchanged. Refresh restores the original example. No local storage, backend, accounts, secrets, telemetry or external runtime assets. Files never leave the browser. Read Model and JSON contract in the app for the complete limits.

## Interpret

Touch and entered wait are separate minute inputs. Every route is an alternative; no parallel paths or cycles. Expected time weights tasks by probability of visiting them. Team work/day = requests/day × expected team touch time; capacity compares productive minutes/day. A load above100% means entered demand exceeds capacity; exactly100% has no spare capacity. Entered waiting time is not predicted from load. No queue/backlog forecast, staffing optimization, calendar, cost, uncertainty distribution or business certification. Zero arrivals preserve the conditional per-request path time but make daily workload zero.

## Develop and verify

Use Node22.19.0/npm10.9.3. npm ci --cache /private/tmp/bab-npm-cache; npm run test:browser -- --port 9507; open /tests/. npm run build collects notices and compiles app/ to dist; npm run preview -- --port 9508 serves /bab-example-process/. npm run dev is available. tests/layout.html provides production frames at1440/390/320 with both servers running; ?width=320, ?width=390 or ?width=1440 shows just one frame. Browser checks import app/model.js; production packaging is evaluated separately. EVALUATION and REVIEW preserve outcomes and failed rounds.

## Provenance

All processes/fixtures are synthetic, and the exact planning exchange is explicitly simulated. Public Git attribution was authorized as Jordan Meyer <jordanmeyer@protonmail.com>. React Flow12.12.0 (MIT) supplies editable diagrams; React/React DOM19.3.0 (MIT) are required runtime peers. Vite8.3.4 and React plugin6.1.2 build the local bundle. Exact lockfile retained; all installed runtime distribution notices collected in app/public/THIRD-PARTY-NOTICES.txt and linked from the app. React Flow attribution retained.

Campus Designer's unchanged Duke navy/royal and supporting copper provide visual direction without marks or affiliation. Georgia is used in place of EB Garamond and Arial/Helvetica in place of Open Sans. These are system fonts, no remote fonts or redistributed binaries. Native keyboard alternatives and text tables complement the diagram; actual checks are recorded without claiming full accessibility certification.
