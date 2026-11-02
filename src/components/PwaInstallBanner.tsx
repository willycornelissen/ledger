import React, { useState } from 'react';
import { usePwaInstall } from '../hooks/usePwaInstall';
import { Smartphone, Download, CheckCircle, X, Share } from 'lucide-react';

export const PwaInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, triggerInstall } = usePwaInstall();
  const [dismissed, setDismissed] = useState(false);
  const [showManualGuide, setShowManualGuide] = useState(false);

  // Se já estiver rodando instalado em modo standalone ou usuário fechou, oculta o banner
  if (isInstalled || dismissed) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const installed = await triggerInstall();
      if (!installed) {
        setShowManualGuide(true);
      }
    } else {
      setShowManualGuide(true);
    }
  };

  return (
    <div className="mx-4 mt-3 bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-2xl p-3.5 shadow-md border border-slate-800 relative">
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-white rounded-full transition"
        aria-label="Fechar banner"
      >
        <X size={16} />
      </button>

      <div className="flex items-start gap-3 pr-6">
        <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
          <Smartphone size={18} />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
            Usar no Celular sem Navegador
          </h4>
          <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
            Instale o app na tela inicial para rodar em tela cheia com acesso 100% offline.
          </p>

          <div className="mt-2.5 flex items-center gap-2">
            <button
              onClick={handleInstallClick}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl shadow-xs transition"
            >
              <Download size={14} /> Instalar no Celular
            </button>
          </div>
        </div>
      </div>

      {/* Guia manual para navegadores que não disparam prompt automático */}
      {showManualGuide && (
        <div className="mt-3 pt-3 border-t border-slate-800 text-[11px] text-slate-300 space-y-1.5 animate-in fade-in duration-200">
          <div className="font-semibold text-blue-300 flex items-center gap-1">
            <Share size={12} /> Como instalar manualmente:
          </div>
          <p>
            1. No menu do navegador (ícone de 3 pontos <span className="font-bold">⋮</span> no Chrome/Android ou botão de <span className="font-bold">Compartilhar</span> no Safari/iOS).
          </p>
          <p>
            2. Toque em <span className="font-bold text-white">"Adicionar à tela inicial"</span> ou <span className="font-bold text-white">"Instalar aplicativo"</span>.
          </p>
        </div>
      )}
    </div>
  );
};

export const PwaInstallActionCard: React.FC = () => {
  const { isInstallable, isInstalled, triggerInstall } = usePwaInstall();
  const [showGuide, setShowGuide] = useState(false);

  if (isInstalled) {
    return (
      <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3">
        <CheckCircle size={20} className="text-emerald-600 shrink-0" />
        <div className="text-xs text-emerald-900">
          <span className="font-bold">App Instalado:</span> Executando localmente no seu dispositivo em modo standalone com suporte offline total.
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-2 border border-slate-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Smartphone size={18} className="text-blue-400" />
          <span className="text-xs font-bold">Instalação no Celular (PWA)</span>
        </div>
        <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-semibold">
          100% Offline
        </span>
      </div>
      <p className="text-[11px] text-slate-300 leading-relaxed">
        Adicione este aplicativo à tela de início do seu celular. Ele funcionará como um app nativo, sem barra de navegação e sem custos de assinatura.
      </p>

      <button
        onClick={async () => {
          if (isInstallable) {
            const ok = await triggerInstall();
            if (!ok) setShowGuide((v) => !v);
          } else {
            setShowGuide((v) => !v);
          }
        }}
        className="w-full mt-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition"
      >
        <Download size={14} /> Instalar na Tela Inicial
      </button>

      {showGuide && (
        <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-800">
          No navegador móvel, abra o menu (⋮) e toque em <strong>"Adicionar à tela inicial"</strong> ou <strong>"Instalar aplicativo"</strong>.
        </div>
      )}
    </div>
  );
};
