import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  // Sample partner logos - you can replace these with actual logos
  const partnerLogos = [
    { id: 1, src: '/logos/partner1.svg', alt: 'Partner 1' },
    { id: 2, src: '/logos/partner2.svg', alt: 'Partner 2' },
    { id: 3, src: '/logos/partner3.svg', alt: 'Partner 3' },
    { id: 4, src: '/logos/partner4.svg', alt: 'Partner 4' },
    { id: 5, src: '/logos/partner5.svg', alt: 'Partner 5' },
    { id: 6, src: '/logos/partner6.svg', alt: 'Partner 6' },
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-pastel-mist via-white to-pastel-rose/20 pt-20 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center space-y-8 lg:space-y-0">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-pastel-orchid/20 shadow-soft">
                  <span className="text-sm text-gray-700 font-sans">100% Biodegradable • Made from Agro-waste</span>
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-sans">
                Transforming{' '}
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Waste into Wellness
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-xl text-gray-700 mb-8 font-sans">
                Partner with us to transform your supply chain with eco-friendly sanitary products
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 w-full">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum text-white rounded-full hover:shadow-pastel transition-all duration-300 font-sans font-semibold text-lg">
                  Request Bulk Quote
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-lg flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Catalog
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                  <div className="text-2xl font-bold text-gray-900 mb-1 font-sans">50+</div>
                  <div className="text-sm text-gray-600 font-sans">Enterprise Partners</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                  <div className="text-2xl font-bold text-gray-900 mb-1 font-sans">1M+</div>
                  <div className="text-sm text-gray-600 font-sans">Units Produced</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                  <div className="text-2xl font-bold text-gray-900 mb-1 font-sans">100%</div>
                  <div className="text-sm text-gray-600 font-sans">Biodegradable</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                  <div className="text-2xl font-bold text-gray-900 mb-1 font-sans">24/7</div>
                  <div className="text-sm text-gray-600 font-sans">Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative lg:h-[500px] w-full max-w-md mx-auto lg:mx-0">
              <div className="relative h-full rounded-2xl overflow-hidden shadow-pastel">
                <img 
                  src="/images/retail-shop-owner-mask-social-distancing-shopping.jpg" 
                  alt="Eco-friendly sanitary products" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Partners Section with Carousel */}
          {/* Removed 'Trusted by leading organizations' and partner logos carousel */}
        </div>
      </div>

      <style>
        {`
          @keyframes carousel {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;