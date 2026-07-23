import { test, expect } from '@playwright/test';

//This file is to test the navigation of the Responsible Tourism page and its sections

test('Responsible Tourism', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');
    await expect(page.getByRole('heading', { name: 'Responsible tourism' })).toBeVisible();
});

test('Good We Do - Projects', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism#projects');
    await expect(page).toHaveURL(/#projects/);
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
}); 