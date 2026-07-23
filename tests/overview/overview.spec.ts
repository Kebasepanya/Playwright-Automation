import { test, expect } from '@playwright/test';

test('Overview page loads', async ({ page }) => {
  await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary');

  await expect(page).toHaveURL("https://hub.dev.wetu.com/profile/348615/overview/summary");

  await expect(page).toHaveTitle(/Wetu/i);
});



test('Property name is visible', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary');
  
    await expect(
        page.locator('#overview-summary').getByText('Hotel Self-build')
      ).toBeVisible();
});



test('Correct Profile Type', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary');

    await expect(
        page.getByText('Stay')).toBeVisible();
});



test('Checking that the share button is displayed at the top of the page', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary');
    await expect(page.getByRole('button', { name: 'Share' })).toBeVisible();
});




test('Checking contact details link', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary');
   await expect(
    page.getByRole('link', { name: 'View Contact Details' })
).toBeVisible();
  });

  