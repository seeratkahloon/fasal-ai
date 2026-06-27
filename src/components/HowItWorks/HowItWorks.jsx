import React from "react";

const steps = [
  { emoji: "📸", title: "Upload Crop Image", desc: "Take a photo of your crop showing the affected area and upload it." },
  { emoji: "🤖", title: "AI Analyzes It",    desc: "Our AI model scans the image and detects any disease or problem instantly." },
  { emoji: "📋", title: "Get Full Report",   desc: "Receive the disease name, confidence %, treatment plan, and prevention tips." },
  { emoji: "☀️", title: "Weather Advisory",  desc: "Get daily farming tips based on your local weather forecast." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-primary-50">
    <div className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Four simple steps to protect your crops with AI.</p>
      </div>

      <div className="relative">
        {/* Connector Line (desktop) */}
        <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-primary-200 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white border-4 border-primary-200 rounded-full flex items-center justify-center text-3xl shadow-md mb-4">
                {step.emoji}
              </div>
              <div className="text-xs font-bold text-primary-500 mb-1">STEP {i + 1}</div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
