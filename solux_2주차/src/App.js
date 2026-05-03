import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profilen from './Profilen';
import './App.css';
import About from './About';


function App() {
  return (
    <Router>
    <div className="App">
      <nav className="nav-bar">
          <Link to="/" className="nav-link">About Me</Link>
          <Link to="/experience" className="nav-link">Experience & Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Profilen />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
