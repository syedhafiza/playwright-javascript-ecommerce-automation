import {expect,test} from '@playwright/test';

test('W3schools Website Test', async({page})=>
{
    await page.goto("https://www.w3schools.com/default.asp");
    //await page.screenshot({path:"w3schools.png"}); //screenshot of the page
    //await page.locator("#tnb-google-search-input").screenshot({path:"search.png"}); //screenshot of the search input 
     expect (await page.screenshot()).toMatchSnapshot("w3schools.png"); // compare for visual testing it will compare each pixel
   const title= await page.title();
  await expect(title).toBe("W3Schools Online Web Tutorials");
  const searchInput= await page.locator("#tnb-google-search-input");
await expect(searchInput).toBeVisible();
await page.getByPlaceholder("Search...").fill("Playwright");
await page.getByRole('link', {name:"W3Schools Practice Coding Problems"}).click();
await page.pause();
});