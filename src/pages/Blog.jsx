import React from "react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const posts = [
  {
    title: "How We Trained FasalAI's Disease Detection Model",
    date: "June 2026",
    tag: "Behind the Scenes",
    excerpt:
      "A look at the dataset, the challenges of Pakistani field conditions, and how we tuned accuracy for the crops farmers here actually grow.",
    featured: true,
  },
  {
    title: "Why Rain in Punjab Isn't What It Used to Be",
    date: "May 2026",
    tag: "Weather",
    excerpt:
      "Rainfall patterns have shifted noticeably over the last decade. Here's what that means for irrigation planning this season.",
  },
  {
    title: "Three Farmers, Three Ways They Use the Chatbot",
    date: "April 2026",
    tag: "Community",
    excerpt:
      "From diagnosing a sudden leaf curl to planning next season's sowing — real conversations, lightly edited.",
  },
  {
    title: "What Our First 1,000 Uploads Taught Us",
    date: "March 2026",
    tag: "Product",
    excerpt:
      "The most common crops, the most common mistakes in photos, and what we changed in the app because of it.",
  },
];

const featured = posts.find((p) => p.featured);
const rest = posts.filter((p) => !p.featured);

const Blog = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-[#0B2B1E] text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          The FasalAI Blog
        </h1>
        <p className="text-green-200/70">
          Notes on crops, weather, and building AI for the field.
        </p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto px-6 py-14">
      {/* Featured post */}
      {featured && (
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-10 hover:shadow-md transition">
          <span className="inline-block text-xs font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full mb-3">
            {featured.tag}
          </span>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900 mb-2">
            {featured.title}
          </h2>
          <p className="text-gray-500 text-sm mb-4 max-w-2xl">{featured.excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <FaCalendarAlt /> {featured.date}
            </span>
            <button className="flex items-center gap-1.5 text-green-600 text-sm font-medium hover:gap-2 transition-all">
              Read post <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      )}

      {/* Other posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {rest.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:shadow-md hover:border-green-300 transition"
          >
            <span className="inline-block w-fit text-xs font-medium text-green-700 bg-green-100 px-2.5 py-1 rounded-full mb-3">
              {p.tag}
            </span>
            <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
              {p.title}
            </h3>
            <p className="text-gray-500 text-sm flex-1 mb-4">{p.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt /> {p.date}
              </span>
              <button className="flex items-center gap-1.5 text-green-600 font-medium hover:gap-2 transition-all">
                Read <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
