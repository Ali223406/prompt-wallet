import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Dashboard from './pages/Dashboard'; 
import About from './pages/About';
import Cgu from './pages/CGU';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        { }
        <NavMenu />

        {}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/cgu" element={<Cgu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
