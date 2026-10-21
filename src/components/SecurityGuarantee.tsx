import { motion } from "motion/react";
import { FileText, Lock, ShieldCheck } from "lucide-react";

export default function SecurityGuarantee() {
  return (
    <section className="py-24 border-t border-[#472F5B]/15 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-5/12"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#472F5B] font-mono block mb-4">
              CONTROLES DE SEGURANÇA & SIGILO
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#1F242D] mb-6 text-balance">
              Como funciona o nosso{" "}
              <span className="italic text-[#472F5B] font-medium whitespace-nowrap">
                controle de acesso
              </span>
            </h2>
            <p className="text-[#333A48] text-sm md:text-base font-normal leading-relaxed tracking-normal max-w-md">
              A terceirização financeira na Favo segue controles bancários e jurídicos objetivos: nossa equipe prepara toda a rotina, mas a chave de aprovação permanece com os sócios da empresa.
            </p>
          </motion.div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="p-7 rounded-3xl border border-[#472F5B]/15 bg-[#FFFFF0] hover:border-[#472F5B]/40 transition-colors shadow-sm"
            >
              <div className="w-11 h-11 mb-4 rounded-2xl bg-[#472F5B]/10 border border-[#472F5B]/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#472F5B]" />
              </div>
              <h4 className="text-base font-serif font-medium text-[#1F242D] mb-2">
                1. Dupla Alçada no Banco
              </h4>
              <p className="text-xs text-[#333A48] font-normal leading-relaxed">
                Utilizamos perfil de <strong>operador secundário</strong> no internet banking: lançamos boletos e agendamentos, porém nenhuma saída de valor ocorre sem a sua autorização por token no app do banco.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="p-7 rounded-3xl border border-[#472F5B]/15 bg-[#FFFFF0] hover:border-[#472F5B]/40 transition-colors shadow-sm"
            >
              <div className="w-11 h-11 mb-4 rounded-2xl bg-[#472F5B]/10 border border-[#472F5B]/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#472F5B]" />
              </div>
              <h4 className="text-base font-serif font-medium text-[#1F242D] mb-2">
                2. Contrato com Cláusula NDA
              </h4>
              <p className="text-xs text-[#333A48] font-normal leading-relaxed">
                Antes do início do onboarding, formalizamos contrato de prestação de serviços com <strong>Acordo de Confidencialidade (NDA)</strong> protegendo juridicamente seus dados comerciais e bancários.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="p-7 rounded-3xl border border-[#472F5B]/15 bg-[#FFFFF0] hover:border-[#472F5B]/40 transition-colors shadow-sm"
            >
              <div className="w-11 h-11 mb-4 rounded-2xl bg-[#472F5B]/10 border border-[#472F5B]/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#472F5B]" />
              </div>
              <h4 className="text-base font-serif font-medium text-[#1F242D] mb-2">
                3. Permissão Individual no ERP
              </h4>
              <p className="text-xs text-[#333A48] font-normal leading-relaxed">
                O acesso ao sistema financeiro (como Conta Azul ou Omie) e aos documentos da empresa é restrito nominalmente à analista responsável pela sua conta e à supervisão técnica.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
