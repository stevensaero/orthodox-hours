# GitHub Workflow — Orthodox Hours Tool

## What you need to know

This project has a working GitHub push workflow established in prior sessions.
You can push to GitHub from the bash_tool. Here is exactly how it works.

---

## The repository

- **URL:** https://github.com/stevensaero/orthodox-hours
- **Branch:** `main` (all work goes here)
- **Live site:** https://stevensaero.github.io/orthodox-hours/
- **Deploy:** Automatic — GitHub Actions builds and deploys on every push to `main`

## The active file

The tool lives at:
```
src/components/hours-tool.jsx
```
This is the file App.jsx imports. There is also a `src/hours-tool.jsx` — ignore it,
it is not imported and is not the active file.

The project notes live at:
```
project_notes.md   (repo root)
```

---

## The push workflow

There is no persistent git clone between sessions. Each session must clone fresh,
copy in the updated file, commit, push, then scrub the token. The full sequence:

```bash
# 1. Clone fresh (token embedded in URL for auth — scrub immediately after push)
cd /home/claude
git clone https://TOKEN@github.com/stevensaero/orthodox-hours.git

# 2. Configure identity
cd orthodox-hours
git config user.email "bill@stevensaero.com"
git config user.name "Stevens Aero"

# 3. Copy the updated tool file from outputs
cp /mnt/user-data/outputs/hours-tool.jsx src/components/hours-tool.jsx

# 4. Stage and commit
git add src/components/hours-tool.jsx
git commit -m "vX.X.X: brief summary of changes"

# 5. Push and immediately scrub the token from the remote URL
git push origin main 2>&1
git remote set-url origin https://github.com/stevensaero/orthodox-hours.git
echo "Token scrubbed"
```

If pushing project notes as well, add them to the same commit or make a second
commit before pushing:
```bash
cp /mnt/user-data/outputs/project_notes.md project_notes.md
git add project_notes.md
git commit -m "docs: project notes vX.X.X — summary"
git push origin main 2>&1
git remote set-url origin https://github.com/stevensaero/orthodox-hours.git
echo "Token scrubbed"
```

---

## The GitHub token

The token is a GitHub Personal Access Token (classic) with `repo` + `workflow`
scopes. It is NOT stored anywhere in the environment — there are no saved
credentials, no `.git-credentials` file, no environment variables. The user
must supply it each session.

**Ask the user for the token** when a push is needed. They will paste it.
Embed it directly in the clone URL as shown above. Scrub immediately after push
by resetting the remote URL to the plain HTTPS form.

**Never log the token, never echo it, never leave it in the remote URL.**
The token appears in conversation history when the user pastes it — that is
unavoidable. But never reuse a token from conversation history without confirming
with the user that it has not been revoked.

---

## GitHub Actions — automatic deploy

A workflow at `.github/workflows/deploy.yml` runs on every push to `main`.
It installs dependencies, runs `npm run build` (Vite, base path `/orthodox-hours/`),
and pushes the `dist/` folder to the `gh-pages` branch. GitHub Pages serves from
`gh-pages`. No manual deploy step needed.

Watch deploy progress at: https://github.com/stevensaero/orthodox-hours/actions

---

## Version bump protocol (before any push)

Before pushing, the tool version badge and RELEASE_NOTES must be updated.
The badge reads from `RELEASE_NOTES[0].version` dynamically — so only the
`RELEASE_NOTES` array needs updating. Add a new entry at the top:

```javascript
const RELEASE_NOTES = [
  {
    version: "vX.X.X",
    date: "May 2026",
    summary: "One-line summary",
    items: [
      "Item 1",
      "Item 2",
    ],
  },
  // ... previous entries below
];
```

Version conventions:
- **Patch** (x.x.N) — encoding new dates, minor fixes, small corrections
- **Minor** (x.N.0) — new features, new services, new significant sections

The project notes version (separate from tool version) increments independently.
See the versioning protocol section in project_notes.md for full details.

---

## What Claude cannot do here

- Claude cannot browse to GitHub.com or authenticate via OAuth
- Claude cannot use the `gh` CLI (not installed)
- Claude does NOT have a persistent clone — must clone fresh each session
- Claude cannot push without a token supplied by the user

What Claude CAN do is everything above — clone, edit, commit, and push —
using bash_tool with the token embedded in the clone URL.
