# 🎭 Automação de Testes: Login Sauce Demo (Playwright + BDD + k6)

Este repositório contém uma automação completa para validar o fluxo de login no site **Sauce Demo**. O projeto utiliza as melhores práticas de QA do mercado, unindo testes funcionais, performance e segurança.

---

## 📝 Documentação do Teste (BDD - Gherkin)

O comportamento do sistema foi estruturado seguindo o modelo BDD para alinhar os requisitos técnicos aos de negócio:

**Funcionalidade:** Login no Sistema  
**Cenário:** Realizar login com sucesso com um usuário comum

* **Dado** que o usuário acessa a página de login `https://www.saucedemo.com/`
* **Quando** insere um nome de usuário válido e uma senha válida
* **E** clica no botão de login
* **Então** o sistema deve redirecionar o usuário para a página de inventário de produtos
* **E** o título "Products" deve estar visível na tela

---

## 🛠️ Tecnologias e Ferramentas
* **Automação E2E:** [Playwright](https://playwright.dev/) (JavaScript)
* **Performance:** [k6](https://k6.io/) (Teste de Carga)
* **Segurança:** Dotenv (Variáveis de Ambiente)
* **Versionamento:** GitHub

## 📂 Estrutura Técnica do Código
1. **Navegação:** `page.goto()` acessa a URL inicial.
2. **Ação:** Localiza seletores `data-test` para preencher credenciais protegidas via `.env`.
3. **Validação:** Verifica a URL `/inventory.html` e a visibilidade do título "Products".

---

## ⚡ Testes de Performance (k6)
Além do funcional, o projeto simula a estabilidade do sistema sob estresse:
* **Cenário:** 5 usuários virtuais acessando o site simultaneamente por 20 segundos.
* **Métrica (Threshold):** 95% das requisições devem responder em menos de 500ms.

---

## 📊 Relatórios e Evidências
O projeto gera evidências automáticas de cada execução para facilitar a análise de bugs:
* **Screenshots:** Captura da tela final do teste.
* **Vídeos:** Gravação completa da interação do robô (configurado com `slowMo` para melhor visualização).
* **HTML Report:** Relatório interativo gerado pelo Playwright.

---

## 🚀 Como Executar o Projeto

### 1. Configuração de Segurança (.env)
Crie um arquivo chamado `.env` na raiz do projeto e adicione:
```env
USER_SAUCE=seu_usuario_aqui
PASSWORD_SAUCE=sua_senha_aqui