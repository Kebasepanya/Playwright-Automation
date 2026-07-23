import { test, expect } from '@playwright/test';

//This file is to test the navigation of the Responsible Tourism page and its sections

test('Responsible Tourism', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');
    await expect(page.getByText('Responsible Tourism')).toBeVisible();
});

