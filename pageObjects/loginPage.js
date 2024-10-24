
const { expect } = require("@playwright/test");
const baseUrl = "https://www.holycode.com/";

export class LoginPage {
  async navigateToBasePage(page) {
    await page.goto(baseUrl);
  }
}

export const onLoginPage = new LoginPage();
