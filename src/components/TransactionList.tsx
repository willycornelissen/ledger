import React from 'react';
import { useFinance } from '../context/FinanceContext';
import { Transaction } from '../types/finance';
import { formatCurrency, formatDisplayDate } from '../utils/formatters';
import { CategoryIcon } from './CategoryIcon';
import { Receipt, Plus } from 'lucide-react';

interface TransactionListProps {
  onEditTransaction: (tx: Transaction) => void;
  onOpenNewTransaction: () => void;
}

export const TransactionList: React.FC<TransactionListProps> = ({
  onEditTransaction,
  onOpenNewTransaction,
}) => {
  const { dailyTransactions, categories, loading } = useFinance();

  const categoryMap = React.useMemo(() => {
    return new Map(categories.map((c) => [c.id, c]));
  }, [categories]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center p-8 text-slate-400">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (dailyTransactions.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center my-auto">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
          <Receipt size={32} />
        </div>
        <h3 className="text-base font-semibold text-slate-800 mb-1">Nenhum lançamento</h3>
        <p className="text-xs text-slate-500 max-w-xs mb-6">
          Você ainda não possui receitas ou despesas registradas para este mês.
        </p>
        <button
          onClick={onOpenNewTransaction}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl shadow-sm hover:bg-blue-700 transition"
        >
          <Plus size={16} /> Adicionar Lançamento
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 pb-24 overflow-y-auto divide-y divide-slate-100">
      {dailyTransactions.map((group) => {
        return (
          <div key={group.date} className="bg-white">
            {/* Header do dia */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-50/80 border-b border-slate-100 text-xs text-slate-500 font-medium">
              <span>{formatDisplayDate(group.date)}</span>
              <span
                className={`font-semibold ${
                  group.dayTotal >= 0 ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {group.dayTotal >= 0 ? '+' : ''}
                {formatCurrency(group.dayTotal)}
              </span>
            </div>

            {/* Itens do dia */}
            <div className="divide-y divide-slate-50">
              {group.transactions.map((tx) => {
                const cat = categoryMap.get(tx.categoryId);
                const isIncome = tx.type === 'income';

                return (
                  <button
                    key={tx.id}
                    onClick={() => onEditTransaction(tx)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50/80 active:bg-slate-100 transition text-left"
                  >
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                        style={{ backgroundColor: cat ? cat.color : '#94a3b8' }}
                      >
                        <CategoryIcon name={cat?.icon} size={20} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-slate-800 text-sm truncate">
                          {cat ? cat.name : 'Sem categoria'}
                        </div>
                        {tx.note && (
                          <div className="text-xs text-slate-400 truncate mt-0.5">
                            {tx.note}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div
                        className={`font-bold text-sm ${
                          isIncome ? 'text-emerald-600' : 'text-slate-800'
                        }`}
                      >
                        {isIncome ? '+' : '-'} {formatCurrency(tx.amount)}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
