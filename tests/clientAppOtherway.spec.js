const {test, expect}= require('@playwright/test');

test(' Redirecting to web page', async({browser})=>
{
   const context = await browser.newContext(); 
   const page = await context.newPage();
   const products = await page.locator(".card-body");
   const productName='ZARA COAT 3';
   const email="fizasmiley786@gmail.com";
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
       console.log(await page.title());

       await page.getByPlaceholder("email@example.com").fill(email);
       await page.getByPlaceholder("enter your passsword").fill("Arm64@123");
       await page.getByRole("button", { name: "Login" }).click();
       //console.log(await page.locator('.card-body b').first().textContent());
       //instead of using above code we can use waitforloadstate('networkidle') to wait for the page to load completely before accessing the elements
       await page.waitForLoadState('networkidle');
       //in some cases, the page may load but the elements may not be visible yet, so we can use waitForSelector to wait for the specific element to be visible before accessing it
       await page.locator('.card-body b').first().waitFor();
       const titles=await page.locator('.card-body b').allTextContents();  //this dose not wait automatically so need tos the above methods
       console.log(titles);
       //console.log(await page.locator('.card-body b').allTextContents());
     await page.locator(".card-body").filter({hasText:"ADIDAS ORIGINAL"}).getByRole("button", { name: "Add To Cart" }).click();
      //chain locator here it will search only in the specific product i.e n[0] product name
      
      await page.getByRole("listitem").getByRole("button", {name: "Cart"}).click();
      await page.locator("div li").first().waitFor();
      await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
    
      await page.getByRole("button", {name: "Checkout"}).click();
      await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:100});
      await page.getByRole("button", {name:"India"}).nth(1).click();
      await page.getByText("PLACE ORDER").click();
      await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
let orderId = (await page.locator(".em-spacer-1 .ng-star-inserted").textContent()).trim();
console.log("Created Order ID:", orderId);
orderId = orderId.replace(/\|/g, "").trim();

await page.getByRole("button", { name: "ORDERS" }).click();
//await page.locator("tbody").waitFor();
//await page.waitForLoadState("networkidle");

await expect(page.locator("tbody")).toContainText(orderId);
            
});