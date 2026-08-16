import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).click();
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('fizasmiley786@gmail.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).click();
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Arm64@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).click();
  await page.getByRole('textbox', { name: 'Select Country' }).fill('ind');
  await page.getByRole('button', { name: ' India' }).click();
  await page.getByText('Place Order').click();
  await page.getByRole('button', { name: '   ORDERS' }).click();
  await page.getByRole('button', { name: 'View' }).first().click();
  await page.getByText('order summary').click();
  await expect(page.getByText('69e7907bf86ba51a6579c42f')).toBeVisible();
  await expect(page.locator('app-order-details')).toContainText('order summary');
  await page.getByText('Thank you for Shopping With Us order summary Order Id69e7907bf86ba51a6579c42f').click();
});