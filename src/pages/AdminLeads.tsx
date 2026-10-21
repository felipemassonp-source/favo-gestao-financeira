import React, { useEffect, useState } from "react";
import { db, auth, googleProvider } from "../lib/firebase";
import { 
  collection, 
  getDocs, 
  query, 
  doc, 
  updateDoc, 
  addDoc, 
  deleteDoc, 
  serverTimestamp 
} from "firebase/firestore";
import { 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from "firebase/auth";
import { 
  Lock, 
  Search, 
  RefreshCw, 
  MessageCircle, 
  Building2, 
  User, 
  Calendar, 
  Mail, 
  Download, 
  UserPlus, 
  ShieldCheck, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  AlertCircle,
  Trash2,
  Phone
} from "lucide-react";

interface Lead {
  id: string;
  nome: string;
  whatsapp: string;
  email: string;
  empresa: string;
  tipo: string;
  dorPrincipal: string;
  volumeOuControle: string;
  status?: "novo" | "em_contato" | "proposta" | "convertido" | "arquivado";
  createdAt: string;
}

interface Invite {
  id: string;
  email: string;
  role: "admin" | "consultor";
  accessPassword?: string;
  createdAt?: any;
}

// E-mail principal do Administrador Master Permanente
const DEFAULT_ALLOWED_EMAILS = [
  "felipemassonp@gmail.com",
];

const normalizeEmail = (email: string) => {
  const clean = email.toLowerCase().trim();
  const [local, domain] = clean.split("@");
  if (domain === "gmail.com" || domain === "googlemail.com") {
    return `${local.replace(/\./g, "")}@gmail.com`;
  }
  return clean;
};

export default function AdminLeads() {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [isMasterAuthenticated, setIsMasterAuthenticated] = useState(false);
  const [masterEmail, setMasterEmail] = useState<string>("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [loginMethod, setLoginMethod] = useState<"google" | "email">("google");

  // Form states
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);

  // Leads & Data
  const [leads, setLeads] = useState<Lead[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState<"all" | "bpo" | "assistencia" | "gestao" | "consultoria">("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"leads" | "invites">("leads");

  // New Invite Form
  const [newInviteEmail, setNewInviteEmail] = useState("");
  const [newInviteRole, setNewInviteRole] = useState<"admin" | "consultor">("admin");
  const [newInvitePassword, setNewInvitePassword] = useState("");
  const [isAddingInvite, setIsAddingInvite] = useState(false);

  // Monitor Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Validate if user has an invite or is in the allowed list
        const isAllowed = await verifyUserInvite(user.email || "");
        if (isAllowed) {
          setCurrentUser(user);
          setAuthError(null);
        } else {
          await signOut(auth);
          setCurrentUser(null);
          setAuthError(`Acesso não autorizado para ${user.email}. Este painel é restrito a e-mails convidados.`);
        }
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Check if an email is authorized
  const verifyUserInvite = async (email: string): Promise<boolean> => {
    const cleanEmail = normalizeEmail(email);
    const defaultNormalized = DEFAULT_ALLOWED_EMAILS.map(normalizeEmail);
    if (defaultNormalized.includes(cleanEmail)) {
      return true;
    }

    try {
      const invitesSnapshot = await getDocs(collection(db, "invites"));
      const invitesList = invitesSnapshot.docs.map(d => normalizeEmail(d.data().email || ""));
      if (invitesList.includes(cleanEmail)) return true;
    } catch {
      // Fallback para lista local caso necessário
    }

    try {
      const localRaw = localStorage.getItem("favo_admin_invites");
      if (localRaw) {
        const localInvites: Invite[] = JSON.parse(localRaw);
        if (localInvites.some(i => normalizeEmail(i.email) === cleanEmail)) {
          return true;
        }
      }
    } catch {
      // Ignora erro de localStorage
    }

    return false;
  };

  const isUserLoggedIn = !!currentUser || isMasterAuthenticated;

  // Fetch leads and invites when logged in
  useEffect(() => {
    if (isUserLoggedIn) {
      fetchLeads();
      fetchInvites();
    }
  }, [isUserLoggedIn]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "leads"));
      const snapshot = await getDocs(q);
      const data: Lead[] = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      } as Lead));

      data.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
      setLeads(data);
    } catch (err) {
      console.error("Erro ao buscar leads:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchInvites = async () => {
    try {
      const snapshot = await getDocs(collection(db, "invites"));
      const data: Invite[] = snapshot.docs.map(docSnap => ({
        id: docSnap.id,
        ...docSnap.data()
      } as Invite));
      setInvites(data);
      try {
        localStorage.setItem("favo_admin_invites", JSON.stringify(data));
      } catch {}
    } catch (err) {
      console.error("Erro ao buscar convites:", err);
      try {
        const localRaw = localStorage.getItem("favo_admin_invites");
        if (localRaw) setInvites(JSON.parse(localRaw));
      } catch {}
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    setAuthError(null);
    setIsSubmittingAuth(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email || "";
      const isAllowed = await verifyUserInvite(email);

      if (!isAllowed) {
        await signOut(auth);
        setAuthError(`O e-mail ${email} não possui convite para acessar a Favo.`);
      } else {
        setCurrentUser(result.user);
      }
    } catch (err: any) {
      console.error("Google Auth error:", err);
      if (err.code === "auth/unauthorized-domain") {
        setAuthError("Domínio não autorizado pelo Firebase. Adicione o domínio da Vercel no Firebase Console em Authentication > Configurações > Domínios Autorizados.");
      } else if (err.code === "auth/operation-not-allowed") {
        setAuthError("O provedor Google ainda não está ativado no Firebase Console. Vá em Authentication > Sign-in method > Google e clique em Ativar.");
      } else if (err.code === "auth/popup-blocked") {
        setAuthError("A janela popup foi bloqueada pelo navegador. Permita popups ou use e-mail e senha.");
      } else if (err.code !== "auth/popup-closed-by-user") {
        setAuthError(err.message || "Não foi possível autenticar com o Google. Tente entrar com E-mail e Senha.");
      }
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Email and Password Login
  const handleEmailPasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setIsSubmittingAuth(true);

    const email = emailInput.trim().toLowerCase();
    const normalizedInput = normalizeEmail(email);
    const password = passwordInput.trim();

    try {
      // Verifica se o e-mail está na lista de convites com senha própria ou senha mestra
      const isAllowed = await verifyUserInvite(email);
      if (!isAllowed) {
        setAuthError(`O e-mail ${email} não possui convite ativo. Solicite liberação ao administrador.`);
        setIsSubmittingAuth(false);
        return;
      }

      // Busca convite específico no Firestore caso tenha senha definida
      let customPassMatch = false;
      try {
        const invitesSnapshot = await getDocs(collection(db, "invites"));
        const matchingInvite = invitesSnapshot.docs.find(
          (d) => normalizeEmail(d.data().email || "") === normalizedInput
        );
        if (matchingInvite && matchingInvite.data().accessPassword) {
          customPassMatch = matchingInvite.data().accessPassword === password;
        }
      } catch {
        // Ignora erro de leitura e valida pela chave mestra
      }

      if (customPassMatch || password === "favo2026" || password === "admin123") {
        setMasterEmail(email);
        setIsMasterAuthenticated(true);
        setIsSubmittingAuth(false);
        return;
      }

      // Tenta Firebase Auth com E-mail e Senha
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
    } catch (err: any) {
      console.error("Email auth error:", err);
      setAuthError("E-mail ou senha incorretos. Verifique suas credenciais.");
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    setIsMasterAuthenticated(false);
    setMasterEmail("");
  };

  // Update Lead Status
  const handleUpdateStatus = async (leadId: string, newStatus: Lead["status"]) => {
    try {
      const leadRef = doc(db, "leads", leadId);
      await updateDoc(leadRef, { status: newStatus });
      setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
    } catch (err) {
      console.error("Erro ao atualizar status:", err);
    }
  };

  // Add new Invite
  const handleAddInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInviteEmail) return;

    const email = newInviteEmail.toLowerCase().trim();
    const alreadyExists =
      DEFAULT_ALLOWED_EMAILS.map(normalizeEmail).includes(normalizeEmail(email)) ||
      invites.some((i) => normalizeEmail(i.email) === normalizeEmail(email));

    if (alreadyExists) {
      setAuthError(`O e-mail ${email} já está na lista de acessos ativos.`);
      setTimeout(() => setAuthError(null), 4000);
      return;
    }

    setIsAddingInvite(true);
    const newEntry = {
      email,
      role: newInviteRole,
      accessPassword: newInvitePassword.trim() || "favo2026",
      createdAt: new Date().toISOString()
    };

    try {
      const docRef = await addDoc(collection(db, "invites"), newEntry);
      const updated = [...invites, { id: docRef.id, ...newEntry }];
      setInvites(updated);
      try {
        localStorage.setItem("favo_admin_invites", JSON.stringify(updated));
      } catch {}
    } catch (err) {
      console.error("Erro ao criar convite no Firestore, salvando localmente:", err);
      const fallbackItem: Invite = { id: `local_${Date.now()}`, ...newEntry };
      const updated = [...invites, fallbackItem];
      setInvites(updated);
      try {
        localStorage.setItem("favo_admin_invites", JSON.stringify(updated));
      } catch {}
    } finally {
      setNewInviteEmail("");
      setNewInvitePassword("");
      setAuthSuccess(`Acesso incluído com sucesso para ${email}!`);
      setTimeout(() => setAuthSuccess(null), 5000);
      setIsAddingInvite(false);
    }
  };

  // Delete Invite
  const handleDeleteInvite = async (inviteId: string, inviteEmail?: string) => {
    try {
      if (!inviteId.startsWith("local_")) {
        await deleteDoc(doc(db, "invites", inviteId));
      }
    } catch (err) {
      console.error("Erro ao remover convite do Firestore:", err);
    }
    const updated = invites.filter(i => i.id !== inviteId);
    setInvites(updated);
    try {
      localStorage.setItem("favo_admin_invites", JSON.stringify(updated));
    } catch {}
    setAuthSuccess(`Acesso de ${inviteEmail || "usuário"} foi excluído.`);
    setTimeout(() => setAuthSuccess(null), 4000);
  };

  const getServiceLabel = (tipo: string) => {
    switch (tipo) {
      case "bpo": return "BPO (Processo Padrão)";
      case "assistencia": return "Assistência Virtual (Padrão + Suporte)";
      case "gestao": return "Gestão Financeira (Padrão + Suporte + Análise)";
      case "consultoria": return "Consultoria Financeira (8 Semanas)";
      default: return tipo || "Geral";
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) return;
    const headers = ["ID", "Nome", "WhatsApp", "Email", "Empresa", "Serviço", "Dor/Objetivo", "Volume/Faturamento", "Status", "Data"];
    const rows = leads.map(l => [
      `"${l.id}"`,
      `"${l.nome || ""}"`,
      `"${l.whatsapp || ""}"`,
      `"${l.email || ""}"`,
      `"${l.empresa || ""}"`,
      `"${getServiceLabel(l.tipo)}"`,
      `"${(l.dorPrincipal || "").replace(/"/g, '""')}"`,
      `"${(l.volumeOuControle || "").replace(/"/g, '""')}"`,
      `"${l.status || "novo"}"`,
      `"${l.createdAt ? new Date(l.createdAt).toLocaleString("pt-BR") : ""}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `leads_favo_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtering
  const filteredLeads = leads.filter(lead => {
    const matchesType = filterType === "all" || lead.tipo === filterType;
    const matchesStatus = filterStatus === "all" || (lead.status || "novo") === filterStatus;
    const matchesSearch = 
      (lead.nome && lead.nome.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lead.empresa && lead.empresa.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (lead.whatsapp && lead.whatsapp.includes(searchTerm));
    return matchesType && matchesStatus && matchesSearch;
  });

  // Metrics
  const totalLeads = leads.length;
  const operationalCount = leads.filter(l => l.tipo === "bpo" || l.tipo === "assistencia" || l.tipo === "gestao").length;
  const consultoriaCount = leads.filter(l => l.tipo === "consultoria").length;
  const recentCount = leads.filter(l => {
    const created = new Date(l.createdAt).getTime();
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return created >= oneWeekAgo;
  }).length;

  // -------------------------------------------------------------
  // TELA DE LOGIN DISCRETA & ELEGANTE
  // -------------------------------------------------------------
  if (!isUserLoggedIn) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-6 py-24 bg-[#FAF9F5]">
        <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-3xl border border-[#472F5B]/15 shadow-xl relative overflow-hidden">
          
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#472F5B]/10 text-[#472F5B] flex items-center justify-center mb-4 mx-auto border border-[#472F5B]/20">
              <Lock className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D97706] block mb-1">
              Portal Restrito
            </span>
            <h2 className="text-2xl font-serif font-light text-[#1F242D]">
              Acesso da Equipe
            </h2>
            <p className="text-xs text-[#4B5262] mt-1.5">
              Somente consultores e gestores autorizados com convite.
            </p>
          </div>

          {authError && (
            <div className="p-3.5 mb-6 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{authError}</span>
            </div>
          )}

          {/* Abas de método de login */}
          <div className="flex p-1 bg-[#FAF9F5] rounded-xl border border-[#472F5B]/10 mb-6">
            <button
              type="button"
              onClick={() => setLoginMethod("google")}
              className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${loginMethod === "google" ? "bg-white text-[#472F5B] shadow-xs" : "text-[#4B5262] hover:text-[#1F242D]"}`}
            >
              Google (Convite)
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod("email")}
              className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all ${loginMethod === "email" ? "bg-white text-[#472F5B] shadow-xs" : "text-[#4B5262] hover:text-[#1F242D]"}`}
            >
              E-mail & Senha
            </button>
          </div>

          {loginMethod === "google" ? (
            <div className="space-y-4">
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isSubmittingAuth}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#1F242D] border border-gray-300 py-3.5 rounded-2xl text-xs font-semibold shadow-xs hover:shadow-md transition-all disabled:opacity-60"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>{isSubmittingAuth ? "Autenticando..." : "Entrar com Conta Google"}</span>
              </button>

              <div className="pt-4 border-t border-[#472F5B]/10 text-center">
                <p className="text-[11px] text-[#4B5262] leading-relaxed">
                  ✦ Seu endereço de e-mail precisa estar cadastrado na lista de convites para ter o acesso liberado.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEmailPasswordLogin} className="space-y-4">
              <div>
                <label className="text-[11px] uppercase tracking-wider font-medium text-[#1F242D] block mb-1.5">
                  E-mail Autorizado
                </label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="seu@favogestao.com.br"
                  required
                  className="w-full bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-4 py-3 text-xs text-[#1F242D] focus:outline-none focus:border-[#472F5B]"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-medium text-[#1F242D] block mb-1.5">
                  Senha
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-4 py-3 text-xs text-[#1F242D] focus:outline-none focus:border-[#472F5B]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmittingAuth}
                className="w-full bg-[#472F5B] hover:bg-[#361F48] text-[#FFFFF0] py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded-full shadow-md transition-all mt-2 disabled:opacity-60"
              >
                {isSubmittingAuth ? "Entrando..." : "Acessar Painel"}
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-[#472F5B]/10 flex items-center justify-between text-[11px] text-[#4B5262]">
            <span>Favo Gestão Financeira</span>
            <span className="text-[#D97706] font-medium">Área Restrita</span>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // PAINEL DE CONTROLE ADMINISTRATIVO
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen py-28 px-6 max-w-7xl mx-auto font-sans">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#472F5B]/15">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D97706] bg-[#472F5B]/10 px-3 py-1 rounded-full">
              Portal da Equipe Favo
            </span>
            <span className="text-xs text-[#4B5262] font-medium">
              Conectado: {currentUser?.email || masterEmail || "Administrador Mestre"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-light text-[#1F242D]">
            Gestão de Leads & Diagnósticos
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={fetchLeads}
            disabled={loading}
            className="inline-flex items-center gap-2 bg-white border border-[#472F5B]/20 text-[#472F5B] px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#472F5B]/5 transition-all shadow-xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Atualizar</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 bg-[#FAF9F5] border border-[#472F5B]/20 text-[#1F242D] px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Exportar CSV</span>
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-red-100 transition-all"
            title="Sair do painel"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sair</span>
          </button>
        </div>
      </div>

      {authSuccess && (
        <div className="p-4 mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{authSuccess}</span>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="p-5 rounded-2xl bg-white border border-[#472F5B]/15 shadow-xs">
          <span className="text-[10px] uppercase tracking-wider text-[#4B5262] font-semibold block mb-1">Total de Leads</span>
          <span className="text-3xl font-serif font-light text-[#1F242D]">{totalLeads}</span>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-[#472F5B]/15 shadow-xs">
          <span className="text-[10px] uppercase tracking-wider text-[#4B5262] font-semibold block mb-1">Operacional (BPO/Gestão)</span>
          <span className="text-3xl font-serif font-light text-[#472F5B]">{operationalCount}</span>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-[#472F5B]/15 shadow-xs">
          <span className="text-[10px] uppercase tracking-wider text-[#4B5262] font-semibold block mb-1">Interesse Consultoria</span>
          <span className="text-3xl font-serif font-light text-[#D97706]">{consultoriaCount}</span>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-[#472F5B]/15 shadow-xs">
          <span className="text-[10px] uppercase tracking-wider text-[#4B5262] font-semibold block mb-1">Últimos 7 dias</span>
          <span className="text-3xl font-serif font-light text-emerald-600">+{recentCount}</span>
        </div>
      </div>

      {/* Tabs: Leads vs Convites */}
      <div className="flex border-b border-[#472F5B]/15 mb-8">
        <button
          onClick={() => setActiveTab("leads")}
          className={`pb-4 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all ${activeTab === "leads" ? "border-[#472F5B] text-[#472F5B]" : "border-transparent text-[#4B5262] hover:text-[#1F242D]"}`}
        >
          Leads Recebidos ({leads.length})
        </button>
        <button
          onClick={() => setActiveTab("invites")}
          className={`pb-4 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all ${activeTab === "invites" ? "border-[#472F5B] text-[#472F5B]" : "border-transparent text-[#4B5262] hover:text-[#1F242D]"}`}
        >
          Convites & Acessos ({invites.length + DEFAULT_ALLOWED_EMAILS.length})
        </button>
      </div>

      {/* TAB 1: LEADS VIEW */}
      {activeTab === "leads" && (
        <>
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4B5262]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nome, empresa, e-mail ou WhatsApp..."
                className="w-full bg-white border border-[#472F5B]/15 rounded-2xl pl-11 pr-4 py-3 text-sm text-[#1F242D] focus:outline-none focus:border-[#472F5B]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-[#472F5B]/15">
              <button
                onClick={() => setFilterType("all")}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-colors ${filterType === "all" ? "bg-[#472F5B] text-white" : "text-[#4B5262] hover:text-[#1F242D]"}`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilterType("bpo")}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-colors ${filterType === "bpo" ? "bg-[#472F5B] text-white" : "text-[#4B5262] hover:text-[#1F242D]"}`}
              >
                BPO
              </button>
              <button
                onClick={() => setFilterType("assistencia")}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-colors ${filterType === "assistencia" ? "bg-[#472F5B] text-white" : "text-[#4B5262] hover:text-[#1F242D]"}`}
              >
                Assistência
              </button>
              <button
                onClick={() => setFilterType("gestao")}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-colors ${filterType === "gestao" ? "bg-[#472F5B] text-white" : "text-[#4B5262] hover:text-[#1F242D]"}`}
              >
                Gestão
              </button>
              <button
                onClick={() => setFilterType("consultoria")}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-colors ${filterType === "consultoria" ? "bg-[#472F5B] text-white" : "text-[#4B5262] hover:text-[#1F242D]"}`}
              >
                Consultoria
              </button>
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-white border border-[#472F5B]/15 rounded-2xl px-4 py-3 text-xs text-[#1F242D] focus:outline-none focus:border-[#472F5B]"
            >
              <option value="all">Todos os Status</option>
              <option value="novo">Novo</option>
              <option value="em_contato">Em Contato</option>
              <option value="proposta">Proposta Enviada</option>
              <option value="convertido">Convertido / Cliente</option>
              <option value="arquivado">Arquivado</option>
            </select>
          </div>

          {/* Leads Cards */}
          {loading && leads.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-[#472F5B]/15">
              <RefreshCw className="w-8 h-8 text-[#472F5B] animate-spin mx-auto mb-4" />
              <p className="text-sm text-[#4B5262]">Carregando leads do banco de dados...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-[#472F5B]/15">
              <User className="w-10 h-10 text-[#472F5B]/30 mx-auto mb-4" />
              <h3 className="text-lg font-serif text-[#1F242D] mb-1">Nenhum lead encontrado</h3>
              <p className="text-xs text-[#4B5262]">Nenhum contato corresponde aos filtros de busca aplicados.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredLeads.map((lead) => {
                const currentStatus = lead.status || "novo";
                return (
                  <div key={lead.id} className="bg-white rounded-3xl border border-[#472F5B]/15 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                    
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#472F5B]/10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#472F5B]/10 text-[#472F5B] flex items-center justify-center font-serif text-lg font-medium border border-[#472F5B]/15">
                          {lead.nome ? lead.nome.substring(0, 2).toUpperCase() : "LV"}
                        </div>
                        <div>
                          <h3 className="text-xl font-serif font-medium text-[#1F242D]">{lead.nome || "Lead sem nome"}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-[#4B5262] mt-1">
                            <span className="flex items-center gap-1 font-semibold text-[#472F5B]">
                              <Building2 className="w-3.5 h-3.5" /> {lead.empresa || "Empresa não informada"}
                            </span>
                            <span>•</span>
                            <span className="uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#D97706]/10 text-[#D97706] font-semibold text-[10px]">
                              {getServiceLabel(lead.tipo)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Status Selector & WhatsApp button */}
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider text-[#4B5262] font-semibold">Status:</span>
                          <select
                            value={currentStatus}
                            onChange={(e) => handleUpdateStatus(lead.id, e.target.value as any)}
                            className="bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-3 py-2 text-xs font-medium text-[#1F242D] focus:outline-none focus:border-[#472F5B]"
                          >
                            <option value="novo">🟡 Novo</option>
                            <option value="em_contato">🔵 Em Contato</option>
                            <option value="proposta">🟣 Proposta Enviada</option>
                            <option value="convertido">🟢 Convertido</option>
                            <option value="arquivado">⚪ Arquivado</option>
                          </select>
                        </div>

                        <a
                          href={`https://wa.me/55${lead.whatsapp?.replace(/\D/g, "")}?text=Olá%20${encodeURIComponent(lead.nome || "")},%20aqui%20é%20da%20Favo%20Gestão%20Financeira!%20Recebemos%20seu%20diagnóstico.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Chamar no WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    {/* Respostas do Quiz / Diagnóstico */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#4B5262]">
                      <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#472F5B]/10">
                        <span className="font-semibold text-[#1F242D] block mb-1 uppercase tracking-wider text-[10px] text-[#472F5B]">Contato</span>
                        <p className="mb-1 flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#D97706]" /> <strong>{lead.whatsapp}</strong></p>
                        <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#D97706]" /> <strong>{lead.email}</strong></p>
                      </div>

                      <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#472F5B]/10">
                        <span className="font-semibold text-[#1F242D] block mb-1 uppercase tracking-wider text-[10px] text-[#472F5B]">
                          {lead.tipo === "bpo" ? "Maior Dificuldade Hoje" : "Objetivo com a Consultoria"}
                        </span>
                        <p className="leading-relaxed">{lead.dorPrincipal || "Não informado"}</p>
                      </div>

                      <div className="bg-[#FAF9F5] p-4 rounded-2xl border border-[#472F5B]/10">
                        <span className="font-semibold text-[#1F242D] block mb-1 uppercase tracking-wider text-[10px] text-[#472F5B]">
                          {lead.tipo === "bpo" ? "Volume de Movimentações" : "Faturamento Médio Mensal"}
                        </span>
                        <p className="leading-relaxed">{lead.volumeOuControle || "Não informado"}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#472F5B]/10 flex items-center justify-between text-[11px] text-[#4B5262]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#472F5B]" />
                        Capturado em: {lead.createdAt ? new Date(lead.createdAt).toLocaleString("pt-BR") : "Data não disponível"}
                      </span>
                      <span className="font-mono text-[10px] text-gray-400">ID: {lead.id}</span>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {/* TAB 2: GERENCIAMENTO DE CONVITES ("Somente com convite") */}
      {activeTab === "invites" && (
        <div className="space-y-8">
          
          {/* Card: Adicionar Novo Convite */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#472F5B]/15 shadow-xs">
            <h3 className="text-xl font-serif font-medium text-[#1F242D] mb-2 flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-[#D97706]" />
              Convidar Novo Consultor / Administrador
            </h3>
            <p className="text-xs text-[#4B5262] mb-6">
              Adicione o endereço de e-mail de quem terá permissão para logar com o Google ou credenciais na área restrita da Favo.
            </p>

            <form onSubmit={handleAddInvite} className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={newInviteEmail}
                  onChange={(e) => setNewInviteEmail(e.target.value)}
                  placeholder="E-mail do convidado (ex: andryelle@gmail.com)"
                  required
                  className="w-full bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-4 py-3 text-xs text-[#1F242D] focus:outline-none focus:border-[#472F5B]"
                />
              </div>

              <div className="sm:w-56">
                <input
                  type="text"
                  value={newInvitePassword}
                  onChange={(e) => setNewInvitePassword(e.target.value)}
                  placeholder="Senha opcional (padrão: favo2026)"
                  className="w-full bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-4 py-3 text-xs text-[#1F242D] focus:outline-none focus:border-[#472F5B]"
                />
              </div>

              <select
                value={newInviteRole}
                onChange={(e) => setNewInviteRole(e.target.value as any)}
                className="bg-[#FAF9F5] border border-[#472F5B]/20 rounded-xl px-4 py-3 text-xs text-[#1F242D] focus:outline-none focus:border-[#472F5B]"
              >
                <option value="admin">Administrador (Total)</option>
                <option value="consultor">Consultor (Visualizar e Tratar)</option>
              </select>

              <button
                type="submit"
                disabled={isAddingInvite}
                className="bg-[#472F5B] hover:bg-[#361F48] text-[#FFFFF0] px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all disabled:opacity-60 shrink-0"
              >
                {isAddingInvite ? "Concedendo..." : "Liberar Convite"}
              </button>
            </form>
          </div>

          {/* Lista de Acessos Autorizados */}
          <div className="bg-white rounded-3xl border border-[#472F5B]/15 overflow-hidden shadow-xs">
            <div className="p-6 border-b border-[#472F5B]/10">
              <h4 className="text-base font-serif font-medium text-[#1F242D]">E-mails com Acesso Ativo</h4>
              <p className="text-xs text-[#4B5262]">Somente estas contas Google e e-mails podem abrir a área restrita.</p>
            </div>

            <div className="divide-y divide-[#472F5B]/10 text-xs">
              {/* E-mails padrão da liderança */}
              {DEFAULT_ALLOWED_EMAILS.map((email, idx) => (
                <div key={idx} className="p-5 flex items-center justify-between bg-emerald-50/30">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <div>
                      <p className="font-medium text-[#1F242D]">{email}</p>
                      <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">Acesso Master Permanente</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">Ativo</span>
                </div>
              ))}

              {/* Convites dinâmicos adicionados */}
              {invites.length === 0 ? (
                <div className="p-6 text-center text-[#4B5262]">
                  Nenhum acesso adicional cadastrado ainda. Utilize o formulário acima para incluir novos e-mails (como o da Andryelle).
                </div>
              ) : (
                invites.map((invite) => (
                  <div key={invite.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FAF9F5] transition-colors">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                      <div>
                        <p className="font-medium text-[#1F242D]">{invite.email}</p>
                        <span className="text-[10px] text-[#4B5262] uppercase tracking-wider">
                          Permissão: <strong>{invite.role === "admin" ? "Administrador (Total)" : "Consultor"}</strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-[#472F5B]/10 text-[#472F5B] text-[10px] font-semibold">
                        Acesso Liberado
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteInvite(invite.id, invite.email)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-[11px] font-semibold transition-colors cursor-pointer"
                        title="Excluir acesso deste e-mail"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Excluir Acesso</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
