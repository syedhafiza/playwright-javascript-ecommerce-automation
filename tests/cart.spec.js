const { test, expect } = require('../fixtures/testFixtures');
const { testData } = require('../test-data/testData');

test.describe('Cart page', () => {
  test.beforeEach(async ({ page, loginPage, productsPage, cartPage }) => {
    await page.goto(testData.urls.baseUrl);
    await loginPage.login(testData.validLogin.username, testData.validLogin.password);

    await expect(page).toHaveURL(/\/inventory\.html$/);

    await productsPage.addProductToCart(testData.products.backpack);
    await productsPage.openCart();

    await expect(page).toHaveURL(/\/cart\.html$/);
    await expect(cartPage.cartHeading).toHaveText('Your Cart');
  });

  test('verifies cart contains the added product', async ({ cartPage }) => {
    const itemCount = await cartPage.getCartItemCount();
    const productNames = await cartPage.getProductNames();

    expect(itemCount).toBe(1);
    expect(productNames).toContain(testData.products.backpack);
  });

  test('verifies product price in cart', async ({ cartPage }) => {
    const productPrices = await cartPage.getProductPrices();

    expect(productPrices.length).toBeGreaterThan(0);
    expect(productPrices[0]).toMatch(/\$\d+\.\d{2}/);
  });

  test('verifies product exists in cart', async ({ cartPage }) => {
    const isPresent = await cartPage.isProductInCart(testData.products.backpack);

    expect(isPresent).toBe(true);
  });

  test('removes product from cart', async ({ cartPage }) => {
    await cartPage.removeProduct(testData.products.backpack);

    await expect.poll(async () => await cartPage.getCartItemCount()).toBe(0);
    await expect(await cartPage.isProductInCart(testData.products.backpack)).toBe(false);
  });

  test('continues shopping from cart', async ({ page, cartPage }) => {
    await cartPage.continueShopping();

    await expect(page).toHaveURL(/\/inventory\.html$/);
  });

  test('proceeds to checkout', async ({ page, cartPage }) => {
    await cartPage.openCheckout();

    await expect(page).toHaveURL(/\/checkout-step-one\.html$/);
  });
});
