import React, { useState, useRef } from 'react';
import { useFinance } from '../context/FinanceContext';
import { parseCsvContent } from '../utils/csvParser';
import { ParsedCsvResult, CsvColumnMapping } from '../types/finance';
import { formatCurrency } from '../utils/formatters';
import { X, UploadCloud, FileText, CheckCircle2, AlertCircle, ArrowRight, Check } from 'lucide-react';

interface CsvImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CsvImportModal: React.FC<CsvImportModalProps> = ({ isOpen, onClose }) => {
  const { categories, bulkImportTransactions } = useFinance();

  const [csvRawText, setCsvRawText] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [parsedResult, setParsedResult] = useState<ParsedCsvResult | null>(null);
  const [customMapping, setCustomMapping] = useState<Partial<CsvColumnMapping>>({});
  const [importing, setImporting] = useState<boolean>(false);
  const [importSummary, setImportSummary] = useState<{
    importedCount: number;
    skippedDuplicates: number;
    createdCategoriesCount: number;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setCsvRawText(text);
      const res = parseCsvContent(text, categories);
      setParsedResult(res);
      setCustomMapping({});
      setImportSummary(null);
    };
    reader.readAsText(file);
  };

  const handleMappingChange = (key: keyof CsvColumnMapping, value: string) => {
    const updatedMapping = { ...customMapping, [key]: value };
    setCustomMapping(updatedMapping);
    if (csvRawText) {
      const reParsed = parseCsvContent(csvRawText, categories, updatedMapping);
      setParsedResult(reParsed);
    }
  };

  const handleConfirmImport = async () => {
    if (!parsedResult || parsedResult.validRows.length === 0) return;

    try {
      setImporting(true);
      const res = await bulkImportTransactions(parsedResult.validRows);
      setImportSummary(res);
    } catch (err) {
      console.error(err);
      alert('Erro ao importar arquivo CSV.');
    } finally {
      setImporting(false);
    }
  };

  const handleReset = () => {
    setCsvRawText('');
    setFileName('');
    setParsedResult(null);
    setImportSummary(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
      <div className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <UploadCloud size={20} className="text-blue-600" />
            <h2 className="text-lg font-bold text-slate-800">Importar Histórico CSV</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Sucesso na importação */}
          {importSummary ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={36} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Importação Concluída!</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  Seus dados financeiros anteriores foram sincronizados com sucesso no banco local.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-2 max-w-sm mx-auto text-left">
                <div className="flex justify-between">
                  <span className="text-slate-500">Lançamentos importados:</span>
                  <span className="font-bold text-emerald-600">
                    +{importSummary.importedCount}
                  </span>
                </div>
                {importSummary.skippedDuplicates > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Duplicados ignorados:</span>
                    <span className="font-bold text-slate-600">
                      {importSummary.skippedDuplicates}
                    </span>
                  </div>
                )}
                {importSummary.createdCategoriesCount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Novas categorias criadas:</span>
                    <span className="font-bold text-blue-600">
                      +{importSummary.createdCategoriesCount}
                    </span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition"
                >
                  Importar Outro Arquivo
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : !parsedResult ? (
            /* Upload inicial */
            <div className="space-y-4">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-2xl p-8 text-center cursor-pointer transition bg-slate-50/50 hover:bg-blue-50/20 group"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".csv,text/csv"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="w-14 h-14 bg-blue-50 text-blue-600 group-hover:scale-110 rounded-2xl flex items-center justify-center mx-auto mb-3 transition shadow-xs">
                  <UploadCloud size={28} />
                </div>
                <h4 className="text-sm font-bold text-slate-800">
                  Clique para selecionar o arquivo CSV
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                  Exportado do Money Ledgers, Excel ou outro aplicativo financeiro.
                </p>
                <div className="mt-4 inline-block bg-white border border-slate-200 px-3 py-1 rounded-full text-[11px] font-semibold text-slate-600 shadow-xs">
                  Formatos suportados: CSV com vírgula ou ponto-e-vírgula
                </div>
              </div>
            </div>
          ) : (
            /* Prévia e Mapeamento de Colunas */
            <div className="space-y-4">
              {/* Arquivo selecionado */}
              <div className="flex items-center justify-between p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs">
                <div className="flex items-center gap-2 text-blue-800 font-semibold truncate">
                  <FileText size={16} />
                  <span className="truncate">{fileName}</span>
                </div>
                <button
                  onClick={handleReset}
                  className="text-blue-600 hover:text-blue-800 font-medium shrink-0 ml-2"
                >
                  Trocar
                </button>
              </div>

              {/* Métricas resumidas */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Linhas</div>
                  <div className="text-base font-bold text-slate-800">
                    {parsedResult.validRows.length}
                  </div>
                </div>
                <div className="p-2.5 bg-rose-50/60 rounded-xl border border-rose-100">
                  <div className="text-[10px] uppercase font-bold text-rose-500">Despesas</div>
                  <div className="text-xs font-bold text-rose-600 truncate mt-0.5">
                    {formatCurrency(parsedResult.totalExpenseCents)}
                  </div>
                </div>
                <div className="p-2.5 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <div className="text-[10px] uppercase font-bold text-emerald-500">Receitas</div>
                  <div className="text-xs font-bold text-emerald-600 truncate mt-0.5">
                    {formatCurrency(parsedResult.totalIncomeCents)}
                  </div>
                </div>
              </div>

              {/* Alerta de novas categorias */}
              {parsedResult.detectedNewCategoryNames.length > 0 && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-start gap-2">
                  <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">
                      {parsedResult.detectedNewCategoryNames.length} novas categorias encontradas:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {parsedResult.detectedNewCategoryNames.map((name) => (
                        <span
                          key={name}
                          className="bg-white/80 border border-amber-200 px-1.5 py-0.5 rounded text-[10px] font-semibold"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Mapeamento de Colunas */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <div className="text-xs font-bold text-slate-700">Mapeamento das Colunas</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <label className="text-[10px] text-slate-500 block mb-0.5">COLUNA DATA</label>
                    <select
                      value={customMapping.dateCol || parsedResult.headers[0]}
                      onChange={(e) => handleMappingChange('dateCol', e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-medium"
                    >
                      {parsedResult.headers.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 block mb-0.5">COLUNA VALOR</label>
                    <select
                      value={customMapping.amountCol || parsedResult.headers[1]}
                      onChange={(e) => handleMappingChange('amountCol', e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-medium"
                    >
                      {parsedResult.headers.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 block mb-0.5">CATEGORIA</label>
                    <select
                      value={customMapping.categoryCol || parsedResult.headers[2]}
                      onChange={(e) => handleMappingChange('categoryCol', e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-medium"
                    >
                      {parsedResult.headers.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 block mb-0.5">TIPO (OPCIONAL)</label>
                    <select
                      value={customMapping.typeCol || ''}
                      onChange={(e) => handleMappingChange('typeCol', e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-800 font-medium"
                    >
                      <option value="">Auto (pelo sinal)</option>
                      {parsedResult.headers.map((h) => (
                        <option key={h} value={h}>
                          {h}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Tabela de Amostra das primeiras linhas */}
              <div>
                <div className="text-xs font-bold text-slate-700 mb-1.5">
                  Amostra dos Lançamentos (primeiras 5 linhas)
                </div>
                <div className="border border-slate-200 rounded-xl overflow-x-auto max-h-36">
                  <table className="w-full text-[11px] text-left">
                    <thead className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200 sticky top-0">
                      <tr>
                        <th className="p-2">Data</th>
                        <th className="p-2">Tipo</th>
                        <th className="p-2">Categoria</th>
                        <th className="p-2 text-right">Valor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {parsedResult.validRows.slice(0, 5).map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-2 text-slate-600 whitespace-nowrap">{row.date}</td>
                          <td className="p-2">
                            <span
                              className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                                row.type === 'income'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-rose-100 text-rose-700'
                              }`}
                            >
                              {row.type === 'income' ? 'Receita' : 'Despesa'}
                            </span>
                          </td>
                          <td className="p-2 font-medium text-slate-800 truncate max-w-[120px]">
                            {row.categoryName}
                          </td>
                          <td className="p-2 text-right font-semibold text-slate-900 whitespace-nowrap">
                            {formatCurrency(row.amountCents)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Botão de Ação */}
              <div className="pt-2">
                <button
                  onClick={handleConfirmImport}
                  disabled={importing || parsedResult.validRows.length === 0}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition"
                >
                  {importing ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  ) : (
                    <>
                      <Check size={18} />
                      Confirmar Importação ({parsedResult.validRows.length} lançamentos)
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
