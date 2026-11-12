import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
  limit,
  writeBatch,
  type WriteBatch,
} from 'firebase/firestore';
import { db } from './firebase';
import { Category, Transaction } from '../types/finance';
import { DEFAULT_CATEGORIES } from '../db/indexedDb';
import * as idb from '../db/indexedDb';
import { SEED_CATEGORIES, SEED_TRANSACTIONS } from '../data/seedData';

/**
 * Remove campos undefined para evitar erros no Firestore.
 */
function sanitizeForFirestore<T extends Record<string, any>>(obj: T): T {
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * Executa uma lista de operações de batch particionando em blocos seguros (até 400 operações por batch).
 */
async function commitInBatches(operations: ((batch: WriteBatch) => void)[]): Promise<void> {
  const CHUNK_SIZE = 400;
  for (let i = 0; i < operations.length; i += CHUNK_SIZE) {
    const batch = writeBatch(db);
    const chunk = operations.slice(i, i + CHUNK_SIZE);
    for (const op of chunk) {
      op(batch);
    }
    await batch.commit();
  }
}

/**
 * Povoa categorias padrão caso a coleção do usuário esteja vazia.
 */
export async function seedDefaultCategories(userId: string): Promise<void> {
  const catRef = collection(db, 'users', userId, 'categories');
  const ops: ((batch: WriteBatch) => void)[] = [];
  for (const cat of DEFAULT_CATEGORIES) {
    ops.push((batch) => batch.set(doc(catRef, cat.id), sanitizeForFirestore(cat)));
  }
  await commitInBatches(ops);
}

/**
 * Retorna todas as categorias cadastradas para o usuário.
 */
export async function getCategories(userId: string): Promise<Category[]> {
  const catRef = collection(db, 'users', userId, 'categories');
  const snapshot = await getDocs(catRef);

  if (snapshot.empty) {
    await seedDefaultCategories(userId);
    return DEFAULT_CATEGORIES;
  }

  return snapshot.docs.map((d) => d.data() as Category);
}

/**
 * Adiciona ou atualiza uma categoria para o usuário.
 */
export async function saveCategory(userId: string, category: Category): Promise<void> {
  const docRef = doc(db, 'users', userId, 'categories', category.id);
  await setDoc(docRef, sanitizeForFirestore(category));
}

/**
 * Remove uma categoria pelo ID.
 */
export async function deleteCategory(userId: string, id: string): Promise<void> {
  const docRef = doc(db, 'users', userId, 'categories', id);
  await deleteDoc(docRef);
}

/**
 * Salva ou atualiza uma transação do usuário.
 */
export async function saveTransaction(userId: string, transaction: Transaction): Promise<void> {
  const docRef = doc(db, 'users', userId, 'transactions', transaction.id);
  await setDoc(docRef, sanitizeForFirestore(transaction));
}

/**
 * Exclui uma transação pelo ID.
 */
export async function deleteTransaction(userId: string, id: string): Promise<void> {
  const docRef = doc(db, 'users', userId, 'transactions', id);
  await deleteDoc(docRef);
}

/**
 * Retorna as transações de um determinado mês e ano para o usuário.
 */
export async function getTransactionsByMonth(
  userId: string,
  year: number,
  month: number
): Promise<Transaction[]> {
  const monthStr = String(month).padStart(2, '0');
  const startDate = `${year}-${monthStr}-01`;
  const lastDay = new Date(year, month, 0).getDate();
  const endDate = `${year}-${monthStr}-${String(lastDay).padStart(2, '0')}`;

  const txRef = collection(db, 'users', userId, 'transactions');
  const q = query(
    txRef,
    where('date', '>=', startDate),
    where('date', '<=', endDate)
  );

  const snapshot = await getDocs(q);
  const results = snapshot.docs.map((d) => d.data() as Transaction);

  results.sort((a, b) => {
    if (a.date !== b.date) {
      return b.date.localeCompare(a.date);
    }
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  return results;
}

/**
 * Retorna as transações de um ano calendário completo para o usuário.
 */
export async function getTransactionsByYear(
  userId: string,
  year: number
): Promise<Transaction[]> {
  const startDate = `${year}-01-01`;
  const endDate = `${year}-12-31`;

  const txRef = collection(db, 'users', userId, 'transactions');
  const q = query(
    txRef,
    where('date', '>=', startDate),
    where('date', '<=', endDate)
  );

  const snapshot = await getDocs(q);
  const results = snapshot.docs.map((d) => d.data() as Transaction);

  results.sort((a, b) => {
    if (a.date !== b.date) {
      return b.date.localeCompare(a.date);
    }
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  return results;
}

/**
 * Retorna todas as transações do usuário (para backup e exportações).
 */
export async function getAllTransactions(userId: string): Promise<Transaction[]> {
  const txRef = collection(db, 'users', userId, 'transactions');
  const snapshot = await getDocs(txRef);
  const results = snapshot.docs.map((d) => d.data() as Transaction);
  results.sort((a, b) => b.date.localeCompare(a.date));
  return results;
}

/**
 * Salva um lote de transações e novas categorias em batches no Firestore.
 */
export async function bulkSaveTransactions(
  userId: string,
  transactions: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>[],
  newCategories: Category[] = []
): Promise<{ importedCount: number; skippedDuplicates: number; createdCategoriesCount: number }> {
  const catRef = collection(db, 'users', userId, 'categories');
  const txRef = collection(db, 'users', userId, 'transactions');

  const existing = await getAllTransactions(userId);
  const existingKeys = new Set(
    existing.map((t) => `${t.date}_${t.amount}_${t.categoryId}_${(t.note || '').trim()}`)
  );

  const ops: ((batch: WriteBatch) => void)[] = [];

  let createdCategoriesCount = 0;
  for (const cat of newCategories) {
    ops.push((batch) => batch.set(doc(catRef, cat.id), sanitizeForFirestore(cat)));
    createdCategoriesCount++;
  }

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

    const existingId = (item as unknown as { id?: string }).id;
    const existingCreatedAt = (item as unknown as { createdAt?: number }).createdAt;
    const existingUpdatedAt = (item as unknown as { updatedAt?: number }).updatedAt;

    const newTx: Transaction = {
      ...item,
      id: existingId || `tx_csv_${baseTime}_${i}_${Math.random().toString(36).substring(2, 6)}`,
      createdAt: existingCreatedAt || baseTime + i,
      updatedAt: existingUpdatedAt || baseTime + i,
    };

    ops.push((batch) => batch.set(doc(txRef, newTx.id), sanitizeForFirestore(newTx)));
    importedCount++;
  }

  await commitInBatches(ops);
  return { importedCount, skippedDuplicates, createdCategoriesCount };
}

/**
 * Povoa ou restaura o histórico completo de 965 lançamentos no Firestore.
 */
export async function seedMoneyLedgersHistory(
  userId: string
): Promise<{ importedCount: number; categoriesCount: number }> {
  const catRef = collection(db, 'users', userId, 'categories');
  const txRef = collection(db, 'users', userId, 'transactions');

  const ops: ((batch: WriteBatch) => void)[] = [];
  for (const cat of SEED_CATEGORIES) {
    ops.push((batch) => batch.set(doc(catRef, cat.id), sanitizeForFirestore(cat)));
  }
  for (const t of SEED_TRANSACTIONS) {
    ops.push((batch) => batch.set(doc(txRef, t.id), sanitizeForFirestore(t)));
  }

  await commitInBatches(ops);
  return {
    importedCount: SEED_TRANSACTIONS.length,
    categoriesCount: SEED_CATEGORIES.length,
  };
}

/**
 * Migra dados automaticamente para o Firestore se a coleção de transações do usuário estiver vazia.
 * Prioriza dados existentes no IndexedDB local do dispositivo; caso vazio, importa o histórico base de 965 registros.
 */
export async function autoMigrateIfEmpty(userId: string): Promise<boolean> {
  const txRef = collection(db, 'users', userId, 'transactions');
  const q = query(txRef, limit(1));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    let localTxs: Transaction[] = [];
    let localCats: Category[] = [];
    try {
      [localTxs, localCats] = await Promise.all([
        idb.getAllTransactions(),
        idb.getCategories(),
      ]);
    } catch (e) {
      console.warn('Verificação de IndexedDB local ignorada ou indisponível:', e);
    }

    if (localTxs.length > 0) {
      await bulkSaveTransactions(userId, localTxs, localCats);
      return true;
    } else {
      await seedMoneyLedgersHistory(userId);
      return true;
    }
  }

  return false;
}
