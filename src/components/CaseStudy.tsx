import { useRef } from "react";
import { motion } from "motion/react";
import { TrendingUp, Clock, Target } from "lucide-react";

export default function CaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-28 bg-[#472F5B] text-[#FFFFF0] my-20 rounded-3xl relative overflow-hidden shadow-2xl">
      {/* Decorative subtle honeycomb grid on berinjela background */}
      <div className="absolute inset-0 bg-honeycomb opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Narrative / Context */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#D97706] block mb-4">
              ESTUDO DE CASO REAL • CICLO DE 90 DIAS
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight leading-tight mb-8">
              Do Caos à <br/><span className="italic text-[#D97706] font-medium">Previsibilidade Total</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D97706] mb-3 font-semibold">O Cenário (Antes)</h4>
                <p className="text-sm font-normal text-[#FFFFF0]/85 leading-relaxed">
                  Uma empresa de serviços que crescia rápido, mas os sócios enfrentavam desorganização nas contas a pagar e receber, falta de conciliação bancária diária e muito tempo gasto apagando incêndios financeiros.
                </p>
              </div>
              
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D97706] mb-3 font-semibold">A Solução Favo (Consultoria & Gestão)</h4>
                <p className="text-sm font-normal text-[#FFFFF0]/85 leading-relaxed">
                  Estruturamos a conciliação bancária em D+1, separamos despesas PF/PJ, organizamos o contas a pagar e a receber e entregamos relatórios mensais de DRE com fechamento rigoroso. A consultoria em 4 encontros destravou os gargalos e entregou um mapa estratégico definitivo.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 flex flex-col justify-center gap-6"
          >
            <div className="bg-[#FFFFF0]/5 border border-[#FFFFF0]/15 rounded-3xl p-8 hover:bg-[#FFFFF0]/10 transition-colors shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#D97706]/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#D97706]" />
                </div>
                <h4 className="text-sm font-serif uppercase tracking-widest font-medium">Lucratividade</h4>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-serif font-light text-[#D97706]">+45%</span>
                <span className="text-xs font-normal text-[#FFFFF0]/80 tracking-wide pb-1">de evolução na margem líquida em 90 dias (DRE)</span>
              </div>
            </div>

            <div className="bg-[#FFFFF0]/5 border border-[#FFFFF0]/15 rounded-3xl p-8 hover:bg-[#FFFFF0]/10 transition-colors shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#D97706]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#D97706]" />
                </div>
                <h4 className="text-sm font-serif uppercase tracking-widest font-medium">Tempo Livre</h4>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-serif font-light text-[#D97706]">-30h</span>
                <span className="text-xs font-normal text-[#FFFFF0]/80 tracking-wide pb-1">operacionais por mês devolvidas (~1h30/dia útil)</span>
              </div>
            </div>

            <div className="bg-[#FFFFF0]/5 border border-[#FFFFF0]/15 rounded-3xl p-8 hover:bg-[#FFFFF0]/10 transition-colors shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#D97706]/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#D97706]" />
                </div>
                <h4 className="text-sm font-serif uppercase tracking-widest font-medium">Clareza</h4>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-serif font-light text-[#D97706]">100%</span>
                <span className="text-xs font-normal text-[#FFFFF0]/80 tracking-wide pb-1">das contas conciliadas em D+1 e fluxo projetado</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
