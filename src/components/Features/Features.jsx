import React from "react";
import { FaMicroscope, FaCloudSun, FaRobot, FaLanguage, FaChartLine, FaLeaf } from "react-icons/fa";

const features = [
  {
    icon: <FaMicroscope className="text-3xl text-primary-600" />,
    title: "Disease Detection",
    desc: "Upload a crop image and AI instantly identifies diseases with confidence score and treatment plan.",
  },
  {
    icon: <FaRobot className="text-3xl text-primary-600" />,
    title: "AI Advisory Chatbot",
    desc: "Ask any farming question in Urdu or English and get expert AI-powered answers instantly.",
  },
  {
    icon: <FaCloudSun className="text-3xl text-primary-600" />,
    title: "Weather-Based Tips",
    desc: "Get farming advice tailored to your local weather — irrigation, spraying, harvesting alerts.",
  },
  {
    icon: <FaLanguage className="text-3xl text-primary-600" />,
    title: "Urdu / English Support",
    desc: "Fully bilingual interface so every farmer in Pakistan can use it comfortably.",
  },
  {
    icon: <FaChartLine className="text-3xl text-primary-600" />,
    title: "Report History",
    desc: "Track all past disease detections and AI advisories in your personal dashboard.",
  },
  {
    icon: <FaLeaf className="text-3xl text-primary-600" />,
    title: "Seasonal Crop Tips",
    desc: "Curated tips based on the current season, your region, and your crop type.",
  },
];

const Features = () => (
  <section id="features" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-14">
        <h2 className="section-title">Built for Pakistani Farmers</h2>
        <p className="section-subtitle">
          Powered by AI, designed for simplicity — from disease detection to daily weather tips.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="card group">
            <div className="mb-4 bg-primary-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition">
              {f.icon}
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
