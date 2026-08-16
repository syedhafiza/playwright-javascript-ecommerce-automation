import {test,expect} from '@playwright/test';

test('Locators Example', async({page})=>
{
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  console.log(await page.title());
  await page.getByLabel("Check me out if you Love IceCreams!").check();
  await page.getByLabel("Employed").check(); //label tag must be there in code to use it
  await page.getByLabel("Gender").selectOption("Female"); //selectoption dropdown select karne ke liye use hota hai, isme value, label, index me se koi bhi use kar sakte hai
  //await page.getByLabel("Date of Birth").fill("01/01/1990");
  await page.getByPlaceholder("password").fill("abc123");  //placeholder = value should be there to use it
  await page.getByRole("button", {name:"Submit"}).click();  //role = button, name = text on button
  await page.getByText("Success! The Form has been submitted successfully!.").isVisible(); 
  await page.getByRole("link",{name:"shop"}).click(); //text = text on page
  await page.locator("app-card").filter({hasText: "Samsung Note 8" }).getByRole("button").click(); //locator = css selector, first() = first element, last() = last element, nth() = specific element
  //await page.pause();
});