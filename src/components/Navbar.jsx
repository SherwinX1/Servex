import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-neutral-200 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4 gap-8">
        
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <img src={logo} className="h-9 w-auto" alt="Servex Logo" />
        </a>

        {/* Menu Links - Pushed to the right */}
        <div className={`ml-auto flex items-center w-full md:flex md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 font-medium">
            {['About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="block py-2 px-3 text-neutral-600 hover:text-blue-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button - Updated to Blue */}
        <div className="flex md:order-2 space-x-3">
          <button 
            type="button" 
            className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 transition-all"
          >
            Become a Servex Partner
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
      </div>
    </nav>
  );
};

export default Navbar;