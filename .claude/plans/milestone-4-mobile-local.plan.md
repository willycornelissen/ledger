# Plan: Personal Finance Ledger — Milestone 4: Empacotamento / Execução Mobile Local

**Source PRD**: `.claude/prds/personal-finance-ledger.prd.md`  
**Selected Milestone**: Milestone 4 — Empacotamento / Execução Mobile Local  
**Complexity**: Medium  

## Summary
Transformar o Personal Finance Ledger em um aplicativo instalável e 100% offline para celulares (Android/iOS) via **PWA (Progressive Web App Standalone)** e configuração do **Capacitor**. O usuário poderá instalar o aplicativo na tela inicial do celular com ícone próprio, executá-lo em tela cheia (sem barra de navegador) e utilizá-lo no dia a dia com persistência local total, mesmo sem conexão com a internet.

## Patterns to Mirror
Seguir os padrões estabelecidos nos Marcos 1, 2 e 3:
| Category | Source | Pattern |
|---|---|---|
| Arquitetura | `public/`, `src/hooks/` | Padrão PWA moderno com Service Worker de cache offline total e hook reativo `usePwaInstall` |
| UI | `src/components/Header.tsx` | Botão e banner amigável de instalação mobile com feedback claro |
| Configuração | `vite.config.ts` | Configuração otimizada para PWA e build mobile |
| Testes | `tests/components.test.tsx` | Testes automatizados com Vitest cobrindo o hook e integração do PWA |

## Files to Change
| File | Action | Why |
|---|---|---|
| `public/manifest.json` | CREATE | Manifesto PWA com nome "Meu Diário Financeiro", tema escuro, modo standalone e ícones |
| `public/sw.js` | CREATE | Service Worker nativo com cache-first e suporte offline completo |
| `public/icon.svg` | CREATE | Ícone vetorial moderno da aplicação (carteira/finanças) |
| `public/icon-192.png` | CREATE | Ícone PNG padrão 192x192 para Android |
| `public/icon-512.png` | CREATE | Ícone PNG padrão 512x512 para splash screen |
| `index.html` | UPDATE | Adicionar tags `<link rel="manifest">`, meta tags mobile standalone e registro do SW |
| `src/hooks/usePwaInstall.ts` | CREATE | Hook React para capturar `beforeinstallprompt` e disparar instalação nativa do Android |
| `src/components/PwaInstallBanner.tsx` | CREATE | Banner e card de instalação mobile com instruções de uso |
| `capacitor.config.ts` | CREATE | Configuração do Capacitor Android para empacotamento nativo |
| `src/App.tsx` | UPDATE | Integrar banner/botão de instalação móvel |
| `tests/pwa.test.ts` | CREATE | Testes unitários para manifesto, Service Worker e hook PWA |

## Tasks
### Task 1: Manifesto PWA e Assets de Ícones
- **Action**: Criar `public/manifest.json` configurado para `display: standalone`, `orientation: portrait`, `theme_color: #0f172a`, e ícones em múltiplos tamanhos (192px, 512px e SVG).
- **Mirror**: Padrão W3C Web App Manifest.
- **Validate**: Validação da sintaxe JSON e carregamento no `index.html`.

### Task 2: Service Worker de Cache Offline Total
- **Action**: Implementar `public/sw.js` para interceptar requisições e realizar cache dos assets do app (`index.html`, bundle JS, CSS, fontes e ícones), garantindo inicialização instantânea sem internet.
- **Mirror**: Estratégia Stale-While-Revalidate com Cache-First para assets estáticos.
- **Validate**: Teste de integridade do service worker.

### Task 3: Hook de Instalação e Componente de Interface
- **Action**: Desenvolver `src/hooks/usePwaInstall.ts` e `src/components/PwaInstallBanner.tsx` para permitir ao usuário instalar o aplicativo no celular com 1 clique.
- **Mirror**: Padrão React Hooks com eventos DOM `beforeinstallprompt` e `appinstalled`.
- **Validate**: Testes de componente em `tests/pwa.test.ts`.

### Task 4: Configuração Capacitor para Android
- **Action**: Adicionar `capacitor.config.ts` permitindo sincronização com o Capacitor CLI caso o usuário queira compilar um `.apk` no Android Studio.
- **Mirror**: Configuração padrão do Capacitor 6/7.
- **Validate**: `npm run build && npm test`

### Task 5: Integração e Validação Final
- **Action**: Atualizar `index.html`, `src/App.tsx` e `src/components/BackupManagerModal.tsx` com as opções mobile.
- **Validate**: Verificação com testes automatizados e build de produção.

## Validation
```bash
npm test
npm run build
```

## Risks
| Risk | Likelihood | Mitigation |
|---|---|---|
| Navegadores sem suporte a `beforeinstallprompt` (Safari iOS) | Média | Instruções claras alternativas ("Toque em Compartilhar > Adicionar à Tela de Início") |
| Cache desatualizado após nova versão | Baixa | Versão do cache versionada no Service Worker com descarte de caches antigos na ativação |

## Acceptance
- [x] Manifesto PWA válido configurado com modo standalone e ícones
- [x] Service Worker configurado para cache offline total
- [x] Aplicativo pode ser instalado no celular Android com ícone na tela inicial
- [x] O app funciona e abre sem conexão com a internet
- [x] Todos os 38 testes passando e build verde
