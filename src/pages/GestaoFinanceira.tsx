import FadeInUp from "../components/FadeInUp";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import MagneticButton from "../components/MagneticButton";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

import TangibleResults from "../components/TangibleResults";
import ImpactMetrics from "../components/ImpactMetrics";
import OnboardingJourney from "../components/OnboardingJourney";
import FinancialBenefits from "../components/FinancialBenefits";
import RiskAwareness from "../components/RiskAwareness";

import Testimonials from "../components/Testimonials";
import LeadCaptureForm from "../components/LeadCaptureForm";
import TrustBadges from "../components/TrustBadges";
import SecurityGuarantee from "../components/SecurityGuarantee";
import FinancialIllustration from "../components/FinancialIllustration";
import FAQ from "../components/FAQ";

gsap.registerPlugin(ScrollTrigger);

const tasks = [
  "Controle de fluxo de caixa",
  "Gestão de contas a pagar",
  "Gestão de contas a receber",
  "Emissão de nota fiscal",
  "Emissão de boletos e relatórios",
  "Gráfico de resultados",
  "Apoio contábil",
  "Controle de inadimplência",
  "Controle de cartão de crédito",
  "Controle orçamentário",
  "Controle de metas",
  "Distribuição de despesas por projetos",
  "Fechamento de documentos bancários mensais",
  "Controle de notas de despesas"
];

export default function GestaoFinanceira() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const isInitialLoad = !sessionStorage.getItem('favo_visited');
  const initialDelay = isInitialLoad ? 2.4 : 0.2;

  useGSAP(() => {
    if (titleRef.current) {
      const text = new SplitType(titleRef.current, { types: 'lines,words,chars' });
      
      text.lines?.forEach((line) => {
        const wrapper = document.createElement('div');
        wrapper.style.overflow = 'hidden';
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.fromTo(".subtitle", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: initialDelay + 1.0 }
      );

      gsap.from(text.chars, {
        opacity: 0,
        y: "100%",
        rotationZ: 2,
        stagger: 0.02,
        duration: 1.4,
        ease: "power4.out",
        delay: initialDelay
      });
    }

    const taskItems = gsap.utils.toArray('.task-item');
    gsap.from(taskItems, {
      scrollTrigger: {
        trigger: ".tasks-grid",
        start: "top 85%",
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out"
    });

  }, { scope: container });

  return (
    <div ref={container} className="w-full min-h-screen pt-40 pb-20 bg-[#fffff0]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section */}
        <div className="flex items-center gap-4 mb-8">
          <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Terceirização / BPO</span>
        </div>
        
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-serif font-light tracking-widest mb-12 uppercase text-[#472f5b] max-w-5xl">
          Gestão<br/> <span className="text-[#b2893d] italic lowercase">Financeira</span>
        </h1>
        <p className="subtitle text-sm md:text-base font-light text-[#2a3a1e] max-w-2xl leading-relaxed mb-24 opacity-0 tracking-wide">
          Um serviço mensal e recorrente onde assumimos o acompanhamento diário da sua empresa. 
          Tiramos a burocracia das suas mãos para que você tenha paz de espírito e foque exclusivamente no atendimento aos seus clientes e crescimento do negócio.
        </p>

        {/* Animated Impact Metrics */}
        <FadeInUp>
          <ImpactMetrics />
        </FadeInUp>

        {/* Risk Awareness Section */}
        <FadeInUp>
          <RiskAwareness />
        </FadeInUp>

        {/* Features Grid */}
        <div className="py-20 border-t border-[#472f5b]/10 mt-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">
            <div className="lg:w-1/2">
              <span className="text-[#b2893d] text-[10px] uppercase tracking-[0.3em] mb-6 block">O que está incluso</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-widest text-[#472f5b] mb-8">
                Nossa rotina,<br/><span className="italic lowercase text-[#b2893d]">seu tempo livre</span>
              </h2>
              <p className="text-[#2a3a1e] text-sm font-normal leading-relaxed tracking-wide max-w-md">
                Mais do que pagar contas, nós estruturamos e acompanhamos cada centavo que entra e sai. Entregamos clareza visual, conciliações bancárias rigorosas e relatórios financeiros detalhados para o seu controle absoluto.
              </p>
            </div>
            <div className="lg:w-1/2">
              <FinancialIllustration />
            </div>
          </div>

          <div className="tasks-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {tasks.map((task, idx) => (
              <div 
                key={idx} 
                className="task-item flex items-start gap-4 p-6 bg-[#FFFFFF] border border-[#472f5b]/5 hover:border-[#D8B36B]/50 transition-colors group"
              >
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-[#D8B36B] flex items-center justify-center bg-[#D8B36B]/10 group-hover:scale-110 transition-transform">
                  <Check strokeWidth={2.5} className="w-2.5 h-2.5 text-[#b2893d]" />
                </div>
                <span className="text-sm font-normal tracking-wide text-[#472f5b]">{task}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Benefits Section */}
        <FadeInUp>
          <FinancialBenefits />
        </FadeInUp>

        {/* Security and Confidentiality Guarantee */}
        <FadeInUp>
          <SecurityGuarantee />
        </FadeInUp>

        {/* Onboarding Journey */}
        <FadeInUp>
          <OnboardingJourney />
        </FadeInUp>

        {/* Tangible Results Charts */}
        <FadeInUp>
          <TangibleResults />
        </FadeInUp>

        {/* Testimonials */}
        <div className="-mx-6">
          <FadeInUp>
            <Testimonials showPricing={true} />
          </FadeInUp>
        </div>

        {/* FAQ Section */}
        <FadeInUp>
          <FAQ />
        </FadeInUp>

        {/* CTA */}
        <div className="py-24 border-t border-[#472f5b]/10 mt-16">
          <FadeInUp>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-4xl font-serif font-light uppercase tracking-widest text-[#472f5b] mb-6">
              Pronto para <span className="italic lowercase text-[#b2893d]">delegar?</span>
            </h2>
            <p className="text-[#2a3a1e] text-sm font-normal max-w-md tracking-wide">
              Pare de gastar seu tempo com planilhas e boletos. Preencha os dados abaixo e receba um diagnóstico personalizado.
            </p>
          </div>
          <LeadCaptureForm type="bpo" />
          <TrustBadges />
          </FadeInUp>
        </div>

      </div>
    </div>
  );
}
