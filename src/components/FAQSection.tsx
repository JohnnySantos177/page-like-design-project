import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "❓ Sou iniciante total em concursos. Este método funciona para mim?",
      answer: '<b>SIM!</b> O método foi desenvolvido especialmente pensando em quem está começando. Todas as técnicas são explicadas de forma simples e prática, sem "juridiquês" ou complicações.'
    },
    {
      question: "🤖 Tenho pouco tempo para estudar. Ainda assim funciona?",
      answer: '<b>PERFEITAMENTE!</b> Uma das principais vantagens do método é otimizar seu tempo de estudo. Você vai aprender a estudar de forma mais eficiente, absorvendo mais conteúdo em menos tempo.'
    },
    {
      question: "💰 O que acontece se eu não gostar do conteúdo?",
      answer: '<b>7 dias de garantia total</b>. Se por qualquer motivo não ficar satisfeito, basta enviar um email e devolvemos 100% do seu dinheiro, sem perguntas.'
    },
    {
      question: "📅 Como vou receber o material?",
      answer: 'O acesso é <b>100% online e imediato</b>. Após a compra, você recebe um email com o link para download. Funciona em celular, tablet e computador.'
    },
    {
      question: "🏆 Este método funciona para qualquer tipo de concurso?",
      answer: '<b>SIM!</b> As técnicas são universais e funcionam para qualquer concurso: federal, estadual, municipal, tribunais, polícias, etc. Os princípios de estudo eficiente são os mesmos.'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Perguntas Frequentes
        </h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-red-500 rounded-xl shadow-lg border-none"
              >
                <AccordionTrigger className="px-8 py-6 text-left font-bold text-white hover:no-underline text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-800 bg-white rounded-b-xl">
                  <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
