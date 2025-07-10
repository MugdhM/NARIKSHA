import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyNariksha from './components/WhyNariksha';
import OurSolution from './components/OurSolution';
import Impact from './components/Impact';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import ProductShowcase from './components/ProductShowcase';
import AwardedSection from './components/AwardedSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <WhyNariksha />
      <OurSolution />
      <Impact />
      <Comparison />
      <Testimonials />
      <ProductShowcase />
      <AwardedSection />
      <Footer />
    </div>
  );
}

export default App;