import { test, expect } from '@playwright/test';

//These tests are for checking the navigation of the Overview page of a profile on the Wetu Hub website. 
// The tests verify that the user can navigate to different sections of the Overview page and that the correct content is displayed for each section.

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

    const locationSection = page.locator('#location');
    await expect(locationSection).toBeVisible();
    await expect(locationSection.getByText(/Location/i)).toBeVisible();
});