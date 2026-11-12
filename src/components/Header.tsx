import React, { useState } from 'react';
import type { User } from 'firebase/auth';
import { useFinance } from '../context/FinanceContext';
import { formatCurrency, formatMonthYear } from '../utils/formatters';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
  MoreVertical,
  Database,
  Tag,
  Info,
  X,
  LogOut,
  ListFilter,
  PieChart,
  Plus,
} from 'lucide-react';

interface HeaderProps {
  onOpenBackupModal?: () => void;
  onOpenCategoryModal?: () => void;
  onLogout?: () => void;
  user?: User | null;
  activeView?: 'ledger' | 'dashboard';
  onViewChange?: (view: 'ledger' | 'dashboard') => void;
  onOpenNewTransaction?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBackupModal,
  onOpenCategoryModal,
  onLogout,
  user,
  activeView,
  onViewChange,
  onOpenNewTransaction,
}) => {
  const {
    currentYear,
    currentMonth,
    goToPreviousMonth,
    goToNextMonth,
    goToCurrentMonth,
    summary,
  } = useFinance();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const isCurrentMonth = () => {
    const today = new Date();
    return today.getFullYear() === currentYear && today.getMonth() + 1 === currentMonth;
  };

  return (
    <>
      {/* 1. Barra de Navegação Superior Fixa (estilo Moleskine) */}
      <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="./ledger.webp"
              alt="Ledger"
              className="w-9 h-9 rounded-xl shadow-xs object-contain bg-white"
            />
            <div>
              <h1 className="text-lg font-bold text-slate-900 tracking-tight leading-none">
                Ledger
              </h1>
              <p className="text-xs text-slate-500 mt-0.5 leading-none">
                Diário Financeiro
              </p>
            </div>
          </div>

          {/* Abas Centrais: Extrato e Estatísticas (Desktop / Tablet) */}
          {onViewChange && (
            <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => onViewChange('ledger')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                  activeView === 'ledger'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <ListFilter size={15} />
                <span>Extrato</span>
              </button>
              <button
                type="button"
                onClick={() => onViewChange('dashboard')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                  activeView === 'dashboard'
                    ? 'bg-white text-blue-600 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <PieChart size={15} />
                <span>Estatísticas</span>
              </button>
            </div>
          )}

          {/* Ações à Direita */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenNewTransaction && (
              <button
                type="button"
                onClick={onOpenNewTransaction}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-sm shadow-blue-500/20 transition"
                title="Novo lançamento"
              >
                <Plus size={16} />
                <span className="hidden sm:inline">Novo Lançamento</span>
              </button>
            )}

            {/* Menu de Configuração (3 Pontos) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition"
                aria-label="Menu de opções"
                title="Menu de opções e configurações"
              >
                <MoreVertical size={18} />
              </button>

              {/* Dropdown Menu com clique externo para fechar */}
              {isMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsMenuOpen(false)}
                  />

                  <div className="absolute right-0 top-full mt-1.5 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-40">
                    {onOpenBackupModal && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsMenuOpen(false);
                          onOpenBackupModal();
                        }}
                        className="w-full px-3.5 py-2.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2.5 transition"
                      >
                        <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                          <Database size={15} />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">Dados e Backup</div>
                          <div className="text-[10px] text-slate-400">Exportar/importar CSV e JSON</div>
                        </div>
                      </button>
                    )}

                    {onOpenCategoryModal && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsMenuOpen(false);
                          onOpenCategoryModal();
                        }}
                        className="w-full px-3.5 py-2.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2.5 transition"
                      >
                        <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                          <Tag size={15} />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">Categorias</div>
                          <div className="text-[10px] text-slate-400">Criar e personalizar categorias</div>
                        </div>
                      </button>
                    )}

                    <div className="my-1 border-t border-slate-100" />

                    <button
                      type="button"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsAboutModalOpen(true);
                      }}
                      className="w-full px-3.5 py-2.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 flex items-center gap-2.5 transition"
                    >
                      <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600">
                        <Info size={15} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">Sobre o Ledger</div>
                        <div className="text-[10px] text-slate-400">Versão 1.0 • Cloud & Local</div>
                      </div>
                    </button>

                    {onLogout && (
                      <>
                        <div className="my-1 border-t border-slate-100" />
                        <button
                          type="button"
                          onClick={() => {
                            setIsMenuOpen(false);
                            onLogout();
                          }}
                          className="w-full px-3.5 py-2.5 text-left text-xs font-medium text-red-600 hover:bg-red-50 flex items-center gap-2.5 transition"
                        >
                          <div className="p-1.5 rounded-lg bg-red-50 text-red-600">
                            <LogOut size={15} />
                          </div>
                          <div>
                            <div className="font-semibold text-red-600">Sair da Conta</div>
                            <div className="text-[10px] text-slate-400">Desconectar do Google</div>
                          </div>
                        </button>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Avatar do Usuário (estilo Moleskine) */}
            {user && (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'Avatar'}
                    className="w-8 h-8 rounded-full border border-slate-200 object-cover shadow-2xs"
                    title={user.email || user.displayName || 'Usuário'}
                  />
                ) : (
                  <div
                    className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shadow-2xs"
                    title={user.email || 'Usuário'}
                  >
                    {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                  </div>
                )}

                {onLogout && (
                  <button
                    type="button"
                    onClick={onLogout}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    title="Sair da conta"
                  >
                    <LogOut size={16} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 2. Controle do Mês & Cartões de Resumo (layout SaaS / Moleskine) */}
      <div className="max-w-4xl mx-auto px-4 pt-6 w-full">
        {/* Controle do Mês e Alternador Mobile */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPreviousMonth}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 active:bg-slate-200 text-slate-700 shadow-2xs transition"
              aria-label="Mês anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <Calendar size={16} className="text-blue-600" />
              <span className="font-semibold text-slate-800 text-sm sm:text-base capitalize">
                {formatMonthYear(currentYear, currentMonth)}
              </span>
            </div>

            <button
              type="button"
              onClick={goToNextMonth}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 active:bg-slate-200 text-slate-700 shadow-2xs transition"
              aria-label="Próximo mês"
            >
              <ChevronRight size={18} />
            </button>

            {!isCurrentMonth() && (
              <button
                type="button"
                onClick={goToCurrentMonth}
                className="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1.5 rounded-xl hover:bg-blue-100 transition active:scale-95"
              >
                Mês Atual
              </button>
            )}
          </div>

          {/* Abas no mobile (quando tela pequena) */}
          {onViewChange && (
            <div className="flex sm:hidden items-center bg-slate-200/80 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => onViewChange('ledger')}
                className={`p-1.5 rounded-lg text-xs font-semibold transition ${
                  activeView === 'ledger' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
                }`}
                title="Extrato"
              >
                <ListFilter size={16} />
              </button>
              <button
                type="button"
                onClick={() => onViewChange('dashboard')}
                className={`p-1.5 rounded-lg text-xs font-semibold transition ${
                  activeView === 'dashboard' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600'
                }`}
                title="Estatísticas"
              >
                <PieChart size={16} />
              </button>
            </div>
          )}
        </div>

        {/* 3. Monthly Summary Cards (Grid moderno com 3 colunas) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Card 1: Saldo do Mês */}
          <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium flex items-center gap-1.5">
                <Wallet size={14} /> Saldo do Mês
              </span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-md font-semibold ${
                  summary.balance >= 0 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                }`}
              >
                {summary.balance >= 0 ? 'Positivo' : 'Negativo'}
              </span>
            </div>
            <div className="text-2xl font-bold tracking-tight">
              {formatCurrency(summary.balance)}
            </div>
          </div>

          {/* Card 2: Receitas */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
              <ArrowDownLeft size={22} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Receitas</div>
              <div className="text-xl font-bold text-emerald-600 tracking-tight">
                {formatCurrency(summary.totalIncome)}
              </div>
            </div>
          </div>

          {/* Card 3: Despesas */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-rose-50 text-rose-600 shrink-0">
              <ArrowUpRight size={22} />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Despesas</div>
              <div className="text-xl font-bold text-rose-600 tracking-tight">
                {formatCurrency(summary.totalExpense)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Sobre o Ledger */}
      {isAboutModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setIsAboutModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full transition"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="./ledger.webp"
                alt="Ledger"
                className="w-12 h-12 rounded-2xl shadow-md object-contain bg-white"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Ledger</h3>
                <p className="text-xs text-slate-500">Versão 1.0 • Web & Cloud</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Aplicativo para gerenciamento financeiro pessoal local-first e cloud. Seus dados são salvos com segurança diretamente na nuvem e com sincronização offline.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
