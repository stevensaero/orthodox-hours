// Shared normalizer for hymnography slots that may be EITHER a bare string
// (legacy: plain text, no provenance) OR an object carrying provenance/marks:
//   { text, director?, tradition?, pointing_source?, verse?, ... }
//
// One read path so the assembler (hours-tool.jsx) and the data browsers
// (octoechos-browser.jsx, ...) treat both shapes identically and can't drift
// (same consolidation philosophy as src/lib/docx-text.js). Adding director
// pointing + an OCA source to a previously-bare-string Octoechos slot only
// requires turning that slot into an object; these helpers keep every existing
// string slot rendering byte-identical while letting object slots carry their
// `director` / `tradition` / `pointing_source` through to render (badge-ready).

export function normalizeHymn(entry) {
  if (entry == null) return null;
  if (typeof entry === "string") {
    return { text: entry, director: false, tradition: null, pointing_source: null, verse: null };
  }
  return {
    text: entry.text ?? "",
    director: entry.director === true,
    tradition: entry.tradition ?? null,
    pointing_source: entry.pointing_source ?? null,
    verse: entry.verse ?? null,
  };
}

// Just the display text — most call sites need only this.
export function hymnText(entry) {
  const h = normalizeHymn(entry);
  return h ? h.text : "";
}

// Provenance fields to spread onto a rendered verse element. Empty object for a
// plain string, so string-sourced elements stay byte-identical to today; an
// OCA-pointed object surfaces director/tradition/pointing_source for the badge.
export function hymnProvenance(entry) {
  const h = normalizeHymn(entry);
  if (!h) return {};
  const p = {};
  if (h.director) p.director = true;
  if (h.tradition) p.tradition = h.tradition;
  if (h.pointing_source) p.pointing_source = h.pointing_source;
  return p;
}
