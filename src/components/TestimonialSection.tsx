
import React from 'react';
import { Check } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Quem Está Por Trás Deste Método?
        </h2>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden border-4 border-red-500">
              <img 
                src="/lovable-uploads/12847874-bc25-44e9-af20-58bcbe49cbf3.png" 
                alt="Johnny Santos" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Johnny Santos</h3>
            <p className="text-lg text-gray-600 font-semibold">Aprovado e Nomeado no TRT-19</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center bg-green-50 p-4 rounded-lg">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-semibold">TRT-19 Aprovado</span>
            </div>
            <div className="flex items-center justify-center bg-green-50 p-4 rounded-lg">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-semibold">Marinha do Brasil</span>
            </div>
            <div className="flex items-center justify-center bg-green-50 p-4 rounded-lg">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-semibold">Exército Brasileiro</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center bg-green-50 p-4 rounded-lg">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-semibold">CAIXA Econômica</span>
            </div>
            <div className="flex items-center justify-center bg-green-50 p-4 rounded-lg">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-semibold">+17 Anos Militar</span>
            </div>
            <div className="flex items-center justify-center bg-green-50 p-4 rounded-lg">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-700 font-semibold">Pós-Graduado</span>
            </div>
          </div>

          <blockquote className="text-gray-700 text-center italic mb-8 text-lg leading-relaxed">
            "Após anos estudando sem método, descobri as técnicas que realmente funcionam. 
            Agora quero compartilhar este conhecimento com quem está começando, para que 
            você não perca anos como eu perdi."
          </blockquote>

          <div className="text-center">
            <div className="bg-yellow-400 border border-yellow-500 rounded-lg p-4">
              <p className="text-yellow-800 font-bold text-lg mb-1">
                📰 DESTAQUE NA MÍDIA:
              </p>
              <p className="text-yellow-800 font-semibold">
                Entrevistado pelo Estadão Concursos sobre métodos de aprovação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
