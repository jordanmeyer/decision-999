# Setup

This is an independent simulated local trial of frozen Browser App Builder commit `3966d48`; no real student feedback or Work routing is claimed.

The selected empty folder was inspected and was not inside an enclosing repository. macOS (Darwin), `/usr/bin/git` version 2.50.1 (Apple Git-155), existing Node v22.19.0 and npm 10.9.3 were verified. No tools installed. Plain app mode needs no package tooling. Python 3 is already installed and serves the project root.

Preview: `python3 -m http.server 9311 --bind 127.0.0.1 --directory /private/tmp/browser-app-builder-fresh-2026-10-09/pricing`. App http://127.0.0.1:9311/app/; tests http://127.0.0.1:9311/tests/. Initial server session 18005. Restart with the same command after stopping its own session. The browser module changed the starter status to “JavaScript module loaded. Preview is ready.” Clicking Check interaction displayed “Interaction works. Ready to plan your app.”

Local Git attribution is the explicitly authorized existing identity: Jordan Meyer <jordanmeyer@protonmail.com>. This name and email become public if the history is later pushed. This disclosure was sent before the first commit; configuration is local only. No remote or publication is authorized.

Production preview will copy only app files to ignored dist/ and serve that folder on loopback port 9312. No build process is needed for plain modules. GitHub destination and live deployment remain pending authorization.

Final production command: `python3 -m http.server 9312 --bind 127.0.0.1 --directory /private/tmp/browser-app-builder-fresh-2026-10-09/pricing/dist`. URL http://127.0.0.1:9312/fresh-pricing/; owned session60662. At coordinator request after verification, source/test session18005 (PID36720) was stopped and owned browser tab1 was closed. Production session60662 (PID37208) remains running on9312 for inspection. No background monitor or automation was created. Restart development/tests with the9311 command above. Python version3.9.6. Regenerate preview with `mkdir -p dist/fresh-pricing` then `cp -R app/. dist/fresh-pricing/`; this prefix is only a local test, not an authorized deployment destination.
