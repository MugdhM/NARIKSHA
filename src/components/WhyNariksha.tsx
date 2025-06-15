import React from 'react';
import { Leaf, Heart, Users, Recycle } from 'lucide-react';

const WhyNariksha = () => {
  const features = [
    {
      icon: Leaf,
      title: '100% Biodegradable',
      description: 'Completely decomposes within 6 months, leaving zero environmental footprint',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
    },
    {
      icon: Heart,
      title: 'Skin-Safe & Organic',
      description: 'Made from natural materials with no harmful chemicals or synthetic additives',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
    },
    {
      icon: Users,
      title: 'Empowers Communities',
      description: 'Creates sustainable livelihoods for rural women and supports local farmers',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
    },
    {
      icon: Recycle,
      title: 'Waste Innovation',
      description: 'Transforms agricultural waste into valuable products, reducing crop burning',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
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
                className="group text-center p-8 rounded-2xl bg-pastel-mist hover:bg-white hover:shadow-pastel transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} shadow-soft mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum rounded-3xl p-8 md:p-12 text-white shadow-pastel">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-sans mb-2">₹8</div>
              <div className="text-white/90 font-sans">Cost per pad (bulk)</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-sans mb-2">6</div>
              <div className="text-white/90 font-sans">Months to decompose</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-sans mb-2">0</div>
              <div className="text-white/90 font-sans">Harmful chemicals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNariksha;