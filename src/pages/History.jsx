import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaLeaf, FaChevronRight, FaFileAlt, FaSpinner } from "react-icons/fa";


const severityStyle = {
  High:     "bg-red-100 text-red-600",
  Moderate: "bg-yellow-100 text-yellow-600",
  Low:      "bg-blue-100 text-blue-600",
  None:     "bg-green-100 text-green-600",
};

const History = () => {
  const [reports, setReports] = useState([]);
  const [search, setSearch]   = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState("");

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const token    = localStorage.getItem("token");
      const response = await fetch("config.API_URL/api/reports", {
        headers: { "Authorization": `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setReports(data.reports);
      } else {
        setError("Could not fetch reports.");
      }
    } catch {
      setError("Server error. Make sure backend is running.");
    }
    setLoading(false);
  };

  const filtered = reports.filter((r) =>
    r.disease.toLowerCase().includes(search.toLowerCase()) ||
    r.cropType.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-PK", {
      year: "numeric", month: "short", day: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-gray-900">Report History</h1>
            <p className="text-gray-500 text-sm mt-1">{reports.length} total detections</p>
          </div>
          <Link to="/detect" className="btn-primary text-sm py-2 px-4">+ New Scan</Link>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search by disease or crop..."
            className="input-field pl-10"
            value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <FaSpinner className="animate-spin text-primary-500 text-4xl mx-auto mb-3" />
            <p className="text-gray-400">Loading reports...</p>
          </div>
        )}

        {/* Error */}
        {error && <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{error}</p>}

        {/* Reports List */}
        {!loading && (
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <FaFileAlt className="text-5xl mx-auto mb-3" />
                <p className="font-medium">No reports found.</p>
                <p className="text-sm mt-1">Upload a crop image to get started!</p>
                <Link to="/detect" className="btn-primary inline-block mt-4 text-sm">
                  Detect Disease
                </Link>
              </div>
            ) : (
              filtered.map((r) => (
                <Link key={r._id} to={`/history/${r._id}`}
                  className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition group">
                  <div className="flex items-center gap-4">
                    {r.imageUrl ? (
                      <img src={r.imageUrl} alt={r.disease}
                        className="w-12 h-12 rounded-xl object-cover" />
                    ) : (
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                        <FaLeaf className="text-primary-500 text-xl" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900">{r.disease}</h3>
                      <p className="text-sm text-gray-400">{r.cropType} · {formatDate(r.createdAt)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${severityStyle[r.severity] || "bg-gray-100 text-gray-600"}`}>
                      {r.severity}
                    </span>
                    <span className="text-sm text-gray-400 font-medium">{r.confidence}%</span>
                    <FaChevronRight className="text-gray-300 group-hover:text-primary-500 transition" />
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
