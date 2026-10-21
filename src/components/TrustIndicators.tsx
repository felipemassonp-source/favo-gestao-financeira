import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "100%",
    label: "Foco no Cliente",
    description: "Nós assumimos a burocracia para você focar apenas no que faz de melhor."
  },
  {
    value: "+50",
    label: "Negócios Organizados",
    description: "Prestadores de serviços que conquistaram paz de espírito financeira."
  },
  {
    value: "Zero",
    label: "Jargões Complexos",
    description: "Comunicação simples, direta e desenhada para não-financeiros."
  },
  {
    value: "24/7",
    label: "Tranquilidade",
    description: "A certeza de que as contas da sua empresa estão separadas, em dia e seguras."
  }
];

export default function TrustIndicators() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const indicators = gsap.utils.toArray('.trust-indicator');
    
    gsap.from(indicators, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto border-t border-[#472f5b]/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="trust-indicator flex flex-col items-center text-center">
            <span className="text-6xl md:text-7xl font-serif text-[#b2893d] mb-6 block font-light">
              {stat.value}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-light text-[#472f5b] mb-4 block border-b border-[#D8B36B]/30 pb-4 w-12">
            </span>
            <span className="text-sm font-serif uppercase tracking-widest text-[#472f5b] mb-3 block">
              {stat.label}
            </span>
            <p className="text-xs text-[#2a3a1e] font-light tracking-wide leading-relaxed max-w-[220px]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
