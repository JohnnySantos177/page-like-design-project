
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Ribeiro",
      text: "O conteúdo foi apresentado de forma didática, tornando o aprendizado muito mais agradável.",
      rating: 5
    },
    {
      name: "Flávia Silva", 
      text: "Adorei a abordagem e as ferramentas oferecidas, que me ajudaram a mudar completamente meu método de estudo.",
      rating: 5
    },
    {
      name: "Ana Monteiro",
      text: "Recomendo a Rota Inteligente a todos que buscam otimizar seus estudos e alcançar melhores resultados!",
      rating: 5
    }
  ];

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          O que dizem nossos leitores
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Phone mockup container */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/365d6f3b-c980-4864-abd8-658b25d498fa.png" 
                  alt="Depoimentos dos leitores" 
                  className="max-w-md w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Text testimonials for better accessibility and SEO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-gray-800 text-sm">
                    - {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 font-medium">
            <span className="text-amber-600 font-bold">rotainteligente</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
