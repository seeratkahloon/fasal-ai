import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // TODO: wire this up to your real contact/email endpoint
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#0B2B1E] text-white">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
            Get in touch
          </h1>
          <p className="text-green-200/70">
            Questions, feedback, or found a bug? We'd like to hear about it.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Contact info */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaEnvelope className="text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-500 text-sm">support@fasalai.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaPhone className="text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-500 text-sm">+92 321 6281077</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaMapMarkerAlt className="text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Location</p>
              <p className="text-gray-500 text-sm">Sargodha, Punjab, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          {sent ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <p className="font-semibold text-gray-900 mb-1">Message sent 🌱</p>
              <p className="text-gray-500 text-sm">
                Thanks for reaching out — we'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white text-sm font-medium px-5 py-2.5 rounded-xl"
              >
                Send message <FaPaperPlane className="text-xs" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
