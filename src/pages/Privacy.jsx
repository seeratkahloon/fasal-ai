import React from "react";

const sections = [
  {
    title: "1. What we collect",
    body: `We collect the information you provide directly — your name, email, and
farm/field details you add in Settings — along with the photos you upload
for disease detection and the messages you send to the chatbot. We also
collect basic usage data (pages visited, feature used) to understand how
the app is used.`,
  },
  {
    title: "2. How we use it",
    body: `Your data is used to run the features you request: analyzing a photo you
upload, generating a weather forecast for your field, and answering your
questions in the chatbot. Aggregated, non-identifying usage data may be
used to improve the app's accuracy and features.`,
  },
  {
    title: "3. Photo uploads",
    body: `Photos submitted for disease detection may be stored so you can view your
report history and so we can improve detection accuracy over time. You can
request deletion of your uploaded photos at any time by contacting us.`,
  },
  {
    title: "4. Sharing",
    body: `We do not sell your personal data. Information is not shared with third
parties except where required to operate the service (e.g. hosting
infrastructure) or where required by law.`,
  },
  {
    title: "5. Data retention",
    body: `Account information and reports are retained as long as your account is
active. You can request account and data deletion at any time.`,
  },
  {
    title: "6. Your choices",
    body: `You can update or delete your account information from Settings, unsubscribe
from the newsletter using the link in any email, and request a full export
or deletion of your data by contacting us directly.`,
  },
  {
    title: "7. Contact",
    body: `Questions about this policy can be sent to support@fasalai.com.`,
  },
];

const Privacy = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-[#0B2B1E] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          Privacy Policy
        </h1>
        <p className="text-green-200/70 text-sm">Last updated: July 2026</p>
      </div>
    </div>

    <div className="max-w-3xl mx-auto px-6 py-14">
      <p className="text-gray-600 leading-relaxed mb-10">
        FasalAI is a final year software engineering project. This policy
        explains what information we collect through the app, how it's used,
        and the choices you have. As a student project, our practices are
        kept intentionally simple and are described in plain terms below.
      </p>

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-semibold text-gray-900 text-lg mb-2">{s.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Privacy;
