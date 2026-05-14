import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navItems = ["About", "Services", "Contact"];

  // Disable scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-4 inset-x-0 z-50 px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto bg-white/70 backdrop-blur-2xl border border-white/40 rounded-full shadow-xl"
        >
          <div className="flex items-center justify-between px-6 py-3">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img src={logo} className="h-9 w-auto" alt="Servex Logo" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-medium text-neutral-600 hover:text-blue-600 transition-all relative group"
                >
                  {item}

                  {/* Hover Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">

              {/* Sign In */}
              <button className="hidden md:block text-sm font-medium text-neutral-600 hover:text-blue-600 transition">
                Sign in
              </button>

              {/* CTA */}
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              >
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-neutral-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden px-6 pb-6"
              >
                <div className="flex flex-col gap-5 pt-5 border-t border-neutral-200/50">

                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-neutral-700 hover:text-blue-600 transition font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  ))}

                  <button className="text-left text-neutral-700 hover:text-blue-600 transition font-medium">
                    Sign in
                  </button>

                  <button
                    onClick={() => {
                      setShowModal(true);
                      setIsOpen(false);
                    }}
                    className="bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* SIGNUP MODAL */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[70] flex items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-md bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-2xl p-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-neutral-900">
                      Create Account
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1">
                      Join Servex and connect instantly.
                    </p>
                  </div>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-100 transition"
                  >
                    ✕
                  </button>
                </div>

                {/* Form */}
                <form className="space-y-4">

                  <div>
                    <label className="text-sm text-neutral-600 mb-2 block">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-neutral-600 mb-2 block">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-neutral-600 mb-2 block">
                      Password
                    </label>

                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-xl active:scale-[0.98]"
                  >
                    Create Account
                  </button>
                </form>

                {/* Footer */}
                <p className="text-sm text-center text-neutral-500 mt-6">
                  Already have an account?{" "}
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    Sign in
                  </span>
                </p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;