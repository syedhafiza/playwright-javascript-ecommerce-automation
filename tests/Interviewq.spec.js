//https://medium.com/@pragyas215/most-asked-interview-questions-for-playwright-65b6dbbeb809
//Get all the links present in the footer for https://www.wikipedia.org/ and click on 3rd link
const {test, expect}= require('@playwright/test');
test('Wikipage footer elements and click on 3rd link', async ({page})=> {
await page.goto("https://www.wikipedia.org/");
const footerLinks=page.locator('.other-project-title');
console.log(await footerLinks.first().textContent());
console.log(await footerLinks.allTextContents());
await page.locator('.other-project-link').nth(2).click();
 await page.pause();
});