
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
              📚 <span className="text-blue-600">ROTINA INTELIGENTE</span>
              <br />
              O Sistema Completo Para Sua Aprovação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para estudar de forma eficiente e aumentar 
              suas chances de conquistar sua aprovação
            </p>
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

          {/* O que você vai receber */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-10 border border-green-200">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              🎁 O QUE VOCÊ VAI RECEBER:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {bonusItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Valor total */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-center">
              <p className="text-black text-lg mb-2">
                <span className="font-bold">VALOR TOTAL:</span> <span className="line-through">R$ 497,00</span>
              </p>
              <p className="text-black text-3xl font-bold">
                HOJE POR APENAS: <span className="text-red-600">R$ 97,00</span>
              </p>
              <p className="text-black text-sm mt-2">
                ⏰ Oferta por tempo limitado • Acesso imediato
              </p>
            </div>
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
