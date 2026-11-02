import { useState } from 'react';
import { FinanceProvider } from './context/FinanceContext';
import { Header } from './components/Header';
import { TransactionList } from './components/TransactionList';
import { DashboardView } from './components/DashboardView';
import { TransactionForm } from './components/TransactionForm';
import { CategoryManagerModal } from './components/CategoryManagerModal';
import { BackupManagerModal } from './components/BackupManagerModal';
import { PwaInstallBanner } from './components/PwaInstallBanner';
import { Transaction } from './types/finance';
import { Plus, ListFilter, PieChart, Tag } from 'lucide-react';

function FinanceApp() {
  const [activeView, setActiveView] = useState<'ledger' | 'dashboard'>('ledger');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isBackupModalOpen, setIsBackupModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const handleOpenNewTransaction = () => {
    setEditingTransaction(null);
    setIsFormOpen(true);
  };

  const handleEditTransaction = (tx: Transaction) => {
    setEditingTransaction(tx);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTransaction(null);
  };

  return (
    <div className="min-h-screen bg-slate-200 sm:py-6 flex justify-center">
      <div className="w-full sm:max-w-md bg-white min-h-screen sm:min-h-[844px] sm:max-h-[900px] flex flex-col sm:rounded-3xl shadow-2xl relative overflow-hidden">
        {/* Cabeçalho com App Bar, mês, resumo de saldo e menu 3 pontos */}
        <Header
          onOpenBackupModal={() => setIsBackupModalOpen(true)}
          onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
        />

        {/* Banner de Instalação Mobile (PWA) */}
        <PwaInstallBanner />

        {/* Conteúdo Dinâmico (Extrato ou Dashboard) */}
        <main className="flex-1 overflow-y-auto flex flex-col bg-slate-50">
          {activeView === 'ledger' ? (
            <TransactionList
              onEditTransaction={handleEditTransaction}
              onOpenNewTransaction={handleOpenNewTransaction}
            />
          ) : (
            <DashboardView />
          )}
        </main>

        {/* Barra de Navegação Inferior (Mobile-first) */}
        <nav className="bg-white border-t border-slate-200 px-4 py-2 safe-bottom flex items-center justify-around z-10 shrink-0">
          {/* Aba Extrato */}
          <button
            onClick={() => setActiveView('ledger')}
            className={`flex flex-col items-center gap-1 transition ${
              activeView === 'ledger'
                ? 'text-blue-600 font-bold'
                : 'text-slate-400 hover:text-slate-600 font-medium'
            }`}
          >
            <ListFilter size={20} />
            <span className="text-[11px]">Extrato</span>
          </button>

          {/* Aba Estatísticas */}
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex flex-col items-center gap-1 transition ${
              activeView === 'dashboard'
                ? 'text-blue-600 font-bold'
                : 'text-slate-400 hover:text-slate-600 font-medium'
            }`}
          >
            <PieChart size={20} />
            <span className="text-[11px]">Estatísticas</span>
          </button>

          {/* Botão Central de Novo Lançamento (+) */}
          <div className="relative -top-4">
            <button
              onClick={handleOpenNewTransaction}
              className="w-13 h-13 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition p-3"
              aria-label="Novo lançamento"
            >
              <Plus size={26} />
            </button>
          </div>

          {/* Botão Categorias */}
          <button
            onClick={() => setIsCategoryModalOpen(true)}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 font-medium transition"
          >
            <Tag size={20} />
            <span className="text-[11px]">Categorias</span>
          </button>
        </nav>

        {/* Modal de Lançamento */}
        <TransactionForm
          isOpen={isFormOpen}
          onClose={handleCloseForm}
          transactionToEdit={editingTransaction}
        />

        {/* Modal de Gerenciamento de Categorias */}
        <CategoryManagerModal
          isOpen={isCategoryModalOpen}
          onClose={() => setIsCategoryModalOpen(false)}
        />

        {/* Modal de Backup & Importação de Dados */}
        <BackupManagerModal
          isOpen={isBackupModalOpen}
          onClose={() => setIsBackupModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <FinanceProvider>
      <FinanceApp />
    </FinanceProvider>
  );
}
