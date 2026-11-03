import React, { useState } from 'react';
import { MonthlyTrend } from '../types/finance';
import { formatCurrency } from '../utils/formatters';

interface AnnualTrendBarChartProps {
  trends: MonthlyTrend[];
  type: 'expense' | 'income';
}

export const AnnualTrendBarChart: React.FC<AnnualTrendBarChartProps> = ({ trends, type }) => {
  const [selectedMonthNum, setSelectedMonthNum] = useState<number | null>(null);

  const values = trends.map((t) => (type === 'expense' ? t.expense : t.income));
  const maxValue = Math.max(...values, 0);

  if (maxValue === 0) {
    return (
      <div className="py-6 text-center text-xs text-slate-400">
        Nenhum registro no ano selecionado.
      </div>
    );
  }

  const peakIndex = values.indexOf(maxValue);
  const selectedMonth = trends.find((t) => t.month === selectedMonthNum) || null;
  const displayedItem = selectedMonth || trends[peakIndex] || trends[0];

  return (
    <div className="space-y-3">
      {/* Detalhe do mês selecionado */}
      <div className="flex items-center justify-between text-xs bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-100">
        <div>
          <span className="text-slate-500 font-medium">
            {selectedMonth ? selectedMonth.monthName : `Mês de Pico: ${displayedItem.monthName}`}
          </span>
          <div className="text-[10px] text-slate-400">
            {displayedItem.transactionCount}{' '}
            {displayedItem.transactionCount === 1 ? 'lançamento' : 'lançamentos'}
          </div>
        </div>

        <div className="text-right">
          <div className="font-bold text-slate-800">
            {formatCurrency(type === 'expense' ? displayedItem.expense : displayedItem.income)}
          </div>
          <div className="text-[10px] font-semibold text-slate-500">
            Saldo:{' '}
            <span className={displayedItem.balance >= 0 ? 'text-emerald-600' : 'text-rose-600'}>
              {formatCurrency(displayedItem.balance)}
            </span>
          </div>
        </div>
      </div>

      {/* Gráfico de Barras dos 12 Meses com suporte a teclado e acessibilidade */}
      <div className="h-36 flex items-end gap-1.5 px-1 pt-4 pb-1">
        {trends.map((item) => {
          const val = type === 'expense' ? item.expense : item.income;
          const heightPercent = maxValue > 0 ? Math.max((val / maxValue) * 100, 6) : 6;
          const isSelected = selectedMonth?.month === item.month;
          const isPeak = val === maxValue && val > 0;

          return (
            <button
              key={item.month}
              type="button"
              onClick={() => setSelectedMonthNum(item.month)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedMonthNum(item.month);
                }
              }}
              aria-label={`${item.monthName}: ${formatCurrency(val)}`}
              className="flex-1 flex flex-col items-center cursor-pointer group h-full justify-end focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-t-md"
              title={`${item.monthName}: ${formatCurrency(val)}`}
            >
              <div
                className={`w-full rounded-t-md transition-all duration-200 ${
                  isPeak
                    ? type === 'expense'
                      ? 'bg-rose-600'
                      : 'bg-emerald-600'
                    : isSelected
                    ? 'bg-blue-600'
                    : val > 0
                    ? type === 'expense'
                      ? 'bg-rose-300 group-hover:bg-rose-400'
                      : 'bg-emerald-300 group-hover:bg-emerald-400'
                    : 'bg-slate-200'
                }`}
                style={{ height: `${heightPercent}%` }}
              />
              <span
                className={`text-[10px] mt-1.5 font-medium transition ${
                  isSelected
                    ? 'text-blue-600 font-bold'
                    : isPeak
                    ? 'text-slate-800 font-semibold'
                    : 'text-slate-400 group-hover:text-slate-600'
                }`}
              >
                {item.shortMonthName}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
