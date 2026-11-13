/**
 * @vitest-environment jsdom
 */
import 'fake-indexeddb/auto';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { FinanceProvider } from '../src/context/FinanceContext';
import { Header } from '../src/components/Header';
import { TransactionList } from '../src/components/TransactionList';
import { getDB, resetDBConnection, saveTransaction } from '../src/db/indexedDb';
import { Transaction } from '../src/types/finance';
import { formatMonthYear } from '../src/utils/formatters';

describe('React Components Integration', () => {
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
  });

  it('renders Header with zero balance when empty', async () => {
    render(
      <FinanceProvider>
        <Header />
      </FinanceProvider>
    );

    // Saldo do Mês deve estar presente
    expect(screen.getByText(/Saldo do Mês/i)).toBeTruthy();
    expect(screen.getByText(/Receitas/i)).toBeTruthy();
    expect(screen.getByText(/Despesas/i)).toBeTruthy();
  });

  it('renders top App Bar with Ledger title and 3-dots menu', async () => {
    let backupClicked = false;
    let categoriesClicked = false;

    render(
      <FinanceProvider>
        <Header
          onOpenBackupModal={() => { backupClicked = true; }}
          onOpenCategoryModal={() => { categoriesClicked = true; }}
        />
      </FinanceProvider>
    );

    // Título Ledger e logo no topo
    expect(screen.getByRole('heading', { name: /Ledger/i })).toBeTruthy();
    expect(screen.getByText(/Diário Financeiro/i)).toBeTruthy();

    // Botão de 3 pontos
    const menuBtn = screen.getByLabelText(/Menu de opções/i);
    expect(menuBtn).toBeTruthy();

    // Clica no botão de 3 pontos para abrir opções
    fireEvent.click(menuBtn);

    expect(screen.getByText(/Dados e Backup/i)).toBeTruthy();
    expect(screen.getByText('Categorias')).toBeTruthy();
    expect(screen.getByText(/Sobre o Ledger/i)).toBeTruthy();

    // Testar clique em Dados e Backup
    fireEvent.click(screen.getByText(/Dados e Backup/i));
    expect(backupClicked).toBe(true);

    // Reabre menu e testa Categorias
    fireEvent.click(menuBtn);
    fireEvent.click(screen.getByText('Categorias'));
    expect(categoriesClicked).toBe(true);
  });

  it('renders empty state in TransactionList when no entries exist', async () => {
    render(
      <FinanceProvider>
        <TransactionList onEditTransaction={() => {}} onOpenNewTransaction={() => {}} />
      </FinanceProvider>
    );

    // Aguarda o término do loading e exibe texto amigável
    const emptyMsg = await screen.findByText(/Nenhum lançamento/i);
    expect(emptyMsg).toBeTruthy();
    expect(screen.getByText(/Adicionar Lançamento/i)).toBeTruthy();
  });

  it('renders transactions and daily summary when items are present', async () => {
    const today = new Date();
    const y = today.getFullYear();
    const m = String(today.getMonth() + 1).padStart(2, '0');
    const d = String(today.getDate()).padStart(2, '0');
    const todayStr = `${y}-${m}-${d}`;

    const tx: Transaction = {
      id: 'tx-test-1',
      type: 'expense',
      amount: 8550, // R$ 85,50
      date: todayStr,
      categoryId: 'cat-food',
      note: 'Jantar com amigos',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    await saveTransaction(tx);

    render(
      <FinanceProvider>
        <TransactionList onEditTransaction={() => {}} onOpenNewTransaction={() => {}} />
      </FinanceProvider>
    );

    // Deve exibir a nota e o valor
    const noteEl = await screen.findByText('Jantar com amigos');
    expect(noteEl).toBeTruthy();
    expect(screen.getByText(/- R\$ 85,50/i)).toBeTruthy();
  });

  it('starts on the current month even when previous months have transactions and current has none', async () => {
    const today = new Date();
    const prevDate = new Date(today.getFullYear(), today.getMonth() - 1, 15);
    const prevY = prevDate.getFullYear();
    const prevM = String(prevDate.getMonth() + 1).padStart(2, '0');
    const prevD = String(prevDate.getDate()).padStart(2, '0');

    await saveTransaction({
      id: 'tx-prev-month',
      type: 'expense',
      amount: 5000,
      date: `${prevY}-${prevM}-${prevD}`,
      categoryId: 'cat-food',
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    render(
      <FinanceProvider>
        <Header />
      </FinanceProvider>
    );

    const expectedMonthYear = formatMonthYear(today.getFullYear(), today.getMonth() + 1);
    expect(await screen.findByText(expectedMonthYear)).toBeTruthy();
    expect(screen.queryByRole('button', { name: /Mês Atual/i })).toBeNull();
  });
});
