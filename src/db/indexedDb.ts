import { Category, Transaction } from '../types/finance';
import { SEED_CATEGORIES, SEED_TRANSACTIONS } from '../data/seedData';

const DB_NAME = 'finance_ledger_db';
const DB_VERSION = 1;

export const DEFAULT_CATEGORIES: Category[] = [
  // Despesas
  { id: 'cat-food', name: 'Alimentação', type: 'expense', color: '#f97316', icon: 'Utensils', isDefault: true },
  { id: 'cat-housing', name: 'Moradia', type: 'expense', color: '#3b82f6', icon: 'Home', isDefault: true },
  { id: 'cat-transport', name: 'Transporte', type: 'expense', color: '#eab308', icon: 'Car', isDefault: true },
  { id: 'cat-health', name: 'Saúde', type: 'expense', color: '#10b981', icon: 'HeartPulse', isDefault: true },
  { id: 'cat-leisure', name: 'Lazer', type: 'expense', color: '#a855f7', icon: 'Gamepad2', isDefault: true },
  { id: 'cat-education', name: 'Educação', type: 'expense', color: '#06b6d4', icon: 'GraduationCap', isDefault: true },
  { id: 'cat-other-exp', name: 'Outros (Despesa)', type: 'expense', color: '#64748b', icon: 'MoreHorizontal', isDefault: true },
  // Receitas
  { id: 'cat-salary', name: 'Salário', type: 'income', color: '#22c55e', icon: 'Briefcase', isDefault: true },
  { id: 'cat-invest', name: 'Investimentos', type: 'income', color: '#6366f1', icon: 'TrendingUp', isDefault: true },
  { id: 'cat-freelance', name: 'Freelance / Extras', type: 'income', color: '#14b8a6', icon: 'Laptop', isDefault: true },
  { id: 'cat-other-inc', name: 'Outros (Receita)', type: 'income', color: '#64748b', icon: 'Coins', isDefault: true },
];

let dbPromise: Promise<IDBDatabase> | null = null;

export function getDB(): Promise<IDBDatabase> {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Object store para transações
      if (!db.objectStoreNames.contains('transactions')) {
        const transStore = db.createObjectStore('transactions', { keyPath: 'id' });
        transStore.createIndex('date', 'date', { unique: false });
        transStore.createIndex('categoryId', 'categoryId', { unique: false });
        transStore.createIndex('type', 'type', { unique: false });
      }

      // Object store para categorias
      if (!db.objectStoreNames.contains('categories')) {
        const catStore = db.createObjectStore('categories', { keyPath: 'id' });
        catStore.createIndex('type', 'type', { unique: false });
      }
    };

    request.onsuccess = async (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      try {
        await seedDefaultCategoriesIfEmpty(db);
        await autoSeedHistoryIfEmpty(db);
        resolve(db);
      } catch (err) {
        reject(err);
      }
    };

    request.onerror = (event) => {
      reject((event.target as IDBOpenDBRequest).error);
    };
  });

  return dbPromise;
}

/**
 * Reseta o cache da promessa de conexão (útil para testes unitários).
 */
export function resetDBConnection(): void {
  dbPromise = null;
}

async function seedDefaultCategoriesIfEmpty(db: IDBDatabase): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('categories', 'readwrite');
    const store = tx.objectStore('categories');
    const countReq = store.count();

    countReq.onsuccess = () => {
      if (countReq.result === 0) {
        for (const cat of DEFAULT_CATEGORIES) {
          store.put(cat);
        }
      }
    };

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function autoSeedHistoryIfEmpty(db: IDBDatabase): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['transactions', 'categories'], 'readwrite');
    const transStore = tx.objectStore('transactions');
    const catStore = tx.objectStore('categories');
    const countReq = transStore.count();

    countReq.onsuccess = () => {
      if (countReq.result === 0) {
        for (const cat of SEED_CATEGORIES) {
          catStore.put(cat);
        }
        for (const t of SEED_TRANSACTIONS) {
          transStore.put(t);
        }
      }
    };

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Povoa ou restaura o histórico completo de 965 lançamentos do Money Ledgers.
 */
export async function seedMoneyLedgersHistory(): Promise<{ importedCount: number; categoriesCount: number }> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(['transactions', 'categories'], 'readwrite');
    const transStore = tx.objectStore('transactions');
    const catStore = tx.objectStore('categories');

    for (const cat of SEED_CATEGORIES) {
      catStore.put(cat);
    }
    for (const t of SEED_TRANSACTIONS) {
      transStore.put(t);
    }

    tx.oncomplete = () => {
      resolve({
        importedCount: SEED_TRANSACTIONS.length,
        categoriesCount: SEED_CATEGORIES.length,
      });
    };

    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Salva ou atualiza uma transação.
 */
export async function saveTransaction(transaction: Transaction): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('transactions', 'readwrite');
    const store = tx.objectStore('transactions');
    store.put(transaction);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Remove uma transação pelo ID.
 */
export async function deleteTransaction(id: string): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('transactions', 'readwrite');
    const store = tx.objectStore('transactions');
    store.delete(id);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Retorna as transações de um determinado mês e ano.
 * month: 1 a 12
 */
export async function getTransactionsByMonth(year: number, month: number): Promise<Transaction[]> {
  const db = await getDB();
  const monthStr = String(month).padStart(2, '0');
  const startDate = `${year}-${monthStr}-01`;
  // Último dia do mês
  const lastDay = new Date(year, month, 0).getDate();
  const endDate = `${year}-${monthStr}-${String(lastDay).padStart(2, '0')}`;

  return new Promise((resolve, reject) => {
    const tx = db.transaction('transactions', 'readonly');
    const store = tx.objectStore('transactions');
    const index = store.index('date');
    const range = IDBKeyRange.bound(startDate, endDate);
    const request = index.getAll(range);

    request.onsuccess = () => {
      const results = (request.result as Transaction[]) || [];
      // Ordena por data decrescente (mais recente primeiro), depois por createdAt
      results.sort((a, b) => {
        if (a.date !== b.date) {
          return b.date.localeCompare(a.date);
        }
        return b.createdAt - a.createdAt;
      });
      resolve(results);
    };

    request.onerror = () => reject(request.error);
  });
}

/**
 * Retorna as transações de um ano calendário completo.
 */
export async function getTransactionsByYear(year: number): Promise<Transaction[]> {
  const db = await getDB();
  const startDate = `${year}-01-01`;
  const endDate = `${year}-12-31`;

  return new Promise((resolve, reject) => {
    const tx = db.transaction('transactions', 'readonly');
    const store = tx.objectStore('transactions');
    const index = store.index('date');
    const range = IDBKeyRange.bound(startDate, endDate);
    const request = index.getAll(range);

    request.onsuccess = () => {
      const results = (request.result as Transaction[]) || [];
      results.sort((a, b) => {
        if (a.date !== b.date) {
          return b.date.localeCompare(a.date);
        }
        return b.createdAt - a.createdAt;
      });
      resolve(results);
    };

    request.onerror = () => reject(request.error);
  });
}

/**
 * Retorna todas as categorias cadastradas.
 */
export async function getCategories(): Promise<Category[]> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('categories', 'readonly');
    const store = tx.objectStore('categories');
    const request = store.getAll();

    request.onsuccess = () => {
      resolve((request.result as Category[]) || []);
    };

    request.onerror = () => reject(request.error);
  });
}

/**
 * Adiciona ou edita uma categoria.
 */
export async function saveCategory(category: Category): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('categories', 'readwrite');
    const store = tx.objectStore('categories');
    store.put(category);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Remove uma categoria pelo ID.
 */
export async function deleteCategory(id: string): Promise<void> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('categories', 'readwrite');
    const store = tx.objectStore('categories');
    store.delete(id);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Retorna todas as transações cadastradas (para exportação / backup).
 */
export async function getAllTransactions(): Promise<Transaction[]> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('transactions', 'readonly');
    const store = tx.objectStore('transactions');
    const request = store.getAll();

    request.onsuccess = () => {
      const results = (request.result as Transaction[]) || [];
      results.sort((a, b) => b.date.localeCompare(a.date));
      resolve(results);
    };

    request.onerror = () => reject(request.error);
  });
}

/**
 * Salva um lote de transações e novas categorias em uma única transação atômica,
 * evitando a inserção de duplicatas exatas.
 */
export async function bulkSaveTransactions(
  transactions: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>[],
  newCategories: Category[] = []
): Promise<{ importedCount: number; skippedDuplicates: number; createdCategoriesCount: number }> {
  const db = await getDB();

  return new Promise((resolve, reject) => {
    const tx = db.transaction(['transactions', 'categories'], 'readwrite');
    const transStore = tx.objectStore('transactions');
    const catStore = tx.objectStore('categories');

    // 1. Salva novas categorias
    let createdCategoriesCount = 0;
    for (const cat of newCategories) {
      catStore.put(cat);
      createdCategoriesCount++;
    }

    // 2. Busca todas as transações existentes para verificação de duplicidade
    const getAllReq = transStore.getAll();

    getAllReq.onsuccess = () => {
      const existing = (getAllReq.result as Transaction[]) || [];
      const existingKeys = new Set(
        existing.map((t) => `${t.date}_${t.amount}_${t.categoryId}_${(t.note || '').trim()}`)
      );

      let importedCount = 0;
      let skippedDuplicates = 0;
      const baseTime = Date.now();

      for (let i = 0; i < transactions.length; i++) {
        const item = transactions[i];
        const key = `${item.date}_${item.amount}_${item.categoryId}_${(item.note || '').trim()}`;

        if (existingKeys.has(key)) {
          skippedDuplicates++;
          continue;
        }

        existingKeys.add(key);

        const newTx: Transaction = {
          ...item,
          id: `tx_csv_${baseTime}_${i}_${Math.random().toString(36).substring(2, 6)}`,
          createdAt: baseTime + i,
          updatedAt: baseTime + i,
        };

        transStore.put(newTx);
        importedCount++;
      }

      tx.oncomplete = () => {
        resolve({ importedCount, skippedDuplicates, createdCategoriesCount });
      };
    };

    tx.onerror = () => reject(tx.error);
  });
}
