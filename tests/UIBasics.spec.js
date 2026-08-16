const {test, expect}= require('@playwright/test');

//asynch ()=>  anonymous function with no name
/*test('First Playwright test',async function()
{
await
});*/
test('Browser context playwrite text', async({page})=>
{
  
  await page.goto("https://google.com");

});

test(' page playwrite test',async ({browser})=>
{
   const context= await browser.newContext();
   const page=await browser.newPage();
   const userName=page.locator('#username');
   const signIn=page.locator("#signInBtn");
   const cardTitles=page.locator(".card-body a")
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //get title ---assertion
  console.log(await page.title());
  //css xpath
  await userName.fill("fiza syed");
  await page.locator("[type='password']").fill("learning");
  await page.locator("#signInBtn").click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');
  // to clear the content in login fields we can use the below code
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("Learning@830$3mK2");
    await signIn.click();
     console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
     const allTitles=await cardTitles.allTextContents();
     console.log(allTitles);


  //await expect(page).toHaveTitle("Google")
});
test('UI controls', async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const userName=page.locator('#username');
const signIn=page.locator("#signInBtn");
const dropdown=page.locator("select.form-control");
await dropdown.selectOption("consult");
await page.locator(".radiotextsty").last().click();
await page.locator('#okayBtn').click();
console.log(await page.locator(".radiotextsty").last().isChecked());
 await expect(page.locator(".radiotextsty").last()).toBeChecked(); //assertion
 await page.locator("#terms").check();
 await expect(page.locator("#terms")).toBeChecked();
 await page.locator("#terms").uncheck();
await expect(page.locator("#terms")).not.toBeChecked();
expect(await page.locator("#terms").isChecked()).toBeFalsy();
await expect(page.locator("[href*='documents-request']")).toHaveAttribute("class", "blinkingText");
//await page.pause();
}); 

test('child window handling', async({browser})=>
{
  const context=await browser.newContext();
  const Page= await context.newPage();
   const userName=Page.locator('#username');
  await Page.goto("https://rahulshettyaca demy.com/loginpagePractise/");
  const documentLink=Page.locator("[href*='documents-request']");
  
  const [newPage]= await Promise.all(
    [//In JS we use arrays ans its syntax is[  ]
    context.waitForEvent('page'), 
    documentLink.click(),
    ])  
    const text= await newPage.locator(".red").textContent();
  
    const arrayText=text.split("@") //split the text with @ and store in array
    const domain=arrayText[1].split(" ")[0] //split the text with space and store in array and get the first element of array
    console.log(domain);
    await Page.locator("#username").fill(domain);
    //await Page.pause();
   console.log(await Page.locator("#username").inputValue()); //inputvalue


  
}); 


