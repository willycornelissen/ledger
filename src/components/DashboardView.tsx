import React, { useState, useMemo, useEffect } from 'react';
import { useFinance } from '../context/FinanceContext';
import { calculatePeriodStats, calculateAnnualStats } from '../utils/statistics';
import { TransactionType, Transaction } from '../types/finance';
import { formatCurrency } from '../utils/formatters';
import { DonutChart } from './DonutChart';
import { TrendBarChart } from './TrendBarChart';
import { AnnualTrendBarChart } from './AnnualTrendBarChart';
import { CategoryIcon } from './CategoryIcon';
import { AnnualReportModal } from './AnnualReportModal';
import {
  TrendingUp,
  Calendar,
  PiggyBank,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  FileText,
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    currentYear,
    currentMonth,
    transactions,
    yearTransactions,
    categories,
    loading,
    getTransactionsForYear,
  } = useFinance();

  const [timeframe, setTimeframe] = useState<'month' | 'year'>('month');
  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [activeType, setActiveType] = useState<TransactionType>('expense');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [customYearTx, setCustomYearTx] = useState<Transaction[] | null>(null);

  // Mantém selectedYear sincronizado quando currentYear mudar
  useEffect(() => {
    setSelectedYear(currentYear);
  }, [currentYear]);

  // Se o usuário selecionou outro ano, busca as transações daquele ano
  useEffect(() => {
    let isCancelled = false;
    if (selectedYear === currentYear) {
      setCustomYearTx(null);
    } else {
      getTransactionsForYear(selectedYear).then((txList) => {
        if (!isCancelled) {
          setCustomYearTx(txList);
        }
      });
    }
    return () => {
      isCancelled = true;
    };
  }, [selectedYear, currentYear, getTransactionsForYear]);

  const activeYearTransactions = customYearTx || yearTransactions;

  // Estatísticas Mensais
  const monthlyStats = useMemo(() => {
    return calculatePeriodStats(currentYear, currentMonth, transactions, categories, activeType);
  }, [currentYear, currentMonth, transactions, categories, activeType]);

  // Estatísticas Anuais
  const annualStats = useMemo(() => {
    return calculateAnnualStats(selectedYear, activeYearTransactions, categories);
  }, [selectedYear, activeYearTransactions, categories]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-slate-400">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Dados ativos de acordo com a visualização selecionada
  const isAnnual = timeframe === 'year';
  const categoryBreakdown = isAnnual
    ? activeType === 'expense'
      ? annualStats.expenseCategoryBreakdown
      : annualStats.incomeCategoryBreakdown
    : monthlyStats.categoryBreakdown;

  const currentTypeTotal = isAnnual
    ? activeType === 'expense'
      ? annualStats.totalExpense
      : annualStats.totalIncome
    : activeType === 'expense'
    ? monthlyStats.totalExpense
    : monthlyStats.totalIncome;

  return (
    <div className="flex-1 pb-8 sm:p-6 sm:space-y-6 overflow-y-auto p-4 space-y-4">
      {/* 1. Seletor de Período (Mensal vs Ano Todo) */}
      <div className="bg-slate-200/80 p-1 rounded-2xl flex items-center">
        <button
          onClick={() => setTimeframe('month')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
            timeframe === 'month'
              ? 'bg-white text-blue-600 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Mês Atual
        </button>
        <button
          onClick={() => setTimeframe('year')}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
            timeframe === 'year'
              ? 'bg-white text-blue-600 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Ano Todo ({selectedYear})
        </button>
      </div>

      {/* 2. Barra de Navegação do Ano + Botão Exportar Relatório (visível em modo Anual) */}
      {isAnnual && (
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 bg-white p-2.5 rounded-2xl border border-slate-100 shadow-xs">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSelectedYear((y) => y - 1)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition"
              aria-label="Ano anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="font-bold text-slate-800 text-sm px-1.5 whitespace-nowrap">
              Ano de {selectedYear}
            </span>

            <button
              onClick={() => setSelectedYear((y) => y + 1)}
              className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition"
              aria-label="Próximo ano"
            >
              <ChevronRight size={18} />
            </button>

            {selectedYear !== currentYear && (
              <button
                onClick={() => setSelectedYear(currentYear)}
                className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition whitespace-nowrap"
              >
                Atual ({currentYear})
              </button>
            )}
          </div>

          <button
            onClick={() => setIsReportModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl text-xs font-bold transition shadow-xs whitespace-nowrap"
            title="Exportar Relatório Anual"
          >
            <FileText size={14} />
            <span>Exportar Relatório</span>
          </button>
        </div>
      )}

      {/* 3. Indicadores Principais */}
      {isAnnual ? (
        /* Cards Anuais */
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {/* Receitas Totais do Ano */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider">
                  Receitas ({selectedYear})
                </span>
                <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
                  <ArrowDownLeft size={14} />
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-emerald-600">
                  {formatCurrency(annualStats.totalIncome)}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Média: {formatCurrency(annualStats.monthlyAverageIncome)}/mês
                </div>
              </div>
            </div>

            {/* Despesas Totais do Ano */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider">
                  Despesas ({selectedYear})
                </span>
                <div className="p-1 rounded-lg bg-rose-50 text-rose-600">
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-rose-600">
                  {formatCurrency(annualStats.totalExpense)}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Média: {formatCurrency(annualStats.monthlyAverageExpense)}/mês
                </div>
              </div>
            </div>

            {/* Saldo Anual */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider">
                  Saldo Anual
                </span>
                <div className="p-1 rounded-lg bg-blue-50 text-blue-600">
                  <Wallet size={14} />
                </div>
              </div>
              <div>
                <div
                  className={`text-lg sm:text-xl font-bold ${
                    annualStats.balance >= 0 ? 'text-slate-800' : 'text-rose-600'
                  }`}
                >
                  {formatCurrency(annualStats.balance)}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {annualStats.balance >= 0 ? 'Balanço positivo no ano' : 'Déficit no ano'}
                </div>
              </div>
            </div>

            {/* Taxa de Economia Anual */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider">Economia</span>
                <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
                  <PiggyBank size={14} />
                </div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-slate-800">
                  {annualStats.savingsRate}%
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {annualStats.savingsRate >= 0 ? 'Poupado da renda' : 'Déficit anual'}
                </div>
              </div>
            </div>
          </div>

          {/* Subcard de Métricas Adicionais */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs bg-white p-2.5 rounded-2xl border border-slate-100">
            <div>
              <span className="text-[10px] text-slate-400 block">Gasto Médio Diário</span>
              <span className="font-bold text-slate-800">
                {formatCurrency(annualStats.dailyAverageExpense)}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Lançamentos</span>
              <span className="font-bold text-slate-800">
                {annualStats.totalTransactionsCount}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block">Média Mensal</span>
              <span className="font-bold text-slate-800">
                {formatCurrency(annualStats.monthlyAverageExpense)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Cards Mensais Padrão */
        <div className="grid grid-cols-2 gap-3">
          {/* Taxa de Economia */}
          <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Economia</span>
              <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
                <PiggyBank size={14} />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-slate-800">
                {monthlyStats.savingsRate}%
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                {monthlyStats.savingsRate >= 0 ? 'Poupado da renda' : 'Déficit no mês'}
              </div>
            </div>
          </div>

          {/* Gasto Médio Diário */}
          <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider">Média Diária</span>
              <div className="p-1 rounded-lg bg-blue-50 text-blue-600">
                <Calendar size={14} />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-slate-800">
                {formatCurrency(monthlyStats.dailyAverageExpense)}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                Em {monthlyStats.daysInMonth} dias
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Seletor Despesas / Receitas */}
      <div className="grid grid-cols-2 p-1 bg-slate-200/80 rounded-xl">
        <button
          onClick={() => setActiveType('expense')}
          className={`py-2 text-xs font-bold rounded-lg transition-all ${
            activeType === 'expense'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Despesas por Categoria
        </button>
        <button
          onClick={() => setActiveType('income')}
          className={`py-2 text-xs font-bold rounded-lg transition-all ${
            activeType === 'income'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Receitas por Categoria
        </button>
      </div>

      {/* 5. Gráfico Donut de Categorias e Ranking */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <TrendingUp size={14} className="text-blue-600" />{' '}
            {isAnnual ? `Distribuição Anual (${selectedYear})` : 'Distribuição no Mês'}
          </h3>
          <span className="text-xs font-semibold text-slate-700">
            {formatCurrency(currentTypeTotal)}
          </span>
        </div>

        <DonutChart
          data={categoryBreakdown}
          totalAmount={currentTypeTotal}
          type={activeType}
        />

        {/* Lista de Ranking com Barra de Progresso */}
        <div className="mt-4 pt-3 border-t border-slate-100 divide-y divide-slate-100">
          {categoryBreakdown.length === 0 ? (
            <div className="text-center py-4 text-xs text-slate-400">
              Nenhuma {activeType === 'expense' ? 'despesa' : 'receita'} registrada neste{' '}
              {isAnnual ? 'ano' : 'mês'}.
            </div>
          ) : (
            categoryBreakdown.map((item) => {
              return (
                <div key={item.category.id} className="py-2.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: item.category.color }}
                      >
                        <CategoryIcon name={item.category.icon} size={14} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800">{item.category.name}</div>
                        <div className="text-[10px] text-slate-400">
                          {item.count} {item.count === 1 ? 'lançamento' : 'lançamentos'}
                          {isAnnual && (
                            <span className="ml-1.5 font-medium text-slate-500">
                              • Média: {formatCurrency(Math.round(item.total / 12))}/mês
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-bold text-slate-800">
                        {formatCurrency(item.total)}
                      </span>
                      <span className="ml-1.5 text-[11px] font-semibold text-slate-400">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Barra de Progresso Proporcional */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.category.color,
                      }}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 6. Gráfico de Tendência (Diária para Mês ou Mensal para Ano) */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <BarChart2 size={14} className="text-blue-600" />{' '}
            {isAnnual ? `Evolução Mensal (${selectedYear})` : 'Evolução no Mês'}
          </h3>
          <span className="text-[11px] text-slate-400">
            {isAnnual ? 'Janeiro a Dezembro' : `Dias 1 a ${monthlyStats.daysInMonth}`}
          </span>
        </div>

        {isAnnual ? (
          <AnnualTrendBarChart key={selectedYear} trends={annualStats.monthlyTrends} type={activeType} />
        ) : (
          <TrendBarChart trends={monthlyStats.dailyTrends} type={activeType} />
        )}
      </div>

      {/* 7. Banner de Ação para Exportar Relatório */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white shadow-sm flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold flex items-center gap-1.5">
            <FileText size={16} /> Relatório Financeiro Anual
          </div>
          <p className="text-[11px] text-blue-100 mt-0.5">
            Gere demonstrativos completos em PDF, planilha CSV ou página HTML.
          </p>
        </div>

        <button
          onClick={() => setIsReportModalOpen(true)}
          className="px-3.5 py-2 bg-white text-blue-700 hover:bg-blue-50 active:scale-95 rounded-xl text-xs font-bold shrink-0 transition shadow-xs"
        >
          Visualizar
        </button>
      </div>

      {/* Modal de Relatório Anual */}
      <AnnualReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        stats={annualStats}
      />
    </div>
  );
};
