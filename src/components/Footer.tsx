import React from 'react';
import { Leaf, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Company': [
      { name: 'About Us', href: '#' },
      { name: 'Our Story', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Careers', href: '#' }
    ],
    'Products': [
      { name: 'NGO Pack', href: '#' },
      { name: 'Institutional Pack', href: '#' },
      { name: 'Bulk Supply', href: '#' },
      { name: 'Custom Solutions', href: '#' }
    ],
    'Resources': [
      { name: 'Impact Report', href: '#' },
      { name: 'Certifications', href: '#' },
      { name: 'Research Papers', href: '#' },
      { name: 'Press Kit', href: '#' }
    ],
    'Support': [
      { name: 'Partnership FAQ', href: '#' },
      { name: 'Bulk Orders', href: '#' },
      { name: 'Technical Support', href: '#' },
      { name: 'Training Programs', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pastel-rose via-pastel-orchid to-pastel-plum rounded-full flex items-center justify-center shadow-soft">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold font-sans bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum bg-clip-text text-transparent">Nariksha</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed font-sans">
                Transforming agricultural waste into sustainable menstrual hygiene solutions 
                that empower women and protect the environment.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm font-sans">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-pastel-orchid" />
                  <span className="text-gray-300">partnerships@narikshapads.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-pastel-orchid" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-pastel-orchid" />
                  <span className="text-gray-300">Gurugram, Haryana, India</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-white mb-4 font-sans">{category}</h4>
                    <ul className="space-y-2">
                      {links.map((link) => (
                        <li key={link.name}>
                          <a 
                            href={link.href}
                            className="text-gray-300 hover:text-pastel-orchid transition-colors duration-200 font-sans"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="font-semibold text-white mb-2 font-sans">Stay Updated</h4>
              <p className="text-gray-300 text-sm font-sans">
                Get the latest updates on our impact and partnership opportunities
              </p>
            </div>
            <div className="flex space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pastel-orchid focus:border-transparent text-white placeholder-gray-400 font-sans"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum text-white rounded-lg hover:shadow-soft transition-all duration-200 whitespace-nowrap font-sans">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-sans">
              © 2024 Nariksha Pads Private Limited. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm font-sans">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm text-gray-400 font-sans">
              <a href="#" className="hover:text-pastel-orchid transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pastel-orchid transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;