import { useRef } from "react";
import { motion } from "motion/react";
import { TrendingUp, Clock, Target, FileSpreadsheet, CheckCircle2 } from "lucide-react";

export default function CaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-[#472F5B] text-[#FFFFF0] my-16 rounded-3xl relative overflow-hidden shadow-2xl"
    >
      {/* Decorative subtle honeycomb grid on berinjela background */}
      <div className="absolute inset-0 bg-honeycomb opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 items-start">
          {/* Narrative / Context */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D97706] font-mono">
                ESTUDO DE CASO DOCUMENTADO
              </span>
              <span className="text-[11px] bg-white/10 text-[#FFFFF0]/90 px-3 py-0.5 rounded-full">
                Período avaliado: 90 dias • Setor de Serviços (SC)
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight leading-tight mb-8 text-balance">
              Do Caos nas Planilhas à{" "}
              <span className="italic text-[#D97706] font-medium whitespace-nowrap">
                Previsibilidade de Caixa
              </span>
            </h2>

            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xs uppercase tracking-widest text-[#D97706] mb-2 font-semibold">
                  1. Situação Inicial (Mês 0)
                </h4>
                <p className="text-xs sm:text-sm font-normal text-[#FFFFF0]/90 leading-relaxed">
                  Empresa prestadora de serviços com faturamento recorrente, mas sem separação clara entre despesas dos sócios (PF) e da operação (PJ). Pagamentos eram feitos manualmente no dia do vencimento, gerando multas recorrentes e ausência de DRE mensal.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xs uppercase tracking-widest text-[#D97706] mb-2 font-semibold">
                  2. Intervenção Favo (Semanas 1 a 8 + Operação)
                </h4>
                <p className="text-xs sm:text-sm font-normal text-[#FFFFF0]/90 leading-relaxed">
                  Mapeamento de todos os contratos e custos fixos, parametrização de plano de contas no ERP, definição de pró-labore fixo para os sócios, implantação de conciliação bancária diária (D+1) e entrega do Mapa Estratégico com orçamento projetado para 6 meses.
                </p>
              </div>

              {/* Amostra Anonimizada do Relatório Entregue */}
              <div className="p-5 rounded-2xl bg-[#2E1B3E] border border-[#D97706]/40">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#D97706] flex items-center gap-1.5">
                    <FileSpreadsheet className="w-4 h-4" /> Amostra Real de Entregável (Dados Anonimizados)
                  </span>
                  <span className="text-[10px] font-mono text-white/70">DRE Gerencial • Mês 1 vs Mês 3</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[11px] font-mono bg-white/5 p-3 rounded-xl">
                  <div>
                    <span className="text-white/60 block">Indicador</span>
                    <strong className="text-white block mt-1">Margem Líquida</strong>
                    <strong className="text-white block mt-1">Juros/Multas</strong>
                    <strong className="text-white block mt-1">Reserva Caixa</strong>
                  </div>
                  <div>
                    <span className="text-white/60 block">Antes (Mês 1)</span>
                    <span className="text-red-300 block mt-1">11,4%</span>
                    <span className="text-red-300 block mt-1">R$ 1.840/mês</span>
                    <span className="text-red-300 block mt-1">0,4 folha</span>
                  </div>
                  <div>
                    <span className="text-white/60 block">Depois (Mês 3)</span>
                    <span className="text-emerald-300 font-bold block mt-1">16,5% (+45%)</span>
                    <span className="text-emerald-300 font-bold block mt-1">R$ 0,00</span>
                    <span className="text-emerald-300 font-bold block mt-1">2,5 folhas</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metrics with Calculation Context */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 flex flex-col justify-center gap-5"
          >
            <div className="bg-[#FFFFF0]/5 border border-[#FFFFF0]/15 rounded-3xl p-7 hover:bg-[#FFFFF0]/10 transition-colors shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#D97706]/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <h4 className="text-sm font-serif uppercase tracking-widest font-medium">
                    Evolução da Margem Líquida
                  </h4>
                </div>
                <span className="text-[10px] font-mono uppercase bg-white/10 px-2.5 py-1 rounded-full text-[#D97706]">
                  Em 90 dias
                </span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-serif font-light text-[#D97706]">+45%</span>
                <span className="text-xs font-medium text-[#FFFFF0]/90">
                  de ganho proporcional na margem (de 11,4% para 16,5%)
                </span>
              </div>
              <p className="text-xs text-[#FFFFF0]/75 leading-relaxed pt-2 border-t border-white/10">
                <strong>Como foi medido:</strong> Comparação direta na DRE Gerencial entre o 1º e o 3º mês após renegociação de fornecedores, corte de assinaturas ociosas e separação de contas PF/PJ.
              </p>
            </div>

            <div className="bg-[#FFFFF0]/5 border border-[#FFFFF0]/15 rounded-3xl p-7 hover:bg-[#FFFFF0]/10 transition-colors shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#D97706]/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <h4 className="text-sm font-serif uppercase tracking-widest font-medium">
                    Tempo Operacional Devolvido
                  </h4>
                </div>
                <span className="text-[10px] font-mono uppercase bg-white/10 px-2.5 py-1 rounded-full text-[#D97706]">
                  ~1h30 por dia útil
                </span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-serif font-light text-[#D97706]">30h</span>
                <span className="text-xs font-medium text-[#FFFFF0]/90">
                  mensais poupadas pelos sócios na rotina bancária
                </span>
              </div>
              <p className="text-xs text-[#FFFFF0]/75 leading-relaxed pt-2 border-t border-white/10">
                <strong>Como foi medido:</strong> Tempo antes dedicado pelos sócios a lançamentos de planilhas, emissão de NFS-e e agendamentos manuais (20 dias úteis × 1h30/dia).
              </p>
            </div>

            <div className="bg-[#FFFFF0]/5 border border-[#FFFFF0]/15 rounded-3xl p-7 hover:bg-[#FFFFF0]/10 transition-colors shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#D97706]/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <h4 className="text-sm font-serif uppercase tracking-widest font-medium">
                    Visibilidade de Fluxo de Caixa
                  </h4>
                </div>
                <span className="text-[10px] font-mono uppercase bg-white/10 px-2.5 py-1 rounded-full text-[#D97706]">
                  Horizonte 90 dias
                </span>
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-serif font-light text-[#D97706]">100%</span>
                <span className="text-xs font-medium text-[#FFFFF0]/90">
                  das contas bancárias e cartões conciliados em D+1
                </span>
              </div>
              <p className="text-xs text-[#FFFFF0]/75 leading-relaxed pt-2 border-t border-white/10">
                <strong>Como foi medido:</strong> Totalidade das entradas e saídas categorizadas no sistema Conta Azul com projeção de recebíveis e despesas fixas para os 3 meses seguintes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
