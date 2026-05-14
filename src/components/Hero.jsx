import { motion } from 'framer-motion';
import bgImage from '../assets/background.png';

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="absolute inset-0 bg-white/80" />
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 px-4">
      <h1 className="text-6xl font-bold tracking-tight mb-6">Seamless service. Smart solutions.</h1>
      <p className="text-xl text-neutral-600 mb-8 max-w-xl mx-auto">Servex connects businesses with skilled workers efficiently.</p>
      <button className="bg-neutral-900 text-white px-8 py-3 rounded-full hover:bg-neutral-700">Get started</button>
    </motion.div>
  </section>
);
export default Hero;