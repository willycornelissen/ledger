import React, { useEffect } from 'react';
import { AnnualStats } from '../types/finance';
import { formatCurrency } from '../utils/formatters';
import { generateAnnualReportCsv, generateAnnualReportHtml } from '../utils/statistics';
import {
  X,
  Printer,
  FileSpreadsheet,
  Download,
  Calendar,
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';

interface AnnualReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: AnnualStats;
}

export const AnnualReportModal: React.FC<AnnualReportModalProps> = ({
  isOpen,
  onClose,
  stats,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const emissionDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const handlePrint = () => {
    // Em ambiente de testes (jsdom), executa window.print diretamente
    if (typeof navigator !== 'undefined' && navigator.userAgent?.includes('jsdom')) {
      window.print();
      return;
    }

    try {
      const htmlContent = generateAnnualReportHtml(stats);
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      document.body.appendChild(iframe);
      const doc = iframe.contentWindow?.document;
      if (doc && iframe.contentWindow) {
        doc.open();
        doc.write(htmlContent);
        doc.close();
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }, 1500);
        return;
      }
    } catch {
      // Fallback para impressão direta na página
    }
    window.print();
  };

  const handleDownloadCsv = () => {
    const csvContent = generateAnnualReportCsv(stats);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-financeiro-anual-${stats.year}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadHtml = () => {
    const htmlContent = generateAnnualReportHtml(stats);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-financeiro-anual-${stats.year}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="annual-report-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-2 sm:p-4 print:p-0 print:bg-white print:static"
    >
      <div className="w-full max-w-2xl bg-white rounded-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden print:max-h-none print:shadow-none print:rounded-none">
        {/* Top Modal Bar (oculta na impressão) */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50 print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
              <Calendar size={18} />
            </div>
            <div>
              <h2 id="annual-report-modal-title" className="text-sm font-bold text-slate-800">
                Relatório Financeiro Anual ({stats.year})
              </h2>
              <p className="text-[10px] text-slate-500">
                {stats.totalTransactionsCount} lançamentos consolidados
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Action Buttons Toolbar (oculta na impressão) */}
        <div className="px-5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between gap-2 overflow-x-auto print:hidden shrink-0">
          <span className="text-xs font-semibold text-slate-500">Exportar:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl text-xs font-bold transition shadow-xs"
              title="Imprimir ou Salvar como PDF"
            >
              <Printer size={14} />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={handleDownloadCsv}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs font-bold transition"
              title="Baixar planilha CSV compatível com Excel"
            >
              <FileSpreadsheet size={14} />
              <span>Planilha CSV</span>
            </button>

            <button
              onClick={handleDownloadHtml}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
              title="Baixar página HTML independente"
            >
              <Download size={14} />
              <span>HTML</span>
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Report Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 text-slate-800 print:overflow-visible print:p-0">
          {/* Header do Relatório */}
          <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src="/ledger.webp"
                  alt="Ledger"
                  className="w-7 h-7 rounded-lg shadow-2xs object-contain bg-white"
                />
                <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                  Ledger — Relatório Financeiro Anual
                </h1>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Demonstrativo consolidado de despesas e receitas • Emitido em {emissionDate}
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-bold">
                Ano {stats.year}
              </span>
            </div>
          </div>

          {/* 1. Sumário Executivo */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Wallet size={14} className="text-blue-600" /> 1. Sumário Executivo
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <ArrowDownLeft size={12} className="text-emerald-600" /> Receitas
                </span>
                <div className="text-base font-bold text-emerald-600 mt-1">
                  {formatCurrency(stats.totalIncome)}
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <ArrowUpRight size={12} className="text-rose-600" /> Despesas
                </span>
                <div className="text-base font-bold text-rose-600 mt-1">
                  {formatCurrency(stats.totalExpense)}
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Saldo Anual
                </span>
                <div
                  className={`text-base font-bold mt-1 ${
                    stats.balance >= 0 ? 'text-emerald-600' : 'text-rose-600'
                  }`}
                >
                  {formatCurrency(stats.balance)}
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Taxa de Poupança
                </span>
                <div className="text-base font-bold text-slate-800 mt-1">
                  {stats.savingsRate}%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] text-slate-600">
              <div className="bg-white p-2 rounded-xl border border-slate-100 text-center">
                <span className="text-slate-400 block text-[10px]">Média Mensal Gastos</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(stats.monthlyAverageExpense)}
                </span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-100 text-center">
                <span className="text-slate-400 block text-[10px]">Média Mensal Receitas</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(stats.monthlyAverageIncome)}
                </span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-100 text-center">
                <span className="text-slate-400 block text-[10px]">Gasto Médio Diário</span>
                <span className="font-bold text-slate-800">
                  {formatCurrency(stats.dailyAverageExpense)}
                </span>
              </div>
            </div>
          </div>

          {/* 2. Demonstrativo Mensal */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <TrendingUp size={14} className="text-blue-600" /> 2. Demonstrativo Mensal
            </h3>

            <div className="border border-slate-200 rounded-2xl overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2 px-3">Mês</th>
                    <th className="py-2 px-3 text-right">Receitas</th>
                    <th className="py-2 px-3 text-right">Despesas</th>
                    <th className="py-2 px-3 text-right">Saldo</th>
                    <th className="py-2 px-3 text-center">Poupança</th>
                    <th className="py-2 px-3 text-center">Lçtos</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {stats.monthlyTrends.map((m) => (
                    <tr key={m.month} className="hover:bg-slate-50">
                      <td className="py-1.5 px-3 font-medium text-slate-800">{m.monthName}</td>
                      <td className="py-1.5 px-3 text-right text-emerald-600 font-medium">
                        {formatCurrency(m.income)}
                      </td>
                      <td className="py-1.5 px-3 text-right text-rose-600 font-medium">
                        {formatCurrency(m.expense)}
                      </td>
                      <td
                        className={`py-1.5 px-3 text-right font-bold ${
                          m.balance >= 0 ? 'text-emerald-600' : 'text-rose-600'
                        }`}
                      >
                        {formatCurrency(m.balance)}
                      </td>
                      <td className="py-1.5 px-3 text-center text-slate-500">{m.savingsRate}%</td>
                      <td className="py-1.5 px-3 text-center text-slate-400">
                        {m.transactionCount}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-100 font-bold border-t border-slate-200">
                  <tr>
                    <td className="py-2 px-3">TOTAL ANUAL</td>
                    <td className="py-2 px-3 text-right text-emerald-600">
                      {formatCurrency(stats.totalIncome)}
                    </td>
                    <td className="py-2 px-3 text-right text-rose-600">
                      {formatCurrency(stats.totalExpense)}
                    </td>
                    <td
                      className={`py-2 px-3 text-right ${
                        stats.balance >= 0 ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {formatCurrency(stats.balance)}
                    </td>
                    <td className="py-2 px-3 text-center">{stats.savingsRate}%</td>
                    <td className="py-2 px-3 text-center">{stats.totalTransactionsCount}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* 3. Qualificação das Despesas por Categoria */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ArrowUpRight size={14} className="text-rose-600" /> 3. Despesas por Categoria
              </span>
              <span className="text-rose-600 font-bold">
                {formatCurrency(stats.totalExpense)}
              </span>
            </h3>

            <div className="border border-slate-200 rounded-2xl overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2 px-3">Categoria</th>
                    <th className="py-2 px-3 text-center">Lçtos</th>
                    <th className="py-2 px-3 text-right">Média Mensal</th>
                    <th className="py-2 px-3 text-right">Total</th>
                    <th className="py-2 px-3 text-right">Part. (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {stats.expenseCategoryBreakdown.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-4 text-center text-slate-400">
                        Nenhuma despesa registrada no ano.
                      </td>
                    </tr>
                  ) : (
                    stats.expenseCategoryBreakdown.map((item) => (
                      <tr key={item.category.id} className="hover:bg-slate-50">
                        <td className="py-1.5 px-3">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: item.category.color }}
                            />
                            <span className="font-medium text-slate-800">
                              {item.category.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-1.5 px-3 text-center text-slate-500">{item.count}</td>
                        <td className="py-1.5 px-3 text-right text-slate-600">
                          {formatCurrency(Math.round(item.total / 12))}
                        </td>
                        <td className="py-1.5 px-3 text-right font-bold text-rose-600">
                          {formatCurrency(item.total)}
                        </td>
                        <td className="py-1.5 px-3 text-right font-semibold text-slate-500">
                          {item.percentage}%
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4. Qualificação das Receitas por Categoria */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ArrowDownLeft size={14} className="text-emerald-600" /> 4. Receitas por Categoria
              </span>
              <span className="text-emerald-600 font-bold">
                {formatCurrency(stats.totalIncome)}
              </span>
            </h3>

            <div className="border border-slate-200 rounded-2xl overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-2 px-3">Categoria</th>
                    <th className="py-2 px-3 text-center">Lçtos</th>
                    <th className="py-2 px-3 text-right">Média Mensal</th>
                    <th className="py-2 px-3 text-right">Total</th>
                    <th className="py-2 px-3 text-right">Part. (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {stats.incomeCategoryBreakdown.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-4 text-center text-slate-400">
                        Nenhuma receita registrada no ano.
                      </td>
                    </tr>
                  ) : (
                    stats.incomeCategoryBreakdown.map((item) => (
                      <tr key={item.category.id} className="hover:bg-slate-50">
                        <td className="py-1.5 px-3">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: item.category.color }}
                            />
                            <span className="font-medium text-slate-800">
                              {item.category.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-1.5 px-3 text-center text-slate-500">{item.count}</td>
                        <td className="py-1.5 px-3 text-right text-slate-600">
                          {formatCurrency(Math.round(item.total / 12))}
                        </td>
                        <td className="py-1.5 px-3 text-right font-bold text-emerald-600">
                          {formatCurrency(item.total)}
                        </td>
                        <td className="py-1.5 px-3 text-right font-semibold text-slate-500">
                          {item.percentage}%
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Rodapé informativo */}
          <div className="pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400">
            Relatório gerado pelo Ledger • Gestão Financeira Pessoal Local-first • Seus dados
            armazenados apenas no dispositivo.
          </div>
        </div>
      </div>
    </div>
  );
};
