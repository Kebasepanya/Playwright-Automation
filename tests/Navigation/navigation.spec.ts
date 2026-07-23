import { test, expect } from '@playwright/test';

test('Summary', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary');

    await page.getByRole('link', { name: 'Overview' }).click();

    await expect(page).toHaveURL('https://hub.dev.wetu.com/profile/348615/overview/summary');
});

test('Contact Details', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary#contact-details');
    await expect(page).toHaveURL(/#contact-details/);
    await expect(
        page.locator('#contact-details').getByText('Contact Details')
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Front Desk' })).toBeVisible();

});

test('Location', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/overview/summary#location');
    await expect(page).toHaveURL(/#location/);
    await expect(
page.locator('#location').getByText('Location')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Location' })).toBeVisible();
});