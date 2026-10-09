# Desk / Day

A six-slide analytical pitch for a fictional reusable desk-kit pop-up. Reveal.js navigation combines with a local unit-economics model, adaptive quantity sensitivity, fixed reference cases and a copyable decision record.

At the baseline,100 kits at$20 with$12 unit variable cost and$500 event fixed cost produce a$300 operating result. The smallest whole cost-covering quantity is63. The app explains what changes when contribution is zero or negative, rather than showing a misleading break-even number.

## Run

With Node22.19.0/npm10.9.3:

```sh
npm ci
npm test
npm run build
npm run preview -- --port 9518
```

Open `http://127.0.0.1:9518/bab-example-presentation/`. The same41 numerical checks run in a browser at `/tests/` when `npm run test:browser -- --port 9517` is active. Fixed-width frames at `/tests/layout.html?width=320` load the actual production app.

Use Next/Previous or the slide selector. Focus the deck for left/right keyboard navigation. Numeric inputs keep their normal arrow behavior. Apply all four values together; pending edits retain the last valid scenario with a label and disable copying. The final record is selectable if clipboard permission is unavailable.

All content and data are synthetic; no remote assets, live feeds, user uploads or model services are involved. This is an independent classroom decision aid with no institutional affiliation or endorsement. Public commit attribution uses the authorized course identity Jordan Meyer <jordanmeyer@protonmail.com>.
