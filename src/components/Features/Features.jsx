import React from "react";
import { motion } from "framer-motion";
import { FaMicroscope, FaCloudSun, FaRobot, FaLanguage, FaChartLine, FaLeaf } from "react-icons/fa";

const features = [
  { icon: <FaMicroscope className="text-3xl text-green-600" />, title: "Disease Detection",    desc: "Upload a crop image and AI instantly identifies diseases with confidence score and treatment plan.",    bg: "bg-green-50" },
  { icon: <FaRobot      className="text-3xl text-green-600" />, title: "AI Advisory Chatbot",  desc: "Ask any farming question in Urdu or English and get expert AI-powered answers instantly.",            bg: "bg-white"    },
  { icon: <FaCloudSun   className="text-3xl text-green-600" />, title: "Weather-Based Tips",   desc: "Get farming advice tailored to your local weather — irrigation, spraying, harvesting alerts.",        bg: "bg-green-50" },
  { icon: <FaLanguage   className="text-3xl text-green-600" />, title: "Urdu / English",       desc: "Fully bilingual interface so every farmer in Pakistan can use it comfortably.",                        bg: "bg-white"    },
  { icon: <FaChartLine  className="text-3xl text-green-600" />, title: "Report History",       desc: "Track all past disease detections and AI advisories in your personal dashboard.",                      bg: "bg-green-50" },
  { icon: <FaLeaf       className="text-3xl text-green-600" />, title: "Seasonal Crop Tips",   desc: "Curated tips based on the current season, your region, and your crop type.",                          bg: "bg-white"    },
];

const Features = () => (
  <section id="features" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">

      <motion.div className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
          Why FasalAI
        </span>
        <h2 className="font-display text-4xl font-bold text-gray-900">Built for Pakistani Farmers</h2>
        <p className="text-gray-500 text-lg mt-3 max-w-xl mx-auto">
          Powered by AI, designed for simplicity — from disease detection to daily weather tips.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={f.title}
            className={`${f.bg} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 group`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition">
              {f.icon}
            </div>
            <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;