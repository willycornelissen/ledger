import fs from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';
import {
  detectDelimiter,
  parseCsvLine,
  normalizeDate,
  autoDetectColumns,
  parseCsvContent,
} from '../src/utils/csvParser';
import { Category } from '../src/types/finance';

describe('CSV Parser Unit Tests', () => {
  const existingCategories: Category[] = [
    { id: 'cat-food', name: 'Alimentação', type: 'expense', color: '#ff0000' },
    { id: 'cat-salary', name: 'Salário', type: 'income', color: '#00ff00' },
  ];

  describe('detectDelimiter', () => {
    it('detects comma delimiter', () => {
      expect(detectDelimiter('Date,Category,Amount,Note')).toBe(',');
    });

    it('detects semicolon delimiter', () => {
      expect(detectDelimiter('Data;Categoria;Valor;Observação')).toBe(';');
    });

    it('detects tab delimiter', () => {
      expect(detectDelimiter("Data\tCategoria\tValor\tNota")).toBe('\t');
    });
  });

  describe('parseCsvLine', () => {
    it('splits fields correctly and preserves quoted commas', () => {
      const line = '2026-11-01,"Almoço, restaurante e café",45.50,Alimentação';
      const parsed = parseCsvLine(line, ',');
      expect(parsed).toEqual(['2026-11-01', 'Almoço, restaurante e café', '45.50', 'Alimentação']);
    });
  });

  describe('normalizeDate', () => {
    it('normalizes ISO YYYY-MM-DD', () => {
      expect(normalizeDate('2026-11-05')).toBe('2026-11-05');
      expect(normalizeDate('2026/11/05 14:30')).toBe('2026-11-05');
    });

    it('normalizes Brazilian DD/MM/YYYY', () => {
      expect(normalizeDate('05/11/2026')).toBe('2026-11-05');
      expect(normalizeDate('25/12/2026')).toBe('2026-12-25');
    });

    it('returns null on invalid date', () => {
      expect(normalizeDate('invalid-date')).toBeNull();
      expect(normalizeDate('')).toBeNull();
    });
  });

  describe('autoDetectColumns', () => {
    it('detects Portuguese headers', () => {
      const headers = ['Data', 'Valor', 'Categoria', 'Tipo', 'Nota'];
      const map = autoDetectColumns(headers);
      expect(map.dateCol).toBe('Data');
      expect(map.amountCol).toBe('Valor');
      expect(map.categoryCol).toBe('Categoria');
      expect(map.typeCol).toBe('Tipo');
      expect(map.noteCol).toBe('Nota');
    });

    it('detects English headers', () => {
      const headers = ['Date', 'Category', 'Amount', 'Type', 'Description'];
      const map = autoDetectColumns(headers);
      expect(map.dateCol).toBe('Date');
      expect(map.amountCol).toBe('Amount');
      expect(map.categoryCol).toBe('Category');
      expect(map.typeCol).toBe('Type');
      expect(map.noteCol).toBe('Description');
    });
  });

  describe('parseCsvContent', () => {
    it('parses Money Ledgers / standard CSV file successfully', () => {
      const csv = `Date,Category,Amount,Type,Note
2026-11-01,Alimentação,150.50,Expense,Supermercado
2026-11-02,Salário,5000.00,Income,Salário mensal
2026-11-03,Veterinário,200.00,Expense,Consulta Pet`;

      const result = parseCsvContent(csv, existingCategories);

      expect(result.errors).toHaveLength(0);
      expect(result.validRows).toHaveLength(3);
      expect(result.totalExpenseCents).toBe(35050); // 150.50 + 200.00 = 350.50 -> 35050
      expect(result.totalIncomeCents).toBe(500000); // 5000.00 -> 500000
      expect(result.detectedNewCategoryNames).toEqual(['Veterinário']);

      expect(result.validRows[0]).toEqual({
        date: '2026-11-01',
        amountCents: 15050,
        categoryName: 'Alimentação',
        type: 'expense',
        note: 'Supermercado',
      });
    });

    it('parses semicolon CSV with Brazilian format and currency symbols', () => {
      const csv = `Data;Categoria;Valor;Tipo;Observação
05/11/2026;Transporte;R$ 45,50;Despesa;Uber
10/11/2026;Freelance;R$ 1.200,00;Receita;Projeto Web`;

      const result = parseCsvContent(csv, existingCategories);

      expect(result.delimiter).toBe(';');
      expect(result.validRows).toHaveLength(2);
      expect(result.validRows[0].date).toBe('2026-11-05');
      expect(result.validRows[0].amountCents).toBe(4550);
      expect(result.validRows[1].date).toBe('2026-11-10');
      expect(result.validRows[1].amountCents).toBe(120000);
      expect(result.detectedNewCategoryNames).toContain('Transporte');
      expect(result.detectedNewCategoryNames).toContain('Freelance');
    });

    it('successfully parses the actual Money Ledgers export file', () => {
      const filePath = path.resolve(__dirname, '../EXPORT_2026_11_01_09_50_02.csv');
      const csv = fs.readFileSync(filePath, 'utf-8');
      const result = parseCsvContent(csv, existingCategories);

      expect(result.errors).toHaveLength(0);
      expect(result.validRows.length).toBe(965);
      expect(result.totalExpenseCents).toBeGreaterThan(0);
      expect(result.totalIncomeCents).toBeGreaterThan(0);
      expect(result.detectedNewCategoryNames).toContain('Uber');
      expect(result.detectedNewCategoryNames).toContain('Comida');
    });
  });
});
