import { test, expect } from '@playwright/test';

//This file is to test the navigation of the Responsible Tourism page and its sections

test('Responsible Tourism', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');
    await expect(page.getByText('Responsible Tourism')).toBeVisible();
});

test('The Good We Do Section', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');
    await expect(page.getByRole('heading', { name: 'The Good We Do' })).toBeVisible();
});

test('Certifications section', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');
    await expect(page.getByRole('heading', { name: 'Certifications' })).toBeVisible();
});

test('Sustainability Profile Section', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');
    await expect(page.getByRole('heading', { name: 'Sustainability Profile' })).toBeVisible();
});

test('SGovernance Section', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');
    await expect(page.getByRole('heading', { name: 'Governance' })).toBeVisible();
});