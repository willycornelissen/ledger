<p align="center">
  <img src="ledger.webp" alt="Ledger Logo" width="100" />
</p>

<h1 align="center">Ledger</h1>

<p align="center">
  <strong>Diário Financeiro Pessoal • Local-First • 100% Offline</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.7.3-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.1.0-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Capacitor-8.6.0-119EFF?logo=capacitor&logoColor=white" alt="Capacitor" />
  <img src="https://img.shields.io/badge/Storage-IndexedDB-orange" alt="IndexedDB" />
  <img src="https://img.shields.io/badge/Status-100%25%20Offline-success" alt="Offline Ready" />
</p>

---

## 📖 Visão Geral

O **Ledger** é uma aplicação moderna de controle financeiro pessoal desenhada com foco em **privacidade, rapidez e simplicidade**. 

Construído sob a arquitetura **Local-First**, o Ledger garante que seus dados financeiros pertençam exclusivamente a você: todas as informações são salvas diretamente no banco de dados local do seu dispositivo (**IndexedDB**), sem envio para servidores externos ou dependência de conexão com a internet.

O projeto foi projetado com abordagem *mobile-first* e opera perfeitamente tanto como **aplicativo web progressivo (PWA)** no navegador quanto como **aplicativo nativo Android** (via Capacitor).

---

## ✨ Principais Funcionalidades

### 💳 Lançamentos e Extrato Inteligente
- Registro rápido de receitas e despesas com categoria, data, valor e notas adicionais.
- Cálculos monetários realizados inteiramente em **centavos** (inteiros), prevenindo imprecisões e erros clássicos de arredondamento em ponto flutuante.
- Navegação mensal intuitiva com resumo instantâneo (Total de Receitas, Total de Despesas e Saldo).
- Agrupamento diário de transações com somatório específico por dia.
- Edição e exclusão direta de qualquer registro.

### 📊 Estatísticas e Indicadores (Dashboard)
- **Visão Mensal e Anual**: alterne facilmente entre a análise do mês vigente e a visão panorâmica do ano inteiro.
- **Gráfico de Distribuição (Donut Chart)**: visualize a proporção de gastos e receitas por categoria com paleta de cores dedicada.
- **Evolução e Tendências (Trend Bar Chart)**: acompanhe a progressão diária ou mensal das entradas e saídas.
- **Métricas Financeiras**:
  - Taxa de Poupança (*Savings Rate* percentual).
  - Média diária de gastos.
  - Média mensal de receitas e despesas.

### 📑 Relatórios Anuais Completos
- Modal dedicado para análise consolidada de qualquer ano fiscal selecionado.
- Exportação multiformato:
  - **PDF / Impressão**: folha de estilo otimizada para impressão física ou geração de PDF limpo.
  - **CSV**: planilha consolidada com detalhamento mensal e discriminação por categoria.
  - **HTML Autônomo**: relatório interativo independente gerado em arquivo único para visualização em qualquer navegador.

### 🏷️ Categorias Customizáveis
- Criação, edição e exclusão de categorias para despesas e receitas.
- Identificação visual facilitada com ícones da biblioteca [Lucide](https://lucide.dev/) e seleção de cores personalizadas.
- Conjunto padrão (*seed*) abrangente pronto para uso inicial.

### 💾 Backup, Importação e Exportação
- **Backup JSON**: exportação e restauração completa de transações e categorias com um clique.
- **Exportação CSV**: extraia seus registros para planilhas (Excel, Google Sheets, LibreOffice Calc).
- **Importador CSV Inteligente**:
  - Autodetecção de delimitadores (vírgula ou ponto e vírgula).
  - Reconhecimento automático de formatos de data (`DD/MM/YYYY`, `YYYY-MM-DD`, etc.).
  - Mapeamento dinâmico de colunas e categorização inteligente.
- **Carga de Histórico**: compatibilidade nativa com históricos de exportações legadas (*Money Ledgers / Meu Diário Financeiro*).

### 📱 Experiência Mobile & PWA
- Totalmente responsivo com layout mobile-first (*safe-area insets* para entalhes/notches).
- **Progressive Web App (PWA)**: instalável no Chrome/Safari/Firefox com suporte a Service Worker (`sw.js`) e manifest (`manifest.json`).
- **Aplicativo Android Nativo**: encapsulado via Capacitor 8 com suporte a compilação de APK instalável e depuração direta via USB.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia | Descrição |
|---|---|---|
| **Frontend** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Interface reativa, modular e tipada |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária responsiva e moderna |
| **Ícones** | [Lucide React](https://lucide.dev/) | Ícones em SVG consistentes e leves |
| **Persistência & Nuvem** | [Firebase Firestore](https://firebase.google.com/) + IndexedDB | Armazenamento na nuvem isolado por usuário com cache offline |
| **Autenticação** | [Firebase Auth](https://firebase.google.com/) | Login seguro com Google restrito ao proprietário via `VITE_AUTHOR_UID` |
| **Deploy** | [GitHub Pages](https://pages.github.com/) + GitHub Actions | CI/CD automatizado com segredos de ambiente |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | Empacotamento ultra-rápido com HMR |
| **Mobile Nativo** | [Capacitor 8](https://capacitorjs.com/) | Ponte nativa para compilação Android |
| **Testes** | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) | Suíte de testes unitários e de integração com JSDOM e fake-indexeddb |

---

## 📁 Estrutura do Projeto

```text
ledger/
├── android/                   # Projeto nativo Android configurado com Gradle & Capacitor
│   ├── app/                   # Módulo Android nativo com manifests e recursos
│   └── mobile.md              # Documentação de compilação e instalação do APK
├── public/                    # Arquivos estáticos
│   ├── icon.png               # Ícone do aplicativo
│   ├── icon.svg               # Ícone em vetor
│   ├── ledger.webp            # Logotipo oficial
│   ├── manifest.json          # Manifesto da aplicação PWA
│   └── sw.js                  # Service Worker para suporte offline
├── src/
│   ├── components/            # Componentes visuais React
│   │   ├── AnnualReportModal.tsx     # Relatório anual e exportador PDF/HTML/CSV
│   │   ├── AnnualTrendBarChart.tsx   # Gráfico de barras da evolução anual
│   │   ├── BackupManagerModal.tsx    # Gerenciador de backups e exportações
│   │   ├── CategoryIcon.tsx          # Renderizador dinâmico de ícones Lucide
│   │   ├── CategoryManagerModal.tsx  # CRUD de categorias de receita/despesa
│   │   ├── CsvImportModal.tsx        # Importador inteligente de arquivos CSV
│   │   ├── DashboardView.tsx         # Visão analítica mensal e anual
│   │   ├── DonutChart.tsx            # Gráfico de rosca SVG por categorias
│   │   ├── Header.tsx                # App Bar com mês, resumo de saldo e menu
│   │   ├── PwaInstallBanner.tsx      # Banner e gatilho de instalação PWA
│   │   ├── TransactionForm.tsx       # Formulário modal para novo lançamento
│   │   ├── TransactionList.tsx       # Extrato mensal agrupado por dia
│   │   └── TrendBarChart.tsx         # Gráfico de barras com tendência diária
│   ├── context/
│   │   └── FinanceContext.tsx # Estado global e operações assíncronas do app
│   ├── data/
│   │   └── seedData.ts        # Dados padrão de categorias e histórico inicial
│   ├── db/
│   │   └── indexedDb.ts       # Camada de abstração e acesso ao IndexedDB
│   ├── hooks/
│   │   └── usePwaInstall.ts   # Hook para detecção do evento BeforeInstallPrompt
│   ├── types/
│   │   └── finance.ts         # Tipos e contratos TypeScript (Transações, Categorias, etc.)
│   ├── utils/
│   │   ├── csvParser.ts       # Parser de CSV com detecção de delimitador e colunas
│   │   ├── formatters.ts      # Formatadores de moeda (BRL), centavos e datas
│   │   └── statistics.ts      # Cálculos estatísticos, médias e relatórios
│   ├── App.tsx                # Componente raiz com navegação mobile
│   ├── index.css              # Configurações do Tailwind e estilos globais
│   └── main.tsx               # Ponto de entrada React
├── tests/                     # Bateria de testes unitários e de integração
│   ├── annualReport.test.tsx
│   ├── components.test.tsx
│   ├── csvImport.test.tsx
│   ├── csvParser.test.ts
│   ├── dashboard.test.tsx
│   ├── pwa.test.tsx
│   ├── statistics.test.ts
│   └── storage.test.ts
├── capacitor.config.ts        # Configurações do Capacitor para Android/iOS
├── package.json               # Dependências e scripts npm
├── tailwind.config.js         # Configurações do Tailwind CSS
└── vite.config.ts             # Configurações do empacotador Vite
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- Gerenciador de pacotes `npm`

### 1. Clonar o repositório e instalar dependências
```bash
git clone https://github.com/willycornelissen/ledger.git
cd ledger
npm install
```

### 2. Iniciar o ambiente de desenvolvimento
```bash
npm run dev
```
O servidor Vite será iniciado (normalmente em `http://localhost:5173/`).

### 3. Compilar para produção (Web)
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

Para testar o build de produção localmente:
```bash
npm run preview
```

---

## 📱 Executando no Android

O projeto utiliza o **Capacitor** para gerar o aplicativo nativo Android.

### Pré-requisitos para Android
- [Android Studio](https://developer.android.com/studio) instalado com Android SDK.
- Java JDK 17 ou 21 configurado.

### Comandos de automação móvel:

- **Sincronizar código Web com o Android:**
  ```bash
  npm run mobile:sync
  ```
  *(Gera o build web e copia os assets para a pasta `android/app/src/main/assets/public/`)*

- **Abrir o projeto no Android Studio:**
  ```bash
  npm run mobile:open
  ```

- **Gerar o APK de Debug diretamente pelo terminal:**
  ```bash
  npm run mobile:build
  ```
  O arquivo APK será gerado em:
  ```text
  android/app/build/outputs/apk/debug/app-debug.apk
  ```

> [!TIP]
> Para um guia passo a passo detalhado sobre como instalar o APK no seu celular via USB ou transferência de arquivo, consulte o documento [`android/mobile.md`](android/mobile.md).

---

## 🧪 Testes Automatizados

O projeto conta com uma suíte de testes unitários e de integração cobrindo parser de CSV, camada de banco IndexedDB, cálculos estatísticos e componentes de interface.

Para executar os testes:

```bash
npm test
```

---

## 🔒 Privacidade e Segurança (Local-First)

- **Zero Cloud / Zero Tracking**: Não existem bancos de dados remotos nem coletores de telemetria conectados ao app.
- **Armazenamento no Navegador/App**: Seus registros ficam gravados no armazenamento local (`IndexedDB`) da sua instância do navegador ou WebView.
- **Portabilidade Total**: Exporte seus dados a qualquer momento em formato **JSON** ou **CSV** para arquivamento ou migração.

---

## 📄 Licença

Este projeto é de uso pessoal e privado, disponível sob os termos definidos no repositório.
