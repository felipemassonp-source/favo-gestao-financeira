import { useRef } from "react";
import { X, Check } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  {
    pain: "Pagamento de contas da empresa e de casa no mesmo cartão, gerando confusão total.",
    solution: "Contas 100% separadas. Você passa a ter um 'salário' (pró-labore) claro e previsível."
  },
  {
    pain: "Falta de tempo para emitir notas, conciliar extratos e agendar o pagamento de boletos.",
    solution: "Toda a burocracia terceirizada conosco. Sua única tarefa financeira será aprovar os pagamentos."
  },
  {
    pain: "Dificuldade de entender planilhas complexas, relatórios frios e jargões difíceis.",
    solution: "Reuniões amigáveis com análises visuais fáceis de ler. Nós traduzimos os números para você."
  },
  {
    pain: "Precificação baseada na concorrência ou no 'achismo', sem saber se há lucro real.",
    solution: "Cálculo exato da sua margem de lucro. Você passa a cobrar o preço justo com total segurança."
  }
];

export default function ComparisonGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const rows = gsap.utils.toArray('.comparison-row');
    
    gsap.from(rows, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-[1px] w-8 bg-[#D8B36B]"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Antes & Depois</span>
          <span className="h-[1px] w-8 bg-[#D8B36B]"></span>
        </div>
        <h3 className="section-title text-4xl md:text-5xl font-serif font-light tracking-widest uppercase text-[#472f5b]">
          A Transformação do seu <span className="italic lowercase text-[#b2893d]">Dia a Dia</span>
        </h3>
      </div>

      <div className="flex flex-col border-t border-[#472f5b]/10">
        <div className="hidden md:grid grid-cols-2 gap-12 py-6 border-b border-[#472f5b]/10">
          <div className="text-[10px] uppercase tracking-[0.2em] font-light text-[#2a3a1e] pl-12">Problema Comum</div>
          <div className="text-[10px] uppercase tracking-[0.2em] font-light text-[#b2893d] pl-12">A Solução Favo</div>
        </div>

        {comparisons.map((item, index) => (
          <div 
            key={index} 
            className="comparison-row grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-10 border-b border-[#472f5b]/10 group hover:bg-[#FDFCFB] transition-colors -mx-6 px-6"
          >
            {/* Pain Point */}
            <div className="flex items-start gap-6 opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-[#2a3a1e]/30 flex items-center justify-center bg-[#fffff0]">
                <X strokeWidth={1.5} className="w-3 h-3 text-[#2a3a1e]" />
              </div>
              <p className="text-sm font-normal text-[#2a3a1e] leading-relaxed tracking-wide">
                <span className="md:hidden text-[10px] uppercase tracking-[0.2em] font-light text-[#2a3a1e] block mb-2">Problema</span>
                {item.pain}
              </p>
            </div>

            {/* Solution */}
            <div className="flex items-start gap-6">
              <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-[#D8B36B] flex items-center justify-center bg-[#D8B36B]/10">
                <Check strokeWidth={2} className="w-3 h-3 text-[#b2893d]" />
              </div>
              <p className="text-sm font-normal text-[#472f5b] leading-relaxed tracking-wide">
                <span className="md:hidden text-[10px] uppercase tracking-[0.2em] font-light text-[#b2893d] block mb-2">Solução Favo</span>
                {item.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
