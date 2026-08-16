const { test, expect } = require('../fixtures/testFixtures');
const { testData } = require('../test-data/testData');

test.describe('Checkout page', () => {
  test.beforeEach(async ({ page, loginPage, productsPage, cartPage, checkoutPage }) => {
    await page.goto(testData.urls.baseUrl);
    await loginPage.login(testData.validLogin.username, testData.validLogin.password);

    await expect(page).toHaveURL(/\/inventory\.html$/);

    await productsPage.addProductToCart(testData.products.backpack);
    await productsPage.openCart();

    await expect(page).toHaveURL(/\/cart\.html$/);

    await cartPage.openCheckout();
    await expect(page).toHaveURL(/\/checkout-step-one\.html$/);
  });

  test('successful checkout completes the order', async ({ checkoutPage, page }) => {
    await checkoutPage.fillCustomerInfo(
      testData.checkoutInfo.firstName,
      testData.checkoutInfo.lastName,
      testData.checkoutInfo.postalCode
    );

    await expect(page).toHaveURL(/\/checkout-step-two\.html$/);

    const summaryNames = await checkoutPage.getSummaryProductNames();
    const summaryPrices = await checkoutPage.getSummaryProductPrices();

    expect(summaryNames).toContain(testData.products.backpack);
    expect(summaryPrices.length).toBeGreaterThan(0);

    await checkoutPage.finishCheckout();

    await expect(page).toHaveURL(/\/checkout-complete\.html$/);
    await expect(checkoutPage.getOrderConfirmationMessage()).toContainText('Thank you for your order!');
  });

  test('checkout validation shows error when first name is missing', async ({ checkoutPage }) => {
    await checkoutPage.lastName.fill(testData.checkoutInfo.lastName);
    await checkoutPage.postalCode.fill(testData.checkoutInfo.postalCode);
    await checkoutPage.continueButton.click();

    const error = checkoutPage.getCheckoutError();
    await expect(error).toBeVisible();
    await expect(error).toContainText('Error: First Name is required');
  });

  test('checkout validation shows error when last name is missing', async ({ checkoutPage }) => {
    await checkoutPage.firstName.fill(testData.checkoutInfo.firstName);
    await checkoutPage.postalCode.fill(testData.checkoutInfo.postalCode);
    await checkoutPage.continueButton.click();

    const error = checkoutPage.getCheckoutError();
    await expect(error).toBeVisible();
    await expect(error).toContainText('Error: Last Name is required');
  });

  test('checkout validation shows error when postal code is missing', async ({ checkoutPage }) => {
    await checkoutPage.firstName.fill(testData.checkoutInfo.firstName);
    await checkoutPage.lastName.fill(testData.checkoutInfo.lastName);
    await checkoutPage.continueButton.click();

    const error = checkoutPage.getCheckoutError();
    await expect(error).toBeVisible();
    await expect(error).toContainText('Error: Postal Code is required');
  });

  test('cancel checkout returns to cart page', async ({ page, checkoutPage }) => {
    await checkoutPage.cancelCheckout();

    await expect(page).toHaveURL(/\/cart\.html$/);
  });

  test('checkout order summary shows product and total', async ({ checkoutPage, page }) => {
    await checkoutPage.fillCustomerInfo(
      testData.checkoutInfo.firstName,
      testData.checkoutInfo.lastName,
      testData.checkoutInfo.postalCode
    );

    await expect(page).toHaveURL(/\/checkout-step-two\.html$/);

    const summaryNames = await checkoutPage.getSummaryProductNames();
    const summaryPrices = await checkoutPage.getSummaryProductPrices();
    const total = await checkoutPage.getOrderTotal();

    expect(summaryNames).toContain(testData.products.backpack);
    expect(summaryPrices.length).toBeGreaterThan(0);
    expect(total).toMatch(/\$\d+\.\d{2}/);
  });

  test('return home after successful checkout', async ({ page, checkoutPage }) => {
    await checkoutPage.fillCustomerInfo(
      testData.checkoutInfo.firstName,
      testData.checkoutInfo.lastName,
      testData.checkoutInfo.postalCode
    );

    await expect(page).toHaveURL(/\/checkout-step-two\.html$/);

    await checkoutPage.finishCheckout();
    await expect(page).toHaveURL(/\/checkout-complete\.html$/);
    await expect(checkoutPage.getOrderConfirmationMessage()).toContainText('Thank you for your order!');

    await checkoutPage.goBackHome();

    await expect(page).toHaveURL(/\/inventory\.html$/);
  });
});
