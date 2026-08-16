const { test, expect } = require('../fixtures/testFixtures');
const { testData } = require('../test-data/testData');

test.describe('Products page', () => {
  test.beforeEach(async ({ page, loginPage, productsPage }) => {
    await page.goto(testData.urls.baseUrl);
    await loginPage.login(testData.validLogin.username, testData.validLogin.password);

    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(productsPage.pageHeading).toHaveText('Products');
  });

  test('verifies products are displayed', async ({ productsPage }) => {
    const productCount = await productsPage.getProductCount();

    expect(productCount).toBeGreaterThan(0);
    await expect(productsPage.pageHeading).toHaveText('Products');
  });

  test('verifies product names include Sauce Labs Backpack', async ({ productsPage }) => {
    const productNames = await productsPage.getProductNames();

    expect(productNames).toContain(testData.products.backpack);
  });

  test('adds a single product to cart', async ({ productsPage }) => {
    await productsPage.addProductToCart(testData.products.backpack);

    await expect.poll(async () => await productsPage.getCartItemCount()).toBe(1);
  });

  test('adds multiple products to cart', async ({ productsPage }) => {
    await productsPage.addProductToCart(testData.products.backpack);
    await productsPage.addProductToCart(testData.products.bikeLight);

    await expect.poll(async () => await productsPage.getCartItemCount()).toBe(2);
  });

  test('sorts products by price low to high', async ({ productsPage }) => {
    await productsPage.sortProducts('lohi');

    const prices = await productsPage.getProductPrices();
    const numericPrices = prices.map((price) => Number(price.replace(/[^\d.]/g, '')));

    expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
    expect(numericPrices[0]).toBeLessThanOrEqual(numericPrices[1]);
  });

  test('navigates to cart after adding a product', async ({ page, productsPage }) => {
    await productsPage.addProductToCart(testData.products.backpack);
    await productsPage.openCart();

    await expect(page).toHaveURL(/\/cart\.html$/);
  });
});
