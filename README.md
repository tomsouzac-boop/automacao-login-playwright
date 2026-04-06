# Projeto de Automação de Login com Playwright 🎭

Este repositório contém um teste automatizado de login para iniciantes, utilizando o site **Sauce Demo**.

## 🛠️ Ferramentas Utilizadas
* **Editor:** Visual Studio Code (VS Code)
* **Framework:** Playwright (JavaScript)
* **Versionamento:** GitHub

## 🚀 Passo a Passo para Reprodução

### 1. Configuração do Ambiente
1. Instale o [Node.js](https://nodejs.org/).
2. No VS Code, instale a extensão **Playwright Test for VSCode**.
3. No terminal, instale o Playwright com: `npm init playwright@latest`.

### 2. O Site de Teste
* **URL:** [https://www.saucedemo.com/](https://www.saucedemo.com/)
* **Usuário:** `standard_user`
* **Senha:** `secret_sauce`

### 3. Estrutura do Teste
O teste foi escrito no arquivo `tests/login.spec.js`. O fluxo seguido é:
1.  **Navegação:** O Playwright abre o navegador e acessa a URL.
2.  **Identificação:** Localizamos os campos de `username` e `password` através de seletores `data-test`.
3.  **Ação:** O comando `.fill()` digita os dados e `.click()` envia o formulário.
4.  **Asserção (Check):** Verificamos se a URL mudou para `/inventory.html` e se o título "Products" está visível.

### 4. Como Executar
Para rodar os testes e ver o navegador funcionando, execute:
```bash
npx playwright test --headed

Candidato: [Elton de Souza Costa] Data: 06/04/2026
