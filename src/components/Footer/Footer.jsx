import React from "react";
import { FaSeedling, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary-900 text-white pt-14 pb-8">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Brand */}
      <div>
        <div className="flex items-center gap-2 text-xl font-display font-bold mb-3">
          <FaSeedling className="text-primary-400" /> FasalAI
        </div>
        <p className="text-primary-200 text-sm leading-relaxed">
          AI-powered crop advisory helping farmers grow smarter, healthier crops.
        </p>
        <div className="flex gap-4 mt-5 text-primary-300 text-xl">
          <FaFacebook className="hover:text-white cursor-pointer transition" />
          <FaTwitter  className="hover:text-white cursor-pointer transition" />
          <FaInstagram className="hover:text-white cursor-pointer transition" />
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
        <ul className="space-y-2 text-primary-300 text-sm">
          {["Home", "Features", "How It Works", "Dashboard"].map((item) => (
            <li key={item}>
              <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                className="hover:text-white transition">{item}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold text-white mb-4">Contact</h4>
        <ul className="text-primary-300 text-sm space-y-2">
          <li>📧 kahloonseerat13@gmail.com</li>
          <li>📞 +92 321 6281077</li>
          <li>📍 Sargodha, Punjab, Pakistan</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-700 mt-10 pt-6 text-center text-primary-400 text-sm">
      © {new Date().getFullYear()} FasalAI. Final Year Project — Software Engineering.
    </div>
  </footer>
);

export default Footer;
