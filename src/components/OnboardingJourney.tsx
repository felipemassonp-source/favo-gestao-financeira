import { useRef } from "react";
import { motion } from "motion/react";
import { Calendar, ShieldCheck, Settings2, Rocket } from "lucide-react";

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

  return (
    <section ref={containerRef} className="py-24 border-t border-[#472F5B]/15 overflow-hidden">
      <div className="text-center mb-24">
        <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#472F5B] font-mono block mb-4">
          TRANSIÇÃO & ONBOARDING
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#1F242D] mb-6">
          Onboarding <span className="italic text-[#472F5B] font-medium">Descomplicado</span>
        </h2>
        <p className="text-[#4B5262] text-sm md:text-base font-normal leading-relaxed max-w-lg mx-auto">
          Mudar de gestão não precisa ser um trauma. Nosso processo de transição foi desenhado para ser invisível e ultra-rápido, exigindo quase nada do seu tempo.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Background line for desktop */}
        <div className="hidden md:block absolute top-[44px] left-8 right-8 h-[1px] bg-[#472F5B]/15"></div>
        {/* Subtle accent line */}
        <div className="hidden md:block absolute top-[44px] left-8 right-8 h-[2px] bg-[#472F5B]"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="journey-step flex flex-col items-center md:items-start relative group"
            >
              
              {/* Mobile connecting line */}
              {idx !== steps.length - 1 && (
                <div className="md:hidden absolute top-[88px] bottom-[-48px] left-1/2 -translate-x-1/2 w-[1px] bg-[#472F5B]/30"></div>
              )}

              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-[#FFFFFF] border border-[#472F5B]/15 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#472F5B] transition-colors shadow-sm bg-clip-padding backdrop-filter backdrop-blur-sm">
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#472F5B] text-[#FFFFF0] text-[10px] flex items-center justify-center font-semibold tracking-wider shadow-sm">
                  {idx + 1}
                </span>
                <step.icon strokeWidth={1.5} className="w-9 h-9 text-[#472F5B] group-hover:scale-110 transition-transform duration-500 ease-out" />
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left px-4 md:px-0">
                <h3 className="text-lg font-serif font-medium text-[#1F242D] mb-2 tracking-tight group-hover:text-[#472F5B] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#4B5262] font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
