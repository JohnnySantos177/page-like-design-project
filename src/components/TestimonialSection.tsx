
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Quem Está Por Trás Desse Método?
        </h2>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Jonny Sábia" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Jonny Sábia</h3>
            <p className="text-gray-600">Aprovado em Concursos do TRT-19</p>
          </div>

          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="bg-green-50 p-3 rounded">
              <div className="text-green-600 font-bold">✓ TRT da Paraíba</div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="text-green-600 font-bold">✓ Direito do Setor</div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="text-green-600 font-bold">✓ Curso Jurídico</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-center text-sm">
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-700 font-semibold">✓ CURSO ACADÊMICO</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-700 font-semibold">✓ 1º lugar DIREITO</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-700 font-semibold">✓ 1º de GESTÃO</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="text-gray-700 font-semibold">✓ 1º de GESTÃO</div>
            </div>
          </div>

          <blockquote className="text-gray-700 text-center italic mb-6">
            "Sou especialista em transformar pessoas 'normais' em APROVADOS. Eu já ajudei mais de 10.000 pessoas a realizarem o sonho da aprovação. Meu método funciona independente da sua idade, escolaridade, área de atuação ou tempo disponível para estudar."
          </blockquote>

          <div className="text-center">
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
              <p className="text-yellow-800 font-semibold">
                RESULTADO EM CAMPO CRONOLÓGICO POR CURSO DE QUESTÕES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
