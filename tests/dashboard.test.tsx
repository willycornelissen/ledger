/**
 * @vitest-environment jsdom
 */
import 'fake-indexeddb/auto';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FinanceProvider } from '../src/context/FinanceContext';
import { DashboardView } from '../src/components/DashboardView';
import { getDB, resetDBConnection, saveTransaction, saveCategory, DEFAULT_CATEGORIES } from '../src/db/indexedDb';
import { Transaction } from '../src/types/finance';

describe('DashboardView Component Integration', () => {
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

  it('renders dashboard with empty state when no transactions exist', async () => {
    render(
      <FinanceProvider>
        <DashboardView />
      </FinanceProvider>
    );

    // Deve exibir cards de economia e média diária
    expect(await screen.findByText(/Economia/i)).toBeTruthy();
    expect(screen.getByText(/Média Diária/i)).toBeTruthy();
    expect(screen.getByText(/Despesas por Categoria/i)).toBeTruthy();
    expect(screen.getByText(/Receitas por Categoria/i)).toBeTruthy();
  });

  it('renders category ranking and donut chart data when transactions exist', async () => {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    const todayStr = `${y}-${m}-${d}`;

    const txExpense: Transaction = {
      id: 'tx-dash-1',
      type: 'expense',
      amount: 10000, // R$ 100,00
      date: todayStr,
      categoryId: 'cat-food',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const txIncome: Transaction = {
      id: 'tx-dash-2',
      type: 'income',
      amount: 50000, // R$ 500,00
      date: todayStr,
      categoryId: 'cat-salary',
      createdAt: Date.now() + 1,
      updatedAt: Date.now() + 1,
    };

    await saveTransaction(txExpense);
    await saveTransaction(txIncome);

    render(
      <FinanceProvider>
        <DashboardView />
      </FinanceProvider>
    );

    // Inicialmente em Despesas: deve listar categoria Alimentação e o percentual de 100%
    const catName = await screen.findByText('Alimentação');
    expect(catName).toBeTruthy();
    expect(screen.getByText('100%')).toBeTruthy();

    // Alterna para Receitas por Categoria
    const incomeTab = screen.getByText(/Receitas por Categoria/i);
    fireEvent.click(incomeTab);

    // Deve exibir Salário e 100%
    const salaryName = await screen.findByText('Salário');
    expect(salaryName).toBeTruthy();
    expect(screen.getByText('100%')).toBeTruthy();
  });
});
