import { motion } from "motion/react";
import { AlertTriangle, TrendingDown, ShieldAlert, XOctagon } from "lucide-react";

const risks = [
  {
    title: "Desorganização Total",
    desc: "Sua empresa se torna desorganizada em relação às finanças, resultando em falta de planejamento, margem de lucro baixa e problemas com capital de giro.",
    icon: AlertTriangle
  },
  {
    title: "Inadimplência",
    desc: "Sem um controle adequado das contas, a empresa pode enfrentar problemas de inadimplência, afetando sua credibilidade com fornecedores e clientes.",
    icon: TrendingDown
  },
  {
    title: "Fraudes e Erros",
    desc: "A falta de controle aumenta os riscos de fraudes internas, bem como erros contábeis que podem prejudicar a integridade dos registros.",
    icon: ShieldAlert
  },
  {
    title: "Perda de Crescimento",
    desc: "Sem uma estratégia financeira clara e orientação especializada, sua empresa perde preciosas oportunidades de crescimento e expansão.",
    icon: XOctagon
  }
];

export default function RiskAwareness() {
  return (
    <section className="py-24 border-t border-[#38183A]/15">
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20"
      >
        <div className="lg:w-1/2">
          <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#38183A] font-mono block mb-6">MUITO MAIS QUE NÚMEROS</span>
          <p className="text-xl md:text-2xl font-serif font-light leading-relaxed text-[#1F242D] tracking-wide">
            "Na Favo, entendemos que a gestão financeira é sobre <span className="italic text-[#38183A] font-medium">liberdade, crescimento e tranquilidade</span> para você focar no que realmente importa: o sucesso do seu negócio."
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-12 lg:border-l lg:border-[#38183A]/15 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight text-[#1F242D] mb-6">
            E se a sua empresa <br className="hidden sm:block" /><span className="italic text-[#38183A] font-medium">ficasse sem dinheiro?</span>
          </h2>
          <p className="text-[#4B5262] text-sm md:text-base font-normal leading-relaxed">
            Sem uma Gestão Financeira eficiente, você não está apenas deixando de ganhar. Você está correndo sérios riscos que podem comprometer o futuro do seu trabalho.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {risks.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="risk-card bg-[#FFFFFF] border border-[#38183A]/15 rounded-3xl p-8 md:p-10 hover:border-[#38183A]/40 hover:shadow-lg transition-all duration-300 group flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#38183A]/10 border border-[#38183A]/20 flex items-center justify-center group-hover:bg-[#38183A] transition-colors">
              <item.icon strokeWidth={1.5} className="w-6 h-6 text-[#38183A] group-hover:text-[#FFFFF0] transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-medium text-[#1F242D] mb-3 group-hover:text-[#38183A] transition-colors">{item.title}</h3>
              <p className="text-sm text-[#4B5262] font-normal leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 text-center max-w-2xl mx-auto border border-[#38183A]/20 bg-[#FFFFFF] rounded-2xl p-8 shadow-sm"
      >
        <p className="text-sm font-normal text-[#4B5262] leading-relaxed">
          Uma gestão financeira eficaz é o alicerce para o sucesso de qualquer negócio, proporcionando <span className="font-semibold text-[#38183A]">clareza, controle e oportunidades de crescimento sustentável.</span>
        </p>
      </motion.div>
    </section>
  );
}
