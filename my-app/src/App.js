import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.js';
import About from './components/about.js';
import Reviews from './components/review.js';
import Contact from './components/contact.js';
import Service from './components/service.js';





function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );}

export default App;
