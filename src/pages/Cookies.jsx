import React from "react";

const cookieTypes = [
  {
    name: "Essential",
    always: true,
    description:
      "Required for the app to function — keeping you logged in and remembering your session.",
  },
  {
    name: "Preferences",
    always: false,
    description:
      "Remembers settings like your chosen language (English/Urdu) so you don't have to reset it each visit.",
  },
  {
    name: "Analytics",
    always: false,
    description:
      "Helps us understand which features are used most, so we can prioritize what to improve.",
  },
];

const Cookies = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-[#0B2B1E] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          Cookie Policy
        </h1>
        <p className="text-green-200/70 text-sm">Last updated: July 2026</p>
      </div>
    </div>

    <div className="max-w-3xl mx-auto px-6 py-14">
      <p className="text-gray-600 leading-relaxed mb-10">
        FasalAI uses a small number of cookies to keep the app working smoothly
        and to understand how it's used. Here's a plain breakdown of what we use
        and why.
      </p>

      <div className="space-y-4 mb-10">
        {cookieTypes.map((c) => (
          <div
            key={c.name}
            className="bg-white rounded-2xl border border-gray-200 p-6 flex items-start justify-between gap-4"
          >
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{c.name}</h3>
              <p className="text-gray-500 text-sm">{c.description}</p>
            </div>
            <span
              className={`flex-shrink-0 text-xs font-medium px-3 py-1 rounded-full ${
                c.always
                  ? "bg-gray-100 text-gray-500"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {c.always ? "Always on" : "Optional"}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="font-semibold text-gray-900 text-lg mb-2">
            Managing cookies
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Essential cookies can't be turned off, since the app won't function
            correctly without them. You can disable preference and analytics
            cookies at any time from your browser settings.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 text-lg mb-2">Contact</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Questions about this policy can be sent to support@fasalai.com.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Cookies;
