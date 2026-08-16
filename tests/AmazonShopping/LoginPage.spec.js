const {test, expect} = require('@playwright/test');
test("Amazon Login Page", async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26useRedirectOnSuccess%3D1%26signIn%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0");
    console.log(await page.title());
    await page.locator( "#ap_email_login").fill("9490165118");
    await page.locator("#continue").click();
    await page.locator("#auth-login-via-otp-btn").click();
    await page.locator("#cvf-input-code").fill("170066");
    await page.locator("#cvf-submit-otp-btn").click();
         await page.pause();
    
});