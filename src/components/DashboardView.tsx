import React, { useState, useMemo } from 'react';
import { useFinance } from '../context/FinanceContext';
import { calculatePeriodStats } from '../utils/statistics';
import { TransactionType } from '../types/finance';
import { formatCurrency } from '../utils/formatters';
import { DonutChart } from './DonutChart';
import { TrendBarChart } from './TrendBarChart';
import { CategoryIcon } from './CategoryIcon';
import { TrendingUp, Calendar, PiggyBank, BarChart2 } from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { currentYear, currentMonth, transactions, categories, loading } = useFinance();
  const [activeType, setActiveType] = useState<TransactionType>('expense');

  const stats = useMemo(() => {
    return calculatePeriodStats(currentYear, currentMonth, transactions, categories, activeType);
  }, [currentYear, currentMonth, transactions, categories, activeType]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-slate-400">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const currentTypeTotal = activeType === 'expense' ? stats.totalExpense : stats.totalIncome;

  return (
    <div className="flex-1 pb-24 overflow-y-auto p-4 space-y-4">
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-2 gap-3">
        {/* Taxa de Economia */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider">Economia</span>
            <div className="p-1 rounded-lg bg-emerald-50 text-emerald-600">
              <PiggyBank size={14} />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800">
              {stats.savingsRate}%
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              {stats.savingsRate >= 0 ? 'Poupado da renda' : 'Déficit no mês'}
            </div>
          </div>
        </div>

        {/* Gasto Médio Diário */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider">Média Diária</span>
            <div className="p-1 rounded-lg bg-blue-50 text-blue-600">
              <Calendar size={14} />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-slate-800">
              {formatCurrency(stats.dailyAverageExpense)}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">
              Em {stats.daysInMonth} dias
            </div>
          </div>
        </div>
      </div>

      {/* Seletor Despesas / Receitas */}
      <div className="grid grid-cols-2 p-1 bg-slate-200/80 rounded-xl">
        <button
          onClick={() => setActiveType('expense')}
          className={`py-2 text-xs font-bold rounded-lg transition-all ${
            activeType === 'expense'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Despesas por Categoria
        </button>
        <button
          onClick={() => setActiveType('income')}
          className={`py-2 text-xs font-bold rounded-lg transition-all ${
            activeType === 'income'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Receitas por Categoria
        </button>
      </div>

      {/* Gráfico Donut de Categorias */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <TrendingUp size={14} className="text-blue-600" /> Distribuição
          </h3>
          <span className="text-xs font-semibold text-slate-700">
            {formatCurrency(currentTypeTotal)}
          </span>
        </div>

        <DonutChart
          data={stats.categoryBreakdown}
          totalAmount={currentTypeTotal}
          type={activeType}
        />

        {/* Lista de Ranking com Barra de Progresso */}
        <div className="mt-4 pt-3 border-t border-slate-100 divide-y divide-slate-100">
          {stats.categoryBreakdown.length === 0 ? (
            <div className="text-center py-4 text-xs text-slate-400">
              Nenhuma {activeType === 'expense' ? 'despesa' : 'receita'} registrada neste mês.
            </div>
          ) : (
            stats.categoryBreakdown.map((item) => {
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
                      <span className="font-semibold text-slate-800">{item.category.name}</span>
                      <span className="text-[10px] text-slate-400">
                        ({item.count} {item.count === 1 ? 'lançamento' : 'lançamentos'})
                      </span>
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

      {/* Gráfico de Barras de Tendência Diária */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <BarChart2 size={14} className="text-blue-600" /> Evolução no Mês
          </h3>
          <span className="text-[11px] text-slate-400">Dias 1 a {stats.daysInMonth}</span>
        </div>

        <TrendBarChart trends={stats.dailyTrends} type={activeType} />
      </div>
    </div>
  );
};
