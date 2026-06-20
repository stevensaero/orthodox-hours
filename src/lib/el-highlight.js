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

// Brief background flash on a node, centered into view (block:'center' clears
// the sticky header). No-op on a missing node, so a section a given viewer
// doesn't render simply does nothing (still landed at the entry per Phase 2).
export function flashEl(node) {
  if (!node) return;
  try {
    node.scrollIntoView({ behavior: "smooth", block: "center" });
  } catch (_) {
    node.scrollIntoView();
  }
  const prevTransition = node.style.transition;
  const prevBg = node.style.backgroundColor;
  const prevRadius = node.style.borderRadius;
  node.style.transition = "background-color 0.25s ease";
  node.style.borderRadius = prevRadius || "4px";
  node.style.backgroundColor = "rgba(139,105,20,0.18)";
  window.setTimeout(() => {
    node.style.backgroundColor = prevBg || "transparent";
    window.setTimeout(() => {
      node.style.transition = prevTransition;
      node.style.borderRadius = prevRadius;
    }, 350);
  }, 950);
}

// Convenience: find the [data-el="<el>"] node within an optional scope (an entry
// card root) — falls back to document — and flash it.
export function flashElIn(scope, el) {
  if (!el) return;
  const root = scope || document;
  const node = root.querySelector('[data-el="' + el + '"]');
  flashEl(node);
}
