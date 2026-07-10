import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-6">
    <div className="text-center">
      <div className="text-8xl mb-6">🌾</div>
      <h1 className="font-display text-6xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md mx-auto">
        Looks like this page got lost in the fields! Let's get you back to safety.
      </p>
      <div className="flex gap-4 justify-center">
        <Link to="/" className="btn-primary">Go Home</Link>
        <Link to="/dashboard" className="btn-outline">Dashboard</Link>
      </div>
    </div>
  </div>
);

export default NotFound;