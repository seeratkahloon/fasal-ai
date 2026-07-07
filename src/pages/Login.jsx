import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaSeedling } from "react-icons/fa";

const Login = () => {
  const [form, setForm]         = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href = "/dashboard";
      } else {
        setErrors({ email: data.message });
      }
    } catch {
      setErrors({ email: "Server error. Make sure backend is running." });
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{ backgroundColor: "#EDEAE0" }}
    >
      <div className="w-full max-w-4xl">
        <div
          className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl"
          style={{ boxShadow: "0 20px 50px rgba(22,48,42,0.14)" }}
        >

          {/* ===== Left: form ===== */}
          <div className="flex-1 px-8 py-10 md:px-10 md:py-12 flex flex-col justify-center">

            <div
              className="inline-flex items-center gap-2 font-display font-bold text-base mb-16 w-fit"
              style={{ color: "#16302A" }}
            >
              <FaSeedling style={{ color: "#C99A44" }} />
              FasalAI
            </div>

            <p className="text-xs font-bold tracking-wide mb-1" style={{ color: "#3F6350" }}>
              WELCOME BACK
            </p>
            <h1 className="font-display text-3xl font-bold mb-6" style={{ color: "#2B2118" }}>
              Sign in
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "#2B2118" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={`input-field ${errors.email ? "border-red-400" : ""}`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "#2B2118" }}>
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Your password"
                    className={`input-field pr-12 ${errors.password ? "border-red-400" : ""}`}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">Forgot Password?</Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-3 rounded-xl transition shadow-md ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                style={{ backgroundColor: "#16302A", color: "#F1EEE4" }}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <p className="text-center text-sm mt-5" style={{ color: "#8A7F6F" }}>
              Don't have an account?{" "}
              <Link to="/register" className="font-bold hover:underline" style={{ color: "#3F6350" }}>
                Sign up
              </Link>
            </p>
          </div>

          {/* ===== Right: illustration panel ===== */}
          <div
            className="hidden md:flex flex-1 relative flex-col items-center justify-center px-6 py-8 overflow-hidden"
            style={{ backgroundColor: "#16302A", flex: "1.1" }}
          >
            {/* subtle dot texture so extra space never reads as empty */}
            <svg className="absolute inset-0 w-full h-full opacity-25" preserveAspectRatio="none">
              <defs>
                <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="1.5" cy="1.5" r="1.5" fill="#3F6350" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
            <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full" style={{ backgroundColor: "#204A3E" }} />
            <div className="absolute -bottom-12 -right-8 w-44 h-44 rounded-full" style={{ backgroundColor: "#0F241F" }} />

            <div className="relative z-10 text-center mb-4">
              <h3 className="text-xl font-display font-bold mb-2" style={{ color: "#F1EEE4" }}>
                Grow smarter with FasalAI
              </h3>
              <p className="text-[13px] leading-relaxed max-w-[270px] mx-auto" style={{ color: "#9DB3A4" }}>
                AI crop scans, disease alerts, and live weather — built for the field.
              </p>
            </div>

            <svg className="relative z-10 w-full max-w-[340px]" viewBox="0 0 320 210">
              <defs>
                <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F4CE7A" />
                  <stop offset="100%" stopColor="#C99A44" />
                </radialGradient>
              </defs>

              <circle cx="272" cy="26" r="18" fill="url(#sunGlow)" />

              <g opacity="0.6" fill="#F1EEE4">
                <ellipse cx="50" cy="38" rx="24" ry="9" />
                <ellipse cx="72" cy="32" rx="16" ry="7" />
                <ellipse cx="145" cy="24" rx="17" ry="6" />
                <ellipse cx="162" cy="20" rx="11" ry="5" />
              </g>

              <path d="M0 186 Q40 172 80 186 T160 186 T240 186 T320 186 V210 H0 Z" fill="#3F6350" opacity="0.55" />
              <rect x="0" y="196" width="320" height="14" fill="#0F241F" />

              <g stroke="#7FAE8F" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.8">
                <path d="M15 196 Q20 180 25 196" />
                <path d="M95 196 Q100 178 105 196" />
                <path d="M170 196 Q175 182 180 196" />
                <path d="M245 196 Q250 179 255 196" />
                <path d="M295 196 Q300 181 305 196" />
              </g>

              {/* farmer 1 — rake */}
              <g transform="translate(24,80)">
                <ellipse cx="35" cy="120" rx="30" ry="6" fill="#0A1815" opacity="0.4" />
                <rect x="20" y="70" width="12" height="44" rx="5" fill="#2B2118" />
                <rect x="38" y="70" width="12" height="44" rx="5" fill="#2B2118" />
                <rect x="12" y="34" width="46" height="42" rx="10" fill="#E7B65A" />
                <rect x="10" y="20" width="50" height="18" rx="6" fill="#C99A44" />
                <circle cx="35" cy="15" r="15" fill="#E3B27E" />
                <path d="M17 8 Q35 -10 53 8 L53 13 L17 13 Z" fill="#2F5644" />
                <rect x="10" y="4" width="50" height="7" rx="3" fill="#2F5644" />
                <line x1="60" y1="30" x2="86" y2="6" stroke="#8A6A46" strokeWidth="4" strokeLinecap="round" />
                <line x1="80" y1="0" x2="92" y2="12" stroke="#8A6A46" strokeWidth="4" strokeLinecap="round" />
              </g>

              {/* farmer 2 — crop basket, centered/taller */}
              <g transform="translate(115,58)">
                <ellipse cx="40" cy="140" rx="34" ry="7" fill="#0A1815" opacity="0.4" />
                <rect x="24" y="90" width="13" height="50" rx="5" fill="#2B2118" />
                <rect x="44" y="90" width="13" height="50" rx="5" fill="#2B2118" />
                <rect x="14" y="46" width="52" height="50" rx="12" fill="#F1EEE4" />
                <rect x="10" y="62" width="60" height="24" rx="8" fill="#C99A44" />
                <circle cx="40" cy="22" r="17" fill="#F0C79A" />
                <path d="M18 14 Q40 -14 62 14 L62 20 L18 20 Z" fill="#16302A" />
                <rect x="12" y="10" width="56" height="7" rx="3" fill="#16302A" />
                <rect x="28" y="96" width="26" height="20" rx="5" fill="#8A6A46" />
                <circle cx="33" cy="98" r="4" fill="#D85A30" />
                <circle cx="41" cy="96" r="4" fill="#EAB93F" />
                <circle cx="49" cy="99" r="4" fill="#639922" />
              </g>

              {/* farmer 3 — watering can */}
              <g transform="translate(210,83)">
                <ellipse cx="35" cy="115" rx="30" ry="6" fill="#0A1815" opacity="0.4" />
                <rect x="20" y="70" width="12" height="42" rx="5" fill="#2B2118" />
                <rect x="38" y="70" width="12" height="42" rx="5" fill="#2B2118" />
                <rect x="12" y="34" width="46" height="42" rx="10" fill="#4E7A61" />
                <circle cx="35" cy="16" r="15" fill="#D99B6C" />
                <rect x="10" y="8" width="50" height="10" rx="4" fill="#C99A44" />
                <circle cx="74" cy="48" r="15" fill="#E7B65A" />
                <rect x="82" y="42" width="16" height="10" rx="3" fill="#E7B65A" />
                <circle cx="60" cy="38" r="8" fill="#C99A44" />
              </g>
            </svg>

            <div className="relative z-10 flex gap-5 mt-3">
              {["Disease scan", "98% accurate", "Live weather"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-[11px]" style={{ color: "#9DB3A4" }}>
                  <span style={{ color: "#C99A44" }}>✓</span>{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;