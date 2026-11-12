# Build with AI

The course helper for Build with AI. You talk with ChatGPT about your product; it does the technical work and publishes your app on the web after every session.

## Assignment 0

1. Install the ChatGPT Work desktop app and sign in with your university account.
2. Create a folder named `Build with AI` in your home folder, not in Documents or Desktop, which iCloud or OneDrive may sync.
3. In ChatGPT, create a project that works only in that folder.
4. Install the Build with AI plugin from the link on the course's install page.
5. In that project, type `$setup` and follow the conversation.

Setup ends with the address of your first live page. Submit it for Assignment 0.

If ChatGPT says it cannot run commands at all, restart your computer and try again. If setup still stops, email your instructor the report it gives you.

## Only you can do these

ChatGPT handles everything else, but these four steps are yours:

- type your GitHub password;
- enter the code GitHub emails you and solve its sign-up puzzle;
- click **Authorize** when GitHub asks to connect;
- approve any request from your Mac or Windows, such as installing Apple's developer tools.

## The sessions

| Command | When | What you get |
| --- | --- | --- |
| `$setup` | Before class 1 | A course folder, a GitHub account and a first page |
| `$resume` | Week 1 | Your resume website |
| `$ideate` | Week 1 homework | Two project ideas |
| `$plan` | Week 2 | A signed plan your team builds from |
| `$build` | Week 3 | A prototype built from the plan |
| `$iterate` | Weeks 4 and 5 | One improvement per session, from feedback |
| `$ship` | Week 5 | A finished README, your own copy and a pitch starter |

## Removing everything

Ask ChatGPT to run `bash course.sh signout` (Mac) or `powershell -NoProfile -File .\course.ps1 signout` (Windows), then delete the `Build with AI` folder. Your published sites stay on GitHub until you delete them there. On a Mac, Apple's developer tools stay installed; on Windows, so does Git.
