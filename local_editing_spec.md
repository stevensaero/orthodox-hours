# Local Editing Tool — Specification

**Status:** Phase 1 decision-complete (ready to build) · **Targets:** Menaion (v1), Pentecostarion + Octoechos (follow-on), Triodion (reserved)
**Companion specs:** `encoding_rule_v2.md` (§3 markers, §6b repeat markers), `stichera_repeat_spec.md`

---

## 1. Purpose & Scope

An in-app editor for making **targeted corrections** to existing liturgical hymnography
data — primarily verse text and director notations — without hand-editing the source
`.js` data modules in a text editor.

**Operating model.** Runs locally under `npm run dev` on the desktop where the repo
lives. It is **not** deployed to GitHub Pages. Edits are written to the repo's source
files; the developer reviews `git diff`, commits, and pushes by the normal workflow.
**The editor never runs git.**

**v1 operation.** Edit the value of an existing string-valued hymnography field (verse
text including its `|` `//` `[ ]` markers). The save protocol is **value-type-agnostic**
by design, so scalar fields (boolean / rank / tone / count) drop in later as a Tier-1
extension with no engine change. Structural edits (insert / remove / repeat marker) are
**Tier 2** — designed-for but not built in v1.

**Served datasets (adapters).** Menaion (v1, live), Pentecostarion and Octoechos (live
follow-ons), Triodion (reserved, dormant until its dataset exists). All four use the
**same write strategy** (recast-on-source).

## 2. Non-Goals

- No editing on the deployed Pages site (dev-mode only).
- No git automation (commit / push remain manual).
- No editing of the **word lexicon** — it is a *generated* artifact and needs a different
  write strategy; see §11.
- No structural array edits in v1 (Tier 2).
- No JSON migration of the data modules. The `.js` modules stay the source of truth, and
  their inline rubrical `//` comments are preserved.

## 3. Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│  IN-CONTEXT EDIT  (dev-only branch in shared TextBlock)      │
│   · dataset implicit (you are in that dataset's browser)     │
│   · edit affordance on the field you are reading             │
│   · textarea + strip-at-render preview + client lint         │
│   · save / dryRun → surface validator + diff result          │
└───────────────┬─────────────────────────────────────────────┘
                │ POST {datasetId, file, path, op, value, expectedOld}
┌───────────────▼─────────────────────────────────────────────┐
│  DEV-ONLY VITE PLUGIN  (Node, dev server only)               │
│   normalize → recast parse → locate node by path →           │
│   apply op → recast print → round-trip verify →              │
│   atomic write → run dataset validator                       │
└──────────────────────────────────────────────────────────────┘
                │ writes
        src/data/menaion/<month>.js   (or octoechos / pentecostarion)
```

- **Core** (built once): a shared dataset-agnostic `<FieldEditor>` (textarea + preview +
  lint + save), the integrity pipeline, the operation vocabulary, the recast engine, and
  the dev-only transport. None of it is dataset-specific. The `<FieldEditor>` is mounted
  **in-context** by the shared `TextBlock` / `FieldRow` components inside a compile-time
  `import.meta.env.DEV` branch — so it lights up across every browser at once and is
  **dead-code-eliminated from the production build** (see §9). There is no separate Editor
  route and no dataset picker; you edit the field you are reading.
- **Adapter** (one small declaration per dataset): `{ browser, fileResolver, pathGrammar,
  registry, validator, editableOps }`. Adding a dataset is writing an adapter, not a new
  editor.

## 4. Operation Vocabulary

The engine dispatches on a path-addressed operation. v1 ships only the first; the locator
resolves arbitrary paths and dispatch is operation-keyed, so Tier-2 ops are **additive
handlers**, never a re-architecture.

| Op | Tier | Phase |
|----|------|-------|
| `setValue(path, value)` | 1 | v1 (string now; bool/number/enum free) |
| `insertElement(arrayPath, index, template)` | 2 | later |
| `removeElement(arrayPath, index)` | 2 | later |
| `insertRepeatMarker(arrayPath, index, sourceIndex)` | 2 | later (specialized) |

### Path model

A node is addressed by a structured path resolved against the module's default export.

- **Menaion:** `["MM-DD"][entryIndex].<field>` or `…stichera_lord_i_call[i].text`
- **Pentecostarion:** `[paschalKey][…].<field>` (paschal-offset keyed)
- **Octoechos:** `[tone][day].lic[i]` / `…aposticha[i]` / `…dogmatikon`
- **Triodion:** analogous to Pentecostarion (paschal/Lenten offset) — defined when built

`setValue` replaces the resolved **value node** with a single string/number/boolean
literal. v1 targets are simple string literals inside `{ tone, text }` objects and
`troparion.text` / `kontakion_*.text`. Multi-part `note` concatenations are out of v1
scope (a concatenation node would be collapsed to one literal if ever targeted — not a v1
operation).

## 5. Transport — Dev-Only Vite Plugin

- A dev-only Vite plugin registers a `configureServer` middleware at **`POST /__edit`** —
  one endpoint, dispatched on the payload's `op` field, so Tier-2 ops are additive
  handlers on the same route. The `/__` prefix marks it internal (no collision with
  react-router paths or Vite's `/@vite`, `/@fs` internals).
- It is **hard-gated to dev**: the middleware is only installed under the dev server and is
  never bundled or shipped. (`base: '/orthodox-hours/'` does not apply to middleware, so the
  endpoint is matched at server root; the app `fetch`es the absolute `/__edit`.)
- **`dryRun` mode:** with `{ dryRun: true }` the plugin runs the full pipeline *except* the
  final write and returns the would-be one-line diff + validator result, so the change can
  be previewed before committing to it.
- Request payload: `{ datasetId, file, path, op, value, expectedOld, dryRun? }`.
- Response: `{ ok, written, diff, validator: {exitCode, pass, errors, warnings}, error? }`.
- New **devDependencies**: `recast` + `@babel/parser` (dev-only; never in the prod bundle).

## 6. Edit Engine (recast)

1. Read the target file; `recast.parse` with the Babel parser (ESM-aware).
2. Locate the node at `path` against the default export.
3. Apply the op. For `setValue`, set the literal value.
4. `recast.print` — **the code generator owns escaping.** A stray `"` becomes `\"`, a
   backslash `\\`, a newline `\n`. It is structurally incapable of emitting an unterminated
   literal. Untouched nodes — including all inline `//` comments — are reprinted
   byte-for-byte.
5. Hand off to the integrity pipeline (§7) before any write.

The `| // [ ]` director markers are ordinary string *content*; the JS parser never sees
them, so they cannot break storage. They are an encoding-rule concern only, handled by
lint (§7.1, §8).

## 7. Data Integrity Pipeline (defense in depth)

The **cascade class** — where injected characters terminate a literal early and corrupt
everything downstream — is eliminated by construction (§6: AST value-set + printer-owned
escaping, never text splicing). The remaining "valid-but-wrong" risks are caught at
independent layers:

1. **Client lint (pre-send).** Balanced `[ ]`; no orphan `//`; marker tier respected
   (no invented `//`); no stray newlines; sane length.
2. **Server normalization (on receive).** Explicit UTF-8; Unicode NFC; strip
   zero-width / control characters; normalize whitespace. Catches invisible paste garbage
   (smart quotes, nbsp, ZWSP) that would parse fine but corrupt content.
3. **AST value-set, never text splice.** Core invariant; the editor never lets a human
   hand-edit source.
4. **Round-trip verify (post-print, pre-write).** Re-parse the printed output and assert
   valid JS; structurally diff old vs new AST and assert **exactly one leaf node changed**
   — abort if recast touched anything else. **Compare-and-swap:** confirm the value at
   `path` still equals `expectedOld`, so a file also touched in an IDE cannot be silently
   clobbered.
5. **Atomic write + size sanity.** Write a temp file in the same directory, then rename
   over the original (atomic on POSIX); a crash or full disk leaves either the intact old
   file or the complete new one. Re-stat and confirm the byte delta is consistent with a
   single value change.
6. **Validator gate (per save / dryRun, severity-aware).** Each save and each `dryRun`
   runs the dataset validator (`validate_entries.mjs`, or `validate_octoechos.mjs` for the
   Octoechos adapter) on the whole corpus, folded into the plugin round-trip — a save is a
   deliberate action, so this is once-per-save, not per-keystroke. **Do not pass
   `--strict`.** Use the exit code as the block signal: **block the write on exit ≠ 0**
   (Check A unknown-field / Check B overlay-flag — hard violations); **warn-and-allow on
   Check C** completeness gaps (usually pre-existing elsewhere; surface as non-blocking
   notices). A v1 string `setValue` cannot move any check, so it is effectively always a
   pass; the gate earns its keep on scalar (`rank`/count) and Tier-2 edits. The developer
   still reviews `git diff`; the push gate (clean `npm run build`) is the final backstop.

## 8. Director-Marker Handling

Per `encoding_rule_v2.md §3`: every pointed field stores **one** marked string in the OCA
dialect — `|` line end, `//` penultimate line, `[ ]` director emphasis. The editor:

- Stores only the canonical OCA-dialect string. **Never writes source `*` / `**`.**
- Shows a live **strip-at-render** preview beside the textarea so the choir-facing result
  is visible while editing.
- Enforces tier discipline in lint: capture what the source gives; never invent a `//`.

## 9. UI (Option A — in-context, raw textarea + preview)

Editing is **in-context**, not a separate surface. There is no Editor route and no dataset
picker — dataset selection is implicit (you are in that dataset's browser). Every browser
already renders hymnography through the shared `TextBlock` (and `FieldRow` for scalars),
so the affordance is wired **once** there and lights up across Menaion, Pentecostarion,
Octoechos, and Triodion together.

1. **Read** an entry in its browser as today.
2. In dev, `TextBlock` / `FieldRow` render an **edit affordance** on the field. The call
   site supplies the field's path (`dateKey`, `entryIndex`, field, array index).
3. **Editor:** clicking it mounts the shared `<FieldEditor>` — raw textarea (the marked
   string) + live strip-at-render preview + inline lint feedback.
4. **Save / dryRun:** POST to `/__edit`; surface the one-line diff + validator result.
   Developer commits/pushes manually. The editor never runs git.

**Production guarantee.** The affordance, `<FieldEditor>`, and its import all live inside a
compile-time `import.meta.env.DEV` branch. Vite hard-codes that to `false` for
`npm run build` and dead-code-eliminates the branch, so the editor is **absent from the
shipped bundle** — not hidden, gone. There is also no `/__edit` endpoint off the dev
machine (GitHub Pages is static), so editing is structurally impossible in production,
twice over. The public sees `TextBlock` exactly as today.

## 10. Adapter Registry

| Dataset | Browser | Data / loader | Registry | Validator | Status |
|---------|---------|---------------|----------|-----------|--------|
| **Menaion** | `menaion-browser.jsx` | `_menaionLoaders` (month) | `FIELD_REGISTRY` | `validate_entries.mjs` | **Live (v1)** |
| **Pentecostarion** | `pentecostarion-browser.jsx` | `pentecostarion.js` | `FIELD_REGISTRY` (shared) | `validate_entries.mjs` (shared — already walks `PENT`) | Live follow-on |
| **Octoechos** | `octoechos-browser.jsx` | `tone1–8.js` loaders | `schema.js` | `validate_octoechos.mjs` | Live follow-on |
| **Triodion (FW)** | *to build* | *to build* (`triodion.js`) | likely `FIELD_REGISTRY` (twin of Pent) | likely `validate_entries.mjs` | **Reserved / dormant** |

All four share the **recast-on-source** write strategy. The Pentecostarion adapter reuses
Menaion's registry and validator verbatim; only its path grammar and browser differ.

### Triodion activation condition

The Triodion is recognized today only as a *temporal context* in `hours-tool.jsx` (opens
at Publican & Pharisee, Pascha − 70). It has no data module, registry coverage, validator,
or browser. Its adapter is **defined and registered but inert** until that scaffolding is
built. It is the Pentecostarion's structural twin (movable-cycle book on a paschal/Lenten
offset, FW-governed) and will almost certainly fold into `FIELD_REGISTRY` /
`validate_entries.mjs` the same way Pentecostarion does. Building the dataset is **outside
this editor's scope.**

## 11. Lexicon — Deferred, Different Strategy (do not fold in)

The syllable/stress lexicon is **generated** by `build_syllable_lexicon.mjs` from the CMU
Pronouncing Dictionary + TeX hyphenation + OCA `.docx` inputs, written to
`tools/lexicon-out/` and copied to `public/lexicon/`. **Editing the generated
`syllable-table.json` is unsafe: the next build regenerates it wholesale and silently
overwrites the correction** — the downstream-breakage class, applied to a build step.

A lexicon correction therefore must **not** target the output. It requires:
1. A new `lexicon-overrides.json` (hand-maintained source of truth for corrections),
2. A generator change so `build_syllable_lexicon.mjs` merges overrides **last**
   (override wins, tagged `src:"override"`),
3. A rebuild after editing.

This is a separate future workstream with its own write strategy (overrides-then-
regenerate). The `name-residue.json` verification flow is its natural sibling — verified
residue entries become overrides. **Not in scope here**; documented so it is neither
forgotten nor mistakenly merged into the recast engine.

## 12. Tier-1 Field-Type Extension (free, post-v1)

Boolean / `rank` / `tone` / `stichera_lord_i_call_count` are `setValue` with a different
input widget (toggle / enum dropdown / number) plus a `FIELD_REGISTRY` type/enum check.
No engine change. Two correctness rules, baked in:

- **`rank` never cascades.** `matins_format` and `has_great_doxology` do not follow from
  rank, and `fekula_section` / count are coupled too. A rank edit changes *only* rank and
  fires a non-blocking "re-verify these dependent fields" warning; the validator is the
  backstop.
- **`stichera_lord_i_call_count` must match array length.** Editing the count scalar
  without changing the array fires the same warning + validator catch.

The editor changes exactly the node pointed at — never more.

## 13. Tier-2 Structural Ops (designed-for, post-v1)

- **Insert verse:** build `{ tone, [spec_mel], text }` + choose index (node template +
  position picker). Touched array reprints (local diff; rest of file preserved).
- **Remove / reorder verse.**
- **Insert repeat marker:** the cleanest case — fixed shape `{ repeatIndex: N }`, no
  `text`, inserted at the "(Twice)" slot, `N` pointing at a real source index, with
  `stichera_lord_i_call_count` kept in sync (per `encoding_rule_v2.md §6b`). A dedicated,
  constrained command, not a free-form object builder.

## 14. Build Phases

1. **Phase 1 (v1):** core shell + integrity pipeline + recast `setValue` + dev plugin +
   **Menaion adapter** + textarea/preview UI.
2. **Phase 2:** Pentecostarion + Octoechos adapters (near-free; reuse engine).
3. **Phase 3:** Tier-1 scalar widgets (bool / rank / tone / count) with cascade warnings.
4. **Phase 4:** Tier-2 structural ops (incl. repeat marker).
5. **Triodion adapter:** activates when its dataset is built.
6. **Lexicon:** separate future workstream (§11).

## 15. Workflow Integration

- Editor writes source files only; commit/push stay manual (token inline in push URL,
  scrubbed immediately after; never stored).
- Version bump on the feature push that ships the editor (minor — new feature).
- This spec commits separately from `project_notes.md`.

## 16. Resolved Decisions

1. **Entrypoint — in-context, no separate route.** Editing is surfaced through the shared
   `TextBlock` / `FieldRow` in a compile-time `import.meta.env.DEV` branch; dataset
   selection is implicit; production bundle excludes it entirely (§9).
2. **Endpoint — `POST /__edit`, single op-dispatched**, via `configureServer`, matched at
   server root, with a **`dryRun` preview** mode (§5). New devDependencies: recast +
   @babel/parser.
3. **Gate timing — validator on every save and dryRun**, folded into the plugin
   round-trip (deliberate-action, not per-keystroke); whole-corpus tool, **no `--strict`**
   (§7.6).
4. **Gate policy — severity-aware: block on exit ≠ 0 (Check A/B), warn-and-allow on
   Check C.** Octoechos adapter uses `validate_octoechos.mjs`'s own fatal/non-fatal split
   (§7.6).

Phase 1 is decision-complete.
