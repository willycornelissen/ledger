import { useState } from 'react';
import type { User } from 'firebase/auth';
import { FinanceProvider, useFinance } from './context/FinanceContext';
import { useAuth } from './hooks/useAuth';
import { AuthGuard } from './components/AuthGuard';
import { Header } from './components/Header';
import { TransactionList } from './components/TransactionList';
import { DashboardView } from './components/DashboardView';
import { TransactionForm } from './components/TransactionForm';
import { CategoryManagerModal } from './components/CategoryManagerModal';
import { BackupManagerModal } from './components/BackupManagerModal';
import { Transaction } from './types/finance';
import { AlertCircle } from 'lucide-react';

function FinanceApp({ user, onLogout }: { user?: User | null; onLogout?: () => void }) {
  const { error: financeError } = useFinance();
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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Header estilo Moleskine (com abas, novo lançamento, menu, avatar e logout) */}
      <Header
        user={user}
        activeView={activeView}
        onViewChange={setActiveView}
        onOpenNewTransaction={handleOpenNewTransaction}
        onOpenBackupModal={() => setIsBackupModalOpen(true)}
        onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
        onLogout={onLogout}
      />

      {/* Banner de aviso do Firebase (ex: regras de permissão) */}
      {financeError && (
        <div className="max-w-4xl mx-auto px-4 w-full pt-4">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 text-red-800 text-xs">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-bold">Aviso Firebase:</span> {financeError}
              {financeError.toLowerCase().includes('permission') && (
                <p className="mt-1 text-[11px] text-red-700 leading-relaxed">
                  As regras de segurança do Firestore no Firebase Console precisam permitir a leitura e escrita. Acesse <b>Firestore Database &gt; Rules</b> e publique:
                  <code className="block bg-red-100/80 p-2 rounded-xl mt-1.5 font-mono text-[10px] text-red-900 overflow-x-auto">
                    allow read, write: if request.auth != null &amp;&amp; request.auth.uid == userId;
                  </code>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo Principal (Extrato ou Dashboard em container expandido estilo webapp) */}
      <main className="max-w-4xl mx-auto px-4 py-6 w-full flex-1 flex flex-col">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden flex-1 flex flex-col min-h-[480px]">
          {activeView === 'ledger' ? (
            <TransactionList
              onEditTransaction={handleEditTransaction}
              onOpenNewTransaction={handleOpenNewTransaction}
            />
          ) : (
            <DashboardView />
          )}
        </div>
      </main>

      {/* Modais */}
      <TransactionForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        transactionToEdit={editingTransaction}
      />

      <CategoryManagerModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
      />

      <BackupManagerModal
        isOpen={isBackupModalOpen}
        onClose={() => setIsBackupModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  const { user, loading, isAuthorized, error, signInWithGoogle, logout } = useAuth();

  return (
    <AuthGuard
      loading={loading}
      isAuthorized={isAuthorized}
      user={user}
      error={error}
      onLogin={signInWithGoogle}
    >
      <FinanceProvider userId={user?.uid}>
        <FinanceApp user={user} onLogout={logout} />
      </FinanceProvider>
    </AuthGuard>
  );
}
