# Spec — Hours → Tone Trainer handoff (Point / Score) + back-link

Status: approved (placement + glyphs confirmed via mockup). Phased build.

## Goal

Every pointable verse rendered in the Hours tool gets two controls, inside the
verse window at the far right, monochrome gold:

- **▶ Point** (U+25B6) — hand the verse to the Tone Trainer, loaded + pointed +
  chipped for singing (the docx-load-then-point flow). You leave the Hours tool.
- **♫ Score** (U+266B) — run the verse through the pointing engine and render it
  straight to the print-score page (`score-print.html`), **skipping the trainer
  UI**.

## Gating (both controls)

A verse shows the controls only when it is **pointable** — its stored text carries
end-of-line marks (` | ` or ` // `; same test `renderPointed` uses). Non-pointable
prose/rubric verses get no controls.

On a pointable verse:
- **active** when the verse's own `tone` is built in the trainer, i.e.
  `tone ∈ AVAILABLE_TONES`;
- **light grey / inert** otherwise (tone not yet built), with a tooltip reason.

`AVAILABLE_TONES` is exported from `tone-trainer.jsx`, derived from `PH_DEFS`
(`new Set(Object.keys(PH_DEFS).map(Number))` → {1,2,3} today). Single source of
truth — the trainer already greys un-built tones in its docx ingest via
`!PH_DEFS[block.tone]`. Tones 2 and 3 are active (point/score best-effort);
4–8 are inert until built.

Per-verse `tone` is present on the assembled hymn elements (stichera at the LIC
builder, troparion/kontakion resolvers) — gate on `element.tone`.

Marker note: `[brackets]` = director; their presence selects director (truth)
pointing, absence selects machine pointing. The trainer's `analyzeText` already
branches on `parseBracketedText(txt).hasBrackets`.

## Transport (Hours → Trainer)

Full-page navigation + `sessionStorage`, matching the existing `<a
href=".../tone-trainer?from=tool">` link (which bfcache restores cleanly on
back — the "lands where you left off" behavior). NOT react-router SPA state,
which would remount the Hours tool and lose the date/scroll on back.

- Point writes `sessionStorage['oht_handoff'] = JSON.stringify({ verse, tone })`
  then navigates to `/orthodox-hours/tone-trainer?from=tool`.
- The trainer, on mount, reads + clears `oht_handoff`; if present it
  `setActiveTone(tone)`, translates the verse to the trainer's text format, and
  points it.

Verse → trainer text translation (keep `[brackets]`, drop the line glyphs):
`verse.replace(/\s*\/\/\s*/g, '\n').replace(/\s*\|\s*/g, '\n').trim()`.
Then the existing, timing-safe `analyzeText(txt)` does the pointing (truth vs
auto by bracket presence). Tone must be applied first; point in an effect once
`activeTone` reflects the handoff tone.

## Back-link

"← Hours Tool" in the **trainer header and footer**, shown only when arriving
from the Hours tool (`?from=tool` in the URL, or an `oht_handoff` payload).
onClick = `window.history.back()` — true browser back, lands where you left off.

## Phasing

- **Phase 1** — back-link + receiver plumbing + Point. (Back-link is useful
  immediately: the existing footer link already passes `?from=tool`.)
- **Phase 2** — Score: factor the trainer's point→assemble-to-score-print-payload
  into a reusable function, then Score builds the payload headlessly and opens
  `score-print.html?v=<ver>` + `postMessage`, no trainer UI. (The trainer's
  print flow already posts `{ lines, doHz, title, subtitle, toolVersion, … }`.)

## Integration anchors (as of this spec)

- Trainer ingestion: `analyzeText(txt)` (timing-safe); `setText` / `setActiveTone`;
  `sendBlockToPointer` is the docx analogue; `PH_DEFS`.
- Hours render site: the default body render (`renderPointed(element.text)`); the
  verse element carries `.text` and `.tone`.
- Existing link: `hours-tool.jsx` footer `…/tone-trainer?from=tool`.
- Score-print input: `window.addEventListener('message', …)` → `payload`.
