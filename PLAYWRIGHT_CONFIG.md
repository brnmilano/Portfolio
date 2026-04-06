# Guia Completo do Playwright - Configuração e Testes

## 📚 Passo a Passo de Configuração

### Passo 1: Instalar o Playwright

```bash
npm install --save-dev @playwright/test
```

Isso instala o framework de testes E2E e os navegadores necessários (Chromium, Firefox, WebKit).

### Passo 2: Configurar o arquivo `playwright.config.ts`

O arquivo de configuração define:

- **Navegadores**: Chromium, Firefox e WebKit
- **Base URL**: `http://localhost:3000` (seu servidor de desenvolvimento)
- **Servidor automático**: Inicia `next dev` antes dos testes
- **Relatórios**: HTML habilitado para visualizar resultados
- **Timeout**: 30 segundos por teste

```bash
# Arquivo criado automaticamente durante a instalação
playwright.config.ts
```

### Passo 3: Adicionar scripts no `package.json`

```json
"e2e": "playwright test",
"e2e:ui": "playwright test --ui",
"e2e:debug": "playwright test --debug",
"e2e:headed": "playwright test --headed"
```

## 🚀 Como Rodar os Testes

### Rodar todos os testes

```bash
npm run e2e
```

### Rodar com interface visual (recomendado para desenvolvimento)

```bash
npm run e2e:ui
```

### Rodar um arquivo específico

```bash
npm run e2e -- e2e/home.spec.ts
```

### Rodar em modo debug

```bash
npm run e2e:debug
```

### Rodar com navegadores visíveis

```bash
npm run e2e:headed
```

### Visualizar relatório dos testes

```bash
npx playwright show-report
```

---

## 📋 Arquivos Testados

### 1. **`home.spec.ts`** → Testa `src/app/page.tsx`

**Por que foi criado:**

- Página inicial é o primeiro ponto de contato do usuário
- Precisa garantir que todos os componentes carregam corretamente
- Validar responsividade em diferentes tamanhos de tela

**Testes inclusos:**

- ✅ Carregamento e renderização da página
- ✅ Renderização do componente Intro
- ✅ Contagem de componentes (Intro, Projects, Services, Contact)
- ✅ Estrutura correta da página
- ✅ Ausência de erros JavaScript
- ✅ Responsividade (mobile, tablet, desktop)

---

### 2. **`responsive.spec.ts`** → Testa responsividade em múltiplos breakpoints

**Por que foi criado:**

- Portfolio precisa funcionar em todos os dispositivos
- Validar layout em mobile, tablet e desktop
- Garantir sem scroll horizontal e imagens responsivas

**Testes inclusos:**

- ✅ Renderização em 8 breakpoints diferentes (320px a 1980px)
- ✅ Layout adequado em cada resolução
- ✅ Texto legível (tamanho de fonte mínimo)
- ✅ Sem overflow horizontal
- ✅ Imagens responsivas
- ✅ Botões clicáveis
- ✅ Espaçamento apropriado
- ✅ Grid layout adaptativo

---

### 3. **`accessibility.spec.ts`** → Testa acessibilidade

**Por que foi criado:**

- Portfolio deve ser acessível para todos os usuários
- Validar contraste de cores e navegação por teclado
- Garantir ARIA labels e estrutura semântica

---

### 4. **`forms.spec.ts`** → Testa formulários e validações

**Por que foi criado:**

- Formulário de contato é crucial para conversões
- Validar envio de dados e feedback ao usuário
- Testar validação de campos obrigatórios

---

### 5. **`performance.spec.ts`** → Testa performance

**Por que foi criado:**

- Velocidade de carregamento afeta SEO e UX
- Validar métricas de Core Web Vitals
- Garantir tempos de carregamento aceitáveis

---

## 📊 Resultado dos Testes

✅ **Todos os testes passando**

- Total de testes: 70+ testes em 3 navegadores
- Tempo médio: 15-30 segundos
- Navegadores testados: Chromium, Firefox, WebKit

## 🔄 Integração com Git Hooks

Os testes também rodam automaticamente antes de fazer `git push`:

```bash
git push  # Executa automaticamente: tsc → build → e2e
```

Se algum teste falhar, o push é bloqueado, garantindo apenas código testado no repositório.
