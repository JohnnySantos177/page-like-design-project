
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialSection from '@/components/TestimonialSection';
import PricingSection from '@/components/PricingSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <TestimonialSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
