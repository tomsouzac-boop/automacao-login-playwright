# 🎭 Automação de Testes: Login Sauce Demo (Playwright + BDD)

Este repositório contém uma automação de testes de ponta a ponta (E2E) para validar o fluxo de login no site **Sauce Demo**. O projeto utiliza o framework **Playwright** e segue o modelo de escrita **BDD**.

---

## 📝 Documentação do Teste (BDD - Gherkin)

Para garantir que o comportamento do sistema atenda aos requisitos de negócio, o teste foi estruturado seguindo o modelo BDD:

**Funcionalidade:** Login no Sistema
**Cenário:** Realizar login com sucesso com um usuário comum

* **Dado** que o usuário acessa a página de login `https://www.saucedemo.com/`
* **Quando** insere um nome de usuário válido e uma senha válida
* **E** clica no botão de login
* **Então** o sistema deve redirecionar o usuário para a página de inventário de produtos
* **E** o título "Products" deve estar visível na tela

---

## 🛠️ Tecnologias e Ferramentas
* **Engine:** [Playwright](https://playwright.dev/)
* **Linguagem:** JavaScript
* **Segurança:** Dotenv (Variáveis de Ambiente para esconder senhas)
* **Versionamento:** GitHub

## 📂 Estrutura Técnica do Código

O script de automação reflete exatamente os passos do BDD:

1.  **Navegação:** `page.goto()` acessa a URL inicial.
2.  **Ação (Input):** Localiza os seletores `data-test="username"` e `data-test="password"` para preencher as credenciais extraídas do arquivo `.env`.
3.  **Ação (Click):** Executa o comando `.click()` no botão de login.
4.  **Validação (Asserção):** * Verifica se a URL contém `/inventory.html`.
    * Confirma a presença do elemento `.title` com o texto "Products".

## 🚀 Como Executar o Projeto

### 1. Configuração de Segurança (.env)
Este projeto utiliza variáveis de ambiente. Crie um arquivo `.env` na raiz e adicione:
```env
USER_SAUCE=standard_user
PASSWORD_SAUCE=secret_sauce