// Shared, framework-free helpers for reading OCA service .docx run text + tone
// headings. Imported by BOTH the browser ingest (src/components/tone-trainer.jsx,
// DOMParser) and the Node snapshot tool (tools/snapshot_comparison.mjs,
// @xmldom/xmldom). localName / childNodes / getElementsByTagName / textContent /
// getAttribute are common to both XML parsers, so one impl serves both; twins can't drift.

// Trailing (?![0-9]) (not \b) so a tone digit immediately followed by a letter still
// reads ("Tone 8Troparion" -> 8) while "Tone 12" is still rejected. Identical to the old
// /\bTone\s+(..)\b/i for every correctly-spaced input.
export const TONE_HEADING = /\bTone\s+([1-8]|[IVX]+)(?![0-9])/i;
export const ROMAN = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8 };
export function parseToneLabel(s) {
  const m = (s || "").match(TONE_HEADING);
  if (!m) return null;
  const raw = m[1];
  return /^[0-9]$/.test(raw) ? parseInt(raw, 10) : (ROMAN[raw.toUpperCase()] || null);
}

// Text of a single run (<w:r>) in document order, with <w:tab>/<w:br>/<w:cr> rendered as a
// single space so tab-separated heading tokens ("Tone 8\tTroparion") do not glue. A run
// with no tab/br returns exactly the old <w:t> concatenation -> non-tab paragraphs are
// byte-identical to before.
export function runText(runEl) {
  let out = "";
  for (const el of Array.from(runEl.getElementsByTagName("*"))) {
    const ln = el.localName;
    if (ln === "t") out += el.textContent || "";
    else if (ln === "tab" || ln === "br" || ln === "cr") out += " ";
  }
  return out;
}

// Underline state of a run (<w:r>): true unless <w:u w:val="none">.
export function runUnderline(runEl) {
  const rpr = Array.from(runEl.childNodes || []).find((c) => c.localName === "rPr");
  if (!rpr) return false;
  const u = Array.from(rpr.childNodes || []).find((c) => c.localName === "u");
  if (!u) return false;
  const val =
    u.getAttribute("w:val") ||
    (u.getAttributeNS && u.getAttributeNS(null, "val")) ||
    u.getAttribute("val") ||
    "";
  return val !== "none";
}
