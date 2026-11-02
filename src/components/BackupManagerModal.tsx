import React, { useState } from 'react';
import { useFinance } from '../context/FinanceContext';
import { CsvImportModal } from './CsvImportModal';
import { PwaInstallActionCard } from './PwaInstallBanner';
import { X, Database, UploadCloud, Download, FileSpreadsheet, ShieldCheck, Sparkles } from 'lucide-react';

interface BackupManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BackupManagerModal: React.FC<BackupManagerModalProps> = ({ isOpen, onClose }) => {
  const { exportBackupJson, exportCsvData, restoreMoneyLedgersHistory } = useFinance();
  const [isCsvImportOpen, setIsCsvImportOpen] = useState(false);
  const [exporting, setExporting] = useState<boolean>(false);
  const [restoring, setRestoring] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleRestoreMoneyLedgers = async () => {
    if (window.confirm('Deseja carregar os 965 lançamentos de 2026 do Money Ledgers no banco local?')) {
      try {
        setRestoring(true);
        const res = await restoreMoneyLedgersHistory();
        alert(`Histórico carregado com sucesso: ${res.importedCount} lançamentos em ${res.categoriesCount} categorias!`);
        onClose();
      } catch (err) {
        console.error(err);
        alert('Erro ao carregar histórico.');
      } finally {
        setRestoring(false);
      }
    }
  };

  const handleExportJson = async () => {
    try {
      setExporting(true);
      await exportBackupJson();
    } catch (err) {
      console.error(err);
      alert('Erro ao exportar backup JSON.');
    } finally {
      setExporting(false);
    }
  };

  const handleExportCsv = async () => {
    try {
      setExporting(true);
      await exportCsvData();
    } catch (err) {
      console.error(err);
      alert('Erro ao exportar extrato CSV.');
    } finally {
      setExporting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
        <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Database size={20} className="text-blue-600" />
              <h2 className="text-lg font-bold text-slate-800">Dados & Backup</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="p-5 space-y-4 overflow-y-auto">
            {/* Banner de Privacidade Local */}
            <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-2xl flex items-start gap-3">
              <ShieldCheck size={20} className="text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs text-blue-900 leading-relaxed">
                <span className="font-bold">Privacidade 100% Local:</span> Todos os seus dados são
                armazenados apenas no seu navegador/dispositivo. Use as opções abaixo para migrar ou
                salvar cópias de segurança.
              </div>
            </div>

            {/* Cartão de Instalação Mobile (PWA) */}
            <PwaInstallActionCard />

            {/* Ações de Dados */}
            <div className="space-y-3">
              {/* Botão de Carga Rápida do Histórico do Money Ledgers */}
              <button
                onClick={handleRestoreMoneyLedgers}
                disabled={restoring}
                className="w-full flex items-center justify-between p-4 bg-amber-50 hover:bg-amber-100/70 border border-amber-200 rounded-2xl text-left transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-800 group-hover:text-amber-700 transition">
                      Carregar Histórico do Money Ledgers
                    </div>
                    <div className="text-xs text-slate-600">
                      965 lançamentos de 2026 prontos para uso
                    </div>
                  </div>
                </div>
              </button>

              {/* Importar CSV Personalizado */}
              <button
                onClick={() => setIsCsvImportOpen(true)}
                className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 rounded-2xl text-left transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                    <UploadCloud size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-800 group-hover:text-blue-600 transition">
                      Importar Outro Arquivo CSV
                    </div>
                    <div className="text-xs text-slate-500">
                      Upload manual de planilha ou novo arquivo
                    </div>
                  </div>
                </div>
              </button>

              {/* Exportar Backup JSON */}
              <button
                onClick={handleExportJson}
                disabled={exporting}
                className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 rounded-2xl text-left transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <Download size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-800 group-hover:text-emerald-600 transition">
                      Exportar Backup Completo (JSON)
                    </div>
                    <div className="text-xs text-slate-500">
                      Cópia exata com todas as categorias e lançamentos
                    </div>
                  </div>
                </div>
              </button>

              {/* Exportar CSV */}
              <button
                onClick={handleExportCsv}
                disabled={exporting}
                className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-300 rounded-2xl text-left transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                    <FileSpreadsheet size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-800 group-hover:text-indigo-600 transition">
                      Exportar Extrato (CSV)
                    </div>
                    <div className="text-xs text-slate-500">
                      Compatível com Excel, Numbers e Google Planilhas
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Secundário de Importação */}
      <CsvImportModal
        isOpen={isCsvImportOpen}
        onClose={() => setIsCsvImportOpen(false)}
      />
    </>
  );
};
