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

        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-pastel">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-soft`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum bg-clip-text text-transparent font-sans">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 font-sans">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed font-sans">
                    {step.description}
                  </p>
                  
                  {index < steps.length - 1 && (
                    <div className="flex items-center text-pastel-rose font-medium font-sans">
                      <span>Next Step</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum text-white rounded-full hover:shadow-rose transition-all duration-300 cursor-pointer font-sans font-semibold text-lg">
            Learn More About Our Process
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;