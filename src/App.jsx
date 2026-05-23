import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HoursTool from './components/hours-tool.jsx';
import Psalter from './components/psalter.jsx';
import Scripture from './components/scripture.jsx';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
