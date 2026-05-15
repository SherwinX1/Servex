import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/background.png";

const WorkerCard = ({ name, role, delay, x }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{
      opacity: 1,
      y: [0, -12, 0],
      x: x || 0,
    }}
    transition={{
      opacity: { duration: 0.6, delay },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
    }}
    whileHover={{ scale: 1.05 }}
    className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/40 w-52"
  >
    {/* Worker Image */}
    <div className="aspect-[3/4] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl mb-3 flex items-center justify-center">
      <span className="text-neutral-300 text-sm">
        Worker
      </span>
    </div>

    {/* Worker Info */}
    <h4 className="text-sm font-semibold text-neutral-900">
      {name}
    </h4>

    <p className="text-xs text-neutral-500">
      {role}
    </p>
  </motion.div>
);

const Hero = ({ setShowSigninModal }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/30 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-widest text-neutral-700 uppercase mb-4">
            Trusted Skilled Marketplace
          </p>

          <h1 className="text-5xl md:text-7xl font-serif text-[#1f1f1f] leading-[1.05] mb-6">
            Connect with{" "}
            <span className="text-blue-600">
              skilled professionals
            </span>{" "}
            instantly
          </h1>

          <p className="text-lg text-neutral-600 max-w-md leading-relaxed mb-10">
            Book electricians, carpenters, plumbers, and verified workers in
            seconds — all in one trusted platform built for speed and reliability.
          </p>

          {/* BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button
              onClick={() => setShowSigninModal(true)}
              className="bg-white/70 backdrop-blur-md text-neutral-700 px-8 py-4 rounded-xl font-medium border border-white/40 hover:bg-white transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Browse Workers
            </button>

          </div>

          {/* TRUST INDICATORS */}
          <div className="mt-10 flex items-center gap-6 text-sm text-neutral-500">
            <span>✔ Verified workers</span>
            <span>✔ Fast booking</span>
            <span>✔ Secure payments</span>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex relative h-[600px] items-center justify-center">

          <div className="absolute -left-10 top-10">
            <WorkerCard
              name="Alex Rivera"
              role="Carpet Cleaner"
              delay={0.2}
              x={10}
            />
          </div>

          <div className="absolute right-0 top-20">
            <WorkerCard
              name="Sarah Chen"
              role="Carpenter • Electrician"
              delay={0.4}
              x={-10}
            />
          </div>

          <div className="absolute left-20 bottom-10">
            <WorkerCard
              name="Marcus Bond"
              role="Driver • Plumber"
              delay={0.6}
              x={5}
            />
          </div>

          <div className="absolute right-10 bottom-0">
            <WorkerCard
              name="Elena Glass"
              role="Masonry Specialist"
              delay={0.8}
              x={-5}
            />
          </div>

          {/* CENTER GLOW */}
          <div className="w-[250px] h-[250px] bg-blue-300/20 blur-3xl rounded-full" />
      </div>
        </div>
    </section>
  );
};

export default Hero;