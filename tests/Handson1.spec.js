const {test, expect}= require('@playwright/test');

test(' Redirecting to web page', async({browser})=>
{
   const context =await browser.newContext(); 
   const page =await browser.newPage();
   const products = await page.locator(".card-body");
   const productName='ZARA COAT 3';
   const email="fizasmiley786@gmail.com";
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
       console.log(await page.title());

        await page.locator("#userEmail").fill(email);
       await page.locator(("[type='password']")).fill("Arm64@123");
       await page.locator("#login").click();
       //console.log(await page.locator('.card-body b').first().textContent());
       //instead of using above code we can use waitforloadstate('networkidle') to wait for the page to load completely before accessing the elements
       await page.waitForLoadState('networkidle');
       //in some cases, the page may load but the elements may not be visible yet, so we can use waitForSelector to wait for the specific element to be visible before accessing it
       await page.locator('.card-body b').first( ).waitFor();
       const titles=await page.locator('.card-body b').allTextContents();  //this dose not wait automatically so need tos the above methods
       console.log(titles);
       //console.log(await page.locator('.card-body b').allTextContents());
       const count= await products.count();
       for(let i=0;i<count;++i){
        if(await products.nth(i).locator("b").textContent()==productName)
      {
        await products.nth(i).locator("text=Add To Cart").click(); 
        break;  //when we dont know exact css path we can also use the text present

        } //chain locator here it will search only in the specific product i.e n[0] product name
      }
      await page.locator("[routerlink*='cart']").click();
      await page.locator("div li").first().waitFor();
      const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
      expect(bool).toBeTruthy(); // pseudo-class ("tagname:has-text('string')")
      await page.locator("text=Checkout").click();
      await page.locator("[placeholder*='Country']").pressSequentially("ind",{delay:100});
      const dropdown= await page.locator(".ta-results");
      await dropdown.waitFor();
      const optionscount=await dropdown.locator("button").count();
      for(let i=0;i<optionscount;++i)
      {
        const text=await page.locator(".ta-results button").nth(i).textContent();
        if(text==" India") //if we dont want to use space before india can use text.trim()
        {
          await page.locator(".ta-results button").nth(i).click();
          break;
        }
      }
   await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
   const orderID=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderID);
        
         await page.locator(".btn[routerlink*=myorders]").click();
         await page.locator("tbody").waitFor();
         const rows= await page.locator("tr.ng-star-inserted");
 for( let i=0;i<await rows.count();++i) //count dosent have autowait capabality so we use .waitFor() in above code
{
  const rowOrderId=await rows.nth(i).locator("[scope='row']").textContent();
if (orderID.includes(rowOrderId)){
  await rows.nth(i).locator("button").first().click();
  break;
  //await page.pause();
  const orderIdDetails=await page.locator(".col-text").textContent();
  expect(orderID.includes(orderIdDetails)).toBeTruthy();
  //await page.pause();
  const country=await page.locator(".text[css='2']").textContent();
  expect(country.trim()).toBe("India");
  await page.pause();
}

}
});

