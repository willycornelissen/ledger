# Plan: Personal Finance Ledger — Milestone 1: Core Ledger & Categorias

**Source PRD**: `.claude/prds/personal-finance-ledger.prd.md`  
**Selected Milestone**: Milestone 1 — Core Ledger & Categorias  
**Complexity**: Medium  

## Summary
Implementar o núcleo da aplicação de finanças pessoais local-first, permitindo ao usuário cadastrar, editar, excluir e visualizar receitas e despesas organizadas por categorias customizáveis, com persistência local no navegador (IndexedDB) e interface mobile-first responsiva.

## Patterns to Mirror
Como este é um repositório novo, estabelecemos os seguintes padrões para o projeto:
| Category | Source | Pattern |
|---|---|---|
| Arquitetura | `src/{components,db,types,hooks}` | Separação estrita de modelo de dados (IndexedDB), hooks de estado e componentes de UI |
| Tipagem | `src/types/index.ts` | Entidades fortemente tipadas (`Transaction`, `Category`, `Summary`) com enums/unions para tipo (`expense` / `income`) |
| Persistência | `src/db/index.ts` | IndexedDB com transações atômicas e migrações de schema versionadas |
| Testes | `tests/unit/*.test.ts` | Vitest para testes unitários de lógica de cálculo e persistência |

## Files to Change
| File | Action | Why |
|---|---|---|
| `package.json` | CREATE | Setup de dependências: Vite, React, TypeScript, Tailwind CSS, Lucide Icons, Vitest |
| `vite.config.ts` | CREATE | Configuração do bundler Vite com suporte a React |
| `tsconfig.json` | CREATE | Configuração TypeScript para React moderno |
| `tailwind.config.js` | CREATE | Configuração de design system e temas |
| `src/types/finance.ts` | CREATE | Interfaces para Transações, Categorias, Métricas |
| `src/db/storage.ts` | CREATE | Camada de persistência local em IndexedDB |
| `src/context/FinanceContext.tsx` | CREATE | Gerenciamento de estado global da aplicação |
| `src/components/TransactionForm.tsx` | CREATE | Modal/Formulário de cadastro rápido de receitas/despesas |
| `src/components/TransactionList.tsx` | CREATE | Extrato/Lista de transações com filtro mensal e agrupamento por data |
| `src/components/CategoryManager.tsx` | CREATE | Modal/Tela de gerenciamento de categorias |
| `src/components/Header.tsx` | CREATE | Seletor de período (mês/ano) e saldo rápido |
| `src/App.tsx` | CREATE | Layout principal mobile-first com abas de navegação |
| `tests/storage.test.ts` | CREATE | Testes unitários do motor de armazenamento IndexedDB |

## Tasks
### Task 1: Setup do Projeto e Tooling
- **Action**: Inicializar projeto Vite + React + TypeScript + Tailwind CSS e Vitest.
- **Mirror**: Padrão moderno Vite/React SPA.
- **Validate**: `npm run build && npm test`

### Task 2: Modelo de Dados e Camada de Persistência Local (IndexedDB)
- **Action**: Criar esquemas para `transactions` e `categories` com categorias padrão iniciais (Alimentação, Moradia, Transporte, Lazer, Salário, etc.) e operações CRUD completas.
- **Mirror**: Wrapper Promise-based para IndexedDB.
- **Validate**: Testes unitários cobrindo inserção, consulta por intervalo de datas e remoção de registros.

### Task 3: Gerenciamento de Estado e Regras de Negócio
- **Action**: Criar contexto de finanças fornecendo lista de transações filtrada por mês/ano selecionado, totais calculados e ações de cadastro/edição.
- **Mirror**: React Context com reducers tipados.
- **Validate**: Testes de cálculo de saldo mensal e agrupamento.

### Task 4: Interface de Entrada Rápida de Transações
- **Action**: Desenvolver componente de formulário otimizado para mobile com teclado numérico amigável, alternador Receita/Despesa, seletor visual de categoria e data.
- **Mirror**: Design pattern similar ao Money Ledgers.
- **Validate**: Validação de formulário com dados válidos e inválidos.

### Task 5: Extrato e Gestor de Categorias
- **Action**: Desenvolver lista de transações com badge de categoria, indicador de cor (verde para receitas, vermelho para despesas) e gerenciador de categorias personalizadas com cores e ícones.
- **Mirror**: Lista agrupada por dia com totais diários.
- **Validate**: Verificação manual da listagem e exclusão/edição.

## Validation
```bash
npm install
npm test
npm run build
```

## Risks
| Risk | Likelihood | Mitigation |
|---|---|---|
| Suporte e cotas de IndexedDB em navegadores móveis | Baixa | Utilizar persistência local padrão suportada em 100% dos navegadores modernos (Safari iOS e Chrome Android) |
| Performance com milhares de registros futuros | Baixa | Índices estruturados por campo `date` no IndexedDB para queries por mês |

## Acceptance
- [x] Projeto inicializado e compilando sem erros
- [x] Usuário consegue criar despesas e receitas com valor, data, categoria e nota
- [x] Usuário consegue criar categorias personalizadas
- [x] Transações persistem localmente após recarregar a página
- [x] Extrato mensal exibe as transações agrupadas por dia com totais corretos
- [x] Testes automatizados passando
