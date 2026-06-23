// ── POINTING ENGINE (extracted from tone-trainer.jsx) ────────────────────────
// Pure sylls→roles logic: no React, no component state, no audio/score concerns.
// Extracted to a shared module so both the component AND tools/test_pointing_roles.mjs
// import the SAME implementation — no replicated copy to drift (the drift hazard that
// hid the Tone 2 Final pre-slur regression). The text→sylls parsing layer remains in
// the component for now (Pass 2 of this refactor).
//
// Exports: flatten(line), anchorIndex(flat), pointLine(line, phDefs, activeTone),
//          distribute(figure, count).

// Flatten a line into a per-syllable list with word context.
export function flatten(line) {
  const flat = [];
  line.words.forEach((w) =>
    w.sylls.forEach((s, si) =>
      flat.push({
        text: s.text,
        accent: s.accent,
        source: s.source,          // carries lexicon source for the toggle indicator
        single: w.sylls.length === 1,
        wordLast: si === w.sylls.length - 1,
      })
    )
  );
  return flat;
}

// CORRECTED ANCHOR RULE (Drillock & Ealy, Tone 1):
// The cadence begins on the last INTERNAL accent of the phrase. "Internal" means:
// if the final syllable is an accented one-syllable word (e.g. "Law", "saw",
// "Him", "Christ"), the cadence cannot launch on it, so it backs up to the
// previous accent. Trailing unaccented syllables after the anchor ride on the
// anchor's pitch until the final syllable.
export function anchorIndex(flat) {
  const acc = [];
  flat.forEach((s, i) => { if (s.accent) acc.push(i); });
  if (!acc.length) return Math.max(0, flat.length - 1);

  const lastIdx = flat.length - 1;
  let a = acc[acc.length - 1];

  // One-syllable-final-word backup: if the very last syllable is an accented
  // standalone monosyllable, step back to the previous accent (the last internal
  // accent), when one exists.
  const last = flat[lastIdx];
  if (a === lastIdx && last.single && last.accent && acc.length >= 2) {
    a = acc[acc.length - 2];
  }
  return a;
}

// pointLine: maps a line's syllables to roles (recite/inton/prep/cad/cad1/preslur).
// phDefs: the active tone's phrase definition table (e.g. PH_DEFS[1] or PH_DEFS[2]).
// Pass PH (the component-derived active table) when calling from inside the component.
//
// Tone 3 Final Phrase two-part cadence:
//   Part 1 (cad1): mi(H) do(Q) re(Q) — launches at anchor1 (first director mark)
//   Part 2 (cad):  mi(Q) fa(Q) re(H) do(W) — launches at anchor2 (second director mark)
// anchor1 = second-to-last stressed syllable (findFirstFinalAnchor); anchor2 = anchorIndex().
// Scope guard: activeTone===3 && phrase==='Final' && two accented syllables present.
// When guard is false, falls through to existing single-anchor logic unchanged.
export function pointLine(line, phDefs, activeTone) {
  const def = phDefs[line.phrase];
  const flat = flatten(line);

  // ── Tone 3 Final Phrase: two-part cadence (cad1 + cad) ──────────────────
  if (activeTone === 3 && line.phrase === "Final") {
    const acc = flat.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
    if (acc.length >= 2) {
      const a2 = anchorIndex(flat); // anchor2 — unchanged, last internal accent
      // anchor1: second-to-last stressed syllable (same monosyllable backup as anchorIndex).
      const lastIdx = flat.length - 1;
      let a1 = acc[acc.length - 2];
      if (a1 === lastIdx && flat[lastIdx].single && acc.length >= 3)
        a1 = acc[acc.length - 3];
      if (a1 >= 0 && a1 < a2) {
        // Valid two-part split found.
        const body  = flat.slice(0, a1);
        const cad1  = flat.slice(a1, a2);
        const cad   = flat.slice(a2);
        const roles = [];
        // body → recite
        body.forEach((s) => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
        // cad1 → distribute Part 1 figure [mi, do, re]
        const dist1 = distribute(["mi", "do", "re"], cad1.length);
        cad1.forEach((s, i) =>
          roles.push({ role: "cad1", pitches: dist1[i] || ["do"], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
        );
        // cad → distribute Part 2 figure (def.cad)
        const dist2 = distribute(def.cad, cad.length);
        cad.forEach((s, i) =>
          roles.push({ role: "cad", pitches: dist2[i] || [def.cad[def.cad.length - 1]], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
        );
        return roles;
      }
      // a1 not valid (same as a2, or >= a2) — fall through to single-anchor logic.
    }
  }

  // ── Tone 1 Phrase D: two-accent cadence (ti · do fills · re · do fills · ti) ──
  // Five structural positions driven by two director marks.
  // Primary anchor (ti, pos 1)   = first accented syllable in the line → cadence boundary.
  // Secondary anchor (re, pos 3) = last internal accented syllable (anchorIndex logic).
  // Fills between positions = do. Close = ti.
  // Fallback: if fewer than 2 accents, or secondary = close, fall through to distribute().
  if (activeTone === 1 && line.phrase === "D") {
    const acc = flat.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
    if (acc.length >= 2) {
      const a1 = acc[0];                          // first accent → cadence boundary, ti
      const lastIdx = flat.length - 1;
      // secondary = last internal accent (not the close syllable)
      let a2 = acc[acc.length - 1];
      if (a2 === lastIdx && flat[lastIdx].single && acc.length >= 3)
        a2 = acc[acc.length - 2];
      // Valid split: a1 is before a2, and a2 is not the close
      if (a1 < a2 && a2 < lastIdx) {
        const body = flat.slice(0, a1);
        const cad  = flat.slice(a1);
        const roles = [];
        // body → recite
        body.forEach(s => roles.push({ role: "recite", pitches: [def.recite], accent: s.accent, text: s.text, source: s.source }));
        // secondary accent index within cad
        const secIdxInCad = a2 - a1;
        const cadLast = cad.length - 1;
        cad.forEach((s, i) => {
          let pitch;
          if (i === 0)               pitch = "ti"; // anchor pos 1
          else if (i < secIdxInCad)  pitch = "do"; // fills pos 2
          else if (i === secIdxInCad) pitch = "re"; // secondary pos 3
          else if (i < cadLast)      pitch = "do"; // fills pos 4
          else                       pitch = "ti"; // close pos 5
          roles.push({ role: "cad", pitches: [pitch], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 });
        });
        return roles;
      }
    }
    // Fallback: single accent or invalid split — distribute() as machine best-effort
  }

  // ── Tone 1 Phrase A: anchor-driven cadence boundary ─────────────────────
  // Phrase A: recite(re) · inton(re·H) · ... · prep(ti) · cad(do)+
  // Structure:
  //   - Intonation = first accented syllable (forward pass, body only)
  //   - Anchor     = anchorIndex() — last internal accent (backward pass)
  //   - IF anchor === intonation (director only marked the intonation, not the
  //     cadence): fall back to last syllable as cad, second-to-last as prep.
  //     Rationale: director marks intonation with bracket; cadence anchor is
  //     structurally always the last stressed word — but in TRUTH mode the
  //     director doesn't re-mark it. When both passes land on the same syllable,
  //     the anchor is unknowable from director marks alone; use positional fallback.
  //   - IF anchor ≠ intonation: anchor IS the cadence start (director marked both)
  //   - Prep  = syllable immediately before cadence start → ti
  //   - Cad   = cadence start + all remaining syllables → all do
  // Score examples:
  //   "Let my [prayer] arise" → 1 accent (prayer=inton); anchor falls back to
  //     last syll (rise); prep=a, cad=[rise] ✅
  //   "[Lord]..Thee,[hear]me!" → 2 accents (Lord=inton, hear=anchor≠inton);
  //     prep=Thee, cad=[hear,me!] ✅
  //   "when I [call] up[on] Thee!//" → 2 accents (call=inton, on=anchor≠inton);
  //     prep=up, cad=[on,Thee!] ✅
  if (activeTone === 1 && line.phrase === "A" && flat.length >= 2) {
    const a        = anchorIndex(flat);   // last internal accent (backward pass)
    const firstAcc = flat.findIndex(s => s.accent); // intonation candidate (forward pass)
    const roles    = [];

    // Determine cadence start:
    // If anchor === intonation (or no accent at all), director only marked the
    // intonation — fall back to positional: cad starts at last syllable,
    // prep at second-to-last.
    const cadStart = (firstAcc === -1 || a === firstAcc)
      ? flat.length - 1   // positional fallback
      : a;                // anchor is distinct from intonation — use it

    const prepIdx = cadStart - 1;

    if (prepIdx < 0) {
      // Degenerate: no room for prep — fall through to standard logic
    } else {
      const body  = flat.slice(0, prepIdx);
      const prepS = flat[prepIdx];
      const cad   = flat.slice(cadStart);

      // Intonation = last accented body syllable, fallback to body[0]
      const bodyAccIdxs = body.map((s, i) => s.accent ? i : -1).filter(i => i >= 0);
      const intonIdx = bodyAccIdxs.length > 0
        ? bodyAccIdxs[bodyAccIdxs.length - 1]
        : (body.length > 0 ? 0 : -1);

      body.forEach((s, i) => {
        const role = (i === intonIdx) ? "inton" : "recite";
        roles.push({ role, pitches: [def.recite], accent: s.accent, text: s.text, source: s.source });
      });

      // prep → ti (one syllable before cadence anchor)
      roles.push({ role: "prep", pitches: [def.prep], accent: prepS.accent, text: prepS.text, source: prepS.source });

      // cadence → all syllables from anchor onwards, all on do
      // First syllable is anchor; remaining syllables are fills/close, also do
      cad.forEach((s, i) =>
        roles.push({ role: "cad", pitches: ["do"], accent: s.accent, text: s.text, source: s.source, anchor: i === 0 })
      );
      return roles;
    }
  }

  // ── Standard single-anchor logic (all other tones/phrases) ──────────────
  const a = anchorIndex(flat);
  const body = flat.slice(0, a);
  const cad = flat.slice(a);
  const roles = [];

  // Pre-slur detection. If the phrase has a prep note AND the syllable immediately
  // before the cadence anchor is a single accented monosyllable, that syllable gets
  // role="preslur" with pitches [recite, prep] (re→ti for Tone 2 Final). It leans the
  // reciting tone into the prep on one word; the prep is the second note of the melisma.
  // SCOPED to Tone 2 Final (prime directive). The generic standard-path guard was
  // removed when Tone 1 Phrase A's (unsupported) pre-slur was removed; Tone 2 Final
  // depends on it and has no dedicated early-return block, so it regressed to a lone
  // prep ti. Downstream (lineToNotes + lineToRolesWithDuration, both) already expand the
  // preslur role to re(H·)·ti(Q) when no reciting tone precedes; this just re-emits it.
  // Tone 1 Phrase A has a dedicated path above that returns before reaching here.
  let preslurIdx = -1;
  if (activeTone === 2 && line.phrase === "Final" && def.prep && body.length >= 1) {
    const cand = body[body.length - 1];
    if (cand?.accent && cand?.single) preslurIdx = body.length - 1;
  }

  // For phrases with intonation, find the first accented body syllable.
  // That syllable is the tutorial's intonation half note (role="inton", accent=true → H).
  // Unaccented syllables before it are lead-ins on the same pitch (role="recite" → Q).
  // Fallback: if no accented body syllable exists, body[0] gets the inton role.
  const intonIdx = def.inton
    ? (body.findIndex(s => s.accent) >= 0 ? body.findIndex(s => s.accent) : 0)
    : -1;

  body.forEach((s, i) => {
    let role = "recite";
    let pitch = def.recite;
    if (def.inton && i === intonIdx) role = "inton";
    // Pre-slur fires on the body syllable just before prep; its pitches are [recite, prep].
    if (preslurIdx >= 0 && i === preslurIdx) {
      role = "preslur";
      roles.push({ role, pitches: [def.recite, def.prep], accent: s.accent, text: s.text, source: s.source });
      return;
    }
    if (def.prep && i === body.length - 1 && preslurIdx < 0) { role = "prep"; pitch = def.prep; }
    roles.push({ role, pitches: [pitch], accent: s.accent, text: s.text, source: s.source });
  });

  const dist = distribute(def.cad, cad.length);
  cad.forEach((s, i) =>
    roles.push({
      role: "cad",
      pitches: dist[i] || [def.cad[def.cad.length - 1]],
      accent: s.accent,
      text: s.text,
      source: s.source,
      anchor: i === 0,
      // wordBoundary: true when this syllable is the last syllable of its word.
      // Drives whole note triggers for Tone 2 Phrases B, C, D.
      // A syllable is a word boundary when the next cad syllable belongs to a
      // different word — detected by checking whether the current syllable ends
      // the word (no hyphen suffix) or the next begins a new word (capitalised
      // or preceded by space in source text).
      wordBoundary: (i === cad.length - 1) ||
        (!s.text.endsWith("-") && !s.source?.endsWith("-")),
    })
  );
  return roles;
}

// Distribute a cadence pitch figure across the cadence syllables.
// Per the tutorial score and OCA recording analysis:
// - The anchor always carries the first (held) note of the figure.
// - When count == n: one note per syllable.
// - When count > n: first and last syllables get their notes; middle syllables
//   repeat the penultimate note to fill gaps.
// - When count < n: take the first `count` notes of the figure sequentially —
//   the trailing notes of the figure simply don't appear. Verified from the OCA
//   Tone 1 unison recording: Phrase D "this·is·He·Who·spoke·in·the·Proph·ets"
//   shows cadence in·the·Proph·ets = ti·do·re·do (4 notes for 4 syllables,
//   the final ti of the 5-note figure belongs to the next phrase, not this one).
export function distribute(figure, count) {
  const n = figure.length;
  if (count <= 1) return [figure.slice()];         // one syllable carries the whole figure
  if (count === n) return figure.map((f) => [f]);   // one note per syllable — exact fit
  if (count > n) {                                  // more syllables than notes
    const out = [[figure[0]]];
    const mid = figure.slice(1, n - 1);
    const ms = count - 2;
    for (let i = 0; i < ms; i++) out.push([mid[i] ?? figure[Math.max(0, n - 2)]]);
    out.push([figure[n - 1]]);
    return out;
  }
  // count < n: take the first `count` notes sequentially — one per syllable.
  // Trailing notes of the figure are unused (they belong to the next phrase).
  return figure.slice(0, count).map((f) => [f]);
}
