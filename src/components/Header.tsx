import React, { useState } from 'react';
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
  ShieldCheck,
} from 'lucide-react';

interface HeaderProps {
  onOpenBackupModal?: () => void;
  onOpenCategoryModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBackupModal, onOpenCategoryModal }) => {
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
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-xs safe-top">
      {/* 1. Barra de Título Superior (App Bar): Logo + Nome Ledger + Menu 3 Pontos */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <img
            src="/icon.svg"
            alt="Ledger"
            className="w-8 h-8 rounded-xl shadow-xs object-cover"
          />
          <div>
            <h1 className="text-base font-bold text-slate-900 tracking-tight leading-tight">
              Ledger
            </h1>
            <p className="text-[10px] font-medium text-slate-500 leading-tight">
              Controle Financeiro
            </p>
          </div>
        </div>

        {/* Menu de Configuração (3 Pontos) */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition"
            aria-label="Menu de opções"
            title="Menu de opções e configurações"
          >
            <MoreVertical size={20} />
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
                    <div className="text-[10px] text-slate-400">Versão 1.0 • Local-first</div>
                  </div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 2. Controle do Mês: Totalmente destacado e desimpedido da barra do Android */}
      <div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-t border-slate-100">
        <button
          onClick={goToPreviousMonth}
          className="p-2 rounded-xl hover:bg-slate-200/80 active:bg-slate-300 text-slate-700 transition"
          aria-label="Mês anterior"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-xl shadow-2xs">
            <Calendar size={16} className="text-blue-600" />
            <span className="font-semibold text-slate-800 text-sm sm:text-base capitalize">
              {formatMonthYear(currentYear, currentMonth)}
            </span>
          </div>

          {!isCurrentMonth() && (
            <button
              onClick={goToCurrentMonth}
              className="text-xs bg-blue-50 text-blue-600 font-semibold px-2.5 py-1 rounded-xl hover:bg-blue-100 transition active:scale-95"
            >
              Hoje
            </button>
          )}
        </div>

        <button
          onClick={goToNextMonth}
          className="p-2 rounded-xl hover:bg-slate-200/80 active:bg-slate-300 text-slate-700 transition"
          aria-label="Próximo mês"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* 3. Monthly Summary Cards */}
      <div className="px-4 py-3">
        <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-medium flex items-center gap-1.5">
              <Wallet size={14} /> Saldo do Mês
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-md font-semibold ${
                summary.balance >= 0 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
              }`}
            >
              {summary.balance >= 0 ? 'Positivo' : 'Negativo'}
            </span>
          </div>

          <div className="text-2xl font-bold tracking-tight mb-3">
            {formatCurrency(summary.balance)}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-sm">
            {/* Receitas */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                <ArrowDownLeft size={16} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Receitas</div>
                <div className="font-semibold text-emerald-400 text-sm">
                  {formatCurrency(summary.totalIncome)}
                </div>
              </div>
            </div>

            {/* Despesas */}
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400">
                <ArrowUpRight size={16} />
              </div>
              <div>
                <div className="text-xs text-slate-400">Despesas</div>
                <div className="font-semibold text-rose-400 text-sm">
                  {formatCurrency(summary.totalExpense)}
                </div>
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
              onClick={() => setIsAboutModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full transition"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img
                src="/icon.svg"
                alt="Ledger"
                className="w-12 h-12 rounded-2xl shadow-md"
              />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Ledger</h3>
                <p className="text-xs text-slate-500">Versão 1.0 • Local-first</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Aplicativo para gerenciamento financeiro pessoal offline. Seus dados são salvos com segurança diretamente no seu aparelho.
            </p>

            <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 text-[11px] text-slate-600 space-y-1.5 mb-5">
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <ShieldCheck size={14} className="text-emerald-600" />
                100% Seguro & Privado
              </div>
              <p className="text-slate-500">
                Sem envio para servidores na nuvem. Você tem controle total das suas transações e backups.
              </p>
            </div>

            <button
              onClick={() => setIsAboutModalOpen(false)}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl text-xs font-bold transition shadow-md shadow-blue-500/20"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
