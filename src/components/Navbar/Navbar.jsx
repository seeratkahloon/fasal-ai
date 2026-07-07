import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSeedling, FaBars, FaTimes, FaUser, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [user, setUser]             = useState(null);
  const [dropdownOpen, setDropdown] = useState(false);
  const dropdownRef                 = useRef(null);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    { label: "Home",    to: "/" },
    { label: "Detect",  to: "/detect" },
    { label: "Chat",    to: "/chat" },
    { label: "Weather", to: "/weather" },
    { label: "History", to: "/history" },
    { label: "Tips",    to: "/tips" },
  ];

  const guestLinks = [
    { label: "Home",         to: "/" },
    { label: "Features",     to: "/#features" },
    { label: "How It Works", to: "/#how-it-works" },
    { label: "Tips",         to: "/tips" },
  ];

  const navLinks = user
    ? allNavLinks.filter((l) => l.to !== location.pathname)
    : guestLinks.filter((l) => l.to !== location.pathname);

  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isTransparent
        ? "bg-transparent"
        : "bg-green-950 shadow-lg"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-white font-display font-bold text-xl">
          <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
            <FaSeedling className="text-white text-lg" />
          </div>
          FasalAI
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to}
              className="text-green-100 hover:text-green-400 font-medium transition-colors text-sm">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Auth */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setDropdown(!dropdownOpen)}
                className="flex items-center gap-2 hover:opacity-80 transition">
                <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-green-100 text-sm font-medium">{user.name}</span>
                <span className="text-green-400 text-xs">▼</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                  <div className="px-4 py-3 bg-green-950">
                    <p className="text-sm font-semibold text-white">{user.name}</p>
                    <p className="text-xs text-green-400 truncate">{user.email}</p>
                  </div>
                  <Link to="/dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
                    onClick={() => setDropdown(false)}>
                    <FaTachometerAlt className="text-green-500" /> Dashboard
                  </Link>
                  <Link to="/profile"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition"
                    onClick={() => setDropdown(false)}>
                    <FaUser className="text-green-500" /> Edit Profile
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
              <Link to="/login"
                className="text-green-100 hover:text-white font-semibold px-5 py-2 rounded-xl transition text-sm">
                Login
              </Link>
              <Link to="/register"
                className="bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2 rounded-xl transition text-sm shadow-lg">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-950 px-6 py-4 flex flex-col gap-4 border-t border-green-800">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to}
              className="text-green-100 font-medium hover:text-green-400"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link to="/dashboard" className="text-green-100 font-medium" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <Link to="/profile"   className="text-green-100 font-medium" onClick={() => setMenuOpen(false)}>Edit Profile</Link>
              <button onClick={handleLogout} className="text-red-400 font-medium text-left">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login"    className="text-green-100 font-medium" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="bg-green-500 text-white font-semibold px-5 py-2 rounded-xl text-center" onClick={() => setMenuOpen(false)}>Get Started</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
