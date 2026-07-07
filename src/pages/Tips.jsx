import React, { useState } from "react";

const categories = ["All", "Wheat", "Rice", "Cotton", "Vegetables", "Seasonal", "Pest Control"];

const tips = [
  { id: 1, category: "Wheat",           title: "Best Time to Sow Wheat",         body: "Sow wheat in November for best yields in Punjab. Early sowing leads to better tillering and higher production." },
  { id: 2, category: "Seasonal",        title: "Summer Irrigation Tips",          body: "In peak summer, irrigate crops early morning (before 8 AM) or evening (after 6 PM) to reduce evaporation loss." },
  { id: 3, category: "Pest Control",    title: "Natural Pest Repellents",         body: "Neem oil spray (5ml per litre of water) is an effective, low-cost organic pesticide for most common pests." },
  { id: 4, category: "Rice",            title: "Rice Transplanting Guide",        body: "Transplant rice seedlings when they are 25–30 days old. Maintain 2–3 inches of standing water during early growth." },
  { id: 5, category: "Cotton",          title: "Cotton Fertilizer Schedule",      body: "Apply DAP at sowing, then urea at 30 and 60 days after germination for optimal cotton boll development." },
  { id: 6, category: "Vegetables",      title: "Companion Planting for Veggies",  body: "Plant marigolds near tomatoes and peppers to naturally repel aphids and whiteflies without chemicals." },
  { id: 7, category: "Seasonal",        title: "Pre-Monsoon Crop Preparation",    body: "Before monsoon season, improve field drainage channels. Waterlogging for over 24 hours can kill most crops." },
  { id: 8, category: "Pest Control",    title: "Whitefly Management in Cotton",   body: "Monitor cotton leaves weekly. If whitefly count exceeds 8 per leaf, apply imidacloprid 70WS at recommended dose." },
  { id: 9, category: "Wheat",           title: "Wheat Irrigation Schedule",       body: "Wheat needs 4–6 irrigations. Critical stages: crown root initiation, tillering, jointing, flowering, and grain filling." },
];

const Tips = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? tips : tips.filter((t) => t.category === active);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-10">
          <h1 className="section-title">Farming Tips</h1>
          <p className="section-subtitle">Expert advice for every crop and season.</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((c) => (
            <button key={c} onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                active === c
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-primary-400"
              }`}>
              {c}
            </button>
          ))}
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((tip) => (
            <div key={tip.id} className="card hover:border-primary-200 border border-transparent">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{tip.emoji}</div>
                <div>
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                    {tip.category}
                  </span>
                  <h3 className="font-display font-bold text-gray-900 text-lg mt-2 mb-2">{tip.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tip.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
