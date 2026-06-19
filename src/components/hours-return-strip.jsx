import React from "react";

// Sticky "← Hours Tool" strip for the data browsers (Menaion / Octoechos /
// Pentecostarion). Renders only when the viewer was opened from the Hours tool
// (URL carries ?from=tool, e.g. from the Library bookshelf). Plain history.back()
// returns to the tool exactly where it was left (incl. the Library view).
// The Psalter, Scripture, and Tone Trainer carry their own equivalent strip.
export default function HoursReturnStrip({ position = "top" }) {
  let fromTool = false;
  try { fromTool = new URLSearchParams(window.location.search).get("from") === "tool"; } catch (e) {}
  if (!fromTool) return null;
  const isBottom = position === "bottom";
  return (
    <button
      onClick={() => window.history.back()}
      style={{
        display: "flex", alignItems: "center", gap: "0.3rem",
        position: "sticky",
        top: isBottom ? undefined : 0,
        bottom: isBottom ? 0 : undefined,
        zIndex: 60,
        width: "100%",
        padding: "0.5rem 1.25rem",
        background: "#FAF6EE",
        border: "none",
        borderBottom: isBottom ? undefined : "1px solid #D4C49A",
        borderTop: isBottom ? "1px solid #D4C49A" : undefined,
        cursor: "pointer", textAlign: "left", fontFamily: "Georgia, serif",
      }}
    >
      <span style={{ fontSize: "1.2rem", lineHeight: 1, color: "#8B6914" }}>←</span>
      <span style={{ fontSize: "0.95rem", color: "#8B6914", marginLeft: "0.3rem" }}>Hours Tool</span>
    </button>
  );
}
