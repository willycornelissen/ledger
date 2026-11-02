import { describe, it, expect } from 'vitest';
import {
  calculateCategoryBreakdown,
  calculateDailyTrends,
  calculateSavingsRate,
  calculatePeriodStats,
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
});
