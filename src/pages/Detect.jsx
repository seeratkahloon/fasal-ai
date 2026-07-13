import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUpload, FaLeaf, FaSpinner } from "react-icons/fa";
import config from "../config";

const cropTypes = ["Wheat (گندم)", "Rice (چاول)", "Sugarcane (گنا)", "Cotton (کپاس)", "Maize (مکئی)", "Vegetables (سبزیاں)", "Fruits (پھل)"];

const Detect = () => {
  const [image, setImage]       = useState(null);
  const [preview, setPreview]   = useState(null);
  const [cropType, setCropType] = useState("");
  const [description, setDesc]  = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { setError("Please upload an image file."); return; }
    if (file.size > 5 * 1024 * 1024) { setError("Image must be less than 5MB."); return; }
    setError("");
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleImage({ target: { files: [file] } });
  };

  const handleSubmit = async () => {
    if (!image)    { setError("Please upload a crop image."); return; }
    if (!cropType) { setError("Please select a crop type."); return; }
    
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      
      if (!token) {
        setError("Please login first.");
        setLoading(false);
        navigate("/login");
        return;
      }

      console.log("Sending request to backend...");
      
      const formData = new FormData();
      formData.append("image",       image);
      formData.append("cropType",    cropType);
      formData.append("description", description);

      const response = await fetch(`${config.API_URL}/reports/detect`, {
        method:  "POST",
        headers: { "Authorization": `Bearer ${token}` },
        body:    formData,
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (data.success) {
        navigate("/result", {
          state: {
            disease:    data.report.disease,
            confidence: data.report.confidence,
            severity:   data.report.severity,
            crop:       data.report.cropType,
            treatment:  data.report.treatment,
            prevention: data.report.prevention,
            imageUrl:   data.report.imageUrl,
          }
        });
      } else {
        setError(data.message || "Detection failed. Try again.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Cannot connect to server. Make sure backend is running on port 5000.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-6">

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <FaLeaf /> AI Disease Detection
          </div>
          <h1 className="section-title">Upload Your Crop Image</h1>
          <p className="section-subtitle">Our AI will detect any disease and give you a full treatment plan.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-8 space-y-6">

          {/* Drag & Drop Upload */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
              preview ? "border-primary-400 bg-primary-50" : "border-gray-300 hover:border-primary-400 hover:bg-primary-50"
            }`}
            onClick={() => document.getElementById("imageInput").click()}>
            <input id="imageInput" type="file" accept="image/*" className="hidden" onChange={handleImage} />
            {preview ? (
              <div>
                <img src={preview} alt="crop preview" className="max-h-56 mx-auto rounded-xl object-cover mb-3" />
                <p className="text-primary-600 text-sm font-medium">Image uploaded ✅ — click to change</p>
              </div>
            ) : (
              <div>
                <FaUpload className="text-4xl text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">Drag & drop your crop image here</p>
                <p className="text-gray-400 text-sm mt-1">or click to browse — JPG, PNG up to 5MB</p>
              </div>
            )}
          </div>

          {/* Crop Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
            <select className="input-field" value={cropType} onChange={(e) => setCropType(e.target.value)}>
              <option value="">Select your crop</option>
              {cropTypes.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe the Problem <span className="text-gray-400">(optional)</span>
            </label>
            <textarea rows={3}
              placeholder="e.g. Yellow spots on leaves, wilting, unusual color..."
              className="input-field resize-none"
              value={description}
              onChange={(e) => setDesc(e.target.value)} />
          </div>

          {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>}

          <button onClick={handleSubmit} disabled={loading}
            className={`btn-primary w-full flex items-center justify-center gap-2 text-base ${loading ? "opacity-70 cursor-not-allowed" : ""}`}>
            {loading ? <><FaSpinner className="animate-spin" /> Analyzing Image...</> : "Detect Disease with AI"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detect;