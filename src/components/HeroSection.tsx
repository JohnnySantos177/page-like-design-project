
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            PARE de Estudar sem Rumo!
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in delay-200">
            Descubra o Método que <span className="text-yellow-200 animate-pulse">VIRA O JOGO</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-fade-in delay-300">
            e Aprova em <span className="text-yellow-200 animate-pulse">QUALQUER</span> Concurso
          </h3>
          
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto animate-fade-in delay-500">
            O método científico que leva Johnny Sábia à aprovação em TRT-19
            <br />
            agora revelado para concurseiros iniciantes
          </p>

          <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 mb-8 max-w-2xl mx-auto shadow-2xl border border-white/10 animate-fade-in delay-700">
            <h4 className="text-2xl font-bold text-white mb-6">
              📚 VOCÊ IRÁ APRENDER:
            </h4>
            <ul className="text-left text-white space-y-4">
              {[
                "Como estudar até 2x mais rápido",
                "As técnicas de memorização dos aprovados",
                "Os segredos dos aprovados que 99% não sabem",
                "Como fazer revisões que realmente funcionam",
                "O cronograma exato para sua aprovação"
              ].map((item, index) => (
                <li key={index} className={`flex items-start transition-all duration-300 delay-${(index + 1) * 100} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <span className="text-yellow-300 mr-3 text-xl">✓</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-glow hover:shadow-red-500/50"
          >
            🚀 QUERO O MÉTODO QUE FUNCIONA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
