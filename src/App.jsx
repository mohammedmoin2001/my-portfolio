import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen text-gray-800">
        <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-blue-600">Mohamad Moin</h1>
          <div className="space-x-6">
            <Link to="/" className="hover:text-blue-600"><strong>Home</strong></Link>
            <Link to="/about" className="hover:text-blue-600"><strong>About</strong></Link>
            <Link to="/skills" className="hover:text-blue-600"><strong>Skills</strong></Link>
            <Link to="/projects" className="hover:text-blue-600"><strong>Projects</strong></Link>
            <Link to="/contact" className="hover:text-blue-600"><strong>Contact</strong></Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
