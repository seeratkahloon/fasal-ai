import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaArrowRight } from "react-icons/fa";

const Hero = () => (
  <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-earth-100 flex items-center pt-20">
    <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

      {/* Text */}
      <div>
        <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <FaLeaf /> AI-Powered Farming Assistant
        </span>

        <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
          Grow Smarter with <span className="text-primary-600">AI Crop</span> Advisory
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Upload a photo of your crop, describe the problem, and get instant AI-powered disease detection, 
          treatment advice, and weather-based farming tips — in Urdu or English.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/register" className="btn-primary flex items-center justify-center gap-2 text-base">
            Start for Free <FaArrowRight />
          </Link>
          <a href="#how-it-works" className="btn-outline flex items-center justify-center gap-2 text-base">
            See How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-12">
          {[
            { value: "50+", label: "Diseases Detected" },
            { value: "10K+", label: "Farmers Helped" },
            { value: "98%",  label: "Accuracy Rate" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-display font-bold text-primary-700">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Illustration Placeholder */}
      <div className="hidden md:flex justify-center">
        <div className="w-80 h-80 bg-primary-100 rounded-3xl flex items-center justify-center shadow-xl">
          <div className="text-center">
            <div className="text-8xl mb-4">🌾</div>
            <p className="text-primary-700 font-semibold">Upload. Detect. Grow.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Hero;
