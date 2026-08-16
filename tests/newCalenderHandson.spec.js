const{test, expect}=require('@playwright/test');
test("New Calender", async({page})=>{
    const expectedList=["5","4","2026"];
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
await page.locator(".react-date-picker__inputGroup").click();
await page.locator(".react-calendar__navigation__label").click();
await page.locator(".react-calendar__navigation__label").click();
await page.getByRole("button", { name: "2026" }).click();
await page.getByRole("button", {name:"May"}).click();
await page.locator(".react-calendar__month-view__days__day").nth(7).click();

    const inputs =  page.locator('.react-date-picker__inputGroup__input')
 
    for(let i =0; i<expectedList.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(expectedList[i]);
 
    }

await page.pause();
});