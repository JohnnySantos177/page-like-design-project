
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Investimento no Seu Sucesso de
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Sua vida organizacional vai mudar hoje
        </p>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-red-500 text-white py-2 px-4 relative">
              <span className="font-bold">ESTA SEMANA APENAS</span>
              <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg text-sm font-bold">
                67% OFF
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-6xl font-bold text-red-500 mb-4">
                R$ 39,90
              </div>
              <div className="text-gray-500 line-through text-xl mb-6">
                De R$ 120,00
              </div>

              <div className="bg-green-500 text-white py-3 px-6 rounded-lg mb-6">
                <div className="font-bold">ACESSO IMEDIATO + GARANTIA</div>
                <div className="text-sm">Resultados em 7 dias ou seu dinheiro de volta</div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-lg font-bold rounded-lg mb-4"
              >
                COMPRAR AGORA - ACESSO IMEDIATO
              </Button>

              <div className="text-xs text-gray-500">
                <p>⚡ Entrega: 100% Digital - Acesso em até 5 min</p>
                <p>🔒 Compra Segura - Site Protegido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
