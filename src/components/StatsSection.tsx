
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "97%",
      label: "dos alunos obtiveram a nota máxima no concurso em menos de 1 ano"
    },
    {
      number: "3 anos",
      label: "é tempo médio que os estudantes levaram sem o método"
    },
    {
      number: "85%",
      label: "dos alunos foram aprovados na primeira tentativa"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          A Revolução CRUEL dos Concursos Públicos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-red-500 mb-4">
                {stat.number}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-red-500 font-semibold">
            Mas isso vai mudar HOJE para você!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
