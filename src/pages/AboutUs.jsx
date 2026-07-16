import React from "react";
import { FaSeedling, FaBullseye, FaEye, FaLeaf } from "react-icons/fa";

const stats = [
  { label: "Crops supported", value: "6+" },
  { label: "Reports analyzed", value: "1,000+" },
  { label: "Languages", value: "2" },
];

const values = [
  {
    icon: FaBullseye,
    title: "Built for the field, not the lab",
    text: "Every feature is shaped around what a farmer can realistically do with a phone camera and patchy signal.",
  },
  {
    icon: FaEye,
    title: "Clear over clever",
    text: "A recommendation is only useful if it's understandable in one read. We'd rather be plain than impressive.",
  },
  {
    icon: FaLeaf,
    title: "Local first",
    text: "Trained and tuned around Pakistani crops, seasons, and conditions — not adapted from somewhere else.",
  },
];

const AboutUs = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero */}
    <div className="bg-[#0B2B1E] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FaSeedling className="text-white text-xl" />
        </div>
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-4">
          Helping farmers make faster, more confident decisions
        </h1>
        <p className="text-green-200/70 max-w-2xl mx-auto">
          FasalAI started as a final year software engineering project with one
          question: could AI catch a crop problem before it spreads across a whole field?
        </p>
      </div>
    </div>

    {/* Stats */}
    <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm grid grid-cols-3 divide-y sm:divide-x divide-gray-100">
        {stats.map((s) => (
          <div key={s.label} className="py-6 text-center">
            <p className="font-display font-bold text-2xl text-gray-900">{s.value}</p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Story */}
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Our story</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Most crop disease goes unnoticed until it's already spread — by the time
        it's visible to the eye, it's often too late to act cheaply. We wanted
        to put that first, earliest read into the hands of the person standing
        in the field, using nothing more than a phone camera.
      </p>
      <p className="text-gray-600 leading-relaxed">
        What began as a class project grew into a working advisory tool covering
        disease detection, weather risk, and an AI chatbot that answers questions
        in Urdu and English. We're still early, and still building — this site is
        part of that ongoing work.
      </p>
    </div>

    {/* Values */}
    <div className="max-w-5xl mx-auto px-6 pb-20">
      <h2 className="font-display font-bold text-2xl text-gray-900 mb-8 text-center">
        What guides how we build
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {values.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="bg-white rounded-2xl border border-gray-200 p-6"
          >
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Icon className="text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutUs;
