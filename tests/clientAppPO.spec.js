const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage.js');
const { DashboardPage } = require('../PageObjects/DashboardPage.js');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));

test(' Redirecting to web page', async({browser})=>
{
   const context = await browser.newContext(); 
   const page = await context.newPage();
   const products = await page.locator(".card-body");
   //const productName='ZARA COAT 3';
   //const username="fizasmiley786@gmail.com";
   //const password="Arm64@123";
   
       console.log(await page.title());
        const loginPage=new LoginPage(page);
        await loginPage.goTo();
        await loginPage.validLogin(dataset.username, dataset.password);
        const dashboardPage= new DashboardPage(page);
        await dashboardPage.checkoutProduct(dataset.productName);
       

       //console.log(await page.locator('.card-body b').first().textContent());
       //instead of using above code we can use waitforloadstate('networkidle') to wait for the page to load completely before accessing the elements
       await page.waitForLoadState('networkidle');
       //in some cases, the page may load but the elements may not be visible yet, so we can use waitForSelector to wait for the specific element to be visible before accessing it
       await dashboardPage.productTitles.first().waitFor();
       const titles=await dashboardPage.productTitles.allTextContents(); //this does not wait automatically so need to use the above methods
       console.log(titles);
        
       //console.log(await page.locator('.card-body b').allTextContents());
     //...await page.locator(".card-body").filter({hasText:"ADIDAS ORIGINAL"}).getByRole("button", { name: "Add To Cart" }).click();
      //chain locator here it will search only in the specific product i.e n[0] product name
      
      //..await page.getByRole("listitem").getByRole("button", {name: "Cart"}).click();
      await dashboardPage.firstCartItem.first().waitFor();
      await expect(dashboardPage.adidasOriginalText).toBeVisible();
    
      //..await page.getByRole("button", {name: "Checkout"}).click();
      //..await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:100});
     //.. await page.getByRole("button", {name:"India"}).nth(1).click();
      //await page.getByText("PLACE ORDER").click();
      await expect(dashboardPage.thankYouText).toBeVisible(); 
      await expect(dashboardPage.emSpacerLocator).toBeVisible();
let orderId = await dashboardPage.emSpacerLocator.textContent().trim();
console.log("Created Order ID:", orderId);
orderId = orderId.replace(/\|/g, "").trim();

//..await page.getByRole("button", { name: "ORDERS" }).click();
//await page.locator("tbody").waitFor();
//await page.waitForLoadState("networkidle");
await expect(page.locator("tbody").toContainText(orderId));
//..await expect(page.locator("tbody")).toContainText(orderId);           
});