// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Carregar variáveis de ambiente do arquivo .env.
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Executar testes em arquivos em paralelo */
  fullyParallel: true,
  /* Falhar a build se esquecer test.only no código */
  forbidOnly: !!process.env.CI,
  /* Repetir o teste em caso de falha apenas no CI */
  retries: process.env.CI ? 2 : 0,
  /* Limitar workers no CI */
  workers: process.env.CI ? 1 : undefined,
  /* Gerar relatório em HTML */
  reporter: 'html',
  
  /* Configurações compartilhadas para todos os projetos */
  use: {
    /* URL base do site de testes */
    baseURL: 'https://www.saucedemo.com',

    /* --- CONFIGURAÇÃO DE EVIDÊNCIAS --- */
    screenshot: 'on',         // Tira print de cada passo
    video: 'on',              // Grava vídeo de cada execução
    trace: 'on-first-retry',  // Gera o Trace Viewer se houver erro
    /* ---------------------------------- */
  },

  /* Configurar projetos para os principais navegadores */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});