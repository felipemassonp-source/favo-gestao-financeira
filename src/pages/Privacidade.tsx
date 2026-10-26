import { Link } from "react-router-dom";
import { ShieldCheck, Lock, ArrowLeft, Mail, Phone, Building2, Clock } from "lucide-react";

export default function Privacidade() {
  return (
    <div className="w-full min-h-screen bg-[#FFFFF0] text-[#1F242D] relative overflow-hidden font-sans pt-36 pb-24 px-6">
      <div className="absolute inset-0 bg-honeycomb opacity-[0.35] pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#38183A] hover:text-[#D97706] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Início</span>
        </Link>

        <div className="bg-white rounded-[2.5rem] border border-[#38183A]/15 shadow-sm p-8 sm:p-12 space-y-8">
          <div className="pb-6 border-b border-[#38183A]/10">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D97706] font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> LGPD & CONFORMIDADE DE DADOS
              </span>
              <span className="text-xs text-[#333A48] font-medium bg-[#FAF9F5] px-3 py-1 rounded-full border border-[#38183A]/15">
                Última atualização: Outubro de 2026
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-light text-[#1F242D]">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-sm text-[#333A48] mt-2">
              Favo Gestão Financeira • Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#333A48] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D] flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#38183A]" />
                1. Identificação da Controladora Responsável
              </h2>
              <p>
                A controladora responsável pelo tratamento dos dados pessoais coletados neste site é a <strong>Favo Gestão Financeira</strong> (sob responsabilidade técnica e direção de <strong>Andryelle Niederauer</strong>), com endereço comercial na <strong>Rodovia Francisco Magno Vieira (SC-405), 4397 – sala 202 - Torre Sol - Oka Shopping - Campeche, Florianópolis – SC, CEP 88065-000</strong>, e-mail de contato <a href="mailto:favo@favogestaofinanceira.com.br" className="text-[#38183A] underline font-medium">favo@favogestaofinanceira.com.br</a> e telefone/WhatsApp <strong>(48) 9 9972-5750</strong>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D]">
                2. Quais dados coletamos e com qual finalidade
              </h2>
              <p>
                Ao preencher nossos formulários de diagnóstico financeiro no site, coletamos exclusivamente as informações fornecidas voluntariamente por você: <strong>Nome completo, Nome da empresa, E-mail profissional, WhatsApp</strong> e respostas sobre o cenário atual da rotina financeira (objetivo/dificuldade principal e faixa de movimentação ou faturamento), além de parâmetros técnicos de origem de campanha publicitária (UTM/GCLID) quando o acesso ocorre via anúncio.
              </p>
              <p>
                Esses dados têm <strong>finalidade única e exclusiva</strong> de permitir que nossa equipe elabore uma avaliação preliminar do perfil da sua empresa e entre em contato via WhatsApp ou e-mail (em até 1 dia útil) para apresentar nossas soluções de BPO Financeiro, Assistência Financeira Virtual, Gestão Financeira Estratégica ou Consultoria (Base Legal: procedimentos preliminares relacionados a contrato a pedido do titular — Art. 7º, V da LGPD).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D]">
                3. O que acontece após o envio do formulário
              </h2>
              <p>
                Assim que você envia o formulário, suas respostas são registradas em banco de dados em nuvem (Google Firebase / Firestore) com controle de acesso restrito por autenticação aos gestores autorizados da Favo Gestão Financeira. Na página de confirmação (<code>/obrigado</code>), você visualiza o resumo completo do que preencheu e pode optar por iniciar o atendimento imediatamente pelo WhatsApp ou aguardar o retorno da nossa equipe.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#38183A]" />
                4. Prazo de Retenção e Descarte dos Dados
              </h2>
              <p>
                Os dados de contato enviados pelo formulário de diagnóstico são mantidos em nossa base pelo período de até <strong>12 (doze) meses</strong> após o último contato comercial, caso não haja contratação do serviço, ou imediatamente excluídos mediante solicitação do titular. Caso a empresa torne-se cliente ativa, os registros contratuais e operacionais são mantidos pelo período da prestação do serviço e pelos prazos legais aplicáveis (Art. 16 da LGPD).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D]">
                5. Controles de Segurança Aplicados e Não Compartilhamento
              </h2>
              <p>
                A <strong>Favo Gestão Financeira não vende, aluga ou compartilha seus dados</strong> com terceiros para fins comerciais. Aplicamos controles específicos de proteção:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Tráfego Criptografado:</strong> Todas as páginas e formulários operam sob protocolo HTTPS/TLS com cabeçalhos de segurança ativos.</li>
                <li><strong>Controle de Acesso no Painel Interno:</strong> Apenas contas autenticadas e previamente autorizadas pela administração da Favo visualizam os leads recebidos.</li>
                <li><strong>Operação Bancária em Dupla Alçada (Clientes Ativos):</strong> Nos serviços de BPO, Assistência e Gestão, a Favo atua exclusivamente com perfil de operador secundário para agendamento; a aprovação final de qualquer pagamento é sempre executada pelo titular no aplicativo do banco, regida por Contrato de Confidencialidade (NDA).</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-serif font-medium text-[#1F242D]">
                6. Seus Direitos como Titular dos Dados (Art. 18 da LGPD)
              </h2>
              <p>
                A qualquer momento, você pode solicitar gratuitamente a confirmação da existência de tratamento, o acesso, a atualização, a correção ou a <strong>exclusão definitiva</strong> dos seus dados da nossa base através dos canais abaixo:
              </p>
              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#38183A]/15 flex flex-col sm:flex-row gap-6 text-xs sm:text-sm mt-3">
                <a
                  href="mailto:favo@favogestaofinanceira.com.br"
                  className="flex items-center gap-2.5 text-[#1F242D] hover:text-[#38183A] font-medium"
                >
                  <Mail className="w-4 h-4 text-[#D97706]" />
                  <span>favo@favogestaofinanceira.com.br</span>
                </a>
                <a
                  href="https://wa.me/5548999725750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[#1F242D] hover:text-[#38183A] font-medium"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span>(48) 9 9972-5750</span>
                </a>
              </div>
            </section>
          </div>

          <div className="pt-6 border-t border-[#38183A]/10 flex items-center gap-2.5 text-xs text-[#333A48]">
            <Lock className="w-4 h-4 text-[#D97706] shrink-0" />
            <span>
              Rodovia Francisco Magno Vieira (SC-405), 4397 – sala 202 - Torre Sol - Oka Shopping - Campeche, Florianópolis – SC | CEP: 88065-000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
