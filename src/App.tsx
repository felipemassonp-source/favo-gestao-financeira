/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

export default function App() {
  return (
    <BrowserRouter>
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
