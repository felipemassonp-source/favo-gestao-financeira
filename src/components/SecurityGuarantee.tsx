import { motion } from "motion/react";
import { FileText, Lock } from "lucide-react";

export default function SecurityGuarantee() {
  return (
    <section className="py-24 border-t border-[#472F5B]/15 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2"
          >
            <span className="text-[11px] uppercase tracking-[0.28em] font-semibold text-[#472F5B] block mb-4">
              SEGURANÇA & SIGILO
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#1F242D] mb-6">
              Seus dados, <br/><span className="italic text-[#472F5B] font-medium">nossa fortaleza</span>
            </h2>
            <p className="text-[#4B5262] text-sm md:text-base font-normal leading-relaxed tracking-normal max-w-md">
              Sabemos que informações financeiras são o coração do seu negócio. Por isso, nossa parceria é fundamentada na confiança, resguardada por contratos rígidos de sigilo e acesso bancário em dupla alçada.
            </p>
          </motion.div>

          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-3xl border border-[#472F5B]/15 bg-[#FFFFF0] hover:border-[#472F5B]/40 transition-colors shadow-sm"
            >
              <div className="w-11 h-11 mb-5 rounded-2xl bg-[#472F5B]/10 border border-[#472F5B]/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#472F5B]" />
              </div>
              <h4 className="text-base font-serif font-medium text-[#1F242D] mb-2">Garantia Contratual (NDA)</h4>
              <p className="text-xs text-[#4B5262] font-normal leading-relaxed">
                Nossa atuação é formalizada juridicamente com cláusulas estritas de confidencialidade (NDA), protegendo extratos, relatórios e documentos da sua empresa.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-3xl border border-[#472F5B]/15 bg-[#FFFFF0] hover:border-[#472F5B]/40 transition-colors shadow-sm"
            >
              <div className="w-11 h-11 mb-5 rounded-2xl bg-[#472F5B]/10 border border-[#472F5B]/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#472F5B]" />
              </div>
              <h4 className="text-base font-serif font-medium text-[#1F242D] mb-2">Perfil Operador Bancário</h4>
              <p className="text-xs text-[#4B5262] font-normal leading-relaxed">
                Atuamos com permissão secundária para consulta e agendamento de contas: nenhuma movimentação ocorre sem a autorização final do titular no app do banco.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
