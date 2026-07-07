import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSeedling,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your real newsletter/email endpoint
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#0B2B1E] text-white relative overflow-hidden">
      {/* Signature element: a thin "row" motif standing in for a plowed field line,
          separating the newsletter band from the link columns */}
      <div className="max-w-6xl mx-auto px-6 pt-14">
        <div className="bg-[#123626] border border-green-800/60 rounded-2xl px-6 sm:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl">
              Get seasonal advisory tips in your inbox
            </h3>
            <p className="text-green-200/70 text-sm mt-1">
              One short email a week — weather shifts, pest alerts, and what to check on your field next.
            </p>
          </div>

          {subscribed ? (
            <p className="text-green-400 text-sm font-medium whitespace-nowrap">
              You're subscribed. Check your inbox soon 🌱
            </p>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex w-full md:w-auto items-center gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full md:w-64 px-4 py-2.5 rounded-xl bg-[#0B2B1E] border border-green-800 text-sm placeholder-green-200/40 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white text-sm font-medium px-5 py-2.5 rounded-xl whitespace-nowrap"
              >
                Subscribe <FaArrowRight className="text-xs" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link
            to="/"
            className="flex items-center gap-2 font-display font-bold text-xl mb-4"
          >
            <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
              <FaSeedling className="text-white" />
            </div>
            FasalAI
          </Link>
          <p className="text-green-200/70 text-sm leading-relaxed mb-6">
            AI-powered crop advisory helping Pakistani farmers grow smarter, healthier crops.
          </p>
          <div className="flex gap-3">
            {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 bg-green-900/60 rounded-xl flex items-center justify-center hover:bg-green-600 transition"
              >
                <Icon className="text-green-100 text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Resources — deliberately NOT the same items as the navbar/dashboard */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
            Resources
          </h4>
          <ul className="space-y-3 text-green-200/70 text-sm">
            {[
              { label: "Help Center", to: "/help" },
              { label: "FAQs", to: "/faqs" },
              { label: "Farming Guides", to: "/guides" },
              { label: "Blog", to: "/blog" },
              { label: "API Docs", to: "/docs" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-3 text-green-200/70 text-sm">
            {[
              { label: "About Us", to: "/about" },
              { label: "Our Team", to: "/team" },
              { label: "Careers", to: "/careers" },
              { label: "Contact Us", to: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-4 text-green-200/70 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-green-500 flex-shrink-0" />
              support@fasalai.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-500 flex-shrink-0" />
              +92 321 6281077
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-500 flex-shrink-0" />
              Sargodha, Punjab, Pakistan
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-900/60 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-green-200/50 text-sm">
          <p>© {new Date().getFullYear()} FasalAI — Final Year Project, Software Engineering</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms</Link>
            <Link to="/cookies" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

