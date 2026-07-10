import React, { useState } from "react";
import { FaClock, FaArrowRight } from "react-icons/fa";

const guides = [
  {
    title: "Spotting Wheat Rust Early",
    crop: "Wheat",
    readTime: "4 min read",
    excerpt:
      "Yellow-orange pustules on leaves are the first sign — here's how to catch it before it spreads across the field.",
  },
  {
    title: "Cotton Watering Schedule by Growth Stage",
    crop: "Cotton",
    readTime: "6 min read",
    excerpt:
      "How much and how often to irrigate from sowing through boll formation, adjusted for Punjab's summer heat.",
  },
  {
    title: "Reading a Rice Leaf for Nitrogen Deficiency",
    crop: "Rice",
    readTime: "3 min read",
    excerpt:
      "Pale, yellowing leaves starting from the tip usually mean one thing. Here's how to confirm it and fix it fast.",
  },
  {
    title: "Managing Sugarcane Borer Without Overusing Pesticide",
    crop: "Sugarcane",
    readTime: "5 min read",
    excerpt:
      "A staged approach — from field sanitation to targeted spraying — that keeps borer damage down without wasting inputs.",
  },
  {
    title: "Maize Sowing Dates for Maximum Yield",
    crop: "Maize",
    readTime: "4 min read",
    excerpt:
      "Sowing a week early or late can cost you yield. Here's the ideal window for spring and autumn maize.",
  },
  {
    title: "Fixing Soil pH Before It Costs You a Harvest",
    crop: "General",
    readTime: "5 min read",
    excerpt:
      "Most nutrient deficiencies are actually a pH problem in disguise. A simple test-and-correct routine for any crop.",
  },
];

const crops = ["All", "Wheat", "Cotton", "Rice", "Sugarcane", "Maize", "General"];

const FarmingGuides = () => {
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? guides : guides.filter((g) => g.crop === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0B2B1E] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
            Farming Guides
          </h1>
          <p className="text-green-200/70">
            Practical, crop-specific advice you can act on today.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {crops.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === c
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-green-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Guide cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((g) => (
            <div
              key={g.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-md hover:border-green-300 transition"
            >
              <span className="inline-block w-fit text-xs font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full mb-3">
                {g.crop}
              </span>
              <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
                {g.title}
              </h3>
              <p className="text-gray-500 text-sm flex-1 mb-4">{g.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                <span className="flex items-center gap-1.5">
                  <FaClock /> {g.readTime}
                </span>
                <button className="flex items-center gap-1.5 text-green-600 font-medium hover:gap-2 transition-all">
                  Read <FaArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-10">
            No guides for this crop yet — check back soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default FarmingGuides;
