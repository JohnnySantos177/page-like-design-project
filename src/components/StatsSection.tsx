
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "5.247+",
      label: "concurseiros aprovados usando nosso método em 2024",
      icon: "🏆"
    },
    {
      number: "89%",
      label: "dos nossos alunos são aprovados na primeira tentativa",
      icon: "📈"
    },
    {
      number: "2 horas",
      label: "por dia é o tempo médio de estudo dos nossos aprovados",
      icon: "⏰"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Revolução dos <span className="text-yellow-400">Concursos Públicos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enquanto outros estudam por anos sem resultados, nossos alunos conquistam 
            a aprovação de forma rápida e eficiente
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">
                {stat.number}
              </div>
              <p className="text-white text-lg leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-red-500/20 border border-red-500 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-2xl text-red-400 font-bold mb-2">
              ⚠️ ATENÇÃO
            </p>
            <p className="text-white text-lg">
              Estes resultados só são possíveis com o método correto. 
              <br />
              <span className="text-yellow-400 font-semibold">Não perca mais tempo estudando errado!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
