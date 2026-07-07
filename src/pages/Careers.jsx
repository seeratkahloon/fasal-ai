import React from "react";
import { FaEnvelope, FaSeedling } from "react-icons/fa";

const Careers = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-[#0B2B1E] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          Careers at FasalAI
        </h1>
        <p className="text-green-200/70">
          We're a student-built final year project, not a company with open
          roles just yet — but we're always glad to hear from people who care
          about this space.
        </p>
      </div>
    </div>

    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Empty state */}
      <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center mb-10">
        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <FaSeedling className="text-green-600" />
        </div>
        <h2 className="font-semibold text-gray-900 mb-2">No open positions right now</h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          FasalAI is currently maintained by its founding student team as part
          of an academic project. If that changes, we'll list roles here first.
        </p>
      </div>

      {/* Get involved */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Want to get involved anyway?</h3>
          <p className="text-gray-500 text-sm">
            Contributors, agriculture students, and early testers are always welcome.
          </p>
        </div>
        <a
          href="mailto:support@fasalai.com"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white text-sm font-medium px-5 py-2.5 rounded-xl whitespace-nowrap"
        >
          <FaEnvelope className="text-xs" /> Reach out
        </a>
      </div>
    </div>
  </div>
);

export default Careers;
