import React from 'react';
import { Button } from '@/components/ui/button';

const FinalCTASection = () => {
  return (
    <section className="bg-gradient-to-br from-neutral-900 to-black py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 flex items-center justify-center gap-2">
            <span role="img" aria-label="raio">⚡</span> ÚLTIMA CHANCE!
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-2">
            Não deixe mais um dia passar estudando do jeito errado.<br/>
            <span className="font-bold text-white">Sua aprovação está a apenas um clique de distância!</span>
          </p>
          <a
            href="https://pay.hotmart.com/B95382363M"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 mb-8 px-10 py-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-2xl font-extrabold shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 mx-auto"
          >
            <span role="img" aria-label="alvo">🎯</span> GARANTIR MINHA VAGA AGORA!
          </a>
          <div className="flex items-center justify-center gap-2 text-yellow-300 text-base font-medium mb-8">
            <span role="img" aria-label="alerta">⚠️</span> Restam apenas <span className="text-red-400 font-bold">5</span> para hoje
          </div>
        </div>
      </div>
      <footer className="w-full text-center text-white text-sm bg-black bg-opacity-80 py-4 mt-12">
        © 2024 Rota Inteligente. Todos os direitos reservados.
      </footer>
    </section>
  );
};

export default FinalCTASection;
