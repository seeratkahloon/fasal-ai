import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import { Link } from "react-router-dom";

const Home = () => (
  <>
    <Hero />
    <Features />
    <HowItWorks />

    {/* CTA Section */}
    <section className="py-24 bg-green-950 text-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <span className="inline-block bg-green-800 text-green-300 text-xs font-semibold px-4 py-2 rounded-full mb-6">
          Join 10,000+ Pakistani Farmers
        </span>
        <h2 className="font-display text-4xl font-bold mb-4">
          Start Protecting Your Crops Today
        </h2>
        <p className="text-green-300 text-lg mb-8">
          Free AI-powered disease detection, live weather tips, and expert farming advice — all in one place.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/register"
            className="bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-3 rounded-xl transition shadow-lg text-sm">
            Create Free Account →
          </Link>
          <Link to="/detect"
            className="border-2 border-green-700 text-green-300 hover:bg-green-800 font-semibold px-7 py-3 rounded-xl transition text-sm">
            Try Disease Detection
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;