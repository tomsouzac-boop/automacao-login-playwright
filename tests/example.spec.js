const { test, expect } = require('@playwright/test');
require('dotenv').config(); // Isso aqui ativa a leitura do arquivo .env

test('Deve realizar login com sucesso', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Em vez de escrever o texto, usamos process.env.NOME_DA_VARIAVEL
  await page.locator('[data-test="username"]').fill(process.env.USER_SAUCE);
  await page.locator('[data-test="password"]').fill(process.env.PASSWORD_SAUCE);

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});