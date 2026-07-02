import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaCheckCircle, FaExclamationTriangle, FaLeaf, FaDownload, FaRedo } from "react-icons/fa";

const Result = () => {
  const { state } = useLocation();

  // Default demo data if accessed directly
  const disease    = state?.disease    || "Leaf Rust";
  const confidence = state?.confidence || 94;
  const crop       = state?.crop       || "Wheat (گندم)";

  const severityColor = confidence > 85 ? "text-red-500" : confidence > 60 ? "text-yellow-500" : "text-green-500";
  const severityLabel = confidence > 85 ? "High Severity" : confidence > 60 ? "Moderate" : "Low Severity";

  const treatments = [
    "Remove and destroy infected plant parts immediately.",
    "Apply fungicide spray (Mancozeb or Propiconazole) every 10–14 days.",
    "Avoid overhead irrigation — water at the base of plants.",
    "Ensure proper spacing between plants for air circulation.",
    "Monitor surrounding crops for early signs of spread.",
  ];

  const prevention = [
    "Use disease-resistant seed varieties next season.",
    "Rotate crops annually to break disease cycles.",
    "Apply balanced fertilizer — avoid excess nitrogen.",
    "Inspect crops weekly especially during humid weather.",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 space-y-6">

        {/* Result Header */}
        <div className="bg-white rounded-3xl shadow-md p-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaExclamationTriangle className="text-red-400 text-xl" />
                <span className="text-sm font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full">{severityLabel}</span>
              </div>
              <h1 className="font-display text-3xl font-bold text-gray-900">{disease}</h1>
              <p className="text-gray-500 mt-1">Detected in <span className="font-medium text-primary-600">{crop}</span></p>
            </div>

            {/* Confidence Circle */}
            <div className="text-center">
              <div className={`text-4xl font-display font-bold ${severityColor}`}>{confidence}%</div>
              <div className="text-xs text-gray-400 mt-1">AI Confidence</div>
            </div>
          </div>

          {/* Confidence Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Detection Confidence</span><span>{confidence}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div className="bg-primary-500 h-3 rounded-full transition-all duration-700"
                style={{ width: `${confidence}%` }} />
            </div>
          </div>
        </div>

        {/* Treatment Plan */}
        <div className="bg-white rounded-3xl shadow-md p-8">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            💊 Treatment Plan
          </h2>
          <ul className="space-y-3">
            {treatments.map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prevention Tips */}
        <div className="bg-primary-50 rounded-3xl shadow-md p-8">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            🛡️ Prevention Tips
          </h2>
          <ul className="space-y-3">
            {prevention.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaLeaf className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/detect" className="btn-outline flex items-center justify-center gap-2 flex-1">
            <FaRedo /> Scan Another Crop
          </Link>
          <button className="btn-primary flex items-center justify-center gap-2 flex-1">
            <FaDownload /> Download Report (PDF)
          </button>
        </div>

      </div>
    </div>
  );
};

export default Result;
