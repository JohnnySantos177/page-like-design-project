import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Badge superior */}
          <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm mb-8 animate-pulse">
            🔥 MÉTODO COMPROVADO • RESULTADOS REAIS
          </div>

          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in max-w-6xl mx-auto">
            <span className="text-yellow-400">PARE</span> de Estudar sem Rumo!
            <br />
            Descubra o Método que <span className="text-yellow-400 animate-pulse">VIRA O</span>
            <br />
            <span className="text-yellow-400 animate-pulse">JOGO</span> e Aprova em <span className="text-yellow-400 animate-pulse">QUALQUER</span> Concurso
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-200 mb-8 font-medium animate-fade-in delay-200">
            Descubra o ebook desenvolvido por Johnny Santos
            <br />
            para otimizar seus estudos e aumentar suas chances de aprovação
          </h2>

          {/* Video placeholder */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in delay-500">
            <div className="bg-[#3a2323] bg-opacity-90 border-2 border-red-400 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-red-500 mb-6 flex items-center justify-center gap-2">
                <span role='img' aria-label='surpreso'>😱</span> Você está cansado de...
              </h3>
              <ul className="text-left text-white text-lg space-y-3 list-disc list-inside">
                <li><span role='img' aria-label='livro'>📚</span> Estudar horas e horas todos os dias... e ainda sentir que não sai do lugar?</li>
                <li><span role='img' aria-label='confuso'>🥴</span> Se perder no meio de tanto conteúdo e não saber nem por onde começar?</li>
                <li><span role='img' aria-label='triste'>😔</span> Ver colegas sendo aprovados enquanto você coleciona frustrações?</li>
                <li><span role='img' aria-label='dinheiro'>💸</span> Gastar dinheiro em cursinhos e métodos que prometem muito, mas entregam pouco?</li>
                <li><span role='img' aria-label='sono'>😴</span> Estudar com afinco e... travar na hora da prova, como se tivesse esquecido tudo?</li>
              </ul>
            </div>
          </div>

          {/* Benefícios principais */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in delay-700">
            {[
              {
                icon: "🎯",
                title: "FOCO DIRECIONADO",
                desc: "Estude o que realmente importa para sua aprovação"
              },
              {
                icon: "⚡",
                title: "ORGANIZAÇÃO EFICIENTE", 
                desc: "Sistema testado de estudos organizados"
              },
              {
                icon: "🏆",
                title: "ESTRATÉGIA COMPROVADA",
                desc: "Método usado por concurseiros aprovados"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-yellow-400 font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Principal */}
          <div className="space-y-6">
            <a
              href="https://pay.hotmart.com/B95382363M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-12 py-6 text-2xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-glow hover:shadow-green-500/50"
            >
              🚀 QUERO ACESSAR O MÉTODO AGORA!
            </a>
            
            <div className="flex items-center justify-center space-x-4 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">Acesso imediato • Garantia de 7 dias • Suporte incluso</span>
            </div>
          </div>

          {/* Prova social */}
          <div className="mt-12 animate-fade-in delay-1000">
            <p className="text-blue-200 mb-4">Criado por especialista aprovado:</p>
            <div className="flex justify-center items-center space-x-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">TRT-19</div>
                <div className="text-sm">Aprovado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">Gestão</div>
                <div className="text-sm">Especialista</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">Prático</div>
                <div className="text-sm">Método Testado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
