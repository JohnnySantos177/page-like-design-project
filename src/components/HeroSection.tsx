
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            PARE de Estudar sem Rumo!
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Descubra o Método que <span className="text-yellow-200">VIRA O JOGO</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            e Aprova em <span className="text-yellow-200">QUALQUER</span> Concurso
          </h3>
          
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            O método cientista que leva Jonny Sábia à aprovação em TNT-19
            <br />
            agora revelado para concurseiros iniciantes
          </p>

          <div className="bg-black/20 backdrop-blur rounded-lg p-8 mb-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-6">
              📚 VOCÊ IRÁ APRENDER:
            </h4>
            <ul className="text-left text-white space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✓</span>
                Como estudar até 2x mais rápido
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✓</span>
                As técnicas de memorização dos aprovados
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✓</span>
                Os segredos dos aprovados que 99% não sabem
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✓</span>
                Como fazer revisões que realmente funcionam
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3">✓</span>
                O cronograma exato para sua aprovação
              </li>
            </ul>
          </div>

          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            🚀 QUERO O MÉTODO QUE FUNCIONA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
