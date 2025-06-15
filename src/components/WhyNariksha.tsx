import React from 'react';
import { Leaf, Heart, Users, Recycle } from 'lucide-react';

const WhyNariksha = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Biodegradable',
      description: 'Completely decomposes within 6 months, leaving zero environmental footprint',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      image: '/images/biodegradable.jpg'
    },
    {
      icon: Heart,
      title: 'Skin-Safe & Organic',
      description: 'Made from natural materials with no harmful chemicals or synthetic additives',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      image: '/images/organic.jpg'
    },
    {
      icon: Users,
      title: 'Empowers Communities',
      description: 'Creates sustainable livelihoods for rural women and supports local farmers',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      image: '/images/community.jpg'
    },
    {
      icon: Recycle,
      title: 'Waste Innovation',
      description: 'Transforms agricultural waste into valuable products, reducing crop burning',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      image: '/images/innovation.jpg'
    }
  ];

  return (
    <section id="why-nariksha" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans mb-4">
            Why Choose Nariksha?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
            We're not just creating sanitary pads – we're building a sustainable ecosystem 
            that benefits women, farmers, and the environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-pastel-mist hover:bg-white hover:shadow-pastel transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} shadow-soft mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum rounded-3xl p-8 md:p-12 text-white shadow-pastel relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="/images/pattern.png" 
              alt="Pattern" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-sans mb-2">22M+</div>
              <div className="text-white/90 font-sans">Tons CO₂ Reduced</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-sans mb-2">5000+</div>
              <div className="text-white/90 font-sans">Women Empowered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-sans mb-2">200+</div>
              <div className="text-white/90 font-sans">Farmer Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNariksha;