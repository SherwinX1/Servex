import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signInUser } from "../lib/supabase"; // adjust path if needed

const SigninModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await signInUser(
      form.email,
      form.password
    );

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    console.log("Logged in user:", data.user);

    // OPTIONAL:
    // close modal after success
    onClose();

    // OPTIONAL:
    // redirect user after login
    // window.location.href = "/dashboard";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-800">
                    Welcome Back
                  </h2>

                  <p className="text-sm text-neutral-500 mt-1">
                    Sign in to continue to Servex.
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100 transition"
                >
                  ✕
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="text-sm text-neutral-600 mb-2 block">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm text-neutral-600">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-60"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-neutral-200"></div>
                <span className="text-xs text-neutral-400">OR</span>
                <div className="flex-1 h-px bg-neutral-200"></div>
              </div>

              {/* Google Button (not wired yet) */}
              <button className="w-full border border-neutral-200 bg-white hover:bg-neutral-50 transition py-3 rounded-xl font-medium text-neutral-700 flex items-center justify-center gap-3">
                Continue with Google
              </button>

              {/* Footer */}
              <p className="text-sm text-center text-neutral-500 mt-6">
                Don’t have an account?{" "}
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Create Account
                </span>
              </p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SigninModal;