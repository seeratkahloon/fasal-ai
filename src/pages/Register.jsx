import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSeedling, FaEye, FaEyeSlash } from "react-icons/fa";

const cropTypes = ["Wheat (گندم)", "Rice (چاول)", "Sugarcane (گنا)", "Cotton (کپاس)", "Maize (مکئی)", "Vegetables (سبزیاں)", "Fruits (پھل)", "Other"];

const Register = () => {
  const [form, setForm]         = useState({ name: "", email: "", password: "", confirm: "", cropType: "" });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name)     e.name    = "Full name is required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.password || form.password.length < 6) e.password = "Password must be at least 6 characters";
    if (form.password !== form.confirm) e.confirm = "Passwords do not match";
    if (!form.cropType) e.cropType = "Please select your main crop";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setLoading(true);
    try {
      const response = await fetch("config.API_URL/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:     form.name,
          email:    form.email,
          password: form.password,
          cropType: form.cropType,
        }),
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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* Left — Form Side */}
      <div className="flex items-center justify-center px-8 py-16 bg-[#f5f0e8]">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="flex items-center gap-2 font-display font-bold text-xl text-green-900 mb-8">
            <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
              <FaSeedling className="text-white" />
            </div>
            FasalAI
          </div>

          <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Join Us</p>
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-8">Create account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" placeholder="Ahmad Ali"
                className={`w-full bg-white border ${errors.name ? "border-red-400" : "border-gray-200"} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900`}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="you@example.com"
                className={`w-full bg-white border ${errors.email ? "border-red-400" : "border-gray-200"} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} placeholder="Min 6 characters"
                  className={`w-full bg-white border ${errors.password ? "border-red-400" : "border-gray-200"} rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900`}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })} />
                <button type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPass(!showPass)}>
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input type={showPass ? "text" : "password"} placeholder="Re-enter password"
                className={`w-full bg-white border ${errors.confirm ? "border-red-400" : "border-gray-200"} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900`}
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
              {errors.confirm && <p className="text-red-500 text-xs mt-1">{errors.confirm}</p>}
            </div>

            {/* Crop Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Main Crop Type</label>
              <select
                className={`w-full bg-white border ${errors.cropType ? "border-red-400" : "border-gray-200"} rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900`}
                value={form.cropType}
                onChange={(e) => setForm({ ...form, cropType: e.target.value })}>
                <option value="">Select your main crop</option>
                {cropTypes.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.cropType && <p className="text-red-500 text-xs mt-1">{errors.cropType}</p>}
            </div>

            <button type="submit" disabled={loading}
              className={`w-full bg-green-950 hover:bg-green-800 text-white font-bold py-3 rounded-xl transition mt-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>

      {/* Right — Dark Green Side */}
      <div className="hidden md:flex bg-green-900 flex-col justify-center items-center px-12 relative overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-800 rounded-full opacity-50" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-800 rounded-full opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-800 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 text-center max-w-sm">
          {/* Farmer illustration placeholder */}
          <div className="text-8xl mb-6">🌾</div>

          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Grow smarter with FasalAI
          </h2>
          <p className="text-green-300 text-base leading-relaxed mb-8">
            AI crop scans, disease alerts, and live weather — built for the field.
          </p>

          <div className="flex justify-center gap-6 text-green-300 text-sm">
            <span> Disease scan</span>
            <span> 98% accurate</span>
            <span> Live weather</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;