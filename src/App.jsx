import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HoursTool from './components/hours-tool.jsx';
import Psalter from './components/psalter.jsx';
import Scripture from './components/scripture.jsx';

function App() {
  return (
    <BrowserRouter basename="/orthodox-hours">
      <Routes>
        <Route path="/" element={<HoursTool />} />
        <Route path="/psalter" element={<Psalter />} />
        <Route path="/psalter/:kathisma" element={<Psalter />} />
        <Route path="/scripture" element={<Scripture />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
