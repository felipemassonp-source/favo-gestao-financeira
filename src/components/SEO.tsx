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
    title: "Favo Gestão Financeira | BPO Financeiro, Assistência Financeira Virtual e Consultoria Empresarial",
    description:
      "Terceirização e gestão financeira empresarial com mais de 20 anos de experiência. BPO Financeiro, Assistência Financeira Virtual, Consultoria Financeira, Implementação Conta Azul e Gestão de Contas a Pagar.",
    keywords:
      "BPO financeiro, terceirização financeira, assistência financeira virtual, gestão financeira empresarial, consultoria financeira empresarial, implementação Conta Azul, implementação de financeiro, gestão de contas a pagar, conciliação bancária diária, Favo Gestão Financeira, Florianópolis",
    canonical: `${BASE_URL}/`,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  "/gestao-financeira": {
    title: "BPO Financeiro, Assistência Virtual e Gestão Estratégica | Favo Gestão Financeira",
    description:
      "Delegue sua rotina financeira com segurança: contas a pagar e receber, agendamento bancário, emissão de notas fiscais e boletos, conciliação diária, DRE gerencial e implementação Conta Azul.",
    keywords:
      "BPO financeiro para empresas, assistência financeira virtual, terceirizar financeiro, gestão de contas a pagar e receber, conciliação bancária diária, emissão de notas fiscais e boletos, implementação Conta Azul, gestão financeira terceirizada",
    canonical: `${BASE_URL}/gestao-financeira`,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  "/consultoria": {
    title: "Consultoria Financeira Empresarial e Diagnóstico Raio-X | Favo Gestão Financeira",
    description:
      "Consultoria financeira empresarial de 08 semanas com 04 encontros ao vivo e 60 dias de suporte no WhatsApp. Identificação de gargalos, mapeamento de processos, Raio-X financeiro e mapa estratégico.",
    keywords:
      "consultoria financeira empresarial, diagnóstico financeiro empresarial, raio-x financeiro, consultor financeiro para empresas, organizar financeiro da empresa, fluxo de caixa empresarial, mapa estratégico financeiro",
    canonical: `${BASE_URL}/consultoria`,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
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

    document.title = config.title;
    setMetaTag("name", "description", config.description);
    if (config.keywords) {
      setMetaTag("name", "keywords", config.keywords);
    }
    setMetaTag("name", "robots", config.robots || "index, follow");

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

    // Captura de parâmetros de campanha do Google Ads (UTM + GCLID)
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
