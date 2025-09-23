import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Translator from './pages/Translator';
import RandomStringGenerator from './pages/RandomStringGenerator';
import RouterDemo from './pages/RouterDemo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/random" element={<RandomStringGenerator />} />
          <Route path="/router-demo" element={<RouterDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
