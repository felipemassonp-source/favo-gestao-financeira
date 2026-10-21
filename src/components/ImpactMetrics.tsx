import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const metrics = [
  {
    endValue: 50,
    prefix: "+",
    suffix: "",
    label: "Empresas Atendidas",
    desc: "Operações financeiras estruturadas em empresas de serviços, clínicas, agências e comércio.",
    context: "Base: Histórico acumulado de clientes atendidos em BPO, Assistência e Consultoria.",
  },
  {
    endValue: 2500,
    prefix: "+",
    suffix: "h",
    label: "Horas Operacionais Poupadas",
    desc: "Tempo liberado dos sócios com agendamentos bancários, emissão de notas e conciliação.",
    context: "Base: Média estimada de 40h a 50h/mês economizadas por empresa ativa ao longo de 12 meses.",
  },
  {
    endValue: 100,
    prefix: "",
    suffix: "%",
    label: "Conciliação Diária em ERP",
    desc: "Movimentações bancárias conferidas e classificadas por categoria até o dia útil seguinte (D+1).",
    context: "Base: Padrão operacional obrigatório em todos os contratos ativos da Favo.",
  },
];

const AnimatedNumber = ({ endValue, prefix, suffix }: { endValue: number; prefix: string; suffix: string }) => {
  const [value, setValue] = useState(endValue);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const duration = 1400;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(ease * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, endValue]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-serif text-[#472F5B] mb-4 block font-light">
      {prefix}
      {new Intl.NumberFormat("pt-BR").format(value)}
      {suffix}
    </span>
  );
};

export default function ImpactMetrics() {
  return (
    <section className="py-20 border-t border-[#472F5B]/15">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#472F5B] font-mono block mb-2">
          INDICADORES OPERACIONAIS COM BASE DE CÁLCULO
        </span>
        <p className="text-xs sm:text-sm text-[#333A48]">
          Transparência sobre o impacto médio apurado na rotina das empresas acompanhadas pela Favo:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="metric-item flex flex-col items-center text-center p-7 rounded-3xl bg-white border border-[#472F5B]/15 shadow-xs"
          >
            <AnimatedNumber endValue={metric.endValue} prefix={metric.prefix} suffix={metric.suffix} />
            <span className="w-10 border-b border-[#D97706]/50 mb-4 block" />
            <span className="text-lg font-serif font-medium text-[#1F242D] mb-2 block">
              {metric.label}
            </span>
            <p className="text-xs sm:text-sm text-[#333A48] font-normal leading-relaxed mb-4">
              {metric.desc}
            </p>
            <div className="mt-auto pt-3 border-t border-[#472F5B]/10 w-full">
              <p className="text-[11px] text-[#472F5B] font-medium leading-snug">
                {metric.context}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
