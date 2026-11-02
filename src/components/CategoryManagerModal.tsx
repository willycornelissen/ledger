import React, { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import { Category, TransactionType } from '../types/finance';
import { CategoryIcon, AVAILABLE_ICONS } from './CategoryIcon';
import { X, Plus, Trash2, Check, Tag } from 'lucide-react';

interface CategoryManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COLOR_PALETTE = [
  '#ef4444', // red
  '#f97316', // orange
  '#f59e0b', // amber
  '#10b981', // emerald
  '#06b6d4', // cyan
  '#3b82f6', // blue
  '#6366f1', // indigo
  '#a855f7', // purple
  '#ec4899', // pink
  '#64748b', // slate
];

export const CategoryManagerModal: React.FC<CategoryManagerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { categories, addCategory, removeCategory } = useFinance();

  const [activeTab, setActiveTab] = useState<TransactionType>('expense');
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [newCatName, setNewCatName] = useState<string>('');
  const [newCatColor, setNewCatColor] = useState<string>(COLOR_PALETTE[0]);
  const [newCatIcon, setNewCatIcon] = useState<string>('Tag');
  const [error, setError] = useState<string>('');

  if (!isOpen) return null;

  const filteredCategories = categories.filter((c) => c.type === activeTab);

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) {
      setError('Por favor, informe o nome da categoria.');
      return;
    }

    try {
      await addCategory({
        name: newCatName.trim(),
        type: activeTab,
        color: newCatColor,
        icon: newCatIcon,
      });
      setNewCatName('');
      setIsCreating(false);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Erro ao salvar categoria.');
    }
  };

  const handleDeleteCategory = async (cat: Category) => {
    if (window.confirm(`Deseja realmente excluir a categoria "${cat.name}"?`)) {
      await removeCategory(cat.id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Tag size={18} className="text-blue-600" />
            <h2 className="text-lg font-bold text-slate-800">Gerenciar Categorias</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab switch */}
        <div className="p-4 pb-2 border-b border-slate-100">
          <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => {
                setActiveTab('expense');
                setIsCreating(false);
              }}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'expense'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Categorias de Despesas
            </button>
            <button
              onClick={() => {
                setActiveTab('income');
                setIsCreating(false);
              }}
              className={`py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'income'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Categorias de Receitas
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {error && (
            <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-600 text-xs">
              {error}
            </div>
          )}

          {/* Modo de Criação */}
          {isCreating ? (
            <form onSubmit={handleCreateCategory} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Nova Categoria ({activeTab === 'expense' ? 'Despesa' : 'Receita'})</span>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="text-xs text-slate-500 hover:text-slate-800"
                >
                  Cancelar
                </button>
              </div>

              <div>
                <input
                  type="text"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder="Nome da categoria (ex: Assinaturas, Pet)"
                  autoFocus
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Seletor de Cores */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">COR</label>
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {COLOR_PALETTE.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setNewCatColor(color)}
                      className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition ${
                        newCatColor === color ? 'ring-2 ring-offset-2 ring-blue-600 scale-110' : ''
                      }`}
                      style={{ backgroundColor: color }}
                    >
                      {newCatColor === color && <Check size={14} className="text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seletor de Ícones */}
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-1.5">ÍCONE</label>
                <div className="grid grid-cols-6 gap-2 max-h-28 overflow-y-auto p-1 bg-white border border-slate-200 rounded-xl">
                  {AVAILABLE_ICONS.map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      onClick={() => setNewCatIcon(icon)}
                      className={`p-2 rounded-lg flex items-center justify-center transition ${
                        newCatIcon === icon
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <CategoryIcon name={icon} size={18} />
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition"
              >
                Adicionar Categoria
              </button>
            </form>
          ) : (
            <button
              onClick={() => setIsCreating(true)}
              className="w-full py-2.5 px-3 border border-dashed border-slate-300 hover:border-blue-500 rounded-xl text-xs font-semibold text-blue-600 flex items-center justify-center gap-1.5 hover:bg-blue-50/50 transition"
            >
              <Plus size={16} /> Nova Categoria de {activeTab === 'expense' ? 'Despesa' : 'Receita'}
            </button>
          )}

          {/* Lista de Categorias Existentes */}
          <div className="divide-y divide-slate-100">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="flex items-center justify-between py-2.5 px-2 hover:bg-slate-50 rounded-xl transition"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: cat.color }}
                  >
                    <CategoryIcon name={cat.icon} size={16} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-800">{cat.name}</span>
                    {cat.isDefault && (
                      <span className="ml-2 text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                        Padrão
                      </span>
                    )}
                  </div>
                </div>

                {!cat.isDefault && (
                  <button
                    onClick={() => handleDeleteCategory(cat)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition"
                    title="Excluir categoria"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
