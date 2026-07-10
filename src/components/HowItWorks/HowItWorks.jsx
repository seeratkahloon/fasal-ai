import React from "react";
import { motion } from "framer-motion";

const steps = [
  { emoji: "📸", title: "Upload Crop Image", desc: "Take a photo of your crop showing the affected area and upload it.",                         color: "bg-green-500" },
  { emoji: "🤖", title: "AI Analyzes It",    desc: "Our AI model scans the image and detects any disease or problem instantly.",                  color: "bg-green-700" },
  { emoji: "📋", title: "Get Full Report",   desc: "Receive the disease name, confidence %, treatment plan, and prevention tips.",               color: "bg-green-500" },
  { emoji: "☀️", title: "Weather Advisory",  desc: "Get daily farming tips based on your local weather forecast.",                               color: "bg-green-700" },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-[#f5f0e8]">
    <div className="max-w-5xl mx-auto px-6">

      <motion.div className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
          Simple Process
        </span>
        <h2 className="font-display text-4xl font-bold text-gray-900">Detect Disease in 4 Simple Steps</h2>
        <p className="text-gray-500 text-lg mt-3">Four simple steps to protect your crops with AI.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, i) => (
          <motion.div key={step.title}
            className="bg-white rounded-2xl p-6 border border-gray-100 flex items-start gap-5"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}>

            <div className={`${step.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
              {step.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                  STEP {i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated connecting dots */}
      <motion.div className="flex justify-center mt-12 gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}>
        {[...Array(4)].map((_, i) => (
          <motion.div key={i}
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default HowItWorks;
