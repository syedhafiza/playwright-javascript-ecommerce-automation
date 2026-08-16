//const { Page, Locator } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('input.submit-button');
    this.cancelButton = page.locator('button.cart_cancel_link');
    this.finishButton = page.locator('button.cart_button');
    this.orderConfirmationMessage = page.locator('.complete-header');
    this.checkoutError = page.locator('[data-test="error"]');
    this.summaryProductNames = page.locator('.inventory_item_name');
    this.summaryProductPrices = page.locator('.inventory_item_price');
    this.orderTotal = page.locator('.summary_total_label');
    this.backHomeButton = page.locator('button#back-to-products');
  }

  getOrderConfirmationMessage() {
    return this.orderConfirmationMessage;
  }

  getCheckoutError() {
    return this.checkoutError;
  }

  getSummaryProductNames() {
    return this.summaryProductNames.allTextContents();
  }

  getSummaryProductPrices() {
    return this.summaryProductPrices.allTextContents();
  }

   async getOrderTotal() {
    return this.orderTotal.textContent();
  }

  async enterFirstName(firstName) {
    await this.firstName.fill(firstName);
  }

  async enterLastName(lastName) {
    await this.lastName.fill(lastName);
  }

  async enterPostalCode(postalCode) {
    await this.postalCode.fill(postalCode);
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async fillCustomerInfo(firstName, lastName, postalCode) {
    await this.enterFirstName(firstName);
    await this.enterLastName(lastName);
    await this.enterPostalCode(postalCode);
    await this.clickContinue();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async cancelCheckout() {
    await this.cancelButton.click();
  }

  async goBackHome() {
    await this.backHomeButton.click();
  }
}

module.exports = { CheckoutPage };
