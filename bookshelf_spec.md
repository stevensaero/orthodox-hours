# Bookshelf Spec — Liturgical Library

**Status:** draft for review · not yet committed
**Scope:** Phase 1 only (decoupled viewers). Phase 2 ideas parked in §8.
**Authority:** unchanged — every entry-point and source resolution traces to Fekula & Williams (2009); OCA precedence; standard fallback chain. The bookshelf *surfaces* sources, it does not decide them.

---

## 1. Concept

The tool body has two faces, flipped by the single flip-icon toggle:

- **Reading** — the assembled service (existing assembler output).
- **Library** — a shelf of source books, each shown *paged to the spot the current date/tone/season calls for* (preview only).

The shelf is an **index and date-aware entry point**, not a viewer. Tapping a book opens that book's own viewer, positioned at the date-relevant entry. From that moment the viewer is independent.

**Two ways into a source viewer**, both using the §4 param contract but scoped differently:

- **From the Library shelf (book-level).** Tap a book → it opens to the date-relevant page. *Every* book is date-aware from day one; the shelf is the full contextual view of the day's sources, and is **not** narrowed by the pilot.
- **From the Reading view (element-level).** Tap the "↗ source of truth" link beside an assembled element (Troparion, Kontakion, sticheron, doxasticon, …) → it opens that source to the exact spot the text was drawn from. This is the surface the **Phase 1a pilot narrows** (§4): Troparion + Kontakion links first, the rest later.

The shelf gives the day's whole picture; the Reading-view links are the per-element provenance jumps. Only the latter is phased.

## 2. Phase 1 contract (decoupled)

This phase is deliberately one-directional. No live re-page, no shared persistent header, no cross-viewer sync.

1. The shelf computes context from the date (tone, Paschal offset, season, commemoration).
2. On open, the shelf hands the book a **one-time entry snapshot** (deep-link params).
3. The viewer reads the snapshot, opens to that entry, and is then **fully independent**: its own header, its own navigation, its own date/page state.
4. The tool header is **gone** while inside a viewer.
5. Changing date or page **inside** the viewer stays inside the viewer. Nothing flows back to the tool.
6. The only connection back is the **return path** to the shelf (§5).

Consequence: in-shell and new-window books behave **identically** at this level — both receive a snapshot at open, both run independently, both offer a way back. In-shell vs new-window is therefore a **hosting detail only** in Phase 1, not a behavior difference. (The asymmetry only matters in Phase 2.)

## 3. Shelf inventory & context → entry-point mapping

Seven books. Each book's "open to" value comes from the **existing engine/assembler**, never from bookshelf-local logic. Where the engine cannot resolve (date not yet encoded, distribution not yet wired), the preview shows a **placeholder slot** and the viewer opens to its own default.

**Hosting verification (do at clone):** a book is a *live spine* only once it has a confirmed, deployed URL (in-shell route or served file). Unconfirmed books render as **visibly stubbed** rather than linking to nothing. The PSB hosting state is unknown until we inspect the repo — see note below.

| Shelf | Book | Hosting | Entry resolves to | Resolved from | Placeholder when… |
|---|---|---|---|---|---|
| Hymnography | Menaion | in-shell | fixed commemoration for `MM-DD` | fallback chain: daily PDF → General Menaion (by saint type) → OCA | `MM-DD` not encoded → slot; viewer opens to date anyway |
| Hymnography | Pentecostarion | in-shell | Paschal day `P+N` | Pascha offset + `pentecostarion.js` | offset outside encoded P-range → slot |
| Hymnography | Octoechos | in-shell | tone of the week | Octoechos cycle | Bright Week / Pentecost wk / post-All-Saints → **graceful label, never a guessed tone** |
| Order & Psalmody | Horologion | in-shell | seasonal opening / Hour set | invariable order + opening rule | n/a (complete) |
| Order & Psalmody | Psalter | in-shell | appointed kathisma(ta) | daily kathisma distribution | distribution not yet wired → slot |
| Order & Psalmody | Priest's Service Book (Royster) | new window* | service (default: Liturgy of St. John Chrysostom) | PSB browser | *hosting unverified — see note |
| Chant | Tone Trainer | in-shell | tone of the week | Octoechos cycle | no resolvable tone → "choose a tone" |

**Honesty rule:** the tone-of-week is only computed in the well-defined regime (Pascha+7 … Pascha+48). Bright Week, Pentecost week, and the post-All-Saints resumption return a descriptive label, not a number. Any tone shown is correct or absent.

**PSB hosting note:** the PSB browser is a standalone HTML entity (Royster, ~57 sections, "+ Add Missing Texts" panel). **Confirmed: it is NOT in the repo.** Bill will hand off the file. Intake plan, in order: (1) bring it into `public/` for a stable same-origin URL (its own commit, separate from spec/tool changes); (2) **restyle its header to the unified viewer-header treatment** so it matches the other data viewers in colour and style (§7); (3) only then does it become a live spine. Until handoff + intake, the PSB spine renders as a **stub**.

**Score Print is not on the shelf.** It is a **downstream endpoint of the Tone Trainer pipeline**, the render target at the end of point → score, not a source you open against a date. The date has nothing to say to it. *Do not re-add it as a shelf spine.* (A conditional future return is parked in §8.)

## 4. Deep-link parameters

**Phase 1a pilot — Reading-view source links, Troparion + Kontakion only.** The pilot narrows *only* the per-element "source of truth" links in the Hours tool (Reading view). The first pass wires just the **Troparion** and **Kontakion** links; every other element's source link stays display-only until those prove out, then we extend to stichera, doxasticon, and the rest.

This does **not** touch the Library shelf. All seven books are fully date-aware and open to context from day one — the shelf remains the complete view of everything openable for the day. The pilot is purely about how the *element → source* jump behaves, validated on T/K (which already reach the Menaion, Octoechos, and Pentecostarion) before it's worth wiring everywhere.

The full param vocabulary below is defined now (so nothing gets renamed later); the shelf uses it in full immediately, and only the Reading-view element links are phased.

One shared param vocabulary, used by **both** the Library books **and** the Reading-face source tags (the "↗ Octoechos · Tone 6" links resolve to the same place a tapped book does). Mirrors the existing Psalter precedent (`?kathisma=N&service=…&date=…`).

- **Always:** `date=YYYY-MM-DD` (the context anchor).
- **Book-specific (one of):** `tone=N`, `pascha=N`, `kathisma=N`, `comm=MM-DD`, `service=<key>`.
- **Provenance (optional):** `from=library` vs `from=reading` so the return banner reads correctly.

Hosting:
- **In-shell:** route + query, e.g. `/menaion?date=2026-05-24&comm=05-24&from=library`.
- **New window:** same query appended to the standalone HTML URL; read on load.

The viewer consumes params **once** on load to position itself, then ignores them — subsequent nav is the viewer's own state.

**Keep the Tone Trainer's intake open (Phase 2 forward-compat).** Its entry-point is `tone=N` in Phase 1, but it must not be *designed* as scalar-only. A day's assembled verses are too large and too structured (pointing markers, not scalars) for a query string. So anticipate a **staged verse payload** channel: the shelf stages the verse set, the trainer reads it on open. Design §4 so adding that channel later is additive, not a retrofit.

## 5. Return path

Reuse the Psalter pattern:

- **In-shell:** same-tab navigation; sticky context banner ("← Library · {date}") using `window.history.back()` to restore exact shelf scroll position. `history.scrollRestoration = 'manual'`.
- **New window:** the standalone page carries the same banner; "back to Library" closes the window (or browser back). No tab accumulation on mobile.

## 6. Coverage source (spine honesty)

Each spine's coverage line must read from a **single source of truth** so it never goes stale as encoding advances.

- **Computed from data where possible:** Menaion coverage derived from the encoded date ranges in `src/data/menaion/*.js` (min/max encoded `MM-DD` per month). Pentecostarion from the encoded `P+N` range in `pentecostarion.js`.
- **Declared where static:** Horologion, Psalter, Octoechos = "complete". PSB = "57 sections · 13 stubs". Tone Trainer = declared.
- **Dot state:** gold = partial, green = complete, derived from the same source.

## 7. Settled by the mockup (not re-specified here)

Flip mechanic, single flip-icon toggle (front = page glyph, back = book spines, hover-peek, sync flip), two faces, three shelves (**Hymnography / Order & Psalmody / Chant**), spine colors (PSB role palette + brick + teal), open-page preview inset, full parchment/gold palette. Reference: `liturgical-bookshelf-flip-icon.html`.

**Mockup update needed at wire time:** remove the Score Print spine; the third shelf ("Chant") holds the Tone Trainer alone.

**Viewer header consistency.** All data viewers share one header treatment — the same dark/gold bar, type, and date/context styling — so moving between books feels like a single app rather than a set of separate pages. PSB's header is brought into line on intake (§3); the other viewers are audited against the same treatment and adjusted where they drift. This is the shared visual contract even though, in Phase 1, each viewer still owns its own header instance.

## 8. Deferred — Phase 2 (parked, not committed)

Recorded so the reasoning isn't lost; nothing here commits us.

- **Tone Trainer verse handoff — an alternate intake into an existing pipeline.** The trainer already ingests an OCA docx, splits it into individual verses, and presents each for pointing. The date handoff reuses that machinery wholesale; only the *intake* changes. The shelf delivers today's assembled verses (across the day's services) in the same shape the splitter already consumes, and the user points them exactly as they point a loaded docx. **New work is the adapter only.**

  ```
  docx from OCA ──┐
                  ├──► verse splitter ──► per-verse pointing ──► score ──► Score Print
  date handoff  ──┘   (existing)          (existing)            (existing)  (endpoint)
  ```

- **Score Print's conditional return to the shelf.** Only if expanded to render **all the day's scores, ready to print** — i.e. it becomes a daily destination rather than a single-render endpoint. That's a substantially bigger effort; explicitly not now.

- **Persistent context strip** (date stepper + context dropdown + back-to-shelf) retained across viewers, instead of the viewer fully replacing the header.
- **Live re-page** on date change for in-shell viewers.
- **Snapshot-plus-banner** for federated viewers (can't live re-page without re-open) → the deliberate hosting **seam**.
- **Manual-nav-vs-date-change** rule: manual paging holds; an explicit date re-pick overrides and tabs to the new context.
- Pulling **PSB into the React shell** to erase the hosting seam entirely.

Phase 1 is built decoupled specifically so real use, not speculation, decides which of these we pursue.

## 9. Open items to confirm before wiring

1. Lock the exact param names in §4 (changing them later touches every viewer).
2. Confirm Reading-face source tags share the §4 contract (assumed yes).
3. Placeholder copy wording for unresolved/unencoded entries.
4. PSB hosting state — **confirmed not in repo**; pending Bill's file handoff → `public/` + header restyle (§3 note).
