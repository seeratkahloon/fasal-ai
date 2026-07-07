import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const endpoints = [
  {
    method: "POST",
    path: "/api/detect",
    description: "Upload an image of a crop leaf and get a disease prediction with confidence score.",
    body: `{
  "image": "<base64 or multipart file>",
  "crop": "wheat"
}`,
    response: `{
  "disease": "Yellow Rust",
  "confidence": 0.94,
  "recommendation": "Apply fungicide within 3-5 days"
}`,
  },
  {
    method: "POST",
    path: "/api/chat",
    description: "Send a message to the AI advisory chatbot and receive a contextual reply.",
    body: `{
  "message": "Why are my rice leaves turning yellow?",
  "sessionId": "abc123"
}`,
    response: `{
  "reply": "This is often a sign of nitrogen deficiency...",
  "sessionId": "abc123"
}`,
  },
  {
    method: "GET",
    path: "/api/weather",
    description: "Get the current forecast and risk flags for a saved field location.",
    body: `?fieldId=42`,
    response: `{
  "temp": 34,
  "condition": "Sunny",
  "riskAlerts": ["Heat stress"]
}`,
  },
  {
    method: "GET",
    path: "/api/history",
    description: "Retrieve a user's past detection reports, most recent first.",
    body: `?userId=17&limit=10`,
    response: `{
  "reports": [
    { "id": 101, "disease": "Leaf Blight", "date": "2026-06-12" }
  ]
}`,
  },
];

const methodColor = {
  GET: "bg-blue-100 text-blue-700",
  POST: "bg-green-100 text-green-700",
};

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-[#0B2B1E] rounded-xl p-4 text-xs sm:text-sm text-green-100 font-mono overflow-x-auto">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-green-300 hover:text-white transition"
        aria-label="Copy code"
      >
        {copied ? <FaCheck /> : <FaCopy />}
      </button>
      <pre className="whitespace-pre-wrap pr-6">{code}</pre>
    </div>
  );
};

const ApiDocs = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-[#0B2B1E] text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          API Documentation
        </h1>
        <p className="text-green-200/70">
          Endpoints powering FasalAI's detection, chat, and weather features.
        </p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm rounded-xl p-4">
        This is a project-level API used internally by the FasalAI app. It is not
        currently open for third-party/public access.
      </div>

      {endpoints.map((ep) => (
        <div
          key={ep.path}
          className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`px-2.5 py-1 rounded-md text-xs font-semibold ${methodColor[ep.method]}`}
            >
              {ep.method}
            </span>
            <code className="text-gray-900 font-mono text-sm sm:text-base">
              {ep.path}
            </code>
          </div>
          <p className="text-gray-500 text-sm mb-5">{ep.description}</p>

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            {ep.method === "GET" ? "Query Parameters" : "Request Body"}
          </p>
          <CodeBlock code={ep.body} />

          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-5">
            Example Response
          </p>
          <CodeBlock code={ep.response} />
        </div>
      ))}
    </div>
  </div>
);

export default ApiDocs;
