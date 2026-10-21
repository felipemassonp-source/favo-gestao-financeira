import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, MessageCircle, ShieldCheck, Layers, TrendingUp, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

// ============================================================================
// 🎛️ 1. PARÂMETROS DE CURVA ELÁSTICA (SPRING PHYSICS - PADRÃO MACHINEX BY KOTO)
// Calibre aqui para ajustar a velocidade e a elasticidade de expansão dos cards:
// ============================================================================
export const SPRING_CONFIG = {
  type: "spring" as const,
  stiffness: 300, // 👈 RIGIDEZ: valores maiores = expansão mais rápida (ex: 280 a 380)
  damping: 28,    // 👈 AMORTECIMENTO: valores menores = mais elástico/mola (ex: 22 a 32)
  mass: 0.85,     // 👈 MASSA: inércia física do card
};

// ============================================================================
// 🎛️ 2. TRANSIÇÃO SUAVE DE CONTEÚDO (FADE & SLIDE)
// ============================================================================
export const CONTENT_FADE_TRANSITION = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1], // 👈 Curva cubic-bezier suave estilo Koto/Linear
};

export interface ServicePlan {
  id: "bpo" | "assistencia" | "gestao";
  name: string;
  badge: string;
  formula: string;
  shortTag: string;
  icon: typeof ShieldCheck;
  highlight?: boolean;
  headline: string;
  summary: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const servicePlans: ServicePlan[] = [
  {
    id: "bpo",
    name: "BPO Financeiro",
    badge: "Processo Padrão",
    formula: "PROCESSO PADRÃO",
    shortTag: "Controle & Rotina",
    icon: ShieldCheck,
    headline: "Organização essencial e conciliação bancária",
    summary: "Ideal para empresas que preferem realizar os agendamentos no banco internamente, mas exigem conciliação diária rigorosa e relatórios semanais de fechamento.",
    features: [
      "Organização de contas a pagar (sem agendamento bancário)",
      "Organização de contas a receber",
      "Conciliação bancária diária",
      "Envio de relatório semanal com contas a pagar",
      "Envio de relatório semanal com contas a receber e inadimplência",
      "Fechamento de financeiro mensal",
    ],
    ctaText: "Escolher BPO Financeiro",
    whatsappMessage: "Olá! Vim pelo site da Favo e gostaria de contratar o BPO Financeiro (Processo Padrão).",
  },
  {
    id: "assistencia",
    name: "Assistência Financeira Virtual",
    badge: "Processo Padrão + Suporte",
    formula: "PADRÃO + SUPORTE",
    shortTag: "Operação Delegada",
    icon: Layers,
    headline: "Rotina bancária delegada com agendamentos e notas",
    summary: "Assumimos a operação diária no internet banking: preparamos os pagamentos para sua aprovação com um toque, emitimos notas fiscais, boletos e gerenciamos cartões.",
    features: [
      "Gestão de contas a pagar (com agendamento bancário)",
      "Gestão de contas a receber",
      "Conciliação bancária diária",
      "Gestão de inadimplência (com ou sem cobrança)",
      "Emissão de notas fiscais e boletos",
      "Gestão de cartão de crédito",
      "Fechamento de financeiro mensal",
      "Relatórios mensais de receitas e despesas",
    ],
    ctaText: "Escolher Assistência Virtual",
    whatsappMessage: "Olá! Vim pelo site da Favo e tenho interesse na Assistência Financeira Virtual (Padrão + Suporte).",
  },
  {
    id: "gestao",
    name: "Gestão Financeira Estratégica",
    badge: "Processo Padrão + Suporte + Análise",
    formula: "PADRÃO + SUPORTE + ANÁLISE",
    shortTag: "Inteligência Integral",
    icon: TrendingUp,
    highlight: true,
    headline: "Visão executiva de alto nível, projeções e metas",
    summary: "O modelo mais completo da Favo: toda a rotina delegada da Assistência somada a projeções futuras de caixa, gráficos de resultados e acompanhamento de metas.",
    features: [
      "Gestão de contas a pagar (com agendamento bancário)",
      "Gestão de contas a receber",
      "Conciliação bancária diária",
      "Gestão de inadimplência (com ou sem cobrança)",
      "Emissão de notas fiscais e boletos",
      "Gestão de cartão de crédito",
      "Apoio para captação de documentos de fornecedores",
      "Fechamento de financeiro mensal",
      "Relatórios mensais de receitas e despesas",
      "Projeções futuras de fluxo de caixa",
      "Análise de geração de caixa mensal",
      "Gráfico executivo de resultados",
      "Controle e elaboração mensal de metas",
    ],
    ctaText: "Escolher Gestão Estratégica",
    whatsappMessage: "Olá! Vim pelo site da Favo e quero contratar a Gestão Financeira Estratégica (Mais Completo).",
  },
];

interface MachineXServiceCardsProps {
  className?: string;
  showHeader?: boolean;
  whatsappBaseNumber?: string;
}

export default function MachineXServiceCards({
  className = "",
  showHeader = false,
  whatsappBaseNumber = "5548999725750", // Telefone oficial da FAVO: (48) 99972-5750
}: MachineXServiceCardsProps) {
  // Inicia com o plano mais completo ("gestao") em destaque expandido
  const [activeId, setActiveId] = useState<string>("gestao");

  const buildWhatsappUrl = (message: string) => {
    return `https://api.whatsapp.com/send?phone=${whatsappBaseNumber}&text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={cn("w-full max-w-7xl mx-auto", className)}>
      
      {/* CABEÇALHO OPCIONAL (Quando usado standalone) */}
      {showHeader && (
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#472F5B] font-mono block mb-4">
            ESTRUTURA TRANSPARENTE DE PLANOS
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D] tracking-tight leading-[1.15]">
            Escolha o nível de suporte <br className="hidden sm:block" />
            <span className="italic font-medium text-[#D97706]">ideal para o seu momento</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#4B5262] font-normal leading-relaxed max-w-2xl mx-auto">
            Passe o mouse ou toque nos cards para explorar as entregas detalhadas com transição elástica e fluida.
          </p>
        </div>
      )}

      {/* DECK MODULAR INTERATIVO (COMPORTAMENTO MACHINEX) */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">
        {servicePlans.map((plan) => {
          const isActive = activeId === plan.id;
          const isHighlight = plan.highlight;
          const IconComponent = plan.icon;

          return (
            <motion.div
              key={plan.id}
              layout // 👈 Habilita o morphing contínuo de dimensões da Framer Motion
              transition={SPRING_CONFIG} // 👈 Aplica a física spring calibrada
              onClick={() => setActiveId(plan.id)}
              onMouseEnter={() => {
                if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                  setActiveId(plan.id);
                }
              }}
              className={cn(
                "relative rounded-3xl cursor-pointer overflow-hidden border flex flex-col justify-between p-7 sm:p-9 select-none transition-all duration-300",
                // Proporção de expansão elástica: o ativo expande para flex 2.5, os outros mantêm flex 1
                isActive ? "lg:flex-[2.4] shadow-2xl" : "lg:flex-[1] shadow-sm hover:shadow-md",
                isActive && isHighlight
                  ? "bg-gradient-to-b from-[#301A3F] to-[#20102B] text-[#FFFFF0] border-[#D97706]/70 shadow-[#472F5B]/20"
                  : isActive && !isHighlight
                  ? "bg-[#FFFFFF] text-[#1F242D] border-[#472F5B]/40 shadow-xl"
                  : isHighlight
                  ? "bg-gradient-to-b from-[#301A3F]/95 to-[#20102B]/95 text-[#FFFFF0]/90 border-[#472F5B]/30 hover:border-[#D97706]/50"
                  : "bg-[#FFFFFF] text-[#1F242D] border-[#472F5B]/15 hover:border-[#472F5B]/35"
              )}
            >
              {/* Badge de Destaque no topo para o plano Gestão */}
              {isHighlight && (
                <div className="absolute top-4 right-4 bg-[#D97706] text-white text-[9px] uppercase font-mono tracking-[0.22em] font-semibold px-3 py-1 rounded-full shadow-sm">
                  PLANO RECOMENDADO
                </div>
              )}

              {/* CONTEÚDO DO CARD */}
              <div className="relative z-10 w-full">
                
                {/* Header do Card: Tag da Fórmula e Ícone */}
                <div className="flex items-center justify-between gap-3 mb-5 pr-20">
                  <span
                    className={cn(
                      "text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full inline-block",
                      isHighlight
                        ? "bg-white/10 text-[#D97706] border border-[#D97706]/30"
                        : "bg-[#472F5B]/10 text-[#472F5B] border border-[#472F5B]/20"
                    )}
                  >
                    {plan.formula}
                  </span>
                </div>

                {/* Ícone e Título */}
                <div className="flex items-start gap-3.5 mb-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 mt-0.5",
                      isHighlight
                        ? "bg-white/10 text-[#D97706]"
                        : "bg-[#472F5B]/10 text-[#472F5B]"
                    )}
                  >
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>

                  <div>
                    <motion.h3 
                      layout="position"
                      transition={SPRING_CONFIG}
                      className={cn(
                        "font-serif font-light tracking-tight text-2xl sm:text-3xl",
                        isHighlight ? "text-[#FFFFF0]" : "text-[#1F242D]"
                      )}
                    >
                      {plan.name}
                    </motion.h3>
                    <p className={cn("text-xs font-medium mt-0.5", isHighlight ? "text-[#D97706]" : "text-[#472F5B]")}>
                      {plan.headline}
                    </p>
                  </div>
                </div>

                {/* Resumo do Plano (Sempre visível para nunca ficar em branco) */}
                <p
                  className={cn(
                    "text-xs sm:text-sm font-normal leading-relaxed mt-4 mb-6",
                    isHighlight ? "text-[#FFFFF0]/80" : "text-[#4B5262]"
                  )}
                >
                  {plan.summary}
                </p>

                {/* LISTA DE ENTREGAS (TOTAL SE ATIVO, COMPACTA SE INATIVO) */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-[10px] uppercase font-bold tracking-wider block",
                        isHighlight ? "text-[#D97706]" : "text-[#472F5B]"
                      )}
                    >
                      {isActive ? "Entregáveis Inclusos:" : "Principais Destaques:"}
                    </span>
                    {!isActive && (
                      <span className="text-[10px] text-current/60 font-semibold uppercase tracking-wider">
                        + {plan.features.length - 3} itens
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {(isActive ? plan.features : plan.features.slice(0, 3)).map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={isActive ? { opacity: 0, x: -6 } : false}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.02, duration: 0.2 }}
                        className="flex items-start gap-2.5 text-xs sm:text-sm"
                      >
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-2xs",
                            isHighlight
                              ? "bg-[#D97706] text-white"
                              : "bg-[#472F5B]/10 text-[#472F5B]"
                          )}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span
                          className={cn(
                            "leading-tight font-medium",
                            isHighlight ? "text-[#FFFFF0]/95" : "text-[#1F242D]"
                          )}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* BOTÃO DE AÇÃO / CTA */}
              <div className="relative z-10 pt-5 mt-auto border-t border-current/10">
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={CONTENT_FADE_TRANSITION}
                  >
                    <a
                      href={buildWhatsappUrl(plan.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "w-full py-4 px-6 rounded-full text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-md group cursor-pointer",
                        isHighlight
                          ? "bg-[#D97706] hover:bg-[#b86403] text-white shadow-[#D97706]/30 hover:scale-[1.02] active:scale-[0.98]"
                          : "bg-[#472F5B] hover:bg-[#361F48] text-[#FFFFF0] shadow-[#472F5B]/25 hover:scale-[1.02] active:scale-[0.98]"
                      )}
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:rotate-12 transition-transform duration-300" />
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>
                ) : (
                  <button
                    onClick={() => setActiveId(plan.id)}
                    className="w-full py-3 px-4 rounded-full border border-current/20 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-current/5 transition-colors cursor-pointer"
                  >
                    <span>Ver Todas as Entregas</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* RODA-PÉ DE CONFIANÇA */}
      <div className="mt-8 text-center">
        <p className="text-xs text-[#4B5262] font-medium tracking-tight">
          ✦ Todos os planos incluem contrato de confidencialidade (NDA), suporte ágil e transição de onboarding guiada.
        </p>
      </div>

    </div>
  );
}
