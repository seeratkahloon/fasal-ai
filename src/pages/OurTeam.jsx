import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const team = [
  {
    name: "Seerat Fatima",
    role: "Project Lead / Backend",
    bio: "Owns the API, model integration, and deployment.",
    initials: "SF",
  },
  {
    name: "Aleena Faiz",
    role: "Frontend Engineer",
    bio: "Builds and maintains the web app you're using right now.",
    initials: "AF",
  },
  {
    name: "Aqsa Riaz",
    role: "ML Engineer",
    bio: "Trains and evaluates the disease detection models.",
    initials: "AR",
  },
  {
    name: "DR.Ahmed Mustafa",
    role: "Project Supervisor",
    bio: "Guides scope, research direction, and evaluation.",
    initials: "AM",
  },
];

const TeamCard = ({ member }) => (
  <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
    <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 font-display font-bold text-lg flex items-center justify-center mx-auto mb-4">
      {member.initials}
    </div>
    <h3 className="font-semibold text-gray-900">{member.name}</h3>
    <p className="text-green-600 text-sm font-medium mb-2">{member.role}</p>
    <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
    <div className="flex items-center justify-center gap-3">
      <a href="#" className="text-gray-400 hover:text-green-600 transition">
        <FaLinkedin />
      </a>
      <a href="#" className="text-gray-400 hover:text-green-600 transition">
        <FaGithub />
      </a>
      <a href="#" className="text-gray-400 hover:text-green-600 transition">
        <FaEnvelope />
      </a>
    </div>
  </div>
);

const OurTeam = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="bg-[#0B2B1E] text-white">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="font-display font-bold text-3xl sm:text-4xl mb-3">
          The team behind FasalAI
        </h1>
        <p className="text-green-200/70">
          A small final year project team building crop advisory tools for Pakistani farmers.
        </p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <TeamCard key={i} member={member} />
        ))}
      </div>
    </div>
  </div>
);

export default OurTeam;
