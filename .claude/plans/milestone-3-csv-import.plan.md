# Plan: Personal Finance Ledger — Milestone 3: Importação do Histórico CSV

**Source PRD**: `.claude/prds/personal-finance-ledger.prd.md`  
**Selected Milestone**: Milestone 3 — Importação do Histórico CSV  
**Complexity**: Medium  

## Summary
Implementar a funcionalidade de importação de histórico via arquivo CSV (e exportação de backup). O sistema permitirá ao usuário carregar arquivos exportados do *Money Ledgers* ou de outros aplicativos financeiros, detectará automaticamente as colunas (Data, Tipo, Categoria, Valor, Nota), fornecerá tela de pré-visualização e mapeamento de categorias, e persistirá os dados com segurança no IndexedDB com prevenção de duplicidades.

## Patterns to Mirror
Seguir os padrões estabelecidos nos Marcos 1 e 2:
| Category | Source | Pattern |
|---|---|---|
| Tipagem | `src/types/finance.ts` | Valores em centavos, interfaces estritas para resultados de parsing e mapeamento |
| Helpers Puros | `src/utils/{formatters,statistics}.ts` | Algoritmos de parsing de CSV e normalização de datas/números isolados em `src/utils/csvParser.ts` |
| Persistência | `src/db/indexedDb.ts` | Transações em lote (`batch`) no IndexedDB para alta performance ao importar centenas de registros |
| Componentes | `src/components/TransactionForm.tsx` | Modais com Tailwind CSS, feedback visual de erros e pré-visualização |

## Files to Change
| File | Action | Why |
|---|---|---|
| `src/types/finance.ts` | UPDATE | Adicionar tipos `ParsedCsvRow`, `CsvImportPreview`, `CsvColumnMapping` |
| `src/utils/csvParser.ts` | CREATE | Parser de CSV tolerante a múltiplos delimitadores (`,`, `;`, `\t`), datas e formatos numéricos |
| `src/db/indexedDb.ts` | UPDATE | Adicionar método `bulkSaveTransactions` e detecção de duplicidades |
| `src/components/CsvImportModal.tsx` | CREATE | Modal com drag-and-drop de arquivo CSV, pré-visualização, mapeamento de categorias e barra de progresso |
| `src/components/BackupManagerModal.tsx` | CREATE | Modal unificado para Importação de CSV e Exportação de Backup local (JSON/CSV) |
| `src/App.tsx` | UPDATE | Adicionar botão de acesso ao gerenciador de dados/backup no cabeçalho ou navegação |
| `tests/csvParser.test.ts` | CREATE | Testes unitários para parsing de CSVs reais com diferentes delimitadores, datas e moedas |
| `tests/csvImport.test.tsx` | CREATE | Testes de integração do modal de importação e fluxo de persistência |

## Tasks
### Task 1: Parser Robusto de CSV e Normalizador de Dados
- **Action**: Desenvolver `src/utils/csvParser.ts` capaz de:
  - Detectar delimitador automaticamente (`,`, `;`, `\t`).
  - Reconhecer cabeçalhos em português e inglês (`Data`/`Date`, `Categoria`/`Category`, `Valor`/`Amount`, `Tipo`/`Type`, `Descrição`/`Note`).
  - Normalizar datas (`YYYY-MM-DD`, `DD/MM/YYYY`, `MM/DD/YYYY`).
  - Normalizar valores monetários com sinal negativo ou vírgula decimal.
- **Mirror**: Funções utilitárias puras testadas com Vitest.
- **Validate**: `tests/csvParser.test.ts`

### Task 2: Persistência em Lote (Batch) e Criação Dinâmica de Categorias
- **Action**: Implementar em `src/db/indexedDb.ts` o método `bulkSaveTransactions(transactions: Transaction[], newCategories?: Category[])` utilizando uma única transação atômica do IndexedDB para máxima performance.
- **Mirror**: Padrão de transações do IndexedDB existente.
- **Validate**: Teste de importação de 500 registros em menos de 100ms.

### Task 3: Modal de Importação com Pré-visualização e Mapeamento
- **Action**: Criar `src/components/CsvImportModal.tsx` permitindo ao usuário:
  - Selecionar ou arrastar o arquivo CSV.
  - Visualizar resumo (quantidade de receitas, despesas, valor total acumulado).
  - Ver tabela com as primeiras 5 linhas processadas.
  - Criar categorias ausentes automaticamente mantendo o nome original do CSV.
  - Confirmar a importação com barra de progresso.
- **Mirror**: Estilo modal dos componentes existentes.
- **Validate**: Testes de componente com simulação de upload de arquivo.

### Task 4: Exportação de Backup (Garantia de Não Perda de Dados)
- **Action**: Permitir ao usuário exportar todos os seus dados atuais em JSON e CSV para download local a qualquer momento.
- **Mirror**: Geração de Blob e download nativo no navegador.
- **Validate**: Teste de integridade do arquivo gerado.

### Task 5: Integração no App
- **Action**: Integrar botão de Dados & Backup no Header ou navegação e validar atualização reativa imediata do Extrato e Dashboard após a importação.
- **Validate**: `npm test && npm run build`

## Validation
```bash
npm test
npm run build
```

## Risks
| Risk | Likelihood | Mitigation |
|---|---|---|
| Formatos inesperados ou colunas com nomes personalizados | Média | Heurística inteligente de cabeçalhos + opção de mapeamento manual se alguma coluna essencial não for detectada |
| Importação repetida do mesmo arquivo | Média | Hash ou verificação de duplicidade por chave composta (data + valor + categoria + nota) |

## Acceptance
- [x] Arquivos CSV com vírgula ou ponto-e-vírgula são lidos com sucesso
- [x] Datas em formato brasileiro (DD/MM/YYYY) e ISO (YYYY-MM-DD) são reconhecidas
- [x] Pré-visualização exibe o total de transações e valores antes de gravar no banco
- [x] Categorias novas do CSV são criadas automaticamente com cores harmoniosas
- [x] Dados importados aparecem imediatamente no Extrato e no Dashboard
- [x] Opção de exportar backup funcional
- [x] Todos os testes automatizados passando e build verde
