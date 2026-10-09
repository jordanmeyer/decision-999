# Local setup

Fresh empty inventory trial folder, outside any enclosing repository. macOS; Git `/usr/bin/git` 2.50.1 (Apple Git-155), Node v22.19.0 / npm10.9.3 from existing PATH (matches approved inventory); no runtime installed. Managed starter copied from frozen plugin 3966d48. `npm ci --cache /private/tmp/bab-fresh-npm-cache` succeeds; lifecycle scripts remain disabled.

Git initialized with `git init -b main`. The user authorized reusing the course repository's existing name/email: Jordan Meyer / jordanmeyer@protonmail.com; configured with `git config --local` only. This attribution becomes public if history is later pushed. No remote exists.

Test/development server: `npm run test:browser -- --port 9321`, loopback. App http://127.0.0.1:9321/app/ ; tests http://127.0.0.1:9321/tests/ . Starter JavaScript status and button were verified in a newly created background Codex in-app browser tab. Server session24272. A dedicated dev server can instead use `npm run dev -- --port 9321` (stop the existing test server first).

Production: `npm run build`, then `npm run preview -- --port 9322`; http://127.0.0.1:9322/fresh-inventory/ . The non-root prefix is a local packaging test, not an authorized repository destination.

Restart from this project root using the commands above. No actual GitHub deployment or Work routing was performed.

Final preview sessions: test/dev78299 on9321; production98873 on9322. Earlier test sessions24272 and97021 were replaced after stale-module detection. Both final servers remain running for coordinator review.

At coordinator handoff request, test/development session78299 was stopped. Production session98873 remains available on9322, without monitoring. Restart tests with `npm run test:browser -- --port 9321`; restart production with `npm run build && npm run preview -- --port 9322` from this root. The temporary agent browser tab was closed; coordinator keeps the comparison preview.
