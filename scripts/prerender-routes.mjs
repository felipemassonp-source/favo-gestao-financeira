import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");
const baseHtmlPath = path.join(distDir, "index.html");

if (!fs.existsSync(baseHtmlPath)) {
  console.error("[prerender] dist/index.html não encontrado.");
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");

const routes = [
  {
    route: "gestao-financeira",
    title: "BPO Financeiro, Assistência Virtual e Gestão Estratégica | Favo Gestão Financeira",
    description:
      "Delegue sua rotina financeira com segurança: contas a pagar e receber, agendamento bancário, emissão de notas fiscais e boletos, conciliação diária, DFC mensal e implementação Conta Azul.",
    canonical: "https://favogestaofinanceira.com.br/gestao-financeira",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    bodyContent: `
      <header>
        <nav aria-label="Navegação Principal Favo Gestão Financeira">
          <a href="/">Favo Gestão Financeira — Início</a>
          <a href="/gestao-financeira">Serviços &amp; Planos</a>
          <a href="/perguntas-frequentes">Perguntas Frequentes</a>
          <a href="/privacidade">Política de Privacidade</a>
        </nav>
      </header>
      <main>
        <article>
          <h1>Terceirização Financeira &amp; BPO: Sua rotina financeira delegada. O seu tempo devolvido.</h1>
          <p>
            Assumimos a operação diária do financeiro da sua empresa com rigor corporativo. Você para de perder horas lançando boletos,
            emitindo notas e conciliando extratos, e passa a apenas aprovar pagamentos no aplicativo do seu banco com 1 clique.
          </p>
          <section>
            <h2>Compare nossos 3 Planos de Gestão e Terceirização Financeira</h2>
            <h3>1. BPO Financeiro (Processo Padrão)</h3>
            <ul>
              <li>Organização de contas a pagar e contas a receber (sem agendamento bancário)</li>
              <li>Conciliação bancária diária (D+1)</li>
              <li>Relatórios semanais para programação de pagamentos</li>
              <li>Fechamento financeiro mensal</li>
            </ul>
            <h3>2. Assistência Financeira Virtual (Processo Padrão + Suporte — Plano Recomendado)</h3>
            <ul>
              <li>Gestão de contas a pagar com agendamento direto no banco (perfil operador secundário)</li>
              <li>Gestão de contas a receber e conciliação bancária diária</li>
              <li>Emissão de notas fiscais (NFS-e) e boletos</li>
              <li>Apoio para captação de documentos de fornecedores</li>
              <li>Gestão de inadimplência e controle de cartão de crédito</li>
              <li>Relatórios semanais, DFC mensal e Reunião mensal de apresentação de resultados</li>
            </ul>
            <h3>3. Gestão Financeira Estratégica (Padrão + Suporte + Análise)</h3>
            <ul>
              <li>Todas as entregas da Assistência Financeira Virtual</li>
              <li>Apoio para captação de documentos de fornecedores</li>
              <li>Elaboração de metas financeiras e projeções de fluxo de caixa futuro</li>
              <li>Gráficos de desempenho, análise de geração de caixa e Reunião mensal de planejamento e resultados</li>
            </ul>
            <h3>Outros Serviços Sob Medida</h3>
            <ul>
              <li>Implementação Conta Azul (parametrização completa e treinamento de equipe)</li>
              <li>Implementação de Financeiro (estruturação de processos e categorias do zero)</li>
              <li>Gestão de Contas a Pagar (modalidade dedicada ao controle e programação de saídas)</li>
            </ul>
          </section>
        </article>
      </main>
      <footer>
        <p>Favo Gestão Financeira — Rodovia Francisco Magno Vieira (SC-405), 4397 – sala 202 - Torre Sol - Oka Shopping, Florianópolis - SC.</p>
      </footer>
    `,
  },
  {
    route: "perguntas-frequentes",
    title: "Perguntas Frequentes sobre BPO e Gestão Financeira | Favo Gestão Financeira",
    description:
      "Tire suas dúvidas sobre segurança bancária, diferença entre BPO, Assistência Financeira e Gestão Financeira, sistemas utilizados, prazos e propriedade dos seus dados na Favo.",
    canonical: "https://favogestaofinanceira.com.br/perguntas-frequentes",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    bodyContent: `
      <header>
        <nav aria-label="Navegação Principal Favo Gestão Financeira">
          <a href="/">Favo Gestão Financeira — Início</a>
          <a href="/gestao-financeira">Serviços &amp; Planos</a>
          <a href="/perguntas-frequentes">Perguntas Frequentes</a>
          <a href="/privacidade">Política de Privacidade</a>
        </nav>
      </header>
      <main>
        <article>
          <h1>Dúvidas Frequentes sobre BPO Financeiro, Assistência Virtual e Gestão Financeira — Favo Gestão Financeira</h1>
          <p>Transparência total desde o primeiro contato sobre segurança bancária, transição do financeiro, diferença entre BPO, Assistência Financeira e Gestão Financeira, consultoria de 08 semanas, prazos e propriedade dos seus dados.</p>
          <section>
            <h2>Qual a diferença entre BPO, Assistência Financeira e Gestão Financeira?</h2>
            <p>A principal diferença está no nível de envolvimento da nossa equipe com a sua empresa: operacional no dia a dia (BPO), suporte ativo de uma equipe na rotina bancária, emissão de notas e boletos (Assistência Financeira), ou especialista na área acompanhando estrategicamente os números, projeções e metas do negócio (Gestão Financeira).</p>
            <h2>Como a Favo garante a segurança e o sigilo das minhas informações financeiras?</h2>
            <p>Contratos de Confidencialidade (NDA), conformidade com a LGPD e operação bancária em dupla alçada com perfil de operador secundário (a Favo agenda e somente o titular aprova no aplicativo do banco).</p>
            <h2>Se eu desistir do serviço, posso cancelar? Como ficam meus dados?</h2>
            <p>Prazo mínimo de 90 dias e, após isso, cancelamento sem juros ou multa com aviso prévio de 30 dias. Seus dados serão sempre seus, mantendo acesso integral ao seu banco de dados.</p>
          </section>
        </article>
      </main>
      <footer>
        <p>Favo Gestão Financeira — Rodovia Francisco Magno Vieira (SC-405), 4397 – sala 202 - Torre Sol - Oka Shopping, Florianópolis - SC.</p>
      </footer>
    `,
  },
  {
    route: "privacidade",
    title: "Política de Privacidade e Proteção de Dados (LGPD) | Favo Gestão Financeira",
    description:
      "Política de Privacidade e conformidade com a LGPD da Favo Gestão Financeira. Transparência sobre coleta, retenção e segurança dos dados.",
    canonical: "https://favogestaofinanceira.com.br/privacidade",
    robots: "index, follow",
    bodyContent: `
      <main>
        <article>
          <h1>Política de Privacidade e Proteção de Dados (LGPD) — Favo Gestão Financeira</h1>
          <p>
            A Favo Gestão Financeira, liderada por Andryelle Niederauer, trata os dados informados nos formulários de diagnóstico
            em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
          </p>
          <h2>1. Dados Coletados e Finalidade</h2>
          <p>Coletamos nome, empresa, WhatsApp, e-mail e faixa operacional exclusivamente para elaboração do diagnóstico financeiro solicitado.</p>
          <h2>2. Segurança Operacional e Sigilo</h2>
          <p>Conexão criptografada HTTPS/TLS, acesso restrito e contratos de confidencialidade (NDA).</p>
          <h2>3. Direitos do Titular e Contato do Encarregado (DPO)</h2>
          <p>Solicitações de exclusão ou revisão podem ser enviadas para favo@favogestaofinanceira.com.br ou WhatsApp (48) 99972-5750.</p>
        </article>
      </main>
    `,
  },
];

for (const item of routes) {
  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${item.title}</title>`);
  html = html.replace(
    /<link rel="canonical"[^>]*href="[^"]*"\s*\/?>/,
    `<link rel="canonical" id="canonical-link" href="${item.canonical}" />`
  );
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${item.description}" />`
  );
  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${item.robots}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${item.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${item.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${item.canonical}" />`
  );
  html = html.replace(
    /<div id="root">[\s\S]*?<\/div>\s*<script type="module"/,
    `<div id="root"><div style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;">${item.bodyContent}</div></div>\n    <script type="module"`
  );

  const routeDir = path.join(distDir, item.route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf-8");
  console.log(`[prerender] Gerado dist/${item.route}/index.html`);
}
