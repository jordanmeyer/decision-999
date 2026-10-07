# Work across apps

Skills follow the open [Agent Skills](https://agentskills.io/) format and plugins the [Agent Plugins](https://agent-plugins.org/specification) format, so ChatGPT and Codex, Claude, GitHub Copilot, VS Code, Cursor, and other apps can load them. Each app offers different tools, so write for capabilities, not products.

- **Front matter.** Use only `name` and `description`. Fields one app adds, such as tool permissions, are ignored elsewhere; don't depend on them.
- **Capabilities, not tool names.** Write “read the attached spreadsheet” or “search the web if you can”, not one app's tool names.
- **Missing capabilities.** If the agent can't run code, browse, or open a file type, say what to do instead, or have it stop and say what it needs.
- **Bundled files.** Link them with paths relative to the file that links them, and tell the agent to resolve them from the skill's folder. Never use absolute paths, home folders, or links that leave the plugin; the site's build rejects links that leave it.
- **Scripts.** Use the Python 3 standard library or plain shell. Install nothing when the script runs, and use the network only when the task needs it, saying so.
- **Output.** Write into the user's project or a folder they name, never into the installed plugin; installed copies may be read-only and are replaced on update.
- **Secrets.** No credentials, API keys, personal data, or confidential material anywhere in the plugin. If the task needs an account, the user signs in to their own app; the skill never asks for a password.
- **Plain instructions.** Don't assume a particular model or app. Write so that a different agent would follow the instructions the same way; test in another app before claiming verified support for it.
