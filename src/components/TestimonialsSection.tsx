
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          O que dizem nossos leitores
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/af5ea049-20e2-4d7f-bd97-170f5c0a97c4.png" 
              alt="Depoimentos dos leitores" 
              className="max-w-md w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
