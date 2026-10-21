import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Calendar, ShieldCheck, Settings2, Rocket } from "lucide-react";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Calendar,
    title: "Alinhamento",
    desc: "Reunião de 30 minutos para entendermos seu fluxo de caixa e rotinas."
  },
  {
    icon: ShieldCheck,
    title: "Acessos Seguros",
    desc: "Coleta organizada de senhas secundárias e documentos bancários."
  },
  {
    icon: Settings2,
    title: "Setup do Sistema",
    desc: "Nossa equipe parametriza tudo. Você não precisa configurar nada."
  },
  {
    icon: Rocket,
    title: "Piloto Automático",
    desc: "Sua gestão financeira rodando sem tomar o seu tempo."
  }
];

export default function OnboardingJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    // Animate connecting line
    tl.fromTo(lineRef.current, 
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 1.5, ease: "power3.inOut" }
    );

    // Animate steps stagger
    const stepElements = gsap.utils.toArray('.journey-step');
    tl.fromTo(stepElements, 
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.2)" },
      "-=1.0" // start before line finishes
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 border-t border-[#472f5b]/10 overflow-hidden">
      <div className="text-center mb-24">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-[1px] w-8 bg-[#D8B36B]"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Transição Rápida</span>
          <span className="h-[1px] w-8 bg-[#D8B36B]"></span>
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-widest text-[#472f5b] mb-6">
          Onboarding <span className="italic lowercase text-[#b2893d]">Descomplicado</span>
        </h2>
        <p className="text-[#2a3a1e] text-sm font-normal leading-relaxed tracking-wide max-w-lg mx-auto">
          Mudar de gestão não precisa ser um trauma. Nosso processo de transição foi desenhado para ser invisível e ultra-rápido, exigindo quase nada do seu tempo.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Background line for desktop */}
        <div className="hidden md:block absolute top-[44px] left-8 right-8 h-[1px] bg-[#472f5b]/10"></div>
        {/* Animated active line */}
        <div ref={lineRef} className="hidden md:block absolute top-[44px] left-8 right-8 h-[1px] bg-[#D8B36B] origin-left"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="journey-step flex flex-col items-center md:items-start relative group">
              
              {/* Mobile connecting line */}
              {idx !== steps.length - 1 && (
                <div className="md:hidden absolute top-[88px] bottom-[-48px] left-1/2 -translate-x-1/2 w-[1px] bg-[#D8B36B]/30"></div>
              )}

              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-[#fffff0] border border-[#472f5b]/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#D8B36B] transition-colors shadow-sm bg-clip-padding backdrop-filter backdrop-blur-sm">
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#D8B36B] text-[#FFFFFF] text-[10px] flex items-center justify-center font-light tracking-widest">
                  {idx + 1}
                </span>
                <step.icon strokeWidth={1} className="w-10 h-10 text-[#b2893d] group-hover:scale-110 transition-transform duration-500 ease-out" />
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left px-4 md:px-0">
                <h3 className="text-lg font-serif uppercase tracking-widest font-light text-[#472f5b] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs text-[#2a3a1e] font-light leading-relaxed tracking-wide">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
