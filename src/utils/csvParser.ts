import { Category, TransactionType, RawParsedRow, ParsedCsvResult, CsvColumnMapping } from '../types/finance';
import { parseCurrencyToCents } from './formatters';

/**
 * Detecta o delimitador mais provável analisando o cabeçalho do CSV.
 */
export function detectDelimiter(headerLine: string): string {
  const counts: Record<string, number> = {
    ',': (headerLine.match(/,/g) || []).length,
    ';': (headerLine.match(/;/g) || []).length,
    '\t': (headerLine.match(/\t/g) || []).length,
  };

  let bestDelimiter = ',';
  let maxCount = -1;

  for (const [del, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      bestDelimiter = del;
    }
  }

  return maxCount > 0 ? bestDelimiter : ',';
}

/**
 * Divide uma linha CSV em colunas respeitando aspas duplas.
 */
export function parseCsvLine(line: string, delimiter: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // pula aspas duplas escapadas
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === delimiter && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }

  result.push(current.trim());
  return result;
}

/**
 * Normaliza qualquer formato de data para o padrão ISO 'YYYY-MM-DD'.
 */
export function normalizeDate(dateStr: string): string | null {
  if (!dateStr) return null;

  // Remove timestamp se houver (ex: '2026-11-01 14:30:00' -> '2026-11-01')
  const cleanDate = dateStr.trim().split(/[T\s]/)[0];

  // Caso 1: YYYY-MM-DD ou YYYY/MM/DD
  const isoMatch = cleanDate.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
  if (isoMatch) {
    const y = isoMatch[1];
    const m = isoMatch[2].padStart(2, '0');
    const d = isoMatch[3].padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  // Caso 2: DD/MM/YYYY ou DD-MM-YYYY
  const brMatch = cleanDate.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (brMatch) {
    const d = brMatch[1].padStart(2, '0');
    const m = brMatch[2].padStart(2, '0');
    const y = brMatch[3];
    return `${y}-${m}-${d}`;
  }

  // Tenta Date nativo como fallback
  const dObj = new Date(cleanDate);
  if (!isNaN(dObj.getTime())) {
    const y = dObj.getFullYear();
    const m = String(dObj.getMonth() + 1).padStart(2, '0');
    const d = String(dObj.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  return null;
}

/**
 * Identifica automaticamente os nomes de colunas correspondentes no cabeçalho.
 */
export function autoDetectColumns(headers: string[]): CsvColumnMapping {
  const normHeaders = headers.map((h) => h.toLowerCase().trim());

  const findCol = (synonyms: string[]): string => {
    for (let i = 0; i < normHeaders.length; i++) {
      const h = normHeaders[i];
      if (synonyms.some((s) => h === s || h.includes(s))) {
        return headers[i];
      }
    }
    return '';
  };

  const dateCol = findCol(['data', 'date', 'dia', 'datetime', 'data transacao', 'transaction date']);
  const amountCol = findCol(['montante', 'valor', 'amount', 'preco', 'quantia', 'total', 'value']);
  const categoryCol = findCol(['categoria', 'category', 'cat', 'category name', 'nome categoria']);
  const typeCol = findCol(['tipo', 'type', 'receita/despesa', 'despesa/receita', 'income/expense']);
  const noteCol = findCol(['nota', 'note', 'descricao', 'description', 'memo', 'obs', 'observacao', 'detalhes']);

  return {
    dateCol,
    amountCol,
    categoryCol,
    typeCol: typeCol || undefined,
    noteCol: noteCol || undefined,
  };
}

/**
 * Processa o conteúdo completo do CSV e retorna os dados estruturados e validados.
 */
export function parseCsvContent(
  csvText: string,
  existingCategories: Category[],
  customMapping?: Partial<CsvColumnMapping>
): ParsedCsvResult {
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0);

  if (lines.length === 0) {
    return {
      headers: [],
      delimiter: ',',
      totalRows: 0,
      validRows: [],
      detectedNewCategoryNames: [],
      errors: ['O arquivo CSV está vazio.'],
      totalIncomeCents: 0,
      totalExpenseCents: 0,
    };
  }

  const delimiter = detectDelimiter(lines[0]);
  const headers = parseCsvLine(lines[0], delimiter);
  const autoMap = autoDetectColumns(headers);

  const mapping: CsvColumnMapping = {
    dateCol: customMapping?.dateCol || autoMap.dateCol || headers[0] || '',
    amountCol: customMapping?.amountCol || autoMap.amountCol || headers[1] || '',
    categoryCol: customMapping?.categoryCol || autoMap.categoryCol || headers[2] || '',
    typeCol: customMapping?.typeCol || autoMap.typeCol,
    noteCol: customMapping?.noteCol || autoMap.noteCol,
  };

  const dateIdx = headers.indexOf(mapping.dateCol);
  const amountIdx = headers.indexOf(mapping.amountCol);
  const catIdx = headers.indexOf(mapping.categoryCol);
  const typeIdx = mapping.typeCol ? headers.indexOf(mapping.typeCol) : -1;
  const noteIdx = mapping.noteCol ? headers.indexOf(mapping.noteCol) : -1;
  const subCatIdx = headers.findIndex(
    (h) => h.toLowerCase().includes('subcategoria') || h.toLowerCase().includes('subcategory')
  );

  const validRows: RawParsedRow[] = [];
  const errors: string[] = [];
  const knownCatNames = new Set(existingCategories.map((c) => c.name.toLowerCase().trim()));
  const newCatNamesSet = new Set<string>();

  let totalIncomeCents = 0;
  let totalExpenseCents = 0;

  for (let i = 1; i < lines.length; i++) {
    const rawLine = lines[i];
    const cols = parseCsvLine(rawLine, delimiter);

    // Linha incompleta ou vazia
    if (cols.length < 2) continue;

    const rawDate = cols[dateIdx] || '';
    const rawAmount = cols[amountIdx] || '';
    const rawCat = cols[catIdx] || 'Geral';
    const rawType = typeIdx >= 0 ? cols[typeIdx] || '' : '';
    const rawNote = noteIdx >= 0 ? cols[noteIdx] || '' : '';

    const normalizedDate = normalizeDate(rawDate);
    if (!normalizedDate) {
      errors.push(`Linha ${i + 1}: Data inválida ("${rawDate}")`);
      continue;
    }

    // Identificação de sinal e tipo
    const isNegativeSign = rawAmount.trim().startsWith('-') || rawAmount.includes('(');
    const absAmountCents = Math.abs(parseCurrencyToCents(rawAmount));

    if (absAmountCents <= 0) {
      // Ignora lançamentos com valor zero
      continue;
    }

    let detectedType: TransactionType = 'expense';
    const lowerType = rawType.toLowerCase().trim();

    if (typeIdx >= 0 && lowerType) {
      if (lowerType.includes('receita') || lowerType.includes('income') || lowerType.includes('crédito') || lowerType.includes('credit')) {
        detectedType = 'income';
      } else {
        detectedType = 'expense';
      }
    } else {
      // Sem coluna de tipo: valor negativo = despesa, positivo = receita (ou se todos forem positivos, assume despesa padrão)
      if (isNegativeSign) {
        detectedType = 'expense';
      } else {
        // Se a coluna de categoria indicar receita (ex: salário)
        const lowerCat = rawCat.toLowerCase();
        if (lowerCat.includes('salário') || lowerCat.includes('salary') || lowerCat.includes('renda') || lowerCat.includes('rendimento')) {
          detectedType = 'income';
        } else {
          detectedType = 'expense';
        }
      }
    }

    const cleanCategoryName = rawCat.trim() || (detectedType === 'expense' ? 'Outros (Despesa)' : 'Outros (Receita)');

    if (!knownCatNames.has(cleanCategoryName.toLowerCase())) {
      newCatNamesSet.add(cleanCategoryName);
    }

    if (detectedType === 'income') {
      totalIncomeCents += absAmountCents;
    } else {
      totalExpenseCents += absAmountCents;
    }

    const rawSubCat = subCatIdx >= 0 ? cols[subCatIdx] || '' : '';
    const combinedNote = [rawSubCat.trim(), rawNote.trim()].filter(Boolean).join(' • ');

    validRows.push({
      date: normalizedDate,
      amountCents: absAmountCents,
      categoryName: cleanCategoryName,
      type: detectedType,
      note: combinedNote || undefined,
    });
  }

  return {
    headers,
    delimiter,
    totalRows: lines.length - 1,
    validRows,
    detectedNewCategoryNames: Array.from(newCatNamesSet),
    errors,
    totalIncomeCents,
    totalExpenseCents,
  };
}
