class DashboardPage{

    constructor(page)
    {
        this.page = page;
        this.productTitles = page.locator('.card-body b');
        this.addToCartButton = page.locator(".card-body").filter({hasText:"ADIDAS ORIGINAL"}).getByRole("button", { name: "Add To Cart" });
        this.cartButton = page.getByRole("listitem").getByRole("button", {name: "Cart"});
        this.firstCartItem = page.locator("div li");
        this.checkoutButton = page.getByRole("button", {name: "Checkout"});
        this.countryPlaceholder = page.getByPlaceholder("Select Country");
        this.indiaButton = page.getByRole("button", {name:"India"});
        this.placeOrderButton = page.getByText("PLACE ORDER");
        this.ordersButton = page.getByRole("button", { name: "ORDERS" });
    }

    async checkoutProduct()
    {
        await this.productTitles.first().waitFor();
        await this.addToCartButton.click();
        await this.cartButton.click();
        await this.firstCartItem.first().waitFor();
        await this.checkoutButton.click();
        await this.countryPlaceholder.pressSequentially("ind", {delay: 100});
        await this.indiaButton.nth(1).click();
        await this.placeOrderButton.click();
        await this.ordersButton.click();
    }

}
module.exports={DashboardPage};