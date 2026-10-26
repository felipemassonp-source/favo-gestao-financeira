import { useRef } from "react";
import { motion } from "motion/react";
import { MessageCircle, CheckCircle2, FileText, Video, Search } from "lucide-react";

const timelineSteps = [
  {
    encounter: "1º Encontro",
    title: "Identificação de gargalos e objetivo do empresário",
    timing: "Semana 1",
    description: "Entender onde estão os principais problemas do financeiro e qual é o objetivo do empresário com o negócio.",
    icon: Search
  },
  {
    encounter: "2º Encontro",
    title: "Mapeamento de processos e análise de números",
    timing: "Semana 3",
    description: "Mapear os processos que já existem na empresa e analisar os números atuais.",
    icon: FileText
  },
  {
    encounter: "3º Encontro",
    title: "Raio-X financeiro e identificação do problema",
    timing: "Semana 5",
    description: "Apresentar o diagnóstico completo, com os números analisados e o problema central identificado.",
    icon: CheckCircle2
  },
  {
    encounter: "4º Encontro",
    title: "Mapa estratégico",
    timing: "Semana 7",
    description: "Entregar o plano com as melhorias a serem aplicadas e as ferramentas sugeridas.",
    icon: Video
  },
  {
    encounter: "Suporte Contínuo",
    title: "60 Dias de Suporte via WhatsApp",
    timing: "08 semanas & 60 dias de suporte",
    description: "Acompanhamento e suporte de 60 dias via WhatsApp para tirar dúvidas e assegurar a execução prática das ferramentas.",
    icon: MessageCircle,
    highlight: true
  }
];

export default function ConsultingTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-10 mt-10">
      {/* Background Static Line */}
      <div className="absolute left-[27px] md:left-[50%] top-0 bottom-0 w-[1px] bg-[#38183A]/15 -translate-x-1/2"></div>
      
      {/* Subtle Warm Accent Line */}
      <div className="absolute left-[27px] md:left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D97706] via-[#38183A]/30 to-[#25D366] -translate-x-1/2 opacity-70"></div>

      <div className="space-y-16">
        {timelineSteps.map((step, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Central Node */}
              <div className="absolute left-[27px] md:left-[50%] w-12 h-12 -translate-x-1/2 rounded-full border-2 border-[#D97706] bg-[#FFFFF0] flex items-center justify-center z-10 shadow-sm transition-transform duration-500 hover:scale-110">
                {step.highlight ? (
                  <MessageCircle className="w-5 h-5 text-[#25D366]" strokeWidth={2} />
                ) : (
                  <span className="text-xs font-serif font-bold text-[#38183A]">{idx + 1}</span>
                )}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pl-10 text-left' : 'md:pr-10 md:text-right'}`}>
                <div className={`p-6 sm:p-8 rounded-2xl bg-white border ${step.highlight ? 'border-[#25D366]/40 shadow-lg' : 'border-[#38183A]/15 shadow-sm'} hover:shadow-md transition-shadow relative overflow-hidden`}>
                  {step.highlight && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#25D366]/10 to-transparent rounded-full pointer-events-none" />
                  )}

                  <div className={`flex items-center gap-2 mb-2 ${isEven ? 'justify-start' : 'md:justify-end'}`}>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#D97706] bg-[#D97706]/10 px-2.5 py-0.5 rounded-full border border-[#D97706]/20">
                      {step.encounter}
                    </span>
                    <span className="text-[11px] text-[#4B5262] font-medium">
                      • {step.timing}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-medium text-[#1F242D] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
