import React from 'react';
import type { User } from 'firebase/auth';
import { LogIn, Loader2, AlertCircle } from 'lucide-react';

interface AuthGuardProps {
  loading: boolean;
  isAuthorized: boolean;
  user: User | null;
  error: string | null;
  onLogin: () => void;
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  loading,
  isAuthorized,
  error,
  onLogin,
  children,
}) => {
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 text-slate-800 p-4">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <p className="text-sm font-medium text-slate-600">
            Carregando Ledger...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
        <div className="w-full max-w-sm bg-white rounded-3xl border border-slate-200 shadow-xl p-8 flex flex-col items-center text-center">
          <img
            src="./ledger.webp"
            alt="Ledger"
            className="w-16 h-16 rounded-2xl shadow-sm object-contain bg-white mb-4"
          />

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Ledger
          </h2>
          <p className="text-xs text-slate-500 mt-2 mb-6 leading-relaxed">
            Diário financeiro pessoal estritamente privado. Acesso restrito com autenticação Google autorizada.
          </p>

          {error && (
            <div className="w-full mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-left flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <p className="text-xs text-red-700 leading-snug">
                {error}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={onLogin}
            className="w-full py-3 px-4 inline-flex items-center justify-center gap-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all shadow-md shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <LogIn className="w-4 h-4" />
            <span>Entrar com Google</span>
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
