
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Conheça Johnny Santos
        </h2>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Johnny Santos" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Johnny Santos</h3>
            <p className="text-gray-600">Aprovado em Concurso do TRT-19</p>
          </div>

          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6 text-center">
            <div className="bg-green-50 p-4 rounded">
              <div className="text-green-600 font-bold">✓ Aprovado no TRT da Paraíba</div>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <div className="text-blue-600 font-bold">✓ Especialista em Direito</div>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <div className="text-purple-600 font-bold">✓ Experiência em Concursos</div>
            </div>
          </div>

          <blockquote className="text-gray-700 text-center italic mb-6">
            "Criei este método baseado na minha experiência real de aprovação. 
            Sei exatamente quais são as dificuldades que os concurseiros enfrentam 
            e como superá-las de forma prática e eficiente."
          </blockquote>

          <div className="text-center">
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
              <p className="text-yellow-800 font-semibold">
                MÉTODO BASEADO EM EXPERIÊNCIA REAL DE APROVAÇÃO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
