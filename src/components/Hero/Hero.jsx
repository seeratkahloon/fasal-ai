import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLeaf, FaShieldAlt, FaBolt, FaUsers } from "react-icons/fa";
import heroBg from "../../assets/hero-bg.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center">

    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="farm field"
        className="w-full h-full object-cover" />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-green-950 opacity-75" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
      <div className="max-w-3xl">

        <span className="inline-flex items-center gap-2 bg-green-800 bg-opacity-80 text-green-300 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Pakistan's #1 AI Crop Assistant
        </span>

        <h1 className="font-display text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
          Smart Farming<br />
          <span className="text-green-400">Starts Here.</span>
        </h1>

        <p className="text-green-100 text-xl leading-relaxed mb-10 max-w-xl">
          Upload your crop photo and get instant AI-powered disease detection, treatment plans, and live weather advice — in Urdu or English.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
         <Link to="/register"
           className="bg-green-500 hover:bg-green-400 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-sm transition shadow-xl">Get Started Free <FaArrowRight />
         </Link>
          <a href="#how-it-works"
           className="border-2 border-white text-white hover:bg-white hover:text-green-950 font-semibold px-6 py-3 rounded-xl text-sm transition">
           See How It Works
           </a>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <FaLeaf />,     value: "50+",   label: "Diseases Detected",  bg: "bg-green-500" },
            { icon: <FaShieldAlt />,value: "98%",   label: "AI Accuracy",         bg: "bg-green-700 bg-opacity-80" },
            { icon: <FaBolt />,     value: "5sec",  label: "Instant Results",     bg: "bg-green-700 bg-opacity-80" },
            { icon: <FaUsers />,    value: "10K+",  label: "Farmers Helped",      bg: "bg-green-500" },
          ].map((s) => (
            <div key={s.label}
              className={`${s.bg} backdrop-blur-sm rounded-2xl p-5 text-white`}>
              <div className="text-2xl mb-2 text-green-200">{s.icon}</div>
              <div className="text-3xl font-display font-bold">{s.value}</div>
              <div className="text-green-200 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
        <div className="w-1 h-3 bg-white rounded-full" />
      </div>
    </div>

  </section>
);

export default Hero;