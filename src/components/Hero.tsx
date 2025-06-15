import React from 'react';
import { ArrowRight, Play, Download, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-pastel-gradient pt-20 md:pt-0">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 md:w-32 h-24 md:h-32 bg-pastel-lavender-pink/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-16 md:w-24 h-16 md:h-24 bg-pastel-rose/30 rounded-full blur-lg animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-32 md:w-40 h-32 md:h-40 bg-pastel-orchid/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-20 md:w-28 h-20 md:h-28 bg-pastel-plum/25 rounded-full blur-xl animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6">
            <span className="inline-flex items-center px-3 md:px-6 py-1.5 md:py-3 rounded-full bg-white/80 backdrop-blur-sm border border-pastel-orchid/20 shadow-soft">
              <span className="text-xs md:text-sm text-gray-700 font-sans">100% Biodegradable • Made from Agro-waste</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 font-sans">
            Transforming{' '}
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">
              Waste into Wellness
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8 font-sans">
            Partner with us to transform your supply chain with eco-friendly sanitary products
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <button className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum text-white rounded-full hover:shadow-pastel transition-all duration-300 font-sans font-semibold text-sm md:text-base">
              Request Bulk Quote
            </button>
            <button className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-2.5 bg-white text-gray-900 rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-sm md:text-base flex items-center justify-center">
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Download Catalog
            </button>
            <button className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-2.5 bg-white text-gray-900 rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-sm md:text-base flex items-center justify-center">
              <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Book Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 font-sans">50+</div>
              <div className="text-xs md:text-sm text-gray-600 font-sans">Enterprise Partners</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 font-sans">1M+</div>
              <div className="text-xs md:text-sm text-gray-600 font-sans">Units Produced</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 font-sans">100%</div>
              <div className="text-xs md:text-sm text-gray-600 font-sans">Biodegradable</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 font-sans">24/7</div>
              <div className="text-xs md:text-sm text-gray-600 font-sans">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;