# Plan: Personal Finance Ledger — Milestone 2: Dashboard de Estatísticas & Gráficos

**Source PRD**: `.claude/prds/personal-finance-ledger.prd.md`  
**Selected Milestone**: Milestone 2 — Dashboard de Estatísticas & Gráficos  
**Complexity**: Medium  

## Summary
Implementar um painel analítico completo (Dashboard de Estatísticas & Gráficos) integrado à aplicação. O usuário poderá alternar entre a visão de Extrato e a visão de Estatísticas na barra de navegação, visualizando gráficos de distribuição de gastos por categoria (gráfico donut interativo em SVG), ranking de despesas com percentuais, tendências diárias do mês e métricas consolidadas (incluindo taxa de economia).

## Patterns to Mirror
Seguir os padrões estabelecidos no Marco 1:
| Category | Source | Pattern |
|---|---|---|
| Tipagem | `src/types/finance.ts` | Modelos de dados imutáveis e valores monetários inteiros em centavos |
| Helpers Puros | `src/utils/formatters.ts` | Funções de cálculo e formatação isoladas e altamente testáveis em `src/utils/statistics.ts` |
| Componentes UI | `src/components/Header.tsx` | Componentes funcionais modulares com Tailwind CSS e paleta de cores consistente |
| Testes | `tests/storage.test.ts` | Testes automatizados com Vitest cobrindo cálculos analíticos e renderização de gráficos |

## Files to Change
| File | Action | Why |
|---|---|---|
| `src/types/finance.ts` | UPDATE | Adicionar interfaces para `CategorySpending`, `DailyTrend` e `PeriodStats` |
| `src/utils/statistics.ts` | CREATE | Funções puras para agregação de despesas por categoria, percentuais e evolução temporal |
| `src/components/DonutChart.tsx` | CREATE | Gráfico Donut interativo em SVG puro (zero dependência, alta performance, responsivo) |
| `src/components/TrendBarChart.tsx` | CREATE | Gráfico de barras com a evolução diária dos gastos no mês |
| `src/components/DashboardView.tsx` | CREATE | Tela principal do Dashboard com alternador Despesas/Receitas, gráficos e ranking |
| `src/App.tsx` | UPDATE | Integração da aba "Estatísticas" na navegação inferior e alternância de views |
| `tests/statistics.test.ts` | CREATE | Testes unitários para cálculos de agregação, percentuais e tendências diárias |
| `tests/dashboard.test.tsx` | CREATE | Teste de integração do Dashboard e gráficos com React Testing Library |

## Tasks
### Task 1: Módulos de Cálculo e Tipagem Analítica
- **Action**: Criar `src/utils/statistics.ts` com funções puras para calcular totais por categoria, percentual sobre o total gasto, taxa de economia e agregação por dia do mês.
- **Mirror**: Padrão funcional de `src/utils/formatters.ts`.
- **Validate**: Testes unitários em `tests/statistics.test.ts`.

### Task 2: Componente Gráfico Donut SVG
- **Action**: Desenvolver `src/components/DonutChart.tsx` com renderização matemática de arcos SVG (`stroke-dasharray`), centro com valor total e destaque visual ao passar o mouse ou tocar em uma fatia.
- **Mirror**: Design limpo e responsivo com Tailwind CSS.
- **Validate**: Teste de renderização com diferentes distribuições de categorias.

### Task 3: Componente Gráfico de Barras de Tendência Diária
- **Action**: Desenvolver `src/components/TrendBarChart.tsx` exibindo barras verticais para os dias do mês, destacando dias com maior volume de gastos.
- **Mirror**: Layout mobile-friendly com tooltips de data e valor.
- **Validate**: Testes com dias com e sem transações.

### Task 4: View Principal do Dashboard e Ranking de Categorias
- **Action**: Desenvolver `src/components/DashboardView.tsx` unindo o DonutChart, lista detalhada com barra de progresso por categoria (nome, valor, percentual, contagem de transações) e gráfico de tendência.
- **Mirror**: Estilo dos cards do `src/components/Header.tsx`.
- **Validate**: Testes de componente verificando cálculo correto de percentuais e alternância de abas.

### Task 5: Navegação e Integração no App
- **Action**: Atualizar `src/App.tsx` para gerenciar a visão ativa (`'ledger' | 'dashboard'`) através da barra de navegação inferior com ícones dedicados.
- **Mirror**: Navegação mobile-first existente.
- **Validate**: `npm run build && npm test`

## Validation
```bash
npm test
npm run build
```

## Risks
| Risk | Likelihood | Mitigation |
|---|---|---|
| Meses sem transações ou com despesas zeradas | Baixa | Tratamento defensivo para divisão por zero e estado visual amigável "Sem dados para o período" |
| Legibilidade de muitas categorias no gráfico de pizza | Média | Agrupar categorias menores no Donut Chart e exibir lista detalhada com ranking abaixo |

## Acceptance
- [x] Usuário consegue acessar a aba "Estatísticas" na barra de navegação inferior
- [x] Gráfico Donut exibe a fatia proporcional de cada categoria de despesa com as cores correspondentes
- [x] Lista exibe o ranking das categorias com valor gasto e percentual do mês
- [x] Gráfico de barras temporal exibe os gastos dia a dia
- [x] É possível alternar entre estatísticas de Despesas e de Receitas
- [x] Todos os testes automatizados passando e build verde
