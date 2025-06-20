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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            A Realidade <span className="font-black">CRUEL</span> dos Concursos Públicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-red-500 mb-2">97%</span>
              <span className="text-gray-700 text-lg">dos concurseiros estudam do jeito <b>ERRADO</b></span>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-red-500 mb-2">3 anos</span>
              <span className="text-gray-700 text-lg">é o tempo médio para a primeira aprovação</span>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-red-500 mb-2">85%</span>
              <span className="text-gray-700 text-lg">desistem antes da primeira aprovação</span>
            </div>
          </div>
          <div>
            <span className="text-red-500 font-bold text-lg md:text-xl">Mas isso vai mudar HOJE para você!</span>
          </div>
        </div>
      </section>
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
