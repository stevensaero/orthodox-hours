// tools/vite-edit-plugin.mjs
// ─────────────────────────────────────────────────────────────────────────────
// DEV-ONLY Vite plugin. Exposes POST /__edit for the in-context data editor.
// apply:'serve' → never runs in `vite build`; nothing here reaches the browser
// bundle. The endpoint is matched at server root (Vite `base` does not apply to
// middleware), so the app fetches the absolute "/__edit".
//
// Pipeline per request: validate payload → edit-engine (recast setValue +
// round-trip verify) → atomic write → run dataset validator → enforce gate.
//   · dryRun: write the would-be file, validate, then restore the original.
//   · commit: write; if the validator exits non-zero (Check A/B), REVERT and block;
//             Check C warnings (exit 0) are kept (warn-and-allow).
// See local_editing_spec.md §5–§7.
// ─────────────────────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, renameSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { spawnSync } from 'child_process';
import { editSetValue } from './edit-engine.mjs';

const ALLOW = [
  /^src\/data\/menaion\/[a-z]+\.js$/,
  /^src\/data\/pentecostarion\.js$/,
  /^src\/data\/octoechos\/[a-z0-9]+\.js$/,
];
const VALIDATOR = (datasetId) =>
  datasetId === 'octoechos' ? 'tools/validate_octoechos.mjs' : 'tools/validate_entries.mjs';

function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(obj));
}

function atomicWrite(absPath, content) {
  const tmp = join(dirname(absPath), `.__edit.tmp.${process.pid}.${Date.now()}`);
  writeFileSync(tmp, content, 'utf8');
  renameSync(tmp, absPath); // atomic on POSIX
}

function runValidator(root, datasetId) {
  const r = spawnSync('node', [VALIDATOR(datasetId)], { cwd: root, encoding: 'utf8' }); // no --strict
  if (r.error) return { exitCode: -1, pass: false, output: 'spawn error: ' + r.error.message };
  const exitCode = r.status == null ? -1 : r.status;
  let output = ((r.stdout || '') + (r.stderr || '')).trim();
  if (r.status == null && r.signal) output += `\n(terminated by signal ${r.signal})`;
  return { exitCode, pass: exitCode === 0, output };
}

export default function editServerPlugin() {
  return {
    name: 'liturgical-edit-server',
    apply: 'serve',
    configureServer(server) {
      const root = server.config.root;
      server.middlewares.use('/__edit', (req, res, next) => {
        if (req.method !== 'POST') return next();
        let body = '';
        req.on('data', (c) => { body += c; if (body.length > 1_000_000) req.destroy(); });
        req.on('end', () => {
          let p;
          try { p = JSON.parse(body); } catch { return send(res, 400, { ok: false, error: 'invalid JSON body' }); }

          const { datasetId, file, path, op, value, expectedOld, dryRun } = p;
          if (op !== 'setValue') return send(res, 400, { ok: false, error: `unsupported op: ${op} (v1 = setValue)` });
          if (typeof file !== 'string' || !ALLOW.some((re) => re.test(file)) || file.includes('..'))
            return send(res, 400, { ok: false, error: `file not in allowlist: ${file}` });
          if (!Array.isArray(path) || path.length === 0)
            return send(res, 400, { ok: false, error: 'path must be a non-empty array' });

          const absPath = resolve(root, file);
          let src;
          try { src = readFileSync(absPath, 'utf8'); } catch (e) { return send(res, 500, { ok: false, error: 'read failed: ' + e.message }); }

          // recast edit + round-trip verify (no disk touch yet)
          const r = editSetValue(src, path, value, expectedOld);
          if (!r.ok) return send(res, 200, { ok: false, error: r.error, oldValue: r.oldValue });

          // write the would-be file, validate, then decide
          try { atomicWrite(absPath, r.newSrc); } catch (e) { return send(res, 500, { ok: false, error: 'write failed: ' + e.message }); }
          const validator = runValidator(root, datasetId);

          if (dryRun) {
            atomicWrite(absPath, src); // restore — preview only
            return send(res, 200, { ok: true, written: false, dryRun: true, diff: r.diff, oldValue: r.oldValue, newValue: r.newValue, validator });
          }
          if (!validator.pass) {
            atomicWrite(absPath, src); // gate: block hard violations, revert
            return send(res, 200, { ok: false, blocked: true, error: 'validator failed (Check A/B) — write reverted', diff: r.diff, validator });
          }
          return send(res, 200, { ok: true, written: true, diff: r.diff, oldValue: r.oldValue, newValue: r.newValue, validator });
        });
      });
      server.config.logger.info('  \x1b[2m[edit-server] POST /__edit live (dev only)\x1b[0m');
    },
  };
}
