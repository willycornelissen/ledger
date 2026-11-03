import { describe, it, expect } from 'vitest';
import {
  calculateCategoryBreakdown,
  calculateDailyTrends,
  calculateMonthlyTrends,
  calculateSavingsRate,
  calculatePeriodStats,
  calculateAnnualStats,
  isLeapYear,
  generateAnnualReportCsv,
  generateAnnualReportHtml,
} from '../src/utils/statistics';
import { Category, Transaction } from '../src/types/finance';

describe('Statistics Utilities Unit Tests', () => {
  const mockCategories: Category[] = [
    { id: 'cat-food', name: 'Alimentação', type: 'expense', color: '#ff0000' },
    { id: 'cat-transport', name: 'Transporte', type: 'expense', color: '#00ff00' },
    { id: 'cat-salary', name: 'Salário', type: 'income', color: '#0000ff' },
  ];

  const mockTransactions: Transaction[] = [
    {
      id: '1',
      type: 'expense',
      amount: 15000, // R$ 150,00
      date: '2026-11-05',
      categoryId: 'cat-food',
      createdAt: 1,
      updatedAt: 1,
    },
    {
      id: '2',
      type: 'expense',
      amount: 5000, // R$ 50,00
      date: '2026-11-05',
      categoryId: 'cat-transport',
      createdAt: 2,
      updatedAt: 2,
    },
    {
      id: '3',
      type: 'expense',
      amount: 5000, // R$ 50,00
      date: '2026-11-12',
      categoryId: 'cat-food',
      createdAt: 3,
      updatedAt: 3,
    },
    {
      id: '4',
      type: 'income',
      amount: 100000, // R$ 1.000,00
      date: '2026-11-01',
      categoryId: 'cat-salary',
      createdAt: 4,
      updatedAt: 4,
    },
  ];

  const multiMonthTransactions: Transaction[] = [
    ...mockTransactions,
    {
      id: '5',
      type: 'expense',
      amount: 20000, // R$ 200,00
      date: '2026-03-10',
      categoryId: 'cat-food',
      createdAt: 5,
      updatedAt: 5,
    },
    {
      id: '6',
      type: 'income',
      amount: 150000, // R$ 1.500,00
      date: '2026-03-05',
      categoryId: 'cat-salary',
      createdAt: 6,
      updatedAt: 6,
    },
    {
      id: '7',
      type: 'expense',
      amount: 10000, // R$ 100,00 de outro ano (2025)
      date: '2025-12-20',
      categoryId: 'cat-food',
      createdAt: 7,
      updatedAt: 7,
    },
  ];

  describe('isLeapYear', () => {
    it('identifies leap years correctly', () => {
      expect(isLeapYear(2024)).toBe(true);
      expect(isLeapYear(2026)).toBe(false);
      expect(isLeapYear(2000)).toBe(true);
      expect(isLeapYear(1900)).toBe(false);
    });
  });

  describe('calculateCategoryBreakdown', () => {
    it('aggregates expenses by category and calculates percentages correctly', () => {
      // Total de despesas = 150 + 50 + 50 = 250 (25000 centavos)
      // Alimentação = 200 (20000 centavos) -> 80%
      // Transporte = 50 (5000 centavos) -> 20%
      const breakdown = calculateCategoryBreakdown(mockTransactions, mockCategories, 'expense');

      expect(breakdown).toHaveLength(2);
      expect(breakdown[0].category.id).toBe('cat-food');
      expect(breakdown[0].total).toBe(20000);
      expect(breakdown[0].percentage).toBe(80);
      expect(breakdown[0].count).toBe(2);

      expect(breakdown[1].category.id).toBe('cat-transport');
      expect(breakdown[1].total).toBe(5000);
      expect(breakdown[1].percentage).toBe(20);
      expect(breakdown[1].count).toBe(1);
    });

    it('returns empty array when there are no transactions for given type', () => {
      const breakdown = calculateCategoryBreakdown([], mockCategories, 'expense');
      expect(breakdown).toEqual([]);
    });
  });

  describe('calculateSavingsRate', () => {
    it('calculates savings percentage when income > expense', () => {
      // Ganhou 1000, gastou 250 -> economizou 750 (75%)
      expect(calculateSavingsRate(100000, 25000)).toBe(75);
    });

    it('returns negative percentage when expense > income', () => {
      // Ganhou 1000, gastou 1200 -> -20%
      expect(calculateSavingsRate(100000, 120000)).toBe(-20);
    });

    it('returns 0 when income is 0', () => {
      expect(calculateSavingsRate(0, 5000)).toBe(0);
    });
  });

  describe('calculateDailyTrends', () => {
    it('returns all days of month with accurate daily totals', () => {
      // Novembro tem 30 dias
      const trends = calculateDailyTrends(2026, 11, mockTransactions);
      expect(trends).toHaveLength(30);

      // Dia 5 deve ter despesa de 15000 + 5000 = 20000
      const day5 = trends.find((t) => t.day === 5);
      expect(day5?.expense).toBe(20000);
      expect(day5?.income).toBe(0);

      // Dia 1 deve ter receita de 100000
      const day1 = trends.find((t) => t.day === 1);
      expect(day1?.income).toBe(100000);
      expect(day1?.expense).toBe(0);

      // Dia 10 não teve transações
      const day10 = trends.find((t) => t.day === 10);
      expect(day10?.expense).toBe(0);
      expect(day10?.income).toBe(0);
    });
  });

  describe('calculateMonthlyTrends', () => {
    it('returns 12 months with accurate month-by-month totals for the given year', () => {
      const trends = calculateMonthlyTrends(2026, multiMonthTransactions);
      expect(trends).toHaveLength(12);

      // Mês 3 (Março): expense = 20000, income = 150000, balance = 130000
      const mar = trends.find((t) => t.month === 3);
      expect(mar).toBeDefined();
      expect(mar?.monthName).toBe('Março');
      expect(mar?.shortMonthName).toBe('Mar');
      expect(mar?.expense).toBe(20000);
      expect(mar?.income).toBe(150000);
      expect(mar?.balance).toBe(130000);
      expect(mar?.transactionCount).toBe(2);

      // Mês 11 (Novembro): expense = 25000, income = 100000, balance = 75000
      const nov = trends.find((t) => t.month === 11);
      expect(nov).toBeDefined();
      expect(nov?.monthName).toBe('Novembro');
      expect(nov?.expense).toBe(25000);
      expect(nov?.income).toBe(100000);
      expect(nov?.balance).toBe(75000);
      expect(nov?.transactionCount).toBe(4);

      // Mês 1 (Janeiro): 0
      const jan = trends.find((t) => t.month === 1);
      expect(jan?.expense).toBe(0);
      expect(jan?.income).toBe(0);
      expect(jan?.transactionCount).toBe(0);
    });
  });

  describe('calculatePeriodStats', () => {
    it('consolidates all monthly metrics', () => {
      const stats = calculatePeriodStats(2026, 11, mockTransactions, mockCategories, 'expense');
      expect(stats.totalIncome).toBe(100000);
      expect(stats.totalExpense).toBe(25000);
      expect(stats.balance).toBe(75000);
      expect(stats.savingsRate).toBe(75);
      expect(stats.daysInMonth).toBe(30);
      expect(stats.dailyAverageExpense).toBe(Math.round(25000 / 30));
      expect(stats.categoryBreakdown).toHaveLength(2);
      expect(stats.dailyTrends).toHaveLength(30);
    });
  });

  describe('calculateAnnualStats', () => {
    it('consolidates all annual statistics, filtering by current year only', () => {
      const stats = calculateAnnualStats(2026, multiMonthTransactions, mockCategories);

      expect(stats.year).toBe(2026);
      // Total income in 2026: 100000 + 150000 = 250000
      expect(stats.totalIncome).toBe(250000);
      // Total expense in 2026: 25000 + 20000 = 45000 (ignoring 2025 transaction)
      expect(stats.totalExpense).toBe(45000);
      expect(stats.balance).toBe(205000);
      expect(stats.savingsRate).toBe(calculateSavingsRate(250000, 45000));
      expect(stats.totalTransactionsCount).toBe(6);
      expect(stats.daysInYear).toBe(365);
      expect(stats.monthlyAverageExpense).toBe(Math.round(45000 / 12));
      expect(stats.monthlyAverageIncome).toBe(Math.round(250000 / 12));
      expect(stats.dailyAverageExpense).toBe(Math.round(45000 / 365));

      // Despesas qualificadas por categoria
      expect(stats.expenseCategoryBreakdown).toHaveLength(2);
      expect(stats.expenseCategoryBreakdown[0].category.id).toBe('cat-food');
      expect(stats.expenseCategoryBreakdown[0].total).toBe(40000); // 15000 + 5000 + 20000

      // Receitas qualificadas por categoria
      expect(stats.incomeCategoryBreakdown).toHaveLength(1);
      expect(stats.incomeCategoryBreakdown[0].category.id).toBe('cat-salary');
      expect(stats.incomeCategoryBreakdown[0].total).toBe(250000);

      // Tendências mensais
      expect(stats.monthlyTrends).toHaveLength(12);
    });
  });

  describe('Report Generation Utilities', () => {
    it('generates a valid CSV report containing executive summary and category qualifications', () => {
      const stats = calculateAnnualStats(2026, multiMonthTransactions, mockCategories);
      const csv = generateAnnualReportCsv(stats);

      expect(csv.startsWith('\uFEFF')).toBe(true);
      expect(csv).toContain('RELATÓRIO FINANCEIRO ANUAL - LEDGER');
      expect(csv).toContain('Ano de Referência;2026');
      expect(csv).toContain('Receitas Totais (R$);2500,00');
      expect(csv).toContain('Despesas Totais (R$);450,00');
      expect(csv).toContain('--- DESPESAS POR CATEGORIA ---');
      expect(csv).toContain('"Alimentação"');
      expect(csv).toContain('"Transporte"');
      expect(csv).toContain('--- RECEITAS POR CATEGORIA ---');
      expect(csv).toContain('"Salário"');
      expect(csv).toContain('--- DEMONSTRATIVO MENSAL (EVOLUÇÃO) ---');
      expect(csv).toContain('Março');
      expect(csv).toContain('Novembro');
    });

    it('generates a valid HTML report with styled markup and tables', () => {
      const stats = calculateAnnualStats(2026, multiMonthTransactions, mockCategories);
      const html = generateAnnualReportHtml(stats);

      expect(html).toContain('<!DOCTYPE html>');
      expect(html).toContain('Relatório Financeiro Anual 2026 - Ledger');
      expect(html).toContain('Alimentação');
      expect(html).toContain('Salário');
      expect(html).toContain('Evolução Mês a Mês');
      expect(html).toContain('Qualificação das Despesas por Categoria');
      expect(html).toContain('Qualificação das Receitas por Categoria');
    });

    it('escapes dangerous HTML characters in category names to prevent XSS in HTML report', () => {
      const maliciousCategories: Category[] = [
        {
          id: 'cat-xss',
          name: '<script>alert("xss")</script>&"\'',
          type: 'expense',
          color: '#ff0000',
        },
      ];
      const maliciousTx: Transaction[] = [
        {
          id: 'tx-xss',
          type: 'expense',
          amount: 5000,
          date: '2026-06-15',
          categoryId: 'cat-xss',
          createdAt: 1,
          updatedAt: 1,
        },
      ];
      const stats = calculateAnnualStats(2026, maliciousTx, maliciousCategories);
      const html = generateAnnualReportHtml(stats);

      expect(html).not.toContain('<script>alert("xss")</script>');
      expect(html).toContain('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;&amp;&quot;&#039;');
    });
  });
});
