/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AnnualReportModal } from '../src/components/AnnualReportModal';
import { AnnualStats } from '../src/types/finance';

describe('AnnualReportModal Component Unit Tests', () => {
  const mockAnnualStats: AnnualStats = {
    year: 2026,
    totalIncome: 1200000, // R$ 12.000,00
    totalExpense: 480000, // R$ 4.800,00
    balance: 720000,      // R$ 7.200,00
    savingsRate: 60,
    monthlyAverageExpense: 40000,
    monthlyAverageIncome: 100000,
    dailyAverageExpense: 1315,
    totalTransactionsCount: 24,
    daysInYear: 365,
    expenseCategoryBreakdown: [
      {
        category: { id: 'c-food', name: 'Alimentação', type: 'expense', color: '#ff5500' },
        total: 360000,
        percentage: 75,
        count: 18,
      },
      {
        category: { id: 'c-trans', name: 'Transporte', type: 'expense', color: '#0055ff' },
        total: 120000,
        percentage: 25,
        count: 6,
      },
    ],
    incomeCategoryBreakdown: [
      {
        category: { id: 'c-sal', name: 'Salário', type: 'income', color: '#00aa00' },
        total: 1200000,
        percentage: 100,
        count: 12,
      },
    ],
    monthlyTrends: [
      {
        month: 1,
        monthName: 'Janeiro',
        shortMonthName: 'Jan',
        expense: 40000,
        income: 100000,
        balance: 60000,
        savingsRate: 60,
        transactionCount: 2,
      },
      {
        month: 2,
        monthName: 'Fevereiro',
        shortMonthName: 'Fev',
        expense: 40000,
        income: 100000,
        balance: 60000,
        savingsRate: 60,
        transactionCount: 2,
      },
      ...Array.from({ length: 10 }, (_, i) => ({
        month: i + 3,
        monthName: `Mês ${i + 3}`,
        shortMonthName: `M${i + 3}`,
        expense: 40000,
        income: 100000,
        balance: 60000,
        savingsRate: 60,
        transactionCount: 2,
      })),
    ],
  };

  it('does not render when isOpen is false', () => {
    const { container } = render(
      <AnnualReportModal isOpen={false} onClose={() => {}} stats={mockAnnualStats} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders report details and triggers print', () => {
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {});
    const onClose = vi.fn();

    render(
      <AnnualReportModal isOpen={true} onClose={onClose} stats={mockAnnualStats} />
    );

    // Header & Badge
    expect(screen.getByText(/Relatório Financeiro Anual \(2026\)/i)).toBeTruthy();
    expect(screen.getByText('Ano 2026')).toBeTruthy();

    // Summary cards and headers
    expect(screen.getAllByText('Receitas').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Despesas').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Saldo Anual')).toBeTruthy();
    expect(screen.getByText('Taxa de Poupança')).toBeTruthy();

    // Category breakdown tables
    expect(screen.getByText('Alimentação')).toBeTruthy();
    expect(screen.getByText('Transporte')).toBeTruthy();
    expect(screen.getByText('Salário')).toBeTruthy();

    // Trigger Print
    const printBtn = screen.getByRole('button', { name: /Imprimir \/ PDF/i });
    fireEvent.click(printBtn);
    expect(printSpy).toHaveBeenCalled();
    printSpy.mockRestore();

    // Close button
    const closeBtn = screen.getByLabelText(/Fechar/i);
    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  it('closes on Escape key press', () => {
    const onClose = vi.fn();
    render(<AnnualReportModal isOpen={true} onClose={onClose} stats={mockAnnualStats} />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('handles CSV and HTML downloads without error', () => {
    const createObjectURLMock = vi.fn(() => 'blob:mock-url');
    const revokeObjectURLMock = vi.fn();
    window.URL.createObjectURL = createObjectURLMock;
    window.URL.revokeObjectURL = revokeObjectURLMock;
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});

    render(
      <AnnualReportModal isOpen={true} onClose={() => {}} stats={mockAnnualStats} />
    );

    // CSV Download
    const csvBtn = screen.getByRole('button', { name: /Planilha CSV/i });
    fireEvent.click(csvBtn);
    expect(createObjectURLMock).toHaveBeenCalled();
    expect(revokeObjectURLMock).toHaveBeenCalled();
    expect(clickSpy).toHaveBeenCalled();

    // HTML Download
    const htmlBtn = screen.getByRole('button', { name: /HTML/i });
    fireEvent.click(htmlBtn);
    expect(createObjectURLMock).toHaveBeenCalledTimes(2);

    clickSpy.mockRestore();
  });
});
