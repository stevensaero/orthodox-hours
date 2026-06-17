// src/components/field-editor.jsx
// In-context editor for one liturgical text field. Dev-only — mounted by TextBlock
// inside an import.meta.env.DEV branch, so it is dead-code-eliminated from the
// production build. Talks to the dev-only POST /__edit endpoint (tools/vite-edit-plugin.mjs).
import { useState } from 'react';
import { renderPointed } from './point-score-controls.jsx';

// Client lint — catches the cheap mistakes before a round-trip. Markers are content,
// so they never break storage; this is encoding-rule hygiene only.
function lint(text) {
  const msgs = [];
  let depth = 0, broke = false;
  for (const ch of text) {
    if (ch === '[') depth++;
    else if (ch === ']') { depth--; if (depth < 0) { broke = true; break; } }
  }
  if (broke || depth !== 0) msgs.push('Unbalanced [ ] director brackets');
  if (/\n/.test(text)) msgs.push('Contains a line break — verse text is a single line');
  if (/^\s|\s$/.test(text)) msgs.push('Leading or trailing whitespace');
  if (/\/\/(?!\s)|(?<!\s)\/\//.test(text)) msgs.push('"//" should be space-delimited ( // )');
  return msgs;
}

// Strip-at-render preview is the shared renderPointed (point-score-controls.jsx),
// so the editor shows exactly what the choir view produces.

export default function FieldEditor({ datasetId, file, path, value, onClose, onSaved }) {
  const [text, setText] = useState(value ?? '');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState(null);
  const msgs = lint(text);
  const dirty = text !== (value ?? '');

  async function call(dryRun) {
    setBusy(true); setResult(null);
    try {
      const res = await fetch('/__edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ datasetId, file, path, op: 'setValue', value: text, expectedOld: value, dryRun }),
      });
      const j = await res.json();
      setResult(j);
      if (j.ok && !dryRun && onSaved) onSaved(text);
    } catch (e) {
      setResult({ ok: false, error: String(e) });
    }
    setBusy(false);
  }

  const btn = (bg) => ({
    padding: '4px 12px', fontSize: '0.78rem', border: 'none', borderRadius: '3px',
    color: '#fff', background: bg, cursor: 'pointer', opacity: busy ? 0.6 : 1,
  });

  return (
    <div style={{
      marginTop: '0.5rem', padding: '0.6rem 0.75rem', background: 'rgba(59,74,107,0.05)',
      border: '1px solid rgba(59,74,107,0.3)', borderRadius: '4px',
    }}>
      <div style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#3B4A6B', marginBottom: '0.35rem' }}>
        edit · {file} · {JSON.stringify(path)}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        style={{
          width: '100%', boxSizing: 'border-box', fontFamily: 'Georgia, serif',
          fontSize: '0.86rem', lineHeight: 1.55, padding: '6px 8px',
          border: '1px solid #C9BC9A', borderRadius: '3px', resize: 'vertical',
        }}
      />
      <div style={{ marginTop: '0.4rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9A8A70' }}>Preview</div>
      <div style={{ padding: '4px 8px', background: '#fff', border: '1px solid #EDE5CE', borderRadius: '3px', fontFamily: 'Georgia, serif', fontSize: '0.85rem', color: '#2C1F0A' }}>
        {renderPointed(text)}
      </div>
      {msgs.length > 0 && (
        <div style={{ marginTop: '0.4rem', fontSize: '0.76rem', color: '#B43C1E' }}>
          {msgs.map((m, i) => <div key={i}>⚠ {m}</div>)}
        </div>
      )}
      <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <button style={btn('#7A6A3A')} disabled={busy || !dirty} onClick={() => call(true)}>Preview change</button>
        <button style={btn('#3A6B3A')} disabled={busy || !dirty} onClick={() => call(false)}>Save</button>
        <button style={{ ...btn('#8A7A5A'), background: 'transparent', color: '#5C4A1E', border: '1px solid #C9BC9A' }} disabled={busy} onClick={onClose}>Close</button>
      </div>
      {result && (
        <div style={{ marginTop: '0.5rem', fontSize: '0.78rem' }}>
          {result.ok
            ? <div style={{ color: '#3A6B3A' }}>{result.written ? '✓ Saved to file' : '✓ Preview (not written)'}</div>
            : <div style={{ color: '#B43C1E' }}>✗ {result.blocked ? 'Blocked: ' : ''}{result.error}</div>}
          {result.diff && (
            <pre style={{
              marginTop: '0.35rem', padding: '6px 8px', background: '#1E1E1E', color: '#DDD',
              fontSize: '0.72rem', lineHeight: 1.45, borderRadius: '3px', overflowX: 'auto', whiteSpace: 'pre',
            }}>{result.diff}</pre>
          )}
          {result.validator && (
            <div style={{ marginTop: '0.35rem', fontSize: '0.74rem', color: result.validator.pass ? '#4A7A3A' : '#B43C1E' }}>
              validator: {result.validator.pass ? 'pass' : `exit ${result.validator.exitCode}`}
              {result.validator.output && (
                <pre style={{ marginTop: '0.2rem', whiteSpace: 'pre-wrap', color: '#5C4A1E', fontSize: '0.72rem' }}>{result.validator.output}</pre>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
