import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const metrics = [
  {
    endValue: 50,
    prefix: "+",
    suffix: "",
    label: "Empresas Atendidas",
    desc: "Negócios estruturados em serviços, clínicas, agências e comércio.",
  },
  {
    endValue: 2500,
    prefix: "+",
    suffix: "h",
    label: "Horas Economizadas",
    desc: "Média de 40h a 50h/mês devolvidas aos sócios em rotinas bancárias e conciliação.",
  },
  {
    endValue: 100,
    prefix: "",
    suffix: "%",
    label: "Processos Otimizados",
    desc: "Movimentações conciliadas diariamente (D+1) em sistema ERP.",
  },
];

const AnimatedNumber = ({ endValue, prefix, suffix }: { endValue: number; prefix: string; suffix: string }) => {
  const [value, setValue] = useState(endValue);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(ease * endValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, endValue]);

  return (
    <span ref={ref} className="text-6xl md:text-7xl font-serif text-[#38183A] mb-6 block font-light">
      {prefix}
      {new Intl.NumberFormat("pt-BR").format(value)}
      {suffix}
    </span>
  );
};

export default function ImpactMetrics() {
  return (
    <section className="py-24 border-t border-[#38183A]/15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="metric-item flex flex-col items-center text-center px-4"
          >
            <AnimatedNumber endValue={metric.endValue} prefix={metric.prefix} suffix={metric.suffix} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-light text-[#38183A] mb-4 block border-b border-[#38183A]/20 pb-4 w-12" />
            <span className="text-base font-serif font-medium text-[#1F242D] mb-2 block">
              {metric.label}
            </span>
            <p className="text-xs text-[#4B5262] font-normal leading-relaxed max-w-[240px]">
              {metric.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
