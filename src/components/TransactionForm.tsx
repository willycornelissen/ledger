import React, { useState, useEffect } from 'react';
import { useFinance } from '../context/FinanceContext';
import { Transaction, TransactionType } from '../types/finance';
import { getTodayDateString, parseCurrencyToCents } from '../utils/formatters';
import { CategoryIcon } from './CategoryIcon';
import { X, Check, Trash2, Calendar } from 'lucide-react';

interface TransactionFormProps {
  isOpen: boolean;
  onClose: () => void;
  transactionToEdit?: Transaction | null;
}

export const TransactionForm: React.FC<TransactionFormProps> = ({
  isOpen,
  onClose,
  transactionToEdit,
}) => {
  const { categories, addTransaction, updateTransaction, removeTransaction } = useFinance();

  const [type, setType] = useState<TransactionType>('expense');
  const [amountStr, setAmountStr] = useState<string>('');
  const [date, setDate] = useState<string>(getTodayDateString());
  const [categoryId, setCategoryId] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Sincroniza formulário ao abrir ou alterar transactionToEdit
  useEffect(() => {
    if (transactionToEdit) {
      setType(transactionToEdit.type);
      setAmountStr((transactionToEdit.amount / 100).toFixed(2).replace('.', ','));
      setDate(transactionToEdit.date);
      setCategoryId(transactionToEdit.categoryId);
      setNote(transactionToEdit.note || '');
    } else {
      setType('expense');
      setAmountStr('');
      setDate(getTodayDateString());
      setNote('');
      // Categoria padrão inicial para o tipo atual
      const firstCat = categories.find((c) => c.type === 'expense');
      setCategoryId(firstCat ? firstCat.id : '');
    }
    setError('');
  }, [transactionToEdit, isOpen, categories]);

  // Se trocar o tipo (Receita <-> Despesa), atualiza a categoria selecionada se a atual não bater
  const handleTypeChange = (newType: TransactionType) => {
    setType(newType);
    const validCategory = categories.find((c) => c.id === categoryId && c.type === newType);
    if (!validCategory) {
      const firstOfNewType = categories.find((c) => c.type === newType);
      setCategoryId(firstOfNewType ? firstOfNewType.id : '');
    }
  };

  const filteredCategories = categories.filter((c) => c.type === type);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const amountInCents = parseCurrencyToCents(amountStr);

    if (amountInCents <= 0) {
      setError('Por favor, informe um valor válido maior que zero.');
      return;
    }

    if (!categoryId) {
      setError('Por favor, selecione uma categoria.');
      return;
    }

    if (!date) {
      setError('Por favor, informe a data.');
      return;
    }

    try {
      if (transactionToEdit) {
        await updateTransaction({
          ...transactionToEdit,
          type,
          amount: amountInCents,
          date,
          categoryId,
          note: note.trim() || undefined,
        });
      } else {
        await addTransaction({
          type,
          amount: amountInCents,
          date,
          categoryId,
          note: note.trim() || undefined,
        });
      }
      onClose();
    } catch (err) {
      console.error(err);
      setError('Ocorreu um erro ao salvar o lançamento.');
    }
  };

  const handleDelete = async () => {
    if (!transactionToEdit) return;
    if (window.confirm('Tem certeza de que deseja excluir este lançamento?')) {
      await removeTransaction(transactionToEdit.id);
      onClose();
    }
  };

  const setShortcutDate = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() - offsetDays);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    setDate(`${y}-${m}-${day}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-200">
        {/* Header do modal */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800">
            {transactionToEdit ? 'Editar Lançamento' : 'Novo Lançamento'}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 space-y-4">
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-600 text-xs font-medium">
              {error}
            </div>
          )}

          {/* Toggle Despesa / Receita */}
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl">
            <button
              type="button"
              onClick={() => handleTypeChange('expense')}
              className={`py-2 text-sm font-semibold rounded-lg transition-all ${
                type === 'expense'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Despesa
            </button>
            <button
              type="button"
              onClick={() => handleTypeChange('income')}
              className={`py-2 text-sm font-semibold rounded-lg transition-all ${
                type === 'income'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Receita
            </button>
          </div>

          {/* Campo Valor */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">VALOR (R$)</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">
                R$
              </span>
              <input
                type="text"
                inputMode="decimal"
                value={amountStr}
                onChange={(e) => setAmountStr(e.target.value)}
                placeholder="0,00"
                autoFocus
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-2xl font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
            </div>
          </div>

          {/* Seletor de Data com atalhos */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-500">DATA</label>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setShortcutDate(0)}
                  className={`text-[11px] px-2 py-0.5 rounded font-medium transition ${
                    date === getTodayDateString()
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Hoje
                </button>
                <button
                  type="button"
                  onClick={() => setShortcutDate(1)}
                  className="text-[11px] px-2 py-0.5 rounded font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
                >
                  Ontem
                </button>
              </div>
            </div>
            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
              />
              <Calendar size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Seletor de Categoria */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2">CATEGORIA</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-48 overflow-y-auto pr-1">
              {filteredCategories.map((cat) => {
                const isSelected = cat.id === categoryId;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategoryId(cat.id)}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all text-center ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-1 ring-blue-600'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white mb-1 shadow-xs"
                      style={{ backgroundColor: cat.color }}
                    >
                      <CategoryIcon name={cat.icon} size={16} />
                    </div>
                    <span className="text-[11px] font-medium leading-tight line-clamp-1">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Campo Descrição/Nota */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              NOTA / DESCRIÇÃO (OPCIONAL)
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Ex: Supermercado do mês, gasolina..."
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>

          {/* Botões de Ação */}
          <div className="pt-2 flex items-center gap-2">
            {transactionToEdit && (
              <button
                type="button"
                onClick={handleDelete}
                className="p-3 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-xl font-medium transition"
                title="Excluir lançamento"
              >
                <Trash2 size={18} />
              </button>
            )}

            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-[0.99] transition"
            >
              <Check size={18} />
              Salvar Lançamento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
