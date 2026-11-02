import { Category, Transaction, TransactionType, CategorySpending, DailyTrend, PeriodStats } from '../types/finance';

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
 * Calcula a taxa de economia (savings rate): % da renda não gasta.
 */
export function calculateSavingsRate(totalIncome: number, totalExpense: number): number {
  if (totalIncome <= 0) return 0;
  const saved = totalIncome - totalExpense;
  return Math.round((saved / totalIncome) * 100);
}

/**
 * Consolida todas as métricas analíticas do período.
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
