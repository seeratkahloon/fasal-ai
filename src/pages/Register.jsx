import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSeedling, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [form, setForm]         = useState({ name: "", email: "", password: "", confirm: "", cropType: "" });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);

  const cropTypes = ["Wheat (گندم)", "Rice (چاول)", "Sugarcane (گنا)", "Cotton (کپاس)", "Maize (مکئی)", "Vegetables (سبزیاں)", "Fruits (پھل)", "Other"];

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
    const response = await fetch("http://localhost:5000/api/auth/register", {
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
    setErrors({ email: "Server error. Make sure backend is running on port 5000." });
  }
  setLoading(false);
};

  const field = (key, label, type = "text", placeholder = "") => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input-field ${errors[key] ? "border-red-400" : ""}`}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
      />
      {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary-700 font-display font-bold text-2xl mb-2">
            <FaSeedling className="text-primary-500" /> FasalAI
          </div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 text-sm mt-1">Start protecting your crops today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {field("name",  "Full Name",      "text",  "Ahmad Ali")}
          {field("email", "Email Address",  "email", "you@example.com")}

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Min 6 characters"
                className={`input-field pr-12 ${errors.password ? "border-red-400" : ""}`}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {field("confirm", "Confirm Password", showPass ? "text" : "password", "Re-enter password")}

          {/* Crop Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Main Crop Type</label>
            <select
              className={`input-field ${errors.cropType ? "border-red-400" : ""}`}
              value={form.cropType}
              onChange={(e) => setForm({ ...form, cropType: e.target.value })}>
              <option value="">Select your main crop</option>
              {cropTypes.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.cropType && <p className="text-red-500 text-xs mt-1">{errors.cropType}</p>}
          </div>

          <button type="submit"
            className={`btn-primary w-full ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-primary-600 font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
