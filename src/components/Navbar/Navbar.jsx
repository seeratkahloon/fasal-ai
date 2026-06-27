import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSeedling, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home",     to: "/" },
    { label: "Features", to: "/#features" },
    { label: "How It Works", to: "/#how-it-works" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-primary-700 font-display font-bold text-xl">
          <FaSeedling className="text-primary-500 text-2xl" />
          FasalAI
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.to}
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login"    className="btn-outline py-2 px-5 text-sm">Login</Link>
          <Link to="/register" className="btn-primary py-2 px-5 text-sm">Get Started</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.to}
              className="text-gray-700 font-medium hover:text-primary-600"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <Link to="/login"    className="btn-outline text-center text-sm" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/register" className="btn-primary text-center text-sm" onClick={() => setMenuOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
