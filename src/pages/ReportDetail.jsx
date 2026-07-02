import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaDownload, FaCheckCircle, FaLeaf } from "react-icons/fa";

const ReportDetail = () => {
  const { id } = useParams();

  // Mock data — replace with API call using id
  const report = {
    id,
    disease: "Leaf Rust",
    crop: "Wheat (گندم)",
    confidence: 94,
    severity: "High",
    date: "June 25, 2026",
    location: "Sargodha, Punjab",
    description: "Yellow spots on leaves, wilting observed on lower leaves.",
    treatments: [
      "Remove and destroy infected plant parts immediately.",
      "Apply fungicide spray (Mancozeb) every 10–14 days.",
      "Avoid overhead irrigation.",
      "Ensure proper plant spacing for air circulation.",
    ],
    prevention: [
      "Use disease-resistant seed varieties next season.",
      "Rotate crops annually.",
      "Apply balanced fertilizer.",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 space-y-6">

        {/* Back Button */}
        <Link to="/history" className="inline-flex items-center gap-2 text-primary-600 hover:underline text-sm font-medium">
          <FaArrowLeft /> Back to History
        </Link>

        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-md p-8">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Report #{report.id} · {report.date}</p>
              <h1 className="font-display text-3xl font-bold text-gray-900">{report.disease}</h1>
              <p className="text-gray-500 mt-1">{report.crop} · 📍 {report.location}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-red-500">{report.confidence}%</div>
              <div className="text-xs text-gray-400">Confidence</div>
            </div>
          </div>

          {report.description && (
            <div className="mt-6 bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 font-medium mb-1">Farmer's Description:</p>
              <p className="text-gray-700 text-sm italic">"{report.description}"</p>
            </div>
          )}
        </div>

        {/* Treatment */}
        <div className="bg-white rounded-3xl shadow-md p-8">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-5">💊 Treatment Plan</h2>
          <ul className="space-y-3">
            {report.treatments.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prevention */}
        <div className="bg-primary-50 rounded-3xl shadow-md p-8">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-5">🛡️ Prevention</h2>
          <ul className="space-y-3">
            {report.prevention.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaLeaf className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Download */}
        <button className="btn-primary w-full flex items-center justify-center gap-2">
          <FaDownload /> Download Full Report (PDF)
        </button>

      </div>
    </div>
  );
};

export default ReportDetail;
