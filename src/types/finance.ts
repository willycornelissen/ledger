export type TransactionType = 'expense' | 'income';

export interface Category {
  id: string;
  name: string;
  type: TransactionType;
  color: string;
  icon?: string;
  isDefault?: boolean;
}

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number; // Armazenado em centavos (inteiro) para evitar erros de arredondamento em float
  date: string;   // ISO formato 'YYYY-MM-DD'
  categoryId: string;
  note?: string;
  createdAt: number;
  updatedAt: number;
}

export interface MonthlySummary {
  totalIncome: number;  // Em centavos
  totalExpense: number; // Em centavos
  balance: number;      // Em centavos
}

export interface DailyTransactions {
  date: string;
  dayTotal: number;
  transactions: Transaction[];
}

export interface CategorySpending {
  category: Category;
  total: number;       // Centavos
  percentage: number;  // 0 a 100
  count: number;       // Quantidade de transações
}

export interface DailyTrend {
  day: number;
  date: string;
  expense: number;     // Centavos
  income: number;      // Centavos
}

export interface MonthlyTrend {
  month: number;          // 1 a 12
  monthName: string;      // "Janeiro", "Fevereiro", etc.
  shortMonthName: string; // "Jan", "Fev", etc.
  expense: number;        // Centavos
  income: number;         // Centavos
  balance: number;        // Centavos
  savingsRate: number;    // %
  transactionCount: number;
}

export interface PeriodStats {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  savingsRate: number;        // Percentual poupado (0 a 100)
  dailyAverageExpense: number;// Centavos
  daysInMonth: number;
  categoryBreakdown: CategorySpending[];
  dailyTrends: DailyTrend[];
}

export interface AnnualStats {
  year: number;
  totalIncome: number;          // Centavos
  totalExpense: number;         // Centavos
  balance: number;              // Centavos
  savingsRate: number;          // Percentual poupado (0 a 100)
  monthlyAverageExpense: number;// Centavos
  monthlyAverageIncome: number; // Centavos
  dailyAverageExpense: number;  // Centavos
  totalTransactionsCount: number;
  daysInYear: number;
  expenseCategoryBreakdown: CategorySpending[];
  incomeCategoryBreakdown: CategorySpending[];
  monthlyTrends: MonthlyTrend[];
}

export interface CsvColumnMapping {
  dateCol: string;
  amountCol: string;
  categoryCol: string;
  typeCol?: string;
  noteCol?: string;
}

export interface RawParsedRow {
  date: string;
  amountCents: number;
  categoryName: string;
  type: TransactionType;
  note?: string;
}

export interface ParsedCsvResult {
  headers: string[];
  delimiter: string;
  totalRows: number;
  validRows: RawParsedRow[];
  detectedNewCategoryNames: string[];
  errors: string[];
  totalIncomeCents: number;
  totalExpenseCents: number;
}

export interface BackupData {
  version: number;
  exportedAt: string;
  categories: Category[];
  transactions: Transaction[];
}
