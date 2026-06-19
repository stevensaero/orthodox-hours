import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HoursTool from './components/hours-tool.jsx';
import Psalter from './components/psalter.jsx';
import Scripture from './components/scripture.jsx';
import HoursReturnStrip from './components/hours-return-strip.jsx';

// Dev/truthing tools — lazy-loaded, URL-only access
const MenaionBrowser = lazy(() => import('./components/menaion-browser.jsx'));
const PentecostarionBrowser = lazy(() => import('./components/pentecostarion-browser.jsx'));
const OctoechosBrowser = lazy(() => import('./components/octoechos-browser.jsx'));
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
        <Route path="/menaion" element={<Suspense fallback={<LazyFallback />}><HoursReturnStrip /><MenaionBrowser /><HoursReturnStrip position="bottom" /></Suspense>} />
        <Route path="/pentecostarion" element={<Suspense fallback={<LazyFallback />}><HoursReturnStrip /><PentecostarionBrowser /><HoursReturnStrip position="bottom" /></Suspense>} />
        <Route path="/octoechos" element={<Suspense fallback={<LazyFallback />}><HoursReturnStrip /><OctoechosBrowser /><HoursReturnStrip position="bottom" /></Suspense>} />
        <Route path="/tone-trainer" element={<Suspense fallback={<LazyFallback />}><HoursReturnStrip /><ToneTrainer /><HoursReturnStrip position="bottom" /></Suspense>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
