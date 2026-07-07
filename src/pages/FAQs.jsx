import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqGroups = [
  {
    id: "detection",
    title: "Disease Detection",
    items: [
      {
        q: "How do I check a crop for disease?",
        a: "Go to the Disease Detection page, upload or take a clear photo of the affected leaf or plant, and submit it. Results usually appear within a few seconds and include the likely disease and suggested next steps.",
      },
      {
        q: "Why did my photo get an inconclusive result?",
        a: "This usually happens with blurry images, extreme lighting, or photos taken from too far away. Try to fill the frame with the affected area in natural daylight and avoid shadows.",
      },
      {
        q: "Can I check more than one plant at a time?",
        a: "Yes — upload separate photos for each plant or leaf. We recommend one clear image per issue so the model can give an accurate reading for each.",
      },
    ],
  },
  {
    id: "weather",
    title: "Weather Advisory",
    items: [
      {
        q: "Where does the weather data come from?",
        a: "Forecasts are pulled from regional meteorological data sources and combined with crop-specific thresholds to flag conditions like frost risk, heavy rain, or heat stress.",
      },
      {
        q: "How do I set an alert for my field?",
        a: "Add your field's location in Settings, then turn on alerts from the Weather Advisory page. You'll get a notification when conditions cross a risk threshold for your selected crop.",
      },
    ],
  },
  {
    id: "chatbot",
    title: "AI Chatbot",
    items: [
      {
        q: "Can I ask the chatbot questions in Urdu?",
        a: "Yes, the assistant understands both Urdu and English. You can also mix the two in the same message.",
      },
      {
        q: "Does the chatbot remember my previous questions?",
        a: "Within a session, yes. It keeps track of what you've already discussed so you don't have to repeat context.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Settings",
    items: [
      {
        q: "How do I add a new field or farm?",
        a: "Go to Settings > Farms > Add Farm, and enter its location and the crops you're growing there. You can add as many farms as you need.",
      },
      {
        q: "Can I change the language of the app?",
        a: "Yes, switch between English and Urdu from the language toggle in the top navigation bar.",
      },
    ],
  },
  {
    id: "billing",
    title: "Billing",
    items: [
      {
        q: "Is FasalAI free to use?",
        a: "Core features like disease detection and the chatbot are free as part of this final year project. Any future paid tiers will be announced in advance.",
      },
    ],
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition"
      >
        <span className="font-medium text-gray-900 text-sm sm:text-base">{q}</span>
        <FaChevronDown
          className={`text-gray-400 text-xs flex-shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{a}</div>
      )}
    </div>
  );
};

const FAQs = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-[#0B2B1E] text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-green-200/70">
          Quick answers about detection, weather, the chatbot, and your account.
        </p>
      </div>
    </div>

    <div className="max-w-3xl mx-auto px-6 py-14 space-y-10">
      {faqGroups.map((group) => (
        <div key={group.id} id={group.id}>
          <h2 className="font-semibold text-gray-900 text-lg mb-4">{group.title}</h2>
          <div className="space-y-3">
            {group.items.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FAQs;
