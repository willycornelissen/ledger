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

  it('switches to annual view, displays annual metrics and opens annual report modal', async () => {
    const today = new Date();
    const y = today.getFullYear();

    const txJanExpense: Transaction = {
      id: 'tx-dash-jan',
      type: 'expense',
      amount: 15000, // R$ 150,00
      date: `${y}-01-15`,
      categoryId: 'cat-food',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    const txNovExpense: Transaction = {
      id: 'tx-dash-nov',
      type: 'expense',
      amount: 35000, // R$ 350,00
      date: `${y}-11-10`,
      categoryId: 'cat-housing',
      createdAt: Date.now() + 1,
      updatedAt: Date.now() + 1,
    };

    const txIncome: Transaction = {
      id: 'tx-dash-inc',
      type: 'income',
      amount: 200000, // R$ 2.000,00
      date: `${y}-05-01`,
      categoryId: 'cat-salary',
      createdAt: Date.now() + 2,
      updatedAt: Date.now() + 2,
    };

    await saveTransaction(txJanExpense);
    await saveTransaction(txNovExpense);
    await saveTransaction(txIncome);

    render(
      <FinanceProvider>
        <DashboardView />
      </FinanceProvider>
    );

    // Encontra o botão para mudar para visão do Ano Todo
    const annualTab = await screen.findByText(new RegExp(`Ano Todo \\(${y}\\)`, 'i'));
    expect(annualTab).toBeTruthy();
    fireEvent.click(annualTab);

    // Deve exibir títulos e métricas da visão anual
    expect(await screen.findByText(new RegExp(`Ano de ${y}`, 'i'))).toBeTruthy();
    expect(screen.getByText(new RegExp(`Receitas \\(${y}\\)`, 'i'))).toBeTruthy();
    expect(screen.getByText(new RegExp(`Despesas \\(${y}\\)`, 'i'))).toBeTruthy();
    expect(screen.getByText(/Saldo Anual/i)).toBeTruthy();
    expect(screen.getByText(/Distribuição Anual/i)).toBeTruthy();

    // Deve listar as categorias de despesa do ano todo (Alimentação e Moradia)
    expect(await screen.findByText('Moradia')).toBeTruthy();
    expect(screen.getByText('Alimentação')).toBeTruthy();

    // Alterna para Receitas por Categoria no ano todo
    const incomeTab = screen.getByText(/Receitas por Categoria/i);
    fireEvent.click(incomeTab);
    expect(await screen.findByText('Salário')).toBeTruthy();

    // Abre o Modal de Relatório Anual através do botão "Exportar Relatório"
    const exportBtn = screen.getByText(/Exportar Relatório/i);
    fireEvent.click(exportBtn);

    // O modal deve estar aberto com o título e ações
    expect(await screen.findByText(new RegExp(`Relatório Financeiro Anual \\(${y}\\)`, 'i'))).toBeTruthy();
    expect(screen.getByRole('button', { name: /Imprimir \/ PDF/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Planilha CSV/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /HTML/i })).toBeTruthy();
    expect(screen.getByText(/1\. Sumário Executivo/i)).toBeTruthy();
    expect(screen.getByText(/2\. Demonstrativo Mensal/i)).toBeTruthy();
    expect(screen.getByText(/3\. Despesas por Categoria/i)).toBeTruthy();
    expect(screen.getByText(/4\. Receitas por Categoria/i)).toBeTruthy();
  });
});
