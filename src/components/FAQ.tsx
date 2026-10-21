import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
    question: "O que exatamente é o BPO Financeiro e como difere do meu contador?",
    answer: "O BPO (Business Process Outsourcing) atua na execução diária do seu negócio: emissão de notas, conciliação bancária, agendamentos no banco e cobranças. O contador, por outro lado, foca nas obrigações fiscais, impostos e folha de pagamento. Nós organizamos a casa e entregamos tudo mastigado para a sua contabilidade, trabalhando em total sinergia."
  },
  {
    question: "Vou perder o controle do meu dinheiro ao terceirizar a gestão?",
    answer: "Pelo contrário, você ganhará mais controle e visibilidade. A aprovação final e a autorização de qualquer pagamento continuam sendo exclusivamente suas (através de tokens ou aprovação no seu app bancário). Nós apenas preparamos, agendamos e fornecemos os relatórios precisos para a sua tomada de decisão."
  },
  {
    question: "A consultoria estratégica já está inclusa no serviço de BPO?",
    answer: "O BPO foca na organização e execução da rotina. No entanto, nossos planos podem ser formatados de maneira modular. Caso opte por incluir a Consultoria, atuamos também como seu CFO virtual, analisando os dados gerados pelo BPO para otimizar custos, projetar cenários e traçar estratégias de alto crescimento."
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
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".faq-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".faq-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={containerRef} className="py-24 border-t border-[#472f5b]/10 bg-[#fffff0]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        
        {/* FAQ Header */}
        <div className="lg:w-1/3 faq-header">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Esclarecimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-widest text-[#472f5b] mb-6">
            Dúvidas <br/><span className="italic lowercase text-[#b2893d]">Frequentes</span>
          </h2>
          <p className="text-[#2a3a1e] text-sm font-normal leading-relaxed tracking-wide">
            Transparência total desde o primeiro contato. Entenda os pilares da nossa operação e como blindamos as suas finanças.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="lg:w-2/3">
          <div className="border-t border-[#472f5b]/20">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className="faq-item border-b border-[#472f5b]/10 overflow-hidden"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <h3 className={`text-sm md:text-base font-serif uppercase tracking-widest pr-8 transition-colors duration-300 ${isOpen ? 'text-[#b2893d]' : 'text-[#472f5b] group-hover:text-[#b2893d]'}`}>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-[#D8B36B] text-[#b2893d]' : 'border-[#472f5b]/20 text-[#472f5b] group-hover:border-[#D8B36B] group-hover:text-[#b2893d]'}`}
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
                        <div className="pb-8 pr-12 text-sm font-normal text-[#2a3a1e] leading-relaxed tracking-wide">
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
