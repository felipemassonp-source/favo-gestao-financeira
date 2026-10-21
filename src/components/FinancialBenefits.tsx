import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import UseAnimations from "react-useanimations";
import folder from "react-useanimations/lib/folder";
import calendar from "react-useanimations/lib/calendar";
import lock from "react-useanimations/lib/lock";
import explore from "react-useanimations/lib/explore";
import userPlus from "react-useanimations/lib/userPlus";
import star from "react-useanimations/lib/star";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Organização Eficiente",
    desc: "Mantenha seu negócio organizado, sem se preocupar com a burocracia e os detalhes financeiros complicados.",
    icon: folder
  },
  {
    title: "Economia de Tempo e Recursos",
    desc: "Evite custos desnecessários com funcionários, treinamento e despesas administrativas, economize tempo e recursos valiosos.",
    icon: calendar
  },
  {
    title: "Redução de Inadimplência",
    desc: "Minimize os riscos de inadimplência e perda de receita, garantindo que todos os compromissos financeiros sejam honrados pontualmente.",
    icon: lock
  },
  {
    title: "Visão Estratégica",
    desc: "Tenha uma visão clara das melhores oportunidades de crescimento para o seu negócio, tomando decisões mais assertivas.",
    icon: explore
  },
  {
    title: "Apoio Especializado",
    desc: "Conte com a expertise de uma equipe dedicada e experiente para orientação personalizada e suporte contínuo em todas as suas necessidades rotineiras.",
    icon: userPlus
  },
  {
    title: "Liberdade Financeira",
    desc: "Ganhe mais liberdade para focar no que realmente importa para o seu negócio, enquanto nós cuidamos do dia a dia do seu financeiro.",
    icon: star
  }
];

export default function FinancialBenefits() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.benefit-card');
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 border-t border-[#472f5b]/10">
      <div className="flex items-center gap-4 mb-6">
        <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
        <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Os Benefícios reais</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-widest text-[#472f5b] mb-16">
        Muito além de <br/><span className="italic lowercase text-[#b2893d]">pagar contas</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {benefits.map((item, idx) => (
          <div key={idx} className="benefit-card flex flex-col group">
            <div className="w-14 h-14 mb-6 rounded-full bg-[#FFFFFF] border border-[#472f5b]/10 flex items-center justify-center group-hover:border-[#D8B36B] transition-colors shadow-sm">
              <UseAnimations 
                animation={item.icon} 
                size={32} 
                strokeColor="#D8B36B" 
                className="text-[#b2893d] group-hover:scale-110 transition-transform cursor-pointer"
              />
            </div>
            <h3 className="text-lg font-serif uppercase tracking-widest text-[#472f5b] mb-3">{item.title}</h3>
            <p className="text-sm text-[#2a3a1e] font-light leading-relaxed tracking-wide">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
