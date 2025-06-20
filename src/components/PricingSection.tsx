
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
          Investimento no Seu Sucesso
        </h2>
        <p className="text-xl text-gray-300 mb-12 animate-fade-in delay-200">
          Sua vida profissional vai mudar hoje
        </p>

        <div className="max-w-md mx-auto">
          <div 
            className={`bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 ${
              isHovered ? 'scale-105 shadow-red-500/20' : 'scale-100'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 relative">
              <span className="font-bold text-lg">ESTA SEMANA APENAS</span>
              <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-2 rounded-bl-2xl text-sm font-bold animate-pulse">
                67% OFF
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-7xl font-bold text-red-500 mb-4 animate-pulse">
                R$ 39,90
              </div>
              <div className="text-gray-500 line-through text-2xl mb-6">
                De R$ 120,00
              </div>

              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl mb-6 transform hover:scale-105 transition-all duration-300">
                <div className="font-bold text-lg">ACESSO IMEDIATO + GARANTIA</div>
                <div className="text-sm opacity-90">Resultados em 7 dias ou seu dinheiro de volta</div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6 text-xl font-bold rounded-xl mb-6 transform hover:scale-105 transition-all duration-300 shadow-xl animate-pulse-glow"
              >
                COMPRAR AGORA - ACESSO IMEDIATO
              </Button>

              <div className="text-sm text-gray-500 space-y-2">
                <p className="flex items-center justify-center">
                  <span className="mr-2">⚡</span>
                  Entrega: 100% Digital - Acesso em até 5 min
                </p>
                <p className="flex items-center justify-center">
                  <span className="mr-2">🔒</span>
                  Compra Segura - Site Protegido
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex justify-center items-center space-x-8 opacity-70">
          <div className="text-white text-sm">
            <div className="font-bold">256-bit SSL</div>
            <div>Segurança</div>
          </div>
          <div className="text-white text-sm">
            <div className="font-bold">Pagamento</div>
            <div>Seguro</div>
          </div>
          <div className="text-white text-sm">
            <div className="font-bold">Suporte</div>
            <div>24/7</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
