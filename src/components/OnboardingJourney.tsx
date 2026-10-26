import { useRef } from "react";
import { motion } from "motion/react";
import { Rocket } from "lucide-react";

interface OnboardingStep {
  stepLabel: string;
  timing: string;
  title: string;
  description: string;
  bullets?: string[];
  highlight?: boolean;
}

const timelineSteps: OnboardingStep[] = [
  {
    stepLabel: "1ª Etapa",
    timing: "Alinhamento",
    title: "Call Diagnóstica",
    description: "Entender o que o cliente precisa.",
  },
  {
    stepLabel: "2ª Etapa",
    timing: "Escopo",
    title: "Proposta",
    description: "Enviada após a call.",
  },
  {
    stepLabel: "3ª Etapa",
    timing: "Formalização",
    title: "Contrato",
    description: "Enviado somente após a proposta ser aprovada.",
  },
  {
    stepLabel: "4ª Etapa",
    timing: "Ativação",
    title: "Pagamento",
    description: "Realizado após a assinatura do contrato.",
  },
  {
    stepLabel: "5ª Etapa",
    timing: "Imersão",
    title: "Reunião de Kickoff",
    description: "Marcada após o pagamento. Nela:",
    bullets: [
      "Coletam-se todos os acessos;",
      "Entende-se como funciona o financeiro do cliente;",
      "Levantam-se prazos e planilhas em uso;",
      "Definem-se as rotinas do dia a dia, que serão executadas depois.",
    ],
  },
  {
    stepLabel: "6ª Etapa",
    timing: "Cerca de 10 dias",
    title: "Implantação",
    description: "Organizar todo o histórico financeiro e fazer as projeções futuras do financeiro do cliente.",
  },
  {
    stepLabel: "7ª Etapa",
    timing: "Validação de Dados",
    title: "Segunda Reunião",
    description: "O time do cliente valida os dados implantados.",
  },
  {
    stepLabel: "8ª Etapa",
    timing: "Operação Contínua",
    title: "Mão na Massa",
    description: "A Favo assume o dia a dia do financeiro do cliente, seguindo as rotinas definidas no kickoff.",
    highlight: true,
  },
];

export default function OnboardingJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-20 border-t border-[#E5E7EB]">
      {/* Cabeçalho no mesmo layout da Consultoria */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <span className="text-[#D97706] text-xs uppercase tracking-[0.25em] mb-4 block font-semibold">
            Passo a Passo da Contratação à Operação
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111827] leading-tight">
            Jornada de <br className="hidden sm:block" />
            <span className="italic text-[#D97706] font-medium">Implantação</span>
          </h2>
        </div>
        <div className="max-w-md space-y-3">
          <p className="text-[#333A48] text-sm md:text-base font-normal leading-relaxed">
            Da primeira conversa até a operação diária — um fluxo claro, estruturado e sem atritos para organizar e assumir o seu financeiro.
          </p>
          <div className="inline-flex flex-wrap items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#38183A]/8 border border-[#38183A]/15 text-xs font-medium text-[#38183A]">
            <span>Válido para:</span>
            <strong className="font-semibold">BPO Financeiro</strong>
            <span>•</span>
            <strong className="font-semibold">Assistência Virtual</strong>
            <span>•</span>
            <strong className="font-semibold">Gestão Financeira</strong>
          </div>
        </div>
      </div>

      {/* Linha do Tempo Alternada (idêntica à da Consultoria) */}
      <div className="relative w-full max-w-4xl mx-auto py-10 mt-10">
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
                className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Central Node */}
                <div className="absolute left-[27px] md:left-[50%] w-12 h-12 -translate-x-1/2 rounded-full border-2 border-[#D97706] bg-[#FFFFF0] flex items-center justify-center z-10 shadow-sm transition-transform duration-500 hover:scale-110">
                  {step.highlight ? (
                    <Rocket className="w-5 h-5 text-[#25D366]" strokeWidth={2} />
                  ) : (
                    <span className="text-xs font-serif font-bold text-[#38183A]">{idx + 1}</span>
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                    isEven ? "md:pl-10 text-left" : "md:pr-10 md:text-right"
                  }`}
                >
                  <div
                    className={`p-6 sm:p-8 rounded-2xl bg-white border ${
                      step.highlight ? "border-[#25D366]/40 shadow-lg" : "border-[#38183A]/15 shadow-sm"
                    } hover:shadow-md transition-shadow relative overflow-hidden`}
                  >
                    {step.highlight && (
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#25D366]/10 to-transparent rounded-full pointer-events-none" />
                    )}

                    <div className={`flex flex-wrap items-center gap-2 mb-2 ${isEven ? "justify-start" : "md:justify-end"}`}>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#D97706] bg-[#D97706]/10 px-2.5 py-0.5 rounded-full border border-[#D97706]/20">
                        {step.stepLabel}
                      </span>
                      <span className="text-[11px] text-[#4B5262] font-medium">• {step.timing}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-medium text-[#1F242D] mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">{step.description}</p>

                    {step.bullets && (
                      <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-[#374151] leading-relaxed text-left inline-block">
                        {step.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-[#D97706] font-bold">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
