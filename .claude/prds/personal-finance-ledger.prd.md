# Personal Finance Ledger (Gerenciador Financeiro Local)

## Problem
O usuário atualmente paga uma assinatura mensal recorrente por um aplicativo móvel (Money Ledgers) para registrar e monitorar despesas e receitas pessoais. Esse custo recorrente é desnecessário para funcionalidades essenciais de controle financeiro que podem ser operadas inteiramente de forma local e offline.

## Evidence
- O usuário possui hábito consolidado e utiliza ativamente o aplicativo [Money Ledgers](https://play.google.com/store/apps/details?id=com.ktwtechnologies.moneyledgers).
- Pagamento mensal ativo de assinatura por um serviço cujos dados poderiam ser mantidos sob posse exclusiva do usuário.
- O histórico financeiro existente pode ser exportado em formato CSV pelo app atual para migração.

## Users
- **Primary**: O próprio usuário (indivíduo gerenciando suas finanças pessoais no dia a dia com necessidade de entrada rápida e visualização clara de gráficos e métricas).
- **Not for**: Usuários corporativos, casais ou grupos com necessidade de contabilidade compartilhada/sincronização multi-dispositivo em tempo real, ou pessoas que dependem exclusivamente de conexões bancárias automatizadas (Open Finance).

## Hypothesis
Acreditamos que **uma aplicação local e independente de gestão financeira (iniciada como web para validação de interface e portada para execução local no celular)** vai **eliminar o custo recorrente de assinatura mantendo a facilidade de registro e análise financeira** para **o usuário**.
Saberemos que estamos certos quando **o usuário cancelar a assinatura do app atual e utilizar exclusivamente este aplicativo por 30 dias consecutivos sem perda de histórico financeiro**.

## Success Metrics
| Metric | Target | How measured |
|---|---|---|
| Substituição do app pago | 30 dias consecutivos | Registro diário contínuo exclusivo no novo app sem retorno ao Money Ledgers |
| Eliminação de custo | 100% da mensalidade | Cancelamento confirmado da assinatura do Money Ledgers |
| Integridade dos dados | 0 perdas de registros | Histórico CSV importado com sucesso e conferido contra o saldo real |

## Scope
**MVP**
- Entrada manual de receitas e despesas (valor, data, categoria e anotação/descrição).
- Gestão de categorias customizadas.
- Extrato/histórico de lançamentos com filtro por período (mês/ano).
- Dashboard consolidado com totais (entradas, saídas, balanço líquido) e gráficos de distribuição por categoria.
- Armazenamento 100% local, sem dependência de serviços em nuvem ou custos recorrentes.
- Importação do CSV exportado do Money Ledgers para continuidade do histórico.

**Out of scope**
- Sincronização em nuvem e contas com login multi-dispositivo — adicionaria custos de infraestrutura e complexidade desnecessária.
- Integração bancária automática (Open Finance / leitura de SMS / push) — evita dependência de APIs instáveis e quebra do modelo local-first.
- Gestão complexa de parcelamento futuro e fechamento de faturas de cartão de crédito — diferido para fases posteriores.
- Compartilhamento multi-usuário ou suporte a múltiplas moedas.

## Delivery Milestones
<!-- Business outcomes, not engineering tasks. /plan turns each into a plan. -->
<!-- Status: pending | in-progress | complete -->

| # | Milestone | Outcome | Status | Plan |
|---|---|---|---|---|
| 1 | Core Ledger & Categorias | Usuário consegue cadastrar, editar e visualizar suas receitas e despesas organizadas por categoria com persistência local | complete | [.claude/plans/personal-finance-ledger.plan.md](file:///home/willy/Sandbox/df/.claude/plans/personal-finance-ledger.plan.md) |
| 2 | Dashboard de Estatísticas & Gráficos | Usuário visualiza resumo mensal consolidado e gráficos analíticos de gastos por categoria | complete | [.claude/plans/milestone-2-dashboard-stats.plan.md](file:///home/willy/Sandbox/df/.claude/plans/milestone-2-dashboard-stats.plan.md) |
| 3 | Importação do Histórico CSV | Usuário migra o histórico do Money Ledgers e confere seus lançamentos passados | complete | [.claude/plans/milestone-3-csv-import.plan.md](file:///home/willy/Sandbox/df/.claude/plans/milestone-3-csv-import.plan.md) |
| 4 | Empacotamento / Execução Mobile Local | Usuário instala e utiliza a aplicação localmente no celular no seu dia a dia | complete | [.claude/plans/milestone-4-mobile-local.plan.md](file:///home/willy/Sandbox/df/.claude/plans/milestone-4-mobile-local.plan.md) |

## Open Questions
- [x] Qual é o layout exato das colunas e formatações de data/valores no CSV exportado pelo Money Ledgers? *(Resolvido com o arquivo EXPORT_2026_11_01_09_50_02.csv e integrado ao parser)*
- [x] Qual será o formato e rotina de backup local dos dados para garantir segurança contra falhas do dispositivo? *(Resolvido com exportação JSON completo e CSV via BackupManagerModal)*

## Risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Variações ou peculiaridades no CSV gerado pelo Money Ledgers | Média | Médio | Validar uma amostra das primeiras linhas do arquivo exportado antes de fechar a importação |
| Fricção na usabilidade de entrada de dados diários no celular | Média | Alto | Priorizar design responsivo com foco em velocidade de digitação e poucos toques no protótipo web |

---
*Status: DRAFT — requirements only. Implementation planning pending via /plan.*
