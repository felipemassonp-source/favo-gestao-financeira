import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, FileText, Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SecurityGuarantee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".security-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 border-t border-[#472f5b]/10 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          
          <div className="w-full md:w-1/2 security-item">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Segurança & Sigilo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-widest text-[#472f5b] mb-6">
              Seus dados, <br/><span className="italic lowercase text-[#b2893d]">nossa fortaleza</span>
            </h2>
            <p className="text-[#2a3a1e] text-sm font-normal leading-relaxed tracking-wide max-w-md">
              Sabemos que informações financeiras são o coração do seu negócio. Por isso, nossa parceria é fundamentada na confiança, resguardada por contratos rígidos de sigilo e infraestrutura tecnológica de ponta.
            </p>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="security-item p-6 border border-[#472f5b]/10 bg-[#fffff0] hover:border-[#D8B36B]/50 transition-colors">
              <div className="w-10 h-10 mb-4 rounded-full bg-[#D8B36B]/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#b2893d]" />
              </div>
              <h4 className="text-sm font-serif uppercase tracking-widest text-[#472f5b] mb-2">Garantia Contratual</h4>
              <p className="text-xs text-[#2a3a1e] font-light leading-relaxed">
                Nossa atuação é formalizada juridicamente com cláusulas estritas de confidencialidade (NDA), assegurando que seus dados nunca sejam expostos.
              </p>
            </div>

            <div className="security-item p-6 border border-[#472f5b]/10 bg-[#fffff0] hover:border-[#D8B36B]/50 transition-colors">
              <div className="w-10 h-10 mb-4 rounded-full bg-[#D8B36B]/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#b2893d]" />
              </div>
              <h4 className="text-sm font-serif uppercase tracking-widest text-[#472f5b] mb-2">Acesso Restrito</h4>
              <p className="text-xs text-[#2a3a1e] font-light leading-relaxed">
                Adotamos políticas de acesso com permissões controladas. Apenas analistas dedicados ao seu projeto terão visão às suas movimentações.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
