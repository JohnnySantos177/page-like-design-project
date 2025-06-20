import React from 'react';
import { CheckCircle, Brain, Target, Clock, TrendingUp, Award, Users, BookOpen, Zap, Star } from 'lucide-react';

const BenefitsSection = () => {
  const mainBenefits = [
    {
      icon: Brain,
      title: "SISTEMA DE ESTUDOS ORGANIZADO",
      subtitle: "Metodologia estruturada para aprovação",
      description: "Framework completo com cronogramas, técnicas de memorização e estratégias de revisão desenvolvidas por quem foi aprovado."
    },
    {
      icon: Target,
      title: "FOCO NO QUE REALMENTE IMPORTA",
      subtitle: "Direcionamento baseado em experiência",
      description: "Aprenda a identificar o que é mais importante estudar com base na experiência de quem já passou."
    },
    {
      icon: Zap,
      title: "TÉCNICAS PRÁTICAS DE ESTUDO",
      subtitle: "Métodos testados na prática",
      description: "Estratégias de memorização e fixação que realmente funcionam, testadas em concursos reais."
    }
  ];

  const bonusItems = [
    "🎯 Cronograma de estudos estruturado",
    "📚 Técnicas de leitura eficiente",
    "🧠 Mapas mentais para memorização", 
    "📝 Sistema de revisões estratégicas",
    "⚡ Método de resolução de questões",
    "📊 Planilhas de acompanhamento",
    "🎥 Conteúdo explicativo detalhado",
    "💬 Suporte e orientações"
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Título principal */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              🎯 ROTA INTELIGENTE: A Jornada para a Aprovação
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto font-bold mb-8">
              O método completo que vai revolucionar seus estudos e acelerar sua aprovação!
            </p>
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/Capa E-Book.png" 
                alt="Capa do Ebook Rota Inteligente" 
                className="rounded-2xl shadow-xl max-w-xs w-full h-auto"
              />
            </div>
          </div>

          {/* Benefícios principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {mainBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <div className="bg-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 text-xl">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-600 mb-3 font-medium">
                    {benefit.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Garantia */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-green-100 border border-green-300 rounded-full px-6 py-3">
              <Award className="w-6 h-6 text-green-600 mr-3" />
              <span className="text-green-700 font-semibold">
                🛡️ GARANTIA TOTAL DE 7 DIAS OU SEU DINHEIRO DE VOLTA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
