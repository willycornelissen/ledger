import React, { useState } from 'react';
import { CategorySpending } from '../types/finance';
import { formatCurrency } from '../utils/formatters';

interface DonutChartProps {
  data: CategorySpending[];
  totalAmount: number; // Centavos
  type: 'expense' | 'income';
}

export const DonutChart: React.FC<DonutChartProps> = ({ data, totalAmount, type }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const radius = 70;
  const strokeWidth = 22;
  const circumference = 2 * Math.PI * radius;

  if (totalAmount <= 0 || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-6">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
          />
          <text
            x="100"
            y="96"
            textAnchor="middle"
            className="text-xs fill-slate-400 font-medium"
          >
            Sem dados
          </text>
          <text
            x="100"
            y="114"
            textAnchor="middle"
            className="text-[11px] fill-slate-300 font-normal"
          >
            R$ 0,00
          </text>
        </svg>
      </div>
    );
  }

  let accumulatedPercent = 0;

  const activeItem = hoveredIndex !== null ? data[hoveredIndex] : null;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-48 h-48">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full transform -rotate-90 transition-all duration-300"
        >
          {/* Fundo do Donut */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth={strokeWidth}
          />

          {/* Fatias das Categorias */}
          {data.map((item, index) => {
            const fraction = item.total / totalAmount;
            const strokeLength = fraction * circumference;
            const strokeOffset = accumulatedPercent * circumference;
            accumulatedPercent += fraction;

            const isHovered = hoveredIndex === index;

            return (
              <circle
                key={item.category.id}
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={item.category.color}
                strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={`${strokeLength} ${circumference - strokeLength}`}
                strokeDashoffset={-strokeOffset}
                strokeLinecap="butt"
                className="cursor-pointer transition-all duration-200 hover:opacity-90"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isHovered ? null : index)}
              />
            );
          })}
        </svg>

        {/* Texto Central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
          <span className="text-[11px] font-medium text-slate-400 truncate max-w-[120px]">
            {activeItem ? activeItem.category.name : `Total ${type === 'expense' ? 'Despesas' : 'Receitas'}`}
          </span>
          <span className="text-base font-bold text-slate-800 leading-tight">
            {formatCurrency(activeItem ? activeItem.total : totalAmount)}
          </span>
          {activeItem && (
            <span
              className="text-[10px] font-semibold mt-0.5 px-1.5 py-0.2 rounded-full text-white"
              style={{ backgroundColor: activeItem.category.color }}
            >
              {activeItem.percentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
