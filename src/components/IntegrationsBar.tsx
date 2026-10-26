import React, { useRef } from "react";
import { motion } from "motion/react";
import { Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

interface IntegrationItem {
  name: string;
  category: "Plataforma" | "ERP & Gestão" | "Banco & Meio de Pagamento";
  tag: string;
  svg: () => React.ReactNode;
}

const integrations: IntegrationItem[] = [
  {
    name: "Hotmart",
    category: "Plataforma",
    tag: "Infoprodutos",
    svg: () => (
      <svg viewBox="0 0 120 32" className="h-6 w-auto fill-current" aria-label="Hotmart">
        {/* Hotmart stylized flame + typography */}
        <path d="M12 4C10.5 7 11 9.5 9 11.5C7.5 10 7.5 8 8 6C5 9 3 13 4 17C5.2 21.8 9.5 25 14 25C19.5 25 24 20.5 24 15C24 9.5 18 5 12 4ZM14 22C11.5 22 9.5 20 9.5 17.5C9.5 15.5 11 14 12.5 13C13 14.5 14 15.5 15.5 15.5C16.5 15.5 17.5 14.8 17.5 13.8C18.2 15 18.5 16.5 18.5 17.5C18.5 20 16.5 22 14 22Z" />
        <text x="32" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="16" letterSpacing="0.04em">hotmart</text>
      </svg>
    )
  },
  {
    name: "Kiwify",
    category: "Plataforma",
    tag: "Checkout & Afiliação",
    svg: () => (
      <svg viewBox="0 0 105 32" className="h-6 w-auto fill-current" aria-label="Kiwify">
        {/* Kiwify stylized K icon + text */}
        <circle cx="12" cy="16" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M9 10V22M9 16L15 10M11.5 13.5L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="30" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" letterSpacing="-0.02em">Kiwify</text>
      </svg>
    )
  },
  {
    name: "Eduzz",
    category: "Plataforma",
    tag: "Cursos & Eventos",
    svg: () => (
      <svg viewBox="0 0 100 32" className="h-6 w-auto fill-current" aria-label="Eduzz">
        {/* Eduzz dual chevron mark */}
        <path d="M4 11L11 16L4 21M11 11L18 16L11 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="26" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" letterSpacing="0.02em">eduzz</text>
      </svg>
    )
  },
  {
    name: "Ticto",
    category: "Plataforma",
    tag: "Alta Conversão",
    svg: () => (
      <svg viewBox="0 0 95 32" className="h-6 w-auto fill-current" aria-label="Ticto">
        {/* Ticto geometric mark */}
        <rect x="4" y="8" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 16L12 19L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="28" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.06em">TICTO</text>
      </svg>
    )
  },
  {
    name: "Asaas",
    category: "Banco & Meio de Pagamento",
    tag: "Boletos & Cobrança",
    svg: () => (
      <svg viewBox="0 0 100 32" className="h-6 w-auto fill-current" aria-label="Asaas">
        {/* Asaas circular arrows */}
        <circle cx="10" cy="16" r="6" stroke="currentColor" strokeWidth="2.2" fill="none" strokeDasharray="14 4" />
        <text x="24" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.03em">asaas</text>
      </svg>
    )
  },
  {
    name: "Conta Azul",
    category: "ERP & Gestão",
    tag: "ERP Financeiro",
    svg: () => (
      <svg viewBox="0 0 140 32" className="h-6 w-auto fill-current" aria-label="Conta Azul">
        {/* Conta Azul cloud/geometric mark */}
        <path d="M6 19C4 19 3 17.5 3 15.5C3 13.5 4.5 12 6.5 12C7.2 9.5 9.5 8 12.5 8C16 8 18.5 10.5 19 13.5C20.5 13.5 22 14.8 22 16.5C22 18.5 20.5 19 19 19Z" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <text x="28" y="20" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="14" letterSpacing="0.01em">CONTA AZUL</text>
      </svg>
    )
  },
  {
    name: "Omie",
    category: "ERP & Gestão",
    tag: "ERP Integrado",
    svg: () => (
      <svg viewBox="0 0 95 32" className="h-6 w-auto fill-current" aria-label="Omie">
        {/* Omie stylized circle */}
        <circle cx="12" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <circle cx="12" cy="16" r="3" fill="currentColor" />
        <text x="28" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.02em">omie</text>
      </svg>
    )
  },
  {
    name: "Bling",
    category: "ERP & Gestão",
    tag: "Notas & Estoque",
    svg: () => (
      <svg viewBox="0 0 95 32" className="h-6 w-auto fill-current" aria-label="Bling">
        {/* Bling isometric diamond */}
        <path d="M12 7L19 12V20L12 25L5 20V12Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 7V16M12 16L19 20M12 16L5 20" stroke="currentColor" strokeWidth="1.5" />
        <text x="26" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.02em">Bling!</text>
      </svg>
    )
  },
  {
    name: "Itaú",
    category: "Banco & Meio de Pagamento",
    tag: "Conta PJ",
    svg: () => (
      <svg viewBox="0 0 90 32" className="h-6 w-auto fill-current" aria-label="Itaú">
        {/* Itaú rounded block */}
        <rect x="4" y="6" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="7.5" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="13" letterSpacing="-0.03em">itau</text>
        <text x="32" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" fontSize="16" letterSpacing="0.03em">Empresas</text>
      </svg>
    )
  },
  {
    name: "Cora",
    category: "Banco & Meio de Pagamento",
    tag: "Banco Digital PJ",
    svg: () => (
      <svg viewBox="0 0 95 32" className="h-6 w-auto fill-current" aria-label="Cora">
        {/* Cora spiral ribbon */}
        <path d="M14 9C10 9 7 12 7 16C7 20 10 23 14 23C17 23 19 21 20 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="15" cy="16" r="2.5" fill="currentColor" />
        <text x="28" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" letterSpacing="-0.03em">cora</text>
      </svg>
    )
  },
  {
    name: "Nubank",
    category: "Banco & Meio de Pagamento",
    tag: "Conta PJ & Cartão",
    svg: () => (
      <svg viewBox="0 0 110 32" className="h-6 w-auto fill-current" aria-label="Nubank">
        {/* Nubank continuous 'nu' */}
        <path d="M6 22V11C6 11 8.5 9 11 11V22M11 15C13 13 15.5 13 17 15V22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="26" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.02em">nubank</text>
      </svg>
    )
  }
];

export default function IntegrationsBar() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#FFFFF0] border-y border-[#38183A]/15 py-10 md:py-14 overflow-hidden relative"
      aria-label="Integrações e Ecossistema"
    >
      {/* Decorative gradient masks for smooth marquee fading on left and right */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FFFFF0] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FFFFF0] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-3">
          <Layers className="w-3.5 h-3.5 text-[#38183A]" />
          <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-[#38183A] bg-[#38183A]/10 px-3 py-1 rounded-full border border-[#38183A]/20">
            Conectividade Total
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-serif font-light text-[#1F242D] tracking-wide">
          Integrado ao ecossistema do seu negócio
        </h3>
        <p className="text-xs text-[#4B5262] font-normal max-w-xl mx-auto mt-2">
          Conciliamos suas vendas, emissão fiscal e extratos bancários sem você precisar mudar as ferramentas que já utiliza.
        </p>
      </div>

      {/* Infinite Monochromatic Scrolling Track */}
      <div className="relative w-full overflow-hidden flex items-center group">
        <div 
          ref={marqueeRef}
          className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused]"
        >
          {/* First set of logos */}
          {integrations.map((item, idx) => (
            <div 
              key={`logo-1-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#38183A]/15 bg-white text-[#38183A] hover:text-[#2B112D] hover:border-[#38183A]/50 hover:bg-[#FFFFFF] hover:shadow-md transition-all duration-300 shrink-0 cursor-default"
              title={`${item.name} - ${item.tag}`}
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                {item.svg()}
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#38183A] font-semibold bg-[#38183A]/10 px-2 py-0.5 rounded-md hidden sm:inline-block">
                {item.tag}
              </span>
            </div>
          ))}

          {/* Duplicated set for seamless loop */}
          {integrations.map((item, idx) => (
            <div 
              key={`logo-2-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#38183A]/15 bg-white text-[#38183A] hover:text-[#2B112D] hover:border-[#38183A]/50 hover:bg-[#FFFFFF] hover:shadow-md transition-all duration-300 shrink-0 cursor-default"
              title={`${item.name} - ${item.tag}`}
              aria-hidden="true"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                {item.svg()}
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#38183A] font-semibold bg-[#38183A]/10 px-2 py-0.5 rounded-md hidden sm:inline-block">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust pill footer below logos */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 px-6 text-[11px] text-[#4B5262] font-normal">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#38183A]" />
          Acesso bancário 100% secundário (apenas leitura e conciliação)
        </span>
        <span className="hidden md:inline text-[#38183A]/30">•</span>
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#38183A]" />
          Importação automática diária de extratos e gateways
        </span>
      </div>
    </motion.section>
  );
}
