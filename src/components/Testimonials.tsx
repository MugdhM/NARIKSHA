import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      role: 'NGO Director, Sakhi Foundation',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Nariksha pads have been a game-changer for our menstrual hygiene programs. The quality is excellent, and knowing that we\'re supporting rural women and environmental sustainability makes it even better.',
      rating: 5,
      impact: '2000+ women reached'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Procurement Officer, Ministry of Health',
      image: 'https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The cost-effectiveness and environmental benefits of Nariksha products align perfectly with our government initiatives. Their bulk pricing and reliable supply chain have made our programs much more impactful.',
      rating: 5,
      impact: 'State-wide implementation'
    },
    {
      name: 'Meera Patel',
      role: 'CSR Head, GreenTech Industries',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Partnering with Nariksha has allowed us to create meaningful social impact while supporting our sustainability goals. The transparency in their supply chain and social impact reporting is commendable.',
      rating: 5,
      impact: '₹50L CSR investment'
    }
  ];

  const metrics = [
    { number: '98%', label: 'Partner Satisfaction' },
    { number: '15+', label: 'NGO Partners' },
    { number: '5', label: 'Government Tie-ups' },
    { number: '50+', label: 'Corporate Partners' }
  ];

  return (
    <section className="py-20 bg-soft-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Removed 'Awarded By' heading and description */}
        </div>

        {/* Partner Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum bg-clip-text text-transparent font-sans mb-2">
                {metric.number}
              </div>
              <div className="text-gray-700 font-medium font-sans">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-pastel hover:shadow-rose transition-shadow duration-300 mb-8 md:mb-0">
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-pastel-rose via-pastel-orchid to-pastel-plum rounded-full flex items-center justify-center mb-6 shadow-soft">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic font-sans">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 font-sans">{testimonial.name}</div>
                  <div className="text-sm text-gray-700 font-sans">{testimonial.role}</div>
                </div>
              </div>

              {/* Impact Badge */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum text-white rounded-full text-sm font-medium font-sans">
                  Impact: {testimonial.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos Section */}
        <div className="mt-20 text-center px-4">
          <h3 className="text-2xl font-bold text-gray-900 font-sans mb-8">
            Proud Partners Include
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white/50 h-16 w-32 rounded-lg flex items-center justify-center shadow-soft mb-4">
              <span className="text-gray-700 font-semibold font-sans">NGO Partner</span>
            </div>
            <div className="bg-white/50 h-16 w-32 rounded-lg flex items-center justify-center shadow-soft mb-4">
              <span className="text-gray-700 font-semibold font-sans">Govt Body</span>
            </div>
            <div className="bg-white/50 h-16 w-32 rounded-lg flex items-center justify-center shadow-soft mb-4">
              <span className="text-gray-700 font-semibold font-sans">Corporate</span>
            </div>
            <div className="bg-white/50 h-16 w-32 rounded-lg flex items-center justify-center shadow-soft mb-4">
              <span className="text-gray-700 font-semibold font-sans">Foundation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;