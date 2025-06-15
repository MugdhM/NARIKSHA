import React from 'react';
import { Check, X, Star } from 'lucide-react';

const Comparison = () => {
  const competitors = [
    { name: 'Nariksha', isNariksha: true },
    { name: 'Saathi', isNariksha: false },
    { name: 'Pee Safe', isNariksha: false },
    { name: 'Whisper', isNariksha: false }
  ];

  const features = [
    {
      category: 'Environmental Impact',
      items: [
        { name: '100% Biodegradable', nariksha: true, saathi: true, peeSafe: false, whisper: false },
        { name: 'Made from Agro-waste', nariksha: true, saathi: true, peeSafe: false, whisper: false },
        { name: 'Zero Plastic Content', nariksha: true, saathi: false, peeSafe: false, whisper: false },
        { name: 'Compostable Packaging', nariksha: true, saathi: false, peeSafe: false, whisper: false }
      ]
    },
    {
      category: 'Social Impact',
      items: [
        { name: 'Empowers Rural Women', nariksha: true, saathi: false, peeSafe: false, whisper: false },
        { name: 'Supports Farmers', nariksha: true, saathi: true, peeSafe: false, whisper: false },
        { name: 'Local Manufacturing', nariksha: true, saathi: false, peeSafe: false, whisper: false }
      ]
    },
    {
      category: 'Product Quality',
      items: [
        { name: 'Chemical-free', nariksha: true, saathi: true, peeSafe: false, whisper: false },
        { name: 'Skin-safe Materials', nariksha: true, saathi: true, peeSafe: true, whisper: true },
        { name: 'High Absorbency', nariksha: true, saathi: true, peeSafe: true, whisper: true }
      ]
    },
    {
      category: 'Cost Effectiveness',
      items: [
        { name: 'Bulk Pricing Available', nariksha: true, saathi: false, peeSafe: true, whisper: true },
        { name: 'B2B Partnerships', nariksha: true, saathi: false, peeSafe: false, whisper: false },
        { name: 'Institutional Discounts', nariksha: true, saathi: false, peeSafe: false, whisper: false }
      ]
    }
  ];

  const getFeatureValue = (feature: any, brand: string) => {
    switch (brand) {
      case 'Nariksha': return feature.nariksha;
      case 'Saathi': return feature.saathi;
      case 'Pee Safe': return feature.peeSafe;
      case 'Whisper': return feature.whisper;
      default: return false;
    }
  };

  return (
    <section className="py-20 bg-pastel-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans mb-4">
            How We Compare
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
            See why leading NGOs, government bodies, and conscious organizations 
            choose Nariksha for their menstrual hygiene programs
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-pastel overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-5 bg-gray-900 text-white">
            <div className="p-6 font-semibold font-sans">Features</div>
            {competitors.map((competitor) => (
              <div key={competitor.name} className={`p-6 text-center font-semibold font-sans ${
                competitor.isNariksha ? 'bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum relative' : ''
              }`}>
                {competitor.isNariksha && (
                  <div className="absolute top-2 right-2">
                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  </div>
                )}
                {competitor.name}
              </div>
            ))}
          </div>

          {/* Feature Categories */}
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="grid grid-cols-5 bg-pastel-mist border-b">
                <div className="p-4 font-semibold text-gray-800 col-span-5 font-sans">
                  {category.category}
                </div>
              </div>
              {category.items.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-5 border-b border-gray-200 hover:bg-gray-50">
                  <div className="p-4 font-medium text-gray-700 font-sans">
                    {feature.name}
                  </div>
                  {competitors.map((competitor) => (
                    <div key={competitor.name} className={`p-4 text-center ${
                      competitor.isNariksha ? 'bg-pastel-mist/50' : ''
                    }`}>
                      {getFeatureValue(feature, competitor.name) ? (
                        <Check className={`w-6 h-6 mx-auto ${
                          competitor.isNariksha ? 'text-pastel-rose' : 'text-gray-600'
                        }`} />
                      ) : (
                        <X className="w-6 h-6 text-gray-400 mx-auto" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pricing Comparison */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-pastel border-2 border-pastel-orchid relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum text-white px-4 py-2 rounded-full text-sm font-semibold font-sans">
                Best Value
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 font-sans mb-2">Nariksha</h3>
              <div className="text-4xl font-bold bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum bg-clip-text text-transparent mb-2">₹8</div>
              <div className="text-gray-700 mb-4 font-sans">per pad (bulk)</div>
              <ul className="text-left space-y-2 text-sm font-sans">
                <li className="flex items-center"><Check className="w-4 h-4 text-pastel-rose mr-2" />100% Biodegradable</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-pastel-rose mr-2" />Bulk Discounts</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-pastel-rose mr-2" />Social Impact</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 font-sans mb-2">Saathi</h3>
              <div className="text-4xl font-bold text-gray-600 mb-2">₹12</div>
              <div className="text-gray-700 mb-4 font-sans">per pad</div>
              <ul className="text-left space-y-2 text-sm font-sans">
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Biodegradable</li>
                <li className="flex items-center"><X className="w-4 h-4 text-gray-400 mr-2" />Limited B2B</li>
                <li className="flex items-center"><X className="w-4 h-4 text-gray-400 mr-2" />Higher Cost</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 font-sans mb-2">Pee Safe</h3>
              <div className="text-4xl font-bold text-gray-600 mb-2">₹15</div>
              <div className="text-gray-700 mb-4 font-sans">per pad</div>
              <ul className="text-left space-y-2 text-sm font-sans">
                <li className="flex items-center"><X className="w-4 h-4 text-gray-400 mr-2" />Not Biodegradable</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Premium Quality</li>
                <li className="flex items-center"><X className="w-4 h-4 text-gray-400 mr-2" />Higher Price</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 font-sans mb-2">Whisper</h3>
              <div className="text-4xl font-bold text-gray-600 mb-2">₹10</div>
              <div className="text-gray-700 mb-4 font-sans">per pad</div>
              <ul className="text-left space-y-2 text-sm font-sans">
                <li className="flex items-center"><X className="w-4 h-4 text-gray-400 mr-2" />Not Eco-friendly</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Wide Availability</li>
                <li className="flex items-center"><X className="w-4 h-4 text-gray-400 mr-2" />No Social Impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;