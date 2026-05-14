import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  Settings, 
  Search, 
  CalendarCheck, 
  MessageSquare, 
  Rocket, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

// Custom animation variants for different icons
const iconVariants = {
  bounce: {
    hover: { y: [0, -6, 0], transition: { duration: 0.5, repeat: Infinity } }
  },
  rotate: {
    hover: { rotate: 15, transition: { duration: 0.3, yoyo: Infinity } }
  },
  pulse: {
    hover: { scale: 1.1, transition: { duration: 0.4, repeat: Infinity, repeatType: "reverse" } }
  }
};

const StepCard = ({ icon: Icon, title, desc, variant }) => (
  <motion.div 
    className="flex-shrink-0 w-full md:w-[calc(33.333%-1.67rem)] flex flex-col group cursor-pointer"
    whileHover="hover"
  >
    {/* Card Container from image_94089a.png */}
    <div className="aspect-[4/3] bg-[#E8E8E8] rounded-2xl flex items-center justify-center mb-6 overflow-hidden">
      <motion.div variants={iconVariants[variant]}>
        <Icon size={48} className="text-[#0055CC]" strokeWidth={1.2} />
      </motion.div>
    </div>
    
    <div className="px-1">
      <h4 className="text-[17px] font-medium text-neutral-900 mb-2 leading-tight">
        {title}
      </h4>
      <p className="text-[14px] text-neutral-500 mb-4 leading-relaxed line-clamp-2">
        {desc}
      </p>
      <span className="text-[#0055CC] text-sm font-medium hover:underline inline-flex items-center">
        Learn more
      </span>
    </div>
  </motion.div>
);

const HowItWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    {
      icon: UserPlus,
      variant: "pulse",
      title: "Create an Account",
      desc: "Join our community in seconds with a simple, secure sign-up process."
    },
    {
      icon: Settings,
      variant: "rotate",
      title: "Set up your Profile",
      desc: "Customize your preferences so we can match you with the right experts."
    },
    {
      icon: Search,
      variant: "bounce",
      title: "Find Skilled Workers",
      desc: "Browse through vetted professionals that fit your specific project needs."
    },
    {
      icon: MessageSquare,
      variant: "pulse",
      title: "Interview Candidates",
      desc: "Chat with potential hires to ensure they have the right vibe for your team."
    },
    {
      icon: CalendarCheck,
      variant: "bounce",
      title: "Book an Appointment",
      desc: "Secure your slot and sync the project directly to your workspace calendar."
    },
    {
      icon: Rocket,
      variant: "rotate",
      title: "Launch Project",
      desc: "Get to work with confidence knowing your payment is held securely."
    }
  ];

  const nextSlide = () => {
    if (currentIndex < steps.length - 3) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <section className="py-24 max-w-6xl mx-auto px-8 bg-white overflow-hidden">
      {/* Header section inspired by image_94089a.png */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 leading-tight">
          Everything you <br />
          need, all in one place.
        </h2>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-end gap-2 mb-6">

        <button 
          onClick={nextSlide}
          className={`p-2 rounded-full transition-all ${currentIndex >= steps.length - 3 ? 'text-neutral-200' : 'text-neutral-400 hover:bg-neutral-100 hover:text-black'}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slider Viewport */}
      <div className="relative overflow-visible">
        <motion.div 
          className="flex gap-10"
          animate={{ x: `-${currentIndex * (100 / 3 + 2.45)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;