//const { Page, Locator } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;

    this.cartHeading = page.locator('.title');
    this.cartItems = page.locator('.cart_item');
    this.productName = page.locator('.inventory_item_name');
    this.productPrice = page.locator('.inventory_item_price');
    this.removeButton = page.locator('button.cart_button');
    this.checkoutButton = page.locator('button.checkout_button');
    this.continueShoppingButton = page.locator('button#continue-shopping');
  }

  async getCartItemCount() {
    return this.cartItems.count();
  }

  async getProductNames() {
    return this.productName.allTextContents();
  }

  async getProductPrices() {
    return this.productPrice.allTextContents();
  }

  async removeProduct(productName) {
    const cartItem = this.cartItems.filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    await cartItem.locator('button.cart_button').click();
  }

  async isProductInCart(productName) {
    const productNames = await this.getProductNames();
    return productNames.some((name) => name.trim() === productName);
  }

  async openCheckout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}

module.exports = { CartPage };
