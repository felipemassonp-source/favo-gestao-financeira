import FadeInUp from "../components/FadeInUp";
import { useState } from "react";
import { motion } from "motion/react";
import { 
  Calculator, 
  PieChart, 
  MessageCircle, 
  ArrowRight, 
  ArrowDown, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  ArrowUpRight,
  Layers,
  Check,
  FileText,
  Lock,
  CalendarCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import TrustBadges from "../components/TrustBadges";
import InstagramFeed from "../components/InstagramFeed";
import MachineXServiceCards from "../components/MachineXServiceCards";

export default function Home() {
  const [founderImgError, setFounderImgError] = useState(false);

  return (
    <div className="w-full bg-[#FFFFF0] text-[#1F242D] relative overflow-hidden font-sans">
      
      {/* 1. MESH GLOW BACKGROUND (Gradiente Volumétrico Sofisticado) */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#472F5B]/10 via-[#D97706]/5 to-transparent blur-[120px] pointer-events-none -z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[400px] right-[-200px] w-[600px] h-[600px] bg-[#472F5B]/5 blur-[140px] pointer-events-none -z-0"
      />

      {/* Grid Hexagonal Sutil */}
      <div className="absolute inset-0 bg-honeycomb opacity-[0.5] pointer-events-none -z-0" />

      {/* HERO SECTION DE ALTO IMPACTO */}
      <section className="relative pt-36 pb-24 px-6 max-w-7xl mx-auto z-10">
        
        {/* Kicker Editorial Tipográfico */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#472F5B]/85 font-mono">
            FAVO GESTÃO FINANCEIRA · ASSESSORIA, BPO & ESTRATÉGIA
          </span>
        </motion.div>

        {/* Título Principal com Tipografia Editorial */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-serif font-light tracking-tight leading-[1.15] text-[#1F242D] max-w-5xl mb-8 pb-2 text-balance"
        >
          Seu financeiro no piloto automático.{" "}
          <span className="whitespace-nowrap">
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
            <p className="hero-sub text-lg md:text-xl text-[#4B5262] font-normal leading-relaxed max-w-xl mb-10 tracking-tight">
              BPO, Assistência Financeira Virtual e Gestão Financeira com rotina organizada e relatórios claros. Elimine o caos das planilhas e tenha um time especializado cuidando de cada centavo.
            </p>

            <div className="hero-actions flex flex-wrap items-center gap-4">
              <a 
                href="https://api.whatsapp.com/send?phone=5548999725750&text=Olá,%20vim%20pelo%20site%20da%20Favo%20e%20gostaria%20de%20um%20diagnóstico%20financeiro."
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 bg-[#472F5B] hover:bg-[#361F48] text-[#FFFFF0] px-8 py-4.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold border border-[#D97706]/40 hover:border-[#D97706] shadow-xl shadow-[#472F5B]/25 hover:shadow-[0_12px_36px_rgba(217,119,6,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group overflow-hidden"
              >
                {/* Feixe de brilho sutil dourado ao passar o mouse */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D97706]/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:rotate-12 transition-transform duration-300 relative z-10 shrink-0" />
                <span className="relative z-10">Conversar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10 text-[#FFFFF0] shrink-0" />
              </a>

              <a 
                href="#solucoes"
                className="inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-[#472F5B]/20 hover:border-[#472F5B] text-[#1F242D] px-7 py-4.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold shadow-sm transition-all duration-300 backdrop-blur-md"
              >
                <span>Conhecer os Planos</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#472F5B]" />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="mt-14 pt-8 border-t border-[#472F5B]/15 grid grid-cols-3 gap-6 max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                whileHover={{ y: -2 }}
              >
                <span className="block text-2xl font-serif font-light text-[#1F242D]">100%</span>
                <span className="text-xs text-[#4B5262] font-medium tracking-tight">Conciliado diariamente</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                whileHover={{ y: -2 }}
              >
                <span className="block text-2xl font-serif font-light text-[#1F242D]">+ de 20 anos</span>
                <span className="text-xs text-[#4B5262] font-medium tracking-tight">Experiência financeira</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                whileHover={{ y: -2 }}
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
            <div className="relative p-7 sm:p-9 rounded-3xl bg-white/95 border border-[#472F5B]/15 shadow-[0_24px_60px_rgba(71,47,91,0.08)] backdrop-blur-xl">
              
              <div className="pb-5 border-b border-[#472F5B]/10 mb-6">
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
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#472F5B]/10 hover:border-[#472F5B]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#472F5B]/10 text-[#472F5B] flex items-center justify-center shrink-0 mt-0.5">
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
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#472F5B]/10 hover:border-[#472F5B]/30 hover:shadow-sm transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#472F5B]/10 text-[#472F5B] flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-serif font-medium text-[#1F242D] mb-1">
                        Fechamento & Clareza Gerencial
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                        DRE gerencial mensal, fluxo de caixa projetado e relatórios explicados com linguagem acessível para guiar suas tomadas de decisões.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.59, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl bg-[#FFFFF0] border border-[#472F5B]/10 hover:border-[#472F5B]/30 hover:shadow-sm transition-colors"
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
              <div className="pt-4 border-t border-[#472F5B]/10 flex items-center gap-2.5 text-xs sm:text-sm text-[#4B5262]">
                <Lock className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="leading-snug">
                  Perfil de operador secundário no banco: a Favo agenda os pagamentos e somente o titular autoriza a transação no app.
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* SEÇÃO DE SOLUÇÕES: BPO, ASSISTÊNCIA, GESTÃO E CONSULTORIA */}
      <section id="solucoes" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#472F5B] font-mono block mb-3">
              SOLUÇÕES SOB MEDIDA
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D]">
              Como a Favo resolve o seu <span className="italic font-medium text-[#D97706]">financeiro</span>
            </h2>
          </div>
          <p className="text-[#4B5262] text-sm md:text-base max-w-md leading-relaxed">
            Separamos com transparência total nossos modelos operacionais e estratégicos para você escolher exatamente o suporte que sua empresa precisa.
          </p>
        </motion.div>

        {/* DECK INTERATIVO MACHINEX: BPO, ASSISTÊNCIA E GESTÃO ESTRATÉGICA */}
        <div className="mb-14">
          <MachineXServiceCards className="px-0 py-0" showHeader={false} />
        </div>

        {/* CARD DESTACADO DA CONSULTORIA FINANCEIRA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-[#472F5B]/15 hover:border-[#472F5B]/40 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#472F5B]/10 text-[10px] font-bold uppercase tracking-wider text-[#472F5B]">
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
              <div className="flex flex-wrap gap-4 text-xs text-[#374151] font-medium">
                <span className="flex items-center gap-1.5">✓ 04 encontros de até 1h30min cada</span>
                <span className="flex items-center gap-1.5">✓ Gravação dos 4 encontros</span>
                <span className="flex items-center gap-1.5">✓ Material com análise pronta & mapa de ferramentas</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/consultoria"
                className="inline-flex items-center justify-center gap-2.5 bg-[#472F5B] hover:bg-[#361F48] text-[#FFFFF0] px-8 py-4 rounded-full text-xs uppercase tracking-[0.18em] font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              >
                <span>Conhecer a Consultoria</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO DA FUNDADORA (AUTORIDADE DE NÍVEL PREMIUM) */}
      <section className="py-28 px-6 max-w-7xl mx-auto border-t border-[#472F5B]/15 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-white border border-[#472F5B]/15 p-4 shadow-xl relative overflow-hidden group">
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#472F5B]/5 to-white flex items-center justify-center border border-[#472F5B]/15">
                {!founderImgError ? (
                  <>
                    <img 
                      src="/founder/andryelle.jpg" 
                      alt="Andryelle Niederauer - Fundadora e Estrategista Financeira da Favo"
                      onError={() => setFounderImgError(true)}
                      className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                    />
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#472F5B]/10 to-white rounded-2xl flex flex-col items-center justify-center border border-[#472F5B]/15 p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-[#472F5B] text-[#FFFFF0] flex items-center justify-center font-serif text-4xl font-light mb-6 shadow-md border-2 border-[#D97706]/40">
                      AN
                    </div>
                    <h4 className="text-2xl font-serif font-light text-[#1F242D]">Andryelle Niederauer</h4>
                    <p className="text-xs uppercase tracking-widest text-[#472F5B] font-semibold mt-1">
                      Fundadora & Estrategista Financeira
                    </p>
                    <div className="mt-6 pt-6 border-t border-[#472F5B]/10 w-full text-xs text-[#4B5262]">
                      + de 20 anos de liderança em finanças empresariais
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Elemento de profundidade animado */}
            <motion.div
              initial={{ opacity: 0, x: -12, y: -12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-8 -right-4 w-full h-full rounded-3xl border border-[#472F5B]/20 -z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#472F5B] font-mono block mb-4">
              QUEM CUIDA DO SEU DINHEIRO
            </span>

            <h3 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D] leading-[1.15] mb-8">
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

            <div className="mt-8 pt-8 border-t border-[#472F5B]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
        className="py-28 px-6 max-w-5xl mx-auto text-center border-t border-[#472F5B]/15"
      >
        <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#472F5B] font-mono block mb-4">
          DIAGNÓSTICO INICIAL SEM COMPROMISSO
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D] mb-6">
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
            className="relative inline-flex items-center gap-3 bg-[#472F5B] hover:bg-[#361F48] text-[#FFFFF0] px-8 py-4.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold border border-[#D97706]/40 hover:border-[#D97706] shadow-xl shadow-[#472F5B]/25 hover:shadow-[0_12px_36px_rgba(217,119,6,0.35)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#D97706]/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
            <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:rotate-12 transition-transform duration-300 relative z-10 shrink-0" />
            <span className="relative z-10">Falar com Especialista no WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 relative z-10 text-[#FFFFF0] shrink-0" />
          </a>
        </div>
        <div className="mt-12">
          <TrustBadges />
        </div>
      </motion.section>
    </div>
  );
}