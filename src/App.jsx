import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HoursTool from './components/hours-tool.jsx';
import Psalter from './components/psalter.jsx';
import Scripture from './components/scripture.jsx';
import HoursReturnStrip from './components/hours-return-strip.jsx';

// Dev/truthing tools — lazy-loaded, URL-only access
const MenaionBrowser = lazy(() => import('./components/menaion-browser.jsx'));
const PentecostarionBrowser = lazy(() => import('./components/pentecostarion-browser.jsx'));
const OctoechosV2Browser = lazy(() => import('./components/octoechos-v2-browser.jsx'));
const ToneTrainer = lazy(() => import('./components/tone-trainer.jsx'));

function LazyFallback() {
  return (
    <div style={{ padding: "3rem", fontFamily: "Georgia, serif", color: "#9A8A70", textAlign: "center" }}>
      Loading…
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: "2rem", fontFamily: "Georgia, serif", color: "#8B6914" }}>
          <h2>Scripture Error</h2>
          <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.8rem", color: "#c00" }}>
            {this.state.error?.message}
            {"\n"}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <BrowserRouter basename="/orthodox-hours">
      <Routes>
        <Route path="/" element={<HoursTool />} />
        <Route path="/psalter" element={<Psalter />} />
        <Route path="/psalter/:kathisma" element={<Psalter />} />
        <Route path="/scripture" element={<ErrorBoundary><Scripture /></ErrorBoundary>} />
        <Route path="/scripture/" element={<ErrorBoundary><Scripture /></ErrorBoundary>} />
        <Route path="/menaion" element={<Suspense fallback={<LazyFallback />}><div style={{ minWidth: "760px" }}><HoursReturnStrip /><MenaionBrowser /><HoursReturnStrip position="bottom" /></div></Suspense>} />
        <Route path="/pentecostarion" element={<Suspense fallback={<LazyFallback />}><div style={{ minWidth: "760px" }}><HoursReturnStrip /><PentecostarionBrowser /><HoursReturnStrip position="bottom" /></div></Suspense>} />
        {/* The V1 /octoechos browser retired at the Phase 5 cutover (v0.36.0);
            /octoechos redirects to the V2 reading view for old links. */}
        <Route path="/octoechos" element={<Navigate to="/octoechos-v2" replace />} />
        {/* Octoechos V2 is fully responsive (mobile drawer + compact header), so
            unlike the desktop-only table browsers it carries no 760px min-width. */}
        <Route path="/octoechos-v2" element={<ErrorBoundary><Suspense fallback={<LazyFallback />}><div><HoursReturnStrip /><OctoechosV2Browser /><HoursReturnStrip position="bottom" /></div></Suspense></ErrorBoundary>} />
        <Route path="/tone-trainer" element={<Suspense fallback={<LazyFallback />}><HoursReturnStrip /><ToneTrainer /><HoursReturnStrip position="bottom" /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
