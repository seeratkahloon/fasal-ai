import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSeedling } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent]   = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 pt-20">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

        <div className="flex items-center gap-2 font-display font-bold text-xl text-green-900 mb-8">
          <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center">
            <FaSeedling className="text-white" />
          </div>
          FasalAI
        </div>

        {sent ? (
          <div className="text-center py-6">
            <div className="text-6xl mb-4">📧</div>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Check your email!</h2>
            <p className="text-gray-500 text-sm mb-2">We sent a password reset link to:</p>
            <p className="text-green-600 font-semibold mb-6">{email}</p>
            <Link to="/login" className="btn-primary inline-block text-sm">
              Back to Login
            </Link>
          </div>
        ) : (
          <>
            <h1 className="font-display text-2xl font-bold text-gray-900 mb-2">Forgot password?</h1>
            <p className="text-gray-500 text-sm mb-6">
              No worries! Enter your email and we'll send you a reset link.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" placeholder="you@example.com"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()} />
              </div>

              <button onClick={handleSubmit} disabled={loading || !email}
                className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition ${
                  loading || !email ? "opacity-60 cursor-not-allowed" : ""}`}>
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Remember your password?{" "}
              <Link to="/login" className="text-green-600 font-semibold hover:underline">Sign in</Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;