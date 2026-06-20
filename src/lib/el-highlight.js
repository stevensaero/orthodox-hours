// Phase 3 — shared &el= sub-anchor highlight for the data viewers.
//
// A reading-view "↗ source" link carries an &el=<section> param (troparion |
// kontakion | lic | aposticha). After the viewer's existing Phase-2 deep scroll
// lands on the entry, the viewer calls flashEl() on the matching section so the
// reader sees exactly which proper the link pointed at. Self-contained (no
// global CSS) so the three viewers stay byte-consistent. A visit with no &el=
// never calls this and behaves exactly as Phase 2.

// Read the &el= param. Returns 'troparion' | 'kontakion' | 'lic' | 'aposticha'
// or null. Tolerant of unknown values (returns null).
export function getElParam() {
  const v = new URLSearchParams(window.location.search).get("el");
  return ["troparion", "kontakion", "lic", "aposticha"].includes(v) ? v : null;
}

// Mark the targeted node and center it into view. The proper that a "↗ source"
// link points at gets a soft, persistent highlighter-yellow wash so you can see
// exactly what you navigated to — it stays lit until the page reloads (no fade).
// No-op on a missing node, so a section a given viewer doesn't render simply
// does nothing (still landed at the entry per Phase 2).
export function flashEl(node) {
  if (!node) return;
  try {
    node.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (_) {
    node.scrollIntoView();
  }
  node.style.backgroundColor = "rgba(245, 226, 110, 0.55)";
  node.style.borderRadius = node.style.borderRadius || "4px";
}

// Convenience: find the [data-el="<el>"] node within an optional scope (an entry
// card root) — falls back to document — and flash it.
export function flashElIn(scope, el) {
  if (!el) return;
  const root = scope || document;
  const node = root.querySelector('[data-el="' + el + '"]');
  flashEl(node);
}
