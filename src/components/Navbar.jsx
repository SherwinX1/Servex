import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

// IMPORT MODALS
import SigninModal from "./Signin";
import SignupModal from "./Signup";

const Navbar = ({
  showSigninModal,
  setShowSigninModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // SIGNUP STATE
  const [showSignupModal, setShowSignupModal] = useState(false);

  const navItems = ["About", "Services", "Contact"];

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

            {/* LOGO */}
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                className="h-9 w-auto"
                alt="Servex Logo"
              />
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-medium text-neutral-600 hover:text-blue-600 transition-all relative group"
                >
                  {item}

                  {/* UNDERLINE */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">

              {/* SIGN IN */}
              <button
                onClick={() => setShowSigninModal(true)}
                className="hidden md:block text-sm font-medium text-neutral-600 hover:text-blue-600 transition"
              >
                Sign in
              </button>

              {/* GET STARTED */}
              <button
                onClick={() => setShowSignupModal(true)}
                className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              >
                Get Started
              </button>

              {/* MOBILE MENU BUTTON */}
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

                  {/* MOBILE LINKS */}
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

                  {/* MOBILE SIGN IN */}
                  <button
                    onClick={() => {
                      setShowSigninModal(true);
                      setIsOpen(false);
                    }}
                    className="text-left text-neutral-700 hover:text-blue-600 transition font-medium"
                  >
                    Sign in
                  </button>

                  {/* MOBILE SIGNUP */}
                  <button
                    onClick={() => {
                      setShowSignupModal(true);
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

      {/* SIGNIN MODAL */}
      <SigninModal
        isOpen={showSigninModal}
        onClose={() => setShowSigninModal(false)}
        openSignup={() => {
          setShowSigninModal(false);
          setShowSignupModal(true);
        }}
      />

      {/* SIGNUP MODAL */}
      <SignupModal
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        openSignin={() => {
          setShowSignupModal(false);
          setShowSigninModal(true);
        }}
      />
    </>
  );
};

export default Navbar;