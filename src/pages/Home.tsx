import { useState } from "react";
import { motion } from "motion/react";
import { 
  MessageCircle, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Layers,
  FileText,
  Lock,
  CalendarCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import TrustBadges from "../components/TrustBadges";
import InstagramFeed from "../components/InstagramFeed";
import LeadCaptureForm from "../components/LeadCaptureForm";

const homePlanSummaries = [
  {
    formula: "PROCESSO PADRÃO",
    title: "BPO Financeiro",
    subtitle: "Foco Operacional no Dia a Dia",
    description:
      "Para empresas que buscam organização essencial de contas a pagar e receber, conciliação bancária diária e relatórios semanais, mantendo os agendamentos bancários internamente.",
    icon: ShieldCheck,
    highlight: false,
  },
  {
    formula: "PADRÃO + SUPORTE",
    title: "Assistência Financeira Virtual",
    subtitle: "Suporte Ativo de uma Equipe",
    description:
      "Nossa equipe assume também os agendamentos no banco (para sua aprovação em 1 clique), emissão de notas fiscais e boletos, captação de documentos de fornecedores, controle de cartão de crédito e gestão de inadimplência.",
    icon: Layers,
    highlight: true,
  },
  {
    formula: "PADRÃO + SUPORTE + ANÁLISE",
    title: "Gestão Financeira Estratégica",
    subtitle: "Especialista na Área & Projeções",
    description:
      "Toda a operação delegada somada ao acompanhamento estratégico de um especialista: projeções futuras de fluxo de caixa, gráficos executivos, DFC mensal e controle de metas.",
    icon: TrendingUp,
    highlight: false,
  },
];

export default function Home() {
  const [founderImgError, setFounderImgError] = useState(false);

  return (
    <div className="w-full bg-[#FFFFF0] text-[#1F242D] relative overflow-hidden font-sans">
      
      {/* 1. MESH GLOW BACKGROUND (Gradiente Volumétrico Sofisticado) */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#38183A]/10 via-[#D97706]/5 to-transparent blur-[120px] pointer-events-none -z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[400px] right-[-200px] w-[600px] h-[600px] bg-[#38183A]/5 blur-[140px] pointer-events-none -z-0"
      />

      {/* Grid Hexagonal Sutil */}
      <div className="absolute inset-0 bg-honeycomb opacity-[0.5] pointer-events-none -z-0" />

      {/* HERO SECTION DE ALTO IMPACTO */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 px-6 max-w-7xl mx-auto z-10">
        
        {/* Kicker Editorial Tipográfico */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#38183A]/85 font-mono block">
            FAVO GESTÃO FINANCEIRA · ASSESSORIA, BPO & ESTRATÉGIA
          </span>
        </motion.div>

        {/* Título Principal com Tipografia Editorial */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-light tracking-tight leading-[1.16] text-[#1F242D] max-w-5xl mb-8 pb-2 text-balance"
        >
          Seu financeiro no piloto automático.{" "}
          <span className="sm:whitespace-nowrap">
            Seu foco no <span className="italic font-medium text-[#D97706]">lucro real.</span>
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Copy e CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="hero-sub text-base sm:text-lg md:text-xl text-[#4B5262] font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 tracking-tight">
              BPO, Assistência Financeira Virtual e Gestão Financeira com rotina organizada e relatórios claros. Elimine o caos das planilhas e tenha um time especializado cuidando de cada centavo.
            </p>

            <div className="hero-actions flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a 
                href="https://api.whatsapp.com/send?phone=5548999725750&text=Olá,%20vim%20pelo%20site%20da%20Favo%20e%20gostaria%20de%20um%20diagnóstico%20financeiro."
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 bg-[#38183A] hover:bg-[#2B112D] text-[#FFFFF0] px-7 sm:px-8 py-4 sm:py-4.5 rounded-full text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold border border-[#D97706]/40 hover:border-[#D97706] shadow-xl shadow-[#38183A]/25 hover:shadow-[0_12px_36px_rgba(217,119,6,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group overflow-hidden text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D97706]/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:rotate-12 transition-transform duration-300 relative z-10 shrink-0" />
                <span className="relative z-10">Conversar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10 text-[#FFFFF0] shrink-0" />
              </a>

              <Link 
                to="/gestao-financeira"
                className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white border border-[#38183A]/20 hover:border-[#38183A] text-[#1F242D] px-7 py-4 sm:py-4.5 rounded-full text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold shadow-sm transition-all duration-300 backdrop-blur-md text-center"
              >
                <span>Ver Serviços & Planos</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#38183A] shrink-0" />
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 sm:mt-14 pt-8 border-t border-[#38183A]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                whileHover={{ y: -2 }}
                className="flex items-baseline justify-between sm:block border-b sm:border-b-0 border-[#38183A]/10 pb-3 sm:pb-0"
              >
                <span className="block text-2xl font-serif font-light text-[#1F242D]">100%</span>
                <span className="text-xs text-[#4B5262] font-medium tracking-tight">Conciliado diariamente</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                whileHover={{ y: -2 }}
                className="flex items-baseline justify-between sm:block border-b sm:border-b-0 border-[#38183A]/10 pb-3 sm:pb-0"
              >
                <span className="block text-2xl font-serif font-light text-[#1F242D] whitespace-nowrap">+ de 20 anos</span>
                <span className="text-xs text-[#4B5262] font-medium tracking-tight">Experiência financeira</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                whileHover={{ y: -2 }}
                className="flex items-baseline justify-between sm:block"
              >
                <span className="block text-2xl font-serif font-light text-[#D97706]">Zero</span>
                <span className="text-xs text-[#4B5262] font-medium tracking-tight">Tempo perdido em planilhas</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Lado Direito: APRESENTAÇÃO EDITORIAL DE COMPROMISSO & ENTREGÁVEIS REAIS */}
          <motion.div 
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-5 hero-preview-card"
          >
            <div className="relative p-6 sm:p-9 rounded-3xl bg-white/95 border border-[#38183A]/15 shadow-[0_24px_60px_rgba(56,24,58,0.08)] backdrop-blur-xl">
              
              <div className="pb-5 border-b border-[#38183A]/10 mb-6">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D97706] font-semibold block mb-1.5">
                  ASSESSORIA DEDICADA
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#1F242D] leading-snug">
                  O que a sua empresa recebe na prática
                </h3>
                <p className="text-sm text-[#4B5262] mt-1.5">
                  Apoio operacional e estratégico diário conduzido por especialistas.
                </p>
              </div>

              {/* 3 Entregáveis Reais */}
              <div className="space-y-4 mb-6">
                
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#38183A]/10 hover:border-[#38183A]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#38183A]/10 text-[#38183A] flex items-center justify-center shrink-0 mt-0.5">
                      <CalendarCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-serif font-medium text-[#1F242D] mb-1">
                        Rotina & Conciliação Diária
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                        Conferência rigorosa de cada entrada e saída bancária, agendamento de pagamentos para sua aprovação e emissão de notas fiscais.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.47, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#38183A]/10 hover:border-[#38183A]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#38183A]/10 text-[#38183A] flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-serif font-medium text-[#1F242D] mb-1">
                        Fechamento & Clareza Gerencial
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                        DFC mensal, fluxo de caixa projetado e relatórios explicados com linguagem acessível para guiar suas tomadas de decisões.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.59, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#38183A]/10 hover:border-[#38183A]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-serif font-medium text-[#1F242D] mb-1">
                        Parceria Direta no WhatsApp
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                        Contato ágil e humanizado. Dúvidas solucionadas no mesmo dia e comunicação sem intermediários burocráticos.
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Selo de Garantia e Segurança Operacional */}
              <div className="pt-4 border-t border-[#38183A]/10 flex items-start sm:items-center gap-2.5 text-xs sm:text-sm text-[#4B5262]">
                <Lock className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5 sm:mt-0" />
                <span className="leading-snug">
                  Perfil de operador secundário no banco: a Favo agenda os pagamentos e somente o titular autoriza a transação no app.
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* VISÃO EXECUTIVA DAS SOLUÇÕES (DIRETA E ENXUTA, DIRECIONANDO PARA SERVIÇOS & PLANOS) */}
      <section id="solucoes" className="py-20 sm:py-28 px-6 max-w-7xl mx-auto border-t border-[#38183A]/15 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-14"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#38183A] font-mono block mb-3">
              NOSSOS MODELOS DE ATUAÇÃO
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D] text-balance">
              Como a Favo resolve o seu <span className="italic font-medium text-[#D97706]">financeiro</span>
            </h2>
          </div>
          <p className="text-[#4B5262] text-sm md:text-base max-w-md leading-relaxed">
            Você escolhe o nível de envolvimento da nossa equipe com a sua empresa: do operacional diário ao acompanhamento estratégico completo.
          </p>
        </motion.div>

        {/* RESUMO EXECUTIVO DOS 3 PLANOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {homePlanSummaries.map((plan, idx) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={
                  plan.highlight
                    ? "rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#38183A] to-[#220D24] text-[#FFFFF0] border border-[#D97706]/60 shadow-xl flex flex-col justify-between relative"
                    : "rounded-3xl p-6 sm:p-8 bg-white text-[#1F242D] border border-[#38183A]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
                }
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <span
                      className={
                        plan.highlight
                          ? "text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full inline-block bg-white/10 text-[#D97706] border border-[#D97706]/30"
                          : "text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full inline-block bg-[#38183A]/10 text-[#38183A] border border-[#38183A]/20"
                      }
                    >
                      {plan.formula}
                    </span>

                    {plan.highlight && (
                      <span className="bg-[#D97706] text-white text-[10px] uppercase font-mono tracking-widest font-semibold px-3 py-1 rounded-full">
                        Mais Procurado
                      </span>
                    )}
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div
                      className={
                        plan.highlight
                          ? "w-10 h-10 rounded-2xl bg-white/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5"
                          : "w-10 h-10 rounded-2xl bg-[#38183A]/10 text-[#38183A] flex items-center justify-center shrink-0 mt-0.5"
                      }
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-medium leading-snug">
                        {plan.title}
                      </h3>
                      <p className={plan.highlight ? "text-xs text-[#D97706] font-medium mt-0.5" : "text-xs text-[#38183A] font-medium mt-0.5"}>
                        {plan.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className={plan.highlight ? "text-sm text-[#FFFFF0]/85 leading-relaxed mt-4" : "text-sm text-[#4B5262] leading-relaxed mt-4"}>
                    {plan.description}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-current/10">
                  <Link
                    to="/gestao-financeira"
                    className={
                      plan.highlight
                        ? "inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#D97706] hover:text-white transition-colors"
                        : "inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#38183A] hover:text-[#D97706] transition-colors"
                    }
                  >
                    <span>Ver entregáveis completos</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Botão de direcionamento para a aba Serviços & Planos */}
        <div className="flex justify-center mb-14">
          <Link
            to="/gestao-financeira"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-[#38183A] text-[#38183A] hover:text-[#FFFFF0] border-2 border-[#38183A] px-6 sm:px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] font-semibold shadow-sm hover:shadow-lg transition-all duration-300 group text-center"
          >
            <span>Comparar planos e ver detalhes em Serviços & Planos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
        </div>

        {/* CARD DESTACADO DA CONSULTORIA FINANCEIRA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="p-6 sm:p-10 rounded-3xl bg-white border border-[#38183A]/15 hover:border-[#38183A]/40 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#38183A]/10 text-[10px] font-bold uppercase tracking-wider text-[#38183A]">
                  Diagnóstico & Estratégia
                </span>
                <span className="text-xs text-[#4B5262] font-semibold">
                  08 Semanas • 04 Encontros ao Vivo • 60 Dias WhatsApp
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#1F242D] mb-3">
                Consultoria Financeira
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed mb-4">
                Nossa Consultoria irá te guiar a encontrar os gargalos do seu financeiro e trazer ferramentas que possam te auxiliar na construção de um negócio sólido com Raio-X executivo e mapa de melhorias.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#374151] font-medium">
                <span className="flex items-center gap-1.5">✓ 04 encontros de até 1h30min cada</span>
                <span className="flex items-center gap-1.5">✓ Gravação dos 4 encontros</span>
                <span className="flex items-center gap-1.5">✓ Material com análise pronta & mapa de ferramentas</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="#formulario"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#38183A] hover:bg-[#2B112D] text-[#FFFFF0] px-8 py-4 rounded-full text-xs uppercase tracking-[0.18em] font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer text-center"
              >
                <span>Conhecer a Consultoria</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO DA FUNDADORA (AUTORIDADE DE NÍVEL PREMIUM) */}
      <section className="py-20 sm:py-28 px-6 max-w-7xl mx-auto border-t border-[#38183A]/15 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-white border border-[#38183A]/15 p-3 sm:p-4 shadow-xl relative overflow-hidden group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#38183A]/5 to-white flex items-center justify-center border border-[#38183A]/15">
                {!founderImgError ? (
                  <img 
                    src="/founder/andryelle.jpg?v=2" 
                    alt="Andryelle Niederauer - Fundadora e Estrategista Financeira da Favo"
                    onError={() => setFounderImgError(true)}
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#38183A]/10 to-white rounded-2xl flex flex-col items-center justify-center border border-[#38183A]/15 p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-[#38183A] text-[#FFFFF0] flex items-center justify-center font-serif text-4xl font-light mb-6 shadow-md border-2 border-[#D97706]/40">
                      AN
                    </div>
                    <h4 className="text-2xl font-serif font-light text-[#1F242D]">Andryelle Niederauer</h4>
                    <p className="text-xs uppercase tracking-widest text-[#38183A] font-semibold mt-1">
                      Fundadora & Estrategista Financeira
                    </p>
                    <div className="mt-6 pt-6 border-t border-[#38183A]/10 w-full text-xs text-[#4B5262]">
                      + de 20 anos de liderança em finanças empresariais
                    </div>
                  </div>
                )}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -12, y: -12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute top-8 -right-4 w-full h-full rounded-3xl border border-[#38183A]/20 -z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#38183A] font-mono block mb-4">
              QUEM CUIDA DO SEU DINHEIRO
            </span>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light text-[#1F242D] leading-[1.18] mb-8 text-balance">
              "Finanças bem estruturadas não são um custo: são o alicerce para você <span className="italic font-medium text-[#D97706]">lucrar sem medo</span>."
            </h3>

            <div className="space-y-5 text-[#4B5262] text-sm sm:text-base leading-relaxed">
              <p>
                Ao longo de <span className="text-[#1F242D] font-medium underline decoration-[#D97706]/50 decoration-1 underline-offset-4">mais de 20 anos no mercado financeiro corporativo</span>, vi centenas de empresários brilhantes no que vendem, mas sufocados por planilhas amadoras, misturando contas pessoais e sem saber se realmente estavam lucrando ou só girando dinheiro em caixa.
              </p>
              <p>
                A Favo nasceu com um propósito claro: <span className="text-[#1F242D] font-medium underline decoration-[#D97706]/50 decoration-1 underline-offset-4">libertar você da prisão operacional do financeiro</span> para que sua energia esteja 100% voltada ao crescimento e às vendas da sua empresa.
              </p>
              <p>
                Cuidamos de cada nota fiscal, cada conciliação bancária e cada centavo como se a empresa fosse nossa — com o <span className="text-[#1F242D] font-medium underline decoration-[#D97706]/50 decoration-1 underline-offset-4">rigor de grandes corporações</span> e a agilidade do mercado digital.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-[#38183A]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif italic text-2xl text-[#1F242D]">Andryelle Niederauer</p>
                <p className="text-xs uppercase tracking-wider text-[#4B5262] font-medium mt-1">Estrategista Financeira & Fundadora</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos e Prova Social */}
      <Testimonials />

      {/* Feed Curado do Instagram da Favo */}
      <InstagramFeed />

      {/* CTA Final */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 sm:py-28 px-6 max-w-5xl mx-auto text-center border-t border-[#38183A]/15"
      >
        <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#38183A] font-mono block mb-4">
          DIAGNÓSTICO INICIAL SEM COMPROMISSO
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D] mb-6 text-balance">
          Pronto para ter clareza total do seu <span className="italic font-medium text-[#D97706]">lucro real?</span>
        </h2>
        <p className="text-[#4B5262] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Converse diretamente com nossos especialistas. Analisamos a sua rotina atual e mostramos como a Favo pode assumir o operacional da sua empresa.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=5548999725750&text=Olá,%20gostaria%20de%20um%20diagnóstico%20financeiro%20da%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 bg-[#38183A] hover:bg-[#2B112D] text-[#FFFFF0] px-7 sm:px-8 py-4 sm:py-4.5 rounded-full text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold border border-[#D97706]/40 hover:border-[#D97706] shadow-xl shadow-[#38183A]/25 hover:shadow-[0_12px_36px_rgba(217,119,6,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group overflow-hidden text-center"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D97706]/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
            <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:rotate-12 transition-transform duration-300 relative z-10 shrink-0" />
            <span className="relative z-10">Falar com Especialista no WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10 text-[#FFFFF0] shrink-0" />
          </a>
        </div>
        <div className="mt-12">
          <div className="mb-12 text-left"><LeadCaptureForm type="bpo" /></div>
          <TrustBadges />
        </div>
      </motion.section>
    </div>
  );
}
