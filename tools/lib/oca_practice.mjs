// BACKEND ONLY: comparing what the tool renders at the Liturgy with what the OCA
// service text for that day prints. RULED 15 Nov 2026: the running tool takes nothing
// from an OCA document by its date, so these marks are no longer shown to the reader
// (they were, 14 to 15 Nov 2026); they are a report for us, to hone the tool's logic
// and to settle disputes.
//
// The tool gives the full order Fekula appoints: the day's proper and the Menaion's.
// The OCA service texts often print less (on 16 Nov 2026 only the Apostle's; on a
// simple Sunday only the Sunday's), which Bill takes to be brevity.
export const OCA_OMITTED = "The OCA service text for this day does not print this; Fekula's order appoints it.";
const lesson = (ref) => { const m = String(ref || "").replace(/^(\d) /, "$1").match(/^([A-Za-z0-9]+) (\d+):/); return m ? (m[1] + " " + m[2]).toLowerCase() : null; };
/** For an Epistle or Gospel reference: 'printed' | 'not_printed', or null when there is no OCA text. */
export function ocaReadingPractice(ocaPractice, kind, ref) {
  const list = ocaPractice && ocaPractice[kind === "e" ? "epistles" : "gospels"];
  if (!list || !list.length || !ref) return null;
  return { oca: list.some((x) => lesson(x.ref) === lesson(ref)) ? "printed" : "not_printed" };
}
/** Marks each rendered prokeimenon or Alleluia (in place, on a copy the caller owns) as printed in the OCA text or not. */
export function markOcaPractice(items, ocaList) {
  if (!ocaList || !ocaList.length) return items;
  const pool = ocaList.map((x) => ({ ...x }));
  for (const it of items) {
    // The Sunday's is matched to the heading the OCA labels "(Resurrection)"; otherwise by tone.
    const i = pool.findIndex((o) => o.tone === it.tone && (o.sunday === undefined || o.sunday === (it.origin === "sunday")));
    const j = i >= 0 ? i : pool.findIndex((o) => o.tone === it.tone);
    if (j >= 0) { pool.splice(j, 1); it.oca = "printed"; } else it.oca = "not_printed";
  }
  return items;
}
