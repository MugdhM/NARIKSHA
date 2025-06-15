import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const PartnerInquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    partnerType: '',
    message: '',
    volume: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const partnerTypes = [
    'NGO / Non-Profit',
    'Government / Municipal Body',
    'Corporate CSR',
    'Educational Institution',
    'Healthcare Organization',
    'Distributor / Retailer',
    'Other'
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'partnerships@narikshapads.com',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Sector 44, Gurugram, Haryana 122003',
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-soft-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans mb-4">
            Let's Create Impact Together
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
            Ready to make a difference? Partner with us to bring sustainable menstrual 
            hygiene solutions to communities across India
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-pastel">
            <h3 className="text-2xl font-bold text-gray-900 font-sans mb-6">
              Partnership Inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-orchid focus:border-transparent transition-colors font-sans"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-orchid focus:border-transparent transition-colors font-sans"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                  Organization Name *
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-orchid focus:border-transparent transition-colors font-sans"
                  placeholder="Enter organization name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Partnership Type *
                  </label>
                  <select
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-orchid focus:border-transparent transition-colors font-sans"
                  >
                    <option value="">Select type</option>
                    {partnerTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Expected Volume
                  </label>
                  <select
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-orchid focus:border-transparent transition-colors font-sans"
                  >
                    <option value="">Select volume</option>
                    <option value="100-500">100-500 units</option>
                    <option value="500-1000">500-1,000 units</option>
                    <option value="1000-5000">1,000-5,000 units</option>
                    <option value="5000+">5,000+ units</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pastel-orchid focus:border-transparent transition-colors font-sans"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum text-white rounded-lg hover:shadow-pastel transition-all duration-300 font-semibold text-lg font-sans"
              >
                <Send className="w-5 h-5" />
                <span>Send Partnership Request</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-pastel">
              <h3 className="text-2xl font-bold text-gray-900 font-sans mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center shadow-soft`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 font-sans">{contact.label}</div>
                        <div className="text-gray-900 font-sans">{contact.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Partnership Benefits */}
            <div className="bg-white rounded-3xl p-8 shadow-pastel">
              <h3 className="text-2xl font-bold text-gray-900 font-sans mb-6">
                Partnership Benefits
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-pastel-rose via-pastel-orchid to-pastel-plum rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-sans">Bulk Pricing</h4>
                    <p className="text-gray-700 font-sans">Special rates for large volume orders</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-pastel-rose via-pastel-orchid to-pastel-plum rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-sans">Custom Branding</h4>
                    <p className="text-gray-700 font-sans">Personalized packaging and branding options</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-pastel-rose via-pastel-orchid to-pastel-plum rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 font-sans">Impact Reporting</h4>
                    <p className="text-gray-700 font-sans">Detailed social and environmental impact metrics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerInquiry;