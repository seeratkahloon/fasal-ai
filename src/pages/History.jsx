import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaLeaf, FaChevronRight, FaFileAlt } from "react-icons/fa";

const mockReports = [
  { id: 1, disease: "Leaf Rust",        crop: "Wheat",     confidence: 94, date: "2026-06-25", severity: "High"     },
  { id: 2, disease: "Cotton Boll Worm", crop: "Cotton",    confidence: 87, date: "2026-06-20", severity: "High"     },
  { id: 3, disease: "Rice Blast",       crop: "Rice",      confidence: 72, date: "2026-06-15", severity: "Moderate" },
  { id: 4, disease: "Powdery Mildew",   crop: "Vegetables",confidence: 65, date: "2026-06-10", severity: "Moderate" },
  { id: 5, disease: "No Disease Found", crop: "Maize",     confidence: 98, date: "2026-06-05", severity: "None"     },
];

const severityStyle = {
  High:     "bg-red-100 text-red-600",
  Moderate: "bg-yellow-100 text-yellow-600",
  None:     "bg-green-100 text-green-600",
};

const History = () => {
  const [search, setSearch] = useState("");

  const filtered = mockReports.filter((r) =>
    r.disease.toLowerCase().includes(search.toLowerCase()) ||
    r.crop.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-gray-900">Report History</h1>
            <p className="text-gray-500 text-sm mt-1">{mockReports.length} total detections</p>
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

        {/* Reports List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <FaFileAlt className="text-5xl mx-auto mb-3" />
              <p>No reports found.</p>
            </div>
          ) : (
            filtered.map((r) => (
              <Link key={r.id} to={`/history/${r.id}`}
                className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between hover:shadow-md transition group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <FaLeaf className="text-primary-500 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{r.disease}</h3>
                    <p className="text-sm text-gray-400">{r.crop} · {r.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${severityStyle[r.severity]}`}>
                    {r.severity}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">{r.confidence}%</span>
                  <FaChevronRight className="text-gray-300 group-hover:text-primary-500 transition" />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
