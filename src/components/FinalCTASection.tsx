
import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCTASection = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            ⚡ ÚLTIMA CHANCE!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Não deixe passar - até que passou você conseguiu o que estava, 
            mas você merece mais! Chegou a hora de decidir!
          </p>

          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-200 shadow-2xl mb-8"
          >
            GARANTIR MINHA VAGA AGORA!
          </Button>

          <p className="text-sm text-gray-400 mb-8">
            🔒 Acesso único e direto da vida
          </p>

          <div className="text-xs text-gray-500 max-w-2xl mx-auto">
            <p className="mb-2">
              © 2024 - TNT Método. Todos os direitos reservados.
            </p>
            <p>
              Este produto não substitui o acompanhamento de um profissional. Qualquer dúvida, procure orientação. Os resultados podem variar de pessoa para pessoa. Proibida a reprodução total ou parcial deste método.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
