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

## Role of Google Drive

**Drive is used only to deliver PDFs for encoding.** Nothing else goes to Drive.
- Menaion PDFs: `orthodox_liturgics/Menaion/st-sergius-pdf/`
- Pentecostarion PDFs: `orthodox_liturgics/Pentecostarion/st-sergius-pdf/`
- No `.txt` encoding records. No project notes snapshots. No versioned filenames.
- All other source of truth lives in GitHub (see files below).

## Active files

**Assembler + UI:**
```
src/components/hours-tool.jsx
```
App.jsx imports this file. There is also a `src/hours-tool.jsx` — ignore it.

**Menaion data — single point of truth for encoding:**
```
src/data/menaion/may.js       — May entries
src/data/menaion/june.js      — June entries
src/data/menaion/july.js      — July entries
```
Encoding sessions edit these files directly. Adding a new month: create
`src/data/menaion/{month}.js` and add one line to `_menaionLoaders` in
`hours-tool.jsx`. No placeholders needed for unencode months.

**Pentecostarion data — single point of truth:**
```
src/data/pentecostarion.js
```

**Project notes — canonical, no versioned filename:**
```
project_notes.md   (repo root)
```
Git history replaces versioned Drive snapshots. Update with each session.

**Encoding spec:**
```
encoding_rule_v2.md   (repo root)   — v2.1, canonical
```

---

## The push workflow

There is no persistent git clone between sessions. Each session must clone fresh,
make edits directly in the clone, commit, push, then scrub the token.

```bash
# 1. Clone fresh (token embedded in URL for auth — scrub immediately after push)
cd /home/claude
git clone https://TOKEN@github.com/stevensaero/orthodox-hours.git

# 2. Configure identity
cd orthodox-hours
git config user.email "bill@stevensaero.com"
git config user.name "Stevens Aero"

# 3. Edit files directly in the clone (do NOT copy from /mnt/user-data/outputs)
#    Encoding: edit src/data/menaion/may.js (or june.js, july.js, etc.)
#    Assembler changes: edit src/components/hours-tool.jsx
#    Notes: edit project_notes.md

# 4. Run skeleton gate — MANDATORY for any encoding session
# Must exit 0 before committing. If it exits 1, resolve all gaps first.
node scripts/check-skeleton.mjs all

# 5. Build to verify before committing
node_modules/.bin/vite build

# 6. Stage, commit, push
git add -A
git commit -m "vX.X.X: brief summary"
git push origin main 2>&1
git remote set-url origin https://github.com/stevensaero/orthodox-hours.git
echo "Token scrubbed"
```

**Multiple commits in one session** (e.g. encoding then notes update):
```bash
git add src/data/menaion/may.js
git commit -m "data: Priority 3 set 1 — 05-16, 05-17, 05-18"

git add project_notes.md
git commit -m "docs: project notes — Priority 3 complete, architecture refactor"

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

Before pushing, update the tool version badge by adding a new entry at the top
of `RELEASE_NOTES` in `hours-tool.jsx`. The badge reads `RELEASE_NOTES[0].version`
dynamically — only the array needs updating:

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

Project notes have no separate version number — git commit history is the record.

---

## What Claude cannot do here

- Claude cannot browse to GitHub.com or authenticate via OAuth
- Claude cannot use the `gh` CLI (not installed)
- Claude does NOT have a persistent clone — must clone fresh each session
- Claude cannot push without a token supplied by the user

What Claude CAN do is everything above — clone, edit files directly, commit,
and push — using bash_tool with the token embedded in the clone URL.
