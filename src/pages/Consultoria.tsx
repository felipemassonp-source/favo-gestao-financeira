import FadeInUp from "../components/FadeInUp";
import { motion } from "motion/react";
import ConsultingTimeline from "../components/ConsultingTimeline";
import CaseStudy from "../components/CaseStudy";
import LeadCaptureForm from "../components/LeadCaptureForm";
import TrustBadges from "../components/TrustBadges";
import { 
  MessageCircle, 
  ArrowDown, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  PieChart, 
  ArrowRight,
  ShieldCheck,
  Video,
  FileCheck,
  Calendar,
  Award,
  Clock
} from "lucide-react";

export default function Consultoria() {
  const scrollToForm = () => {
    document.getElementById("formulario-consultoria")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFFF0] text-[#1F242D] relative overflow-hidden font-sans">
      
      {/* GLOW DE FUNDO */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#472F5B]/12 via-[#D97706]/5 to-transparent blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-[500px] right-[-200px] w-[600px] h-[600px] bg-[#472F5B]/6 blur-[140px] pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-honeycomb opacity-[0.4] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 pt-36 pb-20 relative z-10">
        
        {/* Kicker Editorial Tipográfico */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#D97706] font-mono">
            FAVO CONSULTORIA · DIAGNÓSTICO FINANCEIRO & MAPA ESTRATÉGICO
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight leading-[1.15] text-[#1F242D] max-w-5xl mb-8 pb-2"
        >
          Encontre os gargalos do seu financeiro. E construa um negócio <span className="italic font-medium text-[#472F5B]">sólido.</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Lado Esquerdo: Copy e Ações */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <p className="hero-sub text-lg md:text-xl text-[#4B5262] font-normal leading-relaxed max-w-xl mb-10 tracking-tight">
              Nossa Consultoria irá te guiar a encontrar os gargalos do seu financeiro, e trazer ferramentas que possam te auxiliar na construção de um negócio sólido.
            </p>

            <div className="hero-actions flex flex-wrap items-center gap-4">
              <button 
                onClick={scrollToForm}
                className="relative inline-flex items-center gap-3 bg-[#472F5B] hover:bg-[#361F48] text-[#FFFFF0] px-8 py-4.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold border border-[#D97706]/40 hover:border-[#D97706] shadow-xl shadow-[#472F5B]/25 hover:shadow-[0_12px_36px_rgba(217,119,6,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D97706]/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Solicitar Diagnóstico Gratuito</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10 text-[#FFFFF0]" />
              </button>

              <a 
                href="https://api.whatsapp.com/send?phone=5548999725750&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20Estratégica%20da%20Favo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/90 hover:bg-white border border-[#472F5B]/20 hover:border-[#D97706]/60 text-[#1F242D] px-7 py-4.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold shadow-sm hover:shadow-[0_8px_24px_rgba(217,119,6,0.18)] transition-all duration-300 backdrop-blur-md group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:rotate-12 transition-transform duration-300" />
                <span>Tirar Dúvidas no WhatsApp</span>
              </a>
            </div>

            {/* Destaques da Consultoria */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-[#4B5262] font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" /> 04 Encontros online ao vivo (até 1h30min cada)
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" /> 60 Dias de suporte direto no WhatsApp
              </span>
            </div>
          </motion.div>

          {/* Lado Direito: APRESENTAÇÃO EDITORIAL DO MÉTODO DE 08 SEMANAS */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 hero-leak-card"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-white/95 border border-[#472F5B]/15 shadow-[0_24px_60px_rgba(71,47,91,0.08)] backdrop-blur-xl">
              
              <div className="pb-5 border-b border-[#472F5B]/10 mb-6">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D97706] font-semibold block mb-1.5">
                  MÉTODO COMPROVADO
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#1F242D] leading-snug">
                  Estrutura da Imersão de 08 Semanas
                </h3>
                <p className="text-sm text-[#4B5262] mt-1.5">
                  Diagnóstico da causa raiz, ajuste de gargalos e implantação de rotinas.
                </p>
              </div>

              {/* 4 Etapas Estruturais */}
              <div className="space-y-3.5 mb-6">
                
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#472F5B]/10 hover:border-[#472F5B]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-sm sm:text-base font-serif font-medium text-[#1F242D] leading-snug">
                      1º Encontro: Identificação de gargalos e objetivo do empresário
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                    Entender onde estão os principais problemas do financeiro e qual é o objetivo do empresário com o negócio.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#472F5B]/10 hover:border-[#472F5B]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-sm sm:text-base font-serif font-medium text-[#1F242D] leading-snug">
                      2º Encontro: Mapeamento de processos e análise de números
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                    Mapear os processos que já existem na empresa e analisar os números atuais.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#472F5B]/10 hover:border-[#472F5B]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-sm sm:text-base font-serif font-medium text-[#1F242D] leading-snug">
                      3º Encontro: Raio-X financeiro e identificação do problema
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                    Apresentar o diagnóstico completo, com os números analisados e o problema central identificado.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#472F5B]/10 hover:border-[#472F5B]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-sm sm:text-base font-serif font-medium text-[#1F242D] leading-snug">
                      4º Encontro: Mapa estratégico
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                    Entregar o plano com as melhorias a serem aplicadas e as ferramentas sugeridas.
                  </p>
                </motion.div>

              </div>

              {/* Rodapé com entregáveis garantidos */}
              <div className="pt-4 border-t border-[#472F5B]/10 flex items-center justify-between text-xs sm:text-sm text-[#4B5262]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Video className="w-4 h-4 text-[#D97706]" />
                  4 sessões ao vivo (até 1h30 cada) gravadas
                </span>
                <span className="text-[#25D366] font-semibold">
                  60d WhatsApp
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* SEÇÃO SEGMENTADA: PARA QUEM É A CONSULTORIA */}
        <div className="py-20 border-t border-[#E5E7EB]">
          <FadeInUp>
            <div className="mb-12">
              <span className="text-[#D97706] text-[11px] uppercase tracking-[0.25em] mb-3 block font-semibold">
                Perfil do Negócio
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111827]">
                Para quem foi desenhada esta <span className="italic text-[#D97706] font-medium">consultoria?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#D97706]/40 transition-all">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D97706] bg-[#FEF3C7] px-3.5 py-1.5 rounded-full mb-6 inline-block">
                  Crescimento & Gargalos
                </span>
                <h3 className="text-2xl font-serif font-medium text-[#111827] mb-4">
                  Empresas com Dificuldade de Encontrar Gargalos
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  Você fatura e vende bem, mas não tem clareza de onde estão os nós do seu fluxo financeiro. Precisa de um diagnóstico objetivo para identificar o problema raiz.
                </p>
                <ul className="text-xs text-[#374151] space-y-2.5 font-medium">
                  <li className="flex items-center gap-2">✓ 1º Encontro: Identificação de Gargalos e objetivo do empresário</li>
                  <li className="flex items-center gap-2">✓ 2º Encontro: Mapeamento de processos existentes e análise de números</li>
                  <li className="flex items-center gap-2">✓ Diagnóstico aprofundado sem rodeios ou termos difíceis</li>
                </ul>
              </div>

              <div className="p-10 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs hover:border-[#D97706]/40 transition-all">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#4B5262] bg-[#F3F4F6] px-3.5 py-1.5 rounded-full mb-6 inline-block">
                  Estruturação & Ferramentas
                </span>
                <h3 className="text-2xl font-serif font-medium text-[#111827] mb-4">
                  Empresários em Busca de um Negócio Sólido
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                  Você precisa de ferramentas que possam te auxiliar na construção de uma empresa perene, com processos financeiros claros e acompanhamento próximo.
                </p>
                <ul className="text-xs text-[#374151] space-y-2.5 font-medium">
                  <li className="flex items-center gap-2">✓ 3º Encontro: Apresentação do Raio-X financeiro e identificação do problema</li>
                  <li className="flex items-center gap-2">✓ 4º Encontro: Mapa estratégico com melhorias e ferramentas sugeridas</li>
                  <li className="flex items-center gap-2">✓ 60 dias de suporte direto no WhatsApp para tirar dúvidas</li>
                </ul>
              </div>

            </div>
          </FadeInUp>
        </div>

        {/* TIMELINE DE 8 SEMANAS */}
        <div className="py-20 border-t border-[#E5E7EB]">
          <FadeInUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <span className="text-[#D97706] text-xs uppercase tracking-[0.25em] mb-4 block font-semibold">
                  Metodologia Validada
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#111827] leading-tight">
                  Jornada de <br/><span className="italic text-[#D97706] font-medium">08 Semanas</span>
                </h2>
              </div>
              <p className="text-[#333A48] text-sm md:text-base font-normal leading-relaxed max-w-sm">
                Quatro encontros práticos e estruturados — do mapeamento dos números atuais à entrega do Raio-X executivo e do mapa estratégico com acompanhamento direto no WhatsApp.
              </p>
            </div>
            <ConsultingTimeline />
          </FadeInUp>
        </div>

        {/* CASE STUDY */}
        <FadeInUp>
          <CaseStudy />
        </FadeInUp>

        {/* NA PRÁTICA: FORMATO DE ENTREGA */}
        <div className="py-24 border-t border-[#E5E7EB] mt-16">
          <FadeInUp>
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#D97706] font-mono block mb-8">
              FORMATO DO ATENDIMENTO
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs">
                <span className="text-4xl font-serif font-light text-[#D97706] mb-4 block">04</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#111827] mb-2 flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#D97706]" /> Encontros ao vivo
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  04 encontros online ao vivo, com duração de até 1h30min cada, dedicados exclusivamente à sua empresa.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs">
                <span className="text-4xl font-serif font-light text-[#D97706] mb-4 block">08</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#111827] mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D97706]" /> Semanas de Consultoria
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Duração total de 08 semanas para diagnóstico, implantação prática e consolidação dos novos processos.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs">
                <span className="text-4xl font-serif font-light text-[#D97706] mb-4 block">60</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#111827] mb-2 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" /> Dias de Suporte WhatsApp
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Suporte contínuo de 60 dias diretamente via WhatsApp para sanar dúvidas e apoiar cada tomada de decisão.
                </p>
              </div>
            </div>

            {/* SEÇÃO DEDICADA DE ENTREGÁVEIS */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#301A3F] to-[#20102B] text-[#FFFFF0] border border-[#472F5B]/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D97706]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
              
              <div className="max-w-3xl mb-8 relative z-10">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D97706] bg-white/10 px-3.5 py-1 rounded-full inline-block mb-3">
                  Material Tangível
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif font-light mb-3 text-[#FFFFF0]">
                  Entregáveis da <span className="italic text-[#D97706] font-medium">Consultoria</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#FFFFF0]/80 leading-relaxed">
                  Você não recebe apenas conselhos em reuniões: nós documentamos e entregamos ferramentas práticas prontas para aplicação imediata.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-[#D97706]/20 border border-[#D97706]/40 flex items-center justify-center text-[#D97706] mb-4 font-bold">
                    <Video className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif font-medium text-[#FFFFF0] mb-2">
                    Gravação dos 4 encontros
                  </h4>
                  <p className="text-xs text-[#FFFFF0]/75 leading-relaxed">
                    Acesso completo e irrestrito às gravações de todas as 4 sessões ao vivo para consultar quando quiser ou compartilhar com sócios e lideranças.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-[#D97706]/20 border border-[#D97706]/40 flex items-center justify-center text-[#D97706] mb-4 font-bold">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif font-medium text-[#FFFFF0] mb-2">
                    Material com análise financeira pronta
                  </h4>
                  <p className="text-xs text-[#FFFFF0]/75 leading-relaxed">
                    Dossiê completo com diagnóstico profundo dos números da empresa e todos os problemas e gargalos sinalizados com clareza.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-[#D97706]/20 border border-[#D97706]/40 flex items-center justify-center text-[#D97706] mb-4 font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif font-medium text-[#FFFFF0] mb-2">
                    Material estratégico & Ferramentas
                  </h4>
                  <p className="text-xs text-[#FFFFF0]/75 leading-relaxed">
                    Mapa de melhorias a serem aplicadas na prática e lista selecionada de ferramentas sugeridas para construção de um negócio sólido.
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* CTA FINAL UNIFICADO */}
        <div id="formulario-consultoria" className="py-24 border-t border-[#472F5B]/15">
          <FadeInUp>
            <LeadCaptureForm type="consultoria" />
            <div className="mt-16">
              <TrustBadges />
            </div>
          </FadeInUp>
        </div>

      </div>
    </div>
  );
}