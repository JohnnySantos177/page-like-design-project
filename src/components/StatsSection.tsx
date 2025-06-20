
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "Aprovado",
      label: "no Tribunal Regional do Trabalho da Paraíba (TRT-19)",
      icon: "🏆"
    },
    {
      number: "Especialista",
      label: "em Direito e estratégias de estudos para concursos",
      icon: "📈"
    },
    {
      number: "Método",
      label: "testado e aprovado por quem realmente passou em concursos",
      icon: "⏰"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Método Criado por <span className="text-yellow-400">Johnny Santos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profissional aprovado em concursos públicos que desenvolveu um sistema 
            eficiente de estudos baseado em sua experiência real
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                {stat.number}
              </div>
              <p className="text-white text-lg leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-500/20 border border-blue-500 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-2xl text-blue-400 font-bold mb-2">
              ✅ CREDIBILIDADE
            </p>
            <p className="text-white text-lg">
              Método desenvolvido por quem realmente passou e sabe o que funciona.
              <br />
              <span className="text-yellow-400 font-semibold">Experiência prática, não apenas teoria!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
