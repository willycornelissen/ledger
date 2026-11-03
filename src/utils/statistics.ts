import {
  Category,
  Transaction,
  TransactionType,
  CategorySpending,
  DailyTrend,
  MonthlyTrend,
  PeriodStats,
  AnnualStats,
} from '../types/finance';

export const MONTH_NAMES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const MONTH_SHORT_NAMES = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Agrupa as transações por categoria para um determinado tipo (despesa ou receita)
 * e calcula o total, percentual e quantidade de lançamentos.
 */
export function calculateCategoryBreakdown(
  transactions: Transaction[],
  categories: Category[],
  type: TransactionType
): CategorySpending[] {
  const filtered = transactions.filter((t) => t.type === type);
  const grandTotal = filtered.reduce((acc, t) => acc + t.amount, 0);

  const categoryMap = new Map<string, Category>(categories.map((c) => [c.id, c]));

  // Agrupamento por categoryId
  const totalsByCat = new Map<string, { total: number; count: number }>();

  for (const t of filtered) {
    const existing = totalsByCat.get(t.categoryId) || { total: 0, count: 0 };
    totalsByCat.set(t.categoryId, {
      total: existing.total + t.amount,
      count: existing.count + 1,
    });
  }

  const results: CategorySpending[] = [];

  for (const [catId, data] of totalsByCat.entries()) {
    let category = categoryMap.get(catId);
    if (!category) {
      category = {
        id: catId,
        name: 'Outros',
        type,
        color: '#94a3b8',
      };
    }

    const percentage = grandTotal > 0 ? Math.round((data.total / grandTotal) * 1000) / 10 : 0;

    results.push({
      category,
      total: data.total,
      percentage,
      count: data.count,
    });
  }

  // Ordena do maior valor para o menor
  results.sort((a, b) => b.total - a.total);

  return results;
}

/**
 * Agrupa as despesas e receitas para cada dia do mês calendário informado.
 */
export function calculateDailyTrends(
  year: number,
  month: number,
  transactions: Transaction[]
): DailyTrend[] {
  const daysInMonth = new Date(year, month, 0).getDate();
  const monthStr = String(month).padStart(2, '0');

  const dailyMap = new Map<number, { expense: number; income: number }>();
  for (let d = 1; d <= daysInMonth; d++) {
    dailyMap.set(d, { expense: 0, income: 0 });
  }

  for (const t of transactions) {
    const [tY, tM, tD] = t.date.split('-').map(Number);
    if (tY === year && tM === month && dailyMap.has(tD)) {
      const current = dailyMap.get(tD)!;
      if (t.type === 'expense') {
        current.expense += t.amount;
      } else {
        current.income += t.amount;
      }
    }
  }

  const trends: DailyTrend[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const data = dailyMap.get(d)!;
    const dayStr = String(d).padStart(2, '0');
    trends.push({
      day: d,
      date: `${year}-${monthStr}-${dayStr}`,
      expense: data.expense,
      income: data.income,
    });
  }

  return trends;
}

/**
 * Agrupa as despesas e receitas para cada mês do ano calendário informado (1 a 12).
 */
export function calculateMonthlyTrends(
  year: number,
  transactions: Transaction[]
): MonthlyTrend[] {
  const monthlyData: { expense: number; income: number; count: number }[] = Array.from(
    { length: 12 },
    () => ({ expense: 0, income: 0, count: 0 })
  );

  for (const t of transactions) {
    const [tY, tM] = t.date.split('-').map(Number);
    if (tY === year && tM >= 1 && tM <= 12) {
      const idx = tM - 1;
      monthlyData[idx].count += 1;
      if (t.type === 'expense') {
        monthlyData[idx].expense += t.amount;
      } else {
        monthlyData[idx].income += t.amount;
      }
    }
  }

  return monthlyData.map((data, idx) => {
    const month = idx + 1;
    const balance = data.income - data.expense;
    const savingsRate = calculateSavingsRate(data.income, data.expense);
    return {
      month,
      monthName: MONTH_NAMES[idx],
      shortMonthName: MONTH_SHORT_NAMES[idx],
      expense: data.expense,
      income: data.income,
      balance,
      savingsRate,
      transactionCount: data.count,
    };
  });
}

/**
 * Calcula a taxa de economia (savings rate): % da renda não gasta.
 */
export function calculateSavingsRate(totalIncome: number, totalExpense: number): number {
  if (totalIncome <= 0) return 0;
  const saved = totalIncome - totalExpense;
  return Math.round((saved / totalIncome) * 100);
}

/**
 * Consolida todas as métricas analíticas do período mensal.
 */
export function calculatePeriodStats(
  year: number,
  month: number,
  transactions: Transaction[],
  categories: Category[],
  type: TransactionType = 'expense'
): PeriodStats {
  const daysInMonth = new Date(year, month, 0).getDate();

  let totalIncome = 0;
  let totalExpense = 0;

  for (const t of transactions) {
    if (t.type === 'income') {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;
    }
  }

  const balance = totalIncome - totalExpense;
  const savingsRate = calculateSavingsRate(totalIncome, totalExpense);
  const dailyAverageExpense = daysInMonth > 0 ? Math.round(totalExpense / daysInMonth) : 0;
  const categoryBreakdown = calculateCategoryBreakdown(transactions, categories, type);
  const dailyTrends = calculateDailyTrends(year, month, transactions);

  return {
    totalIncome,
    totalExpense,
    balance,
    savingsRate,
    dailyAverageExpense,
    daysInMonth,
    categoryBreakdown,
    dailyTrends,
  };
}

/**
 * Consolida todas as métricas analíticas de um ano completo, totalizando e qualificando
 * por categoria as despesas e receitas do ano.
 */
export function calculateAnnualStats(
  year: number,
  transactions: Transaction[],
  categories: Category[]
): AnnualStats {
  const yearTransactions = transactions.filter((t) => {
    const [tY] = t.date.split('-').map(Number);
    return tY === year;
  });

  let totalIncome = 0;
  let totalExpense = 0;

  for (const t of yearTransactions) {
    if (t.type === 'income') {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;
    }
  }

  const balance = totalIncome - totalExpense;
  const savingsRate = calculateSavingsRate(totalIncome, totalExpense);
  const daysInYear = isLeapYear(year) ? 366 : 365;

  const monthlyAverageExpense = Math.round(totalExpense / 12);
  const monthlyAverageIncome = Math.round(totalIncome / 12);
  const dailyAverageExpense = Math.round(totalExpense / daysInYear);

  const expenseCategoryBreakdown = calculateCategoryBreakdown(
    yearTransactions,
    categories,
    'expense'
  );
  const incomeCategoryBreakdown = calculateCategoryBreakdown(
    yearTransactions,
    categories,
    'income'
  );
  const monthlyTrends = calculateMonthlyTrends(year, yearTransactions);

  return {
    year,
    totalIncome,
    totalExpense,
    balance,
    savingsRate,
    monthlyAverageExpense,
    monthlyAverageIncome,
    dailyAverageExpense,
    totalTransactionsCount: yearTransactions.length,
    daysInYear,
    expenseCategoryBreakdown,
    incomeCategoryBreakdown,
    monthlyTrends,
  };
}

function formatCsvAmount(cents: number): string {
  return (cents / 100).toFixed(2).replace('.', ',');
}

function formatCurrencyStr(cents: number): string {
  const val = cents / 100;
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
}

/**
 * Gera um relatório estatístico anual estruturado em formato CSV com codificação UTF-8 BOM.
 */
export function generateAnnualReportCsv(stats: AnnualStats): string {
  const lines: string[] = [];

  lines.push('RELATÓRIO FINANCEIRO ANUAL - LEDGER');
  lines.push(`Ano de Referência;${stats.year}`);
  lines.push(`Total de Lançamentos;${stats.totalTransactionsCount}`);
  lines.push(`Dias no Ano;${stats.daysInYear}`);
  lines.push('');

  lines.push('--- SUMÁRIO EXECUTIVO ---');
  lines.push('Indicador;Valor');
  lines.push(`Receitas Totais (R$);${formatCsvAmount(stats.totalIncome)}`);
  lines.push(`Despesas Totais (R$);${formatCsvAmount(stats.totalExpense)}`);
  lines.push(`Saldo Anual Líquido (R$);${formatCsvAmount(stats.balance)}`);
  lines.push(`Taxa de Economia Anual;${stats.savingsRate}%`);
  lines.push(`Média Mensal de Receitas (R$);${formatCsvAmount(stats.monthlyAverageIncome)}`);
  lines.push(`Média Mensal de Despesas (R$);${formatCsvAmount(stats.monthlyAverageExpense)}`);
  lines.push(`Gasto Médio Diário (R$);${formatCsvAmount(stats.dailyAverageExpense)}`);
  lines.push('');

  lines.push('--- DEMONSTRATIVO MENSAL (EVOLUÇÃO) ---');
  lines.push('Mês;Receitas (R$);Despesas (R$);Saldo (R$);Poupança (%);Lançamentos');
  for (const m of stats.monthlyTrends) {
    lines.push(
      `${m.monthName};${formatCsvAmount(m.income)};${formatCsvAmount(m.expense)};${formatCsvAmount(
        m.balance
      )};${m.savingsRate}%;${m.transactionCount}`
    );
  }
  lines.push(
    `TOTAL DO ANO;${formatCsvAmount(stats.totalIncome)};${formatCsvAmount(
      stats.totalExpense
    )};${formatCsvAmount(stats.balance)};${stats.savingsRate}%;${stats.totalTransactionsCount}`
  );
  lines.push('');

  lines.push('--- DESPESAS POR CATEGORIA ---');
  lines.push('Categoria;Qtd Lançamentos;Média Mensal (R$);Total (R$);Participação (%)');
  for (const c of stats.expenseCategoryBreakdown) {
    const monthlyAvg = Math.round(c.total / 12);
    lines.push(
      `"${c.category.name.replace(/"/g, '""')}";${c.count};${formatCsvAmount(
        monthlyAvg
      )};${formatCsvAmount(c.total)};${c.percentage.toFixed(1).replace('.', ',')}%`
    );
  }
  lines.push(
    `TOTAL DESPESAS;${stats.expenseCategoryBreakdown.reduce((acc, c) => acc + c.count, 0)};${formatCsvAmount(
      stats.monthlyAverageExpense
    )};${formatCsvAmount(stats.totalExpense)};100,0%`
  );
  lines.push('');

  lines.push('--- RECEITAS POR CATEGORIA ---');
  lines.push('Categoria;Qtd Lançamentos;Média Mensal (R$);Total (R$);Participação (%)');
  for (const c of stats.incomeCategoryBreakdown) {
    const monthlyAvg = Math.round(c.total / 12);
    lines.push(
      `"${c.category.name.replace(/"/g, '""')}";${c.count};${formatCsvAmount(
        monthlyAvg
      )};${formatCsvAmount(c.total)};${c.percentage.toFixed(1).replace('.', ',')}%`
    );
  }
  lines.push(
    `TOTAL RECEITAS;${stats.incomeCategoryBreakdown.reduce((acc, c) => acc + c.count, 0)};${formatCsvAmount(
      stats.monthlyAverageIncome
    )};${formatCsvAmount(stats.totalIncome)};100,0%`
  );

  return '\uFEFF' + lines.join('\n');
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Gera um relatório HTML autocontido e pronto para visualização e impressão (PDF).
 */
export function generateAnnualReportHtml(stats: AnnualStats): string {
  const emissionDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const expenseRows = stats.expenseCategoryBreakdown
    .map(
      (c) => `
      <tr>
        <td><strong>${escapeHtml(c.category.name)}</strong></td>
        <td style="text-align: center;">${c.count}</td>
        <td style="text-align: right;">${formatCurrencyStr(Math.round(c.total / 12))}</td>
        <td style="text-align: right; font-weight: bold; color: #e11d48;">${formatCurrencyStr(c.total)}</td>
        <td style="text-align: right;">${c.percentage.toFixed(1)}%</td>
      </tr>`
    )
    .join('');

  const incomeRows = stats.incomeCategoryBreakdown
    .map(
      (c) => `
      <tr>
        <td><strong>${escapeHtml(c.category.name)}</strong></td>
        <td style="text-align: center;">${c.count}</td>
        <td style="text-align: right;">${formatCurrencyStr(Math.round(c.total / 12))}</td>
        <td style="text-align: right; font-weight: bold; color: #059669;">${formatCurrencyStr(c.total)}</td>
        <td style="text-align: right;">${c.percentage.toFixed(1)}%</td>
      </tr>`
    )
    .join('');

  const monthlyRows = stats.monthlyTrends
    .map(
      (m) => `
      <tr>
        <td><strong>${escapeHtml(m.monthName)}</strong></td>
        <td style="text-align: right; color: #059669;">${formatCurrencyStr(m.income)}</td>
        <td style="text-align: right; color: #e11d48;">${formatCurrencyStr(m.expense)}</td>
        <td style="text-align: right; font-weight: bold; color: ${m.balance >= 0 ? '#059669' : '#e11d48'};">
          ${formatCurrencyStr(m.balance)}
        </td>
        <td style="text-align: center;">${m.savingsRate}%</td>
        <td style="text-align: center;">${m.transactionCount}</td>
      </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Relatório Financeiro Anual ${stats.year} - Ledger</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1e293b; background: #f8fafc; margin: 0; padding: 24px; }
    .report-card { max-width: 800px; margin: 0 auto; background: #ffffff; padding: 32px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 24px; }
    .logo-title { display: flex; align-items: center; gap: 12px; }
    h1 { font-size: 22px; margin: 0; color: #0f172a; }
    .subtitle { font-size: 13px; color: #64748b; margin-top: 4px; }
    .meta-badge { background: #eff6ff; color: #2563eb; padding: 6px 14px; border-radius: 9999px; font-weight: bold; font-size: 13px; border: 1px solid #bfdbfe; }
    .summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
    .stat-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; }
    .stat-label { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 600; letter-spacing: 0.05em; }
    .stat-val { font-size: 18px; font-weight: bold; margin-top: 6px; }
    .val-income { color: #059669; }
    .val-expense { color: #e11d48; }
    .val-neutral { color: #0f172a; }
    h2 { font-size: 15px; text-transform: uppercase; letter-spacing: 0.05em; color: #334155; margin-top: 28px; margin-bottom: 12px; border-left: 4px solid #2563eb; padding-left: 8px; }
    table { width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 16px; }
    th { background: #f1f5f9; color: #475569; text-align: left; padding: 10px 12px; border: 1px solid #e2e8f0; font-weight: 600; }
    td { padding: 9px 12px; border: 1px solid #e2e8f0; }
    tr:nth-child(even) { background: #f8fafc; }
    .tfoot-total { font-weight: bold; background: #f1f5f9; }
    .footer { text-align: center; margin-top: 36px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; }
    @media print {
      body { background: #fff; padding: 0; }
      .report-card { border: none; box-shadow: none; padding: 0; max-width: 100%; }
      @page { margin: 1.5cm; }
    }
  </style>
</head>
<body>
  <div class="report-card">
    <div class="header">
      <div class="logo-title">
        <div>
          <h1>Ledger — Relatório Financeiro Anual</h1>
          <div class="subtitle">Demonstrativo consolidado de despesas e receitas • Emitido em ${emissionDate}</div>
        </div>
      </div>
      <div class="meta-badge">Ano ${stats.year}</div>
    </div>

    <div class="summary-grid">
      <div class="stat-box">
        <div class="stat-label">Receitas do Ano</div>
        <div class="stat-val val-income">${formatCurrencyStr(stats.totalIncome)}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Despesas do Ano</div>
        <div class="stat-val val-expense">${formatCurrencyStr(stats.totalExpense)}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Saldo Anual</div>
        <div class="stat-val ${stats.balance >= 0 ? 'val-income' : 'val-expense'}">${formatCurrencyStr(stats.balance)}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Taxa de Economia</div>
        <div class="stat-val val-neutral">${stats.savingsRate}%</div>
      </div>
    </div>

    <h2>1. Evolução Mês a Mês (${stats.year})</h2>
    <table>
      <thead>
        <tr>
          <th>Mês</th>
          <th style="text-align: right;">Receitas</th>
          <th style="text-align: right;">Despesas</th>
          <th style="text-align: right;">Saldo</th>
          <th style="text-align: center;">Poupança</th>
          <th style="text-align: center;">Lançamentos</th>
        </tr>
      </thead>
      <tbody>
        ${monthlyRows}
      </tbody>
      <tfoot>
        <tr class="tfoot-total">
          <td>TOTAL DO ANO</td>
          <td style="text-align: right; color: #059669;">${formatCurrencyStr(stats.totalIncome)}</td>
          <td style="text-align: right; color: #e11d48;">${formatCurrencyStr(stats.totalExpense)}</td>
          <td style="text-align: right; color: ${stats.balance >= 0 ? '#059669' : '#e11d48'};">${formatCurrencyStr(stats.balance)}</td>
          <td style="text-align: center;">${stats.savingsRate}%</td>
          <td style="text-align: center;">${stats.totalTransactionsCount}</td>
        </tr>
      </tfoot>
    </table>

    <h2>2. Qualificação das Despesas por Categoria</h2>
    <table>
      <thead>
        <tr>
          <th>Categoria</th>
          <th style="text-align: center;">Lançamentos</th>
          <th style="text-align: right;">Média Mensal</th>
          <th style="text-align: right;">Total Anual</th>
          <th style="text-align: right;">Participação</th>
        </tr>
      </thead>
      <tbody>
        ${expenseRows || '<tr><td colspan="5" style="text-align:center;color:#94a3b8;">Nenhuma despesa registrada no ano</td></tr>'}
      </tbody>
      <tfoot>
        <tr class="tfoot-total">
          <td>TOTAL DESPESAS</td>
          <td style="text-align: center;">${stats.expenseCategoryBreakdown.reduce((acc, c) => acc + c.count, 0)}</td>
          <td style="text-align: right;">${formatCurrencyStr(stats.monthlyAverageExpense)}</td>
          <td style="text-align: right; color: #e11d48;">${formatCurrencyStr(stats.totalExpense)}</td>
          <td style="text-align: right;">100%</td>
        </tr>
      </tfoot>
    </table>

    <h2>3. Qualificação das Receitas por Categoria</h2>
    <table>
      <thead>
        <tr>
          <th>Categoria</th>
          <th style="text-align: center;">Lançamentos</th>
          <th style="text-align: right;">Média Mensal</th>
          <th style="text-align: right;">Total Anual</th>
          <th style="text-align: right;">Participação</th>
        </tr>
      </thead>
      <tbody>
        ${incomeRows || '<tr><td colspan="5" style="text-align:center;color:#94a3b8;">Nenhuma receita registrada no ano</td></tr>'}
      </tbody>
      <tfoot>
        <tr class="tfoot-total">
          <td>TOTAL RECEITAS</td>
          <td style="text-align: center;">${stats.incomeCategoryBreakdown.reduce((acc, c) => acc + c.count, 0)}</td>
          <td style="text-align: right;">${formatCurrencyStr(stats.monthlyAverageIncome)}</td>
          <td style="text-align: right; color: #059669;">${formatCurrencyStr(stats.totalIncome)}</td>
          <td style="text-align: right;">100%</td>
        </tr>
      </tfoot>
    </table>

    <div class="footer">
      Relatório gerado automaticamente pelo Ledger • Diário Financeiro Pessoal Local-first
    </div>
  </div>
</body>
</html>`;
}
