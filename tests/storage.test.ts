import 'fake-indexeddb/auto';
import { describe, it, expect, beforeEach } from 'vitest';
import {
  getDB,
  resetDBConnection,
  saveTransaction,
  deleteTransaction,
  getTransactionsByMonth,
  getTransactionsByYear,
  getCategories,
  saveCategory,
  deleteCategory,
} from '../src/db/indexedDb';
import { Transaction, Category } from '../src/types/finance';
import { formatCurrency, parseCurrencyToCents } from '../src/utils/formatters';

describe('Storage & Formatters Unit Tests', () => {
  beforeEach(async () => {
    resetDBConnection();
    // Limpar stores antes de cada teste
    const db = await getDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(['transactions', 'categories'], 'readwrite');
      tx.objectStore('transactions').clear();
      tx.objectStore('categories').clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  });

  describe('Currency & Input Formatters', () => {
    it('converts number and string inputs into integer cents', () => {
      expect(parseCurrencyToCents('150,50')).toBe(15050);
      expect(parseCurrencyToCents('150.50')).toBe(15050);
      expect(parseCurrencyToCents('R$ 1.250,99')).toBe(125099);
      expect(parseCurrencyToCents(50)).toBe(5000);
      expect(parseCurrencyToCents('0')).toBe(0);
    });

    it('formats cents to Brazilian Real standard', () => {
      const formatted = formatCurrency(125050);
      // Deve conter 1.250,50 e símbolo R$
      expect(formatted).toContain('1.250,50');
      expect(formatted).toContain('R$');
    });
  });

  describe('Categories Storage', () => {
    it('adds and lists custom categories', async () => {
      const newCat: Category = {
        id: 'cat-custom-1',
        name: 'Investimentos Crypto',
        type: 'expense',
        color: '#ff0055',
        icon: 'Coins',
      };

      await saveCategory(newCat);
      const categories = await getCategories();
      expect(categories.some((c) => c.id === 'cat-custom-1' && c.name === 'Investimentos Crypto')).toBe(true);
    });

    it('deletes a category', async () => {
      const newCat: Category = {
        id: 'cat-to-delete',
        name: 'Temporária',
        type: 'expense',
        color: '#cccccc',
      };

      await saveCategory(newCat);
      let categories = await getCategories();
      expect(categories.some((c) => c.id === 'cat-to-delete')).toBe(true);

      await deleteCategory('cat-to-delete');
      categories = await getCategories();
      expect(categories.some((c) => c.id === 'cat-to-delete')).toBe(false);
    });
  });

  describe('Transactions Storage & Queries', () => {
    it('saves transactions and retrieves only those within specified month', async () => {
      const novTrans1: Transaction = {
        id: 'tx-1',
        type: 'expense',
        amount: 4500, // R$ 45,00
        date: '2026-11-05',
        categoryId: 'cat-food',
        note: 'Almoço restaurante',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      const novTrans2: Transaction = {
        id: 'tx-2',
        type: 'income',
        amount: 500000, // R$ 5.000,00
        date: '2026-11-01',
        categoryId: 'cat-salary',
        note: 'Salário empresa',
        createdAt: Date.now() + 10,
        updatedAt: Date.now() + 10,
      };

      const decTrans: Transaction = {
        id: 'tx-3',
        type: 'expense',
        amount: 12000, // R$ 120,00
        date: '2026-12-01',
        categoryId: 'cat-leisure',
        note: 'Cinema',
        createdAt: Date.now() + 20,
        updatedAt: Date.now() + 20,
      };

      await saveTransaction(novTrans1);
      await saveTransaction(novTrans2);
      await saveTransaction(decTrans);

      // Consulta novembro de 2026
      const novResults = await getTransactionsByMonth(2026, 11);
      expect(novResults).toHaveLength(2);
      expect(novResults.map((t) => t.id)).toEqual(['tx-1', 'tx-2']);

      // Consulta dezembro de 2026
      const decResults = await getTransactionsByMonth(2026, 12);
      expect(decResults).toHaveLength(1);
      expect(decResults[0].id).toBe('tx-3');

      // Consulta outubro de 2026 (sem transações)
      const octResults = await getTransactionsByMonth(2026, 10);
      expect(octResults).toHaveLength(0);

      // Consulta anual de 2026 (deve trazer novembro e dezembro)
      const yearResults = await getTransactionsByYear(2026);
      expect(yearResults).toHaveLength(3);

      // Consulta anual de 2025 (sem transações)
      const year2025Results = await getTransactionsByYear(2025);
      expect(year2025Results).toHaveLength(0);
    });

    it('deletes an existing transaction', async () => {
      const tx: Transaction = {
        id: 'tx-del',
        type: 'expense',
        amount: 1500,
        date: '2026-11-10',
        categoryId: 'cat-food',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      await saveTransaction(tx);
      let list = await getTransactionsByMonth(2026, 11);
      expect(list.some((t) => t.id === 'tx-del')).toBe(true);

      await deleteTransaction('tx-del');
      list = await getTransactionsByMonth(2026, 11);
      expect(list.some((t) => t.id === 'tx-del')).toBe(false);
    });
  });
});
