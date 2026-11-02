import React, { useState } from 'react';
import { DailyTrend } from '../types/finance';
import { formatCurrency } from '../utils/formatters';

interface TrendBarChartProps {
  trends: DailyTrend[];
  type: 'expense' | 'income';
}

export const TrendBarChart: React.FC<TrendBarChartProps> = ({ trends, type }) => {
  const [selectedDay, setSelectedDay] = useState<DailyTrend | null>(null);

  const values = trends.map((t) => (type === 'expense' ? t.expense : t.income));
  const maxValue = Math.max(...values, 0);

  if (maxValue === 0) {
    return (
      <div className="py-6 text-center text-xs text-slate-400">
        Nenhum registro diário no período selecionado.
      </div>
    );
  }

  // Encontra o dia de pico
  const peakDayIndex = values.indexOf(maxValue);

  return (
    <div className="space-y-3">
      {/* Detalhe do dia selecionado */}
      <div className="flex items-center justify-between text-xs bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
        <span className="text-slate-500 font-medium">
          {selectedDay
            ? `Dia ${selectedDay.day}`
            : `Pico no Dia ${trends[peakDayIndex]?.day || 1}`}
        </span>
        <span className="font-bold text-slate-800">
          {formatCurrency(
            selectedDay
              ? type === 'expense'
                ? selectedDay.expense
                : selectedDay.income
              : maxValue
          )}
        </span>
      </div>

      {/* Gráfico de Barras */}
      <div className="h-32 flex items-end gap-1 px-1 pt-4 pb-1 overflow-x-auto">
        {trends.map((item) => {
          const val = type === 'expense' ? item.expense : item.income;
          const heightPercent = maxValue > 0 ? Math.max((val / maxValue) * 100, 4) : 4;
          const isSelected = selectedDay?.day === item.day;
          const isPeak = val === maxValue && val > 0;

          return (
            <div
              key={item.day}
              onClick={() => setSelectedDay(item)}
              className="flex-1 min-w-[7px] flex flex-col items-center cursor-pointer group h-full justify-end"
            >
              <div
                className={`w-full rounded-t-sm transition-all duration-200 ${
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
            </div>
          );
        })}
      </div>

      {/* Eixo de dias (início, meio e fim do mês) */}
      <div className="flex justify-between text-[10px] text-slate-400 px-1 font-mono">
        <span>01</span>
        <span>10</span>
        <span>20</span>
        <span>{trends.length}</span>
      </div>
    </div>
  );
};
