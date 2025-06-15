import React from 'react';
import { ArrowRight, Wheat, Factory, Package } from 'lucide-react';

const OurSolution = () => {
  const steps = [
    {
      icon: Wheat,
      title: 'Parali Collection',
      description: 'We collect rice straw waste from farmers, preventing crop burning and providing additional income',
      image: 'https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
    },
    {
      icon: Factory,
      title: 'Eco-Processing',
      description: 'Our patented process transforms agro-waste into soft, absorbent material using eco-friendly methods',
      image: 'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
    },
    {
      icon: Package,
      title: 'Quality Production',
      description: 'Rural women craft each pad with care, ensuring premium quality while earning sustainable livelihoods',
      image: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=600',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
    }
  ];

  return (
    <section id="solution" className="py-20 bg-soft-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans mb-4">
            From Farm Waste to Feminine Care
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
            Our innovative process converts agricultural waste into premium sanitary products, 
            creating value for every stakeholder in the supply chain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-pastel hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} shadow-soft mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum text-white rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-lg group">
            Learn More About Our Process
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;