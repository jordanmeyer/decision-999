# Shared workflow

Read this reference whenever using a Browser App Builder skill. Resolve links relative to the installed file, not the working directory. Read only the other resources needed for the current stage. Write into the student's selected project, never this plugin.

## Bound the application

Build a self-contained browser app: HTML, CSS, JavaScript, bundled public/synthetic data, or a file the visitor chooses locally. No backend, login, shared database, remote API, remote AI calls, analytics, secrets, or remote scripts/fonts. The Remotion video recipe is the only possible runtime exception: once its inventory configuration is approved, use it only with an established license basis, an explicit app-owner acceptance and visitor disclosure of its documented render-event telemetry. It does not authorize analytics, external assets or transmission of video content. Browser storage, if needed, is device-local and must be explained as such. Never imply that local state is shared, backed up, or access-controlled.

Use native browser features first. New library apps use only approved configurations in [the inventory](libraries.json), selected through [library selection](library-selection.md), and the [managed build](managed-build.md). The agent may prepare Node/npm/Vite for development; visitors need only a browser. Download packages during development, bundle runtime assets locally and retain their licenses. No floating versions or opportunistic dependencies. Plain apps retain the minimal starter and no required runtime installation. Host-provided previews remain preferable where suitable. Missing capabilities stop only dependent work; do not change hosting or bypass device restrictions.

## Keep the student in charge

The student knows the problem; you handle files, commands, previews, and Git. Never ask them to type a command or edit configuration you can handle. Ask about consequential product/model choices, not routine implementation details. Explain unavoidable OS prompts or sign-in steps, let them complete those, verify the result, and resume. Do not claim that a skill grants shell, browser, installation, or account permissions.

Reuse authorization already given. Stage handoffs do not authorize publication. Prepare a concrete reviewable result before any final approval still needed. Do not repeatedly ask for approval of already-authorized local work.

## Protect public source and history

Use public or synthetic inputs, fixtures, reports, screenshots, and examples only. Never save employer/client/patient data, credentials, or private records to project files or commits. If supplied such material, reshape the task around synthetic data without copying the confidential content. Visitor-selected imports stay in the browser; do not turn them into committed examples, logs, or screenshots.

Git attribution is the explicit exception: explain before the first commit that its name and email will become public if history is pushed, then use a student-approved identity. Do not invent one or silently use a private email. If approval is deferred, leave commits pending and say history is incomplete.

Before each commit inspect the staged diff and file list. Stage named project paths, not the entire enclosing workspace. An ignore rule prevents future additions; it does not remove tracked files or history. Never automatically rewrite history. Publication requires reviewing both current files and history, not just the website output.

## Resume from files

Read the actual project before acting. Create each record only when there is something meaningful to save:

| Artifact | Owner and contents |
| --- | --- |
| `SETUP.md` | Setup: capabilities, verified tool invocations, preview/test URLs and how to restart them, gaps. No secrets or unnecessary machine details. |
| `PLAN.md` | Plan: agreed purpose, inputs/outputs, scope, model, assumptions, expected cases, acceptance; identify pending choices. |
| `README.md` | Build: what the app does, usage, data sources/licenses, preview and limits; Deploy adds public URLs. |
| `DECISIONS.md` | Any stage: significant student decisions, rationale, and resulting change. No chat dump. |
| `EVALUATION.md` | Evaluate: tested commit, relevant paths, cases, expected/observed results, failures/fixes, tools, limitations. |
| `DEPLOYMENT.md` | Deploy: repository, live URL, evaluated and published commits, verification, update steps. |

`app/` contains application source (directly publishable for plain apps; compiled by Vite for managed apps); `tests/` contains the browser test page and fixtures. `.github/workflows/` holds publishing instructions. `dist/` is generated publishing output, never authored source. Keep local input storage outside `app/` and out of Git.

If a plan is missing or a consequential decision is unresolved, use [Plan](../skills/plan-browser-app/SKILL.md). If a prerequisite is missing, use [Setup](../skills/setup-browser-app/SKILL.md). Existing files are not permission to replace them. Missing capabilities stop only dependent work.

Make meaningful commits after inspecting staged content. Document material scope/model changes and ask the student to settle them. Report what exists, what was actually checked, and what remains; a local preview is not a deployment and installation is not workflow validation.

## Shared design

Use the bundled [Campus Designer](../skills/campus-designer/SKILL.md), formerly Duke Designer, during Build and visual review. Apply its public Duke color, typography, and layout guidance. Do not imply affiliation or endorsement or include institutional logos/seals without authorization. The starter uses Duke navy and Georgia/Arial system fallbacks; no remote font requests. Keep fonts local and licensed if changing them.
