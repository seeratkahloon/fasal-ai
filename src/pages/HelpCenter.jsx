import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBug,
  FaCloudSun,
  FaComments,
  FaUserCog,
  FaCreditCard,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const categories = [
  {
    icon: FaBug,
    title: "Disease Detection",
    description: "Uploading photos, reading results, and what to do next.",
    to: "/faqs#detection",
  },
  {
    icon: FaCloudSun,
    title: "Weather Advisory",
    description: "How forecasts are generated and how to set alerts for your field.",
    to: "/faqs#weather",
  },
  {
    icon: FaComments,
    title: "AI Chatbot",
    description: "Getting better answers from the assistant, in Urdu or English.",
    to: "/faqs#chatbot",
  },
  {
    icon: FaUserCog,
    title: "Account & Settings",
    description: "Managing your profile, farms, and notification preferences.",
    to: "/faqs#account",
  },
  {
    icon: FaCreditCard,
    title: "Billing",
    description: "Plans, invoices, and cancelling or changing your subscription.",
    to: "/faqs#billing",
  },
];

const HelpCenter = () => {
  const [query, setQuery] = useState("");

  const filtered = query
    ? categories.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.description.toLowerCase().includes(query.toLowerCase())
      )
    : categories;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0B2B1E] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
            How can we help?
          </h1>
          <p className="text-green-200/70 mb-8">
            Search common questions or browse by topic below.
          </p>
          <div className="relative max-w-xl mx-auto">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-green-200/50 text-sm" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for help, e.g. 'upload photo'"
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#123626] border border-green-800 text-sm placeholder-green-200/40 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map(({ icon: Icon, title, description, to }) => (
            <Link
              key={title}
              to={to}
              className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-md transition"
            >
              <div className="w-11 h-11 flex-shrink-0 bg-green-100 rounded-xl flex items-center justify-center">
                <Icon className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
                <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium mt-2 group-hover:gap-2 transition-all">
                  View articles <FaArrowRight className="text-xs" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-10">
            No results for "{query}". Try a different search, or contact us below.
          </p>
        )}

        {/* Still stuck CTA */}
        <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Still stuck?</h3>
            <p className="text-gray-500 text-sm">
              Our team usually replies within a day.
            </p>
          </div>
          <a
            href="mailto:support@fasalai.com"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white text-sm font-medium px-5 py-2.5 rounded-xl whitespace-nowrap"
          >
            <FaEnvelope className="text-xs" /> Email support
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
