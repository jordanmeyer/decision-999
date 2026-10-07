# $title

Version 0.1.0. $description

## Install

Claude on the web or desktop: **Customize › Plugins › Add › Add marketplace**, enter `$repo`, then add the plugin from **Discover**.

Claude Code:

```sh
claude plugin marketplace add $repo
claude plugin install $name@$marketplace
```

Codex (ChatGPT):

```sh
codex plugin marketplace add $repo
codex plugin add $name@$marketplace
```

## Use

Start a new session after installing, then ask in plain language. For example:

> TODO: the listing's example request.

To call the skill directly, use `/$name:$name` in Claude or `$$$name` in Codex.

## What it needs

TODO: what the user provides, anything it relies on (for example Python 3 for a bundled script), and the data it may use: public or synthetic only.

## Limits

TODO: where it falls short, and where a person must review or approve the work.

## Evidence

How it was tested, and what the tests found, is in its [evidence record](https://github.com/$repo/blob/main/evidence/$name/EVIDENCE.md).
