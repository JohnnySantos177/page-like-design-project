
import React from 'react';
import { CheckCircle, Brain, Target, Clock, TrendingUp, Award, Users, BookOpen } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "ROTINA INTELIGENTE",
      subtitle: "A metodologia para a Aprovação",
      description: "Sistema de estudos com resultados comprovados que garante sua aprovação."
    },
    {
      icon: Target,
      title: "Técnicas de Micro Estudo Acelerado",
      subtitle: "Mais de uma hora de ensino focado",
      description: "Aprenda as técnicas que aceleram seu aprendizado em até 300%."
    },
    {
      icon: Clock,
      title: "Cronograma de Estudos Inteligente",
      subtitle: "Organize seu dia atual na TXT-19",
      description: "Sistema completo de organização para máxima produtividade."
    },
    {
      icon: TrendingUp,
      title: "Técnica das Revisões Certas",
      subtitle: "Use as questões, domine como resolver",
      description: "Método revolucionário de revisão que fixa o conteúdo para sempre."
    },
    {
      icon: Award,
      title: "Método de Resolução",
      subtitle: "Chegue na resposta certa nos provas",
      description: "Estratégias exclusivas para acertar mais questões em menos tempo."
    },
    {
      icon: Users,
      title: "Estratégias Commented",
      subtitle: "Analise os seus comentários que funcionam",
      description: "Aprenda com os erros mais comuns e como evitá-los."
    },
    {
      icon: BookOpen,
      title: "Estratégias de Revisão",
      subtitle: "Textos que ficarão na sua cabeça por anos",
      description: "Sistema de fixação permanente do conhecimento."
    }
  ];

  const bonusItem = {
    icon: CheckCircle,
    title: "BÔNUS EXCLUSIVO",
    subtitle: "Acesso à Curação Cronológica",
    description: "Uma linha do tempo com todo material organizado estrategicamente."
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start mb-12">
            <div className="w-2 bg-red-500 h-32 mr-6 flex-shrink-0"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                📚 ROTINA INTELIGENTE - A metodologia para a Aprovação
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Um sistema completo de estudos que vai transformar sua preparação e garantir sua aprovação no concurso dos seus sonhos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {benefit.subtitle}
                    </p>
                    <p className="text-gray-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mt-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-700 mb-1">
                  {bonusItem.title}
                </h3>
                <p className="text-sm text-red-600 mb-2">
                  {bonusItem.subtitle}
                </p>
                <p className="text-red-700">
                  {bonusItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
