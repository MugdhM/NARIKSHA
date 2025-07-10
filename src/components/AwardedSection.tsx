import React from 'react';

const awardedOrgs = [
  {
    name: 'Biodegradable Award',
    img: '/images/biodegradable.webp',
  },
  {
    name: 'Community Support',
    img: '/images/community-support.png',
  },
  {
    name: 'Organic Certification',
    img: '/images/organic.webp',
  },
  // Add more as needed
];

const AwardedSection = () => {
  return (
    <section id="awarded" className="py-20 bg-soft-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-sans mb-4">
            Awarded By
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-sans">
            We are honored to be recognized by these organizations for our impact and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {awardedOrgs.map((org) => (
            <div key={org.name} className="flex flex-col items-center">
              <img
                src={org.img}
                alt={org.name}
                className="h-24 w-auto object-contain mb-2 drop-shadow-md bg-white rounded-xl p-4"
                loading="lazy"
              />
              <span className="text-lg font-medium text-gray-800 font-sans mt-2">{org.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardedSection; 