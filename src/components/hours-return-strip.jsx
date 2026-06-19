import React from "react";

// Sticky "← Hours Tool" strip for the data browsers (Menaion / Octoechos /
// Pentecostarion). Renders only when the viewer was opened from the Hours tool
// (URL carries ?from=tool, e.g. from the Library bookshelf). Plain history.back()
// returns to the tool exactly where it was left (incl. the Library view).
// The Psalter, Scripture, and Tone Trainer carry their own equivalent strip.
export default function HoursReturnStrip({ position = "top" }) {
  const ref = React.useRef(null);
  let fromTool = false;
  try { fromTool = new URLSearchParams(window.location.search).get("from") === "tool"; } catch (e) {}
  const isBottom = position === "bottom";

  // The top strip publishes its height to a CSS variable so each browser's own
  // sticky header can pin *below* it (top: var(--hours-return-strip-h)) instead
  // of the taller header riding up and hiding the strip on scroll. Cleared on
  // unmount; absent (→ 0) on a direct, no-strip visit.
  React.useLayoutEffect(() => {
    if (isBottom || !fromTool) return;
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    const setVar = () => root.style.setProperty("--hours-return-strip-h", el.offsetHeight + "px");
    setVar();
    let ro;
    if (typeof ResizeObserver !== "undefined") { ro = new ResizeObserver(setVar); ro.observe(el); }
    return () => {
      if (ro) ro.disconnect();
      root.style.setProperty("--hours-return-strip-h", "0px");
    };
  }, [isBottom, fromTool]);

  if (!fromTool) return null;
  return (
    <button
      ref={ref}
      onClick={() => window.history.back()}
      style={{
        display: "block",
        width: "100%",
        boxSizing: "border-box",
        // Outer 1.5rem horizontal padding mirrors the browser headers, so the
        // 960px-centered inner row lines the link up with the title and body.
        padding: "0.5rem 1.5rem",
        position: "sticky",
        top: isBottom ? undefined : 0,
        bottom: isBottom ? 0 : undefined,
        zIndex: 60,
        background: "#FAF6EE",
        border: "none",
        borderBottom: isBottom ? undefined : "1px solid #D4C49A",
        borderTop: isBottom ? "1px solid #D4C49A" : undefined,
        cursor: "pointer", textAlign: "left", fontFamily: "Georgia, serif",
      }}
    >
      <span style={{
        display: "flex", alignItems: "center", gap: "0.3rem",
        maxWidth: "960px", margin: "0 auto",
      }}>
        <span style={{ fontSize: "1.2rem", lineHeight: 1, color: "#8B6914" }}>←</span>
        <span style={{ fontSize: "0.95rem", color: "#8B6914", marginLeft: "0.3rem" }}>Hours Tool</span>
      </span>
    </button>
  );
}
