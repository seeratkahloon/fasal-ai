import React, { useEffect, useState } from "react";
import { FaSeedling, FaMicroscope, FaCloudSun, FaHistory, FaRobot, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const cards = [
  { icon: <FaMicroscope className="text-3xl text-primary-600" />, title: "Detect Disease",   desc: "Upload a crop image for AI analysis",  to: "/detect",  bg: "bg-primary-50"  },
  { icon: <FaRobot      className="text-3xl text-blue-500"    />, title: "AI Chatbot",       desc: "Ask any farming question",             to: "/chat",    bg: "bg-blue-50"     },
  { icon: <FaCloudSun   className="text-3xl text-yellow-500"  />, title: "Weather Advisory", desc: "Get today's farming weather tips",      to: "/weather", bg: "bg-yellow-50"   },
  { icon: <FaHistory    className="text-3xl text-purple-500"  />, title: "Report History",   desc: "View past detection reports",           to: "/history", bg: "bg-purple-50"   },
  { icon: <FaSeedling   className="text-3xl text-green-500"   />, title: "Farming Tips",     desc: "Seasonal and crop-specific tips",       to: "/tips",    bg: "bg-green-50"    },
  { icon: <FaUser       className="text-3xl text-gray-500"    />, title: "My Profile",       desc: "Edit your account details",             to: "/profile", bg: "bg-gray-50"     },
];

const Dashboard = () => {
  const [user, setUser]     = useState(null);
  const [stats, setStats]   = useState({ total: 0, diseases: 0, healthy: 0 });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) { navigate("/login"); return; }
    setUser(JSON.parse(stored));
    fetchStats();
  }, [navigate]);

  const fetchStats = async () => {
    try {
      const token    = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/reports", {
        headers: { "Authorization": `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        const total    = data.reports.length;
        const healthy  = data.reports.filter((r) => r.disease === "No Disease Found").length;
        const diseases = total - healthy;
        setStats({ total, diseases, healthy });
      }
    } catch {
      console.log("Could not fetch stats");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Welcome */}
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-gray-900 mb-1">
            Welcome back, {user?.name || "Farmer"}! 👋
          </h1>
          <p className="text-gray-500">Crop Type: <span className="text-primary-600 font-medium">{user?.cropType || "Not set"}</span></p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

        {/* Real Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-primary-600 rounded-2xl shadow-md p-6 text-center text-white">
            <div className="font-display text-4xl font-bold mb-1">
              {loading ? "..." : stats.total}
            </div>
            <div className="text-primary-100 text-sm font-medium">Total Scans</div>
          </div>
          <div className="bg-red-500 rounded-2xl shadow-md p-6 text-center text-white">
            <div className="font-display text-4xl font-bold mb-1">
              {loading ? "..." : stats.diseases}
            </div>
            <div className="text-red-100 text-sm font-medium">Diseases Found</div>
          </div>
          <div className="bg-green-500 rounded-2xl shadow-md p-6 text-center text-white">
            <div className="font-display text-4xl font-bold mb-1">
              {loading ? "..." : stats.healthy}
            </div>
            <div className="text-green-100 text-sm font-medium">Healthy Crops</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;