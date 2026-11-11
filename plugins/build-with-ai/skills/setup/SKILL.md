---
name: setup
description: Build with AI Assignment 0. Prepare the course folder, sign in to GitHub and publish a first page.
---

# Setup

Read [the conversation rules](../../references/conversation.md).

## Run

1. In the course folder, run `bash <plugin>/course.sh setup` on a Mac or `powershell -NoProfile -File <plugin>\course.ps1 setup` on Windows, where `<plugin>` is the folder two levels above this file. If Apple asks to install developer tools, tell the student: "Click Install and wait a few minutes."
2. Ask: "Do you already have a GitHub account?" If not, open https://github.com/signup in your browser and tell the student: "Pick a username you would put on a resume and an email you will keep after graduating. Type the password, the emailed code and the puzzle yourself."
3. Run `course signin`, open the address it prints, and tell the student: "Enter the code <code>, then click Authorize." Run `course signin` again to confirm.
4. Ask: "What name should your resume site show?"
5. Run `course new resume`, put that name in `resume/app/site.json` with the tagline "Resume coming soon", and end the session with the skill name `setup`.

If a step stops twice, tell the student: "Please email your instructor this report," followed by the step, the `STOP` line and whether this is a Mac or Windows.

## The student sees

"Your page is live at <address>. Submit this address for Assignment 0."
