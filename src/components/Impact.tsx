import React, { useState } from 'react';
import { TreePine, Users, Sprout } from 'lucide-react';

const Impact = () => {
  const [activeTab, setActiveTab] = useState('environment');

  const tabs = [
    {
      id: 'environment',
      label: 'Environment',
      icon: TreePine,
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      stats: [
        { number: '22M+', label: 'Tons CO₂ Reduced', description: 'By preventing crop burning' },
        { number: '95%', label: 'Less Plastic Waste', description: 'Compared to conventional pads' },
        { number: '6', label: 'Months Decomposition', description: 'Complete biodegradability' }
      ],
      description: 'Our products prevent millions of tons of agricultural waste from being burned, significantly reducing air pollution and greenhouse gas emissions while creating biodegradable alternatives to plastic-based sanitary products.'
    },
    {
      id: 'women',
      label: 'Women Empowerment',
      icon: Users,
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      stats: [
        { number: '5000+', label: 'Women Impacted', description: 'Access to safe menstrual hygiene' },
        { number: '50+', label: 'Women Employed', description: 'In rural manufacturing units' },
        { number: '₹15K', label: 'Average Monthly Income', description: 'For our production partners' }
      ],
      description: 'We create sustainable employment opportunities for rural women while ensuring access to affordable, safe menstrual hygiene products for thousands of women across India.'
    },
    {
      id: 'farmers',
      label: 'Farmers',
      icon: Sprout,
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      stats: [
        { number: '200+', label: 'Farmers Partners', description: 'Across North India' },
        { number: '₹3K', label: 'Extra Income per Acre', description: 'From parali sales' },
        { number: '1000+', label: 'Tons Waste Collected', description: 'Annually from farms' }
      ],
      description: 'By purchasing agricultural waste directly from farmers, we provide them with an additional revenue stream while solving the stubble burning problem that affects air quality across North India.'
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab);
  const IconComponent = currentTab?.icon;

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans mb-4">
            Creating Ripple Effects of Change
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
            Every Nariksha pad sold creates positive impact across multiple dimensions - 
            environmental protection, women's empowerment, and farmer prosperity
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="flex bg-pastel-mist rounded-full p-1 shadow-soft">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 font-sans ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-soft`
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        {currentTab && (
          <div className="transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentTab.gradient} rounded-full flex items-center justify-center shadow-soft`}>
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 font-sans">
                    {currentTab.label} Impact
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-sans">
                  {currentTab.description}
                </p>
                <button className={`px-6 py-3 bg-gradient-to-r ${currentTab.gradient} text-white rounded-full hover:shadow-soft transition-all duration-300 font-sans font-medium`}>
                  Learn More
                </button>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {currentTab.stats.map((stat, index) => (
                  <div key={index} className="bg-pastel-mist rounded-xl p-6 hover:shadow-soft transition-shadow duration-300">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${currentTab.gradient} bg-clip-text text-transparent font-sans mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-1 font-sans">
                      {stat.label}
                    </div>
                    <div className="text-gray-700 font-sans">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Overall Impact Summary */}
        <div className="bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum rounded-3xl p-8 md:p-12 text-white text-center shadow-pastel">
          <h3 className="text-3xl md:text-4xl font-bold font-sans mb-4">
            Together, We're Building a Sustainable Future
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto font-sans">
            Join us in creating positive change that extends far beyond menstrual hygiene - 
            impacting communities, environment, and livelihoods across India
          </p>
          <button className="px-8 py-4 bg-white text-gray-900 rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-lg">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;