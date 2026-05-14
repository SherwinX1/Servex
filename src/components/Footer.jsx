import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#eeeeee] pt-20 pb-12 w-full font-sans text-[#666666]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-12">
          
          {/* Left Column: Brand & Tagline */}
          <div className="max-w-xs">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold tracking-tighter text-black ml-1">servex</span>
            </div>
            <p className="text-sm leading-relaxed text-[#888888]">
              A seamless service marketplace with performance analytics and 
              smart connections built for how you actually work.
            </p>
          </div>

          {/* Right Columns: Links organized like image_94661c.png */}
          <div className="flex flex-wrap gap-16 md:gap-24">
            {/* Product Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-semibold text-[#999999] uppercase tracking-widest">Product</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-semibold text-[#999999] uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col space-y-4">
              <h4 className="text-xs font-semibold text-[#999999] uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-black transition-colors">Terms of service</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Legal notice</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#e2e2e2]">
          <p className="text-xs text-[#999999]">
            © 2026 servex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;