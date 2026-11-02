# Como Instalar o Aplicativo no Celular Android

Este guia detalha o passo a passo para gerar o pacote instalável (`.apk`) e instalar o **Meu Diário Financeiro** diretamente no seu celular Android.

---

## 📋 Pré-requisitos

- O **Android Studio** já está instalado no seu computador em [`/home/willy/android-studio`](file:///home/willy/android-studio).
- O projeto nativo Android está configurado nesta pasta: [`android/`](file:///home/willy/Sandbox/df/android).
- Um smartphone com sistema operacional **Android** (versão 7.0 ou superior).

---

## 🛠️ Método 1: Gerar o Arquivo `.apk` pelo Android Studio (Recomendado)

Esta é a forma mais prática de gerar um arquivo que você pode guardar, compartilhar ou instalar a qualquer momento.

### Passo 1: Sincronizar e abrir o projeto
No terminal, dentro da pasta raiz do projeto (`/home/willy/Sandbox/df`), execute:

```bash
npm run mobile:open
```

> **Nota**: Esse comando compila o código mais recente, copia os recursos para a pasta nativa e abre o Android Studio automaticamente.  
> Se preferir abrir o IDE manualmente pelo terminal, use o comando `studio`.

### Passo 2: Gerar o APK no Android Studio
1. Com o Android Studio aberto, aguarde alguns instantes até que o Gradle termine a sincronização inicial (a barra inferior indicará *"Gradle build finished"*).
2. No menu superior do Android Studio, clique em:
   > **Build** ➔ **Build Bundle(s) / APK(s)** ➔ **Build APK(s)**
3. O Android Studio começará a compilar o projeto. Quando terminar, uma notificação aparecerá no canto inferior direito:
   > *"APK(s) generated successfully for 1 module"*
4. Clique no link azul **locate** dentro da notificação.
5. O arquivo instalável estará localizado em:
   ```text
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

### Passo 3: Transferir para o celular
Envie o arquivo `app-debug.apk` para o seu celular usando o método que preferir:
- **Cabo USB**: Conecte o celular ao computador e copie o arquivo para a pasta *Downloads* do aparelho.
- **Nuvem / Mensageiros**: Faça upload para o Google Drive ou envie para si mesmo via WhatsApp, Telegram ou e-mail.

### Passo 4: Instalar no celular
1. No seu celular, abra o gerenciador de arquivos e toque no arquivo `app-debug.apk`.
2. Se o Android exibir a mensagem *"Para sua segurança, seu smartphone não tem permissão para instalar apps desconhecidos dessa fonte"*:
   - Toque em **Configurações**.
   - Ative a opção **Permitir desta fonte**.
   - Volte para a tela anterior.
3. Toque em **Instalar**.
4. Ao concluir, toque em **Abrir**.

O ícone **Finanças** (*"Meu Diário Financeiro"*) estará na tela inicial e na gaveta de aplicativos do seu Android, pronto para uso offline!

---

## ⚡ Método 2: Instalação Direta via Cabo USB (Depuração USB)

Se quiser instalar diretamente sem precisar transferir o arquivo manualmente:

### Passo 1: Habilitar a Depuração USB no celular
1. No celular, abra as **Configurações** ➔ **Sobre o telefone**.
2. Toque **7 vezes seguidas** em **Número da versão** (ou *Build Number*) até ver a mensagem *"Você agora é um desenvolvedor"*.
3. Volte para as Configurações ➔ **Sistema** (ou *Configurações adicionais*) ➔ **Opções do desenvolvedor**.
4. Ative a chave **Depuração USB**.

### Passo 2: Conectar e rodar pelo Android Studio
1. Conecte o celular ao computador pelo cabo USB.
2. Na tela do celular, confirme a caixa de diálogo: *"Permitir depuração USB deste computador?"* e marque *"Sempre permitir"*.
3. Abra o Android Studio com `npm run mobile:open`.
4. No topo da janela do Android Studio, localize a lista suspensa de dispositivos (ao lado do botão verde de Play). Seu celular aparecerá listado lá.
5. Clique no botão verde de **Play (Run 'app')** (ou pressione `Shift + F10`).
6. O Android Studio irá compilar, transferir e abrir o aplicativo diretamente na tela do seu celular.

---

## 🌐 Método 3: Instalação Alternativa como PWA (Sem APK)

Se quiser instalar o aplicativo no celular sem precisar compilar o código nativo:

1. No computador, inicie o servidor na rede local:
   ```bash
   npm run preview -- --host
   ```
2. O terminal exibirá um endereço local (exemplo: `http://192.168.1.100:4173/`).
3. Com o celular conectado na **mesma rede Wi-Fi** do computador, abra o navegador **Google Chrome** no celular e acesse esse endereço.
4. O aplicativo exibirá o banner **"Instalar no Celular"** na parte superior. Basta tocar nele (ou tocar no menu de três pontos do Chrome ⋮ e escolher **"Instalar aplicativo"** ou **"Adicionar à tela inicial"**).
5. O app será instalado e funcionará offline normalmente com cache total.

---

## 🔒 Dados e Backups no Celular

- **Armazenamento 100% Local**: Todas as transações ficam salvas de forma segura na memória do seu aparelho (IndexedDB). Nenhum dado financeiro é transmitido para servidores externos.
- **Exportação de Backups**: Para manter cópias de segurança periódicas:
  1. No aplicativo, toque no botão de engrenagem / dados no topo.
  2. Escolha **"Exportar Backup Completo (JSON)"** ou **"Exportar Transações (CSV)"**.
  3. Salve o arquivo em local seguro (ex.: Google Drive ou e-mail pessoal).
