import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield } from 'lucide-react';

const PricingSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Urgência */}
        <div className="bg-red-500 text-white py-3 px-6 rounded-full inline-block mb-8 animate-pulse">
          <span className="font-bold">⚠️ ATENÇÃO: Oferta por tempo limitado!</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
          🚀 Garanta Sua Vaga Agora
        </h2>
        <p className="text-xl text-gray-300 mb-12 animate-fade-in delay-200">
          Invista no seu futuro e melhore sua preparação para concursos
        </p>

        <div className="max-w-lg mx-auto">
          <div 
            className={`bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 border-4 border-yellow-400 ${
              isHovered ? 'scale-105 shadow-yellow-400/20' : 'scale-100'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Header do card */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-bold animate-pulse">
                🔥 80% OFF
              </div>
              <h3 className="font-bold text-2xl">ROTA INTELIGENTE</h3>
              <p className="text-green-100">Ebook</p>
            </div>
            
            <div className="p-8">
              {/* Preço e Oferta - NOVO BLOCO */}
              <div className="mb-8">
                <div className="text-gray-400 line-through text-2xl mb-2 font-semibold">
                  De R$ 197,00
                </div>
                <div className="text-5xl font-extrabold text-red-500 mb-2">
                  R$ 39,90
                </div>
                <div className="text-green-600 text-lg font-semibold mb-4">
                  ou 5x de R$ 8,83 sem juros
                </div>
                <div className="bg-green-500 text-white rounded-lg py-3 px-4 mb-4 flex flex-col items-center">
                  <span className="font-bold text-base">🎁 OFERTA ESPECIAL: 80% DE DESCONTO</span>
                  <span className="text-sm">Menos que um lanche no shopping!</span>
                </div>
                <a
                  href="https://pay.hotmart.com/B95382363M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500 text-white py-6 text-xl font-bold rounded-full mb-6 transform hover:scale-105 transition-all duration-300 shadow-xl animate-pulse-glow text-center"
                >
                  <span role="img" aria-label="cartao">💳</span> COMPRAR AGORA - ACESSO IMEDIATO
                </a>
                <div className="flex flex-col items-center mt-4 space-y-1">
                  <div className="flex items-center space-x-2 text-gray-700 text-sm">
                    <span role="img" aria-label="cadeado">🔒</span> <span>Pagamento 100% Seguro</span>
                    <span className="mx-1">|</span>
                    <span role="img" aria-label="relampago">🔵</span> <span>Acesso Imediato</span>
                    <span className="mx-1">|</span>
                    <span role="img" aria-label="dispositivo">📱</span> <span>Funciona em qualquer dispositivo</span>
                  </div>
                </div>
              </div>

              {/* Benefícios */}
              <div className="space-y-3 mb-8 text-left">
                {[
                  "✅ Acesso imediato e vitalício",
                  "✅ Técnicas de memorização",
                  "✅ Sistema de revisões",
                  "✅ Suporte disponível",
                  "✅ Garantia de 7 dias"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Urgência */}
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-bold text-sm">
                  ⏰ OFERTA POR TEMPO LIMITADO
                </p>
                <p className="text-yellow-700 text-xs">
                  Aproveite esta oportunidade especial
                </p>
              </div>

              {/* Segurança */}
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Pagamento 100% Seguro</span>
                </div>
                <div className="flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Acesso liberado em até 5 minutos</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testemunho de urgência */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-blue-900/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
            <p className="text-white text-lg italic mb-4">
              "O conhecimento é o melhor investimento que você pode fazer. 
              Comece hoje sua preparação de forma organizada e eficiente!"
            </p>
            <p className="text-blue-300 font-semibold">
              - Johnny Santos, Aprovado TRT-19
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
