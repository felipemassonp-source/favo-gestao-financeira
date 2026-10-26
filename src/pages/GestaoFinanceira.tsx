import FadeInUp from "../components/FadeInUp";
import { motion } from "motion/react";
import { 
  MessageCircle, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Lock,
  Layers
} from "lucide-react";

import ImpactMetrics from "../components/ImpactMetrics";
import OnboardingJourney from "../components/OnboardingJourney";
import FinancialBenefits from "../components/FinancialBenefits";
import RiskAwareness from "../components/RiskAwareness";
import Testimonials from "../components/Testimonials";
import LeadCaptureForm from "../components/LeadCaptureForm";
import TrustBadges from "../components/TrustBadges";
import SecurityGuarantee from "../components/SecurityGuarantee";
import ServiceTiers from "../components/ServiceTiers";

const platforms = [
  "Hotmart", "Kiwify", "Eduzz", "Asaas", "Conta Azul", "Omie", "Cora", "Inter PJ", "Itaú Empresas"
];

export default function GestaoFinanceira() {
  const scrollToPlans = () => {
    const el = document.getElementById("planos-servicos") || document.getElementById("formulario-bpo");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFFF0] text-[#1F242D] relative overflow-hidden font-sans">
      
      {/* GLOW DE FUNDO VOLUMÉTRICO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#38183A]/12 via-[#D97706]/5 to-transparent blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-[500px] left-[-200px] w-[600px] h-[600px] bg-[#38183A]/6 blur-[140px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-honeycomb opacity-[0.4] pointer-events-none -z-0" />

      {/* HERO SECTION DE ALTO IMPACTO */}
      <div className="max-w-7xl mx-auto px-6 pt-28 sm:pt-36 pb-20 relative z-10">
        
        {/* Título Principal com Kicker Semântico Integrado */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-light tracking-tight leading-[1.16] text-[#1F242D] max-w-5xl mb-8 pb-2 text-balance"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-[#38183A]/85 font-mono block mb-6 sm:mb-8">
            BPO FINANCEIRO, ASSISTÊNCIA FINANCEIRA VIRTUAL &amp; GESTÃO ESTRATÉGICA
          </span>
          Sua rotina financeira delegada.{" "}
          <span className="sm:whitespace-nowrap">
            Seu tempo <span className="italic font-medium text-[#38183A]">devolvido.</span>
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Lado Esquerdo: Mensagem e Ação */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="hero-sub text-base sm:text-lg md:text-xl text-[#4B5262] font-normal leading-relaxed max-w-xl mb-8 sm:mb-10 tracking-tight">
              Estruturamos e cuidamos do contas a pagar e receber, conciliação diária, relatórios e fechamentos. Escolha entre BPO (Processo Padrão), Assistência Virtual ou Gestão Financeira Completa.
            </p>

            <div className="hero-actions flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a 
                href="https://api.whatsapp.com/send?phone=5548999725750&text=Olá,%20vi%20a%20página%20de%20Gestão%20Financeira%20da%20Favo%20e%20quero%20um%20diagnóstico%20gratuito."
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 bg-[#38183A] hover:bg-[#2B112D] text-[#FFFFF0] px-7 sm:px-8 py-4 sm:py-4.5 rounded-full text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold border border-[#D97706]/40 hover:border-[#D97706] shadow-xl shadow-[#38183A]/25 hover:shadow-[0_12px_36px_rgba(217,119,6,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group overflow-hidden text-center"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D97706]/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:rotate-12 transition-transform duration-300 relative z-10 shrink-0" />
                <span className="relative z-10">Falar com Especialista no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10 text-[#FFFFF0] shrink-0" />
              </a>

              <button 
                onClick={scrollToPlans}
                className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white border border-[#38183A]/20 hover:border-[#38183A] text-[#1F242D] px-7 py-4 sm:py-4.5 rounded-full text-xs uppercase tracking-[0.16em] sm:tracking-[0.18em] font-semibold shadow-sm transition-all duration-300 backdrop-blur-md cursor-pointer text-center"
              >
                <span>Ver Planos & Detalhes</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#38183A] shrink-0" />
              </button>
            </div>

            {/* Badges de Garantia Operacional */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-xs text-[#4B5262] font-medium">
              <span className="flex items-start sm:items-center gap-2">
                <Lock className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5 sm:mt-0" />
                <span>Perfil de operador secundário (aprovação final exclusiva do titular no banco)</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Conciliação bancária diária em D+1</span>
              </span>
            </div>
          </motion.div>

          {/* Lado Direito: APRESENTAÇÃO EDITORIAL DOS MODELOS OPERACIONAIS */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 hero-live-card"
          >
            <div className="p-6 sm:p-9 rounded-3xl bg-white/95 border border-[#38183A]/15 shadow-[0_24px_60px_rgba(56,24,58,0.08)] backdrop-blur-xl">
              
              <div className="pb-5 border-b border-[#38183A]/10 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D97706] font-semibold block mb-1.5">
                  OPERAÇÃO ESTRUTURADA
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-[#1F242D] leading-snug">
                  Como assumimos o seu financeiro
                </h3>
                <p className="text-xs text-[#4B5262] mt-1.5">
                  Processos desenhados para zerar o estresse operacional da sua empresa.
                </p>
              </div>

              {/* 3 Pilares Operacionais */}
              <div className="space-y-4 mb-6">
                
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#38183A]/10 hover:border-[#38183A]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 mb-1.5">
                    <h4 className="text-sm sm:text-base font-serif font-medium text-[#1F242D]">
                      BPO Financeiro Padrão
                    </h4>
                    <span className="text-[11px] uppercase font-mono tracking-wider text-[#38183A] font-semibold">
                      Rotina Completa
                    </span>
                  </div>
                  <p className="text-xs text-[#4B5262] leading-relaxed">
                    Contas a pagar e receber apuradas diariamente, conciliação de extratos bancários e gateways, e fechamento contábil mensal sem atrasos.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.47, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#38183A]/10 hover:border-[#38183A]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 mb-1.5">
                    <h4 className="text-sm sm:text-base font-serif font-medium text-[#1F242D]">
                      Assistência Financeira Virtual
                    </h4>
                    <span className="text-[11px] uppercase font-mono tracking-wider text-[#D97706] font-semibold">
                      Apoio Flexível
                    </span>
                  </div>
                  <p className="text-xs text-[#4B5262] leading-relaxed">
                    Emissão ágil de notas fiscais, cobrança preventiva e amigável de clientes, organização de pastas de comprovantes e conferência de boletos.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.59, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#38183A]/10 hover:border-[#38183A]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 mb-1.5">
                    <h4 className="text-sm sm:text-base font-serif font-medium text-[#1F242D]">
                      Gestão Financeira Estratégica
                    </h4>
                    <span className="text-[11px] uppercase font-mono tracking-wider text-emerald-800 font-semibold">
                      Inteligência & Decisão
                    </span>
                  </div>
                  <p className="text-xs text-[#4B5262] leading-relaxed">
                    Operação integral somada a DFC mensal, fluxo de caixa projetado e reuniões periódicas para definição segura de pró-labore e investimentos.
                  </p>
                </motion.div>

              </div>

              {/* Rodapé do cartão com garantia operacional */}
              <div className="pt-4 border-t border-[#38183A]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#4B5262]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                  <span>Perfil de operador secundário (sem alçada de saque)</span>
                </span>
                <span className="text-[#38183A] font-mono text-[11px] font-semibold">
                  Dupla alçada
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* FAIXA DE INTEGRAÇÃO COM AS FERRAMENTAS DO CLIENTE */}
        <div className="py-5 px-6 sm:px-8 rounded-2xl bg-white/80 border border-[#E5E7EB] shadow-xs backdrop-blur-md mb-16 sm:mb-20 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4B5563] text-center md:text-left">
            <Layers className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>Integrado aos seus bancos e gateways:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {platforms.map((p, idx) => (
              <span key={idx} className="text-xs font-semibold tracking-wide text-[#6B7280] hover:text-[#111827] transition-colors">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* METRICAS DE IMPACTO & RISCOS */}
        <FadeInUp>
          <ImpactMetrics />
        </FadeInUp>

        <FadeInUp>
          <RiskAwareness />
        </FadeInUp>

        {/* SEÇÃO DOS TRÊS NÍVEIS DE SERVIÇO: BPO, ASSISTÊNCIA E GESTÃO FINANCEIRA */}
        <div className="py-16 sm:py-20 border-t border-[#E5E7EB] mt-8">
          <FadeInUp>
            <ServiceTiers />
          </FadeInUp>
        </div>

        {/* BENEFICIOS FINANCEIROS */}
        <FinancialBenefits />

        {/* GARANTIA DE SEGURANÇA BANCARIA */}
        <SecurityGuarantee />

        {/* JORNADA DE ONBOARDING */}
        <OnboardingJourney />

        {/* DEPOIMENTOS */}
        <div className="-mx-6">
          <FadeInUp>
            <Testimonials />
          </FadeInUp>
        </div>

        {/* CTA FINAL UNIFICADO COM FORMULÁRIO */}
        <div id="formulario-bpo" className="py-20 sm:py-24 border-t border-[#38183A]/15 mt-12 sm:mt-16">
          <FadeInUp>
            <LeadCaptureForm type="bpo" />
            <div className="mt-16">
              <TrustBadges />
            </div>
          </FadeInUp>
        </div>

      </div>
    </div>
  );
}
