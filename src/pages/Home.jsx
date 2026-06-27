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
    <section className="py-24 bg-primary-700 text-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold mb-4">Ready to Protect Your Crops?</h2>
        <p className="text-primary-200 text-lg mb-8">
          Join thousands of Pakistani farmers using AI to grow healthier crops.
        </p>
        <Link to="/register" className="bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition text-lg shadow-lg inline-block">
          Get Started — It's Free
        </Link>
      </div>
    </section>
  </>
);

export default Home;
