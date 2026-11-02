/**
 * Formata um valor em centavos para a moeda brasileira (R$ 1.250,50).
 */
export function formatCurrency(cents: number): string {
  const value = cents / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Converte uma string digitada pelo usuário ou número em centavos.
 * Ex: "150,50" -> 15050, "150.50" -> 15050
 */
export function parseCurrencyToCents(val: string | number): number {
  if (typeof val === 'number') {
    return Math.round(val * 100);
  }
  // Remove tudo exceto dígitos, vírgula e ponto
  let cleanStr = val.replace(/[^\d,.-]/g, '').trim();
  if (!cleanStr) return 0;

  if (cleanStr.includes(',')) {
    // Formato brasileiro comum: pontos são milhares, vírgula é decimal
    cleanStr = cleanStr.replace(/\./g, '').replace(',', '.');
  } else if (/\.\d{3}$/.test(cleanStr)) {
    // Formato brasileiro com ponto de milhar sem centavos (ex: 1.779, 24.775)
    cleanStr = cleanStr.replace(/\./g, '');
  }

  const parsed = parseFloat(cleanStr);
  return isNaN(parsed) ? 0 : Math.round(parsed * 100);
}

/**
 * Retorna o nome do mês e ano formatados. Ex: "Novembro de 2026"
 */
export function formatMonthYear(year: number, month: number): string {
  const date = new Date(year, month - 1, 1);
  const formatted = date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

/**
 * Formata uma data YYYY-MM-DD para exibição amigável diária.
 * Ex: "01 de Novembro — Domingo"
 */
export function formatDisplayDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  const dayName = date.toLocaleDateString('pt-BR', { weekday: 'long' });
  const dayNameCap = dayName.charAt(0).toUpperCase() + dayName.slice(1);
  const monthName = date.toLocaleDateString('pt-BR', { month: 'short' });
  const dayStr = String(day).padStart(2, '0');

  return `${dayStr} ${monthName} • ${dayNameCap}`;
}

/**
 * Retorna a data de hoje no formato YYYY-MM-DD
 */
export function getTodayDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
