import React from 'react';
import { AVAILABLE_TONES } from '../lib/available-tones.js';

// A verse is pointable when its stored text carries end-of-line marks.
export function isPointable(text) {
  return typeof text === 'string' && (/\s\|\s/.test(text) || /\s\/\/\s/.test(text));
}

// Hand a pointable verse to the Tone Trainer. mode 'point' loads + points it for
// singing; mode 'score' has the trainer build the print payload and redirect to the
// printed score. Stash verse + tone + mode, then full-page navigate with ?from=tool
// (so a plain browser-back returns to where you left off). The trainer reads
// oht_handoff on mount.
export function handoffVerse(text, tone, mode) {
  try { sessionStorage.setItem('oht_handoff', JSON.stringify({ verse: text, tone, mode })); } catch { /* private mode */ }
  window.location.href = '/orthodox-hours/tone-trainer?from=tool';
}

// The ▶ Point / ♫ Score control stack, shown at the right of a pointable verse.
// Active (gold) when the verse's tone is built in the trainer (1–3 today); light
// grey and inert otherwise, with a tooltip explaining why. Returns null for any
// non-pointable text, so callers can drop it in unconditionally.
export function PointScoreControls({ text, tone }) {
  if (!isPointable(text)) return null;
  const toneBuilt = tone != null && AVAILABLE_TONES.has(tone);
  const tip = (verb) => toneBuilt
    ? verb
    : (tone != null ? `Tone ${tone} is not yet built in the Tone Trainer` : 'This verse has no tone assigned');
  const glyph = { lineHeight: 1, userSelect: 'none', cursor: toneBuilt ? 'pointer' : 'not-allowed', color: toneBuilt ? '#8B6914' : '#CDC4AE' };
  return (
    <div style={{
      flexShrink: 0,
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '15px',
      paddingLeft: '10px',
      borderLeft: '1px solid #DDD2B6',
    }}>
      <div
        role="button"
        aria-label="Point this verse in the Tone Trainer"
        onClick={toneBuilt ? () => handoffVerse(text, tone, 'point') : undefined}
        title={tip('Point this verse in the Tone Trainer')}
        style={{ ...glyph, fontSize: '1.15rem' }}
      >▶</div>
      <div
        role="button"
        aria-label="Open the printed score for this verse"
        onClick={toneBuilt ? () => handoffVerse(text, tone, 'score') : undefined}
        title={tip('Open the printed score for this verse')}
        style={{ ...glyph, fontSize: '1.66rem' }}
      >♫</div>
    </div>
  );
}
