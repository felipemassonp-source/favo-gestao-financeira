import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MessageCircle, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const timelineSteps = [
  {
    title: "1º Encontro",
    time: "Semana 1",
    description: "Identificação de gargalos e melhorias a serem aplicadas. Vamos entender a fundo o seu cenário atual."
  },
  {
    title: "2º Encontro",
    time: "Semana 2",
    description: "Apontamento de estratégias e mapeamento de processos. Estruturamos o plano de ação ideal para você."
  },
  {
    title: "3º Encontro",
    time: "Semana 4",
    description: "Aplicação das estratégias e ferramentas que podem auxiliar na sua rotina para ganhar produtividade."
  },
  {
    title: "4º Encontro",
    time: "Semana 6",
    description: "Revisão do que já foi aplicado e auxílio direto nos pontos que ainda são travas no seu dia a dia."
  },
  {
    title: "Acompanhamento",
    time: "90 Dias Seguintes",
    description: "Suporte direto durante 90 dias via WhatsApp para tirar dúvidas e destravar processos sempre que precisar.",
    icon: MessageCircle,
    highlight: true
  }
];

export default function ConsultingTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.timeline-item');
    const line = document.querySelector('.timeline-line-progress');

    // Animate line drawing down as you scroll
    if (line) {
      gsap.to(line, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        height: "100%",
        ease: "none"
      });
    }

    // Animate items fading in and sliding from sides
    items.forEach((item: any, i) => {
      const isEven = i % 2 === 0;
      gsap.fromTo(item, 
        { opacity: 0, x: isEven ? -40 : 40 },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out"
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-10 mt-10">
      {/* Background Static Line */}
      <div className="absolute left-[27px] md:left-[50%] top-0 bottom-0 w-[1px] bg-[#472f5b]/10 -translate-x-1/2"></div>
      
      {/* Animated Fill Line */}
      <div className="timeline-line-progress absolute left-[27px] md:left-[50%] top-0 w-[1px] bg-[#D8B36B] -translate-x-1/2 h-0"></div>

      <div className="space-y-16">
        {timelineSteps.map((step, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Central Node */}
              <div className="absolute left-[27px] md:left-[50%] w-12 h-12 -translate-x-1/2 rounded-full border border-[#D8B36B] bg-[#fffff0] flex items-center justify-center z-10 shadow-sm transition-transform duration-500 hover:scale-110">
                {step.icon ? (
                  <step.icon className={`w-5 h-5 ${step.highlight ? 'text-[#b2893d]' : 'text-[#472f5b]'}`} strokeWidth={1.5} />
                ) : (
                  <span className="text-xs font-serif text-[#b2893d]">{idx + 1}</span>
                )}
              </div>

              {/* Content Box */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}>
                <div className="bg-[#FFFFFF] border border-[#472f5b]/10 p-8 shadow-md hover:border-[#D8B36B]/40 transition-colors group">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-light text-[#b2893d] mb-3 block">
                    {step.time}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif uppercase tracking-widest font-light text-[#472f5b] mb-4 group-hover:text-[#b2893d] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm font-normal text-[#2a3a1e] leading-relaxed tracking-wide">
                    {step.description}
                  </p>
                </div>
              </div>

            </div>
          )
        })}
      </div>
    </div>
  );
}
