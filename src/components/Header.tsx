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
        <div className="flex justify-between items-center h-14 md:h-16 py-2 sm:py-0">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-pastel-rose via-pastel-orchid to-pastel-plum rounded-full flex items-center justify-center shadow-soft">
              <Leaf className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum bg-clip-text text-transparent font-sans">Nariksha</span>
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
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-pastel-orchid"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 w-full h-full bg-white/95 backdrop-blur-md border-t border-pastel-orchid/20 shadow-soft z-50 flex flex-col p-6 space-y-4">
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-pastel-orchid" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base text-gray-700 hover:text-pastel-rose transition-colors duration-200 font-sans font-medium py-2 px-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full px-4 py-3 text-base text-gray-700 hover:text-pastel-rose transition-colors duration-200 font-sans font-medium flex items-center justify-center rounded bg-pastel-mist mt-4">
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;