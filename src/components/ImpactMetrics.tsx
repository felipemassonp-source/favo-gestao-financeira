import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { endValue: 50, prefix: "+", suffix: "", label: "Empresas Atendidas", desc: "Negócios rodando no piloto automático." },
  { endValue: 2500, prefix: "+", suffix: "h", label: "Horas Economizadas", desc: "Devolvidas aos nossos clientes por mês." },
  { endValue: 100, prefix: "", suffix: "%", label: "Processos Otimizados", desc: "Burocracia transformada em eficiência pura." }
];

const AnimatedNumber = ({ endValue, prefix, suffix }: { endValue: number, prefix: string, suffix: string }) => {
  const [value, setValue] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const proxy = { val: 0 };
    gsap.to(proxy, {
      val: endValue,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: numberRef.current,
        start: "top 85%",
      },
      onUpdate: () => setValue(Math.round(proxy.val))
    });
  }, { scope: numberRef });

  return (
    <span ref={numberRef} className="text-6xl md:text-7xl font-serif text-[#b2893d] mb-6 block font-light">
      {prefix}{new Intl.NumberFormat('pt-BR').format(value)}{suffix}
    </span>
  );
};

export default function ImpactMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.metric-item');
    gsap.from(items, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 border-t border-[#472f5b]/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {metrics.map((metric, i) => (
          <div key={i} className="metric-item flex flex-col items-center text-center px-4">
            <AnimatedNumber endValue={metric.endValue} prefix={metric.prefix} suffix={metric.suffix} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-light text-[#472f5b] mb-4 block border-b border-[#D8B36B]/30 pb-4 w-12">
            </span>
            <span className="text-sm font-serif uppercase tracking-widest text-[#472f5b] mb-3 block">
              {metric.label}
            </span>
            <p className="text-xs text-[#2a3a1e] font-light tracking-wide leading-relaxed max-w-[220px]">
              {metric.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
