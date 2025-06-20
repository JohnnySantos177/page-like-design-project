
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o método TNT-19? Não é mais uma 'receita de bolo'?",
      answer: "Não! O TNT-19 é um método científico baseado em técnicas comprovadas de memorização e organização. Não é teoria, são estratégias práticas que realmente funcionam."
    },
    {
      question: "Vou conseguir aplicar mesmo sendo iniciante?",
      answer: "Sim! O método foi desenvolvido especificamente para iniciantes. Você recebe um passo a passo detalhado e simples de seguir."
    },
    {
      question: "É preciso estudar muitas horas por dia?",
      answer: "Não! Uma das vantagens do método é otimizar seu tempo de estudo. Você vai estudar com mais qualidade, não necessariamente mais horas."
    },
    {
      question: "Funciona para qualquer concurso?",
      answer: "Sim! O método TNT-19 é aplicável a qualquer área e nível de concurso público. As técnicas são universais."
    },
    {
      question: "E se eu não conseguir colocar em prática?",
      answer: "Você tem 7 dias de garantia total. Se não conseguir aplicar ou não ver resultados, devolvemos 100% do seu dinheiro."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Perguntas Frequentes
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
