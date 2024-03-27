import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-4 transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left part of the header */}
        <div className="flex items-center">
          <img src="/path/to/home-logo.svg" alt="Home" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">Your Website Name</h1>
        </div>
        {/* Right part of the header */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">
                Link 3
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition duration-300">
                Link 4
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
