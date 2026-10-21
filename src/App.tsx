/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Consultoria from "./pages/Consultoria";
import GestaoFinanceira from "./pages/GestaoFinanceira";
import AdminLeads from "./pages/AdminLeads";
import Preloader from "./components/Preloader";
import SEO from "./components/SEO";

export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Preloader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/gestao-financeira" element={<GestaoFinanceira />} />
          <Route path="/admin" element={<AdminLeads />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
