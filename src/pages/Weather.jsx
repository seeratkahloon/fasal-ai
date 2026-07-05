import React, { useState, useEffect } from "react";
import { FaCloudSun, FaWind, FaTint, FaThermometerHalf, FaSearch, FaSpinner } from "react-icons/fa";

const Weather = () => {
  const [city, setCity]       = useState("Sargodha");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const fetchWeather = async (searchCity) => {
    setLoading(true);
    setError("");
    try {
      const token    = localStorage.getItem("token");
      const response = await fetch(`http://localhost:5000/api/weather?city=${searchCity || city}`, {
        headers: { "Authorization": `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setWeather(data);
      } else {
        setError(data.message || "Could not fetch weather.");
      }
    } catch {
      setError("Server error. Make sure backend is running.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather("Sargodha");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 space-y-6">

        <div className="text-center mb-8">
          <h1 className="section-title">Weather Advisory</h1>
          <p className="section-subtitle">Live weather + AI farming tips for your area.</p>
        </div>

        {/* Search */}
        <div className="flex gap-3">
          <input type="text" placeholder="Enter your city (e.g. Faisalabad)"
            className="input-field flex-grow" value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()} />
          <button onClick={() => fetchWeather()} disabled={loading}
            className="btn-primary px-5 flex items-center gap-2">
            {loading ? <FaSpinner className="animate-spin" /> : <FaSearch />}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>}

        {loading && (
          <div className="text-center py-16">
            <FaSpinner className="animate-spin text-primary-500 text-4xl mx-auto mb-3" />
            <p className="text-gray-400">Fetching weather data...</p>
          </div>
        )}

        {weather && !loading && (
          <>
            {/* Current Weather */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-primary-200 text-sm font-medium mb-1">📍 {weather.city}, Pakistan</p>
                  <div className="text-7xl font-display font-bold">{weather.current.temp}°C</div>
                  <p className="text-primary-200 mt-2">{weather.current.condition} · Feels like {weather.current.feels}°C</p>
                </div>
                <div className="text-6xl">
                  {weather.forecast[0]?.icon || "🌤️"}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 border-t border-primary-500 pt-6">
                <div className="flex items-center gap-2">
                  <FaTint className="text-primary-300" />
                  <div>
                    <div className="font-semibold">{weather.current.humidity}%</div>
                    <div className="text-xs text-primary-300">Humidity</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaWind className="text-primary-300" />
                  <div>
                    <div className="font-semibold">{weather.current.wind} km/h</div>
                    <div className="text-xs text-primary-300">Wind</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaThermometerHalf className="text-primary-300" />
                  <div>
                    <div className="font-semibold">{weather.current.feels}°C</div>
                    <div className="text-xs text-primary-300">Feels Like</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5-Day Forecast */}
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h2 className="font-display font-bold text-gray-900 text-lg mb-4">5-Day Forecast</h2>
              <div className="grid grid-cols-5 gap-3">
                {weather.forecast.map((f, i) => (
                  <div key={i} className="text-center bg-gray-50 rounded-2xl p-3">
                    <p className="text-xs text-gray-400 mb-2">{i === 0 ? "Today" : f.date}</p>
                    <div className="text-2xl mb-2">{f.icon}</div>
                    <p className="text-sm font-bold text-gray-800">{f.temp_max}°</p>
                    <p className="text-xs text-gray-400">{f.temp_min}°</p>
                    <p className="text-xs text-blue-400 mt-1">{f.rain}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Farming Advice */}
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h2 className="font-display font-bold text-gray-900 text-lg mb-4">
                🤖 AI Farming Advice
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
          </>
        )}

      </div>
    </div>
  );
};

export default Weather;