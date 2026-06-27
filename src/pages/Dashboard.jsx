import React from "react";
import { FaSeedling, FaMicroscope, FaCloudSun, FaHistory, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const cards = [
  { icon: <FaMicroscope className="text-3xl text-primary-600" />, title: "Detect Disease",   desc: "Upload a crop image for AI analysis",  to: "/detect",  bg: "bg-primary-50"  },
  { icon: <FaRobot      className="text-3xl text-blue-500"    />, title: "AI Chatbot",       desc: "Ask any farming question",             to: "/chat",    bg: "bg-blue-50"     },
  { icon: <FaCloudSun   className="text-3xl text-yellow-500"  />, title: "Weather Advisory", desc: "Get today's farming weather tips",      to: "/weather", bg: "bg-yellow-50"   },
  { icon: <FaHistory    className="text-3xl text-purple-500"  />, title: "Report History",   desc: "View past detection reports",           to: "/history", bg: "bg-purple-50"   },
];

const Dashboard = () => (
  <div className="min-h-screen bg-gray-50 pt-24 pb-16">
    <div className="max-w-5xl mx-auto px-6">

      {/* Welcome */}
      <div className="mb-10">
        <h1 className="font-display text-3xl font-bold text-gray-900 mb-1">
          Welcome back, Farmer! 👋
        </h1>
        <p className="text-gray-500">What would you like to do today?</p>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {cards.map((c) => (
          <Link key={c.title} to={c.to}
            className={`card flex items-start gap-5 ${c.bg} hover:scale-[1.02] transition-transform duration-200`}>
            <div className="mt-1">{c.icon}</div>
            <div>
              <h3 className="font-display font-bold text-gray-900 text-lg">{c.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{c.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Placeholder Notice */}
      <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 text-center">
        <FaSeedling className="text-primary-500 text-4xl mx-auto mb-3" />
        <h3 className="font-display font-bold text-primary-800 text-xl mb-2">Dashboard Coming in Week 4!</h3>
        <p className="text-primary-600 text-sm">
          This dashboard shell is ready. AI detection, chatbot, and weather features will be added as per the roadmap.
        </p>
      </div>

    </div>
  </div>
);

export default Dashboard;
