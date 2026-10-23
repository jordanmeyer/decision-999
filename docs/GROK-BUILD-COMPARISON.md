# Web Application Builder compared with the Grok Build reference suite

**Decision report — October 23, 2026. Design-guidance implementation is recorded in §1.2; other recommendations remain proposals unless explicitly noted.**

This report compares our Web Application Builder 0.2.3 with the business-app-relevant parts of `grok-build-og`. Its purpose is to define changes another agent could implement **after approval**, not to authorize those changes. The 56 recommendations have stable IDs, explicit boundaries, dependencies, and acceptance criteria. Removing a recommendation does not authorize a substitute.

## 1. Recommended direction

**Build a supported application foundation around our existing educational workflow. Do not replace that workflow with Grok's demo-generation loop, and do not copy its server stack wholesale.**

Grok's strongest architectural idea is that the agent operates inside a prepared product environment: one startup contract, known dependencies, an application shell, established integration points, task-specific references, and repeatable browser checks. Our builder ships useful instructions and several real tools, but still asks each agent to assemble much of the application foundation, testing harness, layout, and evidence record anew. That is where inconsistency enters.

The proposed direction is:

1. **One supported Vite + React + TypeScript baseline for every new app**, from a simple page or dashboard to a complex business tool. Keep the shell small; add routing, charts, storage and specialist libraries only when needed. Use the same build, verification, evidence and publishing conventions throughout. Do not migrate existing working apps automatically.
2. **A product-design layer separate from the Campus Designer brand layer.** Borrow Grok's progression from tokens to components to composition to rendered review. Preserve our more careful accessibility, data-visualization, local-font, and attribution guidance. Adapt Grok's visual defaults to our applications and resolve conflicting rules before adopting them.
3. **Executable verification and publishing contracts.** Keep independent expected answers and Git-bound evaluation. Make the routine parts reproducible from the student's project, and make CI enforce the checks publication currently depends on in prose.
4. **A complete, portable educational record.** Retain the opening brief, every decision event relevant to the submitted work, human versus agent contributions, revisions, source attribution, failed evaluations, and the published revision. Do not grade effort by commit count, generated lines, or the agent's unsupported self-assessment.
5. **Task-oriented recipes above the library catalog.** Start with an operating dashboard, scenario calculator, document/data explorer, planning tool, or business website; select libraries underneath. Preserve the unusually strong domain-model distinctions already present in our builder.

The single-baseline requirement is settled. Its proposed implementation and expected benefits still need validation with fresh student-like tasks. The report treats Grok as a team-built production exemplar, as requested, while separating observed instructions from capabilities that depend on its unavailable hosted runtime.

### 1.1 Agreed decisions — October 23, 2026

**Status: direction approved; implementation deferred.** The user has committed to the uniform application environment below and explicitly requested documentation only. This records planned changes to **A01, A02, A07, W02 and M02**; it does not authorize plugin edits or approve the remaining recommendations.

- **One baseline for every new app:** Vite + React + TypeScript, from simple pages and dashboards to complex tools. Keep optional features proportional to the task. Existing applications are not automatically migrated.
- **Local development on macOS and Windows:** the desktop agent handles setup, dependencies, preview, verification and builds. The observed Edu cloud restrictions mean that cloud execution is not our required student environment; this is not a claim that every cloud environment is incapable of running the workflow.
- **A private toolchain inside each project:** place pinned portable Node/npm, npm cache, setup logs and any required downloaded browser tooling under an ignored `.toolchain/` directory. Dependencies remain in project-local `node_modules/`; production output remains in `dist/`. Exclude generated tooling from Git and submission archives. Prefer predictable cleanup over a shared machine-wide runtime cache, accepting per-project disk duplication.
- **No system installation required by our setup:** do not install Node globally, edit shell profiles or permanent PATH, replace an existing runtime, or introduce Homebrew, WSL, Docker or Python prerequisites. Invoke the project runtime explicitly and scope environment/configuration changes to its child processes. Use reviewed setup scripts supplied by the plugin rather than agent-invented installation procedures.
- **Small platform bootstraps, shared application behavior:** plan a macOS shell bootstrap and a Windows PowerShell 5.1 bootstrap, followed by shared JavaScript tooling. Windows PowerShell 5.1 ships with standard Windows 10/11 installations; PowerShell 7 must not become an extra prerequisite. Detect execution restrictions and unsupported OS/architecture combinations rather than assuming availability means permission. Exact supported versions and architectures remain subject to clean-machine trials.
- **Pinned and verified provisioning:** select a tested Node/npm pair, download official portable archives, verify against reviewed checksums before extraction, and install the baseline from its lockfile using `npm ci`. Reuse the project's recorded versions on restart; upgrades are deliberate. Retain disabled dependency lifecycle scripts and explicit review of necessary exceptions. Project containment does not sandbox executable code or guarantee that dependencies cannot write elsewhere.
- **Complete lifecycle ownership:** the agent starts loopback previews, tracks and stops only its own processes, recovers from interrupted setup, and provides cleanup that preserves source. After stopping processes, removing the project removes its managed runtime, dependencies and caches. Git, authentication and browser capabilities are checked separately; no silent system-tool installation or bypass of device policy is allowed.
- **Release requires evidence:** demonstrate setup, preview, production build, restart, interrupted-download recovery and cleanup on clean Mac and Windows accounts without preinstalled Node. Include paths with spaces, an unrelated existing Node installation, blocked permissions and checks for unintended writes outside the project. Student usability and platform support remain unverified until those trials pass. Published static applications continue to require only a browser from their visitors.

Provisioning references: [official portable Node distributions](https://nodejs.org/dist/latest-v24.x/), [npm configuration](https://docs.npmjs.com/cli/v11/using-npm/config/), and [Microsoft's PowerShell installation and execution-policy guidance](https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/01-getting-started). The Node directory establishes archive availability, not a decision to follow its moving latest version.

### 1.2 Design-guidance implementation — October 23, 2026

The user subsequently authorized the discussed design changes. Web Application Builder 0.2.4 adds one product-design reference routed through Plan, Build and Evaluate, with task-based composition, semantic-role guidance, control/state patterns and observable review criteria. Shared workflow now owns identity selection: Duke remains the default; explicitly chosen independent identities retain general accessibility, factual and rendered checks. Library recipes consistently apply that choice. Campus Designer 0.3.3 clarifies its authority without removing its existing rules; its builder copy remains generated.

This implements D01's guidance separation and a bounded guidance subset of D02–D08/W04. It does not complete the proposed reusable component specimens, executable semantic-token system, analytical integration trials or all acceptance criteria for those recommendations. No Grok files, aesthetic constants or alternative component stack were imported into the plugin. The uniform framework and project-contained toolchain in §1.1 remain planned, not implemented. Validation scope is recorded in `evidence/web-application-builder/2026-10-23-product-design/REVIEW.md`.

## 2. Constraints, evidence, and terminology

### 2.1 Requirements that survive every recommendation

- **Every new app uses the same baseline.** Vite, React and TypeScript are common to simple pages, dashboards and complex tools. Optional feature modules vary with the task; the builder does not choose a second native-JavaScript or alternate-framework path. Existing apps require an explicit migration decision.
- **GitHub remains the publication system.** The proposed default serves the actual application through GitHub Pages, built and deployed with GitHub Actions. GitHub source hosting alone is not a substitute for this default.
- **Students do not operate Git or build tooling.** The agent prepares files, commands, commits, diffs, previews, publication, and recovery. Students make product/domain choices and complete unavoidable account/OS prompts.
- **Decisions and attribution stay in the deliverable.** The source repository and portable submission package contain the complete relevant record, including superseded decisions and failure/fix history. A link to a vanished conversation or plugin installation is insufficient.
- **Grading must distinguish student judgment from agent work.** Evidence supports assessment; it cannot prove intellectual effort merely by counting activity.
- **Publication must remain truthful.** No fabricated approvals, data, tests, contributions, usage claims, endorsements, or institutional affiliation. Sensitive imports and credentials never become public source/history.
- **Approval is scoped.** The original analysis changed only this report. The subsequently authorized design-guidance implementation is recorded in §1.2; it does not authorize the remaining proposals.

“Package” in this report means a **self-contained source/submission package**, plus a deliberately smaller website publication. All decision and attribution records remain in the former. A concise public About/build record can appear in the latter. This preserves the current separation between repository evidence and `dist/` without losing information needed for grading. If the faculty wants the complete record visible from the website too, make that a separate explicit publication decision; do not silently expose raw conversations or machine details.

“All decisions” means all recorded choices affecting requirements, scope, models, data, design, architecture, implementation approach, verification, and delivery, including who proposed and accepted them and what superseded them. It does not mean manufacturing private reasoning transcripts or pretending every keystroke was a pedagogical decision. Unknown/unrecorded events remain identified as such.

### 2.2 What was inspected

Our tracked baseline is commit `e86d88abc209b4e7bda6f7dc3c1d4632136a6aa0`, inspected with the current working tree. The builder contains **22 skill files: five workflow stages, sixteen library recipes, and the bundled Campus Designer**. The canonical Campus Designer was reviewed separately; its generated builder copy is not a second design authority. Review covered the starters, manifests, configuration, publishing workflows, themes, dependency checker, notice generator, workflow references, and relevant existing trial/review records. [O-README] [O-WORKFLOW] [O-INVENTORY] [O-VALIDATION]

The imported reference is the SafeBuy initial commit `10deede379461bd0500b86716706c0dbb819c4ae`, dated August 21, 2026. It contains 18 skill directories, six workspace references, and renamed workspace instructions. It is an application export, **not a verified pristine workspace or official xAI release**. Its `src/lib` helpers, package lock, browser smoke implementation, servers, and deployment infrastructure were not imported. Thus, “Grok requires a smoke helper” is established; “that helper correctly detects every failure” is not. [G-README] [G-WORKSPACE]

Direct comparison emphasizes `design-ui`, `auth`, `neon`, `xai-api`, `og`, `imagine`, workspace/scaffold/deployment/browser references, and relevant collaboration boundaries. Game mechanics, sprites, tilesets, game animation, game genres, and game-control design are excluded. Their presence contributes no weight to the business-app recommendations.

This is a **source and recorded-evidence review**, not a fresh benchmark of generated apps or a live Grok sandbox audit. Existing test totals describe their historical campaigns; they do not demonstrate the proposed architecture. Current platform feasibility was checked against primary documentation linked in §12. No downloaded scripts were executed.

### 2.3 Evidence labels

- **Observed:** present in the reviewed instructions or implementation.
- **Gap:** absent from the reviewed reusable package, even if an individual example may implement it.
- **Inference:** a likely consequence of that organization, not a measured causal result.
- **Proposal:** a new design choice to test. None is “proven best” by this comparison.

A lengthy reference is not automatically a good one; a short skill is not automatically inadequate. The relevant distinction is whether the agent can consistently perform a task without inventing missing contracts or rereading unrelated material.

## 3. Granular comparison

### 3.1 Environment and application architecture

| Concern | Our current builder | Grok reference suite | Implication / proposal IDs |
|---|---|---|---|
| Known environment | Setup discovers host tools, OS, preview and Git; managed setup prepares Node when needed. | Assumes provisioned Linux/Node, dependencies, browser, injected configuration and preview proxy. | We need an explicit capability contract, not a claim that installation provisions a sandbox. **A02, W02**. [O-SETUP] [G-WORKSPACE] |
| Starter readiness | Plain/managed starters prove module loading and one button; managed starter initially has Vite only. | Describes prewired framework, service helpers, error component and preview bridge; four entry files still need creating. | Ship our actual supported shell; do not reproduce Grok's known incomplete entry state. **A01, A03**. [O-STARTER] [O-PACKAGE] [G-SCAFFOLD] |
| Framework selection | React added only when selected libraries require it; other apps mix plain DOM and libraries. | TanStack Start/React, TypeScript, Tailwind and Radix form a stable substrate. | Standardize across every new app; validate both the smallest and most complex supported cases. **A01, A07**. [O-MANAGED] [G-WORKSPACE] |
| Type checking | No TypeScript configuration or typecheck command in starter. | Separate build and typecheck gates. | Types help shared data contracts but need their own gate; Vite transpilation alone is not type checking. **A04, Q02**. [O-PACKAGE] [G-WORKSPACE] [X-VITE-TYPES] |
| Application error surface | Skills require empty/error states; no shared runtime failure shell supplied. | Named error component is part of scaffold; raw errors remain visible. | Add recoverable product errors and developer diagnostics without exposing private payloads. **A03, D07**. [O-BUILD] [G-SCAFFOLD] |
| Routing | Relative paths and ordinary/hash navigation; no router supplied. | File routing and server functions coupled to hosted deployment. | Define Pages-safe URL behavior, refresh and Back contracts. **A05**. [O-BUILD] [G-DEPLOY] |
| State | Model modules and live/Apply instructions; no common state layer. | References React, zustand, localStorage and opt-in server state. | Separate draft, applied inputs and results without making every app install a global store. **A06, B03**. [O-BUILD] [G-WORKSPACE] |
| Public/site identity | Name consistency and source link required; no identity metadata generator. | `site.json`, favicon, cards, injector contract and rename propagation. | Port one source for identity; generate static HTML metadata ourselves. **A08, D09**. [O-BUILD] [G-OG] |
| Dependency policy | Exact reviewed inventory, companion checks, lockfile constraints, scripts off. | Preinstalled base plus ability to install packages; relies on platform. | Retain pinned review, separate tools from runtime libraries, allow controlled exceptions. **A07, P04**. [O-DEPS] [O-MANAGED] |
| Model/UI separation | Real shared model functions required; browser tests import them. | Broad implementation guidance; no equivalent business-model validation discipline found. | Preserve and make easy in scaffold. **B02, Q03**. [O-EVALUATE] [O-MODELS] |
| Lifecycle/recovery | Actual commands and restart details recorded in SETUP; mostly agent procedure. | Fixed startup script, restart/hibernate contracts and stateful preview handling. | Ship a portable project-local runner, not `/workspace` assumptions. **A02, W02**. [O-SETUP] [G-LIFECYCLE] |
| React integration | Recipe snippets/theme factories; agent owns component mounting and third-party cleanup. | Shared framework environment and UI primitives reduce setup variability. | Supply small reference integrations with explicit ownership and disposal. **A03, B07**. [O-MANTINE] [O-SELECTION] |

### 3.2 Product workflow, data, and educational purpose

| Concern | Our current builder | Grok reference suite | Implication / proposal IDs |
|---|---|---|---|
| Initial request | Interview until consequential product/model choices are settled. | Triage build/question/empty input; for vague builds pick a coherent app quickly. | Add explicit request triage while preserving student choice over consequential assumptions. **W01, W03**. [O-PLAN] [G-WORKSPACE] |
| Skill discovery | Five public stages plus sixteen library names; selection table helps routing. | Workspace contract explicitly routes into narrower skills and references. | Add one entry orchestrator and a capability/reference map, preserving direct stage use. **W01, W04**. [O-README] [O-SELECTION] [G-WORKSPACE] |
| Domain integrity | Coverage of original brief, deferrals, independent worked examples and counterfactuals. | “Demo-quality” completion emphasizes functioning UI. | Keep ours; make it less manual, never exchange it for polished mock behavior. **B01, Q03, E01**. [O-PLAN] [O-MODELS] |
| Business workflow templates | Domain guidance and sixteen library recipes, but no complete reusable task shell. | General UI/forms/state and framework setup; not a comparable business-model curriculum. | Add task-level composition, not another list of packages. **B01**. [O-MODELS] [G-DESIGN] |
| Local imports | Transient, local-only; parser-specific validation and text-safe rendering required. | DB/auth are explicit choices; not focused on local analytical imports. | Consolidate import schema, preview, reconciliation and export behavior. **B04, B05**. [O-WORKFLOW] [O-PAPA] |
| Persistence | Device-local caveat, otherwise app-specific. | LocalStorage by default; shared database/auth opt in. | Add versioned storage, namespace, recovery and export, without treating local storage as backup or security. **B03**. [O-WORKFLOW] [G-DATA] |
| Public data freshness | Bundled inputs or local files; live APIs prohibited. | Dynamic services are normal supported platform features. | Distinguish reproducible build-time ingestion from runtime service dependence. **B06, A09**. [O-WORKFLOW] [G-NEON] |
| Accounts and shared records | Out of pilot scope. | Opt-in auth/DB with middleware and verified-user query scoping. | Do not simulate protected accounts. Consider a separately approved service track only if course needs justify it. **A09**. [O-PLAN] [G-AUTH] |
| AI features | Runtime remote AI prohibited. | Server-only injected key, user-initiated spend and graceful unavailable state. | Preserve no secret in browser; an AI tool needs a separate supported service contract. **A09**. [O-WORKFLOW] [G-XAI] |
| Decisions | Current significant choices in DECISIONS, superseded states retained by instruction. | User request and project instructions; no comparable grading ledger found. | Extend into complete, attributed and portable decision events. **E01–E04**. [O-WORKFLOW] [G-WORKSPACE] |
| Authorship | Approved Git identity, source notices and public build story. | Platform branding/remix injection; export identity is not student authorship evidence. | Keep educational authorship separate from commit identity and tool branding. **E02, E05**. [O-WORKFLOW] [O-BUILD] [G-WORKSPACE] |
| Fresh conversation | Resume six documented artifacts; no compact machine-checked project state. | Stable workspace contract and persisted filesystem. | Add a generated project summary pointing to authoritative records, not another manual status owner. **W05**. [O-WORKFLOW] [G-LIFECYCLE] |

### 3.3 Design, verification, and delivery

| Concern | Our current builder | Grok reference suite | Implication / proposal IDs |
|---|---|---|---|
| Design authority | Campus Designer combines branding, medium guidance and general UI practice. | Product-design skill plus focused typography/surface/motion/performance references. | Separate product mechanics from optional brand expression. **D01, D02**. [O-DESIGN] [G-DESIGN] |
| Tokens | Canonical brand colors/fonts; library adapters reuse them. | Semantic backgrounds, surfaces, text, accents, radii and scales. | Expand role-based tokens, preserve brand values underneath. **D03**. [O-TOKENS] [G-DESIGN] |
| Component guidance | Small recipe snippets, general accessibility guidance. | Much deeper surface, form, dialog and motion guidance; no comparable business-table recipe. | Create a compact component/state recipe set; avoid transplanting unreviewed code. **D04, D07**. [O-WEB] [G-SURFACES] |
| Anti-generic design | Avoid cards everywhere, empty sidebars, redundant copy and misleading decorative arrows. | Explicit “anti-AI-slop” rules, composition recipes and quantified guardrails. | Name observable defects and task-fit criteria; qualify taste rules. **D05**. [O-WEB] [G-REFINED] |
| Business evidence | Chart scale, units, accessible tables, rounding and decision-adjacent limits. | General visual polish and chart-library preference. | Preserve our business-specific layer, improve reusable chart/table composition. **D06, B02**. [O-MODELS] [O-ECHARTS] [G-DESIGN] |
| Accessibility | Explicit contrast, focus, font loading, 320px reflow, enlarged text and limits on conformance claims. | Mobile checks, 44px targets, contrast and reduced motion; library-based accessibility assumptions. | Ours is often more precise; add operational checks instead of downgrading it. **D04, D08, Q04**. [O-WEB] [O-REVIEW] [G-DESIGN] |
| Brand/share assets | Local licensed fonts and provenance; no standard favicon/share-card routine. | Separate identity and share asset workflow with verification. | Useful for recruiter-facing business apps too; local static output, not Grok injector/services. **D09, E05**. [O-BUILD] [G-OG] |
| Rendering | Agent checks browser, responsive/keyboard states, modules and console. | Reusable dual-viewport JSON smoke contract, visual inspection and production comparison. | Ship a small harness and preserve human/agent visual judgment. **Q01, Q04**. [O-EVALUATE] [G-QA] |
| Production parity | Production preview, base path, same-origin assets and returning browser required. | Dev vs production baseline and rebuild/restart rules. | Automate repeatable deployment-shape checks. **Q05, P01**. [O-MANAGED] [G-QA] |
| Mathematical correctness | Independent expected values, failure history, deterministic and statistical cases. | No comparable numerical evidence standard in inspected non-game suite. | Preserve as a differentiator; distinguish correctness, usefulness and usability verdicts. **Q03, E04**. [O-EVALUATE] |
| CI gate | Managed workflow installs/builds; output check is nonempty index and no symlinks. | Instructions demand build/typecheck/browser; actual host publishing gate not included. | CI currently does not itself run our evaluation suite or freshness protocol. **Q02, Q06, P01**. [O-PAGES] [G-WORKSPACE] |
| Source applicability | Detailed Git diff/status/plan protocol, including opposing staged edits and ignored source. | Rebuild when source changes; less extensive evidence binding. | Preserve Git-based truth; implement once rather than repeat commands mentally. **Q06**. [O-FRESHNESS] |
| Evidence portability | Reports and source links required; some validation depends on installed plugin scripts. | Helpers assumed to exist in hosted workspace. | Package the policy/tool versions needed to reproduce the student's result. **E03, E06**. [O-MANAGED] [G-WORKSPACE] |
| Publication operation | Account onboarding, exact commit deployment and live known answer specified. | Provider publishing machinery assumed. | Keep ours; reduce manual branching and improve recovery visibility. **P01–P03**. [O-DEPLOY] |
| Evidence of student success | Maintainer-run simulated cases; novice, clean-machine, Windows and host routing limits disclosed. | No controlled student comparison available here. | Validate the new default with actual learner tasks, not marketing counts. **M01–M04**. [O-README] [O-VALIDATION] |

## 4. Architecture options and the recommended target

### 4.1 The decision is not “plain JavaScript or Grok's whole stack”

GitHub Pages serves static HTML/CSS/JavaScript. It can serve a sophisticated compiled client application; it does not run our request-time Node server functions. This constrains deployment behavior, not the sophistication of build tooling. [X-PAGES]

| Candidate | Fit | Main benefit | Main cost / limitation | Recommendation |
|---|---|---|---|---|
| Current plain HTML/CSS/JS | Small calculator, simple informational page | Very little setup and transparent runtime | Agents repeatedly invent component/state/testing patterns as complexity grows | Historical baseline for comparison and existing apps; not a generation path for new apps |
| **Vite + React + TypeScript + existing Mantine adapter** | Simple pages/calculators through dashboards, structured forms, multi-view tools, editors and local analytical work | Extends what we already use; typed contracts and consistent reusable components; static `dist/` | Toolchain and component maintenance; does not itself solve routing, data validation or models | **Selected common baseline; validate implementation before release** |
| Vite + TypeScript without React | Modest interactive page with straightforward DOM | Types without a component framework | Another supported variant if we formalize it; limited shared UI benefit | Not a separately supported new-app path |
| Astro static output, optional React islands | Content-heavy websites, reports, portfolios, multi-page explainers | Static pages and metadata; selectively interactive regions | A second framework, tests and maintenance surface | Considered alternative, not a supported new-app path [X-ASTRO] |
| TanStack Router in a Vite client app | Multi-view app with meaningful navigation/search parameters | Route/state discipline without mandatory server runtime | Additional dependency and URL conventions | Optional, after a concrete navigation requirement; use Pages-safe history or emitted pages [X-ROUTER] |
| TanStack Start with prerender/static SPA configuration | Potential unified full-stack/static framework | File routing and expansion path; static output is possible | More configuration to avoid request-time features; SPA fallback and server-function assumptions require care | Considered alternative, not a second baseline; replacing the common stack requires a future explicit decision [X-START] |
| Supplied cloud backend/auth stack | Cross-device/shared/private workflows | Can support capabilities static hosting cannot | New service ownership, credentials, availability, budget, policy and grading concerns | Separate optional track; keep the frontend on Pages; no automatic adoption (**A09**) |

Do not introduce Tailwind, shadcn, another chart package, Zustand, TanStack Query, and a new router simply because they appear together in Grok. We already maintain Mantine, ECharts and several specialized libraries. A default React substrate does not require replacing them. Use React state/reducers for local state; add a dedicated state or server-cache library only for a demonstrated need. TypeScript is an authoring-time aid; visitors still receive JavaScript.

**Why one baseline can span this range.** A simple dashboard needs only a few components and local state. A complex tool adds more views, validated forms, derived state, imports, workers and specialist integrations within the same project. React supplies a common component/state model; TypeScript makes interfaces between model, data and UI checkable; Vite supplies the development/build process. None requires every app to include every feature. Native HTML controls and browser APIs remain available inside the common baseline. [X-REACT]

The original native-JavaScript path minimized dependencies and setup. It could implement the same business capabilities, but increasingly leaves DOM synchronization, reusable controls, module conventions and verification setup to each agent. The advantage of the common baseline is repeatable construction and review across the course, not that native JavaScript is incapable of complex work. It adds build-time maintenance and browser runtime overhead to the smallest page; that is an explicit tradeoff for one supported environment. The agent owns the tooling, while students make product decisions and visitors use a browser.

The three technology names alone are insufficient. The starter must establish a small working shell, component/theme conventions, state/model boundaries, error handling, verification commands, educational records and GitHub publishing. React's own guidance warns that a bare build-tool setup leaves common application patterns to its author; those patterns are the reusable foundation this report proposes supplying. Type checking and independent model tests remain separate requirements. [X-REACT] [X-VITE-TYPES]

### 4.2 Proposed generated project shape

This is a conceptual target for approval, not a requirement to create empty folders. Preserve `app/`, `tests/`, and `dist/` ownership so existing publishing and evidence concepts remain recognizable.

```text
student-project/
  app/
    index.html                 # static title/description/social metadata
    main.tsx                   # small mounting/error boundary entry
    App.tsx                    # chosen page/tool shell
    components/                # only used components
    model/                     # calculations independent of rendering
    data/                      # schemas, adapters, public/synthetic fixtures
    theme/                     # semantic roles + selected brand mapping + fonts
    public/                    # explicit publishable static assets only
  tests/
    model/                     # independent expected-answer fixtures
    browser/                   # task/state/production checks
  scripts/                     # local project commands, not plugin-only paths
  records/
    decisions/                 # attributed, superseding decision events
    attribution/               # human/tool/data/asset/library provenance
    evaluations/               # dated results, failed rounds, reproduction
    releases/                  # publication receipts
  PLAN.md                      # current product/model/acceptance contract
  DECISIONS.md                 # readable index/history, not a competing database
  EVALUATION.md                # readable findings and links to receipts
  SETUP.md / README.md / DEPLOYMENT.md
  app.config.json              # nonsecret identity/base/baseline version/capabilities, if A08 approved
  package.json / package-lock.json / tsconfig.json / vite.config.*
  .github/workflows/pages.yml
  .toolchain/                  # private runtime/cache/logs; ignored and excluded from submission
  node_modules/                # project dependencies; ignored and excluded from submission
  dist/                        # generated website; ignored in Git
```

The record layout is one proposed implementation of **E01–E06**. Avoid hand-maintaining identical facts in JSON, Markdown and source constants. Structured receipts own machine results; narratives explain decisions and limitations; generated indexes assemble them. Git remains the source revision system. Do not add a parallel source-digest system merely to avoid Git's existing semantics.

### 4.3 Defaults that should change, remain, or become conditional

| Existing assumption | Proposed treatment |
|---|---|
| “Native first” means React requires a special justification every time | Use the same Vite/React/TypeScript baseline for every new app; vary optional modules, not frameworks (**A01**) |
| Every app should carry the same Duke appearance | Preserve a faculty default but separate brand mapping from product usability; permit an approved project identity without rewriting the whole design skill (**D01**) |
| Library choice is the first architectural decision | Start with task and state/data contract, then select libraries (**B01**) |
| No runtime services | Keep as default course profile, not an eternal definition of a web app; service track needs independent approval (**A09**) |
| No remote assets at runtime | Retain default local delivery and rights tracking; build-time asset/data acquisition is a distinct, reviewable process (**B06, D10**) |
| No automated test framework is required | Provide common verification commands and typecheck/build gates; select meaningful test cases proportionately to the app (**Q01–Q03**) |
| More instructional warnings improve reliability | Move repeated operational rules into one implementation/owner and use references for exceptions (**W04, P04**) |
| A successful build or green test count means the app is good | Keep separate correctness, task usefulness, interface quality, accessibility and deployment evidence (**Q03, Q04, E04**) |
| Git history adequately captures effort | Preserve history but add explicit human/agent decision attribution and portable records (**E01–E07**) |

## 5. How to approve or remove recommendations

Every item below is independently addressable by ID, such as **D05**, **E02**, or **A09**. Use “remove D09 and D10” or “approve A01–A04, A07, Q01, E01–E03 only.” IDs are stable; removing items must not renumber the survivors.

**Priority:** P0 = preserve/operationalize a hard requirement; P1 = recommended improvement; P2 = optional improvement; EXP = experiment, not a default commitment. **Size:** S = bounded guidance/configuration change; M = reusable component/tool plus evidence; L = architecture or workflow migration. Sizes are scope indicators, not elapsed-time promises.

**Dependencies are hard unless marked “related.”** If a prerequisite is removed, mark its dependent proposal blocked for revision; do not implement a partial substitute silently. Acceptance criteria describe what an implementation agent must demonstrate. All proposals inherit the constraints in §2.1.

| IDs | Count | Scope |
|---|---:|---|
| A01–A09 | 9 | Starter, runtime, types, navigation, state, dependencies and optional services |
| W01–W06 | 6 | Entry routing, host readiness, planning, instruction ownership and resumption |
| D01–D10 | 10 | Product/brand separation, tokens, components, anti-slop, analytical design and assets |
| B01–B07 | 7 | Business task recipes, contracts, persistence, imports, exports and integrations |
| Q01–Q08 | 8 | Browser checks, CI, independent answers, visual review, freshness and proportionality |
| E01–E07 | 7 | Decisions, contributions, provenance, evaluation history and grading package |
| P01–P05 | 5 | GitHub publication, onboarding, recovery, pure builds and versioned upgrades |
| M01–M04 | 4 | Comparative trials, novice onboarding, integration coverage and maintenance |

Removing a hard prerequisite does not implicitly approve it through a dependent item. Any approved subset must name its required prerequisites or explicitly revise the dependent scope.

## 6. Recommendation catalog

Paths beginning `WB/` below mean `plugins/web-application-builder/`; `CD/` means the canonical `plugins/campus-designer/skills/campus-designer/`. New paths are proposals, not existing assets. Exact package versions must be selected and verified during an approved implementation; this report does not endorse Grok's unspecified installed versions.

### A. Application architecture and runtime

#### A01 — Standardize one baseline for every new app

**P1 · L · Dependencies: A07. Release-readiness gate: M01; the common-baseline policy is settled, while implementation quality must be demonstrated.**

**Evidence and change:** Our managed starter has Vite and a readiness demonstration; React is added through library selection. Grok assumes a shared framework substrate. Supply one supported Vite/React/TypeScript starter for information pages, calculators, dashboards, structured forms, editors and multi-view tools. Extend our existing Mantine integration rather than introducing Tailwind/Radix/shadcn simultaneously. Include TypeScript configuration and a required typecheck command in the baseline. Activate optional routing, charts, storage and specialist integrations only when required; never switch the new-app baseline according to perceived complexity. [O-PACKAGE] [O-MANAGED] [G-SCAFFOLD]

**Targets:** `WB/assets/managed-starter/`, setup/build skills, `references/managed-build.md` and `library-selection.md`. Existing apps stay on their recorded profile unless explicitly migrated.

**Acceptance:** Generate a simple information page, a scenario calculator and a multi-view operating dashboard from the same starter in clean folders. Each builds static output at a repository base path; model functions remain independent of React. The smallest app has no unused router, global store, chart dependency or navigation furniture. Record assembly work removed and maintenance costs introduced. M01 must demonstrate release readiness across this range.

#### A02 — Give each generated project a dependable command contract

**P1 · M · Dependencies: none.**

**Evidence and change:** Grok's fixed `startup.sh` and restart rules reduce ambiguity but assume a hosted sandbox. Our SETUP records commands without supplying equivalent uniform behavior. Define project-local commands for development, production build, production preview and applicable verification. Use the selected tool's native runner and a small wrapper only where it resolves an actual lifecycle problem. Detect port conflicts; identify the server's project and build. Do not kill unrelated processes or assume `/workspace`, port 8080, or public network binding. [O-SETUP] [O-PACKAGE] [G-LIFECYCLE]

**Targets:** starter `package.json`, preview/setup instructions and a project-local runner if needed. Rename the current Vite-only `test:browser` command to clearly identify it as serving tests; reserve test names for executing checks.

**Acceptance:** A fresh agent can start, stop and resume the correct project; occupied ports produce actionable output; production preview serves the latest build. Starting the test server alone cannot produce a “tests passed” result. Students see the preview and next meaningful action, not instructions to manage processes.

#### A03 — Ship a small, usable application shell

**P1 · M · Dependencies: A01.**

**Evidence and change:** Grok's scaffold identifies root providers, routes and an error surface. Our starter proves JavaScript loads but leaves all application organization to the agent. Provide mounting, one component provider, semantic page structure, skip link, page title, optional navigation and a recoverable error boundary. Include one real controlled input→pure calculation→result interaction as a removable example. Keep all unused routes, widgets and demo data out of generated deliverables. [O-STARTER] [G-SCAFFOLD]

**Targets:** managed starter entry, root component and selected theme; build guidance. D04 can later enrich individual components without becoming a prerequisite for the shell.

**Acceptance:** Keyboard reaches the principal workflow, a thrown rendering error gives a useful recovery path, and diagnostic details remain available to the agent without displaying private imported records. Repeated mount/unmount does not duplicate listeners. A generated single-screen tool has no empty sidebar, redundant navigation or unused dashboard furniture.

#### A04 — Make types support explicit model and input contracts

**P1 · M · Dependencies: A01.**

**Evidence and change:** Grok separately runs build and typecheck; our managed starter has neither TypeScript configuration nor typecheck. Beyond A01's mandatory TypeScript configuration/typecheck, add stricter documented model contracts and typed input/result conventions. Removing this proposal does not remove TypeScript or the required typecheck from A01. Keep runtime validation at external boundaries: a type assertion does not validate CSV, storage or a service response. Avoid a universal schema DSL or mandatory validator library before actual reuse. Vite's TypeScript support transpiles; it does not replace type checking. [O-PACKAGE] [G-WORKSPACE] [X-VITE-TYPES]

**Targets:** starter `tsconfig.json`, package scripts, model example and plan/build references. Coordinate dependency roles through A07.

**Acceptance:** An intentionally wrong result type fails the typecheck command even if bundling succeeds. A malformed imported record is rejected at runtime despite satisfying a cast. Pure model tests can execute without mounting the UI. Document any necessary type escape locally; do not silence the starter with blanket `any` or disabled checking.

#### A05 — Define a GitHub Pages navigation contract

**P1 · M · Dependencies: none for the URL contract; the optional TanStack Router implementation requires A07 and A01. Existing apps are migrated only when explicitly requested.**

**Evidence and change:** Our relative/hash guidance is directionally sound but does not provide a reusable URL/state design. For a multi-view client app, use hash history by default unless the build emits real HTML for every public route. Evaluate TanStack Router only when typed route/search state earns its dependency. Do not add server rewrites or copy a catch-all 404 hack without documenting and testing its consequences. Grok's route files run in a different deployment environment. [O-BUILD] [G-DEPLOY] [X-ROUTER]

**Targets:** build/managed-build references, optional routing starter and production checks.

**Acceptance:** Directly opening and refreshing every shared URL under `/repository/` works on actual Pages; Back/Forward restores the intended view and filters; internal links retain the base. Invalid URL parameters yield a useful default/error rather than corrupting a calculation. Deliberately private local inputs are not serialized into share URLs. A one-view calculator has no router dependency.

#### A06 — Standardize state ownership, not a universal state library

**P1 · M · Dependencies: none.**

**Evidence and change:** Retain our live-versus-Apply distinction, but provide one worked state pattern: draft inputs, validated/applied inputs, derived results, selection/navigation and persisted scenarios have explicit owners. Derive results from the model instead of storing competing totals. Use React state/reducers for UI state and ordinary TypeScript modules for calculations and transformations. Add Zustand or Query only for a demonstrated coordination or server-cache requirement. [O-PLAN] [O-BUILD] [G-WORKSPACE]

**Targets:** `WB/references/decision-models.md`, build guidance and a state example; persisted behavior belongs to B03.

**Acceptance:** Editing a draft cannot silently relabel old results as new; Apply, reset, undo if offered, navigation and selection have specified effects. A late asynchronous result cannot overwrite a newer scenario. Current filters do not mutate the source dataset. The visible output names its actual inputs/version, and changing one input updates every dependent total consistently.

#### A07 — Separate runtime dependencies from authoring tools

**P1 · M · Dependencies: none.**

**Evidence and change:** The current checker permits only Vite and its React plugin in `devDependencies`; other approved packages are treated as runtime dependencies for notices. This blocks a clean TypeScript/test-tool extension. Add explicit roles for build tools, type packages, test tools and shipped runtime packages. Preserve exact pins, reviewed companions, lockfile integrity and scoped script approval. Define one documented exception-review path instead of encouraging agents to bypass the checker. [O-DEPS] [O-INVENTORY] [O-MANAGED]

**Targets:** `WB/references/libraries.json`, `scripts/check-dependencies.mjs`, managed-build instructions and notice preparation.

**Acceptance:** Approved TypeScript/types/browser-test tools install reproducibly without entering the shipped bundle. Unknown packages and mismatched companion versions still fail validation. Unapproved lifecycle scripts do not execute; required script exceptions receive explicit review. Runtime license notices remain complete; development-tool provenance remains in the submission. The managed JavaScript toolchain uses the private project-local Node/npm environment agreed in §1.1; no global Node installation is required. Git and browser capabilities are discovered separately.

#### A08 — Give application identity one owner

**P1 · S · Dependencies: none.**

**Evidence and change:** Grok groups share-card identity in `site.json`, but still repeats its title in `APP_NAME`; ours requests consistency but leaves repeated strings to each build. Improve on both by assigning identity one owner. Define a small nonsecret identity/configuration record containing display name, description, repository/source URL, public site URL/base and baseline version/optional capabilities. Derive metadata and deployment base from it where feasible. Do not turn it into a general application configuration framework or store visitor records there. [O-BUILD] [G-OG]

**Targets:** proposed generated `app.config.json`, starter HTML/configuration and setup/deploy guidance; D09 owns the visual identity output.

**Acceptance:** Rename an app and change its repository base once; header, title, description, source link and asset paths agree after rebuild. Missing publication URL is explicit during local work and resolved before deployment. No stale Grok/template branding or accidental institutional endorsement appears. A single value has no second hand-maintained owner.

#### A09 — Define a separate service-enabled course track only if needed

**EXP · L · Dependencies: explicit faculty/operator approval; no other proposal requires this.**

**Evidence and change:** Grok's auth, database, AI and signaling rely on server helpers, injected secrets and provider deployment absent from our package. Retain the static/local default. If real briefs demand shared/private records, cross-device accounts, runtime AI or collaboration, first approve who operates the service, access controls, migrations, budget limits, failure/recovery and end-of-course retention. Keep the frontend on Pages; identify the separately hosted backend plainly. [G-AUTH] [G-NEON] [G-XAI] [G-P2P]

**Targets:** a separate capability proposal/profile, not silent expansion of the default workflow. Do not ship a pretend login, browser secret or world-writable shared database as a shortcut.

**Acceptance before any enablement:** Server-side ownership and authorization reject cross-user requests; costs are bounded server-side; logout/expiry/recovery work; simultaneous writes have defined conflict semantics; graders can reproduce synthetic scenarios without a student's private credentials. Local-only apps remain fully supported without service accounts. Delete this proposal freely without blocking the core modernization.

### W. Workflow and instruction organization

#### W01 — Add one task-oriented entry point

**P1 · M · Dependencies: none.**

**Evidence and change:** Our five stage skills are explicit but expose internal workflow names. Grok first distinguishes a build, change, question, vague idea or non-build request. Add one entry skill that inspects project state and routes to setup/plan/build/evaluate/deploy as needed. Keep existing stages callable for deliberate use. A small content correction must not repeat the full onboarding interview; a new optimization model still needs consequential assumptions resolved. [O-README] [G-WORKSPACE]

**Targets:** builder entry skill, plugin skill listing and `references/workflow.md`. Generated catalog files must still be produced by `scripts/build.py` if implementation is approved.

**Acceptance:** Exercise a blank project, existing app change, deployment-only request, conceptual question and interrupted project. Each loads only relevant instructions, preserves user intent and makes the next useful move without asking the student which internal skill to select. Never infer permission for publication from a request to preview.

#### W02 — Make host capability discovery explicit and honest

**P1 · M · Dependencies: none; related: A02.**

**Evidence and change:** Grok can assume its sandbox; a cross-agent plugin cannot assume browser access, filesystem access, Node, terminal permissions, background processes or GitHub authentication. Introduce a compact readiness/capability record with detected facts, untested capabilities and concrete recovery steps. Reuse available host tools instead of demanding one vendor's browser API. A02 owns project commands; this proposal owns whether/how the current agent can execute them. [O-SETUP] [G-WORKSPACE]

**Targets:** setup skill, SETUP template and supported-host documentation.

**Agreed implementation direction:** §1.1 owns the local, project-contained provisioning policy. Extend readiness discovery with tested platform bootstraps and pinned portable runtime preparation; do not interpret host discovery as permission to install system-wide tools. A02 continues to own project commands and process lifecycle.

**Acceptance:** Demonstrate a full local host, a host without browser automation and a host without a usable shell. The latter cases explain the actual limit and perform useful remaining work; they do not fabricate screenshots/tests or ask the student to debug a terminal. Record only necessary versions/paths, excluding secrets and irrelevant machine details. Supported-host claims must cite real trials, not format compatibility alone.

#### W03 — Scale planning to consequential uncertainty

**P1 · S · Dependencies: none.**

**Evidence and change:** Our detailed planning protects business meaning; Grok's decisive defaults reduce friction. Combine them through a short uncertainty/risk triage. Ask about consequential users, decision rules, expected answers and unresolved scope; choose reversible layout and implementation defaults autonomously and record them as agent choices. Preserve the original brief and explicit deferrals. Do not make silent timeouts count as human approval. [O-PLAN] [G-WORKSPACE]

**Targets:** plan skill and PLAN template, plus scenario-specific prompts in decision-models.

**Acceptance:** A simple information page proceeds with a short plan; an inventory/service-level calculator surfaces missing units, demand/lead-time assumptions and objective before claiming correctness. A visual revision reuses the approved model. Every substantive omission from the brief is visible as implemented, deferred by the user, or unresolved. “Asked many questions” is not itself evidence of useful planning.

#### W04 — Give each policy and recipe one authoritative home

**P1 · M · Dependencies: none.**

**Evidence and change:** Both suites already use progressive disclosure. Our repeated generic workflow/theme paragraphs across library skills create drift risk; Grok's design references themselves contain conflicting absolutes. Map ownership: workflow, model semantics, product design, brand, package integration, evaluation and publication. Replace repeated rules with precise links and keep unique integration hazards local. Preserve build-generated Campus Designer bundling; do not create another independently edited copy. [O-SELECTION] [O-DESIGN] [O-GENERATOR] [G-REFINED]

**Targets:** workflow/library references, sixteen recipe skills and canonical design structure.

**Acceptance:** For each shared rule, identify its one authored owner and any generated consumers. A reader can reach necessary detail without loading unrelated recipes. Check examples against their declared rule, remove contradictory advice, and retain source/license notices. Measure the material needed for representative tasks rather than claiming total file count or total word count proves efficiency.

#### W05 — Generate a compact resume view from existing records

**P2 · M · Dependencies: E01, E04.**

**Evidence and change:** Our six named artifacts support resumption but leave an agent to reconcile current plan, decisions, pending checks and deployment state. Generate a short “current project” index from authoritative records and Git state. Include the approved task, current source checkpoint, active decisions, unresolved issues, required next checks and last publication. It is a view, not another manually maintained ledger. [O-WORKFLOW] [O-FRESHNESS]

**Targets:** project-local reporting command and workflow resume instructions.

**Acceptance:** A fresh agent correctly resumes a project with a failed check, a superseded assumption and an unpublished change. Stale or contradictory records are reported, not reconciled by invention. Deleting/regenerating the index loses no evidence. The index does not claim that a prior evaluation covers later code merely because its headline says “passed.”

#### W06 — Make delegation conditional on shared contracts

**P2 · S · Dependencies: none.**

**Evidence and change:** Grok defines shared interfaces before parallel work and splits ownership. Borrow that when a host supports agents and work is large enough: agree model/schema/component contracts, assign bounded file ownership, and reserve integration/review for one owner. Do not require subagents, one subagent per visual asset, or parallelism on a tiny copy edit. [G-WORKSPACE]

**Targets:** build workflow reference and optional multi-agent guidance.

**Acceptance:** In a dashboard trial, independently built model and interface integrate against one agreed contract; conflicting edits are detected before overwriting. Each contributor's role and relevant decisions enter the same E02 attribution record if enabled. The identical task can be completed sequentially on a host without delegation, with no missing workflow stage or weaker acceptance standard.
### D. Product design and anti-slop

#### D01 — Separate product usability from institutional branding

**P1 · M · Dependencies: none.**

**Evidence and change:** Campus Designer is a credible brand/medium authority, but branding is not a complete application design system. Add a brand-neutral product-design reference covering task hierarchy, controls, states and analytical interfaces; let Campus Designer supply the approved identity, palette, typography, marks and brand-specific constraints. Keep Duke authority labels and permission boundaries. Do not turn every business tool into either a generic SaaS dashboard or an institutional brochure. [O-DESIGN] [O-WEB] [G-DESIGN]

**Targets:** new builder product-design reference; builder plan/build skills and workflow passages that currently mandate Duke styling; canonical `CD/SKILL.md` and web references where ownership needs clarification. Keep `CD` canonical and its builder copy generated.

**Acceptance:** The same calculator works with the faculty's default identity and an approved independent identity without duplicating interaction guidance. A brand change cannot weaken contrast, keyboard behavior or data truth. Product defaults, accessibility requirements and institutional rules are visibly distinguished. No second hand-maintained Campus Designer skill is introduced.

#### D02 — Write a brief task-to-layout design rationale

**P1 · S · Dependencies: none.**

**Evidence and change:** Grok supplies composition recipes; ours provides broad hierarchy advice. Before substantial UI work, record the principal user question, first useful screen, primary action, evidence needed nearby, information density and relevant device constraints. Choose a composition—editor with inspector, scenario form/result, analytical workspace, narrative report or content site—and justify it. This belongs in the existing plan/design decision record, not another mandatory planning document. [O-PLAN] [O-WEB] [G-DESIGN]

**Targets:** plan/build guidance and a small product-layout reference.

**Acceptance:** A profitability dashboard begins with the business comparison and supporting ledger; a scenario calculator emphasizes input/result relationships; a portfolio begins with evidence of work. These cannot all be accepted by filling the same hero/stat-card/sidebar template. A reviewer can explain why each major region exists and which user task would suffer if it were removed. No pixel-perfect mockup approval ritual is required for ordinary changes.

#### D03 — Define semantic tokens and typography roles

**P1 · M · Dependencies: none; related: D01. Semantic roles can improve the current Duke profile independently.**

**Evidence and change:** Our brand tokens and `duke()` adapters are useful but do not fully define product roles. Add semantic foreground/background pairs, muted/border/focus/error/selection states, spacing, type roles, tabular numerals and a small density scale. Map the selected brand into those roles, then map roles into the component library and charts. Preserve local licensed fonts and real loading checks. Avoid a large token taxonomy or mandatory dark mode. [O-TOKENS] [O-TYPE] [G-DESIGN] [G-TYPE]

**Targets:** canonical design tokens where brand-owned, builder product tokens, `assets/library-themes/` adapters.

**Acceptance:** A form, ledger, chart, dialog and disabled/error state agree on role meaning. Actual foreground/background combinations pass the selected contrast criteria. Enlarged text does not clip controls. Changing one semantic role updates consumers without scattering raw replacements. If dark mode is requested, test a complete role/state mapping; otherwise ship one thoroughly reviewed theme.

#### D04 — Supply a compact, accessible component recipe set

**P1 · M · Dependencies: none; related: D03, A03. Use the existing theme if D03 is not approved.**

**Evidence and change:** Grok gives concrete field/dialog styling, surface and component-selection guidance; our Mantine recipe largely supplies integration and review requirements. A business-table recipe would extend the exemplar rather than copy an existing one. Add examples for labeled field/help/error, filter bar, Apply controls, tabs, confirmation dialog, import control, status feedback and responsive data table. Specify state ownership and keyboard/focus behavior. Use the shared component library or native HTML controls within React where simpler. This is a lookup set, not a bespoke component framework. [O-MANTINE] [G-SURFACES] [G-REFINED]

**Targets:** product-design reference specimens, selected starter components and Mantine recipe.

**Acceptance:** Invalid/pending/disabled states are distinguishable; dialog focus enters and returns correctly; labels remain available when values are entered; controls can be operated without a pointer. Selected filters survive view changes when specified. A tested library component is preferred to a newly invented combobox, and one app does not accidentally carry two competing component systems.

#### D05 — Turn “anti-slop” into observable product failures

**P1 · S · Dependencies: none.**

**Evidence and change:** Borrow Grok's explicit anti-pattern review, but replace taste absolutes with task-specific criteria. Check for irrelevant KPI cards, empty sidebars, decorative dashboards, filler text, stock gradients, redundant controls, unearned status badges, false precision, excessive whitespace separating decisions from evidence, and animation that interrupts reading. Preserve legitimate SVG diagrams, brand fonts, useful color and authored scientific visuals; evaluate each by its actual purpose. [O-WEB] [G-DESIGN] [G-REFINED]

**Targets:** product-design review checklist and examples of weak/improved business screens.

**Acceptance:** Each flagged issue names the user's task or information it harms and a concrete correction. A plain but useful tool can pass; a polished but substantively empty one cannot. The review must not reject a correct authored chart merely because Grok discourages hand-drawn charts, or reject a sensible type system on a vague claim that it looks generic. Do not implement a string-based “slop score” and call it design evaluation.

#### D06 — Establish an analytical visual grammar

**P1 · M · Dependencies: none; related: D02, D03, B02.**

**Evidence and change:** Our business/domain recipes already demand honest scales, units and evidence. Consolidate their shared presentation rules: define metric and grain, show baseline/target/uncertainty when relevant, align chart/table/filter semantics, distinguish zero/missing/not-applicable, and preserve raw precision behind display rounding. Provide compact patterns for comparison, trend, distribution, contribution bridge and scenario tradeoff. Grok's visual polish does not replace these analytical obligations. [O-MODELS] [O-ECHARTS] [G-DESIGN]

**Targets:** shared analytical-design reference, ECharts/Tabulator guidance and task recipes if B01 is approved.

**Acceptance:** Every headline value reconciles to an accessible evidence view; a filter affects chart and totals consistently; selection and confidence are not conveyed by color alone. Two scenarios remain comparable on honest scales. A seemingly attractive chart that conceals denominators, reverses a ranking through rounding or treats synthetic geography as measured evidence fails review.

#### D07 — Design the full state lifecycle as part of the interface

**P1 · M · Dependencies: none; related: A06, D04.**

**Evidence and change:** Both suites name loading/empty/error states, but reusable visual behavior is uneven. Define distinct initial, valid-empty, invalid-input, loading, cancelled, failed, stale-result, saved and export-complete states. Show honest recovery actions and preserve the last valid inputs/results where appropriate. Do not simulate loading for instantaneous work or erase a failed load into an empty dataset. [O-BUILD] [O-EVALUATE] [G-DESIGN]

**Targets:** product-state reference and starter examples; model/import/storage adapters supply actual state, not the design layer.

**Acceptance:** An interrupted import, malformed file, no-match filter, long calculation, old result after edits and failed export each have a truthful state. Keyboard focus and accessible announcements support recovery without repeated announcements for every keystroke. A screenshot review includes material non-happy states. Default content is meaningful and clearly public/synthetic; it is not silently passed off as the user's data.

#### D08 — Bound motion, density and responsive behavior by the task

**P1 · M · Dependencies: none.**

**Evidence and change:** Grok offers rich motion recipes but conflicting constants; our Motion skill protects model correctness and reduced-motion behavior. Keep a short catalog for disclosure, orientation and feedback. Define desktop and narrow layouts, readable type roles and purposeful density. Never tie a business calculation to animation frames. Avoid gratuitous count-up values, per-word headings, loading shimmer or press-scale mandates. [O-MOTION] [O-WEB] [G-ANIMATION] [G-PERFORMANCE]

**Targets:** product-design/motion references and selected layout specimens.

**Acceptance:** With reduced motion, every workflow remains understandable; interrupted transitions do not strand focus or input. At narrow widths and enlarged text, primary actions remain usable and only genuinely two-dimensional content scrolls horizontally. Measure large-data responsiveness where relevant; do not claim smoothness from copied duration numbers. Practical target sizing remains accurately distinguished from the selected WCAG conformance level. [X-TARGET-AA] [X-TARGET-AAA]

#### D09 — Add static app identity and share-preview output

**P1 · M · Dependencies: A08.**

**Evidence and change:** Grok's `og` skill treats identity as part of completion; ours has no standard equivalent. Generate title, description, favicon, canonical/social metadata and an appropriate local preview image from the app's actual identity. Author exact icons/diagrams as code/vector when suitable. Use a real application screenshot or restrained card; an ordinary utility need not get promotional artwork. Implement in static build output, not runtime metadata injection. [G-OG] [G-FAVICON]

**Targets:** starter HTML/public assets, identity build step and evaluation checklist.

**Acceptance:** Inspect produced HTML without JavaScript, verify absolute public metadata URLs and base-relative assets, and check the card/favicon at their actual sizes. Renaming the app updates all relevant outputs. No default Grok branding, fabricated institutional marks, broken external placeholder image or unexplained remote asset service remains. Asset attribution follows E05 if approved, otherwise the existing attribution record.

#### D10 — Make visual asset selection and provenance deliberate

**P2 · M · Dependencies: none; related: E05.**

**Evidence and change:** Grok's imagine/generated-art references use reference assets and visual readback. Borrow tool capability discovery, preserving source references and checking the rendered asset, not a mandatory image-generation step. Distinguish exact information visuals from decorative imagery: tables, equations, charts and flow diagrams need reproducible rendering; generative artwork may help an explanatory illustration. The image tool operates during authoring, not inside the published app. [G-IMAGINE] [G-ART]

**Targets:** product-design asset guidance and a build-time provenance entry template.

**Acceptance:** Every retained asset has an identifiable source or generation/edit record, purpose, rights/notice status and local deliverable. Record known tool/model information and prompt/reference inputs when appropriate; do not invent inaccessible tool metadata. Verify text, dimensions, crop, contrast and consistency in context. Do not generate a screenshot and describe it as evidence from the functioning application.

### B. Business tasks, data and specialist capabilities

#### B01 — Route by business task before selecting packages

**P1 · M · Dependencies: none.**

**Evidence and change:** Our sixteen recipes expose useful implementation choices, while decision-models contains substantive business guidance. Add a small task layer: operating dashboard, scenario/finance calculator, local data explorer, schedule/resource planner, simulation/optimization tool, analytical presentation and business information site. Each specifies decisions, data/state contract, independent checks and likely interfaces, then links to optional library adapters. Do not create a separate full framework for each archetype. [O-MODELS] [O-SELECTION]

**Targets:** new task index plus focused references, plan/build routing and library-selection links.

**Acceptance:** A sales-growth request elicits contribution/cost evidence instead of only a sales chart; a planning request distinguishes calendar display from resource feasibility; a simulation explains uncertainty rather than merely animating randomness. Library selection follows those needs. A task requiring no specialist package remains valid. Keep original requirements and approved deferrals visible instead of redefining the brief to fit a template.

#### B02 — Use explicit model and dataset contracts

**P1 · M · Dependencies: none; related: A04.**

**Evidence and change:** Preserve our pure model functions and domain distinctions. Add concise schemas/contracts for units, grain, identifiers, time semantics, nulls, rounding, bounds and result statuses. Keep expected-value derivations separate from UI formatting. Use TypeScript for compile-time contracts in the common baseline; runtime boundaries still validate external values. Shared tables must not mix counts, currencies or dates because their fields happen to be numeric/string. [O-MODELS] [O-PLAN] [O-EVALUATE]

**Targets:** model/task references, starter example and domain fixture definitions.

**Acceptance:** A total reconciles across independently derived components; missing values cannot silently become zero; joins cannot multiply measures unnoticed; local/calendar dates have explicit treatment. Solver infeasibility is not shown as a zero-cost optimum. Repeated runs of deterministic models agree; statistical models use justified tolerance and assumptions. A business owner can inspect assumptions without reading the implementation.

#### B03 — Make local persistence explicit, recoverable and portable

**P1 · M · Dependencies: none; related: A06.**

**Evidence and change:** Grok commonly uses localStorage; ours warns device-local but leaves lifecycle ad hoc. For apps needing saved scenarios, define a repository/app namespace, versioned schema, validation, migrations, reset, save feedback and export/import. Use IndexedDB only when structured volume or asynchronous work warrants it. Storage can be unavailable or evicted; it is neither a backup nor a security boundary. Multiple Pages project paths on one host share an origin, so namespaces prevent accidental collision, not malicious access. [O-WORKFLOW] [G-DATA] [X-STORAGE] [X-IDB]

**Targets:** optional storage adapter/reference and state fixtures.

**Acceptance:** Two apps on the same owner origin do not overwrite each other; an old/corrupt record and quota failure recover visibly; reset affects only this app; saved inputs reproduce the recorded scenario. Private imports are transient by default and require an explicit retention choice before storage. Data remains exportable without the original plugin. Do not promise cross-device synchronization.

#### B04 — Consolidate the local import workflow

**P1 · M · Dependencies: B02.**

**Evidence and change:** Papa Parse, Arquero and DuckDB already carry strong boundary rules; agents must still assemble upload UX and reconciliation. Supply a common transaction: inspect size/type, parse, validate schema and semantics, preview mapping/errors, reconcile counts/totals, then commit valid data. Preserve the old valid dataset on rejection. Support cancellation for expensive work and render imported labels as text. [O-PAPA] [O-ARQUERO] [O-DUCKDB]

**Targets:** import/task reference, reusable UI/adapters for the selected stack and representative fixtures.

**Acceptance:** Test quoted/multiline CSV, BOM, empty file, missing/duplicate headers, invalid dates/numbers, duplicate keys, oversized input and a wrong schema. Row counts reconcile across accepted/rejected records; units and header mapping are visible. A failed file cannot partially mutate the active model. Network observation confirms local records were not uploaded or sent to a tool/service. Keep implementation limits stated and useful.

#### B05 — Make exports reproducible analytical outputs

**P1 · M · Dependencies: B02.**

**Evidence and change:** Our CSV recipe already requires formula-safe output, but result export conventions differ by app. Define whether the export contains the source dataset, current filtered rows, model inputs or calculated results. Include units, schema/version, scenario identity, data coverage and applicable assumptions. Preserve exact values where computation requires them; separately format human reports. Keep formula-safe CSV handling from the existing approved recipe rather than inventing a new sanitizer. [O-PAPA] [O-MODELS]

**Targets:** task/export reference and selected CSV/JSON/report adapters.

**Acceptance:** Reimporting a scenario reproduces its independently checked result; filters and rounding are documented; rows cannot be silently omitted. A user distinguishes a screenshot from reusable data. Data/source attribution travels with the export where relevant. Exports containing user imports stay under the user's control and are not automatically committed, published or added to the student's public grading package.

#### B06 — Permit reproducible build-time public data acquisition as an optional profile

**P2 · M · Dependencies: B02, E05.**

**Evidence and change:** Our blanket runtime-service boundary need not prohibit an agent preparing a reviewed public snapshot before publication. Define an optional authoring pipeline that records source URL, retrieval date, license/terms basis, transformation, schema and retained snapshot. Prefer a reproducible script with a fixed input artifact; any scheduled refresh is separately approved and re-evaluated. This proposal does not add runtime APIs or upload visitor data. [O-WORKFLOW] [G-NEON]

**Targets:** workflow capability wording, data preparation reference and a single demonstrated public-data recipe.

**Acceptance:** Another agent can rebuild from the frozen package without the provider being online. Counts/totals reconcile before and after transformation; an unexpected schema blocks refresh; the interface names coverage/as-of date. A network failure cannot silently publish an empty/current-looking dashboard. Public data is reviewed for lawful reuse and privacy rather than assumed safe merely because it has a URL.

#### B07 — Turn recurring integration hazards into small tested adapters

**P1 · M · Dependencies: none; related: A03, Q01.**

**Evidence and change:** Existing reviews found real lifecycle and production failures: hidden-chart sizing, repeated Gantt listeners, Reveal initialization, Arquero minification and SQL extension loading. Preserve each unique contract in a minimal integration adapter or specimen, rather than having every generated app reconstruct it. Prioritize ECharts mount/resize/dispose, controlled table selection, worker cancellation/recovery and secure local DuckDB initialization. Do not wrap entire libraries behind a new generic engine. [O-TRIALS] [O-CHECKLIST] [O-LIVE-REVISIONS]

**Targets:** `WB/assets/` integration examples, affected recipes and maintained regression fixtures.

**Acceptance:** Disposable integrations survive repeated mount/unmount; Frappe retains one document-lifetime instance and survives repeated show/hide and edits unless a separately reviewed teardown is approved. Hidden→visible views, cancel/retry and production builds behave correctly without leaked listeners or unsolicited network calls. Model results remain library-independent. Each helper has a demonstrated caller and a documented ownership/disposal boundary. Retire a package only after a replacement passes its task contract; do not replace Tabulator or Frappe solely because Grok uses a different stack.
### Q. Verification and evaluation

#### Q01 — Ship a real, portable browser-check harness

**P1 · M · Dependencies: A07.**

**Evidence and change:** Grok describes a reusable dual-viewport smoke contract; our `test:browser` merely starts Vite. Provide an approved browser automation harness, initially Playwright if the environment supports it, with explicit URL/base, viewport, browser version, console/page/network failures and screenshots. Include one real input→output interaction. Keep host-native visual inspection available; do not pretend launching a server or taking a screenshot executes acceptance tests. [O-PACKAGE] [G-QA]

**Targets:** starter test scripts, project-local browser fixtures and evaluate guidance.

**Acceptance:** Intentionally break module loading, primary button behavior and narrow-screen layout; relevant checks fail with readable evidence. Test execution exits nonzero on failure. Normal desktop and narrow runs produce source-associated receipts. A missing automation capability yields an explicit incomplete verdict and a documented alternative, not a fabricated pass. The harness does not mandate testing every low-impact prose change.

#### Q02 — Make CI execute the applicable quality gates

**P0 · M · Dependencies: A07.**

**Evidence and change:** Our shipped managed Pages workflow installs/builds, checks `dist/index.html` and rejects symlinks. It does not execute application tests or dependency/evidence validation. Add ordered gates for dependency policy, the common baseline's required typecheck, applicable model checks, production build and browser checks when configured. Keep project command names consistent; CI invokes application-owned commands rather than embedding a second implementation. Q01 and A04 extend available browser/model-contract checks if approved, while A01 supplies the baseline typecheck and existing meaningful tests can run independently. [O-PAGES]

**Targets:** common managed Pages workflow and starter scripts; the plain workflow is retained only for previously generated apps pending explicit migration.

**Acceptance:** A broken numerical case, failed configured typecheck or production interaction prevents publishing. An unavailable/incomplete required check blocks publication. An optional or irrelevant check can be marked not applicable with a reason; it is never reported as a pass. The uploaded artifact is the one checked; no later unverified rebuild replaces it. A trivial page uses the same baseline and typecheck/build gates; its test cases and optional modules remain proportional to its behavior.

#### Q03 — Preserve independent business oracles and broaden their reuse

**P0 · M · Dependencies: none.**

**Evidence and change:** This is a strength of our builder, not a Grok replacement. Supply reusable patterns for analytically derived cases, accounting reconciliation, monotonic/conservation properties, infeasible solver cases and statistically justified bounds. Require app-specific independent answers before observing implementation output. Distinguish arithmetic correctness, assumption validity and usefulness for the decision. A library's own result is not an independent oracle for itself. [O-EVALUATE] [O-MODELS]

**Targets:** evaluation/model references and small task fixtures.

**Acceptance:** A deliberately wrong subtotal, changed denominator, invalid model assumption and biased simulation can each be caught by an appropriate case. Expected values retain derivation/source; failed cases remain visible after correction. Model tests import production functions. Do not pad counts with tests mirroring assignments or claim a business requirement is satisfied solely because all low-level tests pass.

#### Q04 — Make rendered and accessibility review structured evidence

**P1 · M · Dependencies: none; related: D05, Q01.**

**Evidence and change:** Our review guidance is precise but largely prose; Grok captures screenshots but sometimes treats equal smoke output as sufficient production parity. Define a concise review record for principal tasks and material states: screenshot, viewport/zoom, visual finding, keyboard path, focus/labels, measured contrast, font loading and outstanding limitation. Add axe or equivalent automated checks only as one input; automation does not establish full accessibility. [O-REVIEW] [O-WEB] [G-QA] [X-AXE]

**Targets:** evaluate/review templates and optional browser checks.

**Acceptance:** Inspect desktop, narrow and enlarged-text output plus relevant dialogs/errors/selected states. A correct DOM with unreadable contrast or clipped results fails review. Capture actual application output, not generated mockups. State exactly which accessibility criteria and workflows were checked; do not label the entire app “WCAG compliant” based on a zero-violation scanner result.

#### Q05 — Test the production deployment shape before and after publication

**P0 · M · Dependencies: none; related: A05, Q01.**

**Evidence and change:** Both suites recognize development/production divergence. Convert our existing base-path, local-asset, production-preview and returning-browser requirements into a repeatable scenario. Include fonts, WASM/workers, deep links and network behavior of selected libraries. Rebuild and restart when relevant source changes. A development screenshot cannot establish the published version. [O-MANAGED] [O-DEPLOY] [G-QA] [X-VITE-DEPLOY]

**Targets:** evaluation/deployment guidance and project browser fixtures where available.

**Acceptance:** Preview built output at the actual repository base, then open the live Pages URL and verify a known calculation and revision. Refresh a shared route, revisit with cached assets, and exercise any worker/import path. Missing chunks, CDN fallback or external SQL extension calls are detected. Record deployment lag/cache findings without repeatedly publishing unrelated changes to mask them.

#### Q06 — Implement the existing evidence-freshness protocol once

**P0 · M · Dependencies: none.**

**Evidence and change:** Our freshness rules correctly inspect committed, staged, unstaged and untracked/ignored source, and separate executable change from report-only updates. They are too important to depend on an agent reconstructing commands every time. Provide a project-portable checker that reports the exact Git comparisons and applicability of evaluation to current source. Preserve semantic review of plan changes; not every decision can be reduced to a file hash. [O-FRESHNESS]

**Targets:** freshness reference, generated project checker and evaluate/deploy entry points. E03 later packages its exact policy provenance.

**Acceptance:** Test staged/unstaged opposing edits, untracked executable files, ignored source, changed build tooling, amended plan assumptions and documentation-only receipts. Relevant changes invalidate prior results; harmless report additions do not cause a self-invalidating loop. Unknown relevance requires an explicit review decision. Git remains the revision truth; do not add a competing custom source digest registry.

#### Q07 — Add task-sized performance and failure budgets

**P2 · M · Dependencies: B02.**

**Evidence and change:** Grok's performance reference mainly addresses rendering/motion. Business tools also fail through large imports, quadratic joins, long SQL/solver jobs and uncontrolled memory. For relevant apps, specify representative/maximum data volumes, initial useful output, interaction responsiveness, cancellation and bounded rendered rows. Measure first; use workers, chunking or virtualization only for a demonstrated bottleneck. [G-PERFORMANCE] [O-DUCKDB] [O-HIGHS]

**Targets:** model/task planning, evaluation fixtures and worker adapters.

**Acceptance:** Record environment, workload and measured behavior. Oversized files are rejected before destructive work; cancellation and retry leave a valid state; numerical results match small independent cases. Slow computation cannot freeze all recovery controls. Test corrupt inputs and failed worker startup. Do not claim universal speed from one desktop measurement or set an arbitrary bundle budget without a user/task rationale.

#### Q08 — Evaluate revisions proportionally while preserving the baseline

**P1 · S · Dependencies: none; related: Q06.**

**Evidence and change:** Existing instructions already call for relevant checks; a reusable impact decision would prevent both skipped regressions and unnecessary full reruns. Classify the actual change: copy, layout/state, model/data, dependency/tooling, or publication. Identify affected requirements and nearest meaningful checks. Retain the last broad baseline, explain reused evidence and rerun when new failure or uncertainty justifies it. [O-EVALUATE] [O-FRESHNESS]

**Targets:** evaluate guidance and EVALUATION revision section.

**Acceptance:** A footer wording change receives source/render verification without a new solver test suite; a formula change reruns independent answers and affected UI; a library upgrade exercises its integration and production boundary. No test is written just to mirror the changed string. The final verdict makes clear what was run, what was reused and why it remains applicable.

### E. Student decisions, attribution and grading evidence

#### E01 — Preserve attributed decision events and requirement coverage

**P0 · M · Dependencies: none.**

**Evidence and change:** Extend the current narrative history into stable requirement and decision IDs. Each relevant event records its sequence/date (unknown if unavailable), issue, options/tradeoff, chosen outcome, proposer, chooser/approval status, evidence, affected requirements, source/artifact checkpoint or link, and superseded decision. Preserve the original brief, revisions and unresolved/approved deferred scope. Use readable Markdown records with minimal structured fields; an index can be generated. Do not demand a new event for every punctuation edit. [O-WORKFLOW] [O-PLAN]

**Targets:** PLAN/DECISIONS templates, workflow and proposed `records/decisions/`.

**Acceptance:** A professor can reconstruct why the model, interface and scope changed, including rejected alternatives and student corrections, without chat access or Git knowledge. Agent-selected reversible defaults are labeled as such. Missing human acceptance remains unconfirmed. Removing a feature cannot erase its original requirement, decision or failed attempt. Every material requirement has implementation/evidence or an explicit disposition.

#### E02 — Attribute contributions without equating Git identity with authorship

**P0 · M · Dependencies: none; related: E01.**

**Evidence and change:** Approved Git identity is necessary but insufficient for grading effort. Record what the student supplied—problem, data explanation, independent example, critique, tradeoff, verification—and what agents/tools supplied or implemented. Link to relevant decisions and artifacts. Preserve concise user statements that substantiate important choices when available and appropriate; do not invent a transcript or expose private reasoning. [O-WORKFLOW] [O-BUILD]

**Targets:** contribution/attribution template, workflow checkpoints and public build-story guidance.

**Acceptance:** A reader can distinguish a student-discovered flaw from an agent-discovered flaw, and a student-approved design from an unreviewed agent choice. Unknown provenance is labeled unknown. Token counts, elapsed runtime, lines generated and commits may describe activity but never stand in for intellectual effort. Account names and Git authors do not falsely imply sole creation of generated code.

#### E03 — Package the builder and policy provenance needed for reproduction

**P0 · M · Dependencies: none.**

**Evidence and change:** Some current validation commands depend on an installed plugin path. Record the builder release/source commit, selected recipe/design versions, inventory/tool versions and applicable policy. Include project-local reproducibility tools and a passive snapshot or exact-content archive of the instructions actually used where permitted. A URL alone may disappear or change. Clearly distinguish prescribed instructions from evidence that the agent followed them. [O-MANAGED] [O-DEPS]

**Targets:** setup/export templates, generated checks and `records/attribution/` provenance.

**Acceptance:** An instructor with a clean clone/archive can inspect policy and run documented checks without the author's plugin installation. Archived instructions remain reference material, not active nested `AGENTS.md`/skill registrations. No credentials, caches, home directories or unrelated conversations are copied. A later builder upgrade cannot silently rewrite the policy record for earlier work.

#### E04 — Retain factual evaluation receipts, failures and student review

**P0 · M · Dependencies: none.**

**Evidence and change:** Keep our failed-round history and independent answers, but standardize the minimal receipt: source checkpoint, plan/requirement IDs, method/environment, expected result with derivation, observed result, verdict, evidence path, reviewer and resulting correction. Separate automated results, agent inspection and student review. An agent's claim that a student tested the app needs actual support. [O-EVALUATE] [O-FRESHNESS]

**Targets:** EVALUATION template and `records/evaluations/`; integrate harness output if Q01 is approved.

**Acceptance:** One intentionally failing round followed by a fix remains traceable. A screenshot documents appearance but cannot prove a numeric assertion without visible/verifiable values. Unsupported checks are marked not run. The current verdict points to applicable receipts and known limits, not a blanket green summary detached from revisions. Student review may be pending without being fabricated.

#### E05 — Unify source, data, asset and license attribution

**P0 · M · Dependencies: none.**

**Evidence and change:** Existing notices cover libraries/fonts; Grok's asset skills retain some third-party origins. Add a concise provenance ledger for datasets, formulas/reference methods, imagery, generated assets, adapted code and design references. Record origin, retained local artifact, transformations, rights/notice information and relevant decisions. Reuse generated notices rather than copying the dependency list into several manually edited documents. [O-NOTICES] [G-README] [G-ART]

**Targets:** attribution template, notice pipeline and build/deploy guidance.

**Acceptance:** A grader can trace every substantive reused/generated input to its origin or an explicit unknown. Required notices are preserved in the source and published output where applicable. Synthetic data is labeled, and public-source data is not implied to be student-collected. An asset lacking adequate reuse permission is replaced or held back rather than assigned an invented blanket license. Attribution is factual; this is not a legal certification.

#### E06 — Produce a self-contained submission package

**P0 · M · Dependencies: E01, E02, E03, E04, E05.**

**Evidence and change:** Make the educational handoff a first-class output, separate from `dist/`. Package source, lockfile, frozen permissible data, complete relevant decision/attribution/evaluation history, setup, reproduction commands and release records. Include an easy entry index and Git source/release identity. Git history may accompany the repository; the readable decision record must remain intelligible in an archive without `.git`. Do not publish private visitor imports merely to make grading convenient. [O-WORKFLOW] [O-DEPLOY]

**Targets:** proposed submission/export command and package contents reference.

**Acceptance:** Open the archive in a clean directory with no prior chat or plugin installation; inspect all decision history and reproduce a documented synthetic case. Links resolve locally where needed. Detect missing required evidence and exclude secrets/caches/generated build clutter. The website can remain small while the professor receives the full relevant package. Export must never silently truncate failure or superseded-decision history.

#### E07 — Generate an instructor review index, not an automatic effort grade

**P1 · M · Dependencies: E01, E02, E04.**

**Evidence and change:** Neither inspected suite supplies a complete instructor-facing review surface. Generate a short index organized around the assignment's approved rubric: problem formulation, student decisions, model/data understanding, critical revision, verification and limitations. Link each claim to records and working features. The faculty owns the rubric; the agent must not invent weights or declare that more evidence implies greater effort.

**Targets:** submission README/index generator and an optional faculty-provided rubric mapping.

**Acceptance:** A professor can find original brief, three consequential student choices, a rejected alternative, a failure/correction and the final known limits quickly when those events exist. Missing evidence remains visible. No fabricated examples fill empty categories. The index regenerates from existing records without becoming another source of facts and never assigns a grade or psychological judgment of effort on its own.

### P. GitHub publication, recovery and maintenance

#### P01 — Bind publication to checked source and the checked artifact

**P0 · M · Dependencies: Q02, Q06.**

**Evidence and change:** Preserve main-only GitHub Actions deployment and live verification. Connect the applicable evaluation checkpoint, exact source revision, workflow run, checked artifact and public URL in a release receipt. Receipt-only commits must be distinguishable from executable changes, so adding deployment evidence does not trigger an impossible infinite verification loop. Do not treat a successful push as successful publication. [O-DEPLOY] [O-PAGES] [O-FRESHNESS]

**Targets:** Pages workflows, deploy skill and deployment/release record.

**Acceptance:** Introduce a failing model test and verify publication stops. For a successful release, the checked artifact is deployed and a known live result matches. Queued/failed/successful runs are reported accurately. Source/plan changes invalidate the right evidence. A report-only follow-up preserves the already verified application revision with an explicit explanation.

#### P02 — Make GitHub onboarding and repeat publication idempotent

**P0 · M · Dependencies: none.**

**Evidence and change:** Our setup/deployment workflow already covers sign-in, identity and repository creation. Consolidate detection of local repo, remote, account identity, public exposure, Pages configuration and deployment permissions before acting. The agent handles Git commands; the student makes consequential identity/publication choices and completes necessary provider prompts. Reuse authorization already given rather than asking at every command. [O-SETUP] [O-DEPLOY]

**Targets:** setup/deploy guidance and narrowly useful project checks.

**Acceptance:** A first-time student and returning student both reach the correct repository without duplicates, global Git identity changes or accidental publication from the wrong folder. Re-running setup recognizes existing state and preserves unrelated work. A denied account step stops only the dependent action and explains the concrete requirement. No instruction expects a novice to interpret merge conflicts or manually stage generated files.

#### P03 — Provide an ordinary-commit recovery path

**P1 · M · Dependencies: none; related: P01.**

**Evidence and change:** Grok's hosted lifecycle assumes platform operations; our agent owns GitHub recovery. Define how to diagnose a failed build/deploy, distinguish queued runs from errors, restore a known-good application through an ordinary commit and verify the live result. Preserve failed attempts and reasons, record the rollback decision and re-establish source/plan/evaluation consistency so old code does not silently restore obsolete assumptions. Cancel an obsolete blocking run only with appropriate existing authorization; never cancel unrelated work or force-push to make history look clean. [O-DEPLOY] [G-LIFECYCLE]

**Targets:** deployment recovery reference and release records.

**Acceptance:** Simulate a broken asset base and a failed workflow, then restore a prior working source without rewriting history. Identify the intended revision and confirm it is live. Explain pending platform state accurately and avoid blind repeated pushes. The student is told what changed and whether the site is available, not handed Git repair commands.

#### P04 — Keep production builds from mutating authored evidence

**P1 · M · Dependencies: A07.**

**Evidence and change:** Our notice generator currently writes tracked `app/public/THIRD-PARTY-NOTICES.txt` during `npm run build`. This can complicate evaluation checkpoints. Separate deliberate preparation of tracked notices/policy snapshots from verification and artifact building. CI should check their freshness, then generate only disposable output. Package validation must run from project-local recorded policy, not an unavailable global plugin path. [O-NOTICES] [O-PACKAGE] [O-FRESHNESS]

**Targets:** managed starter scripts, notices generator, dependency-policy packaging and workflow documentation.

**Acceptance:** From a prepared clean checkpoint, two production builds leave authored source/evidence unchanged and generate complete notices. Changing a runtime dependency makes stale notices fail a clear check until intentionally regenerated. Development tools do not pollute shipped runtime notices, while their own provenance remains inspectable. Avoid introducing a second dependency inventory that must be edited separately.

#### P05 — Version the scaffold and offer explicit migrations

**P1 · M · Dependencies: E03.**

**Evidence and change:** A stable foundation creates an upgrade obligation. Record starter/profile version separately from each app's content, publish concise changes and offer an explicit agent-run migration path for affected projects. Pin a course/semester baseline and upgrade it deliberately. Existing student work must not silently change because the installed builder changed. [O-INVENTORY] [O-VALIDATION]

**Targets:** builder release notes, provenance, supported-profile documentation and specific migrations only when needed.

**Acceptance:** Upgrade one representative app with a student customization; preserve decisions, source, data and identity, show the diff, rerun affected checks and record the migration. An unmigrated app remains reproducible at its recorded versions. Do not promise indefinite compatibility or build a general migration engine before the first concrete migration exists.

### M. Adoption experiments and operating discipline

#### M01 — Validate the common baseline across simple and complex apps

**P1 · M · Dependencies: A01.**

**Evidence and change:** Existing examples prove much more than a README, but they do not compare the proposed starter with the current workflow. Run the same new briefs through the common baseline and the old workflow as a historical control: scenario calculator, import/dashboard, planner and information site. The control is evaluation evidence, not a second supported path for new student apps. Keep user intent, available data, environment and acceptance cases comparable. Preserve transcripts/decisions and failed attempts as evaluation evidence; do not optimize only screenshots.

**Targets:** a new dated evidence campaign, not modifications to historical totals.

**Acceptance:** Compare task fulfillment, independent correctness, interface/state quality, student interventions, agent rework, portability and maintenance surface. Define pass criteria before generating outputs. Report failures and uncertainty; a small trial is not a statistical proof. If the common foundation adds ceremony without reducing important failure modes, simplify its implementation or defer release; do not create a second new-app path.

#### M02 — Test actual novice onboarding on clean supported hosts

**P0 · M · Dependencies: W02, P02.**

**Evidence and change:** Our validation explicitly leaves novice, clean-machine, Windows and host routing gaps. Test representative supported environments with fresh accounts/projects and realistic permission constraints. Include a real novice when possible; simulated student prompts are useful but cannot establish actual novice usability. Do not ask learners to repair toolchains manually to finish the trial. [O-VALIDATION] [O-FORWARD]

**Targets:** supported-host claims and a separate onboarding trial record.

**Agreed release gate:** Include the clean-machine provisioning and containment checks in §1.1 on macOS and Windows. Documentation of the intended workflow does not establish that either platform has passed.

**Acceptance:** Record success/failure, prompts requiring human action, time/interaction burden and where facilitator intervention occurred. Verify agent-managed source publication and submission retrieval. Unsupported environments are named honestly. Account setup success, browser automation availability and skill discovery are evaluated separately; loading the plugin format alone does not establish a complete workflow.

#### M03 — Maintain a small integration contract matrix

**P1 · M · Dependencies: B07.**

**Evidence and change:** Preserve hard-earned recipe regressions without testing every theoretical library combination. Choose representative fixtures covering shared component shell, chart/table filtering, presentation chart resizing, import/transform/export, worker SQL and solver cancellation. Each fixture owns a known boundary and selected production check. Add combinations only when a real task or failure requires them. [O-TRIALS] [O-CHECKLIST]

**Targets:** maintained recipe fixture campaign and library inventory review process.

**Acceptance:** Every retained integration check names the failure it prevents. An approved library upgrade runs its affected fixtures and reports changed behavior. Tests are independent where correctness matters and do not mirror trivial markup. A removed/unused recipe can retire its fixtures deliberately without leaving misleading coverage claims.

#### M04 — Budget maintenance and retire unsupported surface area

**P1 · S · Dependencies: none.**

**Evidence and change:** Borrow Grok's consistency of environment without assuming its team's operating capacity. Assign one maintenance owner, supported version window and review trigger for each profile, major dependency, host adapter and evidence tool. Prefer a small dependable set over an impressive catalog. Review observed usage/failures before adding another framework, UI kit, storage backend or export format.

**Targets:** builder maintenance/release documentation and inventory ownership.

**Acceptance:** A maintainer can state what must run for a dependency update, which students/apps are affected and what is explicitly unsupported. Each proposed abstraction has a current caller. Remove duplicate policy, unused helpers and orphan examples during review. Keep original records; retire capabilities through explicit release notes rather than silently deleting students' reproducibility instructions.
## 7. Approval groups and implementation order

These groups help select a scope; they are **not an approval** and do not override each item's dependencies. The smallest useful change is not “implement all 56.” Resolve the foundation choices first, then approve individual items.

| Sequence | Candidate approvals | Concrete exit condition |
|---|---|---|
| 1. Preserve evidence and clarify ownership | E01–E05, W03, W04, Q03, Q08 | One existing representative project can be read and evaluated through the clearer records without architecture migration |
| 2. Prepare the candidate foundation | A07 → A01 → A03/A04; A02, A05, A06, A08 as needed | Clean generated dashboard/calculator builds for Pages; no unreviewed dependency expansion |
| 3. Make verification/publishing dependable | Q01, Q02, Q04–Q06, P01–P04 | Deliberate model, UI and publication failures are caught; successful exact artifact reaches Pages |
| 4. Improve the interface method | D01–D09 in dependency order, B01/B02 | Distinct business task layouts share useful controls and a coherent brand without becoming clones |
| 5. Add data/integration capability where used | B03–B07, Q07, M03; D10 if assets warrant it | Relevant import/persistence/worker lifecycles pass; unused capabilities are not installed |
| 6. Prove the student handoff | E06/E07, W01/W02, M01/M02, P05/M04 | Fresh task and novice/clean-host evidence supports claims; faculty can inspect portable submissions |
| Separate options | W05, W06; A09 only after operator decision | Resume/delegation improve real work; no service infrastructure arrives by implication |

For example, approving **A07, A01, A03, A04 and M01** authorizes the common starter and a release-readiness trial, not rewriting every library adapter or migrating existing apps. Approving **E01–E07** can improve grading evidence in existing projects without requiring an immediate React migration. Approving **D05** permits an observable anti-pattern checklist without authorizing a design-system rewrite. Approving **Q02 with A07** runs available checks; it cannot claim unimplemented browser automation exists or publish a new baseline app without its required typecheck.

When a proposal is removed, preserve other IDs, remove its tasks from the implementation plan and list affected dependents for revision. Do not hide the removed capability inside another proposal. If a dependent can be simplified to work independently, present that revised boundary explicitly before implementing it.

Any approved significant change needs the project's normal execution plan, repository/skill guidance, focused verification and separate simplification review. Use a small vertical slice first: one real task with its interface, model, evidence and Pages deployment. Do not build a generalized framework, event database or reporting portal before the slice works.

## 8. Concrete validation scenarios for an approved implementation

These are proposed future checks, **not results from this review**. Reuse each scenario across relevant proposals instead of making every recommendation create a separate test project.

| Scenario | What it must establish | Relevant IDs |
|---|---|---|
| Single-page information site | Same baseline builds the smallest useful page without unused router, chart/store libraries or navigation; meaningful hierarchy, static metadata, valid source/attribution and ordinary Pages URL | A01, A08, D02, D05, D09 |
| Contribution-margin scenario tool | Units/denominators explicit; independent subtotal; draft/Apply truth; changed input affects every result; reset/Back correct | A04, A06, B02, Q03 |
| Sales dashboard with imported CSV | Schema/row reconciliation, no partial import, safe labels, consistent filters/table/charts, export meaning | B04, B05, D06, D07 |
| Large local SQL explorer | External IO/extensions disabled, worker cancel/restart, bounded rows and accurate decimal/large integer presentation | B07, Q05, Q07 |
| Resource/schedule planner | Dates/milestones/resources modeled honestly; timeline display not confused with feasibility; keyboard alternative | B01, B02, B07 |
| Simulation or optimization tool | Independent simple case, justified sampling/tolerance or objective/feasibility, infeasible/timeout/cancel states | Q03, B02, Q07 |
| Keyboard-only narrow-screen session | Core task, import, dialog, errors and export operable; focus visible/restored; enlarged text readable | D04, D08, Q04 |
| Saved scenario under two Pages projects | No accidental key collision; old/corrupt schema recovery; retention/export/reset boundaries; origin not mistaken for path isolation | B03 |
| Failed check followed by correction | Original expected/observed evidence retained; decision and contribution attribution truthful; current result tied to source | E01, E02, E04, Q06 |
| New agent resumes an unfinished app | Detects pending checks, source changes and unresolved decisions; no invented approvals or repeated completed setup | W01, W02, W05 |
| First-time publication | Agent handles Git; correct identity/repo/base; required gates block failures; known live result; complete source package | P01, P02, Q02, Q05, E06 |
| Broken publication and recovery | Ordinary-commit restore; failed attempt retained; exact intended revision verified live | P03 |
| Instructor opens offline submission | Brief, decisions, contributions, attribution and failures readable without chat/plugin; frozen data case reproducible after tooling setup | E03, E06, E07 |
| Optional service-enabled collaboration | Auth/ownership, concurrent edits, conflict/rejoin, durable contribution record, server cost limits and service loss | A09 only |

For randomized models, choose independent moments/known cases and tolerance justified by the model, not whichever seed makes a screenshot attractive. For visual review, retain enough screenshots to explain important findings; do not generate hundreds of near-duplicates as a proxy for thoroughness. Measure realistic workload and record the environment rather than asserting universal performance.

## 9. What to retain, borrow and reject

### 9.1 Retain our strongest existing work

- The original-brief coverage and explicit deferral discipline. A polished partial tool is still partial.
- Independent business answers, counterfactuals, unit/grain/rounding semantics and model/UI separation.
- Source-bound evaluation, including staged/unstaged conflicts and untracked executable inputs.
- Local licensed assets, bounded local imports, explicit solver/SQL/worker behavior and recorded integration failures.
- Agent-managed GitHub publication, public-source review, live known-answer checks and honest support limits.
- Canonical design ownership and the distinction between institutional guidance, recommendations and accessibility requirements.

These are current substantive strengths even if much of their execution remains manual. The diagnosis is not that our builder needs more warnings. It needs a smaller set of reliable mechanisms beneath its already demanding instructions.

### 9.2 Borrow Grok's method, adapted to our environment

| Borrow | Adaptation |
|---|---|
| One expected development environment | A supported reproducible project profile plus honest host capability discovery |
| Brief request triage | Avoid needless setup for questions/edits; preserve consequential student decisions |
| Shared root/routes/types/component foundations | Small business-app shell; no platform auth/branding bridge without need |
| Tokens → components → composition → verification | Product design layer with optional brand mapping and business analytical grammar |
| Explicit anti-patterns | Observable task/clarity failures rather than universal aesthetic prohibitions |
| Dev/production smoke envelope | Actual portable runner, application assertions, visual review and Pages-base checks |
| Identity and share asset finish pass | Static metadata/local assets under our public identity and provenance policy |
| Shared contracts before parallel work | Optional host-aware delegation, never a requirement for every small app |
| Focused upstream references | Short task-specific adapters; load only the relevant detailed material |

### 9.3 Do not treat the exemplar as internally consistent or inherently safer

| Observed issue | Why it matters / response |
|---|---|
| Main design skill discourages a system-only font default while the refined reference permits system UI | Clarify scoped defaults. Its warning about “Inter-everything with no hierarchy” is a hierarchy critique, not an Inter ban. [G-DESIGN] [G-REFINED] |
| “No arbitrary values” alongside arbitrary-value motion examples | Give legitimate recipes explicit tokens or explain exceptions; avoid a rule that its own examples violate. [G-DESIGN] [G-ANIMATION] |
| Press scales and nested-radius rules vary between references | Use role-dependent defaults, not competing universal constants. Dense analytical tools may need little rounding or motion. [G-SURFACES] [G-REFINED] [G-ANIMATION] |
| Main skill prohibits hand-drawn illustrations/maps/charts and emoji UI icons; identity guidance allows authored SVG and emoji favicons | These are different contexts, so state their scopes rather than inventing a blanket SVG ban. Do not transplant a chart-authoring prohibition into exact analytical diagrams. [G-DESIGN] [G-FAVICON] |
| Performance reference says Tailwind `transition` means all properties | Current official documentation specifies a property list; `transition-all` is the all-properties utility. Retain a targeted-transition preference with correct reasoning. [G-PERFORMANCE] [X-TAILWIND] |
| Touch-target prose loosely invokes WCAG | WCAG 2.2 AA target-size minimum and AAA enhanced criteria differ and have exceptions. Preserve accurately scoped guidance rather than claiming every 44px preference is a universal AA rule. [G-SURFACES] [X-TARGET-AA] [X-TARGET-AAA] |
| Type annotations or a validator returning its input are shown around server input | Runtime validation remains necessary; copied examples do not establish an audited security boundary. [G-XAI] [G-USER-DATA] |
| A sample failed data fetch becomes an empty list | Error and valid-empty states mean different things in a business tool; preserve the failure and recovery path. [G-USER-DATA] |
| Unowned shared database rows can be world-readable/writable; auth-disabled preview behavior differs | Never default a business workflow to pretend privacy. Separate preview convenience from actual deployed authorization. [G-NEON] [G-AUTH] [G-DATA] |
| P2P relay creates tables at runtime while database guidance centralizes schema in migrations | Assign schema ownership once; document a genuine exception rather than allowing recipe drift. [G-RELAY] [G-NEON] |
| Hosted secret/branding/PWA injection and Vercel deployment assumed | These services are absent from the imported bundle and cannot be recreated by copying instructions. [G-WORKSPACE] [G-DEPLOY] |
| Preview/demo-quality is the principal agent completion condition | Our output includes a checked public app and inspectable educational package; preview alone does not fulfill that contract. [G-WORKSPACE] [O-DEPLOY] |

**Collaboration and 3D were considered rather than dismissed as games.** The P2P skill explicitly mentions shared cursors/drawing, but its signaling route requires a server/database. Its sample room defaults to hostname, so transplanting it under several `owner.github.io/repository/` paths risks collisions. More fundamentally, its messages do not establish durable records, user authorization or conflict resolution. Those require A09's separate service decision. [G-P2P] [G-RELAY] [G-P2P-REACT]

The Three.js wrapper's short adapter plus on-demand upstream documentation is useful organizationally. Interactive 3D can serve a real spatial/product brief on static hosting, but it is not a reason to add another default dashboard dependency. This review inspected that wrapper's relevance and lifecycle guidance, not its enormous complete upstream API corpus. A future real 3D brief can justify an independently reviewed recipe; no game library expansion is proposed here. [G-THREE]

**Keyless runtime public APIs are another distinct option.** They do not necessarily require our own backend, but introduce CORS/provider availability, freshness, rate limits and response validation. The recommended first expansion is B06's reproducible bundled snapshot. A live-data profile should be a separate future proposal with a specific provider, stale/offline behavior and network/privacy review; neither B06 nor A09 silently approves arbitrary remote fetching.

## 10. Detailed source and recipe coverage

### 10.1 Our sixteen specialist recipes

These are retained capabilities to organize underneath task recipes, not sixteen packages to install into every app. Locations are each named skill under `WB/skills/`. Disposition is advice within B01/B07/M03, not authorization to replace a dependency now.

| Recipe | Valuable existing boundary | Recommended treatment / concrete regression to preserve |
|---|---|---|
| `echarts-browser-app` | Safe tooltips, fonts before initialization, resize/dispose, tables and selected-state palette | Keep business chart integration; exercise hidden view→visible resize and chart/table reconciliation |
| `react-flow-browser-app` | Graph meaning distinct from business model, external editable controls, keyboard/delete/cleanup | Use for true direct editing; test allowed graph changes and model consequences, not only moving nodes |
| `vis-timeline-browser-app` | Calendar/time semantics, text-safe labels and teardown | Keep event/interval capability; test boundary dates and repeated mount/unmount |
| `frappe-gantt-browser-app` | Persistent instance, no assumed destroy API, read-only default, external edits | Preserve listener/date/milestone regressions; evaluate any replacement against resource/task semantics first |
| `tabulator-browser-app` | `tableBuilt`, text-safe data, local operation, cleanup | Keep until an approved React-native alternative proves its sorting/filter/keyboard/formatting contract; do not maintain both by accident |
| `motion-browser-app` | Model independent of frames, cancellation and live reduced-motion preference | Conditional integration reference; ordinary CSS often suffices; preserve interrupted/reduced-motion behavior |
| `mantine-browser-app` | One provider, canonical theme, controlled values, labels/errors and overlay focus | Preferred existing UI-kit candidate; add real form/dialog/import flows instead of another provider/button-only demonstration |
| `reveal-browser-app` | Business audience/evidence appendix, focus-isolated arrows, resize and teardown | Optional analytical presentation path; preserve hidden-chart, focus and initialization-race cases. [O-LIVE-REVISIONS] |
| `mermaid-browser-app` | Authored definitions, strict rendering, safe parse errors, unique IDs and alternatives | Conditional explanatory diagrams; keep imported text out of executable diagram code |
| `papa-parse-browser-app` | Size limits, malformed/BOM/quoted data, transactional import and formula-safe export | Common import/export contract; retain empty→zero, partial mutation and CSV edge cases |
| `arquero-browser-app` | Data grain/joins, exact monetary constraints, authored expressions and production expression handling | Keep for substantive transformations; preserve production-minification, empty/filter and duplicated-join regressions |
| `jstat-browser-app` | Sample/population distinction, domain limits and independently justified moments | Retain statistical capability; inference assumptions require review independent of package calculation |
| `seedrandom-browser-app` | Explicit local generator, deterministic/repeated/different-seed cases and no global mutation | Retain bounded sampling; a reproducible stream is not proof of a valid distribution or business model |
| `leaflet-browser-app` | Local geometry, no hidden tile/geocode calls, attribution, coordinate order, table alternative | Use only when geography aids the decision; test missing/tied values and label synthetic measures clearly |
| `highs-browser-app` | Local worker/WASM, controlled variables, status handling, independent feasibility/objective and cancellation | Keep specialist optimization; preserve infeasible/unbounded/cancel/restart semantics and business assumptions |
| `duckdb-browser-app` | Local workers, native external-IO/extension disablement, locked config, exact decimal/integer handling and cancellation | Keep local analytical capability; preserve denied external extension access and worker recovery under production build |

The recurring design is **task contract → optional integration → independent evidence**. Reorganizing discovery should not throw away constraints learned through actual failures. Source links to every recipe are provided in §12.

### 10.2 Grok business-relevant coverage

| Reviewed group | What informed this report | Scope limit |
|---|---|---|
| Workspace instructions and all six workspace references | Environment, triage, scaffold, lifecycle, browser checks, deployment and asset assumptions | Runtime code/helpers/providers not imported or executed |
| `design-ui` and all five references | Tokens, typography, surfaces, composition, anti-patterns, motion and performance | Instructions/examples reviewed, not validated as a functioning component library |
| `og` and all five references | Identity contract, favicon, custom/placeholder card and banner workflow | Hosted injector and rendering tools unavailable; static adaptation proposed |
| `imagine` | Asset workflow and visual verification | No assets generated in this comparison |
| `auth` and its references | Prewired setup, server-side ownership and preview/deploy distinctions | Authentication implementation and service behavior not audited |
| `neon` | SQL, migrations, per-user data and preview constraints | No database provisioned or queried |
| `xai-api` | Server-only secret and paid-operation boundaries | No API key/request or cost behavior tested |
| `multiplayer-p2p` plus relay/React references | Business collaboration relevance, signaling, lifecycle and trust | No claim of secure/durable collaboration; no game mechanics reviewed |
| `threejs` wrapper | Conditional spatial business use, reference organization and disposal | Full upstream API corpus and game/3D pipelines excluded |
| Game/sprite/map/character-specific skills | Names/provenance sufficient to delimit scope | Not evaluated as business-app recommendations |

## 11. Review findings and limits

The comparison supports a clear architectural hypothesis: **our builder's educational and domain contracts are ahead of its reusable application machinery**. Grok demonstrates how much consistency a known environment and concrete UI recipes can supply. It does not establish that its framework is optimal for Pages, that all its examples are correct, or that its build loop produces better business reasoning.

Existing maintainer examples and reviews are evidence of real work, not classroom outcomes. Their recorded numerical checks, browser observations and production fixes are valuable, but campaigns cover different versions and tasks. The later forward-planning exercise caught mistakes in plans and corrected them; it did not validate newly implemented applications. Do not aggregate these into a fresh benchmark or infer novice success. [O-TRIALS] [O-CHECKLIST] [O-FORWARD] [O-VALIDATION]

The reference import was independently checked against the pinned SafeBuy root commit: **86 mapped source files matched** (79 skill/support files, six workspace references, one renamed instruction file); the local provenance README is additional. No active `AGENTS.md`, `CLAUDE.md` or symlink remains in that reference folder, and it is outside plugin catalog discovery. Byte equality supports a faithful import, not official xAI authorship or proof of an untouched initial Grok session. [G-README]

This report does not estimate student effort in hours, assign scores, promise that a framework eliminates model mistakes, or validate current package-version upgrades. Those claims require the proposed experiments. The implementation burden of 56 proposals is intentionally visible: select what improves the course's real work, and remove optional scope rather than rebuilding a hosted product platform inside a solo-maintained plugin.

## 12. Source index

Local links are relative to this report for repository/archive portability. `O-` identifies our implementation or historical evidence; `G-` identifies the imported reference; `X-` identifies official platform documentation checked October 23, 2026. References are evidence for observed behavior; proposed changes and acceptance criteria remain this report's recommendations.

### Our implementation and recorded evidence

[O-README] · [O-WORKFLOW] · [O-SETUP] · [O-PLAN] · [O-BUILD] · [O-EVALUATE] · [O-DEPLOY]

[O-STARTER] · [O-PACKAGE] · [O-MANAGED] · [O-SELECTION] · [O-INVENTORY] · [O-DEPS] · [O-NOTICES] · [O-PAGES] · [O-FRESHNESS] · [O-MODELS] · [O-GENERATOR]

[O-DESIGN] · [O-WEB] · [O-REVIEW] · [O-TOKENS] · [O-TYPE]

[O-ECHARTS] · [O-FLOW] · [O-TIMELINE] · [O-GANTT] · [O-TABULATOR] · [O-MOTION] · [O-MANTINE] · [O-REVEAL] · [O-MERMAID] · [O-PAPA] · [O-ARQUERO] · [O-JSTAT] · [O-SEED] · [O-LEAFLET] · [O-HIGHS] · [O-DUCKDB]

[O-VALIDATION] · [O-TRIALS] · [O-LIVE-REVISIONS] · [O-CHECKLIST] · [O-FORWARD]

### Imported reference suite

[G-README] · [G-WORKSPACE] · [G-SCAFFOLD] · [G-LIFECYCLE] · [G-QA] · [G-DEPLOY] · [G-DATA] · [G-ART]

[G-DESIGN] · [G-TYPE] · [G-SURFACES] · [G-REFINED] · [G-ANIMATION] · [G-PERFORMANCE]

[G-OG] · [G-FAVICON] · [G-IMAGINE] · [G-AUTH] · [G-USER-DATA] · [G-NEON] · [G-XAI] · [G-P2P] · [G-RELAY] · [G-P2P-REACT] · [G-THREE]

### Official platform documentation

| Source | Narrow fact checked |
|---|---|
| [GitHub Pages hosting][X-PAGES] | Static hosting and project-site URL shape |
| [Vite static deployment][X-VITE-DEPLOY] | Build output and Pages project base |
| [Vite TypeScript][X-VITE-TYPES] | Transpilation is separate from type checking |
| [React build-tool guidance][X-REACT] | Vite/TypeScript are viable; common application patterns still need ownership |
| [TanStack Router history types][X-ROUTER] | Hash history for hosts without route rewrites |
| [TanStack Start SPA mode][X-START] | Static shell possibility and fallback considerations |
| [TanStack Start static server functions][X-STATIC-FUNCTIONS] | Build-time cached functions are a distinct experimental feature, not a request-time Pages server |
| [Astro Pages deployment][X-ASTRO] | Content-oriented static-site alternative |
| [Browser storage limits][X-STORAGE] and [IndexedDB][X-IDB] | Origin scope, lifecycle limits and structured local storage |
| [Playwright accessibility testing][X-AXE] | Automated accessibility checks are partial evidence |
| [Tailwind transition property][X-TAILWIND] | `transition` and `transition-all` differ |
| [WCAG target-size minimum][X-TARGET-AA] and [enhanced][X-TARGET-AAA] | AA/AAA sizes and exceptions must not be conflated |

[G-ANIMATION]: ../grok-build-og/skills/design-ui/references/animations.md
[G-ART]: ../grok-build-og/references/generated-art.md
[G-AUTH]: ../grok-build-og/skills/auth/SKILL.md
[G-DATA]: ../grok-build-og/references/data-and-auth.md
[G-DEPLOY]: ../grok-build-og/references/deploy-target.md
[G-DESIGN]: ../grok-build-og/skills/design-ui/SKILL.md
[G-FAVICON]: ../grok-build-og/skills/og/references/favicon-and-icons.md
[G-IMAGINE]: ../grok-build-og/skills/imagine/SKILL.md
[G-LIFECYCLE]: ../grok-build-og/references/hibernate-revive.md
[G-NEON]: ../grok-build-og/skills/neon/SKILL.md
[G-OG]: ../grok-build-og/skills/og/SKILL.md
[G-P2P]: ../grok-build-og/skills/multiplayer-p2p/SKILL.md
[G-P2P-REACT]: ../grok-build-og/skills/multiplayer-p2p/references/react-binding.md
[G-PERFORMANCE]: ../grok-build-og/skills/design-ui/references/performance.md
[G-QA]: ../grok-build-og/references/browser-qa.md
[G-README]: ../grok-build-og/README.md
[G-REFINED]: ../grok-build-og/skills/design-ui/references/refined-ui.md
[G-RELAY]: ../grok-build-og/skills/multiplayer-p2p/references/signaling-relay.md
[G-SCAFFOLD]: ../grok-build-og/references/scaffold.md
[G-SURFACES]: ../grok-build-og/skills/design-ui/references/surfaces.md
[G-THREE]: ../grok-build-og/skills/threejs/SKILL.md
[G-TYPE]: ../grok-build-og/skills/design-ui/references/typography.md
[G-USER-DATA]: ../grok-build-og/skills/auth/references/per-user-data.md
[G-WORKSPACE]: ../grok-build-og/WORKSPACE-INSTRUCTIONS.md
[G-XAI]: ../grok-build-og/skills/xai-api/SKILL.md
[O-ARQUERO]: ../plugins/web-application-builder/skills/arquero-browser-app/SKILL.md
[O-BUILD]: ../plugins/web-application-builder/skills/build-browser-app/SKILL.md
[O-CHECKLIST]: ../evidence/web-application-builder/reviews/2026-10-09-core-checklist/README.md
[O-DEPLOY]: ../plugins/web-application-builder/skills/deploy-browser-app/SKILL.md
[O-DEPS]: ../plugins/web-application-builder/scripts/check-dependencies.mjs
[O-DESIGN]: ../plugins/campus-designer/skills/campus-designer/SKILL.md
[O-DUCKDB]: ../plugins/web-application-builder/skills/duckdb-browser-app/SKILL.md
[O-ECHARTS]: ../plugins/web-application-builder/skills/echarts-browser-app/SKILL.md
[O-EVALUATE]: ../plugins/web-application-builder/skills/evaluate-browser-app/SKILL.md
[O-FLOW]: ../plugins/web-application-builder/skills/react-flow-browser-app/SKILL.md
[O-FORWARD]: ../evidence/web-application-builder/reviews/2026-10-09-core-checklist/forward/README.md
[O-FRESHNESS]: ../plugins/web-application-builder/references/evaluation-freshness.md
[O-GANTT]: ../plugins/web-application-builder/skills/frappe-gantt-browser-app/SKILL.md
[O-GENERATOR]: ../scripts/build.py
[O-HIGHS]: ../plugins/web-application-builder/skills/highs-browser-app/SKILL.md
[O-INVENTORY]: ../plugins/web-application-builder/references/libraries.json
[O-JSTAT]: ../plugins/web-application-builder/skills/jstat-browser-app/SKILL.md
[O-LEAFLET]: ../plugins/web-application-builder/skills/leaflet-browser-app/SKILL.md
[O-MANAGED]: ../plugins/web-application-builder/references/managed-build.md
[O-MANTINE]: ../plugins/web-application-builder/skills/mantine-browser-app/SKILL.md
[O-MERMAID]: ../plugins/web-application-builder/skills/mermaid-browser-app/SKILL.md
[O-MODELS]: ../plugins/web-application-builder/references/decision-models.md
[O-MOTION]: ../plugins/web-application-builder/skills/motion-browser-app/SKILL.md
[O-NOTICES]: ../plugins/web-application-builder/assets/managed-starter/scripts/notices.mjs
[O-PACKAGE]: ../plugins/web-application-builder/assets/managed-starter/package.json
[O-PAGES]: ../plugins/web-application-builder/assets/pages-managed.yml
[O-PAPA]: ../plugins/web-application-builder/skills/papa-parse-browser-app/SKILL.md
[O-PLAN]: ../plugins/web-application-builder/skills/plan-browser-app/SKILL.md
[O-README]: ../plugins/web-application-builder/README.md
[O-REVEAL]: ../plugins/web-application-builder/skills/reveal-browser-app/SKILL.md
[O-REVIEW]: ../plugins/campus-designer/skills/campus-designer/references/review.md
[O-SEED]: ../plugins/web-application-builder/skills/seedrandom-browser-app/SKILL.md
[O-SELECTION]: ../plugins/web-application-builder/references/library-selection.md
[O-SETUP]: ../plugins/web-application-builder/skills/setup-browser-app/SKILL.md
[O-STARTER]: ../plugins/web-application-builder/assets/managed-starter/app/app.js
[O-TABULATOR]: ../plugins/web-application-builder/skills/tabulator-browser-app/SKILL.md
[O-TIMELINE]: ../plugins/web-application-builder/skills/vis-timeline-browser-app/SKILL.md
[O-TOKENS]: ../plugins/campus-designer/skills/campus-designer/assets/duke-tokens.css
[O-TRIALS]: ../evidence/web-application-builder/recipe-examples/2026-10-09/README.md
[O-TYPE]: ../plugins/campus-designer/skills/campus-designer/references/typography.md
[O-VALIDATION]: VALIDATION.md
[O-WEB]: ../plugins/campus-designer/skills/campus-designer/references/web.md
[O-WORKFLOW]: ../plugins/web-application-builder/references/workflow.md
[X-ASTRO]: https://docs.astro.build/en/guides/deploy/github/
[X-AXE]: https://playwright.dev/docs/accessibility-testing
[X-IDB]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[X-PAGES]: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
[X-REACT]: https://react.dev/learn/build-a-react-app-from-scratch
[X-ROUTER]: https://tanstack.com/router/latest/docs/guide/history-types
[X-START]: https://tanstack.com/start/latest/docs/framework/react/guide/spa-mode
[X-STATIC-FUNCTIONS]: https://tanstack.com/start/latest/docs/framework/react/guide/static-server-functions
[X-STORAGE]: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
[X-TAILWIND]: https://tailwindcss.com/docs/transition-property
[X-TARGET-AA]: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
[X-TARGET-AAA]: https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html
[X-VITE-DEPLOY]: https://vite.dev/guide/static-deploy.html
[X-VITE-TYPES]: https://vite.dev/guide/features.html#typescript

[O-LIVE-REVISIONS]: ../evidence/web-application-builder/live-revisions/2026-10-09/README.md
