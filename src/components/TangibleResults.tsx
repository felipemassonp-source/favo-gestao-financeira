import { useRef } from "react";
import { motion } from "motion/react";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  AreaChart, Area, CartesianGrid
} from "recharts";

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
      <div className="bg-[#FFFFFF] border border-[#38183A]/15 p-4 rounded-xl shadow-xl">
        <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#4B5262] mb-1">{payload[0].payload.name}</p>
        <p className="text-xl font-serif text-[#38183A] font-semibold">{payload[0].value}h <span className="text-xs font-normal text-[#1F242D] uppercase tracking-widest">/mês</span></p>
      </div>
    );
  }
  return null;
};

const CustomTooltipEfficiency = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#FFFFFF] border border-[#38183A]/15 p-4 rounded-xl shadow-xl">
        <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#4B5262] mb-1">{payload[0].payload.mes}</p>
        <p className="text-xl font-serif text-[#38183A] font-semibold">{payload[0].value}% <span className="text-xs font-normal text-[#1F242D] uppercase tracking-widest">Controle</span></p>
      </div>
    );
  }
  return null;
};

export default function TangibleResults() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 border-t border-[#38183A]/15">
      <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#38183A] font-mono block mb-4">
        RESULTADOS TANGÍVEIS
      </span>
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#1F242D]">
          O impacto dos <br/><span className="italic font-medium text-[#38183A]">números a seu favor</span>
        </h2>
        <p className="text-[#4B5262] text-sm md:text-base font-normal leading-relaxed max-w-sm">
          Nós transformamos a dor de cabeça burocrática em tempo livre e métricas visuais, dando a você controle absoluto sobre o crescimento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Time Saved Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="chart-card bg-[#FFFFFF] border border-[#38183A]/15 rounded-3xl p-8 sm:p-10 shadow-lg group hover:border-[#38183A]/40 transition-colors flex flex-col"
        >
          <h3 className="text-xl font-serif font-medium text-[#1F242D] mb-2 tracking-tight">Tempo Gasto com Burocracia</h3>
          <p className="text-xs font-normal text-[#4B5262] tracking-normal mb-4">
            Horas gastas por mês com pagamentos, conciliação e emissão de notas.
          </p>
          <div className="mb-8 inline-block bg-[#FFFFF0] px-3.5 py-2 rounded-xl border border-[#38183A]/10">
            <p className="text-[10px] text-[#4B5262]">
              * PMEs gastam 21h semanais (84h/mês) em média com rotinas financeiras.
              <br/><span className="text-[#38183A] font-semibold">Fonte: Conta Simples & Visa</span>
            </p>
          </div>
          <div className="h-64 w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={timeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#4B5262', fontSize: 11, fontWeight: 400, textAnchor: 'middle' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#4B5262', fontSize: 11, fontWeight: 400 }}
                />
                <Tooltip content={<CustomTooltipTime />} cursor={{ fill: 'rgba(71, 47, 91, 0.04)' }} />
                <Bar dataKey="horas" radius={[8, 8, 0, 0]} barSize={56} animationDuration={1500}>
                  {timeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#38183A' : '#38183A'} fillOpacity={index === 0 ? 0.25 : 1} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Efficiency/Control Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="chart-card bg-[#FFFFFF] border border-[#38183A]/15 rounded-3xl p-8 sm:p-10 shadow-lg group hover:border-[#38183A]/40 transition-colors flex flex-col"
        >
          <h3 className="text-xl font-serif font-medium text-[#1F242D] mb-2 tracking-tight">Nível de Visibilidade e Controle</h3>
          <p className="text-xs font-normal text-[#4B5262] tracking-normal mb-4">
            Aumento da clareza sobre margem de lucro e fluxo de caixa ao longo dos meses.
          </p>
          <div className="mb-8 inline-block bg-[#FFFFF0] px-3.5 py-2 rounded-xl border border-[#38183A]/10">
            <p className="text-[10px] text-[#4B5262]">
              * 60% das PMEs fecham em 5 anos devido à falta de clareza e gestão financeira.
              <br/><span className="text-[#38183A] font-semibold">Fonte: Estudo Causa Mortis (Sebrae)</span>
            </p>
          </div>
          <div className="h-64 w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={efficiencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorControle" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38183A" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#38183A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(71, 47, 91, 0.08)" />
                <XAxis 
                  dataKey="mes" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#4B5262', fontSize: 11, fontWeight: 400 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#4B5262', fontSize: 11, fontWeight: 400 }}
                />
                <Tooltip content={<CustomTooltipEfficiency />} />
                <Area 
                  type="monotone" 
                  dataKey="controle" 
                  stroke="#38183A" 
                  strokeWidth={2.5}
                  fillOpacity={1} 
                  fill="url(#colorControle)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
