/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";
import SEO from "./components/SEO";

// Code-splitting das rotas secundárias e área restrita para carregamento instantâneo
const Consultoria = lazy(() => import("./pages/Consultoria"));
const GestaoFinanceira = lazy(() => import("./pages/GestaoFinanceira"));
const Obrigado = lazy(() => import("./pages/Obrigado"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const AdminLeads = lazy(() => import("./pages/AdminLeads"));

/**
 * Garante que na primeira abertura de uma nova sessão no navegador
 * o visitante inicie sempre pela aba Início ("/"), exceto quando estiver
 * acessando a área restrita (/admin) ou vindo de campanha específica com UTM/GCLID.
 */
function InitialEntryGuard() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const alreadyEntered = sessionStorage.getItem("favo_session_started");
      if (!alreadyEntered) {
        sessionStorage.setItem("favo_session_started", "1");
        const hasCampaignParams =
          location.search.includes("utm_") || location.search.includes("gclid");
        const isDirectInternalRoute =
          location.pathname === "/admin" ||
          location.pathname === "/privacidade" ||
          location.pathname === "/obrigado";

        if (location.pathname !== "/" && !hasCampaignParams && !isDirectInternalRoute) {
          navigate("/", { replace: true });
        }
      }
    } catch {
      // Ignora caso sessionStorage esteja indisponível
    }
    // Executa apenas na montagem inicial do App
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <InitialEntryGuard />
      <SEO />
      <Preloader />
      <Layout>
        <Suspense
          fallback={
            <div className="min-h-screen w-full bg-[#FFFFF0] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#472F5B]/20 border-t-[#D97706] animate-spin" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consultoria" element={<Consultoria />} />
            <Route path="/gestao-financeira" element={<GestaoFinanceira />} />
            <Route path="/obrigado" element={<Obrigado />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/admin" element={<AdminLeads />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
