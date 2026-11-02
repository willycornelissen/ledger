/**
 * @vitest-environment jsdom
 */
import 'fake-indexeddb/auto';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FinanceProvider } from '../src/context/FinanceContext';
import { BackupManagerModal } from '../src/components/BackupManagerModal';
import {
  getDB,
  resetDBConnection,
  bulkSaveTransactions,
  getAllTransactions,
  getCategories,
  DEFAULT_CATEGORIES,
  saveCategory,
} from '../src/db/indexedDb';
import { Category } from '../src/types/finance';

describe('CSV Import & Backup Integration Tests', () => {
  beforeEach(async () => {
    resetDBConnection();
    const db = await getDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(['transactions', 'categories'], 'readwrite');
      tx.objectStore('transactions').clear();
      tx.objectStore('categories').clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });

    for (const cat of DEFAULT_CATEGORIES) {
      await saveCategory(cat);
    }
  });

  describe('bulkSaveTransactions with Duplicate Prevention', () => {
    it('saves a batch of transactions and creates missing categories', async () => {
      const newCat: Category = {
        id: 'cat-pets',
        name: 'Veterinário & Pets',
        type: 'expense',
        color: '#a855f7',
      };

      const rows = [
        {
          date: '2026-11-01',
          amount: 8000,
          type: 'expense' as const,
          categoryId: 'cat-pets',
          note: 'Ração pet',
        },
        {
          date: '2026-11-02',
          amount: 4500,
          type: 'expense' as const,
          categoryId: 'cat-food',
          note: 'Almoço',
        },
      ];

      const res = await bulkSaveTransactions(rows, [newCat]);

      expect(res.importedCount).toBe(2);
      expect(res.skippedDuplicates).toBe(0);
      expect(res.createdCategoriesCount).toBe(1);

      const allTx = await getAllTransactions();
      expect(allTx).toHaveLength(2);

      const allCats = await getCategories();
      expect(allCats.some((c) => c.id === 'cat-pets')).toBe(true);
    });

    it('skips duplicate transactions when identical rows are imported again', async () => {
      const rows = [
        {
          date: '2026-11-05',
          amount: 15000,
          type: 'expense' as const,
          categoryId: 'cat-food',
          note: 'Jantar',
        },
      ];

      // Primeira importação
      const res1 = await bulkSaveTransactions(rows);
      expect(res1.importedCount).toBe(1);
      expect(res1.skippedDuplicates).toBe(0);

      // Segunda importação idêntica
      const res2 = await bulkSaveTransactions(rows);
      expect(res2.importedCount).toBe(0);
      expect(res2.skippedDuplicates).toBe(1);

      // Total no banco continua sendo 1
      const allTx = await getAllTransactions();
      expect(allTx).toHaveLength(1);
    });
  });

  describe('BackupManagerModal UI', () => {
    it('renders all backup and import action buttons', () => {
      render(
        <FinanceProvider>
          <BackupManagerModal isOpen={true} onClose={() => {}} />
        </FinanceProvider>
      );

      expect(screen.getByText(/Carregar Histórico do Money Ledgers/i)).toBeTruthy();
      expect(screen.getByText(/Importar Outro Arquivo CSV/i)).toBeTruthy();
      expect(screen.getByText(/Exportar Backup Completo \(JSON\)/i)).toBeTruthy();
      expect(screen.getByText(/Exportar Extrato \(CSV\)/i)).toBeTruthy();
      expect(screen.getByText(/Privacidade 100% Local/i)).toBeTruthy();
    });
  });
});
