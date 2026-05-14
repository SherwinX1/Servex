import { motion } from 'framer-motion';

const Testimonial = () => (
  <section className="py-24 bg-neutral-50 flex justify-center">
    <motion.blockquote whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-center text-2xl font-light italic max-w-2xl px-4">
      "Servex revolutionized our maintenance workflow." 
      <span className="block font-medium mt-4 not-italic text-lg">— TechCorp Solutions</span>
    </motion.blockquote>
  </section>
);
export default Testimonial;