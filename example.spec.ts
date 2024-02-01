import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});



test("navigane to OLX", async ({ page }) => {
  await page.goto('https://www.olx.ua/uk/');
  await expect(page.locator('.css-1u6y1sg > a')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Повідомлення' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Виділені' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Ваш профіль' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Додати оголошення' })).toBeVisible();
  await expect(page.getByTestId('search-input')).toBeVisible();
  await expect(page.getByTestId('search-submit')).toBeVisible();
});




test("navigate to YouTube", async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await expect(page.locator('#search-form #container')).toBeVisible();
  await expect(page.getByText('Shorts Shorts')).toBeVisible();
  await expect(page.getByRole('navigation')).toBeVisible();
})



test("navigate to soundcloud", async ({ page }) => {
  await page.goto('https://soundcloud.com/');
  await expect(page.locator('#content').getByPlaceholder('Search for artists, bands,')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Upload your own' })).toBeVisible();
  await expect(page.getByText('Hear what’s trending for free')).toBeVisible();
  await expect(page.getByText('Hear what’s trending for free in the SoundCloud community Play Like Follow')).toBeVisible();
  await expect(page.getByRole('figure')).toBeVisible();
  await expect(page.getByText('Never stop listening SoundCloud is available on Web, iOS, Android, Sonos,')).toBeVisible();
  await expect(page.locator('p').filter({ hasText: 'Create account' }).getByLabel('Create a SoundCloud account')).toBeVisible();
})





test("navigate to ChatGPT", async ({ page }) => {
  await page.goto('https://chat.openai.com/');
  await expect(page.getByRole('navigation').getByText('ChatGPT ●')).toBeVisible();
  await expect(page.getByText('Get startedLog inSign up')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Get started' })).toBeVisible();
  await expect(page.getByTestId('login-button')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign up' })).toBeVisible();
  await expect(page.locator('path')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Terms of use|Privacy policy' }).nth(3)).toBeVisible();
})


test("navigate to prom", async ({page}) => {
  await page.goto('https://prom.ua/');
  await expect(page.getByRole('link', { name: 'prom' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Відстеження замовлення' })).toBeVisible();
  await expect(page.locator('form div').nth(2)).toBeVisible();
  await expect(page.locator('form div').nth(4)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Увійти' })).toBeVisible();
})


