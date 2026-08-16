const { test, expect } = require('../fixtures/testFixtures');
const { testData } = require('../test-data/testData');

test('successful login with valid credentials', async ({ page, loginPage }) => {
  await page.goto(testData.urls.baseUrl);

  await loginPage.login(testData.validLogin.username, testData.validLogin.password);

  await expect(page).toHaveURL(/\/inventory\.html$/);
  await expect(page.locator('.title')).toHaveText('Products');
});

test('shows an error for invalid credentials', async ({ page, loginPage }) => {
  await page.goto(testData.urls.baseUrl);

  await loginPage.login(testData.invalidLogin.username, testData.invalidLogin.password);

  const error = await loginPage.getLoginError();
  await expect(error).toBeVisible();
  await expect(error).toContainText(/username and password do not match any user in this service/i);
});

test('shows an error for locked out user', async ({ page, loginPage }) => {
  await page.goto(testData.urls.baseUrl);

  await loginPage.login(testData.lockedOutUser.username, testData.lockedOutUser.password);

  const error = await loginPage.getLoginError();
  await expect(error).toBeVisible();
  await expect(error).toContainText(/sorry, this user has been locked out/i);
});
