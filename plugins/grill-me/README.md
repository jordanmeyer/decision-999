# Grill Me

Version 0.1.0. A decision-tree interview that turns an idea into a shared design before work begins. Packaged from the skill text supplied by the repository owner; the instructions are preserved verbatim below the added metadata and heading.

## Credit

Original skill by [Matt Pocock](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md), distributed under the [MIT license](LICENSE). Plugin packaging by Jordan Meyer. The user-supplied wording is preserved; the package name is `grill-me`.

## Install

Install **Grill Me** from this directory in your agent app. In Claude Code:

```sh
claude plugin marketplace add jordanmeyer/decision-999
claude plugin install grill-me@decision-999
```

## Use

Start a new session and ask:

> Use grill-me to pressure-test my idea for a weekly customer feedback digest. Interview me until we agree on the design before building anything.

In Claude, invoke `/grill-me:grill-me` directly. Each round contains numbered questions and recommended answers. Answer “yes” to accept a recommendation, or give your own decision. Answers unlock dependent questions in later rounds. Confirm the shared understanding before implementation begins.

## Requirements and limits

The interview needs an agent that can follow skills and hold a multi-turn conversation. The skill also directs the agent to investigate environmental facts using sub-agents; that portion requires sub-agent support and access to the relevant filesystem or tools. Apps without those capabilities cannot perform the full workflow as written.

The guide cannot guarantee that every branch or assumption will be found. Use public or synthetic examples. No scripts, external services, credentials, or additional packages are bundled.

## Evidence

See the [review record](https://github.com/jordanmeyer/decision-999/blob/main/evidence/grill-me/EVIDENCE.md) for checks actually run and remaining limits. MBA student review and cross-app behavior have not been verified.
