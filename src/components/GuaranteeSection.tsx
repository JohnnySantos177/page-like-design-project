
import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, Clock } from 'lucide-react';

const GuaranteeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('guarantee-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="guarantee-section" className="bg-gradient-to-r from-green-500 to-green-600 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-spin"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-white rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full animate-pulse">
              <Shield className="w-20 h-20 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Garantia Blindada de 7 Dias
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Você vai conseguir seus primeiros resultados em 7 dias de uso ou nós devolvemos 
            <span className="font-bold text-yellow-200"> 100% do seu dinheiro</span>
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
            <p className="text-white text-lg leading-relaxed mb-6">
              Eu acredito tanto no meu método que vou te dar uma garantia BLINDADA de 7 dias! 
              Se você não conseguir resultados práticos em uma semana, eu devolvo 100% do valor investido.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-white">
                <CheckCircle className="w-12 h-12 mb-3 text-yellow-200" />
                <h4 className="font-bold mb-2">Sem Perguntas</h4>
                <p className="text-sm opacity-90">Processo simples e rápido</p>
              </div>
              
              <div className="flex flex-col items-center text-white">
                <Clock className="w-12 h-12 mb-3 text-yellow-200" />
                <h4 className="font-bold mb-2">Sem Burocracias</h4>
                <p className="text-sm opacity-90">Reembolso em até 48h</p>
              </div>
              
              <div className="flex flex-col items-center text-white">
                <Shield className="w-12 h-12 mb-3 text-yellow-200" />
                <h4 className="font-bold mb-2">100% Seguro</h4>
                <p className="text-sm opacity-90">Sua confiança protegida</p>
              </div>
            </div>
          </div>

          <div className="text-white text-sm opacity-80">
            <p>* Garantia válida para compras realizadas através deste site</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
