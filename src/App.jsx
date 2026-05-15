import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function App() {
  const [showSigninModal, setShowSigninModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900">

      <Navbar
        showSigninModal={showSigninModal}
        setShowSigninModal={setShowSigninModal}
      />

      <main>
        <Hero
          setShowSigninModal={setShowSigninModal}
        />

        <TrustBar />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}