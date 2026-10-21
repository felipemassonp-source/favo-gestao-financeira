import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AlertTriangle, TrendingDown, ShieldAlert, XOctagon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const risks = [
  {
    title: "Desorganização Total",
    desc: "Sua empresa se torna desorganizada em relação às finanças, resultando em falta de planejamento, margem de lucro baixa e problemas com capital de giro.",
    icon: AlertTriangle
  },
  {
    title: "Inadimplência",
    desc: "Sem um controle adequado das contas, a empresa pode enfrentar problemas de inadimplência, afetando sua credibilidade com fornecedores e clientes.",
    icon: TrendingDown
  },
  {
    title: "Fraudes e Erros",
    desc: "A falta de controle aumenta os riscos de fraudes internas, bem como erros contábeis que podem prejudicar a integridade dos registros.",
    icon: ShieldAlert
  },
  {
    title: "Perda de Crescimento",
    desc: "Sem uma estratégia financeira clara e orientação especializada, sua empresa perde preciosas oportunidades de crescimento e expansão.",
    icon: XOctagon
  }
];

export default function RiskAwareness() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.risk-card');
    
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
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
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20" ref={textRef}>
        <div className="lg:w-1/2">
          <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.3em] mb-6 block">Muito mais que números</span>
          <p className="text-xl md:text-2xl font-serif font-light leading-relaxed text-[#472f5b] tracking-wide">
            "Na Favo, entendemos que a gestão financeira é sobre <span className="italic text-[#b2893d]">liberdade, crescimento e tranquilidade</span> para você focar no que realmente importa: o sucesso do seu negócio."
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-12 lg:border-l lg:border-[#472f5b]/10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light uppercase tracking-widest text-[#472f5b] mb-6">
            E se a sua empresa <br/><span className="italic lowercase text-[#b2893d]">ficasse sem dinheiro?</span>
          </h2>
          <p className="text-[#2a3a1e] text-sm font-normal leading-relaxed tracking-wide">
            Sem uma Gestão Financeira eficiente, você não está apenas deixando de ganhar. Você está correndo sérios riscos que podem comprometer o futuro do seu trabalho.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {risks.map((item, idx) => (
          <div key={idx} className="risk-card bg-[#FFFFFF] border border-[#472f5b]/10 p-8 md:p-10 hover:border-[#D8B36B]/50 transition-colors group flex flex-col md:flex-row gap-8 items-start">
            <div className="w-14 h-14 shrink-0 rounded-full bg-[#fffff0] border border-[#472f5b]/10 flex items-center justify-center group-hover:bg-[#D8B36B]/10 group-hover:border-[#D8B36B] transition-colors">
              <item.icon strokeWidth={1.5} className="w-6 h-6 text-[#b2893d]" />
            </div>
            <div>
              <h3 className="text-lg font-serif uppercase tracking-widest text-[#472f5b] mb-3 group-hover:text-[#b2893d] transition-colors">{item.title}</h3>
              <p className="text-sm text-[#2a3a1e] font-light leading-relaxed tracking-wide">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto border border-[#D8B36B]/30 bg-[#FFFFFF] p-8">
        <p className="text-sm font-normal tracking-wide text-[#2a3a1e] leading-relaxed">
          Uma gestão financeira eficaz é o alicerce para o sucesso de qualquer negócio, proporcionando <span className="font-medium text-[#472f5b]">clareza, controle e oportunidades de crescimento sustentável.</span>
        </p>
      </div>
    </section>
  );
}
