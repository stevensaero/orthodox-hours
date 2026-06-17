# Local Editing Tool — Specification

**Status:** Draft for review · **Targets:** Menaion (v1), Pentecostarion + Octoechos (follow-on), Triodion (reserved)
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
│  EDITOR SHELL  (dataset-agnostic, in-app)                    │
│   · dataset picker → activates one adapter                   │
│   · navigate via the dataset's existing browser              │
│   · field list → textarea + strip-at-render preview          │
│   · client lint → save → surface validator + diff result     │
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

- **Core** (built once): the shell, the integrity pipeline, the operation vocabulary, the
  recast engine, and the dev-only transport. None of it is dataset-specific.
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

- A Vite plugin registers a dev-server middleware endpoint (e.g. `POST /__edit`).
- It is **hard-gated to dev**: the handler is only installed under the dev server and
  refuses to run in a production build. It is never bundled or shipped.
- Request payload: `{ datasetId, file, path, op, value, expectedOld }`.
- Response: `{ ok, written, validator: {pass, messages}, error? }`.

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
6. **Existing gate (pre-push, human).** Auto-run the dataset validator on the touched file
   and surface results inline. The developer reviews `git diff`; the push gate
   (`validate_entries.mjs` / `validate_octoechos.mjs`, clean `npm run build`) is the final
   backstop.

## 8. Director-Marker Handling

Per `encoding_rule_v2.md §3`: every pointed field stores **one** marked string in the OCA
dialect — `|` line end, `//` penultimate line, `[ ]` director emphasis. The editor:

- Stores only the canonical OCA-dialect string. **Never writes source `*` / `**`.**
- Shows a live **strip-at-render** preview beside the textarea so the choir-facing result
  is visible while editing.
- Enforces tier discipline in lint: capture what the source gives; never invent a `//`.

## 9. UI (Option A — raw textarea + preview)

1. **Dataset picker** → activates one adapter.
2. **Navigate** using that dataset's existing browser (`menaion-browser.jsx`, etc.) to a
   specific entry.
3. **Field list** for the entry; editable string fields are selectable.
4. **Editor:** raw textarea (the marked string) + live strip-at-render preview + inline
   lint feedback.
5. **Save:** POST to the dev plugin; surface validator result and a summary of the one-line
   diff. Developer commits/pushes manually.

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

## 16. Open Questions

1. Editor entrypoint — a new top-level tab/route in the app, or an affordance inside each
   existing browser?
2. Dev-plugin endpoint name and whether to namespace it (`/__edit`).
3. Gate policy — run the dataset validator on **every** save, or lint-on-save +
   validator-on-demand before commit?
4. Should the editor block save on validator failure, or warn-and-allow (developer owns
   the commit)?
