import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Why Us', href: '#why-nariksha' },
    { label: 'Solution', href: '#solution' },
    { label: 'Impact', href: '#impact' },
    { label: 'Products', href: '#products' },
    { label: 'Partners', href: '#partners' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex items-center space-x-2">
  <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-full flex items-center justify-center shadow-soft">
    {/* Replace Leaf icon with a shield (for safety) and female symbol */}
    <svg
      className="w-4 h-4 md:w-5 md:h-5 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {/* Shield shape */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" />
      {/* Female symbol */}
      <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <line x1="12" y1="15" x2="12" y2="18" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="10.5" y1="18" x2="13.5" y2="18" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  </div>
  <span className="text-lg md:text-xl font-extrabold font-mono tracking-tight bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent">
    Nariksha Pads
  </span>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm lg:text-base text-gray-700 hover:text-pastel-rose transition-colors duration-200 font-sans font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pastel-rose transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {/* Contact Sales */}
            <button className="px-3 lg:px-4 py-1.5 lg:py-2 text-sm lg:text-base text-gray-700 hover:text-pastel-rose transition-colors duration-200 font-sans font-medium flex items-center">
              <Mail className="w-3.5 h-3.5 lg:w-4 lg:h-4 mr-1.5 lg:mr-2" />
              Contact Sales
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-pastel-orchid/20 shadow-soft">
            <nav className="flex flex-col p-3 lg:p-4 space-y-2 lg:space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm lg:text-base text-gray-700 hover:text-pastel-rose transition-colors duration-200 font-sans font-medium py-1.5 lg:py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 lg:space-y-3 mt-3 lg:mt-4">
                <button className="px-4 lg:px-6 py-1.5 lg:py-2 text-sm lg:text-base text-gray-700 hover:text-pastel-rose transition-colors duration-200 font-sans font-medium flex items-center">
                  <Mail className="w-3.5 h-3.5 lg:w-4 lg:h-4 mr-1.5 lg:mr-2" />
                  Contact Sales
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;