import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/2024-07-03.jpg'; // adjust the path if needed

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <nav className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Lumina Electric Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-orange-500 transition">Home</Link>
          <Link to="/about" className="text-white hover:text-orange-500 transition">About</Link>
          <Link to="/services" className="text-white hover:text-orange-500 transition">Services</Link>
          <Link to="/reviews" className="text-white hover:text-orange-500 transition">Reviews</Link>
          <Link to="/contact" className="text-white hover:text-orange-500 transition">Contact</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-3">
          <Link to="/" className="block text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" className="block text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/reviews" className="block text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <Link to="/contact" className="block text-white hover:text-orange-500" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;

