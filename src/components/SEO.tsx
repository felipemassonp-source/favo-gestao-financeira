import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageSEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  robots?: string;
}

const BASE_URL = "https://favogestaofinanceira.com.br";

const ROUTE_SEO: Record<string, PageSEOConfig> = {
  "/": {
    title: "BPO Financeiro e Gestão Financeira Estratégica | Favo Gestão Financeira — Florianópolis e Todo o Brasil",
    description:
      "Terceirização e gestão financeira empresarial com mais de 20 anos de experiência. BPO Financeiro, Assistência Financeira Virtual, Consultoria Financeira e Implementação Conta Azul em Florianópolis e em todo o Brasil.",
    keywords:
      "BPO financeiro, BPO financeiro Florianópolis, terceirização financeira, assistência financeira virtual, gestão financeira empresarial, consultoria financeira empresarial, implementação Conta Azul, implementação de financeiro, gestão de contas a pagar, conciliação bancária diária, DFC mensal, Favo Gestão Financeira",
    canonical: `${BASE_URL}/`,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  "/gestao-financeira": {
    title: "Planos de BPO Financeiro, Assistência Virtual e Gestão Estratégica | Favo — Florianópolis e Brasil",
    description:
      "Compare nossos planos de BPO Financeiro, Assistência Financeira Virtual e Gestão Estratégica: contas a pagar e receber, agendamento bancário, notas fiscais, boletos, DFC mensal e Implementação Conta Azul.",
    keywords:
      "BPO financeiro para empresas, BPO financeiro Florianópolis, assistência financeira virtual, terceirizar financeiro, gestão de contas a pagar e receber, conciliação bancária diária, emissão de notas fiscais e boletos, implementação Conta Azul, gestão financeira terceirizada",
    canonical: `${BASE_URL}/gestao-financeira`,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  "/perguntas-frequentes": {
    title: "Perguntas Frequentes sobre BPO e Gestão Financeira | Favo Gestão Financeira",
    description:
      "Tire suas dúvidas sobre segurança bancária, diferença entre BPO, Assistência Financeira e Gestão Financeira, sistemas utilizados, prazos e propriedade dos seus dados na Favo.",
    keywords:
      "dúvidas BPO financeiro, como funciona terceirização financeira, diferença BPO e gestão financeira, segurança BPO financeiro, perguntas frequentes Favo Gestão Financeira",
    canonical: `${BASE_URL}/perguntas-frequentes`,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  "/privacidade": {
    title: "Política de Privacidade e Proteção de Dados (LGPD) | Favo Gestão Financeira",
    description:
      "Política de Privacidade e conformidade com a LGPD da Favo Gestão Financeira. Transparência sobre coleta e uso de dados no diagnóstico financeiro.",
    keywords: "política de privacidade favo, lgpd favo gestão financeira",
    canonical: `${BASE_URL}/privacidade`,
    robots: "index, follow",
  },
  "/obrigado": {
    title: "Solicitação Recebida com Sucesso | Favo Gestão Financeira",
    description: "Resumo do seu diagnóstico financeiro enviado para a Favo Gestão Financeira.",
    keywords: "",
    canonical: `${BASE_URL}/obrigado`,
    robots: "noindex, nofollow",
  },
  "/admin": {
    title: "Acesso Restrito | Favo Gestão Financeira",
    description: "Painel administrativo restrito da Favo Gestão Financeira.",
    keywords: "",
    canonical: `${BASE_URL}/admin`,
    robots: "noindex, nofollow",
  },
};

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function getStoredAdsAttribution(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem("favo_ads_attribution");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const config = ROUTE_SEO[path] || ROUTE_SEO["/"];
    const hostname = typeof window !== "undefined" ? window.location.hostname : "";
    const isPreviewHost =
      hostname.endsWith(".workers.dev") || hostname.endsWith(".pages.dev");

    document.title = config.title;
    setMetaTag("name", "description", config.description);
    if (config.keywords) {
      setMetaTag("name", "keywords", config.keywords);
    }
    setMetaTag(
      "name",
      "robots",
      isPreviewHost ? "noindex, nofollow" : config.robots || "index, follow"
    );

    setMetaTag("property", "og:title", config.title);
    setMetaTag("property", "og:description", config.description);
    setMetaTag("property", "og:url", config.canonical);
    setMetaTag("name", "twitter:title", config.title);
    setMetaTag("name", "twitter:description", config.description);

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", config.canonical);

    try {
      const params = new URLSearchParams(location.search);
      const trackedKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
      const existing = getStoredAdsAttribution();
      let updated = false;

      trackedKeys.forEach((k) => {
        const val = params.get(k);
        if (val) {
          existing[k] = val;
          updated = true;
        }
      });

      if (!existing.landingPage) {
        existing.landingPage = path;
        updated = true;
      }

      if (updated) {
        sessionStorage.setItem("favo_ads_attribution", JSON.stringify(existing));
      }
    } catch {
      // Ignora caso sessionStorage esteja indisponível
    }
  }, [location.pathname, location.search]);

  return null;
}
