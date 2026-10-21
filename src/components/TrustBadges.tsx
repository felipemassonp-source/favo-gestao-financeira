import { ShieldCheck, FileText, Lock } from "lucide-react";
import { motion } from "motion/react";

const badgesData = [
  {
    icon: Lock,
    title: "Dados Criptografados",
    desc: "Tráfego 100% seguro de ponta a ponta"
  },
  {
    icon: FileText,
    title: "Contrato com Sigilo",
    desc: "Acordo de Confidencialidade (NDA)"
  },
  {
    icon: ShieldCheck,
    title: "Compliance LGPD",
    desc: "Privacidade absoluta dos seus dados"
  }
];

export default function TrustBadges() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 lg:px-0">
      {badgesData.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="trust-badge flex flex-col items-center justify-center text-center p-6 bg-[#FFFFFF] border border-[#472F5B]/15 rounded-2xl hover:border-[#472F5B]/40 transition-colors shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#472F5B]/10 flex items-center justify-center mb-4">
              <Icon className="w-5 h-5 text-[#472F5B]" />
            </div>
            <span className="text-xs font-serif uppercase tracking-widest text-[#1F242D] font-medium mb-1.5">{badge.title}</span>
            <span className="text-[11px] font-normal text-[#4B5262] leading-relaxed">{badge.desc}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
