import { 
  FolderKanban, 
  Clock, 
  ShieldCheck, 
  Compass, 
  Users, 
  TrendingUp 
} from "lucide-react";

interface BenefitItem {
  title: string;
  desc: string;
  icon: typeof FolderKanban;
}

const benefits: BenefitItem[] = [
  {
    title: "Organização Eficiente",
    desc: "Mantenha seu negócio organizado, sem se preocupar com a burocracia e os detalhes financeiros complicados.",
    icon: FolderKanban,
  },
  {
    title: "Economia de Tempo e Recursos",
    desc: "Evite custos desnecessários com funcionários, treinamento e despesas administrativas, economize tempo e recursos valiosos.",
    icon: Clock,
  },
  {
    title: "Redução de Inadimplência",
    desc: "Minimize os riscos de inadimplência e perda de receita, garantindo que todos os compromissos financeiros sejam honrados pontualmente.",
    icon: ShieldCheck,
  },
  {
    title: "Visão Estratégica",
    desc: "Tenha uma visão clara das melhores oportunidades de crescimento para o seu negócio, tomando decisões mais assertivas.",
    icon: Compass,
  },
  {
    title: "Apoio Especializado",
    desc: "Conte com a expertise de uma equipe dedicada e experiente para orientação personalizada e suporte contínuo em todas as suas necessidades rotineiras.",
    icon: Users,
  },
  {
    title: "Liberdade Financeira",
    desc: "Ganhe mais liberdade para focar no que realmente importa para o seu negócio, enquanto nós cuidamos do dia a dia do seu financeiro.",
    icon: TrendingUp,
  },
];

export default function FinancialBenefits() {
  return (
    <section className="py-24 border-t border-[#472F5B]/15">
      <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#472F5B] font-mono block mb-4">
        BENEFÍCIOS ESTRATÉGICOS
      </span>
      
      <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#1F242D] mb-16">
        Muito além de <br/>
        <span className="italic font-medium text-[#472F5B]">pagar contas</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              className="benefit-card flex flex-col group p-8 rounded-3xl bg-[#FFFFFF] border border-[#472F5B]/15 hover:border-[#472F5B]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-[#472F5B]/10 border border-[#472F5B]/20 flex items-center justify-center text-[#472F5B] group-hover:bg-[#472F5B] group-hover:text-[#FAF9F5] group-hover:scale-105 transition-all duration-300 shadow-sm">
                <Icon className="w-6 h-6 stroke-[1.75]" />
              </div>
              <h3 className="text-xl font-serif font-medium text-[#1F242D] mb-3 group-hover:text-[#472F5B] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#4B5262] font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
