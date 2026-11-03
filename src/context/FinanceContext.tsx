import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { Category, Transaction, MonthlySummary, DailyTransactions, RawParsedRow, BackupData } from '../types/finance';
import {
  getTransactionsByMonth,
  getTransactionsByYear,
  saveTransaction,
  deleteTransaction,
  getCategories,
  saveCategory,
  deleteCategory,
  getAllTransactions,
  bulkSaveTransactions,
  seedMoneyLedgersHistory,
} from '../db/indexedDb';

interface FinanceContextType {
  currentYear: number;
  currentMonth: number;
  setCurrentMonthYear: (year: number, month: number) => void;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  goToCurrentMonth: () => void;
  transactions: Transaction[];
  yearTransactions: Transaction[];
  dailyTransactions: DailyTransactions[];
  categories: Category[];
  summary: MonthlySummary;
  loading: boolean;
  addTransaction: (data: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateTransaction: (transaction: Transaction) => Promise<void>;
  removeTransaction: (id: string) => Promise<void>;
  addCategory: (category: Omit<Category, 'id'>) => Promise<void>;
  updateCategory: (category: Category) => Promise<void>;
  removeCategory: (id: string) => Promise<void>;
  bulkImportTransactions: (rawRows: RawParsedRow[]) => Promise<{
    importedCount: number;
    skippedDuplicates: number;
    createdCategoriesCount: number;
  }>;
  restoreMoneyLedgersHistory: () => Promise<{
    importedCount: number;
    categoriesCount: number;
  }>;
  exportBackupJson: () => Promise<void>;
  exportCsvData: () => Promise<void>;
  getTransactionsForYear: (year: number) => Promise<Transaction[]>;
  refreshData: () => Promise<void>;
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined);

const PALETTE = ['#f97316', '#3b82f6', '#10b981', '#a855f7', '#06b6d4', '#eab308', '#ec4899', '#6366f1'];

export const FinanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth() + 1);

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [yearTransactions, setYearTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      const [txList, yearTxList, catList] = await Promise.all([
        getTransactionsByMonth(currentYear, currentMonth),
        getTransactionsByYear(currentYear),
        getCategories(),
      ]);
      setTransactions(txList);
      setYearTransactions(yearTxList);
      setCategories(catList);
    } catch (err) {
      console.error('Erro ao carregar dados do IndexedDB:', err);
    } finally {
      setLoading(false);
    }
  }, [currentYear, currentMonth]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const setCurrentMonthYear = useCallback((year: number, month: number) => {
    setCurrentYear(year);
    setCurrentMonth(month);
  }, []);

  const goToPreviousMonth = useCallback(() => {
    if (currentMonth === 1) {
      setCurrentYear((y) => y - 1);
      setCurrentMonth(12);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  }, [currentMonth]);

  const goToNextMonth = useCallback(() => {
    if (currentMonth === 12) {
      setCurrentYear((y) => y + 1);
      setCurrentMonth(1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  }, [currentMonth]);

  const goToCurrentMonth = useCallback(() => {
    const now = new Date();
    setCurrentYear(now.getFullYear());
    setCurrentMonth(now.getMonth() + 1);
  }, []);

  const addTransactionHandler = useCallback(
    async (data: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => {
      const id = 'tx_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
      const now = Date.now();
      const newTx: Transaction = {
        ...data,
        id,
        createdAt: now,
        updatedAt: now,
      };
      await saveTransaction(newTx);
      await loadData();
    },
    [loadData]
  );

  const updateTransactionHandler = useCallback(
    async (transaction: Transaction) => {
      const updatedTx: Transaction = {
        ...transaction,
        updatedAt: Date.now(),
      };
      await saveTransaction(updatedTx);
      await loadData();
    },
    [loadData]
  );

  const removeTransactionHandler = useCallback(
    async (id: string) => {
      await deleteTransaction(id);
      await loadData();
    },
    [loadData]
  );

  const addCategoryHandler = useCallback(
    async (data: Omit<Category, 'id'>) => {
      const id = 'cat_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
      const newCat: Category = {
        ...data,
        id,
      };
      await saveCategory(newCat);
      await loadData();
    },
    [loadData]
  );

  const updateCategoryHandler = useCallback(
    async (category: Category) => {
      await saveCategory(category);
      await loadData();
    },
    [loadData]
  );

  const removeCategoryHandler = useCallback(
    async (id: string) => {
      await deleteCategory(id);
      await loadData();
    },
    [loadData]
  );

  const bulkImportTransactionsHandler = useCallback(
    async (rawRows: RawParsedRow[]) => {
      const existingCats = await getCategories();
      const catMap = new Map<string, Category>();
      for (const c of existingCats) {
        catMap.set(c.name.toLowerCase().trim(), c);
      }

      const newCategoriesToSave: Category[] = [];
      let colorIndex = 0;

      for (const row of rawRows) {
        const lowerName = row.categoryName.toLowerCase().trim();
        if (!catMap.has(lowerName)) {
          const newCat: Category = {
            id: `cat_imported_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
            name: row.categoryName,
            type: row.type,
            color: PALETTE[colorIndex % PALETTE.length],
            icon: row.type === 'income' ? 'Coins' : 'ShoppingBag',
          };
          colorIndex++;
          catMap.set(lowerName, newCat);
          newCategoriesToSave.push(newCat);
        }
      }

      const transactionsToSave: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>[] = rawRows.map(
        (r) => {
          const cat = catMap.get(r.categoryName.toLowerCase().trim());
          return {
            type: r.type,
            amount: r.amountCents,
            date: r.date,
            categoryId: cat ? cat.id : 'cat-other-exp',
            note: r.note,
          };
        }
      );

      const result = await bulkSaveTransactions(transactionsToSave, newCategoriesToSave);
      await loadData();
      return result;
    },
    [loadData]
  );

  const restoreMoneyLedgersHistoryHandler = useCallback(async () => {
    const res = await seedMoneyLedgersHistory();
    await loadData();
    return res;
  }, [loadData]);

  const exportBackupJsonHandler = useCallback(async () => {
    const [allTx, allCats] = await Promise.all([getAllTransactions(), getCategories()]);
    const data: BackupData = {
      version: 1,
      exportedAt: new Date().toISOString(),
      categories: allCats,
      transactions: allTx,
    };

    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `finance-ledger-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const exportCsvDataHandler = useCallback(async () => {
    const [allTx, allCats] = await Promise.all([getAllTransactions(), getCategories()]);
    const catMap = new Map(allCats.map((c) => [c.id, c.name]));

    const headers = ['Data', 'Tipo', 'Categoria', 'Valor (R$)', 'Observacao'];
    const rows = allTx.map((t) => [
      t.date,
      t.type === 'income' ? 'Receita' : 'Despesa',
      catMap.get(t.categoryId) || 'Outros',
      (t.amount / 100).toFixed(2).replace('.', ','),
      `"${(t.note || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(';'), ...rows.map((r) => r.join(';'))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `finance-ledger-extrato-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  const getTransactionsForYearHandler = useCallback(
    async (year: number) => {
      if (year === currentYear && yearTransactions.length > 0) {
        return yearTransactions;
      }
      return await getTransactionsByYear(year);
    },
    [currentYear, yearTransactions]
  );

  // Totais mensais
  const summary: MonthlySummary = useMemo(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    for (const t of transactions) {
      if (t.type === 'income') {
        totalIncome += t.amount;
      } else {
        totalExpense += t.amount;
      }
    }

    return {
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
    };
  }, [transactions]);

  // Agrupamento por dia (mais recente primeiro)
  const dailyTransactions: DailyTransactions[] = useMemo(() => {
    const map = new Map<string, Transaction[]>();

    for (const t of transactions) {
      const existing = map.get(t.date) || [];
      existing.push(t);
      map.set(t.date, existing);
    }

    const sortedDates = Array.from(map.keys()).sort((a, b) => b.localeCompare(a));

    return sortedDates.map((date) => {
      const items = map.get(date)!;
      const dayTotal = items.reduce((acc, cur) => {
        return cur.type === 'income' ? acc + cur.amount : acc - cur.amount;
      }, 0);

      return {
        date,
        dayTotal,
        transactions: items,
      };
    });
  }, [transactions]);

  const value = {
    currentYear,
    currentMonth,
    setCurrentMonthYear,
    goToPreviousMonth,
    goToNextMonth,
    goToCurrentMonth,
    transactions,
    yearTransactions,
    dailyTransactions,
    categories,
    summary,
    loading,
    addTransaction: addTransactionHandler,
    updateTransaction: updateTransactionHandler,
    removeTransaction: removeTransactionHandler,
    addCategory: addCategoryHandler,
    updateCategory: updateCategoryHandler,
    removeCategory: removeCategoryHandler,
    bulkImportTransactions: bulkImportTransactionsHandler,
    restoreMoneyLedgersHistory: restoreMoneyLedgersHistoryHandler,
    exportBackupJson: exportBackupJsonHandler,
    exportCsvData: exportCsvDataHandler,
    getTransactionsForYear: getTransactionsForYearHandler,
    refreshData: loadData,
  };

  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>;
};

export function useFinance(): FinanceContextType {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance deve ser utilizado dentro de um FinanceProvider');
  }
  return context;
}
