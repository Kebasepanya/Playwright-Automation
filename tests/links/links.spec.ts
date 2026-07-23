import { test, expect } from '@playwright/test';

test('Contact details link', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary');
    await expect(
        page.getByRole('link', { name: 'View Contact Details' })
    ).toBeVisible();
});

test('Certifications Link', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary');
    await expect(
        page.getByRole('link', { name: 'View responsible tourism' })).toBeVisible();
});

//Struggling with this one
test('GWD Project Links', async ({ page }) => {
  await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');

  const projects = page.locator(
    'div.good-you-do-campaign-link-section',
    { hasText: 'https://' }
  );

  await expect(projects).toBeVisible();
});

