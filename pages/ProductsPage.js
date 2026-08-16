const { Page, Locator } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;

    this.pageHeading = page.locator('.title');
    this.productItems = page.locator('.inventory_item');
    this.productNames = page.locator('.inventory_item_name');
    this.productPrices = page.locator('.inventory_item_price');
    this.addToCartButtons = page.locator('button.btn_inventory');
    this.shoppingCart = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('select.product_sort_container');
  }

  async getProductCount() {
    return this.productItems.count();
  }

  async getProductNames() {
    return this.productNames.allTextContents();
  }

  async getProductPrices() {
    return this.productPrices.allTextContents();
  }

  async sortProducts(sortOption) {
    await this.sortDropdown.selectOption(sortOption);
  }

  async getCartItemCount() {
    const cartCount = this.page.locator('.shopping_cart_badge');
    const countText = await cartCount.textContent();
    return countText ? Number(countText.trim()) : 0;
  }

  async openCart() {
    await this.shoppingCart.click();
  }

  async addProductToCart(productName) {
    const product = this.productItems.filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName })
    });

    await product.locator('button.btn_inventory').click();
  }
}

module.exports = { ProductsPage };
