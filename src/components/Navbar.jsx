import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-neutral-200 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section - Text removed for minimalist aesthetic */}
        <a href="/" className="flex items-center">
          <img src={logo} className="h-9 w-auto" alt="Servex Logo" />
        </a>

        {/* Action Buttons */}
        <div className="flex md:order-2 space-x-3">
          <button 
            type="button" 
            className="text-white bg-neutral-900 hover:bg-neutral-700 font-medium rounded-full text-sm px-5 py-2.5 transition-all"
          >
            Get started
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            type="button" 
            className="md:hidden p-2 text-neutral-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="block py-2 px-3 text-neutral-600 hover:text-neutral-900 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;