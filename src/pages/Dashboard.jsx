import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaMicroscope, FaCloudSun, FaHistory, FaRobot, FaSeedling, FaUser } from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser]       = useState(null);
  const [stats, setStats]     = useState({ total: 0, diseases: 0, healthy: 0 });
  const [reports, setReports] = useState([]);
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
      const response = await fetch(`${config.API_URL}/reports`, {
        headers: { "Authorization": `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        const total    = data.reports.length;
        const healthy  = data.reports.filter((r) => r.disease === "No Disease Found").length;
        const diseases = total - healthy;
        setStats({ total, diseases, healthy });
        setReports(data.reports.slice(0, 3));
      }
    } catch {
      console.log("Could not fetch stats");
    }
    setLoading(false);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const severityColor = (s) => {
    if (s === "High")     return { dot: "bg-red-500",    badge: "bg-red-50 text-red-600" };
    if (s === "Moderate") return { dot: "bg-yellow-500", badge: "bg-yellow-50 text-yellow-700" };
    return                       { dot: "bg-green-500",  badge: "bg-green-50 text-green-700" };
  };

  const actions = [
    { icon: <FaMicroscope className="text-green-400 text-xl" />, title: "Detect Disease",   sub: "Upload crop photo",    to: "/detect",  dark: true },
    { icon: <FaRobot      className="text-green-500 text-xl" />, title: "AI Chatbot",       sub: "Ask anything",         to: "/chat",    dark: false },
    { icon: <FaCloudSun   className="text-green-500 text-xl" />, title: "Weather",          sub: "Live farming tips",    to: "/weather", dark: false },
    { icon: <FaHistory    className="text-green-500 text-xl" />, title: "History",          sub: "Past reports",         to: "/history", dark: false },
    { icon: <FaSeedling   className="text-green-500 text-xl" />, title: "Farming Tips",     sub: "Seasonal advice",      to: "/tips",    dark: false },
    { icon: <FaUser       className="text-green-500 text-xl" />, title: "My Profile",       sub: "Edit account",         to: "/profile", dark: false },
  ];

  return (
    <div className="min-h-screen bg-[#f5f0e8]">

      {/* Dark Header */}
      <div className="bg-green-950 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-400 text-sm font-semibold mb-2">
            Welcome back 👋
          </p>
          <h1 className="font-display text-4xl font-bold text-white mb-1">
            {user?.name || "Farmer"}
          </h1>
          <p className="text-green-300 text-sm">
            Crop: <span className="text-green-400 font-medium">{user?.cropType || "Not set"}</span>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-8 pb-16">

        {/* Stats */}
      
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <p className="text-gray-400 text-xs font-medium mb-1">Total Scans</p>
            <p className="font-display text-3xl font-bold text-gray-900">
              {loading ? "..." : stats.total}
            </p>
            <div className="w-8 h-1 bg-green-500 rounded-full mt-2" />
          </div>
          <div className="bg-green-950 rounded-2xl p-5 shadow-sm">
            <p className="text-green-400 text-xs font-medium mb-1">Diseases Found</p>
            <p className="font-display text-3xl font-bold text-white">
              {loading ? "..." : stats.diseases}
            </p>
            <div className="w-8 h-1 bg-green-400 rounded-full mt-2" />
          </div>
          <div className="bg-green-600 rounded-2xl p-5 shadow-sm">
            <p className="text-green-100 text-xs font-medium mb-1">Healthy Crops</p>
            <p className="font-display text-3xl font-bold text-white">
              {loading ? "..." : stats.healthy}
            </p>
            <div className="w-8 h-1 bg-white rounded-full mt-2" />
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {actions.map((a) => (
            <Link key={a.title} to={a.to}
              className={`rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-200 border ${
                a.dark
                  ? "bg-green-950 border-green-950"
                  : "bg-white border-gray-100"
              }`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                a.dark ? "bg-green-900" : "bg-green-50"
              }`}>
                {a.icon}
              </div>
              <div className="flex-grow min-w-0">
                <p className={`font-semibold text-sm ${a.dark ? "text-white" : "text-gray-900"}`}>{a.title}</p>
                <p className={`text-xs mt-0.5 ${a.dark ? "text-green-400" : "text-gray-400"}`}>{a.sub}</p>
              </div>
              <span className={`text-lg flex-shrink-0 ${a.dark ? "text-green-400" : "text-gray-300"}`}>→</span>
            </Link>
          ))}
        </div>

        {/* Recent Detections */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Recent Detections</h2>
          <Link to="/history" className="text-green-600 text-xs font-semibold hover:underline">View all →</Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-6">
          {reports.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <p className="text-3xl mb-2">🌱</p>
              <p className="text-sm">No scans yet — detect your first crop!</p>
              <Link to="/detect" className="text-green-600 text-xs font-semibold mt-2 inline-block hover:underline">
                Start scanning →
              </Link>
            </div>
          ) : (
            reports.map((r, i) => {
              const colors = severityColor(r.severity);
              return (
                <Link key={r._id} to={`/history/${r._id}`}
                  className={`flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition ${i !== reports.length - 1 ? "border-b border-gray-50" : ""}`}>
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                  <div className="flex-grow">
                    <p className="font-semibold text-sm text-gray-900">{r.disease}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {r.cropType} · {new Date(r.createdAt).toLocaleDateString()} · {r.confidence}%
                    </p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                    {r.severity}
                  </span>
                </Link>
              );
            })
          )}
        </div>

        {/* AI Tip Strip */}
        <div className="bg-green-950 rounded-2xl p-5 flex items-start gap-4">
          <span className="text-3xl">☀️</span>
          <div>
            <p className="font-semibold text-white text-sm mb-1">Today's AI Tip</p>
            <p className="text-green-300 text-sm leading-relaxed">
              High temperature expected today. Irrigate your crops before 8 AM to reduce evaporation loss and keep soil moisture optimal.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;