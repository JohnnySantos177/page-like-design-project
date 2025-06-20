
import React from 'react';
import { Shield } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="bg-green-500 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Garantia Blindada de 7 Dias
          </h2>
          <p className="text-xl text-white mb-6">
            Você vai conseguir seus primeiros resultados em 7 dias de uso ou nós devolvemos 100% do seu dinheiro
          </p>
          <p className="text-white">
            Eu acredito tanto no meu método que vou te dar uma garantia BLINDADA de 7 dias! Se você não conseguir resultados práticos em uma semana, eu devolvo 100% do valor investido. Sem perguntas, sem burocracias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
