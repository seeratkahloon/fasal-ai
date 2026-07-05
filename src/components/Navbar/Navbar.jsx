import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSeedling, FaBars, FaTimes, FaUser, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [user, setUser]               = useState(null);
  const [dropdownOpen, setDropdown]   = useState(false);
  const dropdownRef                   = useRef(null);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const allNavLinks = [
    { label: "Home",      to: "/" },
    { label: "Detect",    to: "/detect" },
    { label: "Chat",      to: "/chat" },
    { label: "Weather",   to: "/weather" },
    { label: "History",   to: "/history" },
    { label: "Tips",      to: "/tips" },
  ];

  const guestLinks = [
    { label: "Home",         to: "/" },
    { label: "Features",     to: "/#features" },
    { label: "How It Works", to: "/#how-it-works" },
    { label: "Tips",         to: "/tips" },
  ];

  // Hide current page from navbar
  const navLinks = user
    ? allNavLinks.filter((link) => link.to !== location.pathname)
    : guestLinks.filter((link) => link.to !== location.pathname);

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
            <Link key={link.label} to={link.to}
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              {/* Profile Button */}
              <button
                onClick={() => setDropdown(!dropdownOpen)}
                className="flex items-center gap-2 hover:opacity-80 transition">
                <div className="w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-gray-600 text-sm font-medium">{user.name}</span>
                <span className="text-gray-400 text-xs">▼</span>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                  <Link to="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition"
                    onClick={() => setDropdown(false)}>
                    <FaTachometerAlt className="text-primary-500" /> Dashboard
                  </Link>
                  <Link to="/profile"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition"
                    onClick={() => setDropdown(false)}>
                    <FaUser className="text-primary-500" /> Edit Profile
                  </Link>
                  <button onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition border-t border-gray-100">
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login"    className="btn-outline py-2 px-5 text-sm">Login</Link>
              <Link to="/register" className="btn-primary py-2 px-5 text-sm">Get Started</Link>
            </>
          )}
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
            <Link key={link.label} to={link.to}
              className="text-gray-700 font-medium hover:text-primary-600"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link to="/dashboard" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
              <Link to="/profile" className="text-gray-700 font-medium" onClick={() => setMenuOpen(false)}>
                Edit Profile
              </Link>
              <button onClick={handleLogout} className="text-red-500 font-medium text-left">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login"    className="btn-outline text-center text-sm" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="btn-primary text-center text-sm" onClick={() => setMenuOpen(false)}>Get Started</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
