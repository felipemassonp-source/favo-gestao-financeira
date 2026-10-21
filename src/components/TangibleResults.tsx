import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  AreaChart, Area, CartesianGrid
} from "recharts";

gsap.registerPlugin(ScrollTrigger);

const timeData = [
  { name: "Média Nacional", horas: 84 },
  { name: "Clientes Favo", horas: 4 }
];

const efficiencyData = [
  { mes: "Mês 1", controle: 30 },
  { mes: "Mês 2", controle: 55 },
  { mes: "Mês 3", controle: 75 },
  { mes: "Mês 4", controle: 90 },
  { mes: "Mês 5", controle: 100 }
];

const CustomTooltipTime = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#FFFFFF] border border-[#472f5b]/10 p-4 shadow-xl">
        <p className="text-[10px] uppercase tracking-[0.2em] font-light text-[#2a3a1e] mb-1">{payload[0].payload.name}</p>
        <p className="text-xl font-serif text-[#b2893d]">{payload[0].value}h <span className="text-xs font-normal text-[#472f5b] uppercase tracking-widest">/mês</span></p>
      </div>
    );
  }
  return null;
};

const CustomTooltipEfficiency = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#FFFFFF] border border-[#472f5b]/10 p-4 shadow-xl">
        <p className="text-[10px] uppercase tracking-[0.2em] font-light text-[#2a3a1e] mb-1">{payload[0].payload.mes}</p>
        <p className="text-xl font-serif text-[#b2893d]">{payload[0].value}% <span className="text-xs font-normal text-[#472f5b] uppercase tracking-widest">Controle</span></p>
      </div>
    );
  }
  return null;
};

export default function TangibleResults() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.chart-card');
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 border-t border-[#472f5b]/10">
      <div className="flex items-center gap-4 mb-6">
        <span className="h-[1px] w-12 bg-[#D8B36B]"></span>
        <span className="text-[10px] uppercase tracking-[0.3em] font-light text-[#b2893d]">Resultados Tangíveis</span>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-widest text-[#472f5b]">
          O impacto dos <br/><span className="italic lowercase text-[#b2893d]">números a seu favor</span>
        </h2>
        <p className="text-[#2a3a1e] text-sm font-normal leading-relaxed tracking-wide max-w-sm">
          Nós transformamos a dor de cabeça burocrática em tempo livre e métricas visuais, dando a você controle absoluto sobre o crescimento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Time Saved Chart */}
        <div className="chart-card bg-[#FFFFFF] border border-[#472f5b]/10 p-10 shadow-lg group hover:border-[#D8B36B]/40 transition-colors flex flex-col">
          <h3 className="text-xl font-serif font-light text-[#472f5b] mb-2 uppercase tracking-widest">Tempo Gasto com Burocracia</h3>
          <p className="text-xs font-normal text-[#2a3a1e] tracking-wide mb-4">
            Horas gastas por mês com pagamentos, conciliação e emissão de notas.
          </p>
          <div className="mb-8 inline-block bg-[#fffff0] px-3 py-1.5 rounded-sm border border-[#472f5b]/5">
            <p className="text-[9px] uppercase tracking-wider text-[#2a3a1e]">
              * PMEs gastam 21h semanais (84h/mês) em média com finanças.
              <br/><span className="text-[#b2893d] font-medium">Fonte: Conta Simples & Visa (2023)</span>
            </p>
          </div>
          <div className="h-64 w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#2a3a1e', fontSize: 10, fontWeight: 300, textAnchor: 'middle' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#2a3a1e', fontSize: 10, fontWeight: 300 }}
                />
                <Tooltip content={<CustomTooltipTime />} cursor={{ fill: 'rgba(216, 179, 107, 0.05)' }} />
                <Bar dataKey="horas" radius={[4, 4, 0, 0]} barSize={60} animationDuration={1500}>
                  {timeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#472f5b' : '#D8B36B'} fillOpacity={index === 0 ? 0.1 : 1} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Efficiency/Control Chart */}
        <div className="chart-card bg-[#FFFFFF] border border-[#472f5b]/10 p-10 shadow-lg group hover:border-[#D8B36B]/40 transition-colors flex flex-col">
          <h3 className="text-xl font-serif font-light text-[#472f5b] mb-2 uppercase tracking-widest">Nível de Visibilidade e Controle</h3>
          <p className="text-xs font-normal text-[#2a3a1e] tracking-wide mb-4">
            Aumento da clareza sobre margem de lucro e fluxo de caixa ao longo dos meses.
          </p>
          <div className="mb-8 inline-block bg-[#fffff0] px-3 py-1.5 rounded-sm border border-[#472f5b]/5">
            <p className="text-[9px] uppercase tracking-wider text-[#2a3a1e]">
              * 60% das PMEs fecham em 5 anos devido à falta de gestão financeira.
              <br/><span className="text-[#b2893d] font-medium">Fonte: Estudo Causa Mortis (Sebrae)</span>
            </p>
          </div>
          <div className="h-64 w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={efficiencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorControle" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D8B36B" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D8B36B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(35, 42, 27, 0.05)" />
                <XAxis 
                  dataKey="mes" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#2a3a1e', fontSize: 10, fontWeight: 300 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#2a3a1e', fontSize: 10, fontWeight: 300 }}
                />
                <Tooltip content={<CustomTooltipEfficiency />} />
                <Area 
                  type="monotone" 
                  dataKey="controle" 
                  stroke="#D8B36B" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorControle)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}
