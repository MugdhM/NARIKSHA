import React from 'react';
import { Check, Star } from 'lucide-react';

const Comparison = () => {
  const features = [
    {
      category: 'Environmental Impact',
      items: [
        { name: '100% Biodegradable', description: '6 months decomposition' },
        { name: 'Zero Plastic', description: 'Made from agro-waste' }
      ]
    },
    {
      category: 'Social Impact',
      items: [
        { name: 'Women Empowerment', description: '5000+ women employed' },
        { name: 'Farmer Support', description: '200+ farmer partners' }
      ]
    },
    {
      category: 'Product Quality',
      items: [
        { name: 'Chemical-free', description: 'Skin-safe materials' },
        { name: 'High Absorbency', description: '8-10 hours protection' }
      ]
    },
    {
      category: 'B2B Benefits',
      items: [
        { name: 'Bulk Pricing', description: 'Competitive rates' },
        { name: 'Custom Branding', description: 'White-label options' }
      ]
    }
  ];

  return (
    <section className="py-16 bg-pastel-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-sans mb-4">
            Why Choose Nariksha?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-sans">
            Leading sustainable menstrual hygiene with innovative solutions
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-pastel overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum p-6 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-xl font-bold font-sans">Our Unique Features</h3>
              <Star className="w-6 h-6 text-yellow-300 fill-current" />
            </div>
          </div>

          {/* Feature Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {features.map((category, categoryIndex) => (
              <div key={categoryIndex} className="p-6 space-y-4 text-center md:text-left">
                <h4 className="text-lg font-semibold text-gray-800 font-sans mb-4">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 font-sans text-sm">
                          {feature.name}
                        </h5>
                        <p className="text-xs text-gray-600 font-sans">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center px-4">
          <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum text-white rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-base">
            Request Bulk Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Comparison;