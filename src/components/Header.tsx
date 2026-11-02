import React from 'react';
import { useFinance } from '../context/FinanceContext';
import { formatCurrency, formatMonthYear } from '../utils/formatters';
import { ChevronLeft, ChevronRight, Calendar, ArrowDownLeft, ArrowUpRight, Wallet, Database } from 'lucide-react';

interface HeaderProps {
  onOpenBackupModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBackupModal }) => {
  const {
    currentYear,
    currentMonth,
    goToPreviousMonth,
    goToNextMonth,
    goToCurrentMonth,
    summary,
  } = useFinance();

  const isCurrentMonth = () => {
    const today = new Date();
    return today.getFullYear() === currentYear && today.getMonth() + 1 === currentMonth;
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
      {/* Top Bar: Navegador de Mês & Botão de Dados */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center">
          <button
            onClick={goToPreviousMonth}
            className="p-1.5 rounded-full hover:bg-slate-100 active:bg-slate-200 text-slate-600 transition"
            aria-label="Mês anterior"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center space-x-1.5 ml-1">
            <Calendar size={16} className="text-blue-600" />
            <span className="font-semibold text-slate-800 text-sm sm:text-base">
              {formatMonthYear(currentYear, currentMonth)}
            </span>
            {!isCurrentMonth() && (
              <button
                onClick={goToCurrentMonth}
                className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-full font-medium hover:bg-blue-100 transition"
              >
                Hoje
              </button>
            )}
          </div>

          <button
            onClick={goToNextMonth}
            className="p-1.5 rounded-full hover:bg-slate-100 active:bg-slate-200 text-slate-600 transition ml-1"
            aria-label="Próximo mês"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Botão de Dados / Backup */}
        {onOpenBackupModal && (
          <button
            onClick={onOpenBackupModal}
            className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-blue-50/70 transition flex items-center gap-1 text-xs font-semibold"
            title="Dados e Backup"
          >
            <Database size={16} />
            <span className="hidden sm:inline">Backup</span>
          </button>
        )}
      </div>

      {/* Monthly Summary Cards */}
      <div className="px-4 pb-3">
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
    </header>
  );
};
