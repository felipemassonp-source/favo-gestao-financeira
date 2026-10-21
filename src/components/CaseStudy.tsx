import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, TrendingUp, Clock, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.case-animate');
    
    gsap.from(elements, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 30,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-[#472f5b] text-[#fffff0] my-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Narrative / Context */}
          <div className="w-full lg:w-1/2">
            <div className="case-animate flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#D8B36B]">Estudo de Caso Real</span>
            </div>
            
            <h2 className="case-animate text-4xl md:text-5xl font-serif font-light uppercase tracking-widest mb-8">
              Do Caos à <br/><span className="italic lowercase text-[#D8B36B]">Previsibilidade</span>
            </h2>
            
            <div className="case-animate space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D8B36B] mb-3 font-medium">O Cenário (Antes)</h4>
                <p className="text-sm font-normal text-[#fffff0]/90 leading-relaxed tracking-wide">
                  Uma agência de marketing digital que crescia rápido, mas os sócios não sabiam se a empresa dava lucro. 
                  Mistura de contas pessoais e jurídicas, precificação baseada no "feeling" e muito tempo gasto apagando incêndios financeiros.
                </p>
              </div>
              
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D8B36B] mb-3 font-medium">A Solução Favo (6 Semanas)</h4>
                <p className="text-sm font-normal text-[#fffff0]/90 leading-relaxed tracking-wide">
                  Implantamos um BPO Financeiro integrado ao Conta Azul. Mapeamos os custos fixos, separamos o pró-labore 
                  e desenhamos DREs gerenciais semanais. Passamos a atuar como um CFO virtual, guiando as tomadas de decisão.
                </p>
              </div>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8">
            <div className="case-animate bg-[#fffff0]/5 border border-[#D8B36B]/20 p-8 hover:bg-[#fffff0]/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#D8B36B]/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#D8B36B]" />
                </div>
                <h4 className="text-sm font-serif uppercase tracking-widest">Lucratividade</h4>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-serif font-light text-[#D8B36B]">+45%</span>
                <span className="text-xs font-normal text-[#fffff0] tracking-wide pb-1">de margem líquida</span>
              </div>
            </div>

            <div className="case-animate bg-[#fffff0]/5 border border-[#D8B36B]/20 p-8 hover:bg-[#fffff0]/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#D8B36B]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#D8B36B]" />
                </div>
                <h4 className="text-sm font-serif uppercase tracking-widest">Tempo Livre</h4>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-serif font-light text-[#D8B36B]">-30h</span>
                <span className="text-xs font-normal text-[#fffff0] tracking-wide pb-1">operacionais por mês</span>
              </div>
            </div>

            <div className="case-animate bg-[#fffff0]/5 border border-[#D8B36B]/20 p-8 hover:bg-[#fffff0]/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#D8B36B]/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#D8B36B]" />
                </div>
                <h4 className="text-sm font-serif uppercase tracking-widest">Clareza</h4>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-serif font-light text-[#D8B36B]">100%</span>
                <span className="text-xs font-normal text-[#fffff0] tracking-wide pb-1">de previsibilidade de caixa</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
