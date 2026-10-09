# Deployment — pending authorization

Local preparation only. No Git remote, public repository, source URL or live URL exists. No GitHub operations, pushes or deployments were attempted. The supplied managed GitHub Pages workflow is saved at .github/workflows/pages.yml; it builds locked dependencies on main with .node-version and uploads only dist/. Vite base /fresh-sales/ is an intentionally non-root local test prefix, not an authorized destination.

A real source-repository link is deliberately absent rather than fabricated. After destination/visibility and publication are authorized: review full history and attribution, use a real source URL in app and README, set base to the actual repository prefix, establish a new evaluated checkpoint covering those edits, verify Pages uses GitHub Actions, push ordinarily on main, wait for the exact revision deployment, verify live assets/known calculation/source link and a returning-browser update. No live behavior has been verified in this trial.

Later updates use ordinary commits: revise, evaluate affected behavior, run freshness checks, push only after authorization, verify deployment and live revision. Do not force-push. Current local production preview is http://127.0.0.1:9332/fresh-sales/.

Local evaluated commit:50b631bc96735e673beda72c510aa4d34bc3fdef. Production build verified separately, including non-root assets, known totals and actual imports. Runtime preview session44698 remains available on9332; restart with `npm run preview -- --port 9332` from project root after `npm run build`. No monitoring is scheduled. Tests/development stopped at handoff. Published commit: none.
