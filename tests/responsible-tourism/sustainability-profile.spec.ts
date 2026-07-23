import { test, expect } from '@playwright/test';
//This file is to test the Sustainability profile form and ensuring that all the answers are visible as saved from the profile editor.

test('Sustainability Profile Section', async ({ page }) => {
    await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');
    await expect(page.getByRole('heading', { name: 'Sustainability Profile' })).toBeVisible();
});


//Checking the Sustainability Form
test('Sustainability Form', async ({ page }) => {
  await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');
const labels = page.locator('div.ch-text-sm.ch-font-medium');

await expect(labels).toHaveText([
  'People practices',
  'Energy & Climate',
  'Waste & Plastic',
  'Water',
  'Procurement practices',
  'Culture & heritage',
  'Credible communication',
  'Accountability'
])

});


//Testing the answers/usbsections on the Governance sections
//Currently Struggling with this one
test('Governance Form', async ({ page }) => {
  await page.goto('https://hub.dev.wetu.com/profile/348615/responsible-tourism');

 const labels = page
  .locator('.governance-sections')
  .locator('div.ch-text-sm.ch-font-medium');

await expect(labels).toHaveText([
  'Section A: Health & Safety',
  'Section B: Sustainability',
  'Section C: General Information'
]);
});
