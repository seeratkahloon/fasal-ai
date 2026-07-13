import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaSeedling, FaMapMarkerAlt, FaEnvelope, FaSave } from "react-icons/fa";

const cropTypes = ["Wheat (گندم)", "Rice (چاول)", "Sugarcane (گنا)", "Cotton (کپاس)", "Maize (مکئی)", "Vegetables (سبزیاں)", "Fruits (پھل)", "Other"];

const Profile = () => {
  const [form, setForm]       = useState({ name: "", email: "", cropType: "", location: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError]     = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) { navigate("/login"); return; }
    const user = JSON.parse(stored);
    setForm({
      name:     user.name     || "",
      email:    user.email    || "",
      cropType: user.cropType || "",
      location: user.location || "",
    });
  }, [navigate]);

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${config.API_URL}/auth/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          name:     form.name,
          cropType: form.cropType,
          location: form.location,
        }),
      });
      const data = await response.json();
      if (data.success) {
        // Update localStorage
        const stored = JSON.parse(localStorage.getItem("user"));
        localStorage.setItem("user", JSON.stringify({
          ...stored,
          name:     form.name,
          cropType: form.cropType,
          location: form.location,
        }));
        setSuccess("Profile updated successfully! ✅");
      } else {
        setError(data.message || "Could not update profile.");
      }
    } catch {
      setError("Server error. Make sure backend is running.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white font-display font-bold text-3xl mx-auto mb-4">
            {form.name?.charAt(0).toUpperCase()}
          </div>
          <h1 className="font-display text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-500 text-sm mt-1">{form.email}</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-md p-8 space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaUser className="inline mr-2 text-primary-500" />Full Name
            </label>
            <input type="text" className="input-field"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your full name" />
          </div>

          {/* Email (readonly) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaEnvelope className="inline mr-2 text-primary-500" />Email Address
            </label>
            <input type="email" className="input-field bg-gray-50 cursor-not-allowed"
              value={form.email} readOnly />
            <p className="text-xs text-gray-400 mt-1">Email cannot be changed.</p>
          </div>

          {/* Crop Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaSeedling className="inline mr-2 text-primary-500" />Main Crop Type
            </label>
            <select className="input-field"
              value={form.cropType}
              onChange={(e) => setForm({ ...form, cropType: e.target.value })}>
              <option value="">Select crop type</option>
              {cropTypes.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <FaMapMarkerAlt className="inline mr-2 text-primary-500" />Location
            </label>
            <input type="text" className="input-field"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="e.g. Sargodha, Punjab" />
          </div>

          {/* Messages */}
          {success && <p className="text-green-600 text-sm bg-green-50 px-4 py-2 rounded-lg">{success}</p>}
          {error   && <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>}

          {/* Save Button */}
          <button onClick={handleSubmit} disabled={loading}
            className={`btn-primary w-full flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}>
            <FaSave /> {loading ? "Saving..." : "Save Changes"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default Profile;