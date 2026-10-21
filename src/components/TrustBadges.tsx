import { ShieldCheck, FileText, Lock } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TrustBadges() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const badges = gsap.utils.toArray('.trust-badge');
    gsap.from(badges, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 lg:px-0">
      <div className="trust-badge flex flex-col items-center justify-center text-center p-6 bg-[#fffff0]/50 border border-[#472f5b]/10 rounded-2xl hover:border-[#D8B36B]/50 transition-colors shadow-sm">
        <div className="w-12 h-12 rounded-full bg-[#D8B36B]/10 flex items-center justify-center mb-4">
          <Lock className="w-5 h-5 text-[#866428]" />
        </div>
        <span className="text-xs font-serif uppercase tracking-widest text-[#472f5b] mb-2">Dados Criptografados</span>
        <span className="text-[10px] font-medium text-[#2a3a1e] leading-relaxed">Tráfego 100% seguro de ponta a ponta</span>
      </div>
      <div className="trust-badge flex flex-col items-center justify-center text-center p-6 bg-[#fffff0]/50 border border-[#472f5b]/10 rounded-2xl hover:border-[#D8B36B]/50 transition-colors shadow-sm">
        <div className="w-12 h-12 rounded-full bg-[#D8B36B]/10 flex items-center justify-center mb-4">
          <FileText className="w-5 h-5 text-[#866428]" />
        </div>
        <span className="text-xs font-serif uppercase tracking-widest text-[#472f5b] mb-2">Contrato com Sigilo</span>
        <span className="text-[10px] font-medium text-[#2a3a1e] leading-relaxed">Acordo de Confidencialidade (NDA)</span>
      </div>
      <div className="trust-badge flex flex-col items-center justify-center text-center p-6 bg-[#fffff0]/50 border border-[#472f5b]/10 rounded-2xl hover:border-[#D8B36B]/50 transition-colors shadow-sm">
        <div className="w-12 h-12 rounded-full bg-[#D8B36B]/10 flex items-center justify-center mb-4">
          <ShieldCheck className="w-5 h-5 text-[#866428]" />
        </div>
        <span className="text-xs font-serif uppercase tracking-widest text-[#472f5b] mb-2">Compliance LGPD</span>
        <span className="text-[10px] font-medium text-[#2a3a1e] leading-relaxed">Privacidade absoluta dos seus dados</span>
      </div>
    </div>
  );
}
