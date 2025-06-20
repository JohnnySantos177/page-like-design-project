
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
            🔥 MÉTODO REVOLUCIONÁRIO • APROVAÇÃO GARANTIDA
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            <span className="text-yellow-400">ROTINA INTELIGENTE</span>
            <br />
            O Método que Vai Te Fazer
            <br />
            <span className="text-green-400 animate-pulse">PASSAR EM QUALQUER CONCURSO</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-200 mb-8 font-medium animate-fade-in delay-200">
            Descubra o sistema completo que aprovou mais de 5.000 concurseiros 
            <br />
            em menos de 12 meses, mesmo estudando apenas 2 horas por dia
          </h2>

          {/* Video placeholder */}
          <div className="relative max-w-4xl mx-auto mb-12 animate-fade-in delay-500">
            <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <Button 
                  size="lg" 
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-xl font-bold rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl z-10"
                >
                  <Play className="w-8 h-8 mr-3" />
                  ASSISTIR VÍDEO GRATUITO
                </Button>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
                  📹 Vídeo exclusivo • 47 min
                </div>
              </div>
              <p className="text-white text-center mt-4 text-lg">
                👆 Assista agora e descubra como estudar de forma inteligente
              </p>
            </div>
          </div>

          {/* Benefícios principais */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in delay-700">
            {[
              {
                icon: "🎯",
                title: "FOCO LASER",
                desc: "Estude apenas o que realmente cai na prova"
              },
              {
                icon: "⚡",
                title: "RESULTADOS RÁPIDOS", 
                desc: "Veja evolução em apenas 30 dias"
              },
              {
                icon: "🏆",
                title: "APROVAÇÃO GARANTIDA",
                desc: "Método testado por +5.000 aprovados"
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
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 text-2xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl animate-pulse-glow hover:shadow-green-500/50"
            >
              🚀 QUERO ACESSAR O MÉTODO AGORA!
            </Button>
            
            <div className="flex items-center justify-center space-x-4 text-white">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">Acesso imediato • Garantia de 7 dias • Suporte incluso</span>
            </div>
          </div>

          {/* Prova social */}
          <div className="mt-12 animate-fade-in delay-1000">
            <p className="text-blue-200 mb-4">Já transformamos a vida de:</p>
            <div className="flex justify-center items-center space-x-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5.247+</div>
                <div className="text-sm">Aprovados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">89%</div>
                <div className="text-sm">Taxa de Sucesso</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">2h/dia</div>
                <div className="text-sm">Tempo Médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
