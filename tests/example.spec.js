const { test, expect } = require('@playwright/test');
require('dotenv').config(); // O Playwright já procura na raiz por padrão

test('Deve realizar login com sucesso', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Preenche os campos pegando do .env
  await page.locator('[data-test="username"]').fill(process.env.USER_SAUCE || '');
  await page.locator('[data-test="password"]').fill(process.env.PASSWORD_SAUCE || '');

  await page.locator('[data-test="login-button"]').click();

  // Validação
  await expect(page).toHaveURL(/inventory.html/);
});