import React, { useState } from "react";
import { FaCloudSun, FaWind, FaTint, FaThermometerHalf, FaSearch, FaSpinner } from "react-icons/fa";

const mockWeather = {
  city: "Sargodha",
  temp: 38,
  humidity: 45,
  wind: 12,
  condition: "Sunny",
  forecast: [
    { day: "Today",    icon: "☀️", high: 38, low: 26, rain: "0%" },
    { day: "Tomorrow", icon: "⛅", high: 35, low: 24, rain: "10%" },
    { day: "Wednesday",icon: "🌧️", high: 29, low: 22, rain: "80%" },
    { day: "Thursday", icon: "⛅", high: 31, low: 23, rain: "20%" },
    { day: "Friday",   icon: "☀️", high: 36, low: 25, rain: "0%" },
  ],
  advice: [
    { icon: "💧", tip: "High temperature today — irrigate your crops early morning before 7 AM." },
    { icon: "⚠️", tip: "Rain expected Wednesday — avoid pesticide spraying on Tuesday and Wednesday." },
    { icon: "🌾", tip: "Good conditions for wheat harvesting today and tomorrow." },
    { icon: "🐛", tip: "Humid conditions mid-week may increase pest activity — inspect crops Thursday." },
  ],
};

const Weather = () => {
  const [city, setCity]       = useState("");
  const [weather, setWeather] = useState(mockWeather);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!city.trim()) return;
    setLoading(true);
    // TODO: connect to backend /api/weather?city=...
    setTimeout(() => { setWeather({ ...mockWeather, city }); setLoading(false); }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 space-y-6">

        <div className="text-center mb-8">
          <h1 className="section-title">Weather Advisory</h1>
          <p className="section-subtitle">Local weather + AI farming tips for your area.</p>
        </div>

        {/* Search */}
        <div className="flex gap-3">
          <input type="text" placeholder="Enter your city (e.g. Faisalabad)"
            className="input-field flex-grow" value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} />
          <button onClick={handleSearch} disabled={loading}
            className="btn-primary px-5 flex items-center gap-2">
            {loading ? <FaSpinner className="animate-spin" /> : <FaSearch />}
          </button>
        </div>

        {/* Current Weather Card */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-primary-200 text-sm font-medium mb-1">📍 {weather.city}, Punjab</p>
              <div className="text-7xl font-display font-bold">{weather.temp}°C</div>
              <p className="text-primary-200 mt-2">{weather.condition}</p>
            </div>
            <div className="text-6xl">☀️</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 border-t border-primary-500 pt-6">
            <div className="flex items-center gap-2">
              <FaTint className="text-primary-300" />
              <div><div className="font-semibold">{weather.humidity}%</div><div className="text-xs text-primary-300">Humidity</div></div>
            </div>
            <div className="flex items-center gap-2">
              <FaWind className="text-primary-300" />
              <div><div className="font-semibold">{weather.wind} km/h</div><div className="text-xs text-primary-300">Wind</div></div>
            </div>
            <div className="flex items-center gap-2">
              <FaThermometerHalf className="text-primary-300" />
              <div><div className="font-semibold">High Heat</div><div className="text-xs text-primary-300">Alert</div></div>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h2 className="font-display font-bold text-gray-900 text-lg mb-4">5-Day Forecast</h2>
          <div className="grid grid-cols-5 gap-3">
            {weather.forecast.map((f) => (
              <div key={f.day} className="text-center bg-gray-50 rounded-2xl p-3">
                <p className="text-xs text-gray-400 mb-2">{f.day}</p>
                <div className="text-2xl mb-2">{f.icon}</div>
                <p className="text-sm font-bold text-gray-800">{f.high}°</p>
                <p className="text-xs text-gray-400">{f.low}°</p>
                <p className="text-xs text-blue-400 mt-1">{f.rain}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Farming Advice */}
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h2 className="font-display font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            🤖 AI Farming Advice for This Week
          </h2>
          <div className="space-y-3">
            {weather.advice.map((a, i) => (
              <div key={i} className="flex items-start gap-3 bg-primary-50 rounded-xl p-4">
                <span className="text-xl">{a.icon}</span>
                <p className="text-gray-700 text-sm leading-relaxed">{a.tip}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Weather;
