const { test, expect } = require('@playwright/test');

test('Deve realizar login com sucesso', async ({ page }) => {
  // 1. Acessar o site
  await page.goto('https://www.saucedemo.com/');

  // 2. Preencher o usuário
  await page.locator('[data-test="username"]').fill('standard_user');

  // 3. Preencher a senha
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // 4. Clicar no botão de login
  await page.locator('[data-test="login-button"]').click();

  // 5. Validação: Verificar se entramos na página de produtos
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  const headerTitle = await page.locator('.title');
  await expect(headerTitle).toHaveText('Products');
});