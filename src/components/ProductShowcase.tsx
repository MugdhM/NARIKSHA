import React, { useState } from 'react';
import { Download, Package, Users, Building, Check, Info, ArrowRight, LucideIcon } from 'lucide-react';

interface BulkDiscount {
  quantity: string;
  discount: string;
}

interface Product {
  name: string;
  description: string;
  features: string[];
  price: string;
  minOrder: string;
  leadTime: string;
  image: string;
  icon: LucideIcon;
  gradient: string;
  certifications: string[];
  bulkDiscounts: BulkDiscount[];
}

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      name: 'NGO Pack',
      description: 'Specially designed for NGO distribution programs',
      features: [
        '100 pads per pack',
        'Educational materials included',
        'Bulk pricing available',
        'Impact tracking support',
        'Custom branding options',
        'Quarterly impact reports'
      ],
      price: '₹650',
      minOrder: '1000 units',
      leadTime: '2-3 weeks',
      image: 'https://images.pexels.com/photos/6942017/pexels-photo-6942017.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Users,
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      certifications: ['ISO 9001:2015', 'FDA Approved', 'CE Marking'],
      bulkDiscounts: [
        { quantity: '1000-5000', discount: '10%' },
        { quantity: '5000-10000', discount: '15%' },
        { quantity: '10000+', discount: '20%' }
      ]
    },
    {
      name: 'Institutional Pack',
      description: 'Perfect for schools, colleges, and workplaces',
      features: [
        '50 pads per pack',
        'Discreet packaging',
        'Educational posters',
        'Dispenser friendly',
        'Custom branding',
        'Monthly delivery options'
      ],
      price: '₹400',
      minOrder: '500 units',
      leadTime: '1-2 weeks',
      image: 'https://images.pexels.com/photos/6942026/pexels-photo-6942026.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Building,
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      certifications: ['ISO 9001:2015', 'FDA Approved', 'CE Marking'],
      bulkDiscounts: [
        { quantity: '500-2000', discount: '8%' },
        { quantity: '2000-5000', discount: '12%' },
        { quantity: '5000+', discount: '15%' }
      ]
    },
    {
      name: 'Bulk Supply',
      description: 'Large-scale orders for government programs',
      features: [
        '500+ units',
        'Custom packaging',
        'Logistics support',
        'Training materials',
        'White-label options',
        'Dedicated account manager'
      ],
      price: 'Custom',
      minOrder: '5000 units',
      leadTime: '4-6 weeks',
      image: 'https://images.pexels.com/photos/6941988/pexels-photo-6941988.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Package,
      gradient: 'from-pastel-rose via-pastel-orchid to-pastel-plum',
      certifications: ['ISO 9001:2015', 'FDA Approved', 'CE Marking', 'ISO 14001'],
      bulkDiscounts: [
        { quantity: '5000-10000', discount: '15%' },
        { quantity: '10000-50000', discount: '20%' },
        { quantity: '50000+', discount: '25%' }
      ]
    }
  ];

  const specifications = [
    { label: 'Material', value: '100% Organic Parali (Rice Straw)' },
    { label: 'Absorbency', value: 'High (8-10 hours protection)' },
    { label: 'Biodegradability', value: '6 months complete decomposition' },
    { label: 'Thickness', value: '3mm ultra-thin' },
    { label: 'Length', value: '280mm (Regular), 320mm (Large)' },
    { label: 'Certifications', value: 'ISO, FDA Approved' },
    { label: 'Shelf Life', value: '36 months' },
    { label: 'Storage', value: 'Cool, dry place' }
  ];

  return (
    <section id="products" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-sans mb-4">
            B2B Product Solutions
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-sans px-4 sm:px-0">
            Tailored product packages designed for different institutional needs, 
            from small NGO programs to large government initiatives
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={index} 
                className="bg-pastel-mist rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-pastel transition-shadow duration-300 cursor-pointer mb-8 md:mb-0"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${product.gradient} rounded-full flex items-center justify-center shadow-soft`}>
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-sans">
                      {product.name}
                    </h3>
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum bg-clip-text text-transparent">
                      {product.price}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 font-sans">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4 md:mb-6">
                    {product.features.slice(0, 4).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-xs md:text-sm text-gray-700 font-sans">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-pastel-rose mr-2 md:mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-gray-600 mb-4 gap-2">
                    <span>Min. Order: {product.minOrder}</span>
                    <span>Lead Time: {product.leadTime}</span>
                  </div>

                  <button className={`w-full sm:w-auto py-2.5 md:py-3 bg-gradient-to-r ${product.gradient} text-white rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-sm md:text-base flex items-center justify-center mt-2`}>
                    Request Quote
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-soft mb-8 lg:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-sans mb-6">
              Product Specifications
            </h3>
            <div className="space-y-3 md:space-y-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 md:py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700 font-sans text-sm md:text-base">{spec.label}</span>
                  <span className="text-gray-900 font-semibold font-sans text-sm md:text-base mt-1 sm:mt-0">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="bg-gradient-to-r from-pastel-rose via-pastel-orchid to-pastel-plum rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-pastel">
              <h4 className="text-xl md:text-2xl font-bold text-white font-sans mb-4">
                Download Resources
              </h4>
              <p className="text-white/90 mb-6 font-sans text-sm md:text-base">
                Get detailed product catalogs, certifications, and impact reports
              </p>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 py-2.5 md:py-3 bg-white text-gray-900 rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-sm md:text-base">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Product Catalog (PDF)</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-2.5 md:py-3 bg-white text-gray-900 rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-sm md:text-base">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Certifications</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-2.5 md:py-3 bg-white text-gray-900 rounded-full hover:shadow-soft transition-all duration-300 font-sans font-semibold text-sm md:text-base">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Impact Report</span>
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-6 md:p-8">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 font-sans mb-4">
                Bulk Order Benefits
              </h4>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center text-gray-700 text-sm md:text-base">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-pastel-rose mr-2 md:mr-3" />
                  <span>Custom packaging and branding</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm md:text-base">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-pastel-rose mr-2 md:mr-3" />
                  <span>Dedicated account manager</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm md:text-base">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-pastel-rose mr-2 md:mr-3" />
                  <span>Flexible payment terms</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm md:text-base">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-pastel-rose mr-2 md:mr-3" />
                  <span>Priority production scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;