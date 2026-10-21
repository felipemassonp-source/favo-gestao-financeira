import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como a Favo garante a segurança e o sigilo das minhas informações financeiras?",
    answer: "A confidencialidade é a base do nosso negócio. Trabalhamos com rigorosos Contratos de Confidencialidade (NDA) assinados antes de qualquer troca de dados. Toda a comunicação e acesso aos sistemas ocorrem em ambiente seguro, com permissões restritas exclusivamente aos analistas seniores dedicados à sua conta."
  },
  {
    question: "Como funciona o processo de transição do meu financeiro para a Favo?",
    answer: "O processo é estruturado, guiado e sem interrupções (onboarding white-glove). Realizamos um diagnóstico inicial, mapeamos seus fluxos atuais, configuramos os sistemas e assumimos a operação de forma gradativa. Você não sentirá nenhum impacto negativo no dia a dia, apenas o alívio imediato da carga burocrática."
  },
  {
    question: "Qual a diferença entre BPO, Assistência Financeira e Gestão Financeira?",
    answer: "A Favo estrutura o atendimento operacional em 3 níveis modulares claros: 1) BPO (Processo Padrão): Organização de contas a pagar e receber, conciliação bancária, relatórios semanais e fechamento mensal (sem agendamento no banco). 2) Assistência Financeira Virtual (Processo Padrão + Suporte): Assume o agendamento bancário no seu internet banking, emissão de notas fiscais e boletos, gestão de cartões de crédito e régua de cobrança. 3) Gestão Financeira (Processo Padrão + Suporte + Análise): Toda a rotina diária somada a relatórios executivos com gráficos de resultados, projeções futuras, análise de geração de caixa e controle de metas."
  },
  {
    question: "Vou perder o controle do meu dinheiro ao terceirizar a gestão?",
    answer: "Pelo contrário, você ganhará mais controle e visibilidade. A aprovação final e a autorização de qualquer pagamento continuam sendo exclusivamente suas (através de tokens ou aprovação no seu app bancário). Nós apenas preparamos, agendamos e fornecemos os relatórios precisos para a sua tomada de decisão."
  },
  {
    question: "A consultoria financeira já está inclusa no serviço de BPO ou Gestão?",
    answer: "A Consultoria é uma imersão dedicada de 08 semanas com 4 encontros online ao vivo (até 1h30min cada) e 60 dias de suporte via WhatsApp. Enquanto os planos operacionais (BPO, Assistência Virtual e Gestão Financeira) cuidam da rotina contínua de pagamentos, conciliação, notas e relatórios, a Consultoria te guia para encontrar os gargalos do financeiro e entrega o Raio-X completo e o mapa estratégico de melhorias."
  },
  {
    question: "Terceirizar não é mais caro do que contratar um assistente ou funcionário interno?",
    answer: "Muito pelo contrário. Um funcionário interno (CLT) exige arcar com encargos sociais, 13º salário, férias, vale-refeição, além de equipamentos e infraestrutura. Com a Favo, você não tem nenhum passivo trabalhista ou risco de rotatividade. Entregamos o trabalho de uma equipe sênior, com supervisão e sistemas já configurados, por uma fração do custo de uma contratação direta."
  },
  {
    question: "Minha empresa precisará trocar de sistema/software financeiro?",
    answer: "Não necessariamente. Somos especialistas na implantação e operação dos principais ERPs do mercado (como Conta Azul, Omie, Nibo, etc). Se você já utiliza um sistema aderente, nós o assumimos. Caso sua empresa ainda não tenha um sistema estruturado, forneceremos as licenças e implementaremos a ferramenta ideal para a sua realidade, sem custo extra de setup."
  },
  {
    question: "Meu negócio ainda é pequeno. O BPO financeiro é indicado para o meu momento?",
    answer: "Com certeza. A desorganização é o que mais encarece a operação de uma pequena empresa (atrasos, multas, falta de clareza de onde investir). Terceirizar desde cedo permite que você foque 100% nas suas vendas e no seu produto, preparando a casa para escalar de forma sustentável e previsível desde o primeiro dia."
  },
  {
    question: "Como será nossa comunicação e suporte no dia a dia?",
    answer: "Entendemos que a rotina financeira exige dinamismo. Você e sua equipe terão um canal direto (via WhatsApp corporativo, e-mail ou Slack) com o analista financeiro exclusivo da sua conta e nosso time de coordenação. Estabelecemos SLAs rígidos de resposta rápida para garantir que nenhuma aprovação urgente fique para trás."
  },
  {
    question: "E se a Favo esquecer ou atrasar o pagamento de uma conta?",
    answer: "Nossa operação é pautada por rigorosos checklists de qualidade, dupla conferência e softwares que nos alertam sobre vencimentos com antecedência. Em contrato, assumimos o compromisso de exatidão técnica; caso qualquer atraso decorra exclusivamente de falha operacional nossa, assumimos a totalidade de eventuais multas e juros correspondentes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 border-t border-[#472F5B]/15 bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        
        {/* FAQ Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:w-1/3"
        >
          <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#472F5B] font-mono block mb-4">
            ESCLARECIMENTOS & TRANSPARÊNCIA
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#1F242D] mb-6">
            Dúvidas <br/><span className="italic text-[#472F5B] font-medium">Frequentes</span>
          </h2>
          <p className="text-[#4B5262] text-sm md:text-base font-normal leading-relaxed">
            Transparência total desde o primeiro contato. Entenda os pilares da nossa operação e como blindamos as suas finanças.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="lg:w-2/3">
          <div className="border-t border-[#472F5B]/20">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className="faq-item border-b border-[#472F5B]/15 overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                  >
                    <h3 className={`text-base md:text-lg font-serif font-medium pr-8 transition-colors duration-300 ${isOpen ? 'text-[#472F5B]' : 'text-[#1F242D] group-hover:text-[#472F5B]'}`}>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-[#472F5B] bg-[#472F5B] text-[#FFFFF0]' : 'border-[#472F5B]/20 text-[#472F5B] group-hover:border-[#472F5B]'}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="pb-8 pr-12 text-sm font-normal text-[#4B5262] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
