import React from 'react';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import OfferSection from './components/OfferSection';
import BonusSection from './components/BonusSection';
import CreatorSection from './components/CreatorSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ContentSection />
      <OfferSection />
      <BonusSection />
      <CreatorSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
}

export default App;