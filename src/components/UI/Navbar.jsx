import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed z-50 transition-all duration-700 ease-out backdrop-blur-md ${scrolled
      ? 'w-12 h-12 rounded-full bg-white shadow-2xl border border-gray-200/50 top-2 left-1/2 -translate-x-1/2'
      : 'w-[80%] left-1/2 -translate-x-1/2  h-auto bg-white/90 border-b border-gray-100/30 top-2 rounded-full '
      }`}>
      <div className={`transition-all duration-700 ease-out flex items-center ${scrolled
        ? 'justify-center h-full px-0'
        : 'max-w-7xl mx-auto px-6 justify-between py-2'
        }`}>

        {/* Logo with Morphing Effect */}
        <div className={`font-bold transition-all duration-700 ease-out ${scrolled
          ? 'text-lg text-blue-600 scale-75'
          : 'text-2xl text-gray-800 scale-100'
          }`}>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {scrolled ? '' : 'LOGO'}
          </span>
        </div>

        {/* Desktop Navigation with Morphing Links - Hidden when scrolled */}
        <div className={`md:flex items-center space-x-8 transition-all duration-500 ease-out ${scrolled
          ? 'opacity-0 invisible scale-0 pointer-events-none'
          : 'opacity-100 visible scale-100'
          }`}>
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-700 font-medium py-2 px-4 rounded-full transition-all duration-300 ease-out hover:text-blue-600 hover:-translate-y-1 hover:scale-105 group overflow-hidden"
            >
              {/* Morphing Background Bubble */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-400 ease-out"></div>

              {/* Text */}
              <span className="relative z-10">{item}</span>

              {/* Morphing Underline */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out group-hover:w-3/4 group-hover:-translate-x-1/2"></div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            </a>
          ))}
        </div>

        {/* Morphing Hamburger Menu - Hidden when scrolled */}
        <button
          className={`md:hidden relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none group transition-all duration-500 ease-out ${scrolled
            ? 'opacity-0 invisible scale-0 pointer-events-none'
            : 'opacity-100 visible scale-100'
            }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* Morphing Lines to X */}
          <span className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
            }`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-200 ease-out ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
            }`}></span>
        </button>

        {/* Floating Action Button when scrolled */}
        {scrolled && (
          <button
            onClick={toggleMenu}
            className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 ease-out group"
            aria-label="Open menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1 group-hover:scale-110 transition-transform duration-300">
              <div className="w-4 h-0.5 bg-blue-600 rounded-full"></div>
              <div className="w-4 h-0.5 bg-blue-600 rounded-full"></div>
              <div className="w-4 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
          </button>
        )}
      </div>

      {/* Mobile Menu with Morphing Animation */}
      <div className={`md:hidden fixed inset-0 transition-all duration-500 ease-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        {/* Morphing Background */}
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 transition-all duration-700 ease-out ${isOpen ? 'scale-100 rotate-0' : 'scale-95 rotate-3'
          }`}></div>

        {/* Menu Items */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-8">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className={`text-white text-3xl font-bold transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-2 relative group ${isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{
                transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms'
              }}
            >
              {/* Morphing Text Glow */}
              <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-110 transition-all duration-400 ease-out blur-sm"></div>

              <span className="relative z-10">
                {item}
                {/* Morphing Underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/80 transition-all duration-300 ease-out group-hover:w-full"></div>
              </span>
            </a>
          ))}
        </div>

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeMenu}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;