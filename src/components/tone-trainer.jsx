// ─── TONE TRAINER ─────────────────────────────────────────────────────────────
// Standalone Tone 1 (Common Chant / Obikhod) stichera pointing trainer.
//
// Sub-project of the Orthodox Hours Tool. NOT yet wired to the assembler's data;
// see tone_trainer_notes.md for scope, the resolved findings, open director
// questions, and the eventual hours-tool → tone-trainer data-contract goal.
//
// Component version is tracked independently of the hours-tool version.
// ──────────────────────────────────────────────────────────────────────────────
import React, { useState, useMemo, useRef } from "react";

export const TONE_TRAINER_VERSION = "v0.1.0";

// ── PITCH / SOLFEGE ───────────────────────────────────────────────────────────
// Semitone offset from moveable "do". Tone 1 home base is "re" (one step above do).
const OFF = { la: -3, ti: -1, do: 0, re: 2, mi: 4 };
const DO_OPTIONS = [
  { label: "A (low)", hz: 220.0 },
  { label: "B", hz: 246.94 },
  { label: "C", hz: 261.63 },
  { label: "D", hz: 293.66 },
  { label: "E (high)", hz: 329.63 },
];

// ── PHRASE DEFINITIONS (Tone 1, corrected against Drillock & Ealy) ──────────────
// recite : reciting-tone pitch
// inton  : phrase opens with an intonation note on the reciting pitch
// prep   : preparatory note before the cadence (Phrase A only, on ti)
// cad    : cadence pitch figure, hung on the last INTERNAL accent
//
// Corrections from the prior heuristic build:
//  - Phrase B cadence is do → re → ti (hold do, up a tone to re, down a third to ti)
//  - prep on ti belongs to Phrase A specifically (not a general rule)
//  - anchor is the last INTERNAL accent (see pointLine), not merely the last accent
const PH = {
  A:     { recite: "re", inton: true,  prep: "ti", cad: ["do"] },
  B:     { recite: "do", inton: false, prep: null, cad: ["do", "re", "ti"] },
  C:     { recite: "re", inton: true,  prep: null, cad: ["do", "ti"] },
  D:     { recite: "do", inton: false, prep: null, cad: ["ti", "do", "re", "do", "ti"] },
  Final: { recite: "re", inton: false, prep: null, cad: ["do", "ti", "la"] },
};
const ROT = ["A", "B", "C", "D"];
const phraseForLine = (i, total) => (i === total - 1 ? "Final" : ROT[i % 4]);
const PNAME = { A: "Phrase A", B: "Phrase B", C: "Phrase C", D: "Phrase D", Final: "Final Phrase" };

// ── SYLLABIFIER (heuristic; user can correct via "edit syllables") ──────────────
function syllabify(word) {
  const m = word.match(/[A-Za-z']+/);
  if (!m) return [word];
  const core = m[0];
  const lead = word.slice(0, m.index);
  const trail = word.slice(m.index + core.length);
  const lower = core.toLowerCase();
  const isV = (c) => "aeiouy".includes(c);
  const groups = [];
  let i = 0;
  const n = lower.length;
  while (i < n) {
    if (isV(lower[i]) && !(lower[i] === "y" && i === 0)) {
      let j = i;
      while (j < n && isV(lower[j])) j++;
      groups.push([i, j - 1]);
      i = j;
    } else i++;
  }
  if (groups.length <= 1) return [word];
  const breaks = [];
  for (let g = 0; g < groups.length - 1; g++) {
    const vEnd = groups[g][1];
    const nextV = groups[g + 1][0];
    const cc = nextV - vEnd - 1;
    let s;
    if (cc <= 0) s = nextV;
    else if (cc === 1) s = nextV - 1;
    else s = vEnd + 1 + Math.floor(cc / 2);
    breaks.push(s);
  }
  let sylls = [];
  let prev = 0;
  breaks.forEach((b) => { sylls.push(core.slice(prev, b)); prev = b; });
  sylls.push(core.slice(prev));
  if (sylls.length > 1) {
    const last = sylls[sylls.length - 1].toLowerCase();
    if (/^[^aeiou]*e$/.test(last) && !/^[^aeiouy]*le$/.test(last)) {
      sylls[sylls.length - 2] += sylls.pop();
    }
  }
  sylls[0] = lead + sylls[0];
  sylls[sylls.length - 1] += trail;
  return sylls;
}

const STOP = new Set(
  ("the a an of to and in on for with is am are be by at from as us him her them we i you " +
   "he she it our your his my that this whose whom who which but or nor so yet o").split(/\s+/)
);
// Heuristic stress guess — explicitly a DRAFT. The accent that matters most
// (the phrase-final / last-internal accent) should be verified by the singer.
function guessAccent(wordDisplay, sylls, idx) {
  const lw = wordDisplay.toLowerCase().replace(/[^a-z]/g, "");
  if (sylls.length === 1) return idx === 0 ? !STOP.has(lw) : false;
  return idx === 0; // rough: first syllable of polysyllabic words
}

// ── PRESET: Meeting of the Lord, "Lord, I Call", 3rd sticheron (hand-pointed) ───
// Accents hand-verified against the printed score in the tutorial.
const PRESET = [
  ["A", [["Come,",[["Come",1]]],["let",[["let",0]]],["us",[["us",0]]],["also",[["al",1],["so",0]]],["go",[["go",0]]],["to",[["to",0]]],["meet",[["meet",1]]],["Christ",[["Christ",1]]],["with",[["with",0]]],["divine",[["di",0],["vine",1]]],["songs!",[["songs",1]]]]],
  ["B", [["Let",[["Let",0]]],["us",[["us",0]]],["receive",[["re",0],["ceive",1]]],["Him",[["Him",0]]],["Whose",[["Whose",0]]],["salvation",[["sal",0],["va",1],["tion",0]]],["Simeon",[["Sim",1],["e",0],["on",0]]],["saw!",[["saw",1]]]]],
  ["C", [["This",[["This",0]]],["is",[["is",0]]],["He",[["He",0]]],["Whom",[["Whom",0]]],["David",[["Da",1],["vid",0]]],["announced;",[["an",0],["nounced",1]]]]],
  ["D", [["this",[["this",0]]],["is",[["is",0]]],["He",[["He",0]]],["Who",[["Who",0]]],["spoke",[["spoke",1]]],["in",[["in",0]]],["the",[["the",0]]],["Prophets,",[["Proph",1],["ets",0]]]]],
  ["A", [["Who,",[["Who",0]]],["for",[["for",0]]],["our",[["our",0]]],["sakes,",[["sakes",1]]],["has",[["has",0]]],["taken",[["tak",1],["en",0]]],["flesh",[["flesh",1]]],["and",[["and",0]]],["Who",[["Who",0]]],["speaks",[["speaks",1]]],["through",[["through",0]]],["the",[["the",0]]],["Law.",[["Law",1]]]]],
  ["Final", [["Let",[["Let",0]]],["us",[["us",0]]],["worship",[["wor",1],["ship",0]]],["Him!",[["Him",1]]]]],
];
function presetToLines() {
  return PRESET.map(([ph, ws]) => ({
    phrase: ph,
    words: ws.map(([d, ss]) => ({ display: d, sylls: ss.map(([t, a]) => ({ text: t, accent: !!a })) })),
  }));
}

// ── POINTING ENGINE ─────────────────────────────────────────────────────────
// Flatten a line into a per-syllable list with word context.
function flatten(line) {
  const flat = [];
  line.words.forEach((w) =>
    w.sylls.forEach((s, si) =>
      flat.push({
        text: s.text,
        accent: s.accent,
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
function anchorIndex(flat) {
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

function pointLine(line) {
  const def = PH[line.phrase];
  const flat = flatten(line);
  const a = anchorIndex(flat);
  const body = flat.slice(0, a);
  const cad = flat.slice(a);
  const roles = [];

  body.forEach((s, i) => {
    let role = "recite";
    let pitch = def.recite;
    if (i === 0 && def.inton) role = "inton";
    if (def.prep && i === body.length - 1) { role = "prep"; pitch = def.prep; }
    roles.push({ role, pitches: [pitch], accent: s.accent, text: s.text });
  });

  const dist = distribute(def.cad, cad.length);
  cad.forEach((s, i) =>
    roles.push({
      role: "cad",
      pitches: dist[i] || [def.cad[def.cad.length - 1]],
      accent: s.accent,
      text: s.text,
      anchor: i === 0,
    })
  );
  return roles;
}

// Distribute a cadence pitch figure across the cadence syllables.
// Rule of thumb from the tutorial: the accented (anchor) syllable carries the
// held note; trailing unaccented syllables ride the same pitch until the last
// syllable takes the final cadence pitch.
function distribute(figure, count) {
  const n = figure.length;
  if (count <= 1) return [figure.slice()];        // one syllable carries the whole figure
  if (count === n) return figure.map((f) => [f]);  // one note per syllable
  if (count > n) {                                 // more syllables than notes
    const out = [[figure[0]]];
    const mid = figure.slice(1, n - 1);
    const ms = count - 2;
    for (let i = 0; i < ms; i++) out.push([mid[i] ?? figure[Math.max(0, n - 2)]]);
    out.push([figure[n - 1]]);
    return out;
  }
  // count < n : anchor carries the leading notes as a melisma, then one per syllable
  const lead = n - count + 1;
  const out = [figure.slice(0, lead)];
  for (let i = 1; i < count; i++) out.push([figure[lead - 1 + i]]);
  return out;
}

// ── AUDIO ───────────────────────────────────────────────────────────────────
function useAudio() {
  const ctxRef = useRef(null);
  const ac = () => {
    if (!ctxRef.current) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new AC();
    }
    if (ctxRef.current.state === "suspended") ctxRef.current.resume();
    return ctxRef.current;
  };
  const tone = (f, t0, dur, peak = 0.22) => {
    const c = ac();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "triangle";
    o.frequency.value = f;
    o.connect(g);
    g.connect(c.destination);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(peak, t0 + 0.035);
    g.gain.setValueAtTime(peak, t0 + dur - 0.07);
    g.gain.linearRampToValueAtTime(0, t0 + dur - 0.005);
    o.start(t0);
    o.stop(t0 + dur);
  };
  return { ac, tone };
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function ToneTrainer() {
  const [doHz, setDoHz] = useState(261.63);
  const [mode, setMode] = useState("preset"); // 'preset' | 'custom'
  const [text, setText] = useState("");
  const [lines, setLines] = useState(presetToLines);
  const [playingLine, setPlayingLine] = useState(null);
  const [editOpen, setEditOpen] = useState({});
  const { ac, tone } = useAudio();

  const freq = (sol) => doHz * Math.pow(2, OFF[sol] / 12);

  const lineToNotes = (line) => {
    const roles = pointLine(line);
    const notes = [];
    roles.forEach((r, i) => {
      const last = i === roles.length - 1;
      r.pitches.forEach((p, k) => {
        let dur = 0.45;
        let peak = 0.2;
        if (r.role === "recite" || r.role === "inton") dur = r.accent ? 0.6 : 0.45;
        if (r.role === "prep") dur = 0.5;
        if (r.role === "cad") { dur = r.pitches.length > 1 ? 0.42 : 0.55; if (r.accent) peak = 0.27; }
        if (last && k === r.pitches.length - 1) dur = 1.0;
        notes.push({ sol: p, dur, peak });
      });
    });
    return notes;
  };

  const playNotes = (notes, onDone) => {
    const c = ac();
    let t = c.currentTime + 0.06;
    notes.forEach((n) => { tone(freq(n.sol), t, n.dur, n.peak); t += n.dur; });
    if (onDone) setTimeout(onDone, (t - c.currentTime) * 1000 + 40);
  };

  const playLine = (li) => {
    setPlayingLine(li);
    playNotes(lineToNotes(lines[li]), () => setPlayingLine(null));
  };

  const playAll = () => {
    const c = ac();
    let t = c.currentTime + 0.06;
    lines.forEach((line, li) => {
      const notes = lineToNotes(line);
      const start = t;
      setTimeout(() => setPlayingLine(li), (start - c.currentTime) * 1000);
      notes.forEach((n) => { tone(freq(n.sol), t, n.dur, n.peak); t += n.dur; });
      t += 0.35;
    });
    setTimeout(() => setPlayingLine(null), (t - c.currentTime) * 1000 + 40);
  };

  const playScale = () =>
    playNotes(["la", "ti", "do", "re", "mi"].map((s) => ({ sol: s, dur: 0.4 })));

  const analyze = () => {
    const raw = text.split("\n").map((s) => s.trim()).filter(Boolean);
    if (!raw.length) { setLines([]); return; }
    const next = raw.map((ln, i) => {
      const words = ln.split(/\s+/).map((w) => {
        const ss = syllabify(w);
        return {
          display: w,
          sylls: ss.map((tt, k) => ({ text: tt.replace(/[^A-Za-z']/g, "") || tt, accent: guessAccent(w, ss, k) })),
        };
      });
      return { phrase: phraseForLine(i, raw.length), words };
    });
    setLines(next);
  };

  const toggleAccent = (li, fi) => {
    setLines((prev) => {
      const copy = prev.map((l) => ({ phrase: l.phrase, words: l.words.map((w) => ({ display: w.display, sylls: w.sylls.map((s) => ({ ...s })) })) }));
      let count = 0;
      for (const w of copy[li].words) {
        for (const s of w.sylls) { if (count === fi) s.accent = !s.accent; count++; }
      }
      return copy;
    });
  };

  const applyEdit = (li, val) => {
    setLines((prev) => {
      const copy = prev.map((l) => ({ ...l, words: l.words.map((w) => ({ ...w, sylls: w.sylls.map((s) => ({ ...s })) })) }));
      const words = val.trim().split(/\s+/).map((tok) => {
        const ss = tok.split(/[·\-]/).filter(Boolean);
        return { display: ss.join(""), sylls: ss.map((t) => ({ text: t, accent: false })) };
      });
      copy[li].words = words;
      return copy;
    });
  };

  const switchMode = (m) => {
    setMode(m);
    if (m === "preset") setLines(presetToLines());
    else setLines([]);
  };

  // shared styles
  const gold = "#8B6914";
  const ink = "#2a2118";
  const btn = {
    background: "transparent", border: `1px solid ${gold}`, color: gold,
    borderRadius: "3px", padding: "5px 14px", fontSize: "0.78rem",
    letterSpacing: "0.08em", cursor: "pointer", fontFamily: "Georgia, serif",
  };
  const roleBg = {
    recite: "rgba(40,58,92,.06)", inton: "rgba(40,58,92,.10)",
    prep: "rgba(180,137,43,.16)", cad: "rgba(122,36,24,.10)",
  };
  const roleColor = { recite: "#283a5c", inton: "#283a5c", prep: "#8a6a14", cad: "#7a2418" };

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "2rem 1rem 4rem", fontFamily: "Georgia, serif", color: ink }}>
      <div style={{ textAlign: "center", marginBottom: "0.4rem", letterSpacing: "0.28em", textTransform: "uppercase", fontSize: "0.7rem", color: gold }}>
        Common Chant · Obikhod · Tone 1
      </div>
      <h1 style={{ textAlign: "center", color: "#7a2418", fontWeight: 600, fontSize: "2rem", margin: "0.1em 0" }}>
        Tone Trainer — Pointing
      </h1>
      <div style={{ textAlign: "center", fontStyle: "italic", color: "#5b4a33", marginBottom: "0.3rem" }}>
        Syllables → accents → reciting tone &amp; cadence · then sing it
      </div>
      <div style={{ textAlign: "center", fontSize: "0.7rem", color: "#9A8A70", marginBottom: "1.4rem" }}>
        {TONE_TRAINER_VERSION}
      </div>

      {/* controls */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", alignItems: "center", justifyContent: "space-between", border: "1px solid #d6c79f", borderRadius: 8, padding: "0.7rem 0.9rem", marginBottom: "1.1rem" }}>
        <div style={{ display: "inline-flex", border: `1.5px solid ${gold}`, borderRadius: 6, overflow: "hidden" }}>
          {["preset", "custom"].map((m) => (
            <button key={m} onClick={() => switchMode(m)}
              style={{ border: "none", background: mode === m ? gold : "transparent", color: mode === m ? "#fff" : gold, padding: "7px 14px", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.85rem" }}>
              {m === "preset" ? "Meeting of the Lord" : "Your own text"}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
          <label style={{ fontSize: "0.82rem", color: "#5b4a33" }}>
            do ={" "}
            <select value={doHz} onChange={(e) => setDoHz(parseFloat(e.target.value))}
              style={{ fontFamily: "Georgia, serif", border: "1px solid #d6c79f", borderRadius: 6, padding: "4px 8px" }}>
              {DO_OPTIONS.map((o) => <option key={o.label} value={o.hz}>{o.label}</option>)}
            </select>
          </label>
          <button style={btn} onClick={playScale}>scale</button>
          <button style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none" }} onClick={playAll}>▶ Sing all</button>
        </div>
      </div>

      {mode === "custom" && (
        <div style={{ marginBottom: "1.1rem" }}>
          <label style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.85rem", color: "#5b4a33" }}>
            Type the sticheron — one text line per line. Phrases rotate A·B·C·D; the last line uses the Final Phrase.
          </label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4}
            placeholder={"Come, let us also go to meet Christ with divine songs!\nLet us receive Him Whose salvation Simeon saw!\nThis is He Whom David announced;\nLet us worship Him!"}
            style={{ width: "100%", fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: 1.6, border: "1px solid #d6c79f", borderRadius: 6, padding: "8px", resize: "vertical" }} />
          <div style={{ marginTop: "0.6rem", display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
            <button style={{ ...btn, background: "#7a2418", color: "#f7ead0", border: "none" }} onClick={analyze}>Analyze &amp; point</button>
            <span style={{ fontSize: "0.78rem", color: "#6b5942", fontStyle: "italic" }}>
              Auto-accent is a draft — click any syllable to fix its accent; the phrase-final accent is the one that matters most.
            </span>
          </div>
        </div>
      )}

      {/* legend */}
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.78rem", color: "#6b5942", marginBottom: "1rem" }}>
        <span>reciting tone</span><span>· prep (ti)</span><span>· cadence</span><span>· ´ = accent</span>
      </div>

      {/* lines */}
      {lines.map((line, li) => {
        const roles = pointLine(line);
        const isFin = line.phrase === "Final";
        let fi = -1;
        return (
          <div key={li} style={{ background: playingLine === li ? "rgba(255,250,238,.9)" : "rgba(255,255,255,.5)", border: "1px solid #d6c79f", borderLeft: `5px solid ${playingLine === li ? "#7a2418" : gold}`, borderRadius: 8, padding: "0.7rem 0.9rem", marginBottom: "0.8rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
              <span style={{ background: isFin ? "#7a2418" : "#283a5c", color: "#fff", borderRadius: 5, padding: "2px 10px", fontSize: "0.78rem" }}>{PNAME[line.phrase]}</span>
              <span style={{ fontSize: "0.76rem", color: "#6b5942", fontStyle: "italic" }}>
                reciting on <b>{PH[line.phrase].recite}</b>{PH[line.phrase].prep ? <> · prep on <b>ti</b></> : null} · click syllables to set accents
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 2px", alignItems: "flex-end" }}>
              {line.words.map((w, wi) => (
                <React.Fragment key={wi}>
                  {w.sylls.map((s, si) => {
                    fi += 1;
                    const r = roles[fi];
                    const myFi = fi;
                    const pis = r.pitches.join("-");
                    return (
                      <span key={si} onClick={() => toggleAccent(li, myFi)}
                        style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", padding: "3px 5px 2px", borderRadius: 6, cursor: "pointer", background: roleBg[r.role], border: r.anchor ? "1px solid #7a2418" : "1px solid transparent", minWidth: "1.6em" }}>
                        <span style={{ fontSize: "1.1rem", fontWeight: s.accent ? 600 : 400, position: "relative" }}>
                          {s.accent ? <span style={{ position: "absolute", top: "-0.55em", left: "50%", transform: "translateX(-50%)", color: "#7a2418" }}>´</span> : null}
                          {s.text}
                        </span>
                        <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "0.72rem", color: roleColor[r.role] }}>{pis}</span>
                      </span>
                    );
                  })}
                  <span style={{ width: 7 }} />
                </React.Fragment>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "0.6rem", flexWrap: "wrap" }}>
              <button style={btn} onClick={() => playLine(li)}>▶ Sing this line</button>
              <button style={btn} onClick={() => setEditOpen((o) => ({ ...o, [li]: !o[li] }))}>edit syllables</button>
            </div>
            {editOpen[li] && (
              <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                <input defaultValue={line.words.map((w) => w.sylls.map((s) => s.text).join("·")).join(" ")}
                  id={`edit-${li}`}
                  style={{ flex: 1, minWidth: 240, fontFamily: "Georgia, serif", fontSize: "0.9rem", border: "1px solid #d6c79f", borderRadius: 6, padding: "5px 8px" }} />
                <button style={btn} onClick={() => applyEdit(li, document.getElementById(`edit-${li}`).value)}>apply</button>
                <span style={{ fontSize: "0.74rem", color: "#6b5942", fontStyle: "italic" }}>separate syllables with · or - ; spaces separate words</span>
              </div>
            )}
          </div>
        );
      })}

      <div style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "#6b5942", fontStyle: "italic", borderTop: "1px solid #d6c79f", paddingTop: "0.9rem" }}>
        Structural pointing (reciting run vs. cadence, anchored on the last internal accent, with the
        one-syllable-final-word backup) follows Drillock &amp; Ealy, <i>Tutorial for Learning the Church
        Tones — Common Chant</i> (OCA). The exact note-to-syllable distribution inside a cadence is the
        trainer's best reading; verify against the printed staves. Auto-syllabification of free text is
        heuristic — correct it with "edit syllables."
      </div>
    </div>
  );
}
